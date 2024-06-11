"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _SignUp = _interopRequireDefault(require("./views/SignUp.vue"));

var _Login = _interopRequireDefault(require("./views/Login.vue"));

var _Home = _interopRequireDefault(require("./views/Home.vue"));

var _firebase = require("./firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// src/router.js
_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  mode: "history",
  routes: [{
    path: "/signup",
    component: _SignUp["default"]
  }, {
    path: "/login",
    component: _Login["default"]
  }, {
    path: "/home",
    component: _Home["default"],
    meta: {
      requiresAuth: true
    }
  }]
});
router.beforeEach(function (to, from, next) {
  var requiresAuth = to.matched.some(function (record) {
    return record.meta.requiresAuth;
  });
  var isAuthenticated = _firebase.auth.currentUser;

  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=router.dev.js.map
