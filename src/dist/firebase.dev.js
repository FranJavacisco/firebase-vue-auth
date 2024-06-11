"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAiO8WIYTsWivHr0ZrU6UuikvbXlid_gAY",
  authDomain: "fir-vue-auth-2e703.firebaseapp.com",
  projectId: "fir-vue-auth-2e703",
  storageBucket: "fir-vue-auth-2e703.appspot.com",
  messagingSenderId: "18183909773",
  appId: "1:18183909773:web:844163f3bc9e5a0bb64dc4"
};

_app["default"].initializeApp(firebaseConfig);

var auth = _app["default"].auth();

exports.auth = auth;
//# sourceMappingURL=firebase.dev.js.map
