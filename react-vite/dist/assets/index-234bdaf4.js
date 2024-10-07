function pp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver(i => {
    for (const o of i)
      if (o.type === 'childList')
        for (const l of o.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials' ? (o.credentials = 'include')
      : i.crossOrigin === 'anonymous' ? (o.credentials = 'omit')
      : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function mp(e) {
  return (
      e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ) ?
      e.default
    : e;
}
var gp = { exports: {} },
  ca = {},
  yp = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _o = Symbol.for('react.element'),
  wy = Symbol.for('react.portal'),
  xy = Symbol.for('react.fragment'),
  Sy = Symbol.for('react.strict_mode'),
  _y = Symbol.for('react.profiler'),
  Cy = Symbol.for('react.provider'),
  Ey = Symbol.for('react.context'),
  ky = Symbol.for('react.forward_ref'),
  Ny = Symbol.for('react.suspense'),
  Ty = Symbol.for('react.memo'),
  My = Symbol.for('react.lazy'),
  Gf = Symbol.iterator;
function Py(e) {
  return e === null || typeof e != 'object' ?
      null
    : ((e = (Gf && e[Gf]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var vp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  wp = Object.assign,
  xp = {};
function ai(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xp),
    (this.updater = n || vp);
}
ai.prototype.isReactComponent = {};
ai.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
ai.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Sp() {}
Sp.prototype = ai.prototype;
function dc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xp),
    (this.updater = n || vp);
}
var hc = (dc.prototype = new Sp());
hc.constructor = dc;
wp(hc, ai.prototype);
hc.isPureReactComponent = !0;
var Zf = Array.isArray,
  _p = Object.prototype.hasOwnProperty,
  pc = { current: null },
  Cp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ep(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      _p.call(t, r) && !Cp.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: _o,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: pc.current,
  };
}
function Ry(e, t) {
  return {
    $$typeof: _o,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function mc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === _o;
}
function jy(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Jf = /\/+/g;
function du(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ?
      jy('' + e.key)
    : t.toString(36);
}
function ll(e, t, n, r, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case _o:
          case wy:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === '' ? '.' + du(l, 0) : r),
      Zf(i) ?
        ((n = ''),
        e != null && (n = e.replace(Jf, '$&/') + '/'),
        ll(i, t, n, '', function (s) {
          return s;
        }))
      : i != null &&
        (mc(i) &&
          (i = Ry(
            i,
            n +
              (!i.key || (l && l.key === i.key) ?
                ''
              : ('' + i.key).replace(Jf, '$&/') + '/') +
              e
          )),
        t.push(i)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Zf(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + du(o, a);
      l += ll(o, t, n, u, i);
    }
  else if (((u = Py(e)), typeof u == 'function'))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + du(o, a++)), (l += ll(o, t, n, u, i));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ?
            'object with keys {' + Object.keys(e).join(', ') + '}'
          : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return l;
}
function Uo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ll(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Dy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ze = { current: null },
  al = { transition: null },
  Ly = {
    ReactCurrentDispatcher: Ze,
    ReactCurrentBatchConfig: al,
    ReactCurrentOwner: pc,
  };
G.Children = {
  map: Uo,
  forEach: function (e, t, n) {
    Uo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Uo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Uo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!mc(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
G.Component = ai;
G.Fragment = xy;
G.Profiler = _y;
G.PureComponent = dc;
G.StrictMode = Sy;
G.Suspense = Ny;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ly;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = wp({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = pc.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      _p.call(t, u) &&
        !Cp.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: _o, type: e.type, key: i, ref: o, props: r, _owner: l };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ey,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cy, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = Ep;
G.createFactory = function (e) {
  var t = Ep.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: ky, render: e };
};
G.isValidElement = mc;
G.lazy = function (e) {
  return { $$typeof: My, _payload: { _status: -1, _result: e }, _init: Dy };
};
G.memo = function (e, t) {
  return { $$typeof: Ty, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = al.transition;
  al.transition = {};
  try {
    e();
  } finally {
    al.transition = t;
  }
};
G.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
G.useCallback = function (e, t) {
  return Ze.current.useCallback(e, t);
};
G.useContext = function (e) {
  return Ze.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return Ze.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return Ze.current.useEffect(e, t);
};
G.useId = function () {
  return Ze.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return Ze.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return Ze.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return Ze.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return Ze.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return Ze.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return Ze.current.useRef(e);
};
G.useState = function (e) {
  return Ze.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return Ze.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return Ze.current.useTransition();
};
G.version = '18.2.0';
yp.exports = G;
var S = yp.exports;
const an = mp(S),
  $y = pp({ __proto__: null, default: an }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var by = S,
  Fy = Symbol.for('react.element'),
  Oy = Symbol.for('react.fragment'),
  Uy = Object.prototype.hasOwnProperty,
  Iy = by.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ay = { key: !0, ref: !0, __self: !0, __source: !0 };
function kp(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Uy.call(t, r) && !Ay.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Fy,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Iy.current,
  };
}
ca.Fragment = Oy;
ca.jsx = kp;
ca.jsxs = kp;
gp.exports = ca;
var y = gp.exports,
  es = {},
  Np = { exports: {} },
  dt = {},
  Tp = { exports: {} },
  Mp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, O) {
    var H = D.length;
    D.push(O);
    e: for (; 0 < H; ) {
      var re = (H - 1) >>> 1,
        ne = D[re];
      if (0 < i(ne, O)) (D[re] = O), (D[H] = ne), (H = re);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var O = D[0],
      H = D.pop();
    if (H !== O) {
      D[0] = H;
      e: for (var re = 0, ne = D.length, et = ne >>> 1; re < et; ) {
        var be = 2 * (re + 1) - 1,
          Gt = D[be],
          kt = be + 1,
          wn = D[kt];
        if (0 > i(Gt, H))
          kt < ne && 0 > i(wn, Gt) ?
            ((D[re] = wn), (D[kt] = H), (re = kt))
          : ((D[re] = Gt), (D[be] = H), (re = be));
        else if (kt < ne && 0 > i(wn, H)) (D[re] = wn), (D[kt] = H), (re = kt);
        else break e;
      }
    }
    return O;
  }
  function i(D, O) {
    var H = D.sortIndex - O.sortIndex;
    return H !== 0 ? H : D.id - O.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var u = [],
    s = [],
    c = 1,
    d = null,
    f = 3,
    m = !1,
    v = !1,
    x = !1,
    E = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(D) {
    for (var O = n(s); O !== null; ) {
      if (O.callback === null) r(s);
      else if (O.startTime <= D)
        r(s), (O.sortIndex = O.expirationTime), t(u, O);
      else break;
      O = n(s);
    }
  }
  function g(D) {
    if (((x = !1), w(D), !v))
      if (n(u) !== null) (v = !0), Ye(k);
      else {
        var O = n(s);
        O !== null && Ae(g, O.startTime - D);
      }
  }
  function k(D, O) {
    (v = !1), x && ((x = !1), h(j), (j = -1)), (m = !0);
    var H = f;
    try {
      for (
        w(O), d = n(u);
        d !== null && (!(d.expirationTime > O) || (D && !b()));

      ) {
        var re = d.callback;
        if (typeof re == 'function') {
          (d.callback = null), (f = d.priorityLevel);
          var ne = re(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof ne == 'function' ? (d.callback = ne) : d === n(u) && r(u),
            w(O);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var et = !0;
      else {
        var be = n(s);
        be !== null && Ae(g, be.startTime - O), (et = !1);
      }
      return et;
    } finally {
      (d = null), (f = H), (m = !1);
    }
  }
  var _ = !1,
    T = null,
    j = -1,
    I = 5,
    U = -1;
  function b() {
    return !(e.unstable_now() - U < I);
  }
  function q() {
    if (T !== null) {
      var D = e.unstable_now();
      U = D;
      var O = !0;
      try {
        O = T(!0, D);
      } finally {
        O ? Q() : ((_ = !1), (T = null));
      }
    } else _ = !1;
  }
  var Q;
  if (typeof p == 'function')
    Q = function () {
      p(q);
    };
  else if (typeof MessageChannel < 'u') {
    var Re = new MessageChannel(),
      ue = Re.port2;
    (Re.port1.onmessage = q),
      (Q = function () {
        ue.postMessage(null);
      });
  } else
    Q = function () {
      E(q, 0);
    };
  function Ye(D) {
    (T = D), _ || ((_ = !0), Q());
  }
  function Ae(D, O) {
    j = E(function () {
      D(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || m || ((v = !0), Ye(k));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D ?
        console.error(
          'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
        )
      : (I = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (D) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = f;
      }
      var H = f;
      f = O;
      try {
        return D();
      } finally {
        f = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, O) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var H = f;
      f = D;
      try {
        return O();
      } finally {
        f = H;
      }
    }),
    (e.unstable_scheduleCallback = function (D, O, H) {
      var re = e.unstable_now();
      switch (
        (typeof H == 'object' && H !== null ?
          ((H = H.delay), (H = typeof H == 'number' && 0 < H ? re + H : re))
        : (H = re),
        D)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = H + ne),
        (D = {
          id: c++,
          callback: O,
          priorityLevel: D,
          startTime: H,
          expirationTime: ne,
          sortIndex: -1,
        }),
        H > re ?
          ((D.sortIndex = H),
          t(s, D),
          n(u) === null &&
            D === n(s) &&
            (x ? (h(j), (j = -1)) : (x = !0), Ae(g, H - re)))
        : ((D.sortIndex = ne), t(u, D), v || m || ((v = !0), Ye(k))),
        D
      );
    }),
    (e.unstable_shouldYield = b),
    (e.unstable_wrapCallback = function (D) {
      var O = f;
      return function () {
        var H = f;
        f = O;
        try {
          return D.apply(this, arguments);
        } finally {
          f = H;
        }
      };
    });
})(Mp);
Tp.exports = Mp;
var zy = Tp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pp = S,
  ct = zy;
function P(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Rp = new Set(),
  Zi = {};
function pr(e, t) {
  Kr(e, t), Kr(e + 'Capture', t);
}
function Kr(e, t) {
  for (Zi[e] = t, e = 0; e < t.length; e++) Rp.add(t[e]);
}
var sn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ts = Object.prototype.hasOwnProperty,
  By =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ed = {},
  td = {};
function Hy(e) {
  return (
    ts.call(td, e) ? !0
    : ts.call(ed, e) ? !1
    : By.test(e) ? (td[e] = !0)
    : ((ed[e] = !0), !1)
  );
}
function Vy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return (
        r ? !1
        : n !== null ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
      );
    default:
      return !1;
  }
}
function Wy(e, t, n, r) {
  if (t === null || typeof t > 'u' || Vy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Je(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var Ie = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ie[e] = new Je(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ie[t] = new Je(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ie[e] = new Je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ie[e] = new Je(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ie[e] = new Je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ie[e] = new Je(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ie[e] = new Je(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ie[e] = new Je(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ie[e] = new Je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var gc = /[\-:]([a-z])/g;
function yc(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(gc, yc);
    Ie[t] = new Je(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(gc, yc);
    Ie[t] = new Je(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(gc, yc);
  Ie[t] = new Je(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ie[e] = new Je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new Je(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ie[e] = new Je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vc(e, t, n, r) {
  var i = Ie.hasOwnProperty(t) ? Ie[t] : null;
  (i !== null ?
    i.type !== 0
  : r ||
    !(2 < t.length) ||
    (t[0] !== 'o' && t[0] !== 'O') ||
    (t[1] !== 'n' && t[1] !== 'N')) &&
    (Wy(t, n, i, r) && (n = null),
    r || i === null ?
      Hy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
    : i.mustUseProperty ?
      (e[i.propertyName] =
        n === null ?
          i.type === 3 ?
            !1
          : ''
        : n)
    : ((t = i.attributeName),
      (r = i.attributeNamespace),
      n === null ?
        e.removeAttribute(t)
      : ((i = i.type),
        (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gn = Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Io = Symbol.for('react.element'),
  kr = Symbol.for('react.portal'),
  Nr = Symbol.for('react.fragment'),
  wc = Symbol.for('react.strict_mode'),
  ns = Symbol.for('react.profiler'),
  jp = Symbol.for('react.provider'),
  Dp = Symbol.for('react.context'),
  xc = Symbol.for('react.forward_ref'),
  rs = Symbol.for('react.suspense'),
  is = Symbol.for('react.suspense_list'),
  Sc = Symbol.for('react.memo'),
  En = Symbol.for('react.lazy'),
  Lp = Symbol.for('react.offscreen'),
  nd = Symbol.iterator;
function gi(e) {
  return e === null || typeof e != 'object' ?
      null
    : ((e = (nd && e[nd]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var ve = Object.assign,
  hu;
function Li(e) {
  if (hu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      hu = (t && t[1]) || '';
    }
  return (
    `
` +
    hu +
    e
  );
}
var pu = !1;
function mu(e, t) {
  if (!e || pu) return '';
  pu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var i = s.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          a = o.length - 1;
        1 <= l && 0 <= a && i[l] !== o[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== o[a])) {
                var u =
                  `
` + i[l].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (pu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Li(e) : '';
}
function Yy(e) {
  switch (e.tag) {
    case 5:
      return Li(e.type);
    case 16:
      return Li('Lazy');
    case 13:
      return Li('Suspense');
    case 19:
      return Li('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = mu(e.type, !1)), e;
    case 11:
      return (e = mu(e.type.render, !1)), e;
    case 1:
      return (e = mu(e.type, !0)), e;
    default:
      return '';
  }
}
function os(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Nr:
      return 'Fragment';
    case kr:
      return 'Portal';
    case ns:
      return 'Profiler';
    case wc:
      return 'StrictMode';
    case rs:
      return 'Suspense';
    case is:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Dp:
        return (e.displayName || 'Context') + '.Consumer';
      case jp:
        return (e._context.displayName || 'Context') + '.Provider';
      case xc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Sc:
        return (
          (t = e.displayName || null), t !== null ? t : os(e.type) || 'Memo'
        );
      case En:
        (t = e._payload), (e = e._init);
        try {
          return os(e(t));
        } catch {}
    }
  return null;
}
function Qy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return os(t);
    case 8:
      return t === wc ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Un(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function $p(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Ky(e) {
  var t = $p(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = '' + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ao(e) {
  e._valueTracker || (e._valueTracker = Ky(e));
}
function bp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e &&
      (r =
        $p(e) ?
          e.checked ?
            'true'
          : 'false'
        : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Cl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ls(e, t) {
  var n = t.checked;
  return ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function rd(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio' ?
          t.checked != null
        : t.value != null,
    });
}
function Fp(e, t) {
  (t = t.checked), t != null && vc(e, 'checked', t, !1);
}
function as(e, t) {
  Fp(e, t);
  var n = Un(t.value),
    r = t.type;
  if (n != null)
    r === 'number' ?
      ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
    : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ?
    us(e, t.type, n)
  : t.hasOwnProperty('defaultValue') && us(e, t.type, Un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function id(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function us(e, t, n) {
  (t !== 'number' || Cl(e.ownerDocument) !== e) &&
    (n == null ?
      (e.defaultValue = '' + e._wrapperState.initialValue)
    : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var $i = Array.isArray;
function Ar(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Un(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ss(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function od(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if ($i(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Un(n) };
}
function Op(e, t) {
  var n = Un(t.value),
    r = Un(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function ld(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Up(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function cs(e, t) {
  return (
    e == null || e === 'http://www.w3.org/1999/xhtml' ? Up(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject' ?
      'http://www.w3.org/1999/xhtml'
    : e
  );
}
var zo,
  Ip = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction ?
        function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        zo = zo || document.createElement('div'),
          zo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = zo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ji(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Xy = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(zi).forEach(function (e) {
  Xy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zi[t] = zi[e]);
  });
});
function Ap(e, t, n) {
  return (
    t == null || typeof t == 'boolean' || t === '' ? ''
    : n || typeof t != 'number' || t === 0 || (zi.hasOwnProperty(e) && zi[e]) ?
      ('' + t).trim()
    : t + 'px'
  );
}
function zp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Ap(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var qy = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function fs(e, t) {
  if (t) {
    if (qy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(P(62));
  }
}
function ds(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var hs = null;
function _c(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ps = null,
  zr = null,
  Br = null;
function ad(e) {
  if ((e = ko(e))) {
    if (typeof ps != 'function') throw Error(P(280));
    var t = e.stateNode;
    t && ((t = ma(t)), ps(e.stateNode, e.type, t));
  }
}
function Bp(e) {
  zr ?
    Br ? Br.push(e)
    : (Br = [e])
  : (zr = e);
}
function Hp() {
  if (zr) {
    var e = zr,
      t = Br;
    if (((Br = zr = null), ad(e), t)) for (e = 0; e < t.length; e++) ad(t[e]);
  }
}
function Vp(e, t) {
  return e(t);
}
function Wp() {}
var gu = !1;
function Yp(e, t, n) {
  if (gu) return e(t, n);
  gu = !0;
  try {
    return Vp(e, t, n);
  } finally {
    (gu = !1), (zr !== null || Br !== null) && (Wp(), Hp());
  }
}
function eo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ma(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(P(231, t, typeof n));
  return n;
}
var ms = !1;
if (sn)
  try {
    var yi = {};
    Object.defineProperty(yi, 'passive', {
      get: function () {
        ms = !0;
      },
    }),
      window.addEventListener('test', yi, yi),
      window.removeEventListener('test', yi, yi);
  } catch {
    ms = !1;
  }
function Gy(e, t, n, r, i, o, l, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Bi = !1,
  El = null,
  kl = !1,
  gs = null,
  Zy = {
    onError: function (e) {
      (Bi = !0), (El = e);
    },
  };
function Jy(e, t, n, r, i, o, l, a, u) {
  (Bi = !1), (El = null), Gy.apply(Zy, arguments);
}
function ev(e, t, n, r, i, o, l, a, u) {
  if ((Jy.apply(this, arguments), Bi)) {
    if (Bi) {
      var s = El;
      (Bi = !1), (El = null);
    } else throw Error(P(198));
    kl || ((kl = !0), (gs = s));
  }
}
function mr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Qp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ud(e) {
  if (mr(e) !== e) throw Error(P(188));
}
function tv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = mr(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return ud(i), e;
        if (o === r) return ud(i), t;
        o = o.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Kp(e) {
  return (e = tv(e)), e !== null ? Xp(e) : null;
}
function Xp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Xp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qp = ct.unstable_scheduleCallback,
  sd = ct.unstable_cancelCallback,
  nv = ct.unstable_shouldYield,
  rv = ct.unstable_requestPaint,
  Ee = ct.unstable_now,
  iv = ct.unstable_getCurrentPriorityLevel,
  Cc = ct.unstable_ImmediatePriority,
  Gp = ct.unstable_UserBlockingPriority,
  Nl = ct.unstable_NormalPriority,
  ov = ct.unstable_LowPriority,
  Zp = ct.unstable_IdlePriority,
  fa = null,
  Ht = null;
function lv(e) {
  if (Ht && typeof Ht.onCommitFiberRoot == 'function')
    try {
      Ht.onCommitFiberRoot(fa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : sv,
  av = Math.log,
  uv = Math.LN2;
function sv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((av(e) / uv) | 0)) | 0;
}
var Bo = 64,
  Ho = 4194304;
function bi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Tl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = bi(a)) : ((o &= l), o !== 0 && (r = bi(o)));
  } else (l = n & ~i), l !== 0 ? (r = bi(l)) : o !== 0 && (r = bi(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - $t(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function cv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function fv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - $t(o),
      a = 1 << l,
      u = i[l];
    u === -1 ?
      (!(a & n) || a & r) && (i[l] = cv(a, t))
    : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function ys(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e
    : e & 1073741824 ? 1073741824
    : 0
  );
}
function Jp() {
  var e = Bo;
  return (Bo <<= 1), !(Bo & 4194240) && (Bo = 64), e;
}
function yu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Co(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = n);
}
function dv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - $t(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Ec(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ie = 0;
function em(e) {
  return (
    (e &= -e),
    1 < e ?
      4 < e ?
        e & 268435455 ?
          16
        : 536870912
      : 4
    : 1
  );
}
var tm,
  kc,
  nm,
  rm,
  im,
  vs = !1,
  Vo = [],
  Rn = null,
  jn = null,
  Dn = null,
  to = new Map(),
  no = new Map(),
  Nn = [],
  hv =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function cd(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Rn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      jn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Dn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      to.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      no.delete(t.pointerId);
  }
}
function vi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ?
      ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ko(t)), t !== null && kc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function pv(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Rn = vi(Rn, e, t, n, r, i)), !0;
    case 'dragenter':
      return (jn = vi(jn, e, t, n, r, i)), !0;
    case 'mouseover':
      return (Dn = vi(Dn, e, t, n, r, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return to.set(o, vi(to.get(o) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), no.set(o, vi(no.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function om(e) {
  var t = qn(e.target);
  if (t !== null) {
    var n = mr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qp(n)), t !== null)) {
          (e.blockedOn = t),
            im(e.priority, function () {
              nm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ul(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (hs = r), n.target.dispatchEvent(r), (hs = null);
    } else return (t = ko(n)), t !== null && kc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function fd(e, t, n) {
  ul(e) && n.delete(t);
}
function mv() {
  (vs = !1),
    Rn !== null && ul(Rn) && (Rn = null),
    jn !== null && ul(jn) && (jn = null),
    Dn !== null && ul(Dn) && (Dn = null),
    to.forEach(fd),
    no.forEach(fd);
}
function wi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vs ||
      ((vs = !0),
      ct.unstable_scheduleCallback(ct.unstable_NormalPriority, mv)));
}
function ro(e) {
  function t(i) {
    return wi(i, e);
  }
  if (0 < Vo.length) {
    wi(Vo[0], e);
    for (var n = 1; n < Vo.length; n++) {
      var r = Vo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Rn !== null && wi(Rn, e),
      jn !== null && wi(jn, e),
      Dn !== null && wi(Dn, e),
      to.forEach(t),
      no.forEach(t),
      n = 0;
    n < Nn.length;
    n++
  )
    (r = Nn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nn.length && ((n = Nn[0]), n.blockedOn === null); )
    om(n), n.blockedOn === null && Nn.shift();
}
var Hr = gn.ReactCurrentBatchConfig,
  Ml = !0;
function gv(e, t, n, r) {
  var i = ie,
    o = Hr.transition;
  Hr.transition = null;
  try {
    (ie = 1), Nc(e, t, n, r);
  } finally {
    (ie = i), (Hr.transition = o);
  }
}
function yv(e, t, n, r) {
  var i = ie,
    o = Hr.transition;
  Hr.transition = null;
  try {
    (ie = 4), Nc(e, t, n, r);
  } finally {
    (ie = i), (Hr.transition = o);
  }
}
function Nc(e, t, n, r) {
  if (Ml) {
    var i = ws(e, t, n, r);
    if (i === null) Tu(e, t, r, Pl, n), cd(e, r);
    else if (pv(i, e, t, n, r)) r.stopPropagation();
    else if ((cd(e, r), t & 4 && -1 < hv.indexOf(e))) {
      for (; i !== null; ) {
        var o = ko(i);
        if (
          (o !== null && tm(o),
          (o = ws(e, t, n, r)),
          o === null && Tu(e, t, r, Pl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Tu(e, t, r, null, n);
  }
}
var Pl = null;
function ws(e, t, n, r) {
  if (((Pl = null), (e = _c(r)), (e = qn(e)), e !== null))
    if (((t = mr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Qp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Pl = e), null;
}
function lm(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (iv()) {
        case Cc:
          return 1;
        case Gp:
          return 4;
        case Nl:
        case ov:
          return 16;
        case Zp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mn = null,
  Tc = null,
  sl = null;
function am() {
  if (sl) return sl;
  var e,
    t = Tc,
    n = t.length,
    r,
    i = 'value' in Mn ? Mn.value : Mn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (sl = i.slice(e, 1 < r ? 1 - r : void 0));
}
function cl(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ?
      ((e = e.charCode), e === 0 && t === 13 && (e = 13))
    : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Wo() {
  return !0;
}
function dd() {
  return !1;
}
function ht(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented =
        (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        ) ?
          Wo
        : dd),
      (this.isPropagationStopped = dd),
      this
    );
  }
  return (
    ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ?
            n.preventDefault()
          : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Wo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ?
            n.stopPropagation()
          : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Wo));
      },
      persist: function () {},
      isPersistent: Wo,
    }),
    t
  );
}
var ui = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Mc = ht(ui),
  Eo = ve({}, ui, { view: 0, detail: 0 }),
  vv = ht(Eo),
  vu,
  wu,
  xi,
  da = ve({}, Eo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return (
        e.relatedTarget === void 0 ?
          e.fromElement === e.srcElement ?
            e.toElement
          : e.fromElement
        : e.relatedTarget
      );
    },
    movementX: function (e) {
      return 'movementX' in e ?
          e.movementX
        : (e !== xi &&
            (xi && e.type === 'mousemove' ?
              ((vu = e.screenX - xi.screenX), (wu = e.screenY - xi.screenY))
            : (wu = vu = 0),
            (xi = e)),
          vu);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : wu;
    },
  }),
  hd = ht(da),
  wv = ve({}, da, { dataTransfer: 0 }),
  xv = ht(wv),
  Sv = ve({}, Eo, { relatedTarget: 0 }),
  xu = ht(Sv),
  _v = ve({}, ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cv = ht(_v),
  Ev = ve({}, ui, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kv = ht(Ev),
  Nv = ve({}, ui, { data: 0 }),
  pd = ht(Nv),
  Tv = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Mv = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Pv = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Rv(e) {
  var t = this.nativeEvent;
  return (
    t.getModifierState ? t.getModifierState(e)
    : (e = Pv[e]) ? !!t[e]
    : !1
  );
}
function Pc() {
  return Rv;
}
var jv = ve({}, Eo, {
    key: function (e) {
      if (e.key) {
        var t = Tv[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return (
        e.type === 'keypress' ?
          ((e = cl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup' ?
          Mv[e.keyCode] || 'Unidentified'
        : ''
      );
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pc,
    charCode: function (e) {
      return e.type === 'keypress' ? cl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return (
        e.type === 'keypress' ? cl(e)
        : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode
        : 0
      );
    },
  }),
  Dv = ht(jv),
  Lv = ve({}, da, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  md = ht(Lv),
  $v = ve({}, Eo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pc,
  }),
  bv = ht($v),
  Fv = ve({}, ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ov = ht(Fv),
  Uv = ve({}, da, {
    deltaX: function (e) {
      return (
        'deltaX' in e ? e.deltaX
        : 'wheelDeltaX' in e ? -e.wheelDeltaX
        : 0
      );
    },
    deltaY: function (e) {
      return (
        'deltaY' in e ? e.deltaY
        : 'wheelDeltaY' in e ? -e.wheelDeltaY
        : 'wheelDelta' in e ? -e.wheelDelta
        : 0
      );
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Iv = ht(Uv),
  Av = [9, 13, 27, 32],
  Rc = sn && 'CompositionEvent' in window,
  Hi = null;
sn && 'documentMode' in document && (Hi = document.documentMode);
var zv = sn && 'TextEvent' in window && !Hi,
  um = sn && (!Rc || (Hi && 8 < Hi && 11 >= Hi)),
  gd = String.fromCharCode(32),
  yd = !1;
function sm(e, t) {
  switch (e) {
    case 'keyup':
      return Av.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function cm(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Tr = !1;
function Bv(e, t) {
  switch (e) {
    case 'compositionend':
      return cm(t);
    case 'keypress':
      return t.which !== 32 ? null : ((yd = !0), gd);
    case 'textInput':
      return (e = t.data), e === gd && yd ? null : e;
    default:
      return null;
  }
}
function Hv(e, t) {
  if (Tr)
    return e === 'compositionend' || (!Rc && sm(e, t)) ?
        ((e = am()), (sl = Tc = Mn = null), (Tr = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return um && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Vv = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function vd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Vv[e.type] : t === 'textarea';
}
function fm(e, t, n, r) {
  Bp(r),
    (t = Rl(t, 'onChange')),
    0 < t.length &&
      ((n = new Mc('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Vi = null,
  io = null;
function Wv(e) {
  _m(e, 0);
}
function ha(e) {
  var t = Rr(e);
  if (bp(t)) return e;
}
function Yv(e, t) {
  if (e === 'change') return t;
}
var dm = !1;
if (sn) {
  var Su;
  if (sn) {
    var _u = 'oninput' in document;
    if (!_u) {
      var wd = document.createElement('div');
      wd.setAttribute('oninput', 'return;'),
        (_u = typeof wd.oninput == 'function');
    }
    Su = _u;
  } else Su = !1;
  dm = Su && (!document.documentMode || 9 < document.documentMode);
}
function xd() {
  Vi && (Vi.detachEvent('onpropertychange', hm), (io = Vi = null));
}
function hm(e) {
  if (e.propertyName === 'value' && ha(io)) {
    var t = [];
    fm(t, io, e, _c(e)), Yp(Wv, t);
  }
}
function Qv(e, t, n) {
  e === 'focusin' ?
    (xd(), (Vi = t), (io = n), Vi.attachEvent('onpropertychange', hm))
  : e === 'focusout' && xd();
}
function Kv(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return ha(io);
}
function Xv(e, t) {
  if (e === 'click') return ha(t);
}
function qv(e, t) {
  if (e === 'input' || e === 'change') return ha(t);
}
function Gv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ot = typeof Object.is == 'function' ? Object.is : Gv;
function oo(e, t) {
  if (Ot(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ts.call(t, i) || !Ot(e[i], t[i])) return !1;
  }
  return !0;
}
function Sd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _d(e, t) {
  var n = Sd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Sd(n);
  }
}
function pm(e, t) {
  return (
    e && t ?
      e === t ? !0
      : e && e.nodeType === 3 ? !1
      : t && t.nodeType === 3 ? pm(e, t.parentNode)
      : 'contains' in e ? e.contains(t)
      : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
  );
}
function mm() {
  for (var e = window, t = Cl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Cl(e.document);
  }
  return t;
}
function jc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Zv(e) {
  var t = mm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && jc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = _d(n, o));
        var l = _d(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r ?
            (e.addRange(t), e.extend(l.node, l.offset))
          : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Jv = sn && 'documentMode' in document && 11 >= document.documentMode,
  Mr = null,
  xs = null,
  Wi = null,
  Ss = !1;
function Cd(e, t, n) {
  var r =
    n.window === n ? n.document
    : n.nodeType === 9 ? n
    : n.ownerDocument;
  Ss ||
    Mr == null ||
    Mr !== Cl(r) ||
    ((r = Mr),
    'selectionStart' in r && jc(r) ?
      (r = { start: r.selectionStart, end: r.selectionEnd })
    : ((r = (
        (r.ownerDocument && r.ownerDocument.defaultView) ||
        window
      ).getSelection()),
      (r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset,
      })),
    (Wi && oo(Wi, r)) ||
      ((Wi = r),
      (r = Rl(xs, 'onSelect')),
      0 < r.length &&
        ((t = new Mc('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mr))));
}
function Yo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Pr = {
    animationend: Yo('Animation', 'AnimationEnd'),
    animationiteration: Yo('Animation', 'AnimationIteration'),
    animationstart: Yo('Animation', 'AnimationStart'),
    transitionend: Yo('Transition', 'TransitionEnd'),
  },
  Cu = {},
  gm = {};
sn &&
  ((gm = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Pr.animationend.animation,
    delete Pr.animationiteration.animation,
    delete Pr.animationstart.animation),
  'TransitionEvent' in window || delete Pr.transitionend.transition);
function pa(e) {
  if (Cu[e]) return Cu[e];
  if (!Pr[e]) return e;
  var t = Pr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in gm) return (Cu[e] = t[n]);
  return e;
}
var ym = pa('animationend'),
  vm = pa('animationiteration'),
  wm = pa('animationstart'),
  xm = pa('transitionend'),
  Sm = new Map(),
  Ed =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Bn(e, t) {
  Sm.set(e, t), pr(t, [e]);
}
for (var Eu = 0; Eu < Ed.length; Eu++) {
  var ku = Ed[Eu],
    e1 = ku.toLowerCase(),
    t1 = ku[0].toUpperCase() + ku.slice(1);
  Bn(e1, 'on' + t1);
}
Bn(ym, 'onAnimationEnd');
Bn(vm, 'onAnimationIteration');
Bn(wm, 'onAnimationStart');
Bn('dblclick', 'onDoubleClick');
Bn('focusin', 'onFocus');
Bn('focusout', 'onBlur');
Bn(xm, 'onTransitionEnd');
Kr('onMouseEnter', ['mouseout', 'mouseover']);
Kr('onMouseLeave', ['mouseout', 'mouseover']);
Kr('onPointerEnter', ['pointerout', 'pointerover']);
Kr('onPointerLeave', ['pointerout', 'pointerover']);
pr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
pr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
pr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
pr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
pr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
pr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Fi =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  n1 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Fi));
function kd(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), ev(r, t, void 0, e), (e.currentTarget = null);
}
function _m(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && i.isPropagationStopped())) break e;
          kd(i, a, s), (o = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          kd(i, a, s), (o = u);
        }
    }
  }
  if (kl) throw ((e = gs), (kl = !1), (gs = null), e);
}
function de(e, t) {
  var n = t[Ns];
  n === void 0 && (n = t[Ns] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Cm(t, e, 2, !1), n.add(r));
}
function Nu(e, t, n) {
  var r = 0;
  t && (r |= 4), Cm(n, e, r, t);
}
var Qo = '_reactListening' + Math.random().toString(36).slice(2);
function lo(e) {
  if (!e[Qo]) {
    (e[Qo] = !0),
      Rp.forEach(function (n) {
        n !== 'selectionchange' && (n1.has(n) || Nu(n, !1, e), Nu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qo] || ((t[Qo] = !0), Nu('selectionchange', !1, t));
  }
}
function Cm(e, t, n, r) {
  switch (lm(t)) {
    case 1:
      var i = gv;
      break;
    case 4:
      i = yv;
      break;
    default:
      i = Nc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ms ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r ?
      i !== void 0 ?
        e.addEventListener(t, n, { capture: !0, passive: i })
      : e.addEventListener(t, n, !0)
    : i !== void 0 ? e.addEventListener(t, n, { passive: i })
    : e.addEventListener(t, n, !1);
}
function Tu(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = qn(a)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = o = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Yp(function () {
    var s = o,
      c = _c(n),
      d = [];
    e: {
      var f = Sm.get(e);
      if (f !== void 0) {
        var m = Mc,
          v = e;
        switch (e) {
          case 'keypress':
            if (cl(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = Dv;
            break;
          case 'focusin':
            (v = 'focus'), (m = xu);
            break;
          case 'focusout':
            (v = 'blur'), (m = xu);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = xu;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = hd;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = xv;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = bv;
            break;
          case ym:
          case vm:
          case wm:
            m = Cv;
            break;
          case xm:
            m = Ov;
            break;
          case 'scroll':
            m = vv;
            break;
          case 'wheel':
            m = Iv;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = kv;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = md;
        }
        var x = (t & 4) !== 0,
          E = !x && e === 'scroll',
          h =
            x ?
              f !== null ?
                f + 'Capture'
              : null
            : f;
        x = [];
        for (var p = s, w; p !== null; ) {
          w = p;
          var g = w.stateNode;
          if (
            (w.tag === 5 &&
              g !== null &&
              ((w = g),
              h !== null && ((g = eo(p, h)), g != null && x.push(ao(p, g, w)))),
            E)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((f = new m(f, v, null, n, c)), d.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== hs &&
            (v = n.relatedTarget || n.fromElement) &&
            (qn(v) || v[cn]))
        )
          break e;
        if (
          (m || f) &&
          ((f =
            c.window === c ? c
            : (f = c.ownerDocument) ? f.defaultView || f.parentWindow
            : window),
          m ?
            ((v = n.relatedTarget || n.toElement),
            (m = s),
            (v = v ? qn(v) : null),
            v !== null &&
              ((E = mr(v)), v !== E || (v.tag !== 5 && v.tag !== 6)) &&
              (v = null))
          : ((m = null), (v = s)),
          m !== v)
        ) {
          if (
            ((x = hd),
            (g = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = md),
              (g = 'onPointerLeave'),
              (h = 'onPointerEnter'),
              (p = 'pointer')),
            (E = m == null ? f : Rr(m)),
            (w = v == null ? f : Rr(v)),
            (f = new x(g, p + 'leave', m, n, c)),
            (f.target = E),
            (f.relatedTarget = w),
            (g = null),
            qn(c) === s &&
              ((x = new x(h, p + 'enter', v, n, c)),
              (x.target = w),
              (x.relatedTarget = E),
              (g = x)),
            (E = g),
            m && v)
          )
            t: {
              for (x = m, h = v, p = 0, w = x; w; w = _r(w)) p++;
              for (w = 0, g = h; g; g = _r(g)) w++;
              for (; 0 < p - w; ) (x = _r(x)), p--;
              for (; 0 < w - p; ) (h = _r(h)), w--;
              for (; p--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t;
                (x = _r(x)), (h = _r(h));
              }
              x = null;
            }
          else x = null;
          m !== null && Nd(d, f, m, x, !1),
            v !== null && E !== null && Nd(d, E, v, x, !0);
        }
      }
      e: {
        if (
          ((f = s ? Rr(s) : window),
          (m = f.nodeName && f.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && f.type === 'file'))
        )
          var k = Yv;
        else if (vd(f))
          if (dm) k = qv;
          else {
            k = Kv;
            var _ = Qv;
          }
        else
          (m = f.nodeName) &&
            m.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (k = Xv);
        if (k && (k = k(e, s))) {
          fm(d, k, n, c);
          break e;
        }
        _ && _(e, f, s),
          e === 'focusout' &&
            (_ = f._wrapperState) &&
            _.controlled &&
            f.type === 'number' &&
            us(f, 'number', f.value);
      }
      switch (((_ = s ? Rr(s) : window), e)) {
        case 'focusin':
          (vd(_) || _.contentEditable === 'true') &&
            ((Mr = _), (xs = s), (Wi = null));
          break;
        case 'focusout':
          Wi = xs = Mr = null;
          break;
        case 'mousedown':
          Ss = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Ss = !1), Cd(d, n, c);
          break;
        case 'selectionchange':
          if (Jv) break;
        case 'keydown':
        case 'keyup':
          Cd(d, n, c);
      }
      var T;
      if (Rc)
        e: {
          switch (e) {
            case 'compositionstart':
              var j = 'onCompositionStart';
              break e;
            case 'compositionend':
              j = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              j = 'onCompositionUpdate';
              break e;
          }
          j = void 0;
        }
      else
        Tr ?
          sm(e, n) && (j = 'onCompositionEnd')
        : e === 'keydown' && n.keyCode === 229 && (j = 'onCompositionStart');
      j &&
        (um &&
          n.locale !== 'ko' &&
          (Tr || j !== 'onCompositionStart' ?
            j === 'onCompositionEnd' && Tr && (T = am())
          : ((Mn = c),
            (Tc = 'value' in Mn ? Mn.value : Mn.textContent),
            (Tr = !0))),
        (_ = Rl(s, j)),
        0 < _.length &&
          ((j = new pd(j, e, null, n, c)),
          d.push({ event: j, listeners: _ }),
          T ? (j.data = T) : ((T = cm(n)), T !== null && (j.data = T)))),
        (T = zv ? Bv(e, n) : Hv(e, n)) &&
          ((s = Rl(s, 'onBeforeInput')),
          0 < s.length &&
            ((c = new pd('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: s }),
            (c.data = T)));
    }
    _m(d, t);
  });
}
function ao(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Rl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = eo(e, n)),
      o != null && r.unshift(ao(e, o, i)),
      (o = eo(e, t)),
      o != null && r.push(ao(e, o, i))),
      (e = e.return);
  }
  return r;
}
function _r(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nd(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      i ?
        ((u = eo(n, o)), u != null && l.unshift(ao(n, u, a)))
      : i || ((u = eo(n, o)), u != null && l.push(ao(n, u, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var r1 = /\r\n?/g,
  i1 = /\u0000|\uFFFD/g;
function Td(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      r1,
      `
`
    )
    .replace(i1, '');
}
function Ko(e, t, n) {
  if (((t = Td(t)), Td(e) !== t && n)) throw Error(P(425));
}
function jl() {}
var _s = null,
  Cs = null;
function Es(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ks = typeof setTimeout == 'function' ? setTimeout : void 0,
  o1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Md = typeof Promise == 'function' ? Promise : void 0,
  l1 =
    typeof queueMicrotask == 'function' ? queueMicrotask
    : typeof Md < 'u' ?
      function (e) {
        return Md.resolve(null).then(e).catch(a1);
      }
    : ks;
function a1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Mu(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), ro(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  ro(t);
}
function Ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Pd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var si = Math.random().toString(36).slice(2),
  Bt = '__reactFiber$' + si,
  uo = '__reactProps$' + si,
  cn = '__reactContainer$' + si,
  Ns = '__reactEvents$' + si,
  u1 = '__reactListeners$' + si,
  s1 = '__reactHandles$' + si;
function qn(e) {
  var t = e[Bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[cn] || n[Bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pd(e); e !== null; ) {
          if ((n = e[Bt])) return n;
          e = Pd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ko(e) {
  return (
    (e = e[Bt] || e[cn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Rr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function ma(e) {
  return e[uo] || null;
}
var Ts = [],
  jr = -1;
function Hn(e) {
  return { current: e };
}
function he(e) {
  0 > jr || ((e.current = Ts[jr]), (Ts[jr] = null), jr--);
}
function fe(e, t) {
  jr++, (Ts[jr] = e.current), (e.current = t);
}
var In = {},
  We = Hn(In),
  it = Hn(!1),
  ir = In;
function Xr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return In;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ot(e) {
  return (e = e.childContextTypes), e != null;
}
function Dl() {
  he(it), he(We);
}
function Rd(e, t, n) {
  if (We.current !== In) throw Error(P(168));
  fe(We, t), fe(it, n);
}
function Em(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(P(108, Qy(e) || 'Unknown', i));
  return ve({}, n, r);
}
function Ll(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || In),
    (ir = We.current),
    fe(We, e),
    fe(it, it.current),
    !0
  );
}
function jd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n ?
    ((e = Em(e, t, ir)),
    (r.__reactInternalMemoizedMergedChildContext = e),
    he(it),
    he(We),
    fe(We, e))
  : he(it),
    fe(it, n);
}
var tn = null,
  ga = !1,
  Pu = !1;
function km(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
function c1(e) {
  (ga = !0), km(e);
}
function Vn() {
  if (!Pu && tn !== null) {
    Pu = !0;
    var e = 0,
      t = ie;
    try {
      var n = tn;
      for (ie = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (tn = null), (ga = !1);
    } catch (i) {
      throw (tn !== null && (tn = tn.slice(e + 1)), qp(Cc, Vn), i);
    } finally {
      (ie = t), (Pu = !1);
    }
  }
  return null;
}
var Dr = [],
  Lr = 0,
  $l = null,
  bl = 0,
  yt = [],
  vt = 0,
  or = null,
  nn = 1,
  rn = '';
function Yn(e, t) {
  (Dr[Lr++] = bl), (Dr[Lr++] = $l), ($l = e), (bl = t);
}
function Nm(e, t, n) {
  (yt[vt++] = nn), (yt[vt++] = rn), (yt[vt++] = or), (or = e);
  var r = nn;
  e = rn;
  var i = 32 - $t(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - $t(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (nn = (1 << (32 - $t(t) + i)) | (n << i) | r),
      (rn = o + e);
  } else (nn = (1 << o) | (n << i) | r), (rn = e);
}
function Dc(e) {
  e.return !== null && (Yn(e, 1), Nm(e, 1, 0));
}
function Lc(e) {
  for (; e === $l; )
    ($l = Dr[--Lr]), (Dr[Lr] = null), (bl = Dr[--Lr]), (Dr[Lr] = null);
  for (; e === or; )
    (or = yt[--vt]),
      (yt[vt] = null),
      (rn = yt[--vt]),
      (yt[vt] = null),
      (nn = yt[--vt]),
      (yt[vt] = null);
}
var st = null,
  ut = null,
  pe = !1,
  jt = null;
function Tm(e, t) {
  var n = wt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Dd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ?
            null
          : t),
        t !== null ?
          ((e.stateNode = t), (st = e), (ut = Ln(t.firstChild)), !0)
        : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (st = e), (ut = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null ?
          ((n = or !== null ? { id: nn, overflow: rn } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          (n = wt(18, null, null, 0)),
          (n.stateNode = t),
          (n.return = e),
          (e.child = n),
          (st = e),
          (ut = null),
          !0)
        : !1
      );
    default:
      return !1;
  }
}
function Ms(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ps(e) {
  if (pe) {
    var t = ut;
    if (t) {
      var n = t;
      if (!Dd(e, t)) {
        if (Ms(e)) throw Error(P(418));
        t = Ln(n.nextSibling);
        var r = st;
        t && Dd(e, t) ?
          Tm(r, n)
        : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (st = e));
      }
    } else {
      if (Ms(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (pe = !1), (st = e);
    }
  }
}
function Ld(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  st = e;
}
function Xo(e) {
  if (e !== st) return !1;
  if (!pe) return Ld(e), (pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Es(e.type, e.memoizedProps))),
    t && (t = ut))
  ) {
    if (Ms(e)) throw (Mm(), Error(P(418)));
    for (; t; ) Tm(e, t), (t = Ln(t.nextSibling));
  }
  if ((Ld(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              ut = Ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      ut = null;
    }
  } else ut = st ? Ln(e.stateNode.nextSibling) : null;
  return !0;
}
function Mm() {
  for (var e = ut; e; ) e = Ln(e.nextSibling);
}
function qr() {
  (ut = st = null), (pe = !1);
}
function $c(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
var f1 = gn.ReactCurrentBatchConfig;
function Mt(e, t) {
  if (e && e.defaultProps) {
    (t = ve({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Fl = Hn(null),
  Ol = null,
  $r = null,
  bc = null;
function Fc() {
  bc = $r = Ol = null;
}
function Oc(e) {
  var t = Fl.current;
  he(Fl), (e._currentValue = t);
}
function Rs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t ?
        ((e.childLanes |= t), r !== null && (r.childLanes |= t))
      : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Vr(e, t) {
  (Ol = e),
    (bc = $r = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (nt = !0), (e.firstContext = null));
}
function _t(e) {
  var t = e._currentValue;
  if (bc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), $r === null)) {
      if (Ol === null) throw Error(P(308));
      ($r = e), (Ol.dependencies = { lanes: 0, firstContext: e });
    } else $r = $r.next = e;
  return t;
}
var Gn = null;
function Uc(e) {
  Gn === null ? (Gn = [e]) : Gn.push(e);
}
function Pm(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Uc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    fn(e, r)
  );
}
function fn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var kn = !1;
function Ic(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Rm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function un(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function $n(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ee & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      fn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Uc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    fn(e, n)
  );
}
function fl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ec(e, n);
  }
}
function $d(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ul(e, t, n, r) {
  var i = e.updateQueue;
  kn = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), l === null ? (o = s) : (l.next = s), (l = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== l &&
        (a === null ? (c.firstBaseUpdate = s) : (a.next = s),
        (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var d = i.baseState;
    (l = 0), (c = s = u = null), (a = o);
    do {
      var f = a.lane,
        m = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            x = a;
          switch (((f = t), (m = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == 'function')) {
                d = v.call(m, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (f = typeof v == 'function' ? v.call(m, d, f) : v),
                f == null)
              )
                break e;
              d = ve({}, d, f);
              break e;
            case 2:
              kn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (m = {
          eventTime: m,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((s = c = m), (u = d)) : (c = c.next = m),
          (l |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (u = d),
      (i.baseState = u),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (ar |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function bd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(P(191, i));
        i.call(r);
      }
    }
}
var jm = new Pp.Component().refs;
function js(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ya = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? mr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ge(),
      i = Fn(e),
      o = un(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = $n(e, o, i)),
      t !== null && (bt(t, e, i, r), fl(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ge(),
      i = Fn(e),
      o = un(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = $n(e, o, i)),
      t !== null && (bt(t, e, i, r), fl(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ge(),
      r = Fn(e),
      i = un(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = $n(e, i, r)),
      t !== null && (bt(t, e, r, n), fl(t, e, r));
  },
};
function Fd(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function' ?
      e.shouldComponentUpdate(r, o, l)
    : t.prototype && t.prototype.isPureReactComponent ? !oo(n, r) || !oo(i, o)
    : !0
  );
}
function Dm(e, t, n) {
  var r = !1,
    i = In,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null ?
      (o = _t(o))
    : ((i = ot(t) ? ir : We.current),
      (r = t.contextTypes),
      (o = (r = r != null) ? Xr(e, i) : In)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ya),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Od(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ya.enqueueReplaceState(t, t.state, null);
}
function Ds(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = jm), Ic(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null ?
    (i.context = _t(o))
  : ((o = ot(t) ? ir : We.current), (i.context = Xr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (js(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ya.enqueueReplaceState(i, i.state, null),
      Ul(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Si(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var i = r,
        o = '' + e;
      return (
          t !== null &&
            t.ref !== null &&
            typeof t.ref == 'function' &&
            t.ref._stringRef === o
        ) ?
          t.ref
        : ((t = function (l) {
            var a = i.refs;
            a === jm && (a = i.refs = {}),
              l === null ? delete a[o] : (a[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function qo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === '[object Object]' ?
          'object with keys {' + Object.keys(t).join(', ') + '}'
        : e
      )
    ))
  );
}
function Ud(e) {
  var t = e._init;
  return t(e._payload);
}
function Lm(e) {
  function t(h, p) {
    if (e) {
      var w = h.deletions;
      w === null ? ((h.deletions = [p]), (h.flags |= 16)) : w.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function i(h, p) {
    return (h = On(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, p, w) {
    return (
      (h.index = w),
      e ?
        ((w = h.alternate),
        w !== null ?
          ((w = w.index), w < p ? ((h.flags |= 2), p) : w)
        : ((h.flags |= 2), p))
      : ((h.flags |= 1048576), p)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, p, w, g) {
    return p === null || p.tag !== 6 ?
        ((p = Fu(w, h.mode, g)), (p.return = h), p)
      : ((p = i(p, w)), (p.return = h), p);
  }
  function u(h, p, w, g) {
    var k = w.type;
    return (
      k === Nr ? c(h, p, w.props.children, g, w.key)
      : (
        p !== null &&
        (p.elementType === k ||
          (typeof k == 'object' &&
            k !== null &&
            k.$$typeof === En &&
            Ud(k) === p.type))
      ) ?
        ((g = i(p, w.props)), (g.ref = Si(h, p, w)), (g.return = h), g)
      : ((g = yl(w.type, w.key, w.props, null, h.mode, g)),
        (g.ref = Si(h, p, w)),
        (g.return = h),
        g)
    );
  }
  function s(h, p, w, g) {
    return (
        p === null ||
          p.tag !== 4 ||
          p.stateNode.containerInfo !== w.containerInfo ||
          p.stateNode.implementation !== w.implementation
      ) ?
        ((p = Ou(w, h.mode, g)), (p.return = h), p)
      : ((p = i(p, w.children || [])), (p.return = h), p);
  }
  function c(h, p, w, g, k) {
    return p === null || p.tag !== 7 ?
        ((p = nr(w, h.mode, g, k)), (p.return = h), p)
      : ((p = i(p, w)), (p.return = h), p);
  }
  function d(h, p, w) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Fu('' + p, h.mode, w)), (p.return = h), p;
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Io:
          return (
            (w = yl(p.type, p.key, p.props, null, h.mode, w)),
            (w.ref = Si(h, null, p)),
            (w.return = h),
            w
          );
        case kr:
          return (p = Ou(p, h.mode, w)), (p.return = h), p;
        case En:
          var g = p._init;
          return d(h, g(p._payload), w);
      }
      if ($i(p) || gi(p))
        return (p = nr(p, h.mode, w, null)), (p.return = h), p;
      qo(h, p);
    }
    return null;
  }
  function f(h, p, w, g) {
    var k = p !== null ? p.key : null;
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return k !== null ? null : a(h, p, '' + w, g);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case Io:
          return w.key === k ? u(h, p, w, g) : null;
        case kr:
          return w.key === k ? s(h, p, w, g) : null;
        case En:
          return (k = w._init), f(h, p, k(w._payload), g);
      }
      if ($i(w) || gi(w)) return k !== null ? null : c(h, p, w, g, null);
      qo(h, w);
    }
    return null;
  }
  function m(h, p, w, g, k) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (h = h.get(w) || null), a(p, h, '' + g, k);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Io:
          return (h = h.get(g.key === null ? w : g.key) || null), u(p, h, g, k);
        case kr:
          return (h = h.get(g.key === null ? w : g.key) || null), s(p, h, g, k);
        case En:
          var _ = g._init;
          return m(h, p, w, _(g._payload), k);
      }
      if ($i(g) || gi(g)) return (h = h.get(w) || null), c(p, h, g, k, null);
      qo(p, g);
    }
    return null;
  }
  function v(h, p, w, g) {
    for (
      var k = null, _ = null, T = p, j = (p = 0), I = null;
      T !== null && j < w.length;
      j++
    ) {
      T.index > j ? ((I = T), (T = null)) : (I = T.sibling);
      var U = f(h, T, w[j], g);
      if (U === null) {
        T === null && (T = I);
        break;
      }
      e && T && U.alternate === null && t(h, T),
        (p = o(U, p, j)),
        _ === null ? (k = U) : (_.sibling = U),
        (_ = U),
        (T = I);
    }
    if (j === w.length) return n(h, T), pe && Yn(h, j), k;
    if (T === null) {
      for (; j < w.length; j++)
        (T = d(h, w[j], g)),
          T !== null &&
            ((p = o(T, p, j)), _ === null ? (k = T) : (_.sibling = T), (_ = T));
      return pe && Yn(h, j), k;
    }
    for (T = r(h, T); j < w.length; j++)
      (I = m(T, h, j, w[j], g)),
        I !== null &&
          (e && I.alternate !== null && T.delete(I.key === null ? j : I.key),
          (p = o(I, p, j)),
          _ === null ? (k = I) : (_.sibling = I),
          (_ = I));
    return (
      e &&
        T.forEach(function (b) {
          return t(h, b);
        }),
      pe && Yn(h, j),
      k
    );
  }
  function x(h, p, w, g) {
    var k = gi(w);
    if (typeof k != 'function') throw Error(P(150));
    if (((w = k.call(w)), w == null)) throw Error(P(151));
    for (
      var _ = (k = null), T = p, j = (p = 0), I = null, U = w.next();
      T !== null && !U.done;
      j++, U = w.next()
    ) {
      T.index > j ? ((I = T), (T = null)) : (I = T.sibling);
      var b = f(h, T, U.value, g);
      if (b === null) {
        T === null && (T = I);
        break;
      }
      e && T && b.alternate === null && t(h, T),
        (p = o(b, p, j)),
        _ === null ? (k = b) : (_.sibling = b),
        (_ = b),
        (T = I);
    }
    if (U.done) return n(h, T), pe && Yn(h, j), k;
    if (T === null) {
      for (; !U.done; j++, U = w.next())
        (U = d(h, U.value, g)),
          U !== null &&
            ((p = o(U, p, j)), _ === null ? (k = U) : (_.sibling = U), (_ = U));
      return pe && Yn(h, j), k;
    }
    for (T = r(h, T); !U.done; j++, U = w.next())
      (U = m(T, h, j, U.value, g)),
        U !== null &&
          (e && U.alternate !== null && T.delete(U.key === null ? j : U.key),
          (p = o(U, p, j)),
          _ === null ? (k = U) : (_.sibling = U),
          (_ = U));
    return (
      e &&
        T.forEach(function (q) {
          return t(h, q);
        }),
      pe && Yn(h, j),
      k
    );
  }
  function E(h, p, w, g) {
    if (
      (typeof w == 'object' &&
        w !== null &&
        w.type === Nr &&
        w.key === null &&
        (w = w.props.children),
      typeof w == 'object' && w !== null)
    ) {
      switch (w.$$typeof) {
        case Io:
          e: {
            for (var k = w.key, _ = p; _ !== null; ) {
              if (_.key === k) {
                if (((k = w.type), k === Nr)) {
                  if (_.tag === 7) {
                    n(h, _.sibling),
                      (p = i(_, w.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  _.elementType === k ||
                  (typeof k == 'object' &&
                    k !== null &&
                    k.$$typeof === En &&
                    Ud(k) === _.type)
                ) {
                  n(h, _.sibling),
                    (p = i(_, w.props)),
                    (p.ref = Si(h, _, w)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, _);
                break;
              } else t(h, _);
              _ = _.sibling;
            }
            w.type === Nr ?
              ((p = nr(w.props.children, h.mode, g, w.key)),
              (p.return = h),
              (h = p))
            : ((g = yl(w.type, w.key, w.props, null, h.mode, g)),
              (g.ref = Si(h, p, w)),
              (g.return = h),
              (h = g));
          }
          return l(h);
        case kr:
          e: {
            for (_ = w.key; p !== null; ) {
              if (p.key === _)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === w.containerInfo &&
                  p.stateNode.implementation === w.implementation
                ) {
                  n(h, p.sibling),
                    (p = i(p, w.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = Ou(w, h.mode, g)), (p.return = h), (h = p);
          }
          return l(h);
        case En:
          return (_ = w._init), E(h, p, _(w._payload), g);
      }
      if ($i(w)) return v(h, p, w, g);
      if (gi(w)) return x(h, p, w, g);
      qo(h, w);
    }
    return (typeof w == 'string' && w !== '') || typeof w == 'number' ?
        ((w = '' + w),
        p !== null && p.tag === 6 ?
          (n(h, p.sibling), (p = i(p, w)), (p.return = h), (h = p))
        : (n(h, p), (p = Fu(w, h.mode, g)), (p.return = h), (h = p)),
        l(h))
      : n(h, p);
  }
  return E;
}
var Gr = Lm(!0),
  $m = Lm(!1),
  No = {},
  Vt = Hn(No),
  so = Hn(No),
  co = Hn(No);
function Zn(e) {
  if (e === No) throw Error(P(174));
  return e;
}
function Ac(e, t) {
  switch ((fe(co, t), fe(so, e), fe(Vt, No), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cs(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cs(t, e));
  }
  he(Vt), fe(Vt, t);
}
function Zr() {
  he(Vt), he(so), he(co);
}
function bm(e) {
  Zn(co.current);
  var t = Zn(Vt.current),
    n = cs(t, e.type);
  t !== n && (fe(so, e), fe(Vt, n));
}
function zc(e) {
  so.current === e && (he(Vt), he(so));
}
var ge = Hn(0);
function Il(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ru = [];
function Bc() {
  for (var e = 0; e < Ru.length; e++)
    Ru[e]._workInProgressVersionPrimary = null;
  Ru.length = 0;
}
var dl = gn.ReactCurrentDispatcher,
  ju = gn.ReactCurrentBatchConfig,
  lr = 0,
  ye = null,
  Te = null,
  je = null,
  Al = !1,
  Yi = !1,
  fo = 0,
  d1 = 0;
function ze() {
  throw Error(P(321));
}
function Hc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ot(e[n], t[n])) return !1;
  return !0;
}
function Vc(e, t, n, r, i, o) {
  if (
    ((lr = o),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (dl.current = e === null || e.memoizedState === null ? g1 : y1),
    (e = n(r, i)),
    Yi)
  ) {
    o = 0;
    do {
      if (((Yi = !1), (fo = 0), 25 <= o)) throw Error(P(301));
      (o += 1),
        (je = Te = null),
        (t.updateQueue = null),
        (dl.current = v1),
        (e = n(r, i));
    } while (Yi);
  }
  if (
    ((dl.current = zl),
    (t = Te !== null && Te.next !== null),
    (lr = 0),
    (je = Te = ye = null),
    (Al = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Wc() {
  var e = fo !== 0;
  return (fo = 0), e;
}
function zt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return je === null ? (ye.memoizedState = je = e) : (je = je.next = e), je;
}
function Ct() {
  if (Te === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Te.next;
  var t = je === null ? ye.memoizedState : je.next;
  if (t !== null) (je = t), (Te = e);
  else {
    if (e === null) throw Error(P(310));
    (Te = e),
      (e = {
        memoizedState: Te.memoizedState,
        baseState: Te.baseState,
        baseQueue: Te.baseQueue,
        queue: Te.queue,
        next: null,
      }),
      je === null ? (ye.memoizedState = je = e) : (je = je.next = e);
  }
  return je;
}
function ho(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Du(e) {
  var t = Ct(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = Te,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (l = null),
      u = null,
      s = o;
    do {
      var c = s.lane;
      if ((lr & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var d = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = d), (l = r)) : (u = u.next = d),
          (ye.lanes |= c),
          (ar |= c);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (l = r) : (u.next = a),
      Ot(r, t.memoizedState) || (nt = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ye.lanes |= o), (ar |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Lu(e) {
  var t = Ct(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Ot(o, t.memoizedState) || (nt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Fm() {}
function Om(e, t) {
  var n = ye,
    r = Ct(),
    i = t(),
    o = !Ot(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (nt = !0)),
    (r = r.queue),
    Yc(Am.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (je !== null && je.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      po(9, Im.bind(null, n, r, i, t), void 0, null),
      De === null)
    )
      throw Error(P(349));
    lr & 30 || Um(n, t, i);
  }
  return i;
}
function Um(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null ?
      ((t = { lastEffect: null, stores: null }),
      (ye.updateQueue = t),
      (t.stores = [e]))
    : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Im(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), zm(t) && Bm(e);
}
function Am(e, t, n) {
  return n(function () {
    zm(t) && Bm(e);
  });
}
function zm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ot(e, n);
  } catch {
    return !0;
  }
}
function Bm(e) {
  var t = fn(e, 1);
  t !== null && bt(t, e, 1, -1);
}
function Id(e) {
  var t = zt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ho,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = m1.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function po(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null ?
      ((t = { lastEffect: null, stores: null }),
      (ye.updateQueue = t),
      (t.lastEffect = e.next = e))
    : ((n = t.lastEffect),
      n === null ?
        (t.lastEffect = e.next = e)
      : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Hm() {
  return Ct().memoizedState;
}
function hl(e, t, n, r) {
  var i = zt();
  (ye.flags |= e),
    (i.memoizedState = po(1 | t, n, void 0, r === void 0 ? null : r));
}
function va(e, t, n, r) {
  var i = Ct();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Te !== null) {
    var l = Te.memoizedState;
    if (((o = l.destroy), r !== null && Hc(r, l.deps))) {
      i.memoizedState = po(t, n, o, r);
      return;
    }
  }
  (ye.flags |= e), (i.memoizedState = po(1 | t, n, o, r));
}
function Ad(e, t) {
  return hl(8390656, 8, e, t);
}
function Yc(e, t) {
  return va(2048, 8, e, t);
}
function Vm(e, t) {
  return va(4, 2, e, t);
}
function Wm(e, t) {
  return va(4, 4, e, t);
}
function Ym(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), va(4, 4, Ym.bind(null, t, e), n)
  );
}
function Qc() {}
function Km(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hc(t, r[1]) ?
      r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Xm(e, t) {
  var n = Ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hc(t, r[1]) ?
      r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function qm(e, t, n) {
  return lr & 21 ?
      (Ot(n, t) || ((n = Jp()), (ye.lanes |= n), (ar |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (nt = !0)), (e.memoizedState = n));
}
function h1(e, t) {
  var n = ie;
  (ie = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ju.transition;
  ju.transition = {};
  try {
    e(!1), t();
  } finally {
    (ie = n), (ju.transition = r);
  }
}
function Gm() {
  return Ct().memoizedState;
}
function p1(e, t, n) {
  var r = Fn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Zm(e))
  )
    Jm(t, n);
  else if (((n = Pm(e, t, n, r)), n !== null)) {
    var i = Ge();
    bt(n, e, r, i), e0(n, t, r);
  }
}
function m1(e, t, n) {
  var r = Fn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zm(e)) Jm(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Ot(a, l))) {
          var u = t.interleaved;
          u === null ?
            ((i.next = i), Uc(t))
          : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Pm(e, t, i, r)),
      n !== null && ((i = Ge()), bt(n, e, r, i), e0(n, t, r));
  }
}
function Zm(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function Jm(e, t) {
  Yi = Al = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function e0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ec(e, n);
  }
}
var zl = {
    readContext: _t,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useInsertionEffect: ze,
    useLayoutEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useMutableSource: ze,
    useSyncExternalStore: ze,
    useId: ze,
    unstable_isNewReconciler: !1,
  },
  g1 = {
    readContext: _t,
    useCallback: function (e, t) {
      return (zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _t,
    useEffect: Ad,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        hl(4194308, 4, Ym.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return hl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return hl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = zt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = zt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = p1.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Id,
    useDebugValue: Qc,
    useDeferredValue: function (e) {
      return (zt().memoizedState = e);
    },
    useTransition: function () {
      var e = Id(!1),
        t = e[0];
      return (e = h1.bind(null, e[1])), (zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        i = zt();
      if (pe) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), De === null)) throw Error(P(349));
        lr & 30 || Um(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Ad(Am.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        po(9, Im.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = zt(),
        t = De.identifierPrefix;
      if (pe) {
        var n = rn,
          r = nn;
        (n = (r & ~(1 << (32 - $t(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = fo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = d1++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  y1 = {
    readContext: _t,
    useCallback: Km,
    useContext: _t,
    useEffect: Yc,
    useImperativeHandle: Qm,
    useInsertionEffect: Vm,
    useLayoutEffect: Wm,
    useMemo: Xm,
    useReducer: Du,
    useRef: Hm,
    useState: function () {
      return Du(ho);
    },
    useDebugValue: Qc,
    useDeferredValue: function (e) {
      var t = Ct();
      return qm(t, Te.memoizedState, e);
    },
    useTransition: function () {
      var e = Du(ho)[0],
        t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Fm,
    useSyncExternalStore: Om,
    useId: Gm,
    unstable_isNewReconciler: !1,
  },
  v1 = {
    readContext: _t,
    useCallback: Km,
    useContext: _t,
    useEffect: Yc,
    useImperativeHandle: Qm,
    useInsertionEffect: Vm,
    useLayoutEffect: Wm,
    useMemo: Xm,
    useReducer: Lu,
    useRef: Hm,
    useState: function () {
      return Lu(ho);
    },
    useDebugValue: Qc,
    useDeferredValue: function (e) {
      var t = Ct();
      return Te === null ? (t.memoizedState = e) : qm(t, Te.memoizedState, e);
    },
    useTransition: function () {
      var e = Lu(ho)[0],
        t = Ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Fm,
    useSyncExternalStore: Om,
    useId: Gm,
    unstable_isNewReconciler: !1,
  };
function Jr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Yy(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function $u(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ls(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var w1 = typeof WeakMap == 'function' ? WeakMap : Map;
function t0(e, t, n) {
  (n = un(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Hl || ((Hl = !0), (Hs = r)), Ls(e, t);
    }),
    n
  );
}
function n0(e, t, n) {
  (n = un(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ls(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ls(e, t),
          typeof r != 'function' &&
            (bn === null ? (bn = new Set([this])) : bn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : '',
        });
      }),
    n
  );
}
function zd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new w1();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = L1.bind(null, e, t, n)), t.then(e, e));
}
function Bd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Hd(e, t, n, r, i) {
  return e.mode & 1 ?
      ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t ?
        (e.flags |= 65536)
      : ((e.flags |= 128),
        (n.flags |= 131072),
        (n.flags &= -52805),
        n.tag === 1 &&
          (n.alternate === null ?
            (n.tag = 17)
          : ((t = un(-1, 1)), (t.tag = 2), $n(n, t, 1))),
        (n.lanes |= 1)),
      e);
}
var x1 = gn.ReactCurrentOwner,
  nt = !1;
function qe(e, t, n, r) {
  t.child = e === null ? $m(t, null, n, r) : Gr(t, e.child, n, r);
}
function Vd(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Vr(t, i),
    (r = Vc(e, t, n, r, o, i)),
    (n = Wc()),
    e !== null && !nt ?
      ((t.updateQueue = e.updateQueue),
      (t.flags &= -2053),
      (e.lanes &= ~i),
      dn(e, t, i))
    : (pe && n && Dc(t), (t.flags |= 1), qe(e, t, r, i), t.child)
  );
}
function Wd(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return (
        typeof o == 'function' &&
          !tf(o) &&
          o.defaultProps === void 0 &&
          n.compare === null &&
          n.defaultProps === void 0
      ) ?
        ((t.tag = 15), (t.type = o), r0(e, t, o, r, i))
      : ((e = yl(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : oo), n(l, r) && e.ref === t.ref)
    )
      return dn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = On(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function r0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (oo(o, r) && e.ref === t.ref)
      if (((nt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (nt = !0);
      else return (t.lanes = e.lanes), dn(e, t, i);
  }
  return $s(e, t, n, r, i);
}
function i0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        fe(Fr, at),
        (at |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          fe(Fr, at),
          (at |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        fe(Fr, at),
        (at |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      fe(Fr, at),
      (at |= r);
  return qe(e, t, i, n), t.child;
}
function o0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $s(e, t, n, r, i) {
  var o = ot(n) ? ir : We.current;
  return (
    (o = Xr(t, o)),
    Vr(t, i),
    (n = Vc(e, t, n, r, o, i)),
    (r = Wc()),
    e !== null && !nt ?
      ((t.updateQueue = e.updateQueue),
      (t.flags &= -2053),
      (e.lanes &= ~i),
      dn(e, t, i))
    : (pe && r && Dc(t), (t.flags |= 1), qe(e, t, n, i), t.child)
  );
}
function Yd(e, t, n, r, i) {
  if (ot(n)) {
    var o = !0;
    Ll(t);
  } else o = !1;
  if ((Vr(t, i), t.stateNode === null))
    pl(e, t), Dm(t, n, r), Ds(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var u = l.context,
      s = n.contextType;
    typeof s == 'object' && s !== null ?
      (s = _t(s))
    : ((s = ot(n) ? ir : We.current), (s = Xr(t, s)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== s) && Od(t, l, r, s)),
      (kn = !1);
    var f = t.memoizedState;
    (l.state = f),
      Ul(t, r, l, i),
      (u = t.memoizedState),
      a !== r || f !== u || it.current || kn ?
        (typeof c == 'function' && (js(t, n, c, r), (u = t.memoizedState)),
        (a = kn || Fd(t, n, a, r, f, u, s)) ?
          (d ||
            (typeof l.UNSAFE_componentWillMount != 'function' &&
              typeof l.componentWillMount != 'function') ||
            (typeof l.componentWillMount == 'function' &&
              l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == 'function' &&
              l.UNSAFE_componentWillMount()),
          typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
          (t.memoizedProps = r),
          (t.memoizedState = u)),
        (l.props = r),
        (l.state = u),
        (l.context = s),
        (r = a))
      : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
        (r = !1));
  } else {
    (l = t.stateNode),
      Rm(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : Mt(t.type, a)),
      (l.props = s),
      (d = t.pendingProps),
      (f = l.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null ?
        (u = _t(u))
      : ((u = ot(n) ? ir : We.current), (u = Xr(t, u)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((a !== d || f !== u) && Od(t, l, r, u)),
      (kn = !1),
      (f = t.memoizedState),
      (l.state = f),
      Ul(t, r, l, i);
    var v = t.memoizedState;
    a !== d || f !== v || it.current || kn ?
      (typeof m == 'function' && (js(t, n, m, r), (v = t.memoizedState)),
      (s = kn || Fd(t, n, s, r, f, v, u) || !1) ?
        (c ||
          (typeof l.UNSAFE_componentWillUpdate != 'function' &&
            typeof l.componentWillUpdate != 'function') ||
          (typeof l.componentWillUpdate == 'function' &&
            l.componentWillUpdate(r, v, u),
          typeof l.UNSAFE_componentWillUpdate == 'function' &&
            l.UNSAFE_componentWillUpdate(r, v, u)),
        typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
      : (typeof l.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (t.memoizedProps = r),
        (t.memoizedState = v)),
      (l.props = r),
      (l.state = v),
      (l.context = u),
      (r = s))
    : (typeof l.componentDidUpdate != 'function' ||
        (a === e.memoizedProps && f === e.memoizedState) ||
        (t.flags |= 4),
      typeof l.getSnapshotBeforeUpdate != 'function' ||
        (a === e.memoizedProps && f === e.memoizedState) ||
        (t.flags |= 1024),
      (r = !1));
  }
  return bs(e, t, n, r, o, i);
}
function bs(e, t, n, r, i, o) {
  o0(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && jd(t, n, !1), dn(e, t, o);
  (r = t.stateNode), (x1.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l ?
      ((t.child = Gr(t, e.child, null, o)), (t.child = Gr(t, null, a, o)))
    : qe(e, t, a, o),
    (t.memoizedState = r.state),
    i && jd(t, n, !0),
    t.child
  );
}
function l0(e) {
  var t = e.stateNode;
  t.pendingContext ?
    Rd(e, t.pendingContext, t.pendingContext !== t.context)
  : t.context && Rd(e, t.context, !1),
    Ac(e, t.containerInfo);
}
function Qd(e, t, n, r, i) {
  return qr(), $c(i), (t.flags |= 256), qe(e, t, n, r), t.child;
}
var Fs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Os(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function a0(e, t, n) {
  var r = t.pendingProps,
    i = ge.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ?
      ((o = !0), (t.flags &= -129))
    : (e === null || e.memoizedState !== null) && (i |= 1),
    fe(ge, i & 1),
    e === null)
  )
    return (
      Ps(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null) ?
        (t.mode & 1 ?
          e.data === '$!' ?
            (t.lanes = 8)
          : (t.lanes = 1073741824)
        : (t.lanes = 1),
        null)
      : ((l = r.children),
        (e = r.fallback),
        o ?
          ((r = t.mode),
          (o = t.child),
          (l = { mode: 'hidden', children: l }),
          !(r & 1) && o !== null ?
            ((o.childLanes = 0), (o.pendingProps = l))
          : (o = Sa(l, r, 0, null)),
          (e = nr(e, r, n, null)),
          (o.return = t),
          (e.return = t),
          (o.sibling = e),
          (t.child = o),
          (t.child.memoizedState = Os(n)),
          (t.memoizedState = Fs),
          e)
        : Kc(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return S1(e, t, l, r, a, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== i ?
        ((r = t.child),
        (r.childLanes = 0),
        (r.pendingProps = u),
        (t.deletions = null))
      : ((r = On(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = On(a, o)) : ((o = nr(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null ?
          Os(n)
        : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions,
          }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fs),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = On(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Kc(e, t) {
  return (
    (t = Sa({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Go(e, t, n, r) {
  return (
    r !== null && $c(r),
    Gr(t, e.child, null, n),
    (e = Kc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function S1(e, t, n, r, i, o, l) {
  if (n)
    return (
      t.flags & 256 ?
        ((t.flags &= -257), (r = $u(Error(P(422)))), Go(e, t, l, r))
      : t.memoizedState !== null ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Sa({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = nr(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Gr(t, e.child, null, l),
        (t.child.memoizedState = Os(l)),
        (t.memoizedState = Fs),
        o)
    );
  if (!(t.mode & 1)) return Go(e, t, l, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(P(419))), (r = $u(o, r, void 0)), Go(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), nt || a)) {
    if (((r = De), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), fn(e, i), bt(r, e, i, -1));
    }
    return ef(), (r = $u(Error(P(421)))), Go(e, t, l, r);
  }
  return i.data === '$?' ?
      ((t.flags |= 128),
      (t.child = e.child),
      (t = $1.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ut = Ln(i.nextSibling)),
      (st = t),
      (pe = !0),
      (jt = null),
      e !== null &&
        ((yt[vt++] = nn),
        (yt[vt++] = rn),
        (yt[vt++] = or),
        (nn = e.id),
        (rn = e.overflow),
        (or = t)),
      (t = Kc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Kd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Rs(e.return, t, n);
}
function bu(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ?
    (e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: i,
    })
  : ((o.isBackwards = t),
    (o.rendering = null),
    (o.renderingStartTime = 0),
    (o.last = r),
    (o.tail = n),
    (o.tailMode = i));
}
function u0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((qe(e, t, r.children, n), (r = ge.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Kd(e, n, t);
        else if (e.tag === 19) Kd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((fe(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Il(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null ?
            ((i = t.child), (t.child = null))
          : ((i = n.sibling), (n.sibling = null)),
          bu(t, !1, i, n, o);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Il(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        bu(t, !0, n, null, o);
        break;
      case 'together':
        bu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function pl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function dn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ar |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = On(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = On(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function _1(e, t, n) {
  switch (t.tag) {
    case 3:
      l0(t), qr();
      break;
    case 5:
      bm(t);
      break;
    case 1:
      ot(t.type) && Ll(t);
      break;
    case 4:
      Ac(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      fe(Fl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return (
          r.dehydrated !== null ?
            (fe(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes ? a0(e, t, n)
          : (fe(ge, ge.current & 1),
            (e = dn(e, t, n)),
            e !== null ? e.sibling : null)
        );
      fe(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return u0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        fe(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), i0(e, t, n);
  }
  return dn(e, t, n);
}
var s0, Us, c0, f0;
s0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Us = function () {};
c0 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Zn(Vt.current);
    var o = null;
    switch (n) {
      case 'input':
        (i = ls(e, i)), (r = ls(e, r)), (o = []);
        break;
      case 'select':
        (i = ve({}, i, { value: void 0 })),
          (r = ve({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = ss(e, i)), (r = ss(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = jl);
    }
    fs(n, r);
    var l;
    n = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === 'style') {
          var a = i[s];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (Zi.hasOwnProperty(s) ?
              o || (o = [])
            : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === 'style')
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''));
            for (l in u)
              u.hasOwnProperty(l) &&
                a[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === 'dangerouslySetInnerHTML' ?
            ((u = u ? u.__html : void 0),
            (a = a ? a.__html : void 0),
            u != null && a !== u && (o = o || []).push(s, u))
          : s === 'children' ?
            (typeof u != 'string' && typeof u != 'number') ||
            (o = o || []).push(s, '' + u)
          : s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            (Zi.hasOwnProperty(s) ?
              (u != null && s === 'onScroll' && de('scroll', e),
              o || a === u || (o = []))
            : (o = o || []).push(s, u));
    }
    n && (o = o || []).push('style', n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
f0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _i(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null ?
          t || e.tail === null ?
            (e.tail = null)
          : (e.tail.sibling = null)
        : (r.sibling = null);
    }
}
function Be(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function C1(e, t, n) {
  var r = t.pendingProps;
  switch ((Lc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Be(t), null;
    case 1:
      return ot(t.type) && Dl(), Be(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zr(),
        he(it),
        he(We),
        Bc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xo(t) ?
            (t.flags |= 4)
          : e === null ||
            (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
            ((t.flags |= 1024), jt !== null && (Ys(jt), (jt = null)))),
        Us(e, t),
        Be(t),
        null
      );
    case 5:
      zc(t);
      var i = Zn(co.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        c0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Be(t), null;
        }
        if (((e = Zn(Vt.current)), Xo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Bt] = t), (r[uo] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              de('cancel', r), de('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              de('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Fi.length; i++) de(Fi[i], r);
              break;
            case 'source':
              de('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              de('error', r), de('load', r);
              break;
            case 'details':
              de('toggle', r);
              break;
            case 'input':
              rd(r, o), de('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                de('invalid', r);
              break;
            case 'textarea':
              od(r, o), de('invalid', r);
          }
          fs(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === 'children' ?
                typeof a == 'string' ?
                  r.textContent !== a &&
                  (o.suppressHydrationWarning !== !0 && Ko(r.textContent, a, e),
                  (i = ['children', a]))
                : typeof a == 'number' &&
                  r.textContent !== '' + a &&
                  (o.suppressHydrationWarning !== !0 && Ko(r.textContent, a, e),
                  (i = ['children', '' + a]))
              : Zi.hasOwnProperty(l) &&
                a != null &&
                l === 'onScroll' &&
                de('scroll', r);
            }
          switch (n) {
            case 'input':
              Ao(r), id(r, o, !0);
              break;
            case 'textarea':
              Ao(r), ld(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = jl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Up(n)),
            e === 'http://www.w3.org/1999/xhtml' ?
              n === 'script' ?
                ((e = l.createElement('div')),
                (e.innerHTML = '<script></script>'),
                (e = e.removeChild(e.firstChild)))
              : typeof r.is == 'string' ? (e = l.createElement(n, { is: r.is }))
              : ((e = l.createElement(n)),
                n === 'select' &&
                  ((l = e),
                  r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
            : (e = l.createElementNS(e, n)),
            (e[Bt] = t),
            (e[uo] = r),
            s0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ds(n, r)), n)) {
              case 'dialog':
                de('cancel', e), de('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                de('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Fi.length; i++) de(Fi[i], e);
                i = r;
                break;
              case 'source':
                de('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                de('error', e), de('load', e), (i = r);
                break;
              case 'details':
                de('toggle', e), (i = r);
                break;
              case 'input':
                rd(e, r), (i = ls(e, r)), de('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ve({}, r, { value: void 0 })),
                  de('invalid', e);
                break;
              case 'textarea':
                od(e, r), (i = ss(e, r)), de('invalid', e);
                break;
              default:
                i = r;
            }
            fs(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === 'style' ? zp(e, u)
                : o === 'dangerouslySetInnerHTML' ?
                  ((u = u ? u.__html : void 0), u != null && Ip(e, u))
                : o === 'children' ?
                  typeof u == 'string' ?
                    (n !== 'textarea' || u !== '') && Ji(e, u)
                  : typeof u == 'number' && Ji(e, '' + u)
                : o !== 'suppressContentEditableWarning' &&
                  o !== 'suppressHydrationWarning' &&
                  o !== 'autoFocus' &&
                  (Zi.hasOwnProperty(o) ?
                    u != null && o === 'onScroll' && de('scroll', e)
                  : u != null && vc(e, o, u, l));
              }
            switch (n) {
              case 'input':
                Ao(e), id(e, r, !1);
                break;
              case 'textarea':
                Ao(e), ld(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Un(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null ?
                    Ar(e, !!r.multiple, o, !1)
                  : r.defaultValue != null &&
                    Ar(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = jl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Be(t), null;
    case 6:
      if (e && t.stateNode != null) f0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(P(166));
        if (((n = Zn(co.current)), Zn(Vt.current), Xo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Bt] = t),
            (o = r.nodeValue !== n) && ((e = st), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ko(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ko(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Bt] = t),
            (t.stateNode = r);
      }
      return Be(t), null;
    case 13:
      if (
        (he(ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (pe && ut !== null && t.mode & 1 && !(t.flags & 128))
          Mm(), qr(), (t.flags |= 98560), (o = !1);
        else if (((o = Xo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(P(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(P(317));
            o[Bt] = t;
          } else
            qr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Be(t), (o = !1);
        } else jt !== null && (Ys(jt), (jt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ?
          ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? Me === 0 && (Me = 3) : ef())),
          t.updateQueue !== null && (t.flags |= 4),
          Be(t),
          null);
    case 4:
      return (
        Zr(), Us(e, t), e === null && lo(t.stateNode.containerInfo), Be(t), null
      );
    case 10:
      return Oc(t.type._context), Be(t), null;
    case 17:
      return ot(t.type) && Dl(), Be(t), null;
    case 19:
      if ((he(ge), (o = t.memoizedState), o === null)) return Be(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) _i(o, !1);
        else {
          if (Me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Il(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    _i(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null ?
                      ((o.childLanes = 0),
                      (o.lanes = e),
                      (o.child = null),
                      (o.subtreeFlags = 0),
                      (o.memoizedProps = null),
                      (o.memoizedState = null),
                      (o.updateQueue = null),
                      (o.dependencies = null),
                      (o.stateNode = null))
                    : ((o.childLanes = l.childLanes),
                      (o.lanes = l.lanes),
                      (o.child = l.child),
                      (o.subtreeFlags = 0),
                      (o.deletions = null),
                      (o.memoizedProps = l.memoizedProps),
                      (o.memoizedState = l.memoizedState),
                      (o.updateQueue = l.updateQueue),
                      (o.type = l.type),
                      (e = l.dependencies),
                      (o.dependencies =
                        e === null ? null : (
                          { lanes: e.lanes, firstContext: e.firstContext }
                        ))),
                    (n = n.sibling);
                return fe(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ee() > ei &&
            ((t.flags |= 128), (r = !0), _i(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Il(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _i(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !l.alternate && !pe)
            )
              return Be(t), null;
          } else
            2 * Ee() - o.renderingStartTime > ei &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _i(o, !1), (t.lanes = 4194304));
        o.isBackwards ?
          ((l.sibling = t.child), (t.child = l))
        : ((n = o.last),
          n !== null ? (n.sibling = l) : (t.child = l),
          (o.last = l));
      }
      return o.tail !== null ?
          ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ee()),
          (t.sibling = null),
          (n = ge.current),
          fe(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (Be(t), null);
    case 22:
    case 23:
      return (
        Jc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ?
          at & 1073741824 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
        : Be(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function E1(e, t) {
  switch ((Lc(t), t.tag)) {
    case 1:
      return (
        ot(t.type) && Dl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zr(),
        he(it),
        he(We),
        Bc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return zc(t), null;
    case 13:
      if (
        (he(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        qr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return he(ge), null;
    case 4:
      return Zr(), null;
    case 10:
      return Oc(t.type._context), null;
    case 22:
    case 23:
      return Jc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zo = !1,
  Ve = !1,
  k1 = typeof WeakSet == 'function' ? WeakSet : Set,
  F = null;
function br(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        xe(e, t, r);
      }
    else n.current = null;
}
function Is(e, t, n) {
  try {
    n();
  } catch (r) {
    xe(e, t, r);
  }
}
var Xd = !1;
function N1(e, t) {
  if (((_s = Ml), (e = mm()), jc(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            u = -1,
            s = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var m;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = l + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (u = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (m = d.firstChild) !== null;

            )
              (f = d), (d = m);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++s === i && (a = l),
                f === o && ++c === r && (u = l),
                (m = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = m;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Cs = { focusedElem: e, selectionRange: n }, Ml = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    E = v.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Mt(t.type, x),
                      E
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1 ?
                  (w.textContent = '')
                : w.nodeType === 9 &&
                  w.documentElement &&
                  w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (g) {
          xe(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (v = Xd), (Xd = !1), v;
}
function Qi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Is(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function wa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function As(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function d0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), d0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Bt], delete t[uo], delete t[Ns], delete t[u1], delete t[s1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function h0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || h0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function zs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t ?
        n.nodeType === 8 ?
          n.parentNode.insertBefore(e, t)
        : n.insertBefore(e, t)
      : (n.nodeType === 8 ?
          ((t = n.parentNode), t.insertBefore(e, n))
        : ((t = n), t.appendChild(e)),
        (n = n._reactRootContainer),
        n != null || t.onclick !== null || (t.onclick = jl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zs(e, t, n), e = e.sibling; e !== null; ) zs(e, t, n), (e = e.sibling);
}
function Bs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bs(e, t, n), e = e.sibling; e !== null; ) Bs(e, t, n), (e = e.sibling);
}
var Oe = null,
  Pt = !1;
function _n(e, t, n) {
  for (n = n.child; n !== null; ) p0(e, t, n), (n = n.sibling);
}
function p0(e, t, n) {
  if (Ht && typeof Ht.onCommitFiberUnmount == 'function')
    try {
      Ht.onCommitFiberUnmount(fa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ve || br(n, t);
    case 6:
      var r = Oe,
        i = Pt;
      (Oe = null),
        _n(e, t, n),
        (Oe = r),
        (Pt = i),
        Oe !== null &&
          (Pt ?
            ((e = Oe),
            (n = n.stateNode),
            e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
          : Oe.removeChild(n.stateNode));
      break;
    case 18:
      Oe !== null &&
        (Pt ?
          ((e = Oe),
          (n = n.stateNode),
          e.nodeType === 8 ? Mu(e.parentNode, n) : e.nodeType === 1 && Mu(e, n),
          ro(e))
        : Mu(Oe, n.stateNode));
      break;
    case 4:
      (r = Oe),
        (i = Pt),
        (Oe = n.stateNode.containerInfo),
        (Pt = !0),
        _n(e, t, n),
        (Oe = r),
        (Pt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Is(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      _n(e, t, n);
      break;
    case 1:
      if (
        !Ve &&
        (br(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          xe(n, t, a);
        }
      _n(e, t, n);
      break;
    case 21:
      _n(e, t, n);
      break;
    case 22:
      n.mode & 1 ?
        ((Ve = (r = Ve) || n.memoizedState !== null), _n(e, t, n), (Ve = r))
      : _n(e, t, n);
      break;
    default:
      _n(e, t, n);
  }
}
function Gd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new k1()),
      t.forEach(function (r) {
        var i = b1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Oe = a.stateNode), (Pt = !1);
              break e;
            case 3:
              (Oe = a.stateNode.containerInfo), (Pt = !0);
              break e;
            case 4:
              (Oe = a.stateNode.containerInfo), (Pt = !0);
              break e;
          }
          a = a.return;
        }
        if (Oe === null) throw Error(P(160));
        p0(o, l, i), (Oe = null), (Pt = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (s) {
        xe(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) m0(t, e), (t = t.sibling);
}
function m0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Tt(t, e), At(e), r & 4)) {
        try {
          Qi(3, e, e.return), wa(3, e);
        } catch (x) {
          xe(e, e.return, x);
        }
        try {
          Qi(5, e, e.return);
        } catch (x) {
          xe(e, e.return, x);
        }
      }
      break;
    case 1:
      Tt(t, e), At(e), r & 512 && n !== null && br(n, n.return);
      break;
    case 5:
      if (
        (Tt(t, e),
        At(e),
        r & 512 && n !== null && br(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ji(i, '');
        } catch (x) {
          xe(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && o.type === 'radio' && o.name != null && Fp(i, o),
              ds(a, l);
            var s = ds(a, o);
            for (l = 0; l < u.length; l += 2) {
              var c = u[l],
                d = u[l + 1];
              c === 'style' ? zp(i, d)
              : c === 'dangerouslySetInnerHTML' ? Ip(i, d)
              : c === 'children' ? Ji(i, d)
              : vc(i, c, d, s);
            }
            switch (a) {
              case 'input':
                as(i, o);
                break;
              case 'textarea':
                Op(i, o);
                break;
              case 'select':
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null ?
                  Ar(i, !!o.multiple, m, !1)
                : f !== !!o.multiple &&
                  (o.defaultValue != null ?
                    Ar(i, !!o.multiple, o.defaultValue, !0)
                  : Ar(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[uo] = o;
          } catch (x) {
            xe(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Tt(t, e), At(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (x) {
          xe(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Tt(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ro(t.containerInfo);
        } catch (x) {
          xe(e, e.return, x);
        }
      break;
    case 4:
      Tt(t, e), At(e);
      break;
    case 13:
      Tt(t, e),
        At(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Gc = Ee())),
        r & 4 && Gd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ve = (s = Ve) || c), Tt(t, e), (Ve = s)) : Tt(t, e),
        At(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (F = e, c = e.child; c !== null; ) {
            for (d = F = c; F !== null; ) {
              switch (((f = F), (m = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qi(4, f, f.return);
                  break;
                case 1:
                  br(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      xe(r, n, x);
                    }
                  }
                  break;
                case 5:
                  br(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Jd(d);
                    continue;
                  }
              }
              m !== null ? ((m.return = f), (F = m)) : Jd(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  s ?
                    ((o = i.style),
                    typeof o.setProperty == 'function' ?
                      o.setProperty('display', 'none', 'important')
                    : (o.display = 'none'))
                  : ((a = d.stateNode),
                    (u = d.memoizedProps.style),
                    (l =
                      u != null && u.hasOwnProperty('display') ?
                        u.display
                      : null),
                    (a.style.display = Ap('display', l)));
              } catch (x) {
                xe(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = s ? '' : d.memoizedProps;
              } catch (x) {
                xe(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Tt(t, e), At(e), r & 4 && Gd(e);
      break;
    case 21:
      break;
    default:
      Tt(t, e), At(e);
  }
}
function At(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (h0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ji(i, ''), (r.flags &= -33));
          var o = qd(e);
          Bs(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = qd(e);
          zs(e, a, l);
          break;
        default:
          throw Error(P(161));
      }
    } catch (u) {
      xe(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function T1(e, t, n) {
  (F = e), g0(e);
}
function g0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var i = F,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Zo;
      if (!l) {
        var a = i.alternate,
          u = (a !== null && a.memoizedState !== null) || Ve;
        a = Zo;
        var s = Ve;
        if (((Zo = l), (Ve = u) && !s))
          for (F = i; F !== null; )
            (l = F),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null ? eh(i)
              : u !== null ? ((u.return = l), (F = u))
              : eh(i);
        for (; o !== null; ) (F = o), g0(o), (o = o.sibling);
        (F = i), (Zo = a), (Ve = s);
      }
      Zd(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (F = o)) : Zd(e);
  }
}
function Zd(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ve || wa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ve)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type ?
                      n.memoizedProps
                    : Mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && bd(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                bd(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && ro(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        Ve || (t.flags & 512 && As(t));
      } catch (f) {
        xe(t, t.return, f);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Jd(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function eh(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            wa(4, t);
          } catch (u) {
            xe(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              xe(t, i, u);
            }
          }
          var o = t.return;
          try {
            As(t);
          } catch (u) {
            xe(t, o, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            As(t);
          } catch (u) {
            xe(t, l, u);
          }
      }
    } catch (u) {
      xe(t, t.return, u);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (F = a);
      break;
    }
    F = t.return;
  }
}
var M1 = Math.ceil,
  Bl = gn.ReactCurrentDispatcher,
  Xc = gn.ReactCurrentOwner,
  St = gn.ReactCurrentBatchConfig,
  ee = 0,
  De = null,
  Ne = null,
  Ue = 0,
  at = 0,
  Fr = Hn(0),
  Me = 0,
  mo = null,
  ar = 0,
  xa = 0,
  qc = 0,
  Ki = null,
  tt = null,
  Gc = 0,
  ei = 1 / 0,
  en = null,
  Hl = !1,
  Hs = null,
  bn = null,
  Jo = !1,
  Pn = null,
  Vl = 0,
  Xi = 0,
  Vs = null,
  ml = -1,
  gl = 0;
function Ge() {
  return (
    ee & 6 ? Ee()
    : ml !== -1 ? ml
    : (ml = Ee())
  );
}
function Fn(e) {
  return (
    e.mode & 1 ?
      ee & 2 && Ue !== 0 ? Ue & -Ue
      : f1.transition !== null ? (gl === 0 && (gl = Jp()), gl)
      : ((e = ie),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lm(e.type))),
        e)
    : 1
  );
}
function bt(e, t, n, r) {
  if (50 < Xi) throw ((Xi = 0), (Vs = null), Error(P(185)));
  Co(e, n, r),
    (!(ee & 2) || e !== De) &&
      (e === De && (!(ee & 2) && (xa |= n), Me === 4 && Tn(e, Ue)),
      lt(e, r),
      n === 1 && ee === 0 && !(t.mode & 1) && ((ei = Ee() + 500), ga && Vn()));
}
function lt(e, t) {
  var n = e.callbackNode;
  fv(e, t);
  var r = Tl(e, e === De ? Ue : 0);
  if (r === 0)
    n !== null && sd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && sd(n), t === 1))
      e.tag === 0 ? c1(th.bind(null, e)) : km(th.bind(null, e)),
        l1(function () {
          !(ee & 6) && Vn();
        }),
        (n = null);
    else {
      switch (em(r)) {
        case 1:
          n = Cc;
          break;
        case 4:
          n = Gp;
          break;
        case 16:
          n = Nl;
          break;
        case 536870912:
          n = Zp;
          break;
        default:
          n = Nl;
      }
      n = E0(n, y0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function y0(e, t) {
  if (((ml = -1), (gl = 0), ee & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (Wr() && e.callbackNode !== n) return null;
  var r = Tl(e, e === De ? Ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Wl(e, r);
  else {
    t = r;
    var i = ee;
    ee |= 2;
    var o = w0();
    (De !== e || Ue !== t) && ((en = null), (ei = Ee() + 500), tr(e, t));
    do
      try {
        j1();
        break;
      } catch (a) {
        v0(e, a);
      }
    while (1);
    Fc(),
      (Bl.current = o),
      (ee = i),
      Ne !== null ? (t = 0) : ((De = null), (Ue = 0), (t = Me));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ys(e)), i !== 0 && ((r = i), (t = Ws(e, i)))), t === 1)
    )
      throw ((n = mo), tr(e, 0), Tn(e, r), lt(e, Ee()), n);
    if (t === 6) Tn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !P1(i) &&
          ((t = Wl(e, r)),
          t === 2 && ((o = ys(e)), o !== 0 && ((r = o), (t = Ws(e, o)))),
          t === 1))
      )
        throw ((n = mo), tr(e, 0), Tn(e, r), lt(e, Ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Qn(e, tt, en);
          break;
        case 3:
          if (
            (Tn(e, r), (r & 130023424) === r && ((t = Gc + 500 - Ee()), 10 < t))
          ) {
            if (Tl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ge(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ks(Qn.bind(null, e, tt, en), t);
            break;
          }
          Qn(e, tt, en);
          break;
        case 4:
          if ((Tn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - $t(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ee() - r),
            (r =
              (120 > r ? 120
              : 480 > r ? 480
              : 1080 > r ? 1080
              : 1920 > r ? 1920
              : 3e3 > r ? 3e3
              : 4320 > r ? 4320
              : 1960 * M1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ks(Qn.bind(null, e, tt, en), r);
            break;
          }
          Qn(e, tt, en);
          break;
        case 5:
          Qn(e, tt, en);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return lt(e, Ee()), e.callbackNode === n ? y0.bind(null, e) : null;
}
function Ws(e, t) {
  var n = Ki;
  return (
    e.current.memoizedState.isDehydrated && (tr(e, t).flags |= 256),
    (e = Wl(e, t)),
    e !== 2 && ((t = tt), (tt = n), t !== null && Ys(t)),
    e
  );
}
function Ys(e) {
  tt === null ? (tt = e) : tt.push.apply(tt, e);
}
function P1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ot(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Tn(e, t) {
  for (
    t &= ~qc,
      t &= ~xa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function th(e) {
  if (ee & 6) throw Error(P(327));
  Wr();
  var t = Tl(e, 0);
  if (!(t & 1)) return lt(e, Ee()), null;
  var n = Wl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ys(e);
    r !== 0 && ((t = r), (n = Ws(e, r)));
  }
  if (n === 1) throw ((n = mo), tr(e, 0), Tn(e, t), lt(e, Ee()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qn(e, tt, en),
    lt(e, Ee()),
    null
  );
}
function Zc(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = n), ee === 0 && ((ei = Ee() + 500), ga && Vn());
  }
}
function ur(e) {
  Pn !== null && Pn.tag === 0 && !(ee & 6) && Wr();
  var t = ee;
  ee |= 1;
  var n = St.transition,
    r = ie;
  try {
    if (((St.transition = null), (ie = 1), e)) return e();
  } finally {
    (ie = r), (St.transition = n), (ee = t), !(ee & 6) && Vn();
  }
}
function Jc() {
  (at = Fr.current), he(Fr);
}
function tr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), o1(n)), Ne !== null))
    for (n = Ne.return; n !== null; ) {
      var r = n;
      switch ((Lc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Dl();
          break;
        case 3:
          Zr(), he(it), he(We), Bc();
          break;
        case 5:
          zc(r);
          break;
        case 4:
          Zr();
          break;
        case 13:
          he(ge);
          break;
        case 19:
          he(ge);
          break;
        case 10:
          Oc(r.type._context);
          break;
        case 22:
        case 23:
          Jc();
      }
      n = n.return;
    }
  if (
    ((De = e),
    (Ne = e = On(e.current, null)),
    (Ue = at = t),
    (Me = 0),
    (mo = null),
    (qc = xa = ar = 0),
    (tt = Ki = null),
    Gn !== null)
  ) {
    for (t = 0; t < Gn.length; t++)
      if (((n = Gn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Gn = null;
  }
  return e;
}
function v0(e, t) {
  do {
    var n = Ne;
    try {
      if ((Fc(), (dl.current = zl), Al)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Al = !1;
      }
      if (
        ((lr = 0),
        (je = Te = ye = null),
        (Yi = !1),
        (fo = 0),
        (Xc.current = null),
        n === null || n.return === null)
      ) {
        (Me = 1), (mo = t), (Ne = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          a = n,
          u = t;
        if (
          ((t = Ue),
          (a.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var s = u,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ?
              ((c.updateQueue = f.updateQueue),
              (c.memoizedState = f.memoizedState),
              (c.lanes = f.lanes))
            : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Bd(l);
          if (m !== null) {
            (m.flags &= -257),
              Hd(m, l, a, o, t),
              m.mode & 1 && zd(o, s, t),
              (t = m),
              (u = s);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(u), (t.updateQueue = x);
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              zd(o, s, t), ef();
              break e;
            }
            u = Error(P(426));
          }
        } else if (pe && a.mode & 1) {
          var E = Bd(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Hd(E, l, a, o, t),
              $c(Jr(u, a));
            break e;
          }
        }
        (o = u = Jr(u, a)),
          Me !== 4 && (Me = 2),
          Ki === null ? (Ki = [o]) : Ki.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = t0(o, u, t);
              $d(o, h);
              break e;
            case 1:
              a = u;
              var p = o.type,
                w = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (w !== null &&
                    typeof w.componentDidCatch == 'function' &&
                    (bn === null || !bn.has(w))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = n0(o, a, t);
                $d(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      S0(n);
    } catch (k) {
      (t = k), Ne === n && n !== null && (Ne = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function w0() {
  var e = Bl.current;
  return (Bl.current = zl), e === null ? zl : e;
}
function ef() {
  (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
    De === null || (!(ar & 268435455) && !(xa & 268435455)) || Tn(De, Ue);
}
function Wl(e, t) {
  var n = ee;
  ee |= 2;
  var r = w0();
  (De !== e || Ue !== t) && ((en = null), tr(e, t));
  do
    try {
      R1();
      break;
    } catch (i) {
      v0(e, i);
    }
  while (1);
  if ((Fc(), (ee = n), (Bl.current = r), Ne !== null)) throw Error(P(261));
  return (De = null), (Ue = 0), Me;
}
function R1() {
  for (; Ne !== null; ) x0(Ne);
}
function j1() {
  for (; Ne !== null && !nv(); ) x0(Ne);
}
function x0(e) {
  var t = C0(e.alternate, e, at);
  (e.memoizedProps = e.pendingProps),
    t === null ? S0(e) : (Ne = t),
    (Xc.current = null);
}
function S0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = E1(n, t)), n !== null)) {
        (n.flags &= 32767), (Ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Me = 6), (Ne = null);
        return;
      }
    } else if (((n = C1(n, t, at)), n !== null)) {
      Ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  Me === 0 && (Me = 5);
}
function Qn(e, t, n) {
  var r = ie,
    i = St.transition;
  try {
    (St.transition = null), (ie = 1), D1(e, t, n, r);
  } finally {
    (St.transition = i), (ie = r);
  }
  return null;
}
function D1(e, t, n, r) {
  do Wr();
  while (Pn !== null);
  if (ee & 6) throw Error(P(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (dv(e, o),
    e === De && ((Ne = De = null), (Ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Jo ||
      ((Jo = !0),
      E0(Nl, function () {
        return Wr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = St.transition), (St.transition = null);
    var l = ie;
    ie = 1;
    var a = ee;
    (ee |= 4),
      (Xc.current = null),
      N1(e, n),
      m0(n, e),
      Zv(Cs),
      (Ml = !!_s),
      (Cs = _s = null),
      (e.current = n),
      T1(n),
      rv(),
      (ee = a),
      (ie = l),
      (St.transition = o);
  } else e.current = n;
  if (
    (Jo && ((Jo = !1), (Pn = e), (Vl = i)),
    (o = e.pendingLanes),
    o === 0 && (bn = null),
    lv(n.stateNode),
    lt(e, Ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Hl) throw ((Hl = !1), (e = Hs), (Hs = null), e);
  return (
    Vl & 1 && e.tag !== 0 && Wr(),
    (o = e.pendingLanes),
    o & 1 ?
      e === Vs ?
        Xi++
      : ((Xi = 0), (Vs = e))
    : (Xi = 0),
    Vn(),
    null
  );
}
function Wr() {
  if (Pn !== null) {
    var e = em(Vl),
      t = St.transition,
      n = ie;
    try {
      if (((St.transition = null), (ie = 16 > e ? 16 : e), Pn === null))
        var r = !1;
      else {
        if (((e = Pn), (Pn = null), (Vl = 0), ee & 6)) throw Error(P(331));
        var i = ee;
        for (ee |= 4, F = e.current; F !== null; ) {
          var o = F,
            l = o.child;
          if (F.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (F = s; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qi(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (F = d);
                  else
                    for (; F !== null; ) {
                      c = F;
                      var f = c.sibling,
                        m = c.return;
                      if ((d0(c), c === s)) {
                        F = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = m), (F = f);
                        break;
                      }
                      F = m;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var E = x.sibling;
                    (x.sibling = null), (x = E);
                  } while (x !== null);
                }
              }
              F = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (F = l);
          else
            e: for (; F !== null; ) {
              if (((o = F), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qi(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (F = h);
                break e;
              }
              F = o.return;
            }
        }
        var p = e.current;
        for (F = p; F !== null; ) {
          l = F;
          var w = l.child;
          if (l.subtreeFlags & 2064 && w !== null) (w.return = l), (F = w);
          else
            e: for (l = p; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wa(9, a);
                  }
                } catch (k) {
                  xe(a, a.return, k);
                }
              if (a === l) {
                F = null;
                break e;
              }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (F = g);
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((ee = i), Vn(), Ht && typeof Ht.onPostCommitFiberRoot == 'function')
        )
          try {
            Ht.onPostCommitFiberRoot(fa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ie = n), (St.transition = t);
    }
  }
  return !1;
}
function nh(e, t, n) {
  (t = Jr(n, t)),
    (t = t0(e, t, 1)),
    (e = $n(e, t, 1)),
    (t = Ge()),
    e !== null && (Co(e, 1, t), lt(e, t));
}
function xe(e, t, n) {
  if (e.tag === 3) nh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        nh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (bn === null || !bn.has(r)))
        ) {
          (e = Jr(n, e)),
            (e = n0(t, e, 1)),
            (t = $n(t, e, 1)),
            (e = Ge()),
            t !== null && (Co(t, 1, e), lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function L1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ge()),
    (e.pingedLanes |= e.suspendedLanes & n),
    De === e &&
      (Ue & n) === n &&
      (Me === 4 || (Me === 3 && (Ue & 130023424) === Ue && 500 > Ee() - Gc) ?
        tr(e, 0)
      : (qc |= n)),
    lt(e, t);
}
function _0(e, t) {
  t === 0 &&
    (e.mode & 1 ?
      ((t = Ho), (Ho <<= 1), !(Ho & 130023424) && (Ho = 4194304))
    : (t = 1));
  var n = Ge();
  (e = fn(e, t)), e !== null && (Co(e, t, n), lt(e, n));
}
function $1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), _0(e, n);
}
function b1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), _0(e, n);
}
var C0;
C0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || it.current) nt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (nt = !1), _1(e, t, n);
      nt = !!(e.flags & 131072);
    }
  else (nt = !1), pe && t.flags & 1048576 && Nm(t, bl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      pl(e, t), (e = t.pendingProps);
      var i = Xr(t, We.current);
      Vr(t, n), (i = Vc(null, t, r, e, i, n));
      var o = Wc();
      return (
        (t.flags |= 1),
        (
          typeof i == 'object' &&
          i !== null &&
          typeof i.render == 'function' &&
          i.$$typeof === void 0
        ) ?
          ((t.tag = 1),
          (t.memoizedState = null),
          (t.updateQueue = null),
          ot(r) ? ((o = !0), Ll(t)) : (o = !1),
          (t.memoizedState =
            i.state !== null && i.state !== void 0 ? i.state : null),
          Ic(t),
          (i.updater = ya),
          (t.stateNode = i),
          (i._reactInternals = t),
          Ds(t, r, e, n),
          (t = bs(null, t, r, !0, o, n)))
        : ((t.tag = 0), pe && o && Dc(t), qe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (pl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = O1(r)),
          (e = Mt(r, e)),
          i)
        ) {
          case 0:
            t = $s(null, t, r, e, n);
            break e;
          case 1:
            t = Yd(null, t, r, e, n);
            break e;
          case 11:
            t = Vd(null, t, r, e, n);
            break e;
          case 14:
            t = Wd(null, t, r, Mt(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Mt(r, i)),
        $s(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Mt(r, i)),
        Yd(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((l0(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Rm(e, t),
          Ul(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Jr(Error(P(423)), t)), (t = Qd(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Jr(Error(P(424)), t)), (t = Qd(e, t, r, n, i));
            break e;
          } else
            for (
              ut = Ln(t.stateNode.containerInfo.firstChild),
                st = t,
                pe = !0,
                jt = null,
                n = $m(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qr(), r === i)) {
            t = dn(e, t, n);
            break e;
          }
          qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        bm(t),
        e === null && Ps(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Es(r, i) ? (l = null) : o !== null && Es(r, o) && (t.flags |= 32),
        o0(e, t),
        qe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ps(t), null;
    case 13:
      return a0(e, t, n);
    case 4:
      return (
        Ac(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gr(t, null, r, n)) : qe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Mt(r, i)),
        Vd(e, t, r, i, n)
      );
    case 7:
      return qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          fe(Fl, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Ot(o.value, l)) {
            if (o.children === i.children && !it.current) {
              t = dn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                l = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = un(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null ?
                          (u.next = u)
                        : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Rs(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(P(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Rs(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        qe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Vr(t, n),
        (i = _t(i)),
        (r = r(i)),
        (t.flags |= 1),
        qe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Mt(r, t.pendingProps)),
        (i = Mt(r.type, i)),
        Wd(e, t, r, i, n)
      );
    case 15:
      return r0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Mt(r, i)),
        pl(e, t),
        (t.tag = 1),
        ot(r) ? ((e = !0), Ll(t)) : (e = !1),
        Vr(t, n),
        Dm(t, r, i),
        Ds(t, r, i, n),
        bs(null, t, r, !0, e, n)
      );
    case 19:
      return u0(e, t, n);
    case 22:
      return i0(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function E0(e, t) {
  return qp(e, t);
}
function F1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function wt(e, t, n, r) {
  return new F1(e, t, n, r);
}
function tf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function O1(e) {
  if (typeof e == 'function') return tf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === xc)) return 11;
    if (e === Sc) return 14;
  }
  return 2;
}
function On(e, t) {
  var n = e.alternate;
  return (
    n === null ?
      ((n = wt(e.tag, t, e.key, e.mode)),
      (n.elementType = e.elementType),
      (n.type = e.type),
      (n.stateNode = e.stateNode),
      (n.alternate = e),
      (e.alternate = n))
    : ((n.pendingProps = t),
      (n.type = e.type),
      (n.flags = 0),
      (n.subtreeFlags = 0),
      (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function yl(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == 'function')) tf(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case Nr:
        return nr(n.children, i, o, t);
      case wc:
        (l = 8), (i |= 8);
        break;
      case ns:
        return (
          (e = wt(12, n, t, i | 2)), (e.elementType = ns), (e.lanes = o), e
        );
      case rs:
        return (e = wt(13, n, t, i)), (e.elementType = rs), (e.lanes = o), e;
      case is:
        return (e = wt(19, n, t, i)), (e.elementType = is), (e.lanes = o), e;
      case Lp:
        return Sa(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case jp:
              l = 10;
              break e;
            case Dp:
              l = 9;
              break e;
            case xc:
              l = 11;
              break e;
            case Sc:
              l = 14;
              break e;
            case En:
              (l = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = wt(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function nr(e, t, n, r) {
  return (e = wt(7, e, r, t)), (e.lanes = n), e;
}
function Sa(e, t, n, r) {
  return (
    (e = wt(22, e, r, t)),
    (e.elementType = Lp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fu(e, t, n) {
  return (e = wt(6, e, null, t)), (e.lanes = n), e;
}
function Ou(e, t, n) {
  return (
    (t = wt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function U1(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = yu(0)),
    (this.expirationTimes = yu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function nf(e, t, n, r, i, o, l, a, u) {
  return (
    (e = new U1(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = wt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ic(o),
    e
  );
}
function I1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: kr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function k0(e) {
  if (!e) return In;
  e = e._reactInternals;
  e: {
    if (mr(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ot(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ot(n)) return Em(e, n, t);
  }
  return t;
}
function N0(e, t, n, r, i, o, l, a, u) {
  return (
    (e = nf(n, r, !0, e, i, o, l, a, u)),
    (e.context = k0(null)),
    (n = e.current),
    (r = Ge()),
    (i = Fn(n)),
    (o = un(r, i)),
    (o.callback = t ?? null),
    $n(n, o, i),
    (e.current.lanes = i),
    Co(e, i, r),
    lt(e, r),
    e
  );
}
function _a(e, t, n, r) {
  var i = t.current,
    o = Ge(),
    l = Fn(i);
  return (
    (n = k0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = un(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = $n(i, t, l)),
    e !== null && (bt(e, i, l, o), fl(e, i, l)),
    l
  );
}
function Yl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function rf(e, t) {
  rh(e, t), (e = e.alternate) && rh(e, t);
}
function A1() {
  return null;
}
var T0 =
  typeof reportError == 'function' ? reportError : (
    function (e) {
      console.error(e);
    }
  );
function of(e) {
  this._internalRoot = e;
}
Ca.prototype.render = of.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  _a(e, t, null, null);
};
Ca.prototype.unmount = of.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ur(function () {
      _a(null, e, null, null);
    }),
      (t[cn] = null);
  }
};
function Ca(e) {
  this._internalRoot = e;
}
Ca.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = rm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nn.length && t !== 0 && t < Nn[n].priority; n++);
    Nn.splice(n, 0, e), n === 0 && om(e);
  }
};
function lf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ea(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ih() {}
function z1(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var s = Yl(l);
        o.call(s);
      };
    }
    var l = N0(t, r, e, 0, null, !1, !1, '', ih);
    return (
      (e._reactRootContainer = l),
      (e[cn] = l.current),
      lo(e.nodeType === 8 ? e.parentNode : e),
      ur(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var s = Yl(u);
      a.call(s);
    };
  }
  var u = nf(e, 0, !1, null, null, !1, !1, '', ih);
  return (
    (e._reactRootContainer = u),
    (e[cn] = u.current),
    lo(e.nodeType === 8 ? e.parentNode : e),
    ur(function () {
      _a(t, u, n, r);
    }),
    u
  );
}
function ka(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == 'function') {
      var a = i;
      i = function () {
        var u = Yl(l);
        a.call(u);
      };
    }
    _a(t, l, e, i);
  } else l = z1(n, t, e, i, r);
  return Yl(l);
}
tm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = bi(t.pendingLanes);
        n !== 0 &&
          (Ec(t, n | 1), lt(t, Ee()), !(ee & 6) && ((ei = Ee() + 500), Vn()));
      }
      break;
    case 13:
      ur(function () {
        var r = fn(e, 1);
        if (r !== null) {
          var i = Ge();
          bt(r, e, 1, i);
        }
      }),
        rf(e, 1);
  }
};
kc = function (e) {
  if (e.tag === 13) {
    var t = fn(e, 134217728);
    if (t !== null) {
      var n = Ge();
      bt(t, e, 134217728, n);
    }
    rf(e, 134217728);
  }
};
nm = function (e) {
  if (e.tag === 13) {
    var t = Fn(e),
      n = fn(e, t);
    if (n !== null) {
      var r = Ge();
      bt(n, e, t, r);
    }
    rf(e, t);
  }
};
rm = function () {
  return ie;
};
im = function (e, t) {
  var n = ie;
  try {
    return (ie = e), t();
  } finally {
    ie = n;
  }
};
ps = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((as(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ma(r);
            if (!i) throw Error(P(90));
            bp(r), as(r, i);
          }
        }
      }
      break;
    case 'textarea':
      Op(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Ar(e, !!n.multiple, t, !1);
  }
};
Vp = Zc;
Wp = ur;
var B1 = { usingClientEntryPoint: !1, Events: [ko, Rr, ma, Bp, Hp, Zc] },
  Ci = {
    findFiberByHostInstance: qn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  H1 = {
    bundleType: Ci.bundleType,
    version: Ci.version,
    rendererPackageName: Ci.rendererPackageName,
    rendererConfig: Ci.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Kp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ci.findFiberByHostInstance || A1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var el = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!el.isDisabled && el.supportsFiber)
    try {
      (fa = el.inject(H1)), (Ht = el);
    } catch {}
}
dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B1;
dt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lf(t)) throw Error(P(200));
  return I1(e, t, null, n);
};
dt.createRoot = function (e, t) {
  if (!lf(e)) throw Error(P(299));
  var n = !1,
    r = '',
    i = T0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = nf(e, 1, !1, null, null, n, !1, r, i)),
    (e[cn] = t.current),
    lo(e.nodeType === 8 ? e.parentNode : e),
    new of(t)
  );
};
dt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ?
        Error(P(188))
      : ((e = Object.keys(e).join(',')), Error(P(268, e)));
  return (e = Kp(t)), (e = e === null ? null : e.stateNode), e;
};
dt.flushSync = function (e) {
  return ur(e);
};
dt.hydrate = function (e, t, n) {
  if (!Ea(t)) throw Error(P(200));
  return ka(null, e, t, !0, n);
};
dt.hydrateRoot = function (e, t, n) {
  if (!lf(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    l = T0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = N0(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[cn] = t.current),
    lo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null ?
          (t.mutableSourceEagerHydrationData = [n, i])
        : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ca(t);
};
dt.render = function (e, t, n) {
  if (!Ea(t)) throw Error(P(200));
  return ka(null, e, t, !1, n);
};
dt.unmountComponentAtNode = function (e) {
  if (!Ea(e)) throw Error(P(40));
  return e._reactRootContainer ?
      (ur(function () {
        ka(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[cn] = null);
        });
      }),
      !0)
    : !1;
};
dt.unstable_batchedUpdates = Zc;
dt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ea(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return ka(e, t, n, !1, r);
};
dt.version = '18.2.0-next-9e3b772b8-20220608';
function M0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M0);
    } catch (e) {
      console.error(e);
    }
}
M0(), (Np.exports = dt);
var Na = Np.exports;
const P0 = mp(Na),
  V1 = pp({ __proto__: null, default: P0 }, [Na]);
var oh = Na;
(es.createRoot = oh.createRoot), (es.hydrateRoot = oh.hydrateRoot);
var R0 = { exports: {} },
  j0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ti = S;
function W1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Y1 = typeof Object.is == 'function' ? Object.is : W1,
  Q1 = ti.useState,
  K1 = ti.useEffect,
  X1 = ti.useLayoutEffect,
  q1 = ti.useDebugValue;
function G1(e, t) {
  var n = t(),
    r = Q1({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    X1(
      function () {
        (i.value = n), (i.getSnapshot = t), Uu(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    K1(
      function () {
        return (
          Uu(i) && o({ inst: i }),
          e(function () {
            Uu(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    q1(n),
    n
  );
}
function Uu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Y1(e, n);
  } catch {
    return !0;
  }
}
function Z1(e, t) {
  return t();
}
var J1 =
  (
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ) ?
    Z1
  : G1;
j0.useSyncExternalStore =
  ti.useSyncExternalStore !== void 0 ? ti.useSyncExternalStore : J1;
R0.exports = j0;
var ew = R0.exports,
  D0 = { exports: {} },
  L0 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta = S,
  tw = ew;
function nw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rw = typeof Object.is == 'function' ? Object.is : nw,
  iw = tw.useSyncExternalStore,
  ow = Ta.useRef,
  lw = Ta.useEffect,
  aw = Ta.useMemo,
  uw = Ta.useDebugValue;
L0.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = ow(null);
  if (o.current === null) {
    var l = { hasValue: !1, value: null };
    o.current = l;
  } else l = o.current;
  o = aw(
    function () {
      function u(m) {
        if (!s) {
          if (((s = !0), (c = m), (m = r(m)), i !== void 0 && l.hasValue)) {
            var v = l.value;
            if (i(v, m)) return (d = v);
          }
          return (d = m);
        }
        if (((v = d), rw(c, m))) return v;
        var x = r(m);
        return i !== void 0 && i(v, x) ? v : ((c = m), (d = x));
      }
      var s = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return u(t());
        },
        f === null ? void 0 : (
          function () {
            return u(f());
          }
        ),
      ];
    },
    [t, n, r, i]
  );
  var a = iw(e, o[0], o[1]);
  return (
    lw(
      function () {
        (l.hasValue = !0), (l.value = a);
      },
      [a]
    ),
    uw(a),
    a
  );
};
D0.exports = L0;
var sw = D0.exports;
function cw(e) {
  e();
}
let $0 = cw;
const fw = e => ($0 = e),
  dw = () => $0,
  lh = Symbol.for('react-redux-context'),
  ah = typeof globalThis < 'u' ? globalThis : {};
function hw() {
  var e;
  if (!S.createContext) return {};
  const t = (e = ah[lh]) != null ? e : (ah[lh] = new Map());
  let n = t.get(S.createContext);
  return n || ((n = S.createContext(null)), t.set(S.createContext, n)), n;
}
const An = hw();
function af(e = An) {
  return function () {
    return S.useContext(e);
  };
}
const b0 = af(),
  pw = () => {
    throw new Error('uSES not initialized!');
  };
let F0 = pw;
const mw = e => {
    F0 = e;
  },
  gw = (e, t) => e === t;
function yw(e = An) {
  const t = e === An ? b0 : af(e);
  return function (r, i = {}) {
    const {
        equalityFn: o = gw,
        stabilityCheck: l = void 0,
        noopCheck: a = void 0,
      } = typeof i == 'function' ? { equalityFn: i } : i,
      {
        store: u,
        subscription: s,
        getServerState: c,
        stabilityCheck: d,
        noopCheck: f,
      } = t();
    S.useRef(!0);
    const m = S.useCallback(
        {
          [r.name](x) {
            return r(x);
          },
        }[r.name],
        [r, d, l]
      ),
      v = F0(s.addNestedSub, u.getState, c || u.getState, m, o);
    return S.useDebugValue(v), v;
  };
}
const gr = yw();
var O0 = { exports: {} },
  oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Le = typeof Symbol == 'function' && Symbol.for,
  uf = Le ? Symbol.for('react.element') : 60103,
  sf = Le ? Symbol.for('react.portal') : 60106,
  Ma = Le ? Symbol.for('react.fragment') : 60107,
  Pa = Le ? Symbol.for('react.strict_mode') : 60108,
  Ra = Le ? Symbol.for('react.profiler') : 60114,
  ja = Le ? Symbol.for('react.provider') : 60109,
  Da = Le ? Symbol.for('react.context') : 60110,
  cf = Le ? Symbol.for('react.async_mode') : 60111,
  La = Le ? Symbol.for('react.concurrent_mode') : 60111,
  $a = Le ? Symbol.for('react.forward_ref') : 60112,
  ba = Le ? Symbol.for('react.suspense') : 60113,
  vw = Le ? Symbol.for('react.suspense_list') : 60120,
  Fa = Le ? Symbol.for('react.memo') : 60115,
  Oa = Le ? Symbol.for('react.lazy') : 60116,
  ww = Le ? Symbol.for('react.block') : 60121,
  xw = Le ? Symbol.for('react.fundamental') : 60117,
  Sw = Le ? Symbol.for('react.responder') : 60118,
  _w = Le ? Symbol.for('react.scope') : 60119;
function pt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case uf:
        switch (((e = e.type), e)) {
          case cf:
          case La:
          case Ma:
          case Ra:
          case Pa:
          case ba:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Da:
              case $a:
              case Oa:
              case Fa:
              case ja:
                return e;
              default:
                return t;
            }
        }
      case sf:
        return t;
    }
  }
}
function U0(e) {
  return pt(e) === La;
}
oe.AsyncMode = cf;
oe.ConcurrentMode = La;
oe.ContextConsumer = Da;
oe.ContextProvider = ja;
oe.Element = uf;
oe.ForwardRef = $a;
oe.Fragment = Ma;
oe.Lazy = Oa;
oe.Memo = Fa;
oe.Portal = sf;
oe.Profiler = Ra;
oe.StrictMode = Pa;
oe.Suspense = ba;
oe.isAsyncMode = function (e) {
  return U0(e) || pt(e) === cf;
};
oe.isConcurrentMode = U0;
oe.isContextConsumer = function (e) {
  return pt(e) === Da;
};
oe.isContextProvider = function (e) {
  return pt(e) === ja;
};
oe.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === uf;
};
oe.isForwardRef = function (e) {
  return pt(e) === $a;
};
oe.isFragment = function (e) {
  return pt(e) === Ma;
};
oe.isLazy = function (e) {
  return pt(e) === Oa;
};
oe.isMemo = function (e) {
  return pt(e) === Fa;
};
oe.isPortal = function (e) {
  return pt(e) === sf;
};
oe.isProfiler = function (e) {
  return pt(e) === Ra;
};
oe.isStrictMode = function (e) {
  return pt(e) === Pa;
};
oe.isSuspense = function (e) {
  return pt(e) === ba;
};
oe.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ma ||
    e === La ||
    e === Ra ||
    e === Pa ||
    e === ba ||
    e === vw ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Oa ||
        e.$$typeof === Fa ||
        e.$$typeof === ja ||
        e.$$typeof === Da ||
        e.$$typeof === $a ||
        e.$$typeof === xw ||
        e.$$typeof === Sw ||
        e.$$typeof === _w ||
        e.$$typeof === ww))
  );
};
oe.typeOf = pt;
O0.exports = oe;
var Cw = O0.exports,
  I0 = Cw,
  Ew = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  kw = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  A0 = {};
A0[I0.ForwardRef] = Ew;
A0[I0.Memo] = kw;
var ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ff = Symbol.for('react.element'),
  df = Symbol.for('react.portal'),
  Ua = Symbol.for('react.fragment'),
  Ia = Symbol.for('react.strict_mode'),
  Aa = Symbol.for('react.profiler'),
  za = Symbol.for('react.provider'),
  Ba = Symbol.for('react.context'),
  Nw = Symbol.for('react.server_context'),
  Ha = Symbol.for('react.forward_ref'),
  Va = Symbol.for('react.suspense'),
  Wa = Symbol.for('react.suspense_list'),
  Ya = Symbol.for('react.memo'),
  Qa = Symbol.for('react.lazy'),
  Tw = Symbol.for('react.offscreen'),
  z0;
z0 = Symbol.for('react.module.reference');
function Et(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ff:
        switch (((e = e.type), e)) {
          case Ua:
          case Aa:
          case Ia:
          case Va:
          case Wa:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Nw:
              case Ba:
              case Ha:
              case Qa:
              case Ya:
              case za:
                return e;
              default:
                return t;
            }
        }
      case df:
        return t;
    }
  }
}
ae.ContextConsumer = Ba;
ae.ContextProvider = za;
ae.Element = ff;
ae.ForwardRef = Ha;
ae.Fragment = Ua;
ae.Lazy = Qa;
ae.Memo = Ya;
ae.Portal = df;
ae.Profiler = Aa;
ae.StrictMode = Ia;
ae.Suspense = Va;
ae.SuspenseList = Wa;
ae.isAsyncMode = function () {
  return !1;
};
ae.isConcurrentMode = function () {
  return !1;
};
ae.isContextConsumer = function (e) {
  return Et(e) === Ba;
};
ae.isContextProvider = function (e) {
  return Et(e) === za;
};
ae.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ff;
};
ae.isForwardRef = function (e) {
  return Et(e) === Ha;
};
ae.isFragment = function (e) {
  return Et(e) === Ua;
};
ae.isLazy = function (e) {
  return Et(e) === Qa;
};
ae.isMemo = function (e) {
  return Et(e) === Ya;
};
ae.isPortal = function (e) {
  return Et(e) === df;
};
ae.isProfiler = function (e) {
  return Et(e) === Aa;
};
ae.isStrictMode = function (e) {
  return Et(e) === Ia;
};
ae.isSuspense = function (e) {
  return Et(e) === Va;
};
ae.isSuspenseList = function (e) {
  return Et(e) === Wa;
};
ae.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Ua ||
    e === Aa ||
    e === Ia ||
    e === Va ||
    e === Wa ||
    e === Tw ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Qa ||
        e.$$typeof === Ya ||
        e.$$typeof === za ||
        e.$$typeof === Ba ||
        e.$$typeof === Ha ||
        e.$$typeof === z0 ||
        e.getModuleId !== void 0))
  );
};
ae.typeOf = Et;
function Mw() {
  const e = dw();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const uh = { notify() {}, get: () => [] };
function Pw(e, t) {
  let n,
    r = uh,
    i = 0,
    o = !1;
  function l(x) {
    c();
    const E = r.subscribe(x);
    let h = !1;
    return () => {
      h || ((h = !0), E(), d());
    };
  }
  function a() {
    r.notify();
  }
  function u() {
    v.onStateChange && v.onStateChange();
  }
  function s() {
    return o;
  }
  function c() {
    i++, n || ((n = t ? t.addNestedSub(u) : e.subscribe(u)), (r = Mw()));
  }
  function d() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = uh));
  }
  function f() {
    o || ((o = !0), c());
  }
  function m() {
    o && ((o = !1), d());
  }
  const v = {
    addNestedSub: l,
    notifyNestedSubs: a,
    handleChangeWrapper: u,
    isSubscribed: s,
    trySubscribe: f,
    tryUnsubscribe: m,
    getListeners: () => r,
  };
  return v;
}
const Rw =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  jw = Rw ? S.useLayoutEffect : S.useEffect;
function Dw({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = 'once',
  noopCheck: o = 'once',
}) {
  const l = S.useMemo(() => {
      const s = Pw(e);
      return {
        store: e,
        subscription: s,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        noopCheck: o,
      };
    }, [e, r, i, o]),
    a = S.useMemo(() => e.getState(), [e]);
  jw(() => {
    const { subscription: s } = l;
    return (
      (s.onStateChange = s.notifyNestedSubs),
      s.trySubscribe(),
      a !== e.getState() && s.notifyNestedSubs(),
      () => {
        s.tryUnsubscribe(), (s.onStateChange = void 0);
      }
    );
  }, [l, a]);
  const u = t || An;
  return S.createElement(u.Provider, { value: l }, n);
}
function B0(e = An) {
  const t = e === An ? b0 : af(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Lw = B0();
function $w(e = An) {
  const t = e === An ? Lw : B0(e);
  return function () {
    return t().dispatch;
  };
}
const Ka = $w();
mw(sw.useSyncExternalStoreWithSelector);
fw(Na.unstable_batchedUpdates);
/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Se() {
  return (
    (Se =
      Object.assign ?
        Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Se.apply(this, arguments)
  );
}
var _e;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(_e || (_e = {}));
const sh = 'popstate';
function bw(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: a } = r.location;
    return go(
      '',
      { pathname: o, search: l, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : zn(i);
  }
  return Ow(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function sr(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Fw() {
  return Math.random().toString(36).substr(2, 8);
}
function ch(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function go(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Se(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? yn(t) : t,
      { state: n, key: (t && t.key) || r || Fw() }
    )
  );
}
function zn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function yn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Ow(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    a = _e.Pop,
    u = null,
    s = c();
  s == null && ((s = 0), l.replaceState(Se({}, l.state, { idx: s }), ''));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function d() {
    a = _e.Pop;
    let E = c(),
      h = E == null ? null : E - s;
    (s = E), u && u({ action: a, location: x.location, delta: h });
  }
  function f(E, h) {
    a = _e.Push;
    let p = go(x.location, E, h);
    n && n(p, E), (s = c() + 1);
    let w = ch(p, s),
      g = x.createHref(p);
    try {
      l.pushState(w, '', g);
    } catch (k) {
      if (k instanceof DOMException && k.name === 'DataCloneError') throw k;
      i.location.assign(g);
    }
    o && u && u({ action: a, location: x.location, delta: 1 });
  }
  function m(E, h) {
    a = _e.Replace;
    let p = go(x.location, E, h);
    n && n(p, E), (s = c());
    let w = ch(p, s),
      g = x.createHref(p);
    l.replaceState(w, '', g),
      o && u && u({ action: a, location: x.location, delta: 0 });
  }
  function v(E) {
    let h = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      p = typeof E == 'string' ? E : zn(E);
    return (
      W(
        h,
        'No window.location.(origin|href) available to create URL for href: ' +
          p
      ),
      new URL(p, h)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, l);
    },
    listen(E) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(sh, d),
        (u = E),
        () => {
          i.removeEventListener(sh, d), (u = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: v,
    encodeLocation(E) {
      let h = v(E);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: f,
    replace: m,
    go(E) {
      return l.go(E);
    },
  };
  return x;
}
var Ce;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Ce || (Ce = {}));
const Uw = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function Iw(e) {
  return e.index === !0;
}
function Qs(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let l = [...n, o],
        a = typeof i.id == 'string' ? i.id : l.join('-');
      if (
        (W(
          i.index !== !0 || !i.children,
          'Cannot specify children on an index route'
        ),
        W(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Iw(i))
      ) {
        let u = Se({}, i, t(i), { id: a });
        return (r[a] = u), u;
      } else {
        let u = Se({}, i, t(i), { id: a, children: void 0 });
        return (
          (r[a] = u), i.children && (u.children = Qs(i.children, t, l, r)), u
        );
      }
    })
  );
}
function Or(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? yn(t) : t,
    i = Qt(r.pathname || '/', n);
  if (i == null) return null;
  let o = H0(e);
  zw(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a) l = qw(o[a], Zw(i));
  return l;
}
function Aw(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function H0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let i = (o, l, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || '' : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    u.relativePath.startsWith('/') &&
      (W(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Wt([r, u.relativePath]),
      c = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (W(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + s + '".')
      ),
      H0(o.children, t, c, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: Kw(s, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, l) => {
      var a;
      if (o.path === '' || !((a = o.path) != null && a.includes('?'))) i(o, l);
      else for (let u of V0(o.path)) i(o, l, u);
    }),
    t
  );
}
function V0(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return i ? [o, ''] : [o];
  let l = V0(r.join('/')),
    a = [];
  return (
    a.push(...l.map(u => (u === '' ? o : [o, u].join('/')))),
    i && a.push(...l),
    a.map(u => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function zw(e) {
  e.sort((t, n) =>
    t.score !== n.score ?
      n.score - t.score
    : Xw(
        t.routesMeta.map(r => r.childrenIndex),
        n.routesMeta.map(r => r.childrenIndex)
      )
  );
}
const Bw = /^:\w+$/,
  Hw = 3,
  Vw = 2,
  Ww = 1,
  Yw = 10,
  Qw = -2,
  fh = e => e === '*';
function Kw(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(fh) && (r += Qw),
    t && (r += Vw),
    n
      .filter(i => !fh(i))
      .reduce(
        (i, o) =>
          i +
          (Bw.test(o) ? Hw
          : o === '' ? Ww
          : Yw),
        r
      )
  );
}
function Xw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ?
      e[e.length - 1] - t[t.length - 1]
    : 0;
}
function qw(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    o = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      u = l === n.length - 1,
      s = i === '/' ? t : t.slice(i.length) || '/',
      c = Ks(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = a.route;
    o.push({
      params: r,
      pathname: Wt([i, c.pathname]),
      pathnameBase: nx(Wt([i, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== '/' && (i = Wt([i, c.pathnameBase]));
  }
  return o;
}
function Ks(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Gw(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, '$1'),
    a = i.slice(1);
  return {
    params: r.reduce((s, c, d) => {
      let { paramName: f, isOptional: m } = c;
      if (f === '*') {
        let x = a[d] || '';
        l = o.slice(0, o.length - x.length).replace(/(.)\/+$/, '$1');
      }
      const v = a[d];
      return m && !v ? (s[f] = void 0) : (s[f] = Jw(v || '', f)), s;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function Gw(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    sr(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:(\w+)(\?)?/g,
          (l, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*') ?
      (r.push({ paramName: '*' }),
      (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
    : n ? (i += '\\/*$')
    : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  );
}
function Zw(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      sr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Jw(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      sr(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function Qt(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function ex(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: i = '',
  } = typeof e == 'string' ? yn(e) : e;
  return {
    pathname:
      n ?
        n.startsWith('/') ?
          n
        : tx(n, t)
      : t,
    search: rx(r),
    hash: ix(i),
  };
}
function tx(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach(i => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Iu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function W0(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function hf(e) {
  return W0(e).map((t, n) =>
    n === e.length - 1 ? t.pathname : t.pathnameBase
  );
}
function pf(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == 'string' ?
    (i = yn(e))
  : ((i = Se({}, e)),
    W(
      !i.pathname || !i.pathname.includes('?'),
      Iu('?', 'pathname', 'search', i)
    ),
    W(!i.pathname || !i.pathname.includes('#'), Iu('#', 'pathname', 'hash', i)),
    W(!i.search || !i.search.includes('#'), Iu('#', 'search', 'hash', i)));
  let o = e === '' || i.pathname === '',
    l = o ? '/' : i.pathname,
    a;
  if (l == null) a = n;
  else if (r) {
    let d = t[t.length - 1].replace(/^\//, '').split('/');
    if (l.startsWith('..')) {
      let f = l.split('/');
      for (; f[0] === '..'; ) f.shift(), d.pop();
      i.pathname = f.join('/');
    }
    a = '/' + d.join('/');
  } else {
    let d = t.length - 1;
    if (l.startsWith('..')) {
      let f = l.split('/');
      for (; f[0] === '..'; ) f.shift(), (d -= 1);
      i.pathname = f.join('/');
    }
    a = d >= 0 ? t[d] : '/';
  }
  let u = ex(i, a),
    s = l && l !== '/' && l.endsWith('/'),
    c = (o || l === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (s || c) && (u.pathname += '/'), u;
}
const Wt = e => e.join('/').replace(/\/\/+/g, '/'),
  nx = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  rx = e =>
    !e || e === '?' ? ''
    : e.startsWith('?') ? e
    : '?' + e,
  ix = e =>
    !e || e === '#' ? ''
    : e.startsWith('#') ? e
    : '#' + e;
class mf {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = i),
      r instanceof Error ?
        ((this.data = r.toString()), (this.error = r))
      : (this.data = r);
  }
}
function Y0(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Q0 = ['post', 'put', 'patch', 'delete'],
  ox = new Set(Q0),
  lx = ['get', ...Q0],
  ax = new Set(lx),
  ux = new Set([301, 302, 303, 307, 308]),
  sx = new Set([307, 308]),
  Au = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  K0 = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ei = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  X0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  cx = e => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  q0 = 'remix-router-transitions';
function fx(e) {
  const t =
      e.window ? e.window
      : typeof window < 'u' ? window
      : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  W(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let C = e.detectErrorBoundary;
    i = N => ({ hasErrorBoundary: C(N) });
  } else i = cx;
  let o = {},
    l = Qs(e.routes, i, void 0, o),
    a,
    u = e.basename || '/',
    s = Se(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1,
      },
      e.future
    ),
    c = null,
    d = new Set(),
    f = null,
    m = null,
    v = null,
    x = e.hydrationData != null,
    E = Or(l, e.history.location, u),
    h = null;
  if (E == null) {
    let C = gt(404, { pathname: e.history.location.pathname }),
      { matches: N, route: M } = wh(l);
    (E = N), (h = { [M.id]: C });
  }
  let p =
      !E.some(C => C.route.lazy) &&
      (!E.some(C => C.route.loader) || e.hydrationData != null),
    w,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: E,
      initialized: p,
      navigation: Au,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || h,
      fetchers: new Map(),
      blockers: new Map(),
    },
    k = _e.Pop,
    _ = !1,
    T,
    j = !1,
    I = new Map(),
    U = null,
    b = !1,
    q = !1,
    Q = [],
    Re = [],
    ue = new Map(),
    Ye = 0,
    Ae = -1,
    D = new Map(),
    O = new Set(),
    H = new Map(),
    re = new Map(),
    ne = new Set(),
    et = new Map(),
    be = new Map(),
    Gt = !1;
  function kt() {
    if (
      ((c = e.history.listen(C => {
        let { action: N, location: M, delta: $ } = C;
        if (Gt) {
          Gt = !1;
          return;
        }
        sr(
          be.size === 0 || $ != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let A = Qf({
          currentLocation: g.location,
          nextLocation: M,
          historyAction: N,
        });
        if (A && $ != null) {
          (Gt = !0),
            e.history.go($ * -1),
            Fo(A, {
              state: 'blocked',
              location: M,
              proceed() {
                Fo(A, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: M,
                }),
                  e.history.go($);
              },
              reset() {
                let K = new Map(g.blockers);
                K.set(A, Ei), L({ blockers: K });
              },
            });
          return;
        }
        return we(N, M);
      })),
      n)
    ) {
      _x(t, I);
      let C = () => Cx(t, I);
      t.addEventListener('pagehide', C),
        (U = () => t.removeEventListener('pagehide', C));
    }
    return g.initialized || we(_e.Pop, g.location), w;
  }
  function wn() {
    c && c(),
      U && U(),
      d.clear(),
      T && T.abort(),
      g.fetchers.forEach((C, N) => bo(N)),
      g.blockers.forEach((C, N) => Yf(N));
  }
  function ou(C) {
    return d.add(C), () => d.delete(C);
  }
  function L(C, N) {
    N === void 0 && (N = {}), (g = Se({}, g, C));
    let M = [],
      $ = [];
    s.v7_fetcherPersist &&
      g.fetchers.forEach((A, K) => {
        A.state === 'idle' && (ne.has(K) ? $.push(K) : M.push(K));
      }),
      [...d].forEach(A =>
        A(g, {
          deletedFetchers: $,
          unstable_viewTransitionOpts: N.viewTransitionOpts,
          unstable_flushSync: N.flushSync === !0,
        })
      ),
      s.v7_fetcherPersist &&
        (M.forEach(A => g.fetchers.delete(A)), $.forEach(A => bo(A)));
  }
  function Y(C, N, M) {
    var $, A;
    let { flushSync: K } = M === void 0 ? {} : M,
      V =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        Rt(g.navigation.formMethod) &&
        g.navigation.state === 'loading' &&
        (($ = C.state) == null ? void 0 : $._isRedirect) !== !0,
      B;
    N.actionData ?
      Object.keys(N.actionData).length > 0 ?
        (B = N.actionData)
      : (B = null)
    : V ? (B = g.actionData)
    : (B = null);
    let z =
        N.loaderData ?
          vh(g.loaderData, N.loaderData, N.matches || [], N.errors)
        : g.loaderData,
      J = g.blockers;
    J.size > 0 && ((J = new Map(J)), J.forEach((se, me) => J.set(me, Ei)));
    let Fe =
      _ === !0 ||
      (g.navigation.formMethod != null &&
        Rt(g.navigation.formMethod) &&
        ((A = C.state) == null ? void 0 : A._isRedirect) !== !0);
    a && ((l = a), (a = void 0)),
      b ||
        k === _e.Pop ||
        (k === _e.Push ?
          e.history.push(C, C.state)
        : k === _e.Replace && e.history.replace(C, C.state));
    let X;
    if (k === _e.Pop) {
      let se = I.get(g.location.pathname);
      se && se.has(C.pathname) ?
        (X = { currentLocation: g.location, nextLocation: C })
      : I.has(C.pathname) &&
        (X = { currentLocation: C, nextLocation: g.location });
    } else if (j) {
      let se = I.get(g.location.pathname);
      se ?
        se.add(C.pathname)
      : ((se = new Set([C.pathname])), I.set(g.location.pathname, se)),
        (X = { currentLocation: g.location, nextLocation: C });
    }
    L(
      Se({}, N, {
        actionData: B,
        loaderData: z,
        historyAction: k,
        location: C,
        initialized: !0,
        navigation: Au,
        revalidation: 'idle',
        restoreScrollPosition: Xf(C, N.matches || g.matches),
        preventScrollReset: Fe,
        blockers: J,
      }),
      { viewTransitionOpts: X, flushSync: K === !0 }
    ),
      (k = _e.Pop),
      (_ = !1),
      (j = !1),
      (b = !1),
      (q = !1),
      (Q = []),
      (Re = []);
  }
  async function Z(C, N) {
    if (typeof C == 'number') {
      e.history.go(C);
      return;
    }
    let M = Xs(
        g.location,
        g.matches,
        u,
        s.v7_prependBasename,
        C,
        N == null ? void 0 : N.fromRouteId,
        N == null ? void 0 : N.relative
      ),
      {
        path: $,
        submission: A,
        error: K,
      } = dh(s.v7_normalizeFormMethod, !1, M, N),
      V = g.location,
      B = go(g.location, $, N && N.state);
    B = Se({}, B, e.history.encodeLocation(B));
    let z = N && N.replace != null ? N.replace : void 0,
      J = _e.Push;
    z === !0 ?
      (J = _e.Replace)
    : z === !1 ||
      (A != null &&
        Rt(A.formMethod) &&
        A.formAction === g.location.pathname + g.location.search &&
        (J = _e.Replace));
    let Fe =
        N && 'preventScrollReset' in N ? N.preventScrollReset === !0 : void 0,
      X = (N && N.unstable_flushSync) === !0,
      se = Qf({ currentLocation: V, nextLocation: B, historyAction: J });
    if (se) {
      Fo(se, {
        state: 'blocked',
        location: B,
        proceed() {
          Fo(se, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: B,
          }),
            Z(C, N);
        },
        reset() {
          let me = new Map(g.blockers);
          me.set(se, Ei), L({ blockers: me });
        },
      });
      return;
    }
    return await we(J, B, {
      submission: A,
      pendingError: K,
      preventScrollReset: Fe,
      replace: N && N.replace,
      enableViewTransition: N && N.unstable_viewTransition,
      flushSync: X,
    });
  }
  function R() {
    if (
      (lu(),
      L({ revalidation: 'loading' }),
      g.navigation.state !== 'submitting')
    ) {
      if (g.navigation.state === 'idle') {
        we(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      we(k || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
      });
    }
  }
  async function we(C, N, M) {
    T && T.abort(),
      (T = null),
      (k = C),
      (b = (M && M.startUninterruptedRevalidation) === !0),
      gy(g.location, g.matches),
      (_ = (M && M.preventScrollReset) === !0),
      (j = (M && M.enableViewTransition) === !0);
    let $ = a || l,
      A = M && M.overrideNavigation,
      K = Or($, N, u),
      V = (M && M.flushSync) === !0;
    if (!K) {
      let me = gt(404, { pathname: N.pathname }),
        { matches: Xe, route: It } = wh($);
      au(),
        Y(
          N,
          { matches: Xe, loaderData: {}, errors: { [It.id]: me } },
          { flushSync: V }
        );
      return;
    }
    if (
      g.initialized &&
      !q &&
      gx(g.location, N) &&
      !(M && M.submission && Rt(M.submission.formMethod))
    ) {
      Y(N, { matches: K }, { flushSync: V });
      return;
    }
    T = new AbortController();
    let B = Ni(e.history, N, T.signal, M && M.submission),
      z,
      J;
    if (M && M.pendingError) J = { [qi(K).route.id]: M.pendingError };
    else if (M && M.submission && Rt(M.submission.formMethod)) {
      let me = await le(B, N, M.submission, K, {
        replace: M.replace,
        flushSync: V,
      });
      if (me.shortCircuited) return;
      (z = me.pendingActionData),
        (J = me.pendingActionError),
        (A = zu(N, M.submission)),
        (V = !1),
        (B = new Request(B.url, { signal: B.signal }));
    }
    let {
      shortCircuited: Fe,
      loaderData: X,
      errors: se,
    } = await Qe(
      B,
      N,
      K,
      A,
      M && M.submission,
      M && M.fetcherSubmission,
      M && M.replace,
      V,
      z,
      J
    );
    Fe ||
      ((T = null),
      Y(
        N,
        Se({ matches: K }, z ? { actionData: z } : {}, {
          loaderData: X,
          errors: se,
        })
      ));
  }
  async function le(C, N, M, $, A) {
    A === void 0 && (A = {}), lu();
    let K = xx(N, M);
    L({ navigation: K }, { flushSync: A.flushSync === !0 });
    let V,
      B = Gs($, N);
    if (!B.route.action && !B.route.lazy)
      V = {
        type: Ce.error,
        error: gt(405, {
          method: C.method,
          pathname: N.pathname,
          routeId: B.route.id,
        }),
      };
    else if (((V = await ki('action', C, B, $, o, i, u)), C.signal.aborted))
      return { shortCircuited: !0 };
    if (Yr(V)) {
      let z;
      return (
        A && A.replace != null ?
          (z = A.replace)
        : (z = V.location === g.location.pathname + g.location.search),
        await hi(g, V, { submission: M, replace: z }),
        { shortCircuited: !0 }
      );
    }
    if (Gi(V)) {
      let z = qi($, B.route.id);
      return (
        (A && A.replace) !== !0 && (k = _e.Push),
        { pendingActionData: {}, pendingActionError: { [z.route.id]: V.error } }
      );
    }
    if (Jn(V)) throw gt(400, { type: 'defer-action' });
    return { pendingActionData: { [B.route.id]: V.data } };
  }
  async function Qe(C, N, M, $, A, K, V, B, z, J) {
    let Fe = $ || zu(N, A),
      X = A || K || _h(Fe),
      se = a || l,
      [me, Xe] = hh(e.history, g, M, X, N, q, Q, Re, ne, H, O, se, u, z, J);
    if (
      (au(
        ce =>
          !(M && M.some(mt => mt.route.id === ce)) ||
          (me && me.some(mt => mt.route.id === ce))
      ),
      (Ae = ++Ye),
      me.length === 0 && Xe.length === 0)
    ) {
      let ce = Vf();
      return (
        Y(
          N,
          Se(
            { matches: M, loaderData: {}, errors: J || null },
            z ? { actionData: z } : {},
            ce ? { fetchers: new Map(g.fetchers) } : {}
          ),
          { flushSync: B }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!b) {
      Xe.forEach(mt => {
        let ke = g.fetchers.get(mt.key),
          Wn = Ti(void 0, ke ? ke.data : void 0);
        g.fetchers.set(mt.key, Wn);
      });
      let ce = z || g.actionData;
      L(
        Se(
          { navigation: Fe },
          ce ?
            Object.keys(ce).length === 0 ?
              { actionData: null }
            : { actionData: ce }
          : {},
          Xe.length > 0 ? { fetchers: new Map(g.fetchers) } : {}
        ),
        { flushSync: B }
      );
    }
    Xe.forEach(ce => {
      ue.has(ce.key) && Sn(ce.key),
        ce.controller && ue.set(ce.key, ce.controller);
    });
    let It = () => Xe.forEach(ce => Sn(ce.key));
    T && T.signal.addEventListener('abort', It);
    let {
      results: mi,
      loaderResults: uu,
      fetcherResults: xr,
    } = await zf(g.matches, M, me, Xe, C);
    if (C.signal.aborted) return { shortCircuited: !0 };
    T && T.signal.removeEventListener('abort', It),
      Xe.forEach(ce => ue.delete(ce.key));
    let Nt = xh(mi);
    if (Nt) {
      if (Nt.idx >= me.length) {
        let ce = Xe[Nt.idx - me.length].key;
        O.add(ce);
      }
      return await hi(g, Nt.result, { replace: V }), { shortCircuited: !0 };
    }
    let { loaderData: Oo, errors: su } = yh(g, M, me, uu, J, Xe, xr, et);
    et.forEach((ce, mt) => {
      ce.subscribe(ke => {
        (ke || ce.done) && et.delete(mt);
      });
    });
    let cu = Vf(),
      fu = Wf(Ae),
      Sr = cu || fu || Xe.length > 0;
    return Se(
      { loaderData: Oo, errors: su },
      Sr ? { fetchers: new Map(g.fetchers) } : {}
    );
  }
  function Ke(C, N, M, $) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ue.has(C) && Sn(C);
    let A = ($ && $.unstable_flushSync) === !0,
      K = a || l,
      V = Xs(
        g.location,
        g.matches,
        u,
        s.v7_prependBasename,
        M,
        N,
        $ == null ? void 0 : $.relative
      ),
      B = Or(K, V, u);
    if (!B) {
      pi(C, N, gt(404, { pathname: V }), { flushSync: A });
      return;
    }
    let {
      path: z,
      submission: J,
      error: Fe,
    } = dh(s.v7_normalizeFormMethod, !0, V, $);
    if (Fe) {
      pi(C, N, Fe, { flushSync: A });
      return;
    }
    let X = Gs(B, z);
    if (((_ = ($ && $.preventScrollReset) === !0), J && Rt(J.formMethod))) {
      Zt(C, N, z, X, B, A, J);
      return;
    }
    H.set(C, { routeId: N, path: z }), $o(C, N, z, X, B, A, J);
  }
  async function Zt(C, N, M, $, A, K, V) {
    if ((lu(), H.delete(C), !$.route.action && !$.route.lazy)) {
      let ke = gt(405, { method: V.formMethod, pathname: M, routeId: N });
      pi(C, N, ke, { flushSync: K });
      return;
    }
    let B = g.fetchers.get(C);
    xn(C, Sx(V, B), { flushSync: K });
    let z = new AbortController(),
      J = Ni(e.history, M, z.signal, V);
    ue.set(C, z);
    let Fe = Ye,
      X = await ki('action', J, $, A, o, i, u);
    if (J.signal.aborted) {
      ue.get(C) === z && ue.delete(C);
      return;
    }
    if (ne.has(C)) {
      xn(C, Cn(void 0));
      return;
    }
    if (Yr(X))
      if ((ue.delete(C), Ae > Fe)) {
        xn(C, Cn(void 0));
        return;
      } else return O.add(C), xn(C, Ti(V)), hi(g, X, { fetcherSubmission: V });
    if (Gi(X)) {
      pi(C, N, X.error);
      return;
    }
    if (Jn(X)) throw gt(400, { type: 'defer-action' });
    let se = g.navigation.location || g.location,
      me = Ni(e.history, se, z.signal),
      Xe = a || l,
      It =
        g.navigation.state !== 'idle' ?
          Or(Xe, g.navigation.location, u)
        : g.matches;
    W(It, "Didn't find any matches after fetcher action");
    let mi = ++Ye;
    D.set(C, mi);
    let uu = Ti(V, X.data);
    g.fetchers.set(C, uu);
    let [xr, Nt] = hh(
      e.history,
      g,
      It,
      V,
      se,
      q,
      Q,
      Re,
      ne,
      H,
      O,
      Xe,
      u,
      { [$.route.id]: X.data },
      void 0
    );
    Nt.filter(ke => ke.key !== C).forEach(ke => {
      let Wn = ke.key,
        qf = g.fetchers.get(Wn),
        vy = Ti(void 0, qf ? qf.data : void 0);
      g.fetchers.set(Wn, vy),
        ue.has(Wn) && Sn(Wn),
        ke.controller && ue.set(Wn, ke.controller);
    }),
      L({ fetchers: new Map(g.fetchers) });
    let Oo = () => Nt.forEach(ke => Sn(ke.key));
    z.signal.addEventListener('abort', Oo);
    let {
      results: su,
      loaderResults: cu,
      fetcherResults: fu,
    } = await zf(g.matches, It, xr, Nt, me);
    if (z.signal.aborted) return;
    z.signal.removeEventListener('abort', Oo),
      D.delete(C),
      ue.delete(C),
      Nt.forEach(ke => ue.delete(ke.key));
    let Sr = xh(su);
    if (Sr) {
      if (Sr.idx >= xr.length) {
        let ke = Nt[Sr.idx - xr.length].key;
        O.add(ke);
      }
      return hi(g, Sr.result);
    }
    let { loaderData: ce, errors: mt } = yh(
      g,
      g.matches,
      xr,
      cu,
      void 0,
      Nt,
      fu,
      et
    );
    if (g.fetchers.has(C)) {
      let ke = Cn(X.data);
      g.fetchers.set(C, ke);
    }
    Wf(mi),
      g.navigation.state === 'loading' && mi > Ae ?
        (W(k, 'Expected pending action'),
        T && T.abort(),
        Y(g.navigation.location, {
          matches: It,
          loaderData: ce,
          errors: mt,
          fetchers: new Map(g.fetchers),
        }))
      : (L({
          errors: mt,
          loaderData: vh(g.loaderData, ce, It, mt),
          fetchers: new Map(g.fetchers),
        }),
        (q = !1));
  }
  async function $o(C, N, M, $, A, K, V) {
    let B = g.fetchers.get(C);
    xn(C, Ti(V, B ? B.data : void 0), { flushSync: K });
    let z = new AbortController(),
      J = Ni(e.history, M, z.signal);
    ue.set(C, z);
    let Fe = Ye,
      X = await ki('loader', J, $, A, o, i, u);
    if (
      (Jn(X) && (X = (await J0(X, J.signal, !0)) || X),
      ue.get(C) === z && ue.delete(C),
      !J.signal.aborted)
    ) {
      if (ne.has(C)) {
        xn(C, Cn(void 0));
        return;
      }
      if (Yr(X))
        if (Ae > Fe) {
          xn(C, Cn(void 0));
          return;
        } else {
          O.add(C), await hi(g, X);
          return;
        }
      if (Gi(X)) {
        pi(C, N, X.error);
        return;
      }
      W(!Jn(X), 'Unhandled fetcher deferred data'), xn(C, Cn(X.data));
    }
  }
  async function hi(C, N, M) {
    let {
      submission: $,
      fetcherSubmission: A,
      replace: K,
    } = M === void 0 ? {} : M;
    N.revalidate && (q = !0);
    let V = go(C.location, N.location, { _isRedirect: !0 });
    if ((W(V, 'Expected a location on the redirect navigation'), n)) {
      let se = !1;
      if (N.reloadDocument) se = !0;
      else if (X0.test(N.location)) {
        const me = e.history.createURL(N.location);
        se = me.origin !== t.location.origin || Qt(me.pathname, u) == null;
      }
      if (se) {
        K ? t.location.replace(N.location) : t.location.assign(N.location);
        return;
      }
    }
    T = null;
    let B = K === !0 ? _e.Replace : _e.Push,
      { formMethod: z, formAction: J, formEncType: Fe } = C.navigation;
    !$ && !A && z && J && Fe && ($ = _h(C.navigation));
    let X = $ || A;
    if (sx.has(N.status) && X && Rt(X.formMethod))
      await we(B, V, {
        submission: Se({}, X, { formAction: N.location }),
        preventScrollReset: _,
      });
    else {
      let se = zu(V, $);
      await we(B, V, {
        overrideNavigation: se,
        fetcherSubmission: A,
        preventScrollReset: _,
      });
    }
  }
  async function zf(C, N, M, $, A) {
    let K = await Promise.all([
        ...M.map(z => ki('loader', A, z, N, o, i, u)),
        ...$.map(z =>
          z.matches && z.match && z.controller ?
            ki(
              'loader',
              Ni(e.history, z.path, z.controller.signal),
              z.match,
              z.matches,
              o,
              i,
              u
            )
          : { type: Ce.error, error: gt(404, { pathname: z.path }) }
        ),
      ]),
      V = K.slice(0, M.length),
      B = K.slice(M.length);
    return (
      await Promise.all([
        Sh(
          C,
          M,
          V,
          V.map(() => A.signal),
          !1,
          g.loaderData
        ),
        Sh(
          C,
          $.map(z => z.match),
          B,
          $.map(z => (z.controller ? z.controller.signal : null)),
          !0
        ),
      ]),
      { results: K, loaderResults: V, fetcherResults: B }
    );
  }
  function lu() {
    (q = !0),
      Q.push(...au()),
      H.forEach((C, N) => {
        ue.has(N) && (Re.push(N), Sn(N));
      });
  }
  function xn(C, N, M) {
    M === void 0 && (M = {}),
      g.fetchers.set(C, N),
      L(
        { fetchers: new Map(g.fetchers) },
        { flushSync: (M && M.flushSync) === !0 }
      );
  }
  function pi(C, N, M, $) {
    $ === void 0 && ($ = {});
    let A = qi(g.matches, N);
    bo(C),
      L(
        { errors: { [A.route.id]: M }, fetchers: new Map(g.fetchers) },
        { flushSync: ($ && $.flushSync) === !0 }
      );
  }
  function Bf(C) {
    return (
      s.v7_fetcherPersist &&
        (re.set(C, (re.get(C) || 0) + 1), ne.has(C) && ne.delete(C)),
      g.fetchers.get(C) || K0
    );
  }
  function bo(C) {
    let N = g.fetchers.get(C);
    ue.has(C) && !(N && N.state === 'loading' && D.has(C)) && Sn(C),
      H.delete(C),
      D.delete(C),
      O.delete(C),
      ne.delete(C),
      g.fetchers.delete(C);
  }
  function hy(C) {
    if (s.v7_fetcherPersist) {
      let N = (re.get(C) || 0) - 1;
      N <= 0 ? (re.delete(C), ne.add(C)) : re.set(C, N);
    } else bo(C);
    L({ fetchers: new Map(g.fetchers) });
  }
  function Sn(C) {
    let N = ue.get(C);
    W(N, 'Expected fetch controller: ' + C), N.abort(), ue.delete(C);
  }
  function Hf(C) {
    for (let N of C) {
      let M = Bf(N),
        $ = Cn(M.data);
      g.fetchers.set(N, $);
    }
  }
  function Vf() {
    let C = [],
      N = !1;
    for (let M of O) {
      let $ = g.fetchers.get(M);
      W($, 'Expected fetcher: ' + M),
        $.state === 'loading' && (O.delete(M), C.push(M), (N = !0));
    }
    return Hf(C), N;
  }
  function Wf(C) {
    let N = [];
    for (let [M, $] of D)
      if ($ < C) {
        let A = g.fetchers.get(M);
        W(A, 'Expected fetcher: ' + M),
          A.state === 'loading' && (Sn(M), D.delete(M), N.push(M));
      }
    return Hf(N), N.length > 0;
  }
  function py(C, N) {
    let M = g.blockers.get(C) || Ei;
    return be.get(C) !== N && be.set(C, N), M;
  }
  function Yf(C) {
    g.blockers.delete(C), be.delete(C);
  }
  function Fo(C, N) {
    let M = g.blockers.get(C) || Ei;
    W(
      (M.state === 'unblocked' && N.state === 'blocked') ||
        (M.state === 'blocked' && N.state === 'blocked') ||
        (M.state === 'blocked' && N.state === 'proceeding') ||
        (M.state === 'blocked' && N.state === 'unblocked') ||
        (M.state === 'proceeding' && N.state === 'unblocked'),
      'Invalid blocker state transition: ' + M.state + ' -> ' + N.state
    );
    let $ = new Map(g.blockers);
    $.set(C, N), L({ blockers: $ });
  }
  function Qf(C) {
    let { currentLocation: N, nextLocation: M, historyAction: $ } = C;
    if (be.size === 0) return;
    be.size > 1 && sr(!1, 'A router only supports one blocker at a time');
    let A = Array.from(be.entries()),
      [K, V] = A[A.length - 1],
      B = g.blockers.get(K);
    if (
      !(B && B.state === 'proceeding') &&
      V({ currentLocation: N, nextLocation: M, historyAction: $ })
    )
      return K;
  }
  function au(C) {
    let N = [];
    return (
      et.forEach((M, $) => {
        (!C || C($)) && (M.cancel(), N.push($), et.delete($));
      }),
      N
    );
  }
  function my(C, N, M) {
    if (((f = C), (v = N), (m = M || null), !x && g.navigation === Au)) {
      x = !0;
      let $ = Xf(g.location, g.matches);
      $ != null && L({ restoreScrollPosition: $ });
    }
    return () => {
      (f = null), (v = null), (m = null);
    };
  }
  function Kf(C, N) {
    return (
      (m &&
        m(
          C,
          N.map($ => Aw($, g.loaderData))
        )) ||
      C.key
    );
  }
  function gy(C, N) {
    if (f && v) {
      let M = Kf(C, N);
      f[M] = v();
    }
  }
  function Xf(C, N) {
    if (f) {
      let M = Kf(C, N),
        $ = f[M];
      if (typeof $ == 'number') return $;
    }
    return null;
  }
  function yy(C) {
    (o = {}), (a = Qs(C, i, void 0, o));
  }
  return (
    (w = {
      get basename() {
        return u;
      },
      get state() {
        return g;
      },
      get routes() {
        return l;
      },
      get window() {
        return t;
      },
      initialize: kt,
      subscribe: ou,
      enableScrollRestoration: my,
      navigate: Z,
      fetch: Ke,
      revalidate: R,
      createHref: C => e.history.createHref(C),
      encodeLocation: C => e.history.encodeLocation(C),
      getFetcher: Bf,
      deleteFetcher: hy,
      dispose: wn,
      getBlocker: py,
      deleteBlocker: Yf,
      _internalFetchControllers: ue,
      _internalActiveDeferreds: et,
      _internalSetRoutes: yy,
    }),
    w
  );
}
function dx(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function Xs(e, t, n, r, i, o, l) {
  let a, u;
  if (o) {
    a = [];
    for (let c of t)
      if ((a.push(c), c.route.id === o)) {
        u = c;
        break;
      }
  } else (a = t), (u = t[t.length - 1]);
  let s = pf(i || '.', hf(a), Qt(e.pathname, n) || e.pathname, l === 'path');
  return (
    i == null && ((s.search = e.search), (s.hash = e.hash)),
    (i == null || i === '' || i === '.') &&
      u &&
      u.route.index &&
      !gf(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (s.pathname = s.pathname === '/' ? n : Wt([n, s.pathname])),
    zn(s)
  );
}
function dh(e, t, n, r) {
  if (!r || !dx(r)) return { path: n };
  if (r.formMethod && !wx(r.formMethod))
    return { path: n, error: gt(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: gt(400, { type: 'invalid-body' }) }),
    o = r.formMethod || 'get',
    l = e ? o.toUpperCase() : o.toLowerCase(),
    a = Z0(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!Rt(l)) return i();
      let f =
        typeof r.body == 'string' ? r.body
        : r.body instanceof FormData || r.body instanceof URLSearchParams ?
          Array.from(r.body.entries()).reduce((m, v) => {
            let [x, E] = v;
            return (
              '' +
              m +
              x +
              '=' +
              E +
              `
`
            );
          }, '')
        : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: f,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!Rt(l)) return i();
      try {
        let f = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  W(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let u, s;
  if (r.formData) (u = qs(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = qs(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = gh(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = gh(u));
    } catch {
      return i();
    }
  let c = {
    formMethod: l,
    formAction: a,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (Rt(c.formMethod)) return { path: n, submission: c };
  let d = yn(n);
  return (
    t && d.search && gf(d.search) && u.append('index', ''),
    (d.search = '?' + u),
    { path: zn(d), submission: c }
  );
}
function hx(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex(i => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function hh(e, t, n, r, i, o, l, a, u, s, c, d, f, m, v) {
  let x =
      v ? Object.values(v)[0]
      : m ? Object.values(m)[0]
      : void 0,
    E = e.createURL(t.location),
    h = e.createURL(i),
    p = v ? Object.keys(v)[0] : void 0,
    g = hx(n, p).filter((_, T) => {
      if (_.route.lazy) return !0;
      if (_.route.loader == null) return !1;
      if (px(t.loaderData, t.matches[T], _) || l.some(U => U === _.route.id))
        return !0;
      let j = t.matches[T],
        I = _;
      return ph(
        _,
        Se(
          {
            currentUrl: E,
            currentParams: j.params,
            nextUrl: h,
            nextParams: I.params,
          },
          r,
          {
            actionResult: x,
            defaultShouldRevalidate:
              o ||
              E.pathname + E.search === h.pathname + h.search ||
              E.search !== h.search ||
              G0(j, I),
          }
        )
      );
    }),
    k = [];
  return (
    s.forEach((_, T) => {
      if (!n.some(q => q.route.id === _.routeId) || u.has(T)) return;
      let j = Or(d, _.path, f);
      if (!j) {
        k.push({
          key: T,
          routeId: _.routeId,
          path: _.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let I = t.fetchers.get(T),
        U = Gs(j, _.path),
        b = !1;
      c.has(T) ? (b = !1)
      : a.includes(T) ? (b = !0)
      : I && I.state !== 'idle' && I.data === void 0 ? (b = o)
      : (b = ph(
          U,
          Se(
            {
              currentUrl: E,
              currentParams: t.matches[t.matches.length - 1].params,
              nextUrl: h,
              nextParams: n[n.length - 1].params,
            },
            r,
            { actionResult: x, defaultShouldRevalidate: o }
          )
        )),
        b &&
          k.push({
            key: T,
            routeId: _.routeId,
            path: _.path,
            matches: j,
            match: U,
            controller: new AbortController(),
          });
    }),
    [g, k]
  );
}
function px(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function G0(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function ph(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function mh(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  W(i, 'No route found in manifest');
  let o = {};
  for (let l in r) {
    let u = i[l] !== void 0 && l !== 'hasErrorBoundary';
    sr(
      !u,
      'Route "' +
        i.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !u && !Uw.has(l) && (o[l] = r[l]);
  }
  Object.assign(i, o), Object.assign(i, Se({}, t(i), { lazy: void 0 }));
}
async function ki(e, t, n, r, i, o, l, a) {
  a === void 0 && (a = {});
  let u,
    s,
    c,
    d = v => {
      let x,
        E = new Promise((h, p) => (x = p));
      return (
        (c = () => x()),
        t.signal.addEventListener('abort', c),
        Promise.race([
          v({ request: t, params: n.params, context: a.requestContext }),
          E,
        ])
      );
    };
  try {
    let v = n.route[e];
    if (n.route.lazy)
      if (v) {
        let x,
          E = await Promise.all([
            d(v).catch(h => {
              x = h;
            }),
            mh(n.route, o, i),
          ]);
        if (x) throw x;
        s = E[0];
      } else if ((await mh(n.route, o, i), (v = n.route[e]), v)) s = await d(v);
      else if (e === 'action') {
        let x = new URL(t.url),
          E = x.pathname + x.search;
        throw gt(405, { method: t.method, pathname: E, routeId: n.route.id });
      } else return { type: Ce.data, data: void 0 };
    else if (v) s = await d(v);
    else {
      let x = new URL(t.url),
        E = x.pathname + x.search;
      throw gt(404, { pathname: E });
    }
    W(
      s !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (v) {
    (u = Ce.error), (s = v);
  } finally {
    c && t.signal.removeEventListener('abort', c);
  }
  if (vx(s)) {
    let v = s.status;
    if (ux.has(v)) {
      let h = s.headers.get('Location');
      if (
        (W(
          h,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !X0.test(h))
      )
        h = Xs(new URL(t.url), r.slice(0, r.indexOf(n) + 1), l, !0, h);
      else if (!a.isStaticRequest) {
        let p = new URL(t.url),
          w = h.startsWith('//') ? new URL(p.protocol + h) : new URL(h),
          g = Qt(w.pathname, l) != null;
        w.origin === p.origin && g && (h = w.pathname + w.search + w.hash);
      }
      if (a.isStaticRequest) throw (s.headers.set('Location', h), s);
      return {
        type: Ce.redirect,
        status: v,
        location: h,
        revalidate: s.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: s.headers.get('X-Remix-Reload-Document') !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: u === Ce.error ? Ce.error : Ce.data, response: s };
    let x,
      E = s.headers.get('Content-Type');
    return (
      E && /\bapplication\/json\b/.test(E) ?
        (x = await s.json())
      : (x = await s.text()),
      u === Ce.error ?
        { type: u, error: new mf(v, s.statusText, x), headers: s.headers }
      : { type: Ce.data, data: x, statusCode: s.status, headers: s.headers }
    );
  }
  if (u === Ce.error) return { type: u, error: s };
  if (yx(s)) {
    var f, m;
    return {
      type: Ce.deferred,
      deferredData: s,
      statusCode: (f = s.init) == null ? void 0 : f.status,
      headers:
        ((m = s.init) == null ? void 0 : m.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: Ce.data, data: s };
}
function Ni(e, t, n, r) {
  let i = e.createURL(Z0(t)).toString(),
    o = { signal: n };
  if (r && Rt(r.formMethod)) {
    let { formMethod: l, formEncType: a } = r;
    (o.method = l.toUpperCase()),
      a === 'application/json' ?
        ((o.headers = new Headers({ 'Content-Type': a })),
        (o.body = JSON.stringify(r.json)))
      : a === 'text/plain' ? (o.body = r.text)
      : a === 'application/x-www-form-urlencoded' && r.formData ?
        (o.body = qs(r.formData))
      : (o.body = r.formData);
  }
  return new Request(i, o);
}
function qs(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function gh(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function mx(e, t, n, r, i) {
  let o = {},
    l = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((c, d) => {
      let f = t[d].route.id;
      if (
        (W(!Yr(c), 'Cannot handle redirect results in processLoaderData'),
        Gi(c))
      ) {
        let m = qi(e, f),
          v = c.error;
        r && ((v = Object.values(r)[0]), (r = void 0)),
          (l = l || {}),
          l[m.route.id] == null && (l[m.route.id] = v),
          (o[f] = void 0),
          u || ((u = !0), (a = Y0(c.error) ? c.error.status : 500)),
          c.headers && (s[f] = c.headers);
      } else
        Jn(c) ?
          (i.set(f, c.deferredData), (o[f] = c.deferredData.data))
        : (o[f] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !u &&
            (a = c.statusCode),
          c.headers && (s[f] = c.headers);
    }),
    r && ((l = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: l, statusCode: a || 200, loaderHeaders: s }
  );
}
function yh(e, t, n, r, i, o, l, a) {
  let { loaderData: u, errors: s } = mx(t, n, r, i, a);
  for (let c = 0; c < o.length; c++) {
    let { key: d, match: f, controller: m } = o[c];
    W(
      l !== void 0 && l[c] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let v = l[c];
    if (!(m && m.signal.aborted))
      if (Gi(v)) {
        let x = qi(e.matches, f == null ? void 0 : f.route.id);
        (s && s[x.route.id]) || (s = Se({}, s, { [x.route.id]: v.error })),
          e.fetchers.delete(d);
      } else if (Yr(v)) W(!1, 'Unhandled fetcher revalidation redirect');
      else if (Jn(v)) W(!1, 'Unhandled fetcher deferred data');
      else {
        let x = Cn(v.data);
        e.fetchers.set(d, x);
      }
  }
  return { loaderData: u, errors: s };
}
function vh(e, t, n, r) {
  let i = Se({}, t);
  for (let o of n) {
    let l = o.route.id;
    if (
      (t.hasOwnProperty(l) ?
        t[l] !== void 0 && (i[l] = t[l])
      : e[l] !== void 0 && o.route.loader && (i[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return i;
}
function qi(e, t) {
  return (
    (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e])
      .reverse()
      .find(r => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function wh(e) {
  let t =
    e.length === 1 ?
      e[0]
    : e.find(n => n.index || !n.path || n.path === '/') || {
        id: '__shim-error-route__',
      };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function gt(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    l = 'Unknown Server Error',
    a = 'Unknown @remix-run/router error';
  return (
    e === 400 ?
      ((l = 'Bad Request'),
      i && n && r ?
        (a =
          'You made a ' +
          i +
          ' request to "' +
          n +
          '" but ' +
          ('did not provide a `loader` for route "' + r + '", ') +
          'so there is no way to handle the request.')
      : o === 'defer-action' ? (a = 'defer() is not supported in actions')
      : o === 'invalid-body' && (a = 'Unable to encode submission body'))
    : e === 403 ?
      ((l = 'Forbidden'),
      (a = 'Route "' + r + '" does not match URL "' + n + '"'))
    : e === 404 ? ((l = 'Not Found'), (a = 'No route matches URL "' + n + '"'))
    : e === 405 &&
      ((l = 'Method Not Allowed'),
      i && n && r ?
        (a =
          'You made a ' +
          i.toUpperCase() +
          ' request to "' +
          n +
          '" but ' +
          ('did not provide an `action` for route "' + r + '", ') +
          'so there is no way to handle the request.')
      : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
    new mf(e || 500, l, new Error(a), !0)
  );
}
function xh(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Yr(n)) return { result: n, idx: t };
  }
}
function Z0(e) {
  let t = typeof e == 'string' ? yn(e) : e;
  return zn(Se({}, t, { hash: '' }));
}
function gx(e, t) {
  return (
    e.pathname !== t.pathname || e.search !== t.search ? !1
    : e.hash === '' ? t.hash !== ''
    : e.hash === t.hash ? !0
    : t.hash !== ''
  );
}
function Jn(e) {
  return e.type === Ce.deferred;
}
function Gi(e) {
  return e.type === Ce.error;
}
function Yr(e) {
  return (e && e.type) === Ce.redirect;
}
function yx(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function vx(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function wx(e) {
  return ax.has(e.toLowerCase());
}
function Rt(e) {
  return ox.has(e.toLowerCase());
}
async function Sh(e, t, n, r, i, o) {
  for (let l = 0; l < n.length; l++) {
    let a = n[l],
      u = t[l];
    if (!u) continue;
    let s = e.find(d => d.route.id === u.route.id),
      c = s != null && !G0(s, u) && (o && o[u.route.id]) !== void 0;
    if (Jn(a) && (i || c)) {
      let d = r[l];
      W(d, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await J0(a, d, i).then(f => {
          f && (n[l] = f || n[l]);
        });
    }
  }
}
async function J0(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Ce.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Ce.error, error: i };
      }
    return { type: Ce.data, data: e.deferredData.data };
  }
}
function gf(e) {
  return new URLSearchParams(e).getAll('index').some(t => t === '');
}
function Gs(e, t) {
  let n = typeof t == 'string' ? yn(t).search : t.search;
  if (e[e.length - 1].route.index && gf(n || '')) return e[e.length - 1];
  let r = W0(e);
  return r[r.length - 1];
}
function _h(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: l,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function zu(e, t) {
  return t ?
      {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function xx(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ti(e, t) {
  return e ?
      {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Sx(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Cn(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function _x(e, t) {
  try {
    let n = e.sessionStorage.getItem(q0);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {}
}
function Cx(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(q0, JSON.stringify(n));
    } catch (r) {
      sr(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + r + ').'
      );
    }
  }
}
/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ql() {
  return (
    (Ql =
      Object.assign ?
        Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ql.apply(this, arguments)
  );
}
const To = S.createContext(null),
  Xa = S.createContext(null),
  vn = S.createContext(null),
  qa = S.createContext(null),
  Xt = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  eg = S.createContext(null);
function Ex(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Mo() || W(!1);
  let { basename: r, navigator: i } = S.useContext(vn),
    { hash: o, pathname: l, search: a } = Ro(e, { relative: n }),
    u = l;
  return (
    r !== '/' && (u = l === '/' ? r : Wt([r, l])),
    i.createHref({ pathname: u, search: a, hash: o })
  );
}
function Mo() {
  return S.useContext(qa) != null;
}
function ci() {
  return Mo() || W(!1), S.useContext(qa).location;
}
function tg(e) {
  S.useContext(vn).static || S.useLayoutEffect(e);
}
function Po() {
  let { isDataRoute: e } = S.useContext(Xt);
  return e ? Ox() : kx();
}
function kx() {
  Mo() || W(!1);
  let e = S.useContext(To),
    { basename: t, navigator: n } = S.useContext(vn),
    { matches: r } = S.useContext(Xt),
    { pathname: i } = ci(),
    o = JSON.stringify(hf(r)),
    l = S.useRef(!1);
  return (
    tg(() => {
      l.current = !0;
    }),
    S.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !l.current)) return;
        if (typeof u == 'number') {
          n.go(u);
          return;
        }
        let c = pf(u, JSON.parse(o), i, s.relative === 'path');
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : Wt([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s);
      },
      [t, n, o, i, e]
    )
  );
}
const Nx = S.createContext(null);
function Tx(e) {
  let t = S.useContext(Xt).outlet;
  return t && S.createElement(Nx.Provider, { value: e }, t);
}
function Ro(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = S.useContext(Xt),
    { pathname: i } = ci(),
    o = JSON.stringify(hf(r));
  return S.useMemo(() => pf(e, JSON.parse(o), i, n === 'path'), [e, o, i, n]);
}
function Mx(e, t, n) {
  Mo() || W(!1);
  let { navigator: r } = S.useContext(vn),
    { matches: i } = S.useContext(Xt),
    o = i[i.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : '/';
  o && o.route;
  let u = ci(),
    s;
  if (t) {
    var c;
    let x = typeof t == 'string' ? yn(t) : t;
    a === '/' || ((c = x.pathname) != null && c.startsWith(a)) || W(!1),
      (s = x);
  } else s = u;
  let d = s.pathname || '/',
    f = a === '/' ? d : d.slice(a.length) || '/',
    m = Or(e, { pathname: f }),
    v = Lx(
      m &&
        m.map(x =>
          Object.assign({}, x, {
            params: Object.assign({}, l, x.params),
            pathname: Wt([
              a,
              r.encodeLocation ?
                r.encodeLocation(x.pathname).pathname
              : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === '/' ?
                a
              : Wt([
                  a,
                  r.encodeLocation ?
                    r.encodeLocation(x.pathnameBase).pathname
                  : x.pathnameBase,
                ]),
          })
        ),
      i,
      n
    );
  return t && v ?
      S.createElement(
        qa.Provider,
        {
          value: {
            location: Ql(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              s
            ),
            navigationType: _e.Pop,
          },
        },
        v
      )
    : v;
}
function Px() {
  let e = ig(),
    t =
      Y0(e) ? e.status + ' ' + e.statusText
      : e instanceof Error ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    o = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement('h2', null, 'Unexpected Application Error!'),
    S.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? S.createElement('pre', { style: i }, n) : null,
    o
  );
}
const Rx = S.createElement(Px, null);
class jx extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return (
        n.location !== t.location ||
          (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ) ?
        { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error ?
        S.createElement(
          Xt.Provider,
          { value: this.props.routeContext },
          S.createElement(eg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Dx(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = S.useContext(To);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Xt.Provider, { value: t }, r)
  );
}
function Lx(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    l = (r = n) == null ? void 0 : r.errors;
  if (l != null) {
    let a = o.findIndex(
      u => u.route.id && (l == null ? void 0 : l[u.route.id])
    );
    a >= 0 || W(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
  }
  return o.reduceRight((a, u, s) => {
    let c =
        u.route.id ?
          l == null ?
            void 0
          : l[u.route.id]
        : null,
      d = null;
    n && (d = u.route.errorElement || Rx);
    let f = t.concat(o.slice(0, s + 1)),
      m = () => {
        let v;
        return (
          c ? (v = d)
          : u.route.Component ? (v = S.createElement(u.route.Component, null))
          : u.route.element ? (v = u.route.element)
          : (v = a),
          S.createElement(Dx, {
            match: u,
            routeContext: { outlet: a, matches: f, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (u.route.ErrorBoundary || u.route.errorElement || s === 0) ?
        S.createElement(jx, {
          location: n.location,
          revalidation: n.revalidation,
          component: d,
          error: c,
          children: m(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var ng = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(ng || {}),
  cr = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(cr || {});
function $x(e) {
  let t = S.useContext(To);
  return t || W(!1), t;
}
function rg(e) {
  let t = S.useContext(Xa);
  return t || W(!1), t;
}
function bx(e) {
  let t = S.useContext(Xt);
  return t || W(!1), t;
}
function Ga(e) {
  let t = bx(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function Fx() {
  return Ga(cr.UseRouteId);
}
function Za() {
  let e = rg(cr.UseLoaderData),
    t = Ga(cr.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      'You cannot `useLoaderData` in an errorElement (routeId: ' + t + ')'
    );
    return;
  }
  return e.loaderData[t];
}
function ig() {
  var e;
  let t = S.useContext(eg),
    n = rg(cr.UseRouteError),
    r = Ga(cr.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Ox() {
  let { router: e } = $x(ng.UseNavigateStable),
    t = Ga(cr.UseNavigateStable),
    n = S.useRef(!1);
  return (
    tg(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == 'number' ?
              e.navigate(i)
            : e.navigate(i, Ql({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Ux(e) {
  return Tx(e.context);
}
function Ix(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = _e.Pop,
    navigator: o,
    static: l = !1,
  } = e;
  Mo() && W(!1);
  let a = t.replace(/^\/*/, '/'),
    u = S.useMemo(() => ({ basename: a, navigator: o, static: l }), [a, o, l]);
  typeof r == 'string' && (r = yn(r));
  let {
      pathname: s = '/',
      search: c = '',
      hash: d = '',
      state: f = null,
      key: m = 'default',
    } = r,
    v = S.useMemo(() => {
      let x = Qt(s, a);
      return x == null ? null : (
          {
            location: { pathname: x, search: c, hash: d, state: f, key: m },
            navigationType: i,
          }
        );
    }, [a, s, c, d, f, m, i]);
  return v == null ? null : (
      S.createElement(
        vn.Provider,
        { value: u },
        S.createElement(qa.Provider, { children: n, value: v })
      )
    );
}
new Promise(() => {});
function Ax(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: S.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: S.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ft() {
  return (
    (Ft =
      Object.assign ?
        Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ft.apply(this, arguments)
  );
}
function yf(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
const vl = 'get',
  Bu = 'application/x-www-form-urlencoded';
function Ja(e) {
  return e != null && typeof e.tagName == 'string';
}
function zx(e) {
  return Ja(e) && e.tagName.toLowerCase() === 'button';
}
function Bx(e) {
  return Ja(e) && e.tagName.toLowerCase() === 'form';
}
function Hx(e) {
  return Ja(e) && e.tagName.toLowerCase() === 'input';
}
function Vx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Wx(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Vx(e);
}
let tl = null;
function Yx() {
  if (tl === null)
    try {
      new FormData(document.createElement('form'), 0), (tl = !1);
    } catch {
      tl = !0;
    }
  return tl;
}
const Qx = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Hu(e) {
  return e != null && !Qx.has(e) ? null : e;
}
function Kx(e, t) {
  let n, r, i, o, l;
  if (Bx(e)) {
    let a = e.getAttribute('action');
    (r = a ? Qt(a, t) : null),
      (n = e.getAttribute('method') || vl),
      (i = Hu(e.getAttribute('enctype')) || Bu),
      (o = new FormData(e));
  } else if (zx(e) || (Hx(e) && (e.type === 'submit' || e.type === 'image'))) {
    let a = e.form;
    if (a == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let u = e.getAttribute('formaction') || a.getAttribute('action');
    if (
      ((r = u ? Qt(u, t) : null),
      (n = e.getAttribute('formmethod') || a.getAttribute('method') || vl),
      (i =
        Hu(e.getAttribute('formenctype')) ||
        Hu(a.getAttribute('enctype')) ||
        Bu),
      (o = new FormData(a, e)),
      !Yx())
    ) {
      let { name: s, type: c, value: d } = e;
      if (c === 'image') {
        let f = s ? s + '.' : '';
        o.append(f + 'x', '0'), o.append(f + 'y', '0');
      } else s && o.append(s, d);
    }
  } else {
    if (Ja(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = vl), (r = null), (i = Bu), (l = e);
  }
  return (
    o && i === 'text/plain' && ((l = o), (o = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: o, body: l }
  );
}
const Xx = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  qx = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'unstable_viewTransition',
    'children',
  ],
  Gx = [
    'fetcherKey',
    'navigate',
    'reloadDocument',
    'replace',
    'state',
    'method',
    'action',
    'onSubmit',
    'relative',
    'preventScrollReset',
    'unstable_viewTransition',
  ];
function Zx(e, t) {
  return fx({
    basename: t == null ? void 0 : t.basename,
    future: Ft({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: bw({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Jx(),
    routes: e,
    mapRouteProperties: Ax,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function Jx() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Ft({}, t, { errors: eS(t.errors) })), t;
}
function eS(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === 'RouteErrorResponse')
      n[r] = new mf(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === 'Error') {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == 'function')
          try {
            let l = new o(i.message);
            (l.stack = ''), (n[r] = l);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ''), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const og = S.createContext({ isTransitioning: !1 }),
  lg = S.createContext(new Map()),
  tS = 'startTransition',
  Ch = $y[tS],
  nS = 'flushSync',
  Eh = V1[nS];
function rS(e) {
  Ch ? Ch(e) : e();
}
function Mi(e) {
  Eh ? Eh(e) : e();
}
class iS {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = r => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = r => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
}
function oS(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = S.useState(n.state),
    [l, a] = S.useState(),
    [u, s] = S.useState({ isTransitioning: !1 }),
    [c, d] = S.useState(),
    [f, m] = S.useState(),
    [v, x] = S.useState(),
    E = S.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    p = S.useCallback(
      T => {
        h ? rS(T) : T();
      },
      [h]
    ),
    w = S.useCallback(
      (T, j) => {
        let {
          deletedFetchers: I,
          unstable_flushSync: U,
          unstable_viewTransitionOpts: b,
        } = j;
        I.forEach(Q => E.current.delete(Q)),
          T.fetchers.forEach((Q, Re) => {
            Q.data !== void 0 && E.current.set(Re, Q.data);
          });
        let q =
          n.window == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!b || q) {
          U ? Mi(() => o(T)) : p(() => o(T));
          return;
        }
        if (U) {
          Mi(() => {
            f && (c && c.resolve(), f.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: b.currentLocation,
                nextLocation: b.nextLocation,
              });
          });
          let Q = n.window.document.startViewTransition(() => {
            Mi(() => o(T));
          });
          Q.finished.finally(() => {
            Mi(() => {
              d(void 0), m(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            Mi(() => m(Q));
          return;
        }
        f ?
          (c && c.resolve(),
          f.skipTransition(),
          x({
            state: T,
            currentLocation: b.currentLocation,
            nextLocation: b.nextLocation,
          }))
        : (a(T),
          s({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: b.currentLocation,
            nextLocation: b.nextLocation,
          }));
      },
      [n.window, f, c, E, p]
    );
  S.useLayoutEffect(() => n.subscribe(w), [n, w]),
    S.useEffect(() => {
      u.isTransitioning && !u.flushSync && d(new iS());
    }, [u]),
    S.useEffect(() => {
      if (c && l && n.window) {
        let T = l,
          j = c.promise,
          I = n.window.document.startViewTransition(async () => {
            p(() => o(T)), await j;
          });
        I.finished.finally(() => {
          d(void 0), m(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          m(I);
      }
    }, [p, l, c, n.window]),
    S.useEffect(() => {
      c && l && i.location.key === l.location.key && c.resolve();
    }, [c, f, i.location, l]),
    S.useEffect(() => {
      !u.isTransitioning &&
        v &&
        (a(v.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: v.currentLocation,
          nextLocation: v.nextLocation,
        }),
        x(void 0));
    }, [u.isTransitioning, v]);
  let g = S.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: T => n.navigate(T),
        push: (T, j, I) =>
          n.navigate(T, {
            state: j,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset,
          }),
        replace: (T, j, I) =>
          n.navigate(T, {
            replace: !0,
            state: j,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset,
          }),
      }),
      [n]
    ),
    k = n.basename || '/',
    _ = S.useMemo(
      () => ({ router: n, navigator: g, static: !1, basename: k }),
      [n, g, k]
    );
  return S.createElement(
    S.Fragment,
    null,
    S.createElement(
      To.Provider,
      { value: _ },
      S.createElement(
        Xa.Provider,
        { value: i },
        S.createElement(
          lg.Provider,
          { value: E.current },
          S.createElement(
            og.Provider,
            { value: u },
            S.createElement(
              Ix,
              {
                basename: k,
                location: i.location,
                navigationType: i.historyAction,
                navigator: g,
              },
              i.initialized ?
                S.createElement(lS, { routes: n.routes, state: i })
              : t
            )
          )
        )
      )
    ),
    null
  );
}
function lS(e) {
  let { routes: t, state: n } = e;
  return Mx(t, void 0, n);
}
const aS =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  uS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Kt = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: a,
        target: u,
        to: s,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      f = yf(t, Xx),
      { basename: m } = S.useContext(vn),
      v,
      x = !1;
    if (typeof s == 'string' && uS.test(s) && ((v = s), aS))
      try {
        let w = new URL(window.location.href),
          g = s.startsWith('//') ? new URL(w.protocol + s) : new URL(s),
          k = Qt(g.pathname, m);
        g.origin === w.origin && k != null ?
          (s = k + g.search + g.hash)
        : (x = !0);
      } catch {}
    let E = Ex(s, { relative: i }),
      h = dS(s, {
        replace: l,
        state: a,
        target: u,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: d,
      });
    function p(w) {
      r && r(w), w.defaultPrevented || h(w);
    }
    return S.createElement(
      'a',
      Ft({}, f, { href: v || E, onClick: x || o ? r : p, ref: n, target: u })
    );
  }),
  sS = S.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: i = !1,
        className: o = '',
        end: l = !1,
        style: a,
        to: u,
        unstable_viewTransition: s,
        children: c,
      } = t,
      d = yf(t, qx),
      f = Ro(u, { relative: d.relative }),
      m = ci(),
      v = S.useContext(Xa),
      { navigator: x } = S.useContext(vn),
      E = v != null && gS(f) && s === !0,
      h = x.encodeLocation ? x.encodeLocation(f).pathname : f.pathname,
      p = m.pathname,
      w =
        v && v.navigation && v.navigation.location ?
          v.navigation.location.pathname
        : null;
    i ||
      ((p = p.toLowerCase()),
      (w = w ? w.toLowerCase() : null),
      (h = h.toLowerCase()));
    const g = h !== '/' && h.endsWith('/') ? h.length - 1 : h.length;
    let k = p === h || (!l && p.startsWith(h) && p.charAt(g) === '/'),
      _ =
        w != null &&
        (w === h || (!l && w.startsWith(h) && w.charAt(h.length) === '/')),
      T = { isActive: k, isPending: _, isTransitioning: E },
      j = k ? r : void 0,
      I;
    typeof o == 'function' ?
      (I = o(T))
    : (I = [
        o,
        k ? 'active' : null,
        _ ? 'pending' : null,
        E ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
    let U = typeof a == 'function' ? a(T) : a;
    return S.createElement(
      Kt,
      Ft({}, d, {
        'aria-current': j,
        className: I,
        ref: n,
        style: U,
        to: u,
        unstable_viewTransition: s,
      }),
      typeof c == 'function' ? c(T) : c
    );
  }),
  cS = S.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: i,
        replace: o,
        state: l,
        method: a = vl,
        action: u,
        onSubmit: s,
        relative: c,
        preventScrollReset: d,
        unstable_viewTransition: f,
      } = e,
      m = yf(e, Gx),
      v = ug(),
      x = mS(u, { relative: c }),
      E = a.toLowerCase() === 'get' ? 'get' : 'post',
      h = p => {
        if ((s && s(p), p.defaultPrevented)) return;
        p.preventDefault();
        let w = p.nativeEvent.submitter,
          g = (w == null ? void 0 : w.getAttribute('formmethod')) || a;
        v(w || p.currentTarget, {
          fetcherKey: n,
          method: g,
          navigate: r,
          replace: o,
          state: l,
          relative: c,
          preventScrollReset: d,
          unstable_viewTransition: f,
        });
      };
    return S.createElement(
      'form',
      Ft({ ref: t, method: E, action: x, onSubmit: i ? s : h }, m)
    );
  });
var yo;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(yo || (yo = {}));
var Zs;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(Zs || (Zs = {}));
function vf(e) {
  let t = S.useContext(To);
  return t || W(!1), t;
}
function fS(e) {
  let t = S.useContext(Xa);
  return t || W(!1), t;
}
function dS(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = Po(),
    s = ci(),
    c = Ro(e, { relative: l });
  return S.useCallback(
    d => {
      if (Wx(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : zn(s) === zn(c);
        u(e, {
          replace: f,
          state: i,
          preventScrollReset: o,
          relative: l,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, c, r, i, n, e, o, l, a]
  );
}
function hS() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
    );
}
let pS = 0,
  ag = () => '__' + String(++pS) + '__';
function ug() {
  let { router: e } = vf(yo.UseSubmit),
    { basename: t } = S.useContext(vn),
    n = Fx();
  return S.useCallback(
    function (r, i) {
      i === void 0 && (i = {}), hS();
      let { action: o, method: l, encType: a, formData: u, body: s } = Kx(r, t);
      if (i.navigate === !1) {
        let c = i.fetcherKey || ag();
        e.fetch(c, n, i.action || o, {
          preventScrollReset: i.preventScrollReset,
          formData: u,
          body: s,
          formMethod: i.method || l,
          formEncType: i.encType || a,
          unstable_flushSync: i.unstable_flushSync,
        });
      } else
        e.navigate(i.action || o, {
          preventScrollReset: i.preventScrollReset,
          formData: u,
          body: s,
          formMethod: i.method || l,
          formEncType: i.encType || a,
          replace: i.replace,
          state: i.state,
          fromRouteId: n,
          unstable_flushSync: i.unstable_flushSync,
          unstable_viewTransition: i.unstable_viewTransition,
        });
    },
    [e, t, n]
  );
}
function mS(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = S.useContext(vn),
    i = S.useContext(Xt);
  i || W(!1);
  let [o] = i.matches.slice(-1),
    l = Ft({}, Ro(e || '.', { relative: n })),
    a = ci();
  if (e == null) {
    l.search = a.search;
    let u = new URLSearchParams(l.search);
    u.has('index') &&
      u.get('index') === '' &&
      (u.delete('index'), (l.search = u.toString() ? '?' + u.toString() : ''));
  }
  return (
    (!e || e === '.') &&
      o.route.index &&
      (l.search = l.search ? l.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (l.pathname = l.pathname === '/' ? r : Wt([r, l.pathname])),
    zn(l)
  );
}
function fi(e) {
  var t;
  let { key: n } = e === void 0 ? {} : e,
    { router: r } = vf(yo.UseFetcher),
    i = fS(Zs.UseFetcher),
    o = S.useContext(lg),
    l = S.useContext(Xt),
    a = (t = l.matches[l.matches.length - 1]) == null ? void 0 : t.route.id;
  o || W(!1), l || W(!1), a == null && W(!1);
  let [u, s] = S.useState(n || '');
  n && n !== u ? s(n) : u || s(ag()),
    S.useEffect(
      () => (
        r.getFetcher(u),
        () => {
          r.deleteFetcher(u);
        }
      ),
      [r, u]
    );
  let c = S.useCallback(
      (h, p) => {
        a || W(!1), r.fetch(u, a, h, p);
      },
      [u, a, r]
    ),
    d = ug(),
    f = S.useCallback(
      (h, p) => {
        d(h, Ft({}, p, { navigate: !1, fetcherKey: u }));
      },
      [u, d]
    ),
    m = S.useMemo(
      () =>
        S.forwardRef((p, w) =>
          S.createElement(
            cS,
            Ft({}, p, { navigate: !1, fetcherKey: u, ref: w })
          )
        ),
      [u]
    ),
    v = i.fetchers.get(u) || K0,
    x = o.get(u);
  return S.useMemo(
    () => Ft({ Form: m, submit: f, load: c }, v, { data: x }),
    [m, f, c, v, x]
  );
}
function gS(e, t) {
  t === void 0 && (t = {});
  let n = S.useContext(og);
  n == null && W(!1);
  let { basename: r } = vf(yo.useViewTransitionState),
    i = Ro(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = Qt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    l = Qt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Ks(i.pathname, l) != null || Ks(i.pathname, o) != null;
}
function vo(e) {
  '@babel/helpers - typeof';
  return (
    (vo =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol' ?
        function (t) {
          return typeof t;
        }
      : function (t) {
          return (
              t &&
                typeof Symbol == 'function' &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
            ) ?
              'symbol'
            : typeof t;
        }),
    vo(e)
  );
}
function yS(e, t) {
  if (vo(e) !== 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (vo(r) !== 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function vS(e) {
  var t = yS(e, 'string');
  return vo(t) === 'symbol' ? t : String(t);
}
function wS(e, t, n) {
  return (
    (t = vS(t)),
    t in e ?
      Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
    : (e[t] = n),
    e
  );
}
function kh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Nh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ?
      kh(Object(n), !0).forEach(function (r) {
        wS(e, r, n[r]);
      })
    : Object.getOwnPropertyDescriptors ?
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
    : kh(Object(n)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
      });
  }
  return e;
}
function He(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var Th = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  Vu = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  Kl = {
    INIT: '@@redux/INIT' + Vu(),
    REPLACE: '@@redux/REPLACE' + Vu(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + Vu();
    },
  };
function xS(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function sg(e, t, n) {
  var r;
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(He(0));
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(He(1));
    return n(sg)(e, t);
  }
  if (typeof e != 'function') throw new Error(He(2));
  var i = e,
    o = t,
    l = [],
    a = l,
    u = !1;
  function s() {
    a === l && (a = l.slice());
  }
  function c() {
    if (u) throw new Error(He(3));
    return o;
  }
  function d(x) {
    if (typeof x != 'function') throw new Error(He(4));
    if (u) throw new Error(He(5));
    var E = !0;
    return (
      s(),
      a.push(x),
      function () {
        if (E) {
          if (u) throw new Error(He(6));
          (E = !1), s();
          var p = a.indexOf(x);
          a.splice(p, 1), (l = null);
        }
      }
    );
  }
  function f(x) {
    if (!xS(x)) throw new Error(He(7));
    if (typeof x.type > 'u') throw new Error(He(8));
    if (u) throw new Error(He(9));
    try {
      (u = !0), (o = i(o, x));
    } finally {
      u = !1;
    }
    for (var E = (l = a), h = 0; h < E.length; h++) {
      var p = E[h];
      p();
    }
    return x;
  }
  function m(x) {
    if (typeof x != 'function') throw new Error(He(10));
    (i = x), f({ type: Kl.REPLACE });
  }
  function v() {
    var x,
      E = d;
    return (
      (x = {
        subscribe: function (p) {
          if (typeof p != 'object' || p === null) throw new Error(He(11));
          function w() {
            p.next && p.next(c());
          }
          w();
          var g = E(w);
          return { unsubscribe: g };
        },
      }),
      (x[Th] = function () {
        return this;
      }),
      x
    );
  }
  return (
    f({ type: Kl.INIT }),
    (r = { dispatch: f, subscribe: d, getState: c, replaceReducer: m }),
    (r[Th] = v),
    r
  );
}
var SS = sg;
function _S(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Kl.INIT });
    if (typeof r > 'u') throw new Error(He(12));
    if (typeof n(void 0, { type: Kl.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(He(13));
  });
}
function CS(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == 'function' && (n[i] = e[i]);
  }
  var o = Object.keys(n),
    l;
  try {
    _S(n);
  } catch (a) {
    l = a;
  }
  return function (u, s) {
    if ((u === void 0 && (u = {}), l)) throw l;
    for (var c = !1, d = {}, f = 0; f < o.length; f++) {
      var m = o[f],
        v = n[m],
        x = u[m],
        E = v(x, s);
      if (typeof E > 'u') throw (s && s.type, new Error(He(14)));
      (d[m] = E), (c = c || E !== x);
    }
    return (c = c || o.length !== Object.keys(u).length), c ? d : u;
  };
}
function ES() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return (
    t.length === 0 ?
      function (r) {
        return r;
      }
    : t.length === 1 ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      })
  );
}
function kS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        o = function () {
          throw new Error(He(15));
        },
        l = {
          getState: i.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        a = t.map(function (u) {
          return u(l);
        });
      return (
        (o = ES.apply(void 0, a)(i.dispatch)),
        Nh(Nh({}, i), {}, { dispatch: o })
      );
    };
  };
}
function cg(e) {
  var t = function (r) {
    var i = r.dispatch,
      o = r.getState;
    return function (l) {
      return function (a) {
        return typeof a == 'function' ? a(i, o, e) : l(a);
      };
    };
  };
  return t;
}
var fg = cg();
fg.withExtraArgument = cg;
const NS = fg,
  dg = 'session/setUser',
  hg = 'session/removeUser',
  wf = e => ({ type: dg, payload: e }),
  TS = () => ({ type: hg }),
  MS = () => async e => {
    const t = await fetch('/api/auth/');
    if (t.ok) {
      const n = await t.json();
      if (n.errors) return;
      e(wf(n));
    }
  },
  Mh = e => async t => {
    const n = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(e),
    });
    if (n.ok) {
      const r = await n.json();
      t(wf(r));
    } else
      return n.status < 500 ?
          await n.json()
        : { server: 'Something went wrong. Please try again' };
  },
  PS = e => async t => {
    const n = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(e),
    });
    if (n.ok) {
      const r = await n.json();
      t(wf(r));
    } else
      return n.status < 500 ?
          await n.json()
        : { message: 'Something went wrong. Please try again' };
  },
  RS = () => async e => {
    await fetch('/api/auth/logout'), e(TS());
  },
  jS = { user: null };
function DS(e = jS, t) {
  switch (t.type) {
    case dg:
      return { ...e, user: t.payload };
    case hg:
      return { ...e, user: null };
    default:
      return e;
  }
}
const LS = CS({ session: DS });
let pg;
pg = kS(NS);
const $S = e => SS(LS, e, pg);
const xf = S.createContext();
function bS({ children: e }) {
  const t = S.useRef(),
    [n, r] = S.useState(null),
    [i, o] = S.useState(null),
    [l, a] = S.useState(!1),
    s = {
      modalRef: t,
      modalContent: n,
      setModalContent: r,
      setOnModalClose: o,
      closeModal: () => {
        a(!0),
          setTimeout(() => {
            r(null), a(!1), typeof i == 'function' && (o(null), i());
          }, 300);
      },
      isClosing: l,
    };
  return y.jsxs(y.Fragment, {
    children: [
      y.jsx(xf.Provider, { value: s, children: e }),
      y.jsx('div', { ref: t }),
    ],
  });
}
function FS() {
  const {
      modalRef: e,
      modalContent: t,
      closeModal: n,
      isClosing: r,
    } = S.useContext(xf),
    [i, o] = S.useState(!1);
  if (
    (S.useEffect(() => {
      t && !r ? o(!0) : r && o(!1);
    }, [t, r]),
    !e || !e.current || (!t && !r))
  )
    return null;
  const l = () => {
    o(!1), setTimeout(n, 300);
  };
  return P0.createPortal(
    t &&
      y.jsxs('div', {
        id: 'modal',
        className: 'fixed inset-0 z-50 flex items-center justify-center',
        children: [
          y.jsx('div', {
            id: 'modal-background',
            onClick: l,
            className: `absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${i ? 'opacity-50' : 'opacity-0'}`,
          }),
          y.jsx('div', {
            id: 'modal-content',
            className: `relative bg-white rounded-lg shadow-xl transition-all duration-300 ease-in-out transform ${i ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`,
            children: t,
          }),
        ],
      }),
    e.current
  );
}
const yr = () => S.useContext(xf);
var mg = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ph = an.createContext && an.createContext(mg),
  OS = ['attr', 'size', 'title'];
function US(e, t) {
  if (e == null) return {};
  var n = IS(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function IS(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Xl() {
  return (
    (Xl =
      Object.assign ?
        Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xl.apply(this, arguments)
  );
}
function Rh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ql(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ?
      Rh(Object(n), !0).forEach(function (r) {
        AS(e, r, n[r]);
      })
    : Object.getOwnPropertyDescriptors ?
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
    : Rh(Object(n)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
      });
  }
  return e;
}
function AS(e, t, n) {
  return (
    (t = zS(t)),
    t in e ?
      Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
    : (e[t] = n),
    e
  );
}
function zS(e) {
  var t = BS(e, 'string');
  return typeof t == 'symbol' ? t : String(t);
}
function BS(e, t) {
  if (typeof e != 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function gg(e) {
  return (
    e &&
    e.map((t, n) =>
      an.createElement(t.tag, ql({ key: n }, t.attr), gg(t.child))
    )
  );
}
function di(e) {
  return t =>
    an.createElement(HS, Xl({ attr: ql({}, e.attr) }, t), gg(e.child));
}
function HS(e) {
  var t = n => {
    var { attr: r, size: i, title: o } = e,
      l = US(e, OS),
      a = i || n.size || '1em',
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + ' ' : '') + e.className),
      an.createElement(
        'svg',
        Xl(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          l,
          {
            className: u,
            style: ql(ql({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        o && an.createElement('title', null, o),
        e.children
      )
    );
  };
  return Ph !== void 0 ? an.createElement(Ph.Consumer, null, n => t(n)) : t(mg);
}
function VS(e) {
  return di({
    tag: 'svg',
    attr: { viewBox: '0 0 384 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z',
        },
        child: [],
      },
    ],
  })(e);
}
function WS(e) {
  return di({
    tag: 'svg',
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z',
        },
        child: [],
      },
    ],
  })(e);
}
function YS(e) {
  return di({
    tag: 'svg',
    attr: { viewBox: '0 0 384 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z',
        },
        child: [],
      },
    ],
  })(e);
}
function jh({
  modalComponent: e,
  itemText: t,
  onItemClick: n,
  onModalClose: r,
}) {
  const { setModalContent: i, setOnModalClose: o } = yr(),
    l = () => {
      r && o(r), i(e), typeof n == 'function' && n();
    };
  return y.jsx('li', { className: 'cursor-pointer', onClick: l, children: t });
}
function QS() {
  const e = Ka(),
    [t, n] = S.useState(''),
    [r, i] = S.useState(''),
    [o, l] = S.useState({}),
    { closeModal: a } = yr(),
    u = async c => {
      c.preventDefault();
      const d = await e(
        Mh({ email: 'demo@example.com', password: 'password' })
      );
      d ? l(d) : a();
    },
    s = async c => {
      c.preventDefault();
      const d = await e(Mh({ email: t, password: r }));
      d ? l(d) : a();
    };
  return y.jsxs('div', {
    className: 'px-10 py-8',
    children: [
      y.jsx('h1', { children: 'Log In' }),
      y.jsxs('form', {
        className: 'flex flex-col gap-6',
        onSubmit: s,
        children: [
          y.jsxs('label', {
            className: 'flex flex-col',
            children: [
              'Email',
              y.jsx('input', {
                type: 'text',
                value: t,
                onChange: c => n(c.target.value),
                required: !0,
                className: 'rounded-md border border-gray-400 p-1',
              }),
            ],
          }),
          o.email && y.jsx('p', { children: o.email }),
          y.jsxs('label', {
            className: 'flex flex-col',
            children: [
              'Password',
              y.jsx('input', {
                type: 'password',
                value: r,
                onChange: c => i(c.target.value),
                required: !0,
                className: 'rounded-md border border-gray-400 p-1',
              }),
            ],
          }),
          o.password && y.jsx('p', { children: o.password }),
          y.jsx('button', {
            type: 'submit',
            className: 'mt-5 flex-shrink-0 flex-grow-0 self-center btn',
            children: 'Log In',
          }),
          y.jsx('button', {
            onClick: c => u(c),
            className: 'flex-shrink-0 flex-grow-0 self-center btn',
            children: 'Demo Log In',
          }),
        ],
      }),
    ],
  });
}
function KS() {
  const e = Ka(),
    [t, n] = S.useState(''),
    [r, i] = S.useState(''),
    [o, l] = S.useState(''),
    [a, u] = S.useState(''),
    [s, c] = S.useState(''),
    [d, f] = S.useState(''),
    [m, v] = S.useState(''),
    [x, E] = S.useState(''),
    [h, p] = S.useState({}),
    { closeModal: w } = yr(),
    g = () => {
      p('');
      const _ = {};
      return (
        t.length || (_.email = 'Email is required'),
        r.length || (_.username = 'Username is required'),
        o.length || (_.firstName = 'First name is required'),
        a.length || (_.lastName = 'Last name is required'),
        m.length || (_.password = 'Password is required'),
        m !== x && (_.confirmPassword = 'Passwords do not match'),
        _
      );
    },
    k = async _ => {
      _.preventDefault();
      const T = g();
      if (Object.keys(T).length === 0) {
        const j = await e(
          PS({
            first_name: o,
            last_name: a,
            bio: s,
            field: d,
            email: t,
            username: r,
            password: m,
          })
        );
        j ? p(j) : w();
      } else p(T);
    };
  return y.jsxs('div', {
    className: 'flex flex-col items-center justify-center py-8 w-[600px]',
    children: [
      y.jsx('h1', { children: 'Sign Up' }),
      h.message &&
        y.jsx('p', {
          className: 'text-sm italic text-red-500',
          children: h.message,
        }),
      y.jsxs('form', {
        className: 'flex flex-col gap-4',
        onSubmit: k,
        children: [
          y.jsxs('div', {
            className: 'flex items-center justify-between',
            children: [
              y.jsxs('label', {
                className: 'flex flex-col',
                children: [
                  'First Name',
                  y.jsx('input', {
                    type: 'text',
                    value: o,
                    onChange: _ => l(_.target.value),
                    className: 'rounded-md border border-gray-400 p-1',
                    placeholder: 'First Name',
                    required: !0,
                  }),
                ],
              }),
              h.firstName &&
                y.jsx('p', {
                  className: 'text-sm italic text-red-500',
                  children: h.firstName,
                }),
              y.jsxs('label', {
                className: 'flex flex-col',
                children: [
                  'Last Name',
                  y.jsx('input', {
                    type: 'text',
                    value: a,
                    onChange: _ => u(_.target.value),
                    className: 'rounded-md border border-gray-400 p-1',
                    placeholder: 'Last Name',
                    required: !0,
                  }),
                ],
              }),
              h.lastName &&
                y.jsx('p', {
                  className: 'text-sm italic text-red-500',
                  children: h.lastName,
                }),
            ],
          }),
          y.jsxs('label', {
            className: 'flex flex-col',
            children: [
              'Email',
              y.jsx('input', {
                type: 'text',
                value: t,
                onChange: _ => n(_.target.value),
                className: 'rounded-md border border-gray-400 p-1',
                placeholder: 'Email',
                required: !0,
              }),
            ],
          }),
          h.email &&
            y.jsx('p', {
              className: 'text-sm italic text-red-500',
              children: h.email,
            }),
          y.jsxs('label', {
            className: 'flex flex-col w-[440px]',
            children: [
              'Username',
              y.jsx('input', {
                type: 'text',
                value: r,
                onChange: _ => i(_.target.value),
                className: 'rounded-md border border-gray-400 p-1',
                placeholder: 'Username',
                required: !0,
              }),
            ],
          }),
          h.username &&
            y.jsx('p', {
              className: 'text-sm italic text-red-500',
              children: h.username,
            }),
          y.jsxs('label', {
            className: 'flex flex-col',
            children: [
              'Bio (optional)',
              y.jsx('textarea', {
                value: s,
                onChange: _ => c(_.target.value),
                rows: 5,
                className: 'rounded-md border border-gray-400 p-1',
                placeholder: 'Tell us about yourself',
              }),
            ],
          }),
          h.bio &&
            y.jsx('p', {
              className: 'text-sm italic text-red-500',
              children: h.bio,
            }),
          y.jsxs('label', {
            className: 'flex flex-col',
            children: [
              'Occupational Field (optional)',
              y.jsx('input', {
                value: d,
                onChange: _ => f(_.target.value),
                className: 'rounded-md border border-gray-400 p-1',
                placeholder: "What's your industry?",
              }),
            ],
          }),
          h.field &&
            y.jsx('p', {
              className: 'text-sm italic text-red-500',
              children: h.field,
            }),
          y.jsxs('label', {
            className: 'flex flex-col',
            children: [
              'Password',
              y.jsx('input', {
                type: 'password',
                value: m,
                onChange: _ => v(_.target.value),
                placeholder: 'Password',
                className: 'rounded-md border border-gray-400 p-1',
                required: !0,
              }),
            ],
          }),
          h.password && y.jsx('p', { children: h.password }),
          y.jsxs('label', {
            className: 'flex flex-col',
            children: [
              'Confirm Password',
              y.jsx('input', {
                type: 'password',
                value: x,
                onChange: _ => E(_.target.value),
                placeholder: 'Confirm Password',
                className: 'rounded-md border border-gray-400 p-1',
                required: !0,
              }),
            ],
          }),
          h.confirmPassword &&
            y.jsx('p', {
              className: 'text-sm italic text-red-500',
              children: h.confirmPassword,
            }),
          y.jsx('button', {
            type: 'submit',
            className: 'mt-5 flex-shrink-0 flex-grow-0 self-center btn',
            children: 'Sign Up',
          }),
        ],
      }),
    ],
  });
}
function XS() {
  const e = Ka(),
    [t, n] = S.useState(!1),
    r = gr(u => u.session.user),
    i = S.useRef(),
    o = u => {
      u.stopPropagation(), n(!t);
    };
  S.useEffect(() => {
    if (!t) return;
    const u = s => {
      i.current && !i.current.contains(s.target) && n(!1);
    };
    return (
      document.addEventListener('click', u),
      () => document.removeEventListener('click', u)
    );
  }, [t]);
  const l = () => n(!1),
    a = u => {
      u.preventDefault(), e(RS()), l();
    };
  return y.jsxs(y.Fragment, {
    children: [
      y.jsx('button', {
        onClick: o,
        className:
          'flex items-center text-gray-700 transition-colors duration-200 ease-in-out hover:text-blue-600',
        'aria-label': 'User menu',
        children: y.jsx(WS, { className: 'text-2xl' }),
      }),
      t &&
        y.jsx('ul', {
          className:
            'absolute right-0 z-10 mt-2 mr-2 w-fit rounded-md border border-gray-400 bg-white px-3 py-2 shadow-md',
          ref: i,
          children:
            r ?
              y.jsxs(y.Fragment, {
                children: [
                  y.jsxs('li', {
                    className: 'font-semibold text-gray-900',
                    children: ['Hello, ', r.username, '!'],
                  }),
                  y.jsx('li', {
                    className: 'text-gray-600',
                    children: r.email,
                  }),
                  y.jsx('li', {
                    onClick: l,
                    className: 'w-fit',
                    children: y.jsx(Kt, {
                      className:
                        'text-blue-600 transition-colors duration-200 hover:text-blue-800',
                      to: '/profile',
                      children: 'My Profile',
                    }),
                  }),
                  y.jsx('li', {
                    className: 'mt-2',
                    children: y.jsx('button', {
                      onClick: a,
                      className:
                        'w-full text-left text-red-600 hover:text-red-800',
                      children: 'Log Out',
                    }),
                  }),
                ],
              })
            : y.jsxs(y.Fragment, {
                children: [
                  y.jsx(jh, {
                    itemText: 'Log In',
                    onItemClick: l,
                    modalComponent: y.jsx(QS, {}),
                  }),
                  y.jsx(jh, {
                    itemText: 'Sign Up',
                    onItemClick: l,
                    modalComponent: y.jsx(KS, {}),
                  }),
                ],
              }),
        }),
    ],
  });
}
function qS() {
  return y.jsx('nav', {
    className: 'border-b border-gray-500 bg-white px-4 py-4 shadow-md',
    children: y.jsxs('ul', {
      className: 'flex items-center justify-between',
      children: [
        y.jsxs('li', {
          className: 'flex items-center',
          children: [
            y.jsx('img', {
              src: '/brain_logo.jpg',
              className: 'h-10 w-10 rounded-full',
              alt: 'logo image',
            }),
            y.jsx(sS, {
              to: '/',
              className:
                'ml-2 font-medium text-teal-600 transition-colors duration-200 ease-in-out hover:text-teal-700',
              children: 'Home',
            }),
          ],
        }),
        y.jsx('li', {
          className: 'text-3xl font-cursive',
          children: 'Statistically Speaking',
        }),
        y.jsx('li', { children: y.jsx(XS, {}) }),
      ],
    }),
  });
}
const yg = S.createContext(),
  Sf = () => S.useContext(yg),
  GS = ({ children: e }) => {
    const [t, n] = S.useState(null),
      r = i => {
        n({ message: i, id: Date.now() }),
          setTimeout(() => {
            n(null);
          }, 2e3);
      };
    return y.jsx(yg.Provider, {
      value: { toast: t, addToast: r },
      children: e,
    });
  };
function ZS() {
  const { toast: e } = Sf(),
    [t, n] = S.useState(!1);
  return (
    S.useEffect(() => {
      if (e) {
        n(!0);
        const r = setTimeout(() => {
          n(!1);
        }, 1500);
        return () => clearTimeout(r);
      }
    }, [e]),
    e ?
      y.jsx('div', {
        className: `fixed bottom-4 right-4 transition-all duration-500 ease-in-out transform ${t ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`,
        children: y.jsx('div', {
          className: 'rounded-sm bg-green-800 px-2 py-1 text-white shadow-lg',
          children: e.message,
        }),
      })
    : null
  );
}
function JS() {
  const e = Ka(),
    [t, n] = S.useState(!1);
  return (
    S.useEffect(() => {
      e(MS()).then(() => n(!0));
    }, [e]),
    y.jsx(y.Fragment, {
      children: y.jsx(GS, {
        children: y.jsxs(bS, {
          children: [
            y.jsx(qS, {}),
            t && y.jsx(Ux, {}),
            y.jsx(FS, {}),
            y.jsx(ZS, {}),
          ],
        }),
      }),
    })
  );
}
function vg(e) {
  return di({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z',
        },
        child: [],
      },
    ],
  })(e);
}
function wg() {
  return y.jsxs('div', {
    className: 'mt-32 flex flex-col items-center',
    children: [
      y.jsx('img', {
        src: '/facepalm.png',
        alt: 'blue facepalming smiley',
        className: 'h-1/6 w-1/6',
      }),
      y.jsx('h1', { className: 'text-red-600 font-3xl', children: '404' }),
      y.jsx('h2', { children: "Uh oh! We couldn't find that..." }),
      y.jsxs(Kt, {
        to: '/',
        className:
          'flex items-center justify-center gap-1 text-lg font-semibold text-blue-600 hover:underline',
        children: [y.jsx(vg, { className: 'h-6 w-6' }), 'Go Back'],
      }),
    ],
  });
}
function e2() {
  const e = ig();
  return (
    console.error('ERROR:', e),
    y.jsxs('div', {
      className: 'mt-44 flex flex-col items-center',
      children: [
        y.jsx('img', {
          src: '/thisisfine.gif',
          alt: 'animated dog in burning room',
          className: 'h-1/6 w-1/6 rounded',
        }),
        y.jsx('h1', { className: 'mt-8 text-red-600', children: 'Yikes!' }),
        y.jsx('h2', { className: 'mt-1', children: 'You broke it...' }),
        y.jsxs(Kt, {
          to: '/',
          className:
            'flex items-center justify-center gap-1 text-lg font-semibold text-blue-600 hover:underline',
          children: [y.jsx(vg, { className: 'h-6 w-6' }), 'Go Back'],
        }),
      ],
    })
  );
}
function xg({ post: e, fetcher: t, setEditingPostId: n }) {
  const [r, i] = S.useState(e.title),
    [o, l] = S.useState(e.body),
    [a, u] = S.useState(e.graph.type),
    [s, c] = S.useState({}),
    [d, f] = S.useState(!1);
  S.useEffect(() => {
    t.state === 'idle' &&
      t.data &&
      (t.data.message ?
        c({ message: t.data.message })
      : (n(-1), (t.data = void 0)));
  }, [t.data, t.state, n]),
    S.useEffect(() => {
      f(o === '' || r === '');
    }, [o, r]);
  const m = () => {
      const x = {};
      return (
        r.length ?
          r.length < 5 ?
            (x.title = 'Title must be at least 5 characters')
          : r.length > 50 &&
            (x.title = 'Title cannot be more than 50 characters')
        : (x.title = 'Title is required'),
        o.length ?
          o.length < 10 ?
            (x.body = 'Post must be at least 10 characters')
          : o.length > 1500 &&
            (x.body = 'Post cannot be more than 1500 characters')
        : (x.body = 'Post body is required'),
        x
      );
    },
    v = async x => {
      c({});
      const E = m();
      if (Object.keys(E).length > 0) {
        c(E);
        return;
      }
      try {
        await t.submit(
          { id: x, title: r, body: o, graph_type: a },
          { method: 'PUT', action: '/edit' }
        );
      } catch (h) {
        console.error(h),
          c({
            message: h.message || 'An error occurred while creating the post',
          });
      }
    };
  return y.jsxs('div', {
    className: 'flex flex-col gap-4',
    children: [
      y.jsx('input', {
        type: 'text',
        value: r,
        onChange: x => i(x.target.value),
        className: 'rounded-md border border-gray-400 bg-white p-3',
      }),
      s.title &&
        y.jsx('p', {
          className: 'text-sm italic text-red-500',
          children: s.title,
        }),
      y.jsx('textarea', {
        value: o,
        onChange: x => l(x.target.value),
        rows: 5,
        className: 'rounded-md border border-gray-400 bg-white p-3',
      }),
      s.body &&
        y.jsx('p', {
          className: 'text-sm italic text-red-500',
          children: s.body,
        }),
      y.jsxs('label', {
        children: [
          'Graph Type:',
          y.jsxs('select', {
            value: a,
            onChange: x => u(x.target.value),
            className: 'ml-2 rounded-md border border-gray-400 bg-white px-1',
            children: [
              y.jsx('option', { value: 'table', children: 'Table' }),
              y.jsx('option', { value: 'bar', children: 'Bar' }),
              y.jsx('option', { value: 'line', children: 'Line' }),
            ],
          }),
        ],
      }),
      s.message &&
        y.jsx('p', {
          className: 'text-sm italic text-red-500',
          children: s.message,
        }),
      y.jsxs('div', {
        className: 'self-end space-x-3',
        children: [
          y.jsx('button', {
            onClick: () => v(e.id),
            className:
              'btn-save disabled:cursor-not-allowed disabled:opacity-50',
            disabled: d,
            children: 'Save',
          }),
          y.jsx('button', {
            onClick: () => n(-1),
            className: 'btn-delete',
            children: 'Cancel',
          }),
        ],
      }),
    ],
  });
}
function _f({ user: e, post: t }) {
  const n = fi(),
    [r, i] = S.useState(
      t == null ? void 0 : t.saves.some(l => l.userId === e.id)
    );
  S.useEffect(() => {
    n.state === 'idle' &&
      n.data &&
      !n.data.message &&
      i(n.data.some(l => l.userId === e.id));
  }, [n.state, n.data, e.id]);
  const o = async l => {
    l.preventDefault(),
      r ?
        n.submit({ postId: t.id }, { method: 'DELETE', action: '/unsave' })
      : n.submit({ postId: t.id }, { method: 'POST', action: '/save' });
  };
  return y.jsx('div', {
    onClick: l => o(l),
    className: 'flex max-w-fit cursor-pointer',
    children:
      r ?
        y.jsx(VS, {
          className:
            'text-lg text-amber-600 transition-colors duration-200 ease-in-out hover:text-amber-700',
        })
      : y.jsx(YS, {
          className:
            'text-lg text-amber-600 transition-colors duration-200 ease-in-out hover:text-amber-700',
        }),
  });
}
function Cf({ onDelete: e }) {
  const { closeModal: t } = yr();
  return y.jsxs('div', {
    className: 'p-6',
    children: [
      y.jsx('h2', {
        className: 'text-xl font-semibold',
        children: 'Are you sure?',
      }),
      y.jsx('p', {
        className: 'mt-2 font-bold italic',
        children: 'This action cannot be undone!',
      }),
      y.jsxs('div', {
        className: 'mt-4 flex justify-end space-x-4',
        children: [
          y.jsx('button', {
            className:
              'rounded-md bg-gray-300 px-4 py-2 font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-400',
            onClick: t,
            children: 'Cancel',
          }),
          y.jsx('button', {
            className:
              'rounded-md bg-red-500 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-red-600',
            onClick: () => {
              e(), t();
            },
            children: 'Delete',
          }),
        ],
      }),
    ],
  });
}
function t2({ posts: e }) {
  const { addToast: t } = Sf(),
    { setModalContent: n } = yr(),
    r = gr(c => c.session.user),
    i = fi(),
    [o, l] = S.useState(-1);
  S.useEffect(() => {}, [i.data]);
  const a = (c, d) => {
      c.preventDefault(), l(d.id);
    },
    u = c => {
      i.submit({ id: c }, { method: 'DELETE', action: '/delete' }),
        t('Post deleted successfully!');
    },
    s = (c, d) => {
      c.preventDefault(), n(y.jsx(Cf, { onDelete: () => u(d) }));
    };
  return y.jsxs('div', {
    className: 'container',
    children: [
      y.jsx('h2', {
        className: 'text-2xl font-bold',
        children: r ? 'Your Feed' : 'Feed',
      }),
      e.length ?
        e.map(c =>
          y.jsx(
            'div',
            {
              className: 'flex flex-col card',
              children:
                o === c.id ?
                  y.jsx(xg, { setEditingPostId: l, post: c, fetcher: i })
                : y.jsxs(Kt, {
                    className: 'flex flex-col',
                    to: `/post/${c.id}`,
                    children: [
                      y.jsx('div', {
                        className: 'self-end',
                        children:
                          r &&
                          y.jsx(y.Fragment, {
                            children:
                              r.id !== c.user.id ?
                                y.jsx(_f, { post: c, user: r })
                              : y.jsxs('div', {
                                  className: 'self-end space-x-3',
                                  children: [
                                    y.jsx('button', {
                                      onClick: d => a(d, c),
                                      className: 'btn-edit',
                                      children: 'Edit',
                                    }),
                                    y.jsx('button', {
                                      onClick: d => s(d, c.id),
                                      className: 'btn-delete',
                                      children: 'Delete',
                                    }),
                                  ],
                                }),
                          }),
                      }),
                      y.jsx('h3', {
                        className: 'font-bold underline',
                        children: c.title,
                      }),
                      y.jsxs(Kt, {
                        className:
                          'mb-3 w-fit text-sm text-slate-500 hover:text-slate-600 hover:underline',
                        onClick: d => d.stopPropagation(),
                        to:
                          (
                            r &&
                            c.user.username ===
                              (r == null ? void 0 : r.username)
                          ) ?
                            '/profile'
                          : `/user/${c.user.id}`,
                        children: ['by ', c.user.username],
                      }),
                      y.jsx('p', { className: 'text-sm', children: c.body }),
                      y.jsxs('p', {
                        className:
                          'mb-0 self-end text-sm text-slate-500 hover:text-slate-600 hover:underline',
                        children: [c.comments.length, ' comments'],
                      }),
                    ],
                  }),
            },
            c.id
          )
        )
      : y.jsx('h3', {
          className: 'mt-8 text-center',
          children: 'No posts found',
        }),
    ],
  });
}
function n2() {
  const e = gr(E => E.session.user),
    t = fi(),
    [n, r] = S.useState(''),
    [i, o] = S.useState(''),
    [l, a] = S.useState({}),
    [u, s] = S.useState(null),
    [c, d] = S.useState('table'),
    f = S.useRef(null);
  S.useEffect(() => {
    t.data && t.data.message ?
      a(() => ({ ...l, message: t.data.message }))
    : (r(''),
      o(''),
      s(null),
      d('table'),
      a({}),
      f.current && (f.current.value = ''));
  }, [t.data]);
  const m = () => {
      const E = {};
      return (
        n.length ?
          n.length < 5 ?
            (E.title = 'Title must be at least 5 characters')
          : n.length > 100 &&
            (E.title = 'Title cannot be more than 100 characters')
        : (E.title = 'Title is required'),
        i.length ?
          i.length < 20 ?
            (E.body = 'Post must be at least 20 characters')
          : i.length > 1500 &&
            (E.body = 'Post cannot be more than 1500 characters')
        : (E.body = 'Post body is required'),
        u ?
          u.name.endsWith('.csv') || (E.csvFile = 'File must be a CSV')
        : (E.csvFile = 'CSV file is required'),
        E
      );
    },
    v = E => {
      s(E.target.files[0]);
    },
    x = async E => {
      E.preventDefault(), a({});
      const h = m();
      if (Object.keys(h).length > 0) {
        a(h);
        return;
      }
      const p = new FormData();
      p.append('title', n),
        p.append('body', i),
        p.append('csv_file', u),
        p.append('graph_type', c);
      try {
        await t.submit(p, {
          method: 'POST',
          action: '/new',
          encType: 'multipart/form-data',
        });
      } catch (w) {
        console.error(w),
          a({
            message: w.message || 'An error occurred while creating the post',
          });
      }
    };
  return (
    e &&
    y.jsxs('form', {
      method: 'POST',
      onSubmit: x,
      className:
        'container my-6 flex flex-col gap-4 rounded-md bg-white p-4 shadow-md',
      children: [
        y.jsx('input', {
          type: 'text',
          value: n,
          onChange: E => r(E.target.value),
          placeholder: 'Title',
          required: !0,
          className: 'rounded-md border border-gray-400 bg-white p-3',
        }),
        l.title &&
          y.jsx('p', {
            className: 'text-sm italic text-red-500',
            children: l.title,
          }),
        y.jsx('textarea', {
          value: i,
          onChange: E => o(E.target.value),
          placeholder: 'Post',
          rows: 5,
          required: !0,
          className: 'rounded-md border border-gray-400 bg-white p-3',
        }),
        l.body &&
          y.jsx('p', {
            className: 'text-sm italic text-red-500',
            children: l.body,
          }),
        y.jsxs('label', {
          children: [
            'Graph Type:',
            y.jsxs('select', {
              value: c,
              onChange: E => d(E.target.value),
              className: 'ml-2 rounded-md border border-gray-400 bg-white px-1',
              children: [
                y.jsx('option', { value: 'table', children: 'Table' }),
                y.jsx('option', { value: 'bar', children: 'Bar' }),
                y.jsx('option', { value: 'line', children: 'Line' }),
              ],
            }),
          ],
        }),
        y.jsxs('div', {
          className: 'flex flex-col',
          children: [
            y.jsx('input', {
              type: 'file',
              onChange: v,
              accept: '.csv',
              required: !0,
              className: 'rounded-md border border-gray-400 bg-white p-3',
              ref: f,
            }),
            y.jsx('span', {
              className:
                'mt-2 self-center text-xs font-semibold italic text-orange-600',
              children:
                'By uploading your data, you confirm that it has been cleaned and that any discrepancies or errors are solely due to the contents of your file.',
            }),
          ],
        }),
        l.csvFile &&
          y.jsx('p', {
            className: 'text-sm italic text-red-500',
            children: l.csvFile,
          }),
        l.message &&
          y.jsx('p', {
            className: 'text-sm italic text-red-500',
            children: l.message,
          }),
        y.jsx('button', {
          type: 'submit',
          className: 'mt-3 max-w-fit self-end btn',
          children: 'Post',
        }),
      ],
    })
  );
}
function r2() {
  const e = Za();
  return y.jsxs(y.Fragment, {
    children: [y.jsx(n2, {}), y.jsx(t2, { posts: e })],
  });
}
function i2({ data: e }) {
  const t = e.columns,
    n = e.data;
  return y.jsx('div', {
    className: 'mt-8 max-h-96 overflow-auto',
    children: y.jsxs('table', {
      className: 'min-w-full border border-gray-300 bg-white',
      children: [
        y.jsx('thead', {
          children: y.jsx('tr', {
            className: 'bg-gray-100',
            children: t.map((r, i) =>
              y.jsx(
                'th',
                { className: 'border-b px-4 py-2 text-left', children: r },
                i
              )
            ),
          }),
        }),
        y.jsx('tbody', {
          children: n.map((r, i) =>
            y.jsx(
              'tr',
              {
                className: i % 2 === 0 ? 'bg-gray-50' : 'bg-white',
                children: r.map((o, l) =>
                  y.jsx(
                    'td',
                    { className: 'border-b px-4 py-2', children: o },
                    l
                  )
                ),
              },
              i
            )
          ),
        }),
      ],
    }),
  });
}
function wl(e, t) {
  return (
    e == null || t == null ? NaN
    : e < t ? -1
    : e > t ? 1
    : e >= t ? 0
    : NaN
  );
}
function o2(e, t) {
  return (
    e == null || t == null ? NaN
    : t < e ? -1
    : t > e ? 1
    : t >= e ? 0
    : NaN
  );
}
function Ef(e) {
  let t, n, r;
  e.length !== 2 ?
    ((t = wl), (n = (a, u) => wl(e(a), u)), (r = (a, u) => e(a) - u))
  : ((t = e === wl || e === o2 ? e : l2), (n = e), (r = e));
  function i(a, u, s = 0, c = a.length) {
    if (s < c) {
      if (t(u, u) !== 0) return c;
      do {
        const d = (s + c) >>> 1;
        n(a[d], u) < 0 ? (s = d + 1) : (c = d);
      } while (s < c);
    }
    return s;
  }
  function o(a, u, s = 0, c = a.length) {
    if (s < c) {
      if (t(u, u) !== 0) return c;
      do {
        const d = (s + c) >>> 1;
        n(a[d], u) <= 0 ? (s = d + 1) : (c = d);
      } while (s < c);
    }
    return s;
  }
  function l(a, u, s = 0, c = a.length) {
    const d = i(a, u, s, c - 1);
    return d > s && r(a[d - 1], u) > -r(a[d], u) ? d - 1 : d;
  }
  return { left: i, center: l, right: o };
}
function l2() {
  return 0;
}
function a2(e) {
  return e === null ? NaN : +e;
}
const u2 = Ef(wl),
  s2 = u2.right;
Ef(a2).center;
const c2 = s2;
function f2(e, t) {
  let n, r;
  if (t === void 0)
    for (const i of e)
      i != null &&
        (n === void 0 ?
          i >= i && (n = r = i)
        : (n > i && (n = i), r < i && (r = i)));
  else {
    let i = -1;
    for (let o of e)
      (o = t(o, ++i, e)) != null &&
        (n === void 0 ?
          o >= o && (n = r = o)
        : (n > o && (n = o), r < o && (r = o)));
  }
  return [n, r];
}
class Dh extends Map {
  constructor(t, n = p2) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: n },
      }),
      t != null)
    )
      for (const [r, i] of t) this.set(r, i);
  }
  get(t) {
    return super.get(Lh(this, t));
  }
  has(t) {
    return super.has(Lh(this, t));
  }
  set(t, n) {
    return super.set(d2(this, t), n);
  }
  delete(t) {
    return super.delete(h2(this, t));
  }
}
function Lh({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function d2({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function h2({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) && ((n = e.get(r)), e.delete(r)), n;
}
function p2(e) {
  return e !== null && typeof e == 'object' ? e.valueOf() : e;
}
const m2 = Math.sqrt(50),
  g2 = Math.sqrt(10),
  y2 = Math.sqrt(2);
function Gl(e, t, n) {
  const r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    o = r / Math.pow(10, i),
    l =
      o >= m2 ? 10
      : o >= g2 ? 5
      : o >= y2 ? 2
      : 1;
  let a, u, s;
  return (
    i < 0 ?
      ((s = Math.pow(10, -i) / l),
      (a = Math.round(e * s)),
      (u = Math.round(t * s)),
      a / s < e && ++a,
      u / s > t && --u,
      (s = -s))
    : ((s = Math.pow(10, i) * l),
      (a = Math.round(e / s)),
      (u = Math.round(t / s)),
      a * s < e && ++a,
      u * s > t && --u),
    u < a && 0.5 <= n && n < 2 ? Gl(e, t, n * 2) : [a, u, s]
  );
}
function v2(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  const r = t < e,
    [i, o, l] = r ? Gl(t, e, n) : Gl(e, t, n);
  if (!(o >= i)) return [];
  const a = o - i + 1,
    u = new Array(a);
  if (r)
    if (l < 0) for (let s = 0; s < a; ++s) u[s] = (o - s) / -l;
    else for (let s = 0; s < a; ++s) u[s] = (o - s) * l;
  else if (l < 0) for (let s = 0; s < a; ++s) u[s] = (i + s) / -l;
  else for (let s = 0; s < a; ++s) u[s] = (i + s) * l;
  return u;
}
function Js(e, t, n) {
  return (t = +t), (e = +e), (n = +n), Gl(e, t, n)[2];
}
function ec(e, t, n) {
  (t = +t), (e = +e), (n = +n);
  const r = t < e,
    i = r ? Js(t, e, n) : Js(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Sg(e, t) {
  let n;
  if (t === void 0)
    for (const r of e)
      r != null && (n < r || (n === void 0 && r >= r)) && (n = r);
  else {
    let r = -1;
    for (let i of e)
      (i = t(i, ++r, e)) != null &&
        (n < i || (n === void 0 && i >= i)) &&
        (n = i);
  }
  return n;
}
function w2(e, t, n) {
  (e = +e),
    (t = +t),
    (n =
      (i = arguments.length) < 2 ? ((t = e), (e = 0), 1)
      : i < 3 ? 1
      : +n);
  for (
    var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(i);
    ++r < i;

  )
    o[r] = e + r * n;
  return o;
}
function x2(e) {
  return e;
}
var Wu = 1,
  Yu = 2,
  tc = 3,
  Oi = 4,
  $h = 1e-6;
function S2(e) {
  return 'translate(' + e + ',0)';
}
function _2(e) {
  return 'translate(0,' + e + ')';
}
function C2(e) {
  return t => +e(t);
}
function E2(e, t) {
  return (
    (t = Math.max(0, e.bandwidth() - t * 2) / 2),
    e.round() && (t = Math.round(t)),
    n => +e(n) + t
  );
}
function k2() {
  return !this.__axis;
}
function _g(e, t) {
  var n = [],
    r = null,
    i = null,
    o = 6,
    l = 6,
    a = 3,
    u = typeof window < 'u' && window.devicePixelRatio > 1 ? 0 : 0.5,
    s = e === Wu || e === Oi ? -1 : 1,
    c = e === Oi || e === Yu ? 'x' : 'y',
    d = e === Wu || e === tc ? S2 : _2;
  function f(m) {
    var v = r ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()),
      x = i ?? (t.tickFormat ? t.tickFormat.apply(t, n) : x2),
      E = Math.max(o, 0) + a,
      h = t.range(),
      p = +h[0] + u,
      w = +h[h.length - 1] + u,
      g = (t.bandwidth ? E2 : C2)(t.copy(), u),
      k = m.selection ? m.selection() : m,
      _ = k.selectAll('.domain').data([null]),
      T = k.selectAll('.tick').data(v, t).order(),
      j = T.exit(),
      I = T.enter().append('g').attr('class', 'tick'),
      U = T.select('line'),
      b = T.select('text');
    (_ = _.merge(
      _.enter()
        .insert('path', '.tick')
        .attr('class', 'domain')
        .attr('stroke', 'currentColor')
    )),
      (T = T.merge(I)),
      (U = U.merge(
        I.append('line')
          .attr('stroke', 'currentColor')
          .attr(c + '2', s * o)
      )),
      (b = b.merge(
        I.append('text')
          .attr('fill', 'currentColor')
          .attr(c, s * E)
          .attr(
            'dy',
            e === Wu ? '0em'
            : e === tc ? '0.71em'
            : '0.32em'
          )
      )),
      m !== k &&
        ((_ = _.transition(m)),
        (T = T.transition(m)),
        (U = U.transition(m)),
        (b = b.transition(m)),
        (j = j
          .transition(m)
          .attr('opacity', $h)
          .attr('transform', function (q) {
            return isFinite((q = g(q))) ?
                d(q + u)
              : this.getAttribute('transform');
          })),
        I.attr('opacity', $h).attr('transform', function (q) {
          var Q = this.parentNode.__axis;
          return d((Q && isFinite((Q = Q(q))) ? Q : g(q)) + u);
        })),
      j.remove(),
      _.attr(
        'd',
        e === Oi || e === Yu ?
          l ? 'M' + s * l + ',' + p + 'H' + u + 'V' + w + 'H' + s * l
          : 'M' + u + ',' + p + 'V' + w
        : l ? 'M' + p + ',' + s * l + 'V' + u + 'H' + w + 'V' + s * l
        : 'M' + p + ',' + u + 'H' + w
      ),
      T.attr('opacity', 1).attr('transform', function (q) {
        return d(g(q) + u);
      }),
      U.attr(c + '2', s * o),
      b.attr(c, s * E).text(x),
      k
        .filter(k2)
        .attr('fill', 'none')
        .attr('font-size', 10)
        .attr('font-family', 'sans-serif')
        .attr(
          'text-anchor',
          e === Yu ? 'start'
          : e === Oi ? 'end'
          : 'middle'
        ),
      k.each(function () {
        this.__axis = g;
      });
  }
  return (
    (f.scale = function (m) {
      return arguments.length ? ((t = m), f) : t;
    }),
    (f.ticks = function () {
      return (n = Array.from(arguments)), f;
    }),
    (f.tickArguments = function (m) {
      return arguments.length ?
          ((n = m == null ? [] : Array.from(m)), f)
        : n.slice();
    }),
    (f.tickValues = function (m) {
      return arguments.length ?
          ((r = m == null ? null : Array.from(m)), f)
        : r && r.slice();
    }),
    (f.tickFormat = function (m) {
      return arguments.length ? ((i = m), f) : i;
    }),
    (f.tickSize = function (m) {
      return arguments.length ? ((o = l = +m), f) : o;
    }),
    (f.tickSizeInner = function (m) {
      return arguments.length ? ((o = +m), f) : o;
    }),
    (f.tickSizeOuter = function (m) {
      return arguments.length ? ((l = +m), f) : l;
    }),
    (f.tickPadding = function (m) {
      return arguments.length ? ((a = +m), f) : a;
    }),
    (f.offset = function (m) {
      return arguments.length ? ((u = +m), f) : u;
    }),
    f
  );
}
function Cg(e) {
  return _g(tc, e);
}
function Eg(e) {
  return _g(Oi, e);
}
var N2 = { value: () => {} };
function kg() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + '') || r in n || /[\s.]/.test(r))
      throw new Error('illegal type: ' + r);
    n[r] = [];
  }
  return new xl(n);
}
function xl(e) {
  this._ = e;
}
function T2(e, t) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (n) {
      var r = '',
        i = n.indexOf('.');
      if (
        (i >= 0 && ((r = n.slice(i + 1)), (n = n.slice(0, i))),
        n && !t.hasOwnProperty(n))
      )
        throw new Error('unknown type: ' + n);
      return { type: n, name: r };
    });
}
xl.prototype = kg.prototype = {
  constructor: xl,
  on: function (e, t) {
    var n = this._,
      r = T2(e + '', n),
      i,
      o = -1,
      l = r.length;
    if (arguments.length < 2) {
      for (; ++o < l; )
        if ((i = (e = r[o]).type) && (i = M2(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != 'function')
      throw new Error('invalid callback: ' + t);
    for (; ++o < l; )
      if ((i = (e = r[o]).type)) n[i] = bh(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = bh(n[i], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new xl(e);
  },
  call: function (e, t) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, o; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e);
    for (o = this._[e], r = 0, i = o.length; r < i; ++r) o[r].value.apply(t, n);
  },
  apply: function (e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e);
    for (var r = this._[e], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(t, n);
  },
};
function M2(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n)
    if ((i = e[n]).name === t) return i.value;
}
function bh(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      (e[r] = N2), (e = e.slice(0, r).concat(e.slice(r + 1)));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var nc = 'http://www.w3.org/1999/xhtml';
const Fh = {
  svg: 'http://www.w3.org/2000/svg',
  xhtml: nc,
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xmlns: 'http://www.w3.org/2000/xmlns/',
};
function eu(e) {
  var t = (e += ''),
    n = t.indexOf(':');
  return (
    n >= 0 && (t = e.slice(0, n)) !== 'xmlns' && (e = e.slice(n + 1)),
    Fh.hasOwnProperty(t) ? { space: Fh[t], local: e } : e
  );
}
function P2(e) {
  return function () {
    var t = this.ownerDocument,
      n = this.namespaceURI;
    return n === nc && t.documentElement.namespaceURI === nc ?
        t.createElement(e)
      : t.createElementNS(n, e);
  };
}
function R2(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ng(e) {
  var t = eu(e);
  return (t.local ? R2 : P2)(t);
}
function j2() {}
function kf(e) {
  return e == null ? j2 : (
      function () {
        return this.querySelector(e);
      }
    );
}
function D2(e) {
  typeof e != 'function' && (e = kf(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (
      var o = t[i], l = o.length, a = (r[i] = new Array(l)), u, s, c = 0;
      c < l;
      ++c
    )
      (u = o[c]) &&
        (s = e.call(u, u.__data__, c, o)) &&
        ('__data__' in u && (s.__data__ = u.__data__), (a[c] = s));
  return new ft(r, this._parents);
}
function L2(e) {
  return (
    e == null ? []
    : Array.isArray(e) ? e
    : Array.from(e)
  );
}
function $2() {
  return [];
}
function Tg(e) {
  return e == null ? $2 : (
      function () {
        return this.querySelectorAll(e);
      }
    );
}
function b2(e) {
  return function () {
    return L2(e.apply(this, arguments));
  };
}
function F2(e) {
  typeof e == 'function' ? (e = b2(e)) : (e = Tg(e));
  for (var t = this._groups, n = t.length, r = [], i = [], o = 0; o < n; ++o)
    for (var l = t[o], a = l.length, u, s = 0; s < a; ++s)
      (u = l[s]) && (r.push(e.call(u, u.__data__, s, l)), i.push(u));
  return new ft(r, i);
}
function Mg(e) {
  return function () {
    return this.matches(e);
  };
}
function Pg(e) {
  return function (t) {
    return t.matches(e);
  };
}
var O2 = Array.prototype.find;
function U2(e) {
  return function () {
    return O2.call(this.children, e);
  };
}
function I2() {
  return this.firstElementChild;
}
function A2(e) {
  return this.select(e == null ? I2 : U2(typeof e == 'function' ? e : Pg(e)));
}
var z2 = Array.prototype.filter;
function B2() {
  return Array.from(this.children);
}
function H2(e) {
  return function () {
    return z2.call(this.children, e);
  };
}
function V2(e) {
  return this.selectAll(
    e == null ? B2 : H2(typeof e == 'function' ? e : Pg(e))
  );
}
function W2(e) {
  typeof e != 'function' && (e = Mg(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = t[i], l = o.length, a = (r[i] = []), u, s = 0; s < l; ++s)
      (u = o[s]) && e.call(u, u.__data__, s, o) && a.push(u);
  return new ft(r, this._parents);
}
function Rg(e) {
  return new Array(e.length);
}
function Y2() {
  return new ft(this._enter || this._groups.map(Rg), this._parents);
}
function Zl(e, t) {
  (this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = t);
}
Zl.prototype = {
  constructor: Zl,
  appendChild: function (e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function (e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function (e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function (e) {
    return this._parent.querySelectorAll(e);
  },
};
function Q2(e) {
  return function () {
    return e;
  };
}
function K2(e, t, n, r, i, o) {
  for (var l = 0, a, u = t.length, s = o.length; l < s; ++l)
    (a = t[l]) ? ((a.__data__ = o[l]), (r[l] = a)) : (n[l] = new Zl(e, o[l]));
  for (; l < u; ++l) (a = t[l]) && (i[l] = a);
}
function X2(e, t, n, r, i, o, l) {
  var a,
    u,
    s = new Map(),
    c = t.length,
    d = o.length,
    f = new Array(c),
    m;
  for (a = 0; a < c; ++a)
    (u = t[a]) &&
      ((f[a] = m = l.call(u, u.__data__, a, t) + ''),
      s.has(m) ? (i[a] = u) : s.set(m, u));
  for (a = 0; a < d; ++a)
    (m = l.call(e, o[a], a, o) + ''),
      (u = s.get(m)) ?
        ((r[a] = u), (u.__data__ = o[a]), s.delete(m))
      : (n[a] = new Zl(e, o[a]));
  for (a = 0; a < c; ++a) (u = t[a]) && s.get(f[a]) === u && (i[a] = u);
}
function q2(e) {
  return e.__data__;
}
function G2(e, t) {
  if (!arguments.length) return Array.from(this, q2);
  var n = t ? X2 : K2,
    r = this._parents,
    i = this._groups;
  typeof e != 'function' && (e = Q2(e));
  for (
    var o = i.length,
      l = new Array(o),
      a = new Array(o),
      u = new Array(o),
      s = 0;
    s < o;
    ++s
  ) {
    var c = r[s],
      d = i[s],
      f = d.length,
      m = Z2(e.call(c, c && c.__data__, s, r)),
      v = m.length,
      x = (a[s] = new Array(v)),
      E = (l[s] = new Array(v)),
      h = (u[s] = new Array(f));
    n(c, d, x, E, h, m, t);
    for (var p = 0, w = 0, g, k; p < v; ++p)
      if ((g = x[p])) {
        for (p >= w && (w = p + 1); !(k = E[w]) && ++w < v; );
        g._next = k || null;
      }
  }
  return (l = new ft(l, r)), (l._enter = a), (l._exit = u), l;
}
function Z2(e) {
  return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function J2() {
  return new ft(this._exit || this._groups.map(Rg), this._parents);
}
function e_(e, t, n) {
  var r = this.enter(),
    i = this,
    o = this.exit();
  return (
    typeof e == 'function' ?
      ((r = e(r)), r && (r = r.selection()))
    : (r = r.append(e + '')),
    t != null && ((i = t(i)), i && (i = i.selection())),
    n == null ? o.remove() : n(o),
    r && i ? r.merge(i).order() : i
  );
}
function t_(e) {
  for (
    var t = e.selection ? e.selection() : e,
      n = this._groups,
      r = t._groups,
      i = n.length,
      o = r.length,
      l = Math.min(i, o),
      a = new Array(i),
      u = 0;
    u < l;
    ++u
  )
    for (
      var s = n[u], c = r[u], d = s.length, f = (a[u] = new Array(d)), m, v = 0;
      v < d;
      ++v
    )
      (m = s[v] || c[v]) && (f[v] = m);
  for (; u < i; ++u) a[u] = n[u];
  return new ft(a, this._parents);
}
function n_() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, o = r[i], l; --i >= 0; )
      (l = r[i]) &&
        (o &&
          l.compareDocumentPosition(o) ^ 4 &&
          o.parentNode.insertBefore(l, o),
        (o = l));
  return this;
}
function r_(e) {
  e || (e = i_);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (
    var n = this._groups, r = n.length, i = new Array(r), o = 0;
    o < r;
    ++o
  ) {
    for (
      var l = n[o], a = l.length, u = (i[o] = new Array(a)), s, c = 0;
      c < a;
      ++c
    )
      (s = l[c]) && (u[c] = s);
    u.sort(t);
  }
  return new ft(i, this._parents).order();
}
function i_(e, t) {
  return (
    e < t ? -1
    : e > t ? 1
    : e >= t ? 0
    : NaN
  );
}
function o_() {
  var e = arguments[0];
  return (arguments[0] = this), e.apply(null, arguments), this;
}
function l_() {
  return Array.from(this);
}
function a_() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, o = r.length; i < o; ++i) {
      var l = r[i];
      if (l) return l;
    }
  return null;
}
function u_() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function s_() {
  return !this.node();
}
function c_(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], o = 0, l = i.length, a; o < l; ++o)
      (a = i[o]) && e.call(a, a.__data__, o, i);
  return this;
}
function f_(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function d_(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function h_(e, t) {
  return function () {
    this.setAttribute(e, t);
  };
}
function p_(e, t) {
  return function () {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function m_(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function g_(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ?
      this.removeAttributeNS(e.space, e.local)
    : this.setAttributeNS(e.space, e.local, n);
  };
}
function y_(e, t) {
  var n = eu(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each(
    (t == null ?
      n.local ?
        d_
      : f_
    : typeof t == 'function' ?
      n.local ?
        g_
      : m_
    : n.local ? p_
    : h_)(n, t)
  );
}
function jg(e) {
  return (
    (e.ownerDocument && e.ownerDocument.defaultView) ||
    (e.document && e) ||
    e.defaultView
  );
}
function v_(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function w_(e, t, n) {
  return function () {
    this.style.setProperty(e, t, n);
  };
}
function x_(e, t, n) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function S_(e, t, n) {
  return arguments.length > 1 ?
      this.each(
        (t == null ? v_
        : typeof t == 'function' ? x_
        : w_)(e, t, n ?? '')
      )
    : ni(this.node(), e);
}
function ni(e, t) {
  return (
    e.style.getPropertyValue(t) ||
    jg(e).getComputedStyle(e, null).getPropertyValue(t)
  );
}
function __(e) {
  return function () {
    delete this[e];
  };
}
function C_(e, t) {
  return function () {
    this[e] = t;
  };
}
function E_(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : (this[e] = n);
  };
}
function k_(e, t) {
  return arguments.length > 1 ?
      this.each(
        (t == null ? __
        : typeof t == 'function' ? E_
        : C_)(e, t)
      )
    : this.node()[e];
}
function Dg(e) {
  return e.trim().split(/^|\s+/);
}
function Nf(e) {
  return e.classList || new Lg(e);
}
function Lg(e) {
  (this._node = e), (this._names = Dg(e.getAttribute('class') || ''));
}
Lg.prototype = {
  add: function (e) {
    var t = this._names.indexOf(e);
    t < 0 &&
      (this._names.push(e),
      this._node.setAttribute('class', this._names.join(' ')));
  },
  remove: function (e) {
    var t = this._names.indexOf(e);
    t >= 0 &&
      (this._names.splice(t, 1),
      this._node.setAttribute('class', this._names.join(' ')));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function $g(e, t) {
  for (var n = Nf(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
}
function bg(e, t) {
  for (var n = Nf(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
}
function N_(e) {
  return function () {
    $g(this, e);
  };
}
function T_(e) {
  return function () {
    bg(this, e);
  };
}
function M_(e, t) {
  return function () {
    (t.apply(this, arguments) ? $g : bg)(this, e);
  };
}
function P_(e, t) {
  var n = Dg(e + '');
  if (arguments.length < 2) {
    for (var r = Nf(this.node()), i = -1, o = n.length; ++i < o; )
      if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each(
    (typeof t == 'function' ? M_
    : t ? N_
    : T_)(n, t)
  );
}
function R_() {
  this.textContent = '';
}
function j_(e) {
  return function () {
    this.textContent = e;
  };
}
function D_(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.textContent = t ?? '';
  };
}
function L_(e) {
  return arguments.length ?
      this.each(e == null ? R_ : (typeof e == 'function' ? D_ : j_)(e))
    : this.node().textContent;
}
function $_() {
  this.innerHTML = '';
}
function b_(e) {
  return function () {
    this.innerHTML = e;
  };
}
function F_(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? '';
  };
}
function O_(e) {
  return arguments.length ?
      this.each(e == null ? $_ : (typeof e == 'function' ? F_ : b_)(e))
    : this.node().innerHTML;
}
function U_() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function I_() {
  return this.each(U_);
}
function A_() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function z_() {
  return this.each(A_);
}
function B_(e) {
  var t = typeof e == 'function' ? e : Ng(e);
  return this.select(function () {
    return this.appendChild(t.apply(this, arguments));
  });
}
function H_() {
  return null;
}
function V_(e, t) {
  var n = typeof e == 'function' ? e : Ng(e),
    r =
      t == null ? H_
      : typeof t == 'function' ? t
      : kf(t);
  return this.select(function () {
    return this.insertBefore(
      n.apply(this, arguments),
      r.apply(this, arguments) || null
    );
  });
}
function W_() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Y_() {
  return this.each(W_);
}
function Q_() {
  var e = this.cloneNode(!1),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function K_() {
  var e = this.cloneNode(!0),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function X_(e) {
  return this.select(e ? K_ : Q_);
}
function q_(e) {
  return arguments.length ? this.property('__data__', e) : this.node().__data__;
}
function G_(e) {
  return function (t) {
    e.call(this, t, this.__data__);
  };
}
function Z_(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (t) {
      var n = '',
        r = t.indexOf('.');
      return (
        r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))),
        { type: t, name: n }
      );
    });
}
function J_(e) {
  return function () {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, i = t.length, o; n < i; ++n)
        (o = t[n]),
          (!e.type || o.type === e.type) && o.name === e.name ?
            this.removeEventListener(o.type, o.listener, o.options)
          : (t[++r] = o);
      ++r ? (t.length = r) : delete this.__on;
    }
  };
}
function eC(e, t, n) {
  return function () {
    var r = this.__on,
      i,
      o = G_(t);
    if (r) {
      for (var l = 0, a = r.length; l < a; ++l)
        if ((i = r[l]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options),
            this.addEventListener(i.type, (i.listener = o), (i.options = n)),
            (i.value = t);
          return;
        }
    }
    this.addEventListener(e.type, o, n),
      (i = { type: e.type, name: e.name, value: t, listener: o, options: n }),
      r ? r.push(i) : (this.__on = [i]);
  };
}
function tC(e, t, n) {
  var r = Z_(e + ''),
    i,
    o = r.length,
    l;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var u = 0, s = a.length, c; u < s; ++u)
        for (i = 0, c = a[u]; i < o; ++i)
          if ((l = r[i]).type === c.type && l.name === c.name) return c.value;
    }
    return;
  }
  for (a = t ? eC : J_, i = 0; i < o; ++i) this.each(a(r[i], t, n));
  return this;
}
function Fg(e, t, n) {
  var r = jg(e),
    i = r.CustomEvent;
  typeof i == 'function' ?
    (i = new i(t, n))
  : ((i = r.document.createEvent('Event')),
    n ?
      (i.initEvent(t, n.bubbles, n.cancelable), (i.detail = n.detail))
    : i.initEvent(t, !1, !1)),
    e.dispatchEvent(i);
}
function nC(e, t) {
  return function () {
    return Fg(this, e, t);
  };
}
function rC(e, t) {
  return function () {
    return Fg(this, e, t.apply(this, arguments));
  };
}
function iC(e, t) {
  return this.each((typeof t == 'function' ? rC : nC)(e, t));
}
function* oC() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, o = r.length, l; i < o; ++i)
      (l = r[i]) && (yield l);
}
var Og = [null];
function ft(e, t) {
  (this._groups = e), (this._parents = t);
}
function jo() {
  return new ft([[document.documentElement]], Og);
}
function lC() {
  return this;
}
ft.prototype = jo.prototype = {
  constructor: ft,
  select: D2,
  selectAll: F2,
  selectChild: A2,
  selectChildren: V2,
  filter: W2,
  data: G2,
  enter: Y2,
  exit: J2,
  join: e_,
  merge: t_,
  selection: lC,
  order: n_,
  sort: r_,
  call: o_,
  nodes: l_,
  node: a_,
  size: u_,
  empty: s_,
  each: c_,
  attr: y_,
  style: S_,
  property: k_,
  classed: P_,
  text: L_,
  html: O_,
  raise: I_,
  lower: z_,
  append: B_,
  insert: V_,
  remove: Y_,
  clone: X_,
  datum: q_,
  on: tC,
  dispatch: iC,
  [Symbol.iterator]: oC,
};
function Xn(e) {
  return typeof e == 'string' ?
      new ft([[document.querySelector(e)]], [document.documentElement])
    : new ft([[e]], Og);
}
function Tf(e, t, n) {
  (e.prototype = t.prototype = n), (n.constructor = e);
}
function Ug(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Do() {}
var wo = 0.7,
  Jl = 1 / wo,
  Qr = '\\s*([+-]?\\d+)\\s*',
  xo = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  Yt = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  aC = /^#([0-9a-f]{3,8})$/,
  uC = new RegExp(`^rgb\\(${Qr},${Qr},${Qr}\\)$`),
  sC = new RegExp(`^rgb\\(${Yt},${Yt},${Yt}\\)$`),
  cC = new RegExp(`^rgba\\(${Qr},${Qr},${Qr},${xo}\\)$`),
  fC = new RegExp(`^rgba\\(${Yt},${Yt},${Yt},${xo}\\)$`),
  dC = new RegExp(`^hsl\\(${xo},${Yt},${Yt}\\)$`),
  hC = new RegExp(`^hsla\\(${xo},${Yt},${Yt},${xo}\\)$`),
  Oh = {
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
    rebeccapurple: 6697881,
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
    yellowgreen: 10145074,
  };
Tf(Do, fr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Uh,
  formatHex: Uh,
  formatHex8: pC,
  formatHsl: mC,
  formatRgb: Ih,
  toString: Ih,
});
function Uh() {
  return this.rgb().formatHex();
}
function pC() {
  return this.rgb().formatHex8();
}
function mC() {
  return Ig(this).formatHsl();
}
function Ih() {
  return this.rgb().formatRgb();
}
function fr(e) {
  var t, n;
  return (
    (e = (e + '').trim().toLowerCase()),
    (t = aC.exec(e)) ?
      ((n = t[1].length),
      (t = parseInt(t[1], 16)),
      n === 6 ? Ah(t)
      : n === 3 ?
        new rt(
          ((t >> 8) & 15) | ((t >> 4) & 240),
          ((t >> 4) & 15) | (t & 240),
          ((t & 15) << 4) | (t & 15),
          1
        )
      : n === 8 ?
        nl((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
      : n === 4 ?
        nl(
          ((t >> 12) & 15) | ((t >> 8) & 240),
          ((t >> 8) & 15) | ((t >> 4) & 240),
          ((t >> 4) & 15) | (t & 240),
          (((t & 15) << 4) | (t & 15)) / 255
        )
      : null)
    : (t = uC.exec(e)) ? new rt(t[1], t[2], t[3], 1)
    : (t = sC.exec(e)) ?
      new rt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
    : (t = cC.exec(e)) ? nl(t[1], t[2], t[3], t[4])
    : (t = fC.exec(e)) ?
      nl((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
    : (t = dC.exec(e)) ? Hh(t[1], t[2] / 100, t[3] / 100, 1)
    : (t = hC.exec(e)) ? Hh(t[1], t[2] / 100, t[3] / 100, t[4])
    : Oh.hasOwnProperty(e) ? Ah(Oh[e])
    : e === 'transparent' ? new rt(NaN, NaN, NaN, 0)
    : null
  );
}
function Ah(e) {
  return new rt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function nl(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new rt(e, t, n, r);
}
function gC(e) {
  return (
    e instanceof Do || (e = fr(e)),
    e ? ((e = e.rgb()), new rt(e.r, e.g, e.b, e.opacity)) : new rt()
  );
}
function rc(e, t, n, r) {
  return arguments.length === 1 ? gC(e) : new rt(e, t, n, r ?? 1);
}
function rt(e, t, n, r) {
  (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
}
Tf(
  rt,
  rc,
  Ug(Do, {
    brighter(e) {
      return (
        (e = e == null ? Jl : Math.pow(Jl, e)),
        new rt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? wo : Math.pow(wo, e)),
        new rt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new rt(rr(this.r), rr(this.g), rr(this.b), ea(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: zh,
    formatHex: zh,
    formatHex8: yC,
    formatRgb: Bh,
    toString: Bh,
  })
);
function zh() {
  return `#${er(this.r)}${er(this.g)}${er(this.b)}`;
}
function yC() {
  return `#${er(this.r)}${er(this.g)}${er(this.b)}${er((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Bh() {
  const e = ea(this.opacity);
  return `${e === 1 ? 'rgb(' : 'rgba('}${rr(this.r)}, ${rr(this.g)}, ${rr(this.b)}${e === 1 ? ')' : `, ${e})`}`;
}
function ea(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function rr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function er(e) {
  return (e = rr(e)), (e < 16 ? '0' : '') + e.toString(16);
}
function Hh(e, t, n, r) {
  return (
    r <= 0 ? (e = t = n = NaN)
    : n <= 0 || n >= 1 ? (e = t = NaN)
    : t <= 0 && (e = NaN),
    new Lt(e, t, n, r)
  );
}
function Ig(e) {
  if (e instanceof Lt) return new Lt(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Do || (e = fr(e)), !e)) return new Lt();
  if (e instanceof Lt) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    i = Math.min(t, n, r),
    o = Math.max(t, n, r),
    l = NaN,
    a = o - i,
    u = (o + i) / 2;
  return (
    a ?
      (t === o ? (l = (n - r) / a + (n < r) * 6)
      : n === o ? (l = (r - t) / a + 2)
      : (l = (t - n) / a + 4),
      (a /= u < 0.5 ? o + i : 2 - o - i),
      (l *= 60))
    : (a = u > 0 && u < 1 ? 0 : l),
    new Lt(l, a, u, e.opacity)
  );
}
function vC(e, t, n, r) {
  return arguments.length === 1 ? Ig(e) : new Lt(e, t, n, r ?? 1);
}
function Lt(e, t, n, r) {
  (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
}
Tf(
  Lt,
  vC,
  Ug(Do, {
    brighter(e) {
      return (
        (e = e == null ? Jl : Math.pow(Jl, e)),
        new Lt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? wo : Math.pow(wo, e)),
        new Lt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new rt(
        Qu(e >= 240 ? e - 240 : e + 120, i, r),
        Qu(e, i, r),
        Qu(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity
      );
    },
    clamp() {
      return new Lt(Vh(this.h), rl(this.s), rl(this.l), ea(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = ea(this.opacity);
      return `${e === 1 ? 'hsl(' : 'hsla('}${Vh(this.h)}, ${rl(this.s) * 100}%, ${rl(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`;
    },
  })
);
function Vh(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function rl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Qu(e, t, n) {
  return (
    (e < 60 ? t + ((n - t) * e) / 60
    : e < 180 ? n
    : e < 240 ? t + ((n - t) * (240 - e)) / 60
    : t) * 255
  );
}
const Mf = e => () => e;
function wC(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function xC(e, t, n) {
  return (
    (e = Math.pow(e, n)),
    (t = Math.pow(t, n) - e),
    (n = 1 / n),
    function (r) {
      return Math.pow(e + r * t, n);
    }
  );
}
function SC(e) {
  return (e = +e) == 1 ?
      Ag
    : function (t, n) {
        return n - t ? xC(t, n, e) : Mf(isNaN(t) ? n : t);
      };
}
function Ag(e, t) {
  var n = t - e;
  return n ? wC(e, n) : Mf(isNaN(e) ? t : e);
}
const ta = (function e(t) {
  var n = SC(t);
  function r(i, o) {
    var l = n((i = rc(i)).r, (o = rc(o)).r),
      a = n(i.g, o.g),
      u = n(i.b, o.b),
      s = Ag(i.opacity, o.opacity);
    return function (c) {
      return (
        (i.r = l(c)), (i.g = a(c)), (i.b = u(c)), (i.opacity = s(c)), i + ''
      );
    };
  }
  return (r.gamma = e), r;
})(1);
function _C(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (o) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - o) + t[i] * o;
    return r;
  };
}
function CC(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function EC(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    i = new Array(r),
    o = new Array(n),
    l;
  for (l = 0; l < r; ++l) i[l] = Pf(e[l], t[l]);
  for (; l < n; ++l) o[l] = t[l];
  return function (a) {
    for (l = 0; l < r; ++l) o[l] = i[l](a);
    return o;
  };
}
function kC(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return n.setTime(e * (1 - r) + t * r), n;
    }
  );
}
function Dt(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function NC(e, t) {
  var n = {},
    r = {},
    i;
  (e === null || typeof e != 'object') && (e = {}),
    (t === null || typeof t != 'object') && (t = {});
  for (i in t) i in e ? (n[i] = Pf(e[i], t[i])) : (r[i] = t[i]);
  return function (o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var ic = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Ku = new RegExp(ic.source, 'g');
function TC(e) {
  return function () {
    return e;
  };
}
function MC(e) {
  return function (t) {
    return e(t) + '';
  };
}
function zg(e, t) {
  var n = (ic.lastIndex = Ku.lastIndex = 0),
    r,
    i,
    o,
    l = -1,
    a = [],
    u = [];
  for (e = e + '', t = t + ''; (r = ic.exec(e)) && (i = Ku.exec(t)); )
    (o = i.index) > n &&
      ((o = t.slice(n, o)), a[l] ? (a[l] += o) : (a[++l] = o)),
      (r = r[0]) === (i = i[0]) ?
        a[l] ?
          (a[l] += i)
        : (a[++l] = i)
      : ((a[++l] = null), u.push({ i: l, x: Dt(r, i) })),
      (n = Ku.lastIndex);
  return (
    n < t.length && ((o = t.slice(n)), a[l] ? (a[l] += o) : (a[++l] = o)),
    a.length < 2 ?
      u[0] ?
        MC(u[0].x)
      : TC(t)
    : ((t = u.length),
      function (s) {
        for (var c = 0, d; c < t; ++c) a[(d = u[c]).i] = d.x(s);
        return a.join('');
      })
  );
}
function Pf(e, t) {
  var n = typeof t,
    r;
  return t == null || n === 'boolean' ?
      Mf(t)
    : (n === 'number' ? Dt
      : n === 'string' ?
        (r = fr(t)) ?
          ((t = r), ta)
        : zg
      : t instanceof fr ? ta
      : t instanceof Date ? kC
      : CC(t) ? _C
      : Array.isArray(t) ? EC
      : (
        (typeof t.valueOf != 'function' && typeof t.toString != 'function') ||
        isNaN(t)
      ) ?
        NC
      : Dt)(e, t);
}
function PC(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
var Wh = 180 / Math.PI,
  oc = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function Bg(e, t, n, r, i, o) {
  var l, a, u;
  return (
    (l = Math.sqrt(e * e + t * t)) && ((e /= l), (t /= l)),
    (u = e * n + t * r) && ((n -= e * u), (r -= t * u)),
    (a = Math.sqrt(n * n + r * r)) && ((n /= a), (r /= a), (u /= a)),
    e * r < t * n && ((e = -e), (t = -t), (u = -u), (l = -l)),
    {
      translateX: i,
      translateY: o,
      rotate: Math.atan2(t, e) * Wh,
      skewX: Math.atan(u) * Wh,
      scaleX: l,
      scaleY: a,
    }
  );
}
var il;
function RC(e) {
  const t = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(
    e + ''
  );
  return t.isIdentity ? oc : Bg(t.a, t.b, t.c, t.d, t.e, t.f);
}
function jC(e) {
  return (
      e == null ||
        (il ||
          (il = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
        il.setAttribute('transform', e),
        !(e = il.transform.baseVal.consolidate()))
    ) ?
      oc
    : ((e = e.matrix), Bg(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Hg(e, t, n, r) {
  function i(s) {
    return s.length ? s.pop() + ' ' : '';
  }
  function o(s, c, d, f, m, v) {
    if (s !== d || c !== f) {
      var x = m.push('translate(', null, t, null, n);
      v.push({ i: x - 4, x: Dt(s, d) }, { i: x - 2, x: Dt(c, f) });
    } else (d || f) && m.push('translate(' + d + t + f + n);
  }
  function l(s, c, d, f) {
    s !== c ?
      (s - c > 180 ? (c += 360) : c - s > 180 && (s += 360),
      f.push({ i: d.push(i(d) + 'rotate(', null, r) - 2, x: Dt(s, c) }))
    : c && d.push(i(d) + 'rotate(' + c + r);
  }
  function a(s, c, d, f) {
    s !== c ?
      f.push({ i: d.push(i(d) + 'skewX(', null, r) - 2, x: Dt(s, c) })
    : c && d.push(i(d) + 'skewX(' + c + r);
  }
  function u(s, c, d, f, m, v) {
    if (s !== d || c !== f) {
      var x = m.push(i(m) + 'scale(', null, ',', null, ')');
      v.push({ i: x - 4, x: Dt(s, d) }, { i: x - 2, x: Dt(c, f) });
    } else (d !== 1 || f !== 1) && m.push(i(m) + 'scale(' + d + ',' + f + ')');
  }
  return function (s, c) {
    var d = [],
      f = [];
    return (
      (s = e(s)),
      (c = e(c)),
      o(s.translateX, s.translateY, c.translateX, c.translateY, d, f),
      l(s.rotate, c.rotate, d, f),
      a(s.skewX, c.skewX, d, f),
      u(s.scaleX, s.scaleY, c.scaleX, c.scaleY, d, f),
      (s = c = null),
      function (m) {
        for (var v = -1, x = f.length, E; ++v < x; ) d[(E = f[v]).i] = E.x(m);
        return d.join('');
      }
    );
  };
}
var DC = Hg(RC, 'px, ', 'px)', 'deg)'),
  LC = Hg(jC, ', ', ')', ')'),
  ri = 0,
  Ui = 0,
  Pi = 0,
  Vg = 1e3,
  na,
  Ii,
  ra = 0,
  dr = 0,
  tu = 0,
  So = typeof performance == 'object' && performance.now ? performance : Date,
  Wg =
    typeof window == 'object' && window.requestAnimationFrame ?
      window.requestAnimationFrame.bind(window)
    : function (e) {
        setTimeout(e, 17);
      };
function Rf() {
  return dr || (Wg($C), (dr = So.now() + tu));
}
function $C() {
  dr = 0;
}
function ia() {
  this._call = this._time = this._next = null;
}
ia.prototype = Yg.prototype = {
  constructor: ia,
  restart: function (e, t, n) {
    if (typeof e != 'function')
      throw new TypeError('callback is not a function');
    (n = (n == null ? Rf() : +n) + (t == null ? 0 : +t)),
      !this._next &&
        Ii !== this &&
        (Ii ? (Ii._next = this) : (na = this), (Ii = this)),
      (this._call = e),
      (this._time = n),
      lc();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), lc());
  },
};
function Yg(e, t, n) {
  var r = new ia();
  return r.restart(e, t, n), r;
}
function bC() {
  Rf(), ++ri;
  for (var e = na, t; e; )
    (t = dr - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
  --ri;
}
function Yh() {
  (dr = (ra = So.now()) + tu), (ri = Ui = 0);
  try {
    bC();
  } finally {
    (ri = 0), OC(), (dr = 0);
  }
}
function FC() {
  var e = So.now(),
    t = e - ra;
  t > Vg && ((tu -= t), (ra = e));
}
function OC() {
  for (var e, t = na, n, r = 1 / 0; t; )
    t._call ?
      (r > t._time && (r = t._time), (e = t), (t = t._next))
    : ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (na = n)));
  (Ii = e), lc(r);
}
function lc(e) {
  if (!ri) {
    Ui && (Ui = clearTimeout(Ui));
    var t = e - dr;
    t > 24 ?
      (e < 1 / 0 && (Ui = setTimeout(Yh, e - So.now() - tu)),
      Pi && (Pi = clearInterval(Pi)))
    : (Pi || ((ra = So.now()), (Pi = setInterval(FC, Vg))), (ri = 1), Wg(Yh));
  }
}
function Qh(e, t, n) {
  var r = new ia();
  return (
    (t = t == null ? 0 : +t),
    r.restart(
      i => {
        r.stop(), e(i + t);
      },
      t,
      n
    ),
    r
  );
}
var UC = kg('start', 'end', 'cancel', 'interrupt'),
  IC = [],
  Qg = 0,
  Kh = 1,
  ac = 2,
  Sl = 3,
  Xh = 4,
  uc = 5,
  _l = 6;
function nu(e, t, n, r, i, o) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (n in l) return;
  AC(e, n, {
    name: t,
    index: r,
    group: i,
    on: UC,
    tween: IC,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Qg,
  });
}
function jf(e, t) {
  var n = Ut(e, t);
  if (n.state > Qg) throw new Error('too late; already scheduled');
  return n;
}
function qt(e, t) {
  var n = Ut(e, t);
  if (n.state > Sl) throw new Error('too late; already running');
  return n;
}
function Ut(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error('transition not found');
  return n;
}
function AC(e, t, n) {
  var r = e.__transition,
    i;
  (r[t] = n), (n.timer = Yg(o, 0, n.time));
  function o(s) {
    (n.state = Kh),
      n.timer.restart(l, n.delay, n.time),
      n.delay <= s && l(s - n.delay);
  }
  function l(s) {
    var c, d, f, m;
    if (n.state !== Kh) return u();
    for (c in r)
      if (((m = r[c]), m.name === n.name)) {
        if (m.state === Sl) return Qh(l);
        m.state === Xh ?
          ((m.state = _l),
          m.timer.stop(),
          m.on.call('interrupt', e, e.__data__, m.index, m.group),
          delete r[c])
        : +c < t &&
          ((m.state = _l),
          m.timer.stop(),
          m.on.call('cancel', e, e.__data__, m.index, m.group),
          delete r[c]);
      }
    if (
      (Qh(function () {
        n.state === Sl &&
          ((n.state = Xh), n.timer.restart(a, n.delay, n.time), a(s));
      }),
      (n.state = ac),
      n.on.call('start', e, e.__data__, n.index, n.group),
      n.state === ac)
    ) {
      for (
        n.state = Sl, i = new Array((f = n.tween.length)), c = 0, d = -1;
        c < f;
        ++c
      )
        (m = n.tween[c].value.call(e, e.__data__, n.index, n.group)) &&
          (i[++d] = m);
      i.length = d + 1;
    }
  }
  function a(s) {
    for (
      var c =
          s < n.duration ?
            n.ease.call(null, s / n.duration)
          : (n.timer.restart(u), (n.state = uc), 1),
        d = -1,
        f = i.length;
      ++d < f;

    )
      i[d].call(e, c);
    n.state === uc && (n.on.call('end', e, e.__data__, n.index, n.group), u());
  }
  function u() {
    (n.state = _l), n.timer.stop(), delete r[t];
    for (var s in r) return;
    delete e.__transition;
  }
}
function zC(e, t) {
  var n = e.__transition,
    r,
    i,
    o = !0,
    l;
  if (n) {
    t = t == null ? null : t + '';
    for (l in n) {
      if ((r = n[l]).name !== t) {
        o = !1;
        continue;
      }
      (i = r.state > ac && r.state < uc),
        (r.state = _l),
        r.timer.stop(),
        r.on.call(i ? 'interrupt' : 'cancel', e, e.__data__, r.index, r.group),
        delete n[l];
    }
    o && delete e.__transition;
  }
}
function BC(e) {
  return this.each(function () {
    zC(this, e);
  });
}
function HC(e, t) {
  var n, r;
  return function () {
    var i = qt(this, e),
      o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var l = 0, a = r.length; l < a; ++l)
        if (r[l].name === t) {
          (r = r.slice()), r.splice(l, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function VC(e, t, n) {
  var r, i;
  if (typeof n != 'function') throw new Error();
  return function () {
    var o = qt(this, e),
      l = o.tween;
    if (l !== r) {
      i = (r = l).slice();
      for (var a = { name: t, value: n }, u = 0, s = i.length; u < s; ++u)
        if (i[u].name === t) {
          i[u] = a;
          break;
        }
      u === s && i.push(a);
    }
    o.tween = i;
  };
}
function WC(e, t) {
  var n = this._id;
  if (((e += ''), arguments.length < 2)) {
    for (var r = Ut(this.node(), n).tween, i = 0, o = r.length, l; i < o; ++i)
      if ((l = r[i]).name === e) return l.value;
    return null;
  }
  return this.each((t == null ? HC : VC)(n, e, t));
}
function Df(e, t, n) {
  var r = e._id;
  return (
    e.each(function () {
      var i = qt(this, r);
      (i.value || (i.value = {}))[t] = n.apply(this, arguments);
    }),
    function (i) {
      return Ut(i, r).value[t];
    }
  );
}
function Kg(e, t) {
  var n;
  return (
    typeof t == 'number' ? Dt
    : t instanceof fr ? ta
    : (n = fr(t)) ? ((t = n), ta)
    : zg)(e, t);
}
function YC(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function QC(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function KC(e, t, n) {
  var r,
    i = n + '',
    o;
  return function () {
    var l = this.getAttribute(e);
    return (
      l === i ? null
      : l === r ? o
      : (o = t((r = l), n))
    );
  };
}
function XC(e, t, n) {
  var r,
    i = n + '',
    o;
  return function () {
    var l = this.getAttributeNS(e.space, e.local);
    return (
      l === i ? null
      : l === r ? o
      : (o = t((r = l), n))
    );
  };
}
function qC(e, t, n) {
  var r, i, o;
  return function () {
    var l,
      a = n(this),
      u;
    return a == null ?
        void this.removeAttribute(e)
      : ((l = this.getAttribute(e)),
        (u = a + ''),
        l === u ? null
        : l === r && u === i ? o
        : ((i = u), (o = t((r = l), a))));
  };
}
function GC(e, t, n) {
  var r, i, o;
  return function () {
    var l,
      a = n(this),
      u;
    return a == null ?
        void this.removeAttributeNS(e.space, e.local)
      : ((l = this.getAttributeNS(e.space, e.local)),
        (u = a + ''),
        l === u ? null
        : l === r && u === i ? o
        : ((i = u), (o = t((r = l), a))));
  };
}
function ZC(e, t) {
  var n = eu(e),
    r = n === 'transform' ? LC : Kg;
  return this.attrTween(
    e,
    typeof t == 'function' ? (n.local ? GC : qC)(n, r, Df(this, 'attr.' + e, t))
    : t == null ? (n.local ? QC : YC)(n)
    : (n.local ? XC : KC)(n, r, t)
  );
}
function JC(e, t) {
  return function (n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function eE(e, t) {
  return function (n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function tE(e, t) {
  var n, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (n = (r = o) && eE(e, o)), n;
  }
  return (i._value = t), i;
}
function nE(e, t) {
  var n, r;
  function i() {
    var o = t.apply(this, arguments);
    return o !== r && (n = (r = o) && JC(e, o)), n;
  }
  return (i._value = t), i;
}
function rE(e, t) {
  var n = 'attr.' + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != 'function') throw new Error();
  var r = eu(e);
  return this.tween(n, (r.local ? tE : nE)(r, t));
}
function iE(e, t) {
  return function () {
    jf(this, e).delay = +t.apply(this, arguments);
  };
}
function oE(e, t) {
  return (
    (t = +t),
    function () {
      jf(this, e).delay = t;
    }
  );
}
function lE(e) {
  var t = this._id;
  return arguments.length ?
      this.each((typeof e == 'function' ? iE : oE)(t, e))
    : Ut(this.node(), t).delay;
}
function aE(e, t) {
  return function () {
    qt(this, e).duration = +t.apply(this, arguments);
  };
}
function uE(e, t) {
  return (
    (t = +t),
    function () {
      qt(this, e).duration = t;
    }
  );
}
function sE(e) {
  var t = this._id;
  return arguments.length ?
      this.each((typeof e == 'function' ? aE : uE)(t, e))
    : Ut(this.node(), t).duration;
}
function cE(e, t) {
  if (typeof t != 'function') throw new Error();
  return function () {
    qt(this, e).ease = t;
  };
}
function fE(e) {
  var t = this._id;
  return arguments.length ? this.each(cE(t, e)) : Ut(this.node(), t).ease;
}
function dE(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    if (typeof n != 'function') throw new Error();
    qt(this, e).ease = n;
  };
}
function hE(e) {
  if (typeof e != 'function') throw new Error();
  return this.each(dE(this._id, e));
}
function pE(e) {
  typeof e != 'function' && (e = Mg(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = t[i], l = o.length, a = (r[i] = []), u, s = 0; s < l; ++s)
      (u = o[s]) && e.call(u, u.__data__, s, o) && a.push(u);
  return new hn(r, this._parents, this._name, this._id);
}
function mE(e) {
  if (e._id !== this._id) throw new Error();
  for (
    var t = this._groups,
      n = e._groups,
      r = t.length,
      i = n.length,
      o = Math.min(r, i),
      l = new Array(r),
      a = 0;
    a < o;
    ++a
  )
    for (
      var u = t[a], s = n[a], c = u.length, d = (l[a] = new Array(c)), f, m = 0;
      m < c;
      ++m
    )
      (f = u[m] || s[m]) && (d[m] = f);
  for (; a < r; ++a) l[a] = t[a];
  return new hn(l, this._parents, this._name, this._id);
}
function gE(e) {
  return (e + '')
    .trim()
    .split(/^|\s+/)
    .every(function (t) {
      var n = t.indexOf('.');
      return n >= 0 && (t = t.slice(0, n)), !t || t === 'start';
    });
}
function yE(e, t, n) {
  var r,
    i,
    o = gE(t) ? jf : qt;
  return function () {
    var l = o(this, e),
      a = l.on;
    a !== r && (i = (r = a).copy()).on(t, n), (l.on = i);
  };
}
function vE(e, t) {
  var n = this._id;
  return arguments.length < 2 ?
      Ut(this.node(), n).on.on(e)
    : this.each(yE(n, e, t));
}
function wE(e) {
  return function () {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function xE() {
  return this.on('end.remove', wE(this._id));
}
function SE(e) {
  var t = this._name,
    n = this._id;
  typeof e != 'function' && (e = kf(e));
  for (var r = this._groups, i = r.length, o = new Array(i), l = 0; l < i; ++l)
    for (
      var a = r[l], u = a.length, s = (o[l] = new Array(u)), c, d, f = 0;
      f < u;
      ++f
    )
      (c = a[f]) &&
        (d = e.call(c, c.__data__, f, a)) &&
        ('__data__' in c && (d.__data__ = c.__data__),
        (s[f] = d),
        nu(s[f], t, n, f, s, Ut(c, n)));
  return new hn(o, this._parents, t, n);
}
function _E(e) {
  var t = this._name,
    n = this._id;
  typeof e != 'function' && (e = Tg(e));
  for (var r = this._groups, i = r.length, o = [], l = [], a = 0; a < i; ++a)
    for (var u = r[a], s = u.length, c, d = 0; d < s; ++d)
      if ((c = u[d])) {
        for (
          var f = e.call(c, c.__data__, d, u),
            m,
            v = Ut(c, n),
            x = 0,
            E = f.length;
          x < E;
          ++x
        )
          (m = f[x]) && nu(m, t, n, x, f, v);
        o.push(f), l.push(c);
      }
  return new hn(o, l, t, n);
}
var CE = jo.prototype.constructor;
function EE() {
  return new CE(this._groups, this._parents);
}
function kE(e, t) {
  var n, r, i;
  return function () {
    var o = ni(this, e),
      l = (this.style.removeProperty(e), ni(this, e));
    return (
      o === l ? null
      : o === n && l === r ? i
      : (i = t((n = o), (r = l)))
    );
  };
}
function Xg(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function NE(e, t, n) {
  var r,
    i = n + '',
    o;
  return function () {
    var l = ni(this, e);
    return (
      l === i ? null
      : l === r ? o
      : (o = t((r = l), n))
    );
  };
}
function TE(e, t, n) {
  var r, i, o;
  return function () {
    var l = ni(this, e),
      a = n(this),
      u = a + '';
    return (
      a == null && (u = a = (this.style.removeProperty(e), ni(this, e))),
      l === u ? null
      : l === r && u === i ? o
      : ((i = u), (o = t((r = l), a)))
    );
  };
}
function ME(e, t) {
  var n,
    r,
    i,
    o = 'style.' + t,
    l = 'end.' + o,
    a;
  return function () {
    var u = qt(this, e),
      s = u.on,
      c = u.value[o] == null ? a || (a = Xg(t)) : void 0;
    (s !== n || i !== c) && (r = (n = s).copy()).on(l, (i = c)), (u.on = r);
  };
}
function PE(e, t, n) {
  var r = (e += '') == 'transform' ? DC : Kg;
  return (
    t == null ? this.styleTween(e, kE(e, r)).on('end.style.' + e, Xg(e))
    : typeof t == 'function' ?
      this.styleTween(e, TE(e, r, Df(this, 'style.' + e, t))).each(
        ME(this._id, e)
      )
    : this.styleTween(e, NE(e, r, t), n).on('end.style.' + e, null)
  );
}
function RE(e, t, n) {
  return function (r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function jE(e, t, n) {
  var r, i;
  function o() {
    var l = t.apply(this, arguments);
    return l !== i && (r = (i = l) && RE(e, l, n)), r;
  }
  return (o._value = t), o;
}
function DE(e, t, n) {
  var r = 'style.' + (e += '');
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != 'function') throw new Error();
  return this.tween(r, jE(e, t, n ?? ''));
}
function LE(e) {
  return function () {
    this.textContent = e;
  };
}
function $E(e) {
  return function () {
    var t = e(this);
    this.textContent = t ?? '';
  };
}
function bE(e) {
  return this.tween(
    'text',
    typeof e == 'function' ?
      $E(Df(this, 'text', e))
    : LE(e == null ? '' : e + '')
  );
}
function FE(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function OE(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && FE(i)), t;
  }
  return (r._value = e), r;
}
function UE(e) {
  var t = 'text';
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != 'function') throw new Error();
  return this.tween(t, OE(e));
}
function IE() {
  for (
    var e = this._name,
      t = this._id,
      n = qg(),
      r = this._groups,
      i = r.length,
      o = 0;
    o < i;
    ++o
  )
    for (var l = r[o], a = l.length, u, s = 0; s < a; ++s)
      if ((u = l[s])) {
        var c = Ut(u, t);
        nu(u, e, n, s, l, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease,
        });
      }
  return new hn(r, this._parents, e, n);
}
function AE() {
  var e,
    t,
    n = this,
    r = n._id,
    i = n.size();
  return new Promise(function (o, l) {
    var a = { value: l },
      u = {
        value: function () {
          --i === 0 && o();
        },
      };
    n.each(function () {
      var s = qt(this, r),
        c = s.on;
      c !== e &&
        ((t = (e = c).copy()),
        t._.cancel.push(a),
        t._.interrupt.push(a),
        t._.end.push(u)),
        (s.on = t);
    }),
      i === 0 && o();
  });
}
var zE = 0;
function hn(e, t, n, r) {
  (this._groups = e), (this._parents = t), (this._name = n), (this._id = r);
}
function qg() {
  return ++zE;
}
var Jt = jo.prototype;
hn.prototype = {
  constructor: hn,
  select: SE,
  selectAll: _E,
  selectChild: Jt.selectChild,
  selectChildren: Jt.selectChildren,
  filter: pE,
  merge: mE,
  selection: EE,
  transition: IE,
  call: Jt.call,
  nodes: Jt.nodes,
  node: Jt.node,
  size: Jt.size,
  empty: Jt.empty,
  each: Jt.each,
  on: vE,
  attr: ZC,
  attrTween: rE,
  style: PE,
  styleTween: DE,
  text: bE,
  textTween: UE,
  remove: xE,
  tween: WC,
  delay: lE,
  duration: sE,
  ease: fE,
  easeVarying: hE,
  end: AE,
  [Symbol.iterator]: Jt[Symbol.iterator],
};
function BE(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var HE = { time: null, delay: 0, duration: 250, ease: BE };
function VE(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
  return n;
}
function WE(e) {
  var t, n;
  e instanceof hn ?
    ((t = e._id), (e = e._name))
  : ((t = qg()), ((n = HE).time = Rf()), (e = e == null ? null : e + ''));
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var l = r[o], a = l.length, u, s = 0; s < a; ++s)
      (u = l[s]) && nu(u, e, t, s, l, n || VE(u, t));
  return new hn(r, this._parents, e, t);
}
jo.prototype.interrupt = BC;
jo.prototype.transition = WE;
const sc = Math.PI,
  cc = 2 * sc,
  Kn = 1e-6,
  YE = cc - Kn;
function Gg(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function QE(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Gg;
  const n = 10 ** t;
  return function (r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class KE {
  constructor(t) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ''),
      (this._append = t == null ? Gg : QE(t));
  }
  moveTo(t, n) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +n)}`;
  }
  quadraticCurveTo(t, n, r, i) {
    this._append`Q${+t},${+n},${(this._x1 = +r)},${(this._y1 = +i)}`;
  }
  bezierCurveTo(t, n, r, i, o, l) {
    this
      ._append`C${+t},${+n},${+r},${+i},${(this._x1 = +o)},${(this._y1 = +l)}`;
  }
  arcTo(t, n, r, i, o) {
    if (((t = +t), (n = +n), (r = +r), (i = +i), (o = +o), o < 0))
      throw new Error(`negative radius: ${o}`);
    let l = this._x1,
      a = this._y1,
      u = r - t,
      s = i - n,
      c = l - t,
      d = a - n,
      f = c * c + d * d;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = n)}`;
    else if (f > Kn)
      if (!(Math.abs(d * u - s * c) > Kn) || !o)
        this._append`L${(this._x1 = t)},${(this._y1 = n)}`;
      else {
        let m = r - l,
          v = i - a,
          x = u * u + s * s,
          E = m * m + v * v,
          h = Math.sqrt(x),
          p = Math.sqrt(f),
          w = o * Math.tan((sc - Math.acos((x + f - E) / (2 * h * p))) / 2),
          g = w / p,
          k = w / h;
        Math.abs(g - 1) > Kn && this._append`L${t + g * c},${n + g * d}`,
          this
            ._append`A${o},${o},0,0,${+(d * m > c * v)},${(this._x1 = t + k * u)},${(this._y1 = n + k * s)}`;
      }
  }
  arc(t, n, r, i, o, l) {
    if (((t = +t), (n = +n), (r = +r), (l = !!l), r < 0))
      throw new Error(`negative radius: ${r}`);
    let a = r * Math.cos(i),
      u = r * Math.sin(i),
      s = t + a,
      c = n + u,
      d = 1 ^ l,
      f = l ? i - o : o - i;
    this._x1 === null ?
      this._append`M${s},${c}`
    : (Math.abs(this._x1 - s) > Kn || Math.abs(this._y1 - c) > Kn) &&
      this._append`L${s},${c}`,
      r &&
        (f < 0 && (f = (f % cc) + cc),
        f > YE ?
          this
            ._append`A${r},${r},0,1,${d},${t - a},${n - u}A${r},${r},0,1,${d},${(this._x1 = s)},${(this._y1 = c)}`
        : f > Kn &&
          this
            ._append`A${r},${r},0,${+(f >= sc)},${d},${(this._x1 = t + r * Math.cos(o))},${(this._y1 = n + r * Math.sin(o))}`);
  }
  rect(t, n, r, i) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}h${(r = +r)}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function XE(e) {
  return Math.abs((e = Math.round(e))) >= 1e21 ?
      e.toLocaleString('en').replace(/,/g, '')
    : e.toString(10);
}
function oa(e, t) {
  if (
    (n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf('e')) < 0
  )
    return null;
  var n,
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function ii(e) {
  return (e = oa(Math.abs(e))), e ? e[1] : NaN;
}
function qE(e, t) {
  return function (n, r) {
    for (
      var i = n.length, o = [], l = 0, a = e[0], u = 0;
      i > 0 &&
      a > 0 &&
      (u + a + 1 > r && (a = Math.max(1, r - u)),
      o.push(n.substring((i -= a), i + a)),
      !((u += a + 1) > r));

    )
      a = e[(l = (l + 1) % e.length)];
    return o.reverse().join(t);
  };
}
function GE(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (n) {
      return e[+n];
    });
  };
}
var ZE =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function la(e) {
  if (!(t = ZE.exec(e))) throw new Error('invalid format: ' + e);
  var t;
  return new Lf({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
la.prototype = Lf.prototype;
function Lf(e) {
  (this.fill = e.fill === void 0 ? ' ' : e.fill + ''),
    (this.align = e.align === void 0 ? '>' : e.align + ''),
    (this.sign = e.sign === void 0 ? '-' : e.sign + ''),
    (this.symbol = e.symbol === void 0 ? '' : e.symbol + ''),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? '' : e.type + '');
}
Lf.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? '0' : '') +
    (this.width === void 0 ? '' : Math.max(1, this.width | 0)) +
    (this.comma ? ',' : '') +
    (this.precision === void 0 ? '' : '.' + Math.max(0, this.precision | 0)) +
    (this.trim ? '~' : '') +
    this.type
  );
};
function JE(e) {
  e: for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
    switch (e[n]) {
      case '.':
        r = i = n;
        break;
      case '0':
        r === 0 && (r = n), (i = n);
        break;
      default:
        if (!+e[n]) break e;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var Zg;
function ek(e, t) {
  var n = oa(e, t);
  if (!n) return e + '';
  var r = n[0],
    i = n[1],
    o = i - (Zg = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    l = r.length;
  return (
    o === l ? r
    : o > l ? r + new Array(o - l + 1).join('0')
    : o > 0 ? r.slice(0, o) + '.' + r.slice(o)
    : '0.' + new Array(1 - o).join('0') + oa(e, Math.max(0, t + o - 1))[0]
  );
}
function qh(e, t) {
  var n = oa(e, t);
  if (!n) return e + '';
  var r = n[0],
    i = n[1];
  return (
    i < 0 ? '0.' + new Array(-i).join('0') + r
    : r.length > i + 1 ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
    : r + new Array(i - r.length + 2).join('0')
  );
}
const Gh = {
  '%': (e, t) => (e * 100).toFixed(t),
  b: e => Math.round(e).toString(2),
  c: e => e + '',
  d: XE,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: e => Math.round(e).toString(8),
  p: (e, t) => qh(e * 100, t),
  r: qh,
  s: ek,
  X: e => Math.round(e).toString(16).toUpperCase(),
  x: e => Math.round(e).toString(16),
};
function Zh(e) {
  return e;
}
var Jh = Array.prototype.map,
  ep = [
    'y',
    'z',
    'a',
    'f',
    'p',
    'n',
    'µ',
    'm',
    '',
    'k',
    'M',
    'G',
    'T',
    'P',
    'E',
    'Z',
    'Y',
  ];
function tk(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0 ?
        Zh
      : qE(Jh.call(e.grouping, Number), e.thousands + ''),
    n = e.currency === void 0 ? '' : e.currency[0] + '',
    r = e.currency === void 0 ? '' : e.currency[1] + '',
    i = e.decimal === void 0 ? '.' : e.decimal + '',
    o = e.numerals === void 0 ? Zh : GE(Jh.call(e.numerals, String)),
    l = e.percent === void 0 ? '%' : e.percent + '',
    a = e.minus === void 0 ? '−' : e.minus + '',
    u = e.nan === void 0 ? 'NaN' : e.nan + '';
  function s(d) {
    d = la(d);
    var f = d.fill,
      m = d.align,
      v = d.sign,
      x = d.symbol,
      E = d.zero,
      h = d.width,
      p = d.comma,
      w = d.precision,
      g = d.trim,
      k = d.type;
    k === 'n' ?
      ((p = !0), (k = 'g'))
    : Gh[k] || (w === void 0 && (w = 12), (g = !0), (k = 'g')),
      (E || (f === '0' && m === '=')) && ((E = !0), (f = '0'), (m = '='));
    var _ =
        x === '$' ? n
        : x === '#' && /[boxX]/.test(k) ? '0' + k.toLowerCase()
        : '',
      T =
        x === '$' ? r
        : /[%p]/.test(k) ? l
        : '',
      j = Gh[k],
      I = /[defgprs%]/.test(k);
    w =
      w === void 0 ? 6
      : /[gprs]/.test(k) ? Math.max(1, Math.min(21, w))
      : Math.max(0, Math.min(20, w));
    function U(b) {
      var q = _,
        Q = T,
        Re,
        ue,
        Ye;
      if (k === 'c') (Q = j(b) + Q), (b = '');
      else {
        b = +b;
        var Ae = b < 0 || 1 / b < 0;
        if (
          ((b = isNaN(b) ? u : j(Math.abs(b), w)),
          g && (b = JE(b)),
          Ae && +b == 0 && v !== '+' && (Ae = !1),
          (q =
            (Ae ?
              v === '(' ?
                v
              : a
            : v === '-' || v === '(' ? ''
            : v) + q),
          (Q =
            (k === 's' ? ep[8 + Zg / 3] : '') +
            Q +
            (Ae && v === '(' ? ')' : '')),
          I)
        ) {
          for (Re = -1, ue = b.length; ++Re < ue; )
            if (((Ye = b.charCodeAt(Re)), 48 > Ye || Ye > 57)) {
              (Q = (Ye === 46 ? i + b.slice(Re + 1) : b.slice(Re)) + Q),
                (b = b.slice(0, Re));
              break;
            }
        }
      }
      p && !E && (b = t(b, 1 / 0));
      var D = q.length + b.length + Q.length,
        O = D < h ? new Array(h - D + 1).join(f) : '';
      switch (
        (p && E && ((b = t(O + b, O.length ? h - Q.length : 1 / 0)), (O = '')),
        m)
      ) {
        case '<':
          b = q + b + Q + O;
          break;
        case '=':
          b = q + O + b + Q;
          break;
        case '^':
          b = O.slice(0, (D = O.length >> 1)) + q + b + Q + O.slice(D);
          break;
        default:
          b = O + q + b + Q;
          break;
      }
      return o(b);
    }
    return (
      (U.toString = function () {
        return d + '';
      }),
      U
    );
  }
  function c(d, f) {
    var m = s(((d = la(d)), (d.type = 'f'), d)),
      v = Math.max(-8, Math.min(8, Math.floor(ii(f) / 3))) * 3,
      x = Math.pow(10, -v),
      E = ep[8 + v / 3];
    return function (h) {
      return m(x * h) + E;
    };
  }
  return { format: s, formatPrefix: c };
}
var ol, Jg, ey;
nk({ thousands: ',', grouping: [3], currency: ['$', ''] });
function nk(e) {
  return (ol = tk(e)), (Jg = ol.format), (ey = ol.formatPrefix), ol;
}
function rk(e) {
  return Math.max(0, -ii(Math.abs(e)));
}
function ik(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(ii(t) / 3))) * 3 - ii(Math.abs(e))
  );
}
function ok(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, ii(t) - ii(e)) + 1
  );
}
function ru(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
const tp = Symbol('implicit');
function ty() {
  var e = new Dh(),
    t = [],
    n = [],
    r = tp;
  function i(o) {
    let l = e.get(o);
    if (l === void 0) {
      if (r !== tp) return r;
      e.set(o, (l = t.push(o) - 1));
    }
    return n[l % n.length];
  }
  return (
    (i.domain = function (o) {
      if (!arguments.length) return t.slice();
      (t = []), (e = new Dh());
      for (const l of o) e.has(l) || e.set(l, t.push(l) - 1);
      return i;
    }),
    (i.range = function (o) {
      return arguments.length ? ((n = Array.from(o)), i) : n.slice();
    }),
    (i.unknown = function (o) {
      return arguments.length ? ((r = o), i) : r;
    }),
    (i.copy = function () {
      return ty(t, n).unknown(r);
    }),
    ru.apply(i, arguments),
    i
  );
}
function ny() {
  var e = ty().unknown(void 0),
    t = e.domain,
    n = e.range,
    r = 0,
    i = 1,
    o,
    l,
    a = !1,
    u = 0,
    s = 0,
    c = 0.5;
  delete e.unknown;
  function d() {
    var f = t().length,
      m = i < r,
      v = m ? i : r,
      x = m ? r : i;
    (o = (x - v) / Math.max(1, f - u + s * 2)),
      a && (o = Math.floor(o)),
      (v += (x - v - o * (f - u)) * c),
      (l = o * (1 - u)),
      a && ((v = Math.round(v)), (l = Math.round(l)));
    var E = w2(f).map(function (h) {
      return v + o * h;
    });
    return n(m ? E.reverse() : E);
  }
  return (
    (e.domain = function (f) {
      return arguments.length ? (t(f), d()) : t();
    }),
    (e.range = function (f) {
      return arguments.length ?
          (([r, i] = f), (r = +r), (i = +i), d())
        : [r, i];
    }),
    (e.rangeRound = function (f) {
      return ([r, i] = f), (r = +r), (i = +i), (a = !0), d();
    }),
    (e.bandwidth = function () {
      return l;
    }),
    (e.step = function () {
      return o;
    }),
    (e.round = function (f) {
      return arguments.length ? ((a = !!f), d()) : a;
    }),
    (e.padding = function (f) {
      return arguments.length ? ((u = Math.min(1, (s = +f))), d()) : u;
    }),
    (e.paddingInner = function (f) {
      return arguments.length ? ((u = Math.min(1, f)), d()) : u;
    }),
    (e.paddingOuter = function (f) {
      return arguments.length ? ((s = +f), d()) : s;
    }),
    (e.align = function (f) {
      return arguments.length ? ((c = Math.max(0, Math.min(1, f))), d()) : c;
    }),
    (e.copy = function () {
      return ny(t(), [r, i]).round(a).paddingInner(u).paddingOuter(s).align(c);
    }),
    ru.apply(d(), arguments)
  );
}
function lk(e) {
  return function () {
    return e;
  };
}
function ak(e) {
  return +e;
}
var np = [0, 1];
function Ur(e) {
  return e;
}
function fc(e, t) {
  return (t -= e = +e) ?
      function (n) {
        return (n - e) / t;
      }
    : lk(isNaN(t) ? NaN : 0.5);
}
function uk(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (r) {
      return Math.max(e, Math.min(t, r));
    }
  );
}
function sk(e, t, n) {
  var r = e[0],
    i = e[1],
    o = t[0],
    l = t[1];
  return (
    i < r ? ((r = fc(i, r)), (o = n(l, o))) : ((r = fc(r, i)), (o = n(o, l))),
    function (a) {
      return o(r(a));
    }
  );
}
function ck(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = new Array(r),
    o = new Array(r),
    l = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++l < r;

  )
    (i[l] = fc(e[l], e[l + 1])), (o[l] = n(t[l], t[l + 1]));
  return function (a) {
    var u = c2(e, a, 1, r) - 1;
    return o[u](i[u](a));
  };
}
function ry(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function fk() {
  var e = np,
    t = np,
    n = Pf,
    r,
    i,
    o,
    l = Ur,
    a,
    u,
    s;
  function c() {
    var f = Math.min(e.length, t.length);
    return (
      l !== Ur && (l = uk(e[0], e[f - 1])),
      (a = f > 2 ? ck : sk),
      (u = s = null),
      d
    );
  }
  function d(f) {
    return f == null || isNaN((f = +f)) ?
        o
      : (u || (u = a(e.map(r), t, n)))(r(l(f)));
  }
  return (
    (d.invert = function (f) {
      return l(i((s || (s = a(t, e.map(r), Dt)))(f)));
    }),
    (d.domain = function (f) {
      return arguments.length ? ((e = Array.from(f, ak)), c()) : e.slice();
    }),
    (d.range = function (f) {
      return arguments.length ? ((t = Array.from(f)), c()) : t.slice();
    }),
    (d.rangeRound = function (f) {
      return (t = Array.from(f)), (n = PC), c();
    }),
    (d.clamp = function (f) {
      return arguments.length ? ((l = f ? !0 : Ur), c()) : l !== Ur;
    }),
    (d.interpolate = function (f) {
      return arguments.length ? ((n = f), c()) : n;
    }),
    (d.unknown = function (f) {
      return arguments.length ? ((o = f), d) : o;
    }),
    function (f, m) {
      return (r = f), (i = m), c();
    }
  );
}
function iy() {
  return fk()(Ur, Ur);
}
function dk(e, t, n, r) {
  var i = ec(e, t, n),
    o;
  switch (((r = la(r ?? ',f')), r.type)) {
    case 's': {
      var l = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((o = ik(i, l))) && (r.precision = o),
        ey(r, l)
      );
    }
    case '':
    case 'e':
    case 'g':
    case 'p':
    case 'r': {
      r.precision == null &&
        !isNaN((o = ok(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = o - (r.type === 'e'));
      break;
    }
    case 'f':
    case '%': {
      r.precision == null &&
        !isNaN((o = rk(i))) &&
        (r.precision = o - (r.type === '%') * 2);
      break;
    }
  }
  return Jg(r);
}
function hk(e) {
  var t = e.domain;
  return (
    (e.ticks = function (n) {
      var r = t();
      return v2(r[0], r[r.length - 1], n ?? 10);
    }),
    (e.tickFormat = function (n, r) {
      var i = t();
      return dk(i[0], i[i.length - 1], n ?? 10, r);
    }),
    (e.nice = function (n) {
      n == null && (n = 10);
      var r = t(),
        i = 0,
        o = r.length - 1,
        l = r[i],
        a = r[o],
        u,
        s,
        c = 10;
      for (
        a < l && ((s = l), (l = a), (a = s), (s = i), (i = o), (o = s));
        c-- > 0;

      ) {
        if (((s = Js(l, a, n)), s === u)) return (r[i] = l), (r[o] = a), t(r);
        if (s > 0) (l = Math.floor(l / s) * s), (a = Math.ceil(a / s) * s);
        else if (s < 0) (l = Math.ceil(l * s) / s), (a = Math.floor(a * s) / s);
        else break;
        u = s;
      }
      return e;
    }),
    e
  );
}
function $f() {
  var e = iy();
  return (
    (e.copy = function () {
      return ry(e, $f());
    }),
    ru.apply(e, arguments),
    hk(e)
  );
}
function pk(e, t) {
  e = e.slice();
  var n = 0,
    r = e.length - 1,
    i = e[n],
    o = e[r],
    l;
  return (
    o < i && ((l = n), (n = r), (r = l), (l = i), (i = o), (o = l)),
    (e[n] = t.floor(i)),
    (e[r] = t.ceil(o)),
    e
  );
}
const Xu = new Date(),
  qu = new Date();
function Pe(e, t, n, r) {
  function i(o) {
    return e((o = arguments.length === 0 ? new Date() : new Date(+o))), o;
  }
  return (
    (i.floor = o => (e((o = new Date(+o))), o)),
    (i.ceil = o => (e((o = new Date(o - 1))), t(o, 1), e(o), o)),
    (i.round = o => {
      const l = i(o),
        a = i.ceil(o);
      return o - l < a - o ? l : a;
    }),
    (i.offset = (o, l) => (
      t((o = new Date(+o)), l == null ? 1 : Math.floor(l)), o
    )),
    (i.range = (o, l, a) => {
      const u = [];
      if (
        ((o = i.ceil(o)),
        (a = a == null ? 1 : Math.floor(a)),
        !(o < l) || !(a > 0))
      )
        return u;
      let s;
      do u.push((s = new Date(+o))), t(o, a), e(o);
      while (s < o && o < l);
      return u;
    }),
    (i.filter = o =>
      Pe(
        l => {
          if (l >= l) for (; e(l), !o(l); ) l.setTime(l - 1);
        },
        (l, a) => {
          if (l >= l)
            if (a < 0) for (; ++a <= 0; ) for (; t(l, -1), !o(l); );
            else for (; --a >= 0; ) for (; t(l, 1), !o(l); );
        }
      )),
    n &&
      ((i.count = (o, l) => (
        Xu.setTime(+o), qu.setTime(+l), e(Xu), e(qu), Math.floor(n(Xu, qu))
      )),
      (i.every = o => (
        (o = Math.floor(o)),
        !isFinite(o) || !(o > 0) ? null
        : o > 1 ?
          i.filter(r ? l => r(l) % o === 0 : l => i.count(0, l) % o === 0)
        : i
      ))),
    i
  );
}
const aa = Pe(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e
);
aa.every = e => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0) ? null
  : e > 1 ?
    Pe(
      t => {
        t.setTime(Math.floor(t / e) * e);
      },
      (t, n) => {
        t.setTime(+t + n * e);
      },
      (t, n) => (n - t) / e
    )
  : aa
);
aa.range;
const on = 1e3,
  xt = on * 60,
  ln = xt * 60,
  pn = ln * 24,
  bf = pn * 7,
  rp = pn * 30,
  Gu = pn * 365,
  Ir = Pe(
    e => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * on);
    },
    (e, t) => (t - e) / on,
    e => e.getUTCSeconds()
  );
Ir.range;
const Ff = Pe(
  e => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * on);
  },
  (e, t) => {
    e.setTime(+e + t * xt);
  },
  (e, t) => (t - e) / xt,
  e => e.getMinutes()
);
Ff.range;
const mk = Pe(
  e => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * xt);
  },
  (e, t) => (t - e) / xt,
  e => e.getUTCMinutes()
);
mk.range;
const Of = Pe(
  e => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * on - e.getMinutes() * xt
    );
  },
  (e, t) => {
    e.setTime(+e + t * ln);
  },
  (e, t) => (t - e) / ln,
  e => e.getHours()
);
Of.range;
const gk = Pe(
  e => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * ln);
  },
  (e, t) => (t - e) / ln,
  e => e.getUTCHours()
);
gk.range;
const Lo = Pe(
  e => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * xt) / pn,
  e => e.getDate() - 1
);
Lo.range;
const Uf = Pe(
  e => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / pn,
  e => e.getUTCDate() - 1
);
Uf.range;
const yk = Pe(
  e => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / pn,
  e => Math.floor(e / pn)
);
yk.range;
function vr(e) {
  return Pe(
    t => {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setDate(t.getDate() + n * 7);
    },
    (t, n) =>
      (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * xt) / bf
  );
}
const iu = vr(0),
  ua = vr(1),
  vk = vr(2),
  wk = vr(3),
  oi = vr(4),
  xk = vr(5),
  Sk = vr(6);
iu.range;
ua.range;
vk.range;
wk.range;
oi.range;
xk.range;
Sk.range;
function wr(e) {
  return Pe(
    t => {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setUTCDate(t.getUTCDate() + n * 7);
    },
    (t, n) => (n - t) / bf
  );
}
const oy = wr(0),
  sa = wr(1),
  _k = wr(2),
  Ck = wr(3),
  li = wr(4),
  Ek = wr(5),
  kk = wr(6);
oy.range;
sa.range;
_k.range;
Ck.range;
li.range;
Ek.range;
kk.range;
const If = Pe(
  e => {
    e.setDate(1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  e => e.getMonth()
);
If.range;
const Nk = Pe(
  e => {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  e => e.getUTCMonth()
);
Nk.range;
const mn = Pe(
  e => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  e => e.getFullYear()
);
mn.every = e =>
  !isFinite((e = Math.floor(e))) || !(e > 0) ?
    null
  : Pe(
      t => {
        t.setFullYear(Math.floor(t.getFullYear() / e) * e),
          t.setMonth(0, 1),
          t.setHours(0, 0, 0, 0);
      },
      (t, n) => {
        t.setFullYear(t.getFullYear() + n * e);
      }
    );
mn.range;
const hr = Pe(
  e => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  e => e.getUTCFullYear()
);
hr.every = e =>
  !isFinite((e = Math.floor(e))) || !(e > 0) ?
    null
  : Pe(
      t => {
        t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
          t.setUTCMonth(0, 1),
          t.setUTCHours(0, 0, 0, 0);
      },
      (t, n) => {
        t.setUTCFullYear(t.getUTCFullYear() + n * e);
      }
    );
hr.range;
function Tk(e, t, n, r, i, o) {
  const l = [
    [Ir, 1, on],
    [Ir, 5, 5 * on],
    [Ir, 15, 15 * on],
    [Ir, 30, 30 * on],
    [o, 1, xt],
    [o, 5, 5 * xt],
    [o, 15, 15 * xt],
    [o, 30, 30 * xt],
    [i, 1, ln],
    [i, 3, 3 * ln],
    [i, 6, 6 * ln],
    [i, 12, 12 * ln],
    [r, 1, pn],
    [r, 2, 2 * pn],
    [n, 1, bf],
    [t, 1, rp],
    [t, 3, 3 * rp],
    [e, 1, Gu],
  ];
  function a(s, c, d) {
    const f = c < s;
    f && ([s, c] = [c, s]);
    const m = d && typeof d.range == 'function' ? d : u(s, c, d),
      v = m ? m.range(s, +c + 1) : [];
    return f ? v.reverse() : v;
  }
  function u(s, c, d) {
    const f = Math.abs(c - s) / d,
      m = Ef(([, , E]) => E).right(l, f);
    if (m === l.length) return e.every(ec(s / Gu, c / Gu, d));
    if (m === 0) return aa.every(Math.max(ec(s, c, d), 1));
    const [v, x] = l[f / l[m - 1][2] < l[m][2] / f ? m - 1 : m];
    return v.every(x);
  }
  return [a, u];
}
const [Mk, Pk] = Tk(mn, If, iu, Lo, Of, Ff);
function Zu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ju(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Ri(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Rk(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    o = e.days,
    l = e.shortDays,
    a = e.months,
    u = e.shortMonths,
    s = ji(i),
    c = Di(i),
    d = ji(o),
    f = Di(o),
    m = ji(l),
    v = Di(l),
    x = ji(a),
    E = Di(a),
    h = ji(u),
    p = Di(u),
    w = {
      a: Ae,
      A: D,
      b: O,
      B: H,
      c: null,
      d: sp,
      e: sp,
      f: Jk,
      g: sN,
      G: fN,
      H: qk,
      I: Gk,
      j: Zk,
      L: ly,
      m: eN,
      M: tN,
      p: re,
      q: ne,
      Q: dp,
      s: hp,
      S: nN,
      u: rN,
      U: iN,
      V: oN,
      w: lN,
      W: aN,
      x: null,
      X: null,
      y: uN,
      Y: cN,
      Z: dN,
      '%': fp,
    },
    g = {
      a: et,
      A: be,
      b: Gt,
      B: kt,
      c: null,
      d: cp,
      e: cp,
      f: gN,
      g: NN,
      G: MN,
      H: hN,
      I: pN,
      j: mN,
      L: uy,
      m: yN,
      M: vN,
      p: wn,
      q: ou,
      Q: dp,
      s: hp,
      S: wN,
      u: xN,
      U: SN,
      V: _N,
      w: CN,
      W: EN,
      x: null,
      X: null,
      y: kN,
      Y: TN,
      Z: PN,
      '%': fp,
    },
    k = {
      a: U,
      A: b,
      b: q,
      B: Q,
      c: Re,
      d: ap,
      e: ap,
      f: Yk,
      g: lp,
      G: op,
      H: up,
      I: up,
      j: Bk,
      L: Wk,
      m: zk,
      M: Hk,
      p: I,
      q: Ak,
      Q: Kk,
      s: Xk,
      S: Vk,
      u: bk,
      U: Fk,
      V: Ok,
      w: $k,
      W: Uk,
      x: ue,
      X: Ye,
      y: lp,
      Y: op,
      Z: Ik,
      '%': Qk,
    };
  (w.x = _(n, w)),
    (w.X = _(r, w)),
    (w.c = _(t, w)),
    (g.x = _(n, g)),
    (g.X = _(r, g)),
    (g.c = _(t, g));
  function _(L, Y) {
    return function (Z) {
      var R = [],
        we = -1,
        le = 0,
        Qe = L.length,
        Ke,
        Zt,
        $o;
      for (Z instanceof Date || (Z = new Date(+Z)); ++we < Qe; )
        L.charCodeAt(we) === 37 &&
          (R.push(L.slice(le, we)),
          (Zt = ip[(Ke = L.charAt(++we))]) != null ?
            (Ke = L.charAt(++we))
          : (Zt = Ke === 'e' ? ' ' : '0'),
          ($o = Y[Ke]) && (Ke = $o(Z, Zt)),
          R.push(Ke),
          (le = we + 1));
      return R.push(L.slice(le, we)), R.join('');
    };
  }
  function T(L, Y) {
    return function (Z) {
      var R = Ri(1900, void 0, 1),
        we = j(R, L, (Z += ''), 0),
        le,
        Qe;
      if (we != Z.length) return null;
      if ('Q' in R) return new Date(R.Q);
      if ('s' in R) return new Date(R.s * 1e3 + ('L' in R ? R.L : 0));
      if (
        (Y && !('Z' in R) && (R.Z = 0),
        'p' in R && (R.H = (R.H % 12) + R.p * 12),
        R.m === void 0 && (R.m = 'q' in R ? R.q : 0),
        'V' in R)
      ) {
        if (R.V < 1 || R.V > 53) return null;
        'w' in R || (R.w = 1),
          'Z' in R ?
            ((le = Ju(Ri(R.y, 0, 1))),
            (Qe = le.getUTCDay()),
            (le = Qe > 4 || Qe === 0 ? sa.ceil(le) : sa(le)),
            (le = Uf.offset(le, (R.V - 1) * 7)),
            (R.y = le.getUTCFullYear()),
            (R.m = le.getUTCMonth()),
            (R.d = le.getUTCDate() + ((R.w + 6) % 7)))
          : ((le = Zu(Ri(R.y, 0, 1))),
            (Qe = le.getDay()),
            (le = Qe > 4 || Qe === 0 ? ua.ceil(le) : ua(le)),
            (le = Lo.offset(le, (R.V - 1) * 7)),
            (R.y = le.getFullYear()),
            (R.m = le.getMonth()),
            (R.d = le.getDate() + ((R.w + 6) % 7)));
      } else
        ('W' in R || 'U' in R) &&
          ('w' in R ||
            (R.w =
              'u' in R ? R.u % 7
              : 'W' in R ? 1
              : 0),
          (Qe =
            'Z' in R ?
              Ju(Ri(R.y, 0, 1)).getUTCDay()
            : Zu(Ri(R.y, 0, 1)).getDay()),
          (R.m = 0),
          (R.d =
            'W' in R ?
              ((R.w + 6) % 7) + R.W * 7 - ((Qe + 5) % 7)
            : R.w + R.U * 7 - ((Qe + 6) % 7)));
      return 'Z' in R ?
          ((R.H += (R.Z / 100) | 0), (R.M += R.Z % 100), Ju(R))
        : Zu(R);
    };
  }
  function j(L, Y, Z, R) {
    for (var we = 0, le = Y.length, Qe = Z.length, Ke, Zt; we < le; ) {
      if (R >= Qe) return -1;
      if (((Ke = Y.charCodeAt(we++)), Ke === 37)) {
        if (
          ((Ke = Y.charAt(we++)),
          (Zt = k[Ke in ip ? Y.charAt(we++) : Ke]),
          !Zt || (R = Zt(L, Z, R)) < 0)
        )
          return -1;
      } else if (Ke != Z.charCodeAt(R++)) return -1;
    }
    return R;
  }
  function I(L, Y, Z) {
    var R = s.exec(Y.slice(Z));
    return R ? ((L.p = c.get(R[0].toLowerCase())), Z + R[0].length) : -1;
  }
  function U(L, Y, Z) {
    var R = m.exec(Y.slice(Z));
    return R ? ((L.w = v.get(R[0].toLowerCase())), Z + R[0].length) : -1;
  }
  function b(L, Y, Z) {
    var R = d.exec(Y.slice(Z));
    return R ? ((L.w = f.get(R[0].toLowerCase())), Z + R[0].length) : -1;
  }
  function q(L, Y, Z) {
    var R = h.exec(Y.slice(Z));
    return R ? ((L.m = p.get(R[0].toLowerCase())), Z + R[0].length) : -1;
  }
  function Q(L, Y, Z) {
    var R = x.exec(Y.slice(Z));
    return R ? ((L.m = E.get(R[0].toLowerCase())), Z + R[0].length) : -1;
  }
  function Re(L, Y, Z) {
    return j(L, t, Y, Z);
  }
  function ue(L, Y, Z) {
    return j(L, n, Y, Z);
  }
  function Ye(L, Y, Z) {
    return j(L, r, Y, Z);
  }
  function Ae(L) {
    return l[L.getDay()];
  }
  function D(L) {
    return o[L.getDay()];
  }
  function O(L) {
    return u[L.getMonth()];
  }
  function H(L) {
    return a[L.getMonth()];
  }
  function re(L) {
    return i[+(L.getHours() >= 12)];
  }
  function ne(L) {
    return 1 + ~~(L.getMonth() / 3);
  }
  function et(L) {
    return l[L.getUTCDay()];
  }
  function be(L) {
    return o[L.getUTCDay()];
  }
  function Gt(L) {
    return u[L.getUTCMonth()];
  }
  function kt(L) {
    return a[L.getUTCMonth()];
  }
  function wn(L) {
    return i[+(L.getUTCHours() >= 12)];
  }
  function ou(L) {
    return 1 + ~~(L.getUTCMonth() / 3);
  }
  return {
    format: function (L) {
      var Y = _((L += ''), w);
      return (
        (Y.toString = function () {
          return L;
        }),
        Y
      );
    },
    parse: function (L) {
      var Y = T((L += ''), !1);
      return (
        (Y.toString = function () {
          return L;
        }),
        Y
      );
    },
    utcFormat: function (L) {
      var Y = _((L += ''), g);
      return (
        (Y.toString = function () {
          return L;
        }),
        Y
      );
    },
    utcParse: function (L) {
      var Y = T((L += ''), !0);
      return (
        (Y.toString = function () {
          return L;
        }),
        Y
      );
    },
  };
}
var ip = { '-': '', _: ' ', 0: '0' },
  $e = /^\s*\d+/,
  jk = /^%/,
  Dk = /[\\^$*+?|[\]().{}]/g;
function te(e, t, n) {
  var r = e < 0 ? '-' : '',
    i = (r ? -e : e) + '',
    o = i.length;
  return r + (o < n ? new Array(n - o + 1).join(t) + i : i);
}
function Lk(e) {
  return e.replace(Dk, '\\$&');
}
function ji(e) {
  return new RegExp('^(?:' + e.map(Lk).join('|') + ')', 'i');
}
function Di(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function $k(e, t, n) {
  var r = $e.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function bk(e, t, n) {
  var r = $e.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function Fk(e, t, n) {
  var r = $e.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function Ok(e, t, n) {
  var r = $e.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function Uk(e, t, n) {
  var r = $e.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function op(e, t, n) {
  var r = $e.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function lp(e, t, n) {
  var r = $e.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function Ik(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ?
      ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), n + r[0].length)
    : -1;
}
function Ak(e, t, n) {
  var r = $e.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function zk(e, t, n) {
  var r = $e.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function ap(e, t, n) {
  var r = $e.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function Bk(e, t, n) {
  var r = $e.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function up(e, t, n) {
  var r = $e.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function Hk(e, t, n) {
  var r = $e.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function Vk(e, t, n) {
  var r = $e.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function Wk(e, t, n) {
  var r = $e.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function Yk(e, t, n) {
  var r = $e.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function Qk(e, t, n) {
  var r = jk.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Kk(e, t, n) {
  var r = $e.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function Xk(e, t, n) {
  var r = $e.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function sp(e, t) {
  return te(e.getDate(), t, 2);
}
function qk(e, t) {
  return te(e.getHours(), t, 2);
}
function Gk(e, t) {
  return te(e.getHours() % 12 || 12, t, 2);
}
function Zk(e, t) {
  return te(1 + Lo.count(mn(e), e), t, 3);
}
function ly(e, t) {
  return te(e.getMilliseconds(), t, 3);
}
function Jk(e, t) {
  return ly(e, t) + '000';
}
function eN(e, t) {
  return te(e.getMonth() + 1, t, 2);
}
function tN(e, t) {
  return te(e.getMinutes(), t, 2);
}
function nN(e, t) {
  return te(e.getSeconds(), t, 2);
}
function rN(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function iN(e, t) {
  return te(iu.count(mn(e) - 1, e), t, 2);
}
function ay(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? oi(e) : oi.ceil(e);
}
function oN(e, t) {
  return (e = ay(e)), te(oi.count(mn(e), e) + (mn(e).getDay() === 4), t, 2);
}
function lN(e) {
  return e.getDay();
}
function aN(e, t) {
  return te(ua.count(mn(e) - 1, e), t, 2);
}
function uN(e, t) {
  return te(e.getFullYear() % 100, t, 2);
}
function sN(e, t) {
  return (e = ay(e)), te(e.getFullYear() % 100, t, 2);
}
function cN(e, t) {
  return te(e.getFullYear() % 1e4, t, 4);
}
function fN(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? oi(e) : oi.ceil(e)),
    te(e.getFullYear() % 1e4, t, 4)
  );
}
function dN(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? '-' : ((t *= -1), '+')) +
    te((t / 60) | 0, '0', 2) +
    te(t % 60, '0', 2)
  );
}
function cp(e, t) {
  return te(e.getUTCDate(), t, 2);
}
function hN(e, t) {
  return te(e.getUTCHours(), t, 2);
}
function pN(e, t) {
  return te(e.getUTCHours() % 12 || 12, t, 2);
}
function mN(e, t) {
  return te(1 + Uf.count(hr(e), e), t, 3);
}
function uy(e, t) {
  return te(e.getUTCMilliseconds(), t, 3);
}
function gN(e, t) {
  return uy(e, t) + '000';
}
function yN(e, t) {
  return te(e.getUTCMonth() + 1, t, 2);
}
function vN(e, t) {
  return te(e.getUTCMinutes(), t, 2);
}
function wN(e, t) {
  return te(e.getUTCSeconds(), t, 2);
}
function xN(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function SN(e, t) {
  return te(oy.count(hr(e) - 1, e), t, 2);
}
function sy(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? li(e) : li.ceil(e);
}
function _N(e, t) {
  return (e = sy(e)), te(li.count(hr(e), e) + (hr(e).getUTCDay() === 4), t, 2);
}
function CN(e) {
  return e.getUTCDay();
}
function EN(e, t) {
  return te(sa.count(hr(e) - 1, e), t, 2);
}
function kN(e, t) {
  return te(e.getUTCFullYear() % 100, t, 2);
}
function NN(e, t) {
  return (e = sy(e)), te(e.getUTCFullYear() % 100, t, 2);
}
function TN(e, t) {
  return te(e.getUTCFullYear() % 1e4, t, 4);
}
function MN(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? li(e) : li.ceil(e)),
    te(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function PN() {
  return '+0000';
}
function fp() {
  return '%';
}
function dp(e) {
  return +e;
}
function hp(e) {
  return Math.floor(+e / 1e3);
}
var Cr, Af;
RN({
  dateTime: '%x, %X',
  date: '%-m/%-d/%Y',
  time: '%-I:%M:%S %p',
  periods: ['AM', 'PM'],
  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortMonths: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
});
function RN(e) {
  return (
    (Cr = Rk(e)), (Af = Cr.format), Cr.parse, Cr.utcFormat, Cr.utcParse, Cr
  );
}
function jN(e) {
  return new Date(e);
}
function DN(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function cy(e, t, n, r, i, o, l, a, u, s) {
  var c = iy(),
    d = c.invert,
    f = c.domain,
    m = s('.%L'),
    v = s(':%S'),
    x = s('%I:%M'),
    E = s('%I %p'),
    h = s('%a %d'),
    p = s('%b %d'),
    w = s('%B'),
    g = s('%Y');
  function k(_) {
    return (
      u(_) < _ ? m
      : a(_) < _ ? v
      : l(_) < _ ? x
      : o(_) < _ ? E
      : r(_) < _ ?
        i(_) < _ ?
          h
        : p
      : n(_) < _ ? w
      : g)(_);
  }
  return (
    (c.invert = function (_) {
      return new Date(d(_));
    }),
    (c.domain = function (_) {
      return arguments.length ? f(Array.from(_, DN)) : f().map(jN);
    }),
    (c.ticks = function (_) {
      var T = f();
      return e(T[0], T[T.length - 1], _ ?? 10);
    }),
    (c.tickFormat = function (_, T) {
      return T == null ? k : s(T);
    }),
    (c.nice = function (_) {
      var T = f();
      return (
        (!_ || typeof _.range != 'function') &&
          (_ = t(T[0], T[T.length - 1], _ ?? 10)),
        _ ? f(pk(T, _)) : c
      );
    }),
    (c.copy = function () {
      return ry(c, cy(e, t, n, r, i, o, l, a, u, s));
    }),
    c
  );
}
function LN() {
  return ru.apply(
    cy(Mk, Pk, mn, If, iu, Lo, Of, Ff, Ir, Af).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments
  );
}
function Er(e) {
  return function () {
    return e;
  };
}
function $N(e) {
  let t = 3;
  return (
    (e.digits = function (n) {
      if (!arguments.length) return t;
      if (n == null) t = null;
      else {
        const r = Math.floor(n);
        if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
        t = r;
      }
      return e;
    }),
    () => new KE(t)
  );
}
function bN(e) {
  return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function fy(e) {
  this._context = e;
}
fy.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function FN(e) {
  return new fy(e);
}
function ON(e) {
  return e[0];
}
function UN(e) {
  return e[1];
}
function IN(e, t) {
  var n = Er(!0),
    r = null,
    i = FN,
    o = null,
    l = $N(a);
  (e =
    typeof e == 'function' ? e
    : e === void 0 ? ON
    : Er(e)),
    (t =
      typeof t == 'function' ? t
      : t === void 0 ? UN
      : Er(t));
  function a(u) {
    var s,
      c = (u = bN(u)).length,
      d,
      f = !1,
      m;
    for (r == null && (o = i((m = l()))), s = 0; s <= c; ++s)
      !(s < c && n((d = u[s]), s, u)) === f &&
        ((f = !f) ? o.lineStart() : o.lineEnd()),
        f && o.point(+e(d, s, u), +t(d, s, u));
    if (m) return (o = null), m + '' || null;
  }
  return (
    (a.x = function (u) {
      return arguments.length ?
          ((e = typeof u == 'function' ? u : Er(+u)), a)
        : e;
    }),
    (a.y = function (u) {
      return arguments.length ?
          ((t = typeof u == 'function' ? u : Er(+u)), a)
        : t;
    }),
    (a.defined = function (u) {
      return arguments.length ?
          ((n = typeof u == 'function' ? u : Er(!!u)), a)
        : n;
    }),
    (a.curve = function (u) {
      return arguments.length ? ((i = u), r != null && (o = i(r)), a) : i;
    }),
    (a.context = function (u) {
      return arguments.length ?
          (u == null ? (r = o = null) : (o = i((r = u))), a)
        : r;
    }),
    a
  );
}
function Ai(e, t, n) {
  (this.k = e), (this.x = t), (this.y = n);
}
Ai.prototype = {
  constructor: Ai,
  scale: function (e) {
    return e === 1 ? this : new Ai(this.k * e, this.x, this.y);
  },
  translate: function (e, t) {
    return (e === 0) & (t === 0) ?
        this
      : new Ai(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function (e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function (e) {
    return e * this.k + this.x;
  },
  applyY: function (e) {
    return e * this.k + this.y;
  },
  invert: function (e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function (e) {
    return (e - this.x) / this.k;
  },
  invertY: function (e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function (e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function (e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function () {
    return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
  },
};
Ai.prototype;
function AN({ data: e }) {
  const t = S.useRef(),
    n = () => {
      if (!t.current) {
        console.error('SVG ref is null');
        return;
      }
      Xn(t.current).selectAll('*').remove();
      const r = { top: 20, right: 30, bottom: 100, left: 60 },
        i = t.current.clientWidth - r.left - r.right,
        o = t.current.clientHeight - r.top - r.bottom,
        l = Xn(t.current)
          .attr('width', '100%')
          .attr('height', '100%')
          .append('g')
          .attr('transform', `translate(${r.left},${r.top})`),
        a = e.data.map(m => new Date(m[0])),
        u = e.data.map(m => m[1]),
        s = LN().domain(f2(a)).range([0, i]),
        c = $f()
          .domain([0, Sg(u)])
          .range([o, 0]),
        d = IN()
          .x((m, v) => s(a[v]))
          .y((m, v) => c(u[v]));
      l
        .append('path')
        .data([u])
        .attr('class', 'line')
        .attr('d', d)
        .attr('fill', 'none')
        .attr('stroke', 'orange')
        .attr('stroke-width', 2),
        l
          .append('g')
          .attr('transform', `translate(0,${o})`)
          .call(Cg(s).tickFormat(Af('%Y-%m-%d')))
          .selectAll('text')
          .attr('transform', 'rotate(-45)')
          .style('text-anchor', 'end'),
        l.append('g').call(Eg(c)),
        l
          .append('text')
          .attr('transform', `translate(${i / 2}, ${o + r.top + 60})`)
          .style('text-anchor', 'middle')
          .text(e.columns[0]),
        l
          .append('text')
          .attr('transform', 'rotate(-90)')
          .attr('y', 0 - r.left)
          .attr('x', 0 - o / 2)
          .attr('dy', '1em')
          .style('text-anchor', 'middle')
          .text(e.columns[1]),
        l
          .selectAll('.dot')
          .data(e.data)
          .enter()
          .append('circle')
          .attr('class', 'dot')
          .attr('cx', (m, v) => s(a[v]))
          .attr('cy', (m, v) => c(u[v]))
          .attr('r', 5)
          .attr('fill', 'orange')
          .attr('stroke', 'white')
          .attr('stroke-width', 1.5)
          .on('mouseover', function (m, v) {
            Xn(this).transition().duration(100).attr('r', 7),
              f.transition().duration(200).style('opacity', 0.9),
              f
                .html(`Date: ${v[0]}<br>Jobs Lost: ${v[1]}`)
                .style('left', m.pageX + 5 + 'px')
                .style('top', m.pageY - 28 + 'px');
          })
          .on('mouseout', function () {
            Xn(this).transition().duration(100).attr('r', 5),
              f.transition().duration(500).style('opacity', 0);
          });
      const f = Xn('body')
        .append('div')
        .style('opacity', 0)
        .style('position', 'absolute')
        .style('background', '#f8fafc')
        .style('border', '1px solid #9ca3af')
        .style('border-radius', '5px')
        .style('padding', '5px')
        .style(
          'box-shadow',
          '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
        )
        .style('transition', 'opacity 0.2s');
    };
  return (
    S.useEffect(() => {
      e && e.data && e.data.length > 0 ?
        n()
      : console.error('Invalid or empty data provided to graph');
    }, [e]),
    y.jsx('div', {
      className:
        'mt-6 flex items-center justify-center overflow-x-auto rounded border border-gray-400',
      children: y.jsx('svg', { ref: t, className: 'w-full p-2 h-[500px]' }),
    })
  );
}
function zN({ data: e }) {
  const t = S.useRef(),
    n = () => {
      if (!t.current) {
        console.error('SVG ref is null');
        return;
      }
      Xn(t.current).selectAll('*').remove();
      const r = { top: 20, right: 30, bottom: 100, left: 60 },
        i = t.current.clientWidth - r.left - r.right,
        o = t.current.clientHeight - r.top - r.bottom,
        l = Xn(t.current)
          .attr('width', '100%')
          .attr('height', '100%')
          .append('g')
          .attr('transform', `translate(${r.left},${r.top})`),
        a = e.data.map(d => d[0]),
        u = e.data.map(d => d[1]),
        s = ny().domain(a).range([0, i]).padding(0.1),
        c = $f()
          .domain([0, Sg(u)])
          .range([o, 0]);
      l
        .selectAll('.bar')
        .data(e.data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => s(d[0]))
        .attr('width', s.bandwidth())
        .attr('y', d => c(d[1]))
        .attr('height', d => o - c(d[1]))
        .attr('fill', 'steelblue'),
        l
          .append('g')
          .attr('transform', `translate(0,${o})`)
          .call(Cg(s))
          .selectAll('text')
          .attr('transform', 'translate(-10,0)rotate(-45)')
          .style('text-anchor', 'end'),
        l.append('g').call(Eg(c)),
        l
          .append('text')
          .attr('transform', `translate(${i / 2}, ${o + r.top + 60})`)
          .style('text-anchor', 'middle')
          .text(e.columns[0]),
        l
          .append('text')
          .attr('transform', 'rotate(-90)')
          .attr('y', 0 - r.left)
          .attr('x', 0 - o / 2)
          .attr('dy', '1em')
          .style('text-anchor', 'middle')
          .text(e.columns[1]);
    };
  return (
    S.useEffect(() => {
      e && e.data && e.data.length > 0 ?
        n()
      : console.error('Invalid or empty data provided to graph');
    }, [e]),
    y.jsx('div', {
      className:
        'mt-6 flex items-center justify-center overflow-x-auto rounded border border-gray-400',
      children: y.jsx('svg', { ref: t, className: 'w-full p-2 h-[500px]' }),
    })
  );
}
function BN({ post: e }) {
  const t = gr(k => k.session.user),
    n = fi(),
    r = Po(),
    { setModalContent: i } = yr(),
    [o, l] = S.useState(''),
    [a, u] = S.useState(''),
    [s, c] = S.useState(!1),
    [d, f] = S.useState(null),
    [m, v] = S.useState({});
  S.useEffect(() => {
    n.data && n.data.message && v(() => ({ ...m, message: n.data.message }));
  }, [n.data]);
  const x = () => {
      v({});
      const k = {};
      return (
        s ?
          a.length === 0 && (k.comment = 'Comment cannot be empty')
        : o.length === 0 && (k.comment = 'Comment cannot be empty'),
        k
      );
    },
    E = k => {
      c(!0), f(k.id), u(k.body);
    },
    h = async k => {
      k.preventDefault();
      const _ = x();
      Object.keys(_).length === 0 &&
        (await n.submit(
          { id: d, comment_body: a },
          { method: 'PUT', action: '/comments/edit' }
        ),
        c(!1),
        u(''),
        f(null),
        r('.')),
        v(_);
    },
    p = async k => {
      await n.submit(
        { id: k },
        { method: 'DELETE', action: '/comments/delete' }
      ),
        r('.');
    },
    w = k => {
      i(y.jsx(Cf, { onDelete: () => p(k) }));
    },
    g = async k => {
      k.preventDefault();
      const _ = x();
      Object.keys(_).length === 0 &&
        (n.submit(
          { comment_body: o },
          { method: 'POST', action: `/comments/${e.id}` }
        ),
        l(''),
        k.target.reset()),
        v(_);
    };
  return y.jsxs('div', {
    className: 'mt-14',
    children: [
      y.jsx('h2', { className: 'font-bold underline', children: 'Comments' }),
      t &&
        y.jsxs('form', {
          className: 'mt-4 flex flex-col',
          children: [
            y.jsx('textarea', {
              name: 'body',
              value: o,
              onChange: k => l(k.target.value),
              className: 'w-full rounded-md border border-gray-300 p-2',
              rows: 4,
              placeholder: 'Any thoughts?',
            }),
            !s &&
              m.comment &&
              y.jsx('p', { className: 'text-red-500', children: m.comment }),
            y.jsx('button', {
              onClick: g,
              className: 'mt-2 self-end text-sm btn',
              children: 'Add Comment',
            }),
          ],
        }),
      e.comments.length === 0 ?
        y.jsx('p', {
          className: 'font-semibold text-gray-800',
          children: 'No comments yet',
        })
      : e.comments.map(k =>
          y.jsx(
            'div',
            {
              className: 'mt-4 card',
              children:
                s && d === k.id ?
                  y.jsxs('form', {
                    onSubmit: h,
                    className: 'mt-4 flex flex-col',
                    children: [
                      y.jsx('textarea', {
                        name: 'body',
                        value: a,
                        onChange: _ => u(_.target.value),
                        className:
                          'w-full rounded-md border border-gray-300 p-2',
                        rows: 4,
                        placeholder: 'Edit your comment...',
                      }),
                      m.comment &&
                        y.jsx('p', {
                          className: 'text-red-500',
                          children: m.comment,
                        }),
                      y.jsx('button', {
                        type: 'submit',
                        className: 'mt-2 self-end text-sm btn',
                        children: 'Update Comment',
                      }),
                    ],
                  })
                : y.jsxs(y.Fragment, {
                    children: [
                      y.jsx(Kt, {
                        to:
                          t && t.username === k.user.username ?
                            '/profile'
                          : `/users/${k.user.id}`,
                        className: 'text-sm text-slate-500',
                        children: k.user.username,
                      }),
                      y.jsx('p', {
                        className: 'text-gray-800',
                        children: k.body,
                      }),
                      t &&
                        t.id === k.user.id &&
                        y.jsxs('div', {
                          className: 'self-end space-x-3',
                          children: [
                            y.jsx('button', {
                              onClick: () => E(k),
                              className: 'btn-edit',
                              children: 'Edit',
                            }),
                            y.jsx('button', {
                              onClick: () => w(k.id),
                              className: 'btn-delete',
                              children: 'Delete',
                            }),
                          ],
                        }),
                    ],
                  }),
            },
            k.id
          )
        ),
    ],
  });
}
function HN() {
  var v, x, E, h, p, w;
  const { addToast: e } = Sf(),
    { setModalContent: t } = yr(),
    n = Po(),
    r = Za(),
    i = fi(),
    o = gr(g => g.session.user),
    l = (v = r == null ? void 0 : r.graph) == null ? void 0 : v.type,
    a = (x = r == null ? void 0 : r.graph) == null ? void 0 : x.col1,
    u = (E = r == null ? void 0 : r.graph) == null ? void 0 : E.col2,
    [s, c] = S.useState(-1),
    d = (g, k) => {
      g.preventDefault(), c(k.id);
    },
    f = async g => {
      await i.submit({ id: g }, { method: 'DELETE', action: '/delete' }),
        e('Post deleted successfully!'),
        i.load('/'),
        n('/');
    },
    m = g => {
      t(y.jsx(Cf, { onDelete: () => f(g) }));
    };
  return r.error === 'Post not found' ?
      y.jsx(wg, {})
    : y.jsxs('div', {
        className: 'container',
        children: [
          y.jsx('div', {
            className: 'mt-14 flex flex-col card',
            children:
              s === r.id ?
                y.jsx(xg, { setEditingPostId: c, post: r, fetcher: i })
              : y.jsxs(y.Fragment, {
                  children: [
                    y.jsx('h2', {
                      className: 'font-bold underline',
                      children: r.title,
                    }),
                    y.jsxs(Kt, {
                      className:
                        'mb-3 w-fit text-sm text-slate-500 hover:text-slate-600 hover:underline',
                      onClick: g => g.stopPropagation(),
                      to:
                        (
                          o &&
                          ((h = r.user) == null ? void 0 : h.username) ===
                            (o == null ? void 0 : o.username)
                        ) ?
                          '/profile'
                        : `/user/${(p = r.user) == null ? void 0 : p.id}`,
                      children: [
                        'by ',
                        (w = r.user) == null ? void 0 : w.username,
                      ],
                    }),
                    y.jsx('p', {
                      className: 'text-lg text-gray-800',
                      children: r.body,
                    }),
                    o &&
                      y.jsx(y.Fragment, {
                        children:
                          (o == null ? void 0 : o.id) !== r.user.id ?
                            y.jsx(_f, { post: r, user: o })
                          : y.jsxs('div', {
                              className: 'self-end space-x-3',
                              children: [
                                y.jsx('button', {
                                  onClick: g => d(g, r),
                                  className: 'btn-edit',
                                  children: 'Edit',
                                }),
                                y.jsx('button', {
                                  onClick: () => m(r.id),
                                  className: 'btn-delete',
                                  children: 'Delete',
                                }),
                              ],
                            }),
                      }),
                    l === 'table' && y.jsx(i2, { data: r.dataframe }),
                    l === 'bar' &&
                      y.jsx(zN, { data: r.dataframe, col1: a, col2: u }),
                    l === 'line' &&
                      y.jsx(AN, { data: r.dataframe, col1: a, col2: u }),
                  ],
                }),
          }),
          y.jsx(BN, { post: r }),
        ],
      });
}
function dy(e) {
  return di({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M13 14.0619V22H4C4 17.5817 7.58172 14 12 14C12.3387 14 12.6724 14.021 13 14.0619ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z',
        },
        child: [],
      },
    ],
  })(e);
}
function VN() {
  const e = Po(),
    t = Za(),
    n = gr(o => o.session.user);
  n || e('/');
  const r = S.useMemo(
      () => t.filter(o => o.saves.some(l => l.userId === n.id)),
      [t, n.id]
    ),
    i = (o, l) => (o.length <= l ? o : o.slice(0, l) + '...');
  return y.jsxs('div', {
    className: 'container mx-auto px-4',
    children: [
      y.jsxs('aside', {
        className: 'card w-1/6 bg-gray-100 absolute left-20',
        children: [
          y.jsx('h3', {
            className: 'text-lg font-bold mb-4',
            children: 'Following',
          }),
          n.following.length > 0 ?
            y.jsx('ul', {
              children: n.following.map(o =>
                y.jsx(
                  'li',
                  {
                    className: 'mb-2',
                    children: y.jsxs(Kt, {
                      to: `/profile/${o.id}`,
                      className:
                        'text-blue-600 transition-all duration-200 hover:text-blue-800 hover:underline',
                      children: [
                        y.jsx(dy, {
                          className: 'text-2xl text-blue-600 inline-block mr-1',
                        }),
                        o.username,
                      ],
                    }),
                  },
                  o.id
                )
              ),
            })
          : y.jsx('p', {
              className: 'text-gray-600',
              children: 'You are not following anyone yet.',
            }),
        ],
      }),
      y.jsx('h2', { className: 'mb-1', children: 'Profile' }),
      y.jsxs('h4', {
        className: 'text-gray-500 mb-4',
        children: [
          n == null ? void 0 : n.followCount,
          ' ',
          (n == null ? void 0 : n.followCount) === 1 ? 'Follower' : 'Followers',
        ],
      }),
      r.length === 0 ?
        y.jsx('h3', {
          className: 'mt-8 text-center',
          children: "You haven't saved any posts yet!",
        })
      : y.jsx('h3', { children: 'Saved Posts' }),
      y.jsx('div', {
        className: 'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3',
        children: r.map(o =>
          y.jsxs(
            Kt,
            {
              className: 'relative card',
              to: `/post/${o.id}`,
              children: [
                y.jsx('div', {
                  className: 'absolute top-3 right-3 w-fit',
                  children: y.jsx(_f, { post: o, user: n }),
                }),
                y.jsx('h3', {
                  className: 'mb-2 text-xl font-semibold',
                  children: o.title,
                }),
                y.jsx('p', {
                  className: 'overflow-hidden text-gray-600',
                  children: i(o.body, 100),
                }),
              ],
            },
            o.id
          )
        ),
      }),
    ],
  });
}
function WN(e) {
  return di({
    tag: 'svg',
    attr: { viewBox: '0 0 15 15', fill: 'none' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z',
          fill: 'currentColor',
        },
        child: [],
      },
    ],
  })(e);
}
function YN({ userId: e, currentUser: t }) {
  var l;
  const n = fi(),
    [r, i] = S.useState(
      (l = t == null ? void 0 : t.following) == null ? void 0 : l.includes(e)
    );
  S.useEffect(() => {
    var a;
    i((a = t.following) == null ? void 0 : a.includes(e));
  }, [t == null ? void 0 : t.following, e]);
  const o = async () => {
    i(a => !a),
      r ?
        await n.submit({ userId: e }, { method: 'POST', action: '/unfollow' })
      : await n.submit({ userId: e }, { method: 'POST', action: '/follow' });
  };
  return y.jsxs('button', {
    onClick: o,
    className:
      'flex w-fit cursor-pointer items-center justify-center gap-1 rounded-md border px-2 py-1 transition-colors duration-200 hover:bg-gray-200',
    children: [
      y.jsx(dy, {
        className: `text-2xl ${r ? 'text-blue-600' : 'text-gray-500'}`,
      }),
      r ? 'Unfollow' : 'Follow',
    ],
  });
}
function QN() {
  const e = Po(),
    { user: t, posts: n } = Za(),
    r = gr(o => o.session.user);
  r && t.id === r.id && e('/profile');
  const i = (o, l) => (o.length <= l ? o : o.slice(0, l) + '...');
  return (
    t &&
    y.jsxs('div', {
      className: 'container',
      children: [
        y.jsxs('div', {
          className: 'card',
          children: [
            y.jsxs('section', {
              className: 'flex items-end justify-center gap-3',
              children: [
                y.jsx(WN, { className: 'text-6xl text-blue-600' }),
                y.jsxs('h2', {
                  className: 'text-gray-800',
                  children: [
                    t == null ? void 0 : t.firstName,
                    ' ',
                    t == null ? void 0 : t.lastName,
                  ],
                }),
              ],
            }),
            y.jsxs('p', {
              className: 'mb-0 text-center text-gray-400',
              children: [
                t == null ? void 0 : t.followersCount,
                ' ',
                (t == null ? void 0 : t.followersCount) === 1 ?
                  'Follower'
                : 'Followers',
              ],
            }),
            y.jsxs('section', {
              className:
                'mb-4 flex justify-center gap-4 border-b border-amber-400 pb-2',
              children: [
                y.jsx('h4', {
                  className: 'text-gray-600',
                  children: t == null ? void 0 : t.field,
                }),
                y.jsx('h4', {
                  className: 'text-gray-600',
                  children: t == null ? void 0 : t.email,
                }),
              ],
            }),
            r &&
              y.jsx(YN, { userId: t == null ? void 0 : t.id, currentUser: r }),
            y.jsxs('section', {
              className: 'mt-4 mb-0',
              children: [
                y.jsx('h3', {
                  className: 'mb-0 underline',
                  children: 'About Me',
                }),
                y.jsx('p', {
                  className: 'font-medium text-gray-800',
                  children: t.bio,
                }),
              ],
            }),
          ],
        }),
        y.jsxs('section', {
          className: 'mt-1',
          children: [
            y.jsx('h2', { className: 'underline', children: 'Recent Posts' }),
            n.length > 0 ?
              n == null ?
                void 0
              : n.map(o =>
                  y.jsxs(
                    'div',
                    {
                      className: 'card',
                      children: [
                        y.jsx('h3', {
                          className: 'text-gray-800',
                          children: o == null ? void 0 : o.title,
                        }),
                        y.jsx('p', {
                          className: 'text-gray-800',
                          children: i(o.body, 300),
                        }),
                      ],
                    },
                    o.id
                  )
                )
            : y.jsx('p', {
                className: 'text-center font-semibold',
                children: "User hasn't posted yet.",
              }),
          ],
        }),
      ],
    })
  );
}
const KN = Zx([
  {
    element: y.jsx(JS, {}),
    errorElement: y.jsx(e2, {}),
    children: [
      {
        path: '/',
        element: y.jsx(r2, {}),
        loader: async () => (await fetch('/api/posts')).json(),
      },
      {
        path: 'post/:postId',
        element: y.jsx(HN, {}),
        loader: async ({ params: e }) => {
          const { postId: t } = e;
          return (await fetch(`/api/posts/${t}`)).json();
        },
      },
      {
        path: 'user/:userId',
        element: y.jsx(QN, {}),
        loader: async ({ params: e }) => {
          const { userId: t } = e,
            n = await fetch(`/api/users/${t}`),
            r = await fetch(`/api/users/${t}/posts`),
            i = await n.json(),
            o = await r.json();
          return { user: i, posts: o };
        },
      },
      {
        path: 'profile',
        element: y.jsx(VN, {}),
        loader: async () => (await fetch('/api/posts')).json(),
      },
      {
        path: 'follow',
        action: async ({ request: e }) => {
          const t = await e.formData();
          return await (
            await fetch(`/api/users/${t.get('userId')}/follow`, {
              method: 'POST',
              body: t,
            })
          ).json();
        },
      },
      {
        path: 'unfollow',
        action: async ({ request: e }) => {
          const t = await e.formData();
          return await (
            await fetch(`/api/users/${t.get('userId')}/follow`, {
              method: 'DELETE',
            })
          ).json();
        },
      },
      {
        path: 'new',
        action: async ({ request: e }) => {
          const t = await e.formData();
          return await (
            await fetch('/api/posts', { method: 'POST', body: t })
          ).json();
        },
      },
      {
        path: 'delete',
        action: async ({ request: e }) => {
          const t = await e.formData();
          return await (
            await fetch(`/api/posts/${t.get('id')}`, { method: 'DELETE' })
          ).json();
        },
      },
      {
        path: 'edit',
        action: async ({ request: e }) => {
          const t = await e.formData();
          return await (
            await fetch(`/api/posts/${t.get('id')}`, { method: 'PUT', body: t })
          ).json();
        },
      },
      {
        path: 'save',
        action: async ({ request: e }) => {
          const t = await e.formData();
          return await (
            await fetch(`/api/posts/${t.get('postId')}/save`, {
              method: 'POST',
            })
          ).json();
        },
      },
      {
        path: 'unsave',
        action: async ({ request: e }) => {
          const t = await e.formData();
          return await (
            await fetch(`/api/posts/${t.get('postId')}/save`, {
              method: 'DELETE',
            })
          ).json();
        },
      },
      {
        path: 'comments/:postId',
        action: async ({ request: e, params: t }) => {
          const n = await e.formData(),
            { postId: r } = t;
          return await (
            await fetch(`/api/posts/${r}/comments`, { method: 'POST', body: n })
          ).json();
        },
      },
      {
        path: 'comments/delete',
        action: async ({ request: e }) => {
          const t = await e.formData();
          return await (
            await fetch(`/api/comments/${t.get('id')}`, { method: 'DELETE' })
          ).json();
        },
      },
      {
        path: 'comments/edit',
        action: async ({ request: e }) => {
          const t = await e.formData();
          return await (
            await fetch(`/api/comments/${t.get('id')}`, {
              method: 'PUT',
              body: t,
            })
          ).json();
        },
      },
      { path: '*', element: y.jsx(wg, {}) },
    ],
  },
]);
const XN = $S();
es.createRoot(document.getElementById('root')).render(
  y.jsx(an.StrictMode, {
    children: y.jsx(Dw, { store: XN, children: y.jsx(oS, { router: KN }) }),
  })
);
