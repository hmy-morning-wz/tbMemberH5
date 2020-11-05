module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/tbMemberH5/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "150d":
/***/ (function(module, exports) {

module.exports = {"config":{"bg_url":"https://img-citytsm.oss-cn-hangzhou.aliyuncs.com/image/tb/result_bg.png","coupon_name":"生活缴费红包","fail_msg1":"(同身份证账号、手机号、支付宝、设备皆视为同一账号)","fail_msg2":"如有疑问，请关注“众城通”支付宝生活号，回复“Babycare”获取客服帮助","fail_msg3":"请关注“众城通”支付宝生活号，回复“Babycare”获取客服帮助","to_use_url":null,"more_url":"https://www.taobao.com","new_coupon":{"price":"10","title":"文案","url":"https://www.taobao.com","bg":"https://img-citytsm.oss-cn-hangzhou.aliyuncs.com/image/tb/rpk_bg.png"}}}

/***/ }),

/***/ "1VKv":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9923348b18f7e1e5c93a230dee9951e0.png";

/***/ }),

/***/ "25KW":
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__("vJkY"),
    Base = __webpack_require__("EsnT"),
    validApiKeys = ["api", "success", "time", "code", "msg", "trace", "traceId", "begin", "sid", "seq"],
    parseStatData = function parseStatData(e, t) {
    var r = e.split("::");
    return r.length > 1 ? util.ext({
        group: r[0],
        key: r[1]
    }, t) : util.ext({
        group: "default_group",
        key: r[0]
    }, t);
},
    Reporter = function Reporter(e) {
    Base.call(this, e);
    var t;
    try {
        t = "object" == typeof performance ? performance.timing.fetchStart : Date.now();
    } catch (r) {
        t = Date.now();
    }
    return this._startTime = t, this;
};

Reporter.prototype = util.createObject(Base.prototype), util.ext(Base.dftCon, {
    startTime: null
}), util.ext(Reporter.prototype, {
    constructor: Reporter,
    _super: Base,
    sum: function sum(e, t, r) {
        try {
            return this._lg("sum", parseStatData(e, {
                val: t || 1,
                begin: Date.now()
            }), r);
        } catch (i) {
            util.warn("[retcode] can not get parseStatData: " + i);
        }
    },
    avg: function avg(e, t, r) {
        try {
            return this._lg("avg", parseStatData(e, {
                val: t || 0,
                begin: Date.now()
            }), r);
        } catch (i) {
            util.warn("[retcode] can not get parseStatData: " + i);
        }
    },
    percent: function percent(e, t, r, i) {
        try {
            return this._lg("percent", parseStatData(e, {
                subkey: t,
                val: r || 0,
                begin: Date.now()
            }), i);
        } catch (a) {
            util.warn("[retcode] can not get parseStatData: " + a);
        }
    },
    msg: function msg(e, t) {
        if (e && !(e.length > 180)) return this.custom({
            msg: e
        }, t);
    },
    error: function error(e, t) {
        if (!e) return util.warn("[retcode] invalid param e: " + e), this;
        1 === arguments.length ? ("string" == typeof e && (e = {
            message: e
        }, t = {}), "object" == typeof e && (t = e = e.error || e)) : ("string" == typeof e && (e = {
            message: e
        }), "object" != typeof t && (t = {}));
        var r = e.name || "CustomError",
            i = e.message || "",
            a = e.stack || "";
        t = t || {};
        var s = {
            begin: Date.now(),
            cate: r,
            msg: i && i.substring(0, 1e3),
            stack: a && a.substring(0, 1e3),
            file: t.filename || "",
            line: t.lineno || "",
            col: t.colno || "",
            err: {
                msg_raw: util.encode(i),
                stack_raw: util.encode(a)
            }
        },
            n = (this.getConfig("ignore") || {}).ignoreErrors;
        return util.ignoreByRule(s.msg, n) || util.ignoreByRule(util.decode(s.msg), n) ? this : (this.beforeSend && this.beforeSend("error", s), this._lg("error", s, 1));
    },
    behavior: function behavior(e) {
        if (e) {
            var t = "object" == typeof e && e.behavior ? e : {
                behavior: e
            };
            return this.beforeSend && this.beforeSend("behavior", t), this._lg("behavior", t, 1);
        }
    },
    api: function api(e, t, r, i, a, s, n, o) {
        if (!e) return util.warn("[retcode] api is null"), this;
        if (e = "string" == typeof e ? {
            api: e,
            success: t,
            time: r,
            code: i,
            msg: a,
            begin: s,
            traceId: n,
            sid: o
        } : util.sub(e, validApiKeys), !util.checkAPI(e.api)) return this;
        if (e.code = e.code || "", e.msg = e.msg || "", e.success = e.success ? 1 : 0, e.time = +e.time, e.begin = e.begin, e.traceId = e.traceId || "", e.sid = e.sid || "", !e.api || isNaN(e.time)) return util.warn("[retcode] invalid time or api"), this;
        var c = (this.getConfig("ignore") || {}).ignoreApis;
        if (util.ignoreByRule(e.api, c) || util.ignoreByRule(util.decode(e.api), c)) return this;
        this.beforeSend && this.beforeSend("api", e);
        var u = {
            type: "api",
            data: {
                message: a,
                url: e.api,
                status: i || ""
            },
            timestamp: s
        };
        try {
            this.getConfig("behavior") && this.addBehavior && this.addBehavior(u);
        } catch (l) {}
        return this._lg("api", e, e.success && this.getConfig("sample"));
    },
    speed: function speed(e, t, r) {
        var i = this,
            a = this.getConfig("startTime") || this._startTime;
        return (/^s(\d|1[0])$/.test(e) ? (t = "number" != typeof t ? Date.now() - a : t >= a ? t - a : t, i.speedCache = i.speedCache || {}, i.speedCache[e] = t, i.speedCache.begin = a, clearTimeout(i.speedTimmer), i.speedTimmer = setTimeout(function () {
                r || (i.speedCache.page = i.getPage(!0)), i._lg("speed", i.speedCache), i.speedCache = null;
            }, 5e3), i) : (util.warn("[retcode] invalid point: " + e), i)
        );
    },
    performance: function performance(e) {
        if (e) {
            var t = {};
            for (var r in e) {
                (/^t([1-9]|1[0])$/.test(r) || "ctti" === r || "cfpt" === r) && (t[r] = e[r]);
            }"{}" !== JSON.stringify(t) && (this.cPerfData = t);
        }
    },
    resource: function resource(e, t) {
        if (!e || !util.isPlainObject(e)) return util.warn("[arms] invalid param data: " + e), this;
        var r = Object.keys(e),
            i = ["begin", "dom", "load", "res", "dl"],
            a = !1;
        for (var s in i) {
            if (r.indexOf(i[s]) < 0) {
                a = !0;
                break;
            }
        }
        if (a) return util.warn("[arms] lack param data: " + e), this;
        var n = {
            begin: e.begin || Date.now(),
            dom: e.dom || "",
            load: e.load || "",
            res: util.isArray(e.res) ? JSON.stringify(e.res) : JSON.stringify([]),
            dl: e.dl || ""
        };
        return this._lg("res", n, t);
    }
}), Reporter._super = Base, Reporter._root = Base, Base.Reporter = Reporter, module.exports = Reporter;

/***/ }),

/***/ "4Dw4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"packet_container":"packet_container__QpO9h","money_header":"money_header__rfEwU","header":"header__27Qaa","title_text":"title_text__3j2JW","text_redbag":"text_redbag__23E-q","text_desc":"text_desc__2hB0c","btn_touse":"btn_touse__1ec_f","btn_more":"btn_more__1aoON","title":"title__sc4SK","msg_box":"msg_box__3mmEg","new_coupon_box":"new_coupon_box__1O8dA","left_box":"left_box__FA0Vd","right_box":"right_box__2qMkY","qiang":"qiang__31rUV","price":"price__3eL02","btn_success":"btn_success__1tUfD","btn_focus":"btn_focus__2uPwZ","btn_default":"btn_default__31mMs","packet_footer":"packet_footer__3FUXw","tip":"tip__3RTP4","quan":"quan__382xE"};

/***/ }),

/***/ "4W1E":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "09daddd387ec6460d47e43c512756d57.png";

/***/ }),

/***/ "EHrm":
/***/ (function(module, exports) {

module.exports = {"private":true,"name":"tbmemberh5","homepage":"/tbMemberH5/","version":"0.0.0","license":"MIT","scripts":{"start":"per-env","start:production":"npm run -s serve","start:development":"npm run -s dev","build":"preact build --dest ./dist --prerenderUrls src/prerender-urls.json --template src/template.html","serve":"preact build && preact serve","dev":"preact watch --template src/template.html","lint":"eslint src","test":"jest"},"eslintConfig":{"extends":"eslint-config-synacor"},"eslintIgnore":["build/*"],"devDependencies":{"eslint":"^4.9.0","eslint-config-synacor":"^2.0.2","per-env":"^1.0.2","jest":"^21.2.1","jest-preset-preact":"^1.0.0","preact-cli":"^2.1.0","preact-render-spy":"^1.2.1"},"dependencies":{"@tklc/authSdk":"^1.0.2","@tklc/trackerSdk":"^1.0.7","alife-logger":"^1.7.5","preact":"^8.5.2","preact-compat":"^3.17.0","preact-render-to-string":"^4.1.0","preact-router":"^2.5.7"},"jest":{"preset":"jest-preset-preact"}}

/***/ }),

/***/ "EsnT":
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__("vJkY"),
    _sendBeacon = __webpack_require__("ip3X"),
    pushToQueue = function pushToQueue(e, t) {
    var i;
    {
        if ("error" !== t.t || !(i = e.requestQueue[0]) || "error" !== i.t || t.msg !== i.msg) {
            if ("behavior" === t.t) {
                var n = e.requestQueue && e.requestQueue.length;
                if (n > 0 && "behavior" === e.requestQueue[n - 1].t) {
                    var r = t.behavior || [];
                    e.requestQueue[n - 1].behavior.concat(r);
                } else e.requestQueue.push(t);
            } else e.requestQueue.unshift(t);
            return e.onReady(function () {
                e.requestTimmer = util.delay(function () {
                    e.clear();
                }, e.requestQueue[0] && "error" === e.requestQueue[0].t ? 3e3 : -1);
            }), !0;
        }
        i.times++;
    }
},
    Base = function Base(e) {
    return this.ver = "1.7.5", this._conf = util.ext({}, Base.dftCon), this.sampleCache = {}, this.requestQueue = [], this.hash = util.seq(), this.resetSession(), this.setConfig(e), this.rip = util.getRandIP(), this.record = 999, this["EagleEye-TraceID"] = this.getTraceId()["EagleEye-TraceID"], this._common = {}, this;
};

Base.dftCon = {
    sample: 1,
    tag: "",
    imgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
    region: null,
    ignore: {
        ignoreUrls: [],
        ignoreApis: [],
        ignoreErrors: []
    },
    release: undefined,
    environment: "production"
}, Base.prototype = {
    constructor: Base,
    onReady: function onReady(e) {
        return e();
    },
    getPage: function getPage() {
        var e = this._conf.page;
        return util.safetyCall(e, [], e + "");
    },
    setPage: function setPage() {},
    setConfig: function setConfig(e) {
        e && "object" == typeof e && (util.verifyConfig(e), e = this.setImgUrl(e), this._conf = util.ext({}, this._conf, e));
    },
    setImgUrl: function setImgUrl(e) {
        var t = e.region,
            i = e.imgUrl;
        if (t) {
            var n = util.regionMap[t];
            return e.imgUrl = n || util.defaultImgUrl, e;
        }
        return i && (e.imgUrl = i), e;
    },
    checkImgUrl: function checkImgUrl(e) {
        if (this.getConfig("debug")) return !0;
        var t = util.regionMap,
            i = !1;
        for (var n in t) {
            if (t[n] === e) {
                i = !0;
                break;
            }
        }return !i && util.warn("[retcode] invalid url: " + e), i;
    },
    sendRequest: function sendRequest() {},
    sendBeacon: function sendBeacon(e) {
        _sendBeacon(e, this.getConfig("imgUrl"));
    },
    postData: function postData() {},
    commonInfo: function commonInfo() {
        return {};
    },
    setCommonInfo: function setCommonInfo(e) {
        e && "object" == typeof e && (this._common = util.ext({}, this._common, e));
    },
    resetSession: function resetSession() {
        this.session = util.uu(), this.sBegin = Date.now();
    },
    getTraceId: function getTraceId() {
        var e = this.rip,
            t = Date.now(),
            i = util.getSortNum(this.record),
            n = e + t + i + util.getRandNum(this._conf.pid);
        return this["EagleEye-TraceID"] = n, this.record = i, {
            "EagleEye-TraceID": n
        };
    },
    getSessionId: function getSessionId() {
        return {
            "EagleEye-SessionID": this.session
        };
    },
    getConfig: function getConfig(e) {
        return e ? this._conf[e] : util.ext({}, this._conf);
    },
    sampling: function sampling(e) {
        return 1 === e || ("boolean" == typeof this.sampleCache[e] ? this.sampleCache[e] : (this.sampleCache[e] = util.pick(e), this.sampleCache[e]));
    },
    clear: function clear() {
        var e;
        clearTimeout(this.requestTimmer), this.requestTimmer = null;
        for (var t = this._conf && "function" == typeof this._conf.sendRequest; e = this.requestQueue.pop();) {
            "res" === e.t ? this.postData(e, "res") : "error" === e.t ? this.postData(e, "err") : "behavior" === e.t ? this.postData(e, "behavior") : "health" === e.t && !t && window && window.navigator && "function" == typeof window.navigator.sendBeacon ? this.sendBeacon(e) : this.sendRequest(e);
        }return this;
    },
    _lg: function _lg(e, t, i) {
        var n = this._conf,
            r = this.getPage(),
            s = n.ignore || {},
            o = s.ignoreErrors,
            u = s.ignoreUrls,
            a = s.ignoreApis;
        return util.ignoreByRule(r, u) || util.ignoreByRule(util.decode(r), u) ? this : "error" === e && (util.ignoreByRule(t.msg, o) || util.ignoreByRule(util.decode(t.msg), o)) ? this : "api" === e && (util.ignoreByRule(t.api, a) || util.ignoreByRule(util.decode(t.api), a)) ? this : this.checkImgUrl(n.imgUrl) && t && !n.disabled && n.pid ? i && !this.sampling(i) ? this : (t = util.ext({
            t: e,
            times: 1,
            page: r,
            tag: n.tag || "",
            release: n.release || "",
            environment: n.environment,
            begin: Date.now()
        }, t, this.commonInfo(), this._common, {
            pid: n.pid,
            _v: this.ver,
            sid: this.session,
            sampling: i || 1,
            z: util.seq(),
            c1: n.c1,
            c2: n.c2,
            c3: n.c3
        }), pushToQueue(this, t)) : this;
    },
    custom: function custom(e, t) {
        if (!e || "object" != typeof e) return this;
        var i = !1,
            n = {
            begin: Date.now()
        };
        return util.each(e, function (e, t) {
            return !(i = t && t.length <= 20) && util.warn("[retcode] invalid key: " + t), n["x-" + t] = e, i;
        }), i ? this._lg("custom", n, t || 1) : this;
    }
}, module.exports = Base;

/***/ }),

/***/ "FhpC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function initSDK(e, n) {
    var r = win[key] = new BrowserLogger(e);
    r.sendPipe(n);
    var i = r._conf;
    return !1 !== i.autoSendPv && r.sendPV(), i && i.useFmp || r.sendPerformance(), i && i.sendResource && r.sendResources(), win[initFlag] = !0, r;
}

function initCdnBlSDK() {
    if (win[initFlag]) return win[key];
    var e = {},
        n = [];
    return key in win && (e = win[key].config || {}, n = win[key].pipe || []), initSDK(e, n);
}

var win = window,
    BrowserLogger = win.BrowserLogger = __webpack_require__("tKvs"),
    key = __webpack_require__("vJkY").key,
    initFlag = "__hasInitBlSdk";

BrowserLogger.singleton = function (e, n) {
    return win[initFlag] ? win[key] : initSDK(e, n);
}, BrowserLogger.createExtraInstance = function (e) {
    e && "object" == typeof e && !0 !== e.enableInstanceAutoSend && (e.enableInstanceAutoSend = !1);
    var n = new BrowserLogger(e),
        r = n._conf;
    return r.enableInstanceAutoSend && (!1 !== r.autoSendPv && n.sendPV(), r && r.useFmp || n.sendPerformance(), r && r.sendResource && n.sendResources()), n;
};

var isBrowser = "object" == typeof window && !!window.navigator;

isBrowser && win[key] && (BrowserLogger.bl = initCdnBlSDK(win.__hasInitBlSdk)), module.exports = BrowserLogger;

/***/ }),

/***/ "Hl5W":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (e, n, r) {
    var t = __webpack_require__("vJkY"),
        a = __webpack_require__("WroY"),
        i = __webpack_require__("LQDL"),
        o = null,
        h = r.documentElement,
        s = n.innerWidth || h.clientWidth || r.body.clientWidth,
        c = n.innerHeight || h.clientHeight || r.body.clientHeight,
        d = n.navigator.connection,
        l = {
        sr: screen.width + "x" + screen.height,
        vp: s + "x" + c,
        ct: d ? d.effectiveType || d.type : ""
    },
        u = {},
        f = function f(e, n, a, i, o) {
        if (n === undefined) {
            var h, s;
            if (!u[e]) {
                h = new RegExp(e + "=([^;]+)");
                try {
                    s = h.exec(r.cookie);
                } catch (d) {
                    return t.warn("[retcode] can not get cookie:", d), null;
                }
                s && (u[e] = s[1]);
            }
            return u[e];
        }
        var c = e + "=" + n;
        i && (c += "; domain=" + i), c += "; path=" + (o || "/"), a && (c += "; max-age=" + a);
        try {
            return r.cookie = c, !!r.cookie;
        } catch (d) {
            return t.warn("[retcode] can not set cookie: ", d), !1;
        }
    },
        g = function g(e) {
        var n = e._conf.uid || f("_nk_") || f("_bl_uid");
        if (!n) {
            n = t.uu();
            if (!f("_bl_uid", n, 15552e3)) return null;
        }
        return n;
    };
    return t.ext(e.prototype, {
        activeErrHandler: function activeErrHandler(e) {
            return o && !e ? this : (o = this, this);
        },
        errorHandler: function errorHandler(e) {
            if (!e) return this;
            var n = e.type;
            "error" === n ? this.error(e.error || {
                message: e.message
            }, e) : "unhandledrejection" === n && t.T(e.reason, "Error") && t.checkAutoError(e.reason) && this.error(e.reason);
            try {
                this.getConfig("behavior") && this.reportBehavior && this.reportBehavior();
            } catch (e) {}
            return this;
        },
        sendPerformance: function sendPerformance(e) {
            var n = this;
            n.onReady(function () {
                var r = a();
                r && (r.page = n.getPage(!0), e && (r = t.ext(r, e)), n.cPerfData && (r = t.ext(r, n.cPerfData)), n._lg("perf", r, n.getConfig("sample")));
            });
        },
        sendResources: function sendResources(e) {
            var n = this;
            n.onReady(function () {
                var r = i();
                r && (r.load && r.load <= 2e3 || r.load && r.load <= 8e3 && Math.random() > .05 || (r.page = n.getPage(!0), r.dl = location.href, e && (r = t.ext(r, e)), n._lg("res", r, n.getConfig("sample"))));
            });
        },
        sendPV: function sendPV() {
            var e = this;
            e.onReady(function () {
                var t = function (e) {
                    var t = g(e),
                        a = n.devicePixelRatio || 1;
                    return {
                        uid: t,
                        dt: r.title,
                        dl: location.href,
                        dr: r.referrer,
                        dpr: a.toFixed(2),
                        de: (r.characterSet || r.defaultCharset || "").toLowerCase(),
                        ul: h.lang,
                        begin: Date.now()
                    };
                }(e);
                t && t.uid && e._lg("pv", t);
            });
        },
        commonInfo: function commonInfo() {
            return l.uid = g(this), l;
        },
        handleUnload: function handleUnload(e) {
            var n = Date.now();
            if (n - this._lastUnload < 200) return this;
            this._lastUnload = n, this.sendHealth(e), this.speedCache && (this._lg("speed", this.speedCache), this.speedCache = null, clearTimeout(this.speedTimmer)), this.clear();
        },
        bindHashChange: function bindHashChange(e) {
            var r = this;
            if (!e ^ r.hashChangeHandler) return r;
            e ? (r.hackHistoryState(), r.hashChangeHandler = function (e) {
                var n = r._conf.parseHash(location.hash);
                n && r.setPage(n, !1 !== e);
            }, r.stateChangeHandler = function (e) {
                var n = r._conf.parseHash(e.detail);
                n && r.setPage(n);
            }, t.on(n, "hashchange", r.hashChangeHandler), t.on(n, "historystatechange", r.stateChangeHandler), r.hashChangeHandler(!1)) : (t.off(n, "hashchange", r.hashChangeHandler), t.off(n, "historystatechange", r.stateChangeHandler), r.hashChangeHandler = null, r.stateChangeHandler = null);
        },
        initHandler: function initHandler() {
            var e = this;
            if (e.hasInitHandler) return e;
            var r = e._conf;
            return t.on(n, "beforeunload", function () {
                e.handleUnload(0);
            }), e.bindHashChange(r.enableSPA), e.activeErrHandler(!1), e.hasInitHandler = !0, e;
        }
    }), t.on(n, "error", function (e) {
        o && o.errorHandler(e);
    }).on(n, "unhandledrejection", function (e) {
        o && o.errorHandler(e);
    }), e;
};

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.css
var style = __webpack_require__("rq4c");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ../node_modules/preact-router/dist/preact-router.es.js


