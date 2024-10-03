function pf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
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
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver(l => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials' ? (o.credentials = 'include')
      : l.crossOrigin === 'anonymous' ? (o.credentials = 'omit')
      : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function hf(e) {
  return (
      e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ) ?
      e.default
    : e;
}
var mf = { exports: {} },
  Io = {},
  vf = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xl = Symbol.for('react.element'),
  Fh = Symbol.for('react.portal'),
  Ih = Symbol.for('react.fragment'),
  Uh = Symbol.for('react.strict_mode'),
  $h = Symbol.for('react.profiler'),
  Ah = Symbol.for('react.provider'),
  Bh = Symbol.for('react.context'),
  Vh = Symbol.for('react.forward_ref'),
  Wh = Symbol.for('react.suspense'),
  Hh = Symbol.for('react.memo'),
  Kh = Symbol.for('react.lazy'),
  Ds = Symbol.iterator;
function Qh(e) {
  return e === null || typeof e != 'object' ?
      null
    : ((e = (Ds && e[Ds]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var yf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gf = Object.assign,
  wf = {};
function vr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wf),
    (this.updater = n || yf);
}
vr.prototype.isReactComponent = {};
vr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
vr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Sf() {}
Sf.prototype = vr.prototype;
function fa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wf),
    (this.updater = n || yf);
}
var da = (fa.prototype = new Sf());
da.constructor = fa;
gf(da, vr.prototype);
da.isPureReactComponent = !0;
var Ms = Array.isArray,
  xf = Object.prototype.hasOwnProperty,
  pa = { current: null },
  Ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cf(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      xf.call(t, r) && !Ef.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: xl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: pa.current,
  };
}
function bh(e, t) {
  return {
    $$typeof: xl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ha(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === xl;
}
function Yh(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Os = /\/+/g;
function Mi(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ?
      Yh('' + e.key)
    : t.toString(36);
}
function Xl(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case xl:
          case Fh:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + Mi(i, 0) : r),
      Ms(l) ?
        ((n = ''),
        e != null && (n = e.replace(Os, '$&/') + '/'),
        Xl(l, t, n, '', function (s) {
          return s;
        }))
      : l != null &&
        (ha(l) &&
          (l = bh(
            l,
            n +
              (!l.key || (i && i.key === l.key) ?
                ''
              : ('' + l.key).replace(Os, '$&/') + '/') +
              e
          )),
        t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Ms(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Mi(o, u);
      i += Xl(o, t, n, a, l);
    }
  else if (((a = Qh(e)), typeof a == 'function'))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Mi(o, u++)), (i += Xl(o, t, n, a, l));
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
  return i;
}
function Ll(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Xl(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Xh(e) {
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
var Ue = { current: null },
  Gl = { transition: null },
  Gh = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: Gl,
    ReactCurrentOwner: pa,
  };
K.Children = {
  map: Ll,
  forEach: function (e, t, n) {
    Ll(
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
      Ll(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ll(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ha(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
K.Component = vr;
K.Fragment = Ih;
K.Profiler = $h;
K.PureComponent = fa;
K.StrictMode = Uh;
K.Suspense = Wh;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gh;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = gf({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = pa.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      xf.call(t, a) &&
        !Ef.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: xl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: Bh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ah, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = Cf;
K.createFactory = function (e) {
  var t = Cf.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: Vh, render: e };
};
K.isValidElement = ha;
K.lazy = function (e) {
  return { $$typeof: Kh, _payload: { _status: -1, _result: e }, _init: Xh };
};
K.memo = function (e, t) {
  return { $$typeof: Hh, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Gl.transition;
  Gl.transition = {};
  try {
    e();
  } finally {
    Gl.transition = t;
  }
};
K.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
K.useCallback = function (e, t) {
  return Ue.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Ue.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Ue.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Ue.current.useEffect(e, t);
};
K.useId = function () {
  return Ue.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Ue.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Ue.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Ue.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Ue.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Ue.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Ue.current.useRef(e);
};
K.useState = function (e) {
  return Ue.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Ue.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Ue.current.useTransition();
};
K.version = '18.2.0';
vf.exports = K;
var g = vf.exports;
const zt = hf(g),
  Jh = pf({ __proto__: null, default: zt }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zh = g,
  qh = Symbol.for('react.element'),
  em = Symbol.for('react.fragment'),
  tm = Object.prototype.hasOwnProperty,
  nm = Zh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  rm = { key: !0, ref: !0, __self: !0, __source: !0 };
function kf(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) tm.call(t, r) && !rm.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: qh,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: nm.current,
  };
}
Io.Fragment = em;
Io.jsx = kf;
Io.jsxs = kf;
mf.exports = Io;
var x = mf.exports,
  du = {},
  Pf = { exports: {} },
  Ge = {},
  Rf = { exports: {} },
  _f = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, F) {
    var V = D.length;
    D.push(F);
    e: for (; 0 < V; ) {
      var q = (V - 1) >>> 1,
        J = D[q];
      if (0 < l(J, F)) (D[q] = F), (D[V] = J), (V = q);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var F = D[0],
      V = D.pop();
    if (V !== F) {
      D[0] = V;
      e: for (var q = 0, J = D.length, qe = J >>> 1; q < qe; ) {
        var Oe = 2 * (q + 1) - 1,
          yn = D[Oe],
          Tt = Oe + 1,
          Un = D[Tt];
        if (0 > l(yn, V))
          Tt < J && 0 > l(Un, yn) ?
            ((D[q] = Un), (D[Tt] = V), (q = Tt))
          : ((D[q] = yn), (D[Oe] = V), (q = Oe));
        else if (Tt < J && 0 > l(Un, V)) (D[q] = Un), (D[Tt] = V), (q = Tt);
        else break e;
      }
    }
    return F;
  }
  function l(D, F) {
    var V = D.sortIndex - F.sortIndex;
    return V !== 0 ? V : D.id - F.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    s = [],
    c = 1,
    m = null,
    h = 3,
    E = !1,
    y = !1,
    w = !1,
    R = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(D) {
    for (var F = n(s); F !== null; ) {
      if (F.callback === null) r(s);
      else if (F.startTime <= D)
        r(s), (F.sortIndex = F.expirationTime), t(a, F);
      else break;
      F = n(s);
    }
  }
  function p(D) {
    if (((w = !1), v(D), !y))
      if (n(a) !== null) (y = !0), Ht(_);
      else {
        var F = n(s);
        F !== null && Nt(p, F.startTime - D);
      }
  }
  function _(D, F) {
    (y = !1), w && ((w = !1), d(L), (L = -1)), (E = !0);
    var V = h;
    try {
      for (
        v(F), m = n(a);
        m !== null && (!(m.expirationTime > F) || (D && !Y()));

      ) {
        var q = m.callback;
        if (typeof q == 'function') {
          (m.callback = null), (h = m.priorityLevel);
          var J = q(m.expirationTime <= F);
          (F = e.unstable_now()),
            typeof J == 'function' ? (m.callback = J) : m === n(a) && r(a),
            v(F);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var qe = !0;
      else {
        var Oe = n(s);
        Oe !== null && Nt(p, Oe.startTime - F), (qe = !1);
      }
      return qe;
    } finally {
      (m = null), (h = V), (E = !1);
    }
  }
  var N = !1,
    P = null,
    L = -1,
    I = 5,
    U = -1;
  function Y() {
    return !(e.unstable_now() - U < I);
  }
  function ke() {
    if (P !== null) {
      var D = e.unstable_now();
      U = D;
      var F = !0;
      try {
        F = P(!0, D);
      } finally {
        F ? Se() : ((N = !1), (P = null));
      }
    } else N = !1;
  }
  var Se;
  if (typeof f == 'function')
    Se = function () {
      f(ke);
    };
  else if (typeof MessageChannel < 'u') {
    var jt = new MessageChannel(),
      ce = jt.port2;
    (jt.port1.onmessage = ke),
      (Se = function () {
        ce.postMessage(null);
      });
  } else
    Se = function () {
      R(ke, 0);
    };
  function Ht(D) {
    (P = D), N || ((N = !0), Se());
  }
  function Nt(D, F) {
    L = R(function () {
      D(e.unstable_now());
    }, F);
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
      y || E || ((y = !0), Ht(_));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D ?
        console.error(
          'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
        )
      : (I = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (D) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = h;
      }
      var V = h;
      h = F;
      try {
        return D();
      } finally {
        h = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, F) {
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
      var V = h;
      h = D;
      try {
        return F();
      } finally {
        h = V;
      }
    }),
    (e.unstable_scheduleCallback = function (D, F, V) {
      var q = e.unstable_now();
      switch (
        (typeof V == 'object' && V !== null ?
          ((V = V.delay), (V = typeof V == 'number' && 0 < V ? q + V : q))
        : (V = q),
        D)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = V + J),
        (D = {
          id: c++,
          callback: F,
          priorityLevel: D,
          startTime: V,
          expirationTime: J,
          sortIndex: -1,
        }),
        V > q ?
          ((D.sortIndex = V),
          t(s, D),
          n(a) === null &&
            D === n(s) &&
            (w ? (d(L), (L = -1)) : (w = !0), Nt(p, V - q)))
        : ((D.sortIndex = J), t(a, D), y || E || ((y = !0), Ht(_))),
        D
      );
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (D) {
      var F = h;
      return function () {
        var V = h;
        h = F;
        try {
          return D.apply(this, arguments);
        } finally {
          h = V;
        }
      };
    });
})(_f);
Rf.exports = _f;
var lm = Rf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jf = g,
  Xe = lm;
function j(e) {
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
var Nf = new Set(),
  tl = {};
function zn(e, t) {
  ar(e, t), ar(e + 'Capture', t);
}
function ar(e, t) {
  for (tl[e] = t, e = 0; e < t.length; e++) Nf.add(t[e]);
}
var It = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  pu = Object.prototype.hasOwnProperty,
  om =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  zs = {},
  Fs = {};
function im(e) {
  return (
    pu.call(Fs, e) ? !0
    : pu.call(zs, e) ? !1
    : om.test(e) ? (Fs[e] = !0)
    : ((zs[e] = !0), !1)
  );
}
function um(e, t, n, r) {
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
function am(e, t, n, r) {
  if (t === null || typeof t > 'u' || um(e, t, n, r)) return !0;
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
function $e(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var je = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    je[e] = new $e(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  je[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  je[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  je[e] = new $e(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    je[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  je[e] = new $e(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  je[e] = new $e(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  je[e] = new $e(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  je[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ma = /[\-:]([a-z])/g;
function va(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ma, va);
    je[t] = new $e(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(ma, va);
    je[t] = new $e(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(ma, va);
  je[t] = new $e(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  je[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new $e(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  je[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ya(e, t, n, r) {
  var l = je.hasOwnProperty(t) ? je[t] : null;
  (l !== null ?
    l.type !== 0
  : r ||
    !(2 < t.length) ||
    (t[0] !== 'o' && t[0] !== 'O') ||
    (t[1] !== 'n' && t[1] !== 'N')) &&
    (am(t, n, l, r) && (n = null),
    r || l === null ?
      im(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
    : l.mustUseProperty ?
      (e[l.propertyName] =
        n === null ?
          l.type === 3 ?
            !1
          : ''
        : n)
    : ((t = l.attributeName),
      (r = l.attributeNamespace),
      n === null ?
        e.removeAttribute(t)
      : ((l = l.type),
        (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
        r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Bt = jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Dl = Symbol.for('react.element'),
  Vn = Symbol.for('react.portal'),
  Wn = Symbol.for('react.fragment'),
  ga = Symbol.for('react.strict_mode'),
  hu = Symbol.for('react.profiler'),
  Tf = Symbol.for('react.provider'),
  Lf = Symbol.for('react.context'),
  wa = Symbol.for('react.forward_ref'),
  mu = Symbol.for('react.suspense'),
  vu = Symbol.for('react.suspense_list'),
  Sa = Symbol.for('react.memo'),
  Xt = Symbol.for('react.lazy'),
  Df = Symbol.for('react.offscreen'),
  Is = Symbol.iterator;
function _r(e) {
  return e === null || typeof e != 'object' ?
      null
    : ((e = (Is && e[Is]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var se = Object.assign,
  Oi;
function Ar(e) {
  if (Oi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Oi = (t && t[1]) || '';
    }
  return (
    `
` +
    Oi +
    e
  );
}
var zi = !1;
function Fi(e, t) {
  if (!e || zi) return '';
  zi = !0;
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
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (zi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ar(e) : '';
}
function sm(e) {
  switch (e.tag) {
    case 5:
      return Ar(e.type);
    case 16:
      return Ar('Lazy');
    case 13:
      return Ar('Suspense');
    case 19:
      return Ar('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Fi(e.type, !1)), e;
    case 11:
      return (e = Fi(e.type.render, !1)), e;
    case 1:
      return (e = Fi(e.type, !0)), e;
    default:
      return '';
  }
}
function yu(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Wn:
      return 'Fragment';
    case Vn:
      return 'Portal';
    case hu:
      return 'Profiler';
    case ga:
      return 'StrictMode';
    case mu:
      return 'Suspense';
    case vu:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Lf:
        return (e.displayName || 'Context') + '.Consumer';
      case Tf:
        return (e._context.displayName || 'Context') + '.Provider';
      case wa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Sa:
        return (
          (t = e.displayName || null), t !== null ? t : yu(e.type) || 'Memo'
        );
      case Xt:
        (t = e._payload), (e = e._init);
        try {
          return yu(e(t));
        } catch {}
    }
  return null;
}
function cm(e) {
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
      return yu(t);
    case 8:
      return t === ga ? 'StrictMode' : 'Mode';
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
function cn(e) {
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
function Mf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function fm(e) {
  var t = Mf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ml(e) {
  e._valueTracker || (e._valueTracker = fm(e));
}
function Of(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e &&
      (r =
        Mf(e) ?
          e.checked ?
            'true'
          : 'false'
        : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ao(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function gu(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Us(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = cn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio' ?
          t.checked != null
        : t.value != null,
    });
}
function zf(e, t) {
  (t = t.checked), t != null && ya(e, 'checked', t, !1);
}
function wu(e, t) {
  zf(e, t);
  var n = cn(t.value),
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
    Su(e, t.type, n)
  : t.hasOwnProperty('defaultValue') && Su(e, t.type, cn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function $s(e, t, n) {
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
function Su(e, t, n) {
  (t !== 'number' || ao(e.ownerDocument) !== e) &&
    (n == null ?
      (e.defaultValue = '' + e._wrapperState.initialValue)
    : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Br = Array.isArray;
function tr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + cn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function xu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function As(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (Br(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: cn(n) };
}
function Ff(e, t) {
  var n = cn(t.value),
    r = cn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Bs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function If(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Eu(e, t) {
  return (
    e == null || e === 'http://www.w3.org/1999/xhtml' ? If(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject' ?
      'http://www.w3.org/1999/xhtml'
    : e
  );
}
var Ol,
  Uf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction ?
        function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Ol = Ol || document.createElement('div'),
          Ol.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Ol.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function nl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Hr = {
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
  dm = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Hr).forEach(function (e) {
  dm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Hr[t] = Hr[e]);
  });
});
function $f(e, t, n) {
  return (
    t == null || typeof t == 'boolean' || t === '' ? ''
    : n || typeof t != 'number' || t === 0 || (Hr.hasOwnProperty(e) && Hr[e]) ?
      ('' + t).trim()
    : t + 'px'
  );
}
function Af(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = $f(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var pm = se(
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
function Cu(e, t) {
  if (t) {
    if (pm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(j(62));
  }
}
function ku(e, t) {
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
var Pu = null;
function xa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ru = null,
  nr = null,
  rr = null;
function Vs(e) {
  if ((e = kl(e))) {
    if (typeof Ru != 'function') throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Vo(t)), Ru(e.stateNode, e.type, t));
  }
}
function Bf(e) {
  nr ?
    rr ? rr.push(e)
    : (rr = [e])
  : (nr = e);
}
function Vf() {
  if (nr) {
    var e = nr,
      t = rr;
    if (((rr = nr = null), Vs(e), t)) for (e = 0; e < t.length; e++) Vs(t[e]);
  }
}
function Wf(e, t) {
  return e(t);
}
function Hf() {}
var Ii = !1;
function Kf(e, t, n) {
  if (Ii) return e(t, n);
  Ii = !0;
  try {
    return Wf(e, t, n);
  } finally {
    (Ii = !1), (nr !== null || rr !== null) && (Hf(), Vf());
  }
}
function rl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Vo(n);
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
  if (n && typeof n != 'function') throw Error(j(231, t, typeof n));
  return n;
}
var _u = !1;
if (It)
  try {
    var jr = {};
    Object.defineProperty(jr, 'passive', {
      get: function () {
        _u = !0;
      },
    }),
      window.addEventListener('test', jr, jr),
      window.removeEventListener('test', jr, jr);
  } catch {
    _u = !1;
  }
function hm(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Kr = !1,
  so = null,
  co = !1,
  ju = null,
  mm = {
    onError: function (e) {
      (Kr = !0), (so = e);
    },
  };
function vm(e, t, n, r, l, o, i, u, a) {
  (Kr = !1), (so = null), hm.apply(mm, arguments);
}
function ym(e, t, n, r, l, o, i, u, a) {
  if ((vm.apply(this, arguments), Kr)) {
    if (Kr) {
      var s = so;
      (Kr = !1), (so = null);
    } else throw Error(j(198));
    co || ((co = !0), (ju = s));
  }
}
function Fn(e) {
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
function Qf(e) {
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
function Ws(e) {
  if (Fn(e) !== e) throw Error(j(188));
}
function gm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Fn(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ws(l), e;
        if (o === r) return Ws(l), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function bf(e) {
  return (e = gm(e)), e !== null ? Yf(e) : null;
}
function Yf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xf = Xe.unstable_scheduleCallback,
  Hs = Xe.unstable_cancelCallback,
  wm = Xe.unstable_shouldYield,
  Sm = Xe.unstable_requestPaint,
  me = Xe.unstable_now,
  xm = Xe.unstable_getCurrentPriorityLevel,
  Ea = Xe.unstable_ImmediatePriority,
  Gf = Xe.unstable_UserBlockingPriority,
  fo = Xe.unstable_NormalPriority,
  Em = Xe.unstable_LowPriority,
  Jf = Xe.unstable_IdlePriority,
  Uo = null,
  kt = null;
function Cm(e) {
  if (kt && typeof kt.onCommitFiberRoot == 'function')
    try {
      kt.onCommitFiberRoot(Uo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mt = Math.clz32 ? Math.clz32 : Rm,
  km = Math.log,
  Pm = Math.LN2;
function Rm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((km(e) / Pm) | 0)) | 0;
}
var zl = 64,
  Fl = 4194304;
function Vr(e) {
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
function po(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Vr(u)) : ((o &= i), o !== 0 && (r = Vr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Vr(i)) : o !== 0 && (r = Vr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - mt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function _m(e, t) {
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
function jm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - mt(o),
      u = 1 << i,
      a = l[i];
    a === -1 ?
      (!(u & n) || u & r) && (l[i] = _m(u, t))
    : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Nu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e
    : e & 1073741824 ? 1073741824
    : 0
  );
}
function Zf() {
  var e = zl;
  return (zl <<= 1), !(zl & 4194240) && (zl = 64), e;
}
function Ui(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function El(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mt(t)),
    (e[t] = n);
}
function Nm(e, t) {
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
    var l = 31 - mt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ca(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var X = 0;
function qf(e) {
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
var ed,
  ka,
  td,
  nd,
  rd,
  Tu = !1,
  Il = [],
  tn = null,
  nn = null,
  rn = null,
  ll = new Map(),
  ol = new Map(),
  Jt = [],
  Tm =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Ks(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      tn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      nn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      rn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ll.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      ol.delete(t.pointerId);
  }
}
function Nr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ?
      ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = kl(t)), t !== null && ka(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Lm(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (tn = Nr(tn, e, t, n, r, l)), !0;
    case 'dragenter':
      return (nn = Nr(nn, e, t, n, r, l)), !0;
    case 'mouseover':
      return (rn = Nr(rn, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return ll.set(o, Nr(ll.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), ol.set(o, Nr(ol.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ld(e) {
  var t = En(e.target);
  if (t !== null) {
    var n = Fn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qf(n)), t !== null)) {
          (e.blockedOn = t),
            rd(e.priority, function () {
              td(n);
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
function Jl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Lu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pu = r), n.target.dispatchEvent(r), (Pu = null);
    } else return (t = kl(n)), t !== null && ka(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Qs(e, t, n) {
  Jl(e) && n.delete(t);
}
function Dm() {
  (Tu = !1),
    tn !== null && Jl(tn) && (tn = null),
    nn !== null && Jl(nn) && (nn = null),
    rn !== null && Jl(rn) && (rn = null),
    ll.forEach(Qs),
    ol.forEach(Qs);
}
function Tr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Tu ||
      ((Tu = !0),
      Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Dm)));
}
function il(e) {
  function t(l) {
    return Tr(l, e);
  }
  if (0 < Il.length) {
    Tr(Il[0], e);
    for (var n = 1; n < Il.length; n++) {
      var r = Il[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && Tr(tn, e),
      nn !== null && Tr(nn, e),
      rn !== null && Tr(rn, e),
      ll.forEach(t),
      ol.forEach(t),
      n = 0;
    n < Jt.length;
    n++
  )
    (r = Jt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Jt.length && ((n = Jt[0]), n.blockedOn === null); )
    ld(n), n.blockedOn === null && Jt.shift();
}
var lr = Bt.ReactCurrentBatchConfig,
  ho = !0;
function Mm(e, t, n, r) {
  var l = X,
    o = lr.transition;
  lr.transition = null;
  try {
    (X = 1), Pa(e, t, n, r);
  } finally {
    (X = l), (lr.transition = o);
  }
}
function Om(e, t, n, r) {
  var l = X,
    o = lr.transition;
  lr.transition = null;
  try {
    (X = 4), Pa(e, t, n, r);
  } finally {
    (X = l), (lr.transition = o);
  }
}
function Pa(e, t, n, r) {
  if (ho) {
    var l = Lu(e, t, n, r);
    if (l === null) Yi(e, t, r, mo, n), Ks(e, r);
    else if (Lm(l, e, t, n, r)) r.stopPropagation();
    else if ((Ks(e, r), t & 4 && -1 < Tm.indexOf(e))) {
      for (; l !== null; ) {
        var o = kl(l);
        if (
          (o !== null && ed(o),
          (o = Lu(e, t, n, r)),
          o === null && Yi(e, t, r, mo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Yi(e, t, r, null, n);
  }
}
var mo = null;
function Lu(e, t, n, r) {
  if (((mo = null), (e = xa(r)), (e = En(e)), e !== null))
    if (((t = Fn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Qf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (mo = e), null;
}
function od(e) {
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
      switch (xm()) {
        case Ea:
          return 1;
        case Gf:
          return 4;
        case fo:
        case Em:
          return 16;
        case Jf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null,
  Ra = null,
  Zl = null;
function id() {
  if (Zl) return Zl;
  var e,
    t = Ra,
    n = t.length,
    r,
    l = 'value' in qt ? qt.value : qt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Zl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ql(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ?
      ((e = e.charCode), e === 0 && t === 13 && (e = 13))
    : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ul() {
  return !0;
}
function bs() {
  return !1;
}
function Je(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented =
        (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        ) ?
          Ul
        : bs),
      (this.isPropagationStopped = bs),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ?
            n.preventDefault()
          : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ul));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ?
            n.stopPropagation()
          : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ul));
      },
      persist: function () {},
      isPersistent: Ul,
    }),
    t
  );
}
var yr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _a = Je(yr),
  Cl = se({}, yr, { view: 0, detail: 0 }),
  zm = Je(Cl),
  $i,
  Ai,
  Lr,
  $o = se({}, Cl, {
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
    getModifierState: ja,
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
        : (e !== Lr &&
            (Lr && e.type === 'mousemove' ?
              (($i = e.screenX - Lr.screenX), (Ai = e.screenY - Lr.screenY))
            : (Ai = $i = 0),
            (Lr = e)),
          $i);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ai;
    },
  }),
  Ys = Je($o),
  Fm = se({}, $o, { dataTransfer: 0 }),
  Im = Je(Fm),
  Um = se({}, Cl, { relatedTarget: 0 }),
  Bi = Je(Um),
  $m = se({}, yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Am = Je($m),
  Bm = se({}, yr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Vm = Je(Bm),
  Wm = se({}, yr, { data: 0 }),
  Xs = Je(Wm),
  Hm = {
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
  Km = {
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
  Qm = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function bm(e) {
  var t = this.nativeEvent;
  return (
    t.getModifierState ? t.getModifierState(e)
    : (e = Qm[e]) ? !!t[e]
    : !1
  );
}
function ja() {
  return bm;
}
var Ym = se({}, Cl, {
    key: function (e) {
      if (e.key) {
        var t = Hm[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return (
        e.type === 'keypress' ?
          ((e = ql(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup' ?
          Km[e.keyCode] || 'Unidentified'
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
    getModifierState: ja,
    charCode: function (e) {
      return e.type === 'keypress' ? ql(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return (
        e.type === 'keypress' ? ql(e)
        : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode
        : 0
      );
    },
  }),
  Xm = Je(Ym),
  Gm = se({}, $o, {
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
  Gs = Je(Gm),
  Jm = se({}, Cl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ja,
  }),
  Zm = Je(Jm),
  qm = se({}, yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ev = Je(qm),
  tv = se({}, $o, {
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
  nv = Je(tv),
  rv = [9, 13, 27, 32],
  Na = It && 'CompositionEvent' in window,
  Qr = null;
It && 'documentMode' in document && (Qr = document.documentMode);
var lv = It && 'TextEvent' in window && !Qr,
  ud = It && (!Na || (Qr && 8 < Qr && 11 >= Qr)),
  Js = String.fromCharCode(32),
  Zs = !1;
function ad(e, t) {
  switch (e) {
    case 'keyup':
      return rv.indexOf(t.keyCode) !== -1;
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
function sd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Hn = !1;
function ov(e, t) {
  switch (e) {
    case 'compositionend':
      return sd(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Zs = !0), Js);
    case 'textInput':
      return (e = t.data), e === Js && Zs ? null : e;
    default:
      return null;
  }
}
function iv(e, t) {
  if (Hn)
    return e === 'compositionend' || (!Na && ad(e, t)) ?
        ((e = id()), (Zl = Ra = qt = null), (Hn = !1), e)
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
      return ud && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var uv = {
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
function qs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!uv[e.type] : t === 'textarea';
}
function cd(e, t, n, r) {
  Bf(r),
    (t = vo(t, 'onChange')),
    0 < t.length &&
      ((n = new _a('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var br = null,
  ul = null;
function av(e) {
  xd(e, 0);
}
function Ao(e) {
  var t = bn(e);
  if (Of(t)) return e;
}
function sv(e, t) {
  if (e === 'change') return t;
}
var fd = !1;
if (It) {
  var Vi;
  if (It) {
    var Wi = 'oninput' in document;
    if (!Wi) {
      var ec = document.createElement('div');
      ec.setAttribute('oninput', 'return;'),
        (Wi = typeof ec.oninput == 'function');
    }
    Vi = Wi;
  } else Vi = !1;
  fd = Vi && (!document.documentMode || 9 < document.documentMode);
}
function tc() {
  br && (br.detachEvent('onpropertychange', dd), (ul = br = null));
}
function dd(e) {
  if (e.propertyName === 'value' && Ao(ul)) {
    var t = [];
    cd(t, ul, e, xa(e)), Kf(av, t);
  }
}
function cv(e, t, n) {
  e === 'focusin' ?
    (tc(), (br = t), (ul = n), br.attachEvent('onpropertychange', dd))
  : e === 'focusout' && tc();
}
function fv(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Ao(ul);
}
function dv(e, t) {
  if (e === 'click') return Ao(t);
}
function pv(e, t) {
  if (e === 'input' || e === 'change') return Ao(t);
}
function hv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gt = typeof Object.is == 'function' ? Object.is : hv;
function al(e, t) {
  if (gt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!pu.call(t, l) || !gt(e[l], t[l])) return !1;
  }
  return !0;
}
function nc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function rc(e, t) {
  var n = nc(e);
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
    n = nc(n);
  }
}
function pd(e, t) {
  return (
    e && t ?
      e === t ? !0
      : e && e.nodeType === 3 ? !1
      : t && t.nodeType === 3 ? pd(e, t.parentNode)
      : 'contains' in e ? e.contains(t)
      : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
  );
}
function hd() {
  for (var e = window, t = ao(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ao(e.document);
  }
  return t;
}
function Ta(e) {
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
function mv(e) {
  var t = hd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ta(n)) {
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
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = rc(n, o));
        var i = rc(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r ?
            (e.addRange(t), e.extend(i.node, i.offset))
          : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
var vv = It && 'documentMode' in document && 11 >= document.documentMode,
  Kn = null,
  Du = null,
  Yr = null,
  Mu = !1;
function lc(e, t, n) {
  var r =
    n.window === n ? n.document
    : n.nodeType === 9 ? n
    : n.ownerDocument;
  Mu ||
    Kn == null ||
    Kn !== ao(r) ||
    ((r = Kn),
    'selectionStart' in r && Ta(r) ?
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
    (Yr && al(Yr, r)) ||
      ((Yr = r),
      (r = vo(Du, 'onSelect')),
      0 < r.length &&
        ((t = new _a('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Kn))));
}
function $l(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Qn = {
    animationend: $l('Animation', 'AnimationEnd'),
    animationiteration: $l('Animation', 'AnimationIteration'),
    animationstart: $l('Animation', 'AnimationStart'),
    transitionend: $l('Transition', 'TransitionEnd'),
  },
  Hi = {},
  md = {};
It &&
  ((md = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Qn.animationend.animation,
    delete Qn.animationiteration.animation,
    delete Qn.animationstart.animation),
  'TransitionEvent' in window || delete Qn.transitionend.transition);
function Bo(e) {
  if (Hi[e]) return Hi[e];
  if (!Qn[e]) return e;
  var t = Qn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in md) return (Hi[e] = t[n]);
  return e;
}
var vd = Bo('animationend'),
  yd = Bo('animationiteration'),
  gd = Bo('animationstart'),
  wd = Bo('transitionend'),
  Sd = new Map(),
  oc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function hn(e, t) {
  Sd.set(e, t), zn(t, [e]);
}
for (var Ki = 0; Ki < oc.length; Ki++) {
  var Qi = oc[Ki],
    yv = Qi.toLowerCase(),
    gv = Qi[0].toUpperCase() + Qi.slice(1);
  hn(yv, 'on' + gv);
}
hn(vd, 'onAnimationEnd');
hn(yd, 'onAnimationIteration');
hn(gd, 'onAnimationStart');
hn('dblclick', 'onDoubleClick');
hn('focusin', 'onFocus');
hn('focusout', 'onBlur');
hn(wd, 'onTransitionEnd');
ar('onMouseEnter', ['mouseout', 'mouseover']);
ar('onMouseLeave', ['mouseout', 'mouseover']);
ar('onPointerEnter', ['pointerout', 'pointerover']);
ar('onPointerLeave', ['pointerout', 'pointerover']);
zn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
zn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
zn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
zn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
zn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
zn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Wr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  wv = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Wr));
function ic(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), ym(r, t, void 0, e), (e.currentTarget = null);
}
function xd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          ic(l, u, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          ic(l, u, s), (o = a);
        }
    }
  }
  if (co) throw ((e = ju), (co = !1), (ju = null), e);
}
function re(e, t) {
  var n = t[Uu];
  n === void 0 && (n = t[Uu] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Ed(t, e, 2, !1), n.add(r));
}
function bi(e, t, n) {
  var r = 0;
  t && (r |= 4), Ed(n, e, r, t);
}
var Al = '_reactListening' + Math.random().toString(36).slice(2);
function sl(e) {
  if (!e[Al]) {
    (e[Al] = !0),
      Nf.forEach(function (n) {
        n !== 'selectionchange' && (wv.has(n) || bi(n, !1, e), bi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Al] || ((t[Al] = !0), bi('selectionchange', !1, t));
  }
}
function Ed(e, t, n, r) {
  switch (od(t)) {
    case 1:
      var l = Mm;
      break;
    case 4:
      l = Om;
      break;
    default:
      l = Pa;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !_u ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r ?
      l !== void 0 ?
        e.addEventListener(t, n, { capture: !0, passive: l })
      : e.addEventListener(t, n, !0)
    : l !== void 0 ? e.addEventListener(t, n, { passive: l })
    : e.addEventListener(t, n, !1);
}
function Yi(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = En(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Kf(function () {
    var s = o,
      c = xa(n),
      m = [];
    e: {
      var h = Sd.get(e);
      if (h !== void 0) {
        var E = _a,
          y = e;
        switch (e) {
          case 'keypress':
            if (ql(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            E = Xm;
            break;
          case 'focusin':
            (y = 'focus'), (E = Bi);
            break;
          case 'focusout':
            (y = 'blur'), (E = Bi);
            break;
          case 'beforeblur':
          case 'afterblur':
            E = Bi;
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
            E = Ys;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            E = Im;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            E = Zm;
            break;
          case vd:
          case yd:
          case gd:
            E = Am;
            break;
          case wd:
            E = ev;
            break;
          case 'scroll':
            E = zm;
            break;
          case 'wheel':
            E = nv;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            E = Vm;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            E = Gs;
        }
        var w = (t & 4) !== 0,
          R = !w && e === 'scroll',
          d =
            w ?
              h !== null ?
                h + 'Capture'
              : null
            : h;
        w = [];
        for (var f = s, v; f !== null; ) {
          v = f;
          var p = v.stateNode;
          if (
            (v.tag === 5 &&
              p !== null &&
              ((v = p),
              d !== null && ((p = rl(f, d)), p != null && w.push(cl(f, p, v)))),
            R)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((h = new E(h, y, null, n, c)), m.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (E = e === 'mouseout' || e === 'pointerout'),
          h &&
            n !== Pu &&
            (y = n.relatedTarget || n.fromElement) &&
            (En(y) || y[Ut]))
        )
          break e;
        if (
          (E || h) &&
          ((h =
            c.window === c ? c
            : (h = c.ownerDocument) ? h.defaultView || h.parentWindow
            : window),
          E ?
            ((y = n.relatedTarget || n.toElement),
            (E = s),
            (y = y ? En(y) : null),
            y !== null &&
              ((R = Fn(y)), y !== R || (y.tag !== 5 && y.tag !== 6)) &&
              (y = null))
          : ((E = null), (y = s)),
          E !== y)
        ) {
          if (
            ((w = Ys),
            (p = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = Gs),
              (p = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (f = 'pointer')),
            (R = E == null ? h : bn(E)),
            (v = y == null ? h : bn(y)),
            (h = new w(p, f + 'leave', E, n, c)),
            (h.target = R),
            (h.relatedTarget = v),
            (p = null),
            En(c) === s &&
              ((w = new w(d, f + 'enter', y, n, c)),
              (w.target = v),
              (w.relatedTarget = R),
              (p = w)),
            (R = p),
            E && y)
          )
            t: {
              for (w = E, d = y, f = 0, v = w; v; v = Bn(v)) f++;
              for (v = 0, p = d; p; p = Bn(p)) v++;
              for (; 0 < f - v; ) (w = Bn(w)), f--;
              for (; 0 < v - f; ) (d = Bn(d)), v--;
              for (; f--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = Bn(w)), (d = Bn(d));
              }
              w = null;
            }
          else w = null;
          E !== null && uc(m, h, E, w, !1),
            y !== null && R !== null && uc(m, R, y, w, !0);
        }
      }
      e: {
        if (
          ((h = s ? bn(s) : window),
          (E = h.nodeName && h.nodeName.toLowerCase()),
          E === 'select' || (E === 'input' && h.type === 'file'))
        )
          var _ = sv;
        else if (qs(h))
          if (fd) _ = pv;
          else {
            _ = fv;
            var N = cv;
          }
        else
          (E = h.nodeName) &&
            E.toLowerCase() === 'input' &&
            (h.type === 'checkbox' || h.type === 'radio') &&
            (_ = dv);
        if (_ && (_ = _(e, s))) {
          cd(m, _, n, c);
          break e;
        }
        N && N(e, h, s),
          e === 'focusout' &&
            (N = h._wrapperState) &&
            N.controlled &&
            h.type === 'number' &&
            Su(h, 'number', h.value);
      }
      switch (((N = s ? bn(s) : window), e)) {
        case 'focusin':
          (qs(N) || N.contentEditable === 'true') &&
            ((Kn = N), (Du = s), (Yr = null));
          break;
        case 'focusout':
          Yr = Du = Kn = null;
          break;
        case 'mousedown':
          Mu = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Mu = !1), lc(m, n, c);
          break;
        case 'selectionchange':
          if (vv) break;
        case 'keydown':
        case 'keyup':
          lc(m, n, c);
      }
      var P;
      if (Na)
        e: {
          switch (e) {
            case 'compositionstart':
              var L = 'onCompositionStart';
              break e;
            case 'compositionend':
              L = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              L = 'onCompositionUpdate';
              break e;
          }
          L = void 0;
        }
      else
        Hn ?
          ad(e, n) && (L = 'onCompositionEnd')
        : e === 'keydown' && n.keyCode === 229 && (L = 'onCompositionStart');
      L &&
        (ud &&
          n.locale !== 'ko' &&
          (Hn || L !== 'onCompositionStart' ?
            L === 'onCompositionEnd' && Hn && (P = id())
          : ((qt = c),
            (Ra = 'value' in qt ? qt.value : qt.textContent),
            (Hn = !0))),
        (N = vo(s, L)),
        0 < N.length &&
          ((L = new Xs(L, e, null, n, c)),
          m.push({ event: L, listeners: N }),
          P ? (L.data = P) : ((P = sd(n)), P !== null && (L.data = P)))),
        (P = lv ? ov(e, n) : iv(e, n)) &&
          ((s = vo(s, 'onBeforeInput')),
          0 < s.length &&
            ((c = new Xs('onBeforeInput', 'beforeinput', null, n, c)),
            m.push({ event: c, listeners: s }),
            (c.data = P)));
    }
    xd(m, t);
  });
}
function cl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = rl(e, n)),
      o != null && r.unshift(cl(e, o, l)),
      (o = rl(e, t)),
      o != null && r.push(cl(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Bn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uc(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l ?
        ((a = rl(n, o)), a != null && i.unshift(cl(n, a, u)))
      : l || ((a = rl(n, o)), a != null && i.push(cl(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Sv = /\r\n?/g,
  xv = /\u0000|\uFFFD/g;
function ac(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Sv,
      `
`
    )
    .replace(xv, '');
}
function Bl(e, t, n) {
  if (((t = ac(t)), ac(e) !== t && n)) throw Error(j(425));
}
function yo() {}
var Ou = null,
  zu = null;
function Fu(e, t) {
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
var Iu = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ev = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  sc = typeof Promise == 'function' ? Promise : void 0,
  Cv =
    typeof queueMicrotask == 'function' ? queueMicrotask
    : typeof sc < 'u' ?
      function (e) {
        return sc.resolve(null).then(e).catch(kv);
      }
    : Iu;
function kv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), il(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  il(t);
}
function ln(e) {
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
function cc(e) {
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
var gr = Math.random().toString(36).slice(2),
  Ct = '__reactFiber$' + gr,
  fl = '__reactProps$' + gr,
  Ut = '__reactContainer$' + gr,
  Uu = '__reactEvents$' + gr,
  Pv = '__reactListeners$' + gr,
  Rv = '__reactHandles$' + gr;
function En(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ut] || n[Ct])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = cc(e); e !== null; ) {
          if ((n = e[Ct])) return n;
          e = cc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function kl(e) {
  return (
    (e = e[Ct] || e[Ut]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Vo(e) {
  return e[fl] || null;
}
var $u = [],
  Yn = -1;
function mn(e) {
  return { current: e };
}
function le(e) {
  0 > Yn || ((e.current = $u[Yn]), ($u[Yn] = null), Yn--);
}
function ne(e, t) {
  Yn++, ($u[Yn] = e.current), (e.current = t);
}
var fn = {},
  Me = mn(fn),
  Ve = mn(!1),
  jn = fn;
function sr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function We(e) {
  return (e = e.childContextTypes), e != null;
}
function go() {
  le(Ve), le(Me);
}
function fc(e, t, n) {
  if (Me.current !== fn) throw Error(j(168));
  ne(Me, t), ne(Ve, n);
}
function Cd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(j(108, cm(e) || 'Unknown', l));
  return se({}, n, r);
}
function wo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fn),
    (jn = Me.current),
    ne(Me, e),
    ne(Ve, Ve.current),
    !0
  );
}
function dc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n ?
    ((e = Cd(e, t, jn)),
    (r.__reactInternalMemoizedMergedChildContext = e),
    le(Ve),
    le(Me),
    ne(Me, e))
  : le(Ve),
    ne(Ve, n);
}
var Dt = null,
  Wo = !1,
  Gi = !1;
function kd(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function _v(e) {
  (Wo = !0), kd(e);
}
function vn() {
  if (!Gi && Dt !== null) {
    Gi = !0;
    var e = 0,
      t = X;
    try {
      var n = Dt;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Dt = null), (Wo = !1);
    } catch (l) {
      throw (Dt !== null && (Dt = Dt.slice(e + 1)), Xf(Ea, vn), l);
    } finally {
      (X = t), (Gi = !1);
    }
  }
  return null;
}
var Xn = [],
  Gn = 0,
  So = null,
  xo = 0,
  nt = [],
  rt = 0,
  Nn = null,
  Mt = 1,
  Ot = '';
function Sn(e, t) {
  (Xn[Gn++] = xo), (Xn[Gn++] = So), (So = e), (xo = t);
}
function Pd(e, t, n) {
  (nt[rt++] = Mt), (nt[rt++] = Ot), (nt[rt++] = Nn), (Nn = e);
  var r = Mt;
  e = Ot;
  var l = 32 - mt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - mt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Mt = (1 << (32 - mt(t) + l)) | (n << l) | r),
      (Ot = o + e);
  } else (Mt = (1 << o) | (n << l) | r), (Ot = e);
}
function La(e) {
  e.return !== null && (Sn(e, 1), Pd(e, 1, 0));
}
function Da(e) {
  for (; e === So; )
    (So = Xn[--Gn]), (Xn[Gn] = null), (xo = Xn[--Gn]), (Xn[Gn] = null);
  for (; e === Nn; )
    (Nn = nt[--rt]),
      (nt[rt] = null),
      (Ot = nt[--rt]),
      (nt[rt] = null),
      (Mt = nt[--rt]),
      (nt[rt] = null);
}
var Ye = null,
  be = null,
  oe = !1,
  ht = null;
function Rd(e, t) {
  var n = lt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function pc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ?
            null
          : t),
        t !== null ?
          ((e.stateNode = t), (Ye = e), (be = ln(t.firstChild)), !0)
        : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null ?
          ((n = Nn !== null ? { id: Mt, overflow: Ot } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          (n = lt(18, null, null, 0)),
          (n.stateNode = t),
          (n.return = e),
          (e.child = n),
          (Ye = e),
          (be = null),
          !0)
        : !1
      );
    default:
      return !1;
  }
}
function Au(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Bu(e) {
  if (oe) {
    var t = be;
    if (t) {
      var n = t;
      if (!pc(e, t)) {
        if (Au(e)) throw Error(j(418));
        t = ln(n.nextSibling);
        var r = Ye;
        t && pc(e, t) ?
          Rd(r, n)
        : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Ye = e));
      }
    } else {
      if (Au(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (Ye = e);
    }
  }
}
function hc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function Vl(e) {
  if (e !== Ye) return !1;
  if (!oe) return hc(e), (oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Fu(e.type, e.memoizedProps))),
    t && (t = be))
  ) {
    if (Au(e)) throw (_d(), Error(j(418)));
    for (; t; ) Rd(e, t), (t = ln(t.nextSibling));
  }
  if ((hc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              be = ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      be = null;
    }
  } else be = Ye ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function _d() {
  for (var e = be; e; ) e = ln(e.nextSibling);
}
function cr() {
  (be = Ye = null), (oe = !1);
}
function Ma(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
var jv = Bt.ReactCurrentBatchConfig;
function ft(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Eo = mn(null),
  Co = null,
  Jn = null,
  Oa = null;
function za() {
  Oa = Jn = Co = null;
}
function Fa(e) {
  var t = Eo.current;
  le(Eo), (e._currentValue = t);
}
function Vu(e, t, n) {
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
function or(e, t) {
  (Co = e),
    (Oa = Jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Be = !0), (e.firstContext = null));
}
function it(e) {
  var t = e._currentValue;
  if (Oa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jn === null)) {
      if (Co === null) throw Error(j(308));
      (Jn = e), (Co.dependencies = { lanes: 0, firstContext: e });
    } else Jn = Jn.next = e;
  return t;
}
var Cn = null;
function Ia(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function jd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ia(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    $t(e, r)
  );
}
function $t(e, t) {
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
var Gt = !1;
function Ua(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Nd(e, t) {
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
function Ft(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function on(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), b & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      $t(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ia(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    $t(e, n)
  );
}
function eo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ca(e, n);
  }
}
function mc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
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
function ko(e, t, n, r) {
  var l = e.updateQueue;
  Gt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== i &&
        (u === null ? (c.firstBaseUpdate = s) : (u.next = s),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (c = s = a = null), (u = o);
    do {
      var h = u.lane,
        E = u.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: E,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            w = u;
          switch (((h = t), (E = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == 'function')) {
                m = y.call(E, m, h);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (h = typeof y == 'function' ? y.call(E, m, h) : y),
                h == null)
              )
                break e;
              m = se({}, m, h);
              break e;
            case 2:
              Gt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (E = {
          eventTime: E,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          c === null ? ((s = c = E), (a = m)) : (c = c.next = E),
          (i |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = m),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Ln |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function vc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(j(191, l));
        l.call(r);
      }
    }
}
var Td = new jf.Component().refs;
function Wu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ho = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Fn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      l = an(e),
      o = Ft(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = on(e, o, l)),
      t !== null && (vt(t, e, l, r), eo(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      l = an(e),
      o = Ft(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = on(e, o, l)),
      t !== null && (vt(t, e, l, r), eo(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ie(),
      r = an(e),
      l = Ft(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = on(e, l, r)),
      t !== null && (vt(t, e, r, n), eo(t, e, r));
  },
};
function yc(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function' ?
      e.shouldComponentUpdate(r, o, i)
    : t.prototype && t.prototype.isPureReactComponent ? !al(n, r) || !al(l, o)
    : !0
  );
}
function Ld(e, t, n) {
  var r = !1,
    l = fn,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null ?
      (o = it(o))
    : ((l = We(t) ? jn : Me.current),
      (r = t.contextTypes),
      (o = (r = r != null) ? sr(e, l) : fn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ho),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function gc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ho.enqueueReplaceState(t, t.state, null);
}
function Hu(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Td), Ua(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null ?
    (l.context = it(o))
  : ((o = We(t) ? jn : Me.current), (l.context = sr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Wu(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ho.enqueueReplaceState(l, l.state, null),
      ko(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Dr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var l = r,
        o = '' + e;
      return (
          t !== null &&
            t.ref !== null &&
            typeof t.ref == 'function' &&
            t.ref._stringRef === o
        ) ?
          t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Td && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Wl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === '[object Object]' ?
          'object with keys {' + Object.keys(t).join(', ') + '}'
        : e
      )
    ))
  );
}
function wc(e) {
  var t = e._init;
  return t(e._payload);
}
function Dd(e) {
  function t(d, f) {
    if (e) {
      var v = d.deletions;
      v === null ? ((d.deletions = [f]), (d.flags |= 16)) : v.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function l(d, f) {
    return (d = sn(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, v) {
    return (
      (d.index = v),
      e ?
        ((v = d.alternate),
        v !== null ?
          ((v = v.index), v < f ? ((d.flags |= 2), f) : v)
        : ((d.flags |= 2), f))
      : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, f, v, p) {
    return f === null || f.tag !== 6 ?
        ((f = ru(v, d.mode, p)), (f.return = d), f)
      : ((f = l(f, v)), (f.return = d), f);
  }
  function a(d, f, v, p) {
    var _ = v.type;
    return (
      _ === Wn ? c(d, f, v.props.children, p, v.key)
      : (
        f !== null &&
        (f.elementType === _ ||
          (typeof _ == 'object' &&
            _ !== null &&
            _.$$typeof === Xt &&
            wc(_) === f.type))
      ) ?
        ((p = l(f, v.props)), (p.ref = Dr(d, f, v)), (p.return = d), p)
      : ((p = io(v.type, v.key, v.props, null, d.mode, p)),
        (p.ref = Dr(d, f, v)),
        (p.return = d),
        p)
    );
  }
  function s(d, f, v, p) {
    return (
        f === null ||
          f.tag !== 4 ||
          f.stateNode.containerInfo !== v.containerInfo ||
          f.stateNode.implementation !== v.implementation
      ) ?
        ((f = lu(v, d.mode, p)), (f.return = d), f)
      : ((f = l(f, v.children || [])), (f.return = d), f);
  }
  function c(d, f, v, p, _) {
    return f === null || f.tag !== 7 ?
        ((f = _n(v, d.mode, p, _)), (f.return = d), f)
      : ((f = l(f, v)), (f.return = d), f);
  }
  function m(d, f, v) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = ru('' + f, d.mode, v)), (f.return = d), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case Dl:
          return (
            (v = io(f.type, f.key, f.props, null, d.mode, v)),
            (v.ref = Dr(d, null, f)),
            (v.return = d),
            v
          );
        case Vn:
          return (f = lu(f, d.mode, v)), (f.return = d), f;
        case Xt:
          var p = f._init;
          return m(d, p(f._payload), v);
      }
      if (Br(f) || _r(f))
        return (f = _n(f, d.mode, v, null)), (f.return = d), f;
      Wl(d, f);
    }
    return null;
  }
  function h(d, f, v, p) {
    var _ = f !== null ? f.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return _ !== null ? null : u(d, f, '' + v, p);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Dl:
          return v.key === _ ? a(d, f, v, p) : null;
        case Vn:
          return v.key === _ ? s(d, f, v, p) : null;
        case Xt:
          return (_ = v._init), h(d, f, _(v._payload), p);
      }
      if (Br(v) || _r(v)) return _ !== null ? null : c(d, f, v, p, null);
      Wl(d, v);
    }
    return null;
  }
  function E(d, f, v, p, _) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (d = d.get(v) || null), u(f, d, '' + p, _);
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Dl:
          return (d = d.get(p.key === null ? v : p.key) || null), a(f, d, p, _);
        case Vn:
          return (d = d.get(p.key === null ? v : p.key) || null), s(f, d, p, _);
        case Xt:
          var N = p._init;
          return E(d, f, v, N(p._payload), _);
      }
      if (Br(p) || _r(p)) return (d = d.get(v) || null), c(f, d, p, _, null);
      Wl(f, p);
    }
    return null;
  }
  function y(d, f, v, p) {
    for (
      var _ = null, N = null, P = f, L = (f = 0), I = null;
      P !== null && L < v.length;
      L++
    ) {
      P.index > L ? ((I = P), (P = null)) : (I = P.sibling);
      var U = h(d, P, v[L], p);
      if (U === null) {
        P === null && (P = I);
        break;
      }
      e && P && U.alternate === null && t(d, P),
        (f = o(U, f, L)),
        N === null ? (_ = U) : (N.sibling = U),
        (N = U),
        (P = I);
    }
    if (L === v.length) return n(d, P), oe && Sn(d, L), _;
    if (P === null) {
      for (; L < v.length; L++)
        (P = m(d, v[L], p)),
          P !== null &&
            ((f = o(P, f, L)), N === null ? (_ = P) : (N.sibling = P), (N = P));
      return oe && Sn(d, L), _;
    }
    for (P = r(d, P); L < v.length; L++)
      (I = E(P, d, L, v[L], p)),
        I !== null &&
          (e && I.alternate !== null && P.delete(I.key === null ? L : I.key),
          (f = o(I, f, L)),
          N === null ? (_ = I) : (N.sibling = I),
          (N = I));
    return (
      e &&
        P.forEach(function (Y) {
          return t(d, Y);
        }),
      oe && Sn(d, L),
      _
    );
  }
  function w(d, f, v, p) {
    var _ = _r(v);
    if (typeof _ != 'function') throw Error(j(150));
    if (((v = _.call(v)), v == null)) throw Error(j(151));
    for (
      var N = (_ = null), P = f, L = (f = 0), I = null, U = v.next();
      P !== null && !U.done;
      L++, U = v.next()
    ) {
      P.index > L ? ((I = P), (P = null)) : (I = P.sibling);
      var Y = h(d, P, U.value, p);
      if (Y === null) {
        P === null && (P = I);
        break;
      }
      e && P && Y.alternate === null && t(d, P),
        (f = o(Y, f, L)),
        N === null ? (_ = Y) : (N.sibling = Y),
        (N = Y),
        (P = I);
    }
    if (U.done) return n(d, P), oe && Sn(d, L), _;
    if (P === null) {
      for (; !U.done; L++, U = v.next())
        (U = m(d, U.value, p)),
          U !== null &&
            ((f = o(U, f, L)), N === null ? (_ = U) : (N.sibling = U), (N = U));
      return oe && Sn(d, L), _;
    }
    for (P = r(d, P); !U.done; L++, U = v.next())
      (U = E(P, d, L, U.value, p)),
        U !== null &&
          (e && U.alternate !== null && P.delete(U.key === null ? L : U.key),
          (f = o(U, f, L)),
          N === null ? (_ = U) : (N.sibling = U),
          (N = U));
    return (
      e &&
        P.forEach(function (ke) {
          return t(d, ke);
        }),
      oe && Sn(d, L),
      _
    );
  }
  function R(d, f, v, p) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === Wn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case Dl:
          e: {
            for (var _ = v.key, N = f; N !== null; ) {
              if (N.key === _) {
                if (((_ = v.type), _ === Wn)) {
                  if (N.tag === 7) {
                    n(d, N.sibling),
                      (f = l(N, v.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  N.elementType === _ ||
                  (typeof _ == 'object' &&
                    _ !== null &&
                    _.$$typeof === Xt &&
                    wc(_) === N.type)
                ) {
                  n(d, N.sibling),
                    (f = l(N, v.props)),
                    (f.ref = Dr(d, N, v)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            v.type === Wn ?
              ((f = _n(v.props.children, d.mode, p, v.key)),
              (f.return = d),
              (d = f))
            : ((p = io(v.type, v.key, v.props, null, d.mode, p)),
              (p.ref = Dr(d, f, v)),
              (p.return = d),
              (d = p));
          }
          return i(d);
        case Vn:
          e: {
            for (N = v.key; f !== null; ) {
              if (f.key === N)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, v.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = lu(v, d.mode, p)), (f.return = d), (d = f);
          }
          return i(d);
        case Xt:
          return (N = v._init), R(d, f, N(v._payload), p);
      }
      if (Br(v)) return y(d, f, v, p);
      if (_r(v)) return w(d, f, v, p);
      Wl(d, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number' ?
        ((v = '' + v),
        f !== null && f.tag === 6 ?
          (n(d, f.sibling), (f = l(f, v)), (f.return = d), (d = f))
        : (n(d, f), (f = ru(v, d.mode, p)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return R;
}
var fr = Dd(!0),
  Md = Dd(!1),
  Pl = {},
  Pt = mn(Pl),
  dl = mn(Pl),
  pl = mn(Pl);
function kn(e) {
  if (e === Pl) throw Error(j(174));
  return e;
}
function $a(e, t) {
  switch ((ne(pl, t), ne(dl, e), ne(Pt, Pl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Eu(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Eu(t, e));
  }
  le(Pt), ne(Pt, t);
}
function dr() {
  le(Pt), le(dl), le(pl);
}
function Od(e) {
  kn(pl.current);
  var t = kn(Pt.current),
    n = Eu(t, e.type);
  t !== n && (ne(dl, e), ne(Pt, n));
}
function Aa(e) {
  dl.current === e && (le(Pt), le(dl));
}
var ue = mn(0);
function Po(e) {
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
var Ji = [];
function Ba() {
  for (var e = 0; e < Ji.length; e++)
    Ji[e]._workInProgressVersionPrimary = null;
  Ji.length = 0;
}
var to = Bt.ReactCurrentDispatcher,
  Zi = Bt.ReactCurrentBatchConfig,
  Tn = 0,
  ae = null,
  ge = null,
  xe = null,
  Ro = !1,
  Xr = !1,
  hl = 0,
  Nv = 0;
function Ne() {
  throw Error(j(321));
}
function Va(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!gt(e[n], t[n])) return !1;
  return !0;
}
function Wa(e, t, n, r, l, o) {
  if (
    ((Tn = o),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (to.current = e === null || e.memoizedState === null ? Mv : Ov),
    (e = n(r, l)),
    Xr)
  ) {
    o = 0;
    do {
      if (((Xr = !1), (hl = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (xe = ge = null),
        (t.updateQueue = null),
        (to.current = zv),
        (e = n(r, l));
    } while (Xr);
  }
  if (
    ((to.current = _o),
    (t = ge !== null && ge.next !== null),
    (Tn = 0),
    (xe = ge = ae = null),
    (Ro = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Ha() {
  var e = hl !== 0;
  return (hl = 0), e;
}
function Et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (ae.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function ut() {
  if (ge === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = xe === null ? ae.memoizedState : xe.next;
  if (t !== null) (xe = t), (ge = e);
  else {
    if (e === null) throw Error(j(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      xe === null ? (ae.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function ml(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function qi(e) {
  var t = ut(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = ge,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      s = o;
    do {
      var c = s.lane;
      if ((Tn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var m = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = m), (i = r)) : (a = a.next = m),
          (ae.lanes |= c),
          (Ln |= c);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = u),
      gt(r, t.memoizedState) || (Be = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ae.lanes |= o), (Ln |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function eu(e) {
  var t = ut(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    gt(o, t.memoizedState) || (Be = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function zd() {}
function Fd(e, t) {
  var n = ae,
    r = ut(),
    l = t(),
    o = !gt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Be = !0)),
    (r = r.queue),
    Ka($d.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      vl(9, Ud.bind(null, n, r, l, t), void 0, null),
      Ee === null)
    )
      throw Error(j(349));
    Tn & 30 || Id(n, t, l);
  }
  return l;
}
function Id(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null ?
      ((t = { lastEffect: null, stores: null }),
      (ae.updateQueue = t),
      (t.stores = [e]))
    : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ud(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ad(t) && Bd(e);
}
function $d(e, t, n) {
  return n(function () {
    Ad(t) && Bd(e);
  });
}
function Ad(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gt(e, n);
  } catch {
    return !0;
  }
}
function Bd(e) {
  var t = $t(e, 1);
  t !== null && vt(t, e, 1, -1);
}
function Sc(e) {
  var t = Et();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ml,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Dv.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function vl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null ?
      ((t = { lastEffect: null, stores: null }),
      (ae.updateQueue = t),
      (t.lastEffect = e.next = e))
    : ((n = t.lastEffect),
      n === null ?
        (t.lastEffect = e.next = e)
      : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Vd() {
  return ut().memoizedState;
}
function no(e, t, n, r) {
  var l = Et();
  (ae.flags |= e),
    (l.memoizedState = vl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ko(e, t, n, r) {
  var l = ut();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ge !== null) {
    var i = ge.memoizedState;
    if (((o = i.destroy), r !== null && Va(r, i.deps))) {
      l.memoizedState = vl(t, n, o, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = vl(1 | t, n, o, r));
}
function xc(e, t) {
  return no(8390656, 8, e, t);
}
function Ka(e, t) {
  return Ko(2048, 8, e, t);
}
function Wd(e, t) {
  return Ko(4, 2, e, t);
}
function Hd(e, t) {
  return Ko(4, 4, e, t);
}
function Kd(e, t) {
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
function Qd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ko(4, 4, Kd.bind(null, t, e), n)
  );
}
function Qa() {}
function bd(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Va(t, r[1]) ?
      r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yd(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Va(t, r[1]) ?
      r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xd(e, t, n) {
  return Tn & 21 ?
      (gt(n, t) || ((n = Zf()), (ae.lanes |= n), (Ln |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n));
}
function Tv(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zi.transition;
  Zi.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (Zi.transition = r);
  }
}
function Gd() {
  return ut().memoizedState;
}
function Lv(e, t, n) {
  var r = an(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Jd(e))
  )
    Zd(t, n);
  else if (((n = jd(e, t, n, r)), n !== null)) {
    var l = Ie();
    vt(n, e, r, l), qd(n, t, r);
  }
}
function Dv(e, t, n) {
  var r = an(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jd(e)) Zd(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), gt(u, i))) {
          var a = t.interleaved;
          a === null ?
            ((l.next = l), Ia(t))
          : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = jd(e, t, l, r)),
      n !== null && ((l = Ie()), vt(n, e, r, l), qd(n, t, r));
  }
}
function Jd(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function Zd(e, t) {
  Xr = Ro = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function qd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ca(e, n);
  }
}
var _o = {
    readContext: it,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  Mv = {
    readContext: it,
    useCallback: function (e, t) {
      return (Et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: xc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        no(4194308, 4, Kd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return no(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return no(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Et();
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
        (e = e.dispatch = Lv.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Sc,
    useDebugValue: Qa,
    useDeferredValue: function (e) {
      return (Et().memoizedState = e);
    },
    useTransition: function () {
      var e = Sc(!1),
        t = e[0];
      return (e = Tv.bind(null, e[1])), (Et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        l = Et();
      if (oe) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(j(349));
        Tn & 30 || Id(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        xc($d.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        vl(9, Ud.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Et(),
        t = Ee.identifierPrefix;
      if (oe) {
        var n = Ot,
          r = Mt;
        (n = (r & ~(1 << (32 - mt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = hl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Nv++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ov = {
    readContext: it,
    useCallback: bd,
    useContext: it,
    useEffect: Ka,
    useImperativeHandle: Qd,
    useInsertionEffect: Wd,
    useLayoutEffect: Hd,
    useMemo: Yd,
    useReducer: qi,
    useRef: Vd,
    useState: function () {
      return qi(ml);
    },
    useDebugValue: Qa,
    useDeferredValue: function (e) {
      var t = ut();
      return Xd(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = qi(ml)[0],
        t = ut().memoizedState;
      return [e, t];
    },
    useMutableSource: zd,
    useSyncExternalStore: Fd,
    useId: Gd,
    unstable_isNewReconciler: !1,
  },
  zv = {
    readContext: it,
    useCallback: bd,
    useContext: it,
    useEffect: Ka,
    useImperativeHandle: Qd,
    useInsertionEffect: Wd,
    useLayoutEffect: Hd,
    useMemo: Yd,
    useReducer: eu,
    useRef: Vd,
    useState: function () {
      return eu(ml);
    },
    useDebugValue: Qa,
    useDeferredValue: function (e) {
      var t = ut();
      return ge === null ? (t.memoizedState = e) : Xd(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = eu(ml)[0],
        t = ut().memoizedState;
      return [e, t];
    },
    useMutableSource: zd,
    useSyncExternalStore: Fd,
    useId: Gd,
    unstable_isNewReconciler: !1,
  };
function pr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += sm(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function tu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ku(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Fv = typeof WeakMap == 'function' ? WeakMap : Map;
function ep(e, t, n) {
  (n = Ft(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      No || ((No = !0), (ta = r)), Ku(e, t);
    }),
    n
  );
}
function tp(e, t, n) {
  (n = Ft(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ku(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ku(e, t),
          typeof r != 'function' &&
            (un === null ? (un = new Set([this])) : un.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function Ec(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Fv();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Gv.bind(null, e, t, n)), t.then(e, e));
}
function Cc(e) {
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
function kc(e, t, n, r, l) {
  return e.mode & 1 ?
      ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t ?
        (e.flags |= 65536)
      : ((e.flags |= 128),
        (n.flags |= 131072),
        (n.flags &= -52805),
        n.tag === 1 &&
          (n.alternate === null ?
            (n.tag = 17)
          : ((t = Ft(-1, 1)), (t.tag = 2), on(n, t, 1))),
        (n.lanes |= 1)),
      e);
}
var Iv = Bt.ReactCurrentOwner,
  Be = !1;
function Fe(e, t, n, r) {
  t.child = e === null ? Md(t, null, n, r) : fr(t, e.child, n, r);
}
function Pc(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    or(t, l),
    (r = Wa(e, t, n, r, o, l)),
    (n = Ha()),
    e !== null && !Be ?
      ((t.updateQueue = e.updateQueue),
      (t.flags &= -2053),
      (e.lanes &= ~l),
      At(e, t, l))
    : (oe && n && La(t), (t.flags |= 1), Fe(e, t, r, l), t.child)
  );
}
function Rc(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return (
        typeof o == 'function' &&
          !es(o) &&
          o.defaultProps === void 0 &&
          n.compare === null &&
          n.defaultProps === void 0
      ) ?
        ((t.tag = 15), (t.type = o), np(e, t, o, r, l))
      : ((e = io(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : al), n(i, r) && e.ref === t.ref)
    )
      return At(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = sn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function np(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (al(o, r) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Be = !0);
      else return (t.lanes = e.lanes), At(e, t, l);
  }
  return Qu(e, t, n, r, l);
}
function rp(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(qn, Qe),
        (Qe |= n);
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
          ne(qn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ne(qn, Qe),
        (Qe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(qn, Qe),
      (Qe |= r);
  return Fe(e, t, l, n), t.child;
}
function lp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qu(e, t, n, r, l) {
  var o = We(n) ? jn : Me.current;
  return (
    (o = sr(t, o)),
    or(t, l),
    (n = Wa(e, t, n, r, o, l)),
    (r = Ha()),
    e !== null && !Be ?
      ((t.updateQueue = e.updateQueue),
      (t.flags &= -2053),
      (e.lanes &= ~l),
      At(e, t, l))
    : (oe && r && La(t), (t.flags |= 1), Fe(e, t, n, l), t.child)
  );
}
function _c(e, t, n, r, l) {
  if (We(n)) {
    var o = !0;
    wo(t);
  } else o = !1;
  if ((or(t, l), t.stateNode === null))
    ro(e, t), Ld(t, n, r), Hu(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == 'object' && s !== null ?
      (s = it(s))
    : ((s = We(n) ? jn : Me.current), (s = sr(t, s)));
    var c = n.getDerivedStateFromProps,
      m =
        typeof c == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || a !== s) && gc(t, i, r, s)),
      (Gt = !1);
    var h = t.memoizedState;
    (i.state = h),
      ko(t, r, i, l),
      (a = t.memoizedState),
      u !== r || h !== a || Ve.current || Gt ?
        (typeof c == 'function' && (Wu(t, n, c, r), (a = t.memoizedState)),
        (u = Gt || yc(t, n, u, r, h, a, s)) ?
          (m ||
            (typeof i.UNSAFE_componentWillMount != 'function' &&
              typeof i.componentWillMount != 'function') ||
            (typeof i.componentWillMount == 'function' &&
              i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == 'function' &&
              i.UNSAFE_componentWillMount()),
          typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (t.memoizedProps = r),
          (t.memoizedState = a)),
        (i.props = r),
        (i.state = a),
        (i.context = s),
        (r = u))
      : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
        (r = !1));
  } else {
    (i = t.stateNode),
      Nd(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : ft(t.type, u)),
      (i.props = s),
      (m = t.pendingProps),
      (h = i.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null ?
        (a = it(a))
      : ((a = We(n) ? jn : Me.current), (a = sr(t, a)));
    var E = n.getDerivedStateFromProps;
    (c =
      typeof E == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== m || h !== a) && gc(t, i, r, a)),
      (Gt = !1),
      (h = t.memoizedState),
      (i.state = h),
      ko(t, r, i, l);
    var y = t.memoizedState;
    u !== m || h !== y || Ve.current || Gt ?
      (typeof E == 'function' && (Wu(t, n, E, r), (y = t.memoizedState)),
      (s = Gt || yc(t, n, s, r, h, y, a) || !1) ?
        (c ||
          (typeof i.UNSAFE_componentWillUpdate != 'function' &&
            typeof i.componentWillUpdate != 'function') ||
          (typeof i.componentWillUpdate == 'function' &&
            i.componentWillUpdate(r, y, a),
          typeof i.UNSAFE_componentWillUpdate == 'function' &&
            i.UNSAFE_componentWillUpdate(r, y, a)),
        typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (t.memoizedProps = r),
        (t.memoizedState = y)),
      (i.props = r),
      (i.state = y),
      (i.context = a),
      (r = s))
    : (typeof i.componentDidUpdate != 'function' ||
        (u === e.memoizedProps && h === e.memoizedState) ||
        (t.flags |= 4),
      typeof i.getSnapshotBeforeUpdate != 'function' ||
        (u === e.memoizedProps && h === e.memoizedState) ||
        (t.flags |= 1024),
      (r = !1));
  }
  return bu(e, t, n, r, o, l);
}
function bu(e, t, n, r, l, o) {
  lp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && dc(t, n, !1), At(e, t, o);
  (r = t.stateNode), (Iv.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i ?
      ((t.child = fr(t, e.child, null, o)), (t.child = fr(t, null, u, o)))
    : Fe(e, t, u, o),
    (t.memoizedState = r.state),
    l && dc(t, n, !0),
    t.child
  );
}
function op(e) {
  var t = e.stateNode;
  t.pendingContext ?
    fc(e, t.pendingContext, t.pendingContext !== t.context)
  : t.context && fc(e, t.context, !1),
    $a(e, t.containerInfo);
}
function jc(e, t, n, r, l) {
  return cr(), Ma(l), (t.flags |= 256), Fe(e, t, n, r), t.child;
}
var Yu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ip(e, t, n) {
  var r = t.pendingProps,
    l = ue.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u ?
      ((o = !0), (t.flags &= -129))
    : (e === null || e.memoizedState !== null) && (l |= 1),
    ne(ue, l & 1),
    e === null)
  )
    return (
      Bu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null) ?
        (t.mode & 1 ?
          e.data === '$!' ?
            (t.lanes = 8)
          : (t.lanes = 1073741824)
        : (t.lanes = 1),
        null)
      : ((i = r.children),
        (e = r.fallback),
        o ?
          ((r = t.mode),
          (o = t.child),
          (i = { mode: 'hidden', children: i }),
          !(r & 1) && o !== null ?
            ((o.childLanes = 0), (o.pendingProps = i))
          : (o = Yo(i, r, 0, null)),
          (e = _n(e, r, n, null)),
          (o.return = t),
          (e.return = t),
          (o.sibling = e),
          (t.child = o),
          (t.child.memoizedState = Xu(n)),
          (t.memoizedState = Yu),
          e)
        : ba(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Uv(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l ?
        ((r = t.child),
        (r.childLanes = 0),
        (r.pendingProps = a),
        (t.deletions = null))
      : ((r = sn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = sn(u, o)) : ((o = _n(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null ?
          Xu(n)
        : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions,
          }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Yu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = sn(o, { mode: 'visible', children: r.children })),
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
function ba(e, t) {
  return (
    (t = Yo({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Hl(e, t, n, r) {
  return (
    r !== null && Ma(r),
    fr(t, e.child, null, n),
    (e = ba(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Uv(e, t, n, r, l, o, i) {
  if (n)
    return (
      t.flags & 256 ?
        ((t.flags &= -257), (r = tu(Error(j(422)))), Hl(e, t, i, r))
      : t.memoizedState !== null ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Yo({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = _n(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && fr(t, e.child, null, i),
        (t.child.memoizedState = Xu(i)),
        (t.memoizedState = Yu),
        o)
    );
  if (!(t.mode & 1)) return Hl(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(j(419))), (r = tu(o, r, void 0)), Hl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Be || u)) {
    if (((r = Ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), $t(e, l), vt(r, e, l, -1));
    }
    return qa(), (r = tu(Error(j(421)))), Hl(e, t, i, r);
  }
  return l.data === '$?' ?
      ((t.flags |= 128),
      (t.child = e.child),
      (t = Jv.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (be = ln(l.nextSibling)),
      (Ye = t),
      (oe = !0),
      (ht = null),
      e !== null &&
        ((nt[rt++] = Mt),
        (nt[rt++] = Ot),
        (nt[rt++] = Nn),
        (Mt = e.id),
        (Ot = e.overflow),
        (Nn = t)),
      (t = ba(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Nc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vu(e.return, t, n);
}
function nu(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ?
    (e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: l,
    })
  : ((o.isBackwards = t),
    (o.rendering = null),
    (o.renderingStartTime = 0),
    (o.last = r),
    (o.tail = n),
    (o.tailMode = l));
}
function up(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Fe(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Nc(e, n, t);
        else if (e.tag === 19) Nc(e, n, t);
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
  if ((ne(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Po(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null ?
            ((l = t.child), (t.child = null))
          : ((l = n.sibling), (n.sibling = null)),
          nu(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Po(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        nu(t, !0, n, null, o);
        break;
      case 'together':
        nu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ro(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function At(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ln |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = sn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function $v(e, t, n) {
  switch (t.tag) {
    case 3:
      op(t), cr();
      break;
    case 5:
      Od(t);
      break;
    case 1:
      We(t.type) && wo(t);
      break;
    case 4:
      $a(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ne(Eo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return (
          r.dehydrated !== null ?
            (ne(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes ? ip(e, t, n)
          : (ne(ue, ue.current & 1),
            (e = At(e, t, n)),
            e !== null ? e.sibling : null)
        );
      ne(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return up(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ne(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), rp(e, t, n);
  }
  return At(e, t, n);
}
var ap, Gu, sp, cp;
ap = function (e, t) {
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
Gu = function () {};
sp = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), kn(Pt.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = gu(e, l)), (r = gu(e, r)), (o = []);
        break;
      case 'select':
        (l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = xu(e, l)), (r = xu(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = yo);
    }
    Cu(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === 'style') {
          var u = l[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (tl.hasOwnProperty(s) ?
              o || (o = [])
            : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === 'dangerouslySetInnerHTML' ?
            ((a = a ? a.__html : void 0),
            (u = u ? u.__html : void 0),
            a != null && u !== a && (o = o || []).push(s, a))
          : s === 'children' ?
            (typeof a != 'string' && typeof a != 'number') ||
            (o = o || []).push(s, '' + a)
          : s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            (tl.hasOwnProperty(s) ?
              (a != null && s === 'onScroll' && re('scroll', e),
              o || u === a || (o = []))
            : (o = o || []).push(s, a));
    }
    n && (o = o || []).push('style', n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
cp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mr(e, t) {
  if (!oe)
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
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Av(e, t, n) {
  var r = t.pendingProps;
  switch ((Da(t), t.tag)) {
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
      return Te(t), null;
    case 1:
      return We(t.type) && go(), Te(t), null;
    case 3:
      return (
        (r = t.stateNode),
        dr(),
        le(Ve),
        le(Me),
        Ba(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vl(t) ?
            (t.flags |= 4)
          : e === null ||
            (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
            ((t.flags |= 1024), ht !== null && (la(ht), (ht = null)))),
        Gu(e, t),
        Te(t),
        null
      );
    case 5:
      Aa(t);
      var l = kn(pl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sp(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Te(t), null;
        }
        if (((e = kn(Pt.current)), Vl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ct] = t), (r[fl] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              re('cancel', r), re('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              re('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Wr.length; l++) re(Wr[l], r);
              break;
            case 'source':
              re('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              re('error', r), re('load', r);
              break;
            case 'details':
              re('toggle', r);
              break;
            case 'input':
              Us(r, o), re('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                re('invalid', r);
              break;
            case 'textarea':
              As(r, o), re('invalid', r);
          }
          Cu(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children' ?
                typeof u == 'string' ?
                  r.textContent !== u &&
                  (o.suppressHydrationWarning !== !0 && Bl(r.textContent, u, e),
                  (l = ['children', u]))
                : typeof u == 'number' &&
                  r.textContent !== '' + u &&
                  (o.suppressHydrationWarning !== !0 && Bl(r.textContent, u, e),
                  (l = ['children', '' + u]))
              : tl.hasOwnProperty(i) &&
                u != null &&
                i === 'onScroll' &&
                re('scroll', r);
            }
          switch (n) {
            case 'input':
              Ml(r), $s(r, o, !0);
              break;
            case 'textarea':
              Ml(r), Bs(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = yo);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = If(n)),
            e === 'http://www.w3.org/1999/xhtml' ?
              n === 'script' ?
                ((e = i.createElement('div')),
                (e.innerHTML = '<script></script>'),
                (e = e.removeChild(e.firstChild)))
              : typeof r.is == 'string' ? (e = i.createElement(n, { is: r.is }))
              : ((e = i.createElement(n)),
                n === 'select' &&
                  ((i = e),
                  r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
            : (e = i.createElementNS(e, n)),
            (e[Ct] = t),
            (e[fl] = r),
            ap(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ku(n, r)), n)) {
              case 'dialog':
                re('cancel', e), re('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                re('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Wr.length; l++) re(Wr[l], e);
                l = r;
                break;
              case 'source':
                re('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                re('error', e), re('load', e), (l = r);
                break;
              case 'details':
                re('toggle', e), (l = r);
                break;
              case 'input':
                Us(e, r), (l = gu(e, r)), re('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = se({}, r, { value: void 0 })),
                  re('invalid', e);
                break;
              case 'textarea':
                As(e, r), (l = xu(e, r)), re('invalid', e);
                break;
              default:
                l = r;
            }
            Cu(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === 'style' ? Af(e, a)
                : o === 'dangerouslySetInnerHTML' ?
                  ((a = a ? a.__html : void 0), a != null && Uf(e, a))
                : o === 'children' ?
                  typeof a == 'string' ?
                    (n !== 'textarea' || a !== '') && nl(e, a)
                  : typeof a == 'number' && nl(e, '' + a)
                : o !== 'suppressContentEditableWarning' &&
                  o !== 'suppressHydrationWarning' &&
                  o !== 'autoFocus' &&
                  (tl.hasOwnProperty(o) ?
                    a != null && o === 'onScroll' && re('scroll', e)
                  : a != null && ya(e, o, a, i));
              }
            switch (n) {
              case 'input':
                Ml(e), $s(e, r, !1);
                break;
              case 'textarea':
                Ml(e), Bs(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + cn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null ?
                    tr(e, !!r.multiple, o, !1)
                  : r.defaultValue != null &&
                    tr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = yo);
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
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) cp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(j(166));
        if (((n = kn(pl.current)), kn(Pt.current), Vl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ct] = t),
            (o = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ct] = t),
            (t.stateNode = r);
      }
      return Te(t), null;
    case 13:
      if (
        (le(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && be !== null && t.mode & 1 && !(t.flags & 128))
          _d(), cr(), (t.flags |= 98560), (o = !1);
        else if (((o = Vl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[Ct] = t;
          } else
            cr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Te(t), (o = !1);
        } else ht !== null && (la(ht), (ht = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ?
          ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? we === 0 && (we = 3) : qa())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        dr(), Gu(e, t), e === null && sl(t.stateNode.containerInfo), Te(t), null
      );
    case 10:
      return Fa(t.type._context), Te(t), null;
    case 17:
      return We(t.type) && go(), Te(t), null;
    case 19:
      if ((le(ue), (o = t.memoizedState), o === null)) return Te(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Mr(o, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Po(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Mr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null ?
                      ((o.childLanes = 0),
                      (o.lanes = e),
                      (o.child = null),
                      (o.subtreeFlags = 0),
                      (o.memoizedProps = null),
                      (o.memoizedState = null),
                      (o.updateQueue = null),
                      (o.dependencies = null),
                      (o.stateNode = null))
                    : ((o.childLanes = i.childLanes),
                      (o.lanes = i.lanes),
                      (o.child = i.child),
                      (o.subtreeFlags = 0),
                      (o.deletions = null),
                      (o.memoizedProps = i.memoizedProps),
                      (o.memoizedState = i.memoizedState),
                      (o.updateQueue = i.updateQueue),
                      (o.type = i.type),
                      (e = i.dependencies),
                      (o.dependencies =
                        e === null ? null : (
                          { lanes: e.lanes, firstContext: e.firstContext }
                        ))),
                    (n = n.sibling);
                return ne(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            me() > hr &&
            ((t.flags |= 128), (r = !0), Mr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Po(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Mr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !oe)
            )
              return Te(t), null;
          } else
            2 * me() - o.renderingStartTime > hr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Mr(o, !1), (t.lanes = 4194304));
        o.isBackwards ?
          ((i.sibling = t.child), (t.child = i))
        : ((n = o.last),
          n !== null ? (n.sibling = i) : (t.child = i),
          (o.last = i));
      }
      return o.tail !== null ?
          ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = me()),
          (t.sibling = null),
          (n = ue.current),
          ne(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Te(t), null);
    case 22:
    case 23:
      return (
        Za(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ?
          Qe & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
        : Te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Bv(e, t) {
  switch ((Da(t), t.tag)) {
    case 1:
      return (
        We(t.type) && go(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dr(),
        le(Ve),
        le(Me),
        Ba(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Aa(t), null;
    case 13:
      if (
        (le(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        cr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return le(ue), null;
    case 4:
      return dr(), null;
    case 10:
      return Fa(t.type._context), null;
    case 22:
    case 23:
      return Za(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kl = !1,
  De = !1,
  Vv = typeof WeakSet == 'function' ? WeakSet : Set,
  M = null;
function Zn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        fe(e, t, r);
      }
    else n.current = null;
}
function Ju(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var Tc = !1;
function Wv(e, t) {
  if (((Ou = ho), (e = hd()), Ta(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            s = 0,
            c = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var E;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (a = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (E = m.firstChild) !== null;

            )
              (h = m), (m = E);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++s === l && (u = i),
                h === o && ++c === r && (a = i),
                (E = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = E;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zu = { focusedElem: e, selectionRange: n }, ho = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    R = y.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ft(t.type, w),
                      R
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1 ?
                  (v.textContent = '')
                : v.nodeType === 9 &&
                  v.documentElement &&
                  v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (p) {
          fe(t, t.return, p);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (y = Tc), (Tc = !1), y;
}
function Gr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ju(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Qo(e, t) {
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
function Zu(e) {
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
function fp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), fp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ct], delete t[fl], delete t[Uu], delete t[Pv], delete t[Rv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function dp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dp(e.return)) return null;
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
function qu(e, t, n) {
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
        n != null || t.onclick !== null || (t.onclick = yo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qu(e, t, n), e = e.sibling; e !== null; ) qu(e, t, n), (e = e.sibling);
}
function ea(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ea(e, t, n), e = e.sibling; e !== null; ) ea(e, t, n), (e = e.sibling);
}
var Re = null,
  dt = !1;
function bt(e, t, n) {
  for (n = n.child; n !== null; ) pp(e, t, n), (n = n.sibling);
}
function pp(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == 'function')
    try {
      kt.onCommitFiberUnmount(Uo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      De || Zn(n, t);
    case 6:
      var r = Re,
        l = dt;
      (Re = null),
        bt(e, t, n),
        (Re = r),
        (dt = l),
        Re !== null &&
          (dt ?
            ((e = Re),
            (n = n.stateNode),
            e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
          : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null &&
        (dt ?
          ((e = Re),
          (n = n.stateNode),
          e.nodeType === 8 ? Xi(e.parentNode, n) : e.nodeType === 1 && Xi(e, n),
          il(e))
        : Xi(Re, n.stateNode));
      break;
    case 4:
      (r = Re),
        (l = dt),
        (Re = n.stateNode.containerInfo),
        (dt = !0),
        bt(e, t, n),
        (Re = r),
        (dt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !De &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ju(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      bt(e, t, n);
      break;
    case 1:
      if (
        !De &&
        (Zn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          fe(n, t, u);
        }
      bt(e, t, n);
      break;
    case 21:
      bt(e, t, n);
      break;
    case 22:
      n.mode & 1 ?
        ((De = (r = De) || n.memoizedState !== null), bt(e, t, n), (De = r))
      : bt(e, t, n);
      break;
    default:
      bt(e, t, n);
  }
}
function Dc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vv()),
      t.forEach(function (r) {
        var l = Zv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (Re = u.stateNode), (dt = !1);
              break e;
            case 3:
              (Re = u.stateNode.containerInfo), (dt = !0);
              break e;
            case 4:
              (Re = u.stateNode.containerInfo), (dt = !0);
              break e;
          }
          u = u.return;
        }
        if (Re === null) throw Error(j(160));
        pp(o, i, l), (Re = null), (dt = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        fe(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) hp(t, e), (t = t.sibling);
}
function hp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), xt(e), r & 4)) {
        try {
          Gr(3, e, e.return), Qo(3, e);
        } catch (w) {
          fe(e, e.return, w);
        }
        try {
          Gr(5, e, e.return);
        } catch (w) {
          fe(e, e.return, w);
        }
      }
      break;
    case 1:
      ct(t, e), xt(e), r & 512 && n !== null && Zn(n, n.return);
      break;
    case 5:
      if (
        (ct(t, e),
        xt(e),
        r & 512 && n !== null && Zn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          nl(l, '');
        } catch (w) {
          fe(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && zf(l, o),
              ku(u, i);
            var s = ku(u, o);
            for (i = 0; i < a.length; i += 2) {
              var c = a[i],
                m = a[i + 1];
              c === 'style' ? Af(l, m)
              : c === 'dangerouslySetInnerHTML' ? Uf(l, m)
              : c === 'children' ? nl(l, m)
              : ya(l, c, m, s);
            }
            switch (u) {
              case 'input':
                wu(l, o);
                break;
              case 'textarea':
                Ff(l, o);
                break;
              case 'select':
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null ?
                  tr(l, !!o.multiple, E, !1)
                : h !== !!o.multiple &&
                  (o.defaultValue != null ?
                    tr(l, !!o.multiple, o.defaultValue, !0)
                  : tr(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[fl] = o;
          } catch (w) {
            fe(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((ct(t, e), xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          fe(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (ct(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          il(t.containerInfo);
        } catch (w) {
          fe(e, e.return, w);
        }
      break;
    case 4:
      ct(t, e), xt(e);
      break;
    case 13:
      ct(t, e),
        xt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ga = me())),
        r & 4 && Dc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((De = (s = De) || c), ct(t, e), (De = s)) : ct(t, e),
        xt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (m = M = c; M !== null; ) {
              switch (((h = M), (E = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gr(4, h, h.return);
                  break;
                case 1:
                  Zn(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      fe(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Zn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Oc(m);
                    continue;
                  }
              }
              E !== null ? ((E.return = h), (M = E)) : Oc(m);
            }
            c = c.sibling;
          }
        e: for (c = null, m = e; ; ) {
          if (m.tag === 5) {
            if (c === null) {
              c = m;
              try {
                (l = m.stateNode),
                  s ?
                    ((o = l.style),
                    typeof o.setProperty == 'function' ?
                      o.setProperty('display', 'none', 'important')
                    : (o.display = 'none'))
                  : ((u = m.stateNode),
                    (a = m.memoizedProps.style),
                    (i =
                      a != null && a.hasOwnProperty('display') ?
                        a.display
                      : null),
                    (u.style.display = $f('display', i)));
              } catch (w) {
                fe(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (c === null)
              try {
                m.stateNode.nodeValue = s ? '' : m.memoizedProps;
              } catch (w) {
                fe(e, e.return, w);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            c === m && (c = null), (m = m.return);
          }
          c === m && (c = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ct(t, e), xt(e), r & 4 && Dc(e);
      break;
    case 21:
      break;
    default:
      ct(t, e), xt(e);
  }
}
function xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (nl(l, ''), (r.flags &= -33));
          var o = Lc(e);
          ea(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Lc(e);
          qu(e, u, i);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Hv(e, t, n) {
  (M = e), mp(e);
}
function mp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var l = M,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Kl;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || De;
        u = Kl;
        var s = De;
        if (((Kl = i), (De = a) && !s))
          for (M = l; M !== null; )
            (i = M),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null ? zc(l)
              : a !== null ? ((a.return = i), (M = a))
              : zc(l);
        for (; o !== null; ) (M = o), mp(o), (o = o.sibling);
        (M = l), (Kl = u), (De = s);
      }
      Mc(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (M = o)) : Mc(e);
  }
}
function Mc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              De || Qo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !De)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type ?
                      n.memoizedProps
                    : ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && vc(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                vc(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
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
                    var m = c.dehydrated;
                    m !== null && il(m);
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
              throw Error(j(163));
          }
        De || (t.flags & 512 && Zu(t));
      } catch (h) {
        fe(t, t.return, h);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Oc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function zc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qo(4, t);
          } catch (a) {
            fe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              fe(t, l, a);
            }
          }
          var o = t.return;
          try {
            Zu(t);
          } catch (a) {
            fe(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Zu(t);
          } catch (a) {
            fe(t, i, a);
          }
      }
    } catch (a) {
      fe(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (M = u);
      break;
    }
    M = t.return;
  }
}
var Kv = Math.ceil,
  jo = Bt.ReactCurrentDispatcher,
  Ya = Bt.ReactCurrentOwner,
  ot = Bt.ReactCurrentBatchConfig,
  b = 0,
  Ee = null,
  ye = null,
  _e = 0,
  Qe = 0,
  qn = mn(0),
  we = 0,
  yl = null,
  Ln = 0,
  bo = 0,
  Xa = 0,
  Jr = null,
  Ae = null,
  Ga = 0,
  hr = 1 / 0,
  Lt = null,
  No = !1,
  ta = null,
  un = null,
  Ql = !1,
  en = null,
  To = 0,
  Zr = 0,
  na = null,
  lo = -1,
  oo = 0;
function Ie() {
  return (
    b & 6 ? me()
    : lo !== -1 ? lo
    : (lo = me())
  );
}
function an(e) {
  return (
    e.mode & 1 ?
      b & 2 && _e !== 0 ? _e & -_e
      : jv.transition !== null ? (oo === 0 && (oo = Zf()), oo)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : od(e.type))),
        e)
    : 1
  );
}
function vt(e, t, n, r) {
  if (50 < Zr) throw ((Zr = 0), (na = null), Error(j(185)));
  El(e, n, r),
    (!(b & 2) || e !== Ee) &&
      (e === Ee && (!(b & 2) && (bo |= n), we === 4 && Zt(e, _e)),
      He(e, r),
      n === 1 && b === 0 && !(t.mode & 1) && ((hr = me() + 500), Wo && vn()));
}
function He(e, t) {
  var n = e.callbackNode;
  jm(e, t);
  var r = po(e, e === Ee ? _e : 0);
  if (r === 0)
    n !== null && Hs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Hs(n), t === 1))
      e.tag === 0 ? _v(Fc.bind(null, e)) : kd(Fc.bind(null, e)),
        Cv(function () {
          !(b & 6) && vn();
        }),
        (n = null);
    else {
      switch (qf(r)) {
        case 1:
          n = Ea;
          break;
        case 4:
          n = Gf;
          break;
        case 16:
          n = fo;
          break;
        case 536870912:
          n = Jf;
          break;
        default:
          n = fo;
      }
      n = Cp(n, vp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function vp(e, t) {
  if (((lo = -1), (oo = 0), b & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (ir() && e.callbackNode !== n) return null;
  var r = po(e, e === Ee ? _e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Lo(e, r);
  else {
    t = r;
    var l = b;
    b |= 2;
    var o = gp();
    (Ee !== e || _e !== t) && ((Lt = null), (hr = me() + 500), Rn(e, t));
    do
      try {
        Yv();
        break;
      } catch (u) {
        yp(e, u);
      }
    while (1);
    za(),
      (jo.current = o),
      (b = l),
      ye !== null ? (t = 0) : ((Ee = null), (_e = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Nu(e)), l !== 0 && ((r = l), (t = ra(e, l)))), t === 1)
    )
      throw ((n = yl), Rn(e, 0), Zt(e, r), He(e, me()), n);
    if (t === 6) Zt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Qv(l) &&
          ((t = Lo(e, r)),
          t === 2 && ((o = Nu(e)), o !== 0 && ((r = o), (t = ra(e, o)))),
          t === 1))
      )
        throw ((n = yl), Rn(e, 0), Zt(e, r), He(e, me()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          xn(e, Ae, Lt);
          break;
        case 3:
          if (
            (Zt(e, r), (r & 130023424) === r && ((t = Ga + 500 - me()), 10 < t))
          ) {
            if (po(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ie(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Iu(xn.bind(null, e, Ae, Lt), t);
            break;
          }
          xn(e, Ae, Lt);
          break;
        case 4:
          if ((Zt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - mt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = me() - r),
            (r =
              (120 > r ? 120
              : 480 > r ? 480
              : 1080 > r ? 1080
              : 1920 > r ? 1920
              : 3e3 > r ? 3e3
              : 4320 > r ? 4320
              : 1960 * Kv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Iu(xn.bind(null, e, Ae, Lt), r);
            break;
          }
          xn(e, Ae, Lt);
          break;
        case 5:
          xn(e, Ae, Lt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return He(e, me()), e.callbackNode === n ? vp.bind(null, e) : null;
}
function ra(e, t) {
  var n = Jr;
  return (
    e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256),
    (e = Lo(e, t)),
    e !== 2 && ((t = Ae), (Ae = n), t !== null && la(t)),
    e
  );
}
function la(e) {
  Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
}
function Qv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!gt(o(), l)) return !1;
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
function Zt(e, t) {
  for (
    t &= ~Xa,
      t &= ~bo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Fc(e) {
  if (b & 6) throw Error(j(327));
  ir();
  var t = po(e, 0);
  if (!(t & 1)) return He(e, me()), null;
  var n = Lo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Nu(e);
    r !== 0 && ((t = r), (n = ra(e, r)));
  }
  if (n === 1) throw ((n = yl), Rn(e, 0), Zt(e, t), He(e, me()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xn(e, Ae, Lt),
    He(e, me()),
    null
  );
}
function Ja(e, t) {
  var n = b;
  b |= 1;
  try {
    return e(t);
  } finally {
    (b = n), b === 0 && ((hr = me() + 500), Wo && vn());
  }
}
function Dn(e) {
  en !== null && en.tag === 0 && !(b & 6) && ir();
  var t = b;
  b |= 1;
  var n = ot.transition,
    r = X;
  try {
    if (((ot.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (ot.transition = n), (b = t), !(b & 6) && vn();
  }
}
function Za() {
  (Qe = qn.current), le(qn);
}
function Rn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ev(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((Da(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && go();
          break;
        case 3:
          dr(), le(Ve), le(Me), Ba();
          break;
        case 5:
          Aa(r);
          break;
        case 4:
          dr();
          break;
        case 13:
          le(ue);
          break;
        case 19:
          le(ue);
          break;
        case 10:
          Fa(r.type._context);
          break;
        case 22:
        case 23:
          Za();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (ye = e = sn(e.current, null)),
    (_e = Qe = t),
    (we = 0),
    (yl = null),
    (Xa = bo = Ln = 0),
    (Ae = Jr = null),
    Cn !== null)
  ) {
    for (t = 0; t < Cn.length; t++)
      if (((n = Cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Cn = null;
  }
  return e;
}
function yp(e, t) {
  do {
    var n = ye;
    try {
      if ((za(), (to.current = _o), Ro)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ro = !1;
      }
      if (
        ((Tn = 0),
        (xe = ge = ae = null),
        (Xr = !1),
        (hl = 0),
        (Ya.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (yl = t), (ye = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = _e),
          (u.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var s = a,
            c = u,
            m = c.tag;
          if (!(c.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = c.alternate;
            h ?
              ((c.updateQueue = h.updateQueue),
              (c.memoizedState = h.memoizedState),
              (c.lanes = h.lanes))
            : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var E = Cc(i);
          if (E !== null) {
            (E.flags &= -257),
              kc(E, i, u, o, t),
              E.mode & 1 && Ec(o, s, t),
              (t = E),
              (a = s);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ec(o, s, t), qa();
              break e;
            }
            a = Error(j(426));
          }
        } else if (oe && u.mode & 1) {
          var R = Cc(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              kc(R, i, u, o, t),
              Ma(pr(a, u));
            break e;
          }
        }
        (o = a = pr(a, u)),
          we !== 4 && (we = 2),
          Jr === null ? (Jr = [o]) : Jr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = ep(o, a, t);
              mc(o, d);
              break e;
            case 1:
              u = a;
              var f = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (un === null || !un.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var p = tp(o, u, t);
                mc(o, p);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Sp(n);
    } catch (_) {
      (t = _), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function gp() {
  var e = jo.current;
  return (jo.current = _o), e === null ? _o : e;
}
function qa() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    Ee === null || (!(Ln & 268435455) && !(bo & 268435455)) || Zt(Ee, _e);
}
function Lo(e, t) {
  var n = b;
  b |= 2;
  var r = gp();
  (Ee !== e || _e !== t) && ((Lt = null), Rn(e, t));
  do
    try {
      bv();
      break;
    } catch (l) {
      yp(e, l);
    }
  while (1);
  if ((za(), (b = n), (jo.current = r), ye !== null)) throw Error(j(261));
  return (Ee = null), (_e = 0), we;
}
function bv() {
  for (; ye !== null; ) wp(ye);
}
function Yv() {
  for (; ye !== null && !wm(); ) wp(ye);
}
function wp(e) {
  var t = Ep(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sp(e) : (ye = t),
    (Ya.current = null);
}
function Sp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Bv(n, t)), n !== null)) {
        (n.flags &= 32767), (ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (ye = null);
        return;
      }
    } else if (((n = Av(n, t, Qe)), n !== null)) {
      ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function xn(e, t, n) {
  var r = X,
    l = ot.transition;
  try {
    (ot.transition = null), (X = 1), Xv(e, t, n, r);
  } finally {
    (ot.transition = l), (X = r);
  }
  return null;
}
function Xv(e, t, n, r) {
  do ir();
  while (en !== null);
  if (b & 6) throw Error(j(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Nm(e, o),
    e === Ee && ((ye = Ee = null), (_e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ql ||
      ((Ql = !0),
      Cp(fo, function () {
        return ir(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ot.transition), (ot.transition = null);
    var i = X;
    X = 1;
    var u = b;
    (b |= 4),
      (Ya.current = null),
      Wv(e, n),
      hp(n, e),
      mv(zu),
      (ho = !!Ou),
      (zu = Ou = null),
      (e.current = n),
      Hv(n),
      Sm(),
      (b = u),
      (X = i),
      (ot.transition = o);
  } else e.current = n;
  if (
    (Ql && ((Ql = !1), (en = e), (To = l)),
    (o = e.pendingLanes),
    o === 0 && (un = null),
    Cm(n.stateNode),
    He(e, me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (No) throw ((No = !1), (e = ta), (ta = null), e);
  return (
    To & 1 && e.tag !== 0 && ir(),
    (o = e.pendingLanes),
    o & 1 ?
      e === na ?
        Zr++
      : ((Zr = 0), (na = e))
    : (Zr = 0),
    vn(),
    null
  );
}
function ir() {
  if (en !== null) {
    var e = qf(To),
      t = ot.transition,
      n = X;
    try {
      if (((ot.transition = null), (X = 16 > e ? 16 : e), en === null))
        var r = !1;
      else {
        if (((e = en), (en = null), (To = 0), b & 6)) throw Error(j(331));
        var l = b;
        for (b |= 4, M = e.current; M !== null; ) {
          var o = M,
            i = o.child;
          if (M.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (M = s; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gr(8, c, o);
                  }
                  var m = c.child;
                  if (m !== null) (m.return = c), (M = m);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var h = c.sibling,
                        E = c.return;
                      if ((fp(c), c === s)) {
                        M = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = E), (M = h);
                        break;
                      }
                      M = E;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var R = w.sibling;
                    (w.sibling = null), (w = R);
                  } while (w !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (M = i);
          else
            e: for (; M !== null; ) {
              if (((o = M), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (M = d);
                break e;
              }
              M = o.return;
            }
        }
        var f = e.current;
        for (M = f; M !== null; ) {
          i = M;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (M = v);
          else
            e: for (i = f; M !== null; ) {
              if (((u = M), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qo(9, u);
                  }
                } catch (_) {
                  fe(u, u.return, _);
                }
              if (u === i) {
                M = null;
                break e;
              }
              var p = u.sibling;
              if (p !== null) {
                (p.return = u.return), (M = p);
                break e;
              }
              M = u.return;
            }
        }
        if (
          ((b = l), vn(), kt && typeof kt.onPostCommitFiberRoot == 'function')
        )
          try {
            kt.onPostCommitFiberRoot(Uo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (ot.transition = t);
    }
  }
  return !1;
}
function Ic(e, t, n) {
  (t = pr(n, t)),
    (t = ep(e, t, 1)),
    (e = on(e, t, 1)),
    (t = Ie()),
    e !== null && (El(e, 1, t), He(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) Ic(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ic(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (un === null || !un.has(r)))
        ) {
          (e = pr(n, e)),
            (e = tp(t, e, 1)),
            (t = on(t, e, 1)),
            (e = Ie()),
            t !== null && (El(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Gv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (_e & n) === n &&
      (we === 4 || (we === 3 && (_e & 130023424) === _e && 500 > me() - Ga) ?
        Rn(e, 0)
      : (Xa |= n)),
    He(e, t);
}
function xp(e, t) {
  t === 0 &&
    (e.mode & 1 ?
      ((t = Fl), (Fl <<= 1), !(Fl & 130023424) && (Fl = 4194304))
    : (t = 1));
  var n = Ie();
  (e = $t(e, t)), e !== null && (El(e, t, n), He(e, n));
}
function Jv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xp(e, n);
}
function Zv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), xp(e, n);
}
var Ep;
Ep = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) Be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Be = !1), $v(e, t, n);
      Be = !!(e.flags & 131072);
    }
  else (Be = !1), oe && t.flags & 1048576 && Pd(t, xo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ro(e, t), (e = t.pendingProps);
      var l = sr(t, Me.current);
      or(t, n), (l = Wa(null, t, r, e, l, n));
      var o = Ha();
      return (
        (t.flags |= 1),
        (
          typeof l == 'object' &&
          l !== null &&
          typeof l.render == 'function' &&
          l.$$typeof === void 0
        ) ?
          ((t.tag = 1),
          (t.memoizedState = null),
          (t.updateQueue = null),
          We(r) ? ((o = !0), wo(t)) : (o = !1),
          (t.memoizedState =
            l.state !== null && l.state !== void 0 ? l.state : null),
          Ua(t),
          (l.updater = Ho),
          (t.stateNode = l),
          (l._reactInternals = t),
          Hu(t, r, e, n),
          (t = bu(null, t, r, !0, o, n)))
        : ((t.tag = 0), oe && o && La(t), Fe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ro(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = ey(r)),
          (e = ft(r, e)),
          l)
        ) {
          case 0:
            t = Qu(null, t, r, e, n);
            break e;
          case 1:
            t = _c(null, t, r, e, n);
            break e;
          case 11:
            t = Pc(null, t, r, e, n);
            break e;
          case 14:
            t = Rc(null, t, r, ft(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ft(r, l)),
        Qu(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ft(r, l)),
        _c(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((op(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Nd(e, t),
          ko(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = pr(Error(j(423)), t)), (t = jc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = pr(Error(j(424)), t)), (t = jc(e, t, r, n, l));
            break e;
          } else
            for (
              be = ln(t.stateNode.containerInfo.firstChild),
                Ye = t,
                oe = !0,
                ht = null,
                n = Md(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((cr(), r === l)) {
            t = At(e, t, n);
            break e;
          }
          Fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Od(t),
        e === null && Bu(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Fu(r, l) ? (i = null) : o !== null && Fu(r, o) && (t.flags |= 32),
        lp(e, t),
        Fe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Bu(t), null;
    case 13:
      return ip(e, t, n);
    case 4:
      return (
        $a(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fr(t, null, r, n)) : Fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ft(r, l)),
        Pc(e, t, r, l, n)
      );
    case 7:
      return Fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          ne(Eo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (gt(o.value, i)) {
            if (o.children === l.children && !Ve.current) {
              t = At(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Ft(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null ?
                          (a.next = a)
                        : ((a.next = c.next), (c.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Vu(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(j(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Vu(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Fe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        or(t, n),
        (l = it(l)),
        (r = r(l)),
        (t.flags |= 1),
        Fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ft(r, t.pendingProps)),
        (l = ft(r.type, l)),
        Rc(e, t, r, l, n)
      );
    case 15:
      return np(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ft(r, l)),
        ro(e, t),
        (t.tag = 1),
        We(r) ? ((e = !0), wo(t)) : (e = !1),
        or(t, n),
        Ld(t, r, l),
        Hu(t, r, l, n),
        bu(null, t, r, !0, e, n)
      );
    case 19:
      return up(e, t, n);
    case 22:
      return rp(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Cp(e, t) {
  return Xf(e, t);
}
function qv(e, t, n, r) {
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
function lt(e, t, n, r) {
  return new qv(e, t, n, r);
}
function es(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ey(e) {
  if (typeof e == 'function') return es(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wa)) return 11;
    if (e === Sa) return 14;
  }
  return 2;
}
function sn(e, t) {
  var n = e.alternate;
  return (
    n === null ?
      ((n = lt(e.tag, t, e.key, e.mode)),
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
function io(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) es(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Wn:
        return _n(n.children, l, o, t);
      case ga:
        (i = 8), (l |= 8);
        break;
      case hu:
        return (
          (e = lt(12, n, t, l | 2)), (e.elementType = hu), (e.lanes = o), e
        );
      case mu:
        return (e = lt(13, n, t, l)), (e.elementType = mu), (e.lanes = o), e;
      case vu:
        return (e = lt(19, n, t, l)), (e.elementType = vu), (e.lanes = o), e;
      case Df:
        return Yo(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Tf:
              i = 10;
              break e;
            case Lf:
              i = 9;
              break e;
            case wa:
              i = 11;
              break e;
            case Sa:
              i = 14;
              break e;
            case Xt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = lt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function _n(e, t, n, r) {
  return (e = lt(7, e, r, t)), (e.lanes = n), e;
}
function Yo(e, t, n, r) {
  return (
    (e = lt(22, e, r, t)),
    (e.elementType = Df),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ru(e, t, n) {
  return (e = lt(6, e, null, t)), (e.lanes = n), e;
}
function lu(e, t, n) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ty(e, t, n, r, l) {
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
    (this.eventTimes = Ui(0)),
    (this.expirationTimes = Ui(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ui(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ts(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new ty(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = lt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ua(o),
    e
  );
}
function ny(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function kp(e) {
  if (!e) return fn;
  e = e._reactInternals;
  e: {
    if (Fn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n)) return Cd(e, n, t);
  }
  return t;
}
function Pp(e, t, n, r, l, o, i, u, a) {
  return (
    (e = ts(n, r, !0, e, l, o, i, u, a)),
    (e.context = kp(null)),
    (n = e.current),
    (r = Ie()),
    (l = an(n)),
    (o = Ft(r, l)),
    (o.callback = t ?? null),
    on(n, o, l),
    (e.current.lanes = l),
    El(e, l, r),
    He(e, r),
    e
  );
}
function Xo(e, t, n, r) {
  var l = t.current,
    o = Ie(),
    i = an(l);
  return (
    (n = kp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ft(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = on(l, t, i)),
    e !== null && (vt(e, l, i, o), eo(e, l, i)),
    i
  );
}
function Do(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Uc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ns(e, t) {
  Uc(e, t), (e = e.alternate) && Uc(e, t);
}
function ry() {
  return null;
}
var Rp =
  typeof reportError == 'function' ? reportError : (
    function (e) {
      console.error(e);
    }
  );
function rs(e) {
  this._internalRoot = e;
}
Go.prototype.render = rs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Xo(e, t, null, null);
};
Go.prototype.unmount = rs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dn(function () {
      Xo(null, e, null, null);
    }),
      (t[Ut] = null);
  }
};
function Go(e) {
  this._internalRoot = e;
}
Go.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = nd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++);
    Jt.splice(n, 0, e), n === 0 && ld(e);
  }
};
function ls(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Jo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function $c() {}
function ly(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var s = Do(i);
        o.call(s);
      };
    }
    var i = Pp(t, r, e, 0, null, !1, !1, '', $c);
    return (
      (e._reactRootContainer = i),
      (e[Ut] = i.current),
      sl(e.nodeType === 8 ? e.parentNode : e),
      Dn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var s = Do(a);
      u.call(s);
    };
  }
  var a = ts(e, 0, !1, null, null, !1, !1, '', $c);
  return (
    (e._reactRootContainer = a),
    (e[Ut] = a.current),
    sl(e.nodeType === 8 ? e.parentNode : e),
    Dn(function () {
      Xo(t, a, n, r);
    }),
    a
  );
}
function Zo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var a = Do(i);
        u.call(a);
      };
    }
    Xo(t, i, e, l);
  } else i = ly(n, t, e, l, r);
  return Do(i);
}
ed = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Vr(t.pendingLanes);
        n !== 0 &&
          (Ca(t, n | 1), He(t, me()), !(b & 6) && ((hr = me() + 500), vn()));
      }
      break;
    case 13:
      Dn(function () {
        var r = $t(e, 1);
        if (r !== null) {
          var l = Ie();
          vt(r, e, 1, l);
        }
      }),
        ns(e, 1);
  }
};
ka = function (e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = Ie();
      vt(t, e, 134217728, n);
    }
    ns(e, 134217728);
  }
};
td = function (e) {
  if (e.tag === 13) {
    var t = an(e),
      n = $t(e, t);
    if (n !== null) {
      var r = Ie();
      vt(n, e, t, r);
    }
    ns(e, t);
  }
};
nd = function () {
  return X;
};
rd = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
Ru = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((wu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var l = Vo(r);
            if (!l) throw Error(j(90));
            Of(r), wu(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Ff(e, n);
      break;
    case 'select':
      (t = n.value), t != null && tr(e, !!n.multiple, t, !1);
  }
};
Wf = Ja;
Hf = Dn;
var oy = { usingClientEntryPoint: !1, Events: [kl, bn, Vo, Bf, Vf, Ja] },
  Or = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  iy = {
    bundleType: Or.bundleType,
    version: Or.version,
    rendererPackageName: Or.rendererPackageName,
    rendererConfig: Or.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = bf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Or.findFiberByHostInstance || ry,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!bl.isDisabled && bl.supportsFiber)
    try {
      (Uo = bl.inject(iy)), (kt = bl);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oy;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ls(t)) throw Error(j(200));
  return ny(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!ls(e)) throw Error(j(299));
  var n = !1,
    r = '',
    l = Rp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ts(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ut] = t.current),
    sl(e.nodeType === 8 ? e.parentNode : e),
    new rs(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ?
        Error(j(188))
      : ((e = Object.keys(e).join(',')), Error(j(268, e)));
  return (e = bf(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return Dn(e);
};
Ge.hydrate = function (e, t, n) {
  if (!Jo(t)) throw Error(j(200));
  return Zo(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!ls(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = Rp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Pp(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ut] = t.current),
    sl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null ?
          (t.mutableSourceEagerHydrationData = [n, l])
        : t.mutableSourceEagerHydrationData.push(n, l);
  return new Go(t);
};
Ge.render = function (e, t, n) {
  if (!Jo(t)) throw Error(j(200));
  return Zo(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!Jo(e)) throw Error(j(40));
  return e._reactRootContainer ?
      (Dn(function () {
        Zo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ut] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = Ja;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Jo(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Zo(e, t, n, !1, r);
};
Ge.version = '18.2.0-next-9e3b772b8-20220608';
function _p() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_p);
    } catch (e) {
      console.error(e);
    }
}
_p(), (Pf.exports = Ge);
var qo = Pf.exports;
const jp = hf(qo),
  uy = pf({ __proto__: null, default: jp }, [qo]);
var Ac = qo;
(du.createRoot = Ac.createRoot), (du.hydrateRoot = Ac.hydrateRoot);
var Np = { exports: {} },
  Tp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mr = g;
function ay(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sy = typeof Object.is == 'function' ? Object.is : ay,
  cy = mr.useState,
  fy = mr.useEffect,
  dy = mr.useLayoutEffect,
  py = mr.useDebugValue;
function hy(e, t) {
  var n = t(),
    r = cy({ inst: { value: n, getSnapshot: t } }),
    l = r[0].inst,
    o = r[1];
  return (
    dy(
      function () {
        (l.value = n), (l.getSnapshot = t), ou(l) && o({ inst: l });
      },
      [e, n, t]
    ),
    fy(
      function () {
        return (
          ou(l) && o({ inst: l }),
          e(function () {
            ou(l) && o({ inst: l });
          })
        );
      },
      [e]
    ),
    py(n),
    n
  );
}
function ou(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !sy(e, n);
  } catch {
    return !0;
  }
}
function my(e, t) {
  return t();
}
var vy =
  (
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ) ?
    my
  : hy;
Tp.useSyncExternalStore =
  mr.useSyncExternalStore !== void 0 ? mr.useSyncExternalStore : vy;
Np.exports = Tp;
var yy = Np.exports,
  Lp = { exports: {} },
  Dp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ei = g,
  gy = yy;
function wy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Sy = typeof Object.is == 'function' ? Object.is : wy,
  xy = gy.useSyncExternalStore,
  Ey = ei.useRef,
  Cy = ei.useEffect,
  ky = ei.useMemo,
  Py = ei.useDebugValue;
Dp.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
  var o = Ey(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = ky(
    function () {
      function a(E) {
        if (!s) {
          if (((s = !0), (c = E), (E = r(E)), l !== void 0 && i.hasValue)) {
            var y = i.value;
            if (l(y, E)) return (m = y);
          }
          return (m = E);
        }
        if (((y = m), Sy(c, E))) return y;
        var w = r(E);
        return l !== void 0 && l(y, w) ? y : ((c = E), (m = w));
      }
      var s = !1,
        c,
        m,
        h = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        h === null ? void 0 : (
          function () {
            return a(h());
          }
        ),
      ];
    },
    [t, n, r, l]
  );
  var u = xy(e, o[0], o[1]);
  return (
    Cy(
      function () {
        (i.hasValue = !0), (i.value = u);
      },
      [u]
    ),
    Py(u),
    u
  );
};
Lp.exports = Dp;
var Ry = Lp.exports;
function _y(e) {
  e();
}
let Mp = _y;
const jy = e => (Mp = e),
  Ny = () => Mp,
  Bc = Symbol.for('react-redux-context'),
  Vc = typeof globalThis < 'u' ? globalThis : {};
function Ty() {
  var e;
  if (!g.createContext) return {};
  const t = (e = Vc[Bc]) != null ? e : (Vc[Bc] = new Map());
  let n = t.get(g.createContext);
  return n || ((n = g.createContext(null)), t.set(g.createContext, n)), n;
}
const dn = Ty();
function os(e = dn) {
  return function () {
    return g.useContext(e);
  };
}
const Op = os(),
  Ly = () => {
    throw new Error('uSES not initialized!');
  };
let zp = Ly;
const Dy = e => {
    zp = e;
  },
  My = (e, t) => e === t;
function Oy(e = dn) {
  const t = e === dn ? Op : os(e);
  return function (r, l = {}) {
    const {
        equalityFn: o = My,
        stabilityCheck: i = void 0,
        noopCheck: u = void 0,
      } = typeof l == 'function' ? { equalityFn: l } : l,
      {
        store: a,
        subscription: s,
        getServerState: c,
        stabilityCheck: m,
        noopCheck: h,
      } = t();
    g.useRef(!0);
    const E = g.useCallback(
        {
          [r.name](w) {
            return r(w);
          },
        }[r.name],
        [r, m, i]
      ),
      y = zp(s.addNestedSub, a.getState, c || a.getState, E, o);
    return g.useDebugValue(y), y;
  };
}
const wr = Oy();
var Fp = { exports: {} },
  G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ce = typeof Symbol == 'function' && Symbol.for,
  is = Ce ? Symbol.for('react.element') : 60103,
  us = Ce ? Symbol.for('react.portal') : 60106,
  ti = Ce ? Symbol.for('react.fragment') : 60107,
  ni = Ce ? Symbol.for('react.strict_mode') : 60108,
  ri = Ce ? Symbol.for('react.profiler') : 60114,
  li = Ce ? Symbol.for('react.provider') : 60109,
  oi = Ce ? Symbol.for('react.context') : 60110,
  as = Ce ? Symbol.for('react.async_mode') : 60111,
  ii = Ce ? Symbol.for('react.concurrent_mode') : 60111,
  ui = Ce ? Symbol.for('react.forward_ref') : 60112,
  ai = Ce ? Symbol.for('react.suspense') : 60113,
  zy = Ce ? Symbol.for('react.suspense_list') : 60120,
  si = Ce ? Symbol.for('react.memo') : 60115,
  ci = Ce ? Symbol.for('react.lazy') : 60116,
  Fy = Ce ? Symbol.for('react.block') : 60121,
  Iy = Ce ? Symbol.for('react.fundamental') : 60117,
  Uy = Ce ? Symbol.for('react.responder') : 60118,
  $y = Ce ? Symbol.for('react.scope') : 60119;
function Ze(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case is:
        switch (((e = e.type), e)) {
          case as:
          case ii:
          case ti:
          case ri:
          case ni:
          case ai:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case oi:
              case ui:
              case ci:
              case si:
              case li:
                return e;
              default:
                return t;
            }
        }
      case us:
        return t;
    }
  }
}
function Ip(e) {
  return Ze(e) === ii;
}
G.AsyncMode = as;
G.ConcurrentMode = ii;
G.ContextConsumer = oi;
G.ContextProvider = li;
G.Element = is;
G.ForwardRef = ui;
G.Fragment = ti;
G.Lazy = ci;
G.Memo = si;
G.Portal = us;
G.Profiler = ri;
G.StrictMode = ni;
G.Suspense = ai;
G.isAsyncMode = function (e) {
  return Ip(e) || Ze(e) === as;
};
G.isConcurrentMode = Ip;
G.isContextConsumer = function (e) {
  return Ze(e) === oi;
};
G.isContextProvider = function (e) {
  return Ze(e) === li;
};
G.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === is;
};
G.isForwardRef = function (e) {
  return Ze(e) === ui;
};
G.isFragment = function (e) {
  return Ze(e) === ti;
};
G.isLazy = function (e) {
  return Ze(e) === ci;
};
G.isMemo = function (e) {
  return Ze(e) === si;
};
G.isPortal = function (e) {
  return Ze(e) === us;
};
G.isProfiler = function (e) {
  return Ze(e) === ri;
};
G.isStrictMode = function (e) {
  return Ze(e) === ni;
};
G.isSuspense = function (e) {
  return Ze(e) === ai;
};
G.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === ti ||
    e === ii ||
    e === ri ||
    e === ni ||
    e === ai ||
    e === zy ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === ci ||
        e.$$typeof === si ||
        e.$$typeof === li ||
        e.$$typeof === oi ||
        e.$$typeof === ui ||
        e.$$typeof === Iy ||
        e.$$typeof === Uy ||
        e.$$typeof === $y ||
        e.$$typeof === Fy))
  );
};
G.typeOf = Ze;
Fp.exports = G;
var Ay = Fp.exports,
  Up = Ay,
  By = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Vy = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  $p = {};
$p[Up.ForwardRef] = By;
$p[Up.Memo] = Vy;
var Z = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ss = Symbol.for('react.element'),
  cs = Symbol.for('react.portal'),
  fi = Symbol.for('react.fragment'),
  di = Symbol.for('react.strict_mode'),
  pi = Symbol.for('react.profiler'),
  hi = Symbol.for('react.provider'),
  mi = Symbol.for('react.context'),
  Wy = Symbol.for('react.server_context'),
  vi = Symbol.for('react.forward_ref'),
  yi = Symbol.for('react.suspense'),
  gi = Symbol.for('react.suspense_list'),
  wi = Symbol.for('react.memo'),
  Si = Symbol.for('react.lazy'),
  Hy = Symbol.for('react.offscreen'),
  Ap;
Ap = Symbol.for('react.module.reference');
function at(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ss:
        switch (((e = e.type), e)) {
          case fi:
          case pi:
          case di:
          case yi:
          case gi:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Wy:
              case mi:
              case vi:
              case Si:
              case wi:
              case hi:
                return e;
              default:
                return t;
            }
        }
      case cs:
        return t;
    }
  }
}
Z.ContextConsumer = mi;
Z.ContextProvider = hi;
Z.Element = ss;
Z.ForwardRef = vi;
Z.Fragment = fi;
Z.Lazy = Si;
Z.Memo = wi;
Z.Portal = cs;
Z.Profiler = pi;
Z.StrictMode = di;
Z.Suspense = yi;
Z.SuspenseList = gi;
Z.isAsyncMode = function () {
  return !1;
};
Z.isConcurrentMode = function () {
  return !1;
};
Z.isContextConsumer = function (e) {
  return at(e) === mi;
};
Z.isContextProvider = function (e) {
  return at(e) === hi;
};
Z.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ss;
};
Z.isForwardRef = function (e) {
  return at(e) === vi;
};
Z.isFragment = function (e) {
  return at(e) === fi;
};
Z.isLazy = function (e) {
  return at(e) === Si;
};
Z.isMemo = function (e) {
  return at(e) === wi;
};
Z.isPortal = function (e) {
  return at(e) === cs;
};
Z.isProfiler = function (e) {
  return at(e) === pi;
};
Z.isStrictMode = function (e) {
  return at(e) === di;
};
Z.isSuspense = function (e) {
  return at(e) === yi;
};
Z.isSuspenseList = function (e) {
  return at(e) === gi;
};
Z.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === fi ||
    e === pi ||
    e === di ||
    e === yi ||
    e === gi ||
    e === Hy ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Si ||
        e.$$typeof === wi ||
        e.$$typeof === hi ||
        e.$$typeof === mi ||
        e.$$typeof === vi ||
        e.$$typeof === Ap ||
        e.getModuleId !== void 0))
  );
};
Z.typeOf = at;
function Ky() {
  const e = Ny();
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
        l = t;
      for (; l; ) r.push(l), (l = l.next);
      return r;
    },
    subscribe(r) {
      let l = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !l ||
            t === null ||
            ((l = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const Wc = { notify() {}, get: () => [] };
function Qy(e, t) {
  let n,
    r = Wc,
    l = 0,
    o = !1;
  function i(w) {
    c();
    const R = r.subscribe(w);
    let d = !1;
    return () => {
      d || ((d = !0), R(), m());
    };
  }
  function u() {
    r.notify();
  }
  function a() {
    y.onStateChange && y.onStateChange();
  }
  function s() {
    return o;
  }
  function c() {
    l++, n || ((n = t ? t.addNestedSub(a) : e.subscribe(a)), (r = Ky()));
  }
  function m() {
    l--, n && l === 0 && (n(), (n = void 0), r.clear(), (r = Wc));
  }
  function h() {
    o || ((o = !0), c());
  }
  function E() {
    o && ((o = !1), m());
  }
  const y = {
    addNestedSub: i,
    notifyNestedSubs: u,
    handleChangeWrapper: a,
    isSubscribed: s,
    trySubscribe: h,
    tryUnsubscribe: E,
    getListeners: () => r,
  };
  return y;
}
const by =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Yy = by ? g.useLayoutEffect : g.useEffect;
function Xy({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: l = 'once',
  noopCheck: o = 'once',
}) {
  const i = g.useMemo(() => {
      const s = Qy(e);
      return {
        store: e,
        subscription: s,
        getServerState: r ? () => r : void 0,
        stabilityCheck: l,
        noopCheck: o,
      };
    }, [e, r, l, o]),
    u = g.useMemo(() => e.getState(), [e]);
  Yy(() => {
    const { subscription: s } = i;
    return (
      (s.onStateChange = s.notifyNestedSubs),
      s.trySubscribe(),
      u !== e.getState() && s.notifyNestedSubs(),
      () => {
        s.tryUnsubscribe(), (s.onStateChange = void 0);
      }
    );
  }, [i, u]);
  const a = t || dn;
  return g.createElement(a.Provider, { value: i }, n);
}
function Bp(e = dn) {
  const t = e === dn ? Op : os(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const Gy = Bp();
function Jy(e = dn) {
  const t = e === dn ? Gy : Bp(e);
  return function () {
    return t().dispatch;
  };
}
const Sr = Jy();
Dy(Ry.useSyncExternalStoreWithSelector);
jy(qo.unstable_batchedUpdates);
/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function de() {
  return (
    (de =
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
    de.apply(this, arguments)
  );
}
var pe;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(pe || (pe = {}));
const Hc = 'popstate';
function Zy(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return gl(
      '',
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : pn(l);
  }
  return eg(t, n, null, e);
}
function B(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Mn(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function qy() {
  return Math.random().toString(36).substr(2, 8);
}
function Kc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function gl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    de(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Vt(t) : t,
      { state: n, key: (t && t.key) || r || qy() }
    )
  );
}
function pn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Vt(e) {
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
function eg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = pe.Pop,
    a = null,
    s = c();
  s == null && ((s = 0), i.replaceState(de({}, i.state, { idx: s }), ''));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    u = pe.Pop;
    let R = c(),
      d = R == null ? null : R - s;
    (s = R), a && a({ action: u, location: w.location, delta: d });
  }
  function h(R, d) {
    u = pe.Push;
    let f = gl(w.location, R, d);
    n && n(f, R), (s = c() + 1);
    let v = Kc(f, s),
      p = w.createHref(f);
    try {
      i.pushState(v, '', p);
    } catch (_) {
      if (_ instanceof DOMException && _.name === 'DataCloneError') throw _;
      l.location.assign(p);
    }
    o && a && a({ action: u, location: w.location, delta: 1 });
  }
  function E(R, d) {
    u = pe.Replace;
    let f = gl(w.location, R, d);
    n && n(f, R), (s = c());
    let v = Kc(f, s),
      p = w.createHref(f);
    i.replaceState(v, '', p),
      o && a && a({ action: u, location: w.location, delta: 0 });
  }
  function y(R) {
    let d = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      f = typeof R == 'string' ? R : pn(R);
    return (
      B(
        d,
        'No window.location.(origin|href) available to create URL for href: ' +
          f
      ),
      new URL(f, d)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(R) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Hc, m),
        (a = R),
        () => {
          l.removeEventListener(Hc, m), (a = null);
        }
      );
    },
    createHref(R) {
      return t(l, R);
    },
    createURL: y,
    encodeLocation(R) {
      let d = y(R);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: h,
    replace: E,
    go(R) {
      return i.go(R);
    },
  };
  return w;
}
var he;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(he || (he = {}));
const tg = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function ng(e) {
  return e.index === !0;
}
function oa(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        u = typeof l.id == 'string' ? l.id : i.join('-');
      if (
        (B(
          l.index !== !0 || !l.children,
          'Cannot specify children on an index route'
        ),
        B(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        ng(l))
      ) {
        let a = de({}, l, t(l), { id: u });
        return (r[u] = a), a;
      } else {
        let a = de({}, l, t(l), { id: u, children: void 0 });
        return (
          (r[u] = a), l.children && (a.children = oa(l.children, t, i, r)), a
        );
      }
    })
  );
}
function er(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Vt(t) : t,
    l = _t(r.pathname || '/', n);
  if (l == null) return null;
  let o = Vp(e);
  lg(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = pg(o[u], mg(l));
  return i;
}
function rg(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Vp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || '' : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    a.relativePath.startsWith('/') &&
      (B(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = Rt([r, a.relativePath]),
      c = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (B(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + s + '".')
      ),
      Vp(o.children, t, c, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: fg(s, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === '' || !((u = o.path) != null && u.includes('?'))) l(o, i);
      else for (let a of Wp(o.path)) l(o, i, a);
    }),
    t
  );
}
function Wp(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = Wp(r.join('/')),
    u = [];
  return (
    u.push(...i.map(a => (a === '' ? o : [o, a].join('/')))),
    l && u.push(...i),
    u.map(a => (e.startsWith('/') && a === '' ? '/' : a))
  );
}
function lg(e) {
  e.sort((t, n) =>
    t.score !== n.score ?
      n.score - t.score
    : dg(
        t.routesMeta.map(r => r.childrenIndex),
        n.routesMeta.map(r => r.childrenIndex)
      )
  );
}
const og = /^:\w+$/,
  ig = 3,
  ug = 2,
  ag = 1,
  sg = 10,
  cg = -2,
  Qc = e => e === '*';
function fg(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Qc) && (r += cg),
    t && (r += ug),
    n
      .filter(l => !Qc(l))
      .reduce(
        (l, o) =>
          l +
          (og.test(o) ? ig
          : o === '' ? ag
          : sg),
        r
      )
  );
}
function dg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ?
      e[e.length - 1] - t[t.length - 1]
    : 0;
}
function pg(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = l === '/' ? t : t.slice(l.length) || '/',
      c = ia(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let m = u.route;
    o.push({
      params: r,
      pathname: Rt([l, c.pathname]),
      pathnameBase: wg(Rt([l, c.pathnameBase])),
      route: m,
    }),
      c.pathnameBase !== '/' && (l = Rt([l, c.pathnameBase]));
  }
  return o;
}
function ia(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = hg(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    u = l.slice(1);
  return {
    params: r.reduce((s, c, m) => {
      let { paramName: h, isOptional: E } = c;
      if (h === '*') {
        let w = u[m] || '';
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, '$1');
      }
      const y = u[m];
      return E && !y ? (s[h] = void 0) : (s[h] = vg(y || '', h)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function hg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Mn(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:(\w+)(\?)?/g,
          (i, u, a) => (
            r.push({ paramName: u, isOptional: a != null }),
            a ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*') ?
      (r.push({ paramName: '*' }),
      (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
    : n ? (l += '\\/*$')
    : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function mg(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Mn(
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
function vg(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Mn(
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
function _t(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function yg(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? Vt(e) : e;
  return {
    pathname:
      n ?
        n.startsWith('/') ?
          n
        : gg(n, t)
      : t,
    search: Sg(r),
    hash: xg(l),
  };
}
function gg(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach(l => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function iu(e, t, n, r) {
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
function Hp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function xi(e) {
  return Hp(e).map((t, n) =>
    n === e.length - 1 ? t.pathname : t.pathnameBase
  );
}
function Ei(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string' ?
    (l = Vt(e))
  : ((l = de({}, e)),
    B(
      !l.pathname || !l.pathname.includes('?'),
      iu('?', 'pathname', 'search', l)
    ),
    B(!l.pathname || !l.pathname.includes('#'), iu('#', 'pathname', 'hash', l)),
    B(!l.search || !l.search.includes('#'), iu('#', 'search', 'hash', l)));
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    u;
  if (i == null) u = n;
  else if (r) {
    let m = t[t.length - 1].replace(/^\//, '').split('/');
    if (i.startsWith('..')) {
      let h = i.split('/');
      for (; h[0] === '..'; ) h.shift(), m.pop();
      l.pathname = h.join('/');
    }
    u = '/' + m.join('/');
  } else {
    let m = t.length - 1;
    if (i.startsWith('..')) {
      let h = i.split('/');
      for (; h[0] === '..'; ) h.shift(), (m -= 1);
      l.pathname = h.join('/');
    }
    u = m >= 0 ? t[m] : '/';
  }
  let a = yg(l, u),
    s = i && i !== '/' && i.endsWith('/'),
    c = (o || i === '.') && n.endsWith('/');
  return !a.pathname.endsWith('/') && (s || c) && (a.pathname += '/'), a;
}
const Rt = e => e.join('/').replace(/\/\/+/g, '/'),
  wg = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Sg = e =>
    !e || e === '?' ? ''
    : e.startsWith('?') ? e
    : '?' + e,
  xg = e =>
    !e || e === '#' ? ''
    : e.startsWith('#') ? e
    : '#' + e;
class fs {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = l),
      r instanceof Error ?
        ((this.data = r.toString()), (this.error = r))
      : (this.data = r);
  }
}
function Kp(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Qp = ['post', 'put', 'patch', 'delete'],
  Eg = new Set(Qp),
  Cg = ['get', ...Qp],
  kg = new Set(Cg),
  Pg = new Set([301, 302, 303, 307, 308]),
  Rg = new Set([307, 308]),
  uu = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  bp = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  zr = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Yp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  _g = e => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Xp = 'remix-router-transitions';
function jg(e) {
  const t =
      e.window ? e.window
      : typeof window < 'u' ? window
      : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  B(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let S = e.detectErrorBoundary;
    l = C => ({ hasErrorBoundary: S(C) });
  } else l = _g;
  let o = {},
    i = oa(e.routes, l, void 0, o),
    u,
    a = e.basename || '/',
    s = de(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1,
      },
      e.future
    ),
    c = null,
    m = new Set(),
    h = null,
    E = null,
    y = null,
    w = e.hydrationData != null,
    R = er(i, e.history.location, a),
    d = null;
  if (R == null) {
    let S = tt(404, { pathname: e.history.location.pathname }),
      { matches: C, route: k } = ef(i);
    (R = C), (d = { [k.id]: S });
  }
  let f =
      !R.some(S => S.route.lazy) &&
      (!R.some(S => S.route.loader) || e.hydrationData != null),
    v,
    p = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: R,
      initialized: f,
      navigation: uu,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    _ = pe.Pop,
    N = !1,
    P,
    L = !1,
    I = new Map(),
    U = null,
    Y = !1,
    ke = !1,
    Se = [],
    jt = [],
    ce = new Map(),
    Ht = 0,
    Nt = -1,
    D = new Map(),
    F = new Set(),
    V = new Map(),
    q = new Map(),
    J = new Set(),
    qe = new Map(),
    Oe = new Map(),
    yn = !1;
  function Tt() {
    if (
      ((c = e.history.listen(S => {
        let { action: C, location: k, delta: T } = S;
        if (yn) {
          yn = !1;
          return;
        }
        Mn(
          Oe.size === 0 || T != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let O = js({
          currentLocation: p.location,
          nextLocation: k,
          historyAction: C,
        });
        if (O && T != null) {
          (yn = !0),
            e.history.go(T * -1),
            Nl(O, {
              state: 'blocked',
              location: k,
              proceed() {
                Nl(O, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(T);
              },
              reset() {
                let W = new Map(p.blockers);
                W.set(O, zr), Ke({ blockers: W });
              },
            });
          return;
        }
        return gn(C, k);
      })),
      n)
    ) {
      $g(t, I);
      let S = () => Ag(t, I);
      t.addEventListener('pagehide', S),
        (U = () => t.removeEventListener('pagehide', S));
    }
    return p.initialized || gn(pe.Pop, p.location), v;
  }
  function Un() {
    c && c(),
      U && U(),
      m.clear(),
      P && P.abort(),
      p.fetchers.forEach((S, C) => jl(C)),
      p.blockers.forEach((S, C) => _s(C));
  }
  function Ch(S) {
    return m.add(S), () => m.delete(S);
  }
  function Ke(S, C) {
    C === void 0 && (C = {}), (p = de({}, p, S));
    let k = [],
      T = [];
    s.v7_fetcherPersist &&
      p.fetchers.forEach((O, W) => {
        O.state === 'idle' && (J.has(W) ? T.push(W) : k.push(W));
      }),
      [...m].forEach(O =>
        O(p, {
          deletedFetchers: T,
          unstable_viewTransitionOpts: C.viewTransitionOpts,
          unstable_flushSync: C.flushSync === !0,
        })
      ),
      s.v7_fetcherPersist &&
        (k.forEach(O => p.fetchers.delete(O)), T.forEach(O => jl(O)));
  }
  function Cr(S, C, k) {
    var T, O;
    let { flushSync: W } = k === void 0 ? {} : k,
      A =
        p.actionData != null &&
        p.navigation.formMethod != null &&
        pt(p.navigation.formMethod) &&
        p.navigation.state === 'loading' &&
        ((T = S.state) == null ? void 0 : T._isRedirect) !== !0,
      $;
    C.actionData ?
      Object.keys(C.actionData).length > 0 ?
        ($ = C.actionData)
      : ($ = null)
    : A ? ($ = p.actionData)
    : ($ = null);
    let z =
        C.loaderData ?
          qc(p.loaderData, C.loaderData, C.matches || [], C.errors)
        : p.loaderData,
      Q = p.blockers;
    Q.size > 0 && ((Q = new Map(Q)), Q.forEach((ee, ie) => Q.set(ie, zr)));
    let Pe =
      N === !0 ||
      (p.navigation.formMethod != null &&
        pt(p.navigation.formMethod) &&
        ((O = S.state) == null ? void 0 : O._isRedirect) !== !0);
    u && ((i = u), (u = void 0)),
      Y ||
        _ === pe.Pop ||
        (_ === pe.Push ?
          e.history.push(S, S.state)
        : _ === pe.Replace && e.history.replace(S, S.state));
    let H;
    if (_ === pe.Pop) {
      let ee = I.get(p.location.pathname);
      ee && ee.has(S.pathname) ?
        (H = { currentLocation: p.location, nextLocation: S })
      : I.has(S.pathname) &&
        (H = { currentLocation: S, nextLocation: p.location });
    } else if (L) {
      let ee = I.get(p.location.pathname);
      ee ?
        ee.add(S.pathname)
      : ((ee = new Set([S.pathname])), I.set(p.location.pathname, ee)),
        (H = { currentLocation: p.location, nextLocation: S });
    }
    Ke(
      de({}, C, {
        actionData: $,
        loaderData: z,
        historyAction: _,
        location: S,
        initialized: !0,
        navigation: uu,
        revalidation: 'idle',
        restoreScrollPosition: Ts(S, C.matches || p.matches),
        preventScrollReset: Pe,
        blockers: Q,
      }),
      { viewTransitionOpts: H, flushSync: W === !0 }
    ),
      (_ = pe.Pop),
      (N = !1),
      (L = !1),
      (Y = !1),
      (ke = !1),
      (Se = []),
      (jt = []);
  }
  async function xs(S, C) {
    if (typeof S == 'number') {
      e.history.go(S);
      return;
    }
    let k = ua(
        p.location,
        p.matches,
        a,
        s.v7_prependBasename,
        S,
        C == null ? void 0 : C.fromRouteId,
        C == null ? void 0 : C.relative
      ),
      {
        path: T,
        submission: O,
        error: W,
      } = bc(s.v7_normalizeFormMethod, !1, k, C),
      A = p.location,
      $ = gl(p.location, T, C && C.state);
    $ = de({}, $, e.history.encodeLocation($));
    let z = C && C.replace != null ? C.replace : void 0,
      Q = pe.Push;
    z === !0 ?
      (Q = pe.Replace)
    : z === !1 ||
      (O != null &&
        pt(O.formMethod) &&
        O.formAction === p.location.pathname + p.location.search &&
        (Q = pe.Replace));
    let Pe =
        C && 'preventScrollReset' in C ? C.preventScrollReset === !0 : void 0,
      H = (C && C.unstable_flushSync) === !0,
      ee = js({ currentLocation: A, nextLocation: $, historyAction: Q });
    if (ee) {
      Nl(ee, {
        state: 'blocked',
        location: $,
        proceed() {
          Nl(ee, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: $,
          }),
            xs(S, C);
        },
        reset() {
          let ie = new Map(p.blockers);
          ie.set(ee, zr), Ke({ blockers: ie });
        },
      });
      return;
    }
    return await gn(Q, $, {
      submission: O,
      pendingError: W,
      preventScrollReset: Pe,
      replace: C && C.replace,
      enableViewTransition: C && C.unstable_viewTransition,
      flushSync: H,
    });
  }
  function kh() {
    if (
      (_i(),
      Ke({ revalidation: 'loading' }),
      p.navigation.state !== 'submitting')
    ) {
      if (p.navigation.state === 'idle') {
        gn(p.historyAction, p.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      gn(_ || p.historyAction, p.navigation.location, {
        overrideNavigation: p.navigation,
      });
    }
  }
  async function gn(S, C, k) {
    P && P.abort(),
      (P = null),
      (_ = S),
      (Y = (k && k.startUninterruptedRevalidation) === !0),
      Mh(p.location, p.matches),
      (N = (k && k.preventScrollReset) === !0),
      (L = (k && k.enableViewTransition) === !0);
    let T = u || i,
      O = k && k.overrideNavigation,
      W = er(T, C, a),
      A = (k && k.flushSync) === !0;
    if (!W) {
      let ie = tt(404, { pathname: C.pathname }),
        { matches: ze, route: St } = ef(T);
      ji(),
        Cr(
          C,
          { matches: ze, loaderData: {}, errors: { [St.id]: ie } },
          { flushSync: A }
        );
      return;
    }
    if (
      p.initialized &&
      !ke &&
      Mg(p.location, C) &&
      !(k && k.submission && pt(k.submission.formMethod))
    ) {
      Cr(C, { matches: W }, { flushSync: A });
      return;
    }
    P = new AbortController();
    let $ = Ir(e.history, C, P.signal, k && k.submission),
      z,
      Q;
    if (k && k.pendingError) Q = { [qr(W).route.id]: k.pendingError };
    else if (k && k.submission && pt(k.submission.formMethod)) {
      let ie = await Ph($, C, k.submission, W, {
        replace: k.replace,
        flushSync: A,
      });
      if (ie.shortCircuited) return;
      (z = ie.pendingActionData),
        (Q = ie.pendingActionError),
        (O = au(C, k.submission)),
        (A = !1),
        ($ = new Request($.url, { signal: $.signal }));
    }
    let {
      shortCircuited: Pe,
      loaderData: H,
      errors: ee,
    } = await Rh(
      $,
      C,
      W,
      O,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      A,
      z,
      Q
    );
    Pe ||
      ((P = null),
      Cr(
        C,
        de({ matches: W }, z ? { actionData: z } : {}, {
          loaderData: H,
          errors: ee,
        })
      ));
  }
  async function Ph(S, C, k, T, O) {
    O === void 0 && (O = {}), _i();
    let W = Ig(C, k);
    Ke({ navigation: W }, { flushSync: O.flushSync === !0 });
    let A,
      $ = sa(T, C);
    if (!$.route.action && !$.route.lazy)
      A = {
        type: he.error,
        error: tt(405, {
          method: S.method,
          pathname: C.pathname,
          routeId: $.route.id,
        }),
      };
    else if (((A = await Fr('action', S, $, T, o, l, a)), S.signal.aborted))
      return { shortCircuited: !0 };
    if (ur(A)) {
      let z;
      return (
        O && O.replace != null ?
          (z = O.replace)
        : (z = A.location === p.location.pathname + p.location.search),
        await kr(p, A, { submission: k, replace: z }),
        { shortCircuited: !0 }
      );
    }
    if (el(A)) {
      let z = qr(T, $.route.id);
      return (
        (O && O.replace) !== !0 && (_ = pe.Push),
        { pendingActionData: {}, pendingActionError: { [z.route.id]: A.error } }
      );
    }
    if (Pn(A)) throw tt(400, { type: 'defer-action' });
    return { pendingActionData: { [$.route.id]: A.data } };
  }
  async function Rh(S, C, k, T, O, W, A, $, z, Q) {
    let Pe = T || au(C, O),
      H = O || W || rf(Pe),
      ee = u || i,
      [ie, ze] = Yc(e.history, p, k, H, C, ke, Se, jt, J, V, F, ee, a, z, Q);
    if (
      (ji(
        te =>
          !(k && k.some(et => et.route.id === te)) ||
          (ie && ie.some(et => et.route.id === te))
      ),
      (Nt = ++Ht),
      ie.length === 0 && ze.length === 0)
    ) {
      let te = Ps();
      return (
        Cr(
          C,
          de(
            { matches: k, loaderData: {}, errors: Q || null },
            z ? { actionData: z } : {},
            te ? { fetchers: new Map(p.fetchers) } : {}
          ),
          { flushSync: $ }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!Y) {
      ze.forEach(et => {
        let ve = p.fetchers.get(et.key),
          wn = Ur(void 0, ve ? ve.data : void 0);
        p.fetchers.set(et.key, wn);
      });
      let te = z || p.actionData;
      Ke(
        de(
          { navigation: Pe },
          te ?
            Object.keys(te).length === 0 ?
              { actionData: null }
            : { actionData: te }
          : {},
          ze.length > 0 ? { fetchers: new Map(p.fetchers) } : {}
        ),
        { flushSync: $ }
      );
    }
    ze.forEach(te => {
      ce.has(te.key) && Qt(te.key),
        te.controller && ce.set(te.key, te.controller);
    });
    let St = () => ze.forEach(te => Qt(te.key));
    P && P.signal.addEventListener('abort', St);
    let {
      results: Rr,
      loaderResults: Ni,
      fetcherResults: $n,
    } = await Es(p.matches, k, ie, ze, S);
    if (S.signal.aborted) return { shortCircuited: !0 };
    P && P.signal.removeEventListener('abort', St),
      ze.forEach(te => ce.delete(te.key));
    let st = tf(Rr);
    if (st) {
      if (st.idx >= ie.length) {
        let te = ze[st.idx - ie.length].key;
        F.add(te);
      }
      return await kr(p, st.result, { replace: A }), { shortCircuited: !0 };
    }
    let { loaderData: Tl, errors: Ti } = Zc(p, k, ie, Ni, Q, ze, $n, qe);
    qe.forEach((te, et) => {
      te.subscribe(ve => {
        (ve || te.done) && qe.delete(et);
      });
    });
    let Li = Ps(),
      Di = Rs(Nt),
      An = Li || Di || ze.length > 0;
    return de(
      { loaderData: Tl, errors: Ti },
      An ? { fetchers: new Map(p.fetchers) } : {}
    );
  }
  function _h(S, C, k, T) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ce.has(S) && Qt(S);
    let O = (T && T.unstable_flushSync) === !0,
      W = u || i,
      A = ua(
        p.location,
        p.matches,
        a,
        s.v7_prependBasename,
        k,
        C,
        T == null ? void 0 : T.relative
      ),
      $ = er(W, A, a);
    if (!$) {
      Pr(S, C, tt(404, { pathname: A }), { flushSync: O });
      return;
    }
    let {
      path: z,
      submission: Q,
      error: Pe,
    } = bc(s.v7_normalizeFormMethod, !0, A, T);
    if (Pe) {
      Pr(S, C, Pe, { flushSync: O });
      return;
    }
    let H = sa($, z);
    if (((N = (T && T.preventScrollReset) === !0), Q && pt(Q.formMethod))) {
      jh(S, C, z, H, $, O, Q);
      return;
    }
    V.set(S, { routeId: C, path: z }), Nh(S, C, z, H, $, O, Q);
  }
  async function jh(S, C, k, T, O, W, A) {
    if ((_i(), V.delete(S), !T.route.action && !T.route.lazy)) {
      let ve = tt(405, { method: A.formMethod, pathname: k, routeId: C });
      Pr(S, C, ve, { flushSync: W });
      return;
    }
    let $ = p.fetchers.get(S);
    Kt(S, Ug(A, $), { flushSync: W });
    let z = new AbortController(),
      Q = Ir(e.history, k, z.signal, A);
    ce.set(S, z);
    let Pe = Ht,
      H = await Fr('action', Q, T, O, o, l, a);
    if (Q.signal.aborted) {
      ce.get(S) === z && ce.delete(S);
      return;
    }
    if (J.has(S)) {
      Kt(S, Yt(void 0));
      return;
    }
    if (ur(H))
      if ((ce.delete(S), Nt > Pe)) {
        Kt(S, Yt(void 0));
        return;
      } else return F.add(S), Kt(S, Ur(A)), kr(p, H, { fetcherSubmission: A });
    if (el(H)) {
      Pr(S, C, H.error);
      return;
    }
    if (Pn(H)) throw tt(400, { type: 'defer-action' });
    let ee = p.navigation.location || p.location,
      ie = Ir(e.history, ee, z.signal),
      ze = u || i,
      St =
        p.navigation.state !== 'idle' ?
          er(ze, p.navigation.location, a)
        : p.matches;
    B(St, "Didn't find any matches after fetcher action");
    let Rr = ++Ht;
    D.set(S, Rr);
    let Ni = Ur(A, H.data);
    p.fetchers.set(S, Ni);
    let [$n, st] = Yc(
      e.history,
      p,
      St,
      A,
      ee,
      ke,
      Se,
      jt,
      J,
      V,
      F,
      ze,
      a,
      { [T.route.id]: H.data },
      void 0
    );
    st
      .filter(ve => ve.key !== S)
      .forEach(ve => {
        let wn = ve.key,
          Ls = p.fetchers.get(wn),
          zh = Ur(void 0, Ls ? Ls.data : void 0);
        p.fetchers.set(wn, zh),
          ce.has(wn) && Qt(wn),
          ve.controller && ce.set(wn, ve.controller);
      }),
      Ke({ fetchers: new Map(p.fetchers) });
    let Tl = () => st.forEach(ve => Qt(ve.key));
    z.signal.addEventListener('abort', Tl);
    let {
      results: Ti,
      loaderResults: Li,
      fetcherResults: Di,
    } = await Es(p.matches, St, $n, st, ie);
    if (z.signal.aborted) return;
    z.signal.removeEventListener('abort', Tl),
      D.delete(S),
      ce.delete(S),
      st.forEach(ve => ce.delete(ve.key));
    let An = tf(Ti);
    if (An) {
      if (An.idx >= $n.length) {
        let ve = st[An.idx - $n.length].key;
        F.add(ve);
      }
      return kr(p, An.result);
    }
    let { loaderData: te, errors: et } = Zc(
      p,
      p.matches,
      $n,
      Li,
      void 0,
      st,
      Di,
      qe
    );
    if (p.fetchers.has(S)) {
      let ve = Yt(H.data);
      p.fetchers.set(S, ve);
    }
    Rs(Rr),
      p.navigation.state === 'loading' && Rr > Nt ?
        (B(_, 'Expected pending action'),
        P && P.abort(),
        Cr(p.navigation.location, {
          matches: St,
          loaderData: te,
          errors: et,
          fetchers: new Map(p.fetchers),
        }))
      : (Ke({
          errors: et,
          loaderData: qc(p.loaderData, te, St, et),
          fetchers: new Map(p.fetchers),
        }),
        (ke = !1));
  }
  async function Nh(S, C, k, T, O, W, A) {
    let $ = p.fetchers.get(S);
    Kt(S, Ur(A, $ ? $.data : void 0), { flushSync: W });
    let z = new AbortController(),
      Q = Ir(e.history, k, z.signal);
    ce.set(S, z);
    let Pe = Ht,
      H = await Fr('loader', Q, T, O, o, l, a);
    if (
      (Pn(H) && (H = (await Zp(H, Q.signal, !0)) || H),
      ce.get(S) === z && ce.delete(S),
      !Q.signal.aborted)
    ) {
      if (J.has(S)) {
        Kt(S, Yt(void 0));
        return;
      }
      if (ur(H))
        if (Nt > Pe) {
          Kt(S, Yt(void 0));
          return;
        } else {
          F.add(S), await kr(p, H);
          return;
        }
      if (el(H)) {
        Pr(S, C, H.error);
        return;
      }
      B(!Pn(H), 'Unhandled fetcher deferred data'), Kt(S, Yt(H.data));
    }
  }
  async function kr(S, C, k) {
    let {
      submission: T,
      fetcherSubmission: O,
      replace: W,
    } = k === void 0 ? {} : k;
    C.revalidate && (ke = !0);
    let A = gl(S.location, C.location, { _isRedirect: !0 });
    if ((B(A, 'Expected a location on the redirect navigation'), n)) {
      let ee = !1;
      if (C.reloadDocument) ee = !0;
      else if (Yp.test(C.location)) {
        const ie = e.history.createURL(C.location);
        ee = ie.origin !== t.location.origin || _t(ie.pathname, a) == null;
      }
      if (ee) {
        W ? t.location.replace(C.location) : t.location.assign(C.location);
        return;
      }
    }
    P = null;
    let $ = W === !0 ? pe.Replace : pe.Push,
      { formMethod: z, formAction: Q, formEncType: Pe } = S.navigation;
    !T && !O && z && Q && Pe && (T = rf(S.navigation));
    let H = T || O;
    if (Rg.has(C.status) && H && pt(H.formMethod))
      await gn($, A, {
        submission: de({}, H, { formAction: C.location }),
        preventScrollReset: N,
      });
    else {
      let ee = au(A, T);
      await gn($, A, {
        overrideNavigation: ee,
        fetcherSubmission: O,
        preventScrollReset: N,
      });
    }
  }
  async function Es(S, C, k, T, O) {
    let W = await Promise.all([
        ...k.map(z => Fr('loader', O, z, C, o, l, a)),
        ...T.map(z =>
          z.matches && z.match && z.controller ?
            Fr(
              'loader',
              Ir(e.history, z.path, z.controller.signal),
              z.match,
              z.matches,
              o,
              l,
              a
            )
          : { type: he.error, error: tt(404, { pathname: z.path }) }
        ),
      ]),
      A = W.slice(0, k.length),
      $ = W.slice(k.length);
    return (
      await Promise.all([
        nf(
          S,
          k,
          A,
          A.map(() => O.signal),
          !1,
          p.loaderData
        ),
        nf(
          S,
          T.map(z => z.match),
          $,
          T.map(z => (z.controller ? z.controller.signal : null)),
          !0
        ),
      ]),
      { results: W, loaderResults: A, fetcherResults: $ }
    );
  }
  function _i() {
    (ke = !0),
      Se.push(...ji()),
      V.forEach((S, C) => {
        ce.has(C) && (jt.push(C), Qt(C));
      });
  }
  function Kt(S, C, k) {
    k === void 0 && (k = {}),
      p.fetchers.set(S, C),
      Ke(
        { fetchers: new Map(p.fetchers) },
        { flushSync: (k && k.flushSync) === !0 }
      );
  }
  function Pr(S, C, k, T) {
    T === void 0 && (T = {});
    let O = qr(p.matches, C);
    jl(S),
      Ke(
        { errors: { [O.route.id]: k }, fetchers: new Map(p.fetchers) },
        { flushSync: (T && T.flushSync) === !0 }
      );
  }
  function Cs(S) {
    return (
      s.v7_fetcherPersist &&
        (q.set(S, (q.get(S) || 0) + 1), J.has(S) && J.delete(S)),
      p.fetchers.get(S) || bp
    );
  }
  function jl(S) {
    let C = p.fetchers.get(S);
    ce.has(S) && !(C && C.state === 'loading' && D.has(S)) && Qt(S),
      V.delete(S),
      D.delete(S),
      F.delete(S),
      J.delete(S),
      p.fetchers.delete(S);
  }
  function Th(S) {
    if (s.v7_fetcherPersist) {
      let C = (q.get(S) || 0) - 1;
      C <= 0 ? (q.delete(S), J.add(S)) : q.set(S, C);
    } else jl(S);
    Ke({ fetchers: new Map(p.fetchers) });
  }
  function Qt(S) {
    let C = ce.get(S);
    B(C, 'Expected fetch controller: ' + S), C.abort(), ce.delete(S);
  }
  function ks(S) {
    for (let C of S) {
      let k = Cs(C),
        T = Yt(k.data);
      p.fetchers.set(C, T);
    }
  }
  function Ps() {
    let S = [],
      C = !1;
    for (let k of F) {
      let T = p.fetchers.get(k);
      B(T, 'Expected fetcher: ' + k),
        T.state === 'loading' && (F.delete(k), S.push(k), (C = !0));
    }
    return ks(S), C;
  }
  function Rs(S) {
    let C = [];
    for (let [k, T] of D)
      if (T < S) {
        let O = p.fetchers.get(k);
        B(O, 'Expected fetcher: ' + k),
          O.state === 'loading' && (Qt(k), D.delete(k), C.push(k));
      }
    return ks(C), C.length > 0;
  }
  function Lh(S, C) {
    let k = p.blockers.get(S) || zr;
    return Oe.get(S) !== C && Oe.set(S, C), k;
  }
  function _s(S) {
    p.blockers.delete(S), Oe.delete(S);
  }
  function Nl(S, C) {
    let k = p.blockers.get(S) || zr;
    B(
      (k.state === 'unblocked' && C.state === 'blocked') ||
        (k.state === 'blocked' && C.state === 'blocked') ||
        (k.state === 'blocked' && C.state === 'proceeding') ||
        (k.state === 'blocked' && C.state === 'unblocked') ||
        (k.state === 'proceeding' && C.state === 'unblocked'),
      'Invalid blocker state transition: ' + k.state + ' -> ' + C.state
    );
    let T = new Map(p.blockers);
    T.set(S, C), Ke({ blockers: T });
  }
  function js(S) {
    let { currentLocation: C, nextLocation: k, historyAction: T } = S;
    if (Oe.size === 0) return;
    Oe.size > 1 && Mn(!1, 'A router only supports one blocker at a time');
    let O = Array.from(Oe.entries()),
      [W, A] = O[O.length - 1],
      $ = p.blockers.get(W);
    if (
      !($ && $.state === 'proceeding') &&
      A({ currentLocation: C, nextLocation: k, historyAction: T })
    )
      return W;
  }
  function ji(S) {
    let C = [];
    return (
      qe.forEach((k, T) => {
        (!S || S(T)) && (k.cancel(), C.push(T), qe.delete(T));
      }),
      C
    );
  }
  function Dh(S, C, k) {
    if (((h = S), (y = C), (E = k || null), !w && p.navigation === uu)) {
      w = !0;
      let T = Ts(p.location, p.matches);
      T != null && Ke({ restoreScrollPosition: T });
    }
    return () => {
      (h = null), (y = null), (E = null);
    };
  }
  function Ns(S, C) {
    return (
      (E &&
        E(
          S,
          C.map(T => rg(T, p.loaderData))
        )) ||
      S.key
    );
  }
  function Mh(S, C) {
    if (h && y) {
      let k = Ns(S, C);
      h[k] = y();
    }
  }
  function Ts(S, C) {
    if (h) {
      let k = Ns(S, C),
        T = h[k];
      if (typeof T == 'number') return T;
    }
    return null;
  }
  function Oh(S) {
    (o = {}), (u = oa(S, l, void 0, o));
  }
  return (
    (v = {
      get basename() {
        return a;
      },
      get state() {
        return p;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Tt,
      subscribe: Ch,
      enableScrollRestoration: Dh,
      navigate: xs,
      fetch: _h,
      revalidate: kh,
      createHref: S => e.history.createHref(S),
      encodeLocation: S => e.history.encodeLocation(S),
      getFetcher: Cs,
      deleteFetcher: Th,
      dispose: Un,
      getBlocker: Lh,
      deleteBlocker: _s,
      _internalFetchControllers: ce,
      _internalActiveDeferreds: qe,
      _internalSetRoutes: Oh,
    }),
    v
  );
}
function Ng(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function ua(e, t, n, r, l, o, i) {
  let u, a;
  if (o) {
    u = [];
    for (let c of t)
      if ((u.push(c), c.route.id === o)) {
        a = c;
        break;
      }
  } else (u = t), (a = t[t.length - 1]);
  let s = Ei(l || '.', xi(u), _t(e.pathname, n) || e.pathname, i === 'path');
  return (
    l == null && ((s.search = e.search), (s.hash = e.hash)),
    (l == null || l === '' || l === '.') &&
      a &&
      a.route.index &&
      !ds(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (s.pathname = s.pathname === '/' ? n : Rt([n, s.pathname])),
    pn(s)
  );
}
function bc(e, t, n, r) {
  if (!r || !Ng(r)) return { path: n };
  if (r.formMethod && !Fg(r.formMethod))
    return { path: n, error: tt(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: tt(400, { type: 'invalid-body' }) }),
    o = r.formMethod || 'get',
    i = e ? o.toUpperCase() : o.toLowerCase(),
    u = Jp(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!pt(i)) return l();
      let h =
        typeof r.body == 'string' ? r.body
        : r.body instanceof FormData || r.body instanceof URLSearchParams ?
          Array.from(r.body.entries()).reduce((E, y) => {
            let [w, R] = y;
            return (
              '' +
              E +
              w +
              '=' +
              R +
              `
`
            );
          }, '')
        : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!pt(i)) return l();
      try {
        let h = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  B(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let a, s;
  if (r.formData) (a = aa(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (a = aa(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (s = Jc(a));
  else if (r.body == null) (a = new URLSearchParams()), (s = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (s = Jc(a));
    } catch {
      return l();
    }
  let c = {
    formMethod: i,
    formAction: u,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (pt(c.formMethod)) return { path: n, submission: c };
  let m = Vt(n);
  return (
    t && m.search && ds(m.search) && a.append('index', ''),
    (m.search = '?' + a),
    { path: pn(m), submission: c }
  );
}
function Tg(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex(l => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Yc(e, t, n, r, l, o, i, u, a, s, c, m, h, E, y) {
  let w =
      y ? Object.values(y)[0]
      : E ? Object.values(E)[0]
      : void 0,
    R = e.createURL(t.location),
    d = e.createURL(l),
    f = y ? Object.keys(y)[0] : void 0,
    p = Tg(n, f).filter((N, P) => {
      if (N.route.lazy) return !0;
      if (N.route.loader == null) return !1;
      if (Lg(t.loaderData, t.matches[P], N) || i.some(U => U === N.route.id))
        return !0;
      let L = t.matches[P],
        I = N;
      return Xc(
        N,
        de(
          {
            currentUrl: R,
            currentParams: L.params,
            nextUrl: d,
            nextParams: I.params,
          },
          r,
          {
            actionResult: w,
            defaultShouldRevalidate:
              o ||
              R.pathname + R.search === d.pathname + d.search ||
              R.search !== d.search ||
              Gp(L, I),
          }
        )
      );
    }),
    _ = [];
  return (
    s.forEach((N, P) => {
      if (!n.some(ke => ke.route.id === N.routeId) || a.has(P)) return;
      let L = er(m, N.path, h);
      if (!L) {
        _.push({
          key: P,
          routeId: N.routeId,
          path: N.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let I = t.fetchers.get(P),
        U = sa(L, N.path),
        Y = !1;
      c.has(P) ? (Y = !1)
      : u.includes(P) ? (Y = !0)
      : I && I.state !== 'idle' && I.data === void 0 ? (Y = o)
      : (Y = Xc(
          U,
          de(
            {
              currentUrl: R,
              currentParams: t.matches[t.matches.length - 1].params,
              nextUrl: d,
              nextParams: n[n.length - 1].params,
            },
            r,
            { actionResult: w, defaultShouldRevalidate: o }
          )
        )),
        Y &&
          _.push({
            key: P,
            routeId: N.routeId,
            path: N.path,
            matches: L,
            match: U,
            controller: new AbortController(),
          });
    }),
    [p, _]
  );
}
function Lg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Gp(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Xc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function Gc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  B(l, 'No route found in manifest');
  let o = {};
  for (let i in r) {
    let a = l[i] !== void 0 && i !== 'hasErrorBoundary';
    Mn(
      !a,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !a && !tg.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, de({}, t(l), { lazy: void 0 }));
}
async function Fr(e, t, n, r, l, o, i, u) {
  u === void 0 && (u = {});
  let a,
    s,
    c,
    m = y => {
      let w,
        R = new Promise((d, f) => (w = f));
      return (
        (c = () => w()),
        t.signal.addEventListener('abort', c),
        Promise.race([
          y({ request: t, params: n.params, context: u.requestContext }),
          R,
        ])
      );
    };
  try {
    let y = n.route[e];
    if (n.route.lazy)
      if (y) {
        let w,
          R = await Promise.all([
            m(y).catch(d => {
              w = d;
            }),
            Gc(n.route, o, l),
          ]);
        if (w) throw w;
        s = R[0];
      } else if ((await Gc(n.route, o, l), (y = n.route[e]), y)) s = await m(y);
      else if (e === 'action') {
        let w = new URL(t.url),
          R = w.pathname + w.search;
        throw tt(405, { method: t.method, pathname: R, routeId: n.route.id });
      } else return { type: he.data, data: void 0 };
    else if (y) s = await m(y);
    else {
      let w = new URL(t.url),
        R = w.pathname + w.search;
      throw tt(404, { pathname: R });
    }
    B(
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
  } catch (y) {
    (a = he.error), (s = y);
  } finally {
    c && t.signal.removeEventListener('abort', c);
  }
  if (zg(s)) {
    let y = s.status;
    if (Pg.has(y)) {
      let d = s.headers.get('Location');
      if (
        (B(
          d,
          'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !Yp.test(d))
      )
        d = ua(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d);
      else if (!u.isStaticRequest) {
        let f = new URL(t.url),
          v = d.startsWith('//') ? new URL(f.protocol + d) : new URL(d),
          p = _t(v.pathname, i) != null;
        v.origin === f.origin && p && (d = v.pathname + v.search + v.hash);
      }
      if (u.isStaticRequest) throw (s.headers.set('Location', d), s);
      return {
        type: he.redirect,
        status: y,
        location: d,
        revalidate: s.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: s.headers.get('X-Remix-Reload-Document') !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: a === he.error ? he.error : he.data, response: s };
    let w,
      R = s.headers.get('Content-Type');
    return (
      R && /\bapplication\/json\b/.test(R) ?
        (w = await s.json())
      : (w = await s.text()),
      a === he.error ?
        { type: a, error: new fs(y, s.statusText, w), headers: s.headers }
      : { type: he.data, data: w, statusCode: s.status, headers: s.headers }
    );
  }
  if (a === he.error) return { type: a, error: s };
  if (Og(s)) {
    var h, E;
    return {
      type: he.deferred,
      deferredData: s,
      statusCode: (h = s.init) == null ? void 0 : h.status,
      headers:
        ((E = s.init) == null ? void 0 : E.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: he.data, data: s };
}
function Ir(e, t, n, r) {
  let l = e.createURL(Jp(t)).toString(),
    o = { signal: n };
  if (r && pt(r.formMethod)) {
    let { formMethod: i, formEncType: u } = r;
    (o.method = i.toUpperCase()),
      u === 'application/json' ?
        ((o.headers = new Headers({ 'Content-Type': u })),
        (o.body = JSON.stringify(r.json)))
      : u === 'text/plain' ? (o.body = r.text)
      : u === 'application/x-www-form-urlencoded' && r.formData ?
        (o.body = aa(r.formData))
      : (o.body = r.formData);
  }
  return new Request(l, o);
}
function aa(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function Jc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Dg(e, t, n, r, l) {
  let o = {},
    i = null,
    u,
    a = !1,
    s = {};
  return (
    n.forEach((c, m) => {
      let h = t[m].route.id;
      if (
        (B(!ur(c), 'Cannot handle redirect results in processLoaderData'),
        el(c))
      ) {
        let E = qr(e, h),
          y = c.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[E.route.id] == null && (i[E.route.id] = y),
          (o[h] = void 0),
          a || ((a = !0), (u = Kp(c.error) ? c.error.status : 500)),
          c.headers && (s[h] = c.headers);
      } else
        Pn(c) ?
          (l.set(h, c.deferredData), (o[h] = c.deferredData.data))
        : (o[h] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !a &&
            (u = c.statusCode),
          c.headers && (s[h] = c.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: u || 200, loaderHeaders: s }
  );
}
function Zc(e, t, n, r, l, o, i, u) {
  let { loaderData: a, errors: s } = Dg(t, n, r, l, u);
  for (let c = 0; c < o.length; c++) {
    let { key: m, match: h, controller: E } = o[c];
    B(
      i !== void 0 && i[c] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let y = i[c];
    if (!(E && E.signal.aborted))
      if (el(y)) {
        let w = qr(e.matches, h == null ? void 0 : h.route.id);
        (s && s[w.route.id]) || (s = de({}, s, { [w.route.id]: y.error })),
          e.fetchers.delete(m);
      } else if (ur(y)) B(!1, 'Unhandled fetcher revalidation redirect');
      else if (Pn(y)) B(!1, 'Unhandled fetcher deferred data');
      else {
        let w = Yt(y.data);
        e.fetchers.set(m, w);
      }
  }
  return { loaderData: a, errors: s };
}
function qc(e, t, n, r) {
  let l = de({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i) ?
        t[i] !== void 0 && (l[i] = t[i])
      : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function qr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e])
      .reverse()
      .find(r => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function ef(e) {
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
function tt(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = 'Unknown Server Error',
    u = 'Unknown @remix-run/router error';
  return (
    e === 400 ?
      ((i = 'Bad Request'),
      l && n && r ?
        (u =
          'You made a ' +
          l +
          ' request to "' +
          n +
          '" but ' +
          ('did not provide a `loader` for route "' + r + '", ') +
          'so there is no way to handle the request.')
      : o === 'defer-action' ? (u = 'defer() is not supported in actions')
      : o === 'invalid-body' && (u = 'Unable to encode submission body'))
    : e === 403 ?
      ((i = 'Forbidden'),
      (u = 'Route "' + r + '" does not match URL "' + n + '"'))
    : e === 404 ? ((i = 'Not Found'), (u = 'No route matches URL "' + n + '"'))
    : e === 405 &&
      ((i = 'Method Not Allowed'),
      l && n && r ?
        (u =
          'You made a ' +
          l.toUpperCase() +
          ' request to "' +
          n +
          '" but ' +
          ('did not provide an `action` for route "' + r + '", ') +
          'so there is no way to handle the request.')
      : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new fs(e || 500, i, new Error(u), !0)
  );
}
function tf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (ur(n)) return { result: n, idx: t };
  }
}
function Jp(e) {
  let t = typeof e == 'string' ? Vt(e) : e;
  return pn(de({}, t, { hash: '' }));
}
function Mg(e, t) {
  return (
    e.pathname !== t.pathname || e.search !== t.search ? !1
    : e.hash === '' ? t.hash !== ''
    : e.hash === t.hash ? !0
    : t.hash !== ''
  );
}
function Pn(e) {
  return e.type === he.deferred;
}
function el(e) {
  return e.type === he.error;
}
function ur(e) {
  return (e && e.type) === he.redirect;
}
function Og(e) {
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
function zg(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function Fg(e) {
  return kg.has(e.toLowerCase());
}
function pt(e) {
  return Eg.has(e.toLowerCase());
}
async function nf(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i],
      a = t[i];
    if (!a) continue;
    let s = e.find(m => m.route.id === a.route.id),
      c = s != null && !Gp(s, a) && (o && o[a.route.id]) !== void 0;
    if (Pn(u) && (l || c)) {
      let m = r[i];
      B(m, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Zp(u, m, l).then(h => {
          h && (n[i] = h || n[i]);
        });
    }
  }
}
async function Zp(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: he.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: he.error, error: l };
      }
    return { type: he.data, data: e.deferredData.data };
  }
}
function ds(e) {
  return new URLSearchParams(e).getAll('index').some(t => t === '');
}
function sa(e, t) {
  let n = typeof t == 'string' ? Vt(t).search : t.search;
  if (e[e.length - 1].route.index && ds(n || '')) return e[e.length - 1];
  let r = Hp(e);
  return r[r.length - 1];
}
function rf(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
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
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function au(e, t) {
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
function Ig(e, t) {
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
function Ur(e, t) {
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
function Ug(e, t) {
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
function Yt(e) {
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
function $g(e, t) {
  try {
    let n = e.sessionStorage.getItem(Xp);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function Ag(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Xp, JSON.stringify(n));
    } catch (r) {
      Mn(
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
 */ function Mo() {
  return (
    (Mo =
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
    Mo.apply(this, arguments)
  );
}
const Rl = g.createContext(null),
  Ci = g.createContext(null),
  Wt = g.createContext(null),
  ki = g.createContext(null),
  wt = g.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  qp = g.createContext(null);
function Bg(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  xr() || B(!1);
  let { basename: r, navigator: l } = g.useContext(Wt),
    { hash: o, pathname: i, search: u } = _l(e, { relative: n }),
    a = i;
  return (
    r !== '/' && (a = i === '/' ? r : Rt([r, i])),
    l.createHref({ pathname: a, search: u, hash: o })
  );
}
function xr() {
  return g.useContext(ki) != null;
}
function In() {
  return xr() || B(!1), g.useContext(ki).location;
}
function eh(e) {
  g.useContext(Wt).static || g.useLayoutEffect(e);
}
function Er() {
  let { isDataRoute: e } = g.useContext(wt);
  return e ? t0() : Vg();
}
function Vg() {
  xr() || B(!1);
  let e = g.useContext(Rl),
    { basename: t, navigator: n } = g.useContext(Wt),
    { matches: r } = g.useContext(wt),
    { pathname: l } = In(),
    o = JSON.stringify(xi(r)),
    i = g.useRef(!1);
  return (
    eh(() => {
      i.current = !0;
    }),
    g.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof a == 'number') {
          n.go(a);
          return;
        }
        let c = Ei(a, JSON.parse(o), l, s.relative === 'path');
        e == null &&
          t !== '/' &&
          (c.pathname = c.pathname === '/' ? t : Rt([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s);
      },
      [t, n, o, l, e]
    )
  );
}
const Wg = g.createContext(null);
function Hg(e) {
  let t = g.useContext(wt).outlet;
  return t && g.createElement(Wg.Provider, { value: e }, t);
}
function _l(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = g.useContext(wt),
    { pathname: l } = In(),
    o = JSON.stringify(xi(r));
  return g.useMemo(() => Ei(e, JSON.parse(o), l, n === 'path'), [e, o, l, n]);
}
function Kg(e, t, n) {
  xr() || B(!1);
  let { navigator: r } = g.useContext(Wt),
    { matches: l } = g.useContext(wt),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : '/';
  o && o.route;
  let a = In(),
    s;
  if (t) {
    var c;
    let w = typeof t == 'string' ? Vt(t) : t;
    u === '/' || ((c = w.pathname) != null && c.startsWith(u)) || B(!1),
      (s = w);
  } else s = a;
  let m = s.pathname || '/',
    h = u === '/' ? m : m.slice(u.length) || '/',
    E = er(e, { pathname: h }),
    y = Gg(
      E &&
        E.map(w =>
          Object.assign({}, w, {
            params: Object.assign({}, i, w.params),
            pathname: Rt([
              u,
              r.encodeLocation ?
                r.encodeLocation(w.pathname).pathname
              : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === '/' ?
                u
              : Rt([
                  u,
                  r.encodeLocation ?
                    r.encodeLocation(w.pathnameBase).pathname
                  : w.pathnameBase,
                ]),
          })
        ),
      l,
      n
    );
  return t && y ?
      g.createElement(
        ki.Provider,
        {
          value: {
            location: Mo(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              s
            ),
            navigationType: pe.Pop,
          },
        },
        y
      )
    : y;
}
function Qg() {
  let e = e0(),
    t =
      Kp(e) ? e.status + ' ' + e.statusText
      : e instanceof Error ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    o = null;
  return g.createElement(
    g.Fragment,
    null,
    g.createElement('h2', null, 'Unexpected Application Error!'),
    g.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? g.createElement('pre', { style: l }, n) : null,
    o
  );
}
const bg = g.createElement(Qg, null);
class Yg extends g.Component {
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
        g.createElement(
          wt.Provider,
          { value: this.props.routeContext },
          g.createElement(qp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Xg(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = g.useContext(Rl);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(wt.Provider, { value: t }, r)
  );
}
function Gg(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex(
      a => a.route.id && (i == null ? void 0 : i[a.route.id])
    );
    u >= 0 || B(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  return o.reduceRight((u, a, s) => {
    let c =
        a.route.id ?
          i == null ?
            void 0
          : i[a.route.id]
        : null,
      m = null;
    n && (m = a.route.errorElement || bg);
    let h = t.concat(o.slice(0, s + 1)),
      E = () => {
        let y;
        return (
          c ? (y = m)
          : a.route.Component ? (y = g.createElement(a.route.Component, null))
          : a.route.element ? (y = a.route.element)
          : (y = u),
          g.createElement(Xg, {
            match: a,
            routeContext: { outlet: u, matches: h, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0) ?
        g.createElement(Yg, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: c,
          children: E(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : E();
  }, null);
}
var th = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(th || {}),
  On = (function (e) {
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
  })(On || {});
function Jg(e) {
  let t = g.useContext(Rl);
  return t || B(!1), t;
}
function nh(e) {
  let t = g.useContext(Ci);
  return t || B(!1), t;
}
function Zg(e) {
  let t = g.useContext(wt);
  return t || B(!1), t;
}
function Pi(e) {
  let t = Zg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || B(!1), n.route.id;
}
function qg() {
  return Pi(On.UseRouteId);
}
function rh() {
  let e = nh(On.UseLoaderData),
    t = Pi(On.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      'You cannot `useLoaderData` in an errorElement (routeId: ' + t + ')'
    );
    return;
  }
  return e.loaderData[t];
}
function e0() {
  var e;
  let t = g.useContext(qp),
    n = nh(On.UseRouteError),
    r = Pi(On.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function t0() {
  let { router: e } = Jg(th.UseNavigateStable),
    t = Pi(On.UseNavigateStable),
    n = g.useRef(!1);
  return (
    eh(() => {
      n.current = !0;
    }),
    g.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == 'number' ?
              e.navigate(l)
            : e.navigate(l, Mo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function lh(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  xr() || B(!1);
  let { matches: o } = g.useContext(wt),
    { pathname: i } = In(),
    u = Er(),
    a = Ei(t, xi(o), i, l === 'path'),
    s = JSON.stringify(a);
  return (
    g.useEffect(
      () => u(JSON.parse(s), { replace: n, state: r, relative: l }),
      [u, s, l, n, r]
    ),
    null
  );
}
function n0(e) {
  return Hg(e.context);
}
function r0(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = pe.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  xr() && B(!1);
  let u = t.replace(/^\/*/, '/'),
    a = g.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == 'string' && (r = Vt(r));
  let {
      pathname: s = '/',
      search: c = '',
      hash: m = '',
      state: h = null,
      key: E = 'default',
    } = r,
    y = g.useMemo(() => {
      let w = _t(s, u);
      return w == null ? null : (
          {
            location: { pathname: w, search: c, hash: m, state: h, key: E },
            navigationType: l,
          }
        );
    }, [u, s, c, m, h, E, l]);
  return y == null ? null : (
      g.createElement(
        Wt.Provider,
        { value: a },
        g.createElement(ki.Provider, { children: n, value: y })
      )
    );
}
new Promise(() => {});
function l0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: g.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: g.createElement(e.ErrorBoundary),
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
 */ function yt() {
  return (
    (yt =
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
    yt.apply(this, arguments)
  );
}
function ps(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const uo = 'get',
  su = 'application/x-www-form-urlencoded';
function Ri(e) {
  return e != null && typeof e.tagName == 'string';
}
function o0(e) {
  return Ri(e) && e.tagName.toLowerCase() === 'button';
}
function i0(e) {
  return Ri(e) && e.tagName.toLowerCase() === 'form';
}
function u0(e) {
  return Ri(e) && e.tagName.toLowerCase() === 'input';
}
function a0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function s0(e, t) {
  return e.button === 0 && (!t || t === '_self') && !a0(e);
}
let Yl = null;
function c0() {
  if (Yl === null)
    try {
      new FormData(document.createElement('form'), 0), (Yl = !1);
    } catch {
      Yl = !0;
    }
  return Yl;
}
const f0 = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function cu(e) {
  return e != null && !f0.has(e) ? null : e;
}
function d0(e, t) {
  let n, r, l, o, i;
  if (i0(e)) {
    let u = e.getAttribute('action');
    (r = u ? _t(u, t) : null),
      (n = e.getAttribute('method') || uo),
      (l = cu(e.getAttribute('enctype')) || su),
      (o = new FormData(e));
  } else if (o0(e) || (u0(e) && (e.type === 'submit' || e.type === 'image'))) {
    let u = e.form;
    if (u == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let a = e.getAttribute('formaction') || u.getAttribute('action');
    if (
      ((r = a ? _t(a, t) : null),
      (n = e.getAttribute('formmethod') || u.getAttribute('method') || uo),
      (l =
        cu(e.getAttribute('formenctype')) ||
        cu(u.getAttribute('enctype')) ||
        su),
      (o = new FormData(u, e)),
      !c0())
    ) {
      let { name: s, type: c, value: m } = e;
      if (c === 'image') {
        let h = s ? s + '.' : '';
        o.append(h + 'x', '0'), o.append(h + 'y', '0');
      } else s && o.append(s, m);
    }
  } else {
    if (Ri(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = uo), (r = null), (l = su), (i = e);
  }
  return (
    o && l === 'text/plain' && ((i = o), (o = void 0)),
    { action: r, method: n.toLowerCase(), encType: l, formData: o, body: i }
  );
}
const p0 = [
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
  h0 = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'unstable_viewTransition',
    'children',
  ],
  m0 = [
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
function v0(e, t) {
  return jg({
    basename: t == null ? void 0 : t.basename,
    future: yt({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: Zy({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || y0(),
    routes: e,
    mapRouteProperties: l0,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function y0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = yt({}, t, { errors: g0(t.errors) })), t;
}
function g0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === 'RouteErrorResponse')
      n[r] = new fs(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === 'Error') {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == 'function')
          try {
            let i = new o(l.message);
            (i.stack = ''), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ''), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const oh = g.createContext({ isTransitioning: !1 }),
  ih = g.createContext(new Map()),
  w0 = 'startTransition',
  lf = Jh[w0],
  S0 = 'flushSync',
  of = uy[S0];
function x0(e) {
  lf ? lf(e) : e();
}
function $r(e) {
  of ? of(e) : e();
}
class E0 {
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
function C0(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = g.useState(n.state),
    [i, u] = g.useState(),
    [a, s] = g.useState({ isTransitioning: !1 }),
    [c, m] = g.useState(),
    [h, E] = g.useState(),
    [y, w] = g.useState(),
    R = g.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    f = g.useCallback(
      P => {
        d ? x0(P) : P();
      },
      [d]
    ),
    v = g.useCallback(
      (P, L) => {
        let {
          deletedFetchers: I,
          unstable_flushSync: U,
          unstable_viewTransitionOpts: Y,
        } = L;
        I.forEach(Se => R.current.delete(Se)),
          P.fetchers.forEach((Se, jt) => {
            Se.data !== void 0 && R.current.set(jt, Se.data);
          });
        let ke =
          n.window == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!Y || ke) {
          U ? $r(() => o(P)) : f(() => o(P));
          return;
        }
        if (U) {
          $r(() => {
            h && (c && c.resolve(), h.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Y.currentLocation,
                nextLocation: Y.nextLocation,
              });
          });
          let Se = n.window.document.startViewTransition(() => {
            $r(() => o(P));
          });
          Se.finished.finally(() => {
            $r(() => {
              m(void 0), E(void 0), u(void 0), s({ isTransitioning: !1 });
            });
          }),
            $r(() => E(Se));
          return;
        }
        h ?
          (c && c.resolve(),
          h.skipTransition(),
          w({
            state: P,
            currentLocation: Y.currentLocation,
            nextLocation: Y.nextLocation,
          }))
        : (u(P),
          s({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: Y.currentLocation,
            nextLocation: Y.nextLocation,
          }));
      },
      [n.window, h, c, R, f]
    );
  g.useLayoutEffect(() => n.subscribe(v), [n, v]),
    g.useEffect(() => {
      a.isTransitioning && !a.flushSync && m(new E0());
    }, [a]),
    g.useEffect(() => {
      if (c && i && n.window) {
        let P = i,
          L = c.promise,
          I = n.window.document.startViewTransition(async () => {
            f(() => o(P)), await L;
          });
        I.finished.finally(() => {
          m(void 0), E(void 0), u(void 0), s({ isTransitioning: !1 });
        }),
          E(I);
      }
    }, [f, i, c, n.window]),
    g.useEffect(() => {
      c && i && l.location.key === i.location.key && c.resolve();
    }, [c, h, l.location, i]),
    g.useEffect(() => {
      !a.isTransitioning &&
        y &&
        (u(y.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        w(void 0));
    }, [a.isTransitioning, y]);
  let p = g.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: P => n.navigate(P),
        push: (P, L, I) =>
          n.navigate(P, {
            state: L,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset,
          }),
        replace: (P, L, I) =>
          n.navigate(P, {
            replace: !0,
            state: L,
            preventScrollReset: I == null ? void 0 : I.preventScrollReset,
          }),
      }),
      [n]
    ),
    _ = n.basename || '/',
    N = g.useMemo(
      () => ({ router: n, navigator: p, static: !1, basename: _ }),
      [n, p, _]
    );
  return g.createElement(
    g.Fragment,
    null,
    g.createElement(
      Rl.Provider,
      { value: N },
      g.createElement(
        Ci.Provider,
        { value: l },
        g.createElement(
          ih.Provider,
          { value: R.current },
          g.createElement(
            oh.Provider,
            { value: a },
            g.createElement(
              r0,
              {
                basename: _,
                location: l.location,
                navigationType: l.historyAction,
                navigator: p,
              },
              l.initialized ?
                g.createElement(k0, { routes: n.routes, state: l })
              : t
            )
          )
        )
      )
    ),
    null
  );
}
function k0(e) {
  let { routes: t, state: n } = e;
  return Kg(t, void 0, n);
}
const P0 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  R0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  uh = g.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: a,
        to: s,
        preventScrollReset: c,
        unstable_viewTransition: m,
      } = t,
      h = ps(t, p0),
      { basename: E } = g.useContext(Wt),
      y,
      w = !1;
    if (typeof s == 'string' && R0.test(s) && ((y = s), P0))
      try {
        let v = new URL(window.location.href),
          p = s.startsWith('//') ? new URL(v.protocol + s) : new URL(s),
          _ = _t(p.pathname, E);
        p.origin === v.origin && _ != null ?
          (s = _ + p.search + p.hash)
        : (w = !0);
      } catch {}
    let R = Bg(s, { relative: l }),
      d = T0(s, {
        replace: i,
        state: u,
        target: a,
        preventScrollReset: c,
        relative: l,
        unstable_viewTransition: m,
      });
    function f(v) {
      r && r(v), v.defaultPrevented || d(v);
    }
    return g.createElement(
      'a',
      yt({}, h, { href: y || R, onClick: w || o ? r : f, ref: n, target: a })
    );
  }),
  _0 = g.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: l = !1,
        className: o = '',
        end: i = !1,
        style: u,
        to: a,
        unstable_viewTransition: s,
        children: c,
      } = t,
      m = ps(t, h0),
      h = _l(a, { relative: m.relative }),
      E = In(),
      y = g.useContext(Ci),
      { navigator: w } = g.useContext(Wt),
      R = y != null && O0(h) && s === !0,
      d = w.encodeLocation ? w.encodeLocation(h).pathname : h.pathname,
      f = E.pathname,
      v =
        y && y.navigation && y.navigation.location ?
          y.navigation.location.pathname
        : null;
    l ||
      ((f = f.toLowerCase()),
      (v = v ? v.toLowerCase() : null),
      (d = d.toLowerCase()));
    const p = d !== '/' && d.endsWith('/') ? d.length - 1 : d.length;
    let _ = f === d || (!i && f.startsWith(d) && f.charAt(p) === '/'),
      N =
        v != null &&
        (v === d || (!i && v.startsWith(d) && v.charAt(d.length) === '/')),
      P = { isActive: _, isPending: N, isTransitioning: R },
      L = _ ? r : void 0,
      I;
    typeof o == 'function' ?
      (I = o(P))
    : (I = [
        o,
        _ ? 'active' : null,
        N ? 'pending' : null,
        R ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
    let U = typeof u == 'function' ? u(P) : u;
    return g.createElement(
      uh,
      yt({}, m, {
        'aria-current': L,
        className: I,
        ref: n,
        style: U,
        to: a,
        unstable_viewTransition: s,
      }),
      typeof c == 'function' ? c(P) : c
    );
  }),
  j0 = g.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: l,
        replace: o,
        state: i,
        method: u = uo,
        action: a,
        onSubmit: s,
        relative: c,
        preventScrollReset: m,
        unstable_viewTransition: h,
      } = e,
      E = ps(e, m0),
      y = sh(),
      w = M0(a, { relative: c }),
      R = u.toLowerCase() === 'get' ? 'get' : 'post',
      d = f => {
        if ((s && s(f), f.defaultPrevented)) return;
        f.preventDefault();
        let v = f.nativeEvent.submitter,
          p = (v == null ? void 0 : v.getAttribute('formmethod')) || u;
        y(v || f.currentTarget, {
          fetcherKey: n,
          method: p,
          navigate: r,
          replace: o,
          state: i,
          relative: c,
          preventScrollReset: m,
          unstable_viewTransition: h,
        });
      };
    return g.createElement(
      'form',
      yt({ ref: t, method: R, action: w, onSubmit: l ? s : d }, E)
    );
  });
var wl;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(wl || (wl = {}));
var ca;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(ca || (ca = {}));
function hs(e) {
  let t = g.useContext(Rl);
  return t || B(!1), t;
}
function N0(e) {
  let t = g.useContext(Ci);
  return t || B(!1), t;
}
function T0(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    a = Er(),
    s = In(),
    c = _l(e, { relative: i });
  return g.useCallback(
    m => {
      if (s0(m, n)) {
        m.preventDefault();
        let h = r !== void 0 ? r : pn(s) === pn(c);
        a(e, {
          replace: h,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: u,
        });
      }
    },
    [s, a, c, r, l, n, e, o, i, u]
  );
}
function L0() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
    );
}
let D0 = 0,
  ah = () => '__' + String(++D0) + '__';
function sh() {
  let { router: e } = hs(wl.UseSubmit),
    { basename: t } = g.useContext(Wt),
    n = qg();
  return g.useCallback(
    function (r, l) {
      l === void 0 && (l = {}), L0();
      let { action: o, method: i, encType: u, formData: a, body: s } = d0(r, t);
      if (l.navigate === !1) {
        let c = l.fetcherKey || ah();
        e.fetch(c, n, l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: a,
          body: s,
          formMethod: l.method || i,
          formEncType: l.encType || u,
          unstable_flushSync: l.unstable_flushSync,
        });
      } else
        e.navigate(l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: a,
          body: s,
          formMethod: l.method || i,
          formEncType: l.encType || u,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          unstable_flushSync: l.unstable_flushSync,
          unstable_viewTransition: l.unstable_viewTransition,
        });
    },
    [e, t, n]
  );
}
function M0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = g.useContext(Wt),
    l = g.useContext(wt);
  l || B(!1);
  let [o] = l.matches.slice(-1),
    i = yt({}, _l(e || '.', { relative: n })),
    u = In();
  if (e == null) {
    i.search = u.search;
    let a = new URLSearchParams(i.search);
    a.has('index') &&
      a.get('index') === '' &&
      (a.delete('index'), (i.search = a.toString() ? '?' + a.toString() : ''));
  }
  return (
    (!e || e === '.') &&
      o.route.index &&
      (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (i.pathname = i.pathname === '/' ? r : Rt([r, i.pathname])),
    pn(i)
  );
}
function ms(e) {
  var t;
  let { key: n } = e === void 0 ? {} : e,
    { router: r } = hs(wl.UseFetcher),
    l = N0(ca.UseFetcher),
    o = g.useContext(ih),
    i = g.useContext(wt),
    u = (t = i.matches[i.matches.length - 1]) == null ? void 0 : t.route.id;
  o || B(!1), i || B(!1), u == null && B(!1);
  let [a, s] = g.useState(n || '');
  n && n !== a ? s(n) : a || s(ah()),
    g.useEffect(
      () => (
        r.getFetcher(a),
        () => {
          r.deleteFetcher(a);
        }
      ),
      [r, a]
    );
  let c = g.useCallback(
      (d, f) => {
        u || B(!1), r.fetch(a, u, d, f);
      },
      [a, u, r]
    ),
    m = sh(),
    h = g.useCallback(
      (d, f) => {
        m(d, yt({}, f, { navigate: !1, fetcherKey: a }));
      },
      [a, m]
    ),
    E = g.useMemo(
      () =>
        g.forwardRef((f, v) =>
          g.createElement(
            j0,
            yt({}, f, { navigate: !1, fetcherKey: a, ref: v })
          )
        ),
      [a]
    ),
    y = l.fetchers.get(a) || bp,
    w = o.get(a);
  return g.useMemo(
    () => yt({ Form: E, submit: h, load: c }, y, { data: w }),
    [E, h, c, y, w]
  );
}
function O0(e, t) {
  t === void 0 && (t = {});
  let n = g.useContext(oh);
  n == null && B(!1);
  let { basename: r } = hs(wl.useViewTransitionState),
    l = _l(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = _t(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = _t(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ia(l.pathname, i) != null || ia(l.pathname, o) != null;
}
function Sl(e) {
  '@babel/helpers - typeof';
  return (
    (Sl =
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
    Sl(e)
  );
}
function z0(e, t) {
  if (Sl(e) !== 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (Sl(r) !== 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function F0(e) {
  var t = z0(e, 'string');
  return Sl(t) === 'symbol' ? t : String(t);
}
function I0(e, t, n) {
  return (
    (t = F0(t)),
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
function uf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function af(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ?
      uf(Object(n), !0).forEach(function (r) {
        I0(e, r, n[r]);
      })
    : Object.getOwnPropertyDescriptors ?
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
    : uf(Object(n)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
      });
  }
  return e;
}
function Le(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var sf = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  fu = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  Oo = {
    INIT: '@@redux/INIT' + fu(),
    REPLACE: '@@redux/REPLACE' + fu(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + fu();
    },
  };
function U0(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function ch(e, t, n) {
  var r;
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Le(0));
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(Le(1));
    return n(ch)(e, t);
  }
  if (typeof e != 'function') throw new Error(Le(2));
  var l = e,
    o = t,
    i = [],
    u = i,
    a = !1;
  function s() {
    u === i && (u = i.slice());
  }
  function c() {
    if (a) throw new Error(Le(3));
    return o;
  }
  function m(w) {
    if (typeof w != 'function') throw new Error(Le(4));
    if (a) throw new Error(Le(5));
    var R = !0;
    return (
      s(),
      u.push(w),
      function () {
        if (R) {
          if (a) throw new Error(Le(6));
          (R = !1), s();
          var f = u.indexOf(w);
          u.splice(f, 1), (i = null);
        }
      }
    );
  }
  function h(w) {
    if (!U0(w)) throw new Error(Le(7));
    if (typeof w.type > 'u') throw new Error(Le(8));
    if (a) throw new Error(Le(9));
    try {
      (a = !0), (o = l(o, w));
    } finally {
      a = !1;
    }
    for (var R = (i = u), d = 0; d < R.length; d++) {
      var f = R[d];
      f();
    }
    return w;
  }
  function E(w) {
    if (typeof w != 'function') throw new Error(Le(10));
    (l = w), h({ type: Oo.REPLACE });
  }
  function y() {
    var w,
      R = m;
    return (
      (w = {
        subscribe: function (f) {
          if (typeof f != 'object' || f === null) throw new Error(Le(11));
          function v() {
            f.next && f.next(c());
          }
          v();
          var p = R(v);
          return { unsubscribe: p };
        },
      }),
      (w[sf] = function () {
        return this;
      }),
      w
    );
  }
  return (
    h({ type: Oo.INIT }),
    (r = { dispatch: h, subscribe: m, getState: c, replaceReducer: E }),
    (r[sf] = y),
    r
  );
}
var $0 = ch;
function A0(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Oo.INIT });
    if (typeof r > 'u') throw new Error(Le(12));
    if (typeof n(void 0, { type: Oo.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Le(13));
  });
}
function B0(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var l = t[r];
    typeof e[l] == 'function' && (n[l] = e[l]);
  }
  var o = Object.keys(n),
    i;
  try {
    A0(n);
  } catch (u) {
    i = u;
  }
  return function (a, s) {
    if ((a === void 0 && (a = {}), i)) throw i;
    for (var c = !1, m = {}, h = 0; h < o.length; h++) {
      var E = o[h],
        y = n[E],
        w = a[E],
        R = y(w, s);
      if (typeof R > 'u') throw (s && s.type, new Error(Le(14)));
      (m[E] = R), (c = c || R !== w);
    }
    return (c = c || o.length !== Object.keys(a).length), c ? m : a;
  };
}
function V0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return (
    t.length === 0 ?
      function (r) {
        return r;
      }
    : t.length === 1 ? t[0]
    : t.reduce(function (r, l) {
        return function () {
          return r(l.apply(void 0, arguments));
        };
      })
  );
}
function W0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var l = r.apply(void 0, arguments),
        o = function () {
          throw new Error(Le(15));
        },
        i = {
          getState: l.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        u = t.map(function (a) {
          return a(i);
        });
      return (
        (o = V0.apply(void 0, u)(l.dispatch)),
        af(af({}, l), {}, { dispatch: o })
      );
    };
  };
}
function fh(e) {
  var t = function (r) {
    var l = r.dispatch,
      o = r.getState;
    return function (i) {
      return function (u) {
        return typeof u == 'function' ? u(l, o, e) : i(u);
      };
    };
  };
  return t;
}
var dh = fh();
dh.withExtraArgument = fh;
const H0 = dh,
  ph = 'session/setUser',
  hh = 'session/removeUser',
  vs = e => ({ type: ph, payload: e }),
  K0 = () => ({ type: hh }),
  Q0 = () => async e => {
    const t = await fetch('/api/auth/');
    if (t.ok) {
      const n = await t.json();
      if (n.errors) return;
      e(vs(n));
    }
  },
  mh = e => async t => {
    const n = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(e),
    });
    if (n.ok) {
      const r = await n.json();
      t(vs(r));
    } else
      return n.status < 500 ?
          await n.json()
        : { server: 'Something went wrong. Please try again' };
  },
  vh = e => async t => {
    const n = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(e),
    });
    if (n.ok) {
      const r = await n.json();
      t(vs(r));
    } else
      return n.status < 500 ?
          await n.json()
        : { server: 'Something went wrong. Please try again' };
  },
  b0 = () => async e => {
    await fetch('/api/auth/logout'), e(K0());
  },
  Y0 = { user: null };
function X0(e = Y0, t) {
  switch (t.type) {
    case ph:
      return { ...e, user: t.payload };
    case hh:
      return { ...e, user: null };
    default:
      return e;
  }
}
const G0 = B0({ session: X0 });
let yh;
yh = W0(H0);
const J0 = e => $0(G0, e, yh);
function Z0() {
  const e = Er(),
    t = Sr(),
    n = wr(c => c.session.user),
    [r, l] = g.useState(''),
    [o, i] = g.useState(''),
    [u, a] = g.useState({});
  if (n) return x.jsx(lh, { to: '/', replace: !0 });
  const s = async c => {
    c.preventDefault();
    const m = await t(mh({ email: r, password: o }));
    m ? a(m) : e('/');
  };
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx('h1', { children: 'Log In' }),
      u.length > 0 && u.map(c => x.jsx('p', { children: c }, c)),
      x.jsxs('form', {
        onSubmit: s,
        children: [
          x.jsxs('label', {
            children: [
              'Email',
              x.jsx('input', {
                type: 'text',
                value: r,
                onChange: c => l(c.target.value),
                required: !0,
              }),
            ],
          }),
          u.email && x.jsx('p', { children: u.email }),
          x.jsxs('label', {
            children: [
              'Password',
              x.jsx('input', {
                type: 'password',
                value: o,
                onChange: c => i(c.target.value),
                required: !0,
              }),
            ],
          }),
          u.password && x.jsx('p', { children: u.password }),
          x.jsx('button', { type: 'submit', children: 'Log In' }),
        ],
      }),
    ],
  });
}
function q0() {
  const e = Sr(),
    t = Er(),
    n = wr(y => y.session.user),
    [r, l] = g.useState(''),
    [o, i] = g.useState(''),
    [u, a] = g.useState(''),
    [s, c] = g.useState(''),
    [m, h] = g.useState({});
  if (n) return x.jsx(lh, { to: '/', replace: !0 });
  const E = async y => {
    if ((y.preventDefault(), u !== s))
      return h({
        confirmPassword:
          'Confirm Password field must be the same as the Password field',
      });
    const w = await e(vh({ email: r, username: o, password: u }));
    w ? h(w) : t('/');
  };
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx('h1', { children: 'Sign Up' }),
      m.server && x.jsx('p', { children: m.server }),
      x.jsxs('form', {
        onSubmit: E,
        children: [
          x.jsxs('label', {
            children: [
              'Email',
              x.jsx('input', {
                type: 'text',
                value: r,
                onChange: y => l(y.target.value),
                required: !0,
              }),
            ],
          }),
          m.email && x.jsx('p', { children: m.email }),
          x.jsxs('label', {
            children: [
              'Username',
              x.jsx('input', {
                type: 'text',
                value: o,
                onChange: y => i(y.target.value),
                required: !0,
              }),
            ],
          }),
          m.username && x.jsx('p', { children: m.username }),
          x.jsxs('label', {
            children: [
              'Password',
              x.jsx('input', {
                type: 'password',
                value: u,
                onChange: y => a(y.target.value),
                required: !0,
              }),
            ],
          }),
          m.password && x.jsx('p', { children: m.password }),
          x.jsxs('label', {
            children: [
              'Confirm Password',
              x.jsx('input', {
                type: 'password',
                value: s,
                onChange: y => c(y.target.value),
                required: !0,
              }),
            ],
          }),
          m.confirmPassword && x.jsx('p', { children: m.confirmPassword }),
          x.jsx('button', { type: 'submit', children: 'Sign Up' }),
        ],
      }),
    ],
  });
}
const ys = g.createContext();
function e1({ children: e }) {
  const t = g.useRef(),
    [n, r] = g.useState(null),
    [l, o] = g.useState(null),
    u = {
      modalRef: t,
      modalContent: n,
      setModalContent: r,
      setOnModalClose: o,
      closeModal: () => {
        r(null), typeof l == 'function' && (o(null), l());
      },
    };
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx(ys.Provider, { value: u, children: e }),
      x.jsx('div', { ref: t }),
    ],
  });
}
function t1() {
  const { modalRef: e, modalContent: t, closeModal: n } = g.useContext(ys);
  return !e || !e.current || !t ?
      null
    : jp.createPortal(
        x.jsxs('div', {
          id: 'modal',
          children: [
            x.jsx('div', { id: 'modal-background', onClick: n }),
            x.jsx('div', { id: 'modal-content', children: t }),
          ],
        }),
        e.current
      );
}
const gs = () => g.useContext(ys);
var gh = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  cf = zt.createContext && zt.createContext(gh),
  n1 = ['attr', 'size', 'title'];
function r1(e, t) {
  if (e == null) return {};
  var n = l1(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (l = 0; l < o.length; l++)
      (r = o[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function l1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function zo() {
  return (
    (zo =
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
    zo.apply(this, arguments)
  );
}
function ff(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Fo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ?
      ff(Object(n), !0).forEach(function (r) {
        o1(e, r, n[r]);
      })
    : Object.getOwnPropertyDescriptors ?
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
    : ff(Object(n)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
      });
  }
  return e;
}
function o1(e, t, n) {
  return (
    (t = i1(t)),
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
function i1(e) {
  var t = u1(e, 'string');
  return typeof t == 'symbol' ? t : String(t);
}
function u1(e, t) {
  if (typeof e != 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function wh(e) {
  return (
    e &&
    e.map((t, n) =>
      zt.createElement(t.tag, Fo({ key: n }, t.attr), wh(t.child))
    )
  );
}
function ws(e) {
  return t =>
    zt.createElement(a1, zo({ attr: Fo({}, e.attr) }, t), wh(e.child));
}
function a1(e) {
  var t = n => {
    var { attr: r, size: l, title: o } = e,
      i = r1(e, n1),
      u = l || n.size || '1em',
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + ' ' : '') + e.className),
      zt.createElement(
        'svg',
        zo(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          i,
          {
            className: a,
            style: Fo(Fo({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        o && zt.createElement('title', null, o),
        e.children
      )
    );
  };
  return cf !== void 0 ? zt.createElement(cf.Consumer, null, n => t(n)) : t(gh);
}
function s1(e) {
  return ws({
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
function c1(e) {
  return ws({
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
function f1(e) {
  return ws({
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
function df({
  modalComponent: e,
  itemText: t,
  onItemClick: n,
  onModalClose: r,
}) {
  const { setModalContent: l, setOnModalClose: o } = gs(),
    i = () => {
      r && o(r), l(e), typeof n == 'function' && n();
    };
  return x.jsx('li', { className: 'cursor-pointer', onClick: i, children: t });
}
function d1() {
  const e = Sr(),
    [t, n] = g.useState(''),
    [r, l] = g.useState(''),
    [o, i] = g.useState({}),
    { closeModal: u } = gs(),
    a = async s => {
      s.preventDefault();
      const c = await e(mh({ email: t, password: r }));
      c ? i(c) : u();
    };
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx('h1', { children: 'Log In' }),
      x.jsxs('form', {
        onSubmit: a,
        children: [
          x.jsxs('label', {
            children: [
              'Email',
              x.jsx('input', {
                type: 'text',
                value: t,
                onChange: s => n(s.target.value),
                required: !0,
              }),
            ],
          }),
          o.email && x.jsx('p', { children: o.email }),
          x.jsxs('label', {
            children: [
              'Password',
              x.jsx('input', {
                type: 'password',
                value: r,
                onChange: s => l(s.target.value),
                required: !0,
              }),
            ],
          }),
          o.password && x.jsx('p', { children: o.password }),
          x.jsx('button', { type: 'submit', children: 'Log In' }),
        ],
      }),
    ],
  });
}
function p1() {
  const e = Sr(),
    [t, n] = g.useState(''),
    [r, l] = g.useState(''),
    [o, i] = g.useState(''),
    [u, a] = g.useState(''),
    [s, c] = g.useState({}),
    { closeModal: m } = gs(),
    h = async E => {
      if ((E.preventDefault(), o !== u))
        return c({
          confirmPassword:
            'Confirm Password field must be the same as the Password field',
        });
      const y = await e(vh({ email: t, username: r, password: o }));
      y ? c(y) : m();
    };
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx('h1', { children: 'Sign Up' }),
      s.server && x.jsx('p', { children: s.server }),
      x.jsxs('form', {
        onSubmit: h,
        children: [
          x.jsxs('label', {
            children: [
              'Email',
              x.jsx('input', {
                type: 'text',
                value: t,
                onChange: E => n(E.target.value),
                required: !0,
              }),
            ],
          }),
          s.email && x.jsx('p', { children: s.email }),
          x.jsxs('label', {
            children: [
              'Username',
              x.jsx('input', {
                type: 'text',
                value: r,
                onChange: E => l(E.target.value),
                required: !0,
              }),
            ],
          }),
          s.username && x.jsx('p', { children: s.username }),
          x.jsxs('label', {
            children: [
              'Password',
              x.jsx('input', {
                type: 'password',
                value: o,
                onChange: E => i(E.target.value),
                required: !0,
              }),
            ],
          }),
          s.password && x.jsx('p', { children: s.password }),
          x.jsxs('label', {
            children: [
              'Confirm Password',
              x.jsx('input', {
                type: 'password',
                value: u,
                onChange: E => a(E.target.value),
                required: !0,
              }),
            ],
          }),
          s.confirmPassword && x.jsx('p', { children: s.confirmPassword }),
          x.jsx('button', { type: 'submit', children: 'Sign Up' }),
        ],
      }),
    ],
  });
}
function h1() {
  const e = Sr(),
    [t, n] = g.useState(!1),
    r = wr(a => a.session.user),
    l = g.useRef(),
    o = a => {
      a.stopPropagation(), n(!t);
    };
  g.useEffect(() => {
    if (!t) return;
    const a = s => {
      l.current && !l.current.contains(s.target) && n(!1);
    };
    return (
      document.addEventListener('click', a),
      () => document.removeEventListener('click', a)
    );
  }, [t]);
  const i = () => n(!1),
    u = a => {
      a.preventDefault(), e(b0()), i();
    };
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx('button', {
        onClick: o,
        className:
          'flex items-center text-gray-700 transition-colors duration-200 ease-in-out hover:text-blue-600',
        'aria-label': 'User menu',
        children: x.jsx(c1, { className: 'text-2xl' }),
      }),
      t &&
        x.jsx('ul', {
          className:
            'absolute right-0 z-10 mt-2 w-fit rounded-md border border-gray-400 bg-white px-3 py-2 shadow-md',
          ref: l,
          children:
            r ?
              x.jsxs(x.Fragment, {
                children: [
                  x.jsxs('li', {
                    className: 'font-semibold text-gray-900',
                    children: ['Hello, ', r.username, '!'],
                  }),
                  x.jsx('li', {
                    className: 'text-gray-600',
                    children: r.email,
                  }),
                  x.jsx('li', {
                    className: 'mt-2',
                    children: x.jsx('button', {
                      onClick: u,
                      className:
                        'w-full text-left text-red-600 hover:text-red-800',
                      children: 'Log Out',
                    }),
                  }),
                ],
              })
            : x.jsxs(x.Fragment, {
                children: [
                  x.jsx(df, {
                    itemText: 'Log In',
                    onItemClick: i,
                    modalComponent: x.jsx(d1, {}),
                  }),
                  x.jsx(df, {
                    itemText: 'Sign Up',
                    onItemClick: i,
                    modalComponent: x.jsx(p1, {}),
                  }),
                ],
              }),
        }),
    ],
  });
}
function m1() {
  return x.jsx('nav', {
    className: 'border-b border-blue-500 bg-white px-4 py-4 shadow-md',
    children: x.jsxs('ul', {
      className: 'flex items-center justify-between',
      children: [
        x.jsxs('li', {
          className: 'flex items-center',
          children: [
            x.jsx('img', {
              src: '/brain_logo.jpg',
              className: 'h-10 w-10 rounded-full',
              alt: 'logo image',
            }),
            x.jsx(_0, {
              to: '/',
              className:
                'ml-2 font-medium text-gray-700 transition-colors duration-200 ease-in-out hover:text-blue-600',
              children: 'Home',
            }),
          ],
        }),
        x.jsx('li', {
          className: 'font-cursive text-3xl',
          children: 'Statistically Speaking',
        }),
        x.jsx('li', { children: x.jsx(h1, {}) }),
      ],
    }),
  });
}
const Sh = g.createContext(),
  Ss = () => g.useContext(Sh),
  v1 = ({ children: e }) => {
    const [t, n] = g.useState(null),
      r = l => {
        n({ message: l, id: Date.now() }),
          setTimeout(() => {
            n(null);
          }, 2e3);
      };
    return x.jsx(Sh.Provider, {
      value: { toast: t, addToast: r },
      children: e,
    });
  };
function y1() {
  const { toast: e } = Ss(),
    [t, n] = g.useState(!1);
  return (
    g.useEffect(() => {
      if (e) {
        n(!0);
        const r = setTimeout(() => {
          n(!1);
        }, 1500);
        return () => clearTimeout(r);
      }
    }, [e]),
    e ?
      x.jsx('div', {
        className: `fixed bottom-4 right-4 transition-all duration-500 ease-in-out transform ${t ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`,
        children: x.jsx('div', {
          className: 'bg-green-800 shadow-lg rounded-sm text-white px-2 py-1',
          children: e.message,
        }),
      })
    : null
  );
}
function g1() {
  const e = Sr(),
    [t, n] = g.useState(!1);
  return (
    g.useEffect(() => {
      e(Q0()).then(() => n(!0));
    }, [e]),
    x.jsx(x.Fragment, {
      children: x.jsx(v1, {
        children: x.jsxs(e1, {
          children: [
            x.jsx(m1, {}),
            t && x.jsx(n0, {}),
            x.jsx(t1, {}),
            x.jsx(y1, {}),
          ],
        }),
      }),
    })
  );
}
function xh({ post: e, fetcher: t, setEditingPostId: n }) {
  const [r, l] = g.useState(e.title),
    [o, i] = g.useState(e.body),
    [u, a] = g.useState({}),
    [s, c] = g.useState(!1);
  g.useEffect(() => {
    c(o === '' || r === '');
  }, [o, r]);
  const m = h => {
    a({});
    const E = {};
    if (
      (r.length ?
        r.length < 5 ?
          (E.title = 'Title must be at least 5 characters')
        : r.length > 50 && (E.title = 'Title cannot be more than 50 characters')
      : (E.title = 'Title is required'),
      o.length ?
        o.length < 10 ?
          (E.body = 'Post must be at least 10 characters')
        : o.length > 500 && (E.body = 'Post cannot be more than 500 characters')
      : (E.body = 'Post body is required'),
      a(E),
      Object.keys(E).length === 0)
    ) {
      try {
        t.submit(
          { id: h, title: r, body: o },
          { method: 'PUT', action: '/edit' }
        );
      } catch (y) {
        console.error(y), a({ message: y });
      }
      n(-1);
    }
  };
  return x.jsxs('div', {
    className: 'flex flex-col gap-4',
    children: [
      x.jsx('input', {
        type: 'text',
        value: r,
        onChange: h => l(h.target.value),
        className: 'rounded-lg border border-gray-400 bg-white p-3',
      }),
      u.title &&
        x.jsx('p', {
          className: 'text-sm italic text-red-500',
          children: u.title,
        }),
      x.jsx('textarea', {
        value: o,
        onChange: h => i(h.target.value),
        rows: 5,
        className: 'rounded-lg border border-gray-400 bg-white p-3',
      }),
      u.body &&
        x.jsx('p', {
          className: 'text-sm italic text-red-500',
          children: u.body,
        }),
      u.message &&
        x.jsx('p', {
          className: 'text-sm italic text-red-500',
          children: u.message,
        }),
      x.jsxs('div', {
        className: 'self-end space-x-3',
        children: [
          x.jsx('button', {
            onClick: () => m(e.id),
            className:
              'btn-save disabled:cursor-not-allowed disabled:opacity-50',
            disabled: s,
            children: 'Save',
          }),
          x.jsx('button', {
            onClick: () => n(null),
            className: 'btn-delete',
            children: 'Cancel',
          }),
        ],
      }),
    ],
  });
}
function Eh({ user: e, post: t, fetcher: n }) {
  const [r, l] = g.useState(e.saves.some(i => i.postId === t.id));
  g.useEffect(() => {
    if (n.state === 'idle' && n.data && !n.data.message) {
      const i = n.data;
      l(i.some(u => u.postId === t.id));
    }
  }, [n.state, n.data, t.id]);
  const o = async i => {
    if ((i.preventDefault(), r))
      try {
        n.submit({ postId: t.id }, { method: 'DELETE', action: '/unsave' });
      } catch (u) {
        console.error(u);
      }
    else
      try {
        n.submit({ postId: t.id }, { method: 'POST', action: '/save' });
      } catch (u) {
        console.error(u);
      }
  };
  return x.jsx('div', {
    onClick: i => o(i),
    className: 'flex max-w-fit cursor-pointer',
    children:
      r ?
        x.jsx(s1, {
          className:
            'text-lg text-amber-600 transition-colors duration-200 ease-in-out hover:text-amber-700',
        })
      : x.jsx(f1, {
          className:
            'text-lg text-amber-600 transition-colors duration-200 ease-in-out hover:text-amber-700',
        }),
  });
}
function w1({ posts: e }) {
  const { addToast: t } = Ss();
  Er();
  const n = wr(a => a.session.user),
    r = ms(),
    [l, o] = g.useState(-1),
    i = (a, s) => {
      a.preventDefault(), o(s.id);
    },
    u = (a, s) => {
      a.preventDefault(),
        window.confirm('Are you sure you want to delete this post?') &&
          (r.submit({ id: s }, { method: 'DELETE', action: '/delete' }),
          t('Post deleted successfully!'));
    };
  return x.jsxs('div', {
    className: 'container',
    children: [
      x.jsx('h2', {
        className: 'text-2xl font-bold',
        children: n ? 'Your Feed' : 'Feed',
      }),
      e.length &&
        e.map(a =>
          x.jsx(
            'div',
            {
              className: 'flex flex-col card',
              children:
                l === a.id ?
                  x.jsx(xh, { setEditingPostId: o, post: a, fetcher: r })
                : x.jsxs(uh, {
                    to: `/post/${a.id}`,
                    children: [
                      x.jsx('h3', {
                        className: 'font-bold underline',
                        children: a.title,
                      }),
                      x.jsx('p', { className: 'text-sm', children: a.body }),
                      x.jsx('div', {
                        className: 'flex flex-col',
                        children:
                          n &&
                          x.jsx(x.Fragment, {
                            children:
                              n.id !== a.userId ?
                                x.jsx(Eh, { fetcher: r, post: a, user: n })
                              : x.jsxs('div', {
                                  className: 'self-end space-x-3',
                                  children: [
                                    x.jsx('button', {
                                      onClick: s => i(s, a),
                                      className: 'btn-edit',
                                      children: 'Edit',
                                    }),
                                    x.jsx('button', {
                                      onClick: s => u(s, a.id),
                                      className: 'btn-delete',
                                      children: 'Delete',
                                    }),
                                  ],
                                }),
                          }),
                      }),
                    ],
                  }),
            },
            a.id
          )
        ),
    ],
  });
}
function S1() {
  const e = wr(s => s.session.user),
    t = ms(),
    [n, r] = g.useState(''),
    [l, o] = g.useState(''),
    [i, u] = g.useState({}),
    a = s => {
      s.preventDefault(), u({});
      const c = {};
      if (
        (n.length ?
          n.length < 5 ?
            (c.title = 'Title must be at least 5 characters')
          : n.length > 50 &&
            (c.title = 'Title cannot be more than 50 characters')
        : (c.title = 'Title is required'),
        l.length ?
          l.length < 10 ?
            (c.body = 'Post must be at least 10 characters')
          : l.length > 500 &&
            (c.body = 'Post cannot be more than 500 characters')
        : (c.body = 'Post body is required'),
        u(c),
        Object.keys(c).length === 0)
      )
        try {
          t.submit({ title: n, body: l }, { method: 'POST', action: '/new' }),
            o(''),
            r('');
        } catch (m) {
          console.error(m), u(m);
        }
    };
  return (
    e &&
    x.jsxs(t.Form, {
      method: 'POST',
      onSubmit: a,
      className:
        'container my-6 flex flex-col gap-4 rounded-md bg-white p-4 shadow-md',
      children: [
        x.jsx('input', {
          type: 'text',
          value: n,
          onChange: s => r(s.target.value),
          placeholder: 'Title',
          required: !0,
          className: 'rounded-lg border border-gray-400 bg-white p-3',
        }),
        i.title && x.jsx('p', { className: 'text-red-500', children: i.title }),
        x.jsx('textarea', {
          value: l,
          onChange: s => o(s.target.value),
          placeholder: 'Post',
          rows: 5,
          required: !0,
          className: 'rounded-lg border border-gray-400 bg-white p-3',
        }),
        i.body && x.jsx('p', { className: 'text-red-500', children: i.body }),
        i.message &&
          x.jsx('p', { className: 'text-red-500', children: i.message }),
        x.jsx('button', {
          type: 'submit',
          className: 'max-w-fit self-end btn',
          children: 'Post',
        }),
      ],
    })
  );
}
function x1() {
  const e = rh();
  return x.jsxs(x.Fragment, {
    children: [x.jsx(S1, {}), x.jsx(w1, { posts: e })],
  });
}
function E1() {
  const { addToast: e } = Ss(),
    t = Er(),
    n = rh(),
    r = ms(),
    l = wr(s => s.session.user),
    [o, i] = g.useState(-1),
    u = (s, c) => {
      s.preventDefault(), i(c.id);
    },
    a = (s, c) => {
      s.preventDefault(),
        window.confirm('Are you sure you want to delete this post?') &&
          (r.submit({ id: c }, { method: 'DELETE', action: '/delete' }),
          e('Post deleted successfully!'),
          r.load('/'),
          t('/'));
    };
  return x.jsx('div', {
    className: 'container',
    children: x.jsx('div', {
      className: 'mt-14 flex flex-col card',
      children:
        o === n.id ?
          x.jsx(xh, { setEditingPostId: i, post: n, fetcher: r })
        : x.jsxs(x.Fragment, {
            children: [
              x.jsx('h2', {
                className: 'font-bold underline',
                children: n.title,
              }),
              x.jsx('p', { className: 'text-lg', children: n.body }),
              l &&
                x.jsx(x.Fragment, {
                  children:
                    l.id !== n.userId ?
                      x.jsx(Eh, { fetcher: r, post: n, user: l })
                    : x.jsxs('div', {
                        className: 'self-end space-x-3',
                        children: [
                          x.jsx('button', {
                            onClick: s => u(s, n),
                            className: 'btn-edit',
                            children: 'Edit',
                          }),
                          x.jsx('button', {
                            onClick: s => a(s, n.id),
                            className: 'btn-delete',
                            children: 'Delete',
                          }),
                        ],
                      }),
                }),
            ],
          }),
    }),
  });
}
const C1 = v0([
  {
    element: x.jsx(g1, {}),
    children: [
      {
        path: '/',
        element: x.jsx(x1, {}),
        loader: async () => (await fetch('/api/posts')).json(),
      },
      { path: 'login', element: x.jsx(Z0, {}) },
      { path: 'signup', element: x.jsx(q0, {}) },
      {
        path: 'post/:postId',
        element: x.jsx(E1, {}),
        loader: async ({ params: e }) => {
          const { postId: t } = e;
          return (await fetch(`/api/posts/${t}`)).json();
        },
      },
      {
        path: '/new',
        action: async ({ request: e }) => {
          const t = await e.formData();
          try {
            return (
              await fetch('/api/posts', { method: 'POST', body: t })
            ).json();
          } catch (n) {
            return console.error('Error in post action:', n), n;
          }
        },
      },
      {
        path: '/delete',
        action: async ({ request: e }) => {
          const t = await e.formData();
          try {
            return (
              await fetch(`/api/posts/${t.get('id')}`, { method: 'DELETE' })
            ).json();
          } catch (n) {
            return console.error('Error in post action:', n), n;
          }
        },
      },
      {
        path: '/edit',
        action: async ({ request: e }) => {
          const t = await e.formData();
          try {
            return (
              await fetch(`/api/posts/${t.get('id')}`, {
                method: 'PUT',
                body: t,
              })
            ).json();
          } catch (n) {
            return console.error('Error in post action:', n), n;
          }
        },
      },
      {
        path: '/save',
        action: async ({ request: e }) => {
          const t = await e.formData();
          try {
            return (
              await fetch(`/api/posts/${t.get('postId')}/save`, {
                method: 'POST',
              })
            ).json();
          } catch (n) {
            return console.error('Error in save action:', n), n;
          }
        },
      },
      {
        path: '/unsave',
        action: async ({ request: e }) => {
          const t = await e.formData();
          try {
            return (
              await fetch(`/api/posts/${t.get('postId')}/save`, {
                method: 'DELETE',
              })
            ).json();
          } catch (n) {
            return console.error('Error in unsave action:', n), n;
          }
        },
      },
    ],
  },
]);
const k1 = J0();
du.createRoot(document.getElementById('root')).render(
  x.jsx(zt.StrictMode, {
    children: x.jsx(Xy, { store: k1, children: x.jsx(C0, { router: C1 }) }),
  })
);
