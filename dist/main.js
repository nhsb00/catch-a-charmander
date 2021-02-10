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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_tank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/tank */ "./src/scripts/tank.js");
/* harmony import */ var _scripts_tankhandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/tankhandler */ "./src/scripts/tankhandler.js");
/* harmony import */ var _scripts_target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/target */ "./src/scripts/target.js");




var canvas = document.getElementById("gameBoard");
var ctx = canvas.getContext("2d"); // ctx.clearRect(0, 0, 800, 600);
// ctx.fillStyle = "#f00";
// ctx.fillRect(20, 20, 100, 100);
// ctx.fillStyle = "#00f";
// ctx.fillRect(240, 200, 50, 50);

var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var tank = new _scripts_tank__WEBPACK_IMPORTED_MODULE_1__["default"](GAME_WIDTH, GAME_HEIGHT);
new _scripts_tankhandler__WEBPACK_IMPORTED_MODULE_2__["default"](tank);
var target = new _scripts_target__WEBPACK_IMPORTED_MODULE_3__["default"](GAME_WIDTH, GAME_HEIGHT);
tank.draw(ctx);
target.draw(ctx);
var lastTime = 0;

function gameLoop(timestamp) {
  var dt = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 800, 600);
  tank.update(dt);
  tank.draw(ctx);
  target.draw(ctx);
  requestAnimationFrame(gameLoop);
}

gameLoop(); // const draw = () => {
//   drawTank();
//   drawTarget();
//   drawMissile();
// }
// const drawTank = () =>   {}
// const drawTarget = () => {}
// const drawMissile = () => {}
// draw();
// function twinkle(){
//   if (flag === 0) {
//     document.querySelector('h1').style.color = '#d6806e';
//     flag ++;
//   } else if(flag === 1) {
//     document.querySelector('h1').style.color = '#fbb666';
//     flag ++;
//   }else if(flag === 2){
//     document.querySelector('h1').style.color = '#f9f871';
//     flag ++;
//   }else{
//     document.querySelector('h1').style.color = '#f2ecff';
//     flag = 0;
//   }
// }
// setInterval(twinkle, 1000);

/***/ }),

/***/ "./src/scripts/tank.js":
/*!*****************************!*\
  !*** ./src/scripts/tank.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tank; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tank = /*#__PURE__*/function () {
  function Tank(gameWidth, gameHeight) {
    _classCallCheck(this, Tank);

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight; //tank

    this.width = 50;
    this.height = 50;
    this.maxSpeed = 1;
    this.speed = 0;
    this.position = {
      x: 0,
      y: this.gameHeight - this.height
    }; // tank position
    //cannon

    this.cannonAngle = Math.PI / 4;
    this.cannonAngleSpeed = Math.PI / 60;
    this.cannonSpeed = 0;
    this.cannonLength = this.width * Math.sqrt(2); //gauge

    this.gauge = Math.PI;
    this.gaugeSpeed = Math.PI / 30;
    this.gaugeBarRaidus = 30; //missile

    this.missileRadius = 10;
    this.missilePower = this.gauge * 1.5;
    this.missileDx = this.gauge * 1.5 * Math.cos(this.cannonAngle);
    this.missileDy = this.gauge * 1.5 * Math.sin(this.cannonAngle);
    this.gravity = 0.0981;
    this.charging = false;
    this.fire = false;
  }

  _createClass(Tank, [{
    key: "draw",
    value: function draw(ctx) {
      //tank
      ctx.fillStyle = '#0ff';
      ctx.fillRect(this.position.x, this.gameHeight - this.height, this.width, this.height); //cannon

      ctx.beginPath();
      ctx.moveTo(this.position.x + this.width / 2, this.position.y + this.height / 2);
      ctx.lineTo(this.position.x + this.width / 2 + this.cannonLength * Math.cos(this.cannonAngle), this.position.y + this.height / 2 - this.cannonLength * Math.sin(this.cannonAngle));
      ctx.stroke();
      ctx.closePath(); //gauge

      ctx.beginPath();
      ctx.arc(this.position.x + this.width / 2, this.position.y - this.height / 2, this.gaugeBarRaidus, Math.PI, this.gauge, false);
      ctx.stroke(); //missile

      if (!this.fire) {
        this.missileX = this.position.x + this.width / 2 + this.cannonLength * Math.cos(this.cannonAngle), this.missileY = this.position.y + this.height / 2 - this.cannonLength * Math.sin(this.cannonAngle);
      } else {
        this.missileDy -= this.gravity;
        this.missileX += this.missileDx;
        this.missileY -= this.missileDy;
      }

      ctx.beginPath();
      ctx.arc(this.missileX, this.missileY, this.missileRadius, 0, Math.PI * 2);
      ctx.fillStyle = "blue";
      ctx.fill();
      ctx.closePath();
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.speed = -this.maxSpeed;
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.speed = this.maxSpeed;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.speed = 0;
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      this.cannonAngle += this.cannonAngleSpeed;
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      this.cannonAngle += -this.cannonAngleSpeed;
    }
  }, {
    key: "stopcannonAngle",
    value: function stopcannonAngle() {
      this.cannonSpeed = 0;
    }
  }, {
    key: "update",
    value: function update(dt) {
      if (!dt) return;
      this.position.x += this.speed; // this.position.y += this.cannonAngleSpeed;

      if (this.position.x < 0) this.position.x = 0;
      if (this.position.x + this.width > this.gameWidth / 2 - this.width / 2) this.position.x = this.gameWidth / 2 - this.width * 1.5;
      if (this.position.y + this.height / 2 === this.position.y + this.height / 2) this.position.y = this.gameHeight - this.height; //missile

      if (this.gauge > Math.PI * 2) this.gauge = Math.PI * 2;
    }
  }]);

  return Tank;
}();