var EMPTY$1 = {};

function preact_router_es_assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.attributes;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.attributes.default ? 0 : rank(vnode.attributes.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var preact_router_es_Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.attributes.path, vnode.attributes);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					preact_router_es_assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(preact_min["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(preact_min["Component"]);

var preact_router_es_Link = function Link(props) {
	return Object(preact_min["h"])('a', preact_router_es_assign({ onClick: handleLinkClick }, props));
};

var preact_router_es_Route = function Route(props) {
	return Object(preact_min["h"])(props.component, props);
};

preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
//# sourceMappingURL=preact-router.es.js.map
// EXTERNAL MODULE: ./assets/p.png
var p = __webpack_require__("4W1E");
var p_default = /*#__PURE__*/__webpack_require__.n(p);

// CONCATENATED MODULE: ./base/index.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


var base_crossImage = function crossImage(src, width, height) {
	if (!src) {
		return p_default.a;
	}
	if (src.indexOf('aliyuncs.com') > -1 || src.indexOf('images.allcitygo.com') > -1) {
		var ossProcess = width ? '?x-oss-process=image/resize,m_fill,h_' + (height || width) + ',w_' + width + '/format,webp' : '?x-oss-process=image/format,webp';
		return '' + src + ossProcess;
	}
	return src;
};

var navigation = {
	getUrlParams: function getUrlParams() {
		var hash = location.hash.replace('#', '');
		var search = location.search.replace('?', '');
		var params1 = hash.indexOf('?') > -1 ? qs.parse(hash.split('?')[1]) : qs.parse(hash);
		var params2 = qs.parse(search);
		var sessionRes = sessionStorage.getItem('NAV-UrlParams');
		var res = sessionRes && sessionRes.indexOf('{') === 0 && JSON.parse(sessionRes) || {};
		_extends(res, params1);
		_extends(res, params2);
		sessionStorage.setItem('NAV-UrlParams', JSON.stringify(res));
		return res;
	},
	pushWindow: function pushWindow(url, close) {
		var u = navigator.userAgent;
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		if (typeof my !== 'undefined' && my.getEnv) {
			my.getEnv(function (response) {
				if (response.miniprogram || !window.AlipayJSBridge) {
					if (close) {
						location.replace(url);
					} else {
						location.href = url;
					}
				} else {
					window.AlipayJSBridge.call('pushWindow', {
						url: url,
						param: {
							readTitle: true,
							showOptionMenu: false,
							closeCurrentWindow: close
						}
					});
				}
			});
		} else if (window.AlipayJSBridge) {
			window.AlipayJSBridge.call('pushWindow', {
				url: url,
				param: {
					readTitle: true,
					showOptionMenu: false,
					closeCurrentWindow: close
				}
			});
		} else if (close) {
			location.replace(url);
		} else {
			location.href = url;
		}
	}
};

var qs = {
	parse: function parse(str) {
		if (!str || str.length == 0) return {};
		var list = str.split('&');
		if (!list || list.length == 0) return {};
		var out = {};
		for (var index = 0; index < list.length; index++) {
			var set = list[index].split('=');
			set && set.length > 1 && (out[set[0]] = decodeURIComponent(set[1]));
		}
		return out;
	},
	stringify: function stringify(data) {
		if (!data) return '';
		var list = [];

		var _loop = function _loop(key) {
			if (data[key] instanceof Array && data[key].length) {
				data[key].forEach(function (t) {
					list.push(key + '=' + encodeURIComponent(t));
				});
			} else {
				list.push(key + '=' + encodeURIComponent(data[key]));
			}
		};

		for (var key in data) {
			_loop(key);
		}
		return list.join('&');
	}
};

var JSAPI = {
	showLoading: function showLoading(text) {
		console.log('showLoading');
		window.AlipayJSBridge && window.AlipayJSBridge.call('showLoading', {
			text: text
		});
	},
	hideLoading: function hideLoading() {
		console.log('hideLoading');
		window.AlipayJSBridge && window.AlipayJSBridge.call('hideLoading');
	},
	toast: function toast(msg, duration, type) {
		console.log('toast', msg);
		if (window.AlipayJSBridge) {
			AlipayJSBridge.call('toast', {
				content: msg,
				type: type || 'success',
				duration: duration || 2000
			}, function () {
				//alert("toast消失后执行");
			});
		}
	},
	ready: function ready(callback) {
		// 如果jsbridge已经注入则直接调用
		if (window.AlipayJSBridge) {
			callback && callback();
		} else {
			// 如果没有注入则监听注入的事件
			document.addEventListener('AlipayJSBridgeReady', callback, false);
		}
	}

};
// EXTERNAL MODULE: ../package.json
var package_0 = __webpack_require__("EHrm");
var package_default = /*#__PURE__*/__webpack_require__.n(package_0);

// EXTERNAL MODULE: ./components/notfound/style.css
var notfound_style = __webpack_require__("YoXn");
var notfound_style_default = /*#__PURE__*/__webpack_require__.n(notfound_style);

// CONCATENATED MODULE: ./components/notfound/index.js




var notfound__ref = Object(preact_min["h"])(
	'h1',
	null,
	'\u9519\u8BEF'
);

var _ref2 = Object(preact_min["h"])(
	'p',
	null,
	'\u5929\u554A, \u9875\u9762\u6D88\u5931\u4E86\u3002'
);

var notfound_NotFound = function NotFound() {
	return Object(preact_min["h"])(
		'div',
		{ 'class': notfound_style_default.a.header },
		notfound__ref,
		_ref2
	);
};

/* harmony default export */ var notfound = (notfound_NotFound);
// EXTERNAL MODULE: ./routes/home/style.css
var home_style = __webpack_require__("ZAL5");
var home_style_default = /*#__PURE__*/__webpack_require__.n(home_style);

// EXTERNAL MODULE: ./demo/data.json
var data = __webpack_require__("150d");
var data_default = /*#__PURE__*/__webpack_require__.n(data);

// CONCATENATED MODULE: ./service/index.js
function getDataJson(actId) {
	return fetch('https://operation.allcitygo.com/oper-act-tmall/tmallActivity/getResultPageJson?activityId=' + actId).then(function (response) {
		return response.json();
	}).then(function (res) {
		console.log('fetch getDataJson', res);
		if (res.status === 200 || res.code === '20000') {
			var data = res.data || {};
			/*
   {"code":"20000","msg":"Success","data":{"activityId":346,"activityTmallId":1,"name":"测试","startTime":"2019-09-10 01:47:30","endTime":"2019-09-17 01:47:30","status":2,"sellerId":"string","targetNumber":3000,"linkType":1,"activityLink":"string","resultPageTemplate":3,"resultPageJson":"{\n    \"config\": {\n      \"bg_url\": \"https://img-citytsm.oss-cn-hangzhou.aliyuncs.com/image/tb/result_bg.png\",\n      \"coupon_name\": \"生活缴费红包\",\n      \"fail_msg1\": \"(同身份证账号、手机号、支付宝、设备皆视为同一账号)\",\n      \"fail_msg2\": \"如有疑问，请关注“众城通”支付宝生活号，回复“Babycare”获取客服帮助\",\n      \"fail_msg3\": \"请关注“众城通”支付宝生活号，回复“Babycare”获取客服帮助\",\n      \"to_use_url\": \"https://www.taobao.com\",\n      \"more_url\": \"https://www.taobao.com\",\n      \"new_coupon\":{\n        \"price\":\"10\",\n        \"title\":\"文案\",\n        \"url\":\"https://www.taobao.com\",\n        \"bg\": \"https://img-citytsm.oss-cn-hangzhou.aliyuncs.com/image/tb/rpk_bg.png\"\n    }\n}\n  }","equityType":1,"equityId":"1231","whiteList":"string","gmtCreate":null,"gmtModified":null}}
   */try {
				if (res.data && typeof res.data.resultPageJson === 'string' && res.data.resultPageJson.indexOf('{') === 0) {
					data.config = JSON.parse(res.data.resultPageJson).config;
				}
			} catch (err) {
				console.warn(err);
			}
			return {
				success: true,
				data: data || {}
			};
		}
		return res;
	});
}
// CONCATENATED MODULE: ./routes/home/index.js
var home__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var home_Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		var _temp, _this, _ret;

		_classCallCheck(this, Home);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { activityUrl: null }, _this.fetchJson = function (actId) {

			console.log('fetchJson', _this.state, data_default.a);
			getDataJson(actId).then(function (res) {
				var config = data_default.a.config || {};
				if (res && res.success && res.data) {
					home__extends(config, res.data.config || {});
					var activity_url = res.data.activityLink;
					_this.setState({ activityUrl: activity_url });
				}

				_this.goActUrl();
			});
		}, _this.goActUrl = function () {
			console.log('goActUrl', _this.state);
			var _this$state = _this.state,
			    userId = _this$state.userId,
			    actId = _this$state.actId,
			    activityUrl = _this$state.activityUrl,
			    bizScenario = _this$state.bizScenario,
			    inviterId = _this$state.inviterId,
			    sharer = _this$state.sharer;

			JSAPI.hideLoading();
			if (activityUrl && activityUrl.indexOf('http') >= 0 && userId && userId !== 'underfined') {
				//let url = 'https://pages.tmall.com/wow/pegasus/test-site/681695/cE1491';
				var locationUrl = activityUrl + '?activityId=' + actId + '&userId=' + userId + '&bizScenario=' + bizScenario;
				if (inviterId) {
					locationUrl = locationUrl + '&inviterId=' + inviterId;
				}
				if (sharer) {
					locationUrl = locationUrl + '&sharer=' + sharer;
				}
				Tracker.click('跳转入会链接', { locationUrl: locationUrl, actId: actId }, function () {
					navigation.pushWindow(locationUrl, true);
				});
				//location.replace(locationUrl);
			} else {
				console.warn('goActUrl error', activityUrl, userId);
				Tracker.click('不能跳转入会链接', { activityUrl: activityUrl });
				if (!activityUrl) {
					JSAPI.toast('系统开小差了，找不到入口了');
				} else {
					JSAPI.toast('系统开小差了，请稍后再试');
				}
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	// gets called when this route is navigated to
	Home.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		var urlParams = navigation.getUrlParams();
		console.log('urlParams', urlParams);
		JSAPI.showLoading('加载中');

		var _ref = urlParams || {},
		    actId = _ref.actId,
		    bizScenario = _ref.bizScenario,
		    inviterId = _ref.inviterId,
		    sharer = _ref.sharer;

		this.setState({ actId: actId, bizScenario: bizScenario, inviterId: inviterId, sharer: sharer });
		window.authSDK.getUserInfo(function (res) {
			console.log(res);
			Tracker.log({ tag: 'authSDK-getUserInfo', res: res });
			res && (_this2.setState({ userId: res.userId }), _this2.fetchJson(actId));
		});
	};

	// gets called just before navigating away from the route


	Home.prototype.componentWillUnmount = function componentWillUnmount() {};

	Home.prototype.render = function render() {
		return Object(preact_min["h"])('div', { 'class': home_style_default.a.home });
	};

	return Home;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./routes/result/style.css
var result_style = __webpack_require__("4Dw4");
var result_style_default = /*#__PURE__*/__webpack_require__.n(result_style);

// EXTERNAL MODULE: ./assets/image/button_touse.png
var button_touse = __webpack_require__("PPPf");
var button_touse_default = /*#__PURE__*/__webpack_require__.n(button_touse);

// EXTERNAL MODULE: ./assets/image/button_bg.png
var button_bg = __webpack_require__("srBq");
var button_bg_default = /*#__PURE__*/__webpack_require__.n(button_bg);

// EXTERNAL MODULE: ./assets/image/msg_box.png
var msg_box = __webpack_require__("1VKv");
var msg_box_default = /*#__PURE__*/__webpack_require__.n(msg_box);

// CONCATENATED MODULE: ./routes/result/index.js
var result__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function result__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function result__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function result__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





//import result_bg from '../../assets/image/result_bg.png';




var SUCCESS = 'SUCCESS';
var FAIL = 'FAIL';
var ERROR = 'ERROR';
var FAIL_DONE = 'FAIL_DONE';
var FAIL_NOT_ALLOW = 'FAIL_NOT_ALLOW';
var MSG1 = '您已参加过活动';
var MSG2 = '您非本次活动渠道的关注用户';
var MSG3 = '来晚了，券已领完';
var HELP_MSG1 = data_default.a.config.fail_msg1; //'(同身份证账号、手机号、支付宝、设备皆视为同一账号)'
var HELP_MSG2 = data_default.a.config.fail_msg2; //'如有疑问，请关注“众城通”支付宝生活号，回复“Babycare”获取客服帮助'
var HELP_MSG3 = data_default.a.config.fail_msg3; //'请关注“众城通”支付宝生活号，回复“Babycare”获取客服帮助'
var couponName = data_default.a.config.coupon_name;

var result__ref2 = Object(preact_min["h"])('img', { src: button_touse_default.a });

var result_Result = function (_Component) {
	result__inherits(Result, _Component);

	function Result() {
		var _temp, _this, _ret;

		result__classCallCheck(this, Result);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = result__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
			code: null,
			title: '',
			message: '',
			price: 0,
			helpMessage: '',
			bgImage: '', //'https://front-h5.oss-cn-hangzhou.aliyuncs.com/img/beiyingmate/bg_result_beiyinmate2.png',
			couponUrl: '',
			toUseUrl: '',
			newCoupon: {}
		}, _this.handleCoupon = function () {
			Tracker.click('结果页面-更多福利', { toUrl: _this.state.couponUrl }, function () {
				_this.state.couponUrl && navigation.pushWindow(_this.state.couponUrl, false);
			});
		}, _this.handleToUse = function () {
			Tracker.click('结果页面-立即使用', { toUrl: _this.state.toUseUrl }, function () {
				_this.state.toUseUrl && navigation.pushWindow(_this.state.toUseUrl, false);
			});
		}, _this.handleNewCoupon = function () {
			Tracker.click('结果页面-底部-抢红包', { toUrl: _this.state.newCoupon.url }, function () {
				_this.state.newCoupon.url && navigation.pushWindow(_this.state.newCoupon.url, false);
			});
		}, _this.handleHelp = function () {}, _this.fetchJson = function (actId) {
			console.log('fetchJson', _this.state, data_default.a);
			getDataJson(actId).then(function (res) {
				console.log('getDataJson res', res);
				var config = data_default.a.config || {};
				if (res && res.success && res.data) {
					result__extends(config, res.data.config || {});
				}
				var code = _this.state.code;

				HELP_MSG1 = config.fail_msg1;
				HELP_MSG2 = config.fail_msg2;
				HELP_MSG3 = config.fail_msg3;
				couponName = config.coupon_name;
				var helpMessage = code === SUCCESS ? couponName : code === FAIL_DONE ? HELP_MSG1 : code === FAIL_NOT_ALLOW ? HELP_MSG2 : ''; //HELP_MSG3
				var bg_url = config.bg_url,
				    to_use_url = config.to_use_url,
				    more_url = config.more_url,
				    new_coupon = config.new_coupon;

				if (new_coupon && typeof new_coupon === 'string' && new_coupon.indexOf('{') > -1) {
					try {
						new_coupon = JSON.parse(new_coupon);
					} catch (err) {}
				}
				_this.setState({ helpMessage: helpMessage, bgImage: bg_url, toUseUrl: to_use_url, couponUrl: more_url, newCoupon: new_coupon });
				console.log('getDataJson', config, _this.state);
				JSAPI.hideLoading();
			}).catch(function (err) {
				JSAPI.hideLoading();
				JSAPI.toast('系统开小差了，请稍后再试');
			});
		}, _temp), result__possibleConstructorReturn(_this, _ret);
	}

	// gets called when this route is navigated to
	Result.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		JSAPI.showLoading('加载中');
		// start a timer for the clock:
		//console.log('search',location.search);
		//console.log('hash',location.hash);
		var urlParams = navigation.getUrlParams();
		console.log('urlParams', urlParams);

		var _ref = urlParams || {},
		    code = _ref.code,
		    title = _ref.title,
		    message = _ref.message,
		    price = _ref.price,
		    actId = _ref.actId;

		title = title || (code === SUCCESS ? '恭喜获得' : code === ERROR || code === FAIL ? '哎呦' : '抱歉');
		message = message || (code === SUCCESS ? '' : code === FAIL_DONE ? MSG1 : code === FAIL_NOT_ALLOW ? MSG2 : MSG3);
		//let  helpMessage = code===SUCCESS?"生活缴费红包":(code===FAIL_DONE?HELP_MSG1:(code===FAIL_NOT_ALLOW?HELP_MSG2:HELP_MSG3))
		this.setState({ urlParams: urlParams, code: code, title: title, message: message, price: price, actId: actId });
		window.authSDK.getUserInfo(function (res) {
			console.log(res);
			Tracker.log({ tag: 'authSDK-getUserInfo', res: res });
			res && _this2.setState({ userId: res.userId });
			Tracker.click('打开结果页面-' + code, { code: code, title: title, message: message });
		});
		this.fetchJson(actId);
		document.addEventListener('back', function (e) {
			//alert('back');
			if (window.history.length > 1) {
				window.AlipayJSBridge && window.AlipayJSBridge.call('popWindow');
			}
		}, false);
	};

	// gets called just before navigating away from the route


	Result.prototype.componentWillUnmount = function componentWillUnmount() {};

	Result.prototype.render = function render() {
		return Object(preact_min["h"])(
			'div',
			{ 'class': result_style_default.a.packet_container },
			Object(preact_min["h"])('img', { 'class': this.state.bgImage ? '' : 'hide', style: 'background:#F25917', src: base_crossImage(this.state.bgImage, 750, 1206) }),
			Object(preact_min["h"])(
				'div',
				{ 'class': result_style_default.a.title_text },
				this.state.title
			),
			Object(preact_min["h"])(
				'div',
				{ 'class': this.state.code === SUCCESS && this.state.price ? result_style_default.a.money_header : result_style_default.a.header },
				this.state.code === SUCCESS ? this.state.price : this.state.message
			),
			Object(preact_min["h"])(
				'div',
				{ 'class': result_style_default.a.text_redbag },
				this.state.helpMessage
			),
			Object(preact_min["h"])(
				'div',
				{ 'class': this.state.code === SUCCESS && this.state.toUseUrl ? result_style_default.a.btn_touse : 'hide', onClick: this.handleToUse },
				result__ref2
			),
			Object(preact_min["h"])(
				'div',
				{ 'class': this.state.code !== ERROR ? result_style_default.a.btn_more : 'hide', onClick: this.handleCoupon, style: 'background-image: url(' + button_bg_default.a + ') ; background-size: 100%  100% ;' },
				Object(preact_min["h"])(
					'div',
					{ 'class': result_style_default.a.title },
					'\u66F4\u591A\u798F\u5229'
				)
			),
			Object(preact_min["h"])(
				'div',
				{ 'class': this.state.code !== ERROR ? result_style_default.a.msg_box : 'hide', onClick: this.handleHelp, style: 'background-image: url(' + msg_box_default.a + ') ; background-size: 100%  100% ;' },
				Object(preact_min["h"])('div', { 'class': result_style_default.a.title })
			),
			Object(preact_min["h"])(
				'div',
				{ 'class': this.state.newCoupon && this.state.newCoupon.title && this.state.newCoupon.bg ? result_style_default.a.new_coupon_box : 'hide', onClick: this.handleNewCoupon, style: 'background-image: url(' + base_crossImage(this.state.newCoupon.bg) + ') ; background-size: 100%  100% ;' },
				Object(preact_min["h"])(
					'div',
					{ 'class': result_style_default.a.left_box },
					Object(preact_min["h"])(
						'div',
						{ 'class': result_style_default.a.title },
						this.state.newCoupon.price
					)
				),
				Object(preact_min["h"])(
					'div',
					{ 'class': result_style_default.a.right_box },
					Object(preact_min["h"])(
						'div',
						{ 'class': result_style_default.a.title },
						this.state.newCoupon.title
					),
					Object(preact_min["h"])(
						'div',
						{ 'class': result_style_default.a.qiang },
						'\u62A2'
					)
				)
			)
		);
	};

	return Result;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// Code-splitting is automated for routes



if (typeof window !== 'undefined') {
	__webpack_require__("QsHB");
}
var homepage = package_default.a.homepage || '/';
var ResultPath = homepage + 'result';
var NotFoundPath = homepage + '404';

var app__ref = Object(preact_min["h"])(home_Home, { path: homepage });

var app__ref2 = Object(preact_min["h"])(result_Result, { path: ResultPath });

var _ref3 = Object(preact_min["h"])(notfound, { path: NotFoundPath });

var app_App = function (_Component) {
	app__inherits(App, _Component);

	function App() {
		var _temp, _this, _ret;

		app__classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = app__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleRoute = function (e) {
			_this.currentUrl = e.url;
		}, _temp), app__possibleConstructorReturn(_this, _ret);
	}

	/** Gets fired when the route changes.
  *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
  *	@param {string} event.url	The newly routed URL
  */


	App.prototype.componentDidMount = function componentDidMount() {
		var urlParams = navigation.getUrlParams();
		console.log('urlParams', urlParams);
		var hash = location.hash;
		if (hash && hash.indexOf('#') > -1) {
			if (hash && hash.indexOf('?')) {
				hash = hash.split('?')[0];
			}
			hash = hash.replace('#/', '').replace('#', '');
			if (hash) {
				var ret = route(homepage + hash, true);
				console.log('route to', hash, ret);
				if (!ret) {
					route(NotFoundPath);
				}
			}
		}
		JSAPI.ready(function () {
			window.AlipayJSBridge && window.AlipayJSBridge.call('hideOptionMenu');
		});
	};

	App.prototype.render = function render() {
		return Object(preact_min["h"])(
			'div',
			{ id: 'app' },
			Object(preact_min["h"])(
				preact_router_es_Router,
				{ onChange: this.handleRoute },
				app__ref,
				app__ref2,
				_ref3
			)
		);
	};

	return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js

if (typeof window !== 'undefined') {
	window._to = {
		server: ['https://webtrack.allcitygo.com:8088/event/upload'],
		appId: 'tbmember',
		workspaceId: 'default',
		appName: '天猫入会活动',
		// user_id: '', //选填
		autoExpo: true,
		h5version: '0.0.1'
	};

	__webpack_require__("wjQ2");
	__webpack_require__("nRx6");
	var BrowerLogger = __webpack_require__("FhpC");

	// BrowserLogger.singleton(conf) conf传入config配置
	var __bl = BrowerLogger.singleton({
		pid: 'fo6t86zsux@92dd51909ad006d',
		imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?' // 设定日志上传地址,新加坡部署可选`https://arms-retcode-sg.aliyuncs.com/r.png?`
		// 其他config配置
	});
	window.authSDK.getUserInfo(function (res) {
		console.log(res);
		Tracker.log({ tag: 'authSDK-getUserInfo', res: res });
	});
}



/* harmony default export */ var index = __webpack_exports__["default"] = (app_App);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "LQDL":
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__("vJkY"),
    constants = __webpack_require__("ew2l"),
    TIMING_KEYS = constants.TIMING_KEYS;

module.exports = function () {
    var t = util.win || {},
        e = t.performance;
    if (!e || "object" != typeof e || "function" != typeof e.getEntriesByType) return null;
    var n = {},
        i = e.timing || {},
        r = e.getEntriesByType("resource") || [];
    if (n.begin = i[TIMING_KEYS[1]] || Date.now(), "function" == typeof t.PerformanceNavigationTiming) {
        var o = e.getEntriesByType("navigation")[0];
        o && (i = o);
    }
    return util.each({
        dom: [10, 8],
        load: [14, 1]
    }, function (t, e) {
        var r = i[TIMING_KEYS[t[1]]],
            o = i[TIMING_KEYS[t[0]]];
        if (r > 0 && o > 0) {
            var a = Math.round(o - r);
            a >= 0 && a < 36e5 && (n[e] = a);
        }
    }), n.res = JSON.stringify(r), n;
};

/***/ }),

