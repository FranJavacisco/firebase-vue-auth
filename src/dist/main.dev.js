"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _firebase = require("./firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// src/main.js
_vue["default"].config.productionTip = false;
var app;

_firebase.auth.onAuthStateChanged(function () {
  if (!app) {
    app = new _vue["default"]({
      router: _router["default"],
      render: function render(h) {
        return h(_App["default"]);
      }
    }).$mount("#app");
  }
});
//# sourceMappingURL=main.dev.js.map
