
// Copyright 2012 Google Inc. All rights reserved.
(function () {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [
                [["if", 0], ["add", 0]]]
        },
        "runtime": []




    };
    /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = "function" == typeof Object.create ? Object.create : function (a) { var b = function () { }; b.prototype = a; return new b }, ca; if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf; else { var da; a: { var ea = { Ef: !0 }, ha = {}; try { ha.__proto__ = ea; da = ha.Ef; break a } catch (a) { } da = !1 } ca = da ? function (a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null } var ja = ca, ka = this || self, ma = /^[\w+/_-]+[=]{0,2}$/, oa = null; var pa = function () { }, qa = function (a) { return "function" == typeof a }, g = function (a) { return "string" == typeof a }, ra = function (a) { return "number" == typeof a && !isNaN(a) }, sa = function (a) { return "[object Array]" == Object.prototype.toString.call(Object(a)) }, n = function (a, b) { if (Array.prototype.indexOf) { var c = a.indexOf(b); return "number" == typeof c ? c : -1 } for (var d = 0; d < a.length; d++)if (a[d] === b) return d; return -1 }, ta = function (a, b) { if (a && sa(a)) for (var c = 0; c < a.length; c++)if (a[c] && b(a[c])) return a[c] }, wa = function (a, b) {
        if (!ra(a) ||
            !ra(b) || a > b) a = 0, b = 2147483647; return Math.floor(Math.random() * (b - a + 1) + a)
    }, ya = function (a, b) { for (var c = new xa, d = 0; d < a.length; d++)c.set(a[d], !0); for (var e = 0; e < b.length; e++)if (c.get(b[e])) return !0; return !1 }, C = function (a, b) { for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]) }, za = function (a) { return Math.round(Number(a)) || 0 }, Aa = function (a) { return "false" == String(a).toLowerCase() ? !1 : !!a }, Ba = function (a) { var b = []; if (sa(a)) for (var c = 0; c < a.length; c++)b.push(String(a[c])); return b }, Ca = function (a) {
        return a ?
            a.replace(/^\s+|\s+$/g, "") : ""
    }, Da = function () { return (new Date).getTime() }, xa = function () { this.prefix = "gtm."; this.values = {} }; xa.prototype.set = function (a, b) { this.values[this.prefix + a] = b }; xa.prototype.get = function (a) { return this.values[this.prefix + a] };
    var Fa = function (a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c }, Ga = function (a) { var b = !1; return function () { if (!b) try { a() } catch (c) { } b = !0 } }, Ha = function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }, Ia = function (a) { for (var b in a) if (a.hasOwnProperty(b)) return !0; return !1 }, Ja = function (a, b) { for (var c = [], d = 0; d < a.length; d++)c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c }, Ka = function (a, b) { for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)d = d[e[f]] = {}; d[e[e.length - 1]] = b; return c }, La = function (a) {
        var b =
            []; C(a, function (c, d) { 10 > c.length && d && b.push(c) }); return b.join(",")
    };/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ma = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, Na = function (a) { if (null == a) return String(a); var b = Ma.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" }, Oa = function (a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) }, Pa = function (a) {
        if (!a || "object" != Na(a) || a.nodeType || a == a.window) return !1; try { if (a.constructor && !Oa(a, "constructor") && !Oa(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } for (var b in a); return void 0 ===
            b || Oa(a, b)
    }, D = function (a, b) { var c = b || ("array" == Na(a) ? [] : {}), d; for (d in a) if (Oa(a, d)) { var e = a[d]; "array" == Na(e) ? ("array" != Na(c[d]) && (c[d] = []), c[d] = D(e, c[d])) : Pa(e) ? (Pa(c[d]) || (c[d] = {}), c[d] = D(e, c[d])) : c[d] = e } return c }; var ob;
    var pb = [], qb = [], rb = [], sb = [], tb = [], ub = {}, vb, wb, xb, yb = function (a, b) { var c = {}; c["function"] = "__" + a; for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]); return c }, zb = function (a, b) { var c = a["function"]; if (!c) throw Error("Error: No function name given for function call."); var d = ub[c], e = {}, f; for (f in a) a.hasOwnProperty(f) && 0 === f.indexOf("vtp_") && (e[void 0 !== d ? f : f.substr(4)] = a[f]); return void 0 !== d ? d(e) : ob(c, e, b) }, Cb = function (a, b, c) {
        c = c || []; var d = {}, e; for (e in a) a.hasOwnProperty(e) && (d[e] = Bb(a[e], b, c));
        return d
    }, Db = function (a) { var b = a["function"]; if (!b) throw "Error: No function name given for function call."; var c = ub[b]; return c ? c.priorityOverride || 0 : 0 }, Bb = function (a, b, c) {
        if (sa(a)) {
            var d; switch (a[0]) {
                case "function_id": return a[1]; case "list": d = []; for (var e = 1; e < a.length; e++)d.push(Bb(a[e], b, c)); return d; case "macro": var f = a[1]; if (c[f]) return; var h = pb[f]; if (!h || b.Uc(h)) return; c[f] = !0; try { var k = Cb(h, b, c); k.vtp_gtmEventId = b.id; d = zb(k, b); xb && (d = xb.cg(d, k)) } catch (y) { b.Be && b.Be(y, Number(f)), d = !1 } c[f] =
                    !1; return d; case "map": d = {}; for (var l = 1; l < a.length; l += 2)d[Bb(a[l], b, c)] = Bb(a[l + 1], b, c); return d; case "template": d = []; for (var m = !1, p = 1; p < a.length; p++) { var r = Bb(a[p], b, c); wb && (m = m || r === wb.Gb); d.push(r) } return wb && m ? wb.fg(d) : d.join(""); case "escape": d = Bb(a[1], b, c); if (wb && sa(a[1]) && "macro" === a[1][0] && wb.Fg(a)) return wb.Xg(d); d = String(d); for (var u = 2; u < a.length; u++)Qa[a[u]] && (d = Qa[a[u]](d)); return d; case "tag": var q = a[1]; if (!sb[q]) throw Error("Unable to resolve tag reference " + q + "."); return d = {
                        ne: a[2],
                        index: q
                    }; case "zb": var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] }; t["function"] = a[1]; var v = Eb(t, b, c), w = !!a[4]; return w || 2 !== v ? w !== (1 === v) : null; default: throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        } return a
    }, Eb = function (a, b, c) { try { return vb(Cb(a, b, c)) } catch (d) { JSON.stringify(a) } return 2 }; var Fb = function () { var a = function (b) { return { toString: function () { return b } } }; return { xd: a("convert_case_to"), yd: a("convert_false_to"), zd: a("convert_null_to"), Ad: a("convert_true_to"), Bd: a("convert_undefined_to"), Fh: a("debug_mode_metadata"), va: a("function"), cf: a("instance_name"), hf: a("live_only"), kf: a("malware_disabled"), lf: a("metadata"), Gh: a("original_vendor_template_id"), rf: a("once_per_event"), Id: a("once_per_load"), Qd: a("setup_tags"), Sd: a("tag_id"), Td: a("teardown_tags") } }(); var Gb = null, Jb = function (a) { function b(r) { for (var u = 0; u < r.length; u++)d[r[u]] = !0 } var c = [], d = []; Gb = Hb(a); for (var e = 0; e < qb.length; e++) { var f = qb[e], h = Ib(f); if (h) { for (var k = f.add || [], l = 0; l < k.length; l++)c[k[l]] = !0; b(f.block || []) } else null === h && b(f.block || []) } for (var m = [], p = 0; p < sb.length; p++)c[p] && !d[p] && (m[p] = !0); return m }, Ib = function (a) {
        for (var b = a["if"] || [], c = 0; c < b.length; c++) { var d = Gb(b[c]); if (0 === d) return !1; if (2 === d) return null } for (var e = a.unless || [], f = 0; f < e.length; f++) {
            var h = Gb(e[f]); if (2 === h) return null;
            if (1 === h) return !1
        } return !0
    }, Hb = function (a) { var b = []; return function (c) { void 0 === b[c] && (b[c] = Eb(rb[c], a)); return b[c] } };/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var F = window, G = document, ec = navigator, fc = G.currentScript && G.currentScript.src, gc = function (a, b) { var c = F[a]; F[a] = void 0 === c ? b : c; return F[a] }, hc = function (a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) }, ic = function (a, b, c) {
        var d = G.createElement("script"); d.type = "text/javascript"; d.async = !0; d.src = a; hc(d, b); c && (d.onerror = c); var e; if (null === oa) b: {
            var f = ka.document, h = f.querySelector && f.querySelector("script[nonce]");
            if (h) { var k = h.nonce || h.getAttribute("nonce"); if (k && ma.test(k)) { oa = k; break b } } oa = ""
        } e = oa; e && d.setAttribute("nonce", e); var l = G.getElementsByTagName("script")[0] || G.body || G.head; l.parentNode.insertBefore(d, l); return d
    }, jc = function () { if (fc) { var a = fc.toLowerCase(); if (0 === a.indexOf("https://")) return 2; if (0 === a.indexOf("http://")) return 3 } return 1 }, kc = function (a, b) {
        var c = G.createElement("iframe"); c.height = "0"; c.width = "0"; c.style.display = "none"; c.style.visibility = "hidden"; var d = G.body && G.body.lastChild ||
            G.body || G.head; d.parentNode.insertBefore(c, d); hc(c, b); void 0 !== a && (c.src = a); return c
    }, lc = function (a, b, c) { var d = new Image(1, 1); d.onload = function () { d.onload = null; b && b() }; d.onerror = function () { d.onerror = null; c && c() }; d.src = a; return d }, mc = function (a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) }, nc = function (a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) }, I = function (a) { F.setTimeout(a, 0) }, oc = function (a, b) {
        return a &&
            b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }, pc = function (a) { var b = a.innerText || a.textContent || ""; b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")); b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " ")); return b }, qc = function (a) { var b = G.createElement("div"); b.innerHTML = "A<div>" + a + "</div>"; b = b.lastChild; for (var c = []; b.firstChild;)c.push(b.removeChild(b.firstChild)); return c }, rc = function (a, b, c) {
        c = c || 100; for (var d = {}, e = 0; e < b.length; e++)d[b[e]] = !0; for (var f = a, h = 0; f && h <= c; h++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement
        } return null
    }, sc = function (a) { ec.sendBeacon && ec.sendBeacon(a) || lc(a) }, tc = function (a, b) { var c = a[b]; c && "string" === typeof c.animVal && (c = c.animVal); return c }; var vc = function (a) { return uc ? G.querySelectorAll(a) : null }, wc = function (a, b) {
        if (!uc) return null; if (Element.prototype.closest) try { return a.closest(b) } catch (e) { return null } var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector, d = a; if (!G.documentElement.contains(d)) return null; do { try { if (c.call(d, b)) return d } catch (e) { break } d = d.parentElement || d.parentNode } while (null !== d && 1 === d.nodeType);
        return null
    }, xc = !1; if (G.querySelectorAll) try { var yc = G.querySelectorAll(":root"); yc && 1 == yc.length && yc[0] == G.documentElement && (xc = !0) } catch (a) { } var uc = xc; var J = { ra: "_ee", Jh: "_uci", yc: "event_callback", Fb: "event_timeout", D: "gtag.config", aa: "allow_ad_personalization_signals", zc: "restricted_data_processing", Za: "allow_google_signals", ba: "cookie_expires", Eb: "cookie_update", $a: "session_duration", ja: "user_properties" };
    J.rd = "page_view"; J.wh = "user_engagement"; J.ma = "purchase"; J.Qb = "refund"; J.eb = "begin_checkout"; J.Nb = "add_to_cart"; J.Ob = "remove_from_cart"; J.eh = "view_cart"; J.Gd = "add_to_wishlist"; J.Ia = "view_item"; J.uh = "view_promotion"; J.rh = "select_promotion"; J.lh = "select_item"; J.pd = "view_item_list"; J.Fd = "add_payment_info"; J.dh = "add_shipping_info"; J.yh = "allow_custom_scripts"; J.Ch = "allow_display_features"; J.Dh = "allow_enhanced_conversions"; J.ae = "enhanced_conversions"; J.Ub = "client_id"; J.X = "cookie_domain"; J.Wb = "cookie_name";
    J.La = "cookie_path"; J.fa = "cookie_flags"; J.ia = "currency"; J.Yb = "custom_params"; J.Ve = "custom_map"; J.wc = "groups"; J.Ma = "language"; J.Te = "country"; J.Kh = "non_interaction"; J.ib = "page_location"; J.jb = "page_referrer"; J.xc = "page_title"; J.kb = "send_page_view"; J.wa = "send_to"; J.Ac = "session_engaged"; J.ac = "session_id"; J.Cc = "session_number"; J.yf = "tracking_id"; J.sa = "linker"; J.te = "url_passthrough"; J.fb = "accept_incoming"; J.H = "domains"; J.hb = "url_position"; J.gb = "decorate_forms"; J.ke = "phone_conversion_number"; J.ce = "phone_conversion_callback";
    J.fe = "phone_conversion_css_class"; J.me = "phone_conversion_options"; J.tf = "phone_conversion_ids"; J.pf = "phone_conversion_country_code"; J.Hd = "aw_remarketing"; J.Jd = "aw_remarketing_only"; J.Z = "value"; J.uf = "quantity"; J.Ze = "affiliation"; J.$d = "tax"; J.bf = "shipping"; J.sd = "list_name"; J.Zd = "checkout_step"; J.Yd = "checkout_option"; J.$e = "coupon"; J.af = "promotions"; J.lb = "transaction_id"; J.mb = "user_id"; J.Ka = "conversion_linker"; J.Ja = "conversion_cookie_prefix"; J.Y = "cookie_prefix"; J.R = "items"; J.Rd = "aw_merchant_id"; J.Md = "aw_feed_country";
    J.Pd = "aw_feed_language"; J.Ld = "discount"; J.Wd = "disable_merchant_reported_purchases"; J.be = "new_customer"; J.Vd = "customer_lifetime_value"; J.Ye = "dc_natural_search"; J.We = "dc_custom_params"; J.zf = "trip_type"; J.vd = "passengers"; J.jf = "method"; J.wf = "search_term"; J.Eh = "content_type"; J.nf = "optimize_id"; J.df = "experiments"; J.$b = "google_signals"; J.vc = "google_tld"; J.bc = "update"; J.uc = "firebase_id"; J.Zb = "ga_restrict_domain"; J.td = "event_settings"; J.vf = "screen_name"; J.ff = "_x_19"; J.ef = "_x_20"; J.xa = "transport_url"; J.xe =
        [J.aa, J.Za, J.zc, J.X, J.ba, J.fa, J.Wb, J.La, J.Y, J.Eb, J.Yb, J.yc, J.td, J.Fb, J.Zb, J.$b, J.vc, J.wc, J.sa, J.wa, J.kb, J.$a, J.bc, J.ja, J.xa]; J.xe.push(J.R); J.ue = [J.ib, J.jb, J.xc, J.Ma, J.vf, J.mb, J.uc]; J.Bf = [J.ma, J.Qb, J.eb, J.Nb, J.Ob, J.eh, J.Gd, J.Ia, J.uh, J.rh, J.pd, J.lh, J.Fd, J.dh]; J.Ed = [J.wa, J.Hd, J.Jd, J.Yb, J.kb, J.Ma, J.Z, J.ia, J.lb, J.mb, J.Ka, J.Ja, J.Y, J.X, J.ba, J.fa, J.ib, J.jb, J.ke, J.ce, J.fe, J.me, J.R, J.Rd, J.Md, J.Pd, J.Ld, J.Wd, J.be, J.Vd,
        J.aa, J.zc, J.bc, J.uc, J.ae, J.xa, J.te]; J.we = [J.aa, J.Za, J.Eb]; J.ye = [J.ba, J.Fb, J.$a]; var Qc = /[A-Z]+/, Rc = /\s/, Sc = function (a) { if (g(a) && (a = Ca(a), !Rc.test(a))) { var b = a.indexOf("-"); if (!(0 > b)) { var c = a.substring(0, b); if (Qc.test(c)) { for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)if (!d[e]) return; return { id: a, prefix: c, containerId: c + "-" + d[0], s: d } } } } }, Uc = function (a) { for (var b = {}, c = 0; c < a.length; ++c) { var d = Sc(a[c]); d && (b[d.id] = d) } Tc(b); var e = []; C(b, function (f, h) { e.push(h) }); return e };
    function Tc(a) { var b = [], c; for (c in a) if (a.hasOwnProperty(c)) { var d = a[c]; "AW" === d.prefix && d.s[1] && b.push(d.containerId) } for (var e = 0; e < b.length; ++e)delete a[b[e]] }; var Vc = {}, Wc = null, Xc = Math.random(); Vc.w = "UA-163634588-1"; Vc.Kb = "432"; var Yc = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0, __paused: !0, __tg: !0 }, Zc = "www.googletagmanager.com/gtm.js"; Zc = "www.googletagmanager.com/gtag/js"; var $c = Zc, ad = null, bd = null, cd = null, dd = "//www.googletagmanager.com/a?id=" + Vc.w + "&cv=1", ed = {}, fd = {}, gd = function () { var a = Wc.sequence || 0; Wc.sequence = a + 1; return a }; var hd = {}, jd = function (a, b) { hd[a] = hd[a] || []; hd[a][b] = !0 }, kd = function (a) { for (var b = [], c = hd[a] || [], d = 0; d < c.length; d++)c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6); for (var e = 0; e < b.length; e++)b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0); return b.join("") };
    var ld = function () { return "&tc=" + sb.filter(function (a) { return a }).length }, od = function () { md || (md = F.setTimeout(nd, 500)) }, nd = function () { md && (F.clearTimeout(md), md = void 0); void 0 === pd || qd[pd] && !rd && !sd || (td[pd] || ud.Hg() || 0 >= vd-- ? (jd("GTM", 1), td[pd] = !0) : (ud.gh(), lc(wd()), qd[pd] = !0, xd = yd = sd = rd = "")) }, wd = function () { var a = pd; if (void 0 === a) return ""; var b = kd("GTM"), c = kd("TAGGING"); return [zd, qd[a] ? "" : "&es=1", Ad[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", ld(), rd, sd, yd, xd, "&z=0"].join("") }, Bd = function () {
        return [dd, "&v=3&t=t",
            "&pid=" + wa(), "&rv=" + Vc.Kb].join("")
    }, Cd = "0.005000" > Math.random(), zd = Bd(), Dd = function () { zd = Bd() }, qd = {}, rd = "", sd = "", xd = "", yd = "", pd = void 0, Ad = {}, td = {}, md = void 0, ud = function (a, b) { var c = 0, d = 0; return { Hg: function () { if (c < a) return !1; Da() - d >= b && (c = 0); return c >= a }, gh: function () { Da() - d >= b && (c = 0); c++; d = Da() } } }(2, 1E3), vd = 1E3, Ed = function (a, b) { if (Cd && !td[a] && pd !== a) { nd(); pd = a; xd = rd = ""; var c; c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*"; Ad[a] = "&e=" + c + "&eid=" + a; od() } }, Fd = function (a, b, c) {
        if (Cd &&
            !td[a] && b) { a !== pd && (nd(), pd = a); var d, e = String(b[Fb.va] || "").replace(/_/g, ""); 0 === e.indexOf("cvt") && (e = "cvt"); d = e; var f = c + d; rd = rd ? rd + "." + f : "&tr=" + f; var h = b["function"]; if (!h) throw Error("Error: No function name given for function call."); var k = (ub[h] ? "1" : "2") + d; xd = xd ? xd + "." + k : "&ti=" + k; od(); 2022 <= wd().length && nd() }
    }, Gd = function (a, b, c) {
        if (Cd && !td[a]) {
            a !== pd && (nd(), pd = a); var d = c + b; sd =
                sd ? sd + "." + d : "&epr=" + d; od(); 2022 <= wd().length && nd()
        }
    }; var Hd = {}, Id = new xa, Jd = {}, Kd = {}, Nd = { name: "dataLayer", set: function (a, b) { D(Ka(a, b), Jd); Ld() }, get: function (a) { return Md(a, 2) }, reset: function () { Id = new xa; Jd = {}; Ld() } }, Md = function (a, b) { if (2 != b) { var c = Id.get(a); if (Cd) { var d = Od(a); c !== d && jd("GTM", 5) } return c } return Od(a) }, Od = function (a, b, c) {
        var d = a.split("."), e = !1, f = void 0; var h = function (k, l) { for (var m = 0; void 0 !== k && m < d.length; m++) { if (null === k) return !1; k = k[d[m]] } return void 0 !== k || 1 < m ? k : l.length ? h(Pd(l.pop()), l) : Qd(d) };
        e = !0; f = h(Jd.eventModel, [b, c]); return e ? f : Qd(d)
    }, Qd = function (a) { for (var b = Jd, c = 0; c < a.length; c++) { if (null === b) return !1; if (void 0 === b) break; b = b[a[c]] } return b }; var Pd = function (a) { if (a) { var b = Qd(["gtag", "targets", a]); return Pa(b) ? b : void 0 } }, Rd = function (a, b) { function c(f) { f && C(f, function (h) { d[h] = null }) } var d = {}; c(Jd); delete d.eventModel; c(Pd(a)); c(Pd(b)); c(Jd.eventModel); var e = []; C(d, function (f) { e.push(f) }); return e };
    var Sd = function (a, b) { Kd.hasOwnProperty(a) || (Id.set(a, b), D(Ka(a, b), Jd), Ld()) }, Ld = function (a) { C(Kd, function (b, c) { Id.set(b, c); D(Ka(b, void 0), Jd); D(Ka(b, c), Jd); a && delete Kd[b] }) }, Td = function (a, b, c) { Hd[a] = Hd[a] || {}; var d = 1 !== c ? Od(b) : Id.get(b); "array" === Na(d) || "object" === Na(d) ? Hd[a][b] = D(d) : Hd[a][b] = d }, Ud = function (a, b) { if (Hd[a]) return Hd[a][b] }, Vd = function (a, b) { Hd[a] && delete Hd[a][b] }; var Wd = function () { var a = !1; return a }; var Q = function (a, b, c, d) { return (2 === Xd() || d || "http:" != F.location.protocol ? a : b) + c }, Xd = function () { var a = jc(), b; if (1 === a) a: { var c = $c; c = c.toLowerCase(); for (var d = "https://" + c, e = "http://" + c, f = 1, h = G.getElementsByTagName("script"), k = 0; k < h.length && 100 > k; k++) { var l = h[k].src; if (l) { l = l.toLowerCase(); if (0 === l.indexOf(e)) { b = 3; break a } 1 === f && 0 === l.indexOf(d) && (f = 2) } } b = f } else b = a; return b };
    var Zd = function (a, b, c) { if (F[a.functionName]) return b.$c && I(b.$c), F[a.functionName]; var d = Yd(); F[a.functionName] = d; if (a.Mb) for (var e = 0; e < a.Mb.length; e++)F[a.Mb[e]] = F[a.Mb[e]] || Yd(); a.Xb && void 0 === F[a.Xb] && (F[a.Xb] = c); ic(Q("https://", "http://", a.kd), b.$c, b.Sg); return d }, Yd = function () { var a = function () { a.q = a.q || []; a.q.push(arguments) }; return a }, $d = { functionName: "_googWcmImpl", Xb: "_googWcmAk", kd: "www.gstatic.com/wcm/loader.js" }, ae = { functionName: "_gaPhoneImpl", Xb: "ga_wpid", kd: "www.gstatic.com/gaphone/loader.js" },
        be = { Ue: "", xf: "1" }, ce = { functionName: "_googCallTrackingImpl", Mb: [ae.functionName, $d.functionName], kd: "www.gstatic.com/call-tracking/call-tracking_" + (be.Ue || be.xf) + ".js" }, de = {}, ee = function (a, b, c, d) { jd("GTM", 22); if (c) { d = d || {}; var e = Zd($d, d, a), f = { ak: a, cl: b }; void 0 === d.ka && (f.autoreplace = c); e(2, d.ka, f, c, 0, new Date, d.options) } }, fe = function (a, b, c) {
            jd("GTM", 23); if (b) {
                c = c || {}; var d = Zd(ae, c, a), e = {}; void 0 !== c.ka ? e.receiver = c.ka : e.replace = b; e.ga_wpid = a; e.destination = b; d(2,
                    new Date, e)
            }
        }, ge = function (a, b, c, d) { jd("GTM", 21); if (b && c) { d = d || {}; for (var e = { countryNameCode: c, destinationNumber: b, retrievalTime: new Date }, f = 0; f < a.length; f++) { var h = a[f]; de[h.id] || (h && "AW" === h.prefix && !e.adData && 2 <= h.s.length ? (e.adData = { ak: h.s[0], cl: h.s[1] }, de[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = { gaWpid: h.containerId }, de[h.id] = !0)) } (e.gaData || e.adData) && Zd(ce, d)(d.ka, e, d.options) } }, he = function () {
            var a = !1;
            return a
        }, ie = function (a, b) {
            if (a) if (Wd()) { } else {
                if (g(a)) { var c = Sc(a); if (!c) return; a = c } var d = function (x) { return b ? b.getWithConfig(x) : Od(x, a.containerId, a.id) }, e = void 0, f = !1, h = d(J.tf); if (h && sa(h)) { e = []; for (var k = 0; k < h.length; k++) { var l = Sc(h[k]); l && (e.push(l), (a.id === l.id || a.id === a.containerId && a.containerId === l.containerId) && (f = !0)) } } if (!e || f) {
                    var m = d(J.ke), p; if (m) {
                        sa(m) ? p = m : p = [m]; var r = d(J.ce), u = d(J.fe), q = d(J.me), t = d(J.pf),
                            v = r || u, w = 1; "UA" !== a.prefix || e || (w = 5); for (var y = 0; y < p.length; y++)y < w && (e ? ge(e, p[y], t, { ka: v, options: q }) : "AW" === a.prefix && a.s[1] ? he() ? ge([a], p[y], t || "US", { ka: v, options: q }) : ee(a.s[0], a.s[1], p[y], { ka: v, options: q }) : "UA" === a.prefix && (he() ? ge([a], p[y], t || "US", { ka: v }) : fe(a.containerId, p[y], { ka: v })))
                    }
                }
            }
        }; var le = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), me = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] }, ne = {
            cl: ["ecl"], customPixels: ["customScripts", "html"],
            ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts"], customScripts: ["html"], nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"], nonGoogleScripts: ["customScripts", "html"], nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        }, oe = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var qe = function (a) {
        var b = Md("gtm.whitelist"); b && jd("GTM", 9); b = "google gtagfl lcl zone oid op".split(" "); var c = b && Ja(Ba(b), me), d = Md("gtm.blacklist"); d || (d = Md("tagTypeBlacklist")) && jd("GTM", 3);
        d ? jd("GTM", 8) : d = []; pe() && (d = Ba(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts")); 0 <= n(Ba(d), "google") && jd("GTM", 2); var e = d && Ja(Ba(d), ne), f = {}; return function (h) {
            var k = h && h[Fb.va]; if (!k || "string" != typeof k) return !0; k = k.replace(/^_*/, ""); if (void 0 !== f[k]) return f[k]; var l = fd[k] || [], m = a(k, l); if (b) {
                var p; if (p = m) a: {
                    if (0 > n(c, k)) if (l && 0 < l.length) for (var r =
                        0; r < l.length; r++) { if (0 > n(c, l[r])) { jd("GTM", 11); p = !1; break a } } else { p = !1; break a } p = !0
                } m = p
            } var u = !1; if (d) { var q = 0 <= n(e, k); if (q) u = q; else { var t = ya(e, l || []); t && jd("GTM", 10); u = t } } var v = !m || u; v || !(0 <= n(l, "sandboxedScripts")) || c && -1 !== n(c, "sandboxedScripts") || (v = ya(e, oe)); return f[k] = v
        }
    }, pe = function () { return le.test(F.location && F.location.hostname) }; var re = { cg: function (a, b) { b[Fb.xd] && "string" === typeof a && (a = 1 == b[Fb.xd] ? a.toLowerCase() : a.toUpperCase()); b.hasOwnProperty(Fb.zd) && null === a && (a = b[Fb.zd]); b.hasOwnProperty(Fb.Bd) && void 0 === a && (a = b[Fb.Bd]); b.hasOwnProperty(Fb.Ad) && !0 === a && (a = b[Fb.Ad]); b.hasOwnProperty(Fb.yd) && !1 === a && (a = b[Fb.yd]); return a } }; var se = { active: !0, isWhitelisted: function () { return !0 } }, te = function (a) { var b = Wc.zones; !b && a && (b = Wc.zones = a()); return b }; var ue = function () { }; var ve = !1, we = 0, xe = []; function ye(a) { if (!ve) { var b = G.createEventObject, c = "complete" == G.readyState, d = "interactive" == G.readyState; if (!a || "readystatechange" != a.type || c || !b && d) { ve = !0; for (var e = 0; e < xe.length; e++)I(xe[e]) } xe.push = function () { for (var f = 0; f < arguments.length; f++)I(arguments[f]); return 0 } } } function ze() { if (!ve && 140 > we) { we++; try { G.documentElement.doScroll("left"), ye() } catch (a) { F.setTimeout(ze, 50) } } } var Ae = function (a) { ve ? a() : xe.push(a) }; var Be = {}, Ce = {}, De = function (a, b, c, d) { if (!Ce[a] || Yc[b] || "__zone" === b) return -1; var e = {}; Pa(d) && (e = D(d, e)); e.id = c; e.status = "timeout"; return Ce[a].tags.push(e) - 1 }, Ee = function (a, b, c, d) { if (Ce[a]) { var e = Ce[a].tags[b]; e && (e.status = c, e.executionTime = d) } }; function Fe(a) { for (var b = Be[a] || [], c = 0; c < b.length; c++)b[c](); Be[a] = { push: function (d) { d(Vc.w, Ce[a]) } } }
    var Ie = function (a, b, c) { Ce[a] = { tags: [] }; qa(b) && Ge(a, b); c && F.setTimeout(function () { return Fe(a) }, Number(c)); return He(a) }, Ge = function (a, b) { Be[a] = Be[a] || []; Be[a].push(Ga(function () { return I(function () { b(Vc.w, Ce[a]) }) })) }; function He(a) { var b = 0, c = 0, d = !1; return { add: function () { c++; return Ga(function () { b++; d && b >= c && Fe(a) }) }, Pf: function () { d = !0; b >= c && Fe(a) } } }; var Je = function () { function a(d) { return !ra(d) || 0 > d ? 0 : d } if (!Wc._li && F.performance && F.performance.timing) { var b = F.performance.timing.navigationStart, c = ra(Nd.get("gtm.start")) ? Nd.get("gtm.start") : 0; Wc._li = { cst: a(c - b), cbt: a(bd - b) } } }; var Ne = {}, Oe = function () { return F.GoogleAnalyticsObject && F[F.GoogleAnalyticsObject] }, Pe = !1;
    var Qe = function (a) { F.GoogleAnalyticsObject || (F.GoogleAnalyticsObject = a || "ga"); var b = F.GoogleAnalyticsObject; if (F[b]) F.hasOwnProperty(b) || jd("GTM", 12); else { var c = function () { c.q = c.q || []; c.q.push(arguments) }; c.l = Number(new Date); F[b] = c } Je(); return F[b] }, Re = function (a, b, c, d) { b = String(b).replace(/\s+/g, "").split(","); var e = Oe(); e(a + "require", "linker"); e(a + "linker:autoLink", b, c, d) };
    var Te = function (a) { }, Se = function () { return F.GoogleAnalyticsObject || "ga" }; var Ve = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i; var We = /:[0-9]+$/, Xe = function (a, b, c) { for (var d = a.split("&"), e = 0; e < d.length; e++) { var f = d[e].split("="); if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) { var h = f.slice(1).join("="); return c ? h : decodeURIComponent(h).replace(/\+/g, " ") } } }, $e = function (a, b, c, d, e) {
        b && (b = String(b).toLowerCase()); if ("protocol" === b || "port" === b) a.protocol = Ye(a.protocol) || Ye(F.location.protocol); "port" === b ? a.port = String(Number(a.hostname ? a.port : F.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
            (a.hostname = (a.hostname || F.location.hostname).replace(We, "").toLowerCase()); var f = b, h, k = Ye(a.protocol); f && (f = String(f).toLowerCase()); switch (f) {
                case "url_no_fragment": h = Ze(a); break; case "protocol": h = k; break; case "host": h = a.hostname.replace(We, "").toLowerCase(); if (c) { var l = /^www\d*\./.exec(h); l && l[0] && (h = h.substr(l[0].length)) } break; case "port": h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : "")); break; case "path": a.pathname || a.hostname || jd("TAGGING", 1); h = "/" == a.pathname.substr(0, 1) ? a.pathname :
                    "/" + a.pathname; var m = h.split("/"); 0 <= n(d || [], m[m.length - 1]) && (m[m.length - 1] = ""); h = m.join("/"); break; case "query": h = a.search.replace("?", ""); e && (h = Xe(h, e, void 0)); break; case "extension": var p = a.pathname.split("."); h = 1 < p.length ? p[p.length - 1] : ""; h = h.split("/")[0]; break; case "fragment": h = a.hash.replace("#", ""); break; default: h = a && a.href
            }return h
    }, Ye = function (a) { return a ? a.replace(":", "").toLowerCase() : "" }, Ze = function (a) { var b = ""; if (a && a.href) { var c = a.href.indexOf("#"); b = 0 > c ? a.href : a.href.substr(0, c) } return b },
        af = function (a) { var b = G.createElement("a"); a && (b.href = a); var c = b.pathname; "/" !== c[0] && (a || jd("TAGGING", 1), c = "/" + c); var d = b.hostname.replace(We, ""); return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port } }; function ff(a, b, c, d) { var e = sb[a], f = gf(a, b, c, d); if (!f) return null; var h = Bb(e[Fb.Qd], c, []); if (h && h.length) { var k = h[0]; f = ff(k.index, { C: f, B: 1 === k.ne ? b.terminate : f, terminate: b.terminate }, c, d) } return f }
    function gf(a, b, c, d) {
        function e() {
            if (f[Fb.kf]) k(); else {
                var w = Cb(f, c, []), y = De(c.id, String(f[Fb.va]), Number(f[Fb.Sd]), w[Fb.lf]), x = !1; w.vtp_gtmOnSuccess = function () { if (!x) { x = !0; var z = Da() - B; Fd(c.id, sb[a], "5"); Ee(c.id, y, "success", z); h() } }; w.vtp_gtmOnFailure = function () { if (!x) { x = !0; var z = Da() - B; Fd(c.id, sb[a], "6"); Ee(c.id, y, "failure", z); k() } }; w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id; Fd(c.id, f, "1"); var A = function () { var z = Da() - B; Fd(c.id, f, "7"); Ee(c.id, y, "exception", z); x || (x = !0, k()) }; var B = Da(); try { zb(w, c) } catch (z) { A(z) }
            }
        } var f = sb[a], h = b.C, k = b.B, l = b.terminate; if (c.Uc(f)) return null; var m = Bb(f[Fb.Td], c, []); if (m && m.length) { var p = m[0], r = ff(p.index, { C: h, B: k, terminate: l }, c, d); if (!r) return null; h = r; k = 2 === p.ne ? l : r } if (f[Fb.Id] || f[Fb.rf]) { var u = f[Fb.Id] ? tb : c.ph, q = h, t = k; if (!u[a]) { e = Ga(e); var v = hf(a, u, e); h = v.C; k = v.B } return function () { u[a](q, t) } } return e
    }
    function hf(a, b, c) { var d = [], e = []; b[a] = jf(d, e, c); return { C: function () { b[a] = kf; for (var f = 0; f < d.length; f++)d[f]() }, B: function () { b[a] = lf; for (var f = 0; f < e.length; f++)e[f]() } } } function jf(a, b, c) { return function (d, e) { a.push(d); b.push(e); c() } } function kf(a) { a() } function lf(a, b) { b() }; var of = function (a, b) { for (var c = [], d = 0; d < sb.length; d++)if (a.ub[d]) { var e = sb[d]; var f = b.add(); try { var h = ff(d, { C: f, B: f, terminate: f }, a, d); h ? c.push({ Qe: d, Le: Db(e), ng: h }) : (mf(d, a), f()) } catch (l) { f() } } b.Pf(); c.sort(nf); for (var k = 0; k < c.length; k++)c[k].ng(); return 0 < c.length }; function nf(a, b) { var c, d = b.Le, e = a.Le; c = d > e ? 1 : d < e ? -1 : 0; var f; if (0 !== c) f = c; else { var h = a.Qe, k = b.Qe; f = h > k ? 1 : h < k ? -1 : 0 } return f }
    function mf(a, b) { if (!Cd) return; var c = function (d) { var e = b.Uc(sb[d]) ? "3" : "4", f = Bb(sb[d][Fb.Qd], b, []); f && f.length && c(f[0].index); Fd(b.id, sb[d], e); var h = Bb(sb[d][Fb.Td], b, []); h && h.length && c(h[0].index) }; c(a); }
    var pf = !1, qf = function (a, b, c, d, e) { if ("gtm.js" == b) { if (pf) return !1; pf = !0 } Ed(a, b); var f = Ie(a, d, e); Td(a, "event", 1); Td(a, "ecommerce", 1); Td(a, "gtm"); var h = { id: a, name: b, Uc: qe(c), ub: [], ph: [], Be: function () { jd("GTM", 6) } }; h.ub = Jb(h); var k = of(h, f); "gtm.js" !== b && "gtm.sync" !== b || Te(Vc.w); if (!k) return k; for (var l = 0; l < h.ub.length; l++)if (h.ub[l]) { var m = sb[l]; if (m && !Yc[String(m[Fb.va])]) return !0 } return !1 }; var rf = []; function sf() { var a = gc("google_tag_data", {}); a.ics || (a.ics = { entries: {}, set: tf, update: uf, addListener: vf, notifyListeners: wf, active: !1 }); return a.ics } function tf(a, b, c, d, e) { var f = sf(); f.active = !0; if (void 0 != b) { var h = f.entries, k = h[a] || {}, l = k.region, m = c && g(c) ? c.toUpperCase() : void 0; d = d.toUpperCase(); e = e.toUpperCase(); m !== e && (m === d ? l === e : m || l) || (h[a] = { region: m, initial: "granted" === b, update: k.update }) } }
    function uf(a, b) { var c = sf(); c.active = !0; if (void 0 != b) { var d = xf(a), e = c.entries; e[a] = e[a] || {}; e[a].update = "granted" === b; if (xf(a) !== d) for (var f = 0; f < rf.length; ++f) { var h = rf[f]; sa(h.he) && -1 !== h.he.indexOf(a) && (h.Ke = !0) } } } function vf(a, b) { rf.push({ he: a, pg: b }) } function wf() { for (var a = 0; a < rf.length; ++a) { var b = rf[a]; if (b.Ke) { b.Ke = !1; try { b.pg.call() } catch (c) { } } } }
    var xf = function (a) { var b = sf().entries[a] || {}; return void 0 !== b.update ? b.update : void 0 !== b.initial ? b.initial : void 0 }, yf = function () { return sf().active }, zf = function (a, b) { sf().addListener(a, b) }, Af = function (a, b) { if (!1 === xf(b)) { var c = !1; zf([b], function () { !c && xf(b) && (a(), c = !0) }) } }; var Bf = [J.i, J.J], Cf = function (a) { var b = xf(a); return void 0 != b ? b : !0 }, Df = function () { for (var a = [], b = 0; b < Bf.length; b++) { var c = xf(Bf[b]); a[b] = !0 === c ? "1" : !1 === c ? "0" : "-" } return "G1" + a.join("") }, Ef = function (a, b) { zf(a, b) }; var Ff = function (a, b) { var c = yb(a, b); sb.push(c); return sb.length - 1 }; var Gf = /^https?:\/\/www\.googletagmanager\.com/; function Hf() { var a; return a } function Jf(a, b) { }
    function If(a) { 0 !== a.indexOf("http://") && 0 !== a.indexOf("https://") && (a = "https://" + a); "/" === a[a.length - 1] && (a = a.substring(0, a.length - 1)); return a } function Kf() { var a = !1; return a }; var Lf = function () { this.eventModel = {}; this.targetConfig = {}; this.containerConfig = {}; this.h = {}; this.globalConfig = {}; this.C = function () { }; this.B = function () { } }, Mf = function (a) { var b = new Lf; b.eventModel = a; return b }, Nf = function (a, b) { a.targetConfig = b; return a }, Of = function (a, b) { a.containerConfig = b; return a }, Pf = function (a, b) { a.h = b; return a }, Qf = function (a, b) { a.globalConfig = b; return a }, Rf = function (a, b) { a.C = b; return a }, Sf = function (a, b) { a.B = b; return a };
    Lf.prototype.getWithConfig = function (a) { if (void 0 !== this.eventModel[a]) return this.eventModel[a]; if (void 0 !== this.targetConfig[a]) return this.targetConfig[a]; if (void 0 !== this.containerConfig[a]) return this.containerConfig[a]; if (void 0 !== this.h[a]) return this.h[a]; if (void 0 !== this.globalConfig[a]) return this.globalConfig[a] };
    var Tf = function (a) { function b(e) { C(e, function (f) { c[f] = null }) } var c = {}; b(a.eventModel); b(a.targetConfig); b(a.containerConfig); b(a.globalConfig); var d = []; C(c, function (e) { d.push(e) }); return d }; function Uf(a, b, c) { for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) { var h = e[f].split("="), k = h[0].replace(/^\s*|\s*$/g, ""); if (k && k == a) { var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, ""); l && c && (l = decodeURIComponent(l)); d.push(l) } } return d }; var Vf = {}, Wf = function (a) { return void 0 == Vf[a] ? !1 : Vf[a] }; var Yf = function (a, b, c, d) { return Xf(d) ? Uf(a, String(b || document.cookie), c) : [] }, ag = function (a, b, c, d, e) { if (Xf(e)) { var f = Zf(a, d, e); if (1 === f.length) return f[0].id; if (0 !== f.length) { f = $f(f, function (h) { return h.Sb }, b); if (1 === f.length) return f[0].id; f = $f(f, function (h) { return h.vb }, c); return f[0] ? f[0].id : void 0 } } }; function bg(a, b, c, d) { var e = document.cookie; document.cookie = a; var f = document.cookie; return e != f || void 0 != c && 0 <= Yf(b, f, !1, d).indexOf(c) }
    var fg = function (a, b, c) {
        function d(q, t, v) { if (null == v) return delete h[t], q; h[t] = v; return q + "; " + t + "=" + v } function e(q, t) { if (null == t) return delete h[t], q; h[t] = !0; return q + "; " + t } if (!Xf(c.Ca)) return !1; var f; void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = cg(b), f = a + "=" + b); var h = {}; f = d(f, "path", c.path); var k; c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires); f = d(f, "expires", k); f = d(f, "max-age", c.Th); f = d(f, "samesite",
            c.Zh); c.$h && (f = e(f, "secure")); f = e(f, c.flags); var l = c.domain; if ("auto" === l) { for (var m = dg(), p = 0; p < m.length; ++p) { var r = "none" !== m[p] ? m[p] : void 0, u = d(f, "domain", r); if (!eg(r, c.path) && bg(u, a, b, c.Ca)) return !0 } return !1 } l && "none" !== l && (f = d(f, "domain", l)); return eg(l, c.path) ? !1 : bg(f, a, b, c.Ca)
    }, gg = function (a, b, c) { null == c.path && (c.path = "/"); c.domain || (c.domain = "auto"); return fg(a, b, c) };
    function $f(a, b, c) { for (var d = [], e = [], f, h = 0; h < a.length; h++) { var k = a[h], l = b(k); l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k) } return 0 < d.length ? d : e } function Zf(a, b, c) { for (var d = [], e = Yf(a, void 0, void 0, c), f = 0; f < e.length; f++) { var h = e[f].split("."), k = h.shift(); if (!b || -1 !== b.indexOf(k)) { var l = h.shift(); l && (l = l.split("-"), d.push({ id: h.join("."), Sb: 1 * l[0] || 1, vb: 1 * l[1] || 1 })) } } return d }
    var cg = function (a) { a && 1200 < a.length && (a = a.substring(0, 1200)); return a }, hg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, ig = /(^|\.)doubleclick\.net$/i, eg = function (a, b) { return ig.test(document.location.hostname) || "/" === b && hg.test(a) }, dg = function () {
        var a = [], b = document.location.hostname.split("."); if (4 === b.length) { var c = b[b.length - 1]; if (parseInt(c, 10).toString() === c) return ["none"] } for (var d = b.length - 2; 0 <= d; d--)a.push(b.slice(d).join(".")); var e = document.location.hostname; ig.test(e) || hg.test(e) || a.push("none");
        return a
    }, Xf = function (a) { if (!Wf("gtag_cs_api") || !a || !yf()) return !0; var b = xf(a); return null == b ? !0 : !!b }; var jg = function () { for (var a = ec.userAgent + (G.cookie || "") + (G.referrer || ""), b = a.length, c = F.history.length; 0 < c;)a += c-- ^ b++; var d = 1, e, f, h; if (a) for (d = 0, f = a.length - 1; 0 <= f; f--)h = a.charCodeAt(f), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d; return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(Da() / 1E3)].join(".") }, mg = function (a, b, c, d, e) { var f = kg(b); return ag(a, f, lg(c), d, e) }, ng = function (a, b, c, d) { var e = "" + kg(c), f = lg(d); 1 < f && (e += "-" + f); return [b, e, a].join(".") }, kg = function (a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a; return a.split(".").length
    }, lg = function (a) { if (!a || "/" === a) return 1; "/" !== a[0] && (a = "/" + a); "/" !== a[a.length - 1] && (a += "/"); return a.split("/").length - 1 }; function og(a, b, c) { var d, e = a.tb; null == e && (e = 7776E3); 0 !== e && (d = new Date((b || Da()) + 1E3 * e)); return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d } }; function pg() { for (var a = rg, b = {}, c = 0; c < a.length; ++c)b[a[c]] = c; return b } function sg() { var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; a += a.toLowerCase() + "0123456789-_"; return a + "." } var rg, tg; function ug(a) { rg = rg || sg(); tg = tg || pg(); for (var b = [], c = 0; c < a.length; c += 3) { var d = c + 1 < a.length, e = c + 2 < a.length, f = a.charCodeAt(c), h = d ? a.charCodeAt(c + 1) : 0, k = e ? a.charCodeAt(c + 2) : 0, l = f >> 2, m = (f & 3) << 4 | h >> 4, p = (h & 15) << 2 | k >> 6, r = k & 63; e || (r = 64, d || (p = 64)); b.push(rg[l], rg[m], rg[p], rg[r]) } return b.join("") }
    function vg(a) { function b(l) { for (; d < a.length;) { var m = a.charAt(d++), p = tg[m]; if (null != p) return p; if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m); } return l } rg = rg || sg(); tg = tg || pg(); for (var c = "", d = 0; ;) { var e = b(-1), f = b(0), h = b(64), k = b(64); if (64 === k && -1 === e) return c; c += String.fromCharCode(e << 2 | f >> 4); 64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k))) } }; var wg; var Ag = function () { var a = xg, b = yg, c = zg(), d = function (h) { a(h.target || h.srcElement || {}) }, e = function (h) { b(h.target || h.srcElement || {}) }; if (!c.init) { mc(G, "mousedown", d); mc(G, "keyup", d); mc(G, "submit", e); var f = HTMLFormElement.prototype.submit; HTMLFormElement.prototype.submit = function () { b(this); f.call(this) }; c.init = !0 } }, Bg = function (a, b, c, d, e) { var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e }; zg().decorators.push(f) }, Cg = function (a, b, c) {
        for (var d = zg().decorators, e = {}, f = 0; f < d.length; ++f) {
            var h =
                d[f], k; if (k = !c || h.forms) a: { var l = h.domains, m = a; if (l && (h.sameHost || m !== G.location.hostname)) for (var p = 0; p < l.length; p++)if (l[p] instanceof RegExp) { if (l[p].test(m)) { k = !0; break a } } else if (0 <= m.indexOf(l[p])) { k = !0; break a } k = !1 } if (k) { var r = h.placement; void 0 == r && (r = h.fragment ? 2 : 1); r === b && Ha(e, h.callback()) }
        } return e
    }, zg = function () { var a = gc("google_tag_data", {}), b = a.gl; b && b.decorators || (b = { decorators: [] }, a.gl = b); return b }; var Dg = /(.*?)\*(.*?)\*(.*)/, Eg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/, Fg = /^(?:www\.|m\.|amp\.)+/, Gg = /([^?#]+)(\?[^#]*)?(#.*)?/; function Hg(a) { return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)") }
    var Jg = function (a) { var b = [], c; for (c in a) if (a.hasOwnProperty(c)) { var d = a[c]; void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(ug(String(d)))) } var e = b.join("*"); return ["1", Ig(e), e].join("*") }, Ig = function (a, b) {
        var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d; if (!(d = wg)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var h = f, k = 0; 8 > k; k++)h =
                    h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1; e[f] = h
            } d = e
        } wg = d; for (var l = 4294967295, m = 0; m < c.length; m++)l = l >>> 8 ^ wg[(l ^ c.charCodeAt(m)) & 255]; return ((l ^ -1) >>> 0).toString(36)
    }, Lg = function () { return function (a) { var b = af(F.location.href), c = b.search.replace("?", ""), d = Xe(c, "_gl", !0) || ""; a.query = Kg(d) || {}; var e = $e(b, "fragment").match(Hg("_gl")); a.fragment = Kg(e && e[3] || "") || {} } }, Mg = function () { var a = Lg(), b = zg(); b.data || (b.data = { query: {}, fragment: {} }, a(b.data)); var c = {}, d = b.data; d && (Ha(c, d.query), Ha(c, d.fragment)); return c }, Kg = function (a) {
        var b;
        b = void 0 === b ? 3 : b; try { if (a) { var c; a: { for (var d = a, e = 0; 3 > e; ++e) { var f = Dg.exec(d); if (f) { c = f; break a } d = decodeURIComponent(d) } c = void 0 } var h = c; if (h && "1" === h[1]) { var k = h[3], l; a: { for (var m = h[2], p = 0; p < b; ++p)if (m === Ig(k, p)) { l = !0; break a } l = !1 } if (l) { for (var r = {}, u = k ? k.split("*") : [], q = 0; q < u.length; q += 2)r[u[q]] = vg(u[q + 1]); return r } } } } catch (t) { }
    };
    function Ng(a, b, c, d) { function e(p) { var r = p, u = Hg(a).exec(r), q = r; if (u) { var t = u[2], v = u[4]; q = u[1]; v && (q = q + t + v) } p = q; var w = p.charAt(p.length - 1); p && "&" !== w && (p += "&"); return p + m } d = void 0 === d ? !1 : d; var f = Gg.exec(c); if (!f) return ""; var h = f[1], k = f[2] || "", l = f[3] || "", m = a + "=" + b; d ? l = "#" + e(l.substring(1)) : k = "?" + e(k.substring(1)); return "" + h + k + l }
    function Og(a, b) { var c = "FORM" === (a.tagName || "").toUpperCase(), d = Cg(b, 1, c), e = Cg(b, 2, c), f = Cg(b, 3, c); if (Ia(d)) { var h = Jg(d); c ? Pg("_gl", h, a) : Qg("_gl", h, a, !1) } if (!c && Ia(e)) { var k = Jg(e); Qg("_gl", k, a, !0) } for (var l in f) if (f.hasOwnProperty(l)) a: { var m = l, p = f[l], r = a; if (r.tagName) { if ("a" === r.tagName.toLowerCase()) { Qg(m, p, r, void 0); break a } if ("form" === r.tagName.toLowerCase()) { Pg(m, p, r); break a } } "string" == typeof r && Ng(m, p, r, void 0) } }
    function Qg(a, b, c, d) { if (c.href) { var e = Ng(a, b, c.href, void 0 === d ? !1 : d); Ve.test(e) && (c.href = e) } }
    function Pg(a, b, c) { if (c && c.action) { var d = (c.method || "").toLowerCase(); if ("get" === d) { for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) { var k = e[h]; if (k.name === a) { k.setAttribute("value", b); f = !0; break } } if (!f) { var l = G.createElement("input"); l.setAttribute("type", "hidden"); l.setAttribute("name", a); l.setAttribute("value", b); c.appendChild(l) } } else if ("post" === d) { var m = Ng(a, b, c.action); Ve.test(m) && (c.action = m) } } }
    var xg = function (a) { try { var b; a: { for (var c = a, d = 100; c && 0 < d;) { if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) { b = c; break a } c = c.parentNode; d-- } b = null } var e = b; if (e) { var f = e.protocol; "http:" !== f && "https:" !== f || Og(e, e.hostname) } } catch (h) { } }, yg = function (a) { try { if (a.action) { var b = $e(af(a.action), "host"); Og(a, b) } } catch (c) { } }, Rg = function (a, b, c, d) { Ag(); Bg(a, b, "fragment" === c ? 2 : 1, !!d, !1) }, Sg = function (a) { Ag(); Bg(a, [F.location.hostname], 3, !0, !0) }, Tg = function () {
        var a = G.location.hostname, b = Eg.exec(G.referrer); if (!b) return !1;
        var c = b[2], d = b[1], e = ""; if (c) { var f = c.split("/"), h = f[1]; e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h) } else if (d) { if (0 === d.indexOf("xn--")) return !1; e = d.replace(/-/g, ".").replace(/\.\./g, "-") } var k = a.replace(Fg, ""), l = e.replace(Fg, ""), m; if (!(m = k === l)) { var p = "." + l; m = k.substring(k.length - p.length, k.length) === p } return m
    }, Ug = function (a, b) { return !1 === a ? !1 : a || b || Tg() }; var Vg = /^\w+$/, Wg = /^[\w-]+$/, Xg = /^~?[\w-]+$/, Yg = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp" }, Zg = function (a) { var b; if (Wf("gtag_cs_api") && yf()) { var c = xf("ad_storage"); b = null == c ? !0 : !!c } else b = !0; b ? a() : Af(a, "ad_storage") }; function $g(a) { return a && "string" == typeof a && a.match(Vg) ? a : "_gcl" }
    var bh = function () { var a = af(F.location.href), b = $e(a, "query", !1, void 0, "gclid"), c = $e(a, "query", !1, void 0, "gclsrc"), d = $e(a, "query", !1, void 0, "dclid"); if (!b || !c) { var e = a.hash.replace("#", ""); b = b || Xe(e, "gclid", void 0); c = c || Xe(e, "gclsrc", void 0) } return ah(b, c, d) }, ah = function (a, b, c) {
        var d = {}, e = function (f, h) { d[h] || (d[h] = []); d[h].push(f) }; d.gclid = a; d.gclsrc = b; d.dclid = c; if (void 0 !== a && a.match(Wg)) switch (b) {
            case void 0: e(a, "aw"); break; case "aw.ds": e(a, "aw"); e(a, "dc"); break; case "ds": e(a, "dc"); break; case "3p.ds": Wf("gtm_3pds") &&
                e(a, "dc"); break; case "gf": e(a, "gf"); break; case "ha": e(a, "ha"); break; case "gp": e(a, "gp")
        }c && e(c, "dc"); return d
    }, dh = function (a) { var b = bh(); Zg(function () { return ch(b, a) }) };
    function ch(a, b, c) { function d(m, p) { var r = eh(m, e); r && (gg(r, p, f), h = !0) } b = b || {}; var e = $g(b.prefix); c = c || Da(); var f = og(b, c, !0); f.Ca = "ad_storage"; var h = !1, k = Math.round(c / 1E3), l = function (m) { return ["GCL", k, m].join(".") }; a.aw && (!0 === b.di ? d("aw", l("~" + a.aw[0])) : d("aw", l(a.aw[0]))); a.dc && d("dc", l(a.dc[0])); a.gf && d("gf", l(a.gf[0])); a.ha && d("ha", l(a.ha[0])); a.gp && d("gp", l(a.gp[0])); return h }
    var gh = function (a, b) { var c = Mg(); Zg(function () { for (var d = $g(b.prefix), e = 0; e < a.length; ++e) { var f = a[e]; if (void 0 !== Yg[f]) { var h = eh(f, d), k = c[h]; if (k) { var l = Math.min(fh(k), Da()), m; b: { for (var p = l, r = Yf(h, G.cookie, void 0, "ad_storage"), u = 0; u < r.length; ++u)if (fh(r[u]) > p) { m = !0; break b } m = !1 } if (!m) { var q = og(b, l, !0); q.Ca = "ad_storage"; gg(h, k, q) } } } } ch(ah(c.gclid, c.gclsrc), b) }) }, eh = function (a, b) { var c = Yg[a]; if (void 0 !== c) return b + c }, fh = function (a) {
        var b = a.split("."); return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) ||
            0)
    }; function hh(a) { var b = a.split("."); if (3 == b.length && "GCL" == b[0] && b[1]) return b[2] }
    var ih = function (a, b, c, d, e) { if (sa(b)) { var f = $g(e), h = function () { for (var k = {}, l = 0; l < a.length; ++l) { var m = eh(a[l], f); if (m) { var p = Yf(m, G.cookie, void 0, "ad_storage"); p.length && (k[m] = p.sort()[p.length - 1]) } } return k }; Zg(function () { Rg(h, b, c, d) }) } }, jh = function (a) { return a.filter(function (b) { return Xg.test(b) }) }, kh = function (a, b) {
        for (var c = $g(b.prefix), d = {}, e = 0; e < a.length; e++)Yg[a[e]] && (d[a[e]] = Yg[a[e]]); Zg(function () {
            C(d, function (f, h) {
                var k = Yf(c + h, G.cookie, void 0, "ad_storage"); if (k.length) {
                    var l = k[0], m = fh(l),
                        p = {}; p[f] = [hh(l)]; ch(p, b, m)
                }
            })
        })
    }, lh = function () { var a = ["", "aw.ds"], b = bh(), c = b.gclid, d = b.gclsrc || ""; c && -1 !== a.indexOf(d) && Sg(function () { var e = { gclid: c }; d && (e.gclsrc = d); return e }) }; function mh() { var a = !1; return a }
    function nh(a) {
        function b(l) { var m; Wc.reported_gclid || (Wc.reported_gclid = {}); m = Wc.reported_gclid; var p = d + (l ? "gcu" : "gcs"); if (!m[p]) { m[p] = !0; var r = [], u = function (t, v) { v && r.push(t + "=" + encodeURIComponent(v)) }, q = d; u("gclid", q); u("gclsrc", e); sc("https://www.google.com/pagead/landing?" + r.join("&")) } } var c = bh(), d = c.gclid || "", e = c.gclsrc, f = !a &&
            (!d || e && "aw.ds" !== e ? !1 : !0), h = mh(); if (f || h) { var k = "" + jg(); b(); }
    }; var oh; if (3 === Vc.Kb.length) oh = "g"; else { var ph = "G"; ph = "g"; oh = ph }
    var qh = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: oh, OPT: "o" }, rh = function (a) {
        var b = Vc.w.split("-"), c = b[0].toUpperCase(), d = qh[c] || "i", e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f; if (3 === Vc.Kb.length) { var h = void 0; h = h || (Wd() ? "s" : "o"); f = "2" + (h || "w") } else f =
            ""; return f + d + Vc.Kb + e
    };
    var sh = function (a) { var b = Jf(a, "/pagead/conversion_async.js"); return b ? b : -1 === navigator.userAgent.toLowerCase().indexOf("firefox") ? Q("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js") : "https://www.google.com/pagead/conversion_async.js" }, th = !1, uh = [], vh = ["aw", "dc"], wh = function (a) { var b = F.google_trackConversion, c = a.gtm_onFailure; "function" == typeof b ? b(a) || c() : c() }, xh = function () { for (; 0 < uh.length;)wh(uh.shift()) }, yh = function (a) {
        if (!th) {
            th = !0; Je(); var b = function () { xh(); uh = { push: wh } };
            Wd() ? b() : ic(a, b, function () { xh(); th = !1 })
        }
    }, zh = function (a) { if (a) { for (var b = [], c = 0; c < a.length; ++c) { var d = a[c]; d && b.push({ item_id: d.id, quantity: d.quantity, value: d.price, start_date: d.start_date, end_date: d.end_date }) } return b } }, Ah = function (a, b, c, d) {
        var e = Sc(a), f = b == J.D, h = e.s[0], k = e.s[1], l = void 0 !== k, m = function (U) { return d.getWithConfig(U) }, p = !1 !== m(J.Ka), r = m(J.Ja) || m(J.Y), u = m(J.X), q = m(J.ba), t = m(J.fa), v = m(J.xa), w = sh(v), y = { prefix: r, domain: u, tb: q, flags: t }; if (f) {
            var x = m(J.sa) || {}; p && (Ug(x[J.fb], !!x[J.H]) &&
                gh(vh, y), dh(y), kh(["aw", "dc"], y)); x[J.H] && ih(vh, x[J.H], x[J.hb], !!x[J.gb], r); var A = !1; A = !0; A ? ie(e, d) : ie(e); nh();
        } var B = !1 === m(J.Hd) || !1 ===
            m(J.kb); if (f && (l || B)) yh(w); else if (!0 === m(J.Jd) && (l = !1), !1 !== m(J.aa) || l) {
                var z = {
                    google_conversion_id: h, google_remarketing_only: !l, onload_callback: d.C, gtm_onFailure: d.B, google_conversion_format: "3", google_conversion_color: "ffffff", google_conversion_domain: "", google_conversion_label: k, google_conversion_language: m(J.Ma), google_conversion_value: m(J.Z), google_conversion_currency: m(J.ia),
                    google_conversion_order_id: m(J.lb), google_user_id: m(J.mb), google_conversion_page_url: m(J.ib), google_conversion_referrer_url: m(J.jb), google_gtm: rh(), google_transport_url: Jf(v, "/")
                }; z.google_restricted_data_processing = m(J.zc); Wd() && (z.opt_image_generator = function () { return new Image }, z.google_enable_display_cookie_match = !1); !1 === m(J.aa) && (z.google_allow_ad_personalization_signals = !1); z.google_read_gcl_cookie_opt_out =
                    !p; p && r && (z.google_gcl_cookie_prefix = r); var E = function () { var U = m(J.Yb), L = { event: b }; if (sa(U)) { jd("GTM", 26); for (var N = 0; N < U.length; ++N) { var P = U[N], T = m(P); void 0 !== T && (L[P] = T) } return L } var na = d.eventModel; if (!na) return null; D(na, L); for (var ia = 0; ia < J.Ed.length; ++ia)delete L[J.Ed[ia]]; return L }(); E && (z.google_custom_params = E); !l && m(J.R) && (z.google_gtag_event_data = { items: m(J.R), value: m(J.Z) }); if (l && b == J.ma) {
                        z.google_conversion_merchant_id = m(J.Rd); z.google_basket_feed_country = m(J.Md); z.google_basket_feed_language =
                            m(J.Pd); z.google_basket_discount = m(J.Ld); z.google_basket_transaction_type = b; z.google_disable_merchant_reported_conversions = !0 === m(J.Wd); Wd() && (z.google_disable_merchant_reported_conversions = !0); var H = zh(m(J.R)); H && (z.google_conversion_items = H)
                    } var K = function (U, L) { void 0 != L && "" !== L && (z.google_additional_conversion_params = z.google_additional_conversion_params || {}, z.google_additional_conversion_params[U] = L) };
                l && (K("vdnc", m(J.be)), K("vdltv", m(J.Vd))); var R = !0; R && uh.push(z); yh(w);
            } else yh(w)
    }; var Bh = ["1"], Ch = {}, Gh = function (a) { var b = Dh(a.prefix); Ch[b] || Eh(b, a.path, a.domain) || (Fh(b, jg(), a), Eh(b, a.path, a.domain)) }; function Fh(a, b, c) { var d = ng(b, "1", c.domain, c.path), e = og(c); e.Ca = "ad_storage"; gg(a, d, e) } function Eh(a, b, c) { var d = mg(a, b, c, Bh, "ad_storage"); d && (Ch[a] = d); return d } function Dh(a) { return (a || "_gcl") + "_au" }; var Hh = function () { for (var a = [], b = G.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) { var e = b[d].match(c); e && a.push({ md: e[1], value: e[2] }) } var f = {}; if (!a || !a.length) return f; for (var h = 0; h < a.length; h++) { var k = a[h].value.split("."); "1" == k[0] && 3 == k.length && k[1] && (f[a[h].md] || (f[a[h].md] = []), f[a[h].md].push({ timestamp: k[1], rg: k[2] })) } return f }; var Ih = /^\d+\.fls\.doubleclick\.net$/; function Jh(a) { Cf("ad_storage") ? a() : Af(a, "ad_storage") } function Kh(a) { var b = af(F.location.href), c = $e(b, "host", !1); if (c && c.match(Ih)) { var d = $e(b, "path").split(a + "="); if (1 < d.length) return d[1].split(";")[0].split("?")[0] } }
    function Lh(a, b) { if ("aw" == a || "dc" == a) { var c = Kh("gcl" + a); if (c) return c.split(".") } var d = $g(b); if ("_gcl" == d) { var e; e = bh()[a] || []; if (0 < e.length) return e } var f = eh(a, d), h; if (f) { var k = []; if (G.cookie) { var l = Yf(f, G.cookie, void 0, "ad_storage"); if (l && 0 != l.length) { for (var m = 0; m < l.length; m++) { var p = hh(l[m]); p && -1 === n(k, p) && k.push(p) } h = jh(k) } else h = k } else h = k } else h = []; return h }
    var Mh = function () { var a = Kh("gac"); if (a) return decodeURIComponent(a); var b = Hh(), c = []; C(b, function (d, e) { for (var f = [], h = 0; h < e.length; h++)f.push(e[h].rg); f = jh(f); f.length && c.push(d + ":" + f.join(",")) }); return c.join(";") }, Nh = function (a, b) {
        var c = bh().dc || []; Jh(function () {
            Gh(b); var d = Ch[Dh(b.prefix)], e = !1; if (d && 0 < c.length) { var f = Wc.joined_au = Wc.joined_au || {}, h = b.prefix || "_gcl"; if (!f[h]) for (var k = 0; k < c.length; k++) { var l = "https://adservice.google.com/ddm/regclk"; l = l + "?gclid=" + c[k] + "&auiddc=" + d; sc(l); e = f[h] = !0 } } null == a && (a =
                e); if (a && d) { var m = Dh(b.prefix), p = Ch[m]; p && Fh(m, p, b) }
        })
    };
    var Oh = function (a) { return !(void 0 === a || null === a || 0 === (a + "").length) }, Ph = function (a, b) { var c; if (2 === b.W) return a("ord", wa(1E11, 1E13)), !0; if (3 === b.W) return a("ord", "1"), a("num", wa(1E11, 1E13)), !0; if (4 === b.W) return Oh(b.sessionId) && a("ord", b.sessionId), !0; if (5 === b.W) c = "1"; else if (6 === b.W) c = b.hd; else return !1; Oh(c) && a("qty", c); Oh(b.Pb) && a("cost", b.Pb); Oh(b.transactionId) && a("ord", b.transactionId); return !0 }, Rh = function (a, b, c) {
        function d(u, q, t) { h.hasOwnProperty(u) || (q += "", f += ";" + u + "=" + (t ? q : Qh(q))) } var e =
            a.Nc, f = a.protocol; f += a.jc ? "//" + e + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity"; f += ";src=" + Qh(e) + (";type=" + Qh(a.Qc)) + (";cat=" + Qh(a.ob)); var h = a.hg || {}; C(h, function (u, q) { f += ";" + Qh(u) + "=" + Qh(q + "") }); if (Ph(d, a)) { Oh(a.sc) && d("u", a.sc); Oh(a.qc) && d("tran", a.qc); d("gtm", rh()); !1 === a.Mf && d("npa", "1"); var k = !0; if (a.Mc && k) { var l = Lh("dc", a.Na); l && l.length && d("gcldc", l.join(".")); var m = Lh("aw", a.Na); m && m.length && d("gclaw", m.join(".")); var p = Mh(); p && d("gac", p); Gh({ prefix: a.Na, tb: a.eg, domain: a.dg, flags: a.Nh }); var r = Ch[Dh(a.Na)]; r && d("auiddc", r) } Oh(a.dd) && d("prd", a.dd, !0); C(a.od, function (u, q) { d(u, q) }); f += b || ""; Oh(a.cc) && d("~oref", a.cc); a.jc ? kc(f + "?", a.C) : lc(f + "?", a.C, a.B) } else I(a.B)
    }, Qh = encodeURIComponent, Sh = function (a, b) { Rh(a, b) };
    var Th = function (a, b, c, d) { function e() { var f = { config: a, gtm: rh() }; c && (Gh(d), f.auiddc = Ch[Dh(d.prefix)]); b && (f.loadInsecure = b); void 0 === F.__dc_ns_processor && (F.__dc_ns_processor = []); F.__dc_ns_processor.push(f); ic((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js") } Cf(J.i) ? e() : Af(e, J.i) }, Uh = function (a, b, c) {
        var d = /^u([1-9]\d?|100)$/, e = a.getWithConfig(J.Ve) || {}, f = Rd(b, c); f = Tf(a); var h =
            {}, k = {}; if (Pa(e)) for (var l in e) if (e.hasOwnProperty(l) && d.test(l)) { var m = e[l]; g(m) && (h[l] = m) } for (var p = 0; p < f.length; p++) { var r = f[p]; d.test(r) && (h[r] = r) } for (var u in h) h.hasOwnProperty(u) && (k[u] = a.getWithConfig(h[u])); return k
    }, Vh = function (a) { function b(l, m, p) { void 0 !== p && 0 !== (p + "").length && d.push(l + m + ":" + c(p + "")) } var c = encodeURIComponent, d = [], e = a(J.R) || []; if (sa(e)) for (var f = 0; f < e.length; f++) { var h = e[f], k = f + 1; b("i", k, h.id); b("p", k, h.price); b("q", k, h.quantity); b("c", k, a(J.Te)); b("l", k, a(J.Ma)) } return d.join("|") },
        Wh = function (a) { var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a); if (b) { var c = { standard: 2, unique: 3, per_session: 4, transactions: 5, items_sold: 6, "": 1 }[(b[5] || "").toLowerCase()]; if (c) return { containerId: "DC-" + b[1], U: b[3] ? a : "", Gf: b[1], Ff: b[3] || "", ob: b[4] || "", W: c } } }, Yh = function (a, b, c, d) {
            var e = Wh(a); if (e) {
                var f = function (R) { return d.getWithConfig(R) }, h = !1 !== f(J.Ka), k = f(J.Ja) || f(J.Y), l = f(J.X), m = f(J.ba), p = f(J.fa), r = f(J.Ye), u = 3 === Xd(); if (b === J.D) {
                    var q = { prefix: k, domain: l, tb: m, flags: p }, t = f(J.sa) || {}, v = f(J.Eb),
                        w = void 0 === v ? !0 : !!v; if (h) { if (Ug(t[J.fb], !!t[J.H])) { gh(Xh, q); } dh(q); kh(Xh, q); Nh(w, q) } if (t[J.H]) { ih(Xh, t[J.H], t[J.hb], !!t[J.gb], k); } if (r && r.exclusion_parameters && r.engines) if (Wd()) { } else Th(r, u, h, q); I(d.C)
                } else {
                    var y = {}, x = f(J.We); if (Pa(x)) for (var A in x) if (x.hasOwnProperty(A)) { var B = x[A]; void 0 !== B && null !== B && (y[A] = B) } var z = ""; if (5 === e.W || 6 === e.W) z = Vh(f); var E = Uh(d, e.containerId, e.U), H = !0 === f(J.yh); if (Wd() && H) { H = !1 } var K = {
                        ob: e.ob, Mc: h, dg: l, eg: m, Na: k, Pb: f(J.Z), W: e.W, hg: y, Nc: e.Gf, Qc: e.Ff, B: d.B, C: d.C, cc: Ze(af(F.location.href)), dd: z, protocol: u ? "http:" : "https:", hd: f(J.uf),
                        jc: H, sessionId: f(J.ac), qc: void 0, transactionId: f(J.lb), sc: void 0, od: E, Mf: !1 !== f(J.aa)
                    }; Sh(K)
                }
            } else I(d.B)
        }, Xh = ["aw", "dc"];
    var $h = function (a) {
        function b() {
            var f = c, h = Zh(JSON.stringify(a[f])), k = Zh(a.conversion_id), l = "https://www.googletraveladservices.com/travel/flights/clk/pagead/conversion"; l = "https://www.google.com/travel/flights/click/conversion"; var m = l + "/" + k + "/?" + f + "=" + h; if (a.conversionLinkerEnabled) { var p = Lh("gf", a.cookiePrefix); if (p && p.length) for (var r = 0; r < p.length; r++)m += "&gclgf=" + Zh(p[r]) } lc(m, a.onSuccess,
                a.onFailure)
        } var c; if (a.hasOwnProperty("conversion_data")) c = "conversion_data"; else if (a.hasOwnProperty("price")) c = "price"; else return; var d = !0; if (d) b(); else { var e = !1; Ef([J.i], function () { !e && Cf(J.i) && (b(), e = !0) }) }
    }, Zh = function (a) { return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a)) };
    var ai = /.*\.google\.com(:\d+)?\/booking\/flights.*/, ci = function (a, b, c, d) {
        var e = function (A) { return d.getWithConfig(A) }, f = Sc(a).s[0], h = !1 !== e(J.Ka), k = e(J.Ja) || e(J.Y), l = e(J.X), m = e(J.ba), p = e(J.fa); if (b === J.D) { if (h) { var r = function () { var A = { prefix: k, domain: l, flags: p, tb: m }; dh(A); kh(["aw", "dc"], A) }, u = !0; if (u) r(); else { var q = !1; Ef([J.i], function () { !q && Cf(J.i) && (r(), q = !0) }) } } I(d.C) } else {
            var t = {
                conversion_id: f,
                onFailure: d.B, onSuccess: d.C, conversionLinkerEnabled: h, cookiePrefix: k
            }, v = ai.test(F.location.href); if (b !== J.ma) I(d.B); else {
                var y = { partner_id: f, trip_type: e(J.zf), total_price: e(J.Z), currency: e(J.ia), is_direct_booking: v, flight_segment: bi(e(J.R)) }, x = e(J.vd); x && "object" === typeof x &&
                    (y.passengers_total = za(x.total), y.passengers_adult = za(x.adult), y.passengers_child = za(x.child), y.passengers_infant_in_seat = za(x.infant_in_seat), y.passengers_infant_in_lap = za(x.infant_in_lap)); t.conversion_data = y; $h(t)
            }
        }
    }, bi = function (a) {
        if (a) {
            for (var b = [], c = 0, d = 0; d < a.length; ++d) {
                var e = a[d]; !e || void 0 !== e.category && "" !== e.category && "FlightSegment" !== e.category || (b[c] = {
                    cabin: e.travel_class, fare_product: e.fare_product, booking_code: e.booking_code, flight_number: e.flight_number, origin: e.origin, destination: e.destination,
                    departure_date: e.start_date
                }, c++)
            } return b
        }
    };
    var hi = function (a, b, c, d) {
        function e() { if (k) { var E = b === J.Ia ? Lh("aw", l) : Lh("ha", l); y += E.map(function (H) { return "&gclha=" + encodeURIComponent(H) }).join("") } lc(y, d.C, d.B) } var f = Sc(a), h = function (E) { return d.getWithConfig(E) }, k = !1 !== h(J.Ka), l = h(J.Ja) || h(J.Y), m = h(J.X), p = h(J.ba), r = h(J.fa); if (b === J.D) {
            var u = function () { if (k) { var E = { prefix: l, domain: m, flags: r, tb: p }; Ug(q[J.fb], !!q[J.H]) && gh(di, E); dh(E); kh(["aw", "dc"], E) } if (q[J.H]) { ih(di, q[J.H], q[J.hb], !!q[J.gb], l); } },
                q = h(J.sa) || {}, t = !0; if (t) u(); else { var v = !1; Ef([J.i], function () { !v && Cf(J.i) && (u(), v = !0) }) } I(d.C)
        } else {
            var w = f.s[0]; if (/^\d+$/.test(w)) {
                var y = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + encodeURIComponent(w) + "/"; if (b === J.ma) { var x = ei(h(J.lb), h(J.Z), h(J.ia), h(J.R)); x = encodeURIComponent(fi(x)); y += "?data=" + x } else if (b === J.Ia) {
                    var A = gi(w, h(J.Z), h(J.$d), h(J.ia), h(J.R)); A =
                        encodeURIComponent(fi(A)); y += "?label=FH&guid=ON&script=0&ord=" + wa(0, 4294967295) + ("&price=" + A)
                } else { I(d.B); return } var B = !0; if (B) e(); else { var z = !1; Ef([J.i], function () { !z && Cf(J.i) && (e(), z = !0) }) }
            } else I(d.B)
        }
    }, ei = function (a, b, c, d) {
        var e = {}; ii(a) && (e.hct_booking_xref = a); g(c) && (e.hct_currency_code = c); ii(b) && (e.hct_total_price = b, e.hct_base_price = b); if (!sa(d) || 0 === d.length) return e; var f = d[0]; if (!Pa(f)) return e;
        ii(f[ji.ya]) && (e.hct_partner_hotel_id = f[ji.ya]); g(f[ji.na]) && (e.hct_checkin_date = f[ji.na]); g(f[ji.Ya]) && (e.hct_checkout_date = f[ji.Ya]); return e
    }, gi = function (a, b, c, d, e) {
        function f(p) { void 0 === p && (p = 0); if (ii(p)) return l + p } function h(p, r, u) { u(r) && (k[p] = r) } var k = {}; k.partner_id = a; var l = "USD"; g(d) && (l = k.currency = d); ii(b) && (k.base_price_value_string = f(b), k.display_price_value_string = f(b)); ii(c) && (k.tax_price_value_string = f(c)); g("LANDING_PAGE") && (k.page_type = "LANDING_PAGE"); if (!sa(e) || 0 == e.length) return k;
        var m = e[0]; if (!Pa(m)) return k; ii(m[ji.Kd]) && (k.total_price_value_string = f(m[ji.Kd])); h("partner_hotel_id", m[ji.ya], ii); h("check_in_date", m[ji.na], g); h("check_out_date", m[ji.Ya], g); h("adults", m[ji.qf], ki); h(ji.Od, m[ji.Od], g); h(ji.Nd, m[ji.Nd], g); return k
    }, fi = function (a) { var b = []; C(a, function (c, d) { b.push(c + "=" + d) }); return b.join(";") }, ii = function (a) { return g(a) || ki(a) }, ki = function (a) { return "number" === typeof a }, ji = { ya: "id", Kd: "price", na: "start_date", Ya: "end_date", qf: "occupancy", Od: "room_id", Nd: "rate_rule_id" },
        di = ["ha"];
    var ni = function (a, b, c, d) {
        var e = Sc(a), f = !1 !== d.getWithConfig(J.Ka), h = d.getWithConfig(J.Ja) || d.getWithConfig(J.Y), k = d.getWithConfig(J.fa); if (b === J.D) { if (f) { var l = function () { var u = { prefix: h, flags: k }; dh(u); kh(["aw", "dc"], u) }, m = !0; if (m) l(); else { var p = !1; Ef([J.i], function () { !p && Cf(J.i) && (l(), p = !0) }) } } I(d.C) } else if (b === J.ma) {
            var r = li(d.getWithConfig(J.Z), d.getWithConfig(J.ia), d.getWithConfig(J.vd),
                d.getWithConfig(J.R)); mi(e.s[0], r, f, h, d.C, d.B)
        } else I(d.B)
    }, li = function (a, b, c, d) {
        var e = {}; if (g(a) || "number" === typeof a) e.base_price_value_string = "" + b + a, e.tax_price_value_string = b + "0"; Pa(c) && "number" === typeof c.adult && (e.adult_count = c.adult); if (!sa(d) || 0 === d.length) return e; var f = d[0]; if (!Pa(f)) return e; if (g(f[oi.ya]) || "number" === typeof f[oi.ya]) e.partner_hotel_id = f[oi.ya]; g(f[oi.na]) && (e.hotel_checkin_date = f[oi.na]); var h = f[oi.Ya]; g(h) && (e.hotel_checkout_date = h, e.return_date = h); if (1 === d.length) return e;
        var k = d[1]; if (!Pa(k)) return e; e.origin_airport = k[oi.sf]; e.departure_date = k[oi.na]; for (var l = [k[oi.Ud]], m = [k[oi.wd]], p = [k[oi.Cd]], r = null !== h && g(h), u = 1, q = 2; q < d.length; q++) { var t = d[q]; Pa(t) && (l.push(t[oi.Ud]), m.push(t[oi.wd]), p.push(t[oi.Cd]), r && t[oi.na] < h && (u = q)) } r && (e.destination_airport = d[u][oi.Xe]); e.cabins = l.join(","); e.booking_codes = m.join(","); e.flight_numbers = p.join(","); return e
    }, mi = function (a, b, c, d, e, f) {
        function h() {
            c && (m += Lh("gp", d).map(function (u) { return "&gclgp=" + encodeURIComponent(u) }).join(""));
            lc(m, e, f)
        } if (/^\d+$/.test(a)) { var k = encodeURIComponent(a), l = encodeURIComponent(pi(b)), m = "https://www.googletraveladservices.com/travel/vacations/clk/pagead/conversion/" + k + "/?data=" + l, p = !0; if (p) h(); else { var r = !1; Ef([J.i], function () { !r && Cf(J.i) && (h(), r = !0) }) } } else I(f)
    }, pi = function (a) { var b = [], c; for (c in a) a.hasOwnProperty(c) && b.push(c + "=" + a[c]); return b.join(";") }, oi = {
        ya: "id", na: "start_date",
        Ya: "end_date", sf: "origin", Ud: "travel_class", wd: "booking_code", Cd: "flight_number", Xe: "destination"
    };
    var zi = function (a, b, c, d) {
        var e = "https://www.google-analytics.com/analytics.js", f = Qe(); if (qa(f)) {
            var h = "gtag_" + a.split("-").join("_"), k = function (x) { var A = [].slice.call(arguments, 0); A[0] = h + "." + A[0]; f.apply(window, A) }, l = function () {
                var x = function (E, H) { for (var K = 0; H && K < H.length; K++)k(E, H[K]) }, A = qi(b, d); if (A) {
                    var B = A.action; if ("impressions" === B) x("ec:addImpression", A.Ag); else if ("promo_click" === B || "promo_view" === B) { var z = A.ed; x("ec:addPromo", A.ed); z && 0 < z.length && "promo_click" === B && k("ec:setAction", B) } else x("ec:addProduct",
                        A.Ra), k("ec:setAction", B, A.nb)
                }
            }, m = function () { if (Wd()) { } else { var x = d.getWithConfig(J.nf); x && (k("require", x, { dataLayer: "dataLayer" }), k("require", "render")) } }, p = ri(a, h, b, d); si(h, p.Oa) && (f(function () { Oe() && Oe().remove(h) }), ti[h] = !1); f("create", a, p.Oa); (function () { var x = d.getWithConfig("custom_map"); f(function () { if (Pa(x)) { var A = p.oa, B = Oe().getByName(h), z; for (z in x) if (x.hasOwnProperty(z) && /^(dimension|metric)\d+$/.test(z) && void 0 != x[z]) { var E = B.get(ui(x[z])); vi(A, z, E) } } }) })(); (function (x) { if (x) { var A = {}; if (Pa(x)) for (var B in wi) wi.hasOwnProperty(B) && xi(wi[B], B, x[B], A); k("require", "linkid", A) } })(p.linkAttribution);
            var u = p[J.sa]; if (u && u[J.H]) { var q = u[J.hb]; Re(h + ".", u[J.H], void 0 === q ? !!u.use_anchor : "fragment" === q, !!u[J.gb]) } var t = function (x, A, B) { B && (A = "" + A); p.oa[x] = A }; if (b === J.rd) m(), k("send", "pageview", p.oa); else if (b === J.D) { m(); var v = !1; v = !0; v ? ie(a, d) : ie(a); 0 != p.sendPageView && k("send", "pageview", p.oa) } else "screen_view" === b ? k("send", "screenview", p.oa) : "timing_complete" === b ? (t("timingCategory",
                p.eventCategory, !0), t("timingVar", p.name, !0), t("timingValue", za(p.value)), void 0 !== p.eventLabel && t("timingLabel", p.eventLabel, !0), k("send", "timing", p.oa)) : "exception" === b ? k("send", "exception", p.oa) : "optimize.callback" !== b && (0 <= n([J.pd, "select_content", J.Ia, J.Nb, J.Ob, J.eb, "set_checkout_option", J.ma, J.Qb, "view_promotion", "checkout_progress"], b) && (k("require", "ec", "ec.js"), l()), t("eventCategory", p.eventCategory, !0), t("eventAction", p.eventAction || b, !0), void 0 !== p.eventLabel && t("eventLabel", p.eventLabel,
                    !0), void 0 !== p.value && t("eventValue", za(p.value)), k("send", "event", p.oa)); if (!yi) { yi = !0; Je(); var w = d.B, y = function () { Oe().loaded || w() }; Wd() ? I(y) : ic(e, y, w) }
        } else I(d.B)
    }, yi, ti = {}, Ai = { client_id: 1, client_storage: "storage", cookie_name: 1, cookie_domain: 1, cookie_expires: 1, cookie_path: 1, cookie_update: 1, cookie_flags: 1, sample_rate: 1, site_speed_sample_rate: 1, use_amp_client_id: 1, store_gac: 1, conversion_linker: "storeGac" }, Bi = {
        anonymize_ip: 1, app_id: 1, app_installer_id: 1, app_name: 1, app_version: 1, campaign: {
            name: "campaignName",
            source: "campaignSource", medium: "campaignMedium", term: "campaignTerm", content: "campaignContent", id: "campaignId"
        }, currency: "currencyCode", description: "exDescription", fatal: "exFatal", language: 1, non_interaction: 1, page_hostname: "hostname", page_referrer: "referrer", page_path: "page", page_location: "location", page_title: "title", screen_name: 1, transport_type: "transport", user_id: 1
    }, Ci = { content_id: 1, event_category: 1, event_action: 1, event_label: 1, link_attribution: 1, linker: 1, method: 1, name: 1, send_page_view: 1, value: 1 },
        wi = { cookie_name: 1, cookie_expires: "duration", levels: 1 }, Di = { anonymize_ip: 1, fatal: 1, non_interaction: 1, use_amp_client_id: 1, send_page_view: 1, store_gac: 1, conversion_linker: 1 }, xi = function (a, b, c, d) { if (void 0 !== c) if (Di[b] && (c = Aa(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[ui(b)] = c; else if (g(a)) d[a] = c; else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]) }, ui = function (a) { return a && g(a) ? a.replace(/(_[a-z])/g, function (b) { return b[1].toUpperCase() }) : a }, Ei = function (a) {
            var b = "general"; 0 <= n([J.Fd,
            J.Nb, J.Gd, J.eb, "checkout_progress", J.ma, J.Qb, J.Ob, "set_checkout_option"], a) ? b = "ecommerce" : 0 <= n("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), a) ? b = "engagement" : "exception" === a && (b = "error"); return b
        }, vi = function (a, b, c) { a.hasOwnProperty(b) || (a[b] = c) }, Fi = function (a) {
            if (sa(a)) {
                for (var b = [], c = 0; c < a.length; c++) { var d = a[c]; if (void 0 != d) { var e = d.id, f = d.variant; void 0 != e && void 0 != f && b.push(String(e) + "." + String(f)) } } return 0 <
                    b.length ? b.join("!") : void 0
            }
        }, ri = function (a, b, c, d) {
            var e = function (z) { return d.getWithConfig(z) }, f = {}, h = {}, k = {}, l = Fi(e(J.df)); l && vi(h, "exp", l); var m = e("custom_map"); if (Pa(m)) for (var p in m) if (m.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != m[p]) { var r = e(String(m[p])); void 0 !== r && vi(h, p, r) } var u = Rd(a); u = Tf(d); for (var q = 0; q < u.length; ++q) {
                var t = u[q], v = e(t); if (Ci.hasOwnProperty(t)) xi(Ci[t],
                    t, v, f); else if (Bi.hasOwnProperty(t)) xi(Bi[t], t, v, h); else if (Ai.hasOwnProperty(t)) xi(Ai[t], t, v, k); else if (/^(dimension|metric|content_group)\d+$/.test(t)) xi(1, t, v, h); else if ("developer_id" === t) { } else t === J.Y && 0 > n(u, J.Wb) && (k.cookieName = v + "_ga")
            } vi(k, "cookieDomain", "auto"); vi(h, "forceSSL", !0); vi(f, "eventCategory", Ei(c)); 0 <= n(["view_item", "view_item_list", "view_promotion",
                "view_search_results"], c) && vi(h, "nonInteraction", !0); "login" === c || "sign_up" === c || "share" === c ? vi(f, "eventLabel", e(J.jf)) : "search" === c || "view_search_results" === c ? vi(f, "eventLabel", e(J.wf)) : "select_content" === c && vi(f, "eventLabel", e(J.Eh)); var y = f[J.sa] || {}, x = y[J.fb]; x || 0 != x && y[J.H] ? k.allowLinker = !0 : !1 === x && vi(k, "useAmpClientId", !1); if (!1 === e(J.Ch) || !1 === e(J.aa) || !1 === e(J.Za)) h.allowAdFeatures = !1; !1 === e(J.aa) && jd("GTM", 27); k.name = b; h["&gtm"] = rh(!0); h.hitCallback = d.C; var A = e(J.ff) || Md("gtag.remote_config." + a + ".url", 2), B = e(J.ef) || Md("gtag.remote_config." + a + ".dualId", 2); A && null != fc && (k._x_19 = A); B && (k._x_20 = B); f.oa = h; f.Oa = k; return f
        }, qi = function (a, b) {
            function c(v) { var w = D(v); w.list = v.list_name; w.listPosition = v.list_position; w.position = v.list_position || v.creative_slot; w.creative = v.creative_name; return w } function d(v) {
                for (var w =
                    [], y = 0; v && y < v.length; y++)v[y] && w.push(c(v[y])); return w.length ? w : void 0
            } function e(v) { return { id: f(J.lb), affiliation: f(J.Ze), revenue: f(J.Z), tax: f(J.$d), shipping: f(J.bf), coupon: f(J.$e), list: f(J.sd) || v } } for (var f = function (v) { return b.getWithConfig(v) }, h = f(J.R), k, l = 0; h && l < h.length && !(k = h[l][J.sd]); l++); var m = f("custom_map"); if (Pa(m)) for (var p = 0; h && p < h.length; ++p) { var r = h[p], u; for (u in m) m.hasOwnProperty(u) && /^(dimension|metric)\d+$/.test(u) && void 0 != m[u] && vi(r, u, r[m[u]]) } var q = null, t = f(J.af); a === J.ma ||
                a === J.Qb ? q = { action: a, nb: e(), Ra: d(h) } : a === J.Nb ? q = { action: "add", Ra: d(h) } : a === J.Ob ? q = { action: "remove", Ra: d(h) } : a === J.Ia ? q = { action: "detail", nb: e(k), Ra: d(h) } : a === J.pd ? q = { action: "impressions", Ag: d(h) } : "view_promotion" === a ? q = { action: "promo_view", ed: d(t) } : "select_content" === a && t && 0 < t.length ? q = { action: "promo_click", ed: d(t) } : "select_content" === a ? q = { action: "click", nb: { list: f(J.sd) || k }, Ra: d(h) } : a === J.eb || "checkout_progress" === a ? q = { action: "checkout", Ra: d(h), nb: { step: a === J.eb ? 1 : f(J.Zd), option: f(J.Yd) } } : "set_checkout_option" ===
                    a && (q = { action: "checkout_option", nb: { step: f(J.Zd), option: f(J.Yd) } }); q && (q.Oh = f(J.ia)); return q
        }, Gi = {}, si = function (a, b) { var c = Gi[a]; Gi[a] = D(b); if (!c) return !1; for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0; for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0; return !1 }; var Hi = {}, Ii = ["G", "GP"]; Hi.Se = ""; var Ji = Hi.Se.split(","); function Ki() { var a = Wc; return a.gcq = a.gcq || new Li }
    var Mi = function (a, b, c) { Ki().register(a, b, c) }, Ni = function (a, b, c, d) { Ki().push("event", [b, a], c, d) }, Oi = function (a, b) { Ki().push("config", [a], b) }, Pi = {}, Qi = function () { this.status = 1; this.containerConfig = {}; this.targetConfig = {}; this.m = {}; this.o = null; this.h = !1 }, Ri = function (a, b, c, d, e) { this.type = a; this.o = b; this.U = c || ""; this.h = d; this.m = e }, Li = function () { this.m = {}; this.o = {}; this.h = [] }, Si = function (a, b) { var c = Sc(b); return a.m[c.containerId] = a.m[c.containerId] || new Qi }, Ti = function (a, b, c, d) {
        if (d.U) {
            var e = Si(a, d.U),
                f = e.o; if (f) {
                    var h = D(c), k = D(e.targetConfig[d.U]), l = D(e.containerConfig), m = D(e.m), p = D(a.o), r = Md("gtm.uniqueEventId"), u = Sc(d.U).prefix, q = Sf(Rf(Qf(Pf(Of(Nf(Mf(h), k), l), m), p), function () { Gd(r, u, "2"); }), function () { Gd(r, u, "3"); }); try { Gd(r, u, "1"); f(d.U, b, d.o, q) } catch (t) {
                        Gd(r, u, "4");
                    }
                }
        }
    };
    Li.prototype.register = function (a, b, c) { if (3 !== Si(this, a).status) { Si(this, a).o = b; Si(this, a).status = 3; c && (Si(this, a).m = c); var d = Sc(a), e = Pi[d.containerId]; if (void 0 !== e) { var f = Wc[d.containerId].bootstrap, h = d.prefix.toUpperCase(); Wc[d.containerId]._spx && (h = h.toLowerCase()); var k = Md("gtm.uniqueEventId"), l = h, m = Da() - f; if (Cd && !td[k]) { k !== pd && (nd(), pd = k); var p = l + "." + Math.floor(f - e) + "." + Math.floor(m); yd = yd ? yd + "," + p : "&cl=" + p } delete Pi[d.containerId] } this.flush() } };
    Li.prototype.push = function (a, b, c, d) {
        var e = Math.floor(Da() / 1E3); a: if (c) {
            var f = Sc(c), h; if (h = f) { var k; if (k = 1 === Si(this, c).status) b: { var l = f.prefix; k = !0 } h = k } if (h) if (Si(this, c).status = 2, this.push("require", [], f.containerId), Pi[f.containerId] = Da(), Wd()) { } else {
                var p = encodeURIComponent(f.containerId), r = ("http:" != F.location.protocol ? "https:" : "http:") + "//www.googletagmanager.com";
                ic(r + "/gtag/js?id=" + p + "&l=dataLayer&cx=c")
            }
        } this.h.push(new Ri(a, e, c, b, d)); d || this.flush()
    };
    Li.prototype.flush = function (a) {
        for (var b = this; this.h.length;) {
            var c = this.h[0]; if (c.m) c.m = !1, this.h.push(c); else switch (c.type) {
                case "require": if (3 !== Si(this, c.U).status && !a) return; break; case "set": C(c.h[0], function (l, m) { D(Ka(l, m), b.o) }); break; case "config": var d = c.h[0], e = !!d[J.bc]; delete d[J.bc]; var f = Si(this, c.U), h = Sc(c.U), k = h.containerId === h.id; e || (k ? f.containerConfig = {} : f.targetConfig[c.U] = {}); f.h && e || Ti(this, J.D, d, c); f.h = !0; delete d[J.ra]; k ? D(d, f.containerConfig) : D(d, f.targetConfig[c.U]); break;
                case "event": Ti(this, c.h[1], c.h[0], c)
            }this.h.shift()
        }
    }; var Ui = ["GP", "G"], Vi = "G".split(/,/); Vi.push("GF"); Vi.push("HA"); var Wi = !1; Wi = !0; var Xi = null, Yi = {}, Zi = {}, $i; function aj(a, b) { var c = { event: a }; b && (c.eventModel = D(b), b[J.yc] && (c.eventCallback = b[J.yc]), b[J.Fb] && (c.eventTimeout = b[J.Fb])); return c }
    var bj = function () { Xi = Xi || !Wc.gtagRegistered; Wc.gtagRegistered = !0; return Xi }, cj = function (a) {
        if (void 0 === Zi[a.id]) {
            var b; switch (a.prefix) { case "UA": b = Ff("gtagua", { trackingId: a.id }); break; case "AW": b = Ff("gtagaw", { conversionId: a }); break; case "DC": b = Ff("gtagfl", { targetId: a.id }); break; case "GF": b = Ff("gtaggf", { conversionId: a }); break; case "HA": b = Ff("gtagha", { conversionId: a }); break; case "GP": b = Ff("gtaggp", { conversionId: a.id }); break; default: return }if (!$i) {
                var c = yb("v", { name: "send_to", dataLayerVersion: 2 }); pb.push(c);
                $i = ["macro", pb.length - 1]
            } var d = { arg0: $i, arg1: a.id, ignore_case: !1 }; d[Fb.va] = "_lc"; rb.push(d); var e = { "if": [rb.length - 1], add: [b] }; e["if"] && (e.add || e.block) && qb.push(e); Zi[a.id] = b
        }
    }, dj = function (a) { C(Yi, function (b, c) { var d = n(c, a); 0 <= d && c.splice(d, 1) }) }, ej = Ga(function () { }), fj = function (a) { if (a.containerId !== Vc.w && "G" !== a.prefix) { var b; switch (a.prefix) { case "UA": b = 14; break; case "AW": b = 15; break; case "DC": b = 16; break; default: b = 17 }jd("GTM", b) } };
    var gj = {
        config: function (a) {
            var b = a[2] || {}; if (2 > a.length || !g(a[1]) || !Pa(b)) return; var c = Sc(a[1]); if (!c) return; dj(c.id); var d = c.id, e = b[J.wc] || "default"; e = e.toString().split(","); for (var f = 0; f < e.length; f++)Yi[e[f]] = Yi[e[f]] || [], Yi[e[f]].push(d); delete b[J.wc]; if (bj()) { gd(); D(b); if (Wi && -1 !== n(Vi, c.prefix) || -1 !== n(Ui, c.prefix)) { "G" === c.prefix && (b[J.ra] = !0); Oi(b, c.id); return } cj(c); fj(c) } else ej(); Sd("gtag.targets." + c.id, void 0); Sd("gtag.targets." + c.id, D(b)); var h = {}; h[J.wa] =
                c.id; return aj(J.D, h);
        }, event: function (a) {
            var b = a[1]; if (g(b) && !(3 < a.length)) {
                var c; if (2 < a.length) { if (!Pa(a[2]) && void 0 != a[2]) return; c = a[2] } var d = aj(b, c); var e; var f = c && c[J.wa]; void 0 === f && (f = Md(J.wa, 2), void 0 === f && (f = "default")); if (g(f) || sa(f)) { for (var h = f.toString().replace(/\s+/g, "").split(","), k = [], l = 0; l < h.length; l++)0 <= h[l].indexOf("-") ? k.push(h[l]) : k = k.concat(Yi[h[l]] || []); e = Uc(k) } else e = void 0; var m = e; if (!m) return; gd(); var p = bj(); p ||
                    ej(); for (var r = [], u = 0; p && u < m.length; u++) { var q = m[u]; fj(q); if (Wi && -1 !== n(Vi, q.prefix) || -1 !== n(Ui, q.prefix)) { var t = D(c); "G" === q.prefix && (t[J.ra] = !0); Ni(b, t, q.id) } else cj(q); r.push(q.id) } d.eventModel = d.eventModel || {}; 0 < m.length ? d.eventModel[J.wa] = r.join() : delete d.eventModel[J.wa]; return d
            }
        }, js: function (a) { if (2 == a.length && a[1].getTime) return { event: "gtm.js", "gtm.start": a[1].getTime() } }, policy: function () { }, set: function (a) {
            var b; 2 == a.length && Pa(a[1]) ? b = D(a[1]) : 3 == a.length &&
                g(a[1]) && (b = {}, Pa(a[2]) || sa(a[2]) ? b[a[1]] = D(a[2]) : b[a[1]] = a[2]); if (b) { if (bj()) { var c = D(b); Ki().push("set", [c]); D(b) } b._clear = !0; return b }
        }
    };
    var hj = { policy: !0 }; var ij = function (a, b) { var c = a.hide; if (c && void 0 !== c[b] && c.end) { c[b] = !1; var d = !0, e; for (e in c) if (c.hasOwnProperty(e) && !0 === c[e]) { d = !1; break } d && (c.end(), c.end = null) } }, kj = function (a) { var b = jj(), c = b && b.hide; c && c.end && (c[a] = !0) }; var lj = !1, mj = []; function nj() { if (!lj) { lj = !0; for (var a = 0; a < mj.length; a++)I(mj[a]) } } var oj = function (a) { lj ? I(a) : mj.push(a) }; var Gj = function (a) { if (Fj(a)) return a; this.h = a }; Gj.prototype.wg = function () { return this.h }; var Fj = function (a) { return !a || "object" !== Na(a) || Pa(a) ? !1 : "getUntrustedUpdateValue" in a }; Gj.prototype.getUntrustedUpdateValue = Gj.prototype.wg; var Hj = [], Ij = !1, Jj = function (a) { return F["dataLayer"].push(a) }, Kj = function (a) { var b = Wc["dataLayer"], c = b ? b.subscribers : 1, d = 0; return function () { ++d === c && a() } };
    function Lj(a) { var b = a._clear; C(a, function (f, h) { "_clear" !== f && (b && Sd(f, void 0), Sd(f, h)) }); ad || (ad = a["gtm.start"]); var c = a.event; if (!c) return !1; var d = a["gtm.uniqueEventId"]; d || (d = gd(), a["gtm.uniqueEventId"] = d, Sd("gtm.uniqueEventId", d)); cd = c; var e = Mj(a); cd = null; switch (c) { case "gtm.init": jd("GTM", 19), e && jd("GTM", 20) }return e }
    function Mj(a) { var b = a.event, c = a["gtm.uniqueEventId"], d, e = Wc.zones; d = e ? e.checkState(Vc.w, c) : se; return d.active ? qf(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1 }
    function Nj() {
        for (var a = !1; !Ij && 0 < Hj.length;) {
            Ij = !0; delete Jd.eventModel; Ld(); var b = Hj.shift(); if (null != b) {
                var c = Fj(b); if (c) { var d = b; b = Fj(d) ? d.getUntrustedUpdateValue() : void 0; for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], f = 0; f < e.length; f++) { var h = e[f], k = Md(h, 1); if (sa(k) || Pa(k)) k = D(k); Kd[h] = k } } try {
                    if (qa(b)) try { b.call(Nd) } catch (v) { } else if (sa(b)) {
                        var l = b; if (g(l[0])) {
                            var m =
                                l[0].split("."), p = m.pop(), r = l.slice(1), u = Md(m.join("."), 2); if (void 0 !== u && null !== u) try { u[p].apply(u, r) } catch (v) { }
                        }
                    } else { var q = b; if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype.hasOwnProperty.call(q, "callee"))) { a: { if (b.length && g(b[0])) { var t = gj[b[0]]; if (t && (!c || !hj[b[0]])) { b = t(b); break a } } b = void 0 } if (!b) { Ij = !1; continue } } a = Lj(b) || a }
                } finally { c && Ld(!0) }
            } Ij = !1
        }
        return !a
    } function Oj() { var a = Nj(); try { ij(F["dataLayer"], Vc.w) } catch (b) { } return a }
    var Qj = function () {
        var a = gc("dataLayer", []), b = gc("google_tag_manager", {}); b = b["dataLayer"] = b["dataLayer"] || {}; Ae(function () { b.gtmDom || (b.gtmDom = !0, a.push({ event: "gtm.dom" })) }); oj(function () { b.gtmLoad || (b.gtmLoad = !0, a.push({ event: "gtm.load" })) }); b.subscribers = (b.subscribers || 0) + 1; var c = a.push; a.push = function () {
            var d; if (0 < Wc.SANDBOXED_JS_SEMAPHORE) { d = []; for (var e = 0; e < arguments.length; e++)d[e] = new Gj(arguments[e]) } else d = [].slice.call(arguments, 0); var f = c.apply(a, d); Hj.push.apply(Hj, d); if (300 <
                this.length) for (jd("GTM", 4); 300 < this.length;)this.shift(); var h = "boolean" !== typeof f || f; return Nj() && h
        }; Hj.push.apply(Hj, a.slice(0)); Pj() && I(Oj)
    }, Pj = function () { var a = !0; return a }; var Rj = {}; Rj.Gb = new String("undefined");
    var Sj = function (a) { this.h = function (b) { for (var c = [], d = 0; d < a.length; d++)c.push(a[d] === Rj.Gb ? b : a[d]); return c.join("") } }; Sj.prototype.toString = function () { return this.h("undefined") }; Sj.prototype.valueOf = Sj.prototype.toString; Rj.Af = Sj; Rj.Gc = {}; Rj.fg = function (a) { return new Sj(a) }; var Tj = {}; Rj.hh = function (a, b) { var c = gd(); Tj[c] = [a, b]; return c }; Rj.ie = function (a) { var b = a ? 0 : 1; return function (c) { var d = Tj[c]; if (d && "function" === typeof d[b]) d[b](); Tj[c] = void 0 } }; Rj.Fg = function (a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++)b =
            b || 8 === a[d], c = c || 16 === a[d]; return b && c
    }; Rj.Xg = function (a) { if (a === Rj.Gb) return a; var b = gd(); Rj.Gc[b] = a; return 'google_tag_manager["' + Vc.w + '"].macro(' + b + ")" }; Rj.Pg = function (a, b, c) { a instanceof Rj.Af && (a = a.h(Rj.hh(b, c)), b = pa); return { Sc: a, C: b } }; var Uj = function (a, b, c) {
        function d(f, h) { var k = f[h]; return k } var e = { event: b, "gtm.element": a, "gtm.elementClasses": d(a, "className"), "gtm.elementId": a["for"] || oc(a, "id") || "", "gtm.elementTarget": a.formTarget || d(a, "target") || "" }; c && (e["gtm.triggers"] = c.join(",")); e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a, "href") || a.src || a.code || a.codebase ||
            ""; return e
    }, Vj = function (a) { Wc.hasOwnProperty("autoEventsSettings") || (Wc.autoEventsSettings = {}); var b = Wc.autoEventsSettings; b.hasOwnProperty(a) || (b[a] = {}); return b[a] }, Wj = function (a, b, c) { Vj(a)[b] = c }, Xj = function (a, b, c, d) { var e = Vj(a), f = Fa(e, b, d); e[b] = c(f) }, Yj = function (a, b, c) { var d = Vj(a); return Fa(d, b, c) }; var Zj = ["input", "select", "textarea"], ak = ["button", "hidden", "image", "reset", "submit"], bk = function (a) { var b = a.tagName.toLowerCase(); return !ta(Zj, function (c) { return c === b }) || "input" === b && ta(ak, function (c) { return c === a.type.toLowerCase() }) ? !1 : !0 }, ck = function (a) { return a.form ? a.form.tagName ? a.form : G.getElementById(a.form) : rc(a, ["form"], 100) }, dk = function (a, b, c) {
        if (!a.elements) return 0; for (var d = b.getAttribute(c), e = 0, f = 1; e < a.elements.length; e++) {
            var h = a.elements[e]; if (bk(h)) {
                if (h.getAttribute(c) === d) return f;
                f++
            }
        } return 0
    }; var ek = !!F.MutationObserver, fk = void 0, gk = function (a) { if (!fk) { var b = function () { var c = G.body; if (c) if (ek) (new MutationObserver(function () { for (var e = 0; e < fk.length; e++)I(fk[e]) })).observe(c, { childList: !0, subtree: !0 }); else { var d = !1; mc(c, "DOMNodeInserted", function () { d || (d = !0, I(function () { d = !1; for (var e = 0; e < fk.length; e++)I(fk[e]) })) }) } }; fk = []; G.body ? b() : I(b) } fk.push(a) }; var Bk = F.clearTimeout, Ck = F.setTimeout, S = function (a, b, c) { if (Wd()) { b && I(b) } else return ic(a, b, c) }, Dk = function () { return F.location.href }, Ek = function (a) { return $e(af(a), "fragment") }, Fk = function (a) { return Ze(af(a)) }, W = function (a, b) { return Md(a, b || 2) }, Gk = function (a, b, c) { var d; b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Jj(a)) : d = Jj(a); return d }, Hk = function (a, b) { F[a] = b }, X = function (a, b, c) {
        b && (void 0 === F[a] || c && !F[a]) && (F[a] =
            b); return F[a]
    }, Ik = function (a, b, c) { return Yf(a, b, void 0 === c ? !0 : !!c) }, Jk = function (a, b) { if (Wd()) { b && I(b) } else kc(a, b) }, Kk = function (a) { return !!Yj(a, "init", !1) }, Lk = function (a) { Wj(a, "init", !0) }, Mk = function (a, b) { var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : $c; c += "?id=" + encodeURIComponent(a) + "&l=dataLayer"; S(Q("https://", "http://", c)) }, Nk = function (a, b) { var c = a[b]; return c };
    var Ok = Rj.Pg; var kl = new xa; function ll(a, b) { function c(h) { var k = af(h), l = $e(k, "protocol"), m = $e(k, "host", !0), p = $e(k, "port"), r = $e(k, "path").toLowerCase().replace(/\/$/, ""); if (void 0 === l || "http" == l && "80" == p || "https" == l && "443" == p) l = "web", p = "default"; return [l, m, p, r] } for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)if (d[f] !== e[f]) return !1; return !0 }
    function ml(a) { return nl(a) ? 1 : 0 }
    function nl(a) {
        var b = a.arg0, c = a.arg1; if (a.any_of && sa(c)) { for (var d = 0; d < c.length; d++)if (ml({ "function": a["function"], arg0: b, arg1: c[d] })) return !0; return !1 } switch (a["function"]) {
            case "_cn": return 0 <= String(b).indexOf(String(c)); case "_css": var e; a: { if (b) { var f = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"]; try { for (var h = 0; h < f.length; h++)if (b[f[h]]) { e = b[f[h]](c); break a } } catch (v) { } } e = !1 } return e; case "_ew": var k, l; k = String(b); l = String(c); var m = k.length -
                l.length; return 0 <= m && k.indexOf(l, m) == m; case "_eq": return String(b) == String(c); case "_ge": return Number(b) >= Number(c); case "_gt": return Number(b) > Number(c); case "_lc": var p; p = String(b).split(","); return 0 <= n(p, String(c)); case "_le": return Number(b) <= Number(c); case "_lt": return Number(b) < Number(c); case "_re": var r; var u = a.ignore_case ? "i" : void 0; try { var q = String(c) + u, t = kl.get(q); t || (t = new RegExp(c, u), kl.set(q, t)); r = t.test(b) } catch (v) { r = !1 } return r; case "_sw": return 0 == String(b).indexOf(String(c)); case "_um": return ll(b,
                    c)
        }return !1
    }; var ol = function (a, b) { var c = function () { }; c.prototype = a.prototype; var d = new c; a.apply(d, Array.prototype.slice.call(arguments, 1)); return d }; var pl = {}, ql = encodeURI, Y = encodeURIComponent, rl = lc; var sl = function (a, b) { if (!a) return !1; var c = $e(af(a), "host"); if (!c) return !1; for (var d = 0; b && d < b.length; d++) { var e = b[d] && b[d].toLowerCase(); if (e) { var f = c.length - e.length; 0 < f && "." != e.charAt(0) && (f--, e = "." + e); if (0 <= f && c.indexOf(e, f) == f) return !0 } } return !1 };
    var tl = function (a, b, c) { for (var d = {}, e = !1, f = 0; a && f < a.length; f++)a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0); return e ? d : null }; pl.Gg = function () { var a = !1; return a }; var Gm = function () { var a = F.gaGlobal = F.gaGlobal || {}; a.hid = a.hid || wa(); return a.hid }; var Rm = window, Sm = document, Tm = function (a) { var b = Rm._gaUserPrefs; if (b && b.ioo && b.ioo() || a && !0 === Rm["ga-disable-" + a]) return !0; try { var c = Rm.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (f) { } for (var d = Uf("AMP_TOKEN", String(Sm.cookie), !0), e = 0; e < d.length; e++)if ("$OPT_OUT" == d[e]) return !0; return Sm.getElementById("__gaOptOutExtension") ? !0 : !1 };
    var Wm = function (a) { C(a, function (c) { "_" === c.charAt(0) && delete a[c] }); var b = a[J.ja] || {}; C(b, function (c) { "_" === c.charAt(0) && delete b[c] }) }; var $m = function (a, b, c) { Ni(b, c, a) }, an = function (a, b, c) { Ni(b, c, a, !0) }, cn = function (a, b) { };
    function bn(a, b) { } var Z = { a: {} };

    Z.a.gtagha = ["google"], function () { (function (a) { Z.__gtagha = a; Z.__gtagha.b = "gtagha"; Z.__gtagha.g = !0; Z.__gtagha.priorityOverride = 0 })(function (a) { var b = a.vtp_conversionId, c = cd, d = W("eventModel"); Mi(b.id, hi); if (c === J.D) { var e = W("gtag.targets." + b.id); Oi(e, b.id) } else Ni(c, d, b.id); I(a.vtp_gtmOnSuccess) }) }();


    Z.a.e = ["google"], function () { (function (a) { Z.__e = a; Z.__e.b = "e"; Z.__e.g = !0; Z.__e.priorityOverride = 0 })(function (a) { return String(Ud(a.vtp_gtmEventId, "event")) }) }();

    Z.a.v = ["google"], function () { (function (a) { Z.__v = a; Z.__v.b = "v"; Z.__v.g = !0; Z.__v.priorityOverride = 0 })(function (a) { var b = a.vtp_name; if (!b || !b.replace) return !1; var c = W(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1); return void 0 !== c ? c : a.vtp_defaultValue }) }();
    Z.a.rep = ["google"], function () { (function (a) { Z.__rep = a; Z.__rep.b = "rep"; Z.__rep.g = !0; Z.__rep.priorityOverride = 0 })(function (a) { var b; switch (Sc(a.vtp_containerId).prefix) { case "AW": b = Ah; break; case "DC": b = Yh; break; case "GF": b = ci; break; case "GP": b = ni; break; case "HA": b = hi; break; case "UA": b = zi; break; default: I(a.vtp_gtmOnFailure); return }I(a.vtp_gtmOnSuccess); Mi(a.vtp_containerId, b, a.vtp_remoteConfig || {}) }) }();



    Z.a.cid = ["google"], function () { (function (a) { Z.__cid = a; Z.__cid.b = "cid"; Z.__cid.g = !0; Z.__cid.priorityOverride = 0 })(function () { return Vc.w }) }();



    Z.a.gtagaw = ["google"], function () { (function (a) { Z.__gtagaw = a; Z.__gtagaw.b = "gtagaw"; Z.__gtagaw.g = !0; Z.__gtagaw.priorityOverride = 0 })(function (a) { var b = a.vtp_conversionId, c = cd; Mi(b.id, Ah); if (c === J.D) { var d = W("gtag.targets." + b.id); Oi(d, b.id) } else { var e = W("eventModel"); Ni(c, e, b.id) } I(a.vtp_gtmOnSuccess) }) }();

    Z.a.get = ["google"], function () { (function (a) { Z.__get = a; Z.__get.b = "get"; Z.__get.g = !0; Z.__get.priorityOverride = 0 })(function (a) { if (a.vtp_isAutoTag) { var b = String(a.vtp_trackingId), c = cd || "", d = {}; if (c === J.D) { var e = W("gtag.targets." + b); D(e, d); d[J.ra] = !0; Oi(d, b) } else { var f = W("eventModel"); D(f, d); d[J.ra] = !0; Ni(c, d, b) } } else { var h = a.vtp_settings; (a.vtp_deferrable ? an : $m)(String(h.streamId), String(a.vtp_eventName), h.eventParameters || {}) } a.vtp_gtmOnSuccess() }) }();

    Z.a.gtagfl = [], function () { (function (a) { Z.__gtagfl = a; Z.__gtagfl.b = "gtagfl"; Z.__gtagfl.g = !0; Z.__gtagfl.priorityOverride = 0 })(function (a) { var b = a.vtp_targetId, c = cd, d = W("eventModel"); Mi(b, Yh); if (c === J.D) { var e = W("gtag.targets." + b); Oi(e, b) } else Ni(c, d, b); I(a.vtp_gtmOnSuccess) }) }();


    Z.a.gtaggf = ["google"], function () { (function (a) { Z.__gtaggf = a; Z.__gtaggf.b = "gtaggf"; Z.__gtaggf.g = !0; Z.__gtaggf.priorityOverride = 0 })(function (a) { var b = a.vtp_conversionId, c = cd, d = W("eventModel"); Mi(b.id, ci); if (c === J.D) { var e = W("gtag.targets." + b.id); Oi(e, b.id) } else Ni(c, d, b.id); I(a.vtp_gtmOnSuccess) }) }();

    Z.a.gtaggp = ["google"], function () { (function (a) { Z.__gtaggp = a; Z.__gtaggp.b = "gtaggp"; Z.__gtaggp.g = !0; Z.__gtaggp.priorityOverride = 0 })(function (a) { var b = a.vtp_conversionId, c = cd, d = W("eventModel"); Mi(b, ni); if (c === J.D) { var e = W("gtag.targets." + b); Oi(e, b) } else Ni(c, d, b); I(a.vtp_gtmOnSuccess) }) }();



    Z.a.gtagua = ["google"], function () { (function (a) { Z.__gtagua = a; Z.__gtagua.b = "gtagua"; Z.__gtagua.g = !0; Z.__gtagua.priorityOverride = 0 })(function (a) { var b = a.vtp_trackingId, c = cd, d = W("eventModel"); Mi(b, zi); if (c === J.D) { var e = W("gtag.targets." + b); Oi(e, b) } else Ni(c, d, b); I(a.vtp_gtmOnSuccess) }) }();


    var dn = {}; dn.macro = function (a) { if (Rj.Gc.hasOwnProperty(a)) return Rj.Gc[a] }, dn.onHtmlSuccess = Rj.ie(!0), dn.onHtmlFailure = Rj.ie(!1); dn.dataLayer = Nd; dn.callback = function (a) { ed.hasOwnProperty(a) && qa(ed[a]) && ed[a](); delete ed[a] }; function en() { Wc[Vc.w] = dn; Ha(fd, Z.a); wb = wb || Rj; xb = re }
    function fn() {
        Vf.gtm_3pds = !0; Wc = F.google_tag_manager = F.google_tag_manager || {}; if (Wc[Vc.w]) { var a = Wc.zones; a && a.unregisterChild(Vc.w) } else {
            for (var b = data.resource || {}, c = b.macros ||
                [], d = 0; d < c.length; d++)pb.push(c[d]); for (var e = b.tags || [], f = 0; f < e.length; f++)sb.push(e[f]); for (var h = b.predicates || [], k = 0; k < h.length; k++)rb.push(h[k]); for (var l = b.rules || [], m = 0; m < l.length; m++) { for (var p = l[m], r = {}, u = 0; u < p.length; u++)r[p[u][0]] = Array.prototype.slice.call(p[u], 1); qb.push(r) } ub = Z; vb = ml; en(); Qj(); ve = !1; we = 0; if ("interactive" == G.readyState && !G.createEventObject || "complete" == G.readyState) ye(); else {
                    mc(G, "DOMContentLoaded", ye); mc(G, "readystatechange", ye); if (G.createEventObject && G.documentElement.doScroll) {
                        var q =
                            !0; try { q = !F.frameElement } catch (y) { } q && ze()
                    } mc(F, "load", ye)
                } lj = !1; "complete" === G.readyState ? nj() : mc(F, "load", nj); a: { if (!Cd) break a; F.setInterval(Dd, 864E5); } bd = (new Date).getTime(); dn.bootstrap = bd;
        }
    }
    fn();

})()