/***/ "OezT":
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__("vJkY"),
    win = "object" == typeof window ? window : {},
    xmlHttp = win.__oXMLHttpRequest_ || win.XMLHttpRequest;

xmlHttp = "function" == typeof xmlHttp ? xmlHttp : undefined, module.exports = function (t, e) {
    try {
        var n = new xmlHttp();
        n.open("POST", e, !0), n.setRequestHeader("Content-Type", "text/plain"), n.send(JSON.stringify(t));
    } catch (i) {
        util.warn("[retcode] Failed to log, exception is :\n" + i);
    }
};

/***/ }),

/***/ "PPPf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4662aa0124e59b3fd176c5b8f9c5e5e4.png";

/***/ }),

/***/ "QsHB":
/***/ (function(module, exports) {

/*eslint-disable*/
!function (a, b) {
  function c() {
    var b = f.getBoundingClientRect().width;b / i > 540 && (b = 540 * i);var c = b / 10;f.style.fontSize = c + "px", k.rem = a.rem = c;
  }var d,
      e = a.document,
      f = e.documentElement,
      g = e.querySelector('meta[name="viewport"]'),
      h = e.querySelector('meta[name="flexible"]'),
      i = 0,
      j = 0,
      k = b.flexible || (b.flexible = {});if (g) {
    console.warn("灏嗘牴鎹凡鏈夌殑meta鏍囩鏉ヨ缃缉鏀炬瘮渚�");var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);l && (j = parseFloat(l[1]), i = parseInt(1 / j));
  } else if (h) {
    var m = h.getAttribute("content");if (m) {
      var n = m.match(/initial\-dpr=([\d\.]+)/),
          o = m.match(/maximum\-dpr=([\d\.]+)/);n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)));
    }
  }if (!i && !j) {
    var p = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)),
        q = a.devicePixelRatio;i = p ? q >= 3 && (!i || i >= 3) ? 3 : q >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i;
  }if (f.setAttribute("data-dpr", i), !g) if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g);else {
    var r = e.createElement("div");r.appendChild(g), e.write(r.innerHTML);
  }a.addEventListener("resize", function () {
    clearTimeout(d), d = setTimeout(c, 300);
  }, !1), a.addEventListener("pageshow", function (a) {
    a.persisted && (clearTimeout(d), d = setTimeout(c, 300));
  }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {
    e.body.style.fontSize = 12 * i + "px";
  }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {
    var b = parseFloat(a) * this.rem;return "string" == typeof a && a.match(/rem$/) && (b += "px"), b;
  }, k.px2rem = function (a) {
    var b = parseFloat(a) / this.rem;return "string" == typeof a && a.match(/px$/) && (b += "rem"), b;
  };
}(window, window.lib || (window.lib = {}));

/***/ }),

/***/ "WroY":
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__("vJkY"),
    constants = __webpack_require__("ew2l"),
    TIMING_KEYS = constants.TIMING_KEYS;

module.exports = function () {
    var t = util.win || {},
        n = t.performance;
    if (!n || "object" != typeof n) return null;
    var e = {},
        i = n.timing || {},
        a = Date.now(),
        r = 1;
    if ("function" == typeof t.PerformanceNavigationTiming) {
        var o = n.getEntriesByType("navigation")[0];
        o && (i = o, r = 2);
    }
    util.each({
        dns: [3, 2],
        tcp: [5, 4],
        ssl: [5, 17],
        ttfb: [7, 6],
        trans: [8, 7],
        dom: [10, 8],
        res: [14, 12],
        firstbyte: [7, 2],
        fpt: [8, 1],
        tti: [10, 1],
        ready: [12, 1],
        load: [14, 1]
    }, function (t, n) {
        var a = i[TIMING_KEYS[t[1]]],
            o = i[TIMING_KEYS[t[0]]];
        if (2 === r || a > 0 && o > 0) {
            var I = Math.round(o - a);
            I >= 0 && I < 36e5 && (e[n] = I);
        }
    });
    var I = t.navigator.connection,
        l = n.navigation || {};
    e.ct = I ? I.effectiveType || I.type : "";
    var f = I ? I.downlink || I.downlinkMax || I.bandwidth || null : null;
    if ((f = f > 999 ? 999 : f) && (e.bandwidth = f), e.navtype = 1 === l.type ? "Reload" : "Other", 1 === r && i[TIMING_KEYS[16]] > 0 && i[TIMING_KEYS[1]] > 0) {
        var u = i[TIMING_KEYS[16]] - i[TIMING_KEYS[1]];
        u >= 0 && u < 36e5 && (e.fpt = u);
    }
    return 1 === r && i[TIMING_KEYS[1]] > 0 ? e.begin = i[TIMING_KEYS[1]] : 2 === r && e.load > 0 ? e.begin = a - e.load : e.begin = a, e;
};

/***/ }),

/***/ "YoXn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header__8e7B7"};

/***/ }),

/***/ "ZAL5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__2Q5nZ"};

/***/ }),

/***/ "Zfop":
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__("vJkY"),
    checkInterval = 500;

module.exports = function (e, n, t) {
    function r(e, n, t) {
        var i = 0,
            u = e.tagName;
        if ("SCRIPT" !== u && "STYLE" !== u && "META" !== u && "HEAD" !== u) {
            var c = e.children ? e.children.length : 0;
            if (c > 0) for (var a = e.children, l = c - 1; l >= 0; l--) {
                i += r(a[l], n + 1, i > 0);
            }if (i <= 0 && !t) {
                if (!(e.getBoundingClientRect && e.getBoundingClientRect().top < o)) return 0;
            }
            i += 1 + .5 * n;
        }
        return i;
    }
    function i(e) {
        for (var n = 1; n < e.length; n++) {
            if (e[n].score < e[n - 1].score) return e.splice(n, 1), i(e);
        }return e;
    }
    var o = n.innerHeight || 0,
        u = [],
        c = null,
        a = 0;
    util.ext(e.prototype, {
        initFmpObserver: function initFmpObserver(e) {
            var i = this;
            if (!i._conf || !i._conf.useFmp) return null;
            if (!n.MutationObserver) return util.warn("[retcode] first meaningful paint can not be retrieved"), i.sendPerformance(), null;
            util.on(n, "beforeunload", function () {
                i.endObserving(0, !0);
            });
            var o = n.MutationObserver;
            return (c = new o(function () {
                !function (e) {
                    var n = Date.now() - e,
                        i = t.querySelector("body");
                    if (i) {
                        var o = 0;
                        o += r(i, 1, !1), u.push({
                            score: o,
                            t: n
                        });
                    } else u.push({
                        score: 0,
                        t: n
                    });
                }(i._startTime);
            })).observe(document, {
                childList: !0,
                subtree: !0
            }), a = 1, i.onReady(function () {
                i.endObserving(e);
            }), c;
        },
        endObserving: function endObserving(e, n) {
            var t = this;
            if (c && a) if (n || !function (e, n) {
                var t = Date.now() - e;
                return !(t > n || t - (u && u.length && u[u.length - 1].t || 0) > 2 * checkInterval);
            }(t._startTime, e)) {
                c.disconnect(), a = 0, u = i(u);
                for (var r = null, o = 1; o < u.length; o++) {
                    if (u[o].t >= u[o - 1].t) {
                        var l = u[o].score - u[o - 1].score;
                        (!r || r.rate <= l) && (r = {
                            t: u[o].t,
                            rate: l
                        });
                    }
                }r && r.t > 0 && r.t < 36e5 ? t.sendPerformance({
                    fmp: r.t
                }) : t.sendPerformance();
            } else util.delay(function () {
                t.endObserving(e);
            }, checkInterval);
        }
    });
};

/***/ }),

/***/ "ew2l":
/***/ (function(module, exports) {

exports.TIMING_KEYS = ["", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "", "domInteractive", "", "domContentLoadedEventEnd", "", "loadEventStart", "", "msFirstPaint", "secureConnectionStart"];

/***/ }),

/***/ "ip3X":
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__("vJkY");

module.exports = function (n, o) {
    "object" == typeof n && (n = util.serialize(n));
    var i = o + n;
    window && window.navigator && "function" == typeof window.navigator.sendBeacon ? window.navigator.sendBeacon(i, {}) : util.warn("[arms] navigator.sendBeacon not surported");
};

/***/ }),

/***/ "jNld":
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__("vJkY");

module.exports = function (e, t) {
    var n = [],
        r = null,
        a = t && t.location && t.location.href,
        o = 0,
        i = undefined,
        u = null,
        c = function c(e, t, n) {
        if (null !== e) {
            var r = e[t];
            e[t] = n(r);
        }
    },
        s = function s(e) {
        var t,
            n,
            r,
            a,
            o,
            i = [];
        if (!e || !e.tagName) return "";
        if (i.push(e.tagName.toLowerCase()), e.id && i.push("#".concat(e.id)), (t = e.className) && "[object String]" === Object.prototype.toString.call(t)) for (n = t.split(/\s+/), o = 0; o < n.length; o++) {
            i.push(".".concat(n[o]));
        }var u = ["type", "name", "title", "alt"];
        for (o = 0; o < u.length; o++) {
            r = u[o], (a = e.getAttribute(r)) && i.push("[".concat(r, '="').concat(a, '"]'));
        }return i.join("");
    },
        l = function l(e, t) {
        return function (n) {
            if (n && n !== u) {
                u = n;
                var a;
                try {
                    a = n.target;
                } catch (l) {
                    a = "<unknown>";
                }
                if (0 !== a.length) {
                    var c = {
                        type: "ui.".concat(e),
                        data: {
                            message: function (e) {
                                if (!e || 1 !== e.nodeType) return "";
                                for (var t = e || null, n = [], r = 0, a = 0, o = " > ".length, i = ""; t && r++ < 5 && !("html" === (i = s(t)) || r > 1 && a + n.length * o + i.length >= 80);) {
                                    n.push(i), a += i.length, t = t.parentNode;
                                }return n.reverse().join(" > ");
                            }(a)
                        },
                        timestamp: Date.now()
                    };
                    "click" === e ? (o && clearTimeout(o), t ? o = setTimeout(function () {
                        r && r.addBehavior(c);
                    }, 0) : r && r.addBehavior(c)) : "keypress" === e && (i || r && r.addBehavior(c), clearTimeout(i), i = setTimeout(function () {
                        i = undefined;
                    }, 100));
                }
            }
        };
    },
        h = function h() {
        if (function () {
            var e = t && t.chrome,
                n = e && e.app && e.app.runtime,
                r = "history" in t && !!t.history.pushState && !!t.history.replaceState;
            return !n && r;
        }()) {
            var e = function e(_e, t) {
                var n = {
                    type: "navigation",
                    data: {
                        from: _e,
                        to: t
                    }
                };
                r && r.addBehavior(n), a = t;
            },
                n = t.onpopstate;
            t.onpopstate = function () {
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) {
                    o[i] = arguments[i];
                }var u = t.location.href;
                if (e(a, u), n) return n.apply(this, o);
            };
            var o = function o(t) {
                return function () {
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) {
                        r[o] = arguments[o];
                    }var i = r.length > 2 ? r[2] : undefined;
                    return i && e(a, String(i)), t.apply(this, r);
                };
            };
            c(t.history, "pushState", o), c(t.history, "replaceState", o);
        }
    };
    util.ext(e.prototype, {
        addBehavior: function addBehavior() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : undefined;
            if (this.getConfig("behavior")) {
                var a = r && r > 0 ? min(r, 100) : 100;
                return (e = util.ext({}, {
                    type: "default",
                    data: {},
                    timestamp: Date.now(),
                    page: t && t.location && t.location.pathname
                }, e)).data && e.data.message && (e.data.message = util.encode(e.data.message)), n.push(e), n = n.slice(-a);
            }
        },
        getBehavior: function getBehavior() {
            return n || [];
        },
        setBehavior: function setBehavior(e) {
            return e && (n = e), n;
        },
        reportBehavior: function reportBehavior(e) {
            var t = this;
            t.getConfig("behavior") && (t.sendBhTimer = setTimeout(function () {
                n && n.length > 0 && (t.behavior(n), n = [], t.sendBhTimer = undefined, e && e());
            }, 0));
        },
        initBehavior: function initBehavior() {
            return this.hasInitBehavior || r || (!function () {
                if (document && document.referrer && document.location) {
                    var e = document.referrer,
                        t = document.location.href;
                    if ("" !== e) {
                        var n = {
                            type: "navigation",
                            data: {
                                from: e,
                                to: t
                            }
                        };
                        a = t, r && r.addBehavior(n);
                    }
                }
            }(), function () {
                if (t && t.console) for (var e = ["debug", "info", "warn", "log", "error", "assert"], n = 0; e.length; n++) {
                    var a = e[n];
                    if (!t.console[a]) return;
                    c(t.console, a, function (e) {
                        var n = a;
                        return function () {
                            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) {
                                o[i] = arguments[i];
                            }var u = {
                                type: "console",
                                data: {
                                    level: n,
                                    message: o
                                }
                            };
                            if (r && r.addBehavior(u), "error" === n) for (var c = 0; c < o.length; c++) {
                                var s = o[c];
                                s && s.message && s.stack && r && r.errorHandler(new ErrorEvent("error", {
                                    error: s,
                                    message: s.message
                                }));
                            }
                            e && Function.prototype.apply.call(e, t.console, o);
                        };
                    });
                }
            }(), t && t.document && t.document.addEventListener && (t.document.addEventListener("click", l("click"), !1), t.document.addEventListener("keypress", l("keypress"), !1)), h(), r = this, this.hasInitBehavior = !0), this;
        }
    });
};

/***/ }),

