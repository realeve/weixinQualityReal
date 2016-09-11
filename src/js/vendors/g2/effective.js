var Efect = function(t) {
	function e(i) {
		if (r[i]) return r[i].exports;
		var n = r[i] = {
			exports: {},
			id: i,
			loaded: !1
		};
		return t[i].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
	}
	var r = {};
	return e.m = t, e.c = r, e.p = "", e(0)
}([function(t, e, r) {
	"use strict";
	var i = r(321),
		n = r(16),
		a = n.Util,
		c = n.Canvas.G,
		s = c.Shape.superclass.constructor;
	a.mixin(s, [i]);
	var l, o = r(96),
		u = r(97),
		h = r(98),
		f = r(82),
		d = document.body.clientWidth,
		p = (document.body.clientHeight, new f({
			autoPlay: !0,
			autoDraw: !1,
			infinite: !0
		})),
		g = new o({
			id: "c1",
			height: d > 1440 ? 780 : 280
		}),
		y = g.get("halo1"),
		v = g.get("halo2"),
		m = g.get("decorateCircle1"),
		x = g.get("decorateCircle2"),
		C = m.getCircle(1, "minor"),
		_ = m.getCircle(3, "main"),
		O = m.getCircle(2, "main"),
		S = x.getCircle(1, "main"),
		w = x.getCircle(2, "minor"),
		M = x.getCircle(3, "main"),
		b = m.get("x"),
		k = m.get("y"),
		A = x.get("x"),
		P = x.get("y"),
		T = g.get("triangle1"),
		D = g.get("triangle3"),
		I = g.get("triangle4"),
		L = (T.get("tx"), T.get("ty"), D.get("tx"), D.get("ty"), I.get("tx"), I.get("ty"), g.get("ticksShape1"), g.get("ticksShape2"), g.get("ticksShape3"), v.get("x")),
		B = v.get("y"),
		R = v.getCircle(1, "main"),
		F = v.getCircle(2, "main"),
		G = v.getCircle(3, "main"),
		N = v.getCircle(4, "minor"),
		z = v.getCircle(5, "minor"),
		W = y.getCircle(1, "main"),
		Y = (y.getCircle(2, "main"), y.getCircle(3, "main"), y.getCircle(4, "main"), y.getCircle(5, "main"), W.attr("stroke"), _.attr("r")),
		X = S.attr("r"),
		E = 1,
		j = 1,
		nt = 2400;
	 m.on("mouseenter", function() {
			p.animate(_).append(p.getTime(), {
				r: 1.2 * Y,
				duration: 300
			}).append(p.getTime() + 300, {
				r: Y,
				duration: 300
			}), E *= -1
		}), x.on("mouseenter", function() {
			p.animate(S).append(p.getTime(), {
				r: .8 * X,
				duration: 300
			}).append(p.getTime() + 300, {
				r: X,
				duration: 300
			}), j *= 1.1
		}), p.timer = function() {
			//if (g.isInClinet() && !q.isInClinet())
			{
				var t = Math.floor(p.get("time") / 2e3) % 2 === 0 ? 1 : -1,
					e = g.easeOutQuad(p.get("time") % 2e3 / 2e3) * t;
				R.transform([
					["t", -L, -B],
					["r", .1],
					["t", L, B]
				]), F.transform([
					["t", -L, -B],
					["r", -.05],
					["t", L, B]
				]), G.transform([
					["t", -L, -B],
					["r", .2],
					["t", L, B]
				]), N.transform([
					["t", -L, -B],
					["r", -.1],
					["t", L, B]
				]), z.transform([
					["t", -L, -B],
					["r", .1],
					["t", L, B]
				]), g._updateTrianglePoints(T), g._updateTrianglePoints(D), g._updateTrianglePoints(I), C.transform([
					["t", -b, -k],
					["r", 6 * e * E],
					["t", b, k]
				]), O.transform([
					["t", -b, -k],
					["r", -2 * E],
					["t", b, k]
				]), w.transform([
					["t", -A, -P],
					["r", .3 * j],
					["t", A, P]
				]), M.transform([
					["t", -A, -P],
					["r", -.3 * j],
					["t", A, P]
				]), g.draw()
			}
		}, t.exports = {
		Screen1: r(96),
		Tween: r(82)
	}
}, function(t, e, r) {
	var i = r(237);
	t.exports = i
}, function(t, e, r) {
	var i = r(100);
	r(327), t.exports = i
}, function(t, e, r) {
	var i = {
		Matrix3: r(169),
		Vector2: r(170),
		Vector3: r(171)
	};
	t.exports = i
}, function(t, e, r) {
	var i = r(168);
	t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1);
	t.exports = i
}, function(t, e, r) {
	"use strict";

	function i(t) {
		t = t || 0, t = 100 * t;
		var e = 2;
		return t > 0 && .01 > t && (e = (1 / t + "").indexOf(".") + 1), t.toFixed(e) + "%"
	}

	function n(t) {
		for (var e in o) o.hasOwnProperty(e) && delete o[e];
		var r;
		r = c.isObject(t) ? t : -1 !== c.indexOf(l, t) ? s[t] : s["default"], c.mix(!0, o, a, r), o.setTheme = n
	}
	var a, c = r(1),
		s = r(319),
		l = ["default", "dark", "cheery"],
		o = {};
	a = {
		animate: !0,
		percentFormat: i,
		widthRatio: {
			column: .5,
			rose: .9999999,
			multiplePie: 1 / 1.3
		},
		scales: {
			"..x": {
				type: "linear",
				min: 0,
				nice: !1
			},
			"..y": {
				type: "linear",
				min: 0,
				nice: !1
			},
			"..level": {
				type: "linear",
				min: 0,
				nice: !1
			},
			"..value": {
				type: "linear",
				min: 0
			},
			"..count": {
				type: "linear",
				min: 0,
				alias: "\u6570\u91cf"
			},
			"..percent": {
				type: "linear",
				min: 0,
				max: 1,
				alias: "\u6bd4\u4f8b",
				formatter: i
			},
			"..proportion": {
				type: "linear",
				min: 0,
				max: 1,
				alias: "\u767e\u5206\u6bd4",
				formatter: i
			},
			"..density": {
				type: "linear",
				min: 0,
				alias: "\u5bc6\u5ea6\u6982\u7387"
			},
			"..long": {
				type: "linear",
				alias: "\u7ecf\u5ea6",
				nice: !1
			},
			"..lant": {
				type: "linear",
				alias: "\u7eac\u5ea6",
				nice: !1
			},
			"..pieX": {
				type: "cat",
				values: ["..pieX"],
				ticks: ["..pieX"]
			}
		},
		connectNulls: !1,
		heatmapColors: "rgb(125,125,248)-rgb(0,0,255)-rgb(0,255,0)-yellow-rgb(255,0,0)",
		heatmap: {
			radius: 50
		}
	}, n("default"), t.exports = o
}, function(t, e, r) {
	"use strict";
	var i = r(88),
		n = r(58),
		a = r(57),
		c = r(56),
		s = r(3);
	r(1), s.Vector2;
	t.exports = {
		line: function(t, e, r, n, a, c, s) {
			var l = i.box(t, e, r, n, a);
			if (!this.box(l.minX, l.maxX, l.minY, l.maxY, c, s)) return !1;
			var o = i.pointDistance(t, e, r, n, c, s);
			return isNaN(o) ? !1 : a / 2 >= o
		},
		polyline: function(t, e, r, i) {
			var n = this,
				a = t.length - 1;
			if (1 > a) return !1;
			for (var c = 0; a > c; c++) {
				var s = t[c][0],
					l = t[c][1],
					o = t[c + 1][0],
					u = t[c + 1][1];
				if (n.line(s, l, o, u, e, r, i)) return !0
			}
			return !1
		},
		cubicline: function(t, e, r, i, n, c, s, l, o, u, h) {
			return a.pointDistance(t, e, r, i, n, c, s, l, u, h) <= o / 2
		},
		quadraticline: function(t, e, r, i, a, c, s, l, o) {
			return n.pointDistance(t, e, r, i, a, c, l, o) <= s / 2
		},
		arcline: function(t, e, r, i, n, a, s, l, o) {
			return c.pointDistance(t, e, r, i, n, a, l, o) <= s / 2
		},
		rect: function(t, e, r, i, n, a) {
			return n >= t && t + r >= n && a >= e && e + i >= a
		},
		circle: function(t, e, r, i, n) {
			return Math.pow(i - t, 2) + Math.pow(n - e, 2) <= Math.pow(r, 2)
		},
		box: function(t, e, r, i, n, a) {
			return n >= t && e >= n && a >= r && i >= a
		}
	}
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(85),
		a = r(3),
		c = r(7),
		s = a.Vector3,
		l = function(t) {
			l.superclass.constructor.call(this, t)
		};
	i.extend(l, n), i.augment(l, {
		isShape: !0,
		createPath: function() {},
		drawInner: function() {
			var t = this,
				e = t.get("context");
			t.createPath(), t.hasFill() && e.fill(), t.hasStroke() && e.stroke()
		},
		isPointInPath: function(t, e) {
			return !1
		},
		isHit: function(t, e) {
			var r = this,
				i = r.get("canvas"),
				n = new s(t, e, 1);
			r.invert(n, i);
			var a = r.getBBox();
			if (a && c.box(a.minX, a.maxX, a.minY, a.maxY, n.x, n.y)) {
				var l = r.__attrs.clip;
				if (!l) return r.isPointInPath(n.x, n.y);
				if (l.inside(t, e)) return r.isPointInPath(n.x, n.y)
			}
			return !1
		},
		getBBox: function() {
			return this.get("box")
		}
	}), t.exports = l
}, function(t, e, r) {
	"use strict";
	var i = r(18),
		n = r(1),
		a = r(75),
		c = (r(3), r(137)),
		s = r(136),
		l = r(132),
		o = (i.G, {
			radius: "r",
			"font-size": "fontSize",
			"stroke-width": "lineWidth",
			"text-anchor": "textAlign",
			"font-weight": "fontWeight",
			"fill-opacity": "fillOpacity",
			"stroke-opacity": "strokeOpacity",
			"stroke-dasharray": "lineDash",
			horizontalAlign: "textAlign",
			verticalAlign: "textBaseline"
		});
	n.mix(n, {
		isPositiveNum: function(t) {
			var e = /^[0-9]*[1-9][0-9]*$/;
			return e.test(t)
		},
		adapAttrs: function(t) {
			n.each(t, function(e, r) {
				var i = n.adapAttr(r, e);
				i && (t[i.name] = i.value)
			})
		},
		adapAttr: function(t, e) {
			var r, i = o[t];
			return i && (r = {}, "font-size" === t ? e = parseInt(e) : "text-anchor" === t && (e = "start" === e ? "left" : "middle" === e ? "center" : "right"), r.name = i, r.value = e), r
		},
		merge: function(t, e) {
			if (e) {
				if (n.isObject(e)) {
					var r = {};
					return n.mix(r, t, e), r
				}
				return e
			}
			return t
		},
		getRatio: function() {
			return window.devicePixelRatio ? window.devicePixelRatio : 2
		},
		mixXY: function(t, e) {
			var r = {
				x: e.get("x"),
				y: e.get("y")
			};
			t.x ? t.x += r.x : t.x = r.x, t.y ? t.y += r.y : t.y = r.y
		},
		getWidth: function(t) {
			var e = n.getStyle(t, "width");
			return "auto" === e && (e = t.offsetWidth), parseFloat(e)
		},
		getHeight: function(t) {
			var e = n.getStyle(t, "height");
			return "auto" === e && (e = t.offsetHeight), parseFloat(e)
		},
		getOuterHeight: function(t) {
			var e = n.getHeight(t),
				r = parseFloat(n.getStyle(t, "borderTopWidth")) || 0,
				i = parseFloat(n.getStyle(t, "paddingTop")),
				a = parseFloat(n.getStyle(t, "paddingBottom")),
				c = parseFloat(n.getStyle(t, "borderBottomWidth")) || 0;
			return e + r + c + i + a
		},
		parsePathArray: function(t) {
			return c.parsePathArray(t)
		},
		path2Absolute: function(t) {
			return c.path2Absolute(t)
		},
		parsePathString: function(t) {
			return c.parsePathString(t)
		},
		animPath: function(t, e, r, i, a, c) {
			if (n.vml) return void after();
			if (r = r || 0, i = i || 400, !e) return void after();
			var s, l = t.attr("path"),
				o = n.parsePathString(e),
				u = l.slice(-1 * r);
			if (l.length > o.length) s = l.slice(0, o.length);
			else if (s = l.concat([]), r)
				for (var h = s.length; h < o.length; h++) s = s.concat(u);
			t.animate({
				path: o
			}, i, a, c)
		},
		animate: function(t, e, r, i, c) {
			function o() {
				var e, s, u, h, x, C = +new Date,
					_ = C - d,
					O = {},
					S = t.get("canvas");
				f = _ / r, f = 0 >= f ? 0 : f >= 1 ? 1 : f, f = l[i](f);
				for (x in p)
					if (y[x] != p[x])
						if ("path" === x) {
							s = n.parsePathString(p[x]), u = n.parsePathString(y[x]), O[x] = [];
							for (var w = 0; w < s.length; w++) {
								for (var M = s[w], b = u[w], k = [], A = 0; A < M.length; A++) n.isNumeric(M[A]) ? (h = a.interpolation(M[A], b[A]), k.push(h(f))) : k.push(M[A]);
								O[x].push(k)
							}
						} else h = a.interpolation(y[x], p[x]), O[x] = h(f);
				if (g) {
					var P = a.interpolation(v, g),
						e = P(f);
					t.setMatrix(e)
				}
				t.attr(O), S.draw(), n.requestAnimationFrame(function() {
					if (m === t.get("animCount") && t.get("animable"))
						if (f >= 0 && 1 > f) o();
						else if (f >= 1) return c && c()
				})
			}

			function u(e) {
				var r, i = {
					M: null,
					attrs: {}
				};
				for (r in e) "transform" === r ? i.M = s.transform(t.getMatrix(), e[r]) : "matrix" === r ? i.M = e[r] : i.attrs[r] = e[r];
				return i
			}

			function h(e) {
				var r, i = {};
				for (r in e) i[r] = t.attr(r);
				return i
			}
			var f, d = +new Date,
				u = u(e),
				p = u.attrs,
				g = u.M,
				y = h(p),
				v = t.getMatrix().clone(),
				m = t.get("animCount");
			i = i ? i : "linear", setTimeout(function() {
				m === t.get("animCount") && o()
			}, 6)
		}
	}), n.MatrixUtil = s, t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(32),
		n = r(1),
		a = r(2),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	n.extend(c, i), n.augment(c, {
		type: "summary",
		getStatDims: function() {
			var t = this,
				e = t.getDims(),
				r = e.length,
				i = [e[r - 1]];
			return i
		},
		getGroupCondition: function() {
			var t, e = this,
				r = e.getDims(),
				i = r.length,
				a = [];
			return i > 1 && (a = r.slice(0, i - 1), t = []), n.each(a, function(e) {
				0 !== e.indexOf("..") && t.push(e)
			}), t
		},
		groupFrames: function(t) {
			var e, r = this,
				i = r.getGroupCondition();
			return e = i ? a.group(t, i) : [t]
		},
		transformGroup: function(t, e) {
			var r = this,
				i = [];
			return n.each(t, function(t) {
				i.push(r.transform(t, e))
			}), i
		},
		execFrame: function(t) {
			var e = this,
				r = e.getStatDims()[0],
				i = e.groupFrames(t),
				n = e.transformGroup(i, r),
				c = a.merge.apply(null, n);
			return c
		},
		transform: function(t) {
			return t
		}
	}), t.exports = c
}, function(t, e, r) {
	var i = r(118),
		n = r(12),
		a = r(18);
	i.G = a.G, i.Components = r(123), i.Group = n.GroupBase, i.Shape = {}, i.Shape.Marker = n.Marker, i.Util = r(9), i.Matrix = r(3), t.exports = i
}, function(t, e, r) {
	t.exports = {
		GMixin: r(133),
		GroupBase: r(72),
		GroupMixin: r(134),
		Marker: r(135)
	}
}, function(t, e) {
	"use strict";
	var r = {
		prefix: "g",
		backupContext: function() {
			return document.createElement("canvas").getContext("2d")
		}(),
		debug: !1,
		warn: function(t) {}
	};
	t.exports = r
}, function(t, e, r) {
	var i = r(114);
	t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(54),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	i.extend(a, n), i.augment(a, {
		regressionType: "base",
		isRegression: !0,
		getRegressionString: function() {
			return ""
		},
		execSmooth: function(t) {
			return t
		}
	}), t.exports = a
}, function(t, e, r) {
	var i = {};
	i.Chart = r(276), i.Util = r(1), i.Global = r(6), i.Stat = r(31), i.Stat.map = r(163), i.Stat.tree = r(187), i.Stat.treemap = r(190), i.Scale = r(21), i.Shape = r(60), i.Frame = r(2), i.Theme = r(46), i.Canvas = r(11), i.Coord = r(73), i.Base = r(14), i.ColorCalculate = r(62), i.Plugin = {}, t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(14),
		a = r(11).Matrix,
		c = a.Matrix3,
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	s.ATTRS = {
		easing: "easeInOutQuad",
		duration: 1e3,
		callback: null,
		group: null,
		rect: null,
		before: null
	}, i.extend(s, n), i.augment(s, {
		start: function() {
			return this.startAnimate(), this
		},
		startAnimate: function() {
			var t = this.getTarget(),
				e = this.get("group");
			this.set("originMatrix", e.getMatrix().clone()), this.set("rect", this.getAnimRect()), this.set("target", t), this.beforeAnimate(t), this.execAnimate(t)
		},
		beforeAnimate: function(t) {
			var e = this.getInitMatrix(),
				r = this.getInitAttrs(),
				i = this.get("originMatrix");
			e = c.multiply(i, e), t.setMatrix(e), t.attr(r)
		},
		execAnimate: function(t) {
			var e, r = this,
				n = r.get("before"),
				a = r.get("callback"),
				s = r.get("duration"),
				l = r.get("easing"),
				o = r.getEndAttrs(),
				u = r.get("originMatrix"),
				h = r.getEndMatrix();
			h = c.multiply(u, h), e = i.mix({}, o, {
				matrix: h
			}), t.animate(e, s, l, function() {
				a && a(), r.afterAnimate(t)
			}), n && n()
		},
		afterAnimate: function(t) {
			var e = this.get("group"),
				r = e.get("canvas");
			return e == t ? !0 : (e.attr("clip", !1), void r.draw())
		},
		getTarget: function() {
			return this.get("group")
		},
		getInitMatrix: function() {
			return new c
		},
		getInitAttrs: function() {
			return {}
		},
		getEndMatrix: function() {
			return new c
		},
		getEndAttrs: function() {
			return {}
		},
		getAnimRect: function() {
			var t = this.get("rect"),
				e = this.get("group");
			return t || (t = e.getBBBox()), t
		},
		getCircleInfo: function() {
			var t = this.get("rect"),
				e = this.get("circle"),
				r = this.getRectCenter(t),
				i = Math.min(t.width, t.height) / 2;
			return e || (e = {
				center: r,
				r: i
			}), e
		},
		getRectCenter: function(t) {
			return {
				x: t.x + t.width / 2,
				y: t.y + t.height / 2
			}
		},
		stop: function() {
			return this.stopAnimate(), this
		},
		stopAnimate: function() {
			var t = this.getTarget();
			t && t.stopAnimate()
		}
	}), t.exports = s
}, function(t, e, r) {
	var i = r(115),
		n = r(65);
	i.G = r(23), i.Util = r(28), i.Group = n.GroupBase, t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(2),
		a = function(t) {
			i.mix(this, t), this._init()
		};
	a.prototype = {
		type: "base",
		names: null,
		scales: [],
		callback: null,
		scaleCache: null,
		_init: function() {
			for (var t = this, e = t.names || [this.type], r = t.scales, i = {}, n = 0; n < r.length; n++) {
				var a = r[n],
					c = e[n] || this.type + n;
				i[c] = a
			}
			t.scaleCache = i
		},
		_execCallback: function(t) {
			var e = this,
				r = e.callback,
				n = e.getNames(),
				a = [],
				c = {};
			i.each(n, function(r) {
				var i = e.getScale(r);
				a.push(i.invert(t[r]))
			});
			var s = r.apply(null, a);
			return i.isArray(s) || (s = [s]), i.each(n, function(t, e) {
				var r = s[e];
				i.isNull(r) || (c[t] = r)
			}), c
		},
		mapping: function(t) {
			var e = this;
			return t = t.toJSON(), i.each(t, function(r, n) {
				var a = e.getMappedRecord(r);
				t[n] = i.mix(r, a)
			}), t = new n(t)
		},
		getMappedRecord: function(t) {
			var e, r = this;
			return e = r.callback ? r._execCallback(t) : r.mappingRecord(t)
		},
		getNames: function() {
			var t = this.scaleCache,
				e = [];
			return i.each(t, function(t, r) {
				e.push(r)
			}), e
		},
		getDims: function() {
			var t = this.scales,
				e = [];
			return i.each(t, function(t) {
				e.push(t.dim)
			}), e
		},
		getScale: function(t) {
			return this.scaleCache[t]
		},
		getScales: function() {
			return this.scales
		},
		getMappingValue: function() {
			var t, e = this,
				r = e.getNames(),
				n = i.toArray(arguments);
			if (e.callback) {
				var a = [];
				i.each(n, function(t, i) {
					var n = r[i],
						c = e.getScale(n);
					if (c) {
						var s = c.invert(t);
						a.push(s)
					}
				}), t = e.callback.apply(e, a)
			} else t = e.getValue.apply(e, n);
			return t
		},
		getValue: function(t) {
			return t
		},
		mappingRecord: function(t) {
			return t
		}
	}, t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = function(t) {
			i.mix(this, t)
		};
	i.augment(n, {
		xScale: null,
		yScale: null,
		cfg: {},
		parsePoint: function(t, e) {
			var r = this,
				i = r.xScale,
				n = r.yScale,
				a = e[0],
				c = e[1];
			return i && (a = i.scale(a)), n && (c = n.scale(c)), t.convert({
				x: a,
				y: c
			})
		},
		paint: function() {}
	}), t.exports = n
}, function(t, e, r) {
	var i = r(1),
		n = r(43);
	n.Linear = r(42), n.linear = function(t) {
		return new n.Linear(t)
	}, n.Cat = r(30), n.cat = function(t) {
		return new n.Cat(t)
	}, n.Pow = r(182), n.pow = function(t) {
		return new n.Pow(t)
	}, n.Log = r(180), n.log = function(t) {
		return new n.Log(t)
	}, n.Identity = r(179), n.I = function(t) {
		return new n.Identity(t)
	}, n.Time = r(184), n.time = function(t) {
		return new n.Time(t)
	}, n.Condition = r(177), n.condition = function(t) {
		return new n.Condition(t)
	}, n.Group = r(178), n.group = function(t) {
		return new n.Group(t)
	}, n.NumberCat = r(181), n.numberCat = function(t) {
		return new n.NumberCat(t)
	}, n.TimeCat = r(183), n.timeCat = function(t) {
		return new n.TimeCat(t)
	}, n.I_TYPE = "identity", n.isCategory = function(t) {
		if ("cat" === t) return !0;
		var e = i.ucfirst(t);
		return !(!n[e] || !n[e].superclass || "cat" !== n[e].superclass.type)
	}, t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(207),
		a = {
			getRegressionString: function() {
				return this.regressionStr
			},
			getRegression: function() {
				return {
					equation: [],
					string: ""
				}
			},
			execSmooth: function(t, e) {
				var r = this,
					a = r.getRegression(t),
					c = a.equation;
				this.regressionStr = a.string;
				var s = [];
				return i.each(e, function(t) {
					var e = t,
						i = n.execFnction(r.regressionType, c, e);
					s.push([e, i])
				}), s
			}
		};
	t.exports = a
}, function(t, e, r) {
	var i = r(13),
		n = {
			Canvas: r(242),
			Group: r(86),
			Shape: r(8),
			Rect: r(257),
			Circle: r(246),
			Ellipse: r(248),
			Path: r(253),
			Text: r(258),
			Line: r(251),
			Image: r(250),
			Polygon: r(254),
			Polyline: r(255),
			Arc: r(245),
			Fan: r(249),
			Cubic: r(247),
			Quadratic: r(256),
			debug: function(t) {
				i.debug = t
			}
		};
	t.exports = n
}, function(t, e, r) {
	"use strict";

	function i(t) {
		return t.binWidth || t.bandWidth
	}
	var n = r(1),
		a = r(14),
		c = r(289),
		s = r(294),
		l = r(296),
		o = r(298),
		u = r(299),
		h = r(297),
		f = r(300),
		d = r(283),
		p = r(6),
		g = ["size", "shape", "color"],
		y = function(t) {
			y.superclass.constructor.call(this, t), this._init()
		};
	y.ATTRS = {
		chart: null,
		attrs: null,
		stats: null,
		scales: null,
		multipleActive: !1,
		shareTooltip: !0,
		shapeStyle: null,
		animate: p.animate
	}, n.extend(y, a), n.mixin(y, [f, h, u, l, o]), n.augment(y, {
		_init: function() {
			var t = this.get("chart"),
				e = t.get("plotContainer"),
				r = e.addGroup({
					zIndex: 10
				});
			this.set("container", r)
		},
		getBinStat: function(t) {
			var e = null;
			if (i(t)) e = t;
			else if (t.stat) {
				for (var r = t.stat; r && !i(r);) r = r.stat;
				r && i(r) && (e = r)
			}
			return e
		},
		_addLabels: function(t) {
			var e = this,
				r = e.get("container"),
				i = [],
				a = e.get("coord"),
				c = e.getAttr("label"),
				l = s.getLabelsClass(a.type, e.get("type")),
				o = c.cfg,
				u = r.addGroup(l, {
					labelsCfg: o,
					coord: a,
					geom: e,
					geomType: e.get("type")
				});
			n.each(t, function(t) {
				i = i.concat(t.toJSON())
			}), u.showLabels(i)
		},
		_draw: function(t) {
			var e = this,
				r = [];
			return t = e.framePreprocess(t), t = e.normalizeFrames(t), t = e.getShapePoints(t), t = e.execMapping(t), e.set("frames", t), n.each(t, function(t, i) {
				t.index = i, e.drawFrame(t), r.push(t)
			}), e.get("group").sort(), e._afterDraw(), r
		},
		_afterDraw: function() {
			var t = this,
				e = t.get("group"),
				r = t.get("shapeStyle");
			if (r) {
				var i = e.get("children");
				n.each(i, function(t) {
					t.attr(r)
				})
			}
		},
		getDefaultValue: function(t) {
			var e = this,
				r = e.get(t),
				i = e.getAttr(t);
			if (i) {
				var n = i.getScale(t);
				"identity" === n.type && (r = n.value)
			}
			return r
		},
		getAttr: function(t) {
			var e = this,
				r = e.get("attrs"),
				i = null;
			return n.each(r, function(e) {
				return e.type === t ? (i = e, !1) : void 0
			}), i
		},
		getLegendAttr: function() {
			var t = this,
				e = t.get("attrs"),
				r = [];
			return n.each(e, function(t) {
				-1 !== n.indexOf(g, t.type) && r.push(t)
			}), r
		},
		getXDim: function() {
			var t = this.getXScale();
			return t.dim
		},
		getYDim: function() {
			var t = this.getYScale();
			return t ? t.dim : "y"
		},
		getXScale: function() {
			return this.getAttr("position").getScale("x")
		},
		getYScale: function() {
			return this.getAttr("position").getScale("y")
		},
		getScales: function() {
			return this.get("scales")
		},
		getMinYPercent: function() {
			var t = this,
				e = t.getYScale(),
				r = 0;
			return e && void 0 !== e.min && e.min < 0 && (r = e.scale(0)), r
		},
		getPositionScales: function() {
			return this.getAttr("position").getScales()
		},
		isShareTooltip: function() {
			return this.getYScale() ? this.get("shareTooltip") : !1
		},
		isInCircle: function() {
			var t = this,
				e = t.get("coord"),
				r = e.isPolar;
			return r
		},
		getGroup: function(t) {
			var e = this,
				r = e.get("container"),
				i = r.get("children"),
				a = null;
			return 1 === i.length ? a = i[0] : n.each(i, function(e) {
				return e.get("coord") === t ? (a = e, !1) : void 0
			}), a
		},
		paint: function(t, e, r) {
			function i() {
				var i = a._draw(e);
				r && r(t, i), a.getAttr("label") && a._addLabels(i)
			}
			var a = this;
			if ("map" === t.type) {
				var s = a.get("scales"),
					l = s["..long"],
					o = s["..lant"];
				t.set("originMin", [l.min, o.min]), t.set("originMax", [l.max, o.max])
			}
			a.set("coord", t);
			var u = a.get("container"),
				h = u.addGroup(d, {
					geom: a,
					coord: t,
					multipleActive: a.isShareTooltip(),
					capture: !1
				});
			h.setMatrix(t.get("matrix").clone()), a.set("group", h);
			var f = a.get("chart"),
				p = f.get("animate");
			if (p = n.isNull(p) ? a.get("animate") : p) {
				var g = c.getDefault({
					geom: a,
					fn: function() {
						i()
					}
				});
				g.start()
			} else i();
			return a
		},
		destroy: function() {
			var t = this.get("container");
			t.clear(), t.remove(), this._attrs = {}, this.events = {}
		}
	}), t.exports = y
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = {
			defaultShapeType: null,
			getShape: function(t) {
				var e = this,
					r = e[t] || e[e.defaultShapeType];
				if (r) return r;
				throw new Error("not support this shape")
			},
			getShapePoints: function(t, e) {
				var r = this.getShape(e);
				return r.getShapePoints(t)
			},
			getShapeCfg: function(t, e) {
				var r = this.getShape(t);
				return r.getShapeCfg(e)
			},
			getMarkerCfg: function(t, e) {
				var r = this.getShape(t);
				return r.getMarkerCfg(e)
			},
			getActiveCfg: function(t, e) {
				var r = this.getShape(t);
				return r.getActiveCfg(e)
			},
			getSelectedCfg: function(t, e) {
				var r = this.getShape(t);
				return r.getActiveCfg(e)
			}
		},
		a = {
			getShapePoints: function(t) {
				return t
			},
			getShapeCfg: function() {
				return {}
			},
			getMarkerCfg: function() {
				return null
			},
			getActiveCfg: function() {
				return null
			},
			getSelectedCfg: function() {
				return null
			}
		},
		c = {};
	c.registGeom = function(t, e) {
		var r = i.ucfirst(t),
			a = i.mix({}, n, e);
		return c[r] = a, a
	}, c.registShape = function(t, e, r) {
		var n = i.ucfirst(t),
			s = c[n],
			l = i.mix({}, a, r);
		return s[e] = l, l
	}, t.exports = c
}, function(t, e, r) {
	"use strict";

	function i(t, e, r) {
		if (!t.length) return "";
		var i = "",
			n = "";
		t.length <= 2 && (r = !1);
		for (var a = 0, c = t.length; c > a; a++) {
			var s = t[a];
			n = 0 === a ? r ? "M{x} {y} R" : "M{x} {y}" : r ? " {x} {y}" : "L{x} {y}", i += l.substitute(n, s)
		}
		return e && (i += "Z"), i
	}

	function n(t, e) {
		var r = t.getCenter(),
			i = Math.sqrt(Math.pow(e.x - r.x, 2) + Math.pow(e.y - r.y, 2));
		return i
	}

	function a(t, e) {
		for (var r = t.length, i = [t[0]], n = 1; r > n; n += 2) {
			var a = e.convertPoint({
				x: t[n],
				y: t[n + 1]
			});
			i.push(a.x, a.y)
		}
		return i
	}

	function c(t, e, r) {
		var i = r.getRadius(),
			a = r.get("inner") || 0,
			c = a * i,
			s = r.isTransposed,
			l = r.get("startAngle"),
			o = r.get("endAngle"),
			u = {
				x: t[1],
				y: t[2]
			},
			h = {
				x: e[1],
				y: e[2]
			},
			f = [];
		c = c || 0;
		var d = s ? "y" : "x",
			p = Math.abs(h[d] - u[d]) * (o - l),
			g = h[d] >= u[d] ? 1 : 0,
			y = p > Math.PI ? 1 : 0,
			v = r.convertPoint(h),
			m = n(r, v);
		if (p === 2 * Math.PI) {
			if (m >= .5) {
				var x = {
						x: (h.x + u.x) / 2,
						y: (h.y + u.y) / 2
					},
					C = r.convertPoint(x);
				f.push(["A", m, m, 0, y, g, C.x, C.y]), f.push(["A", m, m, 0, y, g, v.x, v.y])
			}
		} else f.push(["A", m, m, 0, y, g, v.x, v.y]);
		return f
	}

	function s(t) {
		l.each(t, function(e, r) {
			var i = e;
			if ("a" === i[0].toLowerCase()) {
				var n = t[r - 1],
					a = t[r + 1];
				a && "a" === a[0].toLowerCase() ? n && "l" === n[0].toLowerCase() && (n[0] = "M") : n && "a" === n[0].toLowerCase() && a && "l" === a[0].toLowerCase() && (a[0] = "M")
			}
		})
	}
	var l = r(1),
		o = r(185),
		u = {
			getLinePath: function(t, e, r) {
				return i(t, e, r)
			},
			getSplinePath: function(t, e, r) {
				var i = [],
					n = t[0],
					a = null;
				l.each(t, function(t) {
					a && a.x === t.x && a.y === t.y || (i.push(t.x), i.push(t.y), a = t)
				});
				var c = r.get("start"),
					s = r.get("end"),
					u = [
						[c.x, s.y],
						[s.x, c.y]
					],
					h = o.catmullRom2bezier(i, e, u);
				return "M" + n.x + " " + n.y + l.parsePathArray(h)
			},
			splitPoints: function(t, e) {
				if (!t.length) return [];
				var r = [],
					i = [];
				return e = e || "y", l.each(t, function(t) {
					var n = t[e];
					l.isArray(n) && l.isNull(n[0]) || l.isNull(n) ? (r.push(i), i = []) : i.push(t)
				}), r.push(i), r
			},
			getPointRadius: function(t, e) {
				var r = n(t, e);
				return r
			},
			getPointAngle: function(t, e) {
				var r = t.getCenter(),
					i = Math.atan2(e.y - r.y, e.x - r.x);
				return i
			},
			convertNormalPath: function(t, e) {
				var r = [];
				return l.each(t, function(t) {
					var i = t[0];
					switch (i.toLowerCase()) {
						case "m":
						case "l":
						case "c":
							r.push(a(t, e));
							break;
						case "z":
						default:
							r.push(t)
					}
				}), r
			},
			convertPolarPath: function(t, e) {
				var r = [];
				return l.each(t, function(i, n) {
					var s = i[0];
					switch (s.toLowerCase()) {
						case "m":
						case "c":
							r.push(a(i, e));
							break;
						case "l":
							var l = t[n - 1],
								o = i,
								u = e.isTransposed,
								h = u ? l[1] === o[1] : l[2] === o[2];
							h ? r = r.concat(c(l, o, e)) : r.push(a(i, e));
							break;
						case "z":
						default:
							r.push(i)
					}
				}), s(r), r
			}
		};
	t.exports = u
}, function(t, e, r) {
	t.exports = r(328)
}, function(t, e, r) {
	"use strict";
	var i = r(23),
		n = r(1),
		a = i.Shape.superclass.constructor,
		c = document.createElement("table"),
		s = document.createElement("tr"),
		l = /^\s*<(\w+|!)[^>]*>/,
		o = {
			tr: document.createElement("tbody"),
			tbody: c,
			thead: c,
			tfoot: c,
			td: s,
			th: s,
			"*": document.createElement("div")
		};
	n.mix(n, {
		getBoundingClientRect: function(t) {
			var e = t.getBoundingClientRect(),
				r = document.documentElement.clientTop,
				i = document.documentElement.clientLeft;
			return {
				top: e.top - r,
				bottom: e.bottom - r,
				left: e.left - i,
				right: e.right - i
			}
		},
		upperFirst: function(t) {
			return t.replace(/(\w)/, function(t) {
				return t.toUpperCase()
			})
		},
		getStyle: function(t, e) {
			return window.getComputedStyle ? window.getComputedStyle(t, null)[e] : t.currentStyle[e]
		},
		modiCSS: function(t, e) {
			var r;
			for (r in e) t.style[r] = e[r];
			return t
		},
		getRatio: function() {
			return window.devicePixelRatio ? window.devicePixelRatio : 1
		},
		initClassCfgs: function(t) {
			if (!t.__cfg && t !== a) {
				var e = t.superclass.constructor;
				e && !e.__cfg && n.initClassCfgs(e), t.__cfg = {}, n.mix(!0, t.__cfg, e.__cfg), n.mix(!0, t.__cfg, t.CFG)
			}
		},
		mixin: function(t, e) {
			var r = t.CFG ? "CFG" : "ATTRS";
			if (t && e) {
				t._mixins = e, t[r] = t[r] || {};
				var i = {};
				n.each(e, function(e) {
					n.augment(t, e);
					var a = e[r];
					a && n.mix(i, a)
				}), t[r] = n.mix(i, t[r])
			}
		},
		createDom: function(t) {
			var e = l.test(t) && RegExp.$1;
			e in o || (e = "*");
			var r = o[e];
			return t = t.replace(/(^\s*)|(\s*$)/g, ""), r.innerHTML = "" + t, r.childNodes[0]
		}
	}), t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(31),
		n = r(1),
		a = r(2),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	n.extend(c, i), n.augment(c, {
		type: "map",
		mapData: {},
		initDims: function(t) {
			var e = t[0],
				r = t.slice(1);
			t = r.concat([e]), t.unshift("..lant"), t.unshift("..long"), this.dims = t
		},
		getStatDims: function() {
			var t = this.getDims(),
				e = t.filter(function(t) {
					return t.indexOf("..") > -1
				});
			return e
		},
		execFrame: function(t) {
			var e = this,
				r = e.getStatDims(),
				i = [];
			return t = t.toJSON(), n.each(t, function(t) {
				i.push(e.addGeoInfo(t, r))
			}), new a(i)
		},
		addGeoInfo: function(t) {
			return t
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(43),
		n = r(1),
		a = r(36),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	n.extend(c, i), n.augment(c, {
		type: "cat",
		tickCount: null,
		isCategory: !0,
		init: function() {
			var t = this,
				e = t.values,
				r = t.tickCount;
			if (n.each(e, function(t, r) {
					e[r] = t.toString()
				}), !t.ticks) {
				var i = e;
				if (r) {
					var c = a.Category.caculate({
						maxCount: r,
						data: e
					});
					i = c.ticks
				}
				this.ticks = i
			}
		},
		getText: function(t) {
			return this.values.indexOf(t) > -1 ? t = t : n.isNumber(t) && (t = this.values[Math.round(t)]), c.superclass.getText.call(this, t)
		},
		translate: function(t) {
			var e = this.values.indexOf(t);
			return -1 === e && n.isNumber(t) ? e = t : -1 === e && (e = NaN), e
		},
		scale: function(t) {
			var e, r = this.rangeMin(),
				i = this.rangeMax();
			return (n.isString(t) || -1 !== this.values.indexOf(t)) && (t = this.translate(t)), e = this.values.length > 1 ? t / (this.values.length - 1) : t, r + e * (i - r)
		},
		invert: function(t) {
			if (n.isString(t)) return t;
			var e = this.rangeMin(),
				r = this.rangeMax();
			e > t && (t = e), t > r && (t = r);
			var i = (t - e) / (r - e),
				a = Math.round(i * (this.values.length - 1)) % this.values.length;
			return a = a || 0, this.values[a]
		}
	}), t.exports = c
}, function(t, e, r) {
	var i = r(32);
	i.summary = r(218), i.bin = r(194), i.smooth = r(208), i.density = r(198), i.region = r(201);
	var n = r(2);
	n.execStat = function(t, e) {
		e.init();
		var r = e.exec([t]);
		return n.merge.apply(null, r)
	}, t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = function(t) {
			i.mix(this, t)
		};
	i.augment(n, {
		isStat: !0,
		initDims: function() {},
		getDims: function() {
			return this.dims
		},
		getStatDims: function() {
			return this.getDims()
		},
		init: function() {
			var t = this,
				e = t.dims;
			if (i.isString(e) && (e = e.split("*"), t.dims = e), e && e.isStat) {
				var r = e;
				r.init(), t.stat = r, e = r.dims, t.dims = e
			}
			e || (e = [], t.dims = e), t.initDims(e)
		},
		preExecute: function() {},
		exec: function(t) {
			var e = this;
			e.preExecute(t);
			var r = [];
			return this.stat && (t = this.stat.exec(t)), i.each(t, function(n) {
				var a = e.execFrame(n, t);
				i.isArray(a) ? r = r.concat(a) : r.push(a)
			}), r
		},
		execFrame: function(t) {
			return t
		}
	}), t.exports = n
}, function(t, e, r) {
	function i(t, e, r, i) {
		c(t, a(e, r, i))
	}

	function n(t, e, r) {
		var i = r / Math.sin(o);
		return t.setLength(i / 2), e.sub(t), e
	}

	function a(t, e, r) {
		var i = new l(1, 0).angleTo(t),
			n = i - o,
			a = i + o,
			c = 6 + 3 * r;
		return [{
			x: e.x - c * Math.cos(n),
			y: e.y - c * Math.sin(n)
		}, e, {
			x: e.x - c * Math.cos(a),
			y: e.y - c * Math.sin(a)
		}]
	}

	function c(t, e) {
		t.moveTo(e[0].x, e[0].y), t.lineTo(e[1].x, e[1].y), t.lineTo(e[2].x, e[2].y)
	}
	var s = r(3),
		l = (r(4), r(1), s.Vector2),
		o = Math.PI / 6;
	t.exports = {
		makeArrow: i,
		getEndPoint: n
	}
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = function(t) {
			i.mix(this, t)
		};
	i.augment(n, {
		xValue: null,
		yValue: null,
		region: null,
		frame: null
	}), t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(2),
		a = 0,
		c = function(t) {
			i.mix(this, t)
		};
	i.augment(c, {
		xDim: null,
		yDim: null,
		adjustNames: ["x", "y"],
		isAdjust: function(t) {
			return i.inArray(this.adjustNames, t)
		},
		processAdjust: function(t) {
			var e = this,
				r = n.merge.apply(null, t);
			return e.adjFrames = t, e.mergeFrame = r, t = e.adjustFrames(t, r), e.adjFrames = null, e.mergeFrame = null, t
		},
		_getDimValues: function(t) {
			var e = this,
				r = {},
				c = [];
			if (e.xDim && e.isAdjust("x") && c.push(e.xDim), e.yDim && e.isAdjust("y") && c.push(e.yDim), i.each(c, function(e) {
					var i = n.values(t, e);
					i.sort(function(t, e) {
						return t - e
					}), r[e] = i
				}), !e.yDim && e.isAdjust("y")) {
				var s = "y",
					l = [a, 1];
				r[s] = l
			}
			return r
		},
		adjustFrames: function(t, e) {
			var r = this,
				a = [],
				c = r._getDimValues(e);
			return i.each(t, function(e, s) {
				var l = e.toJSON();
				i.each(c, function(e, i) {
					r.adjustDim(i, e, l, t.length, s)
				}), a.push(new n(l))
			}), a
		},
		adjustDim: function(t, e, r) {
			return new n(r)
		},
		getAdjustRange: function(t, e, r) {
			var n, a, c = this,
				s = i.indexOf(r, e),
				l = r.length;
			return !c.yDim && c.isAdjust("y") ? (n = 0, a = 1) : l > 1 ? (n = 0 === s ? r[0] : r[s - 1], a = s === l - 1 ? r[l - 1] : r[s + 1], 0 !== s ? n += (e - n) / 2 : n -= (a - e) / 2, s !== l - 1 ? a -= (a - e) / 2 : a += (e - r[l - 2]) / 2) : (n = 0 === e ? 0 : e - .5, a = 0 === e ? 1 : e + .5), {
				pre: n,
				next: a
			}
		},
		groupData: function(t, e) {
			var r = {};
			return i.each(t, function(t) {
				var i = t[e];
				void 0 === i && (i = t[e] = a), r[i] || (r[i] = []), r[i].push(t)
			}), r
		}
	}), t.exports = c
}, function(t, e, r) {
	var i = r(113);
	t.exports = i
}, function(t, e, r) {
	t.exports = r(138)
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(3),
		a = n.Matrix3,
		c = n.Vector3,
		s = function(t) {
			this._attrs = {}, this._attrs.matrix = new a, i.mix(this._attrs, s.ATTRS, t), this.init()
		};
	i.augment(s, {
		isTransposed: !1,
		set: function(t, e) {
			return this._attrs[t] = e, this
		},
		get: function(t) {
			return this._attrs[t]
		},
		getDim: function(t) {
			switch (t) {
				case "x":
					return this.get("x");
				case "y":
					return this.get("y");
				case "z":
					return this.get("z");
				default:
					console.error("\u6ca1\u6709" + t + "\u4ee3\u8868\u7684\u7ef4\u5ea6!")
			}
		},
		init: function() {
			var t = this,
				e = t.get("start"),
				r = t.get("end"),
				i = {
					x: (e.x + r.x) / 2,
					y: (e.y + r.y) / 2
				};
			t.set("center", i), t.set("width", Math.abs(r.x - e.x)), t.set("height", Math.abs(r.y - e.y))
		},
		getWidth: function() {
			return this.get("width")
		},
		getHeight: function() {
			return this.get("height")
		},
		convertDim: function(t, e) {
			var r = this;
			return e = r.get(e), e.start + t * (e.end - e.start)
		},
		invertDim: function(t, e) {
			var r = this;
			return e = r.get(e), (t - e.start) / (e.end - e.start)
		},
		rotate: function(t) {
			var e = this,
				r = e.get("matrix"),
				i = e.get("center");
			return r.translate(-i.x, -i.y), r.rotate(t), r.translate(i.x, i.y), this
		},
		reflect: function(t) {
			var e = this;
			switch (t) {
				case "x":
					e._swapDim("x");
					break;
				case "y":
					e._swapDim("y");
					break;
				default:
					e._swapDim("y")
			}
			return this
		},
		_swapDim: function(t) {
			var e = this,
				t = e.get(t);
			if (t) {
				var r = t.start;
				t.start = t.end, t.end = r
			}
		},
		scale: function(t, e) {
			var r = this,
				i = r.get("matrix"),
				n = r.get("center");
			return i.translate(-n.x, -n.y), i.scale(t, e), i.translate(n.x, n.y), this
		},
		translate: function(t, e) {
			var r = this,
				i = r.get("matrix");
			return i.translate(t, e), this
		},
		transpose: function() {
			this.isTransposed = !this.isTransposed
		},
		convertPoint: function(t) {
			return t
		},
		invertPoint: function(t) {
			return t
		},
		convert: function(t) {
			var e = this,
				t = this.convertPoint(t),
				r = e.trans(t.x, t.y, 1);
			return {
				x: r.x,
				y: r.y
			}
		},
		invert: function(t) {
			var e = this,
				r = e.reverse(t.x, t.y, 1);
			return this.invertPoint({
				x: r.x,
				y: r.y
			})
		},
		trans: function(t, e, r) {
			r = r || 0;
			var i = this,
				n = i.get("matrix"),
				a = new c(t, e, r);
			return a.applyMatrix(n), a
		},
		reverse: function(t, e, r) {
			r = r || 0;
			var i = this,
				n = i.get("matrix"),
				a = n.getInverse(),
				s = new c(t, e, r);
			return s.applyMatrix(a), s
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(38),
		a = r(3),
		c = r(4),
		s = a.Vector2,
		l = a.Matrix3,
		o = a.Vector3,
		u = function(t) {
			var e = {};
			i.mix(e, u.ATTRS, t), u.superclass.constructor.call(this, e), this._init()
		};
	u.ATTRS = {
		startAngle: -Math.PI / 2,
		endAngle: 3 * Math.PI / 2,
		inner: .5
	}, i.extend(u, n), i.augment(u, {
		type: "plus",
		isPolar: !0,
		_init: function() {
			var t, e, r = this,
				i = r.get("radius"),
				n = r.get("inner"),
				a = r.get("startAngle"),
				c = r.get("endAngle"),
				s = r.get("center"),
				l = r.getOneBox(),
				o = l.maxX - l.minX,
				u = l.maxY - l.minY,
				h = Math.abs(l.minX) / o,
				f = Math.abs(l.minY) / u,
				d = r.getWidth(),
				p = r.getHeight();
			p / u > d / o ? (t = d / o, e = {
				x: s.x - (.5 - h) * d,
				y: s.y - (.5 - f) * t * u
			}) : (t = p / u, e = {
				x: s.x - (.5 - h) * t * o,
				y: s.y - (.5 - f) * p
			}), i ? 1 >= (i > 0) ? i = t * i : t >= (i > 0) || (i = t) : i = t;
			var g = {
					start: a,
					end: c
				},
				y = {
					start: n * i,
					end: i
				};
			r.set("x", g), r.set("y", y), r.set("radius", i), r.set("circleCentre", e)
		},
		getCenter: function() {
			return this.get("circleCentre")
		},
		getOneBox: function() {
			for (var t = this, e = t.get("startAngle"), r = t.get("endAngle"), i = [0, Math.cos(e), Math.cos(r)], n = [0, Math.sin(e), Math.sin(r)], a = 5 * -Math.PI / 2; a < 3 * Math.PI / 2; a += Math.PI / 2) a >= e && r >= a && (i.push(Math.cos(a)), n.push(Math.sin(a)));
			return {
				minX: Math.min.apply(Math, i),
				maxX: Math.max.apply(Math, i),
				minY: Math.min.apply(Math, n),
				maxY: Math.max.apply(Math, n)
			}
		},
		getRadius: function() {
			return this.get("radius")
		},
		convertPoint: function(t) {
			var e = this,
				r = e.getCenter(),
				i = e.isTransposed ? t.y : t.x,
				n = e.isTransposed ? t.x : t.y;
			return i = e.convertDim(i, "x"), n = e.convertDim(n, "y"), {
				x: r.x + Math.cos(i) * n,
				y: r.y + Math.sin(i) * n
			}
		},
		invertPoint: function(t) {
			var e = this,
				r = e.getCenter(),
				i = new s(t.x - r.x, t.y - r.y),
				n = e.get("x"),
				a = new l;
			a.rotate(n.start);
			var u = new o(1, 0, 0);
			u.applyMatrix(a), u = new s(u.x, u.y);
			var h = u.angleTo(i, n.end < n.start);
			c.equal(h, 2 * Math.PI) && (h = 0);
			var f = i.length(),
				d = h / (n.end - n.start);
			d = n.end - n.start > 0 ? d : -d;
			var p = e.invertDim(f, "y"),
				t = {};
			return t.x = e.isTransposed ? p : d, t.y = e.isTransposed ? d : p, t
		}
	}), t.exports = u
}, function(t, e, r) {
	var i = r(149);
	t.exports = i
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		if (a.isNumeric(t) && a.isNumeric(e)) return c.number(t, e);
		if (a.isString(t) && a.isString(e)) {
			var r = new l(t),
				i = new l(e);
			if (r.getType() && i.getType()) return s.color(r, i)
		}
	}

	function n(t, e) {
		if (a.isNumeric(t) && a.isNumeric(e)) return c.unNumber(t, e);
		if (a.isString(t) && a.isString(e)) {
			var r = new l(t),
				i = new l(e);
			if (r.getType() && i.getType()) return s.unColor(r, i)
		}
	}
	var a = r(1),
		c = r(157),
		s = r(154),
		l = r(37);
	t.exports = {
		singular: i,
		unSingular: n
	}
}, function(t, e, r) {
	"use strict";
	var i = r(43),
		n = r(1),
		a = r(36),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	n.extend(c, i), n.augment(c, {
		type: "linear",
		isLinear: !0,
		min: null,
		max: null,
		nice: !1,
		tickCount: 5,
		init: function() {
			var t = this;
			if (t.ticks) {
				var e = t.ticks,
					r = t.translate(e[0]),
					i = t.translate(e[e.length - 1]);
				(n.isNull(t.min) || t.min > r) && (t.min = r), (n.isNull(t.max) || t.max < i) && (t.max = i)
			} else t.min = t.translate(t.min), t.max = t.translate(t.max), t.initTicks()
		},
		calculateTicks: function() {
			var t = this,
				e = t.min,
				r = t.max,
				i = t.tickCount,
				n = a.caculate({
					min: e,
					max: r,
					minCount: i,
					maxCount: i
				});
			return n.ticks
		},
		initTicks: function() {
			var t = this,
				e = t.calculateTicks();
			if (t.nice) t.ticks = e, t.min = e[0], t.max = e[e.length - 1];
			else {
				var r = [];
				n.each(e, function(e) {
					e >= t.min && e <= t.max && r.push(e)
				}), t.ticks = r
			}
		},
		scale: function(t) {
			if (null === t || void 0 === t) return NaN;
			var e = this.max,
				r = this.min;
			if (e === r) return 0;
			var i = (t - r) / (e - r),
				n = this.rangeMin(),
				a = this.rangeMax();
			return n + i * (a - n)
		},
		invert: function(t) {
			var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
			return this.min + e * (this.max - this.min)
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = function(t) {
			i.mix(this, t), this.init()
		};
	i.augment(n, {
		formatter: null,
		range: [0, 1],
		ticks: null,
		init: function() {},
		getTicks: function() {
			var t = this,
				e = t.ticks,
				r = [];
			return i.each(e, function(e) {
				var n;
				n = i.isObject(e) ? e : {
					text: t.getText(e),
					value: t.scale(e)
				}, r.push(n)
			}), r
		},
		getText: function(t) {
			var e = this.formatter;
			return t = e ? e(t) : t, !i.isNull(t) && t.toString || (t = ""), t.toString()
		},
		rangeMin: function() {
			return this.range[0]
		},
		rangeMax: function() {
			var t = this.range;
			return t[t.length - 1]
		},
		invert: function() {},
		translate: function(t) {
			return t
		},
		scale: function() {},
		clone: function() {
			var t = this,
				e = t.constructor,
				r = {};
			return i.each(t, function(e, i) {
				r[i] = t[i]
			}), new e(r)
		},
		change: function(t) {
			return this.ticks = null, i.mix(this, t), this.init(), this
		}
	}), t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(32),
		a = r(2),
		c = function(t) {
			c.superclass.constructor.call(this, t), this.colRange = {}, this.binWidth || (this.binWidth = .03)
		};
	i.extend(c, n), i.augment(c, {
		type: "bin",
		binWidth: .03,
		colRange: {},
		binDims: null,
		setRange: function(t, e) {
			this.colRange[t] = e
		},
		getStatDims: function() {
			return this.getDims()
		},
		getBinDims: function() {
			var t = this.binDims || this.getDims(),
				e = [];
			return i.each(t, function(t) {
				-1 === t.indexOf("..") && e.push(t)
			}), e
		},
		getBinWidth: function() {
			return this.binWidth || .03
		},
		getCenterValue: function(t, e, r) {
			var i, n = this.getBinWidth(),
				a = (t - r) / (e - r);
			return 1 === a && (a -= n / 4), i = (e - r) * (Math.floor(a / n) * n + n / 2) + r
		},
		toBin: function(t) {
			for (var e = this, r = e.getBinDims(), i = 0; i < r.length; i++) {
				var n = r[i],
					a = t[n],
					c = e.getDimRange(n);
				t[n] = e.getCenterValue(a, c.max, c.min)
			}
		},
		getDimRange: function(t) {
			var e = this,
				r = e.cacheRange;
			return r[t] || {
				min: 0,
				max: 0
			}
		},
		preExecute: function(t) {
			var e = this,
				r = a.merge.apply(null, t),
				n = e.getStatDims(),
				c = e.colRange,
				s = {};
			i.each(n, function(t) {
				if (c[t]) s[t] = c[t];
				else {
					var e = a.range(r, t);
					s[t] = {
						min: e[0],
						max: e[1]
					}
				}
			}), e.cacheRange = s
		},
		execFrame: function(t) {
			var e = this,
				r = t.toJSON();
			return i.each(r, function(t) {
				e.toBin(t)
			}), new a(r)
		},
		getRegion: function() {
			return [{
				x: 0,
				y: 0
			}]
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(2),
		a = function(t) {
			i.mix(this, t)
		};
	i.augment(a, {
		dims: [],
		margin: 0,
		defs: {},
		facetTitle: {
			titleOffset: 25,
			colDimTitle: {
				title: {
					"font-size": 16,
					"text-anchor": "middle",
					fill: "#444"
				}
			},
			colTitle: {
				title: {
					"font-size": 14,
					"text-anchor": "middle",
					fill: "#444"
				}
			},
			rowTitle: {
				title: {
					"font-size": 14,
					"text-anchor": "middle",
					rotate: 90,
					fill: "#444"
				}
			},
			rowDimTitle: {
				title: {
					"font-size": 16,
					"text-anchor": "middle",
					rotate: 90,
					fill: "#444"
				}
			}
		},
		plotRange: null,
		getDimValues: function(t, e) {
			var r = this,
				i = r.defs[t],
				a = [];
			return a = i && i.values ? i.values : n.values(e, t)
		},
		getFilter: function(t) {
			var e = this.defs,
				r = function(r) {
					var n = !0;
					return i.each(t, function(t) {
						var a = t.dim,
							c = t.value,
							s = t.values,
							l = !0;
						!i.isNull(c) && a && (l = e[a] && e[a].group ? e[a].group(r) === i.indexOf(s, c) : r[a] === c || r[a] === i.indexOf(s, c)), n = n && l
					}), n
				};
			return r
		},
		drawTitles: function(t, e) {
			var r = this,
				n = r.dims;
			i.each(t, function(t) {
				r.drawFacetTitle("col", t, e)
			}), r.drawDimTitle("col", n[0], e)
		},
		generateFacets: function() {},
		drawFacetTitle: function(t, e, r) {
			var n = this,
				a = n.facetTitle,
				c = a.titleOffset,
				s = "row" === t ? a.rowTitle : a.colTitle,
				l = e.region,
				o = l.start,
				u = l.end,
				h = "row" === t ? "y" : "x",
				f = "row" === t ? "x" : "y",
				d = {};
			d[h] = (u[h] - o[h]) / 2 + o[h], d[f] = u[f];
			var p = "x" === h ? -1 : 1,
				g = i.mix({
					text: e[h + "Value"]
				}, s.title);
			g[h] = d[h], g[f] = d[f] + c * p, r.addShape("Text", {
				attrs: g
			})
		},
		drawDimTitle: function(t, e, r) {
			if (!i.isNull(e)) {
				var n = this,
					a = n.plotRange,
					c = n.defs,
					s = "row" === t ? "y" : "x",
					l = n.facetTitle,
					o = l.titleOffset,
					u = "x" === s ? l.colDimTitle : l.rowDimTitle,
					h = c[e] && c[e].alias || e,
					f = {};
				f = "x" === s ? {
					y: a.tl.y + -1 * (o + 40),
					x: (a.tr.x - a.tl.x) / 2 + a.tl.x
				} : {
					x: a.tr.x + (o + 40),
					y: (a.br.y - a.tr.y) / 2 + a.tr.y
				}, h = i.mix({
					text: h,
					x: f.x,
					y: f.y
				}, u.title), r.addShape("Text", {
					attrs: h
				})
			}
		}
	}), t.exports = a
}, function(t, e) {
	"use strict";
	var r = "#4E7CCC",
		i = '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\u5fae\u8f6f\u96c5\u9ed1", SimSun, "sans-serif"',
		n = {
			defaultColor: r,
			plotCfg: {
				margin: [20, 80, 60, 80]
			},
			facetCfg: {
				type: "rect",
				margin: 10,
				facetTitle: {
					titleOffset: 16,
					colDimTitle: {
						title: {
							"font-size": "14",
							"text-anchor": "middle",
							fill: "#999"
						}
					},
					colTitle: {
						title: {
							"font-size": "12",
							"text-anchor": "middle",
							fill: "#999"
						}
					},
					rowTitle: {
						title: {
							"font-size": "12",
							"text-anchor": "middle",
							rotate: 90,
							fill: "#999"
						}
					},
					rowDimTitle: {
						title: {
							"font-size": "12",
							"text-anchor": "middle",
							rotate: 90,
							fill: "#999"
						}
					}
				}
			},
			binWidth: .03,
			fontFamily: i,
			colors: {
				"default": ["#4E7CCC", "#36B3C3", "#4ECDA5", "#94E08A", "#E2F194", "#EDCC72", "#F8AB60", "#F9815C", "#EB4456", "#C82B3D"],
				intervalStack: ["#4E7CCC", "#36B3C3", "#4ECDA5", "#94E08A", "#E2F194", "#EDCC72", "#F8AB60", "#F9815C", "#EB4456", "#C82B3D"]
			},
			shapes: {
				point: ["hollowCircle", "hollowSquare", "hollowDiamond", "hollowBowtie", "hollowTriangle", "hollowHexagon", "cross", "tick", "plus", "hyphen", "line"],
				line: ["line", "dash", "dot"],
				area: ["area"]
			},
			hues: ["red", "yellow", "green", "blue", "orange", "purple", "pink", "brown", "white", "gray", "black"],
			axis: {
				top: {
					position: "top",
					titleOffset: 30,
					title: {
						"font-size": "12",
						fill: "#999"
					},
					labels: {
						label: {
							"text-anchor": "middle",
							fill: "#404040",
							"font-size": "12"
						}
					},
					tickLine: {
						"stroke-width": 1,
						stroke: "#ccc",
						value: 5
					}
				},
				bottom: {
					position: "bottom",
					titleOffset: 45,
					labelOffset: 20,
					title: {
						"font-size": "12",
						"text-anchor": "middle",
						fill: "#999"
					},
					labels: {
						label: {
							"text-anchor": "middle",
							fill: "#404040",
							"font-size": "12"
						}
					},
					line: {
						"stroke-width": 1,
						stroke: "#ccc"
					},
					tickLine: {
						"stroke-width": 1,
						stroke: "#ccc",
						value: 5
					}
				},
				left: {
					position: "left",
					titleOffset: 60,
					labelOffset: 13,
					title: {
						"font-size": "12",
						fill: "#999"
					},
					labels: {
						label: {
							"text-anchor": "end",
							fill: "#404040"
						}
					},
					line: {
						"stroke-width": 1,
						stroke: "#ccc"
					},
					tickLine: {
						"stroke-width": 1,
						stroke: "#ccc",
						value: 5
					},
					grid: {
						line: {
							stroke: "#d9d9d9",
							"stroke-width": 1,
							"stroke-dasharray": [2, 2]
						}
					}
				},
				right: {
					position: "right",
					titleOffset: 60,
					labelOffset: 13,
					title: {
						"font-size": "12",
						fill: "#999"
					},
					labels: {
						label: {
							"text-anchor": "start",
							fill: "#404040"
						}
					},
					line: {
						"stroke-width": 1,
						stroke: "#ccc"
					},
					tickLine: {
						"stroke-width": 1,
						stroke: "#ccc",
						value: 5
					}
				},
				circle: {
					labelOffset: 5,
					line: {
						"stroke-width": 1,
						stroke: "#ccc"
					},
					grid: {
						line: {
							stroke: "#d9d9d9",
							"stroke-width": 1,
							"stroke-dasharray": [1, 3]
						}
					},
					labels: {
						label: {
							fill: "#404040",
							"text-anchor": "end"
						}
					}
				},
				gauge: {
					grid: null,
					labelOffset: 5,
					tickLine: {
						"stroke-width": 1,
						value: -20,
						stroke: "#ccc"
					},
					subTick: 5,
					labels: {
						label: {
							fill: "#404040",
							"text-anchor": "end"
						}
					}
				},
				clock: {
					grid: null,
					labelOffset: 5,
					tickLine: {
						"stroke-width": 1,
						value: -20,
						stroke: "#C0D0E0"
					},
					subTick: 5,
					labels: {
						label: {
							fill: "#404040",
							"text-anchor": "end"
						}
					}
				},
				radius: {
					titleOffset: 45,
					labels: {
						label: {
							"text-anchor": "start",
							fill: "#404040"
						}
					},
					line: {
						"stroke-width": 1,
						stroke: "#ccc"
					},
					grid: {
						line: {
							stroke: "#d9d9d9",
							"stroke-width": 1,
							"stroke-dasharray": [2, 2]
						},
						type: "circle"
					}
				}
			},
			labels: {
				offset: 14,
				label: {
					fill: "#666",
					"font-size": "12"
				}
			},
			treemapLabels: {
				offset: 10,
				label: {
					fill: "#fff",
					"font-size": "14",
					verticalAlign: "top",
					fontStyle: "bold"
				}
			},
			innerLabels: {
				label: {
					fill: "#fff",
					"font-size": "12"
				}
			},
			thetaLabels: {
				labelLine: {
					"stroke-width": 1
				},
				labelHeight: 14,
				offset: 30
			},
			legend: {
				right: {
					position: "right",
					back: null,
					spacingX: 5,
					spacingY: 24,
					lineHeight: 0,
					markerAlign: "center",
					wordSpaceing: 12
				},
				left: {
					position: "left",
					back: null,
					spacingX: 5,
					spacingY: 24,
					lineHeight: 6,
					markerAlign: "center",
					wordSpaceing: 12
				},
				top: {
					position: "top",
					title: null,
					back: null,
					spacingX: 16,
					spacingY: 10,
					lineHeight: 6,
					markerAlign: "center",
					wordSpaceing: 12
				},
				bottom: {
					position: "bottom",
					title: null,
					back: null,
					spacingX: 16,
					spacingY: 10,
					lineHeight: 6,
					markerAlign: "center",
					wordSpaceing: 12
				},
				size: {
					width: 20,
					height: 156
				}
			},
			tooltip: {
				crosshairs: !1,
				offset: 15,
				crossLine: {
					stroke: "#666"
				},
				wordSpaceing: 6,
				markerCfg: {
					symbol: "circle",
					radius: 3
				}
			},
			activeShape: {
				point: {
					radius: 5,
					"fill-opacity": .7
				},
				hollowPoint: {
					"stroke-width": 2,
					radius: 4
				},
				interval: {
					"fill-opacity": .7
				},
				hollowInterval: {
					"stroke-width": 2
				},
				area: {
					"fill-opacity": .85
				},
				hollowArea: {
					"stroke-width": 2
				},
				line: {
					"stroke-width": 2
				},
				polygon: {
					"fill-opacity": .75
				}
			},
			shape: {
				point: {
					"stroke-width": 1,
					fill: r,
					radius: 4
				},
				hollowPoint: {
					fill: "#fff",
					"stroke-width": 1,
					stroke: r,
					radius: 3
				},
				interval: {
					"stroke-width": 0,
					fill: r,
					"fill-opacity": .85
				},
				strokeInterval: {
					"stroke-width": 1,
					stroke: "#fff"
				},
				pie: {
					"stroke-width": 1,
					stroke: "#fff"
				},
				hollowInterval: {
					fill: "#fff",
					stroke: r,
					"fill-opacity": 0,
					"stroke-width": 1
				},
				area: {
					"stroke-width": 0,
					fill: r,
					"fill-opacity": .6
				},
				polygon: {
					"stroke-width": 0,
					fill: r,
					"fill-opacity": 1
				},
				hollowPolygon: {
					fill: "#fff",
					stroke: r,
					"fill-opacity": 0,
					"stroke-width": 1
				},
				strokePolygon: {
					fill: r,
					stroke: "#efefef",
					"fill-opacity": 1
				},
				hollowArea: {
					fill: "#fff",
					stroke: r,
					"fill-opacity": 0,
					"stroke-width": 1
				},
				line: {
					stroke: r,
					"stroke-width": 1,
					fill: null
				}
			},
			guide: {
				text: {
					fill: "#666",
					"font-size": "12"
				},
				line: {
					stroke: r,
					"stroke-dasharray": [0, 2, 2]
				},
				rect: {
					"stroke-width": 0,
					fill: r,
					"fill-opacity": .1
				},
				tag: {
					line: {
						stroke: r,
						"stroke-dasharray": [0, 2, 2]
					},
					text: {
						fill: "#666",
						"font-size": "12",
						"text-anchor": "middle"
					},
					rect: {
						"stroke-width": 0,
						fill: r,
						"fill-opacity": .1
					}
				}
			},
			tooltipMarker: {
				fill: "#fff",
				symbol: "circle",
				"stroke-width": 2,
				stroke: r,
				radius: 4
			}
		};
	t.exports = n
}, function(t, e, r) {
	var i = r(1),
		n = r(12),
		a = r(67),
		c = n.GroupBase,
		s = a.ShowLabels,
		l = "x-chart-axis",
		o = r(120),
		u = function(t) {
			u.superclass.constructor.call(this, t)
		};
	u.CFG = {
		zIndex: 4,
		ticks: null,
		line: null,
		tickLine: null,
		subTick: null,
		grid: null,
		gridAlign: "start",
		coord: null,
		labels: {
			label: {},
			autoRotate: !0
		},
		title: {},
		_title: {
			textBaseline: "middle"
		},
		autoPaint: !0,
		labelOffset: 10,
		titleOffset: 20,
		animate: !1,
		formatter: null,
		firstTick: !0
	}, i.mixin(u, [s]), i.extend(u, c), i.augment(u, {
		_initCfg: function() {
			this.deepSet("title")
		},
		_beforeRenderUI: function() {
			u.superclass._beforeRenderUI.call(this)
		},
		_renderUI: function() {
			u.superclass._renderUI.call(this), this.parseTicks(this.get("ticks"));
			var t = this.get("labels");
			t && this.renderLabels(), this.get("autoPaint") && this.paint(), this.get("title") && this._renderTitle(), this.sort()
		},
		parseTicks: function(t) {
			for (var t = t || [], e = t.length, r = 0; r < t.length; r++) {
				var n = t[r];
				i.isObject(n) || (t[r] = this.parseTick(n, r, e))
			}
			return this.set("ticks", t), t
		},
		parseTick: function(t, e, r) {
			return {
				text: t,
				value: e / (r - 1)
			}
		},
		getMaxLabelWidth: function(t) {
			var e = t.get("children"),
				r = 0;
			return i.each(e, function(t) {
				var e = t.getBBBox(),
					i = e.width;
				i > r && (r = i)
			}), r
		},
		paint: function() {
			this._renderLines(), this._renderTicks(), this.renderGrid();
			var t = this.get("labels");
			t && t.autoRotate && this.autoRotateLabels()
		},
		autoRotateLabels: function() {},
		_renderTitle: function() {},
		renderGrid: function() {
			var t, e = this.get("grid");
			e && (i.isNull(e.animate) && (e.animate = this.get("animate")), t = this.getParent().addGroup(o, e), t.setMatrix(this.getCoordMatrix().clone()), this.set("gridGroup", t))
		},
		getLinePath: function() {},
		getOffsetPoint: function() {},
		transPoint: function(t) {
			var e = this.get("coord");
			return e.trans(t.x, t.y, 1)
		},
		_renderLines: function() {
			var t, e = this.get("line"),
				r = this.get("ticks");
			if (e) {
				t = this.getLinePath(), e = i.mix({
					path: t
				}, e);
				var n = this.addShape("Path", {
					elCls: l + "-line",
					attrs: e
				});
				n.setMatrix(this.getCoordMatrix().clone()), this.set("lineShape", n)
			}
			this._processTicks(r)
		},
		_processTicks: function(t) {
			var e = this,
				r = e.get("labels"),
				n = e.get("subTick"),
				a = e.get("tickLine");
			t = t || e.get("ticks");
			var c = null;
			i.each(t, function(i, n) {
				var s, l = t[n + 1];
				s = c ? c : e.getOffsetPoint(i), c = l ? e.getOffsetPoint(l) : null, a && e._addTickItem(s), e.get("grid") && 0 !== i.value && e._addGridItem(s, c), r && e.addLabel(e.formatPoint(i.text), s)
			}), n && i.each(t, function(r, c) {
				var s = c ? r.value - t[c - 1].value : r.value;
				s /= e.get("subTick");
				for (var l = [], o = 1; n > o; o++) {
					var u = {
						text: "",
						value: c ? t[c - 1].value + o * s : o * s
					};
					l.push(u)
				}
				i.each(l, function(t) {
					var r = e.getOffsetPoint(t);
					if (a) {
						var i = parseInt(.6 * a.value);
						e._addTickItem(r, i)
					}
				})
			})
		},
		_renderTicks: function() {
			var t = this,
				e = t.get("tickItems"),
				r = t.get("tickLine"),
				n = "",
				a = i.mix({}, r);
			if (e) {
				i.each(e, function(e) {
					var r = t._getTickPath(e);
					n += r
				}), delete a.value, a.path = n;
				var c = t.addShape("Path", {
					elCls: l + "-ticks",
					attrs: a
				});
				c.setMatrix(t.getCoordMatrix().clone()), t.set("tickShape", c)
			}
		},
		_getTickPath: function(t) {
			var e = i.substitute("M{x1} {y1}L{x2} {y2}", t);
			return e
		},
		_addTickItem: function(t, e) {
			var r = this.get("tickItems"),
				n = {
					x1: t.x,
					y1: t.y
				},
				a = this.getTickEnd(t, e);
			n.x2 = a.x, n.y2 = a.y, r || (r = [], this.set("tickItems", r)), i.mix(n, a), r.push(n)
		},
		getCoordMatrix: function() {
			var t = this.get("coord"),
				e = t.get("matrix");
			return e
		},
		getTickEnd: function() {},
		getSideVector: function() {},
		getTextAnchor: function(t) {
			var e, r = Math.abs(t.y / t.x);
			return e = r >= 1 ? "middle" : t.x > 0 ? "start" : "end"
		},
		addLabel: function(t, e) {
			var r, i = this.get("labelsGroup"),
				n = {};
			if (i) {
				var a = this.get("coord"),
					c = this.get("labelOffset") || 10,
					s = this.getSideVector(c, e),
					l = {
						x: e.x + s.x,
						y: e.y + s.y
					};
				l = this.transPoint(l), s = a.trans(s.x, s.y), n.text = t, n.x = l.x, n.y = l.y, n["text-anchor"] = this.getTextAnchor(s), r = i.addLabel(n)
			}
			return r
		},
		formatPoint: function(t) {
			var e = this.get("formatter");
			return e && (t = e.call(this, t)), t
		},
		_addGridItem: function(t, e) {
			var r, n, a = this.get("coord"),
				c = this.get("grid"),
				s = {},
				l = this.get("gridAlign");
			c.items || (c.items = []), n = t, "start" === l ? n = t : "middle" === l && (n = "cartesian" !== a.type || e ? this.getGridMiddlePoint(t, e) : null), n && (r = this.getGridItemCfg(n), i.mix(s, r), c.items.push(s))
		},
		getGridMiddlePoint: function(t, e) {
			var r, i, n = this.get("coord"),
				a = n.invertPoint(t);
			return e ? (a.x >= 1 && (a.x -= 1), r = n.invertPoint(e), i = {
				x: (r.x + a.x) / 2,
				y: (r.y + a.y) / 2
			}) : 1 !== a.x && (i = this.getEndMiddlePoint(t, a)), n.convertPoint(i)
		},
		getEndMiddlePoint: function(t) {
			var e = this.get("coord"),
				r = {
					value: 1
				},
				i = this.getOffsetPoint(r);
			return e.invertPoint(i)
		},
		getGridItemCfg: function() {},
		remove: function() {
			u.superclass.remove.call(this);
			var t = this.get("gridGroup");
			t && t.remove(), this.removeLabels()
		}
	}), t.exports = u
}, function(t, e, r) {
	var i = r(128);
	t.exports = i
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		return t > e ? e : t
	}

	function n(t, e) {
		return t > e ? t : e
	}

	function a(t, e) {
		this.start = t, this.end = e, this.init()
	}
	var c = r(1);
	a.CFG = {
		start: null,
		end: null,
		background: null
	}, c.augment(a, {
		init: function() {
			var t = this,
				e = t.start,
				r = t.end,
				a = t.tl = {};
			a.x = i(e.x, r.x), a.y = i(e.y, r.y);
			var c = t.tr = {};
			c.x = n(e.x, r.x), c.y = i(e.y, r.y);
			var s = t.bl = {};
			s.x = i(e.x, r.x), s.y = n(e.y, r.y);
			var l = t.br = {};
			l.x = n(e.x, r.x), l.y = n(e.y, r.y);
			var o = t.cc = {};
			o.x = (l.x - a.x) / 2 + a.x, o.y = (l.y - a.y) / 2 + a.y
		},
		reset: function(t, e) {
			this.start = t, this.end = e, this.init()
		},
		isInRange: function(t, e) {
			c.isObject(t) && (e = t.y, t = t.x);
			var r = this,
				i = r.tl,
				n = r.br;
			return t >= i.x && t <= n.x && e >= i.y && e <= n.y
		},
		isInVertical: function(t) {
			c.isObject(t) && (t = t.y);
			var e = this,
				r = e.tl,
				i = e.br;
			return t >= r.y && t <= i.y
		},
		isInHorizontal: function(t) {
			c.isObject(t) && (t = t.x);
			var e = this,
				r = e.tl,
				i = e.br;
			return t >= r.x && t <= i.x
		},
		getWidth: function() {
			var t = this.tl,
				e = this.br;
			return e.x - t.x
		},
		getHeight: function() {
			var t = this.tl,
				e = this.br;
			return e.y - t.y
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(39),
		a = function(t) {
			t.inner = t.inner || 0, a.superclass.constructor.call(this, t)
		};
	i.extend(a, n), i.augment(a, {
		type: "polar"
	}), t.exports = a
}, function(t, e, r) {
	var i = r(150);
	t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = Math.PI / 180,
		a = 180 / Math.PI,
		c = function(t) {
			i.mix(this, t)
		};
	i.augment(c, {
		basic: null,
		toRadians: function(t) {
			return n * t
		},
		toDegrees: function(t) {
			return t * a
		},
		project: function(t, e) {
			return {
				x: t,
				y: e
			}
		},
		invert: function(t) {
			return {
				x: t.x,
				y: t.y
			}
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(10),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	i.extend(a, n), i.augment(a, {
		type: "region"
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(32),
		n = r(1),
		a = r(2),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	n.extend(c, i), n.augment(c, {
		type: "smooth",
		bandWidth: .01,
		colRange: {},
		setRange: function(t, e) {
			this.colRange[t] = e
		},
		getStatDims: function() {
			var t = this,
				e = t.getDims(),
				r = e.length,
				i = [e[r - 1]];
			return i
		},
		execSmooth: function(t) {
			return t
		},
		getXDim: function() {
			var t = this,
				e = t.getDims();
			if (e.length < 2) throw "you must support the x,y dimension!!!";
			return e[0]
		},
		getYDim: function() {
			var t = this,
				e = t.getDims();
			if (e.length < 2) throw "you must support the x,y dimension!!!";
			return e[1]
		},
		getZDim: function() {
			var t = this,
				e = t.getDims();
			if (e.length < 3) throw "you must support the x,y,z dimension!!!";
			return e[2]
		},
		getData: function(t) {
			var e = [],
				r = this.dims;
			return t.each(function(t) {
				var i = [];
				n.each(r, function(e) {
					i.push(t[e])
				}), e.push(i)
			}), e
		},
		getDimRange: function(t, e) {
			var r = this,
				i = r.colRange[e];
			if (!i) {
				var n = a.range(t, e);
				i = {
					min: n[0],
					max: n[1]
				}
			}
			return i
		},
		gatStep: function(t, e) {
			var r = this,
				i = r.getDimRange(t, e),
				n = i.min,
				a = i.max,
				c = r.bandWidth,
				s = (a - n) * c;
			return s
		},
		getInterArray: function(t, e) {
			for (var r = this, i = r.gatStep(t, e), n = r.getDimRange(t, e), a = n.min, c = n.max, s = [], l = a; c >= l; l += i) s.push(l);
			return s
		},
		execFrame: function(t) {
			var e = this,
				r = e.getXDim(),
				i = e.getYDim();
			t = a.sort(t, r);
			var c = e.getData(t),
				s = e.getInterArray(t, r),
				l = e.execSmooth(c, s, t),
				o = t.rowObject(0),
				u = [];
			return n.each(l, function(t) {
				var e = n.mix({}, o);
				e[r] = t[0], e[i] = t[1], u.push(e)
			}), new a(u)
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(75),
		a = r(232);
	r(231);
	i.mix(i, {
		getFrame: function(t, e, r) {
			var a, c, s, l = {
				attrs: {},
				matrix: e.matrix
			};
			for (s in r.attrs) e.attrs[s] != r.attrs[s] && ("path" === s ? l.attrs[s] = i.pathInterpolation(t, e.attrs[s], r.attrs[s]) : (c = n.interpolation(e.attrs[s], r.attrs[s]), l.attrs[s] = c(t)));
			return r.matrix && e.matrix && (a = e.matrix.clone(), "matrix3" === r.matrix.type && (c = n.interpolation(e.matrix, r.matrix), l.matrix = c(t)), i.isObject(r.matrix) && (r.matrix.r && (l.matrix = a.rotate(r.matrix.r * t)), r.matrix.t && (l.matrix = a.translate(r.matrix.t[0] * t, r.matrix.t[1] * t)), r.matrix.s && (l.matrix = a.scale(r.matrix.s[0] * t, r.matrix.s[1] * t)), r.matrix.p && (l.matrix = a.translate(r.matrix.p[0] * t, r.matrix.p[1](r.matrix.p[0] * t))), r.matrix.f && (l.matrix = r.matrix.f(a, t)))), l
		},
		pathInterpolation: function(t, e, r) {
			var c, s, l, o, u = [];
			e = a.parsePathString(e), r = a.parsePathString(r);
			for (var h = 0; h < e.length; h++) {
				s = e[h], l = r[h], c = [];
				for (var f = 0; f < s.length; f++) i.isNumeric(s[f]) ? (o = n.interpolation(s[f], l[f]), c.push(o(t))) : c.push(s[f]);
				u.push(c)
			}
			return u
		},
		getKeyFrameByProps: function(t, e) {
			var r = [],
				n = i.props2frame(t, e),
				a = {
					attrs: i.getTargetAttrs(t, n.attrs),
					matrix: t.getMatrix().clone()
				};
			return r[0] = a, r[1] = n, r
		},
		props2frame: function(t, e) {
			var r, i = {
				matrix: null,
				attrs: {}
			};
			for (r in e) "matrix" === r ? i.matrix = e[r] : "duration" !== r && (i.attrs[r] = e[r]);
			return i
		},
		getTargetAttrs: function(t, e) {
			var r, i = {};
			for (r in e) i[r] = t.attr(r);
			return i
		},
		cloneFrame: function(t) {
			var e = {
				attrs: {},
				matrix: null
			};
			return i.mix(e.attrs, t.attrs), e.matrix = t.matrix.clone(), e
		}
	}), t.exports = i
}, function(t, e, r) {
	"use strict";

	function i(t, e, r, i) {
		return {
			x: Math.cos(i) * r + t,
			y: Math.sin(i) * r + e
		}
	}

	function n(t, e, r, i) {
		if (i) {
			if (e > t) var n = e - t,
				a = 2 * Math.PI - r + t;
			else if (t > r) var n = 2 * Math.PI - t + e,
				a = t - r
		} else var n = t - e,
			a = r - t;
		return n > a ? r : e
	}

	function a(t, e, r, i) {
		var a = 0;
		return r - e >= 2 * Math.PI && (a = 2 * Math.PI), e = u.mod(e, 2 * Math.PI), r = u.mod(r, 2 * Math.PI) + a, t = u.mod(t, 2 * Math.PI), i ? e >= r ? t > r && e > t ? t : n(t, r, e, !0) : e > t || t > r ? t : n(t, e, r) : r >= e ? t > e && r > t ? t : n(t, e, r, !0) : t > e || r > t ? t : n(t, r, e)
	}

	function c(t, e, r, i, n, c, s, l, u) {
		var h = new o(s, l),
			f = new o(t, e),
			d = new o(1, 0),
			p = o.sub(h, f),
			g = d.angleTo(p);
		g = a(g, i, n, c);
		var y = new o(r * Math.cos(g) + t, r * Math.sin(g) + e);
		u && (u.x = y.x, u.y = y.y);
		var v = h.distanceTo(y);
		return v
	}

	function s(t, e, r, n, c, s) {
		var l = 0,
			o = Math.PI / 2,
			u = Math.PI,
			f = 3 * Math.PI / 2,
			d = [],
			p = a(l, n, c, s);
		p === l && d.push(i(t, e, r, l)), p = a(o, n, c, s), p === o && d.push(i(t, e, r, o)), p = a(u, n, c, s), p === u && d.push(i(t, e, r, u)), p = a(f, n, c, s), p === f && d.push(i(t, e, r, f)), d.push(i(t, e, r, n)), d.push(i(t, e, r, c));
		var g = 1 / 0,
			y = -(1 / 0),
			v = 1 / 0,
			m = -(1 / 0);
		return h.each(d, function(t) {
			g > t.x && (g = t.x), y < t.x && (y = t.x), v > t.y && (v = t.y), m < t.y && (m = t.y)
		}), {
			minX: g,
			minY: v,
			maxX: y,
			maxY: m
		}
	}
	var l = r(3),
		o = l.Vector2,
		u = r(4),
		h = r(1);
	t.exports = {
		nearAngle: a,
		projectPoint: function(t, e, r, i, n, a, s, l) {
			var o = {};
			return c(t, e, r, i, n, a, s, l, o), o
		},
		pointDistance: c,
		box: s
	}
}, function(t, e, r) {
	"use strict";

	function i(t, e, r, i, n) {
		var a = 1 - n;
		return a * a * (a * i + 3 * n * r) + n * n * (n * t + 3 * a * e)
	}

	function n(t, e, r, i, n) {
		var a = 1 - n;
		return 3 * (((e - t) * a + 2 * (r - e) * n) * a + (i - r) * n * n)
	}

	function a(t, e, r, n, a, c, s, o, u, h, f) {
		for (var d, p = .005, g = 1 / 0, y = 1e-4, v = new l(u, h), m = 0; 1 > m; m += .05) {
			var x = new l(i(t, r, a, s, m), i(e, n, c, o, m)),
				C = x.distanceToSquared(v);
			g > C && (d = m, g = C)
		}
		for (var g = 1 / 0, _ = 0; 32 > _ && !(y > p); _++) {
			var O = d - p,
				S = d + p,
				x = new l(i(t, r, a, s, O), i(e, n, c, o, O)),
				C = x.distanceToSquared(v);
			if (O >= 0 && g > C) d = O, g = C;
			else {
				var w = new l(i(t, r, a, s, S), i(e, n, c, o, S)),
					M = w.distanceToSquared(v);
				1 >= S && g > M ? (d = S, g = M) : p *= .5
			}
		}
		return f && (f.x = i(t, r, a, s, d), f.y = i(e, n, c, o, d)), Math.sqrt(g)
	}

	function c(t, e, r, i) {
		var n = 3 * t - 9 * e + 9 * r - 3 * i,
			a = 6 * e - 12 * r + 6 * i,
			c = 3 * r - 3 * i,
			s = [];
		if (o.equal(n, 0)) {
			if (!o.equal(a, 0)) {
				var l = -c / a;
				l >= 0 && 1 >= l && s.push(l)
			}
		} else {
			var u = a * a - 4 * n * c;
			if (o.equal(u, 0)) s.push(-a / (2 * n));
			else if (u > 0) {
				var h = Math.sqrt(u),
					l = (-a + h) / (2 * n),
					f = (-a - h) / (2 * n);
				l >= 0 && 1 >= l && s.push(l), f >= 0 && 1 >= f && s.push(f)
			}
		}
		return s
	}
	var s = r(3),
		l = s.Vector2,
		o = r(4);
	t.exports = {
		at: i,
		derivativeAt: n,
		projectPoint: function(t, e, r, i, n, c, s, l, o, u) {
			var h = {};
			return a(t, e, r, i, n, c, s, l, o, u, h), h
		},
		pointDistance: a,
		extrema: c
	}
}, function(t, e, r) {
	"use strict";

	function i(t, e, r, i) {
		var n = 1 - i;
		return n * (n * t + 2 * i * e) + i * i * r
	}

	function n(t, e, r, n, a, c, s, o, u) {
		for (var h, f = .005, d = 1 / 0, p = 1e-4, g = new l(s, o), y = 0; 1 > y; y += .05) {
			var v = new l(i(t, r, a, y), i(e, n, c, y)),
				m = v.distanceToSquared(g);
			d > m && (h = y, d = m)
		}
		for (var d = 1 / 0, x = 0; 32 > x && !(p > f); x++) {
			var C = h - f,
				_ = h + f,
				v = new l(i(t, r, a, C), i(e, n, c, C)),
				m = v.distanceToSquared(g);
			if (C >= 0 && d > m) h = C, d = m;
			else {
				var O = new l(i(t, r, a, _), i(e, n, c, _)),
					S = O.distanceToSquared(g);
				1 >= _ && d > S ? (h = _, d = S) : f *= .5
			}
		}
		return u && (u.x = i(t, r, a, h), u.y = i(e, n, c, h)), Math.sqrt(d)
	}

	function a(t, e, r) {
		var i = t + r - 2 * e;
		if (s.equal(i, 0)) return [.5];
		var n = (t - e) / i;
		return 1 >= n && n >= 0 ? [n] : []
	}
	var c = r(3),
		s = r(4),
		l = c.Vector2;
	t.exports = {
		at: i,
		projectPoint: function(t, e, r, i, a, c, s, l) {
			var o = {};
			return n(t, e, r, i, a, c, s, l, o), o
		},
		pointDistance: n,
		extrema: a
	}
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(24),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	a.ATTRS = {
		type: "path",
		shape: "line",
		shapeType: "line",
		allowActiveShape: !1
	}, i.extend(a, n), i.augment(a, {
		_getShapeCfg: function(t) {
			var e = this,
				r = t.toJSON(),
				i = r[0],
				n = {
					color: i.color,
					size: i.size,
					opacity: i.opacity,
					yDim: e.getYDim(),
					coord: e.get("coord"),
					isInCircle: e.isInCircle(),
					points: r
				},
				a = i.shape,
				c = e.get("shapeObj"),
				s = c.getShapeCfg(a, n);
			return s.path = e.mappingPath(s.path), s
		},
		drawFrame: function(t) {
			var e = this;
			if (t.rowCount()) {
				var r = e.get("group"),
					i = e._getShapeCfg(t),
					n = r.addShape("path", {
						attrs: i
					});
				return n.set("origin", t), r
			}
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = {
			Point: r(307),
			Line: r(306),
			Area: r(304),
			Interval: r(305),
			Schema: r(309),
			Polygon: r(308),
			createShape: function(t, e) {
				var r = this;
				return t = t || "point", e && (e = e.replace("..", "")), t = i.ucfirst(t), r[t]
			}
		};
	t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(16),
		n = i.Util,
		a = (i.Canvas, i.Base),
		c = (n.getRatio(), function s(t) {
			s.superclass.constructor.call(this, t)
		});
	n.extend(c, a), n.augment(c, {
		_initDOM: function() {
			var t = this.get("id"),
				e = document.getElementById(t),
				r = e.parentNode;
			this.set("parentDOM", r), this.set("containerDOM", e)
		},
		_setSize: function() {
			var t = this.get("parentDOM"),
				e = this.get("width"),
				r = n.getBoundingClientRect(t),
				i = n.getStyle(t, "padding-right"),
				a = n.getStyle(t, "padding-left");
			i = parseInt(i.substr(0, i.length - 2)), a = parseInt(a.substr(0, a.length - 2)), e || this.set("width", r.right - r.left - i - a)
		},
		isInClinet: function() {
			var t = this.get("containerDOM"),
				e = n.getBoundingClientRect(t);
			return !(e.top > window.innerHeight || e.bottom < 0)
		}
	}), t.exports = c
}, function(t, e, r) {
	var i = r(322);
	i.Util = r(99), t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(17),
		n = r(1),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	n.extend(a, i), n.augment(a, {
		getEndAttrs: function() {
			var t = this.get("rect"),
				e = {
					width: t.width,
					height: t.height
				};
			return e
		},
		getTarget: function() {
			var t = this.get("group"),
				e = t.getParent(),
				r = e.addShape("Rect");
			return t.attr("clip", r), r
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(28),
		n = r(23),
		a = n.Group,
		c = function(t) {
			c.superclass.constructor.call(this, t), this._beforeRenderUI(), this._renderUI(), this._bindUI()
		};
	c.CFG = {}, i.extend(c, a), i.augment(c, {
		_beforeRenderUI: function() {
			this._initCfg(), this._multiRatioCfg()
		},
		_renderUI: function() {},
		_multiRatioCfg: function() {},
		_initCfg: function() {},
		_bindUI: function() {}
	}), t.exports = c
}, function(t, e, r) {
	t.exports = {
		GMixin: r(116),
		GroupBase: r(64),
		GroupMixin: r(117)
	}
}, function(t, e, r) {
	"use strict";

	function i(t) {
		i.superclass.constructor.call(this, t)
	}
	var n = r(47),
		a = r(9),
		c = "x-chart-axis",
		s = r(3),
		l = r(4);
	i.CFG = {
		zIndex: 4,
		x: null,
		y: null,
		start: null,
		end: null,
		elCls: c,
		position: "bottom",
		line: {
			lineWidth: 1,
			stroke: "#C0D0E0"
		},
		tickLine: {
			lineWidth: 1,
			stroke: "#C0D0E0",
			value: 5
		}
	}, a.extend(i, n), a.augment(i, {
		_beforeRenderUI: function() {
			i.superclass._beforeRenderUI.call(this);
			var t, e = this;
			t = e.get("coord"), e.get("start") || e.set("start", e.getOffsetByPercent(0)), e.get("end") || e.set("end", e.getOffsetByPercent(1))
		},
		isVertical: function() {
			var t, e = this,
				r = e.get("isVertical"),
				i = e.get("coord");
			return a.isNull(r) ? (t = e.get("position"), r = "bottom" !== t && "top" !== t, i.isTransposed && (r = !r), e.set("isVertical", r), r) : r
		},
		getOffsetPoint: function(t) {
			return this.getOffsetByPercent(t.value)
		},
		getOffsetByPercent: function(t) {
			var e = this,
				r = e.get("coord"),
				i = e.getPercentPoint(t);
			return r.convertPoint(i)
		},
		autoRotateLabels: function() {
			var t = this,
				e = t.get("labelsGroup"),
				r = t.get("coord"),
				i = t.get("title");
			if (e) {
				var n = t.get("labelOffset") || 10,
					c = n,
					s = t.get("titleOffset"),
					o = t.getAxisVector();
				o = r.trans(o.x, o.y);
				var u;
				if (l.equal(o.x, 0) && i.text) {
					var h = t.getMaxLabelWidth(e);
					h + n > s - c && (u = -1 * Math.acos((s - c) / (h + n)))
				} else if (l.equal(o.y, 0) && e.getCount() > 1) {
					var f = Math.abs(t._getAvgLabelLength(e)),
						h = t.getMaxLabelWidth(e);
					h > f && (u = Math.atan2(1.5 * n, f))
				}
				if (u) {
					var d = t._getAlignFactor();
					a.each(e.get("children"), function(t) {
						t.rotateAtStart(180 * u / Math.PI), l.equal(o.y, 0) && (d > 0 ? t.attr("text-anchor", "start") : t.attr("text-anchor", "end"))
					})
				}
			}
		},
		_getAvgLabelLength: function(t) {
			var e = t.get("children");
			return e[1].attr("x") - e[0].attr("x")
		},
		getPercentPoint: function(t) {
			var e = this,
				r = {},
				i = e.get("position");
			switch (i) {
				case "top":
					r = {
						x: t,
						y: 1
					};
					break;
				case "bottom":
					r = {
						x: t,
						y: 0
					};
					break;
				case "left":
					r = {
						x: 0,
						y: t
					};
					break;
				case "right":
					r = {
						x: 1,
						y: t
					}
			}
			return r
		},
		getLinePath: function() {
			var t = this,
				e = t.get("start"),
				r = t.get("end"),
				i = [];
			return i.push(["M", e.x, e.y]), i.push(["L", r.x, r.y]), i
		},
		getTickEnd: function(t, e) {
			var r = this,
				i = r.get("tickLine"),
				e = e ? e : i.value;
			return r.getSidePoint(t, e)
		},
		getSideVector: function(t) {
			var e, r = this,
				i = r._getAlignFactor();
			return e = r.isVertical() ? new s.Vector2(t * i, 0) : new s.Vector2(0, t * i)
		},
		getAxisVector: function() {
			var t = this,
				e = t.get("start"),
				r = t.get("end");
			return new s.Vector2(r.x - e.x, r.y - e.y)
		},
		getSidePoint: function(t, e) {
			var r = this,
				i = {},
				n = r.getSideVector(e);
			return i.x = t.x + n.x, i.y = t.y + n.y, i
		},
		_isReflectX: function() {
			var t = this,
				e = t.get("coord"),
				r = e.get("x");
			return r.start > r.end
		},
		_isReflectY: function() {
			var t = this,
				e = t.get("coord"),
				r = e.get("y");
			return r.start < r.end
		},
		_getAlignFactor: function() {
			var t, e = this,
				r = e.get("factor"),
				i = e.get("coord");
			return r ? r : (t = e.get("position"), r = "bottom" === t || "right" === t ? 1 : -1, "bottom" !== t && "top" !== t || !e._isReflectY() || (r *= -1), "left" !== t && "right" !== t || !e._isReflectX() || (r *= -1), i.isTransposed && (r = -1 * r), e.set("factor", r), r)
		},
		_renderTitle: function() {
			var t = this,
				e = t.get("title"),
				r = t.getOffsetByPercent(.5),
				i = t.get("titleOffset"),
				n = t.get("labelsGroup");
			if (n) {
				var o = t.getMaxLabelWidth(n),
					u = t.get("labelOffset") || 10;
				i > o + u + 20 && (i = o + u + 20)
			}
			var h = a.mix({}, e),
				f = t.get("coord");
			if (e.text) {
				var d = t.getSideVector(i),
					p = {
						x: r.x + d.x,
						y: r.y + d.y
					};
				p = t.transPoint(p);
				var g = t.getAxisVector();
				g = f.trans(g.x, g.y);
				var y = 0;
				if (!l.equal(g.y, 0)) {
					var v = new s.Vector2(1, 0),
						m = new s.Vector2(g.x, g.y);
					y = m.angleTo(v, !0)
				}
				h.rotate = y * (180 / Math.PI), h.x = p.x, h.y = p.y;
				t.addShape("Text", {
					elCls: c + "-title",
					attrs: h
				})
			}
		},
		getGridItemCfg: function(t) {
			var e = this,
				r = {},
				i = e.get("coord"),
				n = e.get("position"),
				a = i.invertPoint(t),
				c = t,
				s = a;
			r.x1 = c.x, r.y1 = c.y;
			var l, o;
			return o = "left" === n ? {
				x: 1,
				y: s.y
			} : "right" === n ? {
				x: 0,
				y: s.y
			} : "bottom" === n ? {
				x: s.x,
				y: 1
			} : {
				x: s.x,
				y: 0
			}, l = i.convertPoint(o), r.y2 = l.y, r.x2 = l.x, r
		}
	}), t.exports = i
}, function(t, e, r) {
	var i = r(68);
	i.ShowLabels = r(124), t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(12),
		n = i.GroupBase,
		a = r(1),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	c.CFG = {
		zIndex: 6,
		items: null,
		label: null,
		_label: {
			"font-Size": 12,
			textBaseline: "middle"
		},
		renderer: null,
		custom: !1,
		animate: !1,
		html: '<div class="g-labels" style="position:absolute;top:0;left:0;"></div>',
		itemTpl: '<div class="g-label" style="position:absolute;">{text}</div>',
		duration: 400
	}, a.extend(c, n), a.augment(c, {
		_initCfg: function() {
			c.superclass._initCfg.call(this), this.deepSet("label")
		},
		_renderUI: function() {
			c.superclass._renderUI.call(this), this._drawLabels()
		},
		_drawLabels: function() {
			var t = this,
				e = t.get("items");
			a.each(e, function(e, r) {
				t._addLabel(e, r)
			})
		},
		_addLabel: function(t, e) {
			var r = this._getLabelCfg(t, e);
			return this._createText(r)
		},
		_getLabelCfg: function(t, e) {
			var r = this.get("label") || {},
				i = this.get("renderer");
			if (!a.isObject(t)) {
				var n = t;
				t = {}, t.text = n
			}
			i && (t.text = i(t.text, t, e)), a.isNull(t.text) && (t.text = ""), t.text = t.text.toString(), t.x = (t.x || 0) + (r.x || 0), t.y = (t.y || 0) + (r.y || 0);
			var c = a.mix({}, r, t);
			return c
		},
		_createText: function(t) {
			var e = this,
				r = e.get("custom"),
				i = e.get("customDiv");
			if (!r) return this.addShape("Text", {
				attrs: t
			});
			if (!i) {
				var n = e.get("html"),
					c = e.get("canvas").get("el").parentNode;
				i = a.createDom(n), c.style.position = "relative", c.appendChild(i), e.set("customDiv", i)
			}
			var s = e._createDom(t);
			i.appendChild(s), e._setCustomPosition(t, s)
		},
		_setCustomPosition: function(t, e) {
			var r = (this.get("canvas"), t["text-anchor"] || "start"),
				i = t.y,
				n = t.x,
				c = a.getWidth(e),
				s = a.getHeight(e);
			i -= s / 2, "middle" === r ? n -= c / 2 : "end" === r && (n -= c), e.style.top = parseInt(i) + "px", e.style.left = parseInt(n) + "px"
		},
		_createDom: function(t) {
			var e = this,
				r = e.get("itemTpl"),
				i = a.substitute(r, t),
				n = a.createDom(i);
			return n
		},
		getLabels: function() {
			var t = this,
				e = t.get("customDiv");
			return e ? a.toArray(e.childNodes) : t.get("children")
		},
		addLabel: function(t) {
			var e = this.get("items"),
				r = e.length;
			return e.push(t), this._addLabel(t, r)
		},
		changeLabel: function(t, e) {
			var r, i, n = this,
				c = n.get("custom");
			if (r = a.indexOf(n.get("children"), t), i = n._getLabelCfg(e, r), t)
				if (c) {
					var s = n._createDom(i);
					t.innerHTML = s.innerHTML, n._setCustomPosition(i, t)
				} else if (t.attr("text", i.text), t.attr("x") !== i.x || t.attr("y") !== i.y) {
				var l = t.get("attrs").rotate;
				l && t.rotateAtStart(-l), t.attr(i), l && t.rotateAtStart(l)
			}
		},
		clear: function() {
			var t = this,
				e = t.get("customDiv");
			e && (e.innerHTML = ""), c.superclass.clear.call(t)
		},
		setItems: function(t) {
			var e = this;
			e.clear(), e.set("items", t), e._drawLabels()
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(9),
		n = r(12),
		a = n.GroupBase,
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	c.CFG = {
		title: {},
		titleText: null,
		plotRange: null,
		_title: {
			text: " ",
			fill: "#333",
			textBaseline: "top"
		},
		dx: 0,
		dy: 0,
		position: !0
	}, i.extend(c, a), i.augment(c, {
		_initCfg: function() {
			c.superclass._initCfg.call(this), i.isNull(this.get("title")) && this.set("titleText", null), this.deepSet("title")
		},
		_beforeRenderUI: function() {
			c.superclass._beforeRenderUI.call(this);
			var t = this.get("title");
			this.set("itemsGroup", this.addGroup()), this.set("titleShape", this.addShape("Text", {
				attrs: t
			}))
		},
		_renderUI: function() {
			c.superclass._renderUI.call(this), this._renderTitle()
		},
		_renderTitle: function() {
			var t = this.get("titleShape"),
				e = this.get("lineHeight"),
				r = this.get("titleText");
			t.attr({
				x: 0,
				y: e,
				text: r
			})
		},
		setPosition: function(t) {
			var t = t ? t : this.get("position"),
				e = this.get("plotRange");
			if (e) {
				var r = e.tl,
					i = e.br,
					n = this.get("dx"),
					a = this.get("dy"),
					c = this.getBBBox().width,
					s = 0,
					l = 0;
				switch (t) {
					case "top":
						s = r.x, l = r.y;
						break;
					case "left":
						s = r.x, l = (r.y + i.y) / 2;
						break;
					case "right":
						s = i.x - c, l = (r.y + i.y) / 2;
						break;
					case "bottom":
						s = (r.x + i.x) / 2 - c / 2, l = i.y
				}
				this.move(s + n, l + a), this.set("position", t)
			}
		},
		getCount: function() {
			return this.get("itemsGroup").get("children").length
		},
		getLeaveCount: function() {
			var t = this.get("itemsGroup"),
				e = t.get("children"),
				r = [];
			return r = i.filter(e, function(t) {
				return t.get("checked")
			}), r.length
		},
		setItems: function(t) {
			this.set("items", t), this.clearItems(), this._renderUI()
		},
		addItem: function(t) {
			var e = this.get("items");
			e.push(t), this.clearItems(), this._renderUI()
		},
		clearItems: function() {
			var t = this.get("itemsGroup");
			t.clear()
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(12),
		a = r(49),
		c = n.GroupBase,
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	s.CFG = {
		type: "plotBack",
		margin: null,
		border: null,
		plotRange: null,
		background: null
	}, i.extend(s, c), i.augment(s, {
		_beforeRenderUI: function() {
			this._calculateRange()
		},
		_renderUI: function() {
			this._renderBorder(), this._renderBackground()
		},
		_renderBorder: function() {
			var t, e = this,
				r = e.get("border"),
				n = e.get("canvas"),
				a = e.get("borderShape");
			if (r) {
				var c = e.get("width") || n.get("width"),
					s = e.get("height") || n.get("height");
				a ? a.attr({
					x: 0,
					y: 0,
					width: c,
					height: s
				}) : (t = i.mix({
					x: 0,
					y: 0,
					width: c,
					height: s
				}, r), a = this.addShape("Rect", {
					attrs: t
				}), this.set("borderShape", a))
			}
		},
		_renderBackground: function() {
			var t, e, r, n, a = this,
				c = a.get("background"),
				s = a.get("plotRange"),
				l = a.get("backShape");
			c && (t = s.getWidth(), e = s.getHeight(), r = s.tl, n = {
				x: r.x,
				y: r.y,
				width: t,
				height: e
			}, l ? l.attr(n) : (c.image ? (n.img = c.image, l = a.addShape("Image", {
				attrs: n
			})) : (i.mix(n, c), l = a.addShape("Rect", {
				attrs: n
			})), a.set("backShape", l)))
		},
		_calculateRange: function() {
			var t, e, r = this,
				n = r.get("margin"),
				c = r.get("canvas"),
				s = r.get("width") || c.get("width"),
				l = r.get("height") || c.get("height"),
				o = r.get("plotRange"),
				u = 0,
				h = 0,
				f = 0,
				d = 0;
			i.isNumber(n) && (u = h = f = d = n), i.isArray(n) && (u = n[0], f = i.isNull(n[1]) ? n[0] : n[1], d = i.isNull(n[2]) ? n[0] : n[2], h = i.isNull(n[3]) ? f : n[3]), t = {
				x: h,
				y: l - d
			}, e = {
				x: s - f,
				y: u
			}, o ? o.reset(t, e) : (o = new a(t, e), r.set("plotRange", o))
		},
		repaint: function() {
			return this._calculateRange(), this._renderBorder(), this._renderBackground(), this
		}
	}), t.exports = s
}, function(t, e, r) {
	var i = r(131);
	t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(9),
		n = r(18),
		a = n.G,
		c = a.Group,
		s = function(t) {
			s.superclass.constructor.call(this, t), this._beforeRenderUI(), this._renderUI(), this._bindUI()
		};
	s.CFG = {}, i.extend(s, c), i.augment(s, {
		_beforeRenderUI: function() {
			this._initCfg()
		},
		_renderUI: function() {},
		_initCfg: function() {},
		_bindUI: function() {}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(38),
		n = r(74),
		a = r(50),
		c = r(147),
		s = r(146),
		l = r(39),
		o = r(148),
		u = r(143),
		h = r(144),
		f = r(145);
	i.Cartesian = n, i.Rect = n, i.Polar = a, i.Theta = c, i.Rho = s, i.Plus = l, i.TriAngle = o, i.Clock = u, i.Gauge = h, i.Map = f, t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(38),
		a = function(t) {
			var e = {};
			i.mix(e, a.ATTRS, t), a.superclass.constructor.call(this, e), this._init()
		};
	a.ATTRS = {
		start: {
			x: 0,
			y: 0
		},
		end: {
			x: 0,
			y: 0
		}
	}, i.extend(a, n), i.augment(a, {
		type: "cartesian",
		isRect: !0,
		_init: function() {
			var t = this,
				e = t.get("start"),
				r = t.get("end"),
				i = {
					start: e.x,
					end: r.x
				},
				n = {
					start: e.y,
					end: r.y
				};
			t.set("x", i), t.set("y", n)
		},
		convertPoint: function(t) {
			var e = this,
				r = e.isTransposed ? t.y : t.x,
				i = e.isTransposed ? t.x : t.y;
			return {
				x: this.convertDim(r, "x"),
				y: this.convertDim(i, "y")
			}
		},
		invertPoint: function(t) {
			var e = this,
				r = this.invertDim(t.x, "x"),
				i = this.invertDim(t.y, "y"),
				t = {};
			return t.x = e.isTransposed ? i : r, t.y = e.isTransposed ? r : i, t
		}
	}), t.exports = a
}, function(t, e, r) {
	var i = r(155);
	t.exports = {
		interpolation: i.interpolation,
		unInterpolation: i.unInterpolation
	}
}, function(t, e) {
	var r = {
		uniform: function(t) {
			return Math.abs(t) < 1 ? .5 : 0
		},
		triangular: function(t) {
			return Math.abs(t) < 1 ? 1 - Math.abs(t) : 0
		},
		epanechnikov: function(t) {
			return Math.abs(t) < 1 ? .75 * (1 - t * t) : 0
		},
		quartic: function(t) {
			return Math.abs(t) < 1 ? .9375 * Math.pow(1 - t * t, 2) : 0
		},
		triweight: function(t) {
			return Math.abs(t) < 1 ? 35 / 32 * Math.pow(1 - t * t, 3) : 0
		},
		tricube: function(t) {
			return Math.abs(t) < 1 ? 70 / 81 * Math.pow(1 - Math.pow(Math.abs(t), 3), 3) : 0
		},
		gaussian: function(t) {
			return Math.abs(t) < 3 ? 1 / Math.sqrt(2 * Math.PI) * Math.exp(-0.5 * t * t) : 0
		},
		cosine: function(t) {
			return Math.abs(t) < 1 ? Math.PI / 4 * Math.cos(Math.PI / 2 * t) : 0
		}
	};
	t.exports = r
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(31),
		a = r(2),
		c = "..x",
		s = "..y",
		l = "_value",
		o = "_level",
		u = function(t) {
			u.superclass.constructor.call(this, t)
		};
	i.extend(u, n), i.augment(u, {
		type: "tree",
		levels: 0,
		totalValue: 0,
		initDims: function(t) {
			t.unshift(s), t.unshift(c)
		},
		getValueField: function() {
			var t = this.getDims();
			return t[3] || l
		},
		getChildrenField: function() {
			var t = this.getDims();
			return t[2]
		},
		exec: function(t) {
			var e = this,
				r = [],
				i = a.merge.apply(null, t);
			return r.push(e.execFrame(i)), r
		},
		_traverseNodes: function(t, e) {
			var r, n = this;
			r = e ? e[o] + 1 : 0;
			var a = n.getChildrenField(),
				c = n.getValueField();
			i.each(t, function(t) {
				t[o] = r, t.parent = e;
				var i = t[a];
				i ? (n._traverseNodes(t[a], t), c === l && (t[c] = n.getTotalValue(i))) : (c === l && (t[c] = 1), r + 1 > n.levels && (n.levels = r + 1))
			})
		},
		getNodeValue: function(t) {
			var e = this,
				r = e.getValueField();
			return t[r]
		},
		getNodeRange: function(t, e, r) {
			var i, n = this,
				a = t[o],
				c = n.levels,
				s = e.indexOf(t),
				l = t.parent,
				u = 0,
				h = 1,
				f = 0;
			if (l ? (i = n.getNodeValue(l), h = r.end.x - r.start.x, f = r.start.x) : i = n.getTotalValue(e), s > 0) {
				var d = e.slice(0, s);
				u = n.getTotalValue(d)
			}
			var p = n.getNodeValue(t),
				g = {
					start: {
						x: u / i * h + f,
						y: a / c
					},
					end: {
						x: (u + p) / i * h + f,
						y: (a + 1) / c
					}
				};
			return g
		},
		getTotalValue: function(t) {
			var e = this,
				r = e.getValueField(),
				n = 0;
			return i.each(t, function(t) {
				n += t[r]
			}), n
		},
		getStatObject: function(t, e) {
			var r = i.mix({}, t);
			return r[c] = (e.end.x + e.start.x) / 2, r[s] = (e.end.y + e.start.y) / 2, r
		},
		_extractData: function(t, e, r) {
			var n = this,
				a = n.getChildrenField();
			i.each(t, function(i) {
				var c = n.getNodeRange(i, t, r),
					s = n.getStatObject(i, c);
				e.push(s), i[a] && n._extractData(i[a], e, c)
			})
		},
		execFrame: function(t) {
			var e = this,
				r = t.toJSON(),
				i = [];
			e._traverseNodes(r), e._extractData(r, i, 0);
			var t = new a(i);
			return t
		}
	}), t.exports = u
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(44),
		a = r(2),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	i.extend(c, n), i.augment(c, {
		fractions: 10,
		execFrame: function(t) {
			var e = this,
				r = t.toJSON();
			i.each(r, function(t) {
				e.toBin(t)
			});
			var n = new a(r);
			return e.execQuantile(n)
		},
		getSplitArray: function() {
			for (var t = this, e = t.fractions, r = [], i = 1 / e, n = 0; 1 >= n; n += i) r.push(n);
			return r
		},
		execQuantile: function(t) {
			var e = this,
				r = [],
				n = e.getDims(),
				c = n[n.length - 1],
				s = n.slice(0, n.length - 1),
				l = a.group(t, s),
				o = e.getSplitArray();
			return i.each(l, function(t) {
				var e = t.rowObject(0);
				e[c] = a.quantile(t, c, o), r.push(e)
			}), new a(r)
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(32),
		n = r(1),
		a = r(2),
		c = "..density",
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	n.extend(s, i), n.augment(s, {
		type: "density",
		bandWidth: .01,
		colRange: {},
		initDims: function(t) {
			t.push(c)
		},
		execFrame: function(t) {
			return t
		},
		getWindowWidth: function(t, e) {
			var r = a.max(t, e),
				i = a.min(t, e),
				n = (r - i) * this.bandWidth;
			return n
		},
		getCoordinate: function(t, e, r) {
			for (var i = this, n = i.getDimRange(t, e), a = n.max, c = n.min, s = [], l = c; a >= l; l += r) s.push(l);
			return s
		},
		getDimRange: function(t, e) {
			var r = this,
				i = r.colRange[e];
			if (!i) {
				var n = a.range(t, e);
				i = {
					min: n[0],
					max: n[1]
				}
			}
			return i
		},
		setRange: function(t, e) {
			this.colRange[t] = e
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(2);
	t.exports = {
		exec: function(t) {
			var e = this;
			e.preExecute(t), this.stat && (t = this.stat.exec(t));
			var r = [],
				a = n.merge.apply(null, t),
				c = e.getGroupCondition(),
				s = n.groupToMap(a, c);
			if (t.length > 1) i.each(t, function(t) {
				var i = e.execFrame(t, s);
				r.push(i)
			});
			else {
				var l = e.execFrame(t[0]);
				r.push(l)
			}
			return r
		},
		execFrame: function(t, e) {
			var r = this,
				a = r.getGroupCondition(),
				c = n.groupToMap(t, a),
				s = [],
				l = r.getStatDims()[0];
			return i.each(c, function(i, n) {
				var a = e ? e[n] : t,
					c = r.transform(i, l, a);
				s.push(c)
			}), n.merge.apply(null, s)
		}
	}
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		t.sort(function(t, r) {
			return t[e] - r[e]
		})
	}

	function n(t, e) {
		var r = 0;
		return a.each(t, function(t) {
			r += t[e]
		}), r
	}
	var a = r(1),
		c = function(t) {
			return t
		},
		s = function(t) {
			a.mix(this, t), this.rect = this.rect || {
				x: 0,
				y: 0,
				dx: 1,
				dy: 1
			}, this.init()
		};
	a.augment(s, {
		nodes: null,
		rect: null,
		valueField: "value",
		childrenField: "children",
		init: function() {
			var t = this,
				e = t.nodes,
				r = t.rect,
				c = t.valueField;
			i(e, c), a.each(e, function(e) {
				t._traverse(e)
			});
			var s = n(e, c);
			t.processNodes(e, r, s)
		},
		_traverse: function(t, e) {
			var r = this;
			e = e || 0, t.depth = e;
			var n = r.childrenField;
			t.parent || (t.parent = null);
			var c = t[n];
			a.isArray(c) && (i(c, r.valueField), a.each(c, function(i) {
				i.parent = t, r._traverse(i, e + 1)
			}))
		},
		getNodes: function() {
			return this.nodes
		},
		changeNodes: function(t) {
			return this.nodes = t, this.init(), this
		},
		processNodes: function() {},
		pad: function(t) {
			var e = {
				x: t.x,
				y: t.y,
				dx: t.dx,
				dy: t.dy
			};
			return e
		},
		position: function(t, e, r, i) {
			var n, a = -1,
				s = t.length,
				l = r.x,
				o = r.y,
				u = e ? c(t.area / e) : 0;
			if (e === r.dx) {
				for ((i || u > r.dy) && (u = r.dy); ++a < s;) n = t[a], n.x = l, n.y = o, n.dy = u, l += n.dx = Math.min(r.x + r.dx - l, u ? c(n.area / u) : 0);
				n.z = !0, n.dx += r.x + r.dx - l, r.y += u, r.dy -= u
			} else {
				for ((i || u > r.dx) && (u = r.dx); ++a < s;) n = t[a], n.x = l, n.y = o, n.dx = u, o += n.dy = Math.min(r.y + r.dy - o, u ? c(n.area / u) : 0);
				n.z = !1, n.dy += r.y + r.dy - o, r.x += u, r.dx -= u
			}
		},
		scale: function(t, e) {
			for (var r, i, n = -1, a = t.length, c = this.valueField; ++n < a;) i = (r = t[n])[c] * (0 > e ? 0 : e), r.area = isNaN(i) || 0 >= i ? 0 : i
		}
	}), t.exports = s
}, function(t, e, r) {
	var i = r(233);
	i.Tweengit = r(84), i.Ease = r(83), t.exports = i
}, function(t, e) {
	var r = {
		linear: function(t) {
			return t
		},
		easeInQuad: function(t) {
			return t * t
		},
		easeOutQuad: function(t) {
			return -1 * t * (t - 2)
		},
		easeInOutQuad: function(t) {
			return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
		},
		easeInCubic: function(t) {
			return t * t * t
		},
		easeOutCubic: function(t) {
			return 1 * ((t = t / 1 - 1) * t * t + 1)
		},
		easeInOutCubic: function(t) {
			return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
		},
		easeInQuart: function(t) {
			return t * t * t * t
		},
		easeOutQuart: function(t) {
			return -1 * ((t = t / 1 - 1) * t * t * t - 1)
		},
		easeInOutQuart: function(t) {
			return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
		},
		easeInQuint: function(t) {
			return 1 * (t /= 1) * t * t * t * t
		},
		easeOutQuint: function(t) {
			return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
		},
		easeInOutQuint: function(t) {
			return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
		},
		easeInSine: function(t) {
			return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
		},
		easeOutSine: function(t) {
			return 1 * Math.sin(t / 1 * (Math.PI / 2))
		},
		easeInOutSine: function(t) {
			return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
		},
		easeInExpo: function(t) {
			return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
		},
		easeOutExpo: function(t) {
			return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
		},
		easeInOutExpo: function(t) {
			return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
		},
		easeInCirc: function(t) {
			return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
		},
		easeOutCirc: function(t) {
			return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
		},
		easeInOutCirc: function(t) {
			return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
		},
		easeInElastic: function(t) {
			var e = 1.70158,
				r = 0,
				i = 1;
			return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (r || (r = .3), i < Math.abs(1) ? (i = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / r)))
		},
		easeOutElastic: function(t) {
			var e = 1.70158,
				r = 0,
				i = 1;
			return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (r || (r = .3), i < Math.abs(1) ? (i = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / r) + 1)
		},
		easeInOutElastic: function(t) {
			var e = 1.70158,
				r = 0,
				i = 1;
			return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (r || (r = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / r)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / r) * .5 + 1)
		},
		easeInBack: function(t) {
			var e = 1.70158;
			return 1 * (t /= 1) * t * ((e + 1) * t - e)
		},
		easeOutBack: function(t) {
			var e = 1.70158;
			return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
		},
		easeInOutBack: function(t) {
			var e = 1.70158;
			return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
		},
		easeInBounce: function(t) {
			return 1 - r.easeOutBounce(1 - t)
		},
		easeOutBounce: function(t) {
			return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
		},
		easeInOutBounce: function(t) {
			return .5 > t ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5
		}
	};
	t.exports = r
}, function(t, e, r) {
	"use strict";
	var i = r(14),
		n = r(55),
		a = r(83),
		c = function(t) {
			c.superclass.constructor.call(this, t), this._init()
		};
	n.extend(c, i), c.ATTRS = {
		type: "tween",
		canvas: null,
		target: null,
		easing: "linear",
		startTime: null,
		endTime: null,
		duration: null,
		ratio: 0,
		delay: 0,
		needsDestroy: !1,
		available: !0,
		callBack: null,
		currentFrame: null,
		startKeyFrame: {
			attrs: null,
			matrix: null
		},
		endKeyFrame: {
			attrs: null,
			matrix: null
		}
	}, n.augment(c, {
		_init: function() {
			var t = this.get("delay"),
				e = this.get("startTime"),
				r = this.get("duration");
			this.set("endTime", e + t + r)
		},
		_autoSetStartKeyFrame: function() {
			var t = this.get("target"),
				e = this.get("endKeyFrame"),
				r = n.mix({}, n.getTargetAttrs(t, e.attrs)),
				i = t.getMatrix().clone();
			this.set("startKeyFrame", {
				attrs: r,
				matrix: i
			})
		},
		tryStep: function(t) {
			var e = this.get("startTime"),
				r = this.get("delay"),
				i = (this.get("duration"), this.get("startKeyFrame")),
				n = e + r;
			return t >= n ? (i.attrs || i.matrix || this._autoSetStartKeyFrame(), void this.step(t)) : !1
		},
		step: function(t) {
			var e, r, i = this.get("target"),
				c = this.get("startTime"),
				s = this.get("delay"),
				l = t - c + s,
				o = this.get("duration"),
				u = this.get("startKeyFrame"),
				h = this.get("endKeyFrame"),
				f = this.get("easing");
			r = l / o, r = 0 >= r ? 0 : r >= 1 ? 1 : r, r = a[f](r), e = n.getFrame(r, u, h), i.attr(e.attrs), i.setMatrix(e.matrix), this.set("ratio", r), this.set("currentFrame", e), this.updateStatus()
		},
		updateStatus: function() {
			var t = this.get("ratio"),
				e = this.get("callBack"),
				r = this.get("target");
			t >= 1 && (this.set("needsDestroy", !0), e && e(r))
		},
		reset: function() {
			this.set("ratio", 0), this.set("needsDestroy", !1)
		},
		play: function() {
			var t = this,
				e = t.get("target"),
				r = e.get("canvas"),
				i = t.get("available"),
				a = t.get("ratio"),
				c = t.get("callBack"),
				s = +new Date;
			t.step(s), r.draw(), n.requestAnimationFrame(function() {
				return i ? a >= 1 ? (c && c(), void t.destroy()) : void(a >= 0 && t.play()) : void 0
			})
		},
		animate: function(t, e, r, i, a) {
			var c = n.getKeyFrameByProps(t, e);
			this.set("target", t), this.set("startTime", +new Date), this.set("duration", r), this.set("startKeyFrame", c[0]), this.set("endKeyFrame", c[1]), this.set("easing", i), this.set("callBack", a), this.play()
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(13),
		a = r(238),
		c = r(244),
		s = r(243),
		l = function(t) {
			this.__cfg = {};
			var e = this.getDefaultCfg();
			i.mix(this.__cfg, l.CFG, e, t), this.__cfg.uuid = i.guid(n.prefix), this.initAttrs(this.__cfg.attrs), this.initTransform(), this.initEventDispatcher(), this.init()
		};
	l.CFG = {
		id: null,
		zIndex: 0,
		canvas: null,
		parent: null,
		capture: !0,
		context: null,
		visible: !0,
		destroyed: !1
	}, i.augment(l, a, c, s, {
		init: function() {},
		getDefaultCfg: function() {
			return {}
		},
		set: function(t, e) {
			var r = this,
				n = "__set" + i.ucfirst(t);
			return r[n] && (e = r[n](e)), r.__cfg[t] = e, this
		},
		get: function(t) {
			return this.__cfg[t]
		},
		beforeDraw: function() {},
		draw: function() {
			var t = this,
				e = t.get("context"),
				r = t.__attrs.clip;
			t.beforeDraw(), t.get("visible") && (e.save(), r && (e.save(), r.resetTransform(), r.createPath(), e.restore(), e.clip()), t.resetAttrs(), t.resetTransform(), t.drawInner(), e.restore())
		},
		drawInner: function() {},
		show: function() {
			return this.set("visible", !0), this
		},
		hide: function() {
			return this.set("visible", !1), this
		},
		remove: function(t) {
			var e = this;
			if (void 0 === t && (t = !0), e.get("parent")) {
				var r = e.get("parent"),
					n = r.get("children");
				i.remove(n, e), e.set("parent", null)
			}
			return t && e.destroy(), e
		},
		destroy: function() {
			var t = this,
				e = t.get("destroyed");
			return e ? void 0 : (t.__cfg = {}, t.__attrs = null, t.__listeners = null, t.__m = null, t.set("destroyed", !0), t)
		},
		__setZIndex: function(t) {
			var e = this;
			return this.__cfg.zIndex = t, i.notNull(e.get("parent")) && e.get("parent").sort(), t
		},
		__setAttrs: function(t) {
			var e = this;
			return e.attr(t), t
		},
		clone: function() {
			return i.clone(this)
		},
		getBBox: function() {
			return {
				minX: 0,
				maxX: 0,
				minY: 0,
				maxY: 0
			}
		}
	}), t.exports = l
}, function(t, e, r) {
	"use strict";

	function i(t) {
		i.superclass.constructor.call(this, t), this.set("children", [])
	}
	var n = r(5),
		a = r(85),
		c = (r(7), r(3)),
		s = c.Vector3;
	n.extend(i, a), n.augment(i, {
		isGroup: !0,
		canFill: !0,
		canStroke: !0,
		remove: function(t, e) {
			var r = this;
			if (arguments.length >= 2) r.contain(t) && t.remove(e);
			else {
				if (1 === arguments.length) {
					if (!n.isBoolean(t)) return r.contain(t) && t.remove(!0), r;
					e = t
				}
				0 === arguments.length && (e = !0), i.superclass.remove.call(r, e)
			}
			return r
		},
		add: function(t) {
			var e = this,
				r = e.get("children");
			if (n.isArray(t)) n.each(t, function(t) {
				t.get("parent") && t.get("parent").remove(t, !1), e.__setEvn(t)
			}), r.push.apply(r, t);
			else {
				var i = t;
				i.get("parent") && i.get("parent").remove(i, !1), e.__setEvn(i), r.push(i)
			}
			return e
		},
		contain: function(t) {
			for (var e = this, r = e.get("children"), i = 0, n = r.length; n > i; i++)
				if (r[i] === t) return !0;
			return !1
		},
		__setEvn: function(t) {
			var e = this;
			t.set("parent", e), t.set("context", e.get("context"));
			var r = t.__attrs.clip;
			r && (r.set("parent", e), r.set("context", e.get("context"))), t.set("canvas", e.get("canvas")), n.each(t.get("children"), function(e) {
				t.__setEvn(e)
			})
		},
		getBBox: function() {
			var t = this,
				e = 1 / 0,
				r = -(1 / 0),
				i = 1 / 0,
				a = -(1 / 0),
				c = t.get("children");
			return n.each(c, function(t) {
				if (t.get("visible")) {
					var n = t.getBBox("box");
					if (!n) return !0;
					var c = new s(n.minX, n.minY, 1),
						l = new s(n.minX, n.maxY, 1),
						o = new s(n.maxX, n.minY, 1),
						u = new s(n.maxX, n.maxY, 1);
					t.apply(c), t.apply(l), t.apply(o), t.apply(u);
					var h = Math.min(c.x, l.x, o.x, u.x),
						f = Math.max(c.x, l.x, o.x, u.x),
						d = Math.min(c.y, l.y, o.y, u.y),
						p = Math.max(c.y, l.y, o.y, u.y);
					e > h && (e = h), f > r && (r = f), i > d && (i = d), p > a && (a = p)
				}
			}), {
				minX: e,
				minY: i,
				maxX: r,
				maxY: a
			}
		},
		drawInner: function() {
			var t = this,
				e = t.get("children");
			return n.each(e, function(t) {
				t.draw()
			}), t
		},
		getCount: function() {
			var t = this;
			return t.get("children").length
		},
		sort: function() {
			var t = this,
				e = t.get("children");
			return e.sort(function(t, e) {
				return t.get("zIndex") - e.get("zIndex")
			}), t
		},
		find: function(t) {
			var e = this;
			return e.findBy(function(e) {
				return e.get("id") === t
			})
		},
		findBy: function(t) {
			var e = this,
				r = e.get("children"),
				i = null;
			return n.each(r, function(e) {
				return t(e) ? i = e : e.findBy && (i = e.findBy(t)), i ? !1 : void 0
			}), i
		},
		getShape: function(t, e) {
			function r() {
				for (var r = c.length - 1; r >= 0; r--) {
					var n = c[r];
					if (n.get("visible") && n.get("capture") && (n.isGroup ? i = n.getShape(t, e) : n.isHit(t, e) && (i = n)), i) break
				}
			}
			var i, n = this,
				a = n.__attrs.clip,
				c = n.get("children");
			return a ? a.inside(t, e) && r() : r(), i
		},
		clear: function() {
			for (var t = this, e = t.get("children"); 0 !== e.length;) e[e.length - 1].remove();
			return t
		},
		destroy: function() {
			var t = this;
			t.get("destroyed") || (t.clear(), i.superclass.destroy.call(t))
		}
	}), t.exports = i
}, function(t, e, r) {
	"use strict";

	function i(t, e, r) {
		var i = d.exec(t),
			n = o.mod(o.degreeToRad(parseFloat(i[1])), 2 * Math.PI),
			a = i[2],
			s = e.getBBox();
		if (n >= 0 && n < .5 * Math.PI) var l = {
				x: s.minX,
				y: s.minY
			},
			u = {
				x: s.maxX,
				y: s.maxY
			};
		else if (.5 * Math.PI <= n && n < Math.PI) var l = {
				x: s.maxX,
				y: s.minY
			},
			u = {
				x: s.minX,
				y: s.maxY
			};
		else if (Math.PI <= n && n < 1.5 * Math.PI) var l = {
				x: s.maxX,
				y: s.maxY
			},
			u = {
				x: s.minX,
				y: s.minY
			};
		else var l = {
				x: s.minX,
				y: s.maxY
			},
			u = {
				x: s.maxX,
				y: s.minY
			};
		var h = Math.tan(n),
			f = h * h,
			p = (u.x - l.x + h * (u.y - l.y)) / (f + 1) + l.x,
			g = h * (u.x - l.x + h * (u.y - l.y)) / (f + 1) + l.y,
			y = e.get("context"),
			v = y.createLinearGradient(l.x, l.y, p, g);
		return c(a, v, r), v
	}

	function n(t, e, r) {
		var i = p.exec(t),
			n = parseFloat(i[1]),
			a = parseFloat(i[2]),
			s = parseFloat(i[3]),
			l = i[4],
			o = e.getBBox(),
			u = e.get("context"),
			h = o.maxX - o.minX,
			f = o.maxY - o.minY,
			d = Math.sqrt(h * h + f * f) / 2,
			g = u.createRadialGradient(o.minX + h * n, o.minY + f * a, s, o.minX + h / 2, o.minY + f / 2, d);
		return c(l, g, r), g
	}

	function a(t, e) {
		var r = g.exec(t),
			i = r[1],
			n = r[2];
		switch (i) {
			case "a":
				i = "repeat";
				break;
			case "x":
				i = "repeat-x";
				break;
			case "y":
				i = "repeat-y";
				break;
			case "n":
				i = "no-repeat";
				break;
			default:
				i = "no-repeat"
		}
		var a = document.getElementById(n),
			c = e.get("context"),
			s = c.createPattern(a, i);
		return s
	}

	function c(t, e, r) {
		var i = t.match(y);
		l.each(i, function(t) {
			t = t.split(":");
			var i = s(t[1], r);
			e.addColorStop(t[0], i)
		})
	}

	function s(t, e) {
		if (void 0 === e) return t;
		t = new u(t), t.multiplyA(e);
		var r = t.getType();
		return "hsl" === r ? t.getHSLStyle() : "rgb" === r ? t.getRGBStyle() : void 0
	}
	var l = r(5),
		o = r(4),
		u = r(37),
		h = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
		f = /[^\s\,]+/gi,
		d = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,
		p = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,
		g = /^p\s*([axyn])\s+(.*)/i,
		y = /[\d.]+:(#[^\s]+|[^\)]+\))/gi,
		v = {
			parsePath: function(t) {
				return t = t || [], l.isArray(t) ? t : l.isString(t) ? (t = t.match(h), l.each(t, function(e, r) {
					if (e = e.match(f), e[0].length > 1) {
						var i = e[0].charAt(0);
						e.splice(1, 0, e[0].substr(1)), e[0] = i
					}
					l.each(e, function(t, r) {
						isNaN(t) || (e[r] = +t)
					}), t[r] = e
				}), t) : void 0
			},
			parseStyle: function(t, e, r) {
				return l.isString(t) ? d.test(t) ? i(t, e, r) : p.test(t) ? n(t, e, r) : g.test(t) ? a(t, e) : s(t, r) : void 0
			}
		};
	t.exports = v
}, function(t, e, r) {
	"use strict";
	var i = r(3),
		n = i.Vector2;
	t.exports = {
		at: function(t, e, r) {
			return (e - t) * r + t
		},
		pointDistance: function(t, e, r, i, a, c) {
			var s = new n(r - t, i - e);
			if (s.isZero()) return NaN;
			var l = s.vertical();
			l.normalize();
			var o = new n(a - t, c - e);
			return Math.abs(o.dot(l))
		},
		box: function(t, e, r, i, n) {
			var a = n / 2,
				c = Math.min(t, r),
				s = Math.max(t, r),
				l = Math.min(e, i),
				o = Math.max(e, i);
			return {
				minX: c - a,
				minY: l - a,
				maxX: s + a,
				maxY: o + a
			}
		}
	}
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(90),
		a = r(2),
		c = r(34),
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	i.extend(s, n), i.augment(s, {
		dims: [],
		cols: 5,
		rows: null,
		drawTitles: function(t, e) {
			var r = this,
				n = r.dims;
			i.each(t, function(t) {
				r.drawFacetTitle("col", t, e)
			}), r.drawDimTitle("col", n[0], e)
		},
		getRegion: function(t, e, r, i) {
			var n = this,
				a = n.plotRange,
				c = n.margin,
				s = a.tl,
				l = a.br,
				o = (l.x - s.x) / e,
				u = (l.y - s.y) / t,
				h = {
					x: s.x + o * r,
					y: s.y + u * (i + 1) - c
				},
				f = {
					x: h.x + o - c,
					y: h.y - u + c
				};
			return {
				start: h,
				end: f
			}
		},
		generateFacets: function(t) {
			var e = this,
				r = e.dims,
				n = r[0];
			if (!n) throw new Error("Please specify for the field for facet!");
			var s = e.getDimValues(n, t),
				l = s.length,
				o = e.cols,
				u = parseInt((l + o - 1) / o, 10),
				h = [],
				f = 0;
			return i.each(s, function(r, i) {
				var d = parseInt(i / o, 10),
					p = i % o,
					g = [{
						dim: n,
						value: r,
						values: s
					}],
					y = e.getFilter(g),
					v = a.filter(t, y),
					m = new c({
						type: e.type,
						count: l,
						xValue: r,
						xDim: n,
						yValue: r,
						yDim: n,
						colIndex: p,
						rowIndex: d,
						cols: o,
						rows: u,
						frame: v,
						region: e.getRegion(u, o, p, d),
						index: f++
					});
				h.push(m)
			}), h
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(2),
		a = r(45),
		c = r(34),
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	i.extend(s, a), i.augment(s, {
		dims: [],
		defs: {},
		type: "rect",
		plotRange: null,
		drawTitles: function(t, e) {
			if (!(t.length <= 1)) {
				var r = this,
					n = t[0];
				i.each(t, function(t) {
					t.cols > 0 && t.rowIndex === t.rows - 1 && r.drawFacetTitle("col", t, e), t.rows > 0 && t.colIndex === t.cols - 1 && r.drawFacetTitle("row", t, e)
				}), n && (n.cols > 1 && r.drawDimTitle("col", n.xDim, e), n.rows > 1 && r.drawDimTitle("row", n.yDim, e))
			}
		},
		getRegion: function(t, e, r, i) {
			var n = this,
				a = n.plotRange,
				c = 1 === t && 1 === e ? 0 : n.margin,
				s = a.bl,
				l = a.tr,
				o = (l.x - s.x) / e,
				u = (l.y - s.y) / t,
				h = {
					x: s.x + o * r,
					y: s.y + u * i - c
				},
				f = {
					x: h.x + o - c,
					y: h.y + u + c
				};
			return {
				start: h,
				end: f
			}
		},
		generateFacets: function(t) {
			var e = this,
				r = e.dims,
				a = [],
				s = 1,
				l = 1,
				o = r[0],
				u = r[1],
				h = [""],
				f = [""];
			o && (h = e.getDimValues(o, t), l = h.length), u && (f = e.getDimValues(u, t), s = f.length);
			var d = 0;
			return i.each(h, function(r, p) {
				i.each(f, function(i, g) {
					var y = [{
							dim: o,
							value: r,
							values: h
						}, {
							dim: u,
							value: i,
							values: f
						}],
						v = e.getFilter(y),
						m = n.filter(t, v),
						x = new c({
							type: e.type,
							xValue: r,
							yValue: i,
							xDim: o,
							yDim: u,
							colIndex: p,
							rowIndex: g,
							cols: l,
							rows: s,
							frame: m,
							region: e.getRegion(s, l, p, g),
							index: d++
						});
					a.push(x)
				})
			}), a
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = {
		Point: r(301),
		Path: r(59),
		Line: r(94),
		Interval: r(293),
		Area: r(290),
		Polygon: r(302),
		Schema: r(303),
		Heatmap: r(292),
		Contour: r(291)
	};
	t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(93),
		a = r(26),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	i.extend(c, n), i.augment(c, {
		getPointRauis: function(t, e) {
			return a.getPointRadius(t, e)
		},
		getCirclePoint: function(t, e, r) {
			var i = this,
				n = i.get("coord"),
				a = n.getCenter(),
				c = i.getPointRauis(n, r);
			if (n.isTransposed && c > e) {
				var s = Math.asin(e / (2 * c));
				t += 2 * s
			} else c += e;
			return {
				x: a.x + c * Math.cos(t),
				y: a.y + c * Math.sin(t),
				angle: t,
				r: c
			}
		},
		getArcPoint: function(t, e) {
			var r, n = this;
			return e = e || 0, r = i.isArray(t.x) || i.isArray(t.y) ? {
				x: i.isArray(t.x) ? t.x[e] : t.x,
				y: i.isArray(t.y) ? t.y[e] : t.y
			} : t, n.transLabelPoint(r), r
		},
		getPointAngle: function(t) {
			var e = this,
				r = e.get("coord");
			return a.getPointAngle(r, t)
		},
		getMiddlePoint: function(t) {
			var e = this,
				r = e.get("coord"),
				n = t.length,
				a = {
					x: 0,
					y: 0
				};
			return i.each(t, function(t) {
				a.x += t.x, a.y += t.y
			}), a.x /= n, a.y /= n, a = r.convert(a)
		},
		_isToMiddle: function(t) {
			return t.x.length > 2
		},
		getLabelPoint: function(t, e, r) {
			var i, n = this,
				a = t[r],
				c = 1;
			n._isToMiddle(e) ? i = n.getMiddlePoint(e.points) : (1 === t.length && 0 === r ? r = 1 : 0 === r && (c = -1), i = n.getArcPoint(e, r));
			var s = n.getDefaultOffset();
			s *= c;
			var l = n.getPointAngle(i),
				o = n.getCirclePoint(l, s, i);
			return o.text = a, o.angle = l, o.color = e.color, o.rotate = n.getLabelRotate(l, s, e), o
		},
		_isEmitLabels: function() {
			var t = this.get("labels");
			return t.labelEmit
		},
		getLabelRotate: function(t) {
			var e, r = this;
			return e = 180 * t / Math.PI, e += 90, r._isEmitLabels() && (e -= 90), e && (e > 90 ? e -= 180 : -90 > e && (e += 180)), e
		},
		getLabelAlign: function(t) {
			var e, r = this,
				i = r.get("coord");
			if (i.isTransposed) {
				var n = i.getCenter(),
					a = r.getDefaultOffset();
				e = Math.abs(t.x - n.x) < 1 ? "middle" : t.angle > Math.PI || t.angle <= 0 ? a > 0 ? "start" : "end" : a > 0 ? "end" : "start"
			} else e = "middle";
			return e
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";

	function i(t) {
		var e = 0;
		return l.each(t, function(t) {
			e += t
		}), e / t.length
	}
	var n = r(11),
		a = n.Components,
		c = a.Labels,
		s = n.Group,
		l = r(1),
		o = r(6),
		u = ["line", "point", "path"],
		h = function(t) {
			h.superclass.constructor.call(this, t)
		};
	h.CFG = {
		labels: o.labels,
		labelsCfg: null,
		coord: null,
		geomType: null,
		zIndex: 6
	}, l.extend(h, s), l.mixin(h, [c.ShowLabels]), l.augment(h, {
		_renderUI: function() {
			h.superclass._renderUI.call(this), this.initLabelsCfg(), this.renderLabels()
		},
		initLabelsCfg: function() {
			var t = this,
				e = t.getDefaultLabelCfg(),
				r = t.get("labelsCfg");
			l.mix(!0, e, r), t.set("labels", e)
		},
		getDefaultLabelCfg: function() {
			var t = this,
				e = t.get("labelsCfg"),
				r = t.get("geomType");
			return "polygon" === r || e && e.offset < 0 && -1 === l.indexOf(u, r) ? l.mix(!0, {}, o.innerLabels) : this.get("labels")
		},
		getLabelsItems: function(t) {
			var e = this,
				r = [],
				i = e.get("labels");
			return l.each(t, function(t) {
				var n = t.label;
				l.isArray(n) || (n = [n]);
				var a = n.length;
				l.each(n, function(c, s) {
					var o = e.getLabelPoint(n, t, s);
					if (o) {
						o = l.mix({}, t._origin, o);
						var u;
						u = i && i.label && i.label["text-anchor"] ? i.label["text-anchor"] : e.getLabelAlign(o, s, a), o["text-anchor"] = u, r.push(o)
					}
				})
			}), r
		},
		adjustItems: function(t) {
			return t
		},
		drawLines: function() {},
		getLabelPoint: function(t, e, r) {
			function n(e, r) {
				return l.isArray(e) && (e = 1 === t.length ? e.length <= 2 ? e[e.length - 1] : i(e) : e[r]), e
			}
			var a = this,
				c = {
					x: n(e.x, r),
					y: n(e.y, r),
					text: t[r]
				},
				s = a.getLabelOffset(c, r, t.length);
			return a.transLabelPoint(c), c.x += s.x, c.y += s.y, c
		},
		transLabelPoint: function(t) {
			var e = this,
				r = e.get("coord"),
				i = r.trans(t.x, t.y, 1);
			t.x = i.x, t.y = i.y
		},
		getOffsetVector: function() {
			var t, e = this,
				r = e.get("labels"),
				i = r.offset || 0,
				n = e.get("coord");
			return t = n.isTransposed ? n.trans(i, 0) : n.trans(0, i)
		},
		getDefaultOffset: function() {
			var t = this,
				e = 0,
				r = t.get("coord"),
				i = t.getOffsetVector();
			return e = r.isTransposed ? i.x : i.y
		},
		getLabelOffset: function(t, e, r) {
			var i = this,
				n = i.getDefaultOffset(),
				a = i.get("coord"),
				c = a.isTransposed,
				s = c ? "x" : "y",
				l = c ? 1 : -1,
				o = {
					x: 0,
					y: 0
				};
			return e > 0 || 1 === r ? o[s] = n * l : o[s] = n * l * -1, o
		},
		getLabelAlign: function(t, e, r) {
			var i = this,
				n = "middle",
				a = i.get("coord");
			if (a.isTransposed) {
				var c = i.getDefaultOffset();
				n = 0 > c ? "end" : 0 === c ? "middle" : "start", r > 1 && 0 === e && ("end" === n ? n = "start" : "start" === n && (n = "end"))
			}
			return n
		},
		showLabels: function(t) {
			var e = this,
				r = e.getLabelsItems(t),
				i = e.get("labels");
			r = e.adjustItems(r), e.resetLabels(r), i.labelLine && e.drawLines(r, i.labelLine)
		},
		destroy: function() {
			this.removeLabels(), h.superclass.destroy.call(this)
		}
	}), t.exports = h
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(59),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	a.ATTRS = {
		type: "line"
	}, i.extend(a, n), i.augment(a, {
		framePreprocess: function(t) {
			var e = this,
				r = [];
			return i.each(t, function(t) {
				r.push(e.sortFrame(t))
			}), r
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		e = e.replace(" ", "");
		var r = /([a-z]+)\((\S+),(\S+)\)/gi,
			i = r.exec(e);
		t[i[1]](i[2], i[3])
	}

	function n(t) {
		for (var e = t.split(" "), r = [], i = 0; i < e.length; i += 2) r.push([e[i], e[i + 1]]);
		return r
	}

	function a(t) {
		return t.strokeWidth && (t.lineWidth = t.strokeWidth), t.d && (t.path = t.d), t.points && (t.points = n(t.points)), t
	}
	var c = r(16),
		s = c.Util,
		l = c.Canvas,
		o = l.Group,
		u = function h(t) {
			h.superclass.constructor.call(this, t), this._init()
		};
	s.extend(u, o), u.CFG = {
		svgson: null
	}, s.augment(u, {
		_init: function() {
			var t = this.get("svgson");
			this._makeTree(t, this)
		},
		_makeTree: function(t, e) {
			var r, n = this,
				c = e,
				l = t.attrs.transform,
				o = t.attrs,
				u = t.name,
				h = t.childs;
			"mask" !== u && "use" !== u && (o.cx && (o.x = Number(o.cx)), o.cy && (o.y = Number(o.cy)), o.r && (o.r = Number(o.r)), "g" === u ? (r = e.addGroup({
				id: o.id,
				attrs: a(o)
			}), c = r) : r = c.addShape(u, {
				id: o.id,
				attrs: a(o)
			}), l && i(r, l), h && s.each(h, function(t, e) {
				n._makeTree(t, c)
			}))
		}
	}), t.exports = u
}, function(t, e, r) {
	"use strict";
	var i = r(3),
		n = r(320),
		a = r(61),
		c = r(16),
		s = c.Util,
		l = (c.Canvas, i.Vector2),
		o = i.Matrix3,
		u = function h(t) {
			h.superclass.constructor.call(this, t), this._init()
		};
	s.extend(u, a), u.ATTRS = {
		id: "",
		starsNum: 300,
		timeline: null,
		containerDOM: null,
		ticks: [{
			lineWidth: .5,
			value: 130,
			stroke: "#2D3D51"
		}, {
			lineWidth: 3,//柱形宽度
			stroke: "#669694"
		}, {
			lineWidth: 3,//柱形宽度
			stroke: "rgba(255,255,255,0.3)"
		}],
		decoratePolygon: {
			stroke: "#85C8C6",
			lineJoin: "round",
			radius: 2
		},
		decorateHaloCircle: {
			lineWidth: 1,
			stroke: "#354252",
			lineDash: !1
		},
		haloCircle: {
			stroke: "#465261",
			lineWidth: 1,
			lineDash: [2, 2]
		},
		pointColor: ["#B64534", "#90ACCF"],
		width: null,
		height: null
	}, s.augment(u, {
		_init: function() {
			this._initDOM(), this._initData(), this._renderUI(), this.drawAll()
		},
		_initData: function() {
			this._setSize()
		},
		_getChartData: function(t) {
			for (var e, r = [], i = 0; t > i; i++) e = i % 2, r.push({
				x: i / t,
				y: e ? .5 + 3.75 * Math.random() : 4.25 + 2.5 * Math.random(),
				r: 10 * Math.random(),
				c: e
			});
			return r
		},
		_renderUI: function() {
			this._renderChart(), this._renderTicks(), this._renderMainHalo1(), this._renderMainHalo2(), this._renderDecorateHalo(), this._renderDecorateTriangle(), this._renderDecorateCircle()
		},
		_getPointByLength: function(t, e, r) {
			var i = l.sub(e, t);
			return i.setLength(r), i.add(t)
		},
		_reCalculateTicksPath1: function(t, e, r) {
			t = s.parsePathString(t);
			for (var i, n, a, c = 2; c < t.length; c++) c % 2 === 1 && (i = t[c - 1], n = t[c], a = this._getPointByLength({
				x: i[1],
				y: i[2]
			}, {
				x: n[1],
				y: n[2]
			}, r + Math.random() * (e - r)), n[1] = a.x, n[2] = a.y);
			return t
		},
		_reCalculateTicksPath2: function(t) {
			return t = s.parsePathString(t), t = s.filter(t, function(t, e) {
				return 0 === e || e % 4 === 0 || e % 4 === 1
			})
		},
		_renderTicks: function() {
			var t = this.get("coord"),
				e = this.get("ticks"),
				r = this.get("ticksShape"),
				i = r.__attrs,
				n = i.path,
				a = r.getParent();
			s.each(a.get("children"), function(t, e) {
				t.setMatrix(new o)
			}), a.transform([
				["m", t.get("matrix")]
			]);
			var c = a.addShape("path", {
					attrs: s.mix({}, i, e[1])
				}),
				l = a.addShape("path", {
					attrs: s.mix({}, i, e[2])
				});
			r.attr("path", this._reCalculateTicksPath2(n)), c.rotateByCenter(189.67), c.attr("path", this._reCalculateTicksPath1(n, 50, 30)), l.rotateByCenter(190.67), l.attr("path", this._reCalculateTicksPath1(n, 80, 10)), this.set("ticksShape1", r), this.set("ticksShape2", c), this.set("ticksShape3", l)
		},
		_renderChart: function() {
			var t, e, r, i, n = (this.get("id"), this.get("width")),
				a = this.get("height"),
				s = this.get("ticks")[0],
				l = this.get("pointColor"),
				u = this.get("starsNum"),
				h = this._getChartData(u),
				f = new c.Chart({
					id: "c1",
					width: n,
					height: a,
					plotCfg: {
						margin: 0
					}
				}),
				d = f.coord("polar"),
				p = f.get("backCanvas"),
				g = f.get("canvas"),
				y = f.get("frontCanvas"),
				v = y.addGroup();
			f.source(h), f.animate(!1), f.legend(!1), f.axis("x", {
					labels: null,
					grid: null,
					line: {
						stroke: "#34475E"
					},
					tickLine: s
				}), f.col("y", {
					min: 0,
					max: 10
				}), f.col("x", {
					min: 1 / 350 - .5,
					max: 1.5,
					tickCount: 50
				}), d.translate = function(t, e) {
					var r = this.actions;
					return r.push(["translate", t, e]), this
				}, d.scale(1.3, 1.3), d.translate(0, a / 2 + 120), f.tooltip(!1), f.axis("y", !1), f.point().position("x*y").size("r", 1.4, .8).color("c", l).shape("circle").style({
					stroke: null,
					fillOpacity: 1
				}), f.render(), t = p.findBy(function(t) {
					return "x-chart-axis-ticks" === t.get("elCls")
				}), r = f.get("views")[0].get("coord"),
				i = r.convertPoint({
					x: 0,
					y: 0
				}), v.transform([
					["m", r.get("matrix")]
				]), e = g.findBy(function(t) {
					return t.get("children").length === u
				}), e.setMatrix(new o), e.transform([
					["t", -i.x, -i.y],
					["s", 1, -1],
					["t", i.x, i.y],
					["m", r.get("matrix")]
				]), this.set("activeGroup", e), this.set("coordGroup", v), this.set("chart", f), this.set("coord", r), this.set("ticksShape", t), this.set("backCanvas", p), this.set("canvas", g), this.set("frontCanvas", y)
		},
		_renderDecorateCircle: function() {
			var t = this.get("coordGroup"),
				e = this.get("coord");
			t.addShape("circle", {
				attrs: s.mix({
					stroke: "#31c7fb",
					r: 3//中心小圆半径
				}, e.convertPoint({
					x: -.03,
					y: .875
				}))
			})
		},
		_getTrianglePoints: function(t, e, r, i) {
			var n = this.get("coord"),
				a = [n.convertPoint({
					x: t,
					y: i
				}), n.convertPoint({
					x: e,
					y: i
				}), n.convertPoint({
					x: r,
					y: i
				})];
			return [
				[a[0].x, a[0].y],
				[a[1].x, a[1].y],
				[a[2].x, a[2].y],
				[a[0].x, a[0].y]
			]
		},
		_updateTrianglePoints: function(t) {
			var e = (this.get("coord"), t.get("ipoints")),
				r = .001 * (Math.random() - .5) + .99 * e[4],
				i = .001 * (Math.random() - .5) + .99 * e[5],
				n = .001 * (Math.random() - .5) + .99 * e[6],
				a = e[0] + .005,
				c = e[1] + .005,
				s = e[2] + .005,
				l = e[3],
				o = this._getTrianglePoints(a, c, s, l);
			t.set("ipoints", [a, c, s, l, r, i, n]), t.attr("points", o)
		},
		_renderDecorateTriangle: function() {
			var t = this.get("coordGroup"),
				e = this.get("coord"),
				r = e.getCenter(),
				i = this.get("decoratePolygon"),
				n = 0,
				a = .3333,
				c = .6666,
				l = .05,//三角形大小
				o = this._getTrianglePoints(n, a, c, l),
				u = t.addShape("polygon", {
					ipoints: [n, a, c, l, 0, 0, 0],
					tx: 0,
					ty: 0,
					attrs: s.mix({}, i, {
						points: o
					})
				}),
				h = t.addShape("polygon", {
					ipoints: [n, a, c, .02, 0, 0, 0],
					attrs: s.mix({}, i, {
						points: o,
						stroke: !1,
						fill: "#0F2334",
						shadowBlur: 10,
						shadowColor: "#33516C"
					})
				}),
				f = t.addShape("polygon", {
					ipoints: [n, a, c, l, 0, 0, 0],
					tx: 0,
					ty: 0,
					attrs: s.mix({}, i, {
						points: o
					})
				}),
				d = t.addShape("polygon", {
					ipoints: [n, a, c, l, 0, 0, 0],
					tx: 0,
					ty: 0,
					attrs: s.mix({}, i, {
						points: o
					})
				}),
				p = e.convertPoint({
					x: .024,
					y: 1.53
				}),
				g = e.convertPoint({
					x: .031,
					y: 1.53
				}),
				y = e.convertPoint({
					x: -.1,
					y: 1.3
				}),
				v = e.convertPoint({
					x: .12,
					y: 1.4
				});
			u.translate(p.x - r.x, p.y - r.y), h.translate(g.x - r.x, g.y - r.y), f.translate(y.x - r.x, y.y - r.y), d.translate(v.x - r.x, v.y - r.y), u.rotateByCenter(10), h.rotateByCenter(-20), this.set("triangle1", u), this.set("triangle2", h), this.set("triangle3", f), this.set("triangle4", d)
		},
		_renderDecorateHalo: function() {
			var width = document.body.clientWidth;
			var t = this.get("coordGroup"),
				e = this.get("coord"),
				r = this.get("decorateHaloCircle"),
				i = e.getCenter(),
				a = e.convertPoint({
					x: 0,
					y: 1.3//左圆半径
				}),
				c = .14 * (i.y - a.y),
				l = t.addGroup(n, s.mix({
					ir: .05 * c,
					r: c,
					count: 3,
					circle: r
				}, e.convertPoint({//左圆位置
					x: -0.08,
					y: width > 1440 ? 1.5 : 1.6
				}))),
				o = .08 * (i.y - a.y),//右圆半径
				u = t.addGroup(n, s.mix({
					ir: .05 * o,
					r: o,
					circle: r,
					count: 3
				}, e.convertPoint({//右圆位置
					x: width > 1440 ? 1.1 : 1.06,
					y: width > 1440 ? 1.73 : 1.85
				})));
			//左圆样式
			l.addDecorate(3, {
				lineDash: [5, 5],
				lineWidth: 1
			}), l.resetCircle(2, {
				lineDash: [10, 10],
				lineWidth: 1.5
			}), l.addDecorate(1, {
				stroke: "#43CBC6",
				lineDash: [10, 10],
				lineWidth: 2.5
			}), u.resetCircle(3, {
				stroke: "#fA394C",
				lineDash: [10, 10]
			}), u.addDecorate(2, {
				stroke: "#505D6D",
				lineDash: [20, 20]
			}), u.resetCircle(1, {
				stroke: "#798F95",
				lineDash: [1, 1]
			}), this.set("decorateCircle1", l), this.set("decorateCircle2", u)
		},
		_renderMainHalo2: function() {
			var t = this.get("coordGroup"),
				e = this.get("coord"),
				r = e.getCenter(),
				i = this.get("haloCircle"),
				a = e.convertPoint({
					x: 0,
					y: 1
				}),
				c = .875 * (r.y - a.y),
				s = t.addGroup(n, {
					x: r.x,
					y: r.y,
					ir: .775 * c,
					r: c,
					count: 5,
					circle: i
				});
			s.resetCircle(5, {
				stroke: "#1E2E3E",
				lineDash: [120, 120]
			}), s.resetCircle(4, {
				lineDash: null
			}), s.resetCircle(3, {
				lineDash: [20, 200, 50],
				stroke: "#1D2F3F",
				lineWidth: 4
			}), s.resetCircle(2, {
				stroke: "#949CA5"
			}), s.resetCircle(1, {
				stroke: "#1B2C3C",
				lineDash: [20, 20],
				lineWidth: 8
			}), s.addDecorate(5, {
				stroke: "#384D61",
				lineDash: [40, 40, 40]
			}), s.addDecorate(4, {
				stroke: "#CEDEF2",
				lineDash: [70, 70]
			}), this.set("halo2", s)
		},
		_renderMainHalo1: function() {
			var t = this.get("coordGroup"),
				e = this.get("coord"),
				r = e.getCenter(),
				i = this.get("haloCircle"),
				a = e.convertPoint({
					x: 0,
					y: 1
				}),
				c = .675 * (r.y - a.y),
				s = t.addGroup(n, {
					x: r.x,
					y: r.y,
					ir: .3 * c,
					r: c,
					count: 5,
					circle: i
				});
			this.set("halo1", s)
		},
		easeOutQuad: function(t) {
			return -2 * t + 2
		},
		drawAll: function() {
			var t = this.get("frontCanvas"),
				e = this.get("canvas"),
				r = this.get("backCanvas");
			t.draw(), r.draw(), e.draw()
		},
		draw: function() {
			var t = this.get("frontCanvas");
			t.draw()
		}
	}), t.exports = u
}, function(t, e, r) {
	"use strict";
	var i = r(16),
		n = i.Util,
		a = i.Canvas,
		c = r(61),
		s = r(95),
		l = (n.getRatio(), r(323)),
		o = function u(t) {
			u.superclass.constructor.call(this, t), this._init()
		};
	n.extend(o, c), o.ATTRS = {
		id: "",
		width: null,
		height: null
	}, n.augment(o, {
		_init: function() {
			this._initDOM(), this._setSize(), this._initCanvas(), this._renderUI()
		},
		_initCanvas: function() {
			var t = this.get("id"),
				e = this.get("width"),
				r = this.get("height"),
				i = new a({
					containerId: t,
					width: e,
					height: r
				});
			this.set("canvas", i)
		},
		_renderUI: function() {
			this._renderMain(), this._renderMask()
		},
		_renderMask: function() {
			var t = this.get("canvas"),
				e = this.get("path1"),
				r = this.get("path2"),
				i = this.get("path3"),
				n = this.get("path4"),
				a = e.getBBBox(),
				c = r.getBBBox(),
				s = i.getBBBox(),
				l = n.getBBBox(),
				o = t.addShape("rect", {
					attrs: {
						x: a.minX,
						y: a.minY,
						width: a.width,
						height: a.height
					}
				}),
				u = t.addShape("rect", {
					attrs: {
						x: c.minX,
						y: c.minY,
						width: c.width,
						height: c.height,
						fillOpacity: .5
					}
				}),
				h = t.addShape("rect", {
					attrs: {
						x: s.minX,
						y: s.minY,
						width: s.width,
						height: s.height,
						fillOpacity: .5
					}
				}),
				f = t.addShape("rect", {
					attrs: {
						x: l.minX,
						y: l.minY,
						width: l.width,
						height: l.height,
						fillOpacity: .5
					}
				});
			o.transform([
				["m", e.getMatrix()],
				["t", 0, a.height]
			]), u.transform([
				["m", r.getMatrix()],
				["t", c.width, 0]
			]), h.transform([
				["m", i.getMatrix()],
				["t", s.width, 0]
			]), f.transform([
				["m", n.getMatrix()],
				["t", l.width, 0]
			]), e.attr("clip", o), r.attr("clip", u), i.attr("clip", h), n.attr("clip", f), this.set("mask1", o), this.set("mask2", u), this.set("mask3", h), this.set("mask4", f)
		},
		_renderMain: function() {
			var t = this.get("canvas"),
				e = t.addGroup(s, {
					svgson: l
				}),
				r = e.find("path-2");
			r.attr("shadowColor", "#75DCD8"), r.attr("shadowBlur", 0), this.set("group1", e), this.set("triangle", r), this.set("path1", e.find("path.1")), this.set("path2", e.find("path.2")), this.set("path3", e.find("path.3")), this.set("path4", e.find("path.4"))
		},
		draw: function() {
			var t = this.get("canvas");
			t.draw()
		}
	}), t.exports = o
}, function(t, e, r) {
	"use strict";
	var i = r(16),
		n = i.Util,
		a = i.Canvas,
		c = r(61),
		s = r(95),
		l = r(324),
		o = r(325),
		u = r(326),
		h = function f(t) {
			f.superclass.constructor.call(this, t), this._init()
		};
	n.extend(h, c), h.ATTRS = {
		id: "",
		width: null,
		height: null,
		triangle: {
			stroke: "#C52C2D",
			lineJoin: "round",
			radius: 2
		},
		path: {
			stroke: "#405669",
			lineDash: [2, 2]
		}
	}, n.augment(h, {
		_init: function() {
			this._initDOM(), this._setSize(), this._initCanvas(), this._renderUI()
		},
		_initCanvas: function() {
			var t = this.get("id"),
				e = this.get("width"),
				r = this.get("height"),
				i = new a({
					containerId: t,
					width: e,
					height: r
				});
			this.set("canvas", i)
		},
		_renderUI: function() {
			this._renderMain(), this._renderTriangle()
		},
		_renderMain: function() {
			var t, e = this.get("canvas"),
				r = e.addGroup(s, {
					svgson: l
				}),
				i = e.addGroup(s, {
					svgson: o
				}),
				a = e.addGroup(s, {
					svgson: u
				}),
				c = e.findAllBy(function(e) {
					return t = e.get("id"), n.isString(t) ? -1 !== e.get("id").indexOf("Oval") && -1 === e.get("id").indexOf("Oval-1056") : !1
				});
			this.set("group1", r), this.set("group2", i), this.set("group3", a), this.set("points", c)
		},
		_getTrianglePoints: function(t, e, r) {
			var i = r / .966,
				n = .5 * r;
			return [
				[t, e - r],
				[t + i, e + n],
				[t - i, e + n],
				[t, e - r]
			]
		},
		_renderTriangle: function() {
			var t = (this.get("canvas"), this.get("group1")),
				e = this.get("triangle"),
				r = t.find("Oval-358-Copy-1108"),
				i = t.find("Oval-358-Copy-1042"),
				a = r.attr("x"),
				c = r.attr("y"),
				s = i.attr("x"),
				l = i.attr("y"),
				o = r.getParent(),
				u = this._getTrianglePoints(a, c, 10),
				h = this._getTrianglePoints(s, l, 8),
				f = n.mix({
					points: u
				}, e),
				d = n.mix({
					points: h
				}, e),
				p = o.addShape("polygon", {
					attrs: f
				}),
				g = o.addShape("polygon", {
					attrs: d
				});
			p.transform([
				["t", -a, -c],
				["r", 60],
				["t", a, c]
			]), g.transform([
				["t", -s, -l],
				["r", 50],
				["t", s, l]
			]), this.set("triangle1", p), this.set("triangle2", g)
		},
		draw: function() {
			var t = this.get("canvas");
			t.draw()
		}
	}), t.exports = h
}, function(t, e) {
	"use strict";

	function r() {
		var t = document.createElement("i");
		return t.title = "Web Colour Picker", t.style.display = "none", document.body.appendChild(t), t
	}
	var i = /rgb\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/;
	t.exports = {
		toRGB: function() {
			var t;
			return document.body && (t = r()),
				function(e) {
					t || (t = r()), t.style.color = e;
					var n = document.defaultView.getComputedStyle(t, "").getPropertyValue("color"),
						a = i.exec(n);
					return a.shift(), this.arr2rgb(a)
				}
		}(),
		toHex: function(t) {
			return t = Math.round(t), t = t.toString(16), 1 === t.length && (t = "0" + t), t
		},
		hsl2Rgb: function(t) {
			var e = t[0],
				r = t[1],
				i = t[2],
				n = {};
			if (0 === r) n.r = n.g = n.b = i;
			else {
				var a = function(t, e, r) {
						return 0 > r && (r += 1), r > 1 && (r -= 1), 1 / 6 > r ? t + 6 * (e - t) * r : .5 > r ? e : 2 / 3 > r ? t + 6 * (e - t) * (2 / 3 - r) : t
					},
					c = .5 >= i ? i * (1 + r) : i + r - i * r,
					s = 2 * i - c;
				n.r = a(s, c, e + 1 / 3), n.g = a(s, c, e), n.b = a(s, c, e - 1 / 3)
			}
			return n.r = Math.min(Math.round(255 * n.r), 255), n.g = Math.min(Math.round(255 * n.g), 255), n.b = Math.min(Math.round(255 * n.b), 255), "#" + this.toHex(n.r) + this.toHex(n.g) + this.toHex(n.b)
		},
		rgb2hsl: function(t) {
			var e, r, i, n = this.rgb2arr(t),
				a = n[0] / 255,
				c = n[1] / 255,
				s = n[2] / 255,
				l = Math.min(a, c, s),
				o = Math.max(a, c, s),
				u = o - l;
			return o == l ? e = 0 : a == o ? e = (c - s) / u : c == o ? e = 2 + (s - a) / u : s == o && (e = 4 + (a - c) / u), e = Math.min(60 * e, 360), 0 > e && (e += 360), i = (l + o) / 2, r = o == l ? 0 : .5 >= i ? u / (o + l) : u / (2 - o - l), [e / 360, r, i]
		},
		arr2rgb: function(t) {
			return "#" + this.toHex(t[0]) + this.toHex(t[1]) + this.toHex(t[2])
		},
		rgb2arr: function(t) {
			var e = [];
			return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), e.push(parseInt(t.substr(5, 2), 16)), e
		}
	}
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
		return t
	}

	function n(t) {
		return null === t || void 0 === t
	}
	var a = r(1),
		c = function(t, e) {
			this.data = t, i(this, e), this.initFrame()
		};
	c.prototype = {
		isFrame: !0,
		initFrame: function() {
			var t = this,
				e = t.data,
				r = t.colNames(),
				i = t.arr;
			if (a.isArray(e[0]) && (i = t.arr = e), !i) {
				i = [];
				for (var n = 0; n < r.length; n++) {
					for (var c = [], s = r[n], l = 0; l < e.length; l++) c.push(e[l][s]);
					i.push(c)
				}
				t.arr = i
			}
		},
		contains: function(t) {
			var e = this.colNames();
			return -1 !== a.indexOf(e, t)
		},
		colNames: function() {
			var t = this,
				e = t.names;
			if (!e) {
				var r = this.data,
					i = r[0];
				if (e = [], i)
					for (var n in i) i.hasOwnProperty(n) && e.push(n);
				t.names = e
			}
			return e
		},
		rowCount: function() {
			var t = this,
				e = t.arr;
			return e && e.length ? e[0].length : 0
		},
		colCount: function() {
			var t = this,
				e = t.colNames();
			return e ? e.length : 0
		},
		colIndex: function(t) {
			return a.indexOf(this.names, t)
		},
		colArray: function(t) {
			return this.col(t).toArray()[0]
		},
		colReplace: function(t, e) {
			var r = this.arr,
				i = this.colNames();
			if (a.isString(t)) {
				var n = t;
				t = a.indexOf(i, n)
			}
			return r[t] = e, this
		},
		each: function(t) {
			for (var e = this, r = e.rowCount(), i = 0; r > i; i++) {
				var n = e._getObject(i);
				t(n, i)
			}
			return e
		},
		row: function(t) {
			var e = this,
				r = e.colNames(),
				i = [];
			return i.push(e._getObject(t, r)), new c(i, {
				names: r.slice(0)
			})
		},
		rowObject: function(t) {
			return this._getObject(t)
		},
		_getObject: function(t, e) {
			var r = this,
				i = r.arr,
				n = {};
			e = e || r.colNames();
			for (var a = 0; a < e.length; a++) n[e[a]] = i[a][t];
			return n
		},
		rows: function(t) {
			var e = this,
				r = e.colNames(),
				i = e.data,
				n = [];
			if (i)
				for (var a = 0; a < t.length; a++) n.push(e._getObject(a, r));
			return new c(n, {
				names: r.slice(0)
			})
		},
		_getColArray: function(t, e, r) {
			var i = this,
				c = i.arr,
				s = i.colNames(),
				l = [],
				o = i.rowCount(),
				u = a.map(t, function(t) {
					return a.indexOf(s, t)
				});
			e = e || 0, r = n(r) ? o : r;
			for (var h = 0; h < u.length; h++) {
				var f = c[u[h]] || [],
					d = f.slice(e, r);
				l.push(d)
			}
			return l
		},
		col: function(t) {
			var e, r = this,
				i = r.colNames();
			a.isString(t) ? (e = t, t = a.indexOf(i, e)) : e = i[t];
			var n = r._getColArray([e]);
			return new c(n, {
				names: [e]
			})
		},
		addCol: function(t, e) {
			var r = this;
			if (a.isFunction(e)) {
				var i = e;
				e = [], r.each(function(t, r) {
					var n = i(t, r);
					e.push(n)
				})
			}
			r.names.push(t), r.arr.push(e)
		},
		cols: function(t) {
			for (var e = this, r = 0; r < t.length; r++) {
				var i = t[r];
				a.isNumber(i) && (t[r] = e.names[i])
			}
			var n = e._getColArray(t);
			return new c(n, {
				names: t
			})
		},
		cell: function(t, e) {
			var r = this,
				i = r.colNames(),
				n = r.arr;
			return a.isString(e) && (e = a.indexOf(i, e)), n[e] ? n[e][t] : void 0
		},
		toArray: function() {
			return this.arr
		},
		toJSON: function() {
			for (var t = this, e = t.rowCount(), r = [], i = 0; e > i; i++) r.push(t._getObject(i));
			return r
		},
		sub: function(t, e, r, i) {
			var a, s = this,
				l = s.colNames();
			return t = t || 0, e ? e += 1 : e = void 0, l = l.slice(t, e), n(r) || (i ? i += 1 : i = s.rowCount - 1), a = s._getColArray(l, r, i), new c(a, {
				names: l
			})
		},
		toString: function() {
			var t = this,
				e = [],
				r = t.arr,
				i = t.colNames(),
				n = t.rowCount();
			e.push(i.join("  "));
			for (var a = 0; n > a; a++) {
				for (var c = [], s = 0; s < r.length; s++) c.push(r[s][a]);
				e.push(c.join("  "))
			}
			return e.join("\n")
		},
		s: function() {
			return this.toString()
		}
	}, t.exports = c
}, function(t, e, r) {
	var i = r(102);
	i.Group = r(103), t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = function() {};
	n.ATTRS = {
		actived: !1
	}, i.augment(n, {
		isActived: function() {
			return this.get("actived")
		},
		setActived: function() {
			this.setActiveStatus(!0), this.set("actived", !0)
		},
		setActiveStatus: function() {},
		clearActived: function() {
			this.setActiveStatus(!1), this.set("actived", !1), this.clearActivedItem && this.clearActivedItem()
		}
	}), t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = function() {};
	n.ATTRS = {
		multipleActive: !1
	}, i.augment(n, {
		isItemActived: function(t) {
			return t.isActived()
		},
		getActiveItems: function() {
			return this.get("children")
		},
		setItemActived: function(t, e) {
			e ? t.setActived() : t.clearActived()
		},
		onActived: function(t) {
			this.fire("itemactived", {
				item: t
			}), this.fireUpGroup && this.fireUpGroup("actived", t)
		},
		onUnActived: function(t) {
			this.fire("itemunactived", {
				item: t
			}), this.fireUpGroup && this.fireUpGroup("unactived", t)
		},
		setActivedItem: function(t) {
			var e = this,
				r = e.get("multipleActive");
			r || e.clearActivedItem(), t && !e.isItemActived(t) && (e.setItemActived(t, !0), e.onActived(t))
		},
		getActived: function() {
			var t = this,
				e = t.getActiveItems(),
				r = null;
			return i.each(e, function(e) {
				return t.isItemActived(e) ? (r = e, !1) : void 0
			}), r
		},
		getAllActived: function() {
			var t = this,
				e = t.getActiveItems(),
				r = [];
			return i.each(e, function(e) {
				t.isItemActived(e) && r.push(e)
			}), r
		},
		clearAllActived: function() {
			var t = this,
				e = t.getAllActived();
			return i.each(e, function(e) {
				t.setItemActived(e, !1), t.onUnActived(e)
			}), this
		},
		clearActivedItem: function(t) {
			var e = this;
			return t = t || e.getActived(), t && (e.setItemActived(t, !1), e.onUnActived(t)), this
		}
	}), t.exports = n
}, function(t, e, r) {
	var i = r(107);
	t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(17),
		n = r(1),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	a.ATTRS = {
		_circle: {
			center: {
				x: 0,
				y: 0
			},
			r: 0,
			startAngle: -Math.PI / 2,
			endAngle: 1.5 * Math.PI
		}
	}, n.extend(a, i), n.augment(a, {
		getInitAttrs: function() {
			var t = this.get("_circle"),
				e = this.getCircleInfo(),
				r = e.center;
			e = n.mix(t, e);
			var i = {
				x: r.x,
				y: r.y,
				rs: 0,
				re: e.r + 100,
				startAngle: e.startAngle / Math.PI * 180,
				endAngle: e.startAngle / Math.PI * 180
			};
			return i
		},
		getEndAttrs: function() {
			var t = this.get("_circle"),
				e = this.getCircleInfo();
			e = n.mix(t, e);
			var r = {
				endAngle: e.endAngle / Math.PI * 180
			};
			return r
		},
		getTarget: function() {
			var t = this.get("group"),
				e = t.getParent(),
				r = e.addShape("Fan");
			return t.attr("clip", r), r
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(17),
		n = r(1),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	n.extend(a, i), n.augment(a, {
		getInitAttrs: function() {
			var t = this.getCircleInfo(),
				e = t.center,
				r = {
					x: e.x,
					y: e.y,
					r: 0
				};
			return r
		},
		getEndAttrs: function() {
			var t = this.getCircleInfo(),
				e = {
					r: t.r + 150
				};
			return e
		},
		getTarget: function() {
			var t = this.get("group"),
				e = t.getParent(),
				r = e.addShape("Circle");
			return t.attr("clip", r), r
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(17),
		n = r(105),
		a = r(106),
		c = r(111),
		s = r(110),
		l = r(109),
		o = r(108),
		u = r(112);
	i.angle = n, i.circle = a, i.waveh = c, i.scaleXY = s, i.scaleY = l, i.scaleX = o, i.waves = u, t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(17),
		n = r(1),
		a = r(11).Matrix,
		c = a.Matrix3,
		s = n.MatrixUtil,
		l = function(t) {
			l.superclass.constructor.call(this, t)
		};
	n.extend(l, i), n.augment(l, {
		getInitMatrix: function() {
			var t = this.get("rect"),
				e = this.getRectCenter(t),
				r = new c;
			return r = s.scale(r, .01, 1, e.x - t.width / 2, t.y)
		},
		getAnimMatrix: function() {
			var t = this.get("rect"),
				e = this.getRectCenter(t),
				r = new c;
			return r = s.scale(r, 1, 1, e.x - t.width / 2, t.y)
		}
	}), t.exports = l
}, function(t, e, r) {
	"use strict";
	var i = r(17),
		n = r(1),
		a = r(11).Matrix,
		c = a.Matrix3,
		s = n.MatrixUtil,
		l = function(t) {
			l.superclass.constructor.call(this, t)
		};
	n.extend(l, i), n.augment(l, {
		getInitMatrix: function() {
			var t = this.get("rect"),
				e = this.getRectCenter(t),
				r = new c;
			return r = s.scale(r, 1, -.01, e.x, t.y + t.height)
		},
		getAnimMatrix: function() {
			var t = this.get("rect"),
				e = this.getRectCenter(t),
				r = new c;
			return r = s.scale(r, 1, 1, e.x, t.y + t.height)
		}
	}), t.exports = l
}, function(t, e, r) {
	"use strict";
	var i = r(17),
		n = r(1),
		a = r(11).Matrix,
		c = a.Matrix3,
		s = n.MatrixUtil,
		l = function(t) {
			l.superclass.constructor.call(this, t)
		};
	n.extend(l, i), n.augment(l, {
		getInitMatrix: function() {
			var t = this.get("rect"),
				e = this.getRectCenter(t),
				r = new c;
			return r = s.scale(r, .01, .01, e.x, e.y)
		},
		getAnimMatrix: function() {
			var t = this.get("rect"),
				e = this.getRectCenter(t),
				r = new c;
			return r = s.scale(r, 1, 1, e.x, e.y)
		}
	}), t.exports = l
}, function(t, e, r) {
	"use strict";
	var i = r(63),
		n = r(1),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	n.extend(a, i), n.augment(a, {
		getInitAttrs: function() {
			var t = this.get("rect"),
				e = {
					x: t.x,
					y: t.y,
					width: t.width,
					height: 0
				};
			return e
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(63),
		n = r(1),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	n.extend(a, i), n.augment(a, {
		getInitAttrs: function() {
			var t = this.get("rect"),
				e = {
					x: t.x,
					y: t.y,
					width: 0,
					height: t.height
				};
			return e
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";

	function i(t) {
		return null === t || void 0 === t
	}

	function n(t) {
		var e = 1;
		if (1e-6 > t) return e;
		for (; t > 10;) e = 10 * e, t /= 10;
		for (; 1 > t;) e /= 10, t = 10 * t;
		return e
	}

	function a(t, e, r) {
		r = r || w;
		var i = r !== w,
			a = 1;
		0 > t && (a = -1), t *= a;
		var s = n(t);
		return a *= s, t /= s, t = i ? c(r, t) : e && a > 0 ? S.snapFloor(r, t) : S.snapCeiling(r, t), t * a
	}

	function c(t, e) {
		for (var r = e, i = e, n = e, a = 1; a < t.length; a++) {
			var c = t[a];
			if (c > e) {
				r = c;
				break
			}
			i = c
		}
		return n = Math.abs(i - e) < Math.abs(r - e) ? i : r
	}

	function s(t, e, r) {
		var i;
		return i = r ? Math.ceil(t / e, 10) : Math.floor(t / e, 10), i * e
	}

	function l(t) {
		for (var e = t[0], r = t[0], i = t.length, n = 1; i > n; n++) {
			var a = t[n];
			a > e && (e = a), r > a && (r = a)
		}
		return r === e && (r > 0 ? r = 0 : e = 0), {
			max: e,
			min: r
		}
	}

	function o(t, e) {
		var r = [];
		return e ? _.isArray(t[0]) && _.each(t[0], function(e, i) {
			for (var n = e, a = 1; a < t.length; a++) n += t[a][i];
			r.push(n)
		}) : _.each(t, function(t) {
			_.isArray(t) ? r = r.concat(t) : r.push(t)
		}), r
	}

	function u(t, e, r) {
		var i = o(t, r);
		return e && (i = _.map(i, e)), l(i)
	}

	function h(t) {
		return t = new Date(t), O.getDate(t).getTime()
	}

	function f(t) {
		t = new Date(t);
		var e = O.getDate(t);
		return t > e && (e = O.addDay(1, e)), e.getTime()
	}

	function d(t) {
		return new Date(t).getFullYear()
	}

	function p(t) {
		return new Date(t, 0, 1).getTime()
	}

	function g(t) {
		return new Date(t).getMonth()
	}

	function y(t, e) {
		var r = d(t),
			i = d(e),
			n = g(t),
			a = g(e);
		return 12 * (i - r) + (a - n) % 12
	}

	function v(t, e) {
		return new Date(t, e, 1).getTime()
	}

	function m(t, e) {
		return Math.ceil((e - t) / I)
	}

	function x(t, e) {
		return Math.ceil((e - t) / D)
	}

	function C(t, e) {
		return Math.ceil((e - t) / 6e4)
	}
	var _ = r(1),
		O = r(40),
		S = r(4),
		w = [0, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10],
		M = [0, 1, 2, 4, 5, 10],
		b = [1, 2, 4, 6, 8, 12],
		k = 5,
		A = 7,
		P = {};
	P.caculate = function(t, e) {
		var r, n = t.min,
			c = t.max,
			l = t.data,
			o = t.interval,
			h = [],
			f = t.minCount || k,
			d = t.maxCount || A,
			p = (f + d) / 2,
			g = !1;
		e && "percent" === e && (n = 0, c = 100, o = 25);
		var y;
		if ((i(n) || i(c) || i(o)) && (y = u(l, null, g), i(c) && (c = y.max + .05 * (y.max - y.min)), i(n) && (n = y.min), c === n && (c = n + 1, n -= 1, _.isNull(t.max) || (n = t.max - 1), _.isNull(t.min) || (c = t.min + 1), o = 1), i(o))) {
			var v = (c - n) / p;
			o = a(v, !0, M), r = parseInt((c - n) / o, 10), r > d && (r = d), f > r && (r = f), o = a((c - n) / r, !0, M), c = s(c, o, !0), n = s(n, o), r = Math.round((c - n) / o)
		}
		i(r) && (r = (c - n) / o), n = _.fixedBase(n, o), i(n) || h.push(n);
		for (var m = 1; r >= m; m++) h.push(_.fixedBase(o * m + n, o));
		return {
			min: n,
			max: _.fixedBase(c, o),
			interval: o,
			count: r,
			ticks: h,
			info: y
		}
	}, P.Time = {};
	var T = 6e4,
		D = 36e5,
		I = 864e5;
	P.Time.caculate = function(t) {
		var e, r = t.min,
			n = t.max,
			a = t.data,
			c = t.interval,
			s = [],
			l = {};
		if (i(r) || i(n) || i(c)) {
			if (l = u(a, function(t) {
					return _.isDate(t) && (t = t.getTime()), _.isString(t) && (t = t.replace(/-/gi, "/"), t = new Date(t)), t
				}), i(n) && (n = l.max), i(r) && (r = l.min), n - r > I && (r = h(r), n = f(n)), n === r) throw "max not  equal to min";
			if (i(c)) {
				var o, O, w = n - r,
					M = I,
					k = 365 * M;
				c = parseInt(w / (t.maxCount || 8)), o = c / k;
				var A = d(r);
				if (o > .51) {
					O = Math.ceil(o), c = O * k;
					for (var P = d(n), L = A; P + O >= L; L += O) s.push(p(L));
					c = null
				} else if (o > .0834) {
					for (var O = d(r), B = Math.floor(o / .0834), R = g(r), F = y(r, n), L = 0; F + B >= L; L += B) s.push(v(A, L + R));
					c = null
				} else if (c > .5 * M) {
					var G = new Date(r),
						O = G.getFullYear(),
						B = G.getMonth(r),
						N = G.getDate(),
						z = Math.ceil(c / M),
						W = m(r, n);
					c = z * M;
					for (var L = 0; W + z > L; L += z) s.push(new Date(O, B, N + L).getTime())
				} else if (c > D) {
					var G = new Date(r),
						O = G.getFullYear(),
						B = G.getMonth(r),
						z = G.getDate(),
						Y = G.getHours(),
						X = S.snapTo(b, Math.ceil(c / D)),
						E = x(r, n);
					c = X * D;
					for (var L = 0; E + X >= L; L += X) s.push(new Date(O, B, z, Y + L).getTime())
				} else if (c > T) {
					var j = C(r, n),
						q = Math.ceil(c / T);
					c = q * T;
					for (var L = 0; j + q >= L; L += q) s.push(r + L * T)
				} else {
					1e3 > c && (c = 1e3), r = 1e3 * Math.floor(r / 1e3);
					var V = Math.ceil((n - r) / 1e3),
						H = Math.ceil(c / 1e3);
					c = 1e3 * H;
					for (var L = 0; V + H > L; L += H) s.push(r + 1e3 * L)
				}
			}
		}
		if (!s.length) {
			r = 1e3 * Math.floor(r / 1e3), n = 1e3 * Math.ceil(n / 1e3);
			for (var e = (n - r) / c, L = 0; e >= L; L++) s.push(_.fixedBase(c * L + r, c))
		}
		return {
			max: l.max || n,
			min: l.min || r,
			interval: c,
			ticks: s,
			count: s.length
		}
	}, P.Category = {}, P.Category.caculate = function(t) {
		var e = {},
			r = [],
			i = t.maxCount || A,
			n = o(t.data);
		if (n.length < i) r = [].concat(n);
		else {
			var a = n.length,
				c = parseInt(a / (i - 1), 10),
				s = n.map(function(t, e) {
					return e % c === 0 ? n.slice(e, e + c) : null
				}).filter(function(t) {
					return t
				});
			r.push(n[0]);
			for (var l = 1; l < s.length && i - 1 > l; l++) r.push(s[l][0]);
			r.push(n[a - 1])
		}
		return e.categories = n, e.ticks = r, e
	}, t.exports = P
}, function(t, e, r) {
	"use strict";

	function i(t) {
		if (!t._attrs && t !== n) {
			var e = t.superclass.constructor;
			e && !e._attrs && i(e), t._attrs = {}, a.mix(!0, t._attrs, e._attrs), a.mix(!0, t._attrs, t.ATTRS)
		}
	}
	var n, a = r(1);
	n = function(t) {
		i(this.constructor), this._attrs = {}, this.events = {};
		var e = this.getDefaultCfg();
		a.mix(this._attrs, e, t)
	}, a.augment(n, {
		getDefaultCfg: function() {
			var t = this,
				e = t.constructor,
				r = e._attrs,
				i = a.mix(!0, {}, r);
			return i
		},
		set: function(t, e) {
			var r = "_onRender" + a.ucfirst(t);
			return this[r] && this[r](e, this._attrs[t]), this._attrs[t] = e, this
		},
		get: function(t) {
			return this._attrs[t]
		},
		on: function(t, e) {
			var r = this,
				i = r.events,
				n = i[t];
			return n || (n = i[t] = []), n.push(e), r
		},
		fire: function(t, e) {
			var r = this,
				i = r.events,
				n = i[t];
			n && a.each(n, function(t) {
				t(e)
			})
		},
		off: function(t, e) {
			var r = this,
				i = r.events,
				n = i[t];
			return t ? (n && a.remove(n, e), r) : (r.events = {}, r)
		},
		destroy: function() {
			var t = this,
				e = t.destroyed;
			return e ? t : (t._attrs = {}, t.events = {}, void(t.destroyed = !0))
		}
	}), t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(28),
		n = r(23),
		a = n.Shape.superclass.constructor,
		c = n.Canvas,
		s = r(65);
	i.mixin(a, [s.GMixin]), i.mixin(n.Group, [s.GroupMixin]);
	var l = function(t) {
		l.superclass.constructor.call(this, t)
	};
	l.CFG = {
		width: null,
		height: null,
		widthCanvas: null,
		heightCanvas: null,
		widthStyle: null,
		heightStyle: null,
		containerDOM: null,
		canvasDOM: null,
		pixelRatio: null
	}, i.extend(l, c), i.augment(l, {
		init: function() {
			l.superclass.constructor.superclass.init.call(this), this._setGlobalParam(), this._setDOM(), this._setInitSize(), this._setCanvas()
		},
		_setCanvas: function() {
			var t = this.get("canvasDOM");
			this.set("el", t), this.set("context", t.getContext("2d")), this.set("canvas", this), this.__events()
		},
		_setGlobalParam: function() {
			var t = this.get("pixelRatio");
			t || this.set("pixelRatio", i.getRatio())
		},
		_setDOM: function() {
			this._setContainer(), this._setLayer()
		},
		_setContainer: function() {
			var t = this.get("containerId"),
				e = document.getElementById(t);
			i.modiCSS(e, {
				position: "relative"
			}), this.set("containerDOM", e)
		},
		_setLayer: function() {
			var t = this.get("containerDOM"),
				e = i.guid("canvas_");
			if (t) {
				var r = i.createDom('<canvas id="' + e + '"></canvas>');
				t.appendChild(r), this.set("canvasDOM", r)
			}
		},
		_setInitSize: function() {
			this.get("widthStyle") ? this.changeSizeByCss(this.get("widthStyle"), this.get("heightStyle")) : this.get("width") && this.changeSize(this.get("width"), this.get("height"))
		},
		_getPx: function(t, e) {
			var r = this.get("canvasDOM");
			r.style[t] = e;
			var n = i.getBoundingClientRect(r);
			return "width" === t ? n.right - n.left : "height" === t ? n.bottom - n.top : void 0
		},
		_reSize: function() {
			var t = this.get("canvasDOM"),
				e = this.get("widthCanvas"),
				r = this.get("heightCanvas"),
				i = this.get("widthStyle"),
				n = this.get("heightStyle");
			t.style.width = i, t.style.height = n, t.setAttribute("width", e), t.setAttribute("height", r)
		},
		getWidth: function() {
			var t = this.get("pixelRatio"),
				e = this.get("width");
			return e * t
		},
		getHeight: function() {
			var t = this.get("pixelRatio"),
				e = this.get("height");
			return e * t
		},
		changeSizeByCss: function(t, e) {
			var r = this.get("pixelRatio"),
				t = this._getPx("width", t),
				e = this._getPx("height", e),
				i = t * r,
				n = e * r;
			this.set("widthStyle", t), this.set("heightStyle", e), this.set("widthCanvas", i), this.set("heightCanvas", n), this.set("width", t), this.set("height", e), this._reSize()
		},
		changeSize: function(t, e) {
			var r = this.get("pixelRatio"),
				i = t * r,
				n = e * r;
			this.set("widthCanvas", i), this.set("heightCanvas", n), this.set("widthStyle", t + "px"), this.set("heightStyle", e + "px"), this.set("width", t), this.set("height", e), this._reSize()
		}
	}), t.exports = l
}, function(t, e, r) {
	var i = r(28),
		n = (r(23), function() {});
	i.augment(n, {
		getParent: function() {
			return this.get("parent") || this.get("father")
		},
		getDefaultCfg: function() {
			i.initClassCfgs(this.constructor);
			var t = i.mix(!0, {}, this.constructor.__cfg);
			return t
		},
		getBBBox: function() {
			var t = this.getBBox();
			return t ? (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, t.height = t.maxY - t.minY, t.centerX = t.x + t.width / 2, t.centerY = t.y + t.height / 2) : t = {
				x: 0,
				y: 0,
				centerX: 0,
				centerY: 0,
				width: 0,
				height: 0
			}, t
		},
		move: function(t, e) {
			var r = this,
				i = r.get("x") || 0,
				n = r.get("y") || 0;
			r.translate(t - i, e - n), r.set("x", t), r.set("y", e)
		}
	}), t.exports = n
}, function(t, e, r) {
	var i = r(28),
		n = r(23),
		a = r(64),
		c = function() {};
	i.augment(c, {
		addShape: function(t, e) {
			var r, a = this.get("canvas");
			return e = i.mix({}, e), e ? (e.type = t, e.canvas = a, e.father = this, t = i.upperFirst(t), r = new n[t](e)) : r = new n[t], this.add(r), r
		},
		addGroup: function(t, e) {
			var r, n = this.get("canvas");
			if (e = i.mix({}, e), i.isFunction(t)) e ? (e.canvas = n, e.father = this, r = new t(e)) : r = new t({
				canvas: n,
				father: this
			}), this.add(r);
			else if (i.isObject(t)) t.canvas = n, r = new a(t), this.add(r);
			else {
				if (void 0 !== t) return !1;
				r = new a, this.add(r)
			}
			return r
		},
		findByCFG: function(t, e) {
			var r = this.get("children"),
				n = [];
			return i.each(r, function(r, i) {
				r.get(t) === e && n.push(r)
			}), n
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(9),
		n = r(18),
		a = r(12),
		c = r(172),
		s = n.G,
		l = s.Shape.superclass.constructor;
	new c(s), i.mixin(l, [a.GMixin]), i.mixin(s.Group, [a.GroupMixin]), s.Marker = a.Marker;
	var o = function(t) {
		o.superclass.constructor.call(this, t), this._init()
	};
	o.CFG = {}, i.extend(o, n), i.augment(o, {
		_init: function() {
			var t = this.get("pixelRatio");
			this.scale(t, t)
		}
	}), t.exports = o
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(47),
		a = r(3),
		c = a.Vector2,
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	i.extend(s, n), s.CFG = {
		type: "circle",
		tickInterval: null,
		grid: {
			line: {
				"stroke-width": 1,
				stroke: "#C0D0E0"
			}
		},
		labelOffset: 5
	}, i.augment(s, {
		_beforeRenderUI: function() {
			var t = this;
			s.superclass._beforeRenderUI.call(t)
		},
		parseTick: function(t, e, r) {
			return {
				text: t,
				value: e / r
			}
		},
		_isReflectY: function() {
			var t = this,
				e = t.get("coord"),
				r = e.get("y");
			return r.start > r.end
		},
		getOffsetPoint: function(t) {
			var e = this,
				r = e.get("coord"),
				i = e._isReflectY(),
				n = r.convertPoint({
					x: t.value,
					y: i ? 0 : 1
				});
			return n
		},
		getCenter: function() {
			var t = this,
				e = t.get("coord");
			return e.getCenter()
		},
		getRadius: function() {
			var t = this,
				e = t.get("coord");
			return e.getRadius()
		},
		getLinePath: function() {
			var t = this,
				e = t.getCenter(),
				r = e.x,
				i = e.y,
				n = t.getRadius(),
				a = n,
				c = t.get("coord"),
				s = c.get("startAngle"),
				l = c.get("endAngle"),
				o = [];
			if (l - s === 2 * Math.PI) o = [
				["M", r, i],
				["m", 0, -a],
				["a", n, a, 0, 1, 1, 0, 2 * a],
				["a", n, a, 0, 1, 1, 0, -2 * a],
				["z"]
			];
			else {
				var u = c.get("inner"),
					h = c.convertPoint({
						x: 0,
						y: 1
					}),
					f = c.convertPoint({
						x: 1,
						y: 1
					}),
					d = l - s > Math.PI ? 1 : 0;
				if (u) {
					var p = c.convertPoint({
							x: 0,
							y: 0
						}),
						g = c.convertPoint({
							x: 1,
							y: 0
						});
					o = [
						["M", p.x, p.y],
						["L", h.x, h.y],
						["A", n, a, 0, d, 1, f.x, f.y],
						["L", g.x, g.y],
						["A", n * u, a * u, 0, d, 0, p.x, p.y]
					]
				} else o = [
					["M", r, i],
					["L", h.x, h.y],
					["A", n, a, 0, d, 1, f.x, f.y],
					["z"]
				]
			}
			return o
		},
		getGridItemCfg: function(t) {
			var e = this,
				r = e.get("coord"),
				i = r.invertPoint(t),
				n = r.convertPoint({
					x: i.x,
					y: 0
				});
			return {
				x1: n.x,
				y1: n.y,
				x2: t.x,
				y2: t.y
			}
		},
		getEndMiddlePoint: function(t, e) {
			var r = this,
				i = r.get("coord"),
				n = {
					value: .9999
				},
				a = r.getOffsetPoint(n),
				c = i.invertPoint(a),
				s = {
					x: (c.x + e.x) / 2,
					y: (c.y + e.y) / 2
				};
			return s
		},
		addLabel: function(t, e) {
			var r = this,
				i = r.get("labelOffset");
			e = r.getSidePoint(e, i), s.superclass.addLabel.call(r, t, e)
		},
		autoRotateLabels: function() {
			var t = this,
				e = t.get("ticks"),
				r = t.get("labelsGroup");
			if (r && e.length > 12) {
				var n = t.get("coord"),
					a = t.getRadius(),
					c = n.get("startAngle"),
					s = n.get("endAngle"),
					l = s - c,
					o = l / e.length,
					u = Math.sin(o / 2) * a * 2,
					h = t.getMaxLabelWidth(r);
				i.each(r.get("children"), function(t, r) {
					var i = e[r],
						n = i.value * l + c,
						a = n % (2 * Math.PI);
					u > h ? (0 >= a && (n += Math.PI), a > Math.PI && (n -= Math.PI), n -= Math.PI / 2, t.attr("text-anchor", "middle")) : a > Math.PI / 2 ? n -= Math.PI : a < Math.PI / 2 * -1 && (n += Math.PI), t.rotateAtStart(180 * n / Math.PI)
				})
			}
		},
		getSideVector: function(t, e) {
			var r = this,
				i = r.getCenter(),
				n = new c(e.x - i.x, e.y - i.y);
			return n.setLength(t), n
		},
		getSidePoint: function(t, e) {
			var r = this,
				i = r.getSideVector(e, t);
			return {
				x: t.x + i.x,
				y: t.y + i.y
			}
		},
		getTextAnchor: function(t) {
			var e, r = this.get("coord");
			return e = r.isTransposed ? "end" : t.x >= 0 ? "start" : "end"
		},
		getGridMiddlePoint: function(t, e) {
			var r = this;
			if (!e) {
				var i = r.get("coord"),
					n = i.get("startAngle"),
					a = i.get("endAngle");
				if (a - n < 2 * Math.PI) return null
			}
			return s.superclass.getGridMiddlePoint.call(r, t, e)
		},
		getTickEnd: function(t, e) {
			var r = this,
				i = r.get("tickLine"),
				e = e ? e : i.value,
				n = r.getSidePoint(t, e);
			return {
				x: n.x,
				y: n.y
			}
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";

	function i(t, e, r) {
		var i = e.get(t);
		return i || (i = r, e.set(t, i)), i
	}

	function n(t, e) {
		var r = "",
			i = l.mix({}, e);
		return l.each(t, function(t) {
			var e = l.substitute("M{x1} {y1}L{x2} {y2}", t);
			r += e
		}), i.path = r, i
	}

	function a(t) {
		a.superclass.constructor.call(this, t)
	}
	var c = r(12),
		s = c.GroupBase,
		l = r(1),
		o = "x-chart-grid";
	l.extend(a, s), a.CFG = {
		zIndex: 1,
		elCls: o,
		type: "line",
		line: null,
		minorLine: null,
		minorCount: 0,
		renderer: null,
		items: null,
		odd: null,
		even: null,
		animate: !1,
		matrix: null,
		duration: 1e3
	}, l.augment(a, {
		_renderUI: function() {
			var t = this;
			a.superclass._renderUI.call(t), t._drawLines()
		},
		_drawLines: function() {
			var t = this,
				e = t.get("line"),
				r = t.get("items");
			r && (t._precessItems(r), t._drawGridLines(r, e, o + "-line"), t.get("minorCount") && t.drawMinorLines())
		},
		_precessItems: function(t) {
			var e, r = this,
				i = r.get("minorCount"),
				n = r.get("renderer");
			l.each(t, function(t, a) {
				n ? n.call(r, t, a) : i && e && r._addMonorItem(t, e), e && (r.get("odd") || r.get("even")) && r._drawOddEven(t, e, a), e = t
			})
		},
		change: function(t) {
			var e = this;
			return e.set("items", t), e._clearPre(), e._precessItems(t), e._changeGridLines(t, o + "-line"), e._changeMinorLinses(), this
		},
		_clearPre: function() {
			var t, e = this;
			e.get("minorCount") && e.set("minorItems", []), t = e.findAllBy(function(t) {
				var e = t.get("elCls");
				return e !== o + "-line" && e !== o + "-minor"
			}), l.each(t, function(t) {
				t.remove()
			})
		},
		_isVertical: function(t) {
			return t.x1 === t.x2
		},
		_drawGridLines: function(t, e, r) {
			var i = this,
				n = i._linesToPath(t, e),
				a = i.addShape("Path", {
					elCls: r,
					attrs: n
				});
			i.set("gridLine" + r, a)
		},
		_changeGridLines: function(t, e) {
			var r = this,
				i = r.get("animate"),
				n = r.get("gridLine" + e);
			if (n) {
				var a = r._linesToPath(t, {});
				i ? l.animPath(n, a.path, 2) : a ? n.attr("path", a.path) : n.remove()
			} else if (t && t.length) {
				var c;
				c = e === o + "-line" ? r.get("line") : r.get("minorLine"), r._drawGridLines(t, c, e)
			}
		},
		_linesToPath: function(t, e) {
			var r, i = this,
				a = [],
				c = i.get("type");
			return "line" === c ? 0 === t.length ? !1 : n(t, e) : (r = l.mix({}, e), l.each(t, function(t) {
				a = a.concat(i._getMultiplePath(t, c))
			}), r.path = a, r)
		},
		_getMultiplePath: function(t, e) {
			var r = t.points,
				i = [];
			if ("polygon" === e) l.each(r, function(t, e) {
				0 === e ? i.push(["M", t.x, t.y]) : i.push(["L", t.x, t.y])
			});
			else if (t.center) {
				var n = t.center.x,
					a = t.center.y,
					c = t.r,
					s = t.r;
				0 === c ? i = [] : t.endAngle - t.startAngle === 2 * Math.PI ? i = [
					["M", n, a],
					["m", 0, -s],
					["a", c, s, 0, 1, 1, 0, 2 * s],
					["a", c, s, 0, 1, 1, 0, -2 * s]
				] : l.each(r, function(t, e) {
					0 === e ? i.push(["M", t.x, t.y]) : i.push(["A", c, s, 1, 0, 1, t.x, t.y])
				})
			}
			return i
		},
		_drawOddEven: function(t, e, r) {
			var i, n, a = this,
				c = a.get("odd"),
				s = a.get("even");
			r % 2 === 0 ? s && (n = a._getBackItem(e, t, s), i = "even") : c && (n = a._getBackItem(e, t, c), i = "odd"), n && a.addShape("Path", {
				elCls: o + "-" + i,
				attrs: n
			})
		},
		_getBackItem: function(t, e, r) {
			var i = l.substitute("M {x1} {y1} L{x2} {y2}", t);
			return i += l.substitute("L{x2} {y2} L{x1} {y1}Z", e), r = l.mix({}, r, {
				path: i
			})
		},
		_getMinorItem: function(t, e, r, i) {
			var n = this,
				a = n._isVertical(t, e),
				c = a ? "x" : "y",
				s = a ? "y" : "x",
				l = e[c + "1"] - t[c + "1"],
				o = l / (i + 1),
				u = {};
			return u[c + "1"] = u[c + "2"] = (r + 1) * o + t[c + "1"], u[s + "1"] = t[s + "1"], u[s + "2"] = t[s + "2"], u
		},
		_addMonorItem: function(t, e) {
			var r = this,
				n = i("minorItems", r, []),
				a = r.get("minorCount");
			if (a)
				for (var c = 0; a > c; c++) {
					var s = r._getMinorItem(e, t, c, a);
					n.push(s)
				}
		},
		drawMinorLines: function() {
			var t = this,
				e = t.get("minorLine"),
				r = t.get("minorItems");
			t._drawGridLines(r, e, o + "-minor")
		},
		_changeMinorLinses: function() {
			var t = this,
				e = t.get("minorItems");
			t._changeGridLines(e, o + "-minor")
		}
	}), t.exports = a
}, function(t, e, r) {
	var i = r(66);
	i.Abstract = r(47), i.Circle = r(119), i.Radius = r(122), t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(66),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	a.CFG = {
		circle: null,
		position: "left",
		type: "radius"
	}, i.extend(a, n), i.augment(a, {
		_beforeRenderUI: function() {
			a.superclass._beforeRenderUI.call(this);
			var t = this,
				e = t.get("coord");
			e.isTransposed ? (t.set("start", e.convertPoint({
				x: 0,
				y: 0
			})), t.set("end", e.convertPoint({
				x: 1,
				y: 0
			}))) : (t.set("start", e.convertPoint({
				x: 0,
				y: 0
			})), t.set("end", e.convertPoint({
				x: 0,
				y: 1
			})))
		},
		getGridItemCfg: function(t) {
			for (var e = this, r = {}, i = [], n = e.get("circle"), a = n.get("ticks"), c = a.length, s = e.get("coord"), l = s.invertPoint(t), o = s.get("inner"), u = s.getRadius(), h = 0; c > h; h++) {
				var f = a[h],
					d = s.convertPoint({
						x: f.value,
						y: l.y
					});
				i.push(d)
			}
			var p = a[0];
			if (0 !== p.value) {
				var g = s.convertPoint({
					x: 0,
					y: l.y
				});
				i.unshift(g)
			}
			var y = i[i.length - 1],
				d = s.convertPoint({
					x: 1,
					y: l.y
				});
			y.x !== d.x && y.y !== d.y && i.push(d);
			var v = s.get("startAngle"),
				m = s.get("endAngle");
			return r.points = i, r.r = u * (1 - o) * l.y + u * o, r.center = s.getCenter(), r.endAngle = m, r.startAngle = v, r
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	t.exports = {
		Axis: r(121),
		PlotBack: r(70),
		PlotRange: r(49),
		Plot: {
			Back: r(70),
			Range: r(49)
		},
		Labels: r(67),
		Tooltip: r(129),
		Li: r(48),
		Ul: r(71),
		Legend: r(127)
	}
}, function(t, e, r) {
	"use strict";

	function i(t) {
		t.remove()
	}
	var n = r(9),
		a = r(68),
		c = function() {};
	c.ATTRS = {
		labels: null
	}, n.augment(c, {
		renderLabels: function() {
			var t, e = this,
				r = e.get("labels");
			r && (r.items || (r.items = []), n.isNull(r.animate) && (r.animate = e.get("animate")), t = e.addGroup(a, r), e.set("labelsGroup", t))
		},
		resetLabels: function(t) {
			var e = this,
				r = e.get("labels");
			if (r) {
				var a = e.get("labelsGroup"),
					c = a.getLabels(),
					s = c.length;
				t = t || r.items, n.each(t, function(t, r) {
					if (s > r) {
						var i = c[r];
						a.changeLabel(i, t)
					} else e.addLabel(t.text, t)
				});
				for (var l = s - 1; l >= t.length; l--) i(c[l])
			}
		},
		addLabel: function(t, e) {
			var r, i = this,
				n = i.get("labelsGroup"),
				a = {};
			return n && (a.text = t, a.x = e.x, a.y = e.y, a.point = e, a["text-anchor"] = e["text-anchor"], e.rotate && (a.rotate = e.rotate), r = n.addLabel(a)), r
		},
		removeLabels: function() {
			var t = this,
				e = t.get("labelsGroup");
			e && e.remove(), t.set("labelsGroup", null)
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(9),
		n = (r(12), r(48)),
		a = r(51),
		c = r(69),
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	s.CFG = {
		type: "category-legend",
		items: null,
		spacingX: 5,
		spacingY: 10,
		wordSpaceing: 2,
		itemsGroup: null,
		layout: "horizontal",
		leaveChecked: !0,
		backPadding: [0, 0, 0, 0],
		checkable: !0,
		lineHeight: 6,
		unChecked: "#CCC",
		theme: "li",
		col: 1,
		_curCol: 1,
		_row: null,
		_cursorX: 0,
		word: {
			fill: "#3c3c3c"
		},
		back: null,
		_back: {}
	}, i.extend(s, c), i.augment(s, {
		_initCfg: function() {
			s.superclass._initCfg.call(this), this.deepSet("back")
		},
		_beforeRenderUI: function() {
			s.superclass._beforeRenderUI.call(this);
			var t = this.get("col"),
				e = this.get("items").length;
			this.set("_row", Math.ceil(e / t))
		},
		_renderUI: function() {
			s.superclass._renderUI.call(this), this._renderTitle(), this._renderItems(), this._renderBack(), this.setPosition()
		},
		_bindUI: function() {
			this._bindOverOut(), this._bindClick()
		},
		_bindClick: function() {
			var t = (this.get("canvas"), this.get("checkable"));
			t && this.on("click", i.wrapBehavior(this, "_onClick"))
		},
		_bindOverOut: function() {
			this.on("mouseenter", i.wrapBehavior(this, "_onMouseenter")), this.on("mouseleave", i.wrapBehavior(this, "_onMouseleave"))
		},
		_onClick: function(t) {
			var e, r, i, n, c, s = (this.get("leaveChecked"), this._getLi(t.currentTarget));
			this.get("canvas");
			s && (n = s.findByType("marker"), c = s.get("checked"), e = new a("itemclick", t), e.item = s, this.trigger(e), this.get("leaveChecked") && c && 1 === this.getLeaveCount() || (c ? (i = new a("itemunchecked", t), i.item = s, this.trigger(i)) : (r = new a("itemchecked", t), r.item = s, this.trigger(r))))
		},
		_onMouseenter: function(t) {
			var e = new a("itemover", t),
				r = t.currentTarget,
				n = this._getLi(t.currentTarget),
				c = r.getCanvasNode();
			n && (e.item = n, this.trigger(e), i.modiCSS(c, {
				cursor: "pointer"
			}))
		},
		_onMouseleave: function(t) {
			var e = new a("itemout", t),
				r = this.getCanvasNode(),
				n = this._getLi(t.currentTarget);
			n && (e.item = n, this.trigger(e), i.modiCSS(r, {
				cursor: "default"
			}))
		},
		_renderBack: function() {
			var t = this.get("itemsGroup"),
				e = this.get("backPadding"),
				r = this.get("back");
			t.renderBack(e, r)
		},
		_renderItems: function() {
			var t = this,
				e = t.get("items");
			t.addGroup();
			i.each(e, function(e, r) {
				t._addItem(e, r)
			})
		},
		_addItem: function(t) {
			var e = this.get("itemsGroup"),
				r = this._getNextX(),
				i = this._getNextY(),
				a = this.get("unChecked"),
				c = {
					words: [{
						text: t.name
					}]
				};
			t.symbol ? c.marker = {
				symbol: t.symbol,
				fill: t.checked ? t.color : a
			} : t.marker && (t.checked || (t.marker.fill = a, t.marker.stroke = a), c.marker = t.marker), e.addGroup(n, {
				value: t.name,
				"class": "legend-item",
				word: t.word,
				checked: t.checked,
				x: r,
				y: i,
				items: c
			})
		},
		_getNextX: function() {
			var t = this.get("layout"),
				e = this.get("spacingX"),
				r = e,
				n = this.get("itemsGroup"),
				a = n.get("children"),
				c = a.length,
				s = this.get("items").length,
				l = this.get("col"),
				o = this.get("_row"),
				u = this.get("_curCol"),
				h = this.get("_cursorX");
			return "horizontal" === t ? i.each(a, function(t) {
				t.isGroup && (r += t.getBBBox().width + e)
			}) : (l - u >= s - c ? (u++, h = n.getBBBox().width + e) : (c + 1) % o === 1 && 0 !== c && (u++, h = n.getBBBox().width + e), this.set("_curCol", u), this.set("_cursorX", h), r = h), r
		},
		_getNextY: function() {
			var t, e, r = this.get("spacingY"),
				i = this.get("layout"),
				n = this.get("lineHeight"),
				a = this.get("titleShape"),
				c = a.attr("height"),
				s = this.getCount(),
				l = this.get("items").length,
				o = this.get("col"),
				u = this.get("_row"),
				h = this.get("_curCol");
			return "horizontal" === i ? t = r : (o - h >= l - s ? t = r : (e = (s + 1) % u, 1 === e && 0 !== s && h++, e = 0 === e ? u : e, t = n * e + r * e), this.set("_curCol", h)), t + c
		},
		_getLi: function(t) {
			var e = t.getParent();
			return "li" === e.get("type") ? e : !1
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(9),
		n = (r(12), r(69)),
		a = r(37),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	c.CFG = {
		type: "continuous-legend",
		items: null,
		layout: "vertical",
		width: 200,
		height: 60,
		theme: "block",
		nameGroup: null,
		titleOffset: 30,
		nameOffset: 10,
		word: {},
		title: {
			text: " "
		},
		_word: {
			fill: "#333",
			textAlign: "center",
			textBaseline: "middle"
		}
	}, i.extend(c, n), i.augment(c, {
		_initCfg: function() {
			c.superclass._initCfg.call(this), this.deepSet("word")
		},
		_beforeRenderUI: function() {
			c.superclass._beforeRenderUI.call(this);
			var t = (this.get("itemsGroup"), this.addGroup());
			this.set("nameGroup", t)
		},
		_renderUI: function() {
			c.superclass._renderUI.call(this);
			var t = this.get("theme");
			"gradient" === t ? this._renderGradient() : this._renderBlock()
		},
		_renderBlock: function() {
			var t = this.get("items"),
				e = this.get("titleShape"),
				r = this.get("layout"),
				i = this.get("titleOffset"),
				n = e.getBBBox(),
				a = {
					x: 0,
					y: n.height + i
				};
			this._renderName(t, r, a), this._renderBlockShape(t, r, a)
		},
		_renderGradient: function() {
			var t = this.get("items"),
				e = this.get("titleShape"),
				r = this.get("layout"),
				i = this.get("titleOffset"),
				n = e.getBBBox(),
				a = {
					x: 0,
					y: n.height + i
				};
			this._renderName(t, r, a), this._renderGradientShape(t, r, a)
		},
		_renderBlockShape: function(t, e, r) {
			var n, a, c = this.get("itemsGroup"),
				s = this.get("width"),
				l = this.get("height");
			i.each(t, function(i, o) {
				"vertical" === e ? (a = 0 != o ? (i.value - t[o - 1].value) * l : i.value * l, n = {
					x: r.x,
					y: r.y + (1 - i.value) * l,
					width: s,
					height: a,
					fill: i.color
				}) : (a = 0 != o ? (i.value - t[o - 1].value) * s : i.value * s, n = {
					x: r.x + i.value * s - a,
					y: r.y,
					width: a,
					height: l,
					fill: i.color
				}), c.addShape("Rect", {
					attrs: n
				})
			})
		},
		_renderGradientShape: function(t, e, r) {
			var n, c = this.get("itemsGroup"),
				s = this.get("width"),
				l = this.get("height"),
				o = "";
			"vertical" === e ? (o += "l (90) ", i.each(t, function(t, e) {
				n = new a(t.color).getRGBStyle(), o += 1 - t.value + ":" + n + " "
			})) : (o += "l (0) ", i.each(t, function(t, e) {
				n = new a(t.color).getRGBStyle(), o += t.value + ":" + n + " "
			})), c.addShape("Rect", {
				attrs: {
					x: r.x,
					y: r.y,
					width: s,
					height: l,
					fill: o
				}
			})
		},
		setLayout: function(t) {
			this.set("layout", t), this.clear(), this._renderUI()
		},
		_renderName: function(t, e, r) {
			var n = this.get("nameGroup"),
				a = i.mix({}, this.get("word")),
				c = this.get("nameOffset"),
				s = this.get("width"),
				l = this.get("height");
			i.each(t, function(o, u) {
				0 !== u && u !== t.length - 1 || ("vertical" === e ? (c = 0 === u ? c : -c, a = i.mix(a, {
					x: r.x + s / 2,
					y: r.y + l * (1 - o.value) + c,
					text: o.name
				}), n.addShape("Text", {
					attrs: a
				})) : (c = 1 === u ? c : -c, a = i.mix(a, {
					x: r.x + s * o.value + c,
					y: r.y + l / 2,
					text: o.name
				}), n.addShape("Text", {
					attrs: a
				})))
			})
		},
		clear: function() {
			var t = this.get("itemsGroup"),
				e = this.get("nameGroup");
			t.clear(), e.clear()
		}
	}), t.exports = c
}, function(t, e, r) {
	var i = r(125);
	i.Continuous = r(126), t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(9),
		n = r(12),
		a = n.GroupBase,
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	c.CFG = {
		type: "li",
		items: null,
		itemsGroup: null,
		word: null,
		marker: null,
		wordSpaceing: null,
		_marker: {
			fill: "red",
			lineWidth: 4,
			r: 2.5
		},
		_wordSpaceing: 6,
		_word: {
			fill: "#fff",
			textBaseline: "middle"
		}
	}, i.extend(c, a), i.augment(c, {
		_initCfg: function() {
			this.deepSet("word"), this.deepSet("marker"), this.deepSet("wordSpaceing"), this.deepSet("markerAlign")
		},
		_renderUI: function() {
			c.superclass._renderUI.call(this), this._renderItems()
		},
		_renderItems: function() {
			var t = this,
				e = t.getBBBox(),
				r = e.width,
				n = t.get("word"),
				a = t.get("wordSpaceing"),
				c = t.get("items"),
				s = t.get("marker"),
				l = t.get("markerAlign");
			if (c.marker) {
				var o = i.mix({}, s, c.marker, {
					x: "center" === l ? 0 : c.marker.radius,
					y: 0
				});
				i.mixXY(o, t), t.addShape("Marker", {
					type: "marker",
					attrs: o
				})
			}
			i.each(c.words, function(c, s) {
				e = t.getBBBox(), r = Math.abs(e.width) === 1 / 0 ? 0 : e.width;
				var o = i.mix({}, n, c, {
					x: "center" === l ? a : 0 === r ? 0 : r + a,
					y: 0
				});
				i.mixXY(o, t);
				t.addShape("Text", {
					attrs: o
				})
			})
		}
	}), t.exports = c
}, function(t, e, r) {
	var i = r(130);
	t.exports = i
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		return t.getElementsByClassName(e)[0]
	}
	var n = r(9),
		a = r(3),
		c = r(12),
		s = r(71),
		l = c.GroupBase,
		o = "ac-title",
		u = "ac-list",
		h = function(t) {
			h.superclass.constructor.call(this, t)
		};
	h.CFG = {
		zIndex: 10,
		x: 0,
		y: 0,
		itemName: "tootip",
		items: [],
		ulItems: [],
		ul: {
			fill: "#fff",
			textAlign: "start"
		},
		title: {},
		name: {},
		value: {},
		crossLine: {
			stroke: "#999",
			lineWidth: 1
		},
		markerCfg: null,
		titleText: void 0,
		wordSpaceing: 6,
		padding: [10, 10, 10, 10],
		crosshairs: !1,
		titleShape: null,
		ulGroup: null,
		crossShapeX: null,
		crossShapeY: null,
		backShape: null,
		plotRange: null,
		shared: !1,
		offset: 10,
		animate: !0,
		duration: 50,
		visible: !1,
		valueSplit: "",
		valueSuffix: "",
		custom: !1,
		customDiv: null,
		customFollow: !0,
		timeStamp: 0,
		html: '<div class="ac-tooltip" style="position:absolute;visibility: hidden;"><h4 class="' + o + '"></h4><ul class="' + u + '"></ul></div>',
		itemTpl: '<li><span style="color:{color}">{name}</span> : {value}</li>'
	}, n.extend(h, l), n.augment(h, {
		_beforeRenderUI: function() {
			s.superclass._beforeRenderUI.call(this);
			var t = this.get("ul"),
				e = this.get("custom"),
				r = this.get("crossLine"),
				i = this.addGroup({
					attrs: r
				}),
				n = this.addGroup(s, {
					zIndex: 10,
					attrs: t
				});
			this.set("ulItems", []), this.set("crossGroup", i), this.set("ulGroup", n), e && this._setCustomDiv()
		},
		_renderUI: function() {
			s.superclass._renderUI.call(this);
			var t = this.get("custom");
			t ? this._renderCustom() : this._renderUl(), this._renderCrossLine()
		},
		_renderUl: function() {
			var t, e, r, i, a = this,
				c = [],
				s = a.get("ulGroup"),
				l = a.get("items"),
				o = a.get("title"),
				u = a.get("titleText"),
				h = a.get("name"),
				f = a.get("value"),
				d = a.get("valueSplit"),
				p = a.get("valueSuffix"),
				g = a.get("markerCfg");
			o && c.push({
				words: [{
					text: u
				}],
				attrs: o
			}), n.each(l, function(t, e) {
				var r = n.mix({}, h, {
						text: t.name ? t.name + ":" : ""
					}),
					i = n.mix({}, f, {
						text: t.value + d + p
					});
				t.marker === !0 && (t.marker = "circle");
				var a = t.marker ? {
					symbol: t.marker,
					fill: t.color
				} : void 0;
				c.push({
					color: t.color,
					words: [r, i],
					marker: n.mix(a, g)
				})
			}), s.setItems(c), i = s.get("backShape"), o && (e = s.get("itemsGroup").getFirst(), r = e.getFirst(), a.set("titleShape", r)), t = s.get("itemsGroup").getFilterChild(e), a.set("backShape", i), a.set("ulItems", c), a.set("textGroup", t)
		},
		_renderCrossLine: function() {
			var t = this.get("crosshairs"),
				e = this.get("canvas"),
				r = this.get("plotRange");
			if (this.clearCrossGroup(), t) switch (t.type) {
				case "x":
					this._renderCrossLineX(e, r);
					break;
				case "y":
					this._renderCrossLineY(e, r);
					break;
				case "cross":
					this._renderCrossLineX(e, r), this._renderCrossLineY(e, r);
					break;
				default:
					this._renderCrossLineY(e, r)
			}
		},
		_renderCrossLineY: function(t, e) {
			var r, i, a = this.get("crosshairs");
			e ? (r = e.bl.y, i = e.tl.y) : (r = t.get("height"), i = 0);
			var c = n.mix({
				x1: 0,
				y1: r,
				x2: 0,
				y2: i
			}, this.get("crossLine"));
			"dash" === a.shape && (c = n.mix(c, {
				lineDash: "6 3"
			}));
			var s = this._getCrossShape(c);
			this.set("crossShapeY", s)
		},
		_renderCrossLineX: function(t, e) {
			var r, i, a, c, s = this.get("crosshairs");
			e ? (r = e.bl.x, i = e.br.x) : (r = t.get("width"), i = 0), a = n.mix({
				x1: r,
				y1: 0,
				x2: i,
				y2: 0
			}, this.get("crossLine")), "dash" === s.shape && (a = n.mix(a, {
				lineDash: "6 3"
			})), c = this._getCrossShape(a), this.set("crossShapeX", c)
		},
		_getCrossShape: function(t) {
			var e = this.get("crossGroup"),
				r = e.addShape("Line", {
					attrs: t
				});
			return r
		},
		clearCrossGroup: function() {
			var t = this.get("crossGroup");
			this.set("crossShapeX", void 0), this.set("crossShapeY", void 0), t.clear()
		},
		setCross: function(t) {
			var e = {};
			e.type = t, this.set("crosshairs", {
				type: t
			}), this._renderCrossLine()
		},
		setContent: function(t, e) {
			var r = this._isContentChange(t, e);
			if (!r) {
				var i = this.get("custom"),
					n = (this.get("timeStamp"), +new Date);
				this.set("items", e), this.set("titleText", t), this.set("timeStamp", n), i ? this._renderCustom() : this._renderUl()
			}
			return this
		},
		_isContentChange: function(t, e) {
			var r = this.get("titleText"),
				i = this.get("items");
			return t === r && i.length === e.length && e[0].value === i[0].value
		},
		getTitle: function() {
			return this.get("titleShape")
		},
		setPosition: function(t, e) {
			var r = this.get("canvas"),
				i = this.get("customDiv"),
				n = this.get("plotRange"),
				c = this.get("offset"),
				s = this.get("crossShapeX"),
				l = this.get("crossShapeY"),
				o = this.get("ulGroup"),
				u = o.getBBBox(),
				h = this.get("animate"),
				f = (this.get("x"), this.get("y"), new a.Matrix3),
				d = !0,
				p = t,
				g = e;
			i && this.get("customFollow") ? t += c : (t = t - u.width - c, e -= u.height), n && (n.isInRange(t, e) || (n.isInVertical(e) || (e = n.tl.y), n.isInHorizontal(t) || (t = Math.max(n.tl.x, p) + c, d = !1))), this.get("x") === t && this.get("y") === e || (f.translate(t, e), h && this.get("visible") ? o.animate({
				matrix: f
			}, this.get("duration")) : o.setMatrix(f), l && (d ? l.move(p, 0) : l.move(t - c, 0)), s && s.move(0, g), this.moveCustom(t, e, d), r.draw())
		},
		_setCustomDiv: function() {
			var t, e, r = this,
				i = r.get("html"),
				a = r.get("canvas").get("el").parentNode;
			/^\#/.test(i) ? (e = i.replace("#", ""), t = document.getElementById(e)) : t = n.createDom(i), r.set("customDiv", t), r.get("customFollow") && (a.appendChild(t), a.style.position = "relative")
		},
		_renderCustom: function() {
			var t = this,
				e = t.get("title"),
				r = t.get("titleText"),
				a = t.get("customDiv"),
				c = i(a, o),
				s = i(a, u),
				l = t.get("items");
			t._clearCustom(), c && e && (c.innerHTML = r), s && (t.set("titleText", r), n.each(l, function(e, r) {
				t.addCustomItem(e, r)
			}))
		},
		_clearCustom: function() {
			var t = this.get("customDiv"),
				e = i(t, o),
				r = i(t, u);
			e && (e.innerHTML = ""), r && (r.innerHTML = "")
		},
		addCustomItem: function(t, e) {
			var r, a, c = this.get("customDiv"),
				s = i(c, u),
				l = this.get("itemTpl");
			r = n.substitute(l, t), a = n.createDom(r), s.appendChild(a)
		},
		moveCustom: function(t, e) {
			var r = this,
				i = r.get("customDiv");
			i && r.get("customFollow") && (t = t, e = e, e -= n.getOuterHeight(i) / 2, i.style.left = t + "px", i.style.top = e + "px")
		},
		show: function() {
			var t = this.get("crossShapeX"),
				e = this.get("crossShapeY"),
				r = this.get("customDiv"),
				i = this.get("hideHandler");
			i && clearTimeout(i), h.superclass.show.call(this), r && this.get("customFollow") && (r.style.visibility = "visible"), t && t.show(), e && e.show()
		},
		hide: function() {
			var t = this,
				e = t.get("customDiv"),
				r = t.get("crossShapeX"),
				i = t.get("crossShapeY"),
				n = t.get("canvas"),
				a = setTimeout(function() {
					e && t.get("customFollow") && (e.style.visibility = "hidden"), t.set("hideHandler", null), t.get("destroyed") || (h.superclass.hide.call(t), n.draw())
				}, t.get("duration"));
			t.set("hideHandler", a), r && r.hide(), i && i.hide()
		},
		remove: function() {
			var t = this,
				e = t.get("crossShapeX"),
				r = t.get("crossShapeY"),
				i = t.get("customDiv");
			e && e.remove(), r && r.remove(), h.superclass.remove.call(this), i && i.parentNode.removeChild(i)
		}
	}), t.exports = h
}, function(t, e, r) {
	"use strict";

	function i(t) {
		i.superclass.constructor.call(this, t)
	}
	var n = r(1),
		a = r(12),
		c = r(48),
		s = a.GroupBase;
	i.CFG = {
		items: null,
		itemsGroup: null,
		backShape: null,
		back: {
			radius: 6,
			fill: "#000",
			fillOpacity: .7
		},
		padding: null,
		lineHeight: null,
		_padding: [10, 10, 10, 10],
		_lineHeight: 20
	}, n.extend(i, s), n.augment(i, {
		_initCfg: function() {
			this.deepSet("lineHeight"), this.deepSet("padding"), this.deepSet("marker")
		},
		_beforeRenderUI: function() {
			i.superclass._beforeRenderUI.call(this);
			var t = this;
			t.get("items");
			t.set("itemsGroup", this.addGroup())
		},
		_renderUI: function() {
			i.superclass._renderUI.call(this);
			var t = this;
			t.get("items") && (t._renderItems(), t._renderBack())
		},
		_renderBack: function() {
			var t = this.get("padding"),
				e = this.get("back"),
				r = this.get("itemsGroup"),
				i = r.renderBack(t, e);
			this.set("backShape", i)
		},
		_renderItems: function() {
			var t = this,
				e = t.get("items");
			n.each(e, function(e, r) {
				t._addItem(e, r)
			})
		},
		_addItem: function(t, e) {
			var r = this,
				i = (r.get("canvas"), r.get("itemsGroup")),
				n = (r.get("lineHeight"), r.get("padding")),
				a = e * r.get("lineHeight") + n[0] + 8;
			i.addGroup(c, {
				x: n[3],
				y: a,
				items: t
			})
		},
		setItems: function(t) {
			var e = this;
			e.clearItems(), e.set("items", t), e._renderItems(), e._renderBack()
		},
		clearItems: function() {
			var t = this,
				e = t.get("itemsGroup");
			e && e.clear()
		}
	}), t.exports = i
}, function(t, e) {
	"use strict";
	var r = (Math.pow, Math.abs, {
		linear: function(t) {
			return t
		},
		easeInQuad: function(t) {
			return t * t
		},
		easeOutQuad: function(t) {
			return -1 * t * (t - 2)
		},
		easeInOutQuad: function(t) {
			return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
		},
		easeInCubic: function(t) {
			return t * t * t
		},
		easeOutCubic: function(t) {
			return 1 * ((t = t / 1 - 1) * t * t + 1)
		},
		easeInOutCubic: function(t) {
			return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
		},
		easeInQuart: function(t) {
			return t * t * t * t
		},
		easeOutQuart: function(t) {
			return -1 * ((t = t / 1 - 1) * t * t * t - 1)
		},
		easeInOutQuart: function(t) {
			return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
		},
		easeInQuint: function(t) {
			return 1 * (t /= 1) * t * t * t * t
		},
		easeOutQuint: function(t) {
			return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
		},
		easeInOutQuint: function(t) {
			return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
		},
		easeInSine: function(t) {
			return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
		},
		easeOutSine: function(t) {
			return 1 * Math.sin(t / 1 * (Math.PI / 2))
		},
		easeInOutSine: function(t) {
			return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
		},
		easeInExpo: function(t) {
			return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
		},
		easeOutExpo: function(t) {
			return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
		},
		easeInOutExpo: function(t) {
			return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
		},
		easeInCirc: function(t) {
			return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
		},
		easeOutCirc: function(t) {
			return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
		},
		easeInOutCirc: function(t) {
			return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
		},
		easeInElastic: function(t) {
			var e = 1.70158,
				r = 0,
				i = 1;
			return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (r || (r = .3), i < Math.abs(1) ? (i = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / r)))
		},
		easeOutElastic: function(t) {
			var e = 1.70158,
				r = 0,
				i = 1;
			return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (r || (r = .3), i < Math.abs(1) ? (i = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / r) + 1)
		},
		easeInOutElastic: function(t) {
			var e = 1.70158,
				r = 0,
				i = 1;
			return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (r || (r = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / r)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / r) * .5 + 1)
		},
		easeInBack: function(t) {
			var e = 1.70158;
			return 1 * (t /= 1) * t * ((e + 1) * t - e)
		},
		easeOutBack: function(t) {
			var e = 1.70158;
			return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
		},
		easeInOutBack: function(t) {
			var e = 1.70158;
			return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
		},
		easeInBounce: function(t) {
			return 1 - r.easeOutBounce(1 - t)
		},
		easeOutBounce: function(t) {
			return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
		},
		easeInOutBounce: function(t) {
			return .5 > t ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5
		}
	});
	t.exports = r
}, function(t, e, r) {
	"use strict";
	var i = r(9),
		n = r(18),
		a = r(3),
		c = r(51),
		s = (a.Vector3, n.G, function() {});
	i.augment(s, {
		fire: function(t, e) {
			var r, i = new c(t);
			for (r in e) i[r] = e[r];
			this.trigger(i)
		},
		getCenter: function() {
			var t = this.getBBBox();
			return {
				x: t.minX + t.width / 2,
				y: t.minY + t.height / 2
			}
		},
		getWidth: function() {
			return this.getBBBox().width
		},
		getHeight: function() {
			return this.getBBBox().height
		},
		init: function() {
			this.set("animable", !0), this.set("animCount", 0), this.transformByAttr()
		},
		deepSet: function(t) {
			var e = this.get("_" + t),
				r = this.deepGet(t);
			this.set(t, i.merge(e, r))
		},
		deepGet: function(t) {
			for (var e = this.get(t), r = (this.get("canvas"), this.getParent()); r;) {
				if (e) return e;
				e = r.get(t), r = r.getParent()
			}
		},
		getCanvasNode: function() {
			var t = this.get("canvas");
			return t.get("el")
		},
		transformByAttr: function() {
			var t = this.get("attrs");
			return t && t.rotate && this.rotateAtStart(t.rotate), this
		},
		rotateAtStart: function(t) {
			var e = this.attr("x"),
				r = this.attr("y");
			this.transform([
				["t", -e, -r],
				["r", t],
				["t", e, r]
			])
		},
		move: function(t, e) {
			var r = this,
				i = r.get("x") || 0,
				n = r.get("y") || 0;
			r.translate(t - i, e - n), r.set("x", t), r.set("y", e)
		},
		animate: function(t, e, r, n) {
			this.get("animCount");
			this.addAnimCount(), i.animate(this, t, e, r, n)
		},
		stopAnimate: function() {
			this.set("animable", !1)
		},
		addAnimCount: function() {
			var t = this.get("animCount");
			1e4 > t ? this.set("animCount", ++t) : this.set("animCount", 0)
		}
	}), t.exports = s
}, function(t, e, r) {
	var i = r(9),
		n = r(18),
		a = r(72),
		c = n.G,
		s = function() {};
	i.augment(s, {
		findAllBy: function(t) {
			var e = this,
				r = e.get("children"),
				n = [],
				a = [];
			return i.each(r, function(e) {
				if (t(e) && n.push(e), e.findBy) {
					a = e.findAllBy(t);
					for (var r = 0; r < a.length; r++) n.push(a[r])
				}
			}), 0 === n.length ? !1 : n
		},
		isChild: function(t) {
			var e = this.get("canvas"),
				r = e.get("children");
			return -1 !== r.indexOf(t)
		},
		getFilterChild: function(t) {
			var e = this.get("children"),
				r = [];
			return i.each(e, function(e, i) {
				t != e && r.push(e)
			}), r
		},
		getChildAt: function(t) {
			var e = this.get("children");
			return e[t]
		},
		getFirst: function() {
			var t = this.get("children");
			return t[0]
		},
		getLast: function() {
			var t = this.get("children");
			return t[t.length - 1]
		},
		addShape: function(t, e) {
			var r, n, a = this.get("canvas");
			return e = i.mix({}, e), e ? (e.type = t, t = i.upperFirst(t), e.attrs && (n = e.attrs, i.adapAttrs(n), "Text" === t && (n.fontFamily = n.fontFamily ? n.fontFamily : a.get("fontFamily"))), e.canvas = a, e.father = this, r = new c[t](e)) : r = new c[t], this.add(r), r
		},
		addGroup: function(t, e) {
			var r, n = this.get("canvas");
			if (e = i.mix({}, e), i.adapAttrs(e.attrs), i.isFunction(t)) e ? (e.canvas = n, e.father = this, r = new t(e)) : r = new t({
				canvas: n,
				father: this
			}), this.add(r);
			else if (i.isObject(t)) t.canvas = n, r = new a(t), this.add(r);
			else {
				if (void 0 !== t) return !1;
				r = new a, this.add(r)
			}
			return r
		},
		renderBack: function(t, e) {
			var r = this.get("backShape"),
				n = this.getBBBox(),
				a = this.getParent();
			return i.mix(e, {
				x: n.minX - t[3],
				y: n.minY - t[0],
				width: n.width + t[1] + t[3],
				height: n.height + t[0] + t[2]
			}), r ? r.attr(e) : r = a.addShape("Rect", {
				zIndex: -1,
				attrs: e
			}), this.set("backShape", r), a.sort(), r
		},
		findByType: function(t) {
			var e, r = this.get("children");
			return i.each(r, function(r, i) {
				r.get("type") === t && (e = r)
			}), e
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(18),
		n = r(9),
		a = i.G,
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	c.Symbols = {
		circle: function(t, e, r) {
			return [
				["M", t, e - r],
				["a", r, r, 0, 1, 1, 0, 2 * r],
				["a", r, r, 0, 1, 1, 0, -2 * r],
				["z"]
			]
		},
		square: function(t, e, r) {
			return [
				["M", t - r, e - r],
				["L", t + r, e - r],
				["L", t + r, e + r],
				["L", t - r, e + r],
				["z"]
			]
		},
		diamond: function(t, e, r) {
			return [
				["M", t - r, e],
				["L", t, e - r],
				["L", t + r, e],
				["L", t, e + r],
				["z"]
			]
		},
		triangle: function(t, e, r) {
			var i = r / .966,
				n = r;
			return [
				["M", t, e - r],
				["L", t + i, e + n],
				["L", t - i, e + n],
				["z"]
			]
		},
		"triangle-down": function(t, e, r) {
			var i = r / .966,
				n = r;
			return [
				["M", t, e + r],
				["L", t + i, e - n],
				["L", t - i, e - n],
				["z"]
			]
		}
	}, c.ATTRS = {
		path: null,
		lineWidth: 1
	}, n.extend(c, a.Path), n.augment(c, {
		getDefaultAttrs: function() {
			c.superclass.getDefaultAttrs.call(this);
			var t, e, r = this.get("attrs"),
				i = r.x,
				a = r.y,
				s = r.radius ? r.radius : r.r;
			if (e = n.isFunction(r.symbol) ? r.symbol : c.Symbols[r.symbol], !e) throw "not support this type " + r.symbol;
			return t = {
				path: e(i, a, s)
			}, n.mix(c.ATTRS, t)
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = {
			transform: function(t, e) {
				return t = t.clone(), i.each(e, function(e) {
					switch (e[0]) {
						case "t":
							t.translate(e[1], e[2]);
							break;
						case "s":
							t.scale(e[1], e[2]);
							break;
						case "r":
							t.rotate(e[1]);
							break;
						case "m":
							t.multiply(e[1]);
							break;
						default:
							return !1
					}
				}), t
			},
			isMatrix3: function(t) {
				return "matrix3" === t.type
			},
			scale: function(t, e, r, i, n) {
				return t = t.clone(), t.translate(-1 * i, -1 * n), t.scale(e, r), t.translate(i, n), t
			},
			rotate: function(t, e, r, i) {
				return t = t.clone(), e = parseFloat(e) / 180 * Math.PI, t.translate(-1 * r, -1 * i), t.rotate(e), t.translate(r, i), t
			}
		};
	t.exports = n
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		for (var r = [], i = 0, n = t.length; n - 2 * !e > i; i += 2) {
			var a = [{
				x: +t[i - 2],
				y: +t[i - 1]
			}, {
				x: +t[i],
				y: +t[i + 1]
			}, {
				x: +t[i + 2],
				y: +t[i + 3]
			}, {
				x: +t[i + 4],
				y: +t[i + 5]
			}];
			e ? i ? n - 4 === i ? a[3] = {
				x: +t[0],
				y: +t[1]
			} : n - 2 === i && (a[2] = {
				x: +t[0],
				y: +t[1]
			}, a[3] = {
				x: +t[2],
				y: +t[3]
			}) : a[0] = {
				x: +t[n - 2],
				y: +t[n - 1]
			} : n - 4 === i ? a[3] = a[2] : i || (a[0] = {
				x: +t[i],
				y: +t[i + 1]
			}), r.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
		}
		return r
	}
	var n = r(1),
		a = "concat",
		c = String.prototype.toUpperCase,
		s = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
		l = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
		o = {
			path2Absolute: function(t) {
				if (n.isArray(t) && n.isArray(t && t[0]) || (t = o.parsePathString(t)), !t || !t.length) return [
					["M", 0, 0]
				];
				var e = [],
					r = 0,
					s = 0,
					l = 0,
					u = 0,
					h = 0;
				"M" === t[0][0] && (r = +t[0][1], s = +t[0][2], l = r, u = s, h++, e[0] = ["M", r, s]);
				for (var f, d, p = 3 === t.length && "M" === t[0][0] && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(), g = h, y = t.length; y > g; g++) {
					e.push(f = []), d = t[g];
					var v;
					if (d[0] !== c.call(d[0])) switch (f[0] = c.call(d[0]), f[0]) {
							case "A":
								f[1] = d[1], f[2] = d[2], f[3] = d[3], f[4] = d[4], f[5] = d[5], f[6] = +(d[6] + r), f[7] = +(d[7] + s);
								break;
							case "V":
								f[1] = +d[1] + s;
								break;
							case "H":
								f[1] = +d[1] + r;
								break;
							case "R":
								v = [r, s][a](d.slice(1));
								for (var m = 2, x = v.length; x > m; m++) v[m] = +v[m] + r, v[++m] = +v[m] + s;
								e.pop(), e = e[a](i(v, p));
								break;
							case "M":
								for (l = +d[1] + r, u = +d[2] + s, m = 1, x = d.length; x > m; m++) f[m] = +d[m] + (m % 2 ? r : s);
								break;
							default:
								for (m = 1, x = d.length; x > m; m++) f[m] = +d[m] + (m % 2 ? r : s)
						} else if ("R" === d[0]) v = [r, s][a](d.slice(1)), e.pop(), e = e[a](i(v, p)), f = ["R"][a](d.slice(-2));
						else
							for (var C = 0, _ = d.length; _ > C; C++) f[C] = d[C];
					switch (f[0]) {
						case "Z":
							r = l, s = u;
							break;
						case "H":
							r = f[1];
							break;
						case "V":
							s = f[1];
							break;
						case "M":
							l = f[f.length - 2], u = f[f.length - 1], r = f[f.length - 2], s = f[f.length - 1];
							break;
						default:
							r = f[f.length - 2], s = f[f.length - 1]
					}
				}
				return e
			},
			parsePathString: function(t) {
				if (!t) return null;
				var e = {
						a: 7,
						c: 6,
						h: 1,
						l: 2,
						m: 2,
						r: 4,
						q: 4,
						s: 4,
						t: 2,
						v: 1,
						z: 0
					},
					r = [];
				return n.isArray(t) && n.isArray(t[0]) && (r = t.slice(0)), !r.length && n.isString(t) && t.replace(l, function(t, i, n) {
					var c = [],
						l = i.toLowerCase();
					if (n.replace(s, function(t, e) {
							e && c.push(+e)
						}), "m" === l && c.length > 2 && (r.push([i][a](c.splice(0, 2))), l = "l", i = "m" === i ? "l" : "L"), "r" === l) r.push([i][a](c));
					else
						for (; c.length >= e[l] && (r.push([i][a](c.splice(0, e[l]))), e[l]););
				}), r
			},
			parsePathArray: function(t) {
				if (n.isArray(t)) {
					var e = n.map(t, function(t) {
						var e = t.join(" ");
						return e.replace(/([a-z,A-Z])\s+/, "$1")
					});
					return e.join(" ")
				}
				return t
			}
		};
	t.exports = o
}, function(t, e, r) {
	"use strict";

	function i(t) {
		this.space = {}, n.isString(t) ? this.setStyle(t) : t instanceof i && this.copy(t)
	}
	var n = r(1),
		a = (r(4), r(140)),
		c = r(141),
		s = r(139),
		l = {
			hex: /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/,
			space: /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)$/,
			rgbNum: /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*$/,
			rgbaNum: /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]*\.?[0-9]+)\s*$/,
			rgbPre: /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/,
			rgbaPre: /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/,
			hsl: /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/,
			hsla: /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/
		};
	n.augment(i, {
		getType: function() {
			return this.space.type
		},
		toRGB: function() {
			var t = this.space;
			if ("rgb" !== t.type) {
				var e = t.toRGB();
				this.setRGB(e.r, e.g, e.b, e.a)
			}
		},
		toHSL: function() {
			var t = this.space;
			if ("hsl" !== t.type) {
				var e = t.toHSL();
				this.setHSL(e.h, e.s, e.l, e.a)
			}
		},
		getR: function() {
			return this.toRGB(), this.space.r
		},
		getG: function() {
			return this.toRGB(), this.space.g
		},
		getB: function() {
			return this.toRGB(), this.space.b
		},
		getH: function() {
			return this.toHSL(), this.space.h
		},
		getS: function() {
			return this.toHSL(), this.space.s
		},
		getL: function() {
			return this.toHSL(), this.space.l
		},
		getA: function() {
			return this.space.a
		},
		multiplyA: function(t) {
			return void 0 === t ? this : (void 0 === this.space.a && (this.space.a = 1), this.space.a *= t, this)
		},
		getRGBStyle: function() {
			return this.toRGB(), this.space.getStyle()
		},
		getRGBPreStyle: function() {
			return this.toRGB(), this.space.getPreStyle()
		},
		getHSLStyle: function() {
			return this.toHSL(), this.space.getStyle()
		},
		getHex: function() {
			return this.toRGB(), this.space.getHex()
		},
		setRGB: function(t, e, r, i) {
			return this.space = new c, this.space.setRGB(t, e, r, i), this
		},
		setHSL: function(t, e, r, i) {
			return this.space = new a, this.space.setHSL(t, e, r, i), this
		},
		setHex: function(t) {
			return this.space = new c, t = Math.floor(t), this.space.r = (t >> 16 & 255) / 255, this.space.g = (t >> 8 & 255) / 255, this.space.b = (255 & t) / 255, this
		},
		setStyle: function(t) {
			var e;
			if (e = l.hex.exec(t)) {
				var r = e[1],
					i = r.length;
				if (3 === i) return this.setRGB(parseInt(r.charAt(0) + r.charAt(0), 16) / 255, parseInt(r.charAt(1) + r.charAt(1), 16) / 255, parseInt(r.charAt(2) + r.charAt(2), 16) / 255), this;
				if (6 === i) return this.setRGB(parseInt(r.charAt(0) + r.charAt(1), 16) / 255, parseInt(r.charAt(2) + r.charAt(3), 16) / 255, parseInt(r.charAt(4) + r.charAt(5), 16) / 255), this
			} else if (e = l.space.exec(t)) {
				var n, a = e[1],
					c = e[2];
				switch (a) {
					case "rgb":
						if (n = l.rgbNum.exec(c)) return this.setRGB(parseInt(n[1], 10) / 255, parseInt(n[2], 10) / 255, parseInt(n[3], 10) / 255), this;
						if (n = l.rgbPre.exec(c)) return this.setRGB(parseInt(n[1], 10) / 100, parseInt(n[2], 10) / 100, parseInt(n[3], 10) / 100), this;
						break;
					case "rgba":
						if (n = l.rgbaNum.exec(c)) return this.setRGB(parseInt(n[1], 10) / 255, parseInt(n[2], 10) / 255, parseInt(n[3], 10) / 255, parseFloat(n[4])), this;
						if (n = l.rgbaPre.exec(c)) return this.setRGB(parseInt(n[1], 10) / 100, parseInt(n[2], 10) / 100, parseInt(n[3], 10) / 100, parseFloat(n[4])), this;
						break;
					case "hsl":
						if (n = l.hsl.exec(c)) return this.setHSL(parseInt(n[1], 10) / 360, parseInt(n[2], 10) / 100, parseInt(n[3], 10) / 100), this;
						break;
					case "hsla":
						if (n = l.hsla.exec(c)) return this.setHSL(parseInt(n[1], 10) / 360, parseInt(n[2], 10) / 100, parseInt(n[3], 10) / 100, parseFloat(n[4])), this
				}
			} else t = t.toLowerCase(), void 0 !== s[t] ? this.setHex(s[t]) : this.setHex(s.black)
		},
		copy: function(t) {
			this.space = t.space.clone()
		},
		clone: function() {
			return new i(this)
		}
	}), t.exports = i
}, function(t, e) {
	t.exports = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	}
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(4),
		a = function() {
			this.h = 0, this.s = 0, this.l = 0
		};
	i.augment(a, {
		type: "hsl",
		setHSL: function(t, e, r, i) {
			this.h = n.mod(t, 1), this.s = n.clamp(e, 0, 1), this.l = n.clamp(r, 0, 1), void 0 !== i ? this.a = n.clamp(i, 0, 1) : this.a = void 0
		},
		toRGB: function() {
			function t(t, e, r) {
				return 0 > r && (r += 1), r > 1 && (r -= 1), 1 / 6 > r ? t + 6 * (e - t) * r : .5 > r ? e : 2 / 3 > r ? t + 6 * (e - t) * (2 / 3 - r) : t
			}
			return function() {
				var e = this,
					r = e.h,
					i = e.s,
					n = e.l;
				if (0 === i) return {
					r: n,
					g: n,
					b: n,
					a: e.a
				};
				var a = .5 >= n ? n * (1 + i) : n + i - n * i,
					c = 2 * n - a;
				return {
					r: t(c, a, r + 1 / 3),
					g: t(c, a, r),
					b: t(c, a, r - 1 / 3),
					a: e.a
				}
			}
		}(),
		clone: function() {
			var t = new a;
			return t.h = this.h, t.s = this.s, t.l = this.l, t.a = this.a, t
		},
		copy: function(t) {
			return this.h = t.h, this.s = t.s, this.l = t.l, this.a = t.a, this
		},
		getStyle: function() {
			var t = this;
			return void 0 === t.a ? "hsl(" + Math.round(360 * t.h) + ", " + Math.round(100 * t.s) + "%, " + Math.round(100 * t.l) + "%)" : "hsla(" + Math.round(360 * t.h) + ", " + Math.round(100 * t.s) + "%, " + Math.round(100 * t.l) + "%, " + t.a + ")"
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(4),
		a = function() {
			this.r = 0, this.g = 0, this.b = 0, this.type = "rgb"
		};
	i.augment(a, {
		type: "rgb",
		setRGB: function(t, e, r, i) {
			this.r = n.clamp(t, 0, 1), this.g = n.clamp(e, 0, 1), this.b = n.clamp(r, 0, 1), void 0 !== i ? this.a = n.clamp(i, 0, 1) : this.a = void 0
		},
		toHSL: function() {
			var t, e, r = this.r,
				i = this.g,
				n = this.b,
				a = Math.max(r, i, n),
				c = Math.min(r, i, n),
				s = (c + a) / 2;
			if (c === a) t = 0, e = 0;
			else {
				var l = a - c;
				switch (e = .5 >= s ? l / (a + c) : l / (2 - a - c), a) {
					case r:
						t = (i - n) / l + (n > i ? 6 : 0);
						break;
					case i:
						t = (n - r) / l + 2;
						break;
					case n:
						t = (r - i) / l + 4
				}
				t /= 6
			}
			return {
				h: t,
				s: e,
				l: s,
				a: this.a
			}
		},
		getHex: function() {
			var t = 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
			return "#" + ("000000" + t.toString(16)).slice(-6)
		},
		getStyle: function() {
			return void 0 === this.a ? "rgb(" + Math.round(255 * this.r).toString() + ", " + Math.round(255 * this.g).toString() + ", " + Math.round(255 * this.b).toString() + ")" : "rgba(" + Math.round(255 * this.r).toString() + ", " + Math.round(255 * this.g).toString() + ", " + Math.round(255 * this.b).toString() + ", " + this.a + ")"
		},
		getPreStyle: function() {
			return void 0 === this.a ? "rgb(" + Math.round(100 * this.r).toString() + "%, " + Math.round(100 * this.g).toString() + "%, " + Math.round(100 * this.b).toString() + "%)" : "rgba(" + Math.round(100 * this.r).toString() + "%, " + Math.round(100 * this.g).toString() + "%, " + Math.round(100 * this.b).toString() + "%, " + this.a + ")"
		},
		clone: function() {
			var t = new a;
			return t.r = this.r, t.g = this.g, t.b = this.b, t.a = this.a, t
		},
		copy: function(t) {
			return this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this
		}
	}), t.exports = a
}, function(t, e) {
	"use strict";

	function r(t) {
		O = t.length, O && (S = t[0].length), O > 1 && S > 1 && (m = t[0][0][0], C = t[0][0][1], x = t[1][0][0] - t[0][0][0], _ = t[0][1][1] - t[0][0][1])
	}

	function i(t, e) {
		var r = n(!0, t, e),
			i = n(!1, t, e);
		return [r, i]
	}

	function n(t, e, r) {
		var i = O,
			n = S,
			c = [];
		t ? n-- : i--;
		for (var s = 0; i > s; s++) {
			c[s] = [];
			for (var l = 0; n > l; l++) {
				c[s][l] = {};
				var o, u;
				if (o = e[s][l][2], u = t ? e[s][l + 1][2] : e[s + 1][l][2], a(o, u)) c[s][l].rate = -2, c[s][l].have_iso_point = !1;
				else {
					var h = a(r, o),
						f = a(r, u),
						d = (r - o) * (r - u);
					if (h || f) {
						h ? o += w : u += w;
						var p = c[s][l].rate = (r - o) / (u - o);
						p > 0 && 1 > p ? c[s][l].have_iso_point = !0 : c[s][l].have_iso_point = !1
					} else d > 0 ? (c[s][l].rate = -2, c[s][l].have_iso_point = !1) : 0 > d && (c[s][l].rate = (r - o) / (u - o), c[s][l].have_iso_point = !0)
				}
			}
		}
		return c
	}

	function a(t, e) {
		return Math.abs(t - e) < 1e-9
	}

	function c(t, e, r, i) {
		var n = 0,
			a = 0,
			c = o(),
			l = o();
		for (n = 0; O - 1 > n; n++) e[n][0].have_iso_point && (c = o(n, -1, !1), l = o(n, 0, !1), s(c, l, r, i, t, e));
		for (a = 0; S - 1 > a; a++) t[O - 1][a].have_iso_point && (c = o(O, a, !0), l = o(O - 1, a, !0), s(c, l, r, i, t, e));
		for (n = 0; O - 1 > n; n++) e[n][S - 1].have_iso_point && (c = o(n, S, !1), l = o(n, S - 1, !1), s(c, l, r, i, t, e));
		for (a = 0; S - 1 > a; a++) t[0][a].have_iso_point && (c = o(-1, a, !0), l = o(0, a, !0), s(c, l, r, i, t, e))
	}

	function s(t, e, r, i, n, a) {
		var c = !1,
			s = {
				value: r,
				path: []
			};
		for (h(e, n, a), s.path.push(l(e, n, a)); !c && f(e, t, n, a, s);) c = !e.row && e.isHorizon || !e.col && !e.isHorizon || e.row == O - 1 || e.col == S - 1;
		i.push(s)
	}

	function l(t, e, r) {
		var i = t.row,
			n = t.col,
			a = t.isHorizon,
			c = m + i * x,
			s = C + n * _;
		return a ? s += e[i][n].rate * _ : c += r[i][n].rate * x, [c, s]
	}

	function o(t, e, r) {
		return {
			row: t || 0,
			col: e || 0,
			isHorizon: r || 0,
			clone: u
		}
	}

	function u(t) {
		this.row = t.row, this.col = t.col, this.isHorizon = t.isHorizon
	}

	function h(t, e, r) {
		var i = t.row,
			n = t.col,
			a = t.isHorizon;
		return a ? e[i][n].have_iso_point = !1 : r[i][n].have_iso_point = !1, t
	}

	function f(t, e, r, i, n) {
		var a = o(),
			c = o(),
			s = o();
		d(a, c, s, t, e);
		for (var u = [a, c, s], f = [], y = {}, v = !1, m = 0; 3 > m; m++) f[m] = p(r, i, u[m]);
		if (f[0] && f[1] && f[2]) y = g(t, u[0], r, i) < g(t, u[1], r, i) ? h(u[0], r, i) : h(u[1], r, i), v = !0;
		else
			for (var m = 0; 3 > m; m++)
				if (f[m]) {
					y = h(u[m], r, i), v = !0;
					break
				}
		return v && (n.path.push(l(y, r, i)), e.clone(t), t.clone(y)), v
	}

	function d(t, e, r, i, n) {
		return i.row > n.row ? (t.clone(i), t.isHorizon = !1, e.clone(t), e.col += 1, r.clone(i), void(r.row += 1)) : i.col > n.col ? (e.clone(i), e.isHorizon = !0, t.clone(e), t.row += 1, r.clone(i), void(r.col += 1)) : i.isHorizon ? (e.clone(i), e.row -= 1, e.isHorizon = !1, t.clone(e), t.col += 1, r.clone(i), void(r.row -= 1)) : (t.clone(i), t.col -= 1, t.isHorizon = !0, e.clone(t), e.row += 1, r.clone(i), void(r.col -= 1))
	}

	function p(t, e, r) {
		var i = r.row,
			n = r.col,
			a = r.isHorizon;
		return a ? t[i][n].have_iso_point : e[i][n].have_iso_point
	}

	function g(t, e, r, i) {
		var n = l(t, r, i),
			a = l(e, r, i),
			c = n.x - a.x,
			s = n.y - a.y;
		return Math.sqrt(c * c + s * s)
	}

	function y(t, e, r, i) {
		var n, a, c = o(),
			s = o();
		for (a = 0; S - 1 > a; a++)
			for (n = 0; O - 1 > n; n++) e[n][a].have_iso_point && (c = o(n, 0, !1), s = o(n, a, !1), v(c, s, t, e, r, i))
	}

	function v(t, e, r, i, n, a) {
		var c = e.row,
			s = e.col,
			o = !1,
			u = {
				value: n,
				path: []
			};
		for (u.path.push(l(e, r, i)); !o && f(e, t, r, i, u);) o = e.row == c && e.col == s && !e.isHorizon;
		a.push(u)
	}
	var m, x, C, _, O = 0,
		S = 0,
		w = .001,
		M = function(t, e) {
			var n, a = [],
				s = [],
				l = [];
			r(t);
			for (var o = 0; o < e.length; o++) {
				n = e[o];
				var u = i(t, n);
				a = u[0], s = u[1], c(a, s, n, l), y(a, s, n, l)
			}
			return l
		};
	t.exports = M
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(50),
		a = function(t) {
			t.inner = t.inner || 0, a.superclass.constructor.call(this, t)
		};
	i.extend(a, n), i.augment(a, {
		type: "clock"
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(50),
		a = function(t) {
			t.inner = t.inner || 0, a.superclass.constructor.call(this, t)
		};
	i.extend(a, n), i.augment(a, {
		type: "gauge"
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(74),
		a = r(159),
		c = function(t) {
			var e = {};
			i.mix(e, c.ATTRS, t), c.superclass.constructor.call(this, e);
			var r = this.get("projection"),
				n = this.get("basic"),
				s = a[r];
			this.set("project", new s({
				basic: n
			}))
		};
	c.ATTRS = {
		projection: "mercator"
	}, i.extend(c, n), i.augment(c, {
		type: "map",
		_getOriginRange: function() {
			var t = this,
				e = t.get("originMin")[0],
				r = t.get("originMin")[1],
				i = t.get("originMax")[0],
				n = t.get("originMax")[1],
				a = {
					x: i - e,
					y: n - r
				};
			return {
				xMin: e,
				yMin: r,
				range: a
			}
		},
		_getProjectRange: function() {
			var t = this,
				e = t.get("min") ? t.get("min") : t.get("originMin"),
				r = t.get("max") ? t.get("max") : t.get("originMax"),
				i = e[0],
				n = e[1],
				a = r[0],
				c = r[1],
				s = {
					x: a - i,
					y: c - n
				};
			return {
				xMin: i,
				yMin: n,
				range: s
			}
		},
		_invert: function(t, e) {
			var r;
			"origin" === e ? r = this._getOriginRange() : "project" === e && (r = this._getProjectRange());
			var i = r.xMin,
				n = r.yMin,
				a = r.range;
			return t.x = i + t.x * a.x, t.y = n + t.y * a.y, t
		},
		_scale: function(t, e) {
			var r;
			"origin" === e ? r = this._getOriginRange() : "project" === e && (r = this._getProjectRange());
			var i = r.xMin,
				n = r.yMin,
				a = r.range;
			return t.x = (t.x - i) / a.x, t.y = (t.y - n) / a.y, t
		},
		convertPoint: function(t) {
			var e = this,
				r = e.isTransposed ? t.y : t.x,
				i = e.isTransposed ? t.x : t.y,
				n = e.get("project"),
				t = e._invert({
					x: r,
					y: i
				}, "origin");
			return t = n.project(t.x, t.y), t = e._scale(t, "project"), {
				x: this.convertDim(t.x, "x"),
				y: this.convertDim(t.y, "y")
			}
		},
		invertPoint: function(t) {
			var e = this,
				r = this.invertDim(t.x, "x"),
				i = this.invertDim(t.y, "y"),
				t = {};
			t.x = e.isTransposed ? i : r, t.y = e.isTransposed ? r : i;
			var n = e.get("project");
			return t = e._invert(t, "project"), t = n.invert(t), t = e._scale(t, "origin")
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(39),
		a = r(3),
		c = a.Vector2,
		s = function(t) {
			t.inner = t.inner || 0, s.superclass.constructor.call(this, t);
			var e = this.get("x");
			this.set("x", this.get("y")), this.set("y", e)
		};
	i.extend(s, n), i.augment(s, {
		type: "rho",
		convertPoint: function(t) {
			var e = this,
				r = e.getCenter(),
				i = e.get("y").start,
				n = e.convertDim(t.x, "x");
			return {
				x: r.x + Math.cos(i) * n,
				y: r.y + Math.sin(i) * n
			}
		},
		invertPoint: function(t) {
			var e = this,
				r = e.getCenter(),
				i = new c(t.x - r.x, t.y - r.y),
				n = i.length();
			return {
				x: e.invertDim(n, "x")
			}
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(39),
		a = r(3),
		c = r(4),
		s = a.Vector2,
		l = a.Matrix3,
		o = a.Vector3,
		u = function(t) {
			t.inner = t.inner || 0, u.superclass.constructor.call(this, t)
		};
	i.extend(u, n), i.augment(u, {
		type: "theta",
		convertPoint: function(t) {
			var e = this,
				r = e.getCenter(),
				i = e.convertDim(t.x, "x"),
				n = e.get("y").end;
			return {
				x: r.x + Math.cos(i) * n,
				y: r.y + Math.sin(i) * n
			}
		},
		invertPoint: function(t) {
			var e = this,
				r = e.getCenter(),
				i = new s(t.x - r.x, t.y - r.y),
				n = e.get("x"),
				a = new l;
			a.rotate(n.start);
			var u = new o(1, 0, 0);
			u.applyMatrix(a), u = new s(u.x, u.y);
			var h = u.angleTo(i, n.end < n.start);
			c.equal(h, 2 * Math.PI) && (h = 0);
			var f = h / (n.end - n.start);
			return f = n.end - n.start > 0 ? f : -f, {
				x: f
			}
		}
	}), t.exports = u
}, function(t, e, r) {
	"use strict";

	function i(t) {
		var e = {};
		n.mix(e, i.ATTRS, t), i.superclass.constructor.call(this, e), this._init()
	}
	var n = r(1),
		a = r(38);
	i.ATTRS = {
		start: {
			x: 0,
			y: 0
		},
		end: {
			x: 0,
			y: 0
		},
		top: .5
	}, n.extend(i, a), n.augment(i, {
		type: "triAngle",
		triAngle: !0,
		_init: function() {
			return this.setTopfactor(), this
		},
		setTopfactor: function() {
			var t = this,
				e = t.get("start"),
				r = t.get("end"),
				i = {
					x: r.x,
					y: e.y
				},
				n = {
					x: e.x + (r.x - e.x) * t.get("top"),
					y: r.y
				};
			t.getXStart = function(t) {
				return e.x + (n.x - e.x) / (n.y - e.y) * (t - e.y)
			}, t.getXEnd = function(t) {
				return i.x + (n.x - i.x) / (n.y - i.y) * (t - i.y)
			}
		},
		set: function(t, e) {
			return this._attrs[t] = e, "top" === t && this.setTopfactor(), this
		},
		convertPoint: function(t) {
			var e = this,
				r = e.get("start"),
				i = e.get("end"),
				n = t.y,
				a = t.x;
			isNaN(n) && (n = 0), n = r.y + (i.y - r.y) * n;
			var c = e.getXStart(n),
				s = e.getXEnd(n);
			return a = c + (s - c) * a, {
				x: a,
				y: n
			}
		},
		invertPoint: function(t) {
			var e = this,
				r = e.get("start"),
				i = e.get("end"),
				n = e.getXStart(t.y),
				a = e.getXEnd(t.y),
				c = (t.x - n) / (n - a);
			return {
				x: -c,
				y: -(t.y - r.y) / (i.y - r.y)
			}
		}
	}), t.exports = i
}, function(t, e) {
	"use strict";

	function r(t) {
		return t instanceof Date ? t : new Date(t)
	}

	function i(t, e, r) {
		var i = new Date(r);
		switch (isNaN(i) && (i = new Date), e = parseInt(e, 10), t) {
			case "s":
				i = new Date(i.getTime() + 1e3 * e);
				break;
			case "n":
				i = new Date(i.getTime() + 6e4 * e);
				break;
			case "h":
				i = new Date(i.getTime() + 36e5 * e);
				break;
			case "d":
				i = new Date(i.getTime() + 864e5 * e);
				break;
			case "w":
				i = new Date(i.getTime() + 6048e5 * e);
				break;
			case "m":
				i = new Date(i.getFullYear(), i.getMonth() + e, i.getDate(), i.getHours(), i.getMinutes(), i.getSeconds());
				break;
			case "y":
				i = new Date(i.getFullYear() + e, i.getMonth(), i.getDate(), i.getHours(), i.getMinutes(), i.getSeconds())
		}
		return i
	}
	var n = /^(?:(?!0000)[0-9]{4}([-\/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-\/.]?)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/,
		a = function() {
			var t = /w{1}|d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
				e = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
				r = /[^-+\dA-Z]/g,
				i = function(t, e) {
					for (t = String(t), e = e || 2; t.length < e;) t = "0" + t;
					return t
				},
				n = {
					"default": "ddd mmm dd yyyy HH:MM:ss",
					shortDate: "m/d/yy",
					longDate: "mmmm d, yyyy",
					fullDate: "dddd, mmmm d, yyyy",
					shortTime: "h:MM TT",
					longTime: "h:MM:ss TT Z",
					isoDate: "yyyy-mm-dd",
					isoTime: "HH:MM:ss",
					isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
					isoUTCDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
					localShortDate: "yy\u5e74mm\u6708dd\u65e5",
					localShortDateTime: "yy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",
					localLongDate: "yyyy\u5e74mm\u6708dd\u65e5",
					localLongDateTime: "yyyy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",
					localFullDate: "yyyy\u5e74mm\u6708dd\u65e5 w",
					localFullDateTime: "yyyy\u5e74mm\u6708dd\u65e5 w hh:MM:ss TT"
				},
				a = {
					dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
					monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
				};
			return function(c, s, l) {
				if (1 !== arguments.length || "[object String]" !== Object.prototype.toString.call(c) || /\d/.test(c) || (s = c, c = void 0), c = c ? new Date(c) : new Date, isNaN(c)) throw SyntaxError("invalid date");
				s = String(n[s] || s || n["default"]), "UTC:" === s.slice(0, 4) && (s = s.slice(4), l = !0);
				var o = l ? "getUTC" : "get",
					u = c[o + "Date"](),
					h = c[o + "Day"](),
					f = c[o + "Month"](),
					d = c[o + "FullYear"](),
					p = c[o + "Hours"](),
					g = c[o + "Minutes"](),
					y = c[o + "Seconds"](),
					v = c[o + "Milliseconds"](),
					m = l ? 0 : c.getTimezoneOffset(),
					x = {
						d: u,
						dd: i(u, void 0),
						ddd: a.dayNames[h],
						dddd: a.dayNames[h + 7],
						w: a.dayNames[h + 14],
						m: f + 1,
						mm: i(f + 1, void 0),
						mmm: a.monthNames[f],
						mmmm: a.monthNames[f + 12],
						yy: String(d).slice(2),
						yyyy: d,
						h: p % 12 || 12,
						hh: i(p % 12 || 12, void 0),
						H: p,
						HH: i(p, void 0),
						M: g,
						MM: i(g, void 0),
						s: y,
						ss: i(y, void 0),
						l: i(v, 3),
						L: i(v > 99 ? Math.round(v / 10) : v, void 0),
						t: 12 > p ? "a" : "p",
						tt: 12 > p ? "am" : "pm",
						T: 12 > p ? "A" : "P",
						TT: 12 > p ? "AM" : "PM",
						Z: l ? "UTC" : (String(c).match(e) || [""]).pop().replace(r, ""),
						o: (m > 0 ? "-" : "+") + i(100 * Math.floor(Math.abs(m) / 60) + Math.abs(m) % 60, 4),
						S: ["th", "st", "nd", "rd"][u % 10 > 3 ? 0 : (u % 100 - u % 10 !== 10) * u % 10]
					};
				return s.replace(t, function(t) {
					return t in x ? x[t] : t.slice(1, t.length - 1)
				})
			}
		}(),
		c = {
			add: function(t, e, r) {
				return i(t, e, r)
			},
			addHour: function(t, e) {
				return i("h", t, e)
			},
			addMinute: function(t, e) {
				return i("n", t, e)
			},
			addSecond: function(t, e) {
				return i("s", t, e)
			},
			addDay: function(t, e) {
				return i("d", t, e)
			},
			addWeek: function(t, e) {
				return i("w", t, e)
			},
			addMonths: function(t, e) {
				return i("m", t, e)
			},
			addYear: function(t, e) {
				return i("y", t, e)
			},
			isDateEquals: function(t, e) {
				return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
			},
			isEquals: function(t, e) {
				return t === e ? !0 : t && e && t.getTime && e.getTime ? t.getTime() === e.getTime() : !1
			},
			isDateString: function(t) {
				return n.test(t)
			},
			format: function(t, e, r) {
				return a(t, e, r)
			},
			parse: function(t) {
				return "string" == typeof t && (t = t.replace(/-/g, "/")), r(t)
			},
			today: function() {
				var t = new Date;
				return new Date(t.getFullYear(), t.getMonth(), t.getDate())
			},
			getDate: function(t) {
				return new Date(t.getFullYear(), t.getMonth(), t.getDate())
			}
		};
	t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = function(t, e, r, i) {
			this.type = t, this.target = null, this.currentTarget = null, this.bubbles = r, this.cancelable = i, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.removed = !1, this.event = e
		};
	i.augment(n, {
		preventDefault: function() {
			this.defaultPrevented = this.cancelable && !0
		},
		stopPropagation: function() {
			this.propagationStopped = !0
		},
		remove: function() {
			this.remove = !0
		},
		clone: function() {
			return i.clone(this)
		},
		toString: function() {
			return "[Event (type=" + this.type + ")]"
		}
	}), t.exports = n
}, function(t, e) {
	var r = function(t, e, r) {
			var i, n, a, c, s = !0;
			for (i = 0; r - 1 > i; i++) {
				if (0 == t[i][i]) {
					s = !1;
					break
				}
				for (n = i + 1; r > n; n++)
					for (c = -t[n][i] / t[i][i], e[n] = e[n] + c * e[i], a = i; r > a; a++) t[n][a] = t[n][a] + c * t[i][a]
			}
			for (i = 0; r > i; i++)
				if (0 == t[i][i]) {
					s = !1;
					break
				}
			return s
		},
		i = function(t, e) {
			var i = [],
				n = t,
				a = e,
				c = a.length,
				s = r(n, a, c);
			if (s) {
				i[c - 1] = a[c - 1] / n[c - 1][c - 1];
				for (var l = c - 2; l >= 0; l--) {
					i[l] = a[l];
					for (var o = l + 1; c > o; o++) i[l] = i[l] - n[l][o] * i[o];
					i[l] = i[l] / n[l][l]
				}
			} else i = !1;
			return i
		};
	t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(62),
		a = function(t) {
			i.mix(this, t)
		};
	i.augment(a, {
		get: function(t) {
			return this[t]
		},
		set: function(t, e) {
			this[t] = e
		},
		width: 500,
		height: 500,
		x: 0,
		y: 0,
		min: null,
		max: null,
		formatter: function(t) {
			return t
		},
		radius: 60,
		blur: 0,
		colors: ["rgb(0,0,255)", "rgb(0,0,255)", "rgb(0,255,0)", "yellow", "rgb(255,0,0)"],
		_mkcircle: function(t, e, r, i) {
			var n = this.blur,
				a = this.radius,
				c = i.createRadialGradient(t, e, a * n, t, e, a);
			c.addColorStop(0, "rgba(0, 0, 0, 1)"), c.addColorStop(1, "rgba(0, 0, 0, 0)"), i.globalAlpha = r, i.fillStyle = c
		},
		_colorise: function(t) {
			for (var e = this.width, r = this.height, i = t.getImageData(this.x, this.y, e, r), a = i.data, c = a.length, s = this.colors, l = n.gradient(s), o = 3; c > o; o += 4) {
				var u = a[o];
				if (u) {
					var h = n.Util.rgb2arr(l(u / 256));
					a[o - 3] = h[0], a[o - 2] = h[1], a[o - 1] = h[2], a[o] = u
				}
			}
			return i
		},
		getData: function(t) {
			for (var e = [], r = t.length - 1; r >= 0; r--) e.push(t[r][2]);
			var n = i.isNull(this.max) ? Math.max.apply(null, e) : this.max,
				a = i.isNull(this.min) ? Math.min.apply(null, e) : this.min;
			if (n === a) return !1;
			var c = document.createElement("canvas"),
				s = c.getContext("2d");
			c.width = this.width + this.x, c.height = this.height + this.y;
			for (var l = this.formatter, r = t.length - 1; r >= 0; r--) {
				var o = (l(t[r][2]) - l(a)) / (l(n) - l(a));
				this._mkcircle(t[r][0], t[r][1], o, s), s.fillRect(0, 0, this.width + this.x, this.height + this.y)
			}
			return this._colorise(s)
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		for (var r = [], i = Math.min(t.length, e.length), n = 0; i > n; n++) r[n] = a.singular(t[n], e[n]);
		return function(t) {
			for (var e = [], n = 0; i > n; n++) e[n] = r[n](t);
			return e
		}
	}

	function n(t, e) {
		for (var r = [], i = Math.min(t.length, e.length), n = 0; i > n; n++) r[n] = a.unSingular(t[n], e[n]);
		return function(t) {
			for (var e = Math.min(r.length, t.length), i = 0, n = 0, a = 0; e > a; a++) i += r[a](t[a]), n++;
			return 0 === n ? 0 : i / n
		}
	}
	var a = r(41);
	t.exports = {
		array: i,
		unArray: n
	}
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		switch (e.getType()) {
			case "rgb":
				return a(t, e);
			case "hsl":
				return s(t, e)
		}
	}

	function n(t, e) {
		switch (e.getType()) {
			case "rgb":
				return c(t, e);
			case "hsl":
				return l(t, e)
		}
	}

	function a(t, e) {
		var r = t.getR(),
			i = t.getG(),
			n = t.getB(),
			a = t.getA(),
			c = e.getR() - r,
			s = e.getG() - i,
			l = e.getB() - n,
			u = e.getA();
		return void 0 === a && void 0 === u || (a = a || 1, u = (void 0 === u ? 1 : u) - a),
			function(t) {
				var e = new o;
				return e.setRGB(r + c * t, i + s * t, n + l * t, void 0 !== a && void 0 !== u ? a + u * t : void 0), e.getRGBStyle()
			}
	}

	function c(t, e) {
		var r = t.getR(),
			i = t.getG(),
			n = t.getB(),
			a = t.getA(),
			c = e.getR() - r,
			s = e.getG() - i,
			l = e.getB() - n,
			u = e.getA();
		return void 0 === a && void 0 === u || (a = a || 1, u = (void 0 === u ? 1 : u) - a),
			function(t) {
				if (t = new o(t), !t.getType()) return 0;
				var e = t.getR(),
					h = t.getG(),
					f = t.getB(),
					d = t.getA();
				d = d || 1;
				var p = 0,
					g = 0;
				return 0 !== c && (p += (e - r) / c, g++), 0 !== s && (p += (h - i) / s, g++), 0 !== l && (p += (f - n) / l, g++), 0 !== u && u && (p += (d - a) / u, g++), 0 === g ? 0 : p / g
			}
	}

	function s(t, e) {
		var r = t.getH(),
			i = t.getS(),
			n = t.getL(),
			a = t.getA(),
			c = e.getH() - r,
			s = e.getS() - i,
			l = e.getL() - n,
			u = e.getA();
		return void 0 === a && void 0 === u || (a = a || 1, u = (void 0 === u ? 1 : u) - a),
			function(t) {
				var e = new o;
				return e.setHSL(r + c * t, i + s * t, n + l * t, void 0 !== a && void 0 !== u ? a + u * t : void 0), e.getHSLStyle()
			}
	}

	function l(t, e) {
		var r = t.getH(),
			i = t.getS(),
			n = t.getL(),
			a = t.getA(),
			c = e.getH() - r,
			s = e.getS() - i,
			l = e.getL() - n,
			u = e.getA();
		return void 0 === a && void 0 === u || (a = a || 1, u = (void 0 === u ? 1 : u) - a),
			function(t) {
				if (t = new o(t), !t.getType()) return 0;
				var e = t.getH(),
					h = t.getS(),
					f = t.getL(),
					d = t.getA();
				d = d || 1;
				var p = 0,
					g = 0;
				return 0 !== c && (p += (e - r) / c, g++), 0 !== s && (p += (h - i) / s, g++), 0 !== l && (p += (f - n) / l, g++), 0 !== u && u && (p += (d - a) / u, g++), 0 === g ? 0 : p / g
			}
	}
	var o = r(37);
	t.exports = {
		color: i,
		unColor: n
	}
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		return t instanceof h && e instanceof h ? o.matrix(t, e) : a.isArray(t) && a.isArray(e) ? c.array(t, e) : a.isObject(t) && a.isObject(e) ? s.object(t, e) : l.singular(t, e)
	}

	function n(t, e) {
		return t instanceof h && e instanceof h ? o.unMatrix(t, e) : a.isArray(t) && a.isArray(e) ? c.unArray(t, e) : a.isObject(t) && a.isObject(e) ? s.unObject(t, e) : l.unSingular(t, e)
	}
	var a = r(1),
		c = r(153),
		s = r(158),
		l = r(41),
		o = r(156),
		u = r(3),
		h = u.Matrix3;
	t.exports = {
		interpolation: i,
		unInterpolation: n
	}
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		for (var r = [], i = t.elements, n = e.elements, c = 0; l > c; c++) r[c] = a.singular(i[c], n[c]);
		return function(t) {
			for (var e = new s, i = e.elements, n = 0; l > n; n++) i[n] = r[n](t);
			return e
		}
	}

	function n(t, e) {
		for (var r = [], i = t.elements, n = e.elements, c = 0; l > c; c++) r[c] = a.unSingular(i[c], n[c]);
		return function(t) {
			for (var e = t.elements, i = 0, n = 0, a = 0; l > a; a++) {
				var c = r[a](e[a]);
				0 !== c && (i += c, n++)
			}
			return i / n
		}
	}
	var a = r(41),
		c = r(3),
		s = c.Matrix3,
		l = 9;
	t.exports = {
		matrix: i,
		unMatrix: n
	}
}, function(t, e) {
	"use strict";

	function r(t, e) {
		return t = +t, e = +e,
			function(r) {
				return t * (1 - r) + e * r
			}
	}

	function i(t, e) {
		return e -= t,
			function(r) {
				return 0 === e ? 0 : (r - t) / e
			}
	}
	t.exports = {
		number: r,
		unNumber: i
	}
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		var r = {};
		for (var i in t) i in e && (r[i] = a.singular(t[i], e[i]));
		return function(t) {
			var e = {};
			for (var i in r) e[i] = r[i](t);
			return e
		}
	}

	function n(t, e) {
		var r = {};
		for (var i in t) i in e && (r[i] = a.unSingular(t[i], e[i]));
		return function(t) {
			var e = 0,
				i = 0;
			for (var n in r) n in t && (e += r[n](t[n]), i++);
			return 0 === i ? 0 : e / i
		}
	}
	var a = r(41);
	t.exports = {
		object: i,
		unObject: n
	}
}, function(t, e, r) {
	var i;
	i = {
		albers: r(160),
		mercator: r(161),
		orthographic: r(162)
	}, t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(52),
		a = function(t) {
			a.superclass.constructor.call(this, t), this._init()
		};
	i.extend(a, n), i.augment(a, {
		"\u03bb0": 0,
		"\u03c60": 0,
		"\u03c61": 0,
		"\u03c62": 0,
		basic: [0, 0, 0, 60],
		_init: function() {
			this.\u03bb0 = this.toRadians(this.basic[0]), this.\u03c60 = this.toRadians(this.basic[1]), this.\u03c61 = this.toRadians(this.basic[2]), this.\u03c62 = this.toRadians(this.basic[3])
		},
		project: function(t, e) {
			var r = this.\u03bb0,
				i = (this.\u03c60, this.\u03c61),
				n = this.\u03c62,
				a = .5 * (Math.sin(i) + Math.sin(n)),
				c = Math.cos(i),
				s = c * c + 2 * a * Math.sin(i),
				l = Math.sqrt(s - 2 * a * Math.sin(r)) / a,
				o = a * (this.toRadians(t) - r),
				u = Math.sqrt(s - 2 * a * Math.sin(this.toRadians(e))) / a;
			return {
				x: this.toDegrees(u * Math.sin(o)),
				y: this.toDegrees(l - u * Math.cos(o))
			}
		},
		invert: function(t) {
			var e = this.\u03bb0,
				r = (this.\u03c60, this.\u03c61),
				i = this.\u03c62,
				n = this.toRadians(t.x),
				a = this.toRadians(t.y),
				c = .5 * (Math.sin(r) + Math.sin(i)),
				s = Math.cos(r),
				l = s * s + 2 * c * Math.sin(r),
				o = Math.sqrt(l - 2 * c * Math.sin(e)) / c,
				u = Math.atan(n / (o - a)),
				h = Math.sqrt(n * n + Math.pow(o - a, 2));
			return {
				x: this.toDegrees(e + u / c),
				y: this.toDegrees(Math.asin((l - h * h * c * c) / (2 * c)))
			}
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(52),
		a = function(t) {
			a.superclass.constructor.call(this, t), this._init()
		};
	i.extend(a, n), i.augment(a, {
		"\u03bb0": 0,
		_init: function() {
			this.\u03bb0 = this.toRadians(this.\u03bb0)
		},
		project: function(t, e) {
			return t = this.toRadians(t), e = this.toRadians(e), {
				x: this.toDegrees(t - this.\u03bb0),
				y: this.toDegrees(Math.log(Math.tan(Math.PI / 4 + e / 2)))
			}
		},
		invert: function(t) {
			var e = this.toRadians(t.x),
				r = this.toRadians(t.y);
			return {
				x: this.toDegrees(e + this.\u03bb0),
				y: this.toDegrees(2 * Math.atan(Math.exp(r)) - Math.PI / 2)
			}
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(52),
		a = function(t) {
			a.superclass.constructor.call(this, t), this._init()
		};
	i.extend(a, n), i.augment(a, {
		"\u03bb0": 110,
		"\u03c61": 25,
		_init: function() {
			this.\u03bb0 = this.toRadians(this.\u03bb0), this.\u03c61 = this.toRadians(this.\u03c61)
		},
		project: function(t, e) {
			t = this.toRadians(t), e = this.toRadians(e);
			var r = Math.cos(e) * Math.sin(t - this.\u03bb0),
				i = Math.cos(\u03c61) * Math.sin(e) - Math.sin(\u03c61) * Math.cos(e) * Math.cos(t - \u03bb0);
			return {
				x: this.toDegrees(r),
				y: this.toDegrees(i)
			}
		},
		invert: function(t) {
			var e = this.toRadians(t.x),
				r = this.toRadians(t.y),
				i = Math.sqrt(e * e + r * r),
				n = Math.asin(i),
				a = this.\u03bb0 + Math.atan(e * Math.sin(n) / (i * Math.cos(this.\u03c61) * Math.cos(n) - r * Math.sin(this.\u03c611) * Math.sin(n))),
				c = Math.asin(Math.cos(n) * Math.sin(this.\u03c61) + r * Math.sin(n) * Math.cos(this.\u03c61) / i);
			return {
				x: this.toDegrees(a),
				y: this.toDegrees(c)
			}
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = (r(2), r(29), {
		region: r(167),
		center: r(164),
		name: r(166),
		location: r(165)
	});
	t.exports = i
}, function(t, e, r) {
	"use strict";

	function i(t) {
		return Math.min.apply(null, t)
	}

	function n(t) {
		return Math.max.apply(null, t)
	}
	var a = r(1),
		c = r(29),
		s = function(t, e) {
			return new c({
				dims: t,
				mapData: e,
				addGeoInfo: function(t, e) {
					var r = this,
						i = r.getDims(),
						n = i[i.length - 1],
						c = t[n],
						s = r.mapData.features,
						l = e[0],
						o = e[1];
					return t[l] = [], t[o] = [], s && a.each(s, function(e) {
						var i = e.properties ? e.properties.name : "";
						if (i === c) {
							var n = e.properties.cp;
							if (!n) {
								var a = e.geometry,
									s = a.coordinates,
									u = r._getBBox(s);
								n = [u[0] + (u[2] - u[0]) / 2, u[1] + (u[3] - u[1]) / 2]
							}
							return t[l] = n[0], t[o] = n[1], !1
						}
					}), t
				},
				_getBBox: function(t) {
					var e = this,
						r = [],
						c = [],
						s = e._getPoints(t);
					return a.each(s, function(t) {
						r.push(t[0]), c.push(t[1])
					}), [i(r), i(c), n(r), n(c)]
				},
				_getPoints: function(t) {
					var e = this,
						r = [];
					return a.isArray(t[0]) ? a.each(t, function(t) {
						var i = e._getPoints(t);
						r = r.concat(i)
					}) : r.push(t), r
				}
			})
		};
	t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(29),
		n = function(t) {
			return new i({
				dims: t,
				initDims: function(t) {
					var e = t.slice(0, 2),
						r = t.slice(2);
					t = r.concat(e), t.unshift("..lant"), t.unshift("..long"), this.dims = t
				},
				addGeoInfo: function(t, e) {
					var r = this,
						i = e[0],
						n = e[1],
						a = r.getDims(),
						c = a.length;
					return t[i] = t[a[c - 2]], t[n] = t[a[c - 1]], t
				}
			})
		};
	t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(29),
		a = function(t, e) {
			return new n({
				dims: t,
				mapData: e,
				initDims: function(t) {
					t.push("..name")
				},
				addGeoInfo: function(t, e) {
					var r = this,
						n = r.getDims(),
						a = n[0],
						c = n[1],
						s = [t[a], t[c]],
						l = !1,
						o = r.mapData.features;
					return t[e] = "", o && i.each(o, function(n) {
						var a = n.geometry.coordinates;
						if ("Polygon" === n.geometry.type ? i.each(a, function(t) {
								return l = r._isInside(s, t), l ? !1 : void 0
							}) : "MultiPolygon" === n.geometry.type && i.each(a, function(t) {
								return l ? !1 : void i.each(t, function(t) {
									return l = r._isInside(s, t), l ? !1 : void 0
								})
							}), l) {
							var c = n.properties ? n.properties.name : "";
							return t[e] = r.names ? r.names.indexOf(c) : c, !1
						}
					}), t
				},
				_isInside: function(t, e) {
					for (var r = t[0], i = t[1], n = !1, a = 0, c = e.length - 1; a < e.length; c = a++) {
						var s = e[a][0],
							l = e[a][1],
							o = e[c][0],
							u = e[c][1],
							h = l > i != u > i && (o - s) * (i - l) / (u - l) + s > r;
						h && (n = !n)
					}
					return n
				}
			})
		};
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(29),
		a = function(t, e) {
			return new n({
				dims: t,
				mapData: e,
				addGeoInfo: function(t, e) {
					var r = this,
						n = r.getDims(),
						a = n[n.length - 1],
						c = t[a],
						s = r.mapData,
						l = s.features,
						o = e[0],
						u = e[1];
					return t[o] = [], t[u] = [], l && i.each(l, function(e) {
						var i = e.properties ? e.properties.name : "";
						if (i === c) {
							var n = e.geometry,
								a = n.coordinates;
							return "Polygon" === n.type ? a.forEach(function(e) {
								r._getCoordinates(e, t[o], t[u])
							}) : "MultiPolygon" === n.type && a.forEach(function(e) {
								e.forEach(function(e) {
									r._getCoordinates(e, t[o], t[u])
								})
							}), !1
						}
					}), t
				},
				_getCoordinates: function(t, e, r) {
					return i.each(t, function(t) {
						e.push(t[0]), r.push(t[1])
					}), !1
				}
			})
		};
	t.exports = a
}, function(t, e) {
	"use strict";

	function r(t, e) {
		var r = t.length;
		if (0 === r) return NaN;
		var i = t[0];
		if (e < t[0]) return NaN;
		if (e >= t[r - 1]) return t[r - 1];
		for (var n = 1; n < t.length && !(e < t[n]); n++) i = t[n];
		return i
	}

	function i(t, e) {
		var r = t.length;
		if (0 === r) return NaN;
		var i, n = t[0];
		if (e > t[r - 1]) return NaN;
		if (e < t[0]) return t[0];
		for (var a = 1; a < t.length; a++) {
			if (e <= t[a]) {
				i = t[a];
				break
			}
			n = t[a]
		}
		return i
	}
	var n = {
		PRECISION: 1e-5,
		equal: function(t, e) {
			return Math.abs(t - e) < n.PRECISION
		},
		clamp: function(t, e, r) {
			return e > t ? e : t > r ? r : t
		},
		snapTo: function(t, e) {
			var n = r(t, e),
				a = i(t, e);
			if (isNaN(n) || isNaN(a)) {
				if (t[0] >= e) return t[0];
				var c = t[t.length - 1];
				if (e >= c) return c
			}
			return Math.abs(e - n) < Math.abs(a - e) ? n : a
		},
		snapFloor: function(t, e) {
			return r(t, e)
		},
		snapCeiling: function(t, e) {
			return i(t, e)
		},
		degreeToRad: function(t) {
			return Math.PI / 180 * t
		},
		radToDegree: function(t) {
			return 180 / Math.PI * t
		},
		mod: function(t, e) {
			return (t % e + e) % e
		}
	};
	t.exports = n
}, function(t, e, r) {
	"use strict";

	function i() {
		"undefined" != typeof Float32Array ? this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]) : this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
	}
	var n = r(1),
		a = r(4);
	i.multiply = function(t, e) {
		var r = t.elements,
			n = e.elements,
			a = new i;
		return a.set(r[0] * n[0] + r[3] * n[1] + r[6] * n[2], r[0] * n[3] + r[3] * n[4] + r[6] * n[5], r[0] * n[6] + r[3] * n[7] + r[6] * n[8], r[1] * n[0] + r[4] * n[1] + r[7] * n[2], r[1] * n[3] + r[4] * n[4] + r[7] * n[5], r[1] * n[6] + r[4] * n[7] + r[7] * n[8], r[2] * n[0] + r[5] * n[1] + r[8] * n[2], r[2] * n[3] + r[5] * n[4] + r[8] * n[5], r[2] * n[6] + r[5] * n[7] + r[8] * n[8])
	}, i.equal = function(t, e) {
		for (var r = t.elements, i = e.elements, n = !0, c = 0, s = r.length; s > c; c++)
			if (!a.equal(r[c], i[c])) {
				n = !1;
				break
			}
		return n
	}, n.augment(i, {
		type: "matrix3",
		set: function(t, e, r, i, n, a, c, s, l) {
			var o = this.elements;
			return o[0] = t, o[3] = e, o[6] = r, o[1] = i, o[4] = n, o[7] = a, o[2] = c, o[5] = s, o[8] = l, this
		},
		get: function(t, e) {
			return t--, e--, this.elements[3 * e + t]
		},
		identity: function() {
			return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1)
		},
		multiplyScalar: function(t) {
			var e = this.elements;
			return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
		},
		det: function() {
			var t = this.elements,
				e = t[0],
				r = t[1],
				i = t[2],
				n = t[3],
				a = t[4],
				c = t[5],
				s = t[6],
				l = t[7],
				o = t[8];
			return e * a * o - e * c * l - r * n * o + r * c * s + i * n * l - i * a * s
		},
		inverse: function(t) {
			return this.copy(this.getInverse(t))
		},
		getInverse: function(t) {
			var e = this.det();
			if (0 === e) {
				if (t) throw "matrix exception: get inverse matrix with 0 det";
				return console.warn("matrix cannot inverse"), new i
			}
			var r = this.elements,
				n = (r[0], r[3], r[6], r[1], r[4], r[7], r[2], r[5], r[8], new i);
			return n.set(r[4] * r[8] - r[7] * r[5], -(r[3] * r[8] - r[6] * r[5]), r[3] * r[7] - r[6] * r[4], -(r[1] * r[8] - r[7] * r[2]), r[0] * r[8] - r[6] * r[2], -(r[0] * r[7] - r[6] * r[1]), r[1] * r[5] - r[4] * r[2], -(r[0] * r[5] - r[3] * r[2]), r[0] * r[4] - r[3] * r[1]), n.multiplyScalar(1 / e), n
		},
		transpose: function() {
			var t, e = this.elements;
			return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
		},
		multiply: function(t) {
			return this.copy(i.multiply(this, t))
		},
		translate: function(t, e) {
			var r = new i;
			return r.set(1, 0, t, 0, 1, e, 0, 0, 1), this.copy(i.multiply(r, this))
		},
		rotate: function(t) {
			var e = new i;
			return e.set(Math.cos(t), -Math.sin(t), 0, Math.sin(t), Math.cos(t), 0, 0, 0, 1), this.copy(i.multiply(e, this))
		},
		scale: function(t, e) {
			var r = new i;
			return r.set(t, 0, 0, 0, e, 0, 0, 0, 1), this.copy(i.multiply(r, this))
		},
		equal: function(t) {
			return i.equal(this, t)
		},
		copy: function(t) {
			for (var e = t.elements, r = this.elements, i = 0, n = e.length; n > i; i++) r[i] = e[i];
			return this
		},
		clone: function() {
			for (var t = new i, e = t.elements, r = this.elements, n = 0, a = r.length; a > n; n++) e[n] = r[n];
			return t
		},
		to2DObject: function() {
			var t = this.elements;
			return {
				a: t[0],
				b: t[1],
				c: t[3],
				d: t[4],
				e: t[6],
				f: t[7]
			}
		},
		from2DObject: function(t) {
			var e = this.elements;
			return e[0] = t.a, e[1] = t.b, e[3] = t.c, e[4] = t.d, e[6] = t.e, e[7] = t.f, this
		}
	}), t.exports = i
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		if (1 === arguments.length) {
			var r = t;
			t = r[0], e = r[1]
		}
		this.x = t || 0, this.y = e || 0
	}
	var n = r(1),
		a = r(4);
	i.add = function(t, e) {
		return new i(t.x + e.x, t.y + e.y)
	}, i.sub = function(t, e) {
		return new i(t.x - e.x, t.y - e.y)
	}, i.lerp = function(t, e, r) {
		return new i(t.x + (e.x - t.x) * r, t.y + (e.y - t.y) * r)
	}, i.angle = function(t, e) {
		var r = t.dot(e) / (t.length() * e.length());
		return Math.acos(a.clamp(r, -1, 1))
	}, i.direction = function(t, e) {
		return t.x * e.y - e.x * t.y
	}, n.augment(i, {
		type: "vector2",
		set: function(t, e) {
			return this.x = t, this.y = e, this
		},
		setComponent: function(t, e) {
			switch (t) {
				case 0:
					return this.x = e, this;
				case 1:
					return this.y = e, this;
				default:
					throw new Error("the index out of range:" + t)
			}
		},
		getComponent: function(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				default:
					throw new Error("the index out of range:" + t)
			}
		},
		copy: function(t) {
			return this.x = t.x, this.y = t.y, this
		},
		add: function(t) {
			return this.copy(i.add(this, t))
		},
		sub: function(t) {
			return this.copy(i.sub(this, t))
		},
		subBy: function(t) {
			return this.copy(i.sub(t, this))
		},
		multiplyScaler: function(t) {
			return this.x *= t, this.y *= t, this
		},
		divideScaler: function(t) {
			if (0 !== t) {
				var e = 1 / t;
				this.x *= e, this.y *= e
			} else this.x = 0, this.y = 0;
			return this
		},
		min: function(t) {
			return this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y), this
		},
		max: function(t) {
			return this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y), this
		},
		clamp: function(t, e) {
			return this.x < t.x ? this.x = t.x : this.x > e.x && (this.x = e.x), this.y < t.y ? this.y = t.y : this.y > e.y && (this.y = e.y), this
		},
		clampScale: function() {
			var t, e;
			return function(r, n) {
				return void 0 === t && (t = new i, e = new i), t.set(r, r), e.set(n, n), this.clamp(t, e)
			}
		}(),
		floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
		},
		ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
		},
		round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this
		},
		roundToZero: function() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
		},
		negate: function() {
			return this.x = -this.x, this.y = -this.y, this
		},
		dot: function(t) {
			return this.x * t.x + this.y * t.y
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y
		},
		length: function() {
			return Math.sqrt(this.lengthSq())
		},
		normalize: function() {
			return this.divideScaler(this.length())
		},
		distanceToSquared: function(t) {
			var e = this.x - t.x,
				r = this.y - t.y;
			return e * e + r * r
		},
		distanceTo: function(t) {
			return Math.sqrt(this.distanceToSquared(t))
		},
		angleTo: function(t, e) {
			var r = this.angle(t),
				n = i.direction(this, t) >= 0;
			return e ? n ? 2 * Math.PI - r : r : n ? r : 2 * Math.PI - r
		},
		vertical: function(t) {
			return t ? new i(this.y, -this.x) : new i(-this.y, this.x)
		},
		angle: function(t) {
			return i.angle(this, t)
		},
		setLength: function(t) {
			var e = this.length();
			return 0 !== e && t !== e && this.multiplyScaler(t / e), this
		},
		isZero: function() {
			return 0 === this.x && 0 === this.y
		},
		lerp: function(t, e) {
			return this.copy(i.lerp(this, t, e))
		},
		equal: function(t) {
			return a.equal(this.x, t.x) && a.equal(this.y, t.y)
		},
		clone: function() {
			return new i(this.x, this.y)
		}
	}), t.exports = i
}, function(t, e, r) {
	"use strict";

	function i(t, e, r) {
		if (1 === arguments.length)
			if (n.isArray(t)) {
				var i = t;
				t = i[0], e = i[1], r = i[2]
			} else if ("vector2" === t.type) {
			var a = t;
			t = a.x, e = a.y, r = 1
		}
		this.x = t || 0, this.y = e || 0, this.z = r || 0
	}
	var n = r(1),
		a = r(4);
	i.add = function(t, e) {
		return new i(t.x + e.x, t.y + e.y, t.z + e.z)
	}, i.sub = function(t, e) {
		return new i(t.x - e.x, t.y - e.y, t.z - e.z)
	}, i.lerp = function(t, e, r) {
		return new i(t.x + (e.x - t.x) * r, t.y + (e.y - t.y) * r, t.z + (e.z - t.z) * r)
	}, i.cross = function(t, e) {
		var r = t.x,
			n = t.y,
			a = t.z,
			c = e.x,
			s = e.y,
			l = e.z;
		return new i(n * l - a * s, a * c - r * l, r * s - n * c)
	}, i.angle = function(t, e) {
		var r = t.dot(e) / (t.length() * e.length());
		return Math.acos(a.clamp(r, -1, 1))
	}, n.augment(i, {
		type: "vector3",
		set: function(t, e, r) {
			return this.x = t, this.y = e, this.z = r, this
		},
		setComponent: function(t, e) {
			switch (t) {
				case 0:
					return this.x = e, this;
				case 1:
					return this.y = e, this;
				case 2:
					return this.z = e, this;
				default:
					throw new Error("index is out of range:" + t)
			}
		},
		getComponent: function(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				default:
					throw new Error("index is out of range:" + t)
			}
		},
		add: function(t) {
			return this.copy(i.add(this, t))
		},
		sub: function(t) {
			return this.copy(i.sub(this, t))
		},
		subBy: function(t) {
			return this.copy(i.sub(t, this))
		},
		multiplyScaler: function(t) {
			return this.x *= t, this.y *= t, this.z *= t, this
		},
		divideScaler: function(t) {
			if (0 !== t) {
				var e = 1 / t;
				this.x *= e, this.y *= e, this.z *= e
			} else this.x = 0, this.y = 0, this.z = 0;
			return this
		},
		min: function(t) {
			return this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y), this.z > t.z && (this.z = t.z), this
		},
		max: function(t) {
			return this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y), this.z < t.z && (this.z = t.z), this
		},
		clamp: function(t, e) {
			return this.x < t.x ? this.x = t.x : this.x > e.x && (this.x = e.x), this.y < t.y ? this.y = t.y : this.y > e.y && (this.y = e.y), this.z < t.z ? this.z = t.z : this.z > e.z && (this.z = e.z), this
		},
		clampScale: function() {
			var t, e;
			return function(r, n) {
				return void 0 === t && (t = new i, e = new i), t.set(r, r, r), e.set(n, n, n), this.clamp(t, e)
			}
		}(),
		floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
		},
		ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
		},
		round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
		},
		roundToZero: function() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
		},
		negate: function() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
		},
		dot: function(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y + this.z * this.z
		},
		length: function() {
			return Math.sqrt(this.lengthSq())
		},
		lengthManhattan: function() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
		},
		normalize: function() {
			return this.divideScaler(this.length())
		},
		setLength: function(t) {
			var e = this.length();
			return 0 !== e && t !== e && this.multiplyScaler(t / e), this
		},
		lerp: function(t, e) {
			return this.copy(i.lerp(this, t, e))
		},
		cross: function(t) {
			return this.copy(i.cross(this, t))
		},
		angle: function(t) {
			return i.angle(this, t)
		},
		distanceToSquared: function(t) {
			var e = this.x - t.x,
				r = this.y - t.y,
				i = this.z - t.z;
			return e * e + r * r + i * i
		},
		distanceTo: function(t) {
			return Math.sqrt(this.distanceToSquared(t))
		},
		applyMatrix: function(t) {
			var e = t.elements,
				r = e[0] * this.x + e[3] * this.y + e[6] * this.z,
				i = e[1] * this.x + e[4] * this.y + e[7] * this.z,
				n = e[2] * this.x + e[5] * this.y + e[8] * this.z;
			return this.x = r, this.y = i, this.z = n, this
		},
		copy: function(t) {
			return this.x = t.x, this.y = t.y, this.z = void 0 !== t.z ? t.z : 1, this
		},
		equal: function(t) {
			return a.equal(this.x, t.x) && a.equal(this.y, t.y) && a.equal(this.z, t.z)
		},
		clone: function() {
			return new i(this.x, this.y, this.z)
		}
	}), t.exports = i
}, function(t, e, r) {
	var i = r(174);
	if (window.G) {
		new i(window.G)
	} else t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(51),
		a = function(t) {
			this.canvas = t, this.el = t.get("el"), this.current = null, this.pre = null
		};
	i.augment(a, {
		tryTrigger: function(t, e) {
			t.__listeners && t.trigger(e)
		},
		getCurrent: function(t) {
			var e = this.canvas,
				r = e.getPointByClient(t.clientX, t.clientY);
			this.point = r, this.pre = this.current, this.current = e.getShape(r.x, r.y)
		},
		mousemove: function(t) {
			this.getCurrent(t);
			var e = this.point,
				r = this.canvas;
			if (r.has("canvas-mousemove")) {
				var i = new n("canvas-mousemove", t, !0, !0);
				i.x = e.x, i.y = e.y, i.clientX = t.clientX, i.clientY = t.clientY, i.currentTarget = r, this.tryTrigger(r, i)
			}
			if (this.pre && this.pre !== this.current) {
				var a = new n("mouseleave", t, !0, !0);
				a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.pre, a.target = this.pre, this.tryTrigger(this.pre, a)
			}
			if (this.current) {
				var c = new n("mousemove", t, !0, !0);
				if (c.x = e.x, c.y = e.y, c.clientX = t.clientX, c.clientY = t.clientY, c.currentTarget = this.current, c.target = this.current, this.tryTrigger(this.current, c), this.pre !== this.current) {
					var s = new n("mouseenter", t, !0, !0);
					s.x = e.x, s.y = e.y, s.clientX = t.clientX, s.clientY = t.clientY, s.currentTarget = this.current, s.target = this.current, this.tryTrigger(this.current, s)
				}
			}
		},
		mousedown: function(t) {
			var e = this.point,
				r = this.canvas;
			if (r.has("canvas-mousedown")) {
				var i = new n("canvas-mousedown", t, !0, !0);
				i.x = e.x, i.y = e.y, i.clientX = t.clientX, i.clientY = t.clientY, i.currentTarget = r, this.tryTrigger(r, i)
			}
			if (this.current) {
				var a = new n("mousedown", t, !0, !0);
				a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.current, a.target = this.current, this.tryTrigger(this.current, a)
			}
		},
		mouseup: function(t) {
			var e = this.point,
				r = this.canvas;
			if (r.has("canvas-mouseup")) {
				var i = new n("canvas-mouseup", t, !0, !0);
				i.x = e.x, i.y = e.y, i.clientX = t.clientX, i.clientY = t.clientY, i.currentTarget = r, this.tryTrigger(r, i)
			}
			if (this.current) {
				var a = new n("mouseup", t, !0, !0);
				a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.current, a.target = this.current, this.tryTrigger(this.current, a)
			}
		},
		click: function(t) {
			this.getCurrent(t);
			var e = this.point,
				r = this.canvas;
			if (r.has("canvas-click")) {
				var i = new n("canvas-click", t, !0, !0);
				i.x = e.x, i.y = e.y, i.clientX = t.clientX, i.clientY = t.clientY, i.currentTarget = r, this.tryTrigger(r, i)
			}
			if (this.current) {
				var a = new n("click", t, !0, !0);
				a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.current, a.target = this.current, this.tryTrigger(this.current, a)
			}
		},
		dblclick: function(t) {
			var e = this.point,
				r = this.canvas;
			if (r.has("canvas-dblclick")) {
				var i = new n("canvas-dblclick", t, !0, !0);
				i.x = e.x, i.y = e.y, i.clientX = t.clientX, i.clientY = t.clientY, i.currentTarget = r, this.tryTrigger(r, i)
			}
			if (this.current) {
				var a = new n("dblclick", t, !0, !0);
				a.x = e.x, a.y = e.y, a.clientX = t.clientX, a.clientY = t.clientY, a.currentTarget = this.current, a.target = this.current, this.tryTrigger(this.current, a)
			}
		},
		mouseout: function(t) {
			var e = (this.point, this.canvas),
				r = new n("canvas-mouseleave", t, !0, !0);
			r.currentTarget = e, this.tryTrigger(e, r)
		},
		mouseover: function(t) {
			var e = (this.point, this.canvas),
				r = new n("canvas-mouseenter", t, !0, !0);
			r.currentTarget = e, this.tryTrigger(e, r)
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";

	function i(t) {
		this.name = "mouseEvent", this.type = "event", i.superclass.constructor.call(this, t)
	}
	var n = r(1),
		a = r(173),
		c = r(175);
	n.extend(i, c), n.augment(i, {
		__events: function() {
			var t = this,
				e = t.get("el"),
				r = new a(this);
			e.addEventListener("mouseout", function(t) {
				r.mouseout(t)
			}, !1), e.addEventListener("mouseover", function(t) {
				r.mouseover(t)
			}, !1), e.addEventListener("mousemove", function(t) {
				r.mousemove(t)
			}, !1), e.addEventListener("mousedown", function(t) {
				r.mousedown(t)
			}, !1), e.addEventListener("mouseup", function(t) {
				r.mouseup(t)
			}, !1), e.addEventListener("click", function(t) {
				r.click(t)
			}, !1), e.addEventListener("dblclick", function(t) {
				r.dblclick(t)
			}, !1)
		}
	}), t.exports = i
}, function(t, e, r) {
	var i = r(176);
	t.exports = i
}, function(t, e, r) {
	"use strict";

	function i(t) {
		this.register(t)
	}
	var n = r(1);
	n.augment(i, {
		register: function(t) {
			var e = this;
			if (t.plugins || (t.plugins = {}), !t.plugins[e.name]) switch (t.plugins[e.name] = e, e.type) {
				case "event":
					e.__registerEvent(t)
			}
		},
		__registerEvent: function(t) {
			var e = this;
			if (e.__events) {
				var r = t.Canvas.prototype.__events;
				n.augment(t.Canvas, {
					__events: function() {
						r && r.call(this), e.__events.call(this)
					}
				})
			}
		}
	}), t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(30),
		n = r(1),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	n.extend(a, i), n.augment(a, {
		type: "condition",
		condition: null
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(30),
		n = r(1),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	n.extend(a, i), n.augment(a, {
		type: "group",
		group: null
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(43),
		n = r(1),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	n.extend(a, i), n.augment(a, {
		type: "identity",
		value: null,
		getText: function() {
			return this.value.toString()
		},
		scale: function() {
			return 1
		},
		invert: function() {
			return this.value
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		return 1 === t ? 1 : Math.log(e) / Math.log(t)
	}
	var n = r(1),
		a = r(42),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	n.extend(c, a), n.augment(c, {
		type: "log",
		base: 2,
		tickCount: 10,
		calculateTicks: function() {
			var t, e = this,
				r = e.base,
				n = i(r, e.max);
			t = e.min > 0 ? Math.floor(i(r, e.min)) : n - 1;
			for (var a = n - t, c = e.tickCount, s = Math.ceil(a / c), l = [], o = t; n + s > o; o += s) l.push(Math.pow(r, o));
			return l
		},
		getScalePercent: function(t) {
			var e = this.max,
				r = this.min;
			if (e === r) return 0;
			var n = this.base,
				a = (i(n, t) - i(n, r)) / (i(n, e) - i(n, r));
			return a
		},
		scale: function(t) {
			var e = this.getScalePercent(t),
				r = this.rangeMin(),
				i = this.rangeMax();
			return r + e * (i - r)
		},
		invert: function(t) {
			var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin()),
				r = this.base,
				n = i(r, this.max),
				a = i(r, this.min),
				c = e * (n - a) + a;
			return Math.pow(r, c)
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(30),
		n = r(1),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	n.extend(a, i), n.augment(a, {
		type: "numberCat",
		init: function() {
			var t = this.values;
			t.sort(function(t, e) {
				return t - e
			}), n.each(t, function(e, r) {
				t[r] = e.toString()
			}), this.ticks = t
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		var r = Math.E,
			i = Math.pow(r, Math.log(e) / t);
		return i
	}
	var n = r(1),
		a = r(42),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	n.extend(c, a), n.augment(c, {
		type: "pow",
		exponent: 2,
		tickCount: 12,
		calculateTicks: function() {
			var t, e = this,
				r = e.exponent,
				n = Math.ceil(i(r, e.max));
			if (t = e.min >= 0 ? Math.round(i(r, e.min)) : 0, t > n) {
				var a = n;
				n = t, t = a
			}
			for (var c = n - t, s = e.tickCount, l = Math.ceil(c / s), o = [], u = t; n + l > u; u += l) o.push(Math.pow(u, r));
			return o
		},
		getScalePercent: function(t) {
			var e = this.max,
				r = this.min;
			if (e === r) return 0;
			var n = this.exponent,
				a = (i(n, t) - i(n, r)) / (i(n, e) - i(n, r));
			return a
		},
		scale: function(t) {
			var e = this.getScalePercent(t),
				r = this.rangeMin(),
				i = this.rangeMax();
			return r + e * (i - r)
		},
		invert: function(t) {
			var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin()),
				r = this.exponent,
				n = i(r, this.max),
				a = i(r, this.min),
				c = e * (n - a) + a;
			return Math.pow(c, r)
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(30),
		n = r(1),
		a = r(40),
		c = r(36),
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	n.extend(s, i), n.augment(s, {
		type: "timeCat",
		mask: "yyyy-mm-dd HH:MM:ss",
		tickCount: 5,
		init: function() {
			var t = this,
				e = this.values;
			e.sort(function(e, r) {
				return e = t._toTimeStamp(e), r = t._toTimeStamp(r), e - r
			}), n.each(e, function(r, i) {
				e[i] = t._toTimeStamp(r)
			}), this.ticks = this.calculateTicks(!0)
		},
		calculateTicks: function(t) {
			var e = this,
				r = e.tickCount,
				i = c.Category.caculate({
					maxCount: r,
					data: e.values
				}),
				s = i.ticks;
			return t && n.each(s, function(t, r) {
				s[r] = a.format(t, e.mask)
			}), s
		},
		translate: function(t) {
			t = this._toTimeStamp(t);
			var e = this.values.indexOf(t);
			return -1 === e && (e = n.isNumber(t) && t < this.values.length ? t : NaN), e
		},
		scale: function(t) {
			var e, r = this.rangeMin(),
				i = this.rangeMax(),
				n = this.translate(t);
			return e = this.values.length > 1 && n > -1 ? n / (this.values.length - 1) : 0, r + e * (i - r)
		},
		getText: function(t) {
			var e = "",
				r = this.translate(t);
			r > -1 && (e = this.values[r]);
			var i = this.formatter;
			return e = parseInt(e, 10), e = i ? i(e) : a.format(e, this.mask)
		},
		getTicks: function() {
			var t = this,
				e = this.calculateTicks(!1),
				r = [];
			return n.each(e, function(e) {
				var i;
				i = n.isObject(e) ? e : {
					text: t.getText(e),
					value: t.scale(e)
				}, r.push(i)
			}), r
		},
		_toTimeStamp: function(t) {
			return n.isString(t) && (t = t.replace(/-/gi, "/").replace("T", " "), t = new Date(t).getTime()), n.isDate(t) && (t = t.getTime()), t
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(42),
		n = r(1),
		a = r(36),
		c = r(40),
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	n.extend(s, i), n.augment(s, {
		type: "time",
		mask: "yyyy-mm-dd",
		calculateTicks: function() {
			var t = this,
				e = t.min,
				r = t.max,
				i = t.tickCount,
				n = a.Time.caculate({
					min: e,
					max: r,
					minCount: i,
					maxCount: i
				});
			return n.ticks
		},
		getText: function(t) {
			var e = this.formatter;
			return t = this.translate(t), t = e ? e(t) : c.format(t, this.mask)
		},
		scale: function(t) {
			return n.isString(t) && (t = this.translate(t)), s.superclass.scale.call(this, t)
		},
		translate: function(t) {
			return n.isString(t) && (t = t.replace(/-/gi, "/").replace("T", " "), t = new Date(t).getTime()), n.isDate(t) && (t = t.getTime()), t
		}
	}), t.exports = s
}, function(t, e, r) {
	var i = r(186);
	t.exports = i
}, function(t, e, r) {
	function i(t, e, r, i) {
		var n, s, o, u, h = [],
			f = !!i;
		if (f) {
			o = new l(1 / 0, 1 / 0), u = new l(-(1 / 0), -(1 / 0));
			for (var d = 0, p = t.length; p > d; d++) {
				var g = a(t[d]);
				o.min(g), u.max(g)
			}
			o.min(a(i[0])), u.max(a(i[1]))
		}
		for (var d = 0, y = t.length; y > d; d++) {
			var g = a(t[d]);
			if (r) n = a(t[d ? d - 1 : y - 1]), s = a(t[(d + 1) % y]);
			else {
				if (0 === d || d === y - 1) {
					h.push([g.x, g.y]);
					continue
				}
				n = a(t[d - 1]), s = a(t[d + 1])
			}
			var v = l.sub(s, n);
			c(v, e);
			var m = g.distanceTo(n),
				x = g.distanceTo(s),
				C = m + x;
			0 !== C && (m /= C, x /= C);
			var _ = c(v.clone(), -m),
				O = c(v.clone(), x),
				S = l.add(g, _),
				w = l.add(g, O);
			f && (S.max(o), S.min(u), w.max(o), w.min(u)), h.push([S.x, S.y]), h.push([w.x, w.y])
		}
		return r && h.push(h.shift()), h
	}

	function n(t, e, r) {
		for (var n = !!e, a = [], c = 0, s = t.length; s > c; c += 2) a.push([t[c], t[c + 1]]);
		for (var l, o, u, h = i(a, .4, n, r), f = a.length, d = [], c = 0; f - 1 > c; c++) l = h[2 * c], o = h[2 * c + 1], u = a[c + 1], d.push(["C", l[0], l[1], o[0], o[1], u[0], u[1]]);
		return n && (l = h[f], o = h[f + 1], u = a[0], d.push(["C", l[0], l[1], o[0], o[1], u[0], u[1]])), d
	}

	function a(t) {
		return new l(t[0], t[1])
	}

	function c(t, e) {
		return t.x *= e, t.y *= e, t
	}
	var s = r(3),
		l = s.Vector2;
	t.exports = {
		catmullRom2bezier: n
	}
}, function(t, e, r) {
	"use strict";
	var i = r(31),
		n = {
			dot: r(188),
			rect: r(189)
		};
	i.tree = n, t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(77),
		n = function(t) {
			return new i({
				dims: t
			})
		};
	t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(77),
		a = "..x",
		c = "..y",
		s = function(t) {
			return new n({
				dims: t,
				getStatObject: function(t, e) {
					var r = i.mix({}, t);
					return r[a] = [e.start.x, e.start.x, e.end.x, e.end.x], r[c] = [e.start.y, e.end.y, e.end.y, e.start.y], r
				}
			})
		};
	t.exports = s
}, function(t, e, r) {
	"use strict";

	function i(t, e, r) {
		return e = e || 1, new n({
			dims: t,
			ratio: e,
			mode: r
		})
	}
	var n = r(191),
		a = function(t, e) {
			return i(t, e, "squarify")
		};
	a.squarify = function(t, e) {
		return i(t, e, "squarify")
	}, a.sliceDice = function(t, e) {
		return i(t, e, "slice-dice")
	}, t.exports = a
}, function(t, e, r) {
	"use strict";

	function i(t) {
		return 1 - t
	}
	var n = r(1),
		a = r(31),
		c = r(229),
		s = r(2),
		l = "..x",
		o = "..y",
		u = "_value",
		h = function(t) {
			h.superclass.constructor.call(this, t)
		};
	n.extend(h, a), n.augment(h, {
		type: "treemap",
		mode: "squarify",
		ratio: 1,
		getValueField: function() {
			var t = this.getDims();
			return t[3] || u
		},
		getChildrenField: function() {
			var t = this.getDims();
			return t[2]
		},
		initDims: function(t) {
			t.unshift(o), t.unshift(l)
		},
		_copyObject: function(t) {
			var e = n.mix({}, t);
			return e
		},
		_extractData: function(t, e) {
			for (var r = this, a = t.length - 1; a >= 0; a--) {
				var c = t[a],
					s = r._copyObject(c);
				s[l] = [], s[o] = [], s[l].push(c.x), s[o].push(i(c.y + c.dy)), s[l].push(c.x), s[o].push(i(c.y)), s[l].push(c.x + c.dx), s[o].push(i(c.y)), s[l].push(c.x + c.dx), s[o].push(i(c.y + c.dy)), e.push(s);
				var u = r.getChildrenField();
				n.isArray(c[u]) && r._extractData(c[u], e)
			}
		},
		exec: function(t) {
			var e = this,
				r = [],
				i = s.merge.apply(null, t);
			return r.push(e.execFrame(i)), r
		},
		execFrame: function(t) {
			var e = this,
				r = t.toJSON(),
				i = (e.getDims(), new c.Squarify({
					nodes: r,
					mode: e.mode,
					childrenField: e.getChildrenField(),
					valueField: e.getValueField(),
					ratio: e.ratio
				})),
				n = i.getNodes(),
				r = [];
			e._extractData(n, r);
			var t = new s(r);
			return t
		}
	}), t.exports = h
}, function(t, e, r) {
	"use strict";
	var i = r(44),
		n = function(t, e) {
			return new i({
				dims: t,
				binWidth: e
			})
		};
	t.exports = n
}, function(t, e, r) {
	"use strict";

	function i(t, e, r) {
		var i = [];
		return c.each(t, function(t) {
			i.push(t * e * r / 2)
		}), i
	}

	function n(t, e) {
		var r = [];
		return c.each(t, function(t) {
			r.push(t * e / 2)
		}), r
	}
	var a = r(44),
		c = r(1),
		s = function(t, e, r) {
			return new a({
				ratio: r || .5,
				dims: t,
				binWidth: e || .03,
				_getDimVaues: function(t, e, r) {
					var i = this,
						n = i.getDimRange(e),
						a = n.max - n.min,
						s = [];
					return c.each(r, function(e) {
						s.push(t + a * e)
					}), s
				},
				toBin: function(t) {
					var e = this,
						r = e.getBinDims();
					if (2 > r) throw "the bin.rect method only support 2 dimenssion!";
					var a = r[0],
						c = r[1],
						s = e.binWidth,
						l = e.ratio,
						o = e._center([t[a], t[c]]),
						u = i([-.5, -1.5, -.5, .5, 1.5, .5], s, l),
						h = n([-1, 0, 1, 1, 0, -1], s);
					t[a] = e._getDimVaues(o[0], a, u), t[c] = e._getDimVaues(o[1], c, h)
				},
				_center: function(t) {
					var e, r, i, n = this,
						a = n.binWidth,
						c = n.getBinDims(),
						s = c[0],
						l = n.getDimRange(s),
						o = a * (l.max - l.min) / 2,
						u = c[1],
						h = n.getDimRange(u),
						f = a * (h.max - h.min) / 2,
						d = n.ratio;
					return r = [t[0] / (o * d), t[1] / f], i = n._centerForBasis(r), e = [i[0] * o, i[1] * f]
				},
				_chkOdd: function(t) {
					var e = parseInt(t);
					return e ? !!(e % 2) : "0"
				},
				_aroundX: function(t) {
					var e, r, i, n = this;
					return t = 1 > t ? 1 : t, n._chkOdd(t) ? r = i = parseInt(t) + .5 : t % 2 === 0 ? r = i = parseInt(t) - .5 : (r = parseInt(t) - .5, i = r + 2), e = [r, i]
				},
				_aroundY: function(t) {
					var e, r, i;
					return t = 1 > t ? 1 : t, r = parseInt(t), i = r + 1, e = [r, i]
				},
				_shortPoint: function(t, e, r) {
					var i, n, a = this,
						c = (t[1] - .5) % 4;
					1 === c ? a._chkOdd(e[1]) ? (i = [t[0], e[0]], n = [t[1], e[1]]) : (i = [t[1], e[0]], n = [t[0], e[1]]) : a._chkOdd(e[0]) ? (i = [t[0], e[0]], n = [t[1], e[1]]) : (i = [t[1], e[0]], n = [t[0], e[1]]);
					var s = Math.abs(r[0] - i[0]) + Math.abs(r[1] - i[1]),
						l = Math.abs(r[0] - n[0]) + Math.abs(r[1] - n[1]);
					return s === l ? i[0] < n[0] ? i : n : l > s ? i : n
				},
				_centerForBasis: function(t) {
					var e, r, i, n, a = this,
						c = a._aroundX(t[0]),
						s = a.ratio;
					return c[0] === c[1] ? (i = c[0], i > 2 && a._chkOdd(i / 2) ? (t[1] = t[1] < 1 ? 1 : t[1], n = a._chkOdd(parseInt(t[1])) ? parseInt(t[1]) + 1 : parseInt(t[1])) : (t[1] = t[1] < 1 ? 1 : t[1], n = a._chkOdd(parseInt(t[1])) ? parseInt(t[1]) : parseInt(t[1]) - 1), e = [i, n]) : (t[1] = t[1] < 1 ? 1 : t[1], r = a._aroundY(t[1]), e = a._shortPoint(c, r, t)), e[0] = e[0] * s, e
				}
			})
		};
	t.exports = s
}, function(t, e, r) {
	var i = {
		dot: r(192),
		rect: r(197),
		hex: r(193),
		quantile: r(195)
	};
	t.exports = i
}, function(t, e, r) {
	var i = r(78);
	i.letter = r(196), t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(78),
		n = function(t, e) {
			return new i({
				dims: t,
				binWidth: e,
				fractions: 4
			})
		};
	t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(44),
		n = function(t, e) {
			return new i({
				dims: t,
				binWidth: e,
				toBin: function(t) {
					var e = this,
						r = e.getBinDims();
					if (r.length < 1) throw "the bin.rect method support for minimum one dimension!";
					if (1 === r.length) {
						var i = r[0];
						t[i] = e._getValueRange(i, t[i])
					} else {
						var n = r[0],
							a = r[1],
							c = e._getValueRange(n, t[n]),
							s = e._getValueRange(a, t[a]);
						t[n] = [c[0], c[0], c[1], c[1]], t[a] = [s[0], s[1], s[1], s[0]]
					}
				},
				_getValueRange: function(t, e) {
					var r = this,
						i = r.binWidth,
						n = r.getDimRange(t),
						a = n.max - n.min,
						c = r.getCenterValue(e, n.max, n.min);
					return [c - a * i * 1 / 2, c + a * i * 1 / 2]
				}
			})
		};
	t.exports = n
}, function(t, e, r) {
	"use strict";

	function i(t, e, r) {
		return e = e || .01, new n({
			dims: t,
			bandWidth: e,
			kernelType: r
		})
	}
	var n = r(199),
		a = r(200),
		c = {};
	c.kernel = {}, c.kernel.uniform = function(t, e) {
		return i(t, e, "uniform")
	}, c.kernel.triangular = function(t, e) {
		return i(t, e, "triangular")
	}, c.kernel.epanechnikov = function(t, e) {
		return i(t, e, "epanechnikov")
	}, c.kernel.quartic = function(t, e) {
		return i(t, e, "quartic")
	}, c.kernel.triweight = function(t, e) {
		return i(t, e, "triweight")
	}, c.kernel.tricube = function(t, e) {
		return i(t, e, "tricube")
	}, c.kernel.gaussian = function(t, e) {
		return i(t, e, "gaussian")
	}, c.kernel.cosine = function(t, e) {
		return i(t, e, "cosine")
	}, c.normal = function(t, e) {
		return e = e || .01, new a({
			dims: t,
			bandWidth: e
		})
	}, t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(2),
		a = r(76),
		c = r(79),
		s = "..density",
		l = function(t) {
			l.superclass.constructor.call(this, t)
		};
	i.extend(l, c), i.augment(l, {
		kernelType: "",
		execFrame: function(t) {
			var e = this,
				r = e.kernelType;
			if (!r) return t;
			var i = a[r],
				c = e.getDims(),
				s = [];
			return 2 === c.length ? s = e._getOneDimDensity(t, i, c) : 3 === c.length && (s = e._getTwoDimDensity(t, i, c)), new n(s)
		},
		_getOneDimDensity: function(t, e, r) {
			for (var n = r[r.length - 2], a = t.colArray(n), c = this.getWindowWidth(t, n), l = this.getCoordinate(t, n, c), o = l.length, u = a.length, h = t.rowObject(0), f = [], d = 0; o > d; d++) {
				for (var p = 0, g = l[d], y = 0; u > y; y++) p += e((g - a[y]) / c);
				var v = 1 / (u * c) * p,
					m = i.mix({}, h);
				m[n] = g, m[s] = v, f[d] = m
			}
			return f
		},
		_getTwoDimDensity: function(t, e, r) {
			for (var n = r[r.length - 3], a = r[r.length - 2], c = this.getWindowWidth(t, n), l = this.getWindowWidth(t, a), o = this.getCoordinate(t, n, c), u = o.length, h = this.getCoordinate(t, a, l), f = h.length, d = t.rowCount(), p = t.rowObject(0), g = [], y = 0; u > y; y++)
				for (var v = 0; f > v; v++) {
					for (var m = 0, x = o[y], C = h[v], _ = 0; d > _; _++) m += e((x - t.data[_][n]) / c) * e((C - t.data[_][a]) / l);
					var O = 1 / (d * c * l) * m,
						S = i.mix({}, p);
					S[n] = x, S[a] = C, S[s] = O, g.push(S)
				}
			return g
		}
	}), t.exports = l
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(2),
		a = r(79),
		c = "..density",
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	i.extend(s, a), i.augment(s, {
		execFrame: function(t) {
			for (var e = this, r = t.rowObject(0), a = e.getDims(), s = a[a.length - 2], l = this.getWindowWidth(t, s), o = this.getCoordinate(t, s, l), u = o.length, h = n.mean(t, s), f = n.standard_deviation(t, s), d = [], p = 0; u > p; p++) {
				var g = o[p],
					y = e.getNormal(g, h, f),
					v = i.mix({}, r);
				v[s] = g, v[c] = y, d.push(v)
			}
			return new n(d)
		},
		getNormal: function(t, e, r) {
			var i = 1 / (Math.sqrt(2 * Math.PI) * r) * Math.exp(-(t - e) * (t - e) / (2 * r * r));
			return i
		}
	}), t.exports = s
}, function(t, e, r) {
	var i = {
		spread: {
			range: r(202),
			sd: r(203),
			se: r(204)
		},
		confi: {}
	};
	t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(53),
		n = r(2),
		a = function(t) {
			return new i({
				dims: t,
				transform: function(t, e) {
					var r = t.rowObject(0);
					return r[e] = n.range(t, e), new n([r])
				}
			})
		};
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(53),
		n = r(2),
		a = function(t) {
			return new i({
				dims: t,
				transform: function(t, e) {
					var r = t.rowObject(0),
						i = n.mean(t, e),
						a = n.sd(t, e);
					return r[e] = [i - a, i + a], new n([r])
				}
			})
		};
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(53),
		n = r(2),
		a = function(t) {
			return new i({
				dims: t,
				transform: function(t, e) {
					var r = t.rowObject(0),
						i = n.mean(t, e),
						a = n.se(t, e);
					return r[e] = [i - a, i + a], new n([r])
				}
			})
		};
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(15),
		a = r(27),
		c = r(22),
		s = function(t) {
			return new n(i.mix({}, c, {
				dims: t,
				regressionType: "cubic",
				getRegression: function(t) {
					return a("polynomial", t, 3)
				}
			}))
		};
	t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(15),
		a = r(27),
		c = r(22),
		s = r(2),
		l = function(t) {
			return new n(i.mix({}, c, {
				dims: t,
				regressionType: "exp",
				preExecute: function(t) {
					var e = this.getYDim();
					i.each(t, function(t) {
						var r = s.min(t, e);
						if (0 > r) throw "the field " + e + " has value less than 0,you can't use this regression!"
					})
				},
				getRegression: function(t) {
					return a("exponential", t)
				}
			}))
		};
	t.exports = l
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		for (var r = 0, i = 0; i < t.length; i++) {
			var n = t[i];
			r += n * Math.pow(e, i)
		}
		return r
	}
	var n = r(1),
		a = ["linear", "cubic", "quadratic"],
		c = {
			execFnction: function(t, e, r) {
				var i;
				return i = n.indexOf(a, t) >= 0 ? c.poly(e, r) : c[t] ? c[t](e[0], e[1], r) : r
			},
			linear: function(t, e, r) {
				var n = [e, t];
				return i(n, r)
			},
			poly: function(t, e) {
				return i(t, e)
			},
			log: function(t, e, r) {
				return t + e * Math.log(r)
			},
			pow: function(t, e, r) {
				return t * Math.pow(r, e)
			},
			exp: function(t, e, r) {
				return t * Math.pow(Math.E, e * r)
			}
		};
	t.exports = c
}, function(t, e, r) {
	"use strict";

	function i(t, e, r) {
		return e = e || .01, new a({
			dims: t,
			bandWidth: e,
			kernelType: r
		})
	}
	var n = r(54);
	n.mean = r(212), n.median = r(213), n.linear = r(209), n.quadratic = r(215), n.cubic = r(205), n.log = r(211), n.pow = r(214), n.exp = r(206);
	var a = r(210);
	n.loess = {}, n.loess.uniform = function(t, e) {
		return i(t, e, "uniform")
	}, n.loess.triangular = function(t, e) {
		return i(t, e, "triangular")
	}, n.loess.epanechnikov = function(t, e) {
		return i(t, e, "epanechnikov")
	}, n.loess.quartic = function(t, e) {
		return i(t, e, "quartic")
	}, n.loess.triweight = function(t, e) {
		return i(t, e, "triweight")
	}, n.loess.tricube = function(t, e) {
		return i(t, e, "tricube")
	}, n.loess.gaussian = function(t, e) {
		return i(t, e, "gaussian")
	}, n.loess.cosine = function(t, e) {
		return i(t, e, "cosine")
	}, t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(15),
		a = r(27),
		c = r(22),
		s = function(t) {
			return new n(i.mix({}, c, {
				dims: t,
				regressionType: "linear",
				getRegression: function(t) {
					return a("polynomial", t, 1)
				}
			}))
		};
	t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(54),
		n = r(1),
		a = r(76),
		c = r(2),
		s = r(151),
		l = function(t) {
			l.superclass.constructor.call(this, t)
		};
	n.extend(l, i), n.augment(l, {
		kernelType: "",
		k: 10,
		execFrame: function(t) {
			var e = this,
				r = e.getDims(),
				i = [];
			if (2 === r.length) {
				var a = e.getXDim(),
					s = e.getYDim(),
					l = e.getData(t),
					o = e.getInterArray(t, a),
					u = e.execSmooth(l, o),
					h = t.rowObject(0);
				n.each(u, function(t) {
					var e = n.mix({}, h);
					e[a] = t[0], e[s] = t[1], i.push(e)
				})
			} else {
				var a = e.getXDim(),
					s = e.getYDim(),
					f = e.getZDim(),
					l = e.getData(t),
					o = [];
				o[0] = e.getInterArray(t, a), o[1] = e.getInterArray(t, s);
				var u = e.execSmoothThreeDim(l, o),
					h = t.rowObject(0);
				n.each(u, function(t) {
					var e = n.mix({}, h);
					e[a] = t[0], e[s] = t[1], e[f] = t[2], i.push(e)
				})
			}
			return new c(i)
		},
		execSmooth: function(t, e) {
			for (var r = this, i = e.length, n = t.length, c = r.kernelType, s = a[c], l = [], o = [], u = e[1] - e[0], h = 0; i > h; h++) {
				for (var f, d, p, g, y = 0, v = 0, m = 0, x = 0, C = 0, _ = e[h], O = r.getWindowWidth([_], t, [u])[0], S = 0; n > S; S++) d = t[S][0], p = t[S][1], f = s((_ - d) / O), 0 !== f && (y += f, v += f * d, m += f * d * d, x += f * p, C += f * d * p);
				y * m - v * v !== 0 && (o[1] = (v * x - y * C) / (v * v - y * m), o[0] = x / y - v / y * o[1], g = o[0] + o[1] * _, l.push([_, g]))
			}
			return l
		},
		execSmoothThreeDim: function(t, e) {
			for (var r = this, i = e[0].length, n = e[1].length, c = t.length, l = r.kernelType, o = a[l], u = [], h = [], f = e[0][1] - e[0][0], d = e[1][1] - e[1][0], p = 0; i > p; p++)
				for (var g = 0; n > g; g++) {
					for (var y, v, m, x, C, _ = 0, O = 0, S = 0, w = 0, M = 0, b = 0, k = 0, A = 0, P = 0, T = e[0][p], D = e[1][g], I = r.getWindowWidth([T, D], t, [f, d]), L = I[0], B = I[1], R = 0; c > R; R++) v = t[R][0], m = t[R][1], x = t[R][2], y = o((T - v) / L) * o((D - m) / B), 0 !== y && (_ += y, O += y * v, S += y * m, w += y * v * m, M += y * v * v, b += y * m * m, k += y * x, A += y * v * x, P += y * m * x);
					var F = [
							[_, O, S],
							[O, M, w],
							[S, w, b]
						],
						G = [k, A, P];
					h = s(F, G), h && (C = h[0] + h[1] * T + h[2] * D, u.push([T, D, C]))
				}
			return u
		},
		getWindowWidth: function(t, e, r) {
			var i = this,
				n = i.k,
				a = e.length,
				c = [],
				s = e[0].length - 1,
				l = 0;
			n >= a && (n = a), e.sort(function(e, i) {
				for (var n = 0, a = 0, c = 0; s > c; c++) n += (e[c] - t[c]) * (e[c] - t[c]) / (r[c] * r[c]), a += (i[c] - t[c]) * (i[c] - t[c]) / (r[c] * r[c]);
				return n - a
			});
			for (var o = 0; s > o; o++) {
				for (; e[n - 1][o] === e[0][o];) n++;
				var u = 1.1 * Math.abs(e[n - 1][o] - t[o]) / r[o];
				l += u * u
			}
			l = Math.sqrt(l);
			for (var o = 0; s > o; o++) c[o] = l * r[o];
			return c
		}
	}), t.exports = l
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(15),
		a = r(27),
		c = r(22),
		s = function(t) {
			return new n(i.mix({}, c, {
				dims: t,
				regressionType: "log",
				getRegression: function(t) {
					return a("logarithmic", t)
				}
			}))
		};
	t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(2),
		a = r(15),
		c = function(t) {
			return new a({
				dims: t,
				getRegressionString: function() {
					return "y = " + this.curMean
				},
				execSmooth: function(t, e, r) {
					var a = this,
						c = a.getYDim(),
						s = n.mean(r, c);
					a.curMean = s;
					var l = [];
					return i.each(e, function(t) {
						l.push([t, s])
					}), l
				}
			})
		};
	t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(2),
		a = r(15),
		c = function(t) {
			return new a({
				dims: t,
				getRegressionString: function() {
					return "y = " + this.curMedian
				},
				execSmooth: function(t, e, r) {
					var a = this,
						c = a.getYDim(),
						s = n.median(r, c);
					a.curMedian = s;
					var l = [];
					return i.each(e, function(t) {
						l.push([t, s])
					}), l
				}
			})
		};
	t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(15),
		a = r(27),
		c = r(22),
		s = r(2),
		l = function(t) {
			return new n(i.mix({}, c, {
				dims: t,
				regressionType: "pow",
				preExecute: function(t) {
					var e = this.getYDim();
					i.each(t, function(t) {
						var r = s.min(t, e);
						if (0 > r) throw "the field " + e + " has value less than 0,you can't use this regression!"
					})
				},
				getRegression: function(t) {
					return a("power", t)
				}
			}))
		};
	t.exports = l
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(15),
		a = r(27),
		c = r(22),
		s = function(t) {
			return new n(i.mix({}, c, {
				regressionType: "quadratic",
				dims: t,
				getRegression: function(t) {
					return a("polynomial", t, 2)
				}
			}))
		};
	t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(10),
		n = r(2),
		a = function(t) {
			return new i({
				dims: t,
				initDims: function(t) {
					t.push("..count")
				},
				transform: function(t, e) {
					var r = t.rowObject(0);
					return r[e] = t.rowCount(), new n([r])
				}
			})
		};
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(10),
		n = r(2),
		a = r(1),
		c = function(t) {
			return new i({
				dims: t,
				getStatDims: function() {
					var t = this.stat;
					if (t) return t.getStatDims();
					var e = this.getDims(),
						r = e.length,
						i = [e[r - 1]];
					return i
				},
				execFrame: function(t) {
					var e = this.getStatDims(),
						r = e[e.length - 1],
						i = this.getDims()[0];
					i && i !== r && (t = n.sort(t, i));
					var c = this.stat,
						s = [];
					if (c && "density" === c.type) {
						var l = c.getWindowWidth(t, i),
							o = t.colArray(r),
							u = 0;
						a.each(o, function(t) {
							u += t * l, s.push(u)
						})
					} else s = n.cumulative(t, r);
					return t.colReplace(r, s), t
				}
			})
		};
	t.exports = c
}, function(t, e, r) {
	var i = {
		count: r(216),
		max: r(219),
		min: r(222),
		mean: r(220),
		median: r(221),
		proportion: r(225),
		range: r(226),
		percent: r(224),
		sd: r(227),
		mode: r(223),
		sum: r(228),
		cumulative: r(217)
	};
	t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(10),
		n = r(2),
		a = function(t) {
			return new i({
				dims: t,
				transform: function(t, e) {
					var r = t.rowObject(0);
					return r[e] = n.max(t, e), new n([r])
				}
			})
		};
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(10),
		n = r(2),
		a = function(t) {
			return new i({
				dims: t,
				transform: function(t, e) {
					var r = t.rowObject(0);
					return r[e] = n.mean(t, e), new n([r])
				}
			})
		};
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(10),
		n = r(2),
		a = function(t) {
			return new i({
				dims: t,
				transform: function(t, e) {
					var r = t.rowObject(0);
					return r[e] = n.median(t, e), new n([r])
				}
			})
		};
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(10),
		n = r(2),
		a = function(t) {
			return new i({
				dims: t,
				transform: function(t, e) {
					var r = t.rowObject(0);
					return r[e] = n.min(t, e), new n([r])
				}
			})
		};
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(10),
		n = r(2),
		a = function(t) {
			return new i({
				dims: t,
				transform: function(t, e) {
					var r = t.rowObject(0);
					return r[e] = n.mode(t, e), new n([r])
				}
			})
		};
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(10),
		a = r(2),
		c = r(80),
		s = "..percent",
		l = function(t) {
			return new n(i.mix({
				dims: t,
				initDims: function(t) {
					var e = t[t.length - 1];
					t.splice(t.length - 1, 0, s), this.percetDim = e
				},
				getStatDims: function() {
					return [s]
				},
				transform: function(t, e, r) {
					e = this.percetDim;
					var i = a.sum(t, e),
						n = a.sum(r, e),
						c = t.rowObject(0);
					return c["..percent"] = i / n, c[e] = i, new a([c])
				}
			}, c))
		};
	t.exports = l
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(10),
		a = r(2),
		c = r(80),
		s = function(t) {
			return new n(i.mix({
				dims: t,
				initDims: function(t) {
					t.push("..proportion")
				},
				transform: function(t, e, r) {
					var i = t.rowCount() / r.rowCount(),
						n = t.rowObject(0);
					return n[e] = i, new a([n])
				}
			}, c))
		};
	t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(10),
		n = r(2),
		a = function(t) {
			return new i({
				dims: t,
				transform: function(t, e) {
					var r = t.rowObject(0);
					return r[e] = n.max(t, e) - n.min(t, e), new n([r])
				}
			})
		};
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(10),
		n = r(2),
		a = function(t) {
			return new i({
				dims: t,
				transform: function(t, e) {
					var r = t.rowObject(0);
					return r[e] = n.standard_deviation(t, e), new n([r])
				}
			})
		};
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(10),
		n = r(2),
		a = function(t) {
			return new i({
				dims: t,
				transform: function(t, e) {
					var r = t.rowObject(0);
					return r[e] = n.sum(t, e), new n([r])
				}
			})
		};
	t.exports = a
}, function(t, e, r) {
	var i = r(81);
	i.Squarify = r(230), t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(81),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	i.extend(a, n), i.augment(a, {
		mode: "squarify",
		ratio: .5 * (1 + Math.sqrt(5)),
		processNodes: function(t, e, r) {
			var n = this;
			if (i.isArray(t) && t.length) {
				var a, c, s, l = [],
					o = t[0],
					u = n.mode,
					h = n.valueField,
					f = n.childrenField,
					d = t.slice(),
					p = 1 / 0,
					g = "slice" === u ? e.dx : "dice" === u ? e.dy : "slice-dice" === u ? o.depth % 2 ? e.dy : e.dx : Math.min(e.dx, e.dy);
				for (n.scale(d, e.dx * e.dy / r), l.area = 0;
					(s = d.length) > 0;) l.push(a = d[s - 1]), l.area += a.area, "squarify" !== u || (c = n.worst(l, g)) <= p ? (d.pop(), p = c) : (l.area -= l.pop().area, n.position(l, g, e, !1), g = Math.min(e.dx, e.dy), l.length = l.area = 0, p = 1 / 0);
				l.length && (n.position(l, g, e, !0), l.length = l.area = 0), t.forEach(function(t) {
					n.processNodes(t[f], n.pad(t), t[h])
				})
			}
		},
		worst: function(t, e) {
			for (var r, i = this, n = t.area, a = 0, c = 1 / 0, s = -1, l = t.length; ++s < l;)(r = t[s].area) && (c > r && (c = r), r > a && (a = r));
			return n *= n, e *= e, n ? Math.max(e * a * i.ratio / n, n / (e * c * i.ratio)) : 1 / 0
		}
	}), t.exports = a
}, function(t, e, r) {
	var i = r(1),
		n = {
			transform: function(t, e) {
				return t = t.clone(), i.each(e, function(e) {
					switch (e[0]) {
						case "t":
							t.translate(e[1], e[2]);
							break;
						case "s":
							t.scale(e[1], e[2]);
							break;
						case "r":
							t.rotate(e[1]);
							break;
						case "m":
							t.multiply(e[1])
					}
				}), t
			},
			isMatrix3: function(t) {
				return "matrix3" === t.type
			},
			scale: function(t, e, r, i, n) {
				return t = t.clone(), t.translate(-1 * i, -1 * n), t.scale(e, r), t.translate(i, n), t
			}
		};
	t.exports = n
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		for (var r = [], i = 0, n = t.length; n - 2 * !e > i; i += 2) {
			var a = [{
				x: +t[i - 2],
				y: +t[i - 1]
			}, {
				x: +t[i],
				y: +t[i + 1]
			}, {
				x: +t[i + 2],
				y: +t[i + 3]
			}, {
				x: +t[i + 4],
				y: +t[i + 5]
			}];
			e ? i ? n - 4 === i ? a[3] = {
				x: +t[0],
				y: +t[1]
			} : n - 2 === i && (a[2] = {
				x: +t[0],
				y: +t[1]
			}, a[3] = {
				x: +t[2],
				y: +t[3]
			}) : a[0] = {
				x: +t[n - 2],
				y: +t[n - 1]
			} : n - 4 === i ? a[3] = a[2] : i || (a[0] = {
				x: +t[i],
				y: +t[i + 1]
			}), r.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
		}
		return r
	}
	var n = r(1),
		a = "concat",
		c = String.prototype.toUpperCase,
		s = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
		l = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
		o = {
			path2Absolute: function(t) {
				if (n.isArray(t) && n.isArray(t && t[0]) || (t = o.parsePathString(t)), !t || !t.length) return [
					["M", 0, 0]
				];
				var e = [],
					r = 0,
					s = 0,
					l = 0,
					u = 0,
					h = 0;
				"M" === t[0][0] && (r = +t[0][1], s = +t[0][2], l = r, u = s, h++, e[0] = ["M", r, s]);
				for (var f, d, p = 3 === t.length && "M" === t[0][0] && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(), g = h, y = t.length; y > g; g++) {
					e.push(f = []), d = t[g];
					var v;
					if (d[0] !== c.call(d[0])) switch (f[0] = c.call(d[0]), f[0]) {
							case "A":
								f[1] = d[1], f[2] = d[2], f[3] = d[3], f[4] = d[4], f[5] = d[5], f[6] = +(d[6] + r), f[7] = +(d[7] + s);
								break;
							case "V":
								f[1] = +d[1] + s;
								break;
							case "H":
								f[1] = +d[1] + r;
								break;
							case "R":
								v = [r, s][a](d.slice(1));
								for (var m = 2, x = v.length; x > m; m++) v[m] = +v[m] + r, v[++m] = +v[m] + s;
								e.pop(), e = e[a](i(v, p));
								break;
							case "M":
								for (l = +d[1] + r, u = +d[2] + s, m = 1, x = d.length; x > m; m++) f[m] = +d[m] + (m % 2 ? r : s);
								break;
							default:
								for (m = 1, x = d.length; x > m; m++) f[m] = +d[m] + (m % 2 ? r : s)
						} else if ("R" === d[0]) v = [r, s][a](d.slice(1)), e.pop(), e = e[a](i(v, p)), f = ["R"][a](d.slice(-2));
						else
							for (var C = 0, _ = d.length; _ > C; C++) f[C] = d[C];
					switch (f[0]) {
						case "Z":
							r = l, s = u;
							break;
						case "H":
							r = f[1];
							break;
						case "V":
							s = f[1];
							break;
						case "M":
							l = f[f.length - 2], u = f[f.length - 1], r = f[f.length - 2], s = f[f.length - 1];
							break;
						default:
							r = f[f.length - 2], s = f[f.length - 1]
					}
				}
				return e
			},
			parsePathString: function(t) {
				if (!t) return null;
				var e = {
						a: 7,
						c: 6,
						h: 1,
						l: 2,
						m: 2,
						r: 4,
						q: 4,
						s: 4,
						t: 2,
						v: 1,
						z: 0
					},
					r = [];
				return n.isArray(t) && n.isArray(t[0]) && (r = t.slice(0)), !r.length && n.isString(t) && t.replace(l, function(t, i, n) {
					var c = [],
						l = i.toLowerCase();
					if (n.replace(s, function(t, e) {
							e && c.push(+e)
						}), "m" === l && c.length > 2 && (r.push([i][a](c.splice(0, 2))), l = "l", i = "m" === i ? "l" : "L"), "r" === l) r.push([i][a](c));
					else
						for (; c.length >= e[l] && (r.push([i][a](c.splice(0, e[l]))), e[l]););
				}), r
			},
			parsePathArray: function(t) {
				if (n.isArray(t)) {
					var e = n.map(t, function(t) {
						var e = t.join(" ");
						return e.replace(/([a-z,A-Z])\s+/, "$1")
					});
					return e.join(" ")
				}
				return t
			}
		};
	t.exports = o
}, function(t, e, r) {
	"use strict";
	var i = r(55),
		n = r(14),
		a = r(234),
		c = function(t) {
			c.superclass.constructor.call(this, t), this._init()
		};
	i.extend(c, n), c.ATTRS = {
		time: 0,
		createTime: null,
		playTime: null,
		pauseTimeSpace: 0,
		available: !1,
		canvases: [],
		tweens: [],
		endTime: 0,
		infinite: !1,
		autoDestroy: !0,
		autoPlay: !1,
		autoDraw: !0,
		loop: !1
	}, i.augment(c, {
		_init: function() {
			var t = this.get("autoPlay");
			this.set("createTime", +new Date), t && this.play()
		},
		_trySetEndTime: function(t) {
			var e = this;
			i.isObject(t) ? e._setEndTime(t) : i.isArray(t) && i.each(t, function(t, r) {
				e._setEndTime(t)
			})
		},
		_trySetCanvases: function(t) {
			var e = this;
			i.isObject(t) ? e._setCanvases(t) : i.isArray(t) && i.each(t, function(t, r) {
				e._setCanvases(t)
			})
		},
		_setEndTime: function(t) {
			var e = this.get("endTime"),
				r = t.get("endTime");
			this.set("endTime", r > e ? r : e)
		},
		_setCanvases: function(t) {
			var e = t.get("canvas"),
				r = this.get("canvases"); - 1 === r.indexOf(e) && r.push(e)
		},
		_resetTweens: function() {
			var t = this.get("tweens");
			i.each(t, function(t) {
				t.reset()
			})
		},
		_getTime: function() {
			var t = this.get("playTime"),
				e = this.get("pauseTimeSpace");
			return +new Date - t + e
		},
		_refresh: function(t) {
			for (var e, r = this.get("tweens"), i = this.get("autoDraw"), n = this.get("autoDestroy"), a = [], c = 0; c < r.length; c++) e = r[c], e.get("needsDestroy") && n ? e.destroy() : e.get("destroyed") || e.get("needsDestroy") || e.tryStep(t), e.destroyed || a.push(e);
			i && this.draw(), this.set("tweens", a)
		},
		_update: function() {
			if (this.get("available")) {
				var t = this,
					e = t._getTime(),
					r = t.get("endTime"),
					n = t.get("loop"),
					a = t.get("infinite");
				t._refresh(e), t.set("time", e), t.timer(), i.requestAnimationFrame(function() {
					r + 16 >= e || a ? t._update() : t.reset(), e >= r && n && (t.set("pauseTimeSpace", 0), t._resetTweens(), t.play())
				})
			}
		},
		animate: function(t, e) {
			var r = new a({
				target: t,
				canvas: t.get("canvas"),
				timeline: this,
				startTime: e ? e : 0
			});
			return r
		},
		add: function(t) {
			var e, r = this.get("tweens");
			return i.isArray(t) ? e = r.concat(t) : i.isObject(t) && "tween" === t.get("type") ? (r.push(t), e = r) : console.error("Timeline not Support this type"), this.set("tweens", e), this._trySetCanvases(t), this._trySetEndTime(t), this
		},
		getTime: function() {
			return +new Date - this.get("playTime")
		},
		play: function() {
			var t = this.get("available");
			return this.set("playTime", +new Date), t || (this.set("available", !0), this._update()), this
		},
		loop: function(t) {
			return t || void 0 === t ? (this.set("infinite", !0), this.set("autoDestroy", !1), this.set("loop", !0)) : this.set("loop", !1), this
		},
		stop: function() {
			this.set("available", !1), this.set("pauseTimeSpace", 0), this._resetTweens(), this.reset(), this._refresh(0), this.draw()
		},
		pause: function() {
			var t = this.get("available");
			return t && this.set("pauseTimeSpace", +new Date - this.get("playTime")), this.set("available", !1), this
		},
		reset: function() {
			var t = this.get("autoDestroy");
			this.set("time", 0), t && (this.set("tweens", []), this.set("canvases", []))
		},
		draw: function() {
			for (var t = this.get("canvases"), e = 0; e < t.length; e++) t[e].draw()
		},
		timer: function() {}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(55),
		n = r(14),
		a = r(84),
		c = r(3),
		s = (c.Matrix3, function(t) {
			s.superclass.constructor.call(this, t), this.init()
		});
	i.extend(s, n), s.ATTRS = {
		target: null,
		timeline: null,
		startTime: null,
		delay: 0,
		cursorFrame: {
			attrs: {},
			matrix: null
		},
		cursorTimeSpan: 0,
		tweens: []
	}, i.augment(s, {
		init: function() {
			var t = this.get("cursorFrame"),
				e = this.get("target");
			t.attrs = i.mix({}, e.__attrs), t.matrix = e.getMatrix().clone()
		},
		append: function(t, e, r, n) {
			var c, s = i.guid("tween_"),
				l = this.get("target"),
				o = this.get("tweens"),
				u = this.get("timeline"),
				h = this.get("startTime"),
				f = i.getKeyFrameByProps(l, e),
				d = f[1];
			return r = r ? r : "linear", c = new a({
				id: s,
				canvas: l.get("canvas"),
				startTime: t ? t : h,
				target: l,
				easing: r,
				duration: e.duration ? e.duration : 1e3,
				callBack: n,
				endKeyFrame: d
			}), u && u.add(c), o.push(c), this
		},
		at: function(t) {
			return this.set("startTime", t), this
		}
	}), t.exports = s
}, function(t, e, r) {
	var i = r(236);
	t.exports = i
}, function(t, e) {
	"use strict";

	function r(t, e, i) {
		i = i || 0;
		for (var n in e)
			if (e.hasOwnProperty(n)) {
				var s = e[n];
				null !== s && c.isObject(s) ? (c.isObject(t[n]) || (t[n] = {}), a > i ? r(t[n], e[n]) : t[n] = e[n]) : c.isArray(s) ? (t[n] = [], t[n] = t[n].concat(s)) : void 0 !== s && (t[n] = e[n])
			}
	}
	var i = Object.prototype,
		n = i.toString,
		a = 5,
		c = {
			substitute: function(t, e) {
				return t && e ? t.replace(/\\?\{([^{}]+)\}/g, function(t, r) {
					return "\\" === t.charAt(0) ? t.slice(1) : void 0 === e[r] ? "" : e[r]
				}) : t
			},
			ucfirst: function(t) {
				return t += "", t.charAt(0).toUpperCase() + t.substring(1)
			},
			isString: function(t) {
				return "string" == typeof t
			},
			isNumber: function(t) {
				return "number" == typeof t
			},
			isNumeric: function(t) {
				return !isNaN(parseFloat(t)) && isFinite(t)
			},
			isBoolean: function(t) {
				return "boolean" == typeof t
			},
			isFunction: function(t) {
				return "function" == typeof t
			},
			isArray: "isArray" in Array ? Array.isArray : function(t) {
				return "[object Array]" === n.call(t)
			},
			isDate: function(t) {
				return "[object Date]" === n.call(t)
			},
			isNull: function(t) {
				return void 0 === t || null === t
			},
			notNull: function(t) {
				return !c.isNull(t)
			},
			isBlank: function(t) {
				if (c.isArray(t)) return 0 === t.length;
				if (c.isObject(t)) {
					var e = 0;
					return c.each(t, function(t, r) {
						e++
					}), 0 === e
				}
				return !1
			},
			isObject: "[object Object]" === n.call(null) ? function(t) {
				return null !== t && void 0 !== t && "[object Object]" === n.call(t) && void 0 === t.ownerDocument
			} : function(t) {
				return "[object Object]" === n.call(t)
			},
			extend: function(t, e, r, i) {
				c.isFunction(e) || (r = e, e = t, t = function() {});
				var n = Object.create ? function(t, e) {
						return Object.create(t, {
							constructor: {
								value: e
							}
						})
					} : function(t, e) {
						function r() {}
						r.prototype = t;
						var i = new r;
						return i.constructor = e, i
					},
					a = n(e.prototype, t);
				return t.prototype = c.mix(a, t.prototype), t.superclass = n(e.prototype, e), c.mix(a, r), c.mix(t, i), t
			},
			augment: function(t) {
				for (var e = c.toArray(arguments), r = 1; r < e.length; r++) {
					var i = e[r];
					c.isFunction(i) && (i = i.prototype), c.mix(t.prototype, i)
				}
			},
			toArray: function(t) {
				return t && t.length ? Array.prototype.slice.call(t) : []
			},
			mix: function() {
				var t = c.toArray(arguments),
					e = t[0];
				if (e === !0) {
					e = t[1];
					for (var i = 2; i < t.length; i++) {
						var n = t[i];
						r(e, n)
					}
				} else
					for (var i = 1; i < t.length; i++) {
						var n = t[i];
						for (var a in n) n.hasOwnProperty(a) && "constructor" !== a && (e[a] = n[a])
					}
				return e
			},
			each: function(t, e) {
				if (t)
					if (c.isObject(t)) {
						for (var r in t)
							if (t.hasOwnProperty(r)) {
								var i = e(t[r], r);
								if (i === !1) break
							}
					} else if (t.length)
					for (var n = 0; n < t.length; n++) {
						var i = e(t[n], n);
						if (i === !1) break
					}
			},
			requestAnimationFrame: function(t) {
				var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
					return setTimeout(t, 16)
				};
				return e(t)
			},
			cancelAnimationFrame: function(t) {
				var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || function(t) {
					return clearTimeout(t)
				};
				return e(t)
			}
		};
	t.exports = c
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		var r = e.toString(),
			i = r.indexOf(".");
		if (-1 === i) return Math.round(t);
		var n = r.substr(i + 1).length;
		return parseFloat(t.toFixed(n))
	}
	var n = Object.prototype,
		a = (n.toString, r(235));
	a.mix(a, {
		mixin: function(t, e) {
			if (t && e) {
				t._mixins = e, t.ATTRS = t.ATTRS || {};
				var r = {};
				a.each(e, function(e) {
					a.augment(t, e);
					var i = e.ATTRS;
					i && a.mix(r, i)
				}), t.ATTRS = a.mix(r, t.ATTRS)
			}
		},
		map: function(t, e) {
			var r = [];
			return a.each(t, function(t, i) {
				r.push(e(t, i))
			}), r
		},
		filter: function(t, e) {
			var r = [];
			return a.each(t, function(t, i) {
				e(t, i) && r.push(t)
			}), r
		},
		guid: function() {
			var t = {};
			return function(e) {
				return e = e || "g", t[e] ? t[e] += 1 : t[e] = 1, e + t[e]
			}
		}(),
		inArray: function(t, e) {
			return -1 !== a.indexOf(t, e)
		},
		indexOf: function(t, e) {
			var r = Array.prototype.indexOf;
			if (r) return r.call(t, e);
			for (var i = -1, n = 0; n < t.length; n++)
				if (t[n] === e) {
					i = n;
					break
				}
			return i
		},
		remove: function(t, e) {
			var r = a.indexOf(t, e); - 1 !== r && t.splice(r, 1)
		},
		empty: function(t) {
			if (!(t instanceof Array))
				for (var e = t.length - 1; e >= 0; e--) delete t[e];
			t.length = 0
		},
		equalsArray: function(t, e) {
			if (t === e) return !0;
			if (!t || !e) return !1;
			if (t.length !== e.length) return !1;
			for (var r = !0, i = 0; i < t.length; i++)
				if (t[i] !== e[i]) {
					r = !1;
					break
				}
			return r
		},
		wrapBehavior: function(t, e) {
			return t["_wrap_" + e] = function(r) {
				t[e](r)
			}
		},
		getWrapBehavior: function(t, e) {
			return t["_wrap_" + e]
		},
		fixedBase: function(t, e) {
			return i(t, e)
		},
		length: function(t) {
			if (a.isArray(t)) return t.length;
			if (a.isObject(t)) {
				var e = 0;
				return a.each(t, function() {
					e++
				}), e
			}
			return 0
		},
		clone: function(t) {
			if ("object" != typeof t || null === t) return t;
			if (a.isArray(t))
				for (var e = [], r = 0, i = t.length; i > r; r++) "object" == typeof t[r] && null != t[r] ? e[r] = a.clone(t[r]) : e[r] = t[r];
			else {
				var e = {};
				for (var r in t) "object" == typeof t[r] && null != t[r] ? e[r] = a.clone(t[r]) : e[r] = t[r]
			}
			return e
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(240),
		a = r(241),
		c = r(87),
		s = r(13),
		l = r(239),
		o = r(3),
		u = o.Vector3,
		h = function(t) {};
	i.augment(h, {
		canFill: !1,
		canStroke: !1,
		initAttrs: function(t) {
			return this.__attrs = {}, this.attr(i.mix({}, this.getDefaultAttrs(), t)), this
		},
		getDefaultAttrs: function() {
			return {}
		},
		attr: function(t, e) {
			var r = this;
			if (0 === arguments.length) return r.__attrs;
			if (i.isObject(t)) return i.each(t, function(t, e) {
				r._setAttr(e, t)
			}), r.__afterSetAttrAll && r.__afterSetAttrAll(t), r;
			if (2 === arguments.length) {
				if (r._setAttr(t, e) !== !1) {
					var n = "__afterSetAttr" + i.ucfirst(t);
					r[n] && r[n](e)
				}
				return r
			}
			return r._getAttr(t)
		},
		resetAttrs: function() {
			var t = this,
				e = t,
				r = t.get("context"),
				s = e.__attrs;
			e.isGroup ? i.each(s, function(t, a) {
				n[a] && ("fillStyle" === a && (t = c.parseStyle(t, e, s.fillOpacity)), "strokeStyle" === a && (t = c.parseStyle(t, e, s.strokeOpacity)), "lineDash" === a && r.setLineDash ? i.isArray(t) ? r.setLineDash(t) : i.isString(t) && r.setLineDash(t.split(" ")) : r[a] = t)
			}) : i.each(s, function(t, n) {
				a[n] && ("fillStyle" === n && (t = c.parseStyle(t, e, s.fillOpacity)), "strokeStyle" === n && (t = c.parseStyle(t, e, s.strokeOpacity)), "lineDash" === n && r.setLineDash ? i.isArray(t) ? r.setLineDash(t) : i.isString(t) && r.setLineDash(t.split(" ")) : r[n] = t)
			})
		},
		_getAttr: function(t) {
			var e = this,
				r = e.__attrs[t],
				n = "__getAttr" + i.ucfirst(t);
			return e[n] && (r = e[n](r)), r
		},
		_setAttr: function(t, e) {
			var r = this,
				n = "__setAttr" + i.ucfirst(t);
			return r[n] && (e = r[n](e, r.__attrs[t])), e === r.__attrs[t] ? !1 : (r.__attrs[t] = e, r)
		},
		__setAttrFill: function(t) {
			var e = this;
			if (e.canFill) return e.__attrs.fillStyle = t, t
		},
		hasFill: function() {
			if (this.canFill)
				for (var t = this; t;) {
					if (t.__attrs.fill) return t.__attrs.fill;
					t = t.get("parent")
				}
		},
		__setAttrStroke: function(t) {
			var e = this;
			if (e.canStroke) return this.__attrs.strokeStyle = t, t
		},
		hasStroke: function() {
			if (this.canStroke)
				for (var t = this; t;) {
					if (t.__attrs.stroke) return t.__attrs.stroke;
					t = t.get("parent")
				}
		},
		__setAttrOpacity: function(t) {
			return this.__attrs.globalAlpha = t, t
		},
		__getAttrOpacity: function() {
			return this.__attrs.globalAlpha
		},
		__setAttrLineWidth: function(t, e) {
			return t >= 0 && 20 >= t ? t : (s.warn("lineWidth \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0\u6216\u8005\u5c0f\u4e8e\u7b49\u4e8e20"), e || 1)
		},
		__setAttrClip: function(t) {
			var e = this;
			return t && t.type in l ? (null === t.get("canvas") && (t = i.clone(t)), t.set("parent", e.get("parent")), t.set("context", e.get("context")), t.inside = function(r, i) {
				var n = new u(r, i, 1);
				return t.invert(n, e.get("canvas")), t.__isPointInFill(n.x, n.y)
			}, t) : void 0
		}
	}), t.exports = h
}, function(t, e) {
	"use strict";
	t.exports = {
		circle: 1,
		ellipse: 1,
		fan: 1,
		polygon: 1,
		rect: 1,
		path: 1
	}
}, function(t, e) {
	"use strict";
	t.exports = {
		fillStyle: 1,
		strokeStyle: 1,
		globalAlpha: 1,
		shadowBlur: 1,
		shadowColor: 1,
		shadowOffsetX: 1,
		shadowOffsetY: 1,
		lineDash: 1
	}
}, function(t, e) {
	"use strict";
	t.exports = {
		fillStyle: 1,
		font: 1,
		globalAlpha: 1,
		lineCap: 1,
		lineWidth: 1,
		lineJoin: 1,
		miterLimit: 1,
		shadowBlur: 1,
		shadowColor: 1,
		shadowOffsetX: 1,
		shadowOffsetY: 1,
		strokeStyle: 1,
		textAlign: 1,
		textBaseline: 1,
		lineDash: 1
	}
}, function(t, e, r) {
	var i = r(5),
		n = r(86),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	i.extend(a, n), i.augment(a, {
		init: function() {
			a.superclass.init.call(this);
			var t = this,
				e = t.get("canvasId"),
				r = document.getElementById(e);
			t.set("el", r), t.set("context", r.getContext("2d")), t.set("canvas", t), t.__events()
		},
		__events: function() {},
		getPointByClient: function(t, e) {
			var r = this,
				i = r.get("el"),
				n = i.getBoundingClientRect(),
				a = n.right - n.left,
				c = n.bottom - n.top;
			return {
				x: (t - n.left) * (i.width / a),
				y: (e - n.top) * (i.height / c)
			}
		},
		getClientByPoint: function(t, e) {
			var r = this,
				i = r.get("el"),
				n = i.getBoundingClientRect(),
				a = n.right - n.left,
				c = n.bottom - n.top;
			return {
				clientX: t / (i.width / a) + n.left,
				clientY: e / (i.height / c) + n.top
			}
		},
		beforeDraw: function() {
			var t = this,
				e = t.get("context"),
				r = t.get("el");
			e.clearRect(0, 0, r.width, r.height)
		},
		draw: function() {
			function t() {
				e.set("animateHandler", i.requestAnimationFrame(function() {
					e.set("animateHandler", void 0), e.get("toDraw") && t()
				})), a.superclass.draw.call(e), e.set("toDraw", !1)
			}
			var e = this;
			e.get("animateHandler") ? e.set("toDraw", !0) : t()
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = function() {};
	i.augment(n, {
		initEventDispatcher: function() {
			this.__listeners = {}
		},
		on: function(t, e) {
			var r = this.__listeners;
			return i.isNull(r[t]) && (r[t] = []), -1 === r[t].indexOf(e) && r[t].push(e), this
		},
		off: function(t, e) {
			var r = this.__listeners;
			return 0 === arguments.length ? (this.__listeners = {}, this) : 1 === arguments.length && i.isString(t) ? (r[t] = [], this) : 2 === arguments.length && i.isString(t) && i.isFunction(e) ? (i.remove(r[t], e), this) : void 0
		},
		has: function(t, e) {
			var r = this.__listeners;
			return 0 !== arguments.length || i.isBlank(r) ? 1 === arguments.length && r[t] && !i.isBlank(r[t]) ? !0 : !(2 !== arguments.length || !r[t] || -1 === r[t].indexOf(e)) : !0
		},
		trigger: function(t) {
			var e = this,
				r = e.__listeners,
				n = r[t.type];
			if (t.target = e, i.notNull(n) && i.each(n, function(r) {
					r.call(e, t)
				}), t.bubbles) {
				var a = e.get("parent");
				a && !t.propagationStopped && a.trigger(t)
			}
			return e
		}
	}), t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(3),
		a = n.Matrix3,
		c = (n.Vector3, r(4)),
		s = function() {};
	i.augment(s, {
		initTransform: function() {
			this.__m = new a
		},
		translate: function(t, e) {
			return this.__m.translate(t, e), this
		},
		rotate: function(t) {
			return this.__m.rotate(c.degreeToRad(t)), this
		},
		scale: function(t, e) {
			return this.__m.scale(t, e), this
		},
		transform: function(t) {
			var e = this;
			return i.each(t, function(t) {
				switch (t[0]) {
					case "t":
						e.translate(t[1], t[2]);
						break;
					case "s":
						e.scale(t[1], t[2]);
						break;
					case "r":
						e.rotate(t[1]);
						break;
					case "m":
						e.__m = a.multiply(t[1], e.__m)
				}
			}), this
		},
		setTransform: function(t) {
			return this.__m.identity(), this.transform(t)
		},
		getMatrix: function() {
			return this.__m
		},
		setMatrix: function(t) {
			return this.__m = t, this
		},
		apply: function(t, e) {
			var r = this;
			e = e || r;
			for (var n = r, c = []; n !== e;) c.unshift(n), n = n.get("parent");
			c.unshift(n);
			var s = new a;
			return i.each(c, function(t) {
				s.multiply(t.__m)
			}), t.applyMatrix(s), this
		},
		invert: function(t, e) {
			var r = this;
			e = e || r;
			for (var n = r, c = []; n !== e;) c.unshift(n), n = n.get("parent");
			c.unshift(n);
			var s = new a;
			i.each(c, function(t) {
				s.multiply(t.__m)
			});
			var l = s.getInverse();
			return t.applyMatrix(l), this
		},
		resetTransform: function() {
			var t = this,
				e = t.get("context"),
				r = t.__m.to2DObject();
			e.transform(r.a, r.b, r.c, r.d, r.e, r.f)
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(8),
		a = r(7),
		c = r(56),
		s = r(4),
		l = r(33),
		o = r(3),
		u = o.Vector2,
		h = r(13),
		f = function(t) {
			f.superclass.constructor.call(this, t)
		};
	f.ATTRS = {
		x: 0,
		y: 0,
		r: 0,
		startAngle: 0,
		endAngle: 0,
		clockwise: !1,
		lineWidth: 1,
		arrow: !1
	}, i.extend(f, n), i.augment(f, {
		canStroke: !0,
		type: "arc",
		getDefaultAttrs: function() {
			return f.ATTRS
		},
		__setAttrR: function(t, e) {
			return t >= 0 ? t : (h.warn("r \u5fc5\u987b\u5927\u4e8e0"), e)
		},
		__setAttrClockwise: function(t, e) {
			return i.isBoolean(t) ? t : (h.warn("clockwise \u5fc5\u987b\u662fboolean\u503c"), e)
		},
		__setAttrStartAngle: function(t) {
			return s.degreeToRad(t)
		},
		__getAttrStartAngle: function(t) {
			return s.radToDegree(t)
		},
		__setAttrEndAngle: function(t) {
			return s.degreeToRad(t)
		},
		__getAttrEndAngle: function(t) {
			return s.radToDegree(t)
		},
		__afterSetAttrX: function() {
			this.__calculateBox()
		},
		__afterSetAttrY: function() {
			this.__calculateBox()
		},
		__afterSetAttrR: function() {
			this.__calculateBox()
		},
		__afterSetAttrStartAngle: function() {
			this.__calculateBox()
		},
		__afterSetAttrEndAngle: function() {
			this.__calculateBox()
		},
		__afterSetAttrClockwise: function() {
			this.__calculateBox()
		},
		__afterSetAttrLineWidth: function() {
			this.__calculateBox()
		},
		__afterSetAttrAll: function() {
			this.__calculateBox()
		},
		__calculateBox: function() {
			var t = this,
				e = t.__attrs,
				r = e.x,
				i = e.y,
				n = e.r,
				a = e.startAngle,
				s = e.endAngle,
				l = e.clockwise,
				o = e.lineWidth,
				u = c.box(r, i, n, a, s, l),
				h = o / 2;
			u.minX -= h, u.minY -= h, u.maxX += h, u.maxY += h, this.set("box", u)
		},
		isPointInPath: function(t, e) {
			var r = this,
				i = r.__attrs,
				n = i.x,
				c = i.y,
				s = i.r,
				l = i.startAngle,
				o = i.endAngle,
				u = i.clockwise,
				h = i.lineWidth;
			return r.hasStroke() ? a.arcline(n, c, s, l, o, u, h, t, e) : !1
		},
		createPath: function() {
			var t = this,
				e = t.get("context"),
				r = t.__attrs,
				i = r.x,
				n = r.y,
				a = r.r,
				c = r.startAngle,
				s = r.endAngle,
				o = r.clockwise,
				h = r.lineWidth,
				f = r.arrow;
			if (e.beginPath(), e.arc(i, n, a, c, s, o), f) {
				var d = {
						x: i + a * Math.cos(s),
						y: n + a * Math.sin(s)
					},
					p = new u(-a * Math.sin(s), a * Math.cos(s));
				o && p.multiplyScaler(-1), l.makeArrow(e, p, d, h)
			}
		}
	}), t.exports = f
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(8),
		a = r(7),
		c = r(13),
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	s.ATTRS = {
		x: 0,
		y: 0,
		r: 0,
		lineWidth: 1
	}, i.extend(s, n), i.augment(s, {
		canFill: !0,
		canStroke: !0,
		type: "circle",
		getDefaultAttrs: function() {
			return s.ATTRS
		},
		__setAttrR: function(t, e) {
			return t >= 0 ? t : (c.warn("r \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
		},
		__afterSetAttrX: function() {
			this.__calculateBox()
		},
		__afterSetAttrY: function() {
			this.__calculateBox()
		},
		__afterSetAttrR: function() {
			this.__calculateBox()
		},
		__afterSetAttrLineWidth: function() {
			this.__calculateBox()
		},
		__afterSetAttrAll: function() {
			this.__calculateBox()
		},
		__calculateBox: function() {
			var t = this,
				e = t.__attrs,
				r = e.x,
				i = e.y,
				n = e.r,
				a = e.lineWidth,
				c = a / 2 + n;
			this.set("box", {
				minX: r - c,
				minY: i - c,
				maxX: r + c,
				maxY: i + c
			})
		},
		isPointInPath: function(t, e) {
			var r = this,
				i = r.hasFill(),
				n = r.hasStroke();
			return i && n ? r.__isPointInFill(t, e) || r.__isPointInStroke(t, e) : i ? r.__isPointInFill(t, e) : n ? r.__isPointInStroke(t, e) : !1
		},
		__isPointInFill: function(t, e) {
			var r = this,
				i = r.__attrs,
				n = i.x,
				c = i.y,
				s = i.r;
			return a.circle(n, c, s, t, e)
		},
		__isPointInStroke: function(t, e) {
			var r = this,
				i = r.__attrs,
				n = i.x,
				c = i.y,
				s = i.r,
				l = i.lineWidth;
			return a.arcline(n, c, s, 0, 2 * Math.PI, !1, l, t, e)
		},
		createPath: function() {
			var t = this,
				e = t.get("context"),
				r = t.__attrs,
				i = r.x,
				n = r.y,
				a = r.r;
			e.beginPath(), e.arc(i, n, a, 0, 2 * Math.PI, !1), e.closePath()
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(8),
		a = r(7),
		c = (r(4), r(33)),
		s = r(57),
		l = r(3),
		o = l.Vector2,
		u = function(t) {
			u.superclass.constructor.call(this, t)
		};
	u.ATTRS = {
		p1: null,
		p2: null,
		p3: null,
		p4: null,
		lineWidth: 1,
		arrow: !1
	}, i.extend(u, n), i.augment(u, {
		canStroke: !0,
		type: "cubic",
		getDefaultAttrs: function() {
			return u.ATTRS
		},
		__afterSetAttrP1: function() {
			this.__calculateBox()
		},
		__afterSetAttrP2: function() {
			this.__calculateBox()
		},
		__afterSetAttrP3: function() {
			this.__calculateBox()
		},
		__afterSetAttrP4: function() {
			this.__calculateBox()
		},
		__afterSetAttrLineWidth: function() {
			this.__calculateBox()
		},
		__afterSetAttrAll: function() {
			this.__calculateBox()
		},
		__calculateBox: function() {
			var t = this,
				e = t.__attrs,
				r = e.p1,
				n = e.p2,
				a = e.p3,
				c = e.p4;
			if (!(i.isNull(r) || i.isNull(n) || i.isNull(a) || i.isNull(c))) {
				for (var l = e.lineWidth / 2, o = s.extrema(r[0], n[0], a[0], c[0]), u = 0, h = o.length; h > u; u++) o[u] = s.at(r[0], n[0], a[0], c[0], o[u]);
				for (var f = s.extrema(r[1], n[1], a[1], c[1]), u = 0, h = f.length; h > u; u++) f[u] = s.at(r[1], n[1], a[1], c[1], f[u]);
				o.push(r[0], c[0]), f.push(r[1], c[1]), t.set("box", {
					minX: Math.min.apply(Math, o) - l,
					maxX: Math.max.apply(Math, o) + l,
					minY: Math.min.apply(Math, f) - l,
					maxY: Math.max.apply(Math, f) + l
				})
			}
		},
		isPointInPath: function(t, e) {
			var r = this,
				i = r.__attrs,
				n = i.p1,
				c = i.p2,
				s = i.p3,
				l = i.p4,
				o = i.lineWidth;
			return a.cubicline(n[0], n[1], c[0], c[1], s[0], s[1], l[0], l[1], o, t, e)
		},
		createPath: function() {
			var t = this,
				e = t.get("context"),
				r = t.__attrs,
				n = r.p1,
				a = r.p2,
				s = r.p3,
				l = r.p4,
				u = r.lineWidth,
				h = r.arrow;
			if (!(i.isNull(n) || i.isNull(a) || i.isNull(s) || i.isNull(l)) && (e.beginPath(), e.moveTo(n[0], n[1]), e.bezierCurveTo(a[0], a[1], s[0], s[1], l[0], l[1]), h)) {
				var f = new o(l[0] - s[0], l[1] - s[1]);
				c.makeArrow(e, f, {
					x: l[0],
					y: l[1]
				}, u)
			}
		},
		getPoint: function(t) {
			var e = this.__attrs;
			return {
				x: s.at(e.p4[0], e.p3[0], e.p2[0], e.p1[0], t),
				y: s.at(e.p4[1], e.p3[1], e.p2[1], e.p1[1], t)
			}
		}
	}), t.exports = u
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(8),
		a = r(7),
		c = r(3),
		s = c.Matrix3,
		l = c.Vector3,
		o = r(13),
		u = function(t) {
			u.superclass.constructor.call(this, t)
		};
	u.ATTRS = {
		x: 0,
		y: 0,
		rx: 1,
		ry: 1,
		lineWidth: 1
	}, i.extend(u, n), i.augment(u, {
		canFill: !0,
		canStroke: !0,
		type: "ellipse",
		getDefaultAttrs: function() {
			return u.ATTRS
		},
		__setAttrRx: function(t, e) {
			return t > 0 ? t : (o.warn("rx \u5927\u4e8e\u7b49\u4e8e0"), e)
		},
		__setAttrRy: function(t, e) {
			return t > 0 ? t : (o.warn("ry \u5927\u4e8e\u7b49\u4e8e0"), e)
		},
		__afterSetAttrX: function() {
			this.__calculateBox()
		},
		__afterSetAttrY: function() {
			this.__calculateBox()
		},
		__afterSetAttrRx: function() {
			this.__calculateBox()
		},
		__afterSetAttrRy: function() {
			this.__calculateBox()
		},
		__afterSetAttrLineWidth: function() {
			this.__calculateBox()
		},
		__afterSetAttrAll: function() {
			this.__calculateBox()
		},
		__calculateBox: function() {
			var t = this,
				e = t.__attrs,
				r = e.x,
				i = e.y,
				n = e.rx,
				a = e.ry,
				c = e.lineWidth,
				s = n + c / 2,
				l = a + c / 2;
			this.set("box", {
				minX: r - s,
				minY: i - l,
				maxX: r + s,
				maxY: i + l
			})
		},
		isPointInPath: function(t, e) {
			var r = this,
				i = r.hasFill(),
				n = r.hasStroke();
			return i && n ? r.__isPointInFill(t, e) || r.__isPointInStroke(t, e) : i ? r.__isPointInFill(t, e) : n ? r.__isPointInStroke(t, e) : !1
		},
		__isPointInFill: function(t, e) {
			var r = this,
				i = r.__attrs,
				n = i.x,
				c = i.y,
				o = i.rx,
				u = i.ry,
				h = o > u ? o : u,
				f = o > u ? 1 : o / u,
				d = o > u ? u / o : 1,
				p = new l(t, e, 1),
				g = new s;
			g.scale(f, d), g.translate(n, c);
			var y = g.getInverse();
			return p.applyMatrix(y), a.circle(0, 0, h, p.x, p.y)
		},
		__isPointInStroke: function(t, e) {
			var r = this,
				i = r.__attrs,
				n = i.x,
				c = i.y,
				o = i.rx,
				u = i.ry,
				h = i.lineWidth,
				f = o > u ? o : u,
				d = o > u ? 1 : o / u,
				p = o > u ? u / o : 1,
				g = new l(t, e, 1),
				y = new s;
			y.scale(d, p), y.translate(n, c);
			var v = y.getInverse();
			return g.applyMatrix(v), a.arcline(0, 0, f, 0, 2 * Math.PI, !1, h, g.x, g.y)
		},
		createPath: function() {
			var t = this,
				e = t.get("context"),
				r = t.__attrs,
				i = r.x,
				n = r.y,
				a = r.rx,
				c = r.ry,
				l = a > c ? a : c,
				o = a > c ? 1 : a / c,
				u = a > c ? c / a : 1,
				h = new s;
			h.scale(o, u), h.translate(i, n);
			var f = h.to2DObject();
			e.beginPath(), e.save(), e.transform(f.a, f.b, f.c, f.d, f.e, f.f), e.arc(0, 0, l, 0, 2 * Math.PI), e.restore(), e.closePath()
		}
	}), t.exports = u
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(8),
		a = r(7),
		c = r(4),
		s = r(56),
		l = r(3),
		o = l.Vector2,
		u = r(13),
		h = function(t) {
			h.superclass.constructor.call(this, t)
		};
	h.ATTRS = {
		x: 0,
		y: 0,
		rs: 0,
		re: 0,
		startAngle: 0,
		endAngle: 0,
		clockwise: !1,
		lineWidth: 1
	}, i.extend(h, n), i.augment(h, {
		canFill: !0,
		canStroke: !0,
		type: "fan",
		getDefaultAttrs: function() {
			return h.ATTRS
		},
		__setAttrRs: function(t, e) {
			return t >= 0 ? t : (u.warn("rs \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
		},
		__setAttrRe: function(t, e) {
			return t >= 0 ? t : (u.warn("re \u5fc5\u987b\u5927\u4e8e\u7b49\u4f600"), e)
		},
		__setAttrClockwise: function(t, e) {
			return i.isBoolean(t) ? t : (u.warn("clockwise \u5fc5\u987b\u4e3aboolean\u503c"), e)
		},
		__setAttrStartAngle: function(t) {
			return c.degreeToRad(t)
		},
		__getAttrStartAngle: function(t) {
			return c.radToDegree(t)
		},
		__setAttrEndAngle: function(t) {
			return c.degreeToRad(t)
		},
		__getAttrEndAngle: function(t) {
			return c.radToDegree(t)
		},
		__afterSetAttrX: function() {
			this.__calculateBox()
		},
		__afterSetAttrY: function() {
			this.__calculateBox()
		},
		__afterSetAttrRs: function() {
			this.__calculateBox()
		},
		__afterSetAttrRe: function() {
			this.__calculateBox()
		},
		__afterSetAttrStartAngle: function() {
			this.__calculateBox()
		},
		__afterSetAttrEndAngle: function() {
			this.__calculateBox()
		},
		__afterSetAttrClockwise: function() {
			this.__calculateBox()
		},
		__afterSetAttrLineWidth: function() {
			this.__calculateBox()
		},
		__afterSetAttrAll: function() {
			this.__calculateBox()
		},
		__calculateBox: function() {
			var t = this,
				e = t.__attrs,
				r = e.x,
				i = e.y,
				n = e.rs,
				a = e.re,
				c = e.startAngle,
				l = e.endAngle,
				o = e.clockwise,
				u = e.lineWidth,
				h = s.box(r, i, n, c, l, o),
				f = s.box(r, i, a, c, l, o),
				d = Math.min(h.minX, f.minX),
				p = Math.min(h.minY, f.minY),
				g = Math.max(h.maxX, f.maxX),
				y = Math.max(h.maxY, f.maxY),
				v = u / 2;
			this.set("box", {
				minX: d - v,
				minY: p - v,
				maxX: g + v,
				maxY: y + v
			})
		},
		isPointInPath: function(t, e) {
			var r = this,
				i = r.hasFill(),
				n = r.hasStroke();
			return i && n ? r.__isPointInFill(t, e) || r.__isPointInStroke(t, e) : i ? r.__isPointInFill(t, e) : n ? r.__isPointInStroke(t, e) : !1
		},
		__isPointInFill: function(t, e) {
			var r = this,
				i = r.__attrs,
				n = i.x,
				a = i.y,
				l = i.rs,
				u = i.re,
				h = i.startAngle,
				f = i.endAngle,
				d = i.clockwise,
				p = new o(1, 0),
				g = new o(t - n, e - a),
				y = p.angleTo(g),
				v = s.nearAngle(y, h, f, d);
			if (c.equal(y, v)) {
				var m = g.lengthSq();
				if (m >= l * l && u * u >= m) return !0
			}
			return !1
		},
		__isPointInStroke: function(t, e) {
			var r = this,
				i = r.__attrs,
				n = i.x,
				c = i.y,
				s = i.rs,
				l = i.re,
				o = i.startAngle,
				u = i.endAngle,
				h = i.clockwise,
				f = i.lineWidth,
				d = {
					x: Math.cos(o) * s + n,
					y: Math.sin(o) * s + c
				},
				p = {
					x: Math.cos(o) * l + n,
					y: Math.sin(o) * l + c
				},
				g = {
					x: Math.cos(u) * s + n,
					y: Math.sin(u) * s + c
				},
				y = {
					x: Math.cos(u) * l + n,
					y: Math.sin(u) * l + c
				};
			return a.line(d.x, d.y, p.x, p.y, f, t, e) ? !0 : a.line(g.x, g.y, y.x, y.y, f, t, e) ? !0 : a.arcline(n, c, s, o, u, h, f, t, e) ? !0 : !!a.arcline(n, c, l, o, u, h, f, t, e)
		},
		createPath: function() {
			var t = this,
				e = t.get("context"),
				r = t.__attrs,
				i = r.x,
				n = r.y,
				a = r.rs,
				c = r.re,
				s = r.startAngle,
				l = r.endAngle,
				o = r.clockwise,
				u = {
					x: Math.cos(s) * a + i,
					y: Math.sin(s) * a + n
				},
				h = {
					x: Math.cos(s) * c + i,
					y: Math.sin(s) * c + n
				},
				f = {
					x: Math.cos(l) * a + i,
					y: Math.sin(l) * a + n
				};
			({
				x: Math.cos(l) * c + i,
				y: Math.sin(l) * c + n
			});
			e.beginPath(), e.moveTo(u.x, u.y), e.lineTo(h.x, h.y), e.arc(i, n, c, s, l, o), e.lineTo(f.x, f.y), e.arc(i, n, a, l, s, !o), e.closePath()
		}
	}), t.exports = h
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(8),
		a = r(7),
		c = r(13),
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	s.ATTRS = {
		x: 0,
		y: 0,
		img: void 0,
		width: 0,
		height: 0,
		sx: null,
		sy: null,
		swidth: null,
		sheight: null
	}, i.extend(s, n), i.augment(s, {
		type: "image",
		getDefaultAttrs: function() {
			return s.ATTRS
		},
		__setAttrWidth: function(t, e) {
			return t >= 0 ? t : (c.warn("width \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
		},
		__setAttrHeight: function(t, e) {
			return t >= 0 ? t : (c.warn("height \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
		},
		__afterSetAttrX: function() {
			this.__calculateBox()
		},
		__afterSetAttrY: function() {
			this.__calculateBox()
		},
		__afterSetAttrWidth: function() {
			this.__calculateBox()
		},
		__afterSetAttrHeight: function() {
			this.__calculateBox()
		},
		__afterSetAttrAll: function() {
			this.__calculateBox()
		},
		__calculateBox: function() {
			var t = this,
				e = t.__attrs,
				r = e.x,
				i = e.y,
				n = e.width,
				a = e.height;
			this.set("box", {
				minX: r,
				minY: i,
				maxX: r + n,
				maxY: i + a
			})
		},
		isPointInPath: function(t, e) {
			var r = this,
				i = r.__attrs;
			if (r.get("toDraw") || !i.img) return !1;
			var n = i.x,
				c = i.y,
				s = i.width,
				l = i.height;
			return a.rect(n, c, s, l, t, e)
		},
		__setLoading: function(t) {
			var e = this,
				r = e.get("canvas");
			return t === !1 && e.get("toDraw") === !0 && (e.__cfg.loading = !1, r.draw()), t
		},
		__setAttrImg: function(t) {
			var e = this,
				r = e.__attrs;
			e.get("context");
			if (!i.isString(t)) return t instanceof Image ? (r.width || e.attr("width", t.width), r.height || e.attr("height", t.height), t) : t instanceof HTMLElement && i.isString(t.nodeName) && "CANVAS" === t.nodeName.toUpperCase() ? (r.width || e.attr("width", Number(t.getAttribute("width"))), r.height || e.attr("height", Number(t.getAttribute("height"))), t) : t instanceof ImageData ? (r.width || e.attr("width", t.width), r.height || e.attr("height", t.height), t) : void 0;
			var n = new Image;
			n.onload = function() {
				e.attr("imgSrc", t), e.attr("img", n), e.set("loading", !1)
			}, n.src = t, e.set("loading", !0)
		},
		drawInner: function() {
			var t = this;
			return t.get("loading") ? void t.set("toDraw", !0) : void t.__drawImage()
		},
		__drawImage: function() {
			var t = this,
				e = t.get("context"),
				r = t.__attrs,
				n = r.x,
				a = r.y,
				c = r.img,
				s = r.width,
				l = r.height,
				o = r.sx,
				u = r.sy,
				h = r.swidth,
				f = r.sheight;
			return t.set("toDraw", !1), c instanceof Image || c instanceof HTMLElement && i.isString(c.nodeName) && "CANVAS" === c.nodeName.toUpperCase() ? i.isNull(o) || i.isNull(u) || i.isNull(h) || i.isNull(f) ? void e.drawImage(c, n, a, s, l) : i.notNull(o) && i.notNull(u) && i.notNull(h) && i.notNull(f) ? void e.drawImage(c, o, u, h, f, n, a, s, l) : void 0 : c instanceof ImageData ? void e.putImageData(c, n, a, o || 0, u || 0, h || s, f || l) : void 0
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(8),
		a = r(7),
		c = r(3),
		s = c.Vector2,
		l = r(33),
		o = r(88),
		u = function(t) {
			u.superclass.constructor.call(this, t)
		};
	u.ATTRS = {
		x1: 0,
		y1: 0,
		x2: 0,
		y2: 0,
		lineWidth: 1,
		arrow: !1
	}, i.extend(u, n), i.augment(u, {
		canStroke: !0,
		type: "line",
		getDefaultAttrs: function() {
			return u.ATTRS
		},
		__afterSetAttrX1: function() {
			this.__calculateBox()
		},
		__afterSetAttrY1: function() {
			this.__calculateBox()
		},
		__afterSetAttrX2: function() {
			this.__calculateBox()
		},
		__afterSetAttrY2: function() {
			this.__calculateBox()
		},
		__afterSetAttrLineWidth: function() {
			this.__calculateBox()
		},
		__afterSetAttrAll: function() {
			this.__calculateBox()
		},
		__calculateBox: function() {
			var t = this,
				e = t.__attrs,
				r = e.x1,
				i = e.y1,
				n = e.x2,
				a = e.y2,
				c = e.lineWidth;
			this.set("box", o.box(r, i, n, a, c))
		},
		isPointInPath: function(t, e) {
			var r = this,
				i = r.__attrs,
				n = i.x1,
				c = i.y1,
				s = i.x2,
				l = i.y2,
				o = i.lineWidth;
			return r.hasStroke() ? a.line(n, c, s, l, o, t, e) : !1
		},
		createPath: function() {
			var t = this,
				e = t.get("context"),
				r = t.__attrs,
				i = r.x1,
				n = r.y1,
				a = r.x2,
				c = r.y2,
				o = r.arrow,
				u = r.lineWidth;
			if (e.beginPath(), e.moveTo(i, n), o) {
				var h = new s(a - i, c - n),
					f = l.getEndPoint(h, new s(a, c), u);
				e.lineTo(f.x, f.y), l.makeArrow(e, h, f, u)
			} else e.lineTo(a, c)
		},
		getPoint: function(t) {
			var e = this.__attrs;
			return {
				x: o.at(e.x1, e.x2, t),
				y: o.at(e.y1, e.y2, t)
			}
		}
	}), t.exports = u
}, function(t, e, r) {
	"use strict";

	function i(t, e, r, i, n) {
		return e * Math.cos(t) * Math.cos(n) - r * Math.sin(t) * Math.sin(n) + i
	}

	function n(t, e, r, i, n) {
		return e * Math.sin(t) * Math.cos(n) + r * Math.cos(t) * Math.sin(n) + i
	}

	function a(t, e, r) {
		return Math.atan(-r / e * Math.tan(t))
	}

	function c(t, e, r) {
		return Math.atan(r / (e * Math.tan(t)))
	}
	var s = r(3);
	s.Vector2, r(4);
	t.exports = {
		xAt: i,
		yAt: n,
		xExtrema: a,
		yExtrema: c
	}
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(8),
		a = r(259),
		c = r(87),
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	s.ATTRS = {
		path: null,
		lineWidth: 1
	}, i.extend(s, n), i.augment(s, {
		canFill: !0,
		canStroke: !0,
		type: "path",
		getDefaultAttrs: function() {
			return s.ATTRS
		},
		__afterSetAttrPath: function(t) {
			var e = this;
			if (i.isNull(t)) return e.set("segments", null), void e.set("box", void 0);
			var r, n = c.parsePath(t),
				s = [];
			!i.isArray(n) || 0 === n.length || "M" !== n[0][0] && "m" !== n[0][0] || (i.each(n, function(t) {
				r = new a(t, r), s.push(r)
			}), e.set("segments", s), e.__calculateBox())
		},
		__afterSetAttrLineWidth: function(t) {
			var e = this;
			e.get("segments");
			e.__calculateBox()
		},
		__afterSetAttrAll: function(t) {
			var e = this;
			t.path ? e.__afterSetAttrPath(t.path) : e.__calculateBox()
		},
		__calculateBox: function() {
			var t = this,
				e = t.__attrs,
				r = e.lineWidth,
				n = t.get("segments");
			if (n) {
				var a = 1 / 0,
					c = -(1 / 0),
					s = 1 / 0,
					l = -(1 / 0);
				i.each(n, function(t, e) {
					t.getBBox(r);
					var i = t.box;
					i && (i.minX < a && (a = i.minX), i.maxX > c && (c = i.maxX), i.minY < s && (s = i.minY), i.maxY > l && (l = i.maxY))
				}), this.set("box", {
					minX: a,
					minY: s,
					maxX: c,
					maxY: l
				})
			}
		},
		isPointInPath: function(t, e) {
			var r = this,
				i = r.hasFill(),
				n = r.hasStroke();
			return i && n ? r.__isPointInFill(t, e) || r.__isPointInStroke(t, e) : i ? r.__isPointInFill(t, e) : n ? r.__isPointInStroke(t, e) : !1
		},
		__isPointInFill: function(t, e) {
			var r = this,
				i = r.get("context");
			return i ? (r.createPath(), i.isPointInPath(t, e)) : void 0
		},
		__isPointInStroke: function(t, e) {
			for (var r = this, i = r.get("segments"), n = r.__attrs, a = n.lineWidth, c = 0, s = i.length; s > c; c++)
				if (i[c].isInside(t, e, a)) return !0;
			return !1
		},
		createPath: function() {
			var t = this,
				e = t.get("context"),
				r = t.get("segments");
			e.beginPath();
			for (var i = 0, n = r.length; n > i; i++) r[i].draw(e)
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(8),
		a = r(7),
		c = r(3),
		s = c.Vector2,
		l = function(t) {
			l.superclass.constructor.call(this, t)
		};
	l.ATTRS = {
		points: null,
		lineWidth: 1,
		radius: 0
	}, i.extend(l, n), i.augment(l, {
		canFill: !0,
		canStroke: !0,
		type: "polygon",
		getDefaultAttrs: function() {
			return l.ATTRS
		},
		__afterSetAttrPoints: function() {
			this.__calculateBox()
		},
		__afterSetAttrLineWidth: function() {
			this.__calculateBox()
		},
		__setAttrRadius: function(t, e) {
			return t >= 0 ? t : (Common.warn("radius \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"),
				e)
		},
		__afterSetAttrAll: function() {
			this.__calculateBox()
		},
		__calculateBox: function() {
			var t = this,
				e = t.__attrs,
				r = e.points,
				n = e.lineWidth;
			if (r && 0 !== r.length) {
				var a = 1 / 0,
					c = 1 / 0,
					s = -(1 / 0),
					l = -(1 / 0);
				i.each(r, function(t) {
					var e = t[0],
						r = t[1];
					a > e && (a = e), e > s && (s = e), c > r && (c = r), r > l && (l = r)
				});
				var o = n / 2;
				t.set("box", {
					minX: a - o,
					minY: c - o,
					maxX: s + o,
					maxY: l + o
				})
			}
		},
		isPointInPath: function(t, e) {
			var r = this,
				i = r.hasFill(),
				n = r.hasStroke();
			return i && n ? r.__isPointInFill(t, e) || r.__isPointInStroke(t, e) : i ? r.__isPointInFill(t, e) : n ? r.__isPointInStroke(t, e) : !1
		},
		__isPointInFill: function(t, e) {
			var r = this,
				i = r.get("context");
			return r.createPath(), i.isPointInPath(t, e)
		},
		__isPointInStroke: function(t, e) {
			var r = this,
				i = r.__attrs,
				n = i.points;
			if (n.length < 2) return !1;
			var c = i.lineWidth,
				s = n.slice(0);
			return n.length >= 3 && s.push(n[0]), a.polyline(s, c, t, e)
		},
		createPath: function() {
			var t, e, r = this,
				n = r.get("context"),
				a = r.__attrs,
				c = a.points,
				s = a.radius,
				l = c.length;
			2 > l || (n.beginPath(), i.each(c, function(a, o) {
				0 !== s && i.equalsArray(c[0], c[l - 1]) && l > 3 ? 0 === o ? (t = r.__getRadiusPathBeginPoint(c[0], c[1], c[l - 2]), n.moveTo(t[0], t[1])) : c[o + 1] ? (e = r.__getRadiusPathEndPoint(c[o - 1], a, c[o + 1]), t = r.__getRadiusPathBeginPoint(a, c[o + 1], c[o - 1]), n.lineTo(e[0], e[1]), n.arcTo(a[0], a[1], t[0], t[1], s)) : (e = r.__getRadiusPathEndPoint(c[l - 2], a, c[1]), t = r.__getRadiusPathBeginPoint(c[0], c[1], c[l - 2]), n.lineTo(e[0], e[1]), n.arcTo(a[0], a[1], t[0], t[1], s)) : 0 === o ? n.moveTo(a[0], a[1]) : n.lineTo(a[0], a[1])
			}), n.closePath())
		},
		__getRadiusPathEndPoint: function(t, e, r) {
			t = {
				x: t[0],
				y: t[1]
			}, e = {
				x: e[0],
				y: e[1]
			}, r = {
				x: r[0],
				y: r[1]
			};
			var i, n = this,
				a = n.__attrs,
				c = (a.points, a.radius),
				l = s.sub(t, e),
				o = s.sub(r, e),
				u = s.angle(l, o),
				h = c / Math.tan(u / 2);
			return l.setLength(h), i = s.add(e, l), [i.x, i.y]
		},
		__getRadiusPathBeginPoint: function(t, e, r) {
			t = {
				x: t[0],
				y: t[1]
			}, e = {
				x: e[0],
				y: e[1]
			}, r = {
				x: r[0],
				y: r[1]
			};
			var i, n = this,
				a = n.__attrs,
				c = (a.points, a.radius),
				l = s.sub(e, t),
				o = s.sub(r, t),
				u = s.angle(l, o),
				h = c / Math.tan(u / 2);
			return l.setLength(h), i = s.add(t, l), [i.x, i.y]
		}
	}), t.exports = l
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(8),
		a = r(7),
		c = r(3),
		s = c.Vector2,
		l = r(33),
		o = function(t) {
			o.superclass.constructor.call(this, t)
		};
	o.ATTRS = {
		points: null,
		lineWidth: 1,
		arrow: !1
	}, i.extend(o, n), i.augment(o, {
		canStroke: !0,
		type: "polyline",
		getDefaultAttrs: function() {
			return o.ATTRS
		},
		__afterSetAttrPoints: function() {
			this.__calculateBox()
		},
		__afterSetAttrLineWidth: function() {
			this.__calculateBox()
		},
		__afterSetAttrAll: function() {
			this.__calculateBox()
		},
		__calculateBox: function() {
			var t = this,
				e = t.__attrs,
				r = e.lineWidth,
				n = e.points;
			if (n && 0 !== n.length) {
				var a = 1 / 0,
					c = 1 / 0,
					s = -(1 / 0),
					l = -(1 / 0);
				i.each(n, function(t) {
					var e = t[0],
						r = t[1];
					a > e && (a = e), e > s && (s = e), c > r && (c = r), r > l && (l = r)
				});
				var o = r / 2;
				this.set("box", {
					minX: a - o,
					minY: c - o,
					maxX: s + o,
					maxY: l + o
				})
			}
		},
		isPointInPath: function(t, e) {
			var r = this,
				i = r.__attrs;
			if (r.hasStroke()) {
				var n = i.points;
				if (n.length < 2) return !1;
				var c = i.lineWidth;
				return a.polyline(n, c, t, e)
			}
			return !1
		},
		createPath: function() {
			var t = this,
				e = t.get("context"),
				r = t.__attrs,
				i = r.points,
				n = r.arrow,
				a = r.lineWidth;
			if (!(i.length < 2)) {
				e.beginPath(), e.moveTo(i[0][0], i[0][1]);
				for (var c = 1, o = i.length - 1; o > c; c++) e.lineTo(i[c][0], i[c][1]);
				if (n) {
					var u = new s(i[o][0] - i[o - 1][0], i[o][1] - i[o - 1][1]),
						h = l.getEndPoint(u, new s(i[o][0], i[o][1]), a);
					e.lineTo(h.x, h.y), l.makeArrow(e, u, h, a)
				} else e.lineTo(i[o][0], i[o][1])
			}
		}
	}), t.exports = o
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(8),
		a = r(7),
		c = (r(4), r(33)),
		s = r(58),
		l = r(3),
		o = l.Vector2,
		u = function(t) {
			u.superclass.constructor.call(this, t)
		};
	u.ATTRS = {
		p1: null,
		p2: null,
		p3: null,
		lineWidth: 1,
		arrow: !1
	}, i.extend(u, n), i.augment(u, {
		canStroke: !0,
		type: "quadratic",
		getDefaultAttrs: function() {
			return u.ATTRS
		},
		__afterSetAttrP1: function() {
			this.__calculateBox()
		},
		__afterSetAttrP2: function() {
			this.__calculateBox()
		},
		__afterSetAttrP3: function() {
			this.__calculateBox()
		},
		__afterSetAttrLineWidth: function() {
			this.__calculateBox()
		},
		__afterSetAttrAll: function() {
			this.__calculateBox()
		},
		__calculateBox: function() {
			var t = this,
				e = t.__attrs,
				r = e.p1,
				n = e.p2,
				a = e.p3;
			if (!(i.isNull(r) || i.isNull(n) || i.isNull(a))) {
				for (var c = e.lineWidth / 2, l = s.extrema(r[0], n[0], a[0]), o = 0, u = l.length; u > o; o++) l[o] = s.at(r[0], n[0], a[0], l[o]);
				l.push(r[0], a[0]);
				for (var h = s.extrema(r[1], n[1], a[1]), o = 0, u = h.length; u > o; o++) h[o] = s.at(r[1], n[1], a[1], h[o]);
				h.push(r[1], a[1]), t.set("box", {
					minX: Math.min.apply(Math, l) - c,
					maxX: Math.max.apply(Math, l) + c,
					minY: Math.min.apply(Math, h) - c,
					maxY: Math.max.apply(Math, h) + c
				})
			}
		},
		isPointInPath: function(t, e) {
			var r = this,
				i = r.__attrs,
				n = i.p1,
				c = i.p2,
				s = i.p3,
				l = i.lineWidth;
			return a.quadraticline(n[0], n[1], c[0], c[1], s[0], s[1], l, t, e)
		},
		createPath: function() {
			var t = this,
				e = t.get("context"),
				r = t.__attrs,
				n = r.p1,
				a = r.p2,
				s = r.p3,
				l = r.lineWidth,
				u = r.arrow;
			if (!(i.isNull(n) || i.isNull(a) || i.isNull(s)) && (e.beginPath(), e.moveTo(n[0], n[1]), e.quadraticCurveTo(a[0], a[1], s[0], s[1]), u)) {
				var h = new o(s[0] - a[0], s[1] - a[1]);
				c.makeArrow(e, h, {
					x: s[0],
					y: s[1]
				}, l)
			}
		},
		getPoint: function(t) {
			var e = this.__attrs;
			return {
				x: s.at(e.p1[0], e.p2[0], e.p3[0], t),
				y: s.at(e.p1[1], e.p2[1], e.p3[1], t)
			}
		}
	}), t.exports = u
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(8),
		a = r(7),
		c = r(13),
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	s.ATTRS = {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radius: 0,
		lineWidth: 1
	}, i.extend(s, n), i.augment(s, {
		canFill: !0,
		canStroke: !0,
		type: "rect",
		getDefaultAttrs: function() {
			return s.ATTRS
		},
		__setAttrWidth: function(t, e) {
			return t >= 0 ? t : (c.warn("width \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
		},
		__setAttrHeight: function(t, e) {
			return t >= 0 ? t : (c.warn("height \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
		},
		__setAttrRadius: function(t, e) {
			return t >= 0 ? t : (c.warn("radius \u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0"), e)
		},
		__afterSetAttrX: function() {
			this.__calculateBox()
		},
		__afterSetAttrY: function() {
			this.__calculateBox()
		},
		__afterSetAttrWidth: function() {
			this.__calculateBox()
		},
		__afterSetAttrHeight: function() {
			this.__calculateBox()
		},
		__afterSetAttrLineWidth: function() {
			this.__calculateBox()
		},
		__afterSetAttrAll: function() {
			this.__calculateBox()
		},
		__calculateBox: function() {
			var t = this,
				e = t.__attrs,
				r = e.x,
				i = e.y,
				n = e.width,
				a = e.height,
				c = e.lineWidth,
				s = c / 2;
			this.set("box", {
				minX: r - s,
				minY: i - s,
				maxX: r + n + s,
				maxY: i + a + s
			})
		},
		isPointInPath: function(t, e) {
			var r = this,
				i = r.hasFill(),
				n = r.hasStroke();
			return i && n ? r.__isPointInFill(t, e) || r.__isPointInStroke(t, e) : i ? r.__isPointInFill(t, e) : n ? r.__isPointInStroke(t, e) : !1
		},
		__isPointInFill: function(t, e) {
			var r = this,
				i = r.__attrs,
				n = (i.x, i.y, i.width, i.height, i.radius, r.get("context"));
			return n ? (r.createPath(), n.isPointInPath(t, e)) : !1
		},
		__isPointInStroke: function(t, e) {
			var r = this,
				i = r.__attrs,
				n = i.x,
				c = i.y,
				s = i.width,
				l = i.height,
				o = i.radius,
				u = i.lineWidth;
			if (0 === o) {
				var h = u / 2;
				return a.line(n - h, c, n + s + h, c, u, t, e) || a.line(n + s, c - h, n + s, c + l + h, u, t, e) || a.line(n + s + h, c + l, n - h, c + l, u, t, e) || a.line(n, c + l + h, n, c - h, u, t, e)
			}
			return a.line(n + o, c, n + s - o, c, u, t, e) || a.line(n + s, c + o, n + s, c + l - o, u, t, e) || a.line(n + s - o, c + l, n + o, c + l, u, t, e) || a.line(n, c + l - o, n, c + o, u, t, e) || a.arcline(n + s - o, c + o, o, 1.5 * Math.PI, 2 * Math.PI, !1, u, t, e) || a.arcline(n + s - o, c + l - o, o, 0, .5 * Math.PI, !1, u, t, e) || a.arcline(n + o, c + l - o, o, .5 * Math.PI, Math.PI, !1, u, t, e) || a.arcline(n + o, c + o, o, Math.PI, 1.5 * Math.PI, !1, u, t, e)
		},
		createPath: function() {
			var t = this,
				e = t.get("context"),
				r = t.__attrs,
				i = r.x,
				n = r.y,
				a = r.width,
				c = r.height,
				s = r.radius;
			e.beginPath(), 0 === s ? (e.moveTo(i, n), e.lineTo(i + a, n), e.lineTo(i + a, n + c), e.lineTo(i, n + c), e.lineTo(i, n)) : (e.moveTo(i + s, n), e.lineTo(i + a - s, n), e.arc(i + a - s, n + s, s, -Math.PI / 2, 0, !1), e.lineTo(i + a, n + c - s), e.arc(i + a - s, n + c - s, s, 0, Math.PI / 2, !1), e.lineTo(i + s, n + c), e.arc(i + s, n + c - s, s, Math.PI / 2, Math.PI, !1), e.lineTo(i, n + s), e.arc(i + s, n + s, s, Math.PI, 3 * Math.PI / 2, !1)), e.closePath()
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(5),
		n = r(8),
		a = r(7),
		c = r(13),
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	s.ATTRS = {
		x: 0,
		y: 0,
		text: null,
		fontSize: 12,
		fontFamily: "sans-serif",
		fontStyle: "normal",
		fontWeight: "normal",
		fontVariant: "normal",
		textAlign: "start",
		textBaseline: "bottom",
		lineWidth: 1
	};
	var l = {
			start: 1,
			right: 1,
			left: 1,
			end: 1,
			center: 1
		},
		o = {
			top: 1,
			middle: 1,
			bottom: 1
		},
		u = {
			normal: 1,
			italic: 1,
			oblique: 1
		},
		h = {
			normal: 1,
			"small-caps": 1
		},
		f = {
			normal: 1,
			bold: 1,
			bolder: 1,
			lighter: 1,
			100: 1,
			200: 1,
			300: 1,
			400: 1,
			500: 1,
			600: 1,
			700: 1,
			800: 1,
			900: 1
		};
	i.extend(s, n), i.augment(s, {
		canFill: !0,
		canStroke: !0,
		type: "text",
		getDefaultAttrs: function() {
			return s.ATTRS
		},
		__setAttrTextAlign: function(t, e) {
			return t in l ? t : e
		},
		__setAttrTextBaseline: function(t, e) {
			return t in o ? t : e
		},
		__setAttrFontSize: function(t, e) {
			return t >= 12 ? t : e
		},
		__setAttrFontStyle: function(t, e) {
			return t in u ? t : e
		},
		__setAttrFontVariant: function(t, e) {
			return t in h ? t : e
		},
		__setAttrFontWeight: function(t, e) {
			return t in f ? t : e
		},
		__assembleFont: function() {
			var t = this,
				e = t.attr("fontSize"),
				r = t.attr("fontFamily"),
				i = t.attr("fontWeight"),
				n = t.attr("fontStyle"),
				a = t.attr("fontVariant");
			t.attr("font", [n, a, i, e + "px", r].join(" "))
		},
		__afterSetAttrFontSize: function(t) {
			var e = this;
			e.attr({
				height: t
			}), e.__assembleFont()
		},
		__afterSetAttrFontFamily: function() {
			this.__assembleFont()
		},
		__afterSetAttrFontWeight: function() {
			this.__assembleFont()
		},
		__afterSetAttrFontStyle: function() {
			this.__assembleFont()
		},
		__afterSetAttrFontVariant: function() {
			this.__assembleFont()
		},
		__afterSetAttrFont: function() {
			this.attr("width", this.measureText())
		},
		__afterSetAttrText: function() {
			this.attr("width", this.measureText())
		},
		__afterSetAttrTextAlign: function() {
			this.__calculateBox()
		},
		__afterSetAttrTextBaseline: function() {
			this.__calculateBox()
		},
		__afterSetAttrX: function() {
			this.__calculateBox()
		},
		__afterSetAttrY: function() {
			this.__calculateBox()
		},
		__afterSetAttrWidth: function() {
			this.__calculateBox()
		},
		__afterSetAttrLineWidth: function() {
			this.__calculateBox()
		},
		__afterSetAttrAll: function(t) {
			var e = this;
			"fontSize" in t && e.attr("height", t.fontSize), ("fontSize" in t || "fontWeight" in t || "fontStyle" in t || "fontVariant" in t || "fontFamily" in t) && e.__assembleFont(), "text" in t && e.__afterSetAttrText(t.text), e.__calculateBox()
		},
		__calculateBox: function() {
			var t = this,
				e = t.__attrs,
				r = e.x,
				i = e.y,
				n = e.width;
			if (n) {
				var a = e.height,
					c = e.textAlign,
					s = e.textBaseline,
					l = e.lineWidth,
					o = {
						x: r,
						y: i - a
					};
				c && ("end" === c || "right" === c ? o.x -= n : "center" === c && (o.x -= n / 2)), s && ("top" === s ? o.y += a : "middle" === s && (o.y += a / 2)), this.set("startPoint", o);
				var u = l / 2;
				this.set("box", {
					minX: o.x - u,
					minY: o.y - u,
					maxX: o.x + n + u,
					maxY: o.y + a + u
				})
			}
		},
		isPointInPath: function(t, e) {
			var r = this,
				i = r.getBBox();
			return r.hasFill() || r.hasStroke() ? a.box(i.minX, i.maxX, i.minY, i.maxY, t, e) : void 0
		},
		drawInner: function() {
			var t = this,
				e = t.get("context"),
				r = t.__attrs,
				n = r.text,
				a = r.x,
				c = r.y;
			i.isNull(n) || (e.beginPath(), t.hasFill() && e.fillText(n, a, c), t.hasStroke() && e.strokeText(n, a, c))
		},
		measureText: function() {
			var t = this,
				e = t.__attrs,
				r = e.text,
				n = e.font;
			if (!i.isNull(r)) {
				var a = c.backupContext;
				a.save(), a.font = n;
				var s = a.measureText(r).width;
				return a.restore(), s
			}
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		this.preSegment = e, this.init(t, e)
	}

	function n(t, e, r) {
		return {
			x: r.x + t,
			y: r.y + e
		}
	}

	function a(t, e) {
		return {
			x: e.x + (e.x - t.x),
			y: e.y + (e.y - t.y)
		}
	}

	function c(t) {
		return Math.sqrt(t[0] * t[0] + t[1] * t[1])
	}

	function s(t, e) {
		return (t[0] * e[0] + t[1] * e[1]) / (c(t) * c(e))
	}

	function l(t, e) {
		return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(s(t, e))
	}

	function o(t, e, r, i, n, a, c) {
		var o = h.mod(h.degreeToRad(c), 2 * Math.PI),
			u = t.x,
			f = t.y,
			d = e.x,
			p = e.y,
			g = Math.cos(o) * (u - d) / 2 + Math.sin(o) * (f - p) / 2,
			y = -1 * Math.sin(o) * (u - d) / 2 + Math.cos(o) * (f - p) / 2,
			v = g * g / (n * n) + y * y / (a * a);
		v > 1 && (n *= Math.sqrt(v), a *= Math.sqrt(v));
		var m = Math.sqrt((n * n * (a * a) - n * n * (y * y) - a * a * (g * g)) / (n * n * (y * y) + a * a * (g * g)));
		r === i && (m *= -1), isNaN(m) && (m = 0);
		var x = m * n * y / a,
			C = m * -a * g / n,
			_ = (u + d) / 2 + Math.cos(o) * x - Math.sin(o) * C,
			O = (f + p) / 2 + Math.sin(o) * x + Math.cos(o) * C,
			S = l([1, 0], [(g - x) / n, (y - C) / a]),
			w = [(g - x) / n, (y - C) / a],
			M = [(-1 * g - x) / n, (-1 * y - C) / a],
			b = l(w, M);
		return s(w, M) <= -1 && (b = Math.PI), s(w, M) >= 1 && (b = 0), 0 === i && b > 0 && (b -= 2 * Math.PI), 1 === i && 0 > b && (b += 2 * Math.PI), [t, _, O, n, a, S, b, o, i]
	}
	var u = r(5),
		h = r(4),
		f = r(3),
		d = r(7),
		p = r(57),
		g = r(58),
		y = r(252),
		v = f.Vector3,
		m = f.Matrix3;
	u.augment(i, {
		init: function(t, e) {
			var r = t[0];
			e = e || {
				endPoint: {
					x: 0,
					y: 0
				}
			};
			var i = /[a-z]/.test(r),
				c = r.toUpperCase(),
				s = t;
			switch (c) {
				case "M":
					if (i) var l = n(s[1], s[2], e.endPoint);
					else var l = {
						x: s[1],
						y: s[2]
					};
					this.command = "M", this.params = [e.endPoint, l], this.subStart = l, this.endPoint = l;
					break;
				case "L":
					if (i) var l = n(s[1], s[2], e.endPoint);
					else var l = {
						x: s[1],
						y: s[2]
					};
					this.command = "L", this.params = [e.endPoint, l], this.subStart = e.subStart, this.endPoint = l;
					break;
				case "H":
					if (i) var l = n(s[1], 0, e.endPoint);
					else var l = {
						x: s[1],
						y: e.endPoint.y
					};
					this.command = "L", this.params = [e.endPoint, l], this.subStart = e.subStart, this.endPoint = l;
					break;
				case "V":
					if (i) var l = n(0, s[1], e.endPoint);
					else var l = {
						x: e.endPoint.x,
						y: s[1]
					};
					this.command = "L", this.params = [e.endPoint, l], this.subStart = e.subStart, this.endPoint = l;
					break;
				case "Q":
					if (i) var u = n(s[1], s[2], e.endPoint),
						h = n(s[3], s[4], e.endPoint);
					else var u = {
							x: s[1],
							y: s[2]
						},
						h = {
							x: s[3],
							y: s[4]
						};
					this.command = "Q", this.params = [e.endPoint, u, h], this.subStart = e.subStart, this.endPoint = h;
					break;
				case "T":
					if (i) var h = n(s[1], s[2], e.endPoint);
					else var h = {
						x: s[1],
						y: s[2]
					};
					if ("Q" === e.command) {
						var u = a(e.params[1], e.endPoint);
						this.command = "Q", this.params = [e.endPoint, u, h], this.subStart = e.subStart, this.endPoint = h
					} else this.command = "TL", this.params = [e.endPoint, h], this.subStart = e.subStart, this.endPoint = h;
					break;
				case "C":
					if (i) var u = n(s[1], s[2], e.endPoint),
						h = n(s[3], s[4], e.endPoint),
						f = n(s[5], s[6], e.endPoint);
					else var u = {
							x: s[1],
							y: s[2]
						},
						h = {
							x: s[3],
							y: s[4]
						},
						f = {
							x: s[5],
							y: s[6]
						};
					this.command = "C", this.params = [e.endPoint, u, h, f], this.subStart = e.subStart, this.endPoint = f;
					break;
				case "S":
					if (i) var h = n(s[1], s[2], e.endPoint),
						f = n(s[3], s[4], e.endPoint);
					else var h = {
							x: s[1],
							y: s[2]
						},
						f = {
							x: s[3],
							y: s[4]
						};
					if ("C" === e.command) {
						var u = a(e.params[2], e.endPoint);
						this.command = "C", this.params = [e.endPoint, u, h, f], this.subStart = e.subStart, this.endPoint = f
					} else this.command = "SQ", this.params = [e.endPoint, h, f], this.subStart = e.subStart, this.endPoint = f;
					break;
				case "A":
					var d = s[1],
						p = s[2],
						g = s[3],
						y = s[4],
						v = s[5];
					if (i) var l = n(s[6], s[7], e.endPoint);
					else var l = {
						x: s[6],
						y: s[7]
					};
					this.command = "A", this.params = o(e.endPoint, l, y, v, d, p, g), this.subStart = e.subStart, this.endPoint = l;
					break;
				case "Z":
					this.command = "Z", this.params = [e.endPoint, e.subStart], this.subStart = e.subStart, this.endPoint = e.subStart
			}
		},
		isInside: function(t, e, r) {
			var i = this,
				n = i.command,
				a = i.params,
				c = i.box;
			if (c && !d.box(c.minX, c.maxX, c.minY, c.maxY, t, e)) return !1;
			switch (n) {
				case "M":
					return !1;
				case "TL":
				case "L":
				case "Z":
					return d.line(a[0].x, a[0].y, a[1].x, a[1].y, r, t, e);
				case "SQ":
				case "Q":
					return d.quadraticline(a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, r, t, e);
				case "C":
					return d.cubicline(a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y, r, t, e);
				case "A":
					var s = a,
						l = s[1],
						o = s[2],
						u = s[3],
						h = s[4],
						f = s[5],
						p = s[6],
						g = s[7],
						y = s[8],
						x = u > h ? u : h,
						C = u > h ? 1 : u / h,
						_ = u > h ? h / u : 1,
						s = new v(t, e, 1),
						O = new m;
					return O.translate(-l, -o), O.rotate(-g), O.scale(1 / C, 1 / _), s.applyMatrix(O), d.arcline(0, 0, x, f, f + p, 1 - y, r, s.x, s.y)
			}
			return !1
		},
		draw: function(t) {
			var e = this.command,
				r = this.params;
			switch (e) {
				case "M":
					t.moveTo(r[1].x, r[1].y);
					break;
				case "TL":
				case "L":
					t.lineTo(r[1].x, r[1].y);
					break;
				case "SQ":
				case "Q":
					var i = r[1],
						n = r[2];
					t.quadraticCurveTo(i.x, i.y, n.x, n.y);
					break;
				case "C":
					var i = r[1],
						n = r[2],
						a = r[3];
					t.bezierCurveTo(i.x, i.y, n.x, n.y, a.x, a.y);
					break;
				case "A":
					var c = r,
						s = c[1],
						l = c[2],
						o = c[3],
						u = c[4],
						h = c[5],
						f = c[6],
						d = c[7],
						p = c[8],
						g = o > u ? o : u,
						y = o > u ? 1 : o / u,
						v = o > u ? u / o : 1;
					t.translate(s, l), t.rotate(d), t.scale(y, v), t.arc(0, 0, g, h, h + f, 1 - p), t.scale(1 / y, 1 / v), t.rotate(-d), t.translate(-s, -l);
					break;
				case "Z":
					t.closePath()
			}
		},
		getBBox: function(t) {
			var e = t / 2,
				r = this.params;
			switch (this.command) {
				case "M":
				case "Z":
					break;
				case "TL":
				case "L":
					this.box = {
						minX: Math.min(r[0].x, r[1].x) - e,
						maxX: Math.max(r[0].x, r[1].x) + e,
						minY: Math.min(r[0].y, r[1].y) - e,
						maxY: Math.max(r[0].y, r[1].y) + e
					};
					break;
				case "SQ":
				case "Q":
					for (var i = g.extrema(r[0].x, r[1].x, r[2].x), n = 0, a = i.length; a > n; n++) i[n] = g.at(r[0].x, r[1].x, r[2].x, i[n]);
					i.push(r[0].x, r[2].x);
					for (var c = g.extrema(r[0].y, r[1].y, r[2].y), n = 0, a = c.length; a > n; n++) c[n] = g.at(r[0].y, r[1].y, r[2].y, c);
					c.push(r[0].y, r[2].y), this.box = {
						minX: Math.min.apply(Math, i) - e,
						maxX: Math.max.apply(Math, i) + e,
						minY: Math.min.apply(Math, c) - e,
						maxY: Math.max.apply(Math, c) + e
					};
					break;
				case "C":
					for (var i = p.extrema(r[0].x, r[1].x, r[2].x, r[3].x), n = 0, a = i.length; a > n; n++) i[n] = p.at(r[0].x, r[1].x, r[2].x, r[3].x, i[n]);
					for (var c = p.extrema(r[0].y, r[1].y, r[2].y, r[3].y), n = 0, a = c.length; a > n; n++) c[n] = p.at(r[0].y, r[1].y, r[2].y, r[3].y, c[n]);
					i.push(r[0].x, r[3].x), c.push(r[0].y, r[3].y), this.box = {
						minX: Math.min.apply(Math, i) - e,
						maxX: Math.max.apply(Math, i) + e,
						minY: Math.min.apply(Math, c) - e,
						maxY: Math.max.apply(Math, c) + e
					};
					break;
				case "A":
					for (var s = r, l = s[1], o = s[2], u = s[3], h = s[4], f = s[5], d = s[6], v = s[7], m = s[8], x = f, C = f + d, _ = y.xExtrema(v, u, h), O = 1 / 0, S = -(1 / 0), w = [x, C], n = 2 * -Math.PI; n <= 2 * Math.PI; n += Math.PI) {
						var M = _ + n;
						1 === m ? M > x && C > M && w.push(M) : M > C && x > M && w.push(M)
					}
					for (var n = 0, a = w.length; a > n; n++) {
						var b = y.xAt(v, u, h, l, w[n]);
						O > b && (O = b), b > S && (S = b)
					}
					for (var k = y.yExtrema(v, u, h), A = 1 / 0, P = -(1 / 0), T = [x, C], n = 2 * -Math.PI; n <= 2 * Math.PI; n += Math.PI) {
						var D = k + n;
						1 === m ? D > x && C > D && T.push(D) : D > C && x > D && T.push(D)
					}
					for (var n = 0, a = T.length; a > n; n++) {
						var I = y.yAt(v, u, h, o, T[n]);
						A > I && (A = I), I > P && (P = I)
					}
					this.box = {
						minX: O - e,
						maxX: S + e,
						minY: A - e,
						maxY: P + e
					}
			}
		}
	}), t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(19),
		a = r(62),
		c = r(21),
		s = function(t) {
			s.superclass.constructor.call(this, t), this._initCalMethod()
		};
	i.extend(s, n), i.augment(s, {
		type: "color",
		names: ["color"],
		colors: null,
		calType: null,
		_initCalMethod: function() {
			var t, e = this.calType;
			t = e && -1 !== e.indexOf("-") ? a.gradient(e) : a[e], this.calMethod = t
		},
		mappingRecord: function(t) {
			var e = this.type,
				r = {},
				i = this.getScale(e),
				n = t[e];
			return n = i.type !== c.I_TYPE ? this.getValue(n) : i.invert(n), r[e] = n, r
		},
		getValue: function(t) {
			var e, r = this.colors;
			if (r) {
				var i, n = this.getScale(this.type);
				if (n.isCategory) {
					var c = n.invert(t);
					i = n.translate(c)
				} else i = parseInt((r.length - 1) * t, 10);
				e = r[i % r.length]
			} else this.calMethod && (e = this.calMethod.call(a, t));
			return e
		}
	}), t.exports = s
}, function(t, e, r) {
	var i = r(19);
	i.Position = r(264), i.Color = r(260), i.Size = r(266), i.Shape = r(265), i.Opacity = r(263), i.Label = r(262), t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(19),
		a = "_origin",
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	i.extend(c, n), i.augment(c, {
		type: "label",
		getLabel: function(t) {
			var e, r = this,
				n = r.scales,
				a = r.callback;
			if (a) {
				var c = [];
				i.each(n, function(e) {
					c.push(t[e.dim])
				}), e = a.apply(null, c)
			} else {
				var s = r.getScale(r.type);
				if (e = t[s.dim], i.isArray(e)) {
					var l = [];
					i.each(e, function(t) {
						l.push(s.getText(t))
					}), e = l
				} else e = s.getText(e)
			}
			return e
		},
		getMappedRecord: function(t) {
			var e = this,
				r = t,
				i = e.type;
			return t[a] && (r = t[a]), t[i] = e.getLabel(r), t
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(21),
		a = r(19),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	i.extend(c, a), i.augment(c, {
		type: "opacity",
		mappingRecord: function(t) {
			var e = this.type,
				r = {},
				i = this.getScale(e),
				a = t[e];
			return a = i.type !== n.I_TYPE ? this.getValue(a) : i.invert(a), r[e] = a, r
		},
		getValue: function(t) {
			return .9 * t + .1
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(19),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	i.extend(a, n), i.augment(a, {
		type: "position",
		names: ["x", "y", "z"],
		_transRecord: function(t) {
			var e, r, n, a = this.coord;
			if (i.isArray(t.x) && i.isArray(t.y)) {
				r = [], n = [];
				for (var c = t.x, s = t.y, l = 0, o = 0; l < c.length && o < s.length; l++, o++) {
					var u = a.convertPoint({
						x: c[l],
						y: s[o]
					});
					r.push(u.x), n.push(u.y)
				}
				e = {
					x: r,
					y: n
				}
			} else i.isArray(t.y) ? (n = [], i.each(t.y, function(e) {
				var c = a.convertPoint({
					x: t.x,
					y: e
				});
				r ? (i.isArray(r) || (r = [r]), r.push(c.x)) : r = c.x, n.push(c.y)
			}), e = {
				x: r,
				y: n
			}) : i.isArray(t.x) ? (r = [], n = [], i.each(t.x, function(e) {
				var i = a.convertPoint({
					x: e,
					y: t.y
				});
				r.push(i.x), n.push(i.y)
			}), e = {
				x: r,
				y: n
			}) : e = a.convertPoint(t);
			return e
		},
		mappingRecord: function(t) {
			var e = this.getDims(),
				r = this.names,
				i = r[1];
			return 1 === e.length && void 0 === t[i] && (t[i] = .1), this._transRecord(t)
		},
		getNames: function() {
			var t = a.superclass.getNames.call(this);
			return 1 === t.length && t.push("y"), t
		},
		setCoord: function(t) {
			this.coord = t
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(21),
		a = r(19),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	i.extend(c, a), i.augment(c, {
		type: "shape",
		shapes: [],
		mappingRecord: function(t) {
			var e = this.type,
				r = {},
				i = this.getScale(e),
				a = t[e];
			return a = i.type !== n.I_TYPE ? this.getValue(a) : i.invert(a), r[e] = a, r
		},
		getValue: function(t) {
			var e, r = this.shapes,
				i = this.getScale(this.type);
			return i.isCategory ? (t = i.invert(t), e = i.translate(t)) : e = parseInt(t * (r.length - 1), 10), r[e % r.length]
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(21),
		a = r(19),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	i.extend(c, a), i.augment(c, {
		type: "size",
		max: 4,
		min: 1,
		mappingRecord: function(t) {
			var e = this.type,
				r = {},
				i = this.getScale(e),
				a = t[e];
			return a = i.type !== n.I_TYPE ? this.getValue(a) : i.invert(a), r[e] = a, r
		},
		getValue: function(t) {
			var e = this.getScale(this.type);
			e.isCategory && (t = e.invert(t), t = e.translate(t) / e.values.length);
			var r = this.max,
				i = this.min;
			return i + (r - i) * t
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(11),
		a = n.Components,
		c = a.Axis,
		s = r(6),
		l = function(t) {
			this.axisCfg = {}, i.mix(this, t)
		};
	i.augment(l, {
		axisCfg: null,
		enable: !0,
		container: null,
		chart: null,
		_isHide: function(t) {
			var e = this.axisCfg;
			return e && e[t] === !1
		},
		_getAxisClass: function(t, e) {
			return t.isRect ? c : "x" === e ? c.Circle : c.Radius
		},
		_getAxisPosition: function(t, e, r, i) {
			var n = t.type,
				a = "";
			return t.isRect ? ("mirror" === i ? "x" === e && (a = "bottom") : "x" === e && (a = "bottom"), "y" === e && (a = r ? "right" : "left")) : a = "clock" === n ? "clock" : "gauge" === n ? "gauge" : "x" === e ? t.isTransposed ? "radius" : "circle" : t.isTransposed ? "circle" : "radius", a
		},
		_getAxisCfg: function(t, e, r, n, a) {
			var c = this,
				l = r.rows,
				o = r.cols,
				u = r.rowIndex,
				h = r.colIndex,
				f = r.type,
				d = c.axisCfg,
				p = {},
				g = c._getAxisPosition(t, n, a, f),
				y = t.getHeight(),
				v = t.type;
			if ("cartesian" !== v || 1 === l && 1 === o ? "cartesian" === v && (p.title = {
					text: e.alias || e.dim
				}) : (p.title = {
					text: e.alias || e.dim
				}, "tree" === f ? ("y" === n && 0 !== r.originColIndex && 0 !== h || "x" === n && r.children) && (p.labels = null, p.title = null) : "circle" === f ? (p.labels = null, p.title = null) : ("mirror" !== f && "y" === n && (0 !== h && "left" === g || h !== o - 1 && "right" === g) && (p.labels = null, p.title = null), "rect" === f ? "x" === n && 0 !== u && (p.labels = null, p.title = null) : "list" === f ? "x" === n && u !== l - 1 && o * u + h + 1 + o <= r.count && (p.labels = null, p.title = null) : "mirror" === f && "x" === n && (1 === l && 1 === h || 2 === l && 0 === u) && (p.labels = null, p.title = null)), "y" === n && p.title && u !== Math.floor(l / 2) && (p.title = null), "x" === n && p.title && h !== Math.floor(o / 2) && (p.title = null)), p = i.mix(!0, {}, s.axis[g], p, d[e.dim]), p.ticks = e.getTicks(), t.isPolar && !e.isCategory && "x" === n && ("clock" === t.type ? p.ticks[0].text = "" : "gauge" !== t.type && p.ticks.pop()), "y" === n) {
				var m = p.ticks,
					x = m.length,
					C = 16;
				if (C > y / x) {
					var _ = [],
						O = Math.floor(y / C) + 1,
						S = Math.floor(x / O);
					1 > S && (S = 1), _.push(m[0]);
					for (var w = S; x - 2 >= w; w += S) _.push(m[w]);
					_.push(m[x - 1]), p.ticks = _
				}
			}
			return p.coord = t, p.labels && i.isNull(p.labels.autoRotate) && (p.labels.autoRotate = !0), p
		},
		_drawAxis: function(t, e, r, i, n, a) {
			var c = this.container,
				s = this._getAxisClass(t, i),
				l = this._getAxisCfg(t, e, r, i, a);
			return "y" === i && n && "circle" === n.get("type") && (l.circle = n), c.addGroup(s, l)
		},
		createAxis: function(t, e, r) {
			var n = this;
			if (n.enable) {
				var a = t.get("coord"),
					c = a.type,
					s = n.chart.get("facets"),
					l = s[t.get("index")];
				if ("theta" !== c && ("polar" !== c || !a.isTransposed)) {
					var o;
					e && !n._isHide(e.dim) && (o = n._drawAxis(a, e, l, "x")), r && r.length && i.each(r, function(t, e) {
						n._isHide(t.dim) || n._drawAxis(a, t, l, "y", o, e)
					})
				}
			}
		}
	}), t.exports = l
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(73),
		a = function(t) {
			i.mix(this, t), this.resetActions()
		};
	i.augment(a, {
		type: "rect",
		coordCfg: {},
		actions: [],
		_execActions: function(t) {
			var e = this.actions;
			i.each(e, function(e) {
				var r = e[0];
				t[r](e[1], e[2])
			})
		},
		hasAction: function(t) {
			var e = this.actions,
				r = !1;
			return i.each(e, function(e) {
				return t === e[0] ? (r = !0, !1) : void 0
			}), r
		},
		createCoord: function(t, e) {
			var r, a, c = this,
				s = c.type || "rect",
				l = i.mix({
					start: t,
					end: e
				}, c.coordCfg);
			return "theta" === s ? (r = n.Polar, c.hasAction("transpose") || c.transpose(), a = new r(l), a.type = s) : (r = n[i.ucfirst(s)] || n.Rect, a = new r(l)), c._execActions(a), a
		},
		rotate: function(t) {
			var e = this.actions;
			return t = t * Math.PI / 180, e.push(["rotate", t]), this
		},
		reflect: function(t) {
			var e = this.actions;
			return e.push(["reflect", t]), this
		},
		scale: function(t, e) {
			var r = this.actions;
			return r.push(["scale", t, e]), this
		},
		transpose: function() {
			var t = this.actions;
			return t.push(["transpose"]), this
		},
		resetActions: function() {
			return this.actions = [], this
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = i.getRatio(),
		a = function(t) {
			i.mix(this, t)
		};
	i.augment(a, {
		chart: null,
		_getCanvas: function() {
			var t = this.chart;
			return t.get("frontCanvas")
		},
		_getPointInfo: function(t) {
			var e = this.chart,
				r = {
					x: t.x / n,
					y: t.y / n
				},
				i = e.getViewByPoint(r);
			return r.view = i, r
		},
		_getEventObj: function(t, e, r) {
			return {
				x: e.x,
				y: e.y,
				target: t.target,
				toElement: t.event.toElement,
				view: r
			}
		},
		bindEvents: function() {
			var t = this,
				e = t._getCanvas();
			e.on("canvas-mousemove", i.wrapBehavior(t, "onMove")), e.on("canvas-mouseleave", i.wrapBehavior(t, "onOut")), e.on("canvas-click", i.wrapBehavior(t, "onClick"))
		},
		onOut: function(t) {
			var e = this,
				r = e.chart,
				i = e._getPointInfo(t);
			r.fire("plotleave", e._getEventObj(t, i, e.curView))
		},
		onMove: function(t) {
			var e = this,
				r = e.chart,
				i = e._getPointInfo(t),
				n = e.curView;
			n !== i.view && (i.view && r.fire("plotenter", e._getEventObj(t, i, i.view)), n && r.fire("plotleave", e._getEventObj(t, i, n))), i.view && r.fire("plotmove", e._getEventObj(t, i, i.view)), e.curView = i.view
		},
		onClick: function(t) {
			var e = this,
				r = e.chart,
				i = e._getPointInfo(t);
			if (i.view) {
				for (var n, a, c = i.view, s = r.get("geoms"), l = e._getEventObj(t, i, c), o = s.length - 1; o >= 0 && (a = s[o], !(n = a.getSingleShape(i))); o--);
				n && (l.shape = n, l.geom = a, l.data = n.get("origin")), r.fire("plotclick", l), a && n && a.allowSelected && a.allowSelected() && (n.get("selected") ? a.setSelected(null, c) : a.setSelected(n.get("origin"), c))
			}
		},
		clearEvents: function() {
			var t = this,
				e = t._getCanvas();
			e.off("canvas-mousemove", i.getWrapBehavior(t, "onMove")), e.off("canvas-mouseleave", i.getWrapBehavior(t, "onClick"))
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(280),
		a = function(t) {
			i.mix(this, t)
		};
	i.augment(a, {
		plotContainer: null,
		facetCfg: {},
		_getFacetClass: function(t) {
			return t = i.ucfirst(t), n[t]
		},
		createFacets: function(t) {
			var e = this.facetCfg,
				r = this._getFacetClass(e.type),
				i = new r(e),
				n = i.generateFacets(t),
				a = this.plotContainer,
				c = a.addGroup();
			return i.drawTitles(n, c), n
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(312),
		a = r(6),
		c = ["text", "tag"],
		s = function(t) {
			i.mix(this, t), this.guides = []
		};
	i.augment(s, {
		guides: null,
		xScale: null,
		yScale: null,
		backPlot: null,
		frontPlot: null,
		_addGuide: function(t) {
			this.guides.push(t)
		},
		_getDefault: function() {
			return {
				xScale: this.xScale,
				yScale: this.yScale
			}
		},
		setScale: function(t, e) {
			var r = this.guides;
			this.xScale = t, this.yScale = e, i.each(r, function(r) {
				r.xScale = t, r.yScale = e
			})
		},
		line: function(t, e, r) {
			var c = {
				type: "line",
				from: t,
				to: e,
				cfg: i.mix({}, a.guide.line, r)
			};
			i.mix(c, this._getDefault());
			var s = new n.Line(c);
			return this._addGuide(s), this
		},
		text: function(t, e, r) {
			var c = {
				type: "text",
				position: t,
				text: e,
				cfg: i.mix({}, a.guide.text, r)
			};
			i.mix(c, this._getDefault());
			var s = new n.Text(c);
			return this._addGuide(s), this
		},
		image: function(t, e, r) {
			var a = {
				type: "image",
				start: t
			};
			i.isArray(e) && (a.end = e), i.isObject(e) && (r = e), r && (a.cfg = r), i.mix(a, this._getDefault());
			var c = new n.Image(a);
			return this._addGuide(c), this
		},
		rect: function(t, e, r) {
			var c = {
				type: "rect",
				start: t,
				end: e,
				cfg: i.mix({}, a.guide.rect, r)
			};
			i.mix(c, this._getDefault());
			var s = new n.Rect(c);
			return this._addGuide(s), this
		},
		arc: function(t, e, r) {
			var c = {
				type: "arc",
				start: t,
				end: e,
				cfg: i.mix({}, a.guide.arc, r)
			};
			i.mix(c, this._getDefault());
			var s = new n.Arc(c);
			return this._addGuide(s), this
		},
		tag: function(t, e, r, c) {
			var s = {
				type: "tag",
				from: t,
				to: e,
				text: r,
				cfg: i.mix({}, a.guide.tag, c)
			};
			i.mix(s, this._getDefault());
			var l = new n.Tag(s);
			return this._addGuide(l), this
		},
		paint: function(t, e, r) {
			var n = this.guides;
			e = e || this.backPlot, r = r || this.frontPlot, i.each(n, function(n) {
				i.inArray(c, n.type) ? n.paint(t, r) : n.paint(t, e)
			})
		},
		clear: function() {
			return this.guides = [], this
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(268),
		a = r(267),
		c = r(274),
		s = r(275),
		l = r(273),
		o = r(271),
		u = r(269),
		h = r(270),
		f = function(t) {
			i.mix(this, t)
		};
	i.augment(f, {
		chart: null,
		_initEvent: function() {
			var t = this.chart,
				e = new u({
					chart: t
				});
			e.bindEvents(), t.set("eventAssist", e)
		},
		_initScale: function() {
			var t = this.chart,
				e = new c({
					defs: t.get("colDefs")
				});
			t.set("scaleAssist", e)
		},
		_initCoord: function() {
			var t = this.chart,
				e = new n;
			t.set("coordAssist", e)
		},
		_initAxis: function() {
			var t = this.chart,
				e = new a({
					chart: t,
					container: t.get("backPlot")
				});
			t.set("axisAssist", e)
		},
		_initLegend: function() {
			var t = this.chart,
				e = new l({
					chart: t
				});
			t.set("legendAssist", e)
		},
		_initTooltip: function() {
			var t = this.chart,
				e = new s({
					chart: t
				});
			t.set("tooltipAssist", e)
		},
		_initGuide: function() {
			var t = this.chart,
				e = new o({
					backPlot: t.get("backPlot"),
					frontPlot: t.get("frontCanvas")
				});
			t.set("guideAssist", e)
		},
		_initFacet: function() {
			var t = this.chart,
				e = new h({
					plotContainer: t.get("plotContainer"),
					facetCfg: t.get("facetCfg")
				});
			t.set("facetAssist", e)
		},
		initAssists: function() {
			this._initEvent(), this._initScale(), this._initCoord(), this._initAxis(), this._initLegend(), this._initTooltip(), this._initGuide(), this._initFacet()
		}
	}), t.exports = f
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(11),
		a = n.Components,
		c = a.Legend,
		s = r(6),
		l = r(60),
		o = 16,
		u = 25,
		h = function(t) {
			i.mix(this, t), this.legendCfg = {}, this.reset();
			var e = this.chart;
			this.container = e.get("frontCanvas"), this.plotRange = e.get("plotRange")
		};
	i.augment(h, {
		plotRange: null,
		container: null,
		chart: null,
		enable: !0,
		position: "right",
		legendCfg: {},
		_isFiltered: function(t, e, r) {
			if (!t.isCategory) return !0;
			var n = !1;
			return r = t.invert(r), i.each(e, function(e) {
				return n = n || t.getText(e) === t.getText(r), n ? !1 : void 0
			}), n
		},
		_getLayoutType: function() {
			var t = this.position;
			return "right" === t || "left" === t ? "vertical" : "horizontal"
		},
		_getFilterVals: function(t) {
			var e = this.chart,
				r = e.get("filters");
			return r[t]
		},
		_bindEvent: function(t, e) {
			var r = this,
				n = r.chart,
				a = e.dim;
			t.on("itemchecked", function(t) {
				var e = t.item.get("value"),
					i = r._getFilterVals(a);
				i.push(e), n.repaint()
			}), t.on("itemunchecked", function(t) {
				var c = t.item.get("value"),
					s = r._getFilterVals(a);
				s || (s = e.values.slice(0)), i.remove(s, c), n.filter(a, s), n.repaint()
			})
		},
		_getRegion: function(t) {
			var e = 0,
				r = 0;
			return i.each(t, function(t) {
				var i = t.getBBBox();
				e < i.width && (e = i.width), r += i.width
			}), {
				maxWidth: e,
				totalWidth: r
			}
		},
		_alignLegend: function(t, e, r) {
			var i = this,
				n = i.container,
				a = n.get("canvas"),
				c = i.position,
				s = a.get("width"),
				l = a.get("height"),
				h = i.plotRange,
				f = 0,
				d = 0,
				p = t.get("dx") || 0,
				g = t.get("dy") || 0,
				y = t.getBBBox();
			if ("left" === c || "right" === c) {
				var v = r.maxWidth;
				h ? (l = h.br.y, f = "left" === c ? o : h.br.x + o) : f = "left" === c ? o : s - v + o, d = l - y.height, e && (d = e.get("y") - y.height - u)
			} else {
				var m = 0;
				h && (m = h.bl.x + (h.getWidth() - r.totalWidth) / 2), f = m, d = "top" === c ? o : l - y.height - o, e && (f = e.get("x") + e.getBBBox().width + u)
			}
			t.move(f + p, d + g)
		},
		addMixedLegend: function(t) {
			var e = this;
			if (!e.enable) return null;
			var r = e.container,
				n = e.position,
				a = e.legendCfg,
				o = e.legends;
			i.each(t, function(t) {
				t.type = null, t.marker = l.Point.getMarkerCfg("point", t), t.checked = !0
			});
			var u = r.addGroup(c, i.mix({}, {
				checkable: !1,
				layout: e._getLayoutType(),
				items: t,
				word: {
					fill: "#333"
				}
			}, s.legend[n], a));
			return o.push(u), u
		},
		addLegend: function(t, e, r, i) {
			var n = this;
			if (!n.enable) return null;
			var a = n.legendCfg,
				c = t.dim;
			return a && a[c] === !1 ? null : t.isLinear && "color" === e.type ? n._addContinuousLegend(t, e) : n._addCategroyLegend(t, e, r, i)
		},
		_addContinuousLegend: function(t, e) {
			var r, n, a, l, o, u = this,
				h = u.legends,
				f = u.position,
				d = u.container,
				p = u.legendCfg,
				g = t.dim,
				y = t.getTicks(),
				v = [],
				m = u._getLayoutType();
			return i.each(y, function(t) {
				r = t.value, n = e.getMappingValue(r), v.push({
					name: t.text,
					color: n,
					value: r
				}), 0 === r && (l = !0), 1 === r && (o = !0)
			}), l || v.push({
				name: t.getText(t.invert(0)),
				color: e.getMappingValue(0),
				value: 0
			}), o || v.push({
				name: t.getText(t.invert(1)),
				color: e.getMappingValue(1),
				value: 1
			}), a = d.addGroup(c.Continuous, i.mix({}, {
				titleText: t.alias || t.dim,
				checkable: t.isCategory,
				layout: m,
				theme: "gradient",
				items: v
			}, s.legend[f], s.legend.size, p[g] || p)), h.push(a), a
		},
		_addCategroyLegend: function(t, e, r, n) {
			var a, o = this,
				u = t.dim,
				h = o.legendCfg,
				f = o.legends,
				d = o.position,
				p = o.container,
				g = [],
				y = t.getTicks(),
				v = "point",
				m = "point",
				x = o._getLayoutType();
			i.each(y, function(c) {
				var s = c.text,
					u = c.value,
					h = t.invert(u),
					f = {
						isInCircle: r.isInCircle()
					},
					d = n ? o._isFiltered(t, n, u) : !0,
					p = e.getMappingValue(u);
				"color" === e.type ? f.color = p : "shape" === e.type ? (v = r.get("shapeType"), m = p) : "size" === e.type && (a = p);
				var y = l.createShape(v),
					x = y.getMarkerCfg(m, f);
				i.isNull(a) || (x.radius = a), g.push({
					name: s,
					checked: d,
					type: null,
					marker: x,
					value: h
				})
			});
			var C = p.addGroup(c, i.mix({}, {
				titleText: t.alias || t.dim,
				checkable: t.isCategory,
				layout: x,
				items: g,
				word: {
					fill: "#333"
				}
			}, s.legend[d], h[u] || h));
			return o._bindEvent(C, t), f.push(C), C
		},
		alignLegends: function() {
			var t = this,
				e = t.legends,
				r = t._getRegion(e);
			return i.each(e, function(i, n) {
				var a = e[n - 1];
				t._alignLegend(i, a, r)
			}), this
		},
		reset: function() {
			var t = this,
				e = t.legends;
			i.each(e, function(t) {
				t.remove()
			}), this.legends = []
		}
	}), t.exports = h
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(21),
		a = r(40),
		c = r(2),
		s = r(6),
		l = {
			LINEAR: "linear",
			CAT: "cat",
			TIME: "time"
		},
		o = function(t) {
			i.mix(this, t), this.defs = this.defs || {}
		};
	i.augment(o, {
		defs: null,
		_addNewCol: function(t, e, r) {
			var n = this,
				a = e.dims,
				c = [];
			i.each(a, function(t) {
				var e = n._getDefaultType(t, r);
				if (0 === c.length) c.push(e);
				else if (!i.inArray(c, e)) throw new Error('Sorry, the values that are involved in "+" must be of the same type.')
			}), e.type = c[0];
			var s = [];
			i.each(a, function(t) {
				s.push(r.colArray(t))
			});
			for (var l = [], o = 0; o < s[0].length; o++) {
				l[o] = [];
				for (var u = 0; u < a.length; u++) l[o].push(s[u][o])
			}
			r.addCol(t, l)
		},
		_getDefs: function() {
			var t = this.defs;
			return i.mix(!0, {}, s.scales, t)
		},
		_getScaleCfg: function(t, e, r) {
			var i = {
				dim: e
			};
			if (r.contains(e)) {
				var a = c.values(r, e);
				i.values = a, n.isCategory(t) || (i.min = c.min(r, e), i.max = c.max(r, e), "time" === t ? i.nice = !1 : i.nice = !0)
			}
			return i
		},
		_getDefaultType: function(t, e) {
			var r = l.LINEAR,
				n = c.values(e, t),
				s = n[0];
			return i.isArray(s) && (s = s[0]), a.isDateString(s) ? r = l.TIME : i.isString(s) && (r = l.CAT), r
		},
		_syncScales: function(t, e) {
			t.isCategory ? t.change({
				values: e.values,
				ticks: e.ticks
			}) : "identity" !== t.type && t.change({
				min: e.min,
				max: e.max,
				ticks: e.ticks,
				values: e.values
			})
		},
		createDefaultScale: function(t, e) {
			var r = this._getDefaultType(t, e),
				i = this._getScaleCfg(r, t, e);
			return n[r](i)
		},
		createScale: function(t, e) {
			var r, a = this,
				c = a._getDefs();
			if (i.isNumber(t)) r = n.I({
				value: t,
				dim: t.toString()
			});
			else if (c[t] || -1 !== i.indexOf(e.colNames(), t))
				if (c[t]) {
					var s = c[t];
					s.dims && a._addNewCol(t, s, e);
					var l = s.type || a._getDefaultType(t, e),
						o = a._getScaleCfg(l, t, e);
					i.mix(o, s), r = n[l](o)
				} else r = a.createDefaultScale(t, e);
			else r = n.I({
				value: t,
				dim: t
			});
			return r
		},
		sortScales: function(t, e, r) {
			var n = this;
			return r ? (t = c.sortBy(t, r), void i.each(e, function(e, r) {
				var i = e.type;
				if ("identity" !== i && t.contains(r)) {
					var a = n.createScale(r, t);
					e.values = a.values
				}
			})) : null
		},
		trainScales: function(t, e) {
			var r = this;
			i.each(e, function(e) {
				var i = e.type,
					n = e.dim;
				if ("identity" !== i && t.contains(n)) {
					var a = r.createScale(n, t);
					r._syncScales(e, a)
				}
			})
		},
		resetScales: function(t, e) {
			var r = this;
			i.each(e, function(e, i) {
				var n = r.createScale(i, t);
				r._syncScales(e, n)
			})
		},
		_getFilterFunction: function(t, e) {
			var r, n = t.dim;
			return r = t.isCategory ? function(r) {
				var a = !1;
				return i.each(e, function(e) {
					var i = r[n];
					return a = a || t.getText(e) === t.getText(i), a ? !1 : void 0
				}), a
			} : function(t) {
				var r = t[n];
				return i.inArray(e, r)
			}
		},
		filterData: function(t, e, r) {
			var n = this,
				a = [];
			i.each(e, function(t, e) {
				var i = r[e];
				if (t && i) {
					var c = n._getFilterFunction(i, t);
					a.push(c)
				}
			});
			var s = t;
			return a.length && (s = c.filter(t, function(t) {
				var e = !0;
				return i.each(a, function(r) {
					e = e && r(t)
				}), e
			})), s
		},
		processCatScale: function(t, e) {
			var r = this,
				n = r._getDefs();
			return i.each(e, function(e, r) {
				var a = e.type;
				if (e.isCategory && "timeCat" !== a && t.contains(r)) {
					var c = n[r];
					if (c && !c.hasOwnProperty("values") || !c) {
						var s = t.colArray(r);
						i.each(s, function(t, e) {
							s[e] = t.toString()
						}), t.colReplace(r, s)
					}
				}
			}), t
		}
	}), t.exports = o
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		if (!t) return !1;
		var r = "";
		return r = s.isNull(t.className.baseVal) ? t.className : t.className.baseVal, -1 !== r.indexOf(e)
	}

	function n(t, e) {
		for (var r = t.parentNode, n = !1; r && r !== document.body;) {
			if (i(r, e)) {
				n = !0;
				break
			}
			r = r.parentNode
		}
		return n
	}

	function a(t, e) {
		var r = -1;
		return s.each(t, function(t, i) {
			return t.title === e.title && t.name === e.name && t.value === e.value && t.color === e.color ? (r = i, !1) : void 0
		}), r
	}

	function c(t) {
		var e = [];
		return s.each(t, function(t) {
			var r = a(e, t); - 1 === r ? e.push(t) : e[r] = t
		}), e
	}
	var s = r(1),
		l = r(6),
		o = r(11),
		u = o.Components,
		h = u.Tooltip,
		f = ["line", "area", "path", "areaStack"],
		d = ["line", "area"],
		p = function(t) {
			s.mix(this, t)
		};
	s.augment(p, {
		enable: !0,
		cfg: null,
		tooltip: null,
		markerGroup: null,
		chart: null,
		timeStamp: 0,
		get: function(t) {
			return this[t]
		},
		set: function(t, e) {
			this[t] = e
		},
		_showMarkers: function(t, e) {
			var r = this,
				i = r.get("markerGroup");
			i.setMatrix(e.get("matrix").clone()), i.clear(), s.each(t, function(t) {
				var e = t.point,
					r = s.mix({}, i.get("marker"), {
						x: s.isArray(e.x) ? e.x[e.x.length - 1] : e.x,
						y: s.isArray(e.y) ? e.y[e.y.length - 1] : e.y,
						stroke: t.color
					});
				i.addShape("Marker", {
					attrs: r
				})
			}), i.show()
		},
		_getCanvas: function() {
			return this.chart.get("frontCanvas")
		},
		_setTooltip: function(t, e, r) {
			var i = this,
				n = i.get("tooltip"),
				a = i.get("prePoint"),
				l = i._getCanvas();
			if (!a || a.x !== e.x || a.y !== e.y) {
				r = c(r), i.set("prePoint", e);
				var o = i.chart,
					u = s.isArray(e.x) ? e.x[e.x.length - 1] : e.x,
					h = s.isArray(e.y) ? e.y[e.y.length - 1] : e.y;
				n.get("visible") || (n.show(), o.fire("tooltipshow", {
					x: u,
					y: h,
					tooltip: n
				})), o.fire("tooltipchange", {
					tooltip: n,
					x: u,
					y: h,
					items: r
				}), n.setContent(t, r), n.setPosition(u, h), l.draw()
			}
		},
		_clearActive: function() {
			var t = this,
				e = t.get("chart"),
				r = e.get("geoms");
			s.each(r, function(t) {
				t.clearShapeActived()
			})
		},
		_bindEvent: function() {
			var t = this,
				e = t.chart;
			e.on("plotmove", s.wrapBehavior(t, "onMouseMove")), e.on("plotleave", s.wrapBehavior(t, "onMouseOut"))
		},
		_offEvent: function() {
			var t = this,
				e = t.chart;
			e.off("plotmove", s.getWrapBehavior(t, "onMouseMove")), e.off("plotleave", s.getWrapBehavior(t, "onMouseOut"))
		},
		_setTooltipCrosshairs: function() {
			var t = this,
				e = s.mix({}, l.tooltip),
				r = t.get("chart"),
				i = r.get("geoms"),
				n = [];
			return s.each(i, function(t) {
				var e = t.get("type"); - 1 === s.indexOf(n, e) && n.push(e)
			}), i.length && "cartesian" === i[0].get("coord").type && 1 === n.length && s.indexOf(d, n[0]) > -1 && s.mix(e, {
				crosshairs: !0
			}), e
		},
		renderTooltip: function() {
			var t = this;
			if (!t.get("tooltip")) {
				var e = t.get("chart"),
					r = t.get("cfg"),
					i = t._setTooltipCrosshairs();
				r = s.mix({
					plotRange: e.get("plotRange"),
					visible: !1,
					capture: !1
				}, i, r);
				var n = t._getCanvas();
				if (!t.get("markerGroup")) {
					var a = n.addGroup({
						zIndex: 4,
						capture: !1,
						marker: l.tooltipMarker
					});
					t.set("markerGroup", a)
				}
				var c = n.addGroup(h, r);
				n.sort(), t.set("tooltip", c), t._bindEvent()
			}
		},
		showTooltip: function(t, e) {
			var r = this;
			if (e && t) {
				var i = e.get("geoms"),
					n = e.get("coord"),
					a = [],
					c = [];
				if (s.each(i, function(e) {
						var r = e.get("frames");
						if (e.isShareTooltip()) {
							var i = [];
							s.each(r, function(r) {
								var n = e.findPoint(t, r);
								if (n) {
									i.push(n);
									var l = e.getTipItems(n);
									a = a.concat(l);
									var o = e.get("type"); - 1 !== s.indexOf(f, o) && (c = c.concat(l))
								}
							}), i.length && e.setActiveByPoint(i[0])
						} else {
							var n = e.getSingleShape(t, r);
							n && (a = e.getTipItems(n.get("origin")), e.setShapesActive([n]))
						}
					}), c.length && r._showMarkers(c, n), a.length) {
					var l = a[0];
					if (c.length) {
						t = l.point;
						var o = s.isArray(t.x) ? t.x[t.x.length - 1] : t.x,
							u = s.isArray(t.y) ? t.y[t.y.length - 1] : t.y;
						t = n.trans(o, u, 1)
					}
					var h = l.title || l.name;
					r._setTooltip(h, t, a)
				}
			}
		},
		hideTooltip: function() {
			var t = this,
				e = t.get("tooltip"),
				r = t.chart;
			t.set("prePoint", null), e.hide();
			var i = t.get("markerGroup");
			i.hide(), t._clearActive(), r.fire("tooltiphide", {
				tooltip: e
			})
		},
		onMouseMove: function(t) {
			var e = this.get("timeStamp"),
				r = +new Date;
			if (this.enable && t.view) {
				var i = this,
					n = {
						x: t.x,
						y: t.y
					};
				r - e > 16 && (i.showTooltip(n, t.view), this.set("timeStamp", r))
			}
		},
		onMouseOut: function(t) {
			var e = this,
				r = e.get("tooltip"),
				a = e._getCanvas();
			t && t.target !== a || t && t.toElement && r.get("custom") && (i(t.toElement, "ac-tooltip") || n(t.toElement, "ac-tooltip")) || e.hideTooltip()
		},
		isInFacet: function(t, e) {
			var r = t.view.get("coord"),
				i = r.invert(e);
			return i.x >= 0 && i.y >= 0
		},
		clear: function() {
			var t = this,
				e = t.get("tooltip"),
				r = t.get("markerGroup");
			e && e.remove(), r && r.remove(), t.set("tooltip", null), t.set("markerGroup", null), t._offEvent()
		}
	}), t.exports = p
}, function(t, e, r) {
	"use strict";

	function i(t) {
		var e = t.get("el");
		e.style.position = "absolute", e.style.top = 0, e.style.left = 0, t.set("fontFamily", p.fontFamily)
	}

	function n(t, e) {
		var r = new h(t);
		return e && i(r), r
	}

	function a(t, e, r) {
		var i = (t - e) / (r - e);
		return i >= 0 && 1 >= i
	}

	function c(t, e) {
		var r = t.type,
			i = !1;
		if ("theta" === r) {
			var n = t.get("start"),
				c = t.get("end");
			i = a(e.x, n.x, c.x) && a(e.y, n.y, c.y)
		} else {
			var s = t.invert(e);
			i = s.x >= 0 && s.y >= 0 && s.x <= 1 && s.y <= 1
		}
		return i
	}

	function s(t) {
		var e = ["polar", "plus", "theta"];
		return d.inArray(e, t.type)
	}

	function l(t) {
		var e = t.coordCfg;
		return !e || d.isNull(e.startAngle) || d.isNull(e.endAngle) || !(e.endAngle - e.startAngle < 2 * Math.PI)
	}

	function o(t, e) {
		return function(r) {
			var i = this;
			e && (r = e);
			var n = new v({
				chart: i,
				type: t,
				adjusts: r
			});
			return i._addLayer(n), n
		}
	}
	var u = r(14),
		h = r(11),
		f = r(2),
		d = r(1),
		p = r(6),
		g = r(272),
		y = r(91),
		v = r(277),
		m = r(278),
		x = ["left", "top", "bottom", "right"],
		C = h.Components,
		_ = C.Plot,
		O = function(t) {
			O.superclass.constructor.call(this, t), this._init()
		};
	O.ATTRS = {
		id: null,
		width: null,
		height: null,
		data: null,
		plotCfg: null,
		facetCfg: null,
		layers: [],
		views: [],
		geoms: [],
		filters: {},
		scales: {}
	}, d.extend(O, u), d.augment(O, {
		_init: function() {
			this.set("plotCfg", d.mix({}, p.plotCfg, this.get("plotCfg"))), this.set("facetCfg", d.mix({}, p.facetCfg, this.get("facetCfg")));
			var t = this.get("data");
			this._initData(t), this._initCanvas(), this._initPlot(), this._initAssists(), this.set("geoms", []), this.set("layers", []), this.set("views", []), this.set("scales", {}), this.set("axisCfg", {}), this.set("filters", {})
		},
		_initCanvas: function() {
			var t = this.get("id"),
				e = document.getElementById(t),
				r = this.get("container"),
				i = this.get("width"),
				a = this.get("height");
			if (!e && !r) throw new Error("please specify the canvas container Id !");
			r || (r = d.createDom("<div></div>"), e.appendChild(r));
			var c = d.guid("g-chart");
			r.id = c, r.style.position = "relative";
			var s = {
					width: i,
					height: a,
					containerId: c,
					capture: !1
				},
				l = n(s, !1),
				o = n(s, !0),
				u = n(s, !0);
			this.set("container", r), this.set("backCanvas", l), this.set("canvas", o), this.set("frontCanvas", u)
		},
		_initPlot: function() {
			var t = this.get("canvas"),
				e = t.addGroup(),
				r = this.get("backCanvas"),
				i = r.addGroup(),
				n = this.get("plotCfg"),
				a = r.addGroup(_.Back, n),
				c = a.get("plotRange");
			this.set("plotBack", a), this.set("plotRange", c), this.set("plotContainer", e), this.set("backPlot", i)
		},
		_initAssists: function() {
			var t = new g({
				chart: this
			});
			t.initAssists()
		},
		_initData: function(t) {
			t && (t instanceof f || (t = new f(t)), this.set("data", t))
		},
		_initFacets: function(t, e, r) {
			var i = this.get("filters");
			t = r.filterData(t, i, e);
			var n = this.get("facetCfg");
			n.plotRange = this.get("plotRange"), n.facetTitle = d.mix({}, p.facetCfg.facetTitle, n.facetTitle);
			var a = this.get("facetAssist");
			a.facetCfg = n;
			var c = a.createFacets(t);
			return c
		},
		_addLayer: function(t) {
			this.get("layers").push(t)
		},
		_clearInner: function() {
			var t = this.get("geoms");
			return d.each(t, function(t) {
				t.destroy()
			}), this.set("geoms", []), this.set("views", []), this.set("facets", []), this.get("legendAssist").reset(), this.get("plotContainer").clear(), this.get("backPlot").clear(), this.get("tooltipAssist").clear(), this.get("frontCanvas").clear(), this
		},
		_trainScales: function(t, e) {
			var r = this.get("scales"),
				i = [];
			d.each(r, function(t) {
				e(t) && i.push(t)
			});
			var n = this.get("scaleAssist");
			n.trainScales(t, i)
		},
		_trainLinearScales: function(t) {
			this._trainScales(t, function(t) {
				return t.isLinear
			})
		},
		_trainCatScales: function(t) {
			var e = this,
				r = e.get("filters");
			e._trainScales(t, function(t) {
				return t.isCategory && !r[t.dim]
			})
		},
		_getYScale: function() {
			var t = this,
				e = t.get("geoms"),
				r = [];
			return d.each(e, function(t) {
				var e = t.getYScale();
				e && -1 === d.indexOf(r, e) && r.push(e)
			}), r
		},
		_renderLegends: function() {
			var t = this.get("legendAssist"),
				e = this.get("geoms"),
				r = this.get("filters"),
				i = this._getYScale(),
				n = [];
			if (d.each(e, function(e) {
					var i = e.getLegendAttr();
					d.each(i, function(i) {
						var a = i.type,
							c = i.getScale(a);
						if ("identity" !== c.type && -1 === d.indexOf(n, c)) {
							n.push(c);
							var s;
							r && r[c.dim] && (s = r[c.dim]), t.addLegend(c, i, e, s)
						}
					})
				}), !n.length && i.length > 1) {
				var a = [];
				d.each(i, function(t) {
					d.each(e, function(e) {
						if (e.getYScale() === t) {
							var r = {
								name: t.alias || t.dim,
								color: e.getDefaultValue("color")
							};
							return a.push(r), !1
						}
					})
				}), t.addMixedLegend(a)
			}
			t.alignLegends()
		},
		_renderTooltip: function() {
			var t = this.get("tooltipAssist");
			t.renderTooltip()
		},
		source: function(t, e) {
			if (e) {
				var r = this.get("scaleAssist"),
					i = this.get("facetCfg");
				r.defs = e, i.defs = e
			}
			return this._initData(t), this
		},
		coord: function(t, e) {
			var r = this.get("coordAssist");
			return r.type = t, r.coordCfg = e, r.resetActions(), r
		},
		facet: function(t, e) {
			var r = this.get("facetCfg");
			return r.dims = d.isString(t) ? [t] : t, d.mix(r, e), this
		},
		axis: function(t, e) {
			var r = this.get("axisAssist");
			if (t === !1) r.enable = !1;
			else {
				var i = r.axisCfg;
				r.enable = !0, i[t] = e
			}
			return this
		},
		legend: function(t, e) {
			var r = this.get("legendAssist"),
				i = r.legendCfg;
			return r.enable = !0, d.isBoolean(t) ? r.enable = t : d.inArray(x, t) ? r.position = t : d.isObject(t) ? (i = t, r.position = i.position ? i.position : "right") : (i[t] = e, r.position = e.position ? e.position : "right"), r.legendCfg = i, this
		},
		tooltip: function(t, e) {
			var r = this.get("tooltipAssist");
			return d.isObject(t) && (e = t, t = !0), r.enable = t, r.cfg = e, this
		},
		guide: function() {
			return this.get("guideAssist")
		},
		animate: function(t) {
			return this.set("animate", t), this
		},
		filter: function(t, e) {
			var r = this.get("filters");
			return r[t] = e, this.set("filters", r), this
		},
		_processScales: function() {
			var t = this,
				e = t.get("coordAssist"),
				r = t.get("views")[0],
				i = r.getXScale(),
				n = r.getYScales(),
				a = [];
			i && a.push(i), a = a.concat(n);
			var c = s(e) && l(e);
			d.each(a, function(t) {
				if (t.isCategory) {
					var r, i = t.values.length;
					if (1 === i) r = [.5, 1];
					else {
						var n = 1,
							a = 0;
						c ? e.hasAction("transpose") ? (n = p.widthRatio.multiplePie, a = 1 / i * n, r = [a / 2, 1 - a / 2]) : r = [0, 1 - 1 / i] : (n = p.widthRatio.column, a = 1 / i * n, r = [a, 1 - a])
					}
					t.range = r
				}
			})
		},
		_createView: function(t) {
			var e = this,
				r = new m({
					index: t.index,
					data: t.frame,
					region: t.region,
					layers: e.get("layers"),
					coordAssist: e.get("coordAssist"),
					axisAssist: e.get("axisAssist"),
					guideAssist: e.get("guideAssist"),
					tooltipMap: e.get("tooltipAssist").cfg && e.get("tooltipAssist").cfg.map
				});
			t.view = r;
			var i = r.get("coord");
			return "mirror" === t.type && (1 === t.rows ? (i.transpose(), 0 === t.colIndex && i.scale(-1, 1)) : 1 === t.rowIndex && i.scale(1, -1)), r
		},
		render: function() {
			var t = this,
				e = t.get("scaleAssist"),
				r = t.get("data"),
				i = t.get("scales");
			r = e.processCatScale(r, i), t.set("data", r);
			var n, a = t._initFacets(r, i, e),
				c = [],
				s = [],
				l = t.get("views");
			return d.each(a, function(e) {
				var r = t._createView(e);
				l.push(r), c = c.concat(r.get("data")), s = s.concat(r.get("geoms"))
			}), t.set("facets", a), t.set("views", l), t.set("geoms", s), n = f.forceMerge.apply(null, c), t._trainCatScales(n), t._processScales(), c = [], d.each(l, function(t) {
				t.adjustData(), c = c.concat(t.get("data"))
			}), n = f.forceMerge.apply(null, c), t._trainLinearScales(n), t.fire("beforepaint", {
				chart: t
			}), d.each(l, function(t) {
				t.render()
			}), t.fire("afterpaint"), t._renderLegends(), t._renderTooltip(), t.get("plotContainer").sort(), t.get("backCanvas").draw(), t.get("canvas").draw(), t.get("frontCanvas").draw(), t
		},
		clear: function() {
			return this.get("guideAssist").clear(), this.set("layers", []), this.set("scales", {}), this.set("filters", {}), this._clearInner(), this.get("backCanvas").draw(), this.get("canvas").draw(), this.get("frontCanvas").draw(), this
		},
		destroy: function() {
			if (!this.destroyed) {
				var t = this.get("container");
				this.fire("destroy"), this.clear(), this.get("backCanvas").destroy(), this.get("canvas").destroy(), this.get("frontCanvas").destroy(), this._attrs = {}, this.events = {}, this.destroyed = !0, t.parentNode.removeChild(t)
			}
		},
		repaint: function() {
			var t = this.get("animate");
			return t !== !1 && this.animate(!1), this._clearInner(), this.render(), t !== !1 && this.animate(t), this
		},
		changeData: function(t) {
			var e = this.get("scales"),
				r = this.get("scaleAssist");
			return this._initData(t), t = this.get("data"), r.resetScales(t, e), this.repaint(), this
		},
		changeSize: function(t, e) {
			var r = this.get("backCanvas"),
				i = this.get("canvas"),
				n = this.get("frontCanvas");
			r.changeSize(t, e), i.changeSize(t, e), n.changeSize(t, e);
			var a = this.get("plotBack");
			return a.repaint(), this.repaint(), this
		},
		getFacets: function() {
			return this.get("facets")
		},
		getGeoms: function() {
			return this.get("geoms")
		},
		getViews: function() {
			return this.get("views")
		},
		getScale: function(t) {
			var e = this.get("scales");
			return e[t]
		},
		getViewByPoint: function(t) {
			var e, r = this.get("facets");
			return d.each(r, function(r) {
				var i = r.view,
					n = i.get("coord");
				return c(n, t) ? (e = i, !1) : void 0
			}), e
		},
		showTooltip: function(t) {
			var e = this,
				r = e.getViewByPoint(t);
			if (r) {
				var i = e.get("tooltipAssist");
				i.showTooltip(t, r)
			}
			return e
		},
		hideTooltip: function() {
			var t = this.get("tooltipAssist");
			t.hideTooltip()
		},
		getTooltipItems: function(t) {
			var e = this,
				r = e.getViewByPoint(t),
				i = [];
			if (r) {
				var n = r.get("geoms");
				d.each(n, function(e) {
					var r = e.getTipInfo(t);
					i = i.concat(r)
				})
			}
			return i
		},
		createScale: function(t, e) {
			e = e || this.get("data");
			var r = this.get("scaleAssist"),
				i = this.get("scales");
			return i[t] || (i[t] = r.createScale(t, e)), i[t]
		},
		col: function(t, e) {
			var r = this,
				i = r.get("scaleAssist"),
				n = i.defs,
				a = r.get("facetCfg");
			return n[t] = e, a.defs = n, r
		},
		getPosition: function(t) {
			var e, r, i, n = this,
				a = n.getViews(),
				c = a[0],
				s = c.get("coord"),
				l = c.getXScale();
			l && (i = l.dim, e = l.scale(t[i]));
			var o = this.get("scales");
			return d.each(o, function(e) {
				if (e && e.dim !== i && t[e.dim]) {
					var n = e.dim;
					return void(r = e.scale(t[n]))
				}
			}), s.convert({
				x: e,
				y: r
			})
		},
		legendVisible: function(t, e) {
			var r = this,
				i = r.get("legendAssist");
			i.legendCfg = i.legendCfg, i.legendCfg[t] = e
		}
	});
	for (var S in y) y.hasOwnProperty(S) && (S = S.toLowerCase(), O.prototype[S] = o(S));
	var w = ["pointStack", "pointJitter", "pointDodge", "intervalStack", "intervalDodge", "intervalSymmetric", "areaStack", "schemaDodge"];
	d.each(w, function(t) {
		var e = t.replace(/([a-z](?=[A-Z]))/g, "$1 "),
			r = e.split(" "),
			i = r[0],
			n = r[1];
		"pointDodge" === t && (n = ["dodge", "stack"]), O.prototype[t] = o(i, n)
	}), t.exports = O
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(261),
		a = r(91),
		c = r(6),
		s = ["point", "path", "line", "interval", "area", "polygon", "schema", "heatmap", "contour"],
		l = function(t) {
			i.mix(this, t), this._init()
		};
	i.augment(l, {
		type: "point",
		adjusts: null,
		chart: null,
		attrs: null,
		shapeStyle: null,
		scales: null,
		tooltipDims: null,
		_init: function() {
			this.attrs = [], this.scales = {}, this.stats = [];
			var t = this.adjusts;
			t && (i.isArray(t) ? i.each(t, function(e, r) {
				t[r] = i.ucfirst(e)
			}) : t = i.ucfirst(t), this.adjusts = t)
		},
		_createScale: function(t) {
			var e = this.scales,
				r = this.chart;
			return e[t] || (e[t] = r.createScale(t)), e[t]
		},
		_addStat: function(t) {
			this.stats.push(t)
		},
		_addAttr: function(t, e) {
			var r = this.attrs;
			t = i.ucfirst(t);
			var a = n[t],
				c = new a(e);
			r.push(c)
		},
		_getDefaultShapes: function() {
			var t = this.type,
				e = /[A-Z].*$/;
			return t = t.replace(e), c.shapes[t]
		},
		_getDefaultColors: function() {
			var t, e = this.adjusts;
			return t = e && !i.isArray(e) ? this.type + e : this.type, c.colors[t] || c.colors["default"]
		},
		_parseDims: function(t, e) {
			var r, n = this,
				a = n.chart;
			if (t.isStat && (r = t, r.init(), t = r.getDims(), n._addStat(r)), i.isString(t) && -1 !== t.indexOf("+")) {
				var c = [],
					s = a.get("scaleAssist"),
					l = t.replace(/\s+/g, "").split("*");
				i.each(l, function(t) {
					var e = t.replace(/\(|\)|\s+/g, "").split("+"),
						r = e.join("+");
					c.push(r), e.length > 1 && (s.defs[r] = {
						dims: e
					})
				}), t = c
			} else i.isString(t) && -1 !== t.indexOf("*") ? t = t.replace(/\s+/g, "").split("*") : (i.isNumber(t) || i.isString(t)) && (t = [t]);
			var o = a.get("coordAssist");
			"position" === e && "theta" === o.type && "interval" === n.type && "Stack" === n.adjusts && t.unshift("..pieX");
			var u = [];
			return i.each(t, function(t) {
				var e = n._createScale(t);
				u.push(e)
			}), {
				dims: t,
				stat: r,
				scales: u
			}
		},
		createGeom: function() {
			var t = this.type;
			if (i.inArray(s, t)) return t = i.ucfirst(t), new a[t]({
				type: this.type,
				chart: this.chart,
				attrs: this.attrs,
				stats: this.stats,
				scales: this.scales,
				shapeStyle: this.shapeStyle,
				tooltipDims: this.tooltipDims,
				adjusts: this.adjusts
			});
			throw new Error(t + " is not supported!")
		},
		position: function(t) {
			var e = this._parseDims(t, "position");
			return this._addAttr("position", {
				scales: e.scales,
				stat: e.stat
			}), this
		},
		color: function(t, e) {
			var r = this._parseDims(t),
				n = {
					scales: r.scales,
					stat: r.stat
				};
			return "heatmap" !== this.type || e || (e = c.heatmapColors), i.isFunction(e) ? n.callback = e : i.isArray(e) ? n.colors = e : e ? n.calType = e : n.colors = this._getDefaultColors(), this._addAttr("color", n), this
		},
		shape: function(t, e) {
			var r = this._parseDims(t),
				n = {
					scales: r.scales,
					stat: r.stat
				};
			return i.isFunction(e) ? n.callback = e : n.shapes = e || this._getDefaultShapes(), this._addAttr("shape", n), this
		},
		opacity: function(t, e) {
			var r = this._parseDims(t),
				n = {
					scales: r.scales,
					stat: r.stat,
					callback: i.isFunction(e) ? e : null
				};
			return this._addAttr("opacity", n), this
		},
		label: function(t, e, r) {
			var n = this._parseDims(t);
			return i.isObject(e) && (r = e, e = null), this._addAttr("label", {
				scales: n.scales,
				cfg: r,
				callback: e,
				stat: n.stat
			}), this
		},
		size: function(t, e, r) {
			var n = this._parseDims(t),
				a = {
					scales: n.scales,
					stat: n.stat,
					min: i.isNull(r) ? 1 : r
				};
			return i.isFunction(e) ? a.callback = e : a.max = e || 10, this._addAttr("size", a), this
		},
		tooltip: function(t) {
			var e = this._parseDims(t);
			return this.tooltipDims = e.dims, this
		},
		style: function(t) {
			return this.shapeStyle = t, this
		}
	}), t.exports = l
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(14),
		a = r(2),
		c = function(t) {
			c.superclass.constructor.call(this, t), this._init()
		};
	c.ATTRS = {
		index: null,
		data: null,
		region: null,
		geoms: null,
		coord: null,
		layers: null,
		coordAssist: null,
		axisAssist: null,
		guideAssist: null,
		tooltipMap: null
	}, i.extend(c, n), i.augment(c, {
		_init: function() {
			var t = this._createCoord();
			this.set("coord", t);
			var e = this.get("data"),
				r = this._createGeoms(),
				n = [];
			i.each(r, function(r) {
				var i = r.processData(e, t);
				r.set("frames", i), n = n.concat(i)
			});
			var c = a.forceMerge.apply(null, n);
			this.set("data", c)
		},
		adjustData: function() {
			var t = this,
				e = t.get("geoms"),
				r = [];
			i.each(e, function(t) {
				var e = t.get("frames");
				e = t.numbericFrames(e), e = t.processAdjust(e), t.set("frames", e), r = r.concat(e)
			});
			var n = a.forceMerge.apply(null, r);
			t.set("data", n)
		},
		_createCoord: function() {
			var t = this.get("coordAssist"),
				e = this.get("region"),
				r = e.start,
				i = e.end;
			return t.createCoord(r, i)
		},
		_createGeoms: function() {
			var t = this,
				e = t.get("layers"),
				r = [];
			return i.each(e, function(e) {
				var i = e.createGeom(),
					n = t.get("tooltipMap");
				n && i.set("tooltipMap", n), r.push(i)
			}), t.set("geoms", r), r
		},
		_renderAxis: function() {
			var t = this,
				e = t.get("axisAssist"),
				r = t.getXScale(),
				i = t.getYScales();
			e.createAxis(t, r, i)
		},
		_renderGuide: function() {
			var t = this.get("guideAssist");
			if (t.guides.length) {
				var e = this.get("coord"),
					r = this.getXScale(),
					i = this.getYScales()[0];
				t.setScale(r, i), t.paint(e)
			}
		},
		render: function() {
			var t = this,
				e = t.get("geoms"),
				r = t.get("coord");
			i.each(e, function(t) {
				t.paint(r, t.get("frames"), function(e, r) {
					if (t.isShareTooltip()) {
						var n = [],
							c = t.getXScale().dim;
						i.each(r, function(t) {
							n.push(a.sort(t, c))
						}), t.set("frames", n)
					}
				})
			}), t._renderGuide();
			var n = t.getXScale();
			n && t._renderAxis()
		},
		getXScale: function() {
			var t = this.get("geoms"),
				e = null;
			return t.length && (e = t[0].getXScale()), e
		},
		getYScales: function() {
			var t = this.get("geoms"),
				e = [];
			return i.each(t, function(t) {
				var r = t.getYScale();
				r && -1 === i.indexOf(e, r) && e.push(r)
			}), e
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";

	function i(t, e, r) {
		return {
			x: t.x + e * Math.cos(r),
			y: t.y + e * Math.sin(r)
		}
	}
	var n = r(1),
		a = r(45),
		c = r(2),
		s = r(34),
		l = function(t) {
			l.superclass.constructor.call(this, t)
		};
	n.extend(l, a), n.augment(l, {
		getRegion: function(t, e) {
			var r = this,
				n = r.plotRange,
				a = Math.min(n.getWidth(), n.getHeight()) / 2,
				c = 2 * Math.PI / t,
				s = -1 * Math.PI / 2 + c * e,
				l = a / (1 + 1 / Math.sin(c / 2)),
				o = r.getCenter(),
				u = i(o, a - l, s);
			return r.getFacetRegion(u, l)
		},
		getFacetRegion: function(t, e) {
			var r = 3 * Math.PI / 4,
				n = -1 * Math.PI * 1 / 4;
			return {
				start: i(t, e, r),
				end: i(t, e, n)
			}
		},
		getCenter: function() {
			var t = this,
				e = t.plotRange,
				r = e.tl,
				i = e.getWidth(),
				n = e.getHeight(),
				a = {
					x: r.x + i / 2,
					y: r.y + n / 2
				};
			return a
		},
		generateFacets: function(t) {
			var e = this,
				r = e.dims,
				i = r[0];
			if (!i) throw new Error("Please specify for the field for facet!");
			var a = e.getDimValues(i, t),
				l = a.length,
				o = [],
				u = 0;
			return n.each(a, function(r, n) {
				var h = [{
						dim: i,
						value: r,
						values: a
					}],
					f = e.getFilter(h),
					d = c.filter(t, f),
					p = new s({
						type: e.type,
						xValue: r,
						xDim: i,
						colIndex: n,
						cols: l,
						rows: 1,
						rowIndex: 0,
						frame: d,
						region: e.getRegion(l, n),
						index: u++
					});
				o.push(p)
			}), o
		}
	}), t.exports = l
}, function(t, e, r) {
	var i = r(45);
	i.Facet = r(34), i.Rect = r(90), i.List = r(89), i.Circle = r(279), i.Tree = r(282), i.Mirror = r(281), t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(89),
		a = function(t) {
			a.superclass.constructor.call(this, t), this._init()
		};
	i.extend(a, n), i.augment(a, {
		type: "mirror",
		transpose: !1,
		drawTitles: function(t, e) {
			var r = this,
				n = r.dims,
				a = r.transpose ? "col" : "row";
			i.each(t, function(t) {
				r.drawFacetTitle(a, t, e)
			}), r.drawDimTitle(a, n[0], e)
		},
		_init: function() {
			var t = this,
				e = t.dims,
				r = e[0];
			if (!r) throw new Error("Please specify for the field for facet!");
			t.transpose ? (t.cols = 2, t.rows = 1) : (t.cols = 1, t.rows = 2)
		},
		getRegion: function(t, e, r, i) {
			var n, a, c = this,
				s = c.plotRange,
				l = c.margin,
				o = s.tl,
				u = s.br;
			e > 1 ? (n = (u.x - o.x - l) / e, a = u.y - o.y) : (n = u.x - o.x, a = (u.y - o.y - l) / t);
			var h = {
					x: o.x + n * r + r * l,
					y: o.y + a * (i + 1) + l * i
				},
				f = {
					x: h.x + n,
					y: h.y - a
				};
			return {
				start: h,
				end: f
			}
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(45),
		a = r(2),
		c = r(34),
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	i.extend(s, n), i.augment(s, {
		rootTitle: "",
		line: {
			stroke: "red"
		},
		smooth: !1,
		generateFacets: function(t) {
			var e = this,
				r = e.dims;
			if (!r.length) throw new Error("Please specify for the fields for facet!");
			var i = [],
				n = e.getRootFacet(t);
			return i.push(n), n.children = e.getChildFacets(t, 1, i), e.setRegion(i), i
		},
		getRows: function() {
			return this.dims.length + 1
		},
		drawTitles: function(t, e) {
			var r = this;
			r.drawLines(t, e), i.each(t, function(t) {
				r.drawFacetTitle("col", t, e)
			})
		},
		drawLines: function(t, e) {
			var r = this,
				n = e.addGroup();
			i.each(t, function(t) {
				if (!r.isLeaf(t)) {
					var e = t.children;
					r._addFacetLines(t, e, n)
				}
			})
		},
		_addFacetLines: function(t, e, r) {
			var n = this,
				a = t.region,
				c = {
					x: a.start.x + (a.end.x - a.start.x) / 2,
					y: a.start.y
				};
			i.each(e, function(t) {
				var e = t.region,
					i = {
						x: e.start.x + (e.end.x - e.start.x) / 2,
						y: e.end.y
					},
					a = {
						x: c.x,
						y: c.y + (i.y - c.y) / 2
					},
					s = {
						x: i.x,
						y: a.y
					};
				n._drawLine([c, a, s, i], r)
			})
		},
		_getPath: function(t) {
			var e = this,
				r = "",
				n = e.smooth;
			if (n) {
				var a = [];
				a.push(["M", t[0].x, t[0].y]), a.push(["C", t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y]), r = a.join(" ")
			} else i.each(t, function(t, e) {
				var n = 0 === e ? "M {x} {y}" : "L {x} {y}";
				r += i.substitute(n, t)
			});
			return r
		},
		_drawLine: function(t, e) {
			var r = this,
				n = r._getPath(t),
				a = r.line;
			e.addShape("Path", {
				attrs: i.mix({
					path: n
				}, a)
			})
		},
		getRootFacet: function(t) {
			var e = this,
				r = new c({
					type: e.type,
					rows: e.getRows(),
					rowIndex: 0,
					colIndex: 0,
					xValue: e.rootTitle,
					frame: t,
					index: 0
				});
			return r
		},
		getChildFacets: function(t, e, r) {
			var n = this,
				s = [],
				l = n.dims,
				o = l.length;
			if (e > o) return [];
			var u = l[e - 1],
				h = n.getDimValues(u, t);
			return i.each(h, function(i, l) {
				var o = [{
						dim: u,
						value: i,
						values: h
					}],
					f = n.getFilter(o),
					d = a.filter(t, f);
				if (d.rowCount()) {
					var p = new c({
						type: n.type,
						xValue: i,
						xDim: u,
						colIndex: l,
						rows: n.getRows(),
						rowIndex: e,
						frame: d,
						children: n.getChildFacets(d, e + 1, r),
						index: r.length
					});
					s.push(p), r.push(p)
				}
			}), s
		},
		getFacetsByLevel: function(t, e) {
			var r = [];
			return i.each(t, function(t) {
				t.rowIndex === e && r.push(t)
			}), r
		},
		getRegion: function(t, e, r, i) {
			var n = this,
				a = n.plotRange,
				c = n.margin,
				s = a.bl,
				l = a.tr,
				o = (l.x - s.x) / e,
				u = (l.y - s.y) / t,
				h = {
					x: s.x + o * r + c,
					y: s.y + u * i - c
				},
				f = {
					x: h.x + o - c,
					y: h.y + 2 * u / 3 + c
				};
			return {
				start: h,
				end: f
			}
		},
		getRegionIndex: function(t) {
			var e = t[0],
				r = t[t.length - 1];
			return (r.colIndex - e.colIndex) / 2 + e.colIndex
		},
		setRegion: function(t) {
			var e = this;
			e.forceColIndex(t), i.each(t, function(t) {
				t.region = e.getRegion(t.rows, t.cols, t.colIndex, t.rows - t.rowIndex - 1)
			})
		},
		isLeaf: function(t) {
			return !t.children || !t.children.length
		},
		forceColIndex: function(t) {
			var e = this,
				r = [],
				n = 0;
			i.each(t, function(t) {
				e.isLeaf(t) && (r.push(t), t.colIndex = n, n++)
			}), i.each(r, function(t) {
				t.cols = r.length
			});
			for (var a = e.dims.length, c = a - 1; c >= 0; c--)
				for (var s = e.getFacetsByLevel(t, c), l = 0; l < s.length; l++) {
					var o = s[l];
					e.isLeaf(o) || (o.originColIndex = o.colIndex, o.colIndex = e.getRegionIndex(o.children), o.cols = r.length)
				}
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(11),
		a = r(101),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	c.ATTRS = {
		gemo: null
	}, i.extend(c, n.Group), i.mixin(c, [a.Group]), i.augment(c, {
		isItemActived: function(t) {
			return t.get("actived")
		},
		setItemActived: function(t, e) {
			e ? t.set("actived", !0) : t.set("actived", !1)
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(35),
		a = r(2),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	i.extend(c, n), i.augment(c, {
		marginRatio: .5,
		dodgeRatio: .5,
		getDistribution: function(t) {
			var e = this,
				r = e.adjFrames,
				n = {};
			return i.each(r, function(e, r) {
				var c = a.values(e, t);
				c.length || c.push(0), i.each(c, function(t) {
					n[t] || (n[t] = []), n[t].push(r)
				})
			}), n
		},
		adjustDim: function(t, e, r, n, a) {
			var c = this,
				s = c.getDistribution(t),
				l = c.groupData(r, t);
			i.each(l, function(r, n) {
				n = parseFloat(n);
				var l;
				l = 1 === e.length ? {
					pre: -1,
					next: 1
				} : c.getAdjustRange(t, n, e), i.each(r, function(e) {
					var r = e[t],
						n = s[r],
						o = i.indexOf(n, a);
					e[t] = c.getDodgeOffset(l, o, n.length)
				})
			})
		},
		getDodgeOffset: function(t, e, r) {
			var i, n = this,
				a = t.pre,
				c = t.next,
				s = c - a,
				l = s * n.dodgeRatio / r,
				o = n.marginRatio * l;
			return i = .5 * (s - r * l - (r - 1) * o) + ((e + 1) * l + e * o) - .5 * l - .5 * s, (a + c) / 2 + i
		}
	}), t.exports = c
}, function(t, e, r) {
	var i = r(35);
	i.Dodge = r(284), i.Jitter = r(286), i.Stack = r(287), i.Symmetric = r(288), t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(35),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	i.extend(a, n), i.augment(a, {
		getAdjustOffset: function(t, e) {
			var r = Math.random(),
				i = e - t,
				n = .05 * i;
			return t + n + .9 * i * r
		},
		_adjustGroup: function(t, e, r, n) {
			var a = this,
				c = a.getAdjustRange(e, r, n);
			i.each(t, function(t) {
				t[e] = a.getAdjustOffset(c.pre, c.next)
			})
		},
		adjustDim: function(t, e, r) {
			var n = this,
				a = n.groupData(r, t);
			i.each(a, function(r, i) {
				i = parseFloat(i), n._adjustGroup(r, t, i, e)
			})
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(2),
		a = r(35),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	i.extend(c, a), i.augment(c, {
		height: null,
		size: 10,
		adjustNames: ["y"],
		processOneDimStack: function(t) {
			for (var e = this, r = e.xDim, i = e.yDim || "y", a = e.height, c = {}, s = [], l = 0; l < t.length; l++) {
				for (var o = t[l].toJSON(), u = 0; u < o.length; u++) {
					var h = o[u],
						f = h.size || e.size,
						d = 2 * f / a,
						p = h[r];
					c[p] || (c[p] = d / 2), h[i] = c[p], c[p] += d
				}
				s.push(new n(o))
			}
			return s
		},
		processAdjust: function(t) {
			var e = this;
			return t = e.yDim ? e.processStack(t) : e.processOneDimStack(t)
		},
		processStack: function(t) {
			for (var e = this, r = e.xDim, a = e.yDim, c = t.length, s = [], l = {}, o = [], u = 0; c > u; u++) {
				for (var h = t[u].toJSON(), f = 0; f < h.length; f++) {
					var d = h[f],
						p = d[r],
						g = d[a],
						y = p.toString();
					g = i.isArray(g) ? g[1] : g, l[y] || (l[y] = 0), d[a] = [l[y], g + l[y]], l[y] += g
				}
				s.push(h)
			}
			return i.each(s, function(t) {
				var e = new n(t);
				o.push(e)
			}), o
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(2),
		a = r(35),
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	i.extend(c, a), i.augment(c, {
		adjustNames: ["y"],
		_getMax: function(t) {
			var e = this,
				r = e.mergeFrame,
				i = n.max(r, t);
			return i
		},
		adjustDim: function(t, e, r) {
			for (var a = this, c = a._getMax(t), s = 0; s < r.length; s++) {
				var l, o = r[s],
					u = o[t];
				if (i.isArray(u)) {
					l = (c - u[u.length - 1]) / 2;
					var h = [];
					i.each(u, function(t) {
						h.push(l + t)
					}), o[t] = h
				} else l = (c - u) / 2, o[t] = [l, u + l]
			}
			return new n(r)
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(104),
		n = {};
	n.getDefault = function(t) {
		var e = t.geom,
			r = t.fn,
			n = e.get("coord"),
			a = i,
			c = e.get("type"),
			s = e.get("adjusts") || "";
		switch (c += s, n.type) {
			case "cartesian":
				switch (c) {
					case "interval":
					case "intervalStack":
					case "intervalDodge":
						a = n.isTransposed ? i.scaleX : i.scaleY;
						break;
					case "intervalSymmetric":
						a = i.scaleX;
						break;
					default:
						a = i.waves
				}
				break;
			case "polar":
				switch (c) {
					case "area":
					case "areaStack":
					case "interval":
					case "intervalStack":
					case "intervalDodge":
						a = i.scaleXY;
						break;
					default:
						a = i.angle
				}
				break;
			case "theta":
				a = i.angle;
				break;
			case "plus":
				a = i.scaleXY
		}
		var l = n.get("start"),
			o = n.get("end"),
			u = o.x - l.x,
			h = l.y - o.y;
		return new a({
			group: e.get("group"),
			rect: {
				x: l.x,
				y: o.y,
				width: u,
				height: h
			},
			circle: {
				center: n.convertPoint({
					x: 0,
					y: 0
				}),
				startAngle: n.get("startAngle"),
				endAngle: n.get("endAngle"),
				r: Math.max(u, h) / 2
			},
			before: r
		})
	}, t.exports = n
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(94),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	a.ATTRS = {
		shapeType: "area",
		type: "area",
		shape: "area",
		trigger: !1
	}, i.extend(a, n), i.augment(a, {
		getShapePointInfo: function(t) {
			var e = this,
				r = {};
			return i.mix(r, t, {
				y0: e.getMinYPercent()
			}), r
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(142),
		a = r(2),
		c = r(59),
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	s.ATTRS = {
		type: "contour",
		shareTooltip: !1,
		allowActiveShape: !1
	}, i.extend(s, c), i.augment(s, {
		framePreprocess: function(t) {
			var e = this,
				r = e.getXDim(),
				c = e.getYDim(),
				s = e.getZScale(),
				l = s.dim,
				o = a.merge.apply(null, t),
				u = o.rowObject(0),
				h = e.getData(o),
				f = s.ticks,
				d = n(h, f),
				p = [];
			return i.each(d, function(t) {
				var e = t.path,
					n = t.value,
					s = [];
				i.each(e, function(t) {
					var e = i.mix({}, u);
					e[r] = t[0], e[c] = t[1], e[l] = n, s.push(e)
				}), p.push(new a(s))
			}), p
		},
		getData: function(t) {
			var e = this,
				r = [],
				n = e.getAttr("position"),
				c = n.getDims(),
				s = c[0],
				l = c[1],
				o = c[2],
				u = a.values(t, s),
				h = a.values(t, l),
				f = 0,
				d = 0,
				p = null;
			return i.each(u, function(t) {
				p && e.beql(p, t) || f++, p = t
			}), p = null, i.each(h, function(t) {
				p && e.beql(p, t) || d++, p = t
			}), t.each(function(t, e) {
				var i = Math.floor(e / d),
					n = Math.floor(e % d),
					a = [t[s], t[l], t[o]];
				Array.isArray(r[i]) || (r[i] = []), r[i][n] = a
			}), r
		},
		getZScale: function() {
			return this.getAttr("position").getScale("z")
		},
		beql: function(t, e) {
			return Math.abs(t - e) < 1e-6
		},
		getSingleShape: function(t) {
			var e = this,
				r = e.get("chart"),
				i = r.getViews()[0].get("data"),
				n = e.findPoint(t, i),
				a = {
					origin: n,
					get: function(t) {
						return this[t]
					}
				};
			return a
		},
		findPoint: function(t, e) {
			var r, i = this,
				n = i.get("coord"),
				a = n.invert(t),
				c = i.getXScale(),
				s = c.dim,
				l = i.getYScale(),
				o = l.dim,
				u = c.invert(a.x),
				h = l.invert(a.y),
				f = {};
			return e.each(function(t) {
				var e = (t[s] - u) * (t[s] - u) + (t[o] - h) * (t[o] - h);
				(!r || r > e) && (r = e, f = t)
			}), f
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(152),
		a = r(24),
		c = r(6),
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	s.ATTRS = {
		type: "heatmap"
	}, i.extend(s, a), i.augment(s, {
		drawFrame: function(t) {
			if (t.rowCount()) {
				var e = this,
					r = e.get("group"),
					a = e.getHeatmapData(t),
					s = e.getImageRegion(),
					l = e.getZScale(),
					o = t.rowObject(0).size,
					u = e.getAttr("color"),
					h = i.mix({
						min: l.min,
						max: l.max,
						formatter: function(t) {
							return l.scale(t)
						}
					}, c.heatmap, s);
				h.colors = [u.getMappingValue(0), u.getMappingValue(.25), u.getMappingValue(.5), u.getMappingValue(.75), u.getMappingValue(1)];
				var f = o ? parseInt(o, 10) : e.getRadius();
				f && (h.radius = f);
				var d = new n(h),
					p = d.getData(a),
					g = document.createElement("canvas"),
					y = g.getContext("2d");
				g.width = s.width, g.height = s.height, y.putImageData(p, 0, 0);
				var v = r.addShape("Image", {
					attrs: s
				});
				v.attr("img", g)
			}
		},
		getImageRegion: function() {
			var t = this,
				e = t.get("coord"),
				r = e.get("start"),
				i = e.get("end"),
				n = {
					x: r.x,
					y: i.y,
					width: i.x - r.x,
					height: r.y - i.y
				};
			return n
		},
		getTipTitle: function(t) {
			var e, r = this,
				i = r._getTipMapScale("title");
			if (i) {
				var n = t[i.dim];
				e = i.getText(n)
			} else {
				var a = r.getXScale(),
					c = r.getYScale(),
					s = a.getText(t[a.dim]),
					l = c.getText(t[c.dim]);
				e = "( " + s + ", " + l + " )"
			}
			return e
		},
		getHeatmapData: function(t) {
			var e = this,
				r = [],
				i = e.getAttr("color"),
				n = i.getDims(),
				a = n[0];
			return t.each(function(t) {
				var e = [t.x, t.y, t[a]];
				r.push(e)
			}), r
		},
		getZScale: function() {
			return this.getAttr("color").getScale("color")
		},
		getRadius: function() {
			var t = this,
				e = t.getAttr("position"),
				r = t.get("coord"),
				i = e.stat,
				n = null;
			if (i) {
				var a = i.bandWidth;
				n = Math.min(r.getWidth(), r.getHeight()) * a
			}
			return 2 * n
		},
		findPoint: function(t, e) {
			var r, i = this,
				n = i.get("coord"),
				a = n.invert(t),
				c = i.getXScale(),
				s = c.dim,
				l = i.getYScale(),
				o = l.dim,
				u = c.invert(a.x),
				h = l.invert(a.y),
				f = {};
			return e.each(function(t) {
				var e = (t._origin[s] - u) * (t._origin[s] - u) + (t._origin[o] - h) * (t._origin[o] - h);
				(!r || r > e) && (r = e, f = t)
			}), f
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(24),
		a = "_origin",
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	c.ATTRS = {
		type: "interval",
		shapeType: "interval",
		shape: "rect",
		animate: !0,
		lineToArc: !0,
		snapAll: !1
	}, i.extend(c, n), i.augment(c, {
		_getShapeCfg: function(t, e) {
			var r = this,
				i = r.get("shapeObj"),
				n = {
					color: t.color,
					size: t.size,
					opacity: t.opacity,
					isInCircle: r.isInCircle(),
					point: t,
					coord: r.get("coord")
				};
			e && (n.nextPoint = e);
			var a = i.getShapeCfg(t.shape, n);
			return a.path = r.mappingPath(a.path), a
		},
		_getNextPoint: function(t, e) {
			var r = null,
				n = e.index,
				a = e.toJSON(),
				c = this.get("frames");
			if (i.isNull(a[t + 1])) {
				if (!i.isNull(c[n + 1])) {
					var s = c[n + 1],
						l = s.toJSON();
					r = l[0]
				}
			} else r = a[t + 1];
			return r
		},
		_addInterval: function(t) {
			for (var e = this, r = e.get("group"), n = t.toJSON(), a = 0, c = n.length; c > a; a++) {
				var s = n[a];
				if ((!isNaN(s.x) || i.isArray(s.x)) && (!isNaN(s.y) || i.isArray(s.y))) {
					var l;
					if ("funnel" === s.shape || "pyramid" === s.shape) {
						var o = e._getNextPoint(a, t);
						l = e._getShapeCfg(s, o)
					} else l = e._getShapeCfg(s);
					var u = r.addShape("Path", {
						attrs: l
					});
					u.set("origin", s)
				}
			}
		},
		drawFrame: function(t) {
			var e = this;
			t.rowCount() && e._addInterval(t)
		},
		isShareTooltip: function() {
			var t = this,
				e = t.get("coord"),
				r = e.type,
				i = t.get("shareTooltip");
			return ("theta" === r || "polar" === r && e.isTransposed) && (i = !1), i
		},
		getShapePointInfo: function(t) {
			var e = this,
				r = {},
				n = t.size;
			return (i.isNull(n) || n >= 1) && (n = e.getNormalizeSize()), i.mix(r, t, {
				y0: e.getMinYPercent(),
				size: n
			}), r
		},
		allowSelected: function() {
			var t = this,
				e = t.get("coord"),
				r = e.type,
				i = t.get("allowSelected");
			return "theta" === r && (i = !0), i
		},
		beforeChange: function() {
			var t = this;
			t.set("barWidth", null)
		},
		framePreprocess: function(t) {
			var e = this.get("coord"),
				r = e.type;
			if ("theta" === r || "polar" === r && e.isTransposed && "Stack" === this.adjusts) {
				var n = [],
					c = this.getYDim();
				return i.each(t, function(t) {
					var e = t.colArray(a);
					e[0][c] > 0 && n.push(t)
				}), n
			}
			return t
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(93),
		n = r(92),
		a = r(295),
		c = {
			getLabelsClass: function(t) {
				var e = i;
				return "polar" === t || "plus" === t ? e = n : "theta" === t && (e = a), e
			}
		};
	t.exports = c
}, function(t, e, r) {
	"use strict";

	function i(t) {
		return u.equal(t, -Math.PI / 2) || u.equal(t, Math.PI / 2) || u.equal(t, 3 * Math.PI / 2)
	}

	function n(t, e, r) {
		return {
			x: t.x + r * Math.cos(e),
			y: t.y + r * Math.sin(e)
		}
	}

	function a(t, e, r, i, n, a) {
		var c = Math.acos((i - e) / i),
			s = a ? r - Math.PI + c : r - c;
		t.orignAngle = t.angle, t.angle = s, t.orignX = t.x, t.orignY = t.y, t.x = n.x + (i + 2.5) * Math.cos(t.angle), t.y = n.y + (i + 2.5) * Math.sin(t.angle), u.equal(s, -Math.PI / 2) ? t.x += d : u.equal(s, 3 * Math.PI / 2) ? t.x -= d : u.equal(s, Math.PI / 2) && (s >= t.orignAngle ? t.x += d : t.x -= d)
	}

	function c(t, e, r, i, n, c) {
		var s = parseInt(2 * e / c, 10),
			l = t.y + e,
			o = t.y - e;
		s < r.length && r.splice(s, r.length - s);
		for (var u, h, f, d = 0, p = r.length, g = 0, y = 0; p > y; y++) {
			var v = r[y],
				m = v.y;
			h = p - y, u = n > 0 ? (l - m) / h : (m - o) / h, y > 0 && (g = n > 0 ? (m - o) / y : (l - m) / y);
			var x;
			if (x = n > 0 ? p > h ? m - r[y - 1].y : m - o : p - 1 > h ? r[y - 1].y - m : l - m, d = y, c > u) {
				0 !== d && (d = y + 1);
				break
			}(g > 0 && c > g || x > 0 && c > x) && (f = y)
		}
		if (f)
			for (var C = 0; f >= C; C++) {
				var _ = C * c;
				a(r[C], _, i, e, t, !0)
			}
		if (p - 1 > d) {
			var O = 0 === d ? 0 : d - 1,
				S = r[O],
				w = S.y,
				M = n > 0 ? l : o;
			h = p - O - 1, u = Math.abs(M - w) / h, c > u && (u = c);
			for (var b = p - 1; b >= O; b--) {
				var k = (p - 1 - b) * u;
				a(r[b], k, i, e, t, !1)
			}
			for (var A = n > 0 ? o : l, P = !1, T = O - 1; T > 0; T--) {
				var D = r[T];
				if (!P && Math.abs(A - D.y) / (T + 1) < c && (P = !0), P) {
					var I = Math.abs(r[T + 1].y - M) + c;
					a(r[T], I, i, e, t)
				}
			}
		}
	}
	var s = r(1),
		l = r(92),
		o = r(26),
		u = r(4),
		h = r(6),
		f = 5,
		d = 1,
		p = function(t) {
			p.superclass.constructor.call(this, t)
		};
	p.CFG = {
		labels: h.thetaLabels
	}, s.extend(p, l), s.augment(p, {
		adjustItems: function(t) {
			var e = this,
				r = e.getDefaultOffset();
			return r > 0 && (t = e._adjustItems(t, r)), t
		},
		_adjustItems: function(t) {
			var e = this,
				r = e.getDefaultOffset(),
				i = [],
				n = e.get("coord"),
				a = n.getCenter(),
				l = n.getRadius(),
				o = l + r,
				u = n.get("startAngle"),
				h = e.get("labels").labelHeight,
				f = [],
				d = [];
			if (s.each(t, function(t) {
					t.x > a.x ? f.push(t) : i.push(t)
				}), i.length) {
				var p = u >= -Math.PI / 2 ? 3 * Math.PI / 2 : -Math.PI / 2;
				c(a, o, i, p, -1, h)
			}
			return f.length && c(a, o, f, Math.PI / 2, 1, h), d = d.concat(f, i)
		},
		drawLines: function(t, e) {
			var r = this,
				i = r.getDefaultOffset();
			i > 0 && s.each(t, function(t) {
				r.lineToLabel(t, e)
			})
		},
		lineToLabel: function(t, e) {
			var r, a = this,
				c = a.get("coord"),
				l = c.getRadius(),
				o = a.getDefaultOffset(),
				h = a.get("labels"),
				d = t.orignAngle || t.angle,
				p = c.getCenter(),
				g = n(p, d, l + f / 2),
				y = h.labelHeight,
				v = a.get("lineGroup"),
				m = [],
				x = i(t.angle),
				C = 1;
			x && (o -= y / 2, u.equal(t.angle, Math.PI / 2) && (C = -1)), m.push(["M", g.x, g.y]), r = n(p, d, l + o / 2);
			var _ = x ? t.y + y / 2 * C : t.y;
			m.push(["R", r.x, r.y, t.x, _]), m = s.path2Absolute(m), v || (v = a.addGroup({
				elCls: "x-line-group"
			}), a.set("lineGroup", v)), v.addShape("path", {
				attrs: s.mix({
					path: m,
					fill: null,
					stroke: t.color
				}, e)
			})
		},
		getLabelRotate: function(t, e) {
			var r;
			return 0 > e && (r = 180 * t / Math.PI, r > 90 && (r -= 180), -90 > r && (r += 180)), r
		},
		getLabelAlign: function(t) {
			var e, r = this,
				i = r.get("coord"),
				n = i.getCenter();
			e = t.x === n.x ? "middle" : t.x > n.x ? "start" : "end";
			var a = r.getDefaultOffset();
			return 0 >= a && (e = "end" === e ? "start" : "end"), e
		},
		getArcPoint: function(t) {
			return t
		},
		getPointAngle: function(t) {
			var e, r, i = this,
				n = i.get("coord");
			e = {
				x: t.x[0],
				y: t.y[0]
			}, r = {
				x: t.x[1],
				y: t.y[1]
			};
			var a = o.getPointAngle(n, e),
				c = o.getPointAngle(n, r);
			a >= c && (c += 2 * Math.PI);
			var s = a + (c - a) / 2;
			return s
		},
		getCirclePoint: function(t, e) {
			var r = this,
				i = r.get("coord"),
				n = i.getCenter(),
				a = i.getRadius() + e;
			return {
				x: n.x + a * Math.cos(t),
				y: n.y + a * Math.sin(t),
				angle: t,
				r: a
			}
		}
	}), t.exports = p
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		if (!t) return !0;
		if (t.length !== e.length) return !0;
		var r = !1;
		return n.each(e, function(e, i) {
			return e !== t[i] ? (r = !0, !1) : void 0
		}), r
	}
	var n = r(1),
		a = Math.abs,
		c = function() {};
	c.ATTRS = {
		localRefresh: !1,
		allowActiveShape: !0,
		snapAll: !0,
		snapDistance: 10
	}, n.augment(c, {
		setActiveByPoint: function(t) {
			var e = this,
				r = e.get("coord"),
				n = null;
			if (!e.get("allowActiveShape")) return [];
			if (e.isShareTooltip()) n = e._getSharedShapes(t, r);
			else {
				n = [];
				var a = e.getSingleShape(t);
				a && n.push(a)
			}
			var c = e.get("preShapes");
			return i(c, n) && e.setShapesActive(n), e.set("preShapes", n), n
		},
		_getSharedShapes: function(t) {
			var e = this,
				r = e.get("group"),
				i = [];
			if (r) {
				var a = e.getXDim(),
					c = r.get("children");
				n.each(c, function(e) {
					var r = e.get("origin");
					r && r._origin[a] === t._origin[a] && i.push(e)
				})
			}
			return i
		},
		getSingleShape: function(t) {
			var e = this,
				r = e.get("group"),
				i = e.get("coord"),
				a = r.get("canvas"),
				c = a.get("pixelRatio"),
				s = null;
			if (r) {
				var l = r.get("children"),
					o = [];
				l.length > 30 ? n.each(l, function(r) {
					var n = r.get("origin");
					n && e.isSnapPoint(t, n, i) && o.push(r)
				}) : o = l;
				for (var u = o.length - 1; u >= 0; u--) {
					var h = o[u];
					if (h.get("origin") && h.isHit(t.x * c, t.y * c)) {
						s = h;
						break
					}
				}
			}
			return s
		},
		isSnapPoint: function(t, e, r) {
			var i = this,
				n = this.get("snapDistance"),
				c = !1;
			if (this.get("snapAll")) {
				var s = r.trans(e.x, e.y, 1);
				c = a(s.x - t.x) < n && a(s.y - t.y) < n
			} else {
				var l = r.invert(t),
					o = i.getXScale(),
					u = o.dim,
					h = o.translate(o.invert(l.x));
				n = i.getXDistance(), c = a(h - e[u]) < n
			}
			return c
		},
		setShapesActive: function(t) {
			var e = this;
			if (e.get("allowActiveShape")) {
				var r = e.get("coord"),
					i = e.get("activeGroup"),
					a = e.get("chart"),
					c = a.get("frontCanvas");
				i ? i.clear() : (i = c.addGroup(), e.set("activeGroup", i)), i.setMatrix(r.get("matrix").clone()), n.each(t, function(t) {
					e._activeShape(t, i)
				}), c.sort()
			}
		},
		_activeShape: function(t, e) {
			var r = this,
				i = t.get("type"),
				a = t.get("origin"),
				c = a.shape || r.getDefaultValue("shape"),
				s = r.get("shapeObj"),
				l = s.getActiveCfg(c, a),
				o = n.mix({}, t.__attrs, l, {
					fill: "white",
					"fill-opacity": .15,
					fillOpacity: .15
				}),
				u = e.addShape(i, {
					attrs: o
				});
			u.setMatrix(t.getMatrix()), u.set("origin", a)
		},
		clearShapeActived: function() {
			var t = this,
				e = t.get("activeGroup");
			e && e.clear()
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(2),
		a = r(285),
		c = r(60),
		s = r(26),
		l = ["size", "shape", "color"],
		o = "_origin",
		u = ["Dodge", "Jitter", "Stack", "Symmetric"],
		h = function() {};
	h.ATTRS = {
		adjusts: null,
		hasShapePath: !0,
		lineToArc: !1
	}, i.augment(h, {
		_getShapeScale: function() {
			var t = this,
				e = t.getAttr("shape"),
				r = null;
			return e && (r = e.getScale("shape")), r
		},
		_getScale: function(t) {
			var e = this,
				r = e.get("scales"),
				n = null;
			return i.each(r, function(e) {
				return e.dim === t ? (n = e, !1) : void 0
			}), n
		},
		_getGroupScales: function() {
			var t = this,
				e = [];
			return i.each(l, function(r) {
				var n = t.getAttr(r);
				if (n) {
					var a = n.getScales();
					i.each(a, function(t) {
						t.isCategory && -1 === i.indexOf(e, t) && e.push(t)
					})
				}
			}), e
		},
		_saveOriginData: function(t) {
			return i.each(t, function(t) {
				var e = t.toJSON();
				t.addCol(o, e)
			}), t
		},
		_setStatRange: function(t) {
			var e = this,
				r = t.getDims(),
				n = [];
			i.each(r, function(r) {
				var i = e._getScale(r);
				i.isCategory || "identity" === i.type || (isNaN(i.min) || isNaN(i.max) || t.setRange(r, {
					min: i.min,
					max: i.max
				}), "bin" === t.type && n.push(r))
			}), n.length && (t.binDims = n)
		},
		_execStat: function(t, e) {
			var r = this,
				i = r.getBinStat(t);
			return i && r._setStatRange(i), (t.isRegression || t.setRange) && r._setStatRange(t), t.exec(e)
		},
		_execStats: function(t) {
			var e = this,
				r = t;
			if (i.isNull(t) || t && 0 === t.length) return r;
			var a = e.get("attrs"),
				c = e.getAttr("position"),
				s = c.stat,
				l = [];
			if (i.each(a, function(t) {
					"position" !== t.type && t.stat && l.push(t.stat)
				}), s && (r = e._execStat(s, r)), l.length) {
				var o = [],
					u = c.getDims();
				i.each(r, function(t) {
					o = o.concat(n.group(t, u))
				}), r = o, i.each(l, function(t) {
					r = e._execStat(t, r)
				}), r = [n.merge.apply(this, r)]
			}
			return r
		},
		_execPointsMapping: function(t) {
			var e = this,
				r = t.colArray("points"),
				a = e.getAttr("position"),
				c = [];
			return i.each(r, function(t) {
				var e = new n(t);
				e = a.mapping(e), e = e.toJSON(), c.push(e)
			}), t.colReplace("points", c), t
		},
		mappingPath: function(t) {
			var e = this,
				r = e.get("coord");
			return t = i.parsePathString(t), t = e.isInCircle() && e.get("lineToArc") ? s.convertPolarPath(t, r) : s.convertNormalPath(t, r)
		},
		_groupFrames: function(t) {
			var e = this,
				r = [],
				a = e._getGroupScales();
			return i.each(a, function(t) {
				r.push(t.dim)
			}), n.group(t, r)
		},
		_filterNullValue: function(t) {
			var e = this.getXDim();
			return n.filter(t, function(t) {
				return i.isArray(t[e]) || !i.isNull(t[e])
			})
		},
		_createFrame: function(t) {
			var e = this,
				r = e.get("scales"),
				a = [],
				c = [];
			i.each(r, function(e) {
				var r = e.dim;
				a.push(r);
				var i;
				if (t.contains(r)) i = t.colArray(r);
				else {
					var s = e.value || 0;
					i = n.Array.repeat(s, t.rowCount())
				}
				c.push(i)
			});
			var s = new n(c, {
				names: a
			});
			return s
		},
		_normalizeFrame: function(t, e) {
			var r = e.getDims(),
				a = e.getNames(),
				c = e.scaleCache;
			i.each(a, function(e) {
				t.contains(e) && -1 === i.indexOf(r, e) && r.push(e)
			});
			var s = t.cols(r);
			s = s.toJSON(), i.each(c, function(t, e) {
				i.each(s, function(r) {
					var n = t.dim,
						a = r[n];
					i.isArray(a) ? r[e] = i.map(a, function(e) {
						return t.scale(e)
					}) : r[e] = t.scale(a)
				})
			}), a = a.concat(r);
			var l = new n(s, {
				names: a
			});
			return l
		},
		processData: function(t, e) {
			var r = this;
			r.set("coord", e);
			var i = r._createFrame(t);
			return i = r._filterNullValue(i), t = r._groupFrames(i), t = r._execStats(t), t = r._saveOriginData(t)
		},
		numbericFrames: function(t) {
			var e = this,
				r = e.get("scales");
			return i.each(t, function(t) {
				i.each(r, function(e) {
					var r = e.dim;
					if (e.isCategory || "time" === e.type) {
						var n = t.colArray(r);
						i.each(n, function(t, r) {
							n[r] = e.translate(t)
						}), t.colReplace(r, n)
					}
				})
			}), t
		},
		processAdjust: function(t) {
			var e = this,
				r = e.get("adjusts");
			return i.isNull(r) || (r = i.isArray(r) ? r : r.split(","), i.each(r, function(r) {
				if (!i.inArray(u, r)) throw new Error(i.ucfirst(r) + " is not supported, please use " + u.toString());
				var n = {},
					c = e.getYScale(),
					s = e.getXScale();
				if ("Dodge" === r) {
					var l = [];
					if (s.isCategory) l.push("x");
					else {
						if (c) throw new Error("dodge is not support linear attribute, please use category attribute!");
						l.push("y")
					}
					n = {
						xDim: e.getXDim(),
						yDim: c ? c.dim : null,
						adjustNames: l
					}
				} else if ("Stack" === r) {
					var o = e.getDefaultValue("size") || 3;
					if (n = {
							xDim: e.getXDim(),
							size: o
						}, c) n.yDim = e.getYDim();
					else {
						var h = e.get("coord");
						n.height = h.getHeight()
					}
				} else n = {
					xDim: e.getXDim(),
					yDim: e.getYDim()
				};
				var f = new a[r](n);
				t = f.processAdjust(t)
			})), t
		},
		framePreprocess: function(t) {
			return t
		},
		normalizeFrames: function(t) {
			var e = this,
				r = e.get("attrs"),
				a = [];
			return i.each(t, function(t) {
				var c = [];
				i.each(r, function(r) {
					var i = e._normalizeFrame(t, r);
					c.push(i)
				});
				var s = n.combin.apply(null, c),
					l = t.colArray(o);
				s.addCol(o, l), a.push(s)
			}), a
		},
		getShapePoints: function(t) {
			var e = this,
				r = e.get("shapeType"),
				a = c.createShape(r),
				s = [],
				l = e._getShapeScale(),
				o = "";
			return e.set("shapeObj", a), i.each(t, function(t) {
				var r = [];
				t.each(function(t) {
					l && t.shape && (o = l.invert(t.shape));
					var i = e.getShapePointInfo(t),
						n = a.getShapePoints(i, o);
					t.points = n, r.push(t)
				}), r = new n(r), s.push(r)
			}), s
		},
		execMapping: function(t) {
			var e = this,
				r = e.get("attrs"),
				n = [];
			return i.each(t, function(t) {
				var a = t;
				i.each(r, function(t) {
					if ("position" === t.type) {
						var r = e.get("coord");
						t.setCoord(r)
					}
					a = t.mapping(a)
				}), e.get("hasShapePath") || (a = e._execPointsMapping(a)), n.push(a)
			}), n
		},
		getShapePointInfo: function(t) {
			return t
		},
		sortFrame: function(t) {
			var e = this.getXDim();
			return n.sort(t, e)
		}
	}), t.exports = h
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = function() {};
	n.ATTRS = {
		allowSelected: !1
	}, i.augment(n, {
		allowSelected: function() {
			return this.get("allowSelected")
		},
		getSelectShapes: function(t) {
			var e = this,
				r = e.get("container"),
				n = [],
				a = [];
			if (t) {
				var c = e.getGroup(t.get("coord"));
				a.push(c)
			} else a = r.get("children");
			return i.each(a, function(t) {
				var e = t.get("children");
				i.each(e, function(t) {
					t.get("origin") && n.push(t)
				})
			}), n
		},
		getData: function(t) {
			var e = this,
				r = e.getSelectShapes(t),
				n = [];
			return i.each(r, function(t) {
				var e = t.get("origin");
				e && n.push(e)
			}), n
		},
		getShapeByObj: function(t, e) {
			var r = null;
			return t && i.each(e, function(e) {
				return e.get("origin") === t ? (r = e, !1) : void 0
			}), r
		},
		getSelectedShape: function(t, e) {
			var r = this;
			t = t || r.getSelectShapes(e);
			var n = null;
			return i.each(t, function(t) {
				return t.get("selected") ? (n = t, !1) : void 0
			}), n
		},
		setShapeSelected: function(t, e) {
			var r = this;
			t.set("selected", e), r.setSelectedStatus(t, e)
		},
		setSelectedStatus: function(t, e) {
			var r, n = this,
				a = n.get("activeGroup");
			if (e) {
				var c = t.get("origin"),
					s = n.get("shapeObj"),
					l = c.shape || n.getDefaultValue("shape"),
					o = {
						geom: n,
						coord: t.get("parent").get("coord"),
						point: c
					},
					u = s.getSelectedCfg(l, o);
				r = {}, t.get("originSelectedCfg") || (i.each(u, function(e, i) {
					if ("transform" === i || "matrix" === i) r.matrix = t.getMatrix().clone();
					else {
						var n = t.attr(i);
						n !== e && (r[i] = n)
					}
				}), t.set("originSelectedCfg", r)), t.animate(u, 300)
			} else r = t.get("originSelectedCfg"), t.animate(r, 300);
			n.clearShapeActived(), a && a.get("canvas").draw()
		},
		setSelected: function(t, e) {
			var r = this,
				i = r.get("chart");
			e = e || i.getViews()[0];
			var n = r.getSelectShapes(e),
				a = r.getSelectedShape(n, e),
				c = r.getShapeByObj(t, n);
			a !== c && (a && (r.setShapeSelected(a, !1), i.fire("itemunselected", {
				shape: a,
				data: a.get("origin"),
				view: e,
				geom: r
			})), c && (r.setShapeSelected(c, !0), i.fire("itemselected", {
				shape: c,
				data: t,
				view: e,
				geom: r
			})), i.fire("itemselectedchange", {
				shape: c,
				data: t,
				view: e,
				geom: r,
				preShape: a,
				preData: a ? a.get("origin") : null
			}))
		},
		getSelected: function(t) {
			var e = this,
				r = e.get("chart");
			t = t || r.getViews()[0];
			var i = e.getSelectedShape(null, t),
				n = null;
			return i && (n = i.get("origin")), n
		},
		clearSelected: function(t) {
			this.setSelected(null, t)
		}
	}), t.exports = n
}, function(t, e, r) {
	"use strict";

	function i(t) {
		return t.alias || t.dim
	}
	var n = r(1),
		a = r(6),
		c = "_origin",
		s = function() {};
	s.ATTRS = {
		tooltipMap: {},
		tooltipDims: null
	}, n.augment(s, {
		_snapEqual: function(t, e, r) {
			var i;
			return t = r.translate(t), e = r.translate(e), i = r.isCategory ? t === e : Math.abs(t - e) <= .001
		},
		_getScaleValueByPoint: function(t) {
			var e = 0,
				r = this.get("coord"),
				i = this.getXScale(),
				n = r.invert(t),
				a = n.x;
			return this.isInCircle() && a > (1 + i.rangeMax()) / 2 && (a = i.rangeMin()), e = i.invert(a), i.isCategory && (e = i.translate(e)), e
		},
		_getTipMapScale: function(t) {
			var e = this,
				r = e.get("tooltipMap"),
				i = r && r[t];
			return e._getScale(i)
		},
		_getTipValueScale: function() {
			var t = this,
				e = t._getTipMapScale("value");
			if (!e) {
				var r = t.getLegendAttr();
				n.each(r, function(t) {
					var r = t.getScale(t.type);
					return r.isLinear ? (e = r, !1) : void 0
				})
			}
			return e || t.getYScale() || t.getXScale()
		},
		_getTipTitleSclale: function() {
			var t = this,
				e = t._getTipMapScale("title");
			if (!e) {
				var r, i = t.getAttr("position"),
					a = i.getDims();
				n.each(a, function(t) {
					return -1 === t.indexOf("..") ? (r = t, !1) : void 0
				}), e = t._getScale(r)
			}
			return e
		},
		findPoint: function(t, e) {
			var r = this,
				i = null,
				a = e.toJSON(),
				s = a[0],
				l = a[a.length - 1];
			if (!s) return i;
			var o = r._getScaleValueByPoint(t),
				u = r.getXScale(),
				h = u.dim,
				f = s[c][h],
				d = l[c][h];
			if (n.isArray(f)) n.each(a, function(t) {
				var e = t[c];
				return u.translate(e[h][0]) <= o && u.translate(e[h][1]) >= o ? (i = t, !1) : void 0
			});
			else {
				if (n.isNumber(o) && (o > u.translate(d) || o < u.translate(f))) return null;
				var p;
				n.each(a, function(t, e) {
					var s = t[c];
					return r._snapEqual(s[h], o, u) ? (i = t, !1) : void(n.isNumber(o) && u.translate(s[h]) <= o && (l = t, p = a[e + 1]))
				}), l && p && Math.abs(u.translate(l[c][h]) - o) > Math.abs(u.translate(p[c][h]) - o) && (l = p)
			}
			var g = r.getXDistance();
			return !i && Math.abs(u.translate(l[c][h]) - o) < g / 2 && (i = l), i
		},
		getTipTitle: function(t) {
			var e = this,
				r = e.get("tooltipMap"),
				i = r.title;
			if (i) {
				var n = e._getScale(i);
				if (!n) return i
			}
			var a, c = e._getTipTitleSclale();
			if (c) {
				var s = t[c.dim];
				a = c.getText(s)
			}
			return a
		},
		getTipValue: function(t) {
			var e, r = this,
				i = r._getTipValueScale(),
				a = i.dim;
			if (e = t[a], n.isArray(e)) {
				var c = [];
				n.each(e, function(t) {
					c.push(i.getText(t))
				}), e = c.join(",")
			} else e = i.getText(e);
			return e
		},
		getTipName: function(t) {
			var e, r, a = this,
				c = a.get("tooltipMap"),
				s = c.name;
			if (s && (r = a._getScale(s), !r)) return s;
			var l = a._getGroupScales();
			if (!r && l.length && n.each(l, function(t) {
					return r = t, !1
				}), r) {
				var o = r.dim;
				e = r.getText(t[o])
			} else {
				var u = a._getTipValueScale();
				e = i(u)
			}
			return e
		},
		getTipItems: function(t) {
			function e(e, r) {
				n.isNull(r) || "" === r || f.push({
					title: h,
					point: t,
					name: e || h,
					value: r,
					color: t.color || a.defaultColor,
					marker: !0
				})
			}
			var r, s, l = this,
				o = t[c],
				u = l.get("tooltipDims"),
				h = l.getTipTitle(o),
				f = [];
			return u ? n.each(u, function(t) {
				var n = l._getScale(t);
				r = i(n), s = n.getText(o[t]), e(r, s)
			}) : (s = l.getTipValue(o), r = l.getTipName(o), e(r, s)), f
		},
		getTipInfo: function(t) {
			var e = this,
				r = e.get("frames"),
				i = [];
			return n.each(r, function(r) {
				var n = e.findPoint(t, r);
				if (n) {
					var a = e.getTipItems(n);
					i = i.concat(a)
				}
			}), i
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(6),
		a = {
			getDimWidth: function(t) {
				var e = this,
					r = e.get("coord"),
					i = r.convertPoint({
						x: 0,
						y: 0
					}),
					n = r.convertPoint({
						x: "x" === t ? 1 : 0,
						y: "x" === t ? 0 : 1
					}),
					a = 0;
				return i && n && (a = Math.sqrt(Math.pow(n.x - i.x, 2) + Math.pow(n.y - i.y, 2))), a
			},
			getNormalizeSize: function() {
				var t, e = this,
					r = e.get("coord"),
					a = e.getXScale(),
					c = e.getDefaultValue("size");
				if (i.isNull(c)) {
					var s = a.values.length;
					t = 1 / s;
					var l = 1;
					e.isInCircle() && "schema" !== e.get("type") ? r.isTransposed && s > 1 && (l = n.widthRatio.multiplePie) : l = n.widthRatio.column, t *= l;
					var o = e.get("adjusts");
					if (o && ("Dodge" === o || i.inArray(o, "Dodge"))) {
						var u = e.get("frames");
						t /= u.length
					}
				} else {
					var h;
					h = e.isInCircle() && !r.isTransposed ? (r.get("endAngle") - r.get("startAngle")) * r.get("radius") : e.getDimWidth("x"), t = c / h
				}
				return t
			},
			getXDistance: function() {
				var t, e = this,
					r = e.getXScale();
				return t = r.isCategory ? 1 : (r.max - r.min) / r.values.length
			}
		};
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(24),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	a.ATTRS = {
		type: "point",
		shapeType: "point",
		shape: "hollowCircle",
		animate: !0,
		hasShapePath: !1,
		shareTooltip: !1
	}, i.extend(a, n), i.augment(a, {
		_drawPoint: function(t) {
			var e = this,
				r = e.get("group"),
				n = e.get("shapeObj"),
				a = t.shape || e.get("shape"),
				c = t.points;
			t.coord = e.get("coord");
			var s = n.getShapeCfg(a, t);
			i.each(c, function(e) {
				var n = i.mix({
						x: e.x,
						y: e.y,
						zIndex: 5
					}, s),
					a = r.addShape("Marker", {
						attrs: n
					});
				a.set("origin", t)
			})
		},
		drawFrame: function(t) {
			var e = this;
			t.each(function(t) {
				0 !== t.size && e._drawPoint(t)
			})
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		for (var r = t.x, i = t.y, n = r[0], a = i[0], c = r[0], s = i[0], l = 0; l < r.length; l++) {
			var o = r[l],
				u = i[l];
			n >= o && (n = o), o >= c && (c = o), a >= u && (a = u), u >= s && (s = u)
		}
		var h = e.x >= n && e.x <= c && e.y >= a && e.y <= s;
		return h
	}
	var n = r(1),
		a = r(24),
		c = Math.abs,
		s = function(t) {
			s.superclass.constructor.call(this, t)
		};
	s.ATTRS = {
		type: "polygon",
		shapeType: "polygon",
		lineToArc: !0,
		shareTooltip: !1
	}, n.extend(s, a), n.augment(s, {
		drawFrame: function(t) {
			var e = this,
				r = e.get("group");
			t.each(function(t) {
				e.addPolygon(t, r)
			})
		},
		getShapeCfg: function(t) {
			var e = this,
				r = e.get("shapeObj"),
				i = t.shape,
				n = r.getShapeCfg(i, t);
			return n.path = e.mappingPath(n.path), n
		},
		addPolygon: function(t, e) {
			var r = this,
				i = r.getShapeCfg(t),
				n = e.addShape("path", {
					attrs: i
				});
			n.set("origin", t)
		},
		getShapePointInfo: function(t) {
			var e, r = this,
				i = t.x,
				a = t.y;
			if (!n.isArray(i) || !n.isArray(a)) {
				var c = r.getXScale(),
					s = r.getYScale(),
					l = r._getScaleOffset(c),
					o = r._getScaleOffset(s);
				if (c.isCategory && s.isCategory) i = [i - l, i - l, i + l, i + l], a = [a - o, a + o, a + o, a - o];
				else if (n.isArray(i)) e = i, i = [e[0], e[0], e[1], e[1]], a = [a - o / 2, a + o / 2, a + o / 2, a - o / 2];
				else {
					if (!n.isArray(a)) throw new Error("Generated polygon, continuous field must pass in an array\uff01");
					e = a, a = [e[0], e[1], e[1], e[0]], i = [i - l / 2, i - l / 2, i + l / 2, i + l / 2]
				}
			}
			var u = n.mix({}, t, {
				x: i,
				y: a
			});
			return u
		},
		_getScaleOffset: function(t) {
			return t.scale(1) - t.scale(.5)
		},
		isSnapPoint: function(t, e, r) {
			var a, s = this,
				l = s.get("snapDistance"),
				o = s.getXScale(),
				u = s.getYScale(),
				h = r.invert(t);
			if (n.isArray(e.x) && n.isArray(e.y)) a = i(e, t);
			else {
				var f = r.trans(e.x, e.y, 1),
					d = !1,
					p = !1;
				d = o.isCategory ? o.translate(o.invert(h.x)) === e[o.dim] : c(f.x - t.x) < l, p = u && u.isCategory ? u.translate(u.invert(h.y)) === e[u.dim] : c(f.y - t.y) < l, a = d && p
			}
			return a
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(24),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	a.ATTRS = {
		type: "schema",
		shapeType: "schema",
		lineToArc: !0,
		animate: !0,
		snapAll: !1
	}, i.extend(a, n), i.augment(a, {
		drawFrame: function(t) {
			var e = this,
				r = e.get("group");
			t.each(function(t) {
				e.addSchema(t, r)
			})
		},
		getShapeCfg: function(t) {
			var e = this,
				r = e.get("shapeObj"),
				i = {
					color: t.color,
					size: t.size,
					opacity: t.opacity,
					point: t
				},
				n = r.getShapeCfg(t.shape, i);
			return n.path = e.mappingPath(n.path), n
		},
		getShapePointInfo: function(t) {
			var e = this,
				r = {},
				n = t.size;
			return (i.isNull(n) || n >= 1) && (n = e.getNormalizeSize()), i.mix(r, t, {
				size: n
			}), r
		},
		addSchema: function(t, e) {
			var r = this;
			if (!isNaN(t.x) || i.isArray(t.x)) {
				var n = r.getShapeCfg(t),
					a = e.addShape("path", {
						attrs: n
					});
				a.set("origin", t)
			}
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";

	function i(t) {
		var e = g.shape.area,
			r = f.mix(!0, {}, e, {
				fill: t.color,
				stroke: t.color,
				"stroke-width": t.size,
				"fill-opacity": t.opacity
			});
		return r
	}

	function n(t) {
		var e = g.shape.hollowArea,
			r = f.mix(!0, {}, e, {
				stroke: t.color,
				"stroke-width": t.size,
				"stroke-opacity": t.opacity
			});
		return r
	}

	function a(t, e, r, i) {
		var n = "",
			a = [],
			c = [],
			s = [];
		return f.each(t, function(t) {
			var e = t.points;
			c.push(e[0]), s.push(e[1])
		}), s = s.reverse(), a.push(c, s), f.each(a, function(t, a) {
			var c = "";
			if (c = e ? d.getSplinePath(t, !1, r) : d.getLinePath(t, !1), i) {
				var s = t[0];
				c += f.substitute("L {x} {y}", s)
			} else a > 0 && (c = c.replace("M", "L"));
			n += c
		}), n += "z"
	}

	function c(t, e) {
		var r = t.points,
			i = t.yDim,
			n = t.coord,
			c = t.isInCircle,
			s = "",
			l = d.splitPoints(r, i);
		return f.each(l, function(t) {
			s += a(t, e, n, c)
		}), f.path2Absolute(s)
	}

	function s(t, e, r) {
		var a = c(t, e),
			s = r ? n(t) : i(t);
		return f.mix({
			path: a
		}, s)
	}

	function l(t, e, r) {
		return [
			["M", t - r, e + r],
			["L", t - r, e - r],
			["L", t, e],
			["L", t + r, e - r],
			["L", t + r, e + r],
			["z"]
		]
	}

	function o(t, e, r) {
		return f.path2Absolute([
			["M", t - r, e + r],
			["L", t - r, e],
			["R", t - r / 2, e - r / 2, t, e, t + r / 2, e + r / 2, t + r, e],
			["L", t + r, e + r],
			["z"]
		])
	}

	function u(t, e, r) {
		var a = r ? n(t) : i(t);
		return f.mix({
			symbol: e ? o : l
		}, a)
	}

	function h(t) {
		return t && -1 !== t.indexOf("line") ? g.activeShape.hollowArea : g.activeShape.area
	}
	var f = r(1),
		d = r(26),
		p = r(25),
		g = r(6),
		y = [2, 1],
		v = p.registGeom("area", {
			defaultShapeType: "area",
			getShapePoints: function(t) {
				var e = [],
					r = t.x,
					i = t.y,
					n = t.y0;
				return i = f.isArray(i) ? i : [n, i], f.each(i, function(t) {
					e.push({
						x: r,
						y: t
					})
				}), e
			},
			getShapeCfg: function(t, e) {
				var r = this.getShape(t);
				return r.getShapeCfg(e)
			},
			getMarkerCfg: function(t, e) {
				var r = this.getShape(t);
				return r.getMarkerCfg(e)
			},
			getActiveCfg: function(t) {
				return h(t)
			}
		});
	p.registShape("area", "area", {
		getShapeCfg: function(t) {
			return s(t, !1, !1)
		},
		getMarkerCfg: function(t) {
			return u(t, !1, !1)
		}
	}), p.registShape("area", "smooth", {
		getShapeCfg: function(t) {
			return s(t, !0, !1)
		},
		getMarkerCfg: function(t) {
			return u(t, !0, !1)
		}
	}), v.spline = v.smooth, p.registShape("area", "line", {
		getShapeCfg: function(t) {
			return s(t, !1, !0)
		},
		getMarkerCfg: function(t) {
			return u(t, !1, !0)
		}
	}), p.registShape("area", "dotLine", {
		getShapeCfg: function(t) {
			var e = s(t, !1, !0);
			return e["stroke-dasharray"] = y, e
		},
		getMarkerCfg: function(t) {
			var e = u(t, !1, !0);
			return e["stroke-dasharray"] = y, e
		}
	}), p.registShape("area", "smoothLine", {
		getShapeCfg: function(t) {
			return s(t, !0, !0)
		},
		getMarkerCfg: function(t) {
			return u(t, !0, !0)
		}
	}), p.registShape("area", "dotSmoothLine", {
		getShapeCfg: function(t) {
			var e = s(t, !0, !0);
			return e["stroke-dasharray"] = y, e
		},
		getMarkerCfg: function(t) {
			var e = u(t, !0, !0);
			return e["stroke-dasharray"] = y, e
		}
	}), t.exports = v
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		var r, i, n, a, c = e.getRadius(),
			s = e.get("inner"),
			l = c * s;
		return p.isArray(t.x) ? (n = {
			x: t.x[0],
			y: t.y[0]
		}, a = {
			x: t.x[1],
			y: t.y[1]
		}, r = v.getPointAngle(e, n), i = v.getPointAngle(e, a), r >= i && (i += 2 * Math.PI)) : (a = t, r = e.get("startAngle"), i = v.getPointAngle(e, a)), {
			r: c,
			ir: l,
			startAngle: r,
			endAngle: i
		}
	}

	function n(t) {
		return t && "rect" !== t ? g.activeShape.hollowInterval : g.activeShape.interval
	}

	function a(t, e) {
		var r = e.coord,
			n = e.point,
			a = 7.5;
		if (r && "theta" === r.type) {
			var c = i(n, r),
				s = (c.endAngle - c.startAngle) / 2 + c.startAngle,
				l = a * Math.cos(s),
				o = a * Math.sin(s);
			e = {
				transform: [
					["t", l, o]
				]
			}
		}
		return e
	}

	function c(t) {
		var e = g.shape.interval,
			r = {},
			i = p.mix(!0, {}, e, {
				fill: t.color,
				stroke: t.color,
				"fill-opacity": t.opacity
			}, r);
		return i
	}

	function s(t) {
		var e = g.shape.hollowInterval,
			r = p.mix(!0, {}, e, {
				stroke: t.color,
				"stroke-opacity": t.opacity
			});
		return r
	}

	function l(t, e) {
		var r = t.x,
			i = t.y,
			n = t.y0,
			a = t.size,
			c = n,
			s = i;
		p.isArray(i) && (s = i[1], c = i[0]);
		var l, o;
		p.isArray(r) ? (l = r[0], o = r[1]) : (l = r - a / 2, o = r + a / 2);
		var u = [];
		return u.push({
			x: l,
			y: c
		}, {
			x: l,
			y: s
		}), e ? u.push({
			x: o,
			y: (s + c) / 2
		}) : u.push({
			x: o,
			y: s
		}, {
			x: o,
			y: c
		}), u
	}

	function o(t) {
		for (var e = [], r = 0; r < t.length; r++) {
			var i = t[r],
				n = 0 === r ? "M" : "L";
			e.push([n, i.x, i.y])
		}
		var a = t[0];
		return e.push(["L", a.x, a.y]), e.push(["z"]), e
	}

	function u(t) {
		var e = t.x,
			r = t.y,
			i = t.y0,
			n = [];
		return p.isArray(r) ? p.each(r, function(t, r) {
			n.push({
				x: p.isArray(e) ? e[r] : e,
				y: t
			})
		}) : n.push({
			x: e,
			y: r
		}, {
			x: e,
			y: i
		}), n
	}

	function h(t) {
		var e = t.x,
			r = p.isArray(t.y) ? t.y[1] : t.y,
			i = p.isArray(t.y) ? t.y[0] : t.y0,
			n = t.size || 5,
			a = [];
		return a.push({
			x: e - n / 2,
			y: r
		}, {
			x: e + n / 2,
			y: r
		}, {
			x: e,
			y: r
		}, {
			x: e,
			y: i
		}, {
			x: e - n / 2,
			y: i
		}, {
			x: e + n / 2,
			y: i
		}), a
	}

	function f(t) {
		var e = [];
		return e.push(["M", t[0].x, t[0].y], ["L", t[1].x, t[1].y], ["M", t[2].x, t[2].y], ["L", t[3].x, t[3].y], ["M", t[4].x, t[4].y], ["L", t[5].x, t[5].y]), e
	}

	function d(t, e) {
		var r = [],
			i = t.point.points,
			n = t.nextPoint;
		if (p.isNull(n)) e ? r.push(["M", i[0].x, i[0].y], ["L", i[1].x, i[1].y], ["L", i[2].x, i[2].y], ["L", i[3].x, i[3].y], ["Z"]) : r.push(["M", i[0].x, i[0].y], ["L", i[1].x, i[1].y], ["L", i[2].x, i[2].y], ["Z"]);
		else {
			var a = n.points;
			r.push(["M", i[0].x, i[0].y], ["L", i[1].x, i[1].y], ["L", a[1].x, a[1].y], ["L", a[0].x, a[0].y], ["Z"])
		}
		return r
	}
	var p = r(1),
		g = r(6),
		y = r(25),
		v = r(26),
		m = y.registGeom("interval", {
			defaultShapeType: "rect",
			getActiveCfg: function(t) {
				return n(t)
			},
			getSelectedCfg: function(t, e) {
				return a(t, e)
			}
		});
	y.registShape("interval", "rect", {
		getShapePoints: function(t) {
			return l(t, !1)
		},
		getShapeCfg: function(t) {
			var e = c(t);
			return e.path = o(t.point.points), e
		},
		getMarkerCfg: function(t) {
			var e = c(t),
				r = t.isInCircle,
				i = r ? "circle" : "square";
			return p.mix({
				symbol: i
			}, e)
		}
	}), y.registShape("interval", "hollowRect", {
		getShapePoints: function(t) {
			return l(t, !1)
		},
		getShapeCfg: function(t) {
			var e = s(t);
			return e.path = o(t.point.points), e
		},
		getMarkerCfg: function(t) {
			var e = s(t),
				r = t.isInCircle,
				i = r ? "circle" : "square";
			return p.mix({
				symbol: i
			}, e)
		}
	}), y.registShape("interval", "stroke", {
		getShapePoints: function(t) {
			return l(t, !1)
		},
		getShapeCfg: function(t) {
			var e = c(t);
			return e.path = o(t.point.points), p.mix(e, g.shape.strokeInterval)
		},
		getMarkerCfg: function(t) {
			var e = c(t),
				r = t.isInCircle,
				i = r ? "circle" : "square";
			return p.mix({
				symbol: i
			}, e, g.shape.strokeInterval)
		}
	}), y.registShape("interval", "line", {
		getShapePoints: function(t) {
			return u(t)
		},
		getShapeCfg: function(t) {
			var e = s(t);
			return e.path = o(t.point.points), e
		},
		getMarkerCfg: function(t) {
			var e = s(t);
			return p.mix({
				symbol: "line"
			}, e)
		}
	}), y.registShape("interval", "tick", {
		getShapePoints: function(t) {
			return h(t)
		},
		getShapeCfg: function(t) {
			var e = s(t);
			return e.path = f(t.point.points), e
		},
		getMarkerCfg: function(t) {
			var e = s(t);
			return p.mix({
				symbol: "tick"
			}, e)
		}
	}), y.registShape("interval", "funnel", {
		getShapePoints: function(t) {
			return t.size = 2 * t.size, l(t, !1)
		},
		getShapeCfg: function(t) {
			var e = c(t);
			return e.path = d(t, !0), e
		},
		getMarkerCfg: function(t) {
			var e = c(t);
			return p.mix({
				symbol: "square"
			}, e)
		}
	}), y.registShape("interval", "pyramid", {
		getShapePoints: function(t) {
			return t.size = 2 * t.size, l(t, !0)
		},
		getShapeCfg: function(t) {
			var e = c(t);
			return e.path = d(t, !1), e
		},
		getMarkerCfg: function(t) {
			var e = c(t);
			return p.mix({
				symbol: "square"
			}, e)
		}
	}), t.exports = m
}, function(t, e, r) {
	"use strict";

	function i(t, e, r, i) {
		for (var n = t[0], a = "", c = 0, s = n.points.length; s > c; c++) {
			var l = p.map(t, function(t) {
				return t.points[c]
			});
			a += e ? g.getSplinePath(l, r, i) : g.getLinePath(l, r, e)
		}
		return a
	}

	function n(t, e) {
		var r = t.points,
			n = t.yDim,
			a = t.isInCircle,
			c = t.coord,
			s = "",
			l = g.splitPoints(r, n);
		return p.each(l, function(t) {
			s += i(t, e, a, c)
		}), p.path2Absolute(s)
	}

	function a(t) {
		var e = v.shape.line,
			r = p.mix(!0, {}, e, {
				stroke: t.color,
				"stroke-width": t.size
			});
		return t.opacity && (r.opacity = t.opacity), r
	}

	function c(t, e) {
		var r = n(t, e);
		return p.mix({
			path: r
		}, a(t))
	}

	function s(t, e, r) {
		return [
			["M", t - r, e],
			["L", t + r, e]
		]
	}

	function l(t, e, r) {
		return p.path2Absolute([
			["M", t - r, e],
			["R", t - r / 2, e - r / 2, t, e, t + r / 2, e + r / 2, t + r, e]
		])
	}

	function o(t, e) {
		return p.mix({
			symbol: e ? l : s
		}, a(t))
	}

	function u(t, e) {
		var r = [];
		return p.each(t, function(i, n) {
			var a = t[n + 1];
			r.push(i), a && (r = r.concat(e(i, a)))
		}), r
	}

	function h(t) {
		var e = "";
		return p.each(t, function(t, r) {
			var i = 0 === r ? "M {x} {y}" : "L {x} {y}";
			e += p.substitute(i, t)
		}), e
	}

	function f(t, e) {
		var r = [];
		p.each(t.points, function(t) {
			var e = t.points;
			p.each(e, function(t) {
				r.push({
					x: t.x,
					y: t.y
				})
			})
		});
		var i = u(r, e),
			n = p.mix({}, t),
			c = h(i);
		return p.mix({
			path: c
		}, a(n))
	}

	function d(t, e) {
		return p.mix({
			symbol: e
		}, a(t))
	}
	var p = r(1),
		g = r(26),
		y = r(25),
		v = r(6),
		m = [2, 1],
		x = [10, 5],
		C = y.registGeom("line", {
			defaultShapeType: "line",
			getShapePoints: function(t) {
				var e = [],
					r = t.x,
					i = t.y;
				return i = p.isArray(i) ? i : [i], p.each(i, function(t, i) {
					e.push({
						x: p.isArray(r) ? r[i] : r,
						y: t
					})
				}), e
			},
			getShapeCfg: function(t, e) {
				var r = C[t] || C.line;
				return r.getShapeCfg(e)
			},
			getMarkerCfg: function(t, e) {
				var r = C[t] || C.line;
				return r.getMarkerCfg(e)
			},
			getActiveCfg: function() {
				return v.activeShape.line
			}
		});
	y.registShape("line", "line", {
		getShapeCfg: function(t) {
			return c(t)
		},
		getMarkerCfg: function(t) {
			return o(t)
		}
	}), y.registShape("line", "dot", {
		getShapeCfg: function(t) {
			var e = c(t, !1);
			return e["stroke-dasharray"] = m, e
		},
		getMarkerCfg: function(t) {
			var e = o(t, !1);
			return e["stroke-dasharray"] = m, e
		}
	}), y.registShape("line", "fill", {
		getShapeCfg: function(t) {
			var e = c(t, !1);
			return e.path.push(["z"]), e.fill = e.stroke, e.stroke = null, e
		},
		getMarkerCfg: function(t) {
			var e = o(t, !1);
			return e.fill = e.stroke, e
		}
	}), y.registShape("line", "dash", {
		getShapeCfg: function(t) {
			var e = c(t, !1);
			return e["stroke-dasharray"] = x, e
		},
		getMarkerCfg: function(t) {
			var e = o(t, !1);
			return e["stroke-dasharray"] = x, e
		}
	}), y.registShape("line", "smooth", {
		getShapeCfg: function(t) {
			return c(t, !0)
		},
		getMarkerCfg: function(t) {
			return o(t, !0)
		}
	}), C.spline = C.smooth, y.registShape("line", "dotSmooth", {
		getShapeCfg: function(t) {
			var e = c(t, !0);
			return e["stroke-dasharray"] = m, e
		},
		getMarkerCfg: function(t) {
			var e = o(t, !0);
			return e["stroke-dasharray"] = m, e
		}
	}), y.registShape("line", "hv", {
		getShapeCfg: function(t) {
			return f(t, function(t, e) {
				var r = [];
				return r.push({
					x: e.x,
					y: t.y
				}), r
			})
		},
		getMarkerCfg: function(t) {
			return d(t, function(t, e, r) {
				return [
					["M", t - r, e - r],
					["L", t, e - r],
					["L", t, e],
					["L", t + r, e]
				]
			})
		}
	}), y.registShape("line", "vh", {
		getShapeCfg: function(t) {
			return f(t, function(t, e) {
				var r = [];
				return r.push({
					x: t.x,
					y: e.y
				}), r
			})
		},
		getMarkerCfg: function(t) {
			return d(t, function(t, e, r) {
				return [
					["M", t - r, e],
					["L", t, e],
					["L", t, e - r],
					["L", t + r, e - r]
				]
			})
		}
	}), y.registShape("line", "hvh", {
		getShapeCfg: function(t) {
			return f(t, function(t, e) {
				var r = [],
					i = (e.x - t.x) / 2 + t.x;
				return r.push({
					x: i,
					y: t.y
				}), r.push({
					x: i,
					y: e.y
				}), r
			})
		},
		getMarkerCfg: function(t) {
			return d(t, function(t, e, r) {
				return [
					["M", t - 3 * r / 2, e],
					["L", t - r / 2, e],
					["L", t - r / 2, e - r / 2],
					["L", t + r / 2, e - r / 2],
					["L", t + r / 2, e],
					["L", t + 3 * r / 2, e]
				]
			})
		}
	}), y.registShape("line", "vhv", {
		getShapeCfg: function(t) {
			return f(t, function(t, e) {
				var r = [],
					i = (e.y - t.y) / 2 + t.y;
				return r.push({
					x: t.x,
					y: i
				}), r.push({
					x: e.x,
					y: i
				}), r
			})
		},
		getMarkerCfg: function(t) {
			return d(t, function(t, e, r) {
				return [
					["M", t - r, e],
					["L", t - r, e - r / 2],
					["L", t, e - r / 2],
					["L", t, e - r],
					["L", t, e + r / 2],
					["L", t + r, e + r / 2]
				]
			})
		}
	}), t.exports = C
}, function(t, e, r) {
	"use strict";

	function i(t, e) {
		var r = h.shape.point,
			i = o.mix(!0, {}, r, {
				fill: e.color,
				stroke: e.color,
				symbol: t,
				"fill-opacity": e.opacity,
				radius: e.size
			});
		return i
	}

	function n(t, e) {
		var r = h.shape.hollowPoint,
			i = o.mix(!0, {}, r, {
				stroke: e.color,
				symbol: t,
				"stroke-opacity": e.opacity,
				radius: e.size
			});
		return i
	}

	function a(t) {
		return !t || 0 !== t.indexOf("hollow") && -1 === o.indexOf(p, t) ? h.activeShape.point : h.activeShape.hollowPoint
	}

	function c(t) {
		var e = t.coord,
			r = .02,
			i = t.size / 10,
			n = i - .02,
			a = Math.atan(r / n) / (2 * Math.PI),
			c = e.convertPoint({
				x: 0,
				y: 0
			}),
			s = e.invertPoint({
				x: t.x,
				y: t.y
			}),
			l = e.convertPoint({
				x: s.x,
				y: i
			}),
			o = e.convertPoint({
				x: s.x + a,
				y: n
			}),
			u = e.convertPoint({
				x: s.x - a,
				y: n
			});
		return [
			["M", c.x, c.y],
			["L", l.x, l.y],
			["L", o.x, o.y],
			["M", l.x, l.y],
			["L", u.x, u.y]
		]
	}

	function s(t) {
		var e = t.coord,
			r = e.convertPoint({
				x: 0,
				y: 0
			}),
			i = e.invertPoint({
				x: t.x,
				y: t.y
			}),
			n = e.convertPoint({
				x: i.x,
				y: t.size / 10
			});
		return [
			["M", r.x, r.y],
			["L", n.x, n.y]
		]
	}

	function l(t) {
		var e = t.coord,
			r = t.size / 10,
			i = e.invertPoint({
				x: t.x,
				y: t.y
			}),
			n = e.convertPoint({
				x: i.x,
				y: 0
			}),
			a = e.convertPoint({
				x: i.x,
				y: r
			}),
			c = (a.y - n.y) / (a.x - n.x),
			s = Math.PI / 2 - Math.atan(c),
			l = [],
			o = t.size * Math.cos(s),
			u = t.size * Math.sin(s);
		return l.push(["M", n.x - o, n.y + u]), l.push(["L", a.x - o, a.y + u]), l.push(["L", a.x + o, a.y - u]), l.push(["L", n.x + o, n.y - u]), l.push(["z"]), l
	}
	var o = r(1),
		u = r(11),
		h = r(6),
		f = r(25),
		d = ["circle", "square", "bowtie", "diamond", "hexagon", "triangle", "triangle-down", "pointerRect"],
		p = ["cross", "tick", "plus", "hyphen", "line", "pointerLine", "pointerArrow"],
		g = Math.sqrt(3);
	o.mix(u.Shape.Marker.Symbols, {
		hexagon: function(t, e, r) {
			var i = r / 2 * g;
			return [
				["M", t, e - r],
				["L", t + i, e - r / 2],
				["L", t + i, e + r / 2],
				["L", t, e + r],
				["L", t - i, e + r / 2],
				["L", t - i, e - r / 2],
				["z"]
			]
		},
		bowtie: function(t, e, r) {
			return [
				["M", t - r, e - r],
				["L", t + r, e + r],
				["L", t + r, e - r],
				["L", t - r, e + r],
				["z"]
			]
		},
		cross: function(t, e, r) {
			return [
				["M", t - r, e - r],
				["L", t + r, e + r],
				["M", t + r, e - r],
				["L", t - r, e + r]
			]
		},
		tick: function(t, e, r) {
			return [
				["M", t - r / 2, e - r],
				["L", t + r / 2, e - r],
				["M", t, e - r],
				["L", t, e + r],
				["M", t - r / 2, e + r],
				["L", t + r / 2, e + r]
			]
		},
		plus: function(t, e, r) {
			return [
				["M", t - r, e],
				["L", t + r, e],
				["M", t, e - r],
				["L", t, e + r]
			]
		},
		hyphen: function(t, e, r) {
			return [
				["M", t - r, e],
				["L", t + r, e]
			]
		},
		line: function(t, e, r) {
			return [
				["M", t, e - r],
				["L", t, e + r]
			]
		},
		pointerLine: function(t, e, r) {
			return [
				["M", t, e - r],
				["L", t, e + r]
			]
		}
	});
	var y = f.registGeom("point", {
		defaultShapeType: "circle",
		getShapePoints: function(t) {
			var e = [],
				r = t.x,
				i = t.y;
			return i = o.isArray(i) ? i : [i], o.each(i, function(t, i) {
				var n = {
					x: o.isArray(r) ? r[i] : r,
					y: t
				};
				e.push(n)
			}), e
		},
		getShapeCfg: function(t, e) {
			var r = this.getShape(t);
			return r.getShapeCfg(e)
		},
		getMarkerCfg: function(t, e) {
			return y.getShapeCfg(t, e)
		},
		getActiveCfg: function(t, e) {
			var r = a(t);
			return e && e.size && delete r.radius, r
		}
	});
	o.each(d, function(t) {
		f.registShape("point", t, {
			getShapeCfg: function(e) {
				return i(t, e)
			}
		}), f.registShape("point", "hollow" + o.ucfirst(t), {
			getShapeCfg: function(e) {
				return n(t, e)
			}
		})
	}), o.each(p, function(t) {
		f.registShape("point", t, {
			getShapeCfg: function(e) {
				return n(t, e)
			}
		})
	}), f.registShape("point", "pointerArrow", {
		getShapeCfg: function(t) {
			var e = h.shape.hollowPoint,
				r = o.mix(!0, {}, e, {
					stroke: t.color,
					"stroke-width": 2,
					"fill-opacity": t.opacity,
					radius: t.size,
					symbol: function() {
						return c(t)
					}
				});
			return r
		}
	}), f.registShape("point", "pointerLine", {
		getShapeCfg: function(t) {
			var e = h.shape.hollowPoint,
				r = o.mix(!0, {}, e, {
					stroke: t.color,
					"fill-opacity": t.opacity,
					radius: t.size,
					symbol: function() {
						return s(t)
					}
				});
			return r
		}
	}), f.registShape("point", "pointerRect", {
		getShapeCfg: function(t) {
			var e = h.shape.point,
				r = o.mix(!0, {}, e, {
					fill: t.color,
					stroke: t.color,
					"fill-opacity": t.opacity,
					radius: t.size,
					symbol: function() {
						return l(t)
					}
				});
			return r
		}
	}), t.exports = y
}, function(t, e, r) {
	"use strict";

	function i() {
		return o.activeShape.polygon
	}

	function n(t) {
		return t.color || o.defaultColor
	}

	function a(t, e) {
		var r = {
			"fill-opacity": t.opacity
		};
		return l.mix(!0, {}, e, r)
	}

	function c(t, e) {
		var r = [];
		return l.each(t, function(t, i) {
			var n = e[i];
			r.push({
				x: t,
				y: n
			})
		}), r
	}

	function s(t) {
		var e = "",
			r = [t[0].x, t[0].y],
			i = 0,
			n = t[0];
		return l.each(t, function(a, c) {
			var s = 0 === c ? "M {x} {y}" : "L {x} {y} ";
			if (e += l.substitute(s, a), i !== c && c < t.length - 1 && l.equalsArray(r, [a.x, a.y])) {
				var o = t[c + 1];
				e += "z" + l.substitute("M {x} {y}", o), n = o, i = c + 1, r = [o.x, o.y]
			}
		}), e += l.substitute("L {x} {y}", n), e += "z", l.path2Absolute(e)
	}
	var l = r(1),
		o = r(6),
		u = r(25),
		h = u.registGeom("polygon", {
			defaultShapeType: "polygon",
			getShapePoints: function(t) {
				return c(t.x, t.y)
			},
			getMarkerCfg: function() {
				return {
					symbol: "rect"
				}
			},
			getActiveCfg: function(t) {
				return i(t)
			}
		});
	u.registShape("polygon", "polygon", {
		getShapeCfg: function(t) {
			var e = a(t, o.shape.polygon);
			return e.fill = n(t), e.path = s(t.points), e
		}
	}), u.registShape("polygon", "hollow", {
		getShapeCfg: function(t) {
			var e = a(t, o.shape.hollowPolygon);
			return e.stroke = n(t), e.path = s(t.points), e
		}
	}), u.registShape("polygon", "stroke", {
		getShapeCfg: function(t) {
			var e = a(t, o.shape.strokePolygon);
			return e.fill = n(t), e.path = s(t.points), e
		}
	}), t.exports = h
}, function(t, e, r) {
	"use strict";

	function i(t) {
		var e = g.shape.line,
			r = p.mix(!0, {}, e, {
				stroke: t.color,
				fill: "#fff",
				"fill-opacity": 0,
				"stroke-opacity": t.opacity
			});
		return r
	}

	function n(t, e) {
		return p.mix({
			symbol: e
		}, i(t))
	}

	function a(t) {
		p.isArray(t) || (t = [t]);
		var e = t[0],
			r = t[t.length - 1],
			i = t.length > 1 ? t[1] : e,
			n = t.length > 3 ? t[3] : r,
			a = t.length > 2 ? t[2] : i;
		return {
			min: e,
			max: r,
			min1: i,
			max1: n,
			median: a
		}
	}

	function c(t, e) {
		p.each(t, function(t) {
			e.push({
				x: t[0],
				y: t[1]
			})
		})
	}

	function s(t, e, r) {
		var i, n, s = [];
		return p.isArray(e) ? (n = a(e), i = [
			[t - r / 2, n.max],
			[t + r / 2, n.max],
			[t, n.max],
			[t, n.max1],
			[t - r / 2, n.min1],
			[t - r / 2, n.max1],
			[t + r / 2, n.max1],
			[t + r / 2, n.min1],
			[t, n.min1],
			[t, n.min],
			[t - r / 2, n.min],
			[t + r / 2, n.min],
			[t - r / 2, n.median],
			[t + r / 2, n.median]
		]) : (e = e || .5, n = a(t), i = [
			[n.min, e - r / 2],
			[n.min, e + r / 2],
			[n.min, e],
			[n.min1, e],
			[n.min1, e - r / 2],
			[n.min1, e + r / 2],
			[n.max1, e + r / 2],
			[n.max1, e - r / 2],
			[n.max1, e],
			[n.max, e],
			[n.max, e - r / 2],
			[n.max, e + r / 2],
			[n.median, e - r / 2],
			[n.median, e + r / 2]
		]), c(i, s), s
	}

	function l(t) {
		var e = [
			["M", t[0].x, t[0].y],
			["L", t[1].x, t[1].y],
			["M", t[2].x, t[2].y],
			["L", t[3].x, t[3].y],
			["M", t[4].x, t[4].y],
			["L", t[5].x, t[5].y],
			["L", t[6].x, t[6].y],
			["L", t[7].x, t[7].y],
			["L", t[4].x, t[4].y],
			["Z"],
			["M", t[8].x, t[8].y],
			["L", t[9].x, t[9].y],
			["M", t[10].x, t[10].y],
			["L", t[11].x, t[11].y],
			["M", t[12].x, t[12].y],
			["L", t[13].x, t[13].y]
		];
		return e
	}

	function o(t) {
		var e = t.point,
			r = e.points,
			n = l(r),
			a = i(t);
		return a.path = n, p.mix(a, i(t))
	}

	function u(t) {
		p.isArray(t) || (t = [t]);
		var e = t.sort(function(t, e) {
				return e > t ? 1 : -1
			}),
			r = e.length;
		if (4 > r)
			for (var i = e[r - 1], n = 0; 4 - r > n; n++) e.push(i);
		return e
	}

	function h(t, e, r) {
		var i = u(e),
			n = [{
				x: t,
				y: i[0]
			}, {
				x: t,
				y: i[1]
			}, {
				x: t - r / 2,
				y: i[2]
			}, {
				x: t - r / 2,
				y: i[1]
			}, {
				x: t + r / 2,
				y: i[1]
			}, {
				x: t + r / 2,
				y: i[2]
			}, {
				x: t,
				y: i[2]
			}, {
				x: t,
				y: i[3]
			}];
		return n
	}

	function f(t) {
		var e = [
			["M", t[0].x, t[0].y],
			["L", t[1].x, t[1].y],
			["M", t[2].x, t[2].y],
			["L", t[3].x, t[3].y],
			["L", t[4].x, t[4].y],
			["L", t[5].x, t[5].y],
			["Z"],
			["M", t[6].x, t[6].y],
			["L", t[7].x, t[7].y]
		];
		return e
	}

	function d(t) {
		var e = t.point,
			r = e.points,
			n = f(r);
		return p.mix({
			path: n
		}, i(t))
	}
	var p = r(1),
		g = r(6),
		y = r(25),
		v = y.registGeom("schema", {
			getActiveCfg: function() {
				return g.activeShape.line
			}
		});
	y.registShape("schema", "box", {
		getShapePoints: function(t) {
			return s(t.x, t.y, t.size)
		},
		getShapeCfg: function(t) {
			return o(t)
		},
		getMarkerCfg: function(t) {
			return n(t, function(t, e, r) {
				var i = [e - r, e - r / 2, e, e + r / 2, e + r],
					n = s(t, i, 2 * r);
				return l(n)
			})
		}
	}), y.registShape("schema", "candle", {
		getShapePoints: function(t) {
			return h(t.x, t.y, t.size)
		},
		getShapeCfg: function(t) {
			var e = d(t);
			return e.fill = t.color, e["fill-opacity"] = t.opacity, e["stroke-width"] = 1, e
		},
		getMarkerCfg: function(t) {
			var e = n(t, function(t, e, r) {
				e = [e + 1.5 * r, e + r / 2, e - r / 2, e - 1.5 * r];
				var i = h(t, e, r);
				return f(i)
			});
			return e.fill = t.color, e["fill-opacity"] = t.opacity, e
		}
	}), t.exports = v
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(20),
		a = 1,
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	i.extend(c, n), i.augment(c, {
		start: [],
		end: [],
		cfg: {
			stroke: "#000"
		},
		parsePoint: function(t, e) {
			var r = this,
				i = r.xScale,
				n = r.yScale,
				a = e[0],
				c = e[1];
			return i && (a = i.scale(a)), n && (c = n.scale(c)), a = 0 === a ? .001 : a, a = 1 === a ? .999 : a, c = 1 === c ? .999 : c, t.convert({
				x: a,
				y: c
			})
		},
		getPath: function(t) {
			var e = this,
				r = e.parsePoint(t, e.start),
				i = e.parsePoint(t, e.end),
				n = t.invertPoint(r),
				a = t.invertPoint(i),
				c = {
					x: (a.x + n.x) / 2,
					y: n.y
				},
				s = t.convertPoint(c),
				l = this.getPointAngle(t, r),
				o = this.getPointAngle(t, i),
				u = Math.abs(o - l) / 2,
				h = e.getArc(t, s, u);
			return h
		},
		paint: function(t, e) {
			var r = this,
				n = r.cfg,
				a = r.getPath(t);
			n = i.mix({
				path: a
			}, n), e.addShape("Path", {
				attrs: n
			})
		},
		getArc: function(t, e, r) {
			var i = this.getPointRadius(t, e),
				n = this.getPointAngle(t, e),
				c = n - r,
				s = n + r,
				l = t.getCenter(),
				o = l.x,
				u = l.y,
				h = o + i * Math.cos(c * a),
				f = o + i * Math.cos(s * a),
				d = u + i * Math.sin(c * a),
				p = u + i * Math.sin(s * a);
			return [
				["M", h, d],
				["A", i, i, 0, +(s - c > Math.PI), 1, f, p]
			]
		},
		getPointRadius: function(t, e) {
			var r = t.getCenter(),
				i = Math.sqrt(Math.pow(e.x - r.x, 2) + Math.pow(e.y - r.y, 2));
			return i
		},
		getPointAngle: function(t, e) {
			var r = t.getCenter(),
				i = Math.atan2(e.y - r.y, e.x - r.x);
			return i
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(20),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	i.extend(a, n), i.augment(a, {
		start: [],
		end: null,
		src: "",
		paint: function(t, e) {
			var r = this,
				n = r.parsePoint(t, r.start),
				a = r.cfg;
			if (a.img = a.src, a = i.mix({
					src: r.src
				}, a, n), r.end) {
				var c = r.parsePoint(t, r.end);
				a.x = n.x, a.y = c.y, a.width = c.x - n.x, a.height = n.y - c.y
			} else a.y = a.y - a.height;
			e.addShape("Image", {
				attrs: a
			})
		}
	}), t.exports = a
}, function(t, e, r) {
	var i = r(20);
	i.Image = r(311), i.Text = r(316), i.Line = r(313), i.Tag = r(315), i.Rect = r(314), i.Arc = r(310), t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(20),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	i.extend(a, n), i.augment(a, {
		from: [],
		to: [],
		cfg: {
			stroke: "#000",
			"stroke-width": 1
		},
		paint: function(t, e) {
			var r = this,
				n = r.parsePoint(t, r.from),
				a = r.parsePoint(t, r.to),
				c = r.cfg,
				s = i.substitute("M {x} {y}", n) + i.substitute("L {x} {y}", a);
			c = i.mix({
				path: s
			}, c), e.addShape("Path", {
				attrs: c
			})
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(20),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	i.extend(a, n), i.augment(a, {
		start: [],
		end: [],
		cfg: {
			stroke: "#000"
		},
		getPath: function(t) {
			var e = this,
				r = e.parsePoint(t, e.start),
				i = e.parsePoint(t, e.end),
				n = [];
			return n.push(["M", r.x, r.y]), n.push(["L", i.x, r.y]), n.push(["L", i.x, i.y]), n.push(["L", r.x, i.y]), n.push(["z"]), n
		},
		paint: function(t, e) {
			var r = this,
				n = r.cfg,
				a = r.getPath(t);
			n = i.mix({
				path: a
			}, n), e.addShape("Path", {
				attrs: n
			})
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(20),
		a = 10,
		c = function(t) {
			c.superclass.constructor.call(this, t)
		};
	i.extend(c, n), i.augment(c, {
		from: [],
		to: [],
		text: "",
		cfg: {
			line: {
				stroke: "#000",
				"stroke-width": 1
			},
			text: {
				fill: "#000"
			},
			rect: {
				stroke: "#000",
				"stroke-width": 1,
				fill: "#fff"
			}
		},
		paint: function(t, e) {
			var r = this,
				i = r.parsePoint(t, r.from),
				n = r.parsePoint(t, r.to),
				a = e.addGroup();
			r.drawLine(i, n, a), r.drawText(n, a)
		},
		drawLine: function(t, e, r) {
			var n = this,
				a = i.substitute("M {x} {y}", t) + i.substitute("L {x} {y}", e),
				c = i.mix({
					path: a
				}, n.cfg.line);
			r.addShape("Path", {
				attrs: c
			})
		},
		drawText: function(t, e) {
			var r = this,
				n = i.mix({
					text: r.text
				}, r.cfg.text, t),
				c = e.addShape("Text", {
					zIndex: 1,
					attrs: n
				}),
				s = c.getBBBox(),
				l = i.mix({
					x: s.minX - a,
					y: s.minY - a,
					width: s.width + 2 * a,
					height: s.height + 2 * a
				}, r.cfg.rect);
			e.addShape("rect", {
				attrs: l
			}), e.sort()
		}
	}), t.exports = c
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(20),
		a = function(t) {
			a.superclass.constructor.call(this, t)
		};
	i.extend(a, n), i.augment(a, {
		position: [],
		text: "",
		cfg: {
			fill: "#000",
			"text-anchor": "middle"
		},
		paint: function(t, e) {
			var r = this,
				n = r.position,
				a = r.parsePoint(t, n),
				c = r.cfg;
			c = i.mix({
				text: r.text
			}, c, a), e.addShape("Text", {
				attrs: c
			})
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = r(1),
		n = r(46),
		a = "#62a4e8",
		c = i.mix(!0, {}, n, {
			defaultColor: a,
			colors: {
				"default": ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0"],
				intervalStack: ["#61A5E8", "#7ECF51", "#EECB5F", "#E4925D", "#E16757", "#9570E5", "#605FF0", "#605ff0", "#85ca36", "#1c9925", "#0d8b5f", "#0f9cd3", "#2f7e9b", "#2f677d", "#9b7fed", "#7453d6", "#3b1d98", "#27abb1", "#017377", "#015f63", "#b86868", "#5669b7", "#e5aab4", "#60b65f", "#98d2b2", "#c9c8bc", "#45c3dc", "#e17979", "#5baa5a", "#eaccc2", "#ffaa74"]
			},
			shape: {
				point: {
					fill: a
				},
				hollowPoint: {
					stroke: a
				},
				interval: {
					fill: a
				},
				hollowInterval: {
					stroke: a
				},
				area: {
					fill: a
				},
				polygon: {
					fill: a
				},
				hollowPolygon: {
					stroke: a
				},
				strokePolygon: {
					fill: a
				},
				hollowArea: {
					stroke: a
				},
				line: {
					stroke: a
				}
			},
			guide: {
				line: {
					stroke: a
				},
				rect: {
					fill: a
				},
				tag: {
					line: {
						stroke: a
					},
					rect: {
						fill: a
					}
				}
			},
			tooltipMarker: {
				stroke: a
			}
		});
	t.exports = c
}, function(t, e, r) {
	var i = r(1),
		n = r(46),
		a = i.mix(!0, {}, n, {
			axis: {
				top: {
					labels: {
						label: {
							fill: "#D5D4D4"
						}
					},
					tickLine: {
						stroke: "#46525F"
					}
				},
				bottom: {
					labels: {
						label: {
							fill: "#999"
						}
					},
					line: {
						stroke: "#46525F"
					},
					tickLine: {
						stroke: "#46525F"
					}
				},
				left: {
					labels: {
						label: {
							fill: "#999"
						}
					},
					line: {
						stroke: "#46525F"
					},
					tickLine: {
						stroke: "#46525F"
					},
					grid: {
						line: {
							stroke: "#46525F"
						}
					}
				},
				right: {
					labels: {
						label: {
							fill: "#999"
						}
					},
					line: {
						stroke: "#46525F"
					},
					tickLine: {
						stroke: "#46525F"
					}
				},
				circle: {
					line: {
						stroke: "#46525F"
					},
					grid: {
						line: {
							stroke: "#46525F"
						}
					},
					labels: {
						label: {
							fill: "#999"
						}
					}
				},
				gauge: {
					tickLine: {
						stroke: "#46525F"
					},
					labels: {
						label: {
							fill: "#999"
						}
					}
				},
				clock: {
					tickLine: {
						stroke: "#46525F"
					},
					subTick: 5,
					labels: {
						label: {
							fill: "#999"
						}
					}
				},
				radius: {
					labels: {
						label: {
							fill: "#999"
						}
					},
					line: {
						stroke: "#46525F"
					},
					grid: {
						line: {
							stroke: "#46525F"
						}
					}
				}
			},
			legend: {
				right: {
					word: {
						fill: "#999"
					},
					title: {
						fill: "#999"
					}
				},
				left: {
					word: {
						fill: "#999"
					},
					title: {
						fill: "#999"
					}
				},
				top: {
					word: {
						fill: "#999"
					}
				},
				bottom: {
					word: {
						fill: "#999"
					}
				}
			},
			guide: {
				text: {
					fill: "#999"
				},
				tag: {
					text: {
						fill: "#999"
					}
				}
			}
		});
	t.exports = a
}, function(t, e, r) {
	"use strict";
	var i = {
		"default": r(46),
		dark: r(318),
		cheery: r(317)
	};
	t.exports = i
}, function(t, e, r) {
	"use strict";
	var i = r(16),
		n = i.Util,
		a = i.Canvas,
		c = a.Group,
		s = function l(t) {
			l.superclass.constructor.call(this, t)
		};
	n.extend(s, c), s.CFG = {
		r: 0,
		x: 0,
		y: 0,
		ir: 0,
		count: 0,
		mainGroup: null,
		minorGroup: null,
		circle: {},
		_circle: {
			stroke: "red",
			lineDash: [2, 2]
		}
	}, n.augment(s, {
		_initCfg: function() {
			this.deepSet("circle")
		},
		_beforeRenderUI: function() {
			s.superclass._beforeRenderUI.call(this);
			var t = this.addGroup(),
				e = this.addGroup();
			this.set("mainGroup", t), this.set("minorGroup", e)
		},
		_renderUI: function() {
			this._renderOpacityBack(), this._renderMain()
		},
		_renderOpacityBack: function() {
			var t = this.get("x"),
				e = this.get("y"),
				r = this.get("r");
			this.addShape("circle", {
				attrs: {
					x: t,
					y: e,
					r: r,
					fill: "#fff",
					fillOpacity: 0
				}
			})
		},
		_renderMain: function() {
			for (var t = this.get("x"), e = this.get("y"), r = this.get("r"), i = this.get("ir"), n = this.get("count"), a = 1; n >= a; a++) this._renderCircle(a, t, e, (r - i) * a / n + i)
		},
		_renderCircle: function(t, e, r, i) {
			var a = this.get("circle"),
				c = this.get("mainGroup");
			c.addShape("circle", {
				"class": "main",
				index: t,
				attrs: n.mix(a, {
					x: e,
					y: r,
					r: i
				})
			})
		},
		getCircle: function(t, e) {
			return this.findBy(function(r) {
				return r.get("index") === t && r.get("class") === e
			})
		},
		resetCircle: function(t, e, r) {
			var i = this.getCircle(t, "main");
			if (r) {
				var n = i.attr("r");
				e.r = n - r
			}
			return i.attr(e), this
		},
		addDecorate: function(t, e) {
			var r = this.get("minorGroup"),
				i = this.getCircle(t, "main");
			return e = n.mix({}, i.__attrs, e), r.addShape("circle", {
				"class": "minor",
				index: t,
				attrs: e
			}), this
		}
	}), t.exports = s
}, function(t, e, r) {
	"use strict";
	var i = r(16),
		n = i.Util,
		a = function() {};
	n.augment(a, {
		rotateByCenter: function(t) {
			var e = this.getBBBox(),
				r = e.centerX,
				i = e.centerY;
			this.transform([
				["t", -r, -i],
				["r", t],
				["t", r, i]
			])
		},
		scaleByCenter: function(t, e) {
			var r = this.getBBBox(),
				i = r.centerX,
				n = r.centerY;
			this.transform([
				["t", -i, -n],
				["s", t, e],
				["t", i, n]
			])
		}
	}), t.exports = a
}, function(t, e, r) {
	"use strict";

	function i(t, e, r, i) {
		var n = t[i] + (e[i] - t[i]) * r;
		return n
	}
	var n = r(99),
		a = r(1);
	t.exports = {
		calColor: function(t, e, r) {
			var a, c = t.length - 1,
				s = Math.floor(c * e),
				l = c * e - s,
				o = t[s],
				u = s === c ? o : t[s + 1];
			return "hsl" === r ? a = n.hsl2Rgb([i(o, u, l, 0), i(o, u, l, 1), i(o, u, l, 2)]) : (a = {
				r: i(o, u, l, 0),
				g: i(o, u, l, 1),
				b: i(o, u, l, 2)
			}, a = "#" + n.toHex(a.r) + n.toHex(a.g) + n.toHex(a.b)), a
		},
		lightness: function(t, e) {
			e = e || 0;
			var r = [
				[e, 1, .9],
				[e, 1, .5]
			];
			return this.calColor(r, t, "hsl")
		},
		red: function(t) {
			return this.lightness(t, 0)
		},
		blue: function(t) {
			return this.lightness(t, .66)
		},
		green: function(t) {
			return this.lightness(t, .33)
		},
		gradient: function(t) {
			var e = this,
				r = [];
			return a.isString(t) && (t = t.split("-")), a.each(t, function(t) {
					-1 === t.indexOf("#") && (t = n.toRGB(t)), r.push(n.rgb2arr(t))
				}),
				function(t) {
					return e.calColor(r, t)
				}
		},
		gradientHsl: function(t) {
			var e = this,
				r = [];
			return a.isString(t) && (t = t.split("-")), a.each(t, function(t) {
					-1 === t.indexOf("#") && (t = n.toRGB(t)), r.push(n.rgb2hsl(t))
				}),
				function(t) {
					return e.calColor(r, t, "hsl")
				}
		},
		saturation: function(t, e) {
			e = e || 0;
			var r = [
				[e, 0, .5],
				[e, 1, .5]
			];
			return this.calColor(r, t, "hsl")
		},
		hue: function(t) {
			var e = [
				[0, 1, .5],
				[1, 1, .5]
			];
			return this.calColor(e, t, "hsl")
		},
		brightness: function(t) {
			var e = [
				[255, 255, 255],
				[0, 0, 0]
			];
			return this.calColor(e, t)
		},
		heat: function(t) {
			var e = [
				[255, 255, 255],
				[255, 127.5, 0],
				[0, 0, 0]
			];
			return this.calColor(e, t)
		},
		rainbow: function(t) {
			var e = [
				[0, 255, 255],
				[0, 0, 255],
				[0, 255, 0],
				[255, 0, 0]
			];
			return this.calColor(e, t)
		},
		circular: function(t) {
			var e = [
				[0, 0, 255],
				[0, 255, 0],
				[255, 255, 0],
				[255, 0, 0],
				[0, 0, 255]
			];
			return this.calColor(e, t)
		},
		bipolar: function(t) {
			var e = [
				[0, 255, 0],
				[0, 0, 0],
				[255, 0, 0]
			];
			return this.calColor(e, t)
		}
	}
}, function(t, e) {
	t.exports = {
		name: "g",
		attrs: {
			id: "Group-1145"
		},
		childs: [{
			name: "path",
			attrs: {
				d: "M57,170 L119,260",
				id: "Stroke-1018",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M119,259 L4,284",
				id: "Stroke-1020",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M119,259 L170,189",
				id: "Stroke-1022",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M169,189 L166,274",
				id: "Stroke-1024",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M167,274 L119,259",
				id: "Stroke-1026",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M118,259 L111,349",
				id: "Stroke-1028",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M111,349 L4,284",
				id: "Stroke-1030",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M4,284 L38,371",
				id: "Stroke-1032",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M38,371 L116,401",
				id: "Stroke-1034",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M117,402 L111,349",
				id: "Stroke-1036",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M114,399 L162,346",
				id: "Stroke-1038",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M162,346 L111,349",
				id: "Stroke-1040",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M111,349 L166,274",
				id: "Stroke-1042",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M167,274 L163,346",
				id: "Stroke-1044",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M166,274 L234,264",
				id: "Stroke-1046",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M235,264 L163,346",
				id: "Stroke-1048",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M234,264 L310,227",
				id: "Stroke-1050",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M234,265 L256,184",
				id: "Stroke-1052",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M257,184 L170,189",
				id: "Stroke-1054",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M170,189 L235,264",
				id: "Stroke-1056",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M257,184 L336,168",
				id: "Stroke-1058",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M336,168 L310,227",
				id: "Stroke-1060",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M310,227 L257,184",
				id: "Stroke-1062",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M335,168 L391,140",
				id: "Stroke-1064",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M335,168 L272,110",
				id: "Stroke-1070",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M273,110 L257,184",
				id: "Stroke-1072",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M257,184 L204,121",
				id: "Stroke-1074",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M204,121 L170,189",
				id: "Stroke-1076",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M170,189 L57,170",
				id: "Stroke-1078",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M57,169 L204,121",
				id: "Stroke-1080",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M204,122 L244,56",
				id: "Stroke-1082",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M204,121 L272,110",
				id: "Stroke-1084",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M272,110 L314,73",
				id: "Stroke-1086",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M314,73 L351,89",
				id: "Stroke-1088",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M350,90 L335,169",
				id: "Stroke-1090",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M351,90 L392,141",
				id: "Stroke-1092",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M392,141 L419,71",
				id: "Stroke-1094",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M351,90 L419,71",
				id: "Stroke-1096",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M351,90 L334,20",
				id: "Stroke-1098",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M334,20 L419,71",
				id: "Stroke-1100",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M334,20 L314,74",
				id: "Stroke-1102",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "path",
			attrs: {
				d: "M314,74 L244,56",
				id: "Stroke-1104",
				stroke: "#40556B",
				strokeWidth: "0.5"
			}
		}, {
			name: "polygon",
			attrs: {
				id: "Path-209",
				stroke: "#78FFFB",
				fill: "#43CBC6",
				opacity: "0.339202425",
				filter: "url(#filter-1)",
				points: "204.029354 120.125774 169.445719 189.300464 257.676784 184.187633"
			}
		}, {
			name: "g",
			attrs: {
				id: "Group-39",
				transform: "translate(169.000000, 120.000000)"
			},
			childs: [{
				name: "g",
				attrs: {
					id: "polygon-Group"
				},
				childs: [{
					name: "polygon",
					attrs: {
						id: "path-2",
						points: "35.0293537 0.12577411 0.44571886 69.3004644 88.6767841 64.1876332",
						strokeWidth: "2",
						fill: "#75DCD8"
					}
				}, {
					name: "polyline",
					attrs: {
						id: "Path-665",
						stroke: "#9DF8F5",
						points: "21.3601121 28.5094578 33.3630239 34.2141014 23.9193206 53.2104289 40.2901902 61.2027369 49.4849304 42.4697775 40.8441454 38.518434 46.8830775 26.2665404 32.5935906 19.1597704 29.7542775 24.9367536 40.095626 29.9900335 29.9411455 50.5618679 38.3480077 54.7266324 43.4833994 44.466535 38.6750759 42.185644"
					}
				}, {
					name: "polyline",
					attrs: {
						id: "Path-666",
						stroke: "#61CAC6",
						points: "61.0329969 32.0466232 53.8761139 46.4915473 60.8611283 49.7672932 64.4126428 42.6375303 68.9282636 44.7536029 62.5458458 57.8072129 53.8067503 53.6316666 51.283648 58.9025803 61.2387748 63.6674767 61.325528 65.2979125"
					}
				}, {
					name: "polyline",
					attrs: {
						id: "Path-667",
						stroke: "#61CAC6",
						points: "14.4701758 42.323063 20.0416351 45.0051921 14.7085229 55.8631438 25.9175749 61.324365 23.2015502 66.7563721 7.72419932 59.2586456 5.13914145 64.4301946 12.5813294 68.2160729"
					}
				}, {
					name: "polyline",
					attrs: {
						id: "Path-668",
						stroke: "#9DF8F5",
						points: "29.3493822 12.2906089 41.9594006 18.390692 45.0727363 12.1333827"
					}
				}, {
					name: "polyline",
					attrs: {
						id: "Path-669",
						stroke: "#61CAC6",
						points: "49.1997913 17.7158169 47.2094053 21.8289927 55.5589543 26.25815 50.7683271 36.1069193 46.620689 34.2008391"
					}
				}, {
					name: "polyline",
					attrs: {
						id: "Path-670",
						stroke: "#9DF8F5",
						points: "81.2418642 55.8721636 78.9543814 60.5689435 72.2145354 57.3140622 75.1686322 51.3698145 71.2620882 49.5076705 65.172346 61.5967061 71.7050935 64.8168828"
					}
				}, {
					name: "polyline",
					attrs: {
						id: "Path-671",
						stroke: "#61CAC6",
						points: "29.24983 67.3154212 32.0106613 61.4721315 42.9156344 66.3452831 46.8167363 58.4563402"
					}
				}]
			}]
		}, {
			name: "path",
			attrs: {
				d: "M196.248,101.004 C195.912,101.368 195.492,101.69 194.988,101.998 C194.484,102.278 194.022,102.474 193.574,102.586 L193.574,104.098 C194.498,103.832 195.268,103.412 195.87,102.838 L195.87,111 L197.396,111 L197.396,101.004 L196.248,101.004 Z M201.96,101.004 C201.624,101.368 201.204,101.69 200.7,101.998 C200.196,102.278 199.734,102.474 199.286,102.586 L199.286,104.098 C200.21,103.832 200.98,103.412 201.582,102.838 L201.582,111 L203.108,111 L203.108,101.004 L201.96,101.004 Z",
				id: "11",
				fill: "#304153"
			}
		}, {
			name: "path",
			attrs: {
				d: "M323.248,230.004 C322.912,230.368 322.492,230.69 321.988,230.998 C321.484,231.278 321.022,231.474 320.574,231.586 L320.574,233.098 C321.498,232.832 322.268,232.412 322.87,231.838 L322.87,240 L324.396,240 L324.396,230.004 L323.248,230.004 Z M330.066,229.808 C329.002,229.808 328.134,230.158 327.49,230.886 C326.86,231.558 326.538,232.454 326.524,233.574 L328.05,233.574 C328.078,232.762 328.246,232.16 328.582,231.74 C328.904,231.306 329.38,231.096 330.01,231.096 C330.598,231.096 331.06,231.236 331.368,231.516 C331.676,231.796 331.83,232.216 331.83,232.776 C331.83,233.364 331.592,233.91 331.144,234.414 C330.864,234.708 330.388,235.086 329.716,235.562 C328.582,236.346 327.826,236.948 327.462,237.382 C326.79,238.138 326.468,239.006 326.468,240 L333.356,240 L333.356,238.656 L328.358,238.656 C328.568,238.11 329.212,237.48 330.29,236.766 C331.284,236.094 331.97,235.562 332.362,235.156 C333.006,234.442 333.342,233.658 333.342,232.79 C333.342,231.908 333.034,231.194 332.432,230.634 C331.816,230.074 331.018,229.808 330.066,229.808 L330.066,229.808 Z",
				id: "12",
				fill: "#304153"
			}
		}, {
			name: "path",
			attrs: {
				d: "M29.2959756,159.810059 C28.3159756,159.810059 27.5179756,160.076059 26.9019756,160.636059 C26.2439756,161.196059 25.8799756,161.966059 25.7959756,162.960059 L27.2939756,162.960059 C27.3499756,162.344059 27.5599756,161.882059 27.8959756,161.574059 C28.2319756,161.266059 28.7079756,161.112059 29.3099756,161.112059 C29.8979756,161.112059 30.3599756,161.238059 30.6679756,161.518059 C30.9479756,161.784059 31.1019756,162.162059 31.1019756,162.666059 C31.1019756,163.170059 30.9339756,163.562059 30.6259756,163.828059 C30.3179756,164.094059 29.8559756,164.234059 29.2399756,164.234059 L28.5259756,164.234059 L28.5259756,165.382059 L29.2539756,165.382059 C29.9119756,165.382059 30.4159756,165.522059 30.7519756,165.802059 C31.1159756,166.082059 31.2979756,166.516059 31.2979756,167.104059 C31.2979756,167.608059 31.1159756,168.014059 30.7799756,168.350059 C30.3879756,168.714059 29.8699756,168.910059 29.2259756,168.910059 C28.6379756,168.910059 28.1619756,168.742059 27.7979756,168.406059 C27.3779756,168.042059 27.1679756,167.524059 27.1399756,166.852059 L25.5999756,166.852059 C25.6839756,167.972059 26.0759756,168.826059 26.7759756,169.414059 C27.3919756,169.932059 28.2179756,170.198059 29.2399756,170.198059 C30.3039756,170.198059 31.1859756,169.890059 31.8579756,169.302059 C32.4879756,168.714059 32.8099756,167.958059 32.8099756,167.034059 C32.8099756,166.446059 32.6419756,165.956059 32.3059756,165.578059 C31.9979756,165.214059 31.5499756,164.934059 30.9619756,164.752059 C32.0539756,164.388059 32.6139756,163.646059 32.6139756,162.554059 C32.6139756,161.700059 32.3059756,161.028059 31.7179756,160.538059 C31.1019756,160.048059 30.3039756,159.810059 29.2959756,159.810059 L29.2959756,159.810059 Z M37.7519756,159.810059 C36.6879756,159.810059 35.8199756,160.160059 35.1759756,160.888059 C34.5459756,161.560059 34.2239756,162.456059 34.2099756,163.576059 L35.7359756,163.576059 C35.7639756,162.764059 35.9319756,162.162059 36.2679756,161.742059 C36.5899756,161.308059 37.0659756,161.098059 37.6959756,161.098059 C38.2839756,161.098059 38.7459756,161.238059 39.0539756,161.518059 C39.3619756,161.798059 39.5159756,162.218059 39.5159756,162.778059 C39.5159756,163.366059 39.2779756,163.912059 38.8299756,164.416059 C38.5499756,164.710059 38.0739756,165.088059 37.4019756,165.564059 C36.2679756,166.348059 35.5119756,166.950059 35.1479756,167.384059 C34.4759756,168.140059 34.1539756,169.008059 34.1539756,170.002059 L41.0419756,170.002059 L41.0419756,168.658059 L36.0439756,168.658059 C36.2539756,168.112059 36.8979756,167.482059 37.9759756,166.768059 C38.9699756,166.096059 39.6559756,165.564059 40.0479756,165.158059 C40.6919756,164.444059 41.0279756,163.660059 41.0279756,162.792059 C41.0279756,161.910059 40.7199756,161.196059 40.1179756,160.636059 C39.5019756,160.076059 38.7039756,159.810059 37.7519756,159.810059 L37.7519756,159.810059 Z",
				id: "32",
				fill: "#304153"
			}
		}, {
			name: "path",
			attrs: {
				d: "M332.2,0.808 C331.024,0.808 330.114,1.298 329.47,2.292 C328.882,3.202 328.588,4.434 328.588,6.002 C328.588,7.556 328.882,8.788 329.47,9.712 C330.114,10.692 331.024,11.196 332.2,11.196 C333.376,11.196 334.286,10.692 334.93,9.712 C335.518,8.788 335.812,7.542 335.812,6.002 C335.812,4.448 335.518,3.216 334.93,2.292 C334.286,1.298 333.376,0.808 332.2,0.808 L332.2,0.808 Z M332.2,2.096 C333.012,2.096 333.6,2.544 333.936,3.454 C334.174,4.07 334.3,4.924 334.3,6.002 C334.3,7.066 334.174,7.92 333.936,8.55 C333.6,9.446 333.012,9.908 332.2,9.908 C331.374,9.908 330.8,9.446 330.464,8.55 C330.212,7.92 330.1,7.066 330.1,6.002 C330.1,4.924 330.212,4.07 330.464,3.454 C330.8,2.544 331.374,2.096 332.2,2.096 L332.2,2.096 Z M339.648,1.004 C339.312,1.368 338.892,1.69 338.388,1.998 C337.884,2.278 337.422,2.474 336.974,2.586 L336.974,4.098 C337.898,3.832 338.668,3.412 339.27,2.838 L339.27,11 L340.796,11 L340.796,1.004 L339.648,1.004 Z",
				id: "01",
				fill: "#304153"
			}
		}, {
			name: "path",
			attrs: {
				d: "M169.268663,188.869129 C169.268663,189.820823 166.27179,273.732786 166.27179,273.732786 L234.444101,263.722885 C234.444101,263.722885 169.268663,187.917434 169.268663,188.869129 Z",
				id: "Path-211",
				fill: "#21374C",
				opacity: "0.730935168"
			}
		}, {
			name: "path",
			attrs: {
				d: "M54.7856349,172.543813 C52.5238948,171.228223 52.4108885,168.153141 54.4458089,166.661118 C55.6477115,165.779762 57.3516848,165.779762 58.5535874,166.660313 C60.589315,168.153141 60.4763087,171.229029 58.2137614,172.543813 C57.1684532,173.152062 55.8309431,173.152062 54.7856349,172.543813",
				id: "Fill-1106",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M116.024275,261.975034 C114.658441,260.608412 114.658441,258.392597 116.025082,257.024361 C117.391723,255.658546 119.608378,255.658546 120.975019,257.024361 C122.34166,258.392597 122.34166,260.608412 120.975019,261.975034 C119.608378,263.341655 117.391723,263.341655 116.024275,261.975034",
				id: "Fill-1109",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M241.024981,57.9744876 C239.65834,56.6079449 239.65834,54.3922569 241.024981,53.024907 C242.391622,51.6583643 244.60747,51.6583643 245.974918,53.024907 C247.341559,54.3922569 247.341559,56.6079449 245.975725,57.9744876 C244.60747,59.3418375 242.391622,59.3418375 241.024981,57.9744876",
				id: "Fill-1111",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M202.024981,123.975004 C200.65834,122.608343 200.65834,120.391657 202.024981,119.024996 C203.391622,117.658335 205.60747,117.658335 206.974918,119.024996 C208.341559,120.391657 208.341559,122.608343 206.975725,123.975004 C205.60747,125.341665 203.391622,125.341665 202.024981,123.975004",
				id: "Fill-1113",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M312.024275,75.9750043 C310.658441,74.6083434 310.658441,72.3916566 312.025082,71.0249957 C313.391723,69.6583348 315.607571,69.6583348 316.975019,71.0249957 C318.34166,72.3916566 318.34166,74.6083434 316.975019,75.9750043 C315.607571,77.3416652 313.391723,77.3416652 312.024275,75.9750043",
				id: "Fill-1115",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M270.024981,112.974488 C268.65834,111.607945 268.65834,109.39145 270.024981,108.024907 C271.391622,106.658364 273.60747,106.658364 274.974918,108.024907 C276.341559,109.39145 276.341559,111.607945 274.975725,112.974488 C273.60747,114.341837 271.391622,114.341837 270.024981,112.974488",
				id: "Fill-1117",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M348.024806,91.9744876 C346.658263,90.6079449 346.658263,88.3922569 348.025613,87.024907 C349.391349,85.6583643 351.608651,85.6583643 352.974387,87.024907 C354.341737,88.3922569 354.341737,90.6079449 352.975194,91.9744876 C351.608651,93.3418375 349.391349,93.3418375 348.024806,91.9744876",
				id: "Fill-1119",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M333.024981,170.975004 C331.65834,169.608343 331.65834,167.392464 333.024981,166.024996 C334.391622,164.658335 336.60747,164.658335 337.974918,166.024996 C339.341559,167.392464 339.341559,169.608343 337.975725,170.975004 C336.60747,172.341665 334.391622,172.341665 333.024981,170.975004",
				id: "Fill-1121",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M254.024981,185.975004 C252.65834,184.608343 252.65834,182.392464 254.024981,181.024996 C255.391622,179.658335 257.60747,179.658335 258.974918,181.024996 C260.341559,182.392464 260.341559,184.608343 258.975725,185.975004 C257.60747,187.341665 255.391622,187.341665 254.024981,185.975004",
				id: "Fill-1123",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M307.024981,228.974488 C305.65834,227.608752 305.65834,225.39145 307.024981,224.024907 C308.391622,222.658364 310.60747,222.658364 311.974918,224.024907 C313.341559,225.39145 313.341559,227.608752 311.975725,228.974488 C310.60747,230.341837 308.391622,230.341837 307.024981,228.974488",
				id: "Fill-1125",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M389.024981,142.974488 C387.65834,141.607945 387.65834,139.39145 389.024981,138.024907 C390.391622,136.658364 392.608277,136.658364 393.974918,138.024907 C395.341559,139.39145 395.341559,141.607945 393.975725,142.974488 C392.608277,144.341837 390.391622,144.341837 389.024981,142.974488",
				id: "Fill-1127",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M332.024289,21.9750043 C330.658436,20.6083434 330.658436,18.3916566 332.025097,17.0249957 C333.39095,15.6583348 335.607637,15.6583348 336.974298,17.0249957 C338.341766,18.3916566 338.341766,20.6083434 336.975105,21.9750043 C335.607637,23.3416652 333.39095,23.3416652 332.024289,21.9750043",
				id: "Fill-1129",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M415.024289,73.9750043 C413.658436,72.6083434 413.658436,70.3916566 415.025097,69.0249957 C416.39095,67.6583348 418.607637,67.6583348 419.974298,69.0249957 C421.341766,70.3916566 421.341766,72.6083434 419.975105,73.9750043 C418.607637,75.3416652 416.39095,75.3416652 415.024289,73.9750043",
				id: "Fill-1129-Copy",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M232.025269,266.975004 C230.658647,265.608343 230.65784,263.392464 232.025269,262.024996 C233.39189,260.658335 235.608513,260.658335 236.974328,262.024996 C238.341756,263.392464 238.341756,265.608343 236.975135,266.975004 C235.608513,268.341665 233.39189,268.341665 232.025269,266.975004",
				id: "Fill-1131",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M160.025269,348.975049 C158.658647,347.608447 158.65784,345.391856 160.025269,344.025254 C161.39189,342.657845 163.607706,342.658652 164.974328,344.025254 C166.341756,345.391856 166.341756,347.608447 164.975135,348.975049 C163.607706,350.34165 161.39189,350.34165 160.025269,348.975049",
				id: "Fill-1133",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M109.024951,351.974702 C107.65835,350.608041 107.65835,348.392161 109.024951,347.024693 C110.391553,345.658032 112.607337,345.658839 113.974746,347.024693 C115.341348,348.392161 115.342155,350.608041 113.974746,351.974702 C112.607337,353.34217 110.391553,353.341362 109.024951,351.974702",
				id: "Fill-1135",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M164.024996,276.974615 C162.658335,275.607974 162.658335,273.392127 164.024996,272.024678 C165.391657,270.658037 167.608343,270.658844 168.975004,272.024678 C170.341665,273.392127 170.341665,275.607974 168.975004,276.975423 C167.608343,278.342064 165.391657,278.341257 164.024996,276.974615",
				id: "Fill-1137",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M167.024996,191.974731 C165.658335,190.60811 165.658335,188.392294 167.024996,187.024865 C168.391657,185.658244 170.607536,185.658244 171.975004,187.025672 C173.341665,188.392294 173.341665,190.60811 171.975004,191.974731 C170.607536,193.34216 168.391657,193.341353 167.024996,191.974731",
				id: "Fill-1139",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M1.02467819,286.974746 C-0.341155753,285.608144 -0.341962984,283.391553 1.02467819,282.024951 C2.3921266,280.65835 4.60797423,280.65835 5.97461541,282.024951 C7.34125659,283.391553 7.34206382,285.608144 5.97542264,286.974746 C4.60797423,288.342155 2.3921266,288.341348 1.02467819,286.974746",
				id: "Fill-1141",
				fill: "#476075"
			}
		}, {
			name: "path",
			attrs: {
				d: "M112.025269,401.974746 C110.658647,400.608144 110.65784,398.39236 112.025269,397.024951 C113.39189,395.65835 115.608513,395.65835 116.974328,397.024951 C118.341756,398.39236 118.341756,400.608144 116.975135,401.974746 C115.608513,403.342155 113.39189,403.341348 112.025269,401.974746",
				id: "Fill-1143",
				fill: "#476075"
			}
		}, {
			name: "g",
			attrs: {
				id: "path.4",
				transform: "translate(166.000000, 186.000000)"
			},
			childs: [{
				name: "path",
				attrs: {
					d: "M68,78 L144,41",
					id: "Stroke-1050",
					stroke: "#74DAD6",
					strokeWidth: "0.5"
				}
			}, {
				name: "path",
				attrs: {
					d: "M4,3 L69,78",
					id: "Stroke-1056",
					stroke: "#74DAD6",
					strokeWidth: "0.5"
				}
			}, {
				name: "path",
				attrs: {
					d: "M141.024981,42.9744876 C139.65834,41.6087521 139.65834,39.3914497 141.024981,38.024907 C142.391622,36.6583643 144.60747,36.6583643 145.974918,38.024907 C147.341559,39.3914497 147.341559,41.6087521 145.975725,42.9744876 C144.60747,44.3418375 142.391622,44.3418375 141.024981,42.9744876",
					id: "Fill-1125",
					fill: "#74DAD6"
				}
			}, {
				name: "path",
				attrs: {
					d: "M66.0252688,80.9750043 C64.6586474,79.6083434 64.6578401,77.3924638 66.0252688,76.0249957 C67.3918903,74.6583348 69.6085133,74.6583348 70.9743275,76.0249957 C72.3417563,77.3924638 72.3417563,79.6083434 70.9751348,80.9750043 C69.6085133,82.3416652 67.3918903,82.3416652 66.0252688,80.9750043",
					id: "Fill-1131",
					fill: "#74DAD6"
				}
			}, {
				name: "path",
				attrs: {
					d: "M1.02499568,5.97473115 C-0.341665225,4.60810966 -0.341665225,2.39229395 1.02499568,1.02486524 C2.39165658,-0.341756253 4.60753618,-0.341756253 5.97500432,1.02567246 C7.34166523,2.39229395 7.34166523,4.60810966 5.97500432,5.97473115 C4.60753618,7.34215986 2.39165658,7.34135264 1.02499568,5.97473115",
					id: "Fill-1139",
					fill: "#74DAD6"
				}
			}]
		}, {
			name: "g",
			attrs: {
				id: "path.3",
				transform: "translate(201.000000, 16.000000)"
			},
			childs: [{
				name: "path",
				attrs: {
					d: "M1.0249809,107.975004 C-0.341660299,106.608343 -0.341660299,104.391657 1.0249809,103.024996 C2.39162209,101.658335 4.60746975,101.658335 5.97491818,103.024996 C7.34155937,104.391657 7.34155937,106.608343 5.97572541,107.975004 C4.60746975,109.341665 2.39162209,109.341665 1.0249809,107.975004",
					id: "Fill-1113",
					fill: "#74DAD6"
				}
			}, {
				name: "g",
				attrs: {
					id: "Group-52",
					transform: "translate(3.000000, 91.000000)"
				},
				childs: [{
					name: "path",
					attrs: {
						d: "M0,14 L68,3",
						id: "Stroke-1084",
						stroke: "#74DAD6",
						strokeWidth: "0.5"
					}
				}, {
					name: "path",
					attrs: {
						d: "M66.0249809,5.97448759 C64.6583397,4.60794488 64.6583397,2.39144974 66.0249809,1.02490703 C67.3916221,-0.341635677 69.6074698,-0.341635677 70.9749182,1.02490703 C72.3415594,2.39144974 72.3415594,4.60794488 70.9757254,5.97448759 C69.6074698,7.34183747 67.3916221,7.34183747 66.0249809,5.97448759",
						id: "Fill-1117",
						fill: "#74DAD6"
					}
				}]
			}, {
				name: "g",
				attrs: {
					id: "Group-51",
					transform: "translate(71.000000, 54.000000)"
				},
				childs: [{
					name: "path",
					attrs: {
						d: "M0,40 L42,3",
						id: "Stroke-1086",
						stroke: "#74DAD6",
						strokeWidth: "0.5"
					}
				}, {
					name: "path",
					attrs: {
						d: "M40.0242746,5.97500432 C38.6584406,4.60834342 38.6584406,2.39165658 40.0250818,1.02499568 C41.391723,-0.341665225 43.6075707,-0.341665225 44.9750191,1.02499568 C46.3416603,2.39165658 46.3416603,4.60834342 44.9750191,5.97500432 C43.6075707,7.34166523 41.391723,7.34166523 40.0242746,5.97500432",
						id: "Fill-1115",
						fill: "#74DAD6"
					}
				}]
			}, {
				name: "g",
				attrs: {
					id: "Group-50",
					transform: "translate(113.000000, 57.000000)"
				},
				childs: [{
					name: "path",
					attrs: {
						d: "M0,0 L37,16",
						id: "Stroke-1088",
						stroke: "#74DAD6",
						strokeWidth: "0.5"
					}
				}, {
					name: "path",
					attrs: {
						d: "M34.0248062,18.9744876 C32.6582635,17.6079449 32.6582635,15.3922569 34.0256133,14.024907 C35.3913488,12.6583643 37.6086512,12.6583643 38.9743867,14.024907 C40.3417365,15.3922569 40.3417365,17.6079449 38.9751938,18.9744876 C37.6086512,20.3418375 35.3913488,20.3418375 34.0248062,18.9744876",
						id: "Fill-1119",
						fill: "#74DAD6"
					}
				}]
			}, {
				name: "g",
				attrs: {
					id: "Group-49",
					transform: "translate(130.000000, 0.000000)"
				},
				childs: [{
					name: "path",
					attrs: {
						d: "M20,74 L3,4",
						id: "Stroke-1098",
						stroke: "#74DAD6",
						strokeWidth: "0.5"
					}
				}, {
					name: "path",
					attrs: {
						d: "M1.02428935,5.97500432 C-0.341564295,4.60834342 -0.341564295,2.39165658 1.0250966,1.02499568 C2.39095025,-0.341665225 4.60763708,-0.341665225 5.97429797,1.02499568 C7.34176611,2.39165658 7.34176611,4.60834342 5.97510521,5.97500432 C4.60763708,7.34166523 2.39095025,7.34166523 1.02428935,5.97500432",
						id: "Fill-1129",
						fill: "#74DAD6"
					}
				}]
			}, {
				name: "g",
				attrs: {
					id: "Group-48",
					transform: "translate(133.000000, 4.000000)"
				},
				childs: [{
					name: "path",
					attrs: {
						d: "M0,0 L85,51",
						id: "Stroke-1100",
						stroke: "#74DAD6",
						strokeWidth: "0.5"
					}
				}, {
					name: "path",
					attrs: {
						d: "M81.0242894,53.9750043 C79.6584357,52.6083434 79.6584357,50.3916566 81.0250966,49.0249957 C82.3909502,47.6583348 84.6076371,47.6583348 85.974298,49.0249957 C87.3417661,50.3916566 87.3417661,52.6083434 85.9751052,53.9750043 C84.6076371,55.3416652 82.3909502,55.3416652 81.0242894,53.9750043",
						id: "Fill-1129-Copy",
						fill: "#74DAD6"
					}
				}]
			}]
		}, {
			name: "g",
			attrs: {
				id: "path.2",
				transform: "translate(0.000000, 186.000000)"
			},
			childs: [{
				name: "path",
				attrs: {
					d: "M167.024996,5.97473115 C165.658335,4.60810966 165.658335,2.39229395 167.024996,1.02486524 C168.391657,-0.341756253 170.607536,-0.341756253 171.975004,1.02567246 C173.341665,2.39229395 173.341665,4.60810966 171.975004,5.97473115 C170.607536,7.34215986 168.391657,7.34135264 167.024996,5.97473115",
					id: "Fill-1139",
					fill: "#74DAD6"
				}
			}, {
				name: "g",
				attrs: {
					id: "Group-8",
					transform: "translate(108.000000, 88.000000)"
				},
				childs: [{
					name: "path",
					attrs: {
						d: "M3,75 L58,0",
						id: "Stroke-1042",
						stroke: "#74DAD6",
						strokeWidth: "0.5"
					}
				}, {
					name: "path",
					attrs: {
						d: "M1.02495135,77.9747016 C-0.341650449,76.6080407 -0.341650449,74.3921611 1.02495135,73.024693 C2.39155315,71.6580321 4.60733692,71.6588393 5.97474593,73.024693 C7.34134772,74.3921611 7.34215493,76.6080407 5.97474593,77.9747016 C4.60733692,79.3421697 2.39155315,79.3413625 1.02495135,77.9747016",
						id: "Fill-1135",
						fill: "#74DAD6"
					}
				}]
			}, {
				name: "g",
				attrs: {
					id: "Group-10",
					transform: "translate(163.000000, 3.000000)"
				},
				childs: [{
					name: "path",
					attrs: {
						d: "M6,0 L3,85",
						id: "Stroke-1024",
						stroke: "#74DAD6",
						strokeWidth: "0.5"
					}
				}, {
					name: "path",
					attrs: {
						d: "M1.02499568,87.9746154 C-0.341665225,86.6079742 -0.341665225,84.3921266 1.02499568,83.0246782 C2.39165658,81.658037 4.60834342,81.6588442 5.97500432,83.0246782 C7.34166523,84.3921266 7.34166523,86.6079742 5.97500432,87.9754226 C4.60834342,89.3420638 2.39165658,89.3412566 1.02499568,87.9746154",
						id: "Fill-1137",
						fill: "#74DAD6"
					}
				}]
			}, {
				name: "g",
				attrs: {
					id: "Group-7",
					transform: "translate(0.000000, 95.000000)"
				},
				childs: [{
					name: "path",
					attrs: {
						d: "M111,68 L4,3",
						id: "Stroke-1030",
						stroke: "#74DAD6",
						strokeWidth: "0.5"
					}
				}, {
					name: "path",
					attrs: {
						d: "M1.02467819,5.97474593 C-0.341155753,4.60814413 -0.341962984,2.39155315 1.02467819,1.02495135 C2.3921266,-0.341650449 4.60797423,-0.341650449 5.97461541,1.02495135 C7.34125659,2.39155315 7.34206382,4.60814413 5.97542264,5.97474593 C4.60797423,7.34215493 2.3921266,7.34134772 1.02467819,5.97474593",
						id: "Fill-1141",
						fill: "#74DAD6"
					}
				}]
			}]
		}, {
			name: "g",
			attrs: {
				id: "path.1",
				transform: "translate(108.000000, 180.000000)"
			},
			childs: [{
				name: "path",
				attrs: {
					d: "M146.024981,5.97500432 C144.65834,4.60834342 144.65834,2.39246382 146.024981,1.02499568 C147.391622,-0.341665225 149.60747,-0.341665225 150.974918,1.02499568 C152.341559,2.39246382 152.341559,4.60834342 150.975725,5.97500432 C149.60747,7.34166523 147.391622,7.34166523 146.024981,5.97500432",
					id: "Fill-1123",
					fill: "#74DAD6"
				}
			}, {
				name: "g",
				attrs: {
					id: "Group-47",
					transform: "translate(123.000000, 4.000000)"
				},
				childs: [{
					name: "path",
					attrs: {
						d: "M3,81 L25,0",
						id: "Stroke-1052",
						stroke: "#74DAD6",
						strokeWidth: "0.5"
					}
				}, {
					name: "path",
					attrs: {
						d: "M1.02526885,82.9750043 C-0.341352644,81.6083434 -0.342159862,79.3924638 1.02526885,78.0249957 C2.39189034,76.6583348 4.60851327,76.6583348 5.97432754,78.0249957 C7.34175625,79.3924638 7.34175625,81.6083434 5.97513476,82.9750043 C4.60851327,84.3416652 2.39189034,84.3416652 1.02526885,82.9750043",
						id: "Fill-1131",
						fill: "#74DAD6"
					}
				}]
			}, {
				name: "g",
				attrs: {
					id: "Group-42",
					transform: "translate(0.000000, 94.000000)"
				},
				childs: [{
					name: "path",
					attrs: {
						d: "M3,75 L58,0",
						id: "Stroke-1042",
						stroke: "#74DAD6",
						strokeWidth: "0.5"
					}
				}, {
					name: "path",
					attrs: {
						d: "M1.02495135,77.9747016 C-0.341650449,76.6080407 -0.341650449,74.3921611 1.02495135,73.024693 C2.39155315,71.6580321 4.60733692,71.6588393 5.97474593,73.024693 C7.34134772,74.3921611 7.34215493,76.6080407 5.97474593,77.9747016 C4.60733692,79.3421697 2.39155315,79.3413625 1.02495135,77.9747016",
						id: "Fill-1135",
						fill: "#74DAD6"
					}
				}]
			}, {
				name: "g",
				attrs: {
					id: "Group-43",
					transform: "translate(55.000000, 84.000000)"
				},
				childs: [{
					name: "path",
					attrs: {
						d: "M3,10 L71,0",
						id: "Stroke-1046",
						stroke: "#74DAD6",
						strokeWidth: "0.5"
					}
				}, {
					name: "path",
					attrs: {
						d: "M1.02499568,12.9746154 C-0.341665225,11.6079742 -0.341665225,9.3921266 1.02499568,8.02467819 C2.39165658,6.65803702 4.60834342,6.65884425 5.97500432,8.02467819 C7.34166523,9.3921266 7.34166523,11.6079742 5.97500432,12.9754226 C4.60834342,14.3420638 2.39165658,14.3412566 1.02499568,12.9746154",
						id: "Fill-1137",
						fill: "#74DAD6"
					}
				}]
			}, {
				name: "g",
				attrs: {
					id: "Group-33",
					transform: "translate(3.000000, 169.000000)"
				},
				childs: [{
					name: "path",
					attrs: {
						d: "M6,53 L0,0",
						id: "Stroke-1036",
						stroke: "#74DAD6",
						strokeWidth: "0.5"
					}
				}, {
					name: "path",
					attrs: {
						d: "M1.02526885,52.9747459 C-0.341352644,51.6081441 -0.342159862,49.3923604 1.02526885,48.0249513 C2.39189034,46.6583496 4.60851327,46.6583496 5.97432754,48.0249513 C7.34175625,49.3923604 7.34175625,51.6081441 5.97513476,52.9747459 C4.60851327,54.3421549 2.39189034,54.3413477 1.02526885,52.9747459",
						id: "Fill-1143",
						fill: "#74DAD6"
					}
				}]
			}]
		}]
	}
}, function(t, e) {
	t.exports = {
		name: "g",
		attrs: {
			xmlns: "http://www.w3.org/2000/svg",
			id: "hechen"
		},
		childs: [{
			name: "g",
			attrs: {
				id: "2",
				transform: "translate(0.000000, 251.000000)"
			},
			childs: [{
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-746",
					fill: "#405669",
					cx: "27.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-747",
					fill: "#405669",
					cx: "209.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-748",
					fill: "#405669",
					cx: "196.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-930",
					fill: "#405669",
					cx: "183.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-931",
					fill: "#405669",
					cx: "170.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-932",
					fill: "#405669",
					cx: "157.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-955",
					fill: "#405669",
					cx: "144.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-956",
					fill: "#405669",
					cx: "131.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-957",
					fill: "#405669",
					cx: "118.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-958",
					fill: "#405669",
					cx: "105.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-959",
					fill: "#405669",
					cx: "92.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-960",
					fill: "#405669",
					cx: "79.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-961",
					fill: "#405669",
					cx: "66.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-962",
					fill: "#405669",
					cx: "53.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-987",
					fill: "#405669",
					cx: "40.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-716",
					fill: "#405669",
					cx: "27.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-717",
					fill: "#405669",
					cx: "209.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-718",
					fill: "#405669",
					cx: "196.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-988",
					fill: "#405669",
					cx: "183.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-989",
					fill: "#405669",
					cx: "170.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-990",
					fill: "#405669",
					cx: "157.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-991",
					fill: "#405669",
					cx: "144.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-992",
					fill: "#405669",
					cx: "131.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-993",
					fill: "#405669",
					cx: "118.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-994",
					fill: "#405669",
					cx: "105.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-995",
					fill: "#405669",
					cx: "92.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-996",
					fill: "#405669",
					cx: "79.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1012",
					fill: "#405669",
					cx: "66.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1013",
					fill: "#405669",
					cx: "53.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1014",
					fill: "#405669",
					cx: "40.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-682",
					fill: "#405669",
					cx: "144.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-683",
					fill: "#405669",
					cx: "131.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-684",
					fill: "#405669",
					cx: "118.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-685",
					fill: "#405669",
					cx: "105.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-686",
					fill: "#405669",
					cx: "92.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-688",
					fill: "#405669",
					cx: "79.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1015",
					fill: "#405669",
					cx: "66.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1016",
					fill: "#405669",
					cx: "53.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1017",
					fill: "#405669",
					cx: "40.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-656",
					fill: "#405669",
					cx: "27.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-658",
					fill: "#405669",
					cx: "209.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1018",
					fill: "#405669",
					cx: "196.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1019",
					fill: "#405669",
					cx: "183.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1020",
					fill: "#405669",
					cx: "170.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1021",
					fill: "#405669",
					cx: "157.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1022",
					fill: "#405669",
					cx: "144.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1023",
					fill: "#405669",
					cx: "131.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1024",
					fill: "#405669",
					cx: "118.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1025",
					fill: "#405669",
					cx: "105.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1026",
					fill: "#405669",
					cx: "92.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1042",
					fill: "#405669",
					cx: "79.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1043",
					fill: "#405669",
					cx: "66.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1044",
					fill: "#405669",
					cx: "53.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1045",
					fill: "#405669",
					cx: "40.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-626",
					fill: "#405669",
					cx: "27.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-628",
					fill: "#405669",
					cx: "209.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1046",
					fill: "#405669",
					cx: "196.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1047",
					fill: "#405669",
					cx: "183.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1048",
					fill: "#405669",
					cx: "170.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1049",
					fill: "#405669",
					cx: "157.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1050",
					fill: "#405669",
					cx: "144.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1051",
					fill: "#405669",
					cx: "131.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1052",
					fill: "#405669",
					cx: "118.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1055",
					fill: "#405669",
					cx: "105.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1072",
					fill: "#405669",
					cx: "92.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1073",
					fill: "#405669",
					cx: "79.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1074",
					fill: "#405669",
					cx: "66.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1075",
					fill: "#405669",
					cx: "53.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1076",
					fill: "#405669",
					cx: "40.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-596",
					fill: "#405669",
					cx: "27.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-599",
					fill: "#405669",
					cx: "209.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1077",
					fill: "#405669",
					cx: "196.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1078",
					fill: "#405669",
					cx: "183.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1079",
					fill: "#405669",
					cx: "170.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1080",
					fill: "#405669",
					cx: "157.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1081",
					fill: "#405669",
					cx: "144.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1082",
					fill: "#405669",
					cx: "131.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1085",
					fill: "#405669",
					cx: "118.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1107",
					fill: "#405669",
					cx: "105.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1108",
					fill: "#405669",
					cx: "92.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1109",
					fill: "#405669",
					cx: "79.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1110",
					fill: "#405669",
					cx: "66.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1111",
					fill: "#405669",
					cx: "53.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1112",
					fill: "#405669",
					cx: "40.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-566",
					fill: "#405669",
					cx: "27.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-567",
					fill: "#405669",
					cx: "209.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-568",
					fill: "#405669",
					cx: "196.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-569",
					fill: "#405669",
					cx: "183.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-570",
					fill: "#405669",
					cx: "170.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-571",
					fill: "#405669",
					cx: "157.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1113",
					fill: "#405669",
					cx: "144.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1115",
					fill: "#405669",
					cx: "131.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1123",
					fill: "#405669",
					cx: "118.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1124",
					fill: "#405669",
					cx: "105.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1125",
					fill: "#405669",
					cx: "92.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1136",
					fill: "#405669",
					cx: "79.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1137",
					fill: "#405669",
					cx: "66.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1138",
					fill: "#405669",
					cx: "53.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1139",
					fill: "#405669",
					cx: "40.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-531",
					fill: "#405669",
					cx: "131.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-532",
					fill: "#405669",
					cx: "118.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-533",
					fill: "#405669",
					cx: "105.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-534",
					fill: "#405669",
					cx: "92.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-535",
					fill: "#405669",
					cx: "79.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-536",
					fill: "#405669",
					cx: "66.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-537",
					fill: "#405669",
					cx: "53.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-538",
					fill: "#405669",
					cx: "40.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-504",
					fill: "#405669",
					cx: "170.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-505",
					fill: "#405669",
					cx: "157.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-506",
					fill: "#405669",
					cx: "144.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-539",
					fill: "#405669",
					cx: "131.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-540",
					fill: "#405669",
					cx: "118.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-541",
					fill: "#405669",
					cx: "105.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1140",
					fill: "#405669",
					cx: "92.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1141",
					fill: "#405669",
					cx: "79.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1142",
					fill: "#405669",
					cx: "66.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1143",
					fill: "#405669",
					cx: "53.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1144",
					fill: "#405669",
					cx: "40.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-470",
					fill: "#405669",
					cx: "118.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-471",
					fill: "#405669",
					cx: "105.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-472",
					fill: "#405669",
					cx: "92.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-473",
					fill: "#405669",
					cx: "79.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-474",
					fill: "#405669",
					cx: "66.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-475",
					fill: "#405669",
					cx: "53.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-476",
					fill: "#405669",
					cx: "40.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-440",
					fill: "#405669",
					cx: "118.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-441",
					fill: "#405669",
					cx: "105.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-442",
					fill: "#405669",
					cx: "92.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-443",
					fill: "#405669",
					cx: "79.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-444",
					fill: "#405669",
					cx: "66.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-445",
					fill: "#405669",
					cx: "53.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-446",
					fill: "#405669",
					cx: "40.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-405",
					fill: "#405669",
					cx: "53.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-406",
					fill: "#405669",
					cx: "40.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-374",
					fill: "#405669",
					cx: "40.5",
					cy: "1.5",
					r: "1.5"
				}
			}]
		}]
	}
}, function(t, e) {
	t.exports = {
		name: "g",
		attrs: {
			id: "\u5408\u6210-1_00000"
		},
		childs: [{
			name: "g",
			attrs: {
				id: "Group",
				transform: "translate(403.000000, 23.000000)"
			},
			childs: [{
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1249",
					fill: "#405669",
					cx: "406.5",
					cy: "378.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1248",
					fill: "#405669",
					cx: "393.5",
					cy: "378.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1241",
					fill: "#405669",
					cx: "302.5",
					cy: "378.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1240",
					fill: "#405669",
					cx: "289.5",
					cy: "378.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1219",
					fill: "#405669",
					cx: "406.5",
					cy: "365.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1218",
					fill: "#405669",
					cx: "393.5",
					cy: "365.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1212",
					fill: "#405669",
					cx: "315.5",
					cy: "365.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1211",
					fill: "#405669",
					cx: "302.5",
					cy: "365.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1210",
					fill: "#405669",
					cx: "289.5",
					cy: "365.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1192",
					fill: "#405669",
					cx: "445.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1191",
					fill: "#405669",
					cx: "432.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1190",
					fill: "#405669",
					cx: "419.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1189",
					fill: "#405669",
					cx: "406.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1188",
					fill: "#405669",
					cx: "393.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1187",
					fill: "#405669",
					cx: "380.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1186",
					fill: "#405669",
					cx: "367.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1182",
					fill: "#405669",
					cx: "315.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1181",
					fill: "#405669",
					cx: "302.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1180",
					fill: "#405669",
					cx: "289.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1179",
					fill: "#405669",
					cx: "276.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1178",
					fill: "#405669",
					cx: "263.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1177",
					fill: "#405669",
					cx: "250.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1176",
					fill: "#405669",
					cx: "237.5",
					cy: "352.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1163",
					fill: "#405669",
					cx: "458.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1162",
					fill: "#405669",
					cx: "445.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1161",
					fill: "#405669",
					cx: "432.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1160",
					fill: "#405669",
					cx: "419.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1159",
					fill: "#405669",
					cx: "406.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1158",
					fill: "#405669",
					cx: "393.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1157",
					fill: "#405669",
					cx: "380.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1156",
					fill: "#405669",
					cx: "367.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1152",
					fill: "#405669",
					cx: "315.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1151",
					fill: "#405669",
					cx: "302.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1150",
					fill: "#405669",
					cx: "289.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1149",
					fill: "#405669",
					cx: "276.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1148",
					fill: "#405669",
					cx: "263.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1147",
					fill: "#405669",
					cx: "250.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1146",
					fill: "#405669",
					cx: "237.5",
					cy: "339.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1135",
					fill: "#405669",
					cx: "484.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1134",
					fill: "#405669",
					cx: "471.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1133",
					fill: "#405669",
					cx: "458.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1132",
					fill: "#405669",
					cx: "445.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1131",
					fill: "#405669",
					cx: "432.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1130",
					fill: "#405669",
					cx: "419.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1129",
					fill: "#405669",
					cx: "406.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1128",
					fill: "#405669",
					cx: "393.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1127",
					fill: "#405669",
					cx: "380.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1126",
					fill: "#405669",
					cx: "367.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1122",
					fill: "#405669",
					cx: "315.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1121",
					fill: "#405669",
					cx: "302.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1120",
					fill: "#405669",
					cx: "289.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1119",
					fill: "#405669",
					cx: "276.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1118",
					fill: "#405669",
					cx: "263.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1117",
					fill: "#405669",
					cx: "250.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1116",
					fill: "#405669",
					cx: "237.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1114",
					fill: "#405669",
					cx: "211.5",
					cy: "326.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1106",
					fill: "#405669",
					cx: "497.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1105",
					fill: "#405669",
					cx: "484.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1104",
					fill: "#405669",
					cx: "471.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1103",
					fill: "#405669",
					cx: "458.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1102",
					fill: "#405669",
					cx: "445.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1101",
					fill: "#405669",
					cx: "432.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1100",
					fill: "#405669",
					cx: "419.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1099",
					fill: "#405669",
					cx: "406.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1098",
					fill: "#405669",
					cx: "393.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1097",
					fill: "#405669",
					cx: "380.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1096",
					fill: "#405669",
					cx: "367.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1095",
					fill: "#405669",
					cx: "354.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1094",
					fill: "#405669",
					cx: "341.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1093",
					fill: "#405669",
					cx: "328.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1092",
					fill: "#405669",
					cx: "315.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1091",
					fill: "#405669",
					cx: "302.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1090",
					fill: "#405669",
					cx: "289.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1089",
					fill: "#405669",
					cx: "276.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1088",
					fill: "#405669",
					cx: "263.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1087",
					fill: "#405669",
					cx: "250.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1086",
					fill: "#405669",
					cx: "237.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1084",
					fill: "#405669",
					cx: "211.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1083",
					fill: "#405669",
					cx: "198.5",
					cy: "313.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1071",
					fill: "#405669",
					cx: "432.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1070",
					fill: "#405669",
					cx: "419.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1069",
					fill: "#405669",
					cx: "406.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1068",
					fill: "#405669",
					cx: "393.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1067",
					fill: "#405669",
					cx: "380.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1066",
					fill: "#405669",
					cx: "367.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1065",
					fill: "#405669",
					cx: "354.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1064",
					fill: "#405669",
					cx: "341.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1063",
					fill: "#405669",
					cx: "328.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1062",
					fill: "#405669",
					cx: "315.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1061",
					fill: "#405669",
					cx: "302.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1060",
					fill: "#405669",
					cx: "289.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1059",
					fill: "#405669",
					cx: "276.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1058",
					fill: "#405669",
					cx: "263.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1057",
					fill: "#405669",
					cx: "250.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1056",
					fill: "#405669",
					cx: "237.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1054",
					fill: "#405669",
					cx: "211.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1053",
					fill: "#405669",
					cx: "198.5",
					cy: "300.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1041",
					fill: "#405669",
					cx: "432.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1040",
					fill: "#405669",
					cx: "419.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1039",
					fill: "#405669",
					cx: "406.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1038",
					fill: "#405669",
					cx: "393.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1037",
					fill: "#405669",
					cx: "380.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1036",
					fill: "#405669",
					cx: "367.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1035",
					fill: "#405669",
					cx: "354.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1034",
					fill: "#405669",
					cx: "341.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1033",
					fill: "#405669",
					cx: "328.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1032",
					fill: "#405669",
					cx: "315.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1031",
					fill: "#405669",
					cx: "302.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1030",
					fill: "#405669",
					cx: "289.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1029",
					fill: "#405669",
					cx: "276.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1028",
					fill: "#405669",
					cx: "263.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1027",
					fill: "#405669",
					cx: "250.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1011",
					fill: "#405669",
					cx: "432.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1010",
					fill: "#405669",
					cx: "419.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1009",
					fill: "#405669",
					cx: "406.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1008",
					fill: "#405669",
					cx: "393.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1007",
					fill: "#405669",
					cx: "380.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1006",
					fill: "#405669",
					cx: "367.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1005",
					fill: "#405669",
					cx: "354.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1004",
					fill: "#405669",
					cx: "341.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1003",
					fill: "#405669",
					cx: "328.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1002",
					fill: "#405669",
					cx: "315.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1001",
					fill: "#405669",
					cx: "302.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1000",
					fill: "#405669",
					cx: "289.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-999",
					fill: "#405669",
					cx: "276.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-998",
					fill: "#405669",
					cx: "263.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-997",
					fill: "#405669",
					cx: "250.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-986",
					fill: "#405669",
					cx: "497.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-985",
					fill: "#405669",
					cx: "484.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-984",
					fill: "#405669",
					cx: "471.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-983",
					fill: "#405669",
					cx: "458.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-982",
					fill: "#405669",
					cx: "445.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-981",
					fill: "#405669",
					cx: "432.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-980",
					fill: "#405669",
					cx: "419.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-979",
					fill: "#405669",
					cx: "406.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-978",
					fill: "#405669",
					cx: "393.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-977",
					fill: "#405669",
					cx: "380.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-976",
					fill: "#405669",
					cx: "367.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-975",
					fill: "#405669",
					cx: "354.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-974",
					fill: "#405669",
					cx: "341.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-973",
					fill: "#405669",
					cx: "328.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-972",
					fill: "#405669",
					cx: "315.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-971",
					fill: "#405669",
					cx: "302.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-970",
					fill: "#405669",
					cx: "289.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-969",
					fill: "#405669",
					cx: "276.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-968",
					fill: "#405669",
					cx: "263.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-967",
					fill: "#405669",
					cx: "250.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-966",
					fill: "#405669",
					cx: "237.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-965",
					fill: "#405669",
					cx: "224.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-964",
					fill: "#405669",
					cx: "211.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-963",
					fill: "#405669",
					cx: "198.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-954",
					fill: "#405669",
					cx: "471.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-953",
					fill: "#405669",
					cx: "458.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-952",
					fill: "#405669",
					cx: "445.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-951",
					fill: "#405669",
					cx: "432.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-950",
					fill: "#405669",
					cx: "419.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-949",
					fill: "#405669",
					cx: "406.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-948",
					fill: "#405669",
					cx: "393.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-947",
					fill: "#405669",
					cx: "380.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-946",
					fill: "#405669",
					cx: "367.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-945",
					fill: "#405669",
					cx: "354.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-944",
					fill: "#405669",
					cx: "341.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-943",
					fill: "#405669",
					cx: "328.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-942",
					fill: "#405669",
					cx: "315.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-941",
					fill: "#405669",
					cx: "302.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-940",
					fill: "#405669",
					cx: "289.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-939",
					fill: "#405669",
					cx: "276.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-938",
					fill: "#405669",
					cx: "263.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-937",
					fill: "#405669",
					cx: "250.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-936",
					fill: "#405669",
					cx: "237.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-935",
					fill: "#405669",
					cx: "224.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-934",
					fill: "#405669",
					cx: "211.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-933",
					fill: "#405669",
					cx: "198.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-924",
					fill: "#405669",
					cx: "471.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-923",
					fill: "#405669",
					cx: "458.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-922",
					fill: "#405669",
					cx: "445.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-921",
					fill: "#405669",
					cx: "432.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-920",
					fill: "#405669",
					cx: "419.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-919",
					fill: "#405669",
					cx: "406.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-918",
					fill: "#405669",
					cx: "393.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-917",
					fill: "#405669",
					cx: "380.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-916",
					fill: "#405669",
					cx: "367.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-915",
					fill: "#405669",
					cx: "354.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-914",
					fill: "#405669",
					cx: "341.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-913",
					fill: "#405669",
					cx: "328.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-912",
					fill: "#405669",
					cx: "315.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-911",
					fill: "#405669",
					cx: "302.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-910",
					fill: "#405669",
					cx: "289.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-909",
					fill: "#405669",
					cx: "276.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-908",
					fill: "#405669",
					cx: "263.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-907",
					fill: "#405669",
					cx: "250.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-906",
					fill: "#405669",
					cx: "237.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-905",
					fill: "#405669",
					cx: "224.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-904",
					fill: "#405669",
					cx: "211.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1145",
					fill: "#405669",
					cx: "172.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-903",
					fill: "#405669",
					cx: "198.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1153",
					fill: "#405669",
					cx: "159.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-902",
					fill: "#405669",
					cx: "185.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1154",
					fill: "#405669",
					cx: "146.5",
					cy: "287.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-894",
					fill: "#405669",
					cx: "471.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-893",
					fill: "#405669",
					cx: "458.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-892",
					fill: "#405669",
					cx: "445.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-891",
					fill: "#405669",
					cx: "432.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-890",
					fill: "#405669",
					cx: "419.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-889",
					fill: "#405669",
					cx: "406.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-888",
					fill: "#405669",
					cx: "393.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-887",
					fill: "#405669",
					cx: "380.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-886",
					fill: "#405669",
					cx: "367.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-885",
					fill: "#405669",
					cx: "354.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-884",
					fill: "#405669",
					cx: "341.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-883",
					fill: "#405669",
					cx: "328.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-882",
					fill: "#405669",
					cx: "315.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-881",
					fill: "#405669",
					cx: "302.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-880",
					fill: "#405669",
					cx: "289.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-879",
					fill: "#405669",
					cx: "276.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-878",
					fill: "#405669",
					cx: "263.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-877",
					fill: "#405669",
					cx: "250.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-876",
					fill: "#405669",
					cx: "237.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-875",
					fill: "#405669",
					cx: "224.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-874",
					fill: "#405669",
					cx: "211.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1155",
					fill: "#405669",
					cx: "172.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-873",
					fill: "#405669",
					cx: "198.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1164",
					fill: "#405669",
					cx: "159.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-872",
					fill: "#405669",
					cx: "185.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1165",
					fill: "#405669",
					cx: "146.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-866",
					fill: "#405669",
					cx: "497.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-865",
					fill: "#405669",
					cx: "484.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-864",
					fill: "#405669",
					cx: "471.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-863",
					fill: "#405669",
					cx: "458.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-862",
					fill: "#405669",
					cx: "445.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-861",
					fill: "#405669",
					cx: "432.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-860",
					fill: "#405669",
					cx: "419.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-859",
					fill: "#405669",
					cx: "406.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-858",
					fill: "#405669",
					cx: "393.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-857",
					fill: "#405669",
					cx: "380.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-856",
					fill: "#405669",
					cx: "367.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-855",
					fill: "#405669",
					cx: "354.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-854",
					fill: "#405669",
					cx: "341.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-853",
					fill: "#405669",
					cx: "328.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-852",
					fill: "#405669",
					cx: "315.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-851",
					fill: "#405669",
					cx: "302.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-850",
					fill: "#405669",
					cx: "289.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-849",
					fill: "#405669",
					cx: "276.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-848",
					fill: "#405669",
					cx: "263.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-847",
					fill: "#405669",
					cx: "250.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-846",
					fill: "#405669",
					cx: "237.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-845",
					fill: "#405669",
					cx: "224.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-844",
					fill: "#405669",
					cx: "211.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1166",
					fill: "#405669",
					cx: "172.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-843",
					fill: "#405669",
					cx: "198.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1167",
					fill: "#405669",
					cx: "159.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-842",
					fill: "#405669",
					cx: "185.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1168",
					fill: "#405669",
					cx: "146.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-832",
					fill: "#405669",
					cx: "445.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-833",
					fill: "#405669",
					cx: "627.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1225",
					fill: "#405669",
					cx: "562.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-831",
					fill: "#405669",
					cx: "432.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-834",
					fill: "#405669",
					cx: "614.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1226",
					fill: "#405669",
					cx: "549.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-830",
					fill: "#405669",
					cx: "419.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-835",
					fill: "#405669",
					cx: "601.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1227",
					fill: "#405669",
					cx: "536.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-829",
					fill: "#405669",
					cx: "406.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-836",
					fill: "#405669",
					cx: "588.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1228",
					fill: "#405669",
					cx: "523.5",
					cy: "274.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-828",
					fill: "#405669",
					cx: "393.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-837",
					fill: "#405669",
					cx: "575.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-827",
					fill: "#405669",
					cx: "380.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-838",
					fill: "#405669",
					cx: "562.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-826",
					fill: "#405669",
					cx: "367.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-839",
					fill: "#405669",
					cx: "549.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-825",
					fill: "#405669",
					cx: "354.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-840",
					fill: "#405669",
					cx: "536.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-824",
					fill: "#405669",
					cx: "341.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-841",
					fill: "#405669",
					cx: "523.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-823",
					fill: "#405669",
					cx: "328.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-867",
					fill: "#405669",
					cx: "510.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-822",
					fill: "#405669",
					cx: "315.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-821",
					fill: "#405669",
					cx: "302.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-820",
					fill: "#405669",
					cx: "289.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-819",
					fill: "#405669",
					cx: "276.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-818",
					fill: "#405669",
					cx: "263.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-817",
					fill: "#405669",
					cx: "250.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-816",
					fill: "#405669",
					cx: "237.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-815",
					fill: "#405669",
					cx: "224.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-814",
					fill: "#405669",
					cx: "211.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1169",
					fill: "#405669",
					cx: "172.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-813",
					fill: "#405669",
					cx: "198.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1170",
					fill: "#405669",
					cx: "159.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-812",
					fill: "#405669",
					cx: "185.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1171",
					fill: "#405669",
					cx: "146.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-811",
					fill: "#405669",
					cx: "172.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1172",
					fill: "#405669",
					cx: "133.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-810",
					fill: "#405669",
					cx: "159.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1173",
					fill: "#405669",
					cx: "120.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-809",
					fill: "#405669",
					cx: "146.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1174",
					fill: "#405669",
					cx: "107.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-802",
					fill: "#405669",
					cx: "445.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-803",
					fill: "#405669",
					cx: "627.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1229",
					fill: "#405669",
					cx: "562.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-801",
					fill: "#405669",
					cx: "432.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-804",
					fill: "#405669",
					cx: "614.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1230",
					fill: "#405669",
					cx: "549.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-800",
					fill: "#405669",
					cx: "419.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-805",
					fill: "#405669",
					cx: "601.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1231",
					fill: "#405669",
					cx: "536.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-799",
					fill: "#405669",
					cx: "406.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-806",
					fill: "#405669",
					cx: "588.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1232",
					fill: "#405669",
					cx: "523.5",
					cy: "261.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-798",
					fill: "#405669",
					cx: "393.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-807",
					fill: "#405669",
					cx: "575.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-797",
					fill: "#405669",
					cx: "380.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-808",
					fill: "#405669",
					cx: "562.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-796",
					fill: "#405669",
					cx: "367.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-868",
					fill: "#405669",
					cx: "549.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-795",
					fill: "#405669",
					cx: "354.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-869",
					fill: "#405669",
					cx: "536.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-794",
					fill: "#405669",
					cx: "341.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-870",
					fill: "#405669",
					cx: "523.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-793",
					fill: "#405669",
					cx: "328.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-871",
					fill: "#405669",
					cx: "510.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-792",
					fill: "#405669",
					cx: "315.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-791",
					fill: "#405669",
					cx: "302.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-790",
					fill: "#405669",
					cx: "289.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-789",
					fill: "#405669",
					cx: "276.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-788",
					fill: "#405669",
					cx: "263.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-787",
					fill: "#405669",
					cx: "250.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-786",
					fill: "#405669",
					cx: "237.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-785",
					fill: "#405669",
					cx: "224.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-784",
					fill: "#405669",
					cx: "211.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1175",
					fill: "#405669",
					cx: "172.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-783",
					fill: "#405669",
					cx: "198.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1183",
					fill: "#405669",
					cx: "159.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-782",
					fill: "#405669",
					cx: "185.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1184",
					fill: "#405669",
					cx: "146.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-781",
					fill: "#405669",
					cx: "172.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1185",
					fill: "#405669",
					cx: "133.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-780",
					fill: "#405669",
					cx: "159.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1193",
					fill: "#405669",
					cx: "120.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-779",
					fill: "#405669",
					cx: "146.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1194",
					fill: "#405669",
					cx: "107.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-776",
					fill: "#405669",
					cx: "497.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-777",
					fill: "#405669",
					cx: "679.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1233",
					fill: "#405669",
					cx: "614.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-775",
					fill: "#405669",
					cx: "484.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-778",
					fill: "#405669",
					cx: "666.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1234",
					fill: "#405669",
					cx: "601.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-774",
					fill: "#405669",
					cx: "471.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-895",
					fill: "#405669",
					cx: "653.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1235",
					fill: "#405669",
					cx: "588.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-773",
					fill: "#405669",
					cx: "458.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-896",
					fill: "#405669",
					cx: "640.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1236",
					fill: "#405669",
					cx: "575.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-772",
					fill: "#405669",
					cx: "445.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-897",
					fill: "#405669",
					cx: "627.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1237",
					fill: "#405669",
					cx: "562.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-771",
					fill: "#405669",
					cx: "432.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-898",
					fill: "#405669",
					cx: "614.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1238",
					fill: "#405669",
					cx: "549.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-770",
					fill: "#405669",
					cx: "419.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-899",
					fill: "#405669",
					cx: "601.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1239",
					fill: "#405669",
					cx: "536.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-769",
					fill: "#405669",
					cx: "406.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-900",
					fill: "#405669",
					cx: "588.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1242",
					fill: "#405669",
					cx: "523.5",
					cy: "248.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-768",
					fill: "#405669",
					cx: "393.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-901",
					fill: "#405669",
					cx: "575.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-767",
					fill: "#405669",
					cx: "380.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-925",
					fill: "#405669",
					cx: "562.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-766",
					fill: "#405669",
					cx: "367.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-926",
					fill: "#405669",
					cx: "549.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-765",
					fill: "#405669",
					cx: "354.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-927",
					fill: "#405669",
					cx: "536.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-764",
					fill: "#405669",
					cx: "341.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-928",
					fill: "#405669",
					cx: "523.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-763",
					fill: "#405669",
					cx: "328.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-929",
					fill: "#405669",
					cx: "510.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-762",
					fill: "#405669",
					cx: "315.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-761",
					fill: "#405669",
					cx: "302.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-760",
					fill: "#405669",
					cx: "289.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-759",
					fill: "#405669",
					cx: "276.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-758",
					fill: "#405669",
					cx: "263.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-757",
					fill: "#405669",
					cx: "250.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-756",
					fill: "#405669",
					cx: "237.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-755",
					fill: "#405669",
					cx: "224.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-754",
					fill: "#405669",
					cx: "211.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1195",
					fill: "#405669",
					cx: "172.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-753",
					fill: "#405669",
					cx: "198.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1196",
					fill: "#405669",
					cx: "159.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-752",
					fill: "#405669",
					cx: "185.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1197",
					fill: "#405669",
					cx: "146.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-751",
					fill: "#405669",
					cx: "172.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1198",
					fill: "#405669",
					cx: "133.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-750",
					fill: "#405669",
					cx: "159.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1199",
					fill: "#405669",
					cx: "120.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-749",
					fill: "#405669",
					cx: "146.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1200",
					fill: "#405669",
					cx: "107.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-746",
					fill: "#405669",
					cx: "497.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-747",
					fill: "#405669",
					cx: "679.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1243",
					fill: "#405669",
					cx: "614.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-745",
					fill: "#405669",
					cx: "484.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-748",
					fill: "#405669",
					cx: "666.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1244",
					fill: "#405669",
					cx: "601.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-744",
					fill: "#405669",
					cx: "471.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-930",
					fill: "#405669",
					cx: "653.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1245",
					fill: "#405669",
					cx: "588.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-743",
					fill: "#405669",
					cx: "458.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-931",
					fill: "#405669",
					cx: "640.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1246",
					fill: "#405669",
					cx: "575.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-742",
					fill: "#405669",
					cx: "445.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-932",
					fill: "#405669",
					cx: "627.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1247",
					fill: "#405669",
					cx: "562.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-741",
					fill: "#405669",
					cx: "432.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-955",
					fill: "#405669",
					cx: "614.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1250",
					fill: "#405669",
					cx: "549.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-740",
					fill: "#405669",
					cx: "419.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-956",
					fill: "#405669",
					cx: "601.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1251",
					fill: "#405669",
					cx: "536.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-739",
					fill: "#405669",
					cx: "406.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-957",
					fill: "#405669",
					cx: "588.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1252",
					fill: "#405669",
					cx: "523.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-738",
					fill: "#405669",
					cx: "393.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-958",
					fill: "#405669",
					cx: "575.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-737",
					fill: "#405669",
					cx: "380.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-959",
					fill: "#405669",
					cx: "562.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-736",
					fill: "#405669",
					cx: "367.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-960",
					fill: "#405669",
					cx: "549.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "path",
				attrs: {
					d: "M354.5,159 C355.328427,159 356,158.328427 356,157.5 C356,156.671573 355.328427,156 354.5,156 C353.671573,156 353,156.671573 353,157.5 C353,158.328427 353.671573,159 354.5,159 Z",
					id: "Oval-358-Copy-735",
					fill: "#405669"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-961",
					fill: "#405669",
					cx: "536.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-734",
					fill: "#405669",
					cx: "341.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-962",
					fill: "#405669",
					cx: "523.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-733",
					fill: "#405669",
					cx: "328.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-987",
					fill: "#405669",
					cx: "510.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-732",
					fill: "#405669",
					cx: "315.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-731",
					fill: "#405669",
					cx: "302.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-730",
					fill: "#405669",
					cx: "289.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-729",
					fill: "#405669",
					cx: "276.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-728",
					fill: "#405669",
					cx: "263.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-727",
					fill: "#405669",
					cx: "250.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-726",
					fill: "#405669",
					cx: "237.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-725",
					fill: "#405669",
					cx: "224.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-724",
					fill: "#405669",
					cx: "211.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1201",
					fill: "#405669",
					cx: "172.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-723",
					fill: "#405669",
					cx: "198.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1202",
					fill: "#405669",
					cx: "159.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-722",
					fill: "#405669",
					cx: "185.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1203",
					fill: "#405669",
					cx: "146.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-721",
					fill: "#405669",
					cx: "172.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1204",
					fill: "#405669",
					cx: "133.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-720",
					fill: "#405669",
					cx: "159.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1205",
					fill: "#405669",
					cx: "120.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-719",
					fill: "#405669",
					cx: "146.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1206",
					fill: "#405669",
					cx: "107.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-716",
					fill: "#405669",
					cx: "497.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-717",
					fill: "#405669",
					cx: "679.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1253",
					fill: "#405669",
					cx: "614.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-715",
					fill: "#405669",
					cx: "484.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-718",
					fill: "#405669",
					cx: "666.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1254",
					fill: "#405669",
					cx: "601.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-714",
					fill: "#405669",
					cx: "471.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-988",
					fill: "#405669",
					cx: "653.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1255",
					fill: "#405669",
					cx: "588.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-713",
					fill: "#405669",
					cx: "458.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-989",
					fill: "#405669",
					cx: "640.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1256",
					fill: "#405669",
					cx: "575.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-712",
					fill: "#405669",
					cx: "445.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-990",
					fill: "#405669",
					cx: "627.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1257",
					fill: "#405669",
					cx: "562.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-711",
					fill: "#405669",
					cx: "432.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-991",
					fill: "#405669",
					cx: "614.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1258",
					fill: "#405669",
					cx: "549.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-710",
					fill: "#405669",
					cx: "419.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-992",
					fill: "#405669",
					cx: "601.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1259",
					fill: "#405669",
					cx: "536.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-709",
					fill: "#405669",
					cx: "406.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-993",
					fill: "#405669",
					cx: "588.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1260",
					fill: "#405669",
					cx: "523.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-708",
					fill: "#405669",
					cx: "393.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-994",
					fill: "#405669",
					cx: "575.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-707",
					fill: "#405669",
					cx: "380.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-995",
					fill: "#405669",
					cx: "562.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-706",
					fill: "#405669",
					cx: "367.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-996",
					fill: "#405669",
					cx: "549.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-705",
					fill: "#405669",
					cx: "354.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1012",
					fill: "#405669",
					cx: "536.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-704",
					fill: "#405669",
					cx: "341.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1013",
					fill: "#405669",
					cx: "523.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-703",
					fill: "#405669",
					cx: "328.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1014",
					fill: "#405669",
					cx: "510.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-702",
					fill: "#405669",
					cx: "315.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-701",
					fill: "#405669",
					cx: "302.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-700",
					fill: "#405669",
					cx: "289.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-699",
					fill: "#405669",
					cx: "276.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-698",
					fill: "#405669",
					cx: "263.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-697",
					fill: "#405669",
					cx: "250.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-696",
					fill: "#405669",
					cx: "237.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-695",
					fill: "#405669",
					cx: "224.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-694",
					fill: "#405669",
					cx: "211.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-693",
					fill: "#405669",
					cx: "198.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-692",
					fill: "#405669",
					cx: "185.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-691",
					fill: "#405669",
					cx: "172.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-690",
					fill: "#405669",
					cx: "159.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-689",
					fill: "#405669",
					cx: "146.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-687",
					fill: "#405669",
					cx: "120.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-681",
					fill: "#405669",
					cx: "432.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-682",
					fill: "#405669",
					cx: "614.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1261",
					fill: "#405669",
					cx: "549.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-680",
					fill: "#405669",
					cx: "419.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-683",
					fill: "#405669",
					cx: "601.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1262",
					fill: "#405669",
					cx: "536.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-679",
					fill: "#405669",
					cx: "406.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-684",
					fill: "#405669",
					cx: "588.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1263",
					fill: "#405669",
					cx: "523.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-678",
					fill: "#405669",
					cx: "393.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-685",
					fill: "#405669",
					cx: "575.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-677",
					fill: "#405669",
					cx: "380.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-686",
					fill: "#405669",
					cx: "562.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-676",
					fill: "#405669",
					cx: "367.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-688",
					fill: "#405669",
					cx: "549.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-675",
					fill: "#405669",
					cx: "354.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1015",
					fill: "#405669",
					cx: "536.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-674",
					fill: "#405669",
					cx: "341.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1016",
					fill: "#405669",
					cx: "523.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-673",
					fill: "#405669",
					cx: "328.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1017",
					fill: "#405669",
					cx: "510.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-672",
					fill: "#405669",
					cx: "315.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-671",
					fill: "#405669",
					cx: "302.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-670",
					fill: "#405669",
					cx: "289.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-669",
					fill: "#405669",
					cx: "276.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-668",
					fill: "#405669",
					cx: "263.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-667",
					fill: "#405669",
					cx: "250.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-666",
					fill: "#405669",
					cx: "237.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-665",
					fill: "#405669",
					cx: "224.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-664",
					fill: "#405669",
					cx: "211.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-663",
					fill: "#405669",
					cx: "198.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-662",
					fill: "#405669",
					cx: "185.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-661",
					fill: "#405669",
					cx: "172.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-660",
					fill: "#405669",
					cx: "159.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-659",
					fill: "#405669",
					cx: "146.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-657",
					fill: "#405669",
					cx: "120.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-656",
					fill: "#405669",
					cx: "497.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-658",
					fill: "#405669",
					cx: "679.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-655",
					fill: "#405669",
					cx: "484.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1018",
					fill: "#405669",
					cx: "666.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-654",
					fill: "#405669",
					cx: "471.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1019",
					fill: "#405669",
					cx: "653.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-653",
					fill: "#405669",
					cx: "458.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1020",
					fill: "#405669",
					cx: "640.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-652",
					fill: "#405669",
					cx: "445.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1021",
					fill: "#405669",
					cx: "627.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-651",
					fill: "#405669",
					cx: "432.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1022",
					fill: "#405669",
					cx: "614.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-650",
					fill: "#405669",
					cx: "419.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1023",
					fill: "#405669",
					cx: "601.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-649",
					fill: "#405669",
					cx: "406.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1024",
					fill: "#405669",
					cx: "588.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-648",
					fill: "#405669",
					cx: "393.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1025",
					fill: "#405669",
					cx: "575.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-647",
					fill: "#405669",
					cx: "380.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1026",
					fill: "#405669",
					cx: "562.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-646",
					fill: "#405669",
					cx: "367.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1042",
					fill: "#405669",
					cx: "549.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-645",
					fill: "#405669",
					cx: "354.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1043",
					fill: "#405669",
					cx: "536.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-644",
					fill: "#405669",
					cx: "341.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1044",
					fill: "#405669",
					cx: "523.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-643",
					fill: "#405669",
					cx: "328.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1045",
					fill: "#405669",
					cx: "510.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-642",
					fill: "#405669",
					cx: "315.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-641",
					fill: "#405669",
					cx: "302.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-640",
					fill: "#405669",
					cx: "289.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-639",
					fill: "#405669",
					cx: "276.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-638",
					fill: "#405669",
					cx: "263.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-637",
					fill: "#405669",
					cx: "250.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-636",
					fill: "#405669",
					cx: "237.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-635",
					fill: "#405669",
					cx: "224.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-634",
					fill: "#405669",
					cx: "211.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-633",
					fill: "#405669",
					cx: "198.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-632",
					fill: "#405669",
					cx: "185.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-631",
					fill: "#405669",
					cx: "172.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-630",
					fill: "#405669",
					cx: "159.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-629",
					fill: "#405669",
					cx: "146.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-627",
					fill: "#405669",
					cx: "120.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-626",
					fill: "#405669",
					cx: "497.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-628",
					fill: "#405669",
					cx: "679.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-625",
					fill: "#405669",
					cx: "484.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1046",
					fill: "#405669",
					cx: "666.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-624",
					fill: "#405669",
					cx: "471.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1047",
					fill: "#405669",
					cx: "653.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-623",
					fill: "#405669",
					cx: "458.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1048",
					fill: "#405669",
					cx: "640.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-622",
					fill: "#405669",
					cx: "445.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1049",
					fill: "#405669",
					cx: "627.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-621",
					fill: "#405669",
					cx: "432.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1050",
					fill: "#405669",
					cx: "614.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-620",
					fill: "#405669",
					cx: "419.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1051",
					fill: "#405669",
					cx: "601.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-619",
					fill: "#405669",
					cx: "406.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1052",
					fill: "#405669",
					cx: "588.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-618",
					fill: "#405669",
					cx: "393.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1055",
					fill: "#405669",
					cx: "575.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-617",
					fill: "#405669",
					cx: "380.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1072",
					fill: "#405669",
					cx: "562.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-616",
					fill: "#405669",
					cx: "367.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1073",
					fill: "#405669",
					cx: "549.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-615",
					fill: "#405669",
					cx: "354.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1074",
					fill: "#405669",
					cx: "536.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-614",
					fill: "#405669",
					cx: "341.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1075",
					fill: "#405669",
					cx: "523.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-613",
					fill: "#405669",
					cx: "328.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1076",
					fill: "#405669",
					cx: "510.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-612",
					fill: "#405669",
					cx: "315.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-611",
					fill: "#405669",
					cx: "302.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-610",
					fill: "#405669",
					cx: "289.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-609",
					fill: "#405669",
					cx: "276.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-608",
					fill: "#405669",
					cx: "263.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-607",
					fill: "#405669",
					cx: "250.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-606",
					fill: "#405669",
					cx: "237.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-605",
					fill: "#405669",
					cx: "224.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-604",
					fill: "#405669",
					cx: "211.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-603",
					fill: "#405669",
					cx: "198.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-602",
					fill: "#405669",
					cx: "185.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-601",
					fill: "#405669",
					cx: "172.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-600",
					fill: "#405669",
					cx: "159.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-598",
					fill: "#405669",
					cx: "133.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-597",
					fill: "#405669",
					cx: "120.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-596",
					fill: "#405669",
					cx: "497.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-599",
					fill: "#405669",
					cx: "679.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-595",
					fill: "#405669",
					cx: "484.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1077",
					fill: "#405669",
					cx: "666.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-594",
					fill: "#405669",
					cx: "471.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1078",
					fill: "#405669",
					cx: "653.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-593",
					fill: "#405669",
					cx: "458.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1079",
					fill: "#405669",
					cx: "640.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-592",
					fill: "#405669",
					cx: "445.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1080",
					fill: "#405669",
					cx: "627.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-591",
					fill: "#405669",
					cx: "432.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1081",
					fill: "#405669",
					cx: "614.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-590",
					fill: "#405669",
					cx: "419.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1082",
					fill: "#405669",
					cx: "601.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-589",
					fill: "#405669",
					cx: "406.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1085",
					fill: "#405669",
					cx: "588.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-588",
					fill: "#405669",
					cx: "393.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1107",
					fill: "#405669",
					cx: "575.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-587",
					fill: "#405669",
					cx: "380.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1108",
					fill: "#405669",
					cx: "562.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-586",
					fill: "#405669",
					cx: "367.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1109",
					fill: "#405669",
					cx: "549.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-585",
					fill: "#405669",
					cx: "354.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1110",
					fill: "#405669",
					cx: "536.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-584",
					fill: "#405669",
					cx: "341.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1111",
					fill: "#405669",
					cx: "523.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-583",
					fill: "#405669",
					cx: "328.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1112",
					fill: "#405669",
					cx: "510.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-582",
					fill: "#405669",
					cx: "315.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-581",
					fill: "#405669",
					cx: "302.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-580",
					fill: "#405669",
					cx: "289.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-579",
					fill: "#405669",
					cx: "276.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-578",
					fill: "#405669",
					cx: "263.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-577",
					fill: "#405669",
					cx: "250.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-576",
					fill: "#405669",
					cx: "237.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-575",
					fill: "#405669",
					cx: "224.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-574",
					fill: "#405669",
					cx: "211.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-573",
					fill: "#405669",
					cx: "198.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-572",
					fill: "#405669",
					cx: "185.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-566",
					fill: "#405669",
					cx: "497.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-567",
					fill: "#405669",
					cx: "679.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-565",
					fill: "#405669",
					cx: "484.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-568",
					fill: "#405669",
					cx: "666.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-564",
					fill: "#405669",
					cx: "471.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-569",
					fill: "#405669",
					cx: "653.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-563",
					fill: "#405669",
					cx: "458.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-570",
					fill: "#405669",
					cx: "640.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-562",
					fill: "#405669",
					cx: "445.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-571",
					fill: "#405669",
					cx: "627.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-561",
					fill: "#405669",
					cx: "432.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1113",
					fill: "#405669",
					cx: "614.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-560",
					fill: "#405669",
					cx: "419.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1115",
					fill: "#405669",
					cx: "601.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-559",
					fill: "#405669",
					cx: "406.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1123",
					fill: "#405669",
					cx: "588.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-558",
					fill: "#405669",
					cx: "393.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1124",
					fill: "#405669",
					cx: "575.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-557",
					fill: "#405669",
					cx: "380.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1125",
					fill: "#405669",
					cx: "562.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-556",
					fill: "#405669",
					cx: "367.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1136",
					fill: "#405669",
					cx: "549.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-555",
					fill: "#405669",
					cx: "354.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1137",
					fill: "#405669",
					cx: "536.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-554",
					fill: "#405669",
					cx: "341.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1138",
					fill: "#405669",
					cx: "523.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-553",
					fill: "#405669",
					cx: "328.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1139",
					fill: "#405669",
					cx: "510.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-552",
					fill: "#405669",
					cx: "315.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-551",
					fill: "#405669",
					cx: "302.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-550",
					fill: "#405669",
					cx: "289.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-549",
					fill: "#405669",
					cx: "276.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-548",
					fill: "#405669",
					cx: "263.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-547",
					fill: "#405669",
					cx: "250.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-546",
					fill: "#405669",
					cx: "237.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-545",
					fill: "#405669",
					cx: "224.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-544",
					fill: "#405669",
					cx: "211.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-543",
					fill: "#405669",
					cx: "198.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-542",
					fill: "#405669",
					cx: "185.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-530",
					fill: "#405669",
					cx: "419.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-531",
					fill: "#405669",
					cx: "601.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-529",
					fill: "#405669",
					cx: "406.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-532",
					fill: "#405669",
					cx: "588.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-528",
					fill: "#405669",
					cx: "393.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-533",
					fill: "#405669",
					cx: "575.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-527",
					fill: "#405669",
					cx: "380.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-534",
					fill: "#405669",
					cx: "562.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-526",
					fill: "#405669",
					cx: "367.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-535",
					fill: "#405669",
					cx: "549.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-525",
					fill: "#405669",
					cx: "354.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-536",
					fill: "#405669",
					cx: "536.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-524",
					fill: "#405669",
					cx: "341.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-537",
					fill: "#405669",
					cx: "523.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-523",
					fill: "#405669",
					cx: "328.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-538",
					fill: "#405669",
					cx: "510.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-522",
					fill: "#405669",
					cx: "315.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-521",
					fill: "#405669",
					cx: "302.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-520",
					fill: "#405669",
					cx: "289.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-519",
					fill: "#405669",
					cx: "276.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-518",
					fill: "#405669",
					cx: "263.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-517",
					fill: "#405669",
					cx: "250.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-516",
					fill: "#405669",
					cx: "237.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-515",
					fill: "#405669",
					cx: "224.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-514",
					fill: "#405669",
					cx: "211.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-513",
					fill: "#405669",
					cx: "198.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-512",
					fill: "#405669",
					cx: "185.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-511",
					fill: "#405669",
					cx: "172.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-510",
					fill: "#405669",
					cx: "159.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-509",
					fill: "#405669",
					cx: "146.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-508",
					fill: "#405669",
					cx: "133.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-507",
					fill: "#405669",
					cx: "120.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-503",
					fill: "#405669",
					cx: "458.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-504",
					fill: "#405669",
					cx: "640.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-502",
					fill: "#405669",
					cx: "445.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-505",
					fill: "#405669",
					cx: "627.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-501",
					fill: "#405669",
					cx: "432.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-506",
					fill: "#405669",
					cx: "614.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-500",
					fill: "#405669",
					cx: "419.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-539",
					fill: "#405669",
					cx: "601.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-499",
					fill: "#405669",
					cx: "406.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-540",
					fill: "#405669",
					cx: "588.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-498",
					fill: "#405669",
					cx: "393.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-541",
					fill: "#405669",
					cx: "575.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-497",
					fill: "#405669",
					cx: "380.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1140",
					fill: "#405669",
					cx: "562.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-496",
					fill: "#405669",
					cx: "367.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1141",
					fill: "#405669",
					cx: "549.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-495",
					fill: "#405669",
					cx: "354.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1142",
					fill: "#405669",
					cx: "536.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-494",
					fill: "#405669",
					cx: "341.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1143",
					fill: "#405669",
					cx: "523.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-493",
					fill: "#405669",
					cx: "328.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1144",
					fill: "#405669",
					cx: "510.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-492",
					fill: "#405669",
					cx: "315.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-491",
					fill: "#405669",
					cx: "302.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-490",
					fill: "#405669",
					cx: "289.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-489",
					fill: "#405669",
					cx: "276.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-488",
					fill: "#405669",
					cx: "263.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-487",
					fill: "#405669",
					cx: "250.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-486",
					fill: "#405669",
					cx: "237.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-485",
					fill: "#405669",
					cx: "224.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-484",
					fill: "#405669",
					cx: "211.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-483",
					fill: "#405669",
					cx: "198.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-482",
					fill: "#405669",
					cx: "185.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-481",
					fill: "#405669",
					cx: "172.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-480",
					fill: "#405669",
					cx: "159.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-479",
					fill: "#405669",
					cx: "146.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-478",
					fill: "#405669",
					cx: "133.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-477",
					fill: "#405669",
					cx: "120.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-469",
					fill: "#405669",
					cx: "406.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-470",
					fill: "#405669",
					cx: "588.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-468",
					fill: "#405669",
					cx: "393.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-471",
					fill: "#405669",
					cx: "575.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-467",
					fill: "#405669",
					cx: "380.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-472",
					fill: "#405669",
					cx: "562.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-466",
					fill: "#405669",
					cx: "367.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-473",
					fill: "#405669",
					cx: "549.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-465",
					fill: "#405669",
					cx: "354.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-474",
					fill: "#405669",
					cx: "536.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-464",
					fill: "#405669",
					cx: "341.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-475",
					fill: "#405669",
					cx: "523.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-463",
					fill: "#405669",
					cx: "328.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-476",
					fill: "#405669",
					cx: "510.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-462",
					fill: "#405669",
					cx: "315.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-461",
					fill: "#405669",
					cx: "302.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-457",
					fill: "#405669",
					cx: "250.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-456",
					fill: "#405669",
					cx: "237.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-459",
					fill: "#405669",
					cx: "106.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-455",
					fill: "#405669",
					cx: "224.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-460",
					fill: "#405669",
					cx: "93.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-454",
					fill: "#405669",
					cx: "211.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1207",
					fill: "#405669",
					cx: "80.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-453",
					fill: "#405669",
					cx: "198.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1208",
					fill: "#405669",
					cx: "67.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-452",
					fill: "#405669",
					cx: "185.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1209",
					fill: "#405669",
					cx: "54.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-451",
					fill: "#405669",
					cx: "172.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1213",
					fill: "#405669",
					cx: "41.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-450",
					fill: "#405669",
					cx: "159.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1214",
					fill: "#405669",
					cx: "28.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-449",
					fill: "#405669",
					cx: "146.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1215",
					fill: "#405669",
					cx: "15.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-448",
					fill: "#405669",
					cx: "133.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1216",
					fill: "#405669",
					cx: "1.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-439",
					fill: "#405669",
					cx: "406.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-440",
					fill: "#405669",
					cx: "588.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-438",
					fill: "#405669",
					cx: "393.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-441",
					fill: "#405669",
					cx: "575.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-437",
					fill: "#405669",
					cx: "380.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-442",
					fill: "#405669",
					cx: "562.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-436",
					fill: "#405669",
					cx: "367.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-443",
					fill: "#405669",
					cx: "549.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-435",
					fill: "#405669",
					cx: "354.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-444",
					fill: "#405669",
					cx: "536.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-434",
					fill: "#405669",
					cx: "341.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-445",
					fill: "#405669",
					cx: "523.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-433",
					fill: "#405669",
					cx: "328.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-446",
					fill: "#405669",
					cx: "510.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-432",
					fill: "#405669",
					cx: "315.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-431",
					fill: "#405669",
					cx: "302.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-427",
					fill: "#405669",
					cx: "250.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-428",
					fill: "#405669",
					cx: "120.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-426",
					fill: "#405669",
					cx: "237.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-429",
					fill: "#405669",
					cx: "106.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-425",
					fill: "#405669",
					cx: "224.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-430",
					fill: "#405669",
					cx: "93.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-424",
					fill: "#405669",
					cx: "211.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-447",
					fill: "#405669",
					cx: "80.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-423",
					fill: "#405669",
					cx: "198.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1217",
					fill: "#405669",
					cx: "67.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-422",
					fill: "#405669",
					cx: "185.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1220",
					fill: "#405669",
					cx: "54.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-421",
					fill: "#405669",
					cx: "172.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1221",
					fill: "#405669",
					cx: "41.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-420",
					fill: "#405669",
					cx: "159.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1222",
					fill: "#405669",
					cx: "28.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-419",
					fill: "#405669",
					cx: "146.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1223",
					fill: "#405669",
					cx: "15.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-418",
					fill: "#405669",
					cx: "133.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1224",
					fill: "#405669",
					cx: "1.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-404",
					fill: "#405669",
					cx: "341.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-405",
					fill: "#405669",
					cx: "523.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-403",
					fill: "#405669",
					cx: "328.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-406",
					fill: "#405669",
					cx: "510.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-402",
					fill: "#405669",
					cx: "315.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-401",
					fill: "#405669",
					cx: "302.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-397",
					fill: "#405669",
					cx: "250.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-398",
					fill: "#405669",
					cx: "120.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-396",
					fill: "#405669",
					cx: "237.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-399",
					fill: "#405669",
					cx: "106.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-395",
					fill: "#405669",
					cx: "224.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-400",
					fill: "#405669",
					cx: "93.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-394",
					fill: "#405669",
					cx: "211.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-407",
					fill: "#405669",
					cx: "80.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-393",
					fill: "#405669",
					cx: "198.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-408",
					fill: "#405669",
					cx: "67.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-392",
					fill: "#405669",
					cx: "185.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-409",
					fill: "#405669",
					cx: "54.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-391",
					fill: "#405669",
					cx: "172.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-410",
					fill: "#405669",
					cx: "41.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-390",
					fill: "#405669",
					cx: "159.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-411",
					fill: "#405669",
					cx: "28.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-389",
					fill: "#405669",
					cx: "146.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-412",
					fill: "#405669",
					cx: "15.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-388",
					fill: "#405669",
					cx: "133.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-413",
					fill: "#405669",
					cx: "1.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-373",
					fill: "#405669",
					cx: "328.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-374",
					fill: "#405669",
					cx: "510.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-372",
					fill: "#405669",
					cx: "315.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-367",
					fill: "#405669",
					cx: "250.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-366",
					fill: "#405669",
					cx: "237.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-369",
					fill: "#405669",
					cx: "106.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-365",
					fill: "#405669",
					cx: "224.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-370",
					fill: "#405669",
					cx: "93.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-364",
					fill: "#405669",
					cx: "211.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-371",
					fill: "#405669",
					cx: "80.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-363",
					fill: "#405669",
					cx: "198.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-375",
					fill: "#405669",
					cx: "67.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-362",
					fill: "#405669",
					cx: "185.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-376",
					fill: "#405669",
					cx: "54.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-361",
					fill: "#405669",
					cx: "172.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-377",
					fill: "#405669",
					cx: "41.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-1056",
					stroke: "#CB2D2D",
					cx: "224.5",
					cy: "66.5",
					r: "7.5"
				}
			}, {
				name: "path",
				attrs: {
					d: "M224.476965,66.562871 L237.349429,79.5469895 L263.597869,79.4665108 L276.44009,92.512531 L302.520917,79.468097 L315.494119,92.5915379 L328.365764,118.504384 L354.4374,157.454296 C367.777619,166.346383 393.53488,183.515203 393.53488,183.515203 L406.491,196.533741 L432.48265,222.539934 L445.534358,209.40277 L458.514987,222.672449 L471.417839,209.506364 L497.525502,209.577932 L523.632444,222.596822 L536.437955,235.361986 L549.662927,235.464878",
					id: "Path-366",
					stroke: "#405669",
					lineDash: "2 2"
				}
			}, {
				name: "g",
				attrs: {
					id: "Group-37",
					transform: "translate(531.000000, 217.000000)",
					stroke: "#CB2D2D"
				},
				childs: [{
					name: "circle",
					attrs: {
						id: "Oval-1056-Copy-2",
						strokeWidth: "2",
						cx: "18.5",
						cy: "18.5",
						r: "7.5"
					}
				}, {
					name: "path",
					attrs: {
						d: "M18.5,37 C28.7172679,37 37,28.7172679 37,18.5 C37,8.28273213 28.7172679,0 18.5,0 C8.28273213,0 0,8.28273213 0,18.5 C0,28.7172679 8.28273213,37 18.5,37 Z",
						id: "Oval-1056-Copy-2",
						strokeLinecap: "round"
					}
				}]
			}]
		}]
	}
}, function(t, e) {
	t.exports = {
		name: "g",
		attrs: {
			id: "\u5408\u6210-1_00000"
		},
		childs: [{
			name: "g",
			attrs: {
				id: "1",
				fill: "#405669",
				transform: "translate(1270.000000, 0.000000)"
			},
			childs: [{
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-904",
					cx: "184.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-874",
					cx: "184.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-844",
					cx: "184.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-843",
					cx: "171.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-842",
					cx: "158.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-814",
					cx: "184.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-813",
					cx: "171.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-812",
					cx: "158.5",
					cy: "196.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-784",
					cx: "184.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-783",
					cx: "171.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1183",
					cx: "132.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-782",
					cx: "158.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1184",
					cx: "119.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-781",
					cx: "145.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1185",
					cx: "106.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-780",
					cx: "132.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1193",
					cx: "93.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-779",
					cx: "119.5",
					cy: "183.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1194",
					cx: "80.5",
					cy: "235.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-754",
					cx: "184.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-753",
					cx: "171.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1196",
					cx: "132.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-752",
					cx: "158.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1197",
					cx: "119.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-751",
					cx: "145.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-750",
					cx: "132.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1199",
					cx: "93.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-749",
					cx: "119.5",
					cy: "170.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1200",
					cx: "80.5",
					cy: "222.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-724",
					cx: "184.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-723",
					cx: "171.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-722",
					cx: "158.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-721",
					cx: "145.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1204",
					cx: "106.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-720",
					cx: "132.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1205",
					cx: "93.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-719",
					cx: "119.5",
					cy: "157.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1206",
					cx: "80.5",
					cy: "209.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-694",
					cx: "184.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-693",
					cx: "171.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-692",
					cx: "158.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-691",
					cx: "145.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-690",
					cx: "132.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-689",
					cx: "119.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-687",
					cx: "93.5",
					cy: "144.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-664",
					cx: "184.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-663",
					cx: "171.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-662",
					cx: "158.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-661",
					cx: "145.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-660",
					cx: "132.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-659",
					cx: "119.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-657",
					cx: "93.5",
					cy: "131.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-634",
					cx: "184.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-633",
					cx: "171.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-632",
					cx: "158.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-631",
					cx: "145.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-630",
					cx: "132.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-629",
					cx: "119.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-627",
					cx: "93.5",
					cy: "118.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-604",
					cx: "184.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-603",
					cx: "171.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-602",
					cx: "158.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-601",
					cx: "145.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-600",
					cx: "132.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-598",
					cx: "106.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-597",
					cx: "93.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-574",
					cx: "184.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-573",
					cx: "171.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-572",
					cx: "158.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-544",
					cx: "184.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-543",
					cx: "171.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-542",
					cx: "158.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-514",
					cx: "184.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-513",
					cx: "171.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-512",
					cx: "158.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-511",
					cx: "145.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-510",
					cx: "132.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-509",
					cx: "119.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-508",
					cx: "106.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-507",
					cx: "93.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-484",
					cx: "184.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-483",
					cx: "171.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-482",
					cx: "158.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-481",
					cx: "145.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-480",
					cx: "132.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-479",
					cx: "119.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-478",
					cx: "106.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-477",
					cx: "93.5",
					cy: "53.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-459",
					cx: "79.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-460",
					cx: "66.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-454",
					cx: "184.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-453",
					cx: "171.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1208",
					cx: "40.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-452",
					cx: "158.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1209",
					cx: "27.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-451",
					cx: "145.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-450",
					cx: "132.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1214",
					cx: "1.5",
					cy: "105.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-449",
					cx: "119.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-448",
					cx: "106.5",
					cy: "40.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-428",
					cx: "93.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-429",
					cx: "79.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-430",
					cx: "66.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-424",
					cx: "184.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-447",
					cx: "53.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-423",
					cx: "171.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1217",
					cx: "40.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-422",
					cx: "158.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-421",
					cx: "145.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-1221",
					cx: "14.5",
					cy: "92.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-420",
					cx: "132.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-419",
					cx: "119.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-418",
					cx: "106.5",
					cy: "27.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-398",
					cx: "93.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-399",
					cx: "79.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-400",
					cx: "66.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-394",
					cx: "184.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-407",
					cx: "53.5",
					cy: "79.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-393",
					cx: "171.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-392",
					cx: "158.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-391",
					cx: "145.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-390",
					cx: "132.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-389",
					cx: "119.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-388",
					cx: "106.5",
					cy: "14.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-369",
					cx: "79.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-364",
					cx: "184.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-371",
					cx: "53.5",
					cy: "66.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-363",
					cx: "171.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-362",
					cx: "158.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-361",
					cx: "145.5",
					cy: "1.5",
					r: "1.5"
				}
			}, {
				name: "circle",
				attrs: {
					id: "Oval-358-Copy-377",
					cx: "14.5",
					cy: "66.5",
					r: "1.5"
				}
			}]
		}]
	}
}, function(t, e, r) {
	"use strict";

	function i(t) {
		var e = [];
		return c.each(t, function(t) {
			c.isArray(t) ? e = e.concat(t) : e.push(t)
		}), e
	}

	function n(t) {
		var e = [];
		return c.each(t, function(t) {
			c.isNull(t) || e.push(t)
		}), e
	}

	function a(t, e, r) {
		c.each(r, function(r) {
			t[r] = e[r]
		})
	}
	var c = r(1),
		s = r(100),
		l = r(329);
	c.mix(s, {
		values: function(t, e) {
			for (var r = t.col(e), i = [], n = r.rowCount(), a = 0; n > a; a++) {
				var s = r.cell(a, 0);
				void 0 !== s && -1 === c.indexOf(i, s) && i.push(s)
			}
			return i
		},
		mean: function(t, e) {
			var r = t.colArray(e);
			return r = i(r), r = n(r), l.mean(r)
		},
		geometric_mean: function(t, e) {
			var r = t.colArray(e);
			return r = i(r), r = n(r), l.geometric_mean(r)
		},
		median: function(t, e) {
			var r = t.colArray(e);
			return r = i(r), r = n(r), l.median(r)
		},
		max: function(t, e) {
			var r = t.colArray(e);
			return r = i(r), r = n(r), l.max(r)
		},
		min: function(t, e) {
			var r = t.colArray(e);
			return r = i(r), r = n(r), l.min(r)
		},
		mode: function(t, e) {
			var r = t.colArray(e);
			return r = i(r), r = n(r), l.mode(r)
		},
		range: function(t, e) {
			var r = s.max(t, e),
				i = s.min(t, e);
			return [i, r]
		},
		sum: function(t, e) {
			var r = t.colArray(e);
			return r = i(r), r = n(r), l.sum(r)
		},
		quantile: function(t, e, r) {
			var a = t.colArray(e);
			return a = i(a), a = n(a), l.quantile(a, r)
		},
		variance: function(t, e) {
			var r = t.colArray(e);
			return r = i(r), r = n(r), l.variance(r)
		},
		sample_variance: function(t, e) {
			var r = t.colArray(e);
			return r = i(r), r = n(r), l.sample_variance(r)
		},
		standard_deviation: function(t, e) {
			var r = t.colArray(e);
			return r = i(r), r = n(r), l.standard_deviation(r)
		},
		sd: function(t, e) {
			return s.standard_deviation(t, e)
		},
		se: function(t, e) {
			var r = t.colArray(e);
			r = i(r), r = n(r);
			var a = l.sample_variance(r);
			return Math.sqrt(a) / Math.sqrt(r.length)
		},
		sort: function(t, e) {
			var r = t.toJSON();
			return r.sort(function(t, r) {
				return t[e] - r[e]
			}), new s(r, {
				names: t.colNames()
			})
		},
		sortBy: function(t, e) {
			var r = t.toJSON();
			return r.sort(e), new s(r, {
				names: t.colNames()
			})
		},
		group: function(t, e) {
			if (!e) return [t];
			var r = s.groupToMap(t, e),
				i = [];
			for (var n in r) i.push(r[n]);
			return i
		},
		groupToMap: function(t, e) {
			var r = t.colNames(),
				i = {};
			if (!e) return {
				0: t
			};
			if (!c.isFunction(e)) {
				var n = c.isArray(e) ? e : e.replace(/\s+/g, "").split("*");
				e = function(t) {
					for (var e = "", r = 0, i = n.length; i > r; r++) e += t[n[r]].toString();
					return e
				}
			}
			t.each(function(t) {
				var r = e(t);
				i[r] ? i[r].push(t) : i[r] = [t]
			});
			for (var a in i) i[a] = new s(i[a], {
				names: r.slice(0)
			});
			return i
		},
		filter: function(t, e) {
			var r = [];
			return e ? (t.each(function(t, i) {
				e(t, i) && r.push(t)
			}), new s(r)) : t
		},
		cumulative: function(t, e) {
			var r = t.colArray(e);
			r = n(r);
			var i = [],
				a = 0;
			return c.each(r, function(t) {
				a += t, i.push(a)
			}), i
		},
		complement: function(t, e) {
			var r = t.colNames().slice(0);
			return c.each(e, function(t) {
				c.remove(r, t)
			}), t.cols(r)
		},
		merge: function() {
			for (var t = c.toArray(arguments), e = t[0], r = e.colNames(), i = e.colCount(), n = [], a = 0; i > a; a++) {
				n[a] = [];
				for (var l = 0; l < t.length; l++) {
					var o = t[l].col(a).toArray()[0];
					n[a] = n[a].concat(o)
				}
			}
			return new s(n, {
				names: r
			})
		},
		forceMerge: function() {
			var t = c.toArray(arguments),
				e = [],
				r = [];
			return c.each(t, function(t) {
				var r = t.colNames();
				c.each(r, function(t) {
					-1 === c.indexOf(e, t) && e.push(t)
				})
			}), c.each(t, function(t) {
				var e = t.toJSON();
				r = r.concat(e)
			}), new s(r, {
				names: e
			})
		},
		combin: function() {
			var t = c.toArray(arguments),
				e = [],
				r = [];
			return c.each(t, function(t) {
				e = e.concat(t.colNames()), r = r.concat(t.toArray())
			}), new s(r, {
				names: e
			})
		},
		combinColumns: function(t, e, r, i, n) {
			if (i = i || "type", c.isString(n) && (n = [n]), !n) {
				n = [];
				var l = t.colNames();
				c.each(l, function(t) {
					-1 === c.indexOf(e, t) && n.push(t)
				})
			}
			var o = [];
			return t.each(function(t) {
				c.each(e, function(e) {
					var c = {};
					c[r] = t[e], c[i] = e, a(c, t, n), o.push(c)
				})
			}), new s(o)
		},
		combinArray: function() {
			var t, e = c.toArray(arguments);
			t = c.isString(e[0]) ? e.shift() : "type";
			var r = [];
			return c.each(e, function(e, i) {
				c.each(e, function(e) {
					e[t] = i
				}), r = r.concat(e)
			}), new s(r)
		}
	}), s.Array = {
		repeat: function(t, e) {
			for (var r = [], i = 0; e > i; i++) r.push(t);
			return r
		}
	}, t.exports = s
}, function(t, e) {
	/**
	 * @license
	 *
	 * Regression.JS - Regression functions for javascript
	 * http://tom-alexander.github.com/regression-js/
	 *
	 * copyright(c) 2013 Tom Alexander
	 * Licensed under the MIT license.
	 *
	 **/
	"use strict";
	var r = function(t, e) {
			var r = 0,
				i = 0,
				n = 0,
				a = 0,
				c = 0,
				s = t.length - 1,
				l = new Array(e);
			for (r = 0; s > r; r++) {
				for (a = r, i = r + 1; s > i; i++) Math.abs(t[r][i]) > Math.abs(t[r][a]) && (a = i);
				for (n = r; s + 1 > n; n++) c = t[n][r], t[n][r] = t[n][a], t[n][a] = c;
				for (i = r + 1; s > i; i++)
					for (n = s; n >= r; n--) t[n][i] -= t[n][r] * t[r][i] / t[r][r]
			}
			for (i = s - 1; i >= 0; i--) {
				for (c = 0, n = i + 1; s > n; n++) c += t[n][i] * l[n];
				l[i] = (t[s][i] - c) / t[i][i]
			}
			return l
		},
		i = {
			linear: function(t) {
				for (var e = [0, 0, 0, 0, 0], r = 0, i = []; r < t.length; r++) null != t[r][1] && (e[0] += t[r][0], e[1] += t[r][1], e[2] += t[r][0] * t[r][0], e[3] += t[r][0] * t[r][1], e[4] += t[r][1] * t[r][1]);
				for (var n = (r * e[3] - e[0] * e[1]) / (r * e[2] - e[0] * e[0]), a = e[1] / r - n * e[0] / r, c = 0, s = t.length; s > c; c++) {
					var l = [t[c][0], t[c][0] * n + a];
					i.push(l)
				}
				var o = "y = " + Math.round(100 * n) / 100 + "x + " + Math.round(100 * a) / 100;
				return {
					equation: [n, a],
					points: i,
					string: o
				}
			},
			linearThroughOrigin: function(t) {
				for (var e = [0, 0], r = 0, i = []; r < t.length; r++) null != t[r][1] && (e[0] += t[r][0] * t[r][0], e[1] += t[r][0] * t[r][1]);
				for (var n = e[1] / e[0], a = 0, c = t.length; c > a; a++) {
					var s = [t[a][0], t[a][0] * n];
					i.push(s)
				}
				var l = "y = " + Math.round(100 * n) / 100 + "x";
				return {
					equation: [n],
					points: i,
					string: l
				}
			},
			exponential: function(t) {
				var e = [0, 0, 0, 0, 0, 0],
					r = 0,
					i = [];
				for (l = t.length; l > r; r++) null != t[r][1] && (e[0] += t[r][0], e[1] += t[r][1], e[2] += t[r][0] * t[r][0] * t[r][1], e[3] += t[r][1] * Math.log(t[r][1]), e[4] += t[r][0] * t[r][1] * Math.log(t[r][1]), e[5] += t[r][0] * t[r][1]);
				for (var n = e[1] * e[2] - e[5] * e[5], a = Math.pow(Math.E, (e[2] * e[3] - e[5] * e[4]) / n), c = (e[1] * e[4] - e[5] * e[3]) / n, s = 0, l = t.length; l > s; s++) {
					var o = [t[s][0], a * Math.pow(Math.E, c * t[s][0])];
					i.push(o)
				}
				var u = "y = " + Math.round(100 * a) / 100 + "e^(" + Math.round(100 * c) / 100 + "x)";
				return {
					equation: [a, c],
					points: i,
					string: u
				}
			},
			logarithmic: function(t) {
				var e = [0, 0, 0, 0],
					r = 0,
					i = [];
				for (s = t.length; s > r; r++) null != t[r][1] && (e[0] += Math.log(t[r][0]), e[1] += t[r][1] * Math.log(t[r][0]), e[2] += t[r][1], e[3] += Math.pow(Math.log(t[r][0]), 2));
				for (var n = (r * e[1] - e[2] * e[0]) / (r * e[3] - e[0] * e[0]), a = (e[2] - n * e[0]) / r, c = 0, s = t.length; s > c; c++) {
					var l = [t[c][0], a + n * Math.log(t[c][0])];
					i.push(l)
				}
				var o = "y = " + Math.round(100 * a) / 100 + " + " + Math.round(100 * n) / 100 + " ln(x)";
				return {
					equation: [a, n],
					points: i,
					string: o
				}
			},
			power: function(t) {
				var e = [0, 0, 0, 0],
					r = 0,
					i = [];
				for (s = t.length; s > r; r++) null != t[r][1] && (e[0] += Math.log(t[r][0]), e[1] += Math.log(t[r][1]) * Math.log(t[r][0]), e[2] += Math.log(t[r][1]), e[3] += Math.pow(Math.log(t[r][0]), 2));
				for (var n = (r * e[1] - e[2] * e[0]) / (r * e[3] - e[0] * e[0]), a = Math.pow(Math.E, (e[2] - n * e[0]) / r), c = 0, s = t.length; s > c; c++) {
					var l = [t[c][0], a * Math.pow(t[c][0], n)];
					i.push(l)
				}
				var o = "y = " + Math.round(100 * a) / 100 + "x^" + Math.round(100 * n) / 100;
				return {
					equation: [a, n],
					points: i,
					string: o
				}
			},
			polynomial: function(t, e) {
				"undefined" == typeof e && (e = 2);
				for (var i = [], n = [], a = [], c = 0, s = 0, l = 0, o = e + 1; o > l; l++) {
					for (var u = 0, h = t.length; h > u; u++) null != t[u][1] && (c += Math.pow(t[u][0], l) * t[u][1]);
					i.push(c), c = 0;
					for (var f = [], d = 0; o > d; d++) {
						for (var u = 0, h = t.length; h > u; u++) null != t[u][1] && (s += Math.pow(t[u][0], l + d));
						f.push(s), s = 0
					}
					n.push(f)
				}
				n.push(i);
				for (var p = r(n, o), l = 0, h = t.length; h > l; l++) {
					for (var g = 0, y = 0; y < p.length; y++) g += p[y] * Math.pow(t[l][0], y);
					a.push([t[l][0], g])
				}
				for (var v = "y = ", l = p.length - 1; l >= 0; l--) v += l > 1 ? Math.round(p[l] * Math.pow(10, l)) / Math.pow(10, l) + "x^" + l + " + " : 1 == l ? Math.round(100 * p[l]) / 100 + "x + " : Math.round(100 * p[l]) / 100;
				return {
					equation: p,
					points: a,
					string: v
				}
			},
			lastvalue: function(t) {
				for (var e = [], r = null, i = 0; i < t.length; i++) t[i][1] ? (r = t[i][1], e.push([t[i][0], t[i][1]])) : e.push([t[i][0], r]);
				return {
					equation: [r],
					points: e,
					string: "" + r
				}
			}
		},
		n = function(t, e, r) {
			return "string" == typeof t ? i[t](e, r) : void 0
		};
	t.exports = n
}, function(t, e, r) {
	! function() {
		function e() {
			var t = {},
				e = [];
			return t.data = function(r) {
				return arguments.length ? (e = r.slice(), t) : e
			}, t.mb = function() {
				var t, r, i = e.length;
				if (1 === i) t = 0, r = e[0][1];
				else {
					for (var n, a, c, s = 0, l = 0, o = 0, u = 0, h = 0; i > h; h++) n = e[h], a = n[0], c = n[1], s += a, l += c, o += a * a, u += a * c;
					t = (i * u - s * l) / (i * o - s * s), r = l / i - t * s / i
				}
				return {
					m: t,
					b: r
				}
			}, t.m = function() {
				return t.mb().m
			}, t.b = function() {
				return t.mb().b
			}, t.line = function() {
				var e = t.mb(),
					r = e.m,
					i = e.b;
				return function(t) {
					return i + r * t
				}
			}, t
		}

		function r(t, e) {
			if (t.length < 2) return 1;
			for (var r, i = 0, n = 0; n < t.length; n++) i += t[n][1];
			r = i / t.length;
			for (var a = 0, c = 0; c < t.length; c++) a += Math.pow(r - t[c][1], 2);
			for (var s = 0, l = 0; l < t.length; l++) s += Math.pow(t[l][1] - e(t[l][0]), 2);
			return 1 - s / a
		}

		function i() {
			var t = {},
				e = 0,
				r = {};
			return t.train = function(t, i) {
				r[i] || (r[i] = {});
				for (var n in t) {
					var a = t[n];
					void 0 === r[i][n] && (r[i][n] = {}), void 0 === r[i][n][a] && (r[i][n][a] = 0), r[i][n][t[n]]++
				}
				e++
			}, t.score = function(t) {
				var i, n = {};
				for (var a in t) {
					var c = t[a];
					for (i in r) void 0 === n[i] && (n[i] = {}), r[i][a] ? n[i][a + "_" + c] = (r[i][a][c] || 0) / e : n[i][a + "_" + c] = 0
				}
				var s = {};
				for (i in n)
					for (var l in n[i]) void 0 === s[i] && (s[i] = 0), s[i] += n[i][l];
				return s
			}, t
		}

		function n(t) {
			for (var e = 0, r = 0; r < t.length; r++) e += t[r];
			return e
		}

		function a(t) {
			return 0 === t.length ? null : n(t) / t.length
		}

		function c(t) {
			if (0 === t.length) return null;
			for (var e = 1, r = 0; r < t.length; r++) {
				if (t[r] <= 0) return null;
				e *= t[r]
			}
			return Math.pow(e, 1 / t.length)
		}

		function s(t) {
			if (0 === t.length) return null;
			for (var e = 0, r = 0; r < t.length; r++) {
				if (t[r] <= 0) return null;
				e += 1 / t[r]
			}
			return t.length / e
		}

		function l(t) {
			if (0 === t.length) return null;
			for (var e = 0, r = 0; r < t.length; r++) e += Math.pow(t[r], 2);
			return Math.sqrt(e / t.length)
		}

		function o(t) {
			for (var e, r = 0; r < t.length; r++)(t[r] < e || void 0 === e) && (e = t[r]);
			return e
		}

		function u(t) {
			for (var e, r = 0; r < t.length; r++)(t[r] > e || void 0 === e) && (e = t[r]);
			return e
		}

		function h(t) {
			if (0 === t.length) return null;
			for (var e = a(t), r = [], i = 0; i < t.length; i++) r.push(Math.pow(t[i] - e, 2));
			return a(r)
		}

		function f(t) {
			return 0 === t.length ? null : Math.sqrt(h(t))
		}

		function d(t, e) {
			for (var r = a(t), i = 0, n = 0; n < t.length; n++) i += Math.pow(t[n] - r, e);
			return i
		}

		function p(t) {
			if (t.length <= 1) return null;
			var e = d(t, 2);
			return e / (t.length - 1)
		}

		function g(t) {
			return t.length <= 1 ? null : Math.sqrt(p(t))
		}

		function y(t, e) {
			if (t.length <= 1 || t.length != e.length) return null;
			for (var r = a(t), i = a(e), n = 0, c = 0; c < t.length; c++) n += (t[c] - r) * (e[c] - i);
			return n / (t.length - 1)
		}

		function v(t, e) {
			var r = y(t, e),
				i = g(t),
				n = g(e);
			return null === r || null === i || null === n ? null : r / i / n
		}

		function m(t) {
			if (0 === t.length) return null;
			var e = t.slice().sort(function(t, e) {
				return t - e
			});
			if (e.length % 2 === 1) return e[(e.length - 1) / 2];
			var r = e[e.length / 2 - 1],
				i = e[e.length / 2];
			return (r + i) / 2
		}

		function x(t) {
			if (0 === t.length) return null;
			if (1 === t.length) return t[0];
			for (var e, r = t.slice().sort(function(t, e) {
					return t - e
				}), i = r[0], n = 0, a = 1, c = 1; c < r.length + 1; c++) r[c] !== i ? (a > n && (n = a, e = i), a = 1, i = r[c]) : a++;
			return e
		}

		function C(t, e) {
			var r = a(t),
				i = f(t),
				n = Math.sqrt(t.length);
			return (r - e) / (i / n)
		}

		function _(t, e, r) {
			var i = t.length,
				n = e.length;
			if (!i || !n) return null;
			r || (r = 0);
			var c = a(t),
				s = a(e),
				l = ((i - 1) * p(t) + (n - 1) * p(e)) / (i + n - 2);
			return (c - s - r) / Math.sqrt(l * (1 / i + 1 / n))
		}

		function O(t, e) {
			var r = [];
			if (0 >= e) return null;
			for (var i = 0; i < t.length; i += e) r.push(t.slice(i, i + e));
			return r
		}

		function S(t, e) {
			e = e || Math.random;
			for (var r, i, n = t.length; n > 0;) i = Math.floor(e() * n--), r = t[n], t[n] = t[i], t[i] = r;
			return t
		}

		function w(t, e) {
			return t = t.slice(), S(t.slice(), e)
		}

		function M(t, e, r) {
			var i = w(t, r);
			return i.slice(0, e)
		}

		function b(t, e) {
			if (0 === t.length) return null;
			var r = t.slice().sort(function(t, e) {
				return t - e
			});
			if (e.length) {
				for (var i = [], n = 0; n < e.length; n++) i[n] = k(r, e[n]);
				return i
			}
			return k(r, e)
		}

		function k(t, e) {
			var r = t.length * e;
			return 0 > e || e > 1 ? null : 1 === e ? t[t.length - 1] : 0 === e ? t[0] : r % 1 !== 0 ? t[Math.ceil(r) - 1] : t.length % 2 === 0 ? (t[r - 1] + t[r]) / 2 : t[r]
		}

		function A(t) {
			return 0 === t.length ? null : b(t, .75) - b(t, .25)
		}

		function P(t) {
			if (!t || 0 === t.length) return null;
			for (var e = m(t), r = [], i = 0; i < t.length; i++) r.push(Math.abs(t[i] - e));
			return m(r)
		}

		function T(t, e) {
			var r, i, n = [],
				a = [],
				c = 0;
			for (r = 0; r < t.length + 1; r++) {
				var s = [],
					l = [];
				for (i = 0; e + 1 > i; i++) s.push(0), l.push(0);
				n.push(s), a.push(l)
			}
			for (r = 1; e + 1 > r; r++)
				for (n[1][r] = 1, a[1][r] = 0, i = 2; i < t.length + 1; i++) a[i][r] = 1 / 0;
			for (var o = 2; o < t.length + 1; o++) {
				for (var u = 0, h = 0, f = 0, d = 0, p = 1; o + 1 > p; p++) {
					var g = o - p + 1,
						y = t[g - 1];
					if (f++, u += y, h += y * y, c = h - u * u / f, d = g - 1, 0 !== d)
						for (i = 2; e + 1 > i; i++) a[o][i] >= c + a[d][i - 1] && (n[o][i] = g, a[o][i] = c + a[d][i - 1])
				}
				n[o][1] = 1, a[o][1] = c
			}
			return {
				lower_class_limits: n,
				variance_combinations: a
			}
		}

		function D(t, e, r) {
			var i = t.length - 1,
				n = [],
				a = r;
			for (n[r] = t[t.length - 1], n[0] = t[0]; a > 1;) n[a - 1] = t[e[i][a] - 2], i = e[i][a] - 1, a--;
			return n
		}

		function I(t, e) {
			if (e > t.length) return null;
			t = t.slice().sort(function(t, e) {
				return t - e
			});
			var r = T(t, e),
				i = r.lower_class_limits;
			return D(t, i, e)
		}

		function L(t) {
			if (t.length < 3) return null;
			var e = t.length,
				r = Math.pow(g(t), 3),
				i = d(t, 3);
			return e * i / ((e - 1) * (e - 2) * r)
		}

		function B(t) {
			var e = Math.abs(t),
				r = Math.floor(10 * e),
				i = 10 * (Math.floor(100 * e) / 10 - Math.floor(100 * e / 10)),
				n = Math.min(10 * r + i, E.length - 1);
			return t >= 0 ? E[n] : +(1 - E[n]).toFixed(4)
		}

		function R(t, e, r) {
			return (t - e) / r
		}

		function F(t) {
			if (0 > t) return null;
			for (var e = 1, r = 2; t >= r; r++) e *= r;
			return e
		}

		function G(t) {
			return 0 > t || t > 1 ? null : N(1, t)
		}

		function N(t, e) {
			function r(t, e, r) {
				return F(e) / (F(t) * F(e - t)) * (Math.pow(r, t) * Math.pow(1 - r, e - t))
			}
			if (0 > e || e > 1 || 0 >= t || t % 1 !== 0) return null;
			var i = 0,
				n = 0,
				a = {};
			do a[i] = r(i, t, e), n += a[i], i++; while (1 - j > n);
			return a
		}

		function z(t) {
			function e(t, e) {
				return Math.pow(Math.E, -e) * Math.pow(e, t) / F(t)
			}
			if (0 >= t) return null;
			var r = 0,
				i = 0,
				n = {};
			do n[r] = e(r, t), i += n[r], r++; while (1 - j > i);
			return n
		}

		function W(t, e, r) {
			for (var i, n, c = a(t), s = 0, l = 1, o = e(c), u = [], h = [], f = 0; f < t.length; f++) void 0 === u[t[f]] && (u[t[f]] = 0), u[t[f]]++;
			for (f = 0; f < u.length; f++) void 0 === u[f] && (u[f] = 0);
			for (n in o) n in u && (h[n] = o[n] * t.length);
			for (n = h.length - 1; n >= 0; n--) h[n] < 3 && (h[n - 1] += h[n], h.pop(), u[n - 1] += u[n], u.pop());
			for (n = 0; n < u.length; n++) s += Math.pow(u[n] - h[n], 2) / h[n];
			return i = u.length - l - 1, q[i][r] < s
		}

		function Y(t) {
			function e(t) {
				return function() {
					var e = Array.prototype.slice.apply(arguments);
					return e.unshift(this), X[t].apply(X, e)
				}
			}
			var r = !(!Object.defineProperty || !Object.defineProperties);
			if (!r) throw new Error("without defineProperty, simple-statistics cannot be mixed in");
			var i, n = ["median", "standard_deviation", "sum", "sample_skewness", "mean", "min", "max", "quantile", "geometric_mean", "harmonic_mean", "root_mean_square"];
			i = t ? t.slice() : Array.prototype;
			for (var a = 0; a < n.length; a++) Object.defineProperty(i, n[a], {
				value: e(n[a]),
				configurable: !0,
				enumerable: !1,
				writable: !0
			});
			return i
		}
		var X = {};
		t.exports = X;
		var E = [.5, .504, .508, .512, .516, .5199, .5239, .5279, .5319, .5359, .5398, .5438, .5478, .5517, .5557, .5596, .5636, .5675, .5714, .5753, .5793, .5832, .5871, .591, .5948, .5987, .6026, .6064, .6103, .6141, .6179, .6217, .6255, .6293, .6331, .6368, .6406, .6443, .648, .6517, .6554, .6591, .6628, .6664, .67, .6736, .6772, .6808, .6844, .6879, .6915, .695, .6985, .7019, .7054, .7088, .7123, .7157, .719, .7224, .7257, .7291, .7324, .7357, .7389, .7422, .7454, .7486, .7517, .7549, .758, .7611, .7642, .7673, .7704, .7734, .7764, .7794, .7823, .7852, .7881, .791, .7939, .7967, .7995, .8023, .8051, .8078, .8106, .8133, .8159, .8186, .8212, .8238, .8264, .8289, .8315, .834, .8365, .8389, .8413, .8438, .8461, .8485, .8508, .8531, .8554, .8577, .8599, .8621, .8643, .8665, .8686, .8708, .8729, .8749, .877, .879, .881, .883, .8849, .8869, .8888, .8907, .8925, .8944, .8962, .898, .8997, .9015, .9032, .9049, .9066, .9082, .9099, .9115, .9131, .9147, .9162, .9177, .9192, .9207, .9222, .9236, .9251, .9265, .9279, .9292, .9306, .9319, .9332, .9345, .9357, .937, .9382, .9394, .9406, .9418, .9429, .9441, .9452, .9463, .9474, .9484, .9495, .9505, .9515, .9525, .9535, .9545, .9554, .9564, .9573, .9582, .9591, .9599, .9608, .9616, .9625, .9633, .9641, .9649, .9656, .9664, .9671, .9678, .9686, .9693, .9699, .9706, .9713, .9719, .9726, .9732, .9738, .9744, .975, .9756, .9761, .9767, .9772, .9778, .9783, .9788, .9793, .9798, .9803, .9808, .9812, .9817, .9821, .9826, .983, .9834, .9838, .9842, .9846, .985, .9854, .9857, .9861, .9864, .9868, .9871, .9875, .9878, .9881, .9884, .9887, .989, .9893, .9896, .9898, .9901, .9904, .9906, .9909, .9911, .9913, .9916, .9918, .992, .9922, .9925, .9927, .9929, .9931, .9932, .9934, .9936, .9938, .994, .9941, .9943, .9945, .9946, .9948, .9949, .9951, .9952, .9953, .9955, .9956, .9957, .9959, .996, .9961, .9962, .9963, .9964, .9965, .9966, .9967, .9968, .9969, .997, .9971, .9972, .9973, .9974, .9974, .9975, .9976, .9977, .9977, .9978, .9979, .9979, .998, .9981, .9981, .9982, .9982, .9983, .9984, .9984, .9985, .9985, .9986, .9986, .9987, .9987, .9987, .9988, .9988, .9989, .9989, .9989, .999, .999],
			j = 1e-4,
			q = {
				1: {
					.995: 0,
					.99: 0,
					.975: 0,
					.95: 0,
					.9: .02,
					.5: .45,
					.1: 2.71,
					.05: 3.84,
					.025: 5.02,
					.01: 6.63,
					.005: 7.88
				},
				2: {
					.995: .01,
					.99: .02,
					.975: .05,
					.95: .1,
					.9: .21,
					.5: 1.39,
					.1: 4.61,
					.05: 5.99,
					.025: 7.38,
					.01: 9.21,
					.005: 10.6
				},
				3: {
					.995: .07,
					.99: .11,
					.975: .22,
					.95: .35,
					.9: .58,
					.5: 2.37,
					.1: 6.25,
					.05: 7.81,
					.025: 9.35,
					.01: 11.34,
					.005: 12.84
				},
				4: {
					.995: .21,
					.99: .3,
					.975: .48,
					.95: .71,
					.9: 1.06,
					.5: 3.36,
					.1: 7.78,
					.05: 9.49,
					.025: 11.14,
					.01: 13.28,
					.005: 14.86
				},
				5: {
					.995: .41,
					.99: .55,
					.975: .83,
					.95: 1.15,
					.9: 1.61,
					.5: 4.35,
					.1: 9.24,
					.05: 11.07,
					.025: 12.83,
					.01: 15.09,
					.005: 16.75
				},
				6: {
					.995: .68,
					.99: .87,
					.975: 1.24,
					.95: 1.64,
					.9: 2.2,
					.5: 5.35,
					.1: 10.65,
					.05: 12.59,
					.025: 14.45,
					.01: 16.81,
					.005: 18.55
				},
				7: {
					.995: .99,
					.99: 1.25,
					.975: 1.69,
					.95: 2.17,
					.9: 2.83,
					.5: 6.35,
					.1: 12.02,
					.05: 14.07,
					.025: 16.01,
					.01: 18.48,
					.005: 20.28
				},
				8: {
					.995: 1.34,
					.99: 1.65,
					.975: 2.18,
					.95: 2.73,
					.9: 3.49,
					.5: 7.34,
					.1: 13.36,
					.05: 15.51,
					.025: 17.53,
					.01: 20.09,
					.005: 21.96
				},
				9: {
					.995: 1.73,
					.99: 2.09,
					.975: 2.7,
					.95: 3.33,
					.9: 4.17,
					.5: 8.34,
					.1: 14.68,
					.05: 16.92,
					.025: 19.02,
					.01: 21.67,
					.005: 23.59
				},
				10: {
					.995: 2.16,
					.99: 2.56,
					.975: 3.25,
					.95: 3.94,
					.9: 4.87,
					.5: 9.34,
					.1: 15.99,
					.05: 18.31,
					.025: 20.48,
					.01: 23.21,
					.005: 25.19
				},
				11: {
					.995: 2.6,
					.99: 3.05,
					.975: 3.82,
					.95: 4.57,
					.9: 5.58,
					.5: 10.34,
					.1: 17.28,
					.05: 19.68,
					.025: 21.92,
					.01: 24.72,
					.005: 26.76
				},
				12: {
					.995: 3.07,
					.99: 3.57,
					.975: 4.4,
					.95: 5.23,
					.9: 6.3,
					.5: 11.34,
					.1: 18.55,
					.05: 21.03,
					.025: 23.34,
					.01: 26.22,
					.005: 28.3
				},
				13: {
					.995: 3.57,
					.99: 4.11,
					.975: 5.01,
					.95: 5.89,
					.9: 7.04,
					.5: 12.34,
					.1: 19.81,
					.05: 22.36,
					.025: 24.74,
					.01: 27.69,
					.005: 29.82
				},
				14: {
					.995: 4.07,
					.99: 4.66,
					.975: 5.63,
					.95: 6.57,
					.9: 7.79,
					.5: 13.34,
					.1: 21.06,
					.05: 23.68,
					.025: 26.12,
					.01: 29.14,
					.005: 31.32
				},
				15: {
					.995: 4.6,
					.99: 5.23,
					.975: 6.27,
					.95: 7.26,
					.9: 8.55,
					.5: 14.34,
					.1: 22.31,
					.05: 25,
					.025: 27.49,
					.01: 30.58,
					.005: 32.8
				},
				16: {
					.995: 5.14,
					.99: 5.81,
					.975: 6.91,
					.95: 7.96,
					.9: 9.31,
					.5: 15.34,
					.1: 23.54,
					.05: 26.3,
					.025: 28.85,
					.01: 32,
					.005: 34.27
				},
				17: {
					.995: 5.7,
					.99: 6.41,
					.975: 7.56,
					.95: 8.67,
					.9: 10.09,
					.5: 16.34,
					.1: 24.77,
					.05: 27.59,
					.025: 30.19,
					.01: 33.41,
					.005: 35.72
				},
				18: {
					.995: 6.26,
					.99: 7.01,
					.975: 8.23,
					.95: 9.39,
					.9: 10.87,
					.5: 17.34,
					.1: 25.99,
					.05: 28.87,
					.025: 31.53,
					.01: 34.81,
					.005: 37.16
				},
				19: {
					.995: 6.84,
					.99: 7.63,
					.975: 8.91,
					.95: 10.12,
					.9: 11.65,
					.5: 18.34,
					.1: 27.2,
					.05: 30.14,
					.025: 32.85,
					.01: 36.19,
					.005: 38.58
				},
				20: {
					.995: 7.43,
					.99: 8.26,
					.975: 9.59,
					.95: 10.85,
					.9: 12.44,
					.5: 19.34,
					.1: 28.41,
					.05: 31.41,
					.025: 34.17,
					.01: 37.57,
					.005: 40
				},
				21: {
					.995: 8.03,
					.99: 8.9,
					.975: 10.28,
					.95: 11.59,
					.9: 13.24,
					.5: 20.34,
					.1: 29.62,
					.05: 32.67,
					.025: 35.48,
					.01: 38.93,
					.005: 41.4
				},
				22: {
					.995: 8.64,
					.99: 9.54,
					.975: 10.98,
					.95: 12.34,
					.9: 14.04,
					.5: 21.34,
					.1: 30.81,
					.05: 33.92,
					.025: 36.78,
					.01: 40.29,
					.005: 42.8
				},
				23: {
					.995: 9.26,
					.99: 10.2,
					.975: 11.69,
					.95: 13.09,
					.9: 14.85,
					.5: 22.34,
					.1: 32.01,
					.05: 35.17,
					.025: 38.08,
					.01: 41.64,
					.005: 44.18
				},
				24: {
					.995: 9.89,
					.99: 10.86,
					.975: 12.4,
					.95: 13.85,
					.9: 15.66,
					.5: 23.34,
					.1: 33.2,
					.05: 36.42,
					.025: 39.36,
					.01: 42.98,
					.005: 45.56
				},
				25: {
					.995: 10.52,
					.99: 11.52,
					.975: 13.12,
					.95: 14.61,
					.9: 16.47,
					.5: 24.34,
					.1: 34.28,
					.05: 37.65,
					.025: 40.65,
					.01: 44.31,
					.005: 46.93
				},
				26: {
					.995: 11.16,
					.99: 12.2,
					.975: 13.84,
					.95: 15.38,
					.9: 17.29,
					.5: 25.34,
					.1: 35.56,
					.05: 38.89,
					.025: 41.92,
					.01: 45.64,
					.005: 48.29
				},
				27: {
					.995: 11.81,
					.99: 12.88,
					.975: 14.57,
					.95: 16.15,
					.9: 18.11,
					.5: 26.34,
					.1: 36.74,
					.05: 40.11,
					.025: 43.19,
					.01: 46.96,
					.005: 49.65
				},
				28: {
					.995: 12.46,
					.99: 13.57,
					.975: 15.31,
					.95: 16.93,
					.9: 18.94,
					.5: 27.34,
					.1: 37.92,
					.05: 41.34,
					.025: 44.46,
					.01: 48.28,
					.005: 50.99
				},
				29: {
					.995: 13.12,
					.99: 14.26,
					.975: 16.05,
					.95: 17.71,
					.9: 19.77,
					.5: 28.34,
					.1: 39.09,
					.05: 42.56,
					.025: 45.72,
					.01: 49.59,
					.005: 52.34
				},
				30: {
					.995: 13.79,
					.99: 14.95,
					.975: 16.79,
					.95: 18.49,
					.9: 20.6,
					.5: 29.34,
					.1: 40.26,
					.05: 43.77,
					.025: 46.98,
					.01: 50.89,
					.005: 53.67
				},
				40: {
					.995: 20.71,
					.99: 22.16,
					.975: 24.43,
					.95: 26.51,
					.9: 29.05,
					.5: 39.34,
					.1: 51.81,
					.05: 55.76,
					.025: 59.34,
					.01: 63.69,
					.005: 66.77
				},
				50: {
					.995: 27.99,
					.99: 29.71,
					.975: 32.36,
					.95: 34.76,
					.9: 37.69,
					.5: 49.33,
					.1: 63.17,
					.05: 67.5,
					.025: 71.42,
					.01: 76.15,
					.005: 79.49
				},
				60: {
					.995: 35.53,
					.99: 37.48,
					.975: 40.48,
					.95: 43.19,
					.9: 46.46,
					.5: 59.33,
					.1: 74.4,
					.05: 79.08,
					.025: 83.3,
					.01: 88.38,
					.005: 91.95
				},
				70: {
					.995: 43.28,
					.99: 45.44,
					.975: 48.76,
					.95: 51.74,
					.9: 55.33,
					.5: 69.33,
					.1: 85.53,
					.05: 90.53,
					.025: 95.02,
					.01: 100.42,
					.005: 104.22
				},
				80: {
					.995: 51.17,
					.99: 53.54,
					.975: 57.15,
					.95: 60.39,
					.9: 64.28,
					.5: 79.33,
					.1: 96.58,
					.05: 101.88,
					.025: 106.63,
					.01: 112.33,
					.005: 116.32
				},
				90: {
					.995: 59.2,
					.99: 61.75,
					.975: 65.65,
					.95: 69.13,
					.9: 73.29,
					.5: 89.33,
					.1: 107.57,
					.05: 113.14,
					.025: 118.14,
					.01: 124.12,
					.005: 128.3
				},
				100: {
					.995: 67.33,
					.99: 70.06,
					.975: 74.22,
					.95: 77.93,
					.9: 82.36,
					.5: 99.33,
					.1: 118.5,
					.05: 124.34,
					.025: 129.56,
					.01: 135.81,
					.005: 140.17
				}
			};
		X.linear_regression = e, X.standard_deviation = f, X.r_squared = r, X.median = m, X.mean = a, X.mode = x, X.min = o, X.max = u, X.sum = n, X.quantile = b, X.quantile_sorted = k, X.iqr = A, X.mad = P, X.chunk = O, X.shuffle = w, X.shuffle_in_place = S, X.sample = M, X.sample_covariance = y, X.sample_correlation = v, X.sample_variance = p, X.sample_standard_deviation = g, X.sample_skewness = L, X.geometric_mean = c, X.harmonic_mean = s, X.root_mean_square = l, X.variance = h, X.t_test = C, X.t_test_two_sample = _, X.jenksMatrices = T, X.jenksBreaks = D, X.jenks = I, X.bayesian = i, X.epsilon = j, X.factorial = F, X.bernoulli_distribution = G, X.binomial_distribution = N, X.poisson_distribution = z, X.chi_squared_goodness_of_fit = W, X.z_score = R, X.cumulative_std_normal_probability = B, X.standard_normal_table = E, X.average = a, X.interquartile_range = A, X.mixin = Y, X.median_absolute_deviation = P, X.rms = l
	}(this)
}]);