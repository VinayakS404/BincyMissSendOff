"use strict";

var _cc = (function () {
  function t(t, i) {
    for (var s = 0; s < i.length; s++) {
      var e = i[s];
      ((e.enumerable = e.enumerable || !1),
        (e.configurable = !0),
        "value" in e && (e.writable = !0),
        Object.defineProperty(t, e.key, e));
    }
  }
  return function (i, s, e) {
    return (s && t(i.prototype, s), e && t(i, e), i);
  };
})();

function _ccc(t, i) {
  if (!(t instanceof i))
    throw new TypeError("Cannot call a class as a function");
}

!(function (t) {
  function i(t, i) {
    var s = Math.tan(0.017453 * Math.abs(t));
    return Math.ceil(i * s);
  }

  function s(t) {
    var i = void 0;
    return /^#([A-Fa-f0-9]{3}){1,2}$/.test(t)
      ? (3 === (i = t.substring(1).split("")).length &&
          (i = [i[0], i[0], i[1], i[1], i[2], i[2]]),
        {
          r: ((i = "0x" + i.join("")) >> 16) & 255,
          g: (i >> 8) & 255,
          b: 255 & i,
        })
      : { r: 0, g: 0, b: 0 };
  }

  var e = (function () {
    function t(i, e, h) {
      _ccc(this, t);
      this.o = h;
      this.r = s(i);
      this.d = this.grd();
      this.h = this.grs();
      this.s = Math.abs(this.gnfr(this.o.size));
      this.srpgq(e);
      this.vx = this.gnfr(this.o.speed.x) * this.grd();
      this.vy = this.gnfr(this.o.speed.y) * this.grd();
    }

    _cc(t, [
      {
        key: "srpgq",
        value: function (t) {
          var i = this.srpiq();
          return 3 === t
            ? ((this.x = i.x + i.halfWidth), void (this.y = i.y))
            : 2 === t
              ? ((this.x = i.x), void (this.y = i.y + i.halfHeight))
              : 1 === t
                ? ((this.x = i.x + i.halfWidth),
                  void (this.y = i.y + i.halfHeight))
                : ((this.x = i.x), void (this.y = i.y));
        },
      },
      {
        key: "srpiq",
        value: function () {
          var t = this.o.c.w / 2,
            i = this.o.c.h / 2;
          return {
            x: Math.random() * t,
            y: Math.random() * i,
            halfHeight: i,
            halfWidth: t,
          };
        },
      },
      {
        key: "gnfr",
        value: function (t) {
          if (t.min === t.max) return t.min;
          var i = t.max - t.min;
          return Math.random() * i + t.min;
        },
      },
      {
        key: "grd",
        value: function () {
          return Math.random() > 0.5 ? 1 : -1;
        },
      },
      {
        key: "grs",
        value: function () {
          return this.o.shapes[
            Math.floor(Math.random() * this.o.shapes.length)
          ];
        },
      },
      {
        key: "gr",
        value: function (t, i) {
          return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + i + ")";
        },
      },
      {
        key: "an",
        value: function (t) {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x > this.o.c.w || this.x < 0) this.vx *= -1;
          if (this.y > this.o.c.h || this.y < 0) this.vy *= -1;

          t.beginPath();
          var h = this.gr(this.r, this.o.opacity.center),
            a = this.gr(this.r, this.o.opacity.edge),
            n = this.s;
          var o = t.createRadialGradient(
            this.x,
            this.y,
            0.01,
            this.x,
            this.y,
            n,
          );
          o.addColorStop(0, h);
          o.addColorStop(1, a);
          t.fillStyle = o;
          t.arc(this.x, this.y, n, 0, 2 * Math.PI);
          t.fill();
        },
      },
    ]);
    return t;
  })();

  var h = (function () {
    function h(i) {
      var s = this;
      _ccc(this, h);
      this.c = document.createElement("canvas");
      this.x = this.c.getContext("2d");
      this.c.setAttribute("id", "finisher-canvas");
      this.gr(i.className).appendChild(this.c);

      window.addEventListener("resize", function () {
        s.resize();
      });

      this.init(i);
      window.requestAnimationFrame(this.an.bind(this));
    }

    _cc(h, [
      {
        key: "gr",
        value: function (t) {
          var i = document.getElementsByClassName(t || "finisher-header");
          if (!i.length) throw new Error("No .finisher-header element found");
          return i[0];
        },
      },
      {
        key: "resize",
        value: function () {
          var t = this.gr(this.o.className);
          this.o.c = { w: t.clientWidth, h: t.clientHeight };
          this.c.width = this.o.c.w;
          this.c.height = this.o.c.h;
        },
      },
      {
        key: "init",
        value: function (t) {
          this.o = t;
          this.ps = [];
          this.bc = s(this.o.colors.background);
          this.resize();
          this.cp();
        },
      },
      {
        key: "cp",
        value: function () {
          this.ps = [];
          var i =
            window.innerWidth < 600 && this.o.count > 5
              ? Math.round(this.o.count / 2)
              : this.o.count;
          for (var s = 0; s < i; s++) {
            var h = new e(
              this.o.colors.particles[s % this.o.colors.particles.length],
              s % 4,
              this.o,
            );
            this.ps.push(h);
          }
          this.o.ac = i;
        },
      },
      {
        key: "an",
        value: function () {
          window.requestAnimationFrame(this.an.bind(this));
          this.x.clearRect(0, 0, this.o.c.w, this.o.c.h);
          for (var i = 0; i < this.o.ac; i++) {
            this.ps[i].an(this.x);
          }
        },
      },
    ]);
    return h;
  })();

  t.FinisherHeader = h;
})(window);

new FinisherHeader({
  count: 8,
  size: { min: 450, max: 800, pulse: 0 },
  speed: { x: { min: 0.5, max: 1 }, y: { min: 0.5, max: 1 } },
  colors: {
    background: "#f2e9ff",
    particles: ["#ffb6b6", "#fffed6", "#dcffff", "#e6acff"],
  },
  blending: "lighten",
  opacity: { center: 0.6, edge: 0 },
  skew: 0,
  shapes: ["C"],
});