/***/ "nRx6":
/***/ (function(module, exports) {

!function (e) {
  var t = {};function r(n) {
    if (t[n]) return t[n].exports;var o = t[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) {
      r.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 12);
}([function (e, t) {
  var r = e.exports = { version: "2.6.9" };"number" == typeof __e && (__e = r);
}, function (e, t, r) {
  e.exports = !r(4)(function () {
    return 7 != Object.defineProperty({}, "a", { get: function get() {
        return 7;
      } }).a;
  });
}, function (e, t) {
  var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = r);
}, function (e, t) {
  e.exports = function (e) {
    return "object" == typeof e ? null !== e : "function" == typeof e;
  };
}, function (e, t) {
  e.exports = function (e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  };
}, function (e, t, r) {
  var n = r(2),
      o = r(0),
      i = r(21),
      a = r(23),
      u = r(7),
      s = function s(e, t, r) {
    var c,
        d,
        f,
        l = e & s.F,
        p = e & s.G,
        h = e & s.S,
        g = e & s.P,
        m = e & s.B,
        w = e & s.W,
        v = p ? o : o[t] || (o[t] = {}),
        y = v.prototype,
        b = p ? n : h ? n[t] : (n[t] || {}).prototype;for (c in p && (r = t), r) {
      (d = !l && b && void 0 !== b[c]) && u(v, c) || (f = d ? b[c] : r[c], v[c] = p && "function" != typeof b[c] ? r[c] : m && d ? i(f, n) : w && b[c] == f ? function (e) {
        var t = function t(_t, r, n) {
          if (this instanceof e) {
            switch (arguments.length) {case 0:
                return new e();case 1:
                return new e(_t);case 2:
                return new e(_t, r);}return new e(_t, r, n);
          }return e.apply(this, arguments);
        };return t.prototype = e.prototype, t;
      }(f) : g && "function" == typeof f ? i(Function.call, f) : f, g && ((v.virtual || (v.virtual = {}))[c] = f, e & s.R && y && !y[c] && a(y, c, f)));
    }
  };s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s;
}, function (e, t, r) {
  var n = r(24),
      o = r(25),
      i = r(27),
      a = Object.defineProperty;t.f = r(1) ? Object.defineProperty : function (e, t, r) {
    if (n(e), t = i(t, !0), n(r), o) try {
      return a(e, t, r);
    } catch (e) {}if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");return "value" in r && (e[t] = r.value), e;
  };
}, function (e, t) {
  var r = {}.hasOwnProperty;e.exports = function (e, t) {
    return r.call(e, t);
  };
}, function (e, t, r) {
  var n = r(9),
      o = r(10);e.exports = function (e) {
    return n(o(e));
  };
}, function (e, t, r) {
  var n = r(36);e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
    return "String" == n(e) ? e.split("") : Object(e);
  };
}, function (e, t) {
  e.exports = function (e) {
    if (null == e) throw TypeError("Can't call method on  " + e);return e;
  };
}, function (e, t) {
  var r = Math.ceil,
      n = Math.floor;e.exports = function (e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? n : r)(e);
  };
}, function (e, t, r) {
  "use strict";
  var n,
      o = r(13),
      i = (n = o) && n.__esModule ? n : { default: n };!function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new i.default(e);window.authSDK = t;
  }(window._authsdk);
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var n = c(r(14)),
      o = c(r(16)),
      i = c(r(17)),
      a = c(r(29)),
      u = c(r(48)),
      s = c(r(49));function c(e) {
    return e && e.__esModule ? e : { default: e };
  }var d = window.location.hostname.indexOf("money.allcitygo.com") > -1 ? "production" : window.location.hostname.indexOf("sit-operation.allcitygo.com") > -1 ? "sit" : "other",
      f = "production" === d ? "2018102261809363" : "2018080860963430",
      l = "production" === d ? "https://operation.allcitygo.com/" : "https://sit-operation.allcitygo.com/",
      p = "https://money.allcitygo.com/error/index.html",
      h = "https://money.allcitygo.com/auth/index.html";function g(e) {
    var t = !1,
        r = setTimeout(function () {
      !t && e(r), t = !0;
    }, 300);console.log(window.document.readyState), "complete" === window.document.readyState || "loaded" === window.document.readyState || "interactive" === window.document.readyState ? (e(r), t = !0) : window.addEventListener("DOMContentLoaded", function () {
      !t && e(r), t = !0;
    });
  }function m(e) {
    var t = e.url,
        r = e.close;window.AlipayJSBridge ? AlipayJSBridge.call("pushWindow", { url: t, param: { readTitle: !0, closeCurrentWindow: r } }, function (e) {
      e && e.error && (r ? location.replace(t) : location.href = t);
    }) : r ? location.replace(t) : location.href = t;
  }var w = function () {
    function e(t) {
      (0, o.default)(this, e), t = t || {}, this.Router = a.default, this._ajax = u.default._ajax, this._cookie = s.default, this.appId = t.appId || f, this.baseURL = t.baseURL || l, this.redirectInMini = t.redirectInMini || !0, this.debug = t.debug || !1, this.getUserInfo = this._getUserInfo;
    }return (0, i.default)(e, [{ key: "getUserIdFromMini", value: function value(e) {
        var t = setTimeout(function () {
          e && e({ success: !1 });
        }, 1e3);my.onMessage = function (r) {
          clearTimeout(t), console.log(r), r && "getUserInfo" === r.method && r.success ? (e && e({ success: !0, userId: r.data.userId }), my.onMessage = void 0) : r && "getUserInfo" === r.method && (e && e({ success: !1 }), my.onMessage = void 0);
        }, my.postMessage({ method: "getUserInfo" });
      } }, { key: "getUserId", value: function value(e, t) {
        this._ajax(this.baseURL + "oper-act-tmall/tmall/auth", (0, n.default)(e), function (e) {
          try {
            if (window.AlipayJSBridge && AlipayJSBridge.call("hideLoading"), e && e.success) {
              var r = JSON.parse(e.responseText),
                  n = r.data && r.data.userId;if (n) return void (t && t({ success: !0, userId: n }));console.log(r);
            }
          } catch (e) {
            console.warn(e);
          }window.Tracker && window.Tracker.err("oper-act-tmall/tmall/auth", { response: e }), t && t({ success: !1 });
        });
      } }, { key: "clearUserId", value: function value() {
        var e = s.default.parse(document.cookie)["auth-user_id"],
            t = s.default.serialize("auth-user_id", e, { path: "/", expires: new Date(new Date().getTime() + 0), domain: s.default.cookieDomain() });document.cookie = t;
      } }, { key: "saveUserId", value: function value(e) {
        if ("undefined" != e && "null" !== e) {
          var t = s.default.serialize("auth-user_id", e, { path: "/", expires: new Date(new Date().getTime() + 31536e7), domain: s.default.cookieDomain() });document.cookie = t, window.Tracker && window.Tracker.setUserId(e), window.gio && window.gio("setUserId", e);
        }
      } }, { key: "openiframe", value: function value(e) {
        console.log("openiframe"), window.Tracker && Tracker.log({ msg: "openiframe" });var t = this;if (h !== window.location.href) {
          window.addEventListener("message", function r(n) {
            console.log("parent", n.data), window.AlipayJSBridge && AlipayJSBridge.call("hideLoading");var o = n.data;if (o) {
              var i = n.data;if ("string" == typeof o && o.indexOf("{") > -1 && o.indexOf("}") > -1 && (i = JSON.parse(o)), i && i.success && i.userId) t.saveUserId(i.userId), e && e({ success: !0, userId: i.userId, from: "iframe" }), window.removeEventListener("message", r);else if (i && "GET_USER_FAIL" === i.code) {
                e && e({ success: !1, err: "api error" });var a = encodeURIComponent(location.href);location.href = p + "?redirectUri=" + a;
              }
            }
          }, !1);var r = document.getElementById("AUTH_IFrame") || document.createElement("iframe");r.src = h, r.style = "width:1px;height:1px;border-width:0px;", r.id = "AUTH_IFrame", document.body.appendChild(r);
        }
      } }, { key: "_getUserInfo", value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { autoRedirect: !0 },
            r = t.autoRedirect,
            o = this;try {
          var i = "auth-user_id",
              a = s.default.parse(document.cookie);this.debug && console.log(a);var u = a && a[i];if (a && a[i] && a[i].length > 0 && "null" != u && "undefined" != u && "{userId}" != u) {
            var c = a[i];return e && e({ success: !0, userId: c, from: "cookie" }), window.Tracker && window.Tracker.setUserId(c), window.gio && window.gio("setUserId", c), void (window.parent && self != top && window.parent.postMessage((0, n.default)({ success: !0, userId: c }), "*"));
          }var f = window.localStorage;if ((c = this.Router.query.userId || f[i]) && c.length > 4 && "null" != c && "undefined" != c && "{userId}" != c) o.saveUserId(c), e && e({ success: !0, userId: c, from: "query" }), window.parent && self != top && window.parent.postMessage((0, n.default)({ success: !0, userId: c }), "*");else {
            if (this.Router.query.app_id && this.Router.query.auth_code) return window.Tracker && (Tracker.setPageState("openauth"), Tracker.log("请求接口换取userId")), this.debug && console.log("request getUserId"), void this.getUserId({ channel: "h5", appId: this.Router.query.app_id, authcode: this.Router.query.auth_code }, function (t) {
              if (o.debug && console.log(t), t && t.success && t.userId) o.saveUserId(t.userId), e && e({ success: !0, userId: t.userId, from: "openauth" }), window.parent && self != top && window.parent.postMessage((0, n.default)({ success: !0, userId: t.userId }), "*");else {
                e && e({ success: !1, err: "api error" }), window.parent && self != top && window.parent.postMessage((0, n.default)({ success: !1, code: "GET_USER_FAIL" }), "*");var r = encodeURIComponent(location.href);location.href = p + "?redirectUri=" + r;
              }
            });window.AlipayJSBridge && AlipayJSBridge.call("showLoading", { text: "加载中" });var l = encodeURIComponent(location.href),
                h = "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=" + this.appId + "&scope=auth_base&redirect_uri=" + l;o.debug && console.log("onload..."), window.Tracker && Tracker.log({ msg: "cookie没有用户信息走授权流程", readyState: window.document.readyState }), g(function (t) {
              o.debug && console.log("checkMiniprogramEnv..."), t && clearTimeout(t), o.checkMiniprogramEnv(function (t) {
                o.debug && console.log("miniprogram", t), window.Tracker && Tracker.log({ msg: "checkMiniprogramEnv callback", miniprogram: t }), t ? o.getUserIdFromMini(function (i) {
                  if (o.debug && console.log("getUserIdFromMini", i), i && i.success && i.userId) return o.saveUserId(i.userId), e && e({ success: !0, userId: i.userId, from: "miniApp" }), window.AlipayJSBridge && AlipayJSBridge.call("hideLoading"), void (window.parent && self != top && window.parent.postMessage((0, n.default)({ success: !0, userId: i.userId }), "*"));o.redirectInMini && r ? "production" === d || "sit" === d ? (window.Tracker ? Tracker.click("小程序跳转支付宝授权页面", { miniprogram: t, redirectHref: h }, function () {
                    window.AlipayJSBridge && AlipayJSBridge.call("showLoading", { text: "授权中" }), m({ url: h, close: !0 });
                  }) : location.href = h, o.debug && console.log("miniApp not support ,redirect to openauth")) : o.openiframe(e) : (window.Tracker && Tracker.log({ msg: "miniApp,not redirect to openauth" }), e && e({ success: !1, err: "miniApp ,not redirect to openauth" }));
                }) : r ? "production" === d || "sit" === d ? (window.Tracker ? Tracker.click("跳转支付宝授权页面", { miniprogram: t, redirectHref: h }, function () {
                  location.href = h;
                }) : location.href = h, o.debug && console.log("redirect to openauth")) : o.openiframe(e) : (window.Tracker && Tracker.log({ msg: "not redirect to openauth", miniprogram: t }), e && e({ success: !1, err: "not redirect to openauth" }));
              });
            });
          }
        } catch (f) {
          o.debug && console.warn("catch", f), e && e({ success: !1, err: f }), window.AlipayJSBridge && AlipayJSBridge.call("hideLoading");l = encodeURIComponent(location.href);location.href = p + "?redirectUri=" + l;
        }
      } }, { key: "checkMiniprogramEnv", value: function value(e) {
        navigator.userAgent.indexOf("AlipayClient") > -1 && "undefined" != typeof my ? my.getEnv(function (t) {
          e(t.miniprogram);
        }) : e(!1);
      } }]), e;
  }();t.default = w;
}, function (e, t, r) {
  e.exports = { default: r(15), __esModule: !0 };
}, function (e, t, r) {
  var n = r(0),
      o = n.JSON || (n.JSON = { stringify: JSON.stringify });e.exports = function (e) {
    return o.stringify.apply(o, arguments);
  };
}, function (e, t, r) {
  "use strict";
  t.__esModule = !0, t.default = function (e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  };
}, function (e, t, r) {
  "use strict";
  t.__esModule = !0;var n,
      o = r(18),
      i = (n = o) && n.__esModule ? n : { default: n };t.default = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, i.default)(e, n.key, n);
      }
    }return function (t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t;
    };
  }();
}, function (e, t, r) {
  e.exports = { default: r(19), __esModule: !0 };
}, function (e, t, r) {
  r(20);var n = r(0).Object;e.exports = function (e, t, r) {
    return n.defineProperty(e, t, r);
  };
}, function (e, t, r) {
  var n = r(5);n(n.S + n.F * !r(1), "Object", { defineProperty: r(6).f });
}, function (e, t, r) {
  var n = r(22);e.exports = function (e, t, r) {
    if (n(e), void 0 === t) return e;switch (r) {case 1:
        return function (r) {
          return e.call(t, r);
        };case 2:
        return function (r, n) {
          return e.call(t, r, n);
        };case 3:
        return function (r, n, o) {
          return e.call(t, r, n, o);
        };}return function () {
      return e.apply(t, arguments);
    };
  };
}, function (e, t) {
  e.exports = function (e) {
    if ("function" != typeof e) throw TypeError(e + " is not a function!");return e;
  };
}, function (e, t, r) {
  var n = r(6),
      o = r(28);e.exports = r(1) ? function (e, t, r) {
    return n.f(e, t, o(1, r));
  } : function (e, t, r) {
    return e[t] = r, e;
  };
}, function (e, t, r) {
  var n = r(3);e.exports = function (e) {
    if (!n(e)) throw TypeError(e + " is not an object!");return e;
  };
}, function (e, t, r) {
  e.exports = !r(1) && !r(4)(function () {
    return 7 != Object.defineProperty(r(26)("div"), "a", { get: function get() {
        return 7;
      } }).a;
  });
}, function (e, t, r) {
  var n = r(3),
      o = r(2).document,
      i = n(o) && n(o.createElement);e.exports = function (e) {
    return i ? o.createElement(e) : {};
  };
}, function (e, t, r) {
  var n = r(3);e.exports = function (e, t) {
    if (!n(e)) return e;var r, o;if (t && "function" == typeof (r = e.toString) && !n(o = r.call(e))) return o;if ("function" == typeof (r = e.valueOf) && !n(o = r.call(e))) return o;if (!t && "function" == typeof (r = e.toString) && !n(o = r.call(e))) return o;throw TypeError("Can't convert object to primitive value");
  };
}, function (e, t) {
  e.exports = function (e, t) {
    return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
  };
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var n,
      o = r(30),
      i = (n = o) && n.__esModule ? n : { default: n };var a = { parse: function parse(e) {
      if (!e || 0 == e.length) return {};var t = e.split("&");if (!t || 0 == t.length) return {};for (var r = {}, n = 0; n < t.length; n++) {
        var o = t[n].split("=");o && o.length > 1 && (r[o[0]] = decodeURIComponent(o[1]));
      }return r;
    }, stringify: function stringify(e) {
      if (!e) return "";var t = [];for (var r in e) {
        t.push(r + "=" + encodeURIComponent(e[r]));
      }return t.join("&");
    } },
      u = function () {
    var e,
        t = {};try {
      var r = window.location,
          n = a.parse(r.search.replace("?", "")),
          o = r.hash || "",
          u = o.indexOf("?");e = u > 0 ? o.substr(0, u) : o, o = u > 0 ? o.substr(u + 1) : o.replace("#", ""), o = a.parse(o), (0, i.default)(t, n), (0, i.default)(t, o);
    } catch (e) {}return { route: e, query: t, parse: a.parse, stringify: a.stringify };
  }();t.default = u;
}, function (e, t, r) {
  e.exports = { default: r(31), __esModule: !0 };
}, function (e, t, r) {
  r(32), e.exports = r(0).Object.assign;
}, function (e, t, r) {
  var n = r(5);n(n.S + n.F, "Object", { assign: r(33) });
}, function (e, t, r) {
  "use strict";
  var n = r(1),
      o = r(34),
      i = r(45),
      a = r(46),
      u = r(47),
      s = r(9),
      c = Object.assign;e.exports = !c || r(4)(function () {
    var e = {},
        t = {},
        r = Symbol(),
        n = "abcdefghijklmnopqrst";return e[r] = 7, n.split("").forEach(function (e) {
      t[e] = e;
    }), 7 != c({}, e)[r] || Object.keys(c({}, t)).join("") != n;
  }) ? function (e, t) {
    for (var r = u(e), c = arguments.length, d = 1, f = i.f, l = a.f; c > d;) {
      for (var p, h = s(arguments[d++]), g = f ? o(h).concat(f(h)) : o(h), m = g.length, w = 0; m > w;) {
        p = g[w++], n && !l.call(h, p) || (r[p] = h[p]);
      }
    }return r;
  } : c;
}, function (e, t, r) {
  var n = r(35),
      o = r(44);e.exports = Object.keys || function (e) {
    return n(e, o);
  };
}, function (e, t, r) {
  var n = r(7),
      o = r(8),
      i = r(37)(!1),
      a = r(40)("IE_PROTO");e.exports = function (e, t) {
    var r,
        u = o(e),
        s = 0,
        c = [];for (r in u) {
      r != a && n(u, r) && c.push(r);
    }for (; t.length > s;) {
      n(u, r = t[s++]) && (~i(c, r) || c.push(r));
    }return c;
  };
}, function (e, t) {
  var r = {}.toString;e.exports = function (e) {
    return r.call(e).slice(8, -1);
  };
}, function (e, t, r) {
  var n = r(8),
      o = r(38),
      i = r(39);e.exports = function (e) {
    return function (t, r, a) {
      var u,
          s = n(t),
          c = o(s.length),
          d = i(a, c);if (e && r != r) {
        for (; c > d;) {
          if ((u = s[d++]) != u) return !0;
        }
      } else for (; c > d; d++) {
        if ((e || d in s) && s[d] === r) return e || d || 0;
      }return !e && -1;
    };
  };
}, function (e, t, r) {
  var n = r(11),
      o = Math.min;e.exports = function (e) {
    return e > 0 ? o(n(e), 9007199254740991) : 0;
  };
}, function (e, t, r) {
  var n = r(11),
      o = Math.max,
      i = Math.min;e.exports = function (e, t) {
    return (e = n(e)) < 0 ? o(e + t, 0) : i(e, t);
  };
}, function (e, t, r) {
  var n = r(41)("keys"),
      o = r(43);e.exports = function (e) {
    return n[e] || (n[e] = o(e));
  };
}, function (e, t, r) {
  var n = r(0),
      o = r(2),
      i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});(e.exports = function (e, t) {
    return i[e] || (i[e] = void 0 !== t ? t : {});
  })("versions", []).push({ version: n.version, mode: r(42) ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
}, function (e, t) {
  e.exports = !0;
}, function (e, t) {
  var r = 0,
      n = Math.random();e.exports = function (e) {
    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + n).toString(36));
  };
}, function (e, t) {
  e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function (e, t) {
  t.f = Object.getOwnPropertySymbols;
}, function (e, t) {
  t.f = {}.propertyIsEnumerable;
}, function (e, t, r) {
  var n = r(10);e.exports = function (e) {
    return Object(n(e));
  };
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });t.default = { _ajax: function _ajax(e, t, r) {
      if (e) {
        var n = new XMLHttpRequest(),
            o = setTimeout(function () {
          n.abort(), console.error("XMLHttpRequest abort"), r && r({ success: !1, msg: "timeout abort" });
        }, 1e4);n.onreadystatechange = function () {
          4 === n.readyState && (clearTimeout(o), 200 === n.status ? r && r({ success: !0, status: n.status, responseText: n.responseText }) : (console.error("Problem retrieving XML data"), r && r({ success: !1, status: n.status, msg: "status not 200" })));
        }, n.open("POST", e, !0), n.setRequestHeader("Content-type", "application/json; charset=UTF-8"), n.send(t);
      }
    } };
}, function (e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var n = decodeURIComponent,
      o = encodeURIComponent;function i(e, t) {
    try {
      return t(e);
    } catch (t) {
      return e;
    }
  }t.default = { parse: function parse(e, t) {
      var r = {};try {
        if ("string" != typeof e) throw new TypeError("argument str must be a string");for (var o = t || {}, a = e.split(/; */), u = o.decode || n, s = 0; s < a.length; s++) {
          var c = a[s],
              d = c.indexOf("=");if (!(d < 0)) {
            var f = c.substr(0, d).trim(),
                l = c.substr(++d, c.length).trim();'"' == l[0] && (l = l.slice(1, -1)), null == r[f] && (r[f] = i(l, u));
          }
        }
      } catch (e) {}return r;
    }, serialize: function serialize(e, t, r) {
      var n = r || {},
          i = n.encode || o,
          a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;if ("function" != typeof i) throw new TypeError("option encode is invalid");if (!a.test(e)) throw new TypeError("argument name is invalid");var u = i(t);if (u && !a.test(u)) throw new TypeError("argument val is invalid");var s = e + "=" + u;if (null != n.maxAge) {
        var c = n.maxAge - 0;if (isNaN(c)) throw new Error("maxAge should be a Number");s += "; Max-Age=" + Math.floor(c);
      }if (n.domain) {
        if (!a.test(n.domain)) throw new TypeError("option domain is invalid");s += "; Domain=" + n.domain;
      }if (n.path) {
        if (!a.test(n.path)) throw new TypeError("option path is invalid");s += "; Path=" + n.path;
      }if (n.expires) {
        if ("function" != typeof n.expires.toUTCString) throw new TypeError("option expires is invalid");s += "; Expires=" + n.expires.toUTCString();
      }if (n.httpOnly && (s += "; HttpOnly"), n.secure && (s += "; Secure"), n.sameSite) switch ("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {case !0:
          s += "; SameSite=Strict";break;case "lax":
          s += "; SameSite=Lax";break;case "strict":
          s += "; SameSite=Strict";break;case "none":
          s += "; SameSite=None";break;default:
          throw new TypeError("option sameSite is invalid");}return s;
    }, cookieDomain: function cookieDomain() {
      var e, t;try {
        if (t = window.location.hostname, /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(t)) e = [window.location.hostname];else {
          var r = window.location.hostname.split(".");e = r && r.length >= 2 && ["." + r.slice(-2).join(".")] || [window.location.hostname];
        }
      } catch (r) {
        e = [window.location.hostname];
      }return e;
    } };
}]);