/***/ }),

/***/ "./src/scripts/tankhandler.js":
/*!************************************!*\
  !*** ./src/scripts/tankhandler.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TankHandler; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TankHandler = function TankHandler(tank) {
  _classCallCheck(this, TankHandler);

  document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case 37:
        tank.moveLeft();
        break;

      case 39:
        tank.moveRight();
        break;

      case 38:
        tank.moveUp();
        break;

      case 40:
        tank.moveDown();
        break;

      case 32:
        tank.charging = true;
        tank.gauge += tank.gaugeSpeed;
        tank.missileDx = tank.gauge * 1.5 * Math.cos(tank.cannonAngle);
        tank.missileDy = tank.gauge * 1.5 * Math.sin(tank.cannonAngle);
        break;
    }
  });
  document.addEventListener("keyup", function (event) {
    switch (event.keyCode) {
      case 37:
        if (tank.speed < 0) tank.stop();
        break;

      case 39:
        if (tank.speed > 0) tank.stop();
        break;

      case 38:
        if (tank.cannonAngle >= 0) tank.stopcannonAngle();
        break;

      case 40:
        if (tank.cannonAngle <= Math.PI) tank.stopcannonAngle();
        break;

      case 32:
        tank.charging = false;
        tank.fire = true;
        break;
    }
  });
};



/***/ }),

