"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _app = require("firebase/app");

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
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
exports.app = app;
//# sourceMappingURL=firebaseConfig.dev.js.map