/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "srBq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "560a01598c88aa3539f6eb0b287e1fa9.png";

/***/ }),

/***/ "sthW":
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__("vJkY"),
    win = "object" == typeof window ? window : {},
    _catch = "catch",
    oFetch = win.__oFetch_ || win.fetch;

oFetch = "function" == typeof oFetch ? oFetch : undefined, module.exports = function (e, o) {
    var t = -1;
    "object" == typeof e && (t = e.z, e = util.serialize(e));
    var n = o + e;
    if (oFetch) return oFetch(n, {
        method: "HEAD",
        mode: "no-cors"
    })[_catch](util.noop);
    if (win.document && win.document.createElement) {
        var c = "__request_hold_" + t,
            i = win[c] = new Image();
        i.onload = i.onerror = function () {
            win[c] = undefined;
        }, i.src = n, i = null;
    }
};

/***/ }),

/***/ "tKvs":
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__("vJkY"),
    Reporter = __webpack_require__("25KW"),
    webSender = __webpack_require__("sthW"),
    webPost = __webpack_require__("OezT"),
    win = util.win,
    doc = win.document,
    validFn = /^(error|api|speed|sum|avg|percent|custom|msg|setPage|setConfig|behavior|performance)$/,
    Browser = function Browser(e) {
    var r = this;
    return Reporter.call(r, e), r._initialPage = e.page && util.safetyCall(e.page, [], e.page + "") || null, r._health = {
        errcount: 0,
        apisucc: 0,
        apifail: 0
    }, r.beforeSend = function (e, t) {
        "error" === e ? r._health.errcount++ : "api" === e && r._health[t.success ? "apisucc" : "apifail"]++;
    }, !1 !== e.enableInstanceAutoSend && (r.initHandler(), r.initHook(), r.initFmpObserver(1e4), r._conf && r._conf.behavior && r.initBehavior()), Object.defineProperty && win.addEventListener && Object.defineProperty(r, "pipe", {
        set: r.sendPipe
    }), r;
};

Browser.prototype = util.createObject(Reporter.prototype), util.ext(Reporter._root.dftCon, {
    uid: null,
    ignoreUrlPath: null,
    ignoreApiPath: null,
    urlHelper: [{
        rule: /\/([a-z\-_]+)?\d{2,20}/g,
        target: "/$1**"
    }, /\/$/],
    apiHelper: {
        rule: /(\w+)\/\d{2,}/g,
        target: "$1"
    },
    ignoreUrlCase: !0,
    imgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
    disableHook: !1,
    autoSendPv: !0,
    enableSPA: !1,
    enableLinkTrace: !1,
    sendResource: !0,
    behavior: !0,
    parseHash: function parseHash(e) {
        return (e ? util.cutUrlSearch(e.replace(/^#\/?/, "")) : "") || "[index]";
    },
    parseResponse: function parseResponse(e) {
        if (!e || "object" != typeof e) return {};
        var r = e.code,
            t = e.msg || e.message || e.subMsg || e.errorMsg || e.ret || e.errorResponse || "";
        return "object" == typeof t && (r = r || t.code, t = t.msg || t.message || t.info || t.ret || JSON.stringify(t)), {
            msg: t,
            code: r,
            success: !0
        };
    }
}), util.ext(Browser.prototype, {
    constructor: Browser,
    _super: Reporter,
    onReady: function onReady(e) {
        var r = this;
        if (r.hasReady) return e();
        "complete" === doc.readyState ? (r.hasReady = !0, e()) : util.on(win, "load", function () {
            r.hasReady = !0, e();
        }, !0);
    },
    getPage: function getPage(e) {
        var r = this._conf,
            t = r.page,
            i = location,
            o = i.host + i.pathname;
        return t && !e ? util.safetyCall(t, [], t + "") : this._initialPage || util.filterByRule(r.ignoreUrlCase ? o.toLowerCase() : o, r.ignoreUrlPath ? r.ignoreUrlPath : r.urlHelper);
    },
    setPage: function setPage(e, r) {
        var t = this,
            i = t.prevPage;
        if (!1 !== r) {
            if (!e || e === i) return t;
            t.prevPage = e, clearTimeout(t.sendPVTimmer), t.handleUnload(1), t.resetSession(), t.sendPVTimmer = setTimeout(function () {
                t.sendPV();
            }, 10);
        } else t.prevPage = e;
        return t._conf.page = e, t;
    },
    setConfig: function setConfig(e, r) {
        if (e && "object" == typeof e) {
            util.verifyConfig(e), e = this.setImgUrl(e);
            var t = this._conf;
            if (this._conf = util.ext({}, t, e), !r) {
                var i = "disableHook";
                i in e && t[i] !== e[i] && (e[i] ? this.removeHook() : this.addHook()), (i = "enableSPA") in e && t[i] !== e[i] && this.bindHashChange(e[i]);
            }
        }
    },
    sendRequest: function sendRequest(e) {
        webSender(e, this.getConfig("imgUrl"));
    },
    postData: function postData(e, r) {
        var t = {};
        t[r] = e[r], delete e[r];
        var i = "";
        "object" == typeof e && (i = util.serialize(e)), webPost(t, this.getConfig("imgUrl") + i + "&post_res=");
    },
    sendPipe: function sendPipe(e) {
        var r = this;
        if (!e || !e.length) return r;
        try {
            if ("Array" === util.T(e[0])) return util.each(e, function (e) {
                return r.sendPipe(e);
            });
            if ("Array" !== util.T(e)) return r;
            var t = e.shift();
            if (!validFn.test(t)) return r;
            r[t].apply(r, e);
        } catch (i) {
            return util.warn("[retcode] error in sendPipe", i), r;
        }
    },
    sendHealth: function sendHealth() {
        var e = util.ext({}, this._health);
        e.healthy = e.errcount > 0 ? 0 : 1, e.begin = Date.now();
        var r = e.begin - this.sBegin;
        e.stay = r, this._lg("health", e, 1), this._health = {
            errcount: 0,
            apisucc: 0,
            apifail: 0
        };
    },
    createInstance: function createInstance(e) {
        e = util.ext({
            pid: this._conf.pid
        }, e);
        var r = this.__proto__.constructor(e);
        return e.page && r.sendPV(), r;
    }
}), __webpack_require__("jNld")(Browser, win), __webpack_require__("Hl5W")(Browser, win, doc), __webpack_require__("Zfop")(Browser, win, doc), __webpack_require__("vHh0")(Browser, win), __webpack_require__("w6ya")(Browser, win), Browser._super = Reporter, Browser._root = Reporter._root, Reporter.Browser = Browser, module.exports = Browser;

/***/ }),

/***/ "vHh0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (e, t) {
    var a = __webpack_require__("vJkY"),
        n = null,
        r = function r(e, t, n, _r, o, i, s, p, l, c) {
        var g = a.J(o) || null,
            u = a.safetyCall(t, [g, _r], null);
        if (!u) return !1;
        var f = u.code || i,
            h = !("success" in u) || u.success;
        e.api(n, h, s, f, u.msg, p, l, c);
    },
        o = "fetch",
        i = "__oFetch_",
        s = "__oXMLHttpRequest_",
        p = "XMLHttpRequest";
    return a.ext(e.prototype, {
        removeHook: function removeHook(e, a) {
            return n && (a || this === n) ? (t[i] && (t[o] = t[i], delete t[i]), t[s] && (t[p] = t[s], delete t[s]), n = null, this) : this;
        },
        addHook: function addHook(e) {
            return !e && n ? this : (n || (function () {
                if ("function" == typeof t[o]) {
                    var e = t[o];
                    t[i] = e, t[o] = function (o, i) {
                        var s = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments),
                            p = n;
                        if (!p || !p.api) return e.apply(t, s);
                        if (i && ("HEAD" === i.method || "no-cors" === i.mode)) return e.apply(t, s);
                        var l = Date.now(),
                            c = p._conf,
                            g = (o && "string" != typeof o ? o.url : o) || "",
                            u = g;
                        if (g = a.cutUrlSearch(g), !a.checkAPI(g, !0)) return e.apply(t, s);
                        g = a.filterByRule(g, c.ignoreApiPath ? c.ignoreApiPath : c.apiHelper);
                        var f = c.enableLinkTrace,
                            h = "",
                            y = "",
                            d = p.getConfig("pid");
                        if (f) {
                            var E = "";
                            try {
                                E = location.origin ? location.origin : location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
                            } catch (T) {
                                E = "";
                            }
                            if (a.checkSameOrigin(u, E)) {
                                if (o && "string" != typeof o) try {
                                    if (s[0].headers && "function" == typeof s[0].headers.get && "function" == typeof s[0].headers.append) {
                                        var I = s[0].headers.get("EagleEye-TraceID"),
                                            D = s[0].headers.get("EagleEye-SessionID"),
                                            v = s[0].headers.get("EagleEye-pAppName");
                                        I ? h = I : (h = p.getTraceId()["EagleEye-TraceID"], s[0].headers.append("EagleEye-TraceID", h)), D ? y = D : (y = p.getSessionId()["EagleEye-SessionID"], s[0].headers.append("EagleEye-SessionID", y)), v || s[0].headers.append("EagleEye-pAppName", d);
                                    }
                                } catch (S) {
                                    a.warn("[retcode] fetch failed to set header, exception is :\n" + S);
                                }
                                i && (i.headers = i.headers ? i.headers : {}, i.headers["EagleEye-TraceID"] ? h = i.headers["EagleEye-TraceID"] : (h = p.getTraceId()["EagleEye-TraceID"], i.headers["EagleEye-TraceID"] = h), i.headers["EagleEye-SessionID"] ? y = i.headers["EagleEye-SessionID"] : (y = p.getSessionId()["EagleEye-SessionID"], i.headers["EagleEye-SessionID"] = y), i.headers["EagleEye-pAppName"] || (i.headers["EagleEye-pAppName"] = d));
                            }
                        }
                        return e.apply(t, s).then(function (e) {
                            if (!p || !p.api) return e;
                            var t = e.clone(),
                                a = t.headers;
                            if (a && "function" == typeof a.get) {
                                var n = a.get("content-type");
                                if (n && !/(text)|(json)/.test(n)) return e;
                            }
                            var o = Date.now() - l;
                            return t.ok ? t.text().then(function (e) {
                                r(p, c.parseResponse, g, u, e, t.status || 200, o, l, h, y);
                            }) : p.api(g, !1, o, t.status || 404, t.statusText, l, h, y), e;
                        })["catch"](function (e) {
                            if (!p || !p.api) throw e;
                            var t = Date.now() - l;
                            throw p.api(g, !1, t, e.name || "Error", e.message, l, h, y), e;
                        });
                    }, t[o].toString = a.createFakeToString(o);
                }
            }(), function () {
                if ("function" == typeof t[p]) {
                    var e = t[p];
                    t[s] = e, t[p] = function (t) {
                        var o = new e(t),
                            i = n;
                        if (!i || !i.api || !o.addEventListener) return o;
                        var s,
                            p,
                            l,
                            c = o.send,
                            g = o.open,
                            u = o.setRequestHeader,
                            f = i._conf,
                            h = i.getConfig("enableLinkTrace"),
                            y = "",
                            d = "",
                            E = "";
                        return o.open = function (e, t) {
                            var n = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                            if (g.apply(o, n), l = t || "", p = a.cutUrlSearch(l), p = p ? a.filterByRule(p, f.ignoreApiPath ? f.ignoreApiPath : f.apiHelper) : "", h) {
                                var r = "";
                                try {
                                    r = location.origin ? location.origin : location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
                                } catch (s) {
                                    r = "";
                                }
                                a.checkSameOrigin(l, r) && u && "function" == typeof u && (y = i.getTraceId()["EagleEye-TraceID"], u.apply(o, ["EagleEye-TraceID", y]), d = i.getSessionId()["EagleEye-SessionID"], u.apply(o, ["EagleEye-SessionID", d]), E = i.getConfig("pid"), u.apply(o, ["EagleEye-pAppName", E]));
                            }
                        }, o.send = function () {
                            s = Date.now();
                            var e = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                            c.apply(o, e);
                        }, a.on(o, "readystatechange", function () {
                            if (p && 4 === o.readyState) {
                                var e = Date.now() - s;
                                if (o.status >= 200 && o.status <= 299) {
                                    var t = o.status || 200;
                                    if ("function" == typeof o.getResponseHeader) {
                                        var a = o.getResponseHeader("Content-Type");
                                        if (a && !/(text)|(json)/.test(a)) return;
                                    }
                                    o.responseType && "text" !== o.responseType ? i.api(p, !0, e, t, "", s, y, d) : r(i, f.parseResponse, p, l, o.responseText, t, e, s, y, d);
                                } else i.api(p, !1, e, o.status || "FAILED", o.statusText, s, y, d);
                            }
                        }), o;
                    }, t[p].toString = a.createFakeToString(p);
                }
            }()), n = this, this);
        },
        initHook: function initHook() {
            return this.hasInitHook ? this : (this.getConfig("disableHook") || this.addHook(), this.hasInitHook = !0, this);
        }
    }), e;
};

/***/ }),