/***/ "./src/scripts/target.js":
/*!*******************************!*\
  !*** ./src/scripts/target.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Target; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Target = /*#__PURE__*/function () {
  function Target(width, height) {
    _classCallCheck(this, Target);

    this.targetWidth = Math.floor(Math.random() * 100 + 30);
    this.targetHeight = Math.floor(Math.random() * 100 + 10);
    this.targetX = Math.floor(Math.random() * (400 - this.targetWidth) + 400);
    this.targetY = height - this.targetHeight;
  }

  _createClass(Target, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = "red";
      ctx.fillRect(this.targetX, this.targetY, this.targetWidth, this.targetHeight);
    }
  }]);

  return Target;
}();



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFua2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsInRhbmsiLCJUYW5rIiwiVGFua0hhbmRsZXIiLCJ0YXJnZXQiLCJUYXJnZXQiLCJkcmF3IiwibGFzdFRpbWUiLCJnYW1lTG9vcCIsInRpbWVzdGFtcCIsImR0IiwiY2xlYXJSZWN0IiwidXBkYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwibWF4U3BlZWQiLCJzcGVlZCIsInBvc2l0aW9uIiwieCIsInkiLCJjYW5ub25BbmdsZSIsIk1hdGgiLCJQSSIsImNhbm5vbkFuZ2xlU3BlZWQiLCJjYW5ub25TcGVlZCIsImNhbm5vbkxlbmd0aCIsInNxcnQiLCJnYXVnZSIsImdhdWdlU3BlZWQiLCJnYXVnZUJhclJhaWR1cyIsIm1pc3NpbGVSYWRpdXMiLCJtaXNzaWxlUG93ZXIiLCJtaXNzaWxlRHgiLCJjb3MiLCJtaXNzaWxlRHkiLCJzaW4iLCJncmF2aXR5IiwiY2hhcmdpbmciLCJmaXJlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJhcmMiLCJtaXNzaWxlWCIsIm1pc3NpbGVZIiwiZmlsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleUNvZGUiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsIm1vdmVVcCIsIm1vdmVEb3duIiwic3RvcCIsInN0b3BjYW5ub25BbmdsZSIsInRhcmdldFdpZHRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0YXJnZXRIZWlnaHQiLCJ0YXJnZXRYIiwidGFyZ2V0WSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWY7QUFFQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaLEMsQ0FFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1DLFVBQVUsR0FBRyxHQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxHQUFwQjtBQUVBLElBQU1DLElBQUks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Q0FBQ3VDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQXZDLFlBQUksQ0FBQ3dDLElBQUwsR0FBWSxJQUFaO0FBQ0E7QUFwQlI7QUFzQkgsR0F2QkQ7QUF3QkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2pEZ0JwQyxNO0FBQ2pCLGtCQUFZVyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQjtBQUFBOztBQUN2QixTQUFLNkMsV0FBTCxHQUFtQnRDLElBQUksQ0FBQ3VDLEtBQUwsQ0FBV3ZDLElBQUksQ0FBQ3dDLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsRUFBakMsQ0FBbkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CekMsSUFBSSxDQUFDdUMsS0FBTCxDQUFXdkMsSUFBSSxDQUFDd0MsTUFBTCxLQUFnQixHQUFoQixHQUFzQixFQUFqQyxDQUFwQjtBQUNBLFNBQUtFLE9BQUwsR0FBZTFDLElBQUksQ0FBQ3VDLEtBQUwsQ0FBV3ZDLElBQUksQ0FBQ3dDLE1BQUwsTUFBaUIsTUFBTSxLQUFLRixXQUE1QixJQUEyQyxHQUF0RCxDQUFmO0FBQ0EsU0FBS0ssT0FBTCxHQUFlbEQsTUFBTSxHQUFHLEtBQUtnRCxZQUE3QjtBQUNIOzs7O3lCQUVJcEUsRyxFQUFLO0FBQ05BLFNBQUcsQ0FBQzZDLFNBQUosR0FBZ0IsS0FBaEI7QUFDQTdDLFNBQUcsQ0FBQzhDLFFBQUosQ0FBYSxLQUFLdUIsT0FBbEIsRUFBMkIsS0FBS0MsT0FBaEMsRUFBeUMsS0FBS0wsV0FBOUMsRUFBMkQsS0FBS0csWUFBaEU7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYTCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCJcbmltcG9ydCBUYW5rIGZyb20gJy4vc2NyaXB0cy90YW5rJztcbmltcG9ydCBUYW5rSGFuZGxlciBmcm9tICcuL3NjcmlwdHMvdGFua2hhbmRsZXInO1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3NjcmlwdHMvdGFyZ2V0JztcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lQm9hcmRcIik7XG5cbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbi8vIGN0eC5jbGVhclJlY3QoMCwgMCwgODAwLCA2MDApO1xuXG4vLyBjdHguZmlsbFN0eWxlID0gXCIjZjAwXCI7XG4vLyBjdHguZmlsbFJlY3QoMjAsIDIwLCAxMDAsIDEwMCk7XG5cbi8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMGZcIjtcbi8vIGN0eC5maWxsUmVjdCgyNDAsIDIwMCwgNTAsIDUwKTtcblxuY29uc3QgR0FNRV9XSURUSCA9IDgwMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNjAwO1xuXG5jb25zdCB0YW5rID0gbmV3IFRhbmsoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xubmV3IFRhbmtIYW5kbGVyKHRhbmspO1xuXG5jb25zdCB0YXJnZXQgPSBuZXcgVGFyZ2V0KEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKVxuXG50YW5rLmRyYXcoY3R4KTtcbnRhcmdldC5kcmF3KGN0eCk7XG5cblxubGV0IGxhc3RUaW1lID0gMDtcblxuZnVuY3Rpb24gZ2FtZUxvb3AodGltZXN0YW1wKSB7XG4gIGxldCBkdCA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lXG4gIGxhc3RUaW1lID0gdGltZXN0YW1wO1xuXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgODAwLCA2MDApO1xuICBcbiAgdGFuay51cGRhdGUoZHQpO1xuICB0YW5rLmRyYXcoY3R4KTtcbiAgdGFyZ2V0LmRyYXcoY3R4KVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5cbmdhbWVMb29wKCk7XG5cbi8vIGNvbnN0IGRyYXcgPSAoKSA9PiB7XG4vLyAgIGRyYXdUYW5rKCk7XG4vLyAgIGRyYXdUYXJnZXQoKTtcbi8vICAgZHJhd01pc3NpbGUoKTtcbi8vIH1cbi8vIGNvbnN0IGRyYXdUYW5rID0gKCkgPT4gICB7fVxuLy8gY29uc3QgZHJhd1RhcmdldCA9ICgpID0+IHt9XG4vLyBjb25zdCBkcmF3TWlzc2lsZSA9ICgpID0+IHt9XG5cbi8vIGRyYXcoKTtcblxuLy8gZnVuY3Rpb24gdHdpbmtsZSgpe1xuLy8gICBpZiAoZmxhZyA9PT0gMCkge1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnI2Q2ODA2ZSc7XG4vLyAgICAgZmxhZyArKztcbi8vICAgfSBlbHNlIGlmKGZsYWcgPT09IDEpIHtcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyNmYmI2NjYnO1xuLy8gICAgIGZsYWcgKys7XG4vLyAgIH1lbHNlIGlmKGZsYWcgPT09IDIpe1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnI2Y5Zjg3MSc7XG4vLyAgICAgZmxhZyArKztcbi8vICAgfWVsc2V7XG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjZjJlY2ZmJztcbi8vICAgICBmbGFnID0gMDtcbi8vICAgfVxuLy8gfVxuXG4vLyBzZXRJbnRlcnZhbCh0d2lua2xlLCAxMDAwKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rIHtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWVXaWR0aCwgZ2FtZUhlaWdodCkge1xuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aDtcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICAgICAgLy90YW5rXG4gICAgICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDE7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0LFxuICAgICAgICB9OyAvLyB0YW5rIHBvc2l0aW9uXG4gICAgICAgIC8vY2Fubm9uXG4gICAgICAgIHRoaXMuY2Fubm9uQW5nbGUgPSBNYXRoLlBJIC8gNDtcbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZVNwZWVkID0gTWF0aC5QSSAvIDYwO1xuICAgICAgICB0aGlzLmNhbm5vblNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5jYW5ub25MZW5ndGggPSB0aGlzLndpZHRoICogTWF0aC5zcXJ0KDIpO1xuICAgICAgICAvL2dhdWdlXG4gICAgICAgIHRoaXMuZ2F1Z2UgPSBNYXRoLlBJO1xuICAgICAgICB0aGlzLmdhdWdlU3BlZWQgPSBNYXRoLlBJIC8gMzA7XG4gICAgICAgIHRoaXMuZ2F1Z2VCYXJSYWlkdXMgPSAzMDtcbiAgICAgICAgLy9taXNzaWxlXG4gICAgICAgIHRoaXMubWlzc2lsZVJhZGl1cyA9IDEwO1xuICAgICAgICB0aGlzLm1pc3NpbGVQb3dlciA9IHRoaXMuZ2F1Z2UgKiAxLjU7XG4gICAgICAgIHRoaXMubWlzc2lsZUR4ID0gdGhpcy5nYXVnZSAqIDEuNSAqIE1hdGguY29zKHRoaXMuY2Fubm9uQW5nbGUpO1xuICAgICAgICB0aGlzLm1pc3NpbGVEeSA9IHRoaXMuZ2F1Z2UgKiAxLjUgKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKTtcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gMC4wOTgxO1xuICAgICAgICB0aGlzLmNoYXJnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIC8vdGFua1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMwZmYnO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAvL2Nhbm5vblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aC8yLCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yKTtcbiAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgvMiArIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5jb3ModGhpcy5jYW5ub25BbmdsZSksXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yIC0gdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAvL2dhdWdlXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgdGhpcy5nYXVnZUJhclJhaWR1cyxcbiAgICAgICAgICAgIE1hdGguUEksXG4gICAgICAgICAgICB0aGlzLmdhdWdlLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAvL21pc3NpbGVcbiAgICAgICAgaWYgKCF0aGlzLmZpcmUpIHtcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVggPSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLzIgKyB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguY29zKHRoaXMuY2Fubm9uQW5nbGUpLFxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgLSB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguc2luKHRoaXMuY2Fubm9uQW5nbGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVEeSAtPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYICs9IHRoaXMubWlzc2lsZUR4O1xuICAgICAgICAgICAgdGhpcy5taXNzaWxlWSAtPSB0aGlzLm1pc3NpbGVEeTtcbiAgICAgICAgfVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYLFxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWSxcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVJhZGl1cyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBNYXRoLlBJICogMlxuICAgICAgICApXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgfSBcblxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMubWF4U3BlZWQ7XG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5tYXhTcGVlZDtcbiAgICB9XG4gICAgXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgfVxuXG4gICAgbW92ZVVwKCkge1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlICs9IHRoaXMuY2Fubm9uQW5nbGVTcGVlZDtcbiAgICB9XG5cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZSArPSAtdGhpcy5jYW5ub25BbmdsZVNwZWVkO1xuICAgIH1cblxuICAgIHN0b3BjYW5ub25BbmdsZSgpIHtcbiAgICAgICAgdGhpcy5jYW5ub25TcGVlZCA9IDA7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICghZHQpIHJldHVybjtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuY2Fubm9uQW5nbGVTcGVlZDtcblxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggPCAwKSB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggICsgdGhpcy53aWR0aCA+IHRoaXMuZ2FtZVdpZHRoLzIgLSB0aGlzLndpZHRoLzIpIHRoaXMucG9zaXRpb24ueCA9ICh0aGlzLmdhbWVXaWR0aC8yKSAtIHRoaXMud2lkdGggKiAxLjU7XG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgPT09IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIpIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0XG5cbiAgICAgICAgLy9taXNzaWxlXG4gICAgICAgIGlmKHRoaXMuZ2F1Z2UgPiBNYXRoLlBJICogMikgdGhpcy5nYXVnZSA9IE1hdGguUEkgKiAyXG4gICAgICAgIFxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhbmtIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0YW5rKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIHRhbmsubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6IFxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVVcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVEb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuY2hhcmdpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YW5rLmdhdWdlICs9IHRhbmsuZ2F1Z2VTcGVlZFxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1pc3NpbGVEeCA9IHRhbmsuZ2F1Z2UgKiAxLjUgKiBNYXRoLmNvcyh0YW5rLmNhbm5vbkFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgdGFuay5taXNzaWxlRHkgPSB0YW5rLmdhdWdlICogMS41ICogTWF0aC5zaW4odGFuay5jYW5ub25BbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuc3BlZWQgPCAwKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuc3BlZWQgPiAwKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuY2Fubm9uQW5nbGUgPj0wIClcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wY2Fubm9uQW5nbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuY2Fubm9uQW5nbGUgPD0gTWF0aC5QSSlcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wY2Fubm9uQW5nbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5jaGFyZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0YW5rLmZpcmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy50YXJnZXRXaWR0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCArIDMwKTtcbiAgICAgICAgdGhpcy50YXJnZXRIZWlnaHQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgKyAxMCk7XG4gICAgICAgIHRoaXMudGFyZ2V0WCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg0MDAgLSB0aGlzLnRhcmdldFdpZHRoKSArIDQwMCk7XG4gICAgICAgIHRoaXMudGFyZ2V0WSA9IGhlaWdodCAtIHRoaXMudGFyZ2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy50YXJnZXRYLCB0aGlzLnRhcmdldFksIHRoaXMudGFyZ2V0V2lkdGgsIHRoaXMudGFyZ2V0SGVpZ2h0KTtcbiAgICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==