/***/ "vJkY":
/***/ (function(module, exports) {

Date.now = Date.now || function () {
    return new Date().getTime();
};

var SEQUENCE = Date.now(),
    noop = function noop() {},
    getCwarn = function getCwarn() {
    var t = "object" == typeof console ? console.warn : noop;
    try {
        var e = {
            warn: t
        };
        e.warn.call(e);
    } catch (n) {
        return noop;
    }
    return t;
},
    util = {
    noop: noop,
    warn: getCwarn(),
    key: "__bl",
    win: "object" == typeof window && window.document ? window : undefined,
    regionMap: {
        cn: "https://arms-retcode.aliyuncs.com/r.png?",
        sg: "https://arms-retcode-sg.aliyuncs.com/r.png?",
        sg_2: "https://retcode-sg-lazada.arms.aliyuncs.com/r.png?",
        daily: "http://arms-retcode-daily.alibaba.net/r.png?",
        daily_2: "https://arms-retcode-daily.alibaba.net/r.png?",
        us: "https://retcode-us-west-1.arms.aliyuncs.com/r.png?"
    },
    defaultImgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
    createObject: function createObject(t) {
        if (Object.create) return Object.create(t);
        var e = function e() {};
        return e.prototype = t, new e();
    },
    each: function each(t, e) {
        var n = 0,
            r = t.length;
        if (this.T(t, "Array")) for (; n < r && !1 !== e.call(t[n], t[n], n); n++) {} else for (n in t) {
            if (!1 === e.call(t[n], t[n], n)) break;
        }return t;
    },
    safetyCall: function safetyCall(t, e, n) {
        if ("function" != typeof t) return n;
        try {
            return t.apply(this, e);
        } catch (r) {
            return n;
        }
    },
    T: function T(t, e) {
        var n = Object.prototype.toString.call(t).substring(8).replace("]", "");
        return e ? n === e : n;
    },
    filterByRule: function filterByRule(t, e) {
        if (!t) return "";
        if (!e) return t;
        var n = this,
            r = n.T(e);
        return "Function" === r ? n.safetyCall(e, [t], t) : "Array" === r ? (this.each(e, function (e) {
            t = n.filterByRule(t, e);
        }), t) : "Object" === r ? t.replace(e.rule, e.target || "") : t.replace(e, "");
    },
    ignoreByRule: function ignoreByRule(t, e) {
        if (!t || !e) return !1;
        if ((this.isString(e) || e.source || "Function" === this.T(e)) && (e = [e]), !this.isArray(e)) return util.warn("[arms] invalid rules of ignore config, (list of) String/RegExp/Funcitons are available"), !1;
        for (var n, r = [], o = 0, i = e.length; o < i; o++) {
            if (n = e[o], this.isString(n)) r.push(n.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"));else if (n && n.source) r.push(n.source);else if (n && "Function" === this.T(n) && !0 === this.safetyCall(n, [t], !1)) return !0;
        }var a = new RegExp(r.join("|"), "i");
        return !!(r.length && a.test && a.test(t));
    },
    J: function J(t) {
        if (!t || "string" != typeof t) return t;
        var e = null;
        try {
            e = JSON.parse(t);
        } catch (n) {}
        return e;
    },
    pick: function pick(t) {
        return 1 === t || 1 === Math.ceil(Math.random() * t);
    },
    verifyConfig: function verifyConfig(t) {
        if ("sample" in t) {
            var e = t.sample,
                n = e;
            e && /^\d+(\.\d+)?%$/.test(e) && (n = parseInt(100 / parseFloat(e))), 0 < n && 1 > n && (n = parseInt(1 / n)), n >= 1 && n <= 100 ? t.sample = n : delete t.sample;
        }
        return t;
    },
    on: function on(t, e, n, r) {
        return t.addEventListener ? t.addEventListener(e, function o(i) {
            r && t.removeEventListener(e, o, !1), n.call(this, i);
        }, !1) : t.attachEvent && t.attachEvent("on" + e, function i(o) {
            r && t.detachEvent("on" + e, i), n.call(this, o);
        }), this;
    },
    off: function off(t, e, n) {
        return n ? (t.removeEventListener ? t.removeEventListener(e, n) : t.detachEvent && t.detachEvent(e, n), this) : this;
    },
    delay: function delay(t, e) {
        return -1 === e ? (t(), null) : setTimeout(t, e || 0);
    },
    ext: function ext(t) {
        for (var e = 1, n = arguments.length; e < n; e++) {
            var r = arguments[e];
            for (var o in r) {
                Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
            }
        }
        return t;
    },
    sub: function sub(t, e) {
        var n = {};
        return this.each(t, function (t, r) {
            -1 !== e.indexOf(r) && (n[r] = t);
        }), n;
    },
    uu: function uu() {
        for (var t, e, n = 20, r = new Array(n), o = Date.now().toString(36).split(""); n-- > 0;) {
            e = (t = 36 * Math.random() | 0).toString(36), r[n] = t % 3 ? e : e.toUpperCase();
        }for (var i = 0; i < 8; i++) {
            r.splice(3 * i + 2, 0, o[i]);
        }return r.join("");
    },
    seq: function seq() {
        return (SEQUENCE++).toString(36);
    },
    decode: function decode(t) {
        try {
            t = decodeURIComponent(t);
        } catch (e) {}
        return t;
    },
    encode: function encode(t, e) {
        try {
            t = e ? encodeURIComponent(t).replace(/\(/g, "%28").replace(/\)/g, "%29") : encodeURIComponent(t);
        } catch (n) {}
        return t;
    },
    serialize: function serialize(t) {
        t = t || {};
        var e = [];
        for (var n in t) {
            Object.prototype.hasOwnProperty.call(t, n) && t[n] !== undefined && e.push(n + "=" + this.encode(t[n], "msg" === n));
        }return e.join("&");
    },
    checkAPI: function checkAPI(t, e) {
        if (!t || "string" != typeof t) return !1;
        var n = /arms-retcode[\w-]*\.aliyuncs/.test(t);
        return !n && e && (n = /(\.png)|(\.gif)|(alicdn\.com)/.test(t)), !n;
    },
    checkAutoError: function checkAutoError(t) {
        return !(!t || !t.message) && !/failed[\w\s]+fetch/i.test(t.message);
    },
    cutUrlSearch: function cutUrlSearch(t) {
        return t && "string" == typeof t ? t.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "") : "";
    },
    createFakeToString: function createFakeToString(t) {
        return function () {
            return t + "() { [native code] }";
        };
    },
    checkSameOrigin: function checkSameOrigin(t, e) {
        if (!e || !t) return !1;
        var n = "//" + e.split("/")[2];
        return t === e || t.slice(0, e.length + 1) === e + "/" || t === n || t.slice(0, n.length + 1) === n + "/" || !/^(\/\/|http:|https:).*/.test(t);
    },
    getRandIP: function getRandIP() {
        for (var t = [], e = 0; e < 4; e++) {
            var n = Math.floor(256 * Math.random());
            t[e] = (n > 15 ? "" : "0") + n.toString(16);
        }
        return t.join("");
    },
    getSortNum: function getSortNum(t) {
        return t ? (t += 1) >= 1e3 && t <= 9999 ? t : t < 1e3 ? t + 1e3 : t % 1e4 + 1e3 : 1e3;
    },
    getRandNum: function getRandNum(t) {
        return t && "string" == typeof t ? t.length < 5 ? this.getNum(5) : t.substring(t.length - 5) : this.getNum(5);
    },
    getNum: function getNum(t) {
        for (var e = [], n = 0; n < t; n++) {
            var r = Math.floor(16 * Math.random());
            e[n] = r.toString(16);
        }
        return e.join("");
    },
    isFunction: function isFunction(t) {
        return "function" == typeof t;
    },
    isPlainObject: function isPlainObject(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
    },
    isString: function isString(t) {
        return "[object String]" === Object.prototype.toString.call(t);
    },
    isArray: function isArray(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    },
    joinRegExp: function joinRegExp(t) {
        for (var e, n = [], r = 0, o = t.length; r < o; r++) {
            e = t[r], this.isString(e) ? n.push(e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : e && e.source && n.push(e.source);
        }return new RegExp(n.join("|"), "i");
    }
};

module.exports = util;

/***/ }),

/***/ "w6ya":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (t, e) {
    var r = __webpack_require__("vJkY"),
        a = e.history || {},
        n = e.document,
        i = function i(t, r) {
        var a;
        e.CustomEvent ? a = new CustomEvent(t, {
            detail: r
        }) : ((a = n.createEvent("HTMLEvents")).initEvent(t, !1, !0), a.detail = r), e.dispatchEvent(a);
    },
        o = function o(t) {
        var e = a[t];
        "function" == typeof e && (a[t] = function (n, o, c) {
            var s = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments),
                u = location.href,
                h = e.apply(a, s);
            if (!c || "string" != typeof c) return h;
            if (c === u) return h;
            try {
                var l = u.split("#"),
                    p = c.split("#"),
                    y = r.cutUrlSearch(l[0]),
                    f = r.cutUrlSearch(p[0]),
                    v = l[1] && l[1].replace(/^\/?(.*)/, "$1"),
                    S = p[1] && p[1].replace(/^\/?(.*)/, "$1");
                y !== f ? i("historystatechange", f) : v !== S && i("historystatechange", S);
            } catch (d) {
                r.warn("[retcode] error in " + t + ": " + d);
            }
            return h;
        }, a[t].toString = r.createFakeToString(t));
    };
    r.ext(t.prototype, {
        hackHistoryState: function hackHistoryState() {
            return this.hasHackedHistoryState ? this : (o("pushState"), o("replaceState"), this.hasHackedHistoryState = !0, this);
        }
    });
};

/***/ }),

/***/ "wjQ2":
/***/ (function(module, exports) {

!function (t) {
  var e = {};function r(n) {
    if (e[n]) return e[n].exports;var o = e[n] = { i: n, l: !1, exports: {} };return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }r.m = t, r.c = e, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var o in t) {
      r.d(n, o, function (e) {
        return t[e];
      }.bind(null, o));
    }return n;
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return r.d(e, "a", e), e;
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.p = "", r(r.s = 40);
}([function (t, e) {
  var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = r);
}, function (t, e) {
  var r = t.exports = { version: "2.6.2" };"number" == typeof __e && (__e = r);
}, function (t, e, r) {
  var n = r(11),
      o = r(30),
      i = r(18),
      a = Object.defineProperty;e.f = r(3) ? Object.defineProperty : function (t, e, r) {
    if (n(t), e = i(e, !0), n(r), o) try {
      return a(t, e, r);
    } catch (t) {}if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");return "value" in r && (t[e] = r.value), t;
  };
}, function (t, e, r) {
  t.exports = !r(9)(function () {
    return 7 != Object.defineProperty({}, "a", { get: function get() {
        return 7;
      } }).a;
  });
}, function (t, e) {
  var r = {}.hasOwnProperty;t.exports = function (t, e) {
    return r.call(t, e);
  };
}, function (t, e, r) {
  var n = r(2),
      o = r(12);t.exports = r(3) ? function (t, e, r) {
    return n.f(t, e, o(1, r));
  } : function (t, e, r) {
    return t[e] = r, t;
  };
}, function (t, e, r) {
  var n = r(33),
      o = r(19);t.exports = function (t) {
    return n(o(t));
  };
}, function (t, e, r) {
  var n = r(22)("wks"),
      o = r(15),
      i = r(0).Symbol,
      a = "function" == typeof i;(t.exports = function (t) {
    return n[t] || (n[t] = a && i[t] || (a ? i : o)("Symbol." + t));
  }).store = n;
}, function (t, e) {
  t.exports = function (t) {
    return "object" == typeof t ? null !== t : "function" == typeof t;
  };
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  };
}, function (t, e, r) {
  var n = r(0),
      o = r(1),
      i = r(43),
      a = r(5),
      s = r(4),
      u = function u(t, e, r) {
    var c,
        f,
        d,
        l = t & u.F,
        p = t & u.G,
        h = t & u.S,
        v = t & u.P,
        g = t & u.B,
        m = t & u.W,
        y = p ? o : o[e] || (o[e] = {}),
        w = y.prototype,
        _ = p ? n : h ? n[e] : (n[e] || {}).prototype;for (c in p && (r = e), r) {
      (f = !l && _ && void 0 !== _[c]) && s(y, c) || (d = f ? _[c] : r[c], y[c] = p && "function" != typeof _[c] ? r[c] : g && f ? i(d, n) : m && _[c] == d ? function (t) {
        var e = function (_e) {
          function e(_x, _x2, _x3) {
            return _e.apply(this, arguments);
          }

          e.toString = function () {
            return _e.toString();
          };

          return e;
        }(function (e, r, n) {
          if (this instanceof t) {
            switch (arguments.length) {case 0:
                return new t();case 1:
                return new t(e);case 2:
                return new t(e, r);}return new t(e, r, n);
          }return t.apply(this, arguments);
        });return e.prototype = t.prototype, e;
      }(d) : v && "function" == typeof d ? i(Function.call, d) : d, v && ((y.virtual || (y.virtual = {}))[c] = d, t & u.R && w && !w[c] && a(w, c, d)));
    }
  };u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
}, function (t, e, r) {
  var n = r(8);t.exports = function (t) {
    if (!n(t)) throw TypeError(t + " is not an object!");return t;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
  };
}, function (t, e, r) {
  var n = r(32),
      o = r(23);t.exports = Object.keys || function (t) {
    return n(t, o);
  };
}, function (t, e) {
  t.exports = !0;
}, function (t, e) {
  var r = 0,
      n = Math.random();t.exports = function (t) {
    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + n).toString(36));
  };
}, function (t, e) {
  e.f = {}.propertyIsEnumerable;
}, function (t, e, r) {
  t.exports = { default: r(41), __esModule: !0 };
}, function (t, e, r) {
  var n = r(8);t.exports = function (t, e) {
    if (!n(t)) return t;var r, o;if (e && "function" == typeof (r = t.toString) && !n(o = r.call(t))) return o;if ("function" == typeof (r = t.valueOf) && !n(o = r.call(t))) return o;if (!e && "function" == typeof (r = t.toString) && !n(o = r.call(t))) return o;throw TypeError("Can't convert object to primitive value");
  };
}, function (t, e) {
  t.exports = function (t) {
    if (null == t) throw TypeError("Can't call method on  " + t);return t;
  };
}, function (t, e) {
  var r = Math.ceil,
      n = Math.floor;t.exports = function (t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? n : r)(t);
  };
}, function (t, e, r) {
  var n = r(22)("keys"),
      o = r(15);t.exports = function (t) {
    return n[t] || (n[t] = o(t));
  };
}, function (t, e, r) {
  var n = r(1),
      o = r(0),
      i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});(t.exports = function (t, e) {
    return i[t] || (i[t] = void 0 !== e ? e : {});
  })("versions", []).push({ version: n.version, mode: r(14) ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
}, function (t, e) {
  t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function (t, e) {
  e.f = Object.getOwnPropertySymbols;
}, function (t, e) {
  t.exports = {};
}, function (t, e, r) {
  var n = r(2).f,
      o = r(4),
      i = r(7)("toStringTag");t.exports = function (t, e, r) {
    t && !o(t = r ? t : t.prototype, i) && n(t, i, { configurable: !0, value: e });
  };
}, function (t, e, r) {
  e.f = r(7);
}, function (t, e, r) {
  var n = r(0),
      o = r(1),
      i = r(14),
      a = r(27),
      s = r(2).f;t.exports = function (t) {
    var e = o.Symbol || (o.Symbol = i ? {} : n.Symbol || {});"_" == t.charAt(0) || t in e || s(e, t, { value: a.f(t) });
  };
}, function (t, e, r) {
  "use strict";
  e.parse = function (t, e) {
    if ("string" != typeof t) throw new TypeError("argument str must be a string");for (var r = {}, o = e || {}, a = t.split(i), u = o.decode || n, c = 0; c < a.length; c++) {
      var f = a[c],
          d = f.indexOf("=");if (!(d < 0)) {
        var l = f.substr(0, d).trim(),
            p = f.substr(++d, f.length).trim();'"' == p[0] && (p = p.slice(1, -1)), null == r[l] && (r[l] = s(p, u));
      }
    }return r;
  }, e.serialize = function (t, e, r) {
    var n = r || {},
        i = n.encode || o;if ("function" != typeof i) throw new TypeError("option encode is invalid");if (!a.test(t)) throw new TypeError("argument name is invalid");var s = i(e);if (s && !a.test(s)) throw new TypeError("argument val is invalid");var u = t + "=" + s;if (null != n.maxAge) {
      var c = n.maxAge - 0;if (isNaN(c)) throw new Error("maxAge should be a Number");u += "; Max-Age=" + Math.floor(c);
    }if (n.domain) {
      if (!a.test(n.domain)) throw new TypeError("option domain is invalid");u += "; Domain=" + n.domain;
    }if (n.path) {
      if (!a.test(n.path)) throw new TypeError("option path is invalid");u += "; Path=" + n.path;
    }if (n.expires) {
      if ("function" != typeof n.expires.toUTCString) throw new TypeError("option expires is invalid");u += "; Expires=" + n.expires.toUTCString();
    }n.httpOnly && (u += "; HttpOnly");n.secure && (u += "; Secure");if (n.sameSite) {
      var f = "string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite;switch (f) {case !0:
          u += "; SameSite=Strict";break;case "lax":
          u += "; SameSite=Lax";break;case "strict":
          u += "; SameSite=Strict";break;case "none":
          u += "; SameSite=None";break;default:
          throw new TypeError("option sameSite is invalid");}
    }return u;
  }, e.cookieDomain = function () {
    var t = void 0;try {
      if (r = window.location.hostname, /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(r)) t = [window.location.hostname];else {
        var e = window.location.hostname.split(".");t = e && e.length >= 2 && ["." + e.slice(-2).join(".")] || [window.location.hostname];
      }
    } catch (e) {
      t = [window.location.hostname];
    }var r;return t;
  };var n = decodeURIComponent,
      o = encodeURIComponent,
      i = /; */,
      a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(t, e) {
    try {
      return e(t);
    } catch (e) {
      return t;
    }
  }
}, function (t, e, r) {
  t.exports = !r(3) && !r(9)(function () {
    return 7 != Object.defineProperty(r(31)("div"), "a", { get: function get() {
        return 7;
      } }).a;
  });
}, function (t, e, r) {
  var n = r(8),
      o = r(0).document,
      i = n(o) && n(o.createElement);t.exports = function (t) {
    return i ? o.createElement(t) : {};
  };
}, function (t, e, r) {
  var n = r(4),
      o = r(6),
      i = r(46)(!1),
      a = r(21)("IE_PROTO");t.exports = function (t, e) {
    var r,
        s = o(t),
        u = 0,
        c = [];for (r in s) {
      r != a && n(s, r) && c.push(r);
    }for (; e.length > u;) {
      n(s, r = e[u++]) && (~i(c, r) || c.push(r));
    }return c;
  };
}, function (t, e, r) {
  var n = r(34);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
    return "String" == n(t) ? t.split("") : Object(t);
  };
}, function (t, e) {
  var r = {}.toString;t.exports = function (t) {
    return r.call(t).slice(8, -1);
  };
}, function (t, e, r) {
  var n = r(19);t.exports = function (t) {
    return Object(n(t));
  };
}, function (t, e, r) {
  "use strict";
  var n = r(14),
      o = r(10),
      i = r(37),
      a = r(5),
      s = r(25),
      u = r(63),
      c = r(26),
      f = r(66),
      d = r(7)("iterator"),
      l = !([].keys && "next" in [].keys()),
      p = function p() {
    return this;
  };t.exports = function (t, e, r, h, v, g, m) {
    u(r, e, h);var y,
        w,
        _,
        x = function x(t) {
      if (!l && t in P) return P[t];switch (t) {case "keys":case "values":
          return function () {
            return new r(this, t);
          };}return function () {
        return new r(this, t);
      };
    },
        b = e + " Iterator",
        S = "values" == v,
        O = !1,
        P = t.prototype,
        E = P[d] || P["@@iterator"] || v && P[v],
        L = E || x(v),
        I = v ? S ? x("entries") : L : void 0,
        A = "Array" == e && P.entries || E;if (A && (_ = f(A.call(new t()))) !== Object.prototype && _.next && (c(_, b, !0), n || "function" == typeof _[d] || a(_, d, p)), S && E && "values" !== E.name && (O = !0, L = function L() {
      return E.call(this);
    }), n && !m || !l && !O && P[d] || a(P, d, L), s[e] = L, s[b] = p, v) if (y = { values: S ? L : x("values"), keys: g ? L : x("keys"), entries: I }, m) for (w in y) {
      w in P || i(P, w, y[w]);
    } else o(o.P + o.F * (l || O), e, y);return y;
  };
}, function (t, e, r) {
  t.exports = r(5);
}, function (t, e, r) {
  var n = r(11),
      o = r(64),
      i = r(23),
      a = r(21)("IE_PROTO"),
      s = function s() {},
      _u = function u() {
    var t,
        e = r(31)("iframe"),
        n = i.length;for (e.style.display = "none", r(65).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _u = t.F; n--;) {
      delete _u.prototype[i[n]];
    }return _u();
  };t.exports = Object.create || function (t, e) {
    var r;return null !== t ? (s.prototype = n(t), r = new s(), s.prototype = null, r[a] = t) : r = _u(), void 0 === e ? r : o(r, e);
  };
}, function (t, e, r) {
  var n = r(32),
      o = r(23).concat("length", "prototype");e.f = Object.getOwnPropertyNames || function (t) {
    return n(t, o);
  };
}, function (t, e, r) {
  "use strict";
  var n,
      o,
      i = s(r(17)),
      a = s(r(49));function s(t) {
    return t && t.__esModule ? t : { default: t };
  }n = new a.default(), o = n.bizScenario, window._to && ((0, i.default)(n, window._to), n.bizScenario = o || window._to.bizScenario), n.start(), window.Tracker = n;
}, function (t, e, r) {
  r(42), t.exports = r(1).Object.assign;
}, function (t, e, r) {
  var n = r(10);n(n.S + n.F, "Object", { assign: r(45) });
}, function (t, e, r) {
  var n = r(44);t.exports = function (t, e, r) {
    if (n(t), void 0 === e) return t;switch (r) {case 1:
        return function (r) {
          return t.call(e, r);
        };case 2:
        return function (r, n) {
          return t.call(e, r, n);
        };case 3:
        return function (r, n, o) {
          return t.call(e, r, n, o);
        };}return function () {
      return t.apply(e, arguments);
    };
  };
}, function (t, e) {
  t.exports = function (t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
  };
}, function (t, e, r) {
  "use strict";
  var n = r(13),
      o = r(24),
      i = r(16),
      a = r(35),
      s = r(33),
      u = Object.assign;t.exports = !u || r(9)(function () {
    var t = {},
        e = {},
        r = Symbol(),
        n = "abcdefghijklmnopqrst";return t[r] = 7, n.split("").forEach(function (t) {
      e[t] = t;
    }), 7 != u({}, t)[r] || Object.keys(u({}, e)).join("") != n;
  }) ? function (t, e) {
    for (var r = a(t), u = arguments.length, c = 1, f = o.f, d = i.f; u > c;) {
      for (var l, p = s(arguments[c++]), h = f ? n(p).concat(f(p)) : n(p), v = h.length, g = 0; v > g;) {
        d.call(p, l = h[g++]) && (r[l] = p[l]);
      }
    }return r;
  } : u;
}, function (t, e, r) {
  var n = r(6),
      o = r(47),
      i = r(48);t.exports = function (t) {
    return function (e, r, a) {
      var s,
          u = n(e),
          c = o(u.length),
          f = i(a, c);if (t && r != r) {
        for (; c > f;) {
          if ((s = u[f++]) != s) return !0;
        }
      } else for (; c > f; f++) {
        if ((t || f in u) && u[f] === r) return t || f || 0;
      }return !t && -1;
    };
  };
}, function (t, e, r) {
  var n = r(20),
      o = Math.min;t.exports = function (t) {
    return t > 0 ? o(n(t), 9007199254740991) : 0;
  };
}, function (t, e, r) {
  var n = r(20),
      o = Math.max,
      i = Math.min;t.exports = function (t, e) {
    return (t = n(t)) < 0 ? o(t + e, 0) : i(t, e);
  };
}, function (t, r, n) {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });var o = p(n(50)),
      i = p(n(17)),
      a = p(n(52)),
      s = p(n(53)),
      u = p(n(57)),
      c = p(n(82)),
      f = p(n(83)),
      d = p(n(84)),
      l = p(n(29));function p(t) {
    return t && t.__esModule ? t : { default: t };
  }var h = "1.0.6",
      v = function () {
    function t() {
      (0, a.default)(this, t), this.doc = document, this.Router = {}, this.expoObj = {}, this.cfg = { pageSeedId: "H5_MTRACKER_AP_PAGE", clkSeedId: "H5_MTRACKER_AP_CLK", calcSeedId: "H5_MTRACKER_AP_CALC", expoSeedId: "H5_MTRACKER_AP_EXPO", syslogSeedId: "H5_MTRACKER_AP_SYSLOG" }, this.h5version = null, this.version = null, this.mtrVer = h, this.mtrDebug = !1, this.mPageState = null, this.platformType = "", this.bizScenario = null, this.autoStart = !0, this.autoError = !0, this.autoClick = !0, this.eventType = "touchstart", this.autoExpo = !1, this.bizType = "H5behavior", this.expotTimeout = 300, this.servers = [], this.expoSection = [-.3, .3], this.appId = "", this.appName = "", this.url = null, this.fullURL = null, this._ready = !1, this.sendSuccess = 0, this.sendCounter = 0, this._fnCacheList = [], this.ld = {}, this.saveUserId = this._getUserId(), this.sn = 0, this.visitorList = [], (0, i.default)(this, u.default), (0, i.default)(this, c.default), (0, i.default)(this, f.default), (0, i.default)(this, d.default);
    }return (0, s.default)(t, [{ key: "_start", value: function value() {
        var t = this;t.initListener(t), t._ready ? (t._beforeApiReady(), t._afterApiReady(t)) : t._trackerReady(function () {
          t._beforeApiReady(t), t._apiReady(t), t._afterApiReady(t);
        });
      } }, { key: "start", value: function value() {
        this.sn = window.localStorage["mtr-sn"] || 0, this.ref = this._refFromStorage(), this._storeRef(this.url), "string" == typeof this.server ? this.servers.push(this.server) : Array.isArray(this.server) && (this.servers = this.servers.concat(this.server)), this.autoStart && this._start();
      } }, { key: "doExpo", value: function value() {
        var t = this;t._ready ? this.autoExpo && t._expoIt() : this._fnCacheList.push(function () {
          t.autoExpo && t._expoIt();
        });
      } }, { key: "expoType", value: function value(t) {
        var e = this;e.scrolling = !0;document.addEventListener("scroll", function r() {
          e.scrolling && (e.scrolling = !1, document.removeEventListener("scroll", r), setTimeout(function () {
            t(), e.scrolling = !0, document.addEventListener("scroll", r);
          }, e.expotTimeout));
        });
      } }, { key: "_send", value: function value(t, e) {
        var r = this,
            n = this;this.servers.forEach(function (o) {
          r._ajax(o, t, n, e);
        });
      } }, { key: "_getUserId", value: function value() {
        var t = l.default.parse(document.cookie);return t && t["mtr-userid"];
      } }, { key: "_saveUserId", value: function value(t) {
        if ("undefined" != t && "null" !== t) {
          var e = l.default.serialize("mtr-userid", t, { path: "/", expires: new Date(new Date().getTime() + 31536e7), domain: l.default.cookieDomain() });document.cookie = e;
        }
      } }, { key: "setUserId", value: function value(t) {
        if (this._trueUserId() !== t) {
          var e = "VISITOR" === this._trueUserId() && this.visitorList.length;if (this.userId = t, this._saveUserId(t), e) {
            for (; this.visitorList && this.visitorList.length;) {
              var r = this.visitorList.shift();(r = r && r.replace("VISITOR", this.userId).replace("VISITOR", this.userId)) && this._send(r);
            }this.mtrDebug && console.log("Mtr VISITOR resended");
          }
        }
      } }, { key: "_trueUserId", value: function value() {
        var t = this.userId || this.user_id || this.roleId || this.role_id || this.Router.query.userId || this._getUserId() || "VISITOR";return this.saveUserId !== t && this._saveUserId(t), t;
      } }, { key: "_getSessionId", value: function value() {
        return this.sessionId;
      } }, { key: "_getUUid", value: function value() {
        return this.UUid;
      } }, { key: "_formatRemoteParam", value: function value(t) {
        var e = { user_id: this._trueUserId(), fullURL: this.fullURL, mPageTitle: this.doc.title, txSuc: this.sendSuccess, txCnt: this.sendCounter };return this.appName && (e.appName = this.appName), this.bizType && (e.bizType = this.bizType), this.version && (e.version = this.version), this.bizScenario && (e.mBizScenario = this.bizScenario), this.mPageState && (e.mPageState = this.mPageState), this.mPlatformType && (e.mPlatformType = this.mPlatformType), this.deviceModel && (e.deviceModel = this.deviceModel), this.Router.query && (e = (0, i.default)(e, this.Router.query)), t.param4 ? (0, i.default)(t.param4, e) : t.param4 = e, t;
      } }, { key: "_packFinalData", value: function value(t) {
        t.param4 = (0, i.default)({ mtrVer: this.mtrVer || "-", mtrSeed: t.param2 || "", mtrValue: t.param3 || "", userAgent: navigator.userAgent }, t.param4);var e = ["D-VM", this.dateFormat(Date.now()), (this.appId || "") + "_" + "H5".toUpperCase() + "-" + (this.workspaceId || ""), this.h5version || "-", "2", "-", this._getSessionId(), this._trueUserId(), t.seedId, "-", "-", "-", "-", "-", "-", t.seedId, this._encodeStr(this.fullURL || "-"), "H5behavior", "c", this._encodeStr(t.param1 || "-"), t.param2 || "-", t.param3 || "-", this._formatExinfoParam(t.param4) || "-", this.bizScenario || "-", this.sn++, this._getUUid(), "-", "-", this._encodeStr(this.ref), this._encodeStr(this.url), "-", "-", "-", this.os, this.osVersion, "-", "-", "-", navigator.language || navigator.userLanguage || "-", "-", "-", "-", "-", "-", "-", screen.width + "x" + screen.height, "-", "-"];return this.mtrDebug && console.log(e), e.join();
      } }, { key: "_remoteLog", value: function value(t, e) {
        this._formatRemoteParam(t);var r = this._packFinalData(t);this._send(r, e), "VISITOR" === this._trueUserId() && this.visitorList.push(r);
      } }, { key: "setPageState", value: function value(t, e) {
        this.mPageState = t, e && this.Router.setHash({ mPageState: PageState }), this.logPv();
      } }, { key: "click", value: function value(t, e, r) {
        var n = { seedId: this.cfg.clkSeedId, param1: this.url, param2: this._encodeStr(t), param4: {} },
            o = this.dealExtra(e);this.extend(n.param4, o), this._remoteLog(n, r);
      } }, { key: "calc", value: function value(t, e, r) {
        var n = { seedId: this.cfg.calcSeedId, param1: this.url, param2: this._encodeStr(t), param3: e, param4: r || {} };this._remoteLog(n);
      } }, { key: "logJump", value: function value(t, e, r) {
        if (t = t || this.doc.URL, !this.jumpPage || this.jumpPage != t) {
          var n = this.getHashCode(t),
              o = this.ld[n] || this.jo || this.ol || this.dr || this.st,
              a = Date.now(),
              s = a - o;this.jo = a, e = e || "-", r = r || {}, (0, i.default)(r, { currentPage: t, nextPage: e }), this.calc("PAGE_STAY", s, r), this.jumpPage = t;
        }
      } }, { key: "logLoad", value: function value(t, e) {
        var r = this;r.mtrDebug && console.log("logLoad"), r._ready ? r._logLoad(t, e) : this._fnCacheList.push(function () {
          r._logLoad(t, e);
        });
      } }, { key: "_logLoad", value: function value(t, e) {
        this._reload(this);var r = t || this.doc.URL;this.currentPage && this.currentPage != r && this.logJump(this.currentPage, r);var n = this.getHashCode(r);this.ld[n] = Date.now(), this.currentPage = r, this._remoteLog({ seedId: this.cfg.pageSeedId, param1: this.url, param2: this._encodeStr(t) || "PAGE_LOAD", param3: "", param4: e || {} });this.autoExpo && this._expoIt && setTimeout(this._expoIt(), 3e3);
      } }, { key: "logPv", value: function value(t, e, r) {
        var n = t;n || (n = { domReady: 0, onload: 0, bridgeReady: 0 }), e && (n.isResume = 1), this._remoteLog({ seedId: this.cfg.pageSeedId, param1: this.url, param2: e ? "PAGE_RESUME" : r ? "PAGE_READY" : "-", param3: "", param4: n }), this.currentPage = this.doc.URL;
      } }, { key: "log", value: function value(t) {
        this._remoteLog({ seedId: this.cfg.syslogSeedId, param1: this.url, param2: encodeURIComponent((0, o.default)(t)) });
      } }, { key: "err", value: function value(t, e) {
        this._remoteLog({ seedId: "MTRERR_" + this.appId + "_" + t, type: "error", param1: this.url, param2: encodeURIComponent((0, o.default)(e)) });
      } }, { key: "expo", value: function value(t, e, r) {
        var n = this.dealExtra(r);this._remoteLog({ seedId: this.cfg.expoSeedId, param1: this.url, param2: this._encodeStr(t), param3: e, param4: n || {} });
      } }, { key: "isExpo", value: function value(t) {
        var e = this.expoObj,
            r = this.expoSection[0],
            n = this.expoSection[1],
            o = e[t];return o >= r && o <= n;
      } }, { key: "initURL", value: function value(t, e, r) {
        var n = t,
            o = e;if (void 0 === this.Router.query.bizScenario || /bizScenario=/.test(n) || ((o = e || {}).bizScenario = o.bizScenario || this.Router.query.bizScenario), o) {
          var i = (/\?/.test(n) ? "&" : "?") + this.Router.stringify(o);/\#/.test(n) ? n = n.replace(/(.*)?\#(.*)?/, "$1" + i + "#$2") : n += i;
        }return e && (n += "#" + this.Router.stringify(r)), n;
      } }, { key: "pushWindow", value: function value(t, e, r) {
        t.url = this.initURL(t.url, e, r), this._pushWindow(t);
      } }, { key: "step", value: function value(t, r, n) {
        var o = { "mtr-aot-key": t, "mtr-aot-uniq": r },
            i = this.dealExtra(n);this.extend(o, i), this._remoteLog({ seedId: e.cfg.syslogSeedId, param1: e.url, param2: e.cfg.syslogSeedId, param4: o });
      } }]), t;
  }();r.default = v;
}, function (t, e, r) {
  t.exports = { default: r(51), __esModule: !0 };
}, function (t, e, r) {
  var n = r(1),
      o = n.JSON || (n.JSON = { stringify: JSON.stringify });t.exports = function (t) {
    return o.stringify.apply(o, arguments);
  };
}, function (t, e, r) {
  "use strict";
  e.__esModule = !0, e.default = function (t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  };
}, function (t, e, r) {
  "use strict";
  e.__esModule = !0;var n,
      o = r(54),
      i = (n = o) && n.__esModule ? n : { default: n };e.default = function () {
    function t(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, i.default)(t, n.key, n);
      }
    }return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  }();
}, function (t, e, r) {
  t.exports = { default: r(55), __esModule: !0 };
}, function (t, e, r) {
  r(56);var n = r(1).Object;t.exports = function (t, e, r) {
    return n.defineProperty(t, e, r);
  };
}, function (t, e, r) {
  var n = r(10);n(n.S + n.F * !r(3), "Object", { defineProperty: r(2).f });
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 });var n,
      o = r(58),
      i = (n = o) && n.__esModule ? n : { default: n };e.default = { trim: function trim(t) {
      return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }, getHashCode: function getHashCode(t) {
      var e,
          r = 1315423911;for (e = t.length - 1; e >= 0; e--) {
        r ^= (r << 5) + t.charCodeAt(e) + (r >> 2);
      }return (2147483647 & r).toString(16);
    }, _pushWindow: function _pushWindow(t) {
      location.href = t.url;
    }, _formatExinfoParam: function _formatExinfoParam(t) {
      var e = [];for (var r in t) {
        t.hasOwnProperty(r) && e.push(r + "=" + this._encodeStr(t[r]));
      }return e.join("^");
    }, _encodeStr: function _encodeStr(t) {
      return "string" == typeof t ? t.replace(/=|,|\^|\$\$/g, function (t) {
        switch (t) {case ",":
            return "%2C";case "^":
            return "%5E";case "$$":
            return "%24%24";case "=":
            return "%3D";default:
            return " ";}
      }) : t;
    }, _refFromStorage: function _refFromStorage() {
      var t = window.localStorage;return t ? t["mtr-referrer"] : "";
    }, _storeRef: function _storeRef(t) {
      var e = window.localStorage;e && (e["mtr-referrer"] = t);
    }, _ajax: function _ajax(t, e, r, n) {
      if (t) {
        window.mtrWaitTime = +Date.now() + 300;var o = new XMLHttpRequest();o.onreadystatechange = function () {
          4 === o.readyState && (200 === o.status ? (r && r.sendSuccess++, n && n({ success: !0, status: o.status })) : (console.error("Problem retrieving XML data"), n && n({ success: !1, status: o.status })));
        }, o.open("POST", t, !0), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.send("data=" + window.encodeURIComponent(e)), r && r.sendCounter++;
      }
    }, dateFormat: function dateFormat(t, e) {
      var r = e || "yyyy-MM-dd hh:mm:ss";"object" !== (void 0 === t ? "undefined" : (0, i.default)(t)) && (t = new Date(t));var n = { "M+": t.getMonth() + 1, "d+": t.getDate(), "h+": t.getHours(), "m+": t.getMinutes(), "s+": t.getSeconds(), "q+": Math.floor((t.getMonth() + 3) / 3), S: t.getMilliseconds() };for (var o in /(y+)/.test(r) && (r = r.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))), n) {
        new RegExp("(" + o + ")").test(r) && (r = r.replace(RegExp.$1, 1 == RegExp.$1.length ? n[o] : ("00" + n[o]).substr(("" + n[o]).length)));
      }return r;
    }, dealExtra: function dealExtra(t) {
      var e = "mtr-",
          r = {};for (var n in t) {
        t.hasOwnProperty(n) && (r[0 === n.indexOf(e) ? n : e + n] = t[n]);
      }return r;
    }, extend: function extend(t, e) {
      for (var r in e) {
        void 0 !== e[r] && (t[r] = e[r]);
      }
    }, encodeURIComponent: window.encodeURIComponent, decodeURIComponent: window.decodeURIComponent };
}, function (t, e, r) {
  "use strict";
  e.__esModule = !0;var n = a(r(59)),
      o = a(r(71)),
      i = "function" == typeof o.default && "symbol" == typeof n.default ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : typeof t;
  };function a(t) {
    return t && t.__esModule ? t : { default: t };
  }e.default = "function" == typeof o.default && "symbol" === i(n.default) ? function (t) {
    return void 0 === t ? "undefined" : i(t);
  } : function (t) {
    return t && "function" == typeof o.default && t.constructor === o.default && t !== o.default.prototype ? "symbol" : void 0 === t ? "undefined" : i(t);
  };
}, function (t, e, r) {
  t.exports = { default: r(60), __esModule: !0 };
}, function (t, e, r) {
  r(61), r(67), t.exports = r(27).f("iterator");
}, function (t, e, r) {
  "use strict";
  var n = r(62)(!0);r(36)(String, "String", function (t) {
    this._t = String(t), this._i = 0;
  }, function () {
    var t,
        e = this._t,
        r = this._i;return r >= e.length ? { value: void 0, done: !0 } : (t = n(e, r), this._i += t.length, { value: t, done: !1 });
  });
}, function (t, e, r) {
  var n = r(20),
      o = r(19);t.exports = function (t) {
    return function (e, r) {
      var i,
          a,
          s = String(o(e)),
          u = n(r),
          c = s.length;return u < 0 || u >= c ? t ? "" : void 0 : (i = s.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : i : t ? s.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536;
    };
  };
}, function (t, e, r) {
  "use strict";
  var n = r(38),
      o = r(12),
      i = r(26),
      a = {};r(5)(a, r(7)("iterator"), function () {
    return this;
  }), t.exports = function (t, e, r) {
    t.prototype = n(a, { next: o(1, r) }), i(t, e + " Iterator");
  };
}, function (t, e, r) {
  var n = r(2),
      o = r(11),
      i = r(13);t.exports = r(3) ? Object.defineProperties : function (t, e) {
    o(t);for (var r, a = i(e), s = a.length, u = 0; s > u;) {
      n.f(t, r = a[u++], e[r]);
    }return t;
  };
}, function (t, e, r) {
  var n = r(0).document;t.exports = n && n.documentElement;
}, function (t, e, r) {
  var n = r(4),
      o = r(35),
      i = r(21)("IE_PROTO"),
      a = Object.prototype;t.exports = Object.getPrototypeOf || function (t) {
    return t = o(t), n(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
  };
}, function (t, e, r) {
  r(68);for (var n = r(0), o = r(5), i = r(25), a = r(7)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
    var c = s[u],
        f = n[c],
        d = f && f.prototype;d && !d[a] && o(d, a, c), i[c] = i.Array;
  }
}, function (t, e, r) {
  "use strict";
  var n = r(69),
      o = r(70),
      i = r(25),
      a = r(6);t.exports = r(36)(Array, "Array", function (t, e) {
    this._t = a(t), this._i = 0, this._k = e;
  }, function () {
    var t = this._t,
        e = this._k,
        r = this._i++;return !t || r >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]]);
  }, "values"), i.Arguments = i.Array, n("keys"), n("values"), n("entries");
}, function (t, e) {
  t.exports = function () {};
}, function (t, e) {
  t.exports = function (t, e) {
    return { value: e, done: !!t };
  };
}, function (t, e, r) {
  t.exports = { default: r(72), __esModule: !0 };
}, function (t, e, r) {
  r(73), r(79), r(80), r(81), t.exports = r(1).Symbol;
}, function (t, e, r) {
  "use strict";
  var n = r(0),
      o = r(4),
      i = r(3),
      a = r(10),
      s = r(37),
      u = r(74).KEY,
      c = r(9),
      f = r(22),
      d = r(26),
      l = r(15),
      p = r(7),
      h = r(27),
      v = r(28),
      g = r(75),
      m = r(76),
      y = r(11),
      w = r(8),
      _ = r(6),
      x = r(18),
      b = r(12),
      S = r(38),
      O = r(77),
      P = r(78),
      E = r(2),
      L = r(13),
      I = P.f,
      A = E.f,
      R = O.f,
      _M = n.Symbol,
      T = n.JSON,
      k = T && T.stringify,
      C = p("_hidden"),
      j = p("toPrimitive"),
      D = {}.propertyIsEnumerable,
      U = f("symbol-registry"),
      W = f("symbols"),
      N = f("op-symbols"),
      F = Object.prototype,
      z = "function" == typeof _M,
      V = n.QObject,
      H = !V || !V.prototype || !V.prototype.findChild,
      B = i && c(function () {
    return 7 != S(A({}, "a", { get: function get() {
        return A(this, "a", { value: 7 }).a;
      } })).a;
  }) ? function (t, e, r) {
    var n = I(F, e);n && delete F[e], A(t, e, r), n && t !== F && A(F, e, n);
  } : A,
      $ = function $(t) {
    var e = W[t] = S(_M.prototype);return e._k = t, e;
  },
      G = z && "symbol" == typeof _M.iterator ? function (t) {
    return "symbol" == typeof t;
  } : function (t) {
    return t instanceof _M;
  },
      X = function X(t, e, r) {
    return t === F && X(N, e, r), y(t), e = x(e, !0), y(r), o(W, e) ? (r.enumerable ? (o(t, C) && t[C][e] && (t[C][e] = !1), r = S(r, { enumerable: b(0, !1) })) : (o(t, C) || A(t, C, b(1, {})), t[C][e] = !0), B(t, e, r)) : A(t, e, r);
  },
      q = function q(t, e) {
    y(t);for (var r, n = g(e = _(e)), o = 0, i = n.length; i > o;) {
      X(t, r = n[o++], e[r]);
    }return t;
  },
      J = function J(t) {
    var e = D.call(this, t = x(t, !0));return !(this === F && o(W, t) && !o(N, t)) && (!(e || !o(this, t) || !o(W, t) || o(this, C) && this[C][t]) || e);
  },
      K = function K(t, e) {
    if (t = _(t), e = x(e, !0), t !== F || !o(W, e) || o(N, e)) {
      var r = I(t, e);return !r || !o(W, e) || o(t, C) && t[C][e] || (r.enumerable = !0), r;
    }
  },
      Y = function Y(t) {
    for (var e, r = R(_(t)), n = [], i = 0; r.length > i;) {
      o(W, e = r[i++]) || e == C || e == u || n.push(e);
    }return n;
  },
      Q = function Q(t) {
    for (var e, r = t === F, n = R(r ? N : _(t)), i = [], a = 0; n.length > a;) {
      !o(W, e = n[a++]) || r && !o(F, e) || i.push(W[e]);
    }return i;
  };z || (s((_M = function M() {
    if (this instanceof _M) throw TypeError("Symbol is not a constructor!");var t = l(arguments.length > 0 ? arguments[0] : void 0),
        e = function e(r) {
      this === F && e.call(N, r), o(this, C) && o(this[C], t) && (this[C][t] = !1), B(this, t, b(1, r));
    };return i && H && B(F, t, { configurable: !0, set: e }), $(t);
  }).prototype, "toString", function () {
    return this._k;
  }), P.f = K, E.f = X, r(39).f = O.f = Y, r(16).f = J, r(24).f = Q, i && !r(14) && s(F, "propertyIsEnumerable", J, !0), h.f = function (t) {
    return $(p(t));
  }), a(a.G + a.W + a.F * !z, { Symbol: _M });for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) {
    p(Z[tt++]);
  }for (var et = L(p.store), rt = 0; et.length > rt;) {
    v(et[rt++]);
  }a(a.S + a.F * !z, "Symbol", { for: function _for(t) {
      return o(U, t += "") ? U[t] : U[t] = _M(t);
    }, keyFor: function keyFor(t) {
      if (!G(t)) throw TypeError(t + " is not a symbol!");for (var e in U) {
        if (U[e] === t) return e;
      }
    }, useSetter: function useSetter() {
      H = !0;
    }, useSimple: function useSimple() {
      H = !1;
    } }), a(a.S + a.F * !z, "Object", { create: function create(t, e) {
      return void 0 === e ? S(t) : q(S(t), e);
    }, defineProperty: X, defineProperties: q, getOwnPropertyDescriptor: K, getOwnPropertyNames: Y, getOwnPropertySymbols: Q }), T && a(a.S + a.F * (!z || c(function () {
    var t = _M();return "[null]" != k([t]) || "{}" != k({ a: t }) || "{}" != k(Object(t));
  })), "JSON", { stringify: function stringify(t) {
      for (var e, r, n = [t], o = 1; arguments.length > o;) {
        n.push(arguments[o++]);
      }if (r = e = n[1], (w(e) || void 0 !== t) && !G(t)) return m(e) || (e = function (_e2) {
        function e(_x4, _x5) {
          return _e2.apply(this, arguments);
        }

        e.toString = function () {
          return _e2.toString();
        };

        return e;
      }(function (t, e) {
        if ("function" == typeof r && (e = r.call(this, t, e)), !G(e)) return e;
      })), n[1] = e, k.apply(T, n);
    } }), _M.prototype[j] || r(5)(_M.prototype, j, _M.prototype.valueOf), d(_M, "Symbol"), d(Math, "Math", !0), d(n.JSON, "JSON", !0);
}, function (t, e, r) {
  var n = r(15)("meta"),
      o = r(8),
      i = r(4),
      a = r(2).f,
      s = 0,
      u = Object.isExtensible || function () {
    return !0;
  },
      c = !r(9)(function () {
    return u(Object.preventExtensions({}));
  }),
      f = function f(t) {
    a(t, n, { value: { i: "O" + ++s, w: {} } });
  },
      d = t.exports = { KEY: n, NEED: !1, fastKey: function fastKey(t, e) {
      if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;if (!i(t, n)) {
        if (!u(t)) return "F";if (!e) return "E";f(t);
      }return t[n].i;
    }, getWeak: function getWeak(t, e) {
      if (!i(t, n)) {
        if (!u(t)) return !0;if (!e) return !1;f(t);
      }return t[n].w;
    }, onFreeze: function onFreeze(t) {
      return c && d.NEED && u(t) && !i(t, n) && f(t), t;
    } };
}, function (t, e, r) {
  var n = r(13),
      o = r(24),
      i = r(16);t.exports = function (t) {
    var e = n(t),
        r = o.f;if (r) for (var a, s = r(t), u = i.f, c = 0; s.length > c;) {
      u.call(t, a = s[c++]) && e.push(a);
    }return e;
  };
}, function (t, e, r) {
  var n = r(34);t.exports = Array.isArray || function (t) {
    return "Array" == n(t);
  };
}, function (t, e, r) {
  var n = r(6),
      o = r(39).f,
      i = {}.toString,
      a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];t.exports.f = function (t) {
    return a && "[object Window]" == i.call(t) ? function (t) {
      try {
        return o(t);
      } catch (t) {
        return a.slice();
      }
    }(t) : o(n(t));
  };
}, function (t, e, r) {
  var n = r(16),
      o = r(12),
      i = r(6),
      a = r(18),
      s = r(4),
      u = r(30),
      c = Object.getOwnPropertyDescriptor;e.f = r(3) ? c : function (t, e) {
    if (t = i(t), e = a(e, !0), u) try {
      return c(t, e);
    } catch (t) {}if (s(t, e)) return o(!n.f.call(t, e), t[e]);
  };
}, function (t, e) {}, function (t, e, r) {
  r(28)("asyncIterator");
}, function (t, e, r) {
  r(28)("observable");
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 });var n,
      o = r(29),
      i = (n = o) && n.__esModule ? n : { default: n };function a(t) {
    return t && t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }var s,
      u,
      c = function () {
    var t = void 0,
        e = void 0,
        r = void 0,
        n = navigator.appVersion,
        o = navigator.userAgent,
        i = navigator.appName,
        s = "" + parseFloat(navigator.appVersion),
        u = parseInt(navigator.appVersion, 10);-1 != (e = o.indexOf("Opera")) && (i = "Opera", s = o.substring(e + 6), -1 != (e = o.indexOf("Version")) && (s = o.substring(e + 8))), -1 != (e = o.indexOf("OPR")) ? (i = "Opera", s = o.substring(e + 4)) : -1 != (e = o.indexOf("MSIE")) ? (i = "Microsoft Internet Explorer", s = o.substring(e + 5)) : -1 != (e = o.indexOf("Chrome")) ? (i = "Chrome", s = o.substring(e + 7)) : -1 != (e = o.indexOf("Safari")) ? (i = "Safari", s = o.substring(e + 7), -1 != (e = o.indexOf("Version")) && (s = o.substring(e + 8))) : -1 != (e = o.indexOf("Firefox")) ? (i = "Firefox", s = o.substring(e + 8)) : -1 != o.indexOf("Trident/") ? (i = "Microsoft Internet Explorer", s = o.substring(o.indexOf("rv:") + 3)) : (t = o.lastIndexOf(" ") + 1) < (e = o.lastIndexOf("/")) && (i = o.substring(t, e), s = o.substring(e + 1), i.toLowerCase() == i.toUpperCase() && (i = navigator.appName)), -1 != (r = s.indexOf(";")) && (s = s.substring(0, r)), -1 != (r = s.indexOf(" ")) && (s = s.substring(0, r)), -1 != (r = s.indexOf(")")) && (s = s.substring(0, r)), u = parseInt("" + s, 10), isNaN(u) && (s = "" + parseFloat(navigator.appVersion), u = parseInt(navigator.appVersion, 10));var c = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(n),
        f = "-",
        d = [{ userAgent: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ }, { userAgent: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ }, { userAgent: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ }, { userAgent: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ }, { userAgent: "Windows Vista", r: /Windows NT 6.0/ }, { userAgent: "Windows Server 2003", r: /Windows NT 5.2/ }, { userAgent: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ }, { userAgent: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ }, { userAgent: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ }, { userAgent: "Windows 98", r: /(Windows 98|Win98)/ }, { userAgent: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ }, { userAgent: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ }, { userAgent: "Windows CE", r: /Windows CE/ }, { userAgent: "Windows 3.11", r: /Win16/ }, { userAgent: "Android", r: /Android/ }, { userAgent: "Open BSD", r: /OpenBSD/ }, { userAgent: "Sun OS", r: /SunOS/ }, { userAgent: "Linux", r: /(Linux|X11)/ }, { userAgent: "iOS", r: /(iPhone|iPad|iPod)/ }, { userAgent: "Mac OS X", r: /Mac OS X/ }, { userAgent: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ }, { userAgent: "QNX", r: /QNX/ }, { userAgent: "UNIX", r: /UNIX/ }, { userAgent: "BeOS", r: /BeOS/ }, { userAgent: "OS/2", r: /OS\/2/ }, { userAgent: "Search Bot", r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }];for (var l in d) {
      var p = d[l];if (p.r.test(o)) {
        f = p.userAgent;break;
      }
    }var h = "-";switch (/Windows/.test(f) && (h = /Windows (.*)/.exec(f)[1], f = "Windows"), f) {case "Mac OS X":
        h = /Mac OS X (10[\.\_\d]+)/.exec(o)[1];break;case "Android":
        h = /Android ([\.\_\d]+)/.exec(o)[1];break;case "iOS":
        h = (h = /OS (\d+)_(\d+)_?(\d+)?/.exec(n))[1] + "." + h[2] + "." + (0 | h[3]);}return { deviceModel: function (t) {
        var e = { os_version: "-", model: "-" };try {
          var r = new RegExp(/(\([^\(\)]*\))/).exec(t)[0],
              n = (r = r.substr(1, r.length)).split(";");if (r.indexOf("Android") > -1) e.os_version = a(n[1].indexOf("Android") > -1 ? n[1] : n[2]), e.model = a(n[2].indexOf("Build/") > -1 ? n[2].split("Build/")[0] : n[n.length - 1].split("Build/")[0]);else if (r.indexOf("iPhone") > -1 || r.indexOf("Mac OS X") > -1) {
            e.model = a(n[0]);var o = n[1].split(" ");e.os_version = a(n[1].indexOf("iPhone") > -1 ? o[4] : o[3]);
          }
        } catch (t) {
          console.error(t);
        }return e;
      }(o).model, browser: i, browserVersion: s, browserMajorVersion: u, mobile: c, os: f, osVersion: h };
  }();function f() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
      var e = 16 * Math.random() | 0;return ("x" === t ? e : 3 & e | 8).toString(16);
    });
  }c.UUid = function () {
    var t = "mtr-mdap",
        e = "mtr-mdap",
        r = i.default.parse(document.cookie);if (r && r[e] && r[e].length > 0) return r[e];var n = window.localStorage,
        o = n ? (n[t] || (n[t] = f()), n[t]) : "",
        a = i.default.serialize(e, o, { path: "/", expires: new Date(new Date().getTime() + 31536e7), domain: i.default.cookieDomain() });return document.cookie = a, o;
  }(), c.sessionId = (s = window.sessionStorage, u = "mtr-mdap", s ? (s[u] || (s[u] = f()), s[u]) : ""), e.default = c;
}, function (t, e, r) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 });var n = i(r(17)),
      o = i(r(29));function i(t) {
    return t && t.__esModule ? t : { default: t };
  }var a = { parse: function parse(t) {
      if (!t || 0 == t.length) return {};var e = t.split("&");if (!e || 0 == e.length) return {};for (var r = {}, n = 0; n < e.length; n++) {
        var o = e[n].split("=");o && o.length > 1 && (r[o[0]] = decodeURIComponent(o[1]));
      }return r;
    }, stringify: function stringify(t) {
      if (!t) return "";var e = [];for (var r in t) {
        e.push(r + "=" + encodeURIComponent(t[r]));
      }return e.join("&");
    } };var s,
      u,
      c = function c() {
    var t = {},
        e = void 0;try {
      var r = window.location,
          i = a.parse(r.search.replace("?", "")),
          s = r.hash || "",
          u = s.indexOf("?");e = u > 0 ? s.substr(0, u) : s, s = u > 0 ? s.substr(u + 1) : s.replace("#", ""), s = a.parse(s), (0, n.default)(t, i), (0, n.default)(t, s), t.bizScenario && function (t) {
        var e = "mtr-biz-scenario",
            r = o.default.parse(document.cookie);if (!(r && r[e] && r[e].length > 0 && r[e] === t)) {
          var n = o.default.serialize(e, t, { path: "/", expires: new Date(new Date().getTime() + 864e5), domain: o.default.cookieDomain() });document.cookie = n;
        }
      }(t.bizScenario);
    } catch (t) {}return { route: e, query: t, parse: a.parse, stringify: a.stringify, setHash: f };
  },
      f = function f(t) {},
      d = c();e.default = { _reload: function _reload(t) {
      t.Router = c(), t.url = document.URL, t.fullURL = document.URL;
    }, Router: d, fullURL: document.URL, url: document.URL, bizScenario: d.query.bizScenario || (s = "mtr-biz-scenario", u = o.default.parse(document.cookie), u && u[s] && u[s].length > 0 ? u[s] : null) };
}, function (e, r, n) {
  "use strict";
  function o(t) {
    if (t) {
      for (var e = [], r = 0; r < t.length; r++) {
        var n = t[r];if (e.push(n.tagName + "[" + n.childElementCount + "]"), "BODY" === n.tagName) break;
      }return e.reverse().join(".");
    }return "";
  }function i(t) {
    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }Object.defineProperty(r, "__esModule", { value: !0 }), r.default = { initListener: function initListener(t) {
      t.mtrDebug && console.log("initListener");var e = t;e.st = Date.now(), window.addEventListener("load", function () {
        t.mtrDebug && console.log("dom load"), t.ol = Date.now();var e = { domReady: t.dr - t.st, onload: t.ol - t.st };t.logPv(e, !1, !0);
      }), t.doc.addEventListener("DOMContentLoaded", function () {
        e.dr = Date.now(), t.mtrDebug && console.log("DOMContentLoaded");
      }), window.addEventListener("beforeunload", function () {
        t.mtrDebug && console.log("beforeunload"), t.logJump(), window.localStorage["mtr-sn"] = t.sn, window.mtrTn = +Date.now();var e = +Date.now() + 200;if (window.mtrWaitTime) for (; window.mtrTn < e;) {
          window.mtrTn = +Date.now();
        }t.mtrDebug && console.log("beforeunload end");
      }, !0), window.addEventListener("unload", function () {
        t.mtrDebug && console.log("_unloadListener");var e = +Date.now();if (window.mtrWaitTime) for (; e < window.mtrWaitTime;) {
          e = +Date.now();
        }
      }, !0);
    }, startAutoClick: function startAutoClick(t) {
      t.doc.addEventListener("mousedown", function (e) {
        for (var r = e.target; r && "BODY" !== r.tagName;) {
          for (var n = void 0, a = {}, s = 0; s < r.attributes.length; s++) {
            var u = r.attributes[s];/^(data-)?seed$/.test(u.name) ? n = i(u.value) : /^(data-)?ucid$/.test(u.name) ? a.ucid = i(u.value) : /^data-mtr-/.test(u.name) && (a[u.name.replace("data-", "")] = i(u.value));
          }if (n) {
            a.xPath = o(e.path), t && t.click && t.click(n, a);break;
          }r = r.parentElement;
        }
      });
    }, _startAutoExpo: function _startAutoExpo(t) {
      var e,
          r = t.expoObj,
          n = (e = 0, function (t, r) {
        var n = t - e,
            o = window.innerHeight;return { active: n >= 0 && n + r <= o, topDiff: n };
      }),
          o = function o() {
        for (var e = document.querySelectorAll("[data-expo]"), o = 0; o < e.length; o++) {
          var a = e[o],
              s = a.getAttribute("data-expo"),
              u = s + "-" + o,
              c = n(a.getBoundingClientRect().y, a.getBoundingClientRect().height);if (r[u] || (r[u] = { active: !1, topDiff: 0 }), c && c.active) {
            for (var f = {}, d = 0; d < a.attributes.length; d++) {
              var l = a.attributes[d];/^data-mtr-/.test(l.name) && (f[l.name.replace("data-", "")] = i(l.value));
            }r[u].active != c.active && (r[u].topDiff < c.topDiff ? t.expo(s, "up", f) : r[u].topDiff > c.topDiff && t.expo(s, "down", f));
          }r[u] = c;
        }
      };o(), t._expoIt = o, t.expoType(o);
    }, _startAutoError: function _startAutoError(t) {
      window.addEventListener("error", function (e) {
        t.err("jsErr", { filename: e.filename, message: e.message, lineno: e.lineno, colno: e.colno });
      });
    }, _resume: function _resume(t) {
      document.addEventListener("WV.Event.APP.Active", function (e) {
        "webview" === e.param.from && t();
      }), document.addEventListener("resume", t);
    }, _trackerReady: function _trackerReady(t) {
      !function (t) {
        "complete" === window.document.readyState || "interactive" === window.document.readyState || "loaded" === window.document.readyState ? t() : window.addEventListener("DOMContentLoaded", t);
      }(t);
    }, _beforeApiReady: function _beforeApiReady(t) {
      t.autoError && t._startAutoError(t);var e = window.AlipayJSBridge;void 0 === t.bizScenario && e && e.startupParams && e.startupParams.bizScenario && (t.bizScenario = e.startupParams.bizScenario), t.version || (t.cfg && t.cfg.version ? t.version = t.cfg.version : e && e.startupParams && e.startupParams.version && (t.version = e.startupParams.version)), !t.appId && e && e.startupParams && e.startupParams.appId && (t.appId = e.startupParams.appId);
    }, _apiReady: function _apiReady(t) {
      var e = t;e._ready = !0;for (var r = 0; r < e._fnCacheList.length; r++) {
        e._fnCacheList[r]();
      }e._fnCacheList = [], t.mtrDebug && console.log("_apiReady");
    }, _afterApiReady: function _afterApiReady(e) {
      e.mtrDebug && console.log("_afterApiReady"), e.br && (t.bridgeReady = e.br - e.st), void 0 !== e.fr && (t.firstRender = e.firstRender - e.st), e.logLoad(), e.autoExpo && e._startAutoExpo(e), e.autoClick && e.startAutoClick(e), e._resume(function () {
        e.logPv(null, !0, !1);
      }), e.doc.addEventListener("back", function () {
        e.click("back");
      }), e.doc.addEventListener("optionMenu", function () {
        e.click("optionMenu");
      }), e.doc.addEventListener("titleClick", function () {
        e.click("titleClick");
      }), window.addEventListener("hashchange", function () {
        e.mtrDebug && console.log("hashchange", e.doc.URL), e.currentPage !== e.doc.URL && e.logLoad();
      }), window.addEventListener("DOMNodeInserted", function () {
        e.mtrDebug && console.log("DOMNodeInserted", e.doc.URL), e.currentPage !== e.doc.URL && e.logLoad();
      });
    } };
}]);

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map