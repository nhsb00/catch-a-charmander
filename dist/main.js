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

/***/ "./src/cannon.js":
/*!***********************!*\
  !*** ./src/cannon.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// export default class Cannon {
//     constructor(gameWidth, gameHeight) {
//         this.gameWidth = gameWidth;
//         this.gameHeight = gameHeight
//         this.tankCenterWidth = 50;
//         this.tankCenterHeight = 50;
//         this.maxSpeed = 5;
//         this.speed = 0;
//         this.angle = Math.PI / 4;
//         this.angleSpeed = Math.PI / 60;
//         this.cannonLength = this.width * Math.sqrt(2);
//         this.position = {
//             x: this.width / 2,
//             y: gameHeight - this.height/2,
//         };
//     }
//     draw(ctx) {
//         ctx.beginPath();
//         ctx.moveTo(this.position.x, this.position.y);
//         ctx.lineTo(
//             this.position.x + this.cannonLength * Math.cos(this.angle),
//             this.position.y - this.cannonLength * Math.sin(this.angle));
//         ctx.stroke();
//         ctx.closePath();
//     }
//     moveUp() {
//         this.angle = this.angleSpeed;
//     }
//     moveDown() {
//         this.angle = -this.angleSpeed;
//     }
//     moveLeft() {
//         this.speed = -this.maxSpeed;
//     }
//     moveRight() {
//         this.speed = this.maxSpeed;
//     }
//     stop() {
//         this.speed = 0;
//     }
//     stopAngle() {
//         this.angle = 0;
//     }
//     update(dt) {
//         if (!dt) return;
//         this.position.x += this.speed;
//         this.position.y += this.angle;
//         if(this.position.x < this.width/2) this.position.x = this.width/2;
//         if(this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;
//         if(this.position.y < this.height/2) this.position.y = this.height/ 2;
//         if(this.position.y + this.height > this.gameHeight) this.position.y = this.gameHeight - this.height;
//     }
// }

/***/ }),

/***/ "./src/cannonhandler.js":
/*!******************************!*\
  !*** ./src/cannonhandler.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CannonHandler; });
/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tank */ "./src/tank.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var CannonHandler = function CannonHandler(cannon) {
  _classCallCheck(this, CannonHandler);

  document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case 37:
        cannon.moveLeft();
        break;

      case 39:
        cannon.moveRight();
        break;

      case 38:
        cannon.moveUp();
        break;

      case 40:
        cannon.moveDown();
        break;
    }
  });
  document.addEventListener("keyup", function (event) {
    switch (event.keyCode) {
      case 37:
        if (cannon.speed < 0) cannon.stop();
        break;

      case 39:
        if (cannon.speed > 0) cannon.stop();
        break;

      case 38:
        if (cannon.angle <= Math.PI) cannon.stopAngle();
        break;

      case 40:
        if (cannon.angle >= 0) cannon.stopAngle();
        break;
    }
  });
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tank */ "./src/tank.js");
/* harmony import */ var _tankhandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tankhandler */ "./src/tankhandler.js");
/* harmony import */ var _cannon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cannon */ "./src/cannon.js");
/* harmony import */ var _cannon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cannon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cannonhandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cannonhandler */ "./src/cannonhandler.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target */ "./src/target.js");





var canvas = document.getElementById("gameBoard");
var ctx = canvas.getContext("2d"); // ctx.clearRect(0, 0, 800, 600);
// ctx.fillStyle = "#f00";
// ctx.fillRect(20, 20, 100, 100);
// ctx.fillStyle = "#00f";
// ctx.fillRect(240, 200, 50, 50);

var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var tank = new _tank__WEBPACK_IMPORTED_MODULE_0__["default"](GAME_WIDTH, GAME_HEIGHT);
new _tankhandler__WEBPACK_IMPORTED_MODULE_1__["default"](tank); // const cannon = new Cannon(GAME_WIDTH, GAME_HEIGHT);
// new CannonHandler(cannon);

var target = new _target__WEBPACK_IMPORTED_MODULE_4__["default"](GAME_WIDTH, GAME_HEIGHT);
tank.draw(ctx);
target.draw(ctx); // cannon.draw(ctx);

var lastTime = 0;

function gameLoop(timestamp) {
  var dt = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 800, 600);
  tank.update(dt);
  tank.draw(ctx);
  target.draw(ctx); // cannon.update(dt);
  // cannon.draw(ctx);

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

/***/ }),

/***/ "./src/tank.js":
/*!*********************!*\
  !*** ./src/tank.js ***!
  \*********************/
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
    this.gameHeight = gameHeight;
    this.width = 50; //tank width

    this.height = 50; //tank height

    this.maxSpeed = 5;
    this.speed = 0;
    this.position = {
      x: 0,
      y: this.gameHeight - this.height
    }; // tank position
    //cannon

    this.tankCenterX = this.position.x + 0.5 * this.width;
    this.tankCenterY = this.gameHeight - 0.5 * this.height;
    this.cannonAngle = Math.PI / 4;
    this.cannonAngleSpeed = Math.PI / 60;
    this.cannonSpeed = 0;
    this.cannonLength = this.width * Math.sqrt(2);
  }

  _createClass(Tank, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = '#0ff';
      ctx.fillRect(this.position.x, this.gameHeight - this.height, this.width, this.height);
      ctx.beginPath();
      ctx.moveTo(this.position.x + this.width / 2, this.position.y + this.height / 2);
      ctx.lineTo(this.position.x + this.width / 2 + this.cannonLength * Math.cos(this.cannonAngle), this.position.y + this.height / 2 - this.cannonLength * Math.sin(this.cannonAngle));
      ctx.stroke();
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
    key: "stop",
    value: function stop() {
      this.speed = 0;
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
      this.position.x += this.speed;
      this.position.y += this.cannonAngleSpeed;
      if (this.position.x < 0) this.position.x = 0;
      if (this.position.x + this.width > this.gameWidth - this.width / 2) this.position.x = this.gameWidth - this.width * 1.5;
      if (this.position.y + this.height / 2 === this.position.y + this.height / 2) this.position.y = this.gameHeight - this.height;
    }
  }]);

  return Tank;
}();



/***/ }),

/***/ "./src/tankhandler.js":
/*!****************************!*\
  !*** ./src/tankhandler.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TankHandler; });
/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tank */ "./src/tank.js");
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
        if (tank.angle <= Math.PI) tank.stopAngle();
        break;

      case 40:
        if (tank.angle >= 0) tank.stopAngle();
        break;
    }
  });
};



/***/ }),

/***/ "./src/target.js":
/*!***********************!*\
  !*** ./src/target.js ***!
  \***********************/
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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nhbm5vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2Fubm9uaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhbmtoYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YXJnZXQuanMiXSwibmFtZXMiOlsiQ2Fubm9uSGFuZGxlciIsImNhbm5vbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwibW92ZVVwIiwibW92ZURvd24iLCJzcGVlZCIsInN0b3AiLCJhbmdsZSIsIk1hdGgiLCJQSSIsInN0b3BBbmdsZSIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsInRhbmsiLCJUYW5rIiwiVGFua0hhbmRsZXIiLCJ0YXJnZXQiLCJUYXJnZXQiLCJkcmF3IiwibGFzdFRpbWUiLCJnYW1lTG9vcCIsInRpbWVzdGFtcCIsImR0IiwiY2xlYXJSZWN0IiwidXBkYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwibWF4U3BlZWQiLCJwb3NpdGlvbiIsIngiLCJ5IiwidGFua0NlbnRlclgiLCJ0YW5rQ2VudGVyWSIsImNhbm5vbkFuZ2xlIiwiY2Fubm9uQW5nbGVTcGVlZCIsImNhbm5vblNwZWVkIiwiY2Fubm9uTGVuZ3RoIiwic3FydCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY29zIiwic2luIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwidGFyZ2V0V2lkdGgiLCJmbG9vciIsInJh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LFNBQUw7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSyxZQUFJTyxJQUFJLENBQUNWLEtBQUwsSUFBYyxDQUFsQixFQUNEVSxJQUFJLENBQUNQLFNBQUw7QUFDQTtBQWhCUjtBQWtCSCxHQW5CRDtBQW9CSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDekNnQlcsTTtBQUNqQixrQkFBWVcsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkI7QUFBQTs7QUFDdkIsU0FBS3FCLFdBQUwsR0FBbUI5QyxJQUFJLENBQUMrQyxLQUFMLENBQVcvQyxJQUFJLENBQUNnRCxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCLEVBQWpDLENBQW5CO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQmpELElBQUksQ0FBQytDLEtBQUwsQ0FBVy9DLElBQUksQ0FBQ2dELE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsRUFBakMsQ0FBcEI7QUFDQSxTQUFLRSxPQUFMLEdBQWVsRCxJQUFJLENBQUMrQyxLQUFMLENBQVcvQyxJQUFJLENBQUNnRCxNQUFMLE1BQWlCLE1BQU0sS0FBS0YsV0FBNUIsSUFBMkMsR0FBdEQsQ0FBZjtBQUNBLFNBQUtLLE9BQUwsR0FBZTFCLE1BQU0sR0FBRyxLQUFLd0IsWUFBN0I7QUFDSDs7Ozt5QkFFSTVDLEcsRUFBSztBQUNOQSxTQUFHLENBQUNnQyxTQUFKLEdBQWdCLEtBQWhCO0FBQ0FoQyxTQUFHLENBQUNpQyxRQUFKLENBQWEsS0FBS1ksT0FBbEIsRUFBMkIsS0FBS0MsT0FBaEMsRUFBeUMsS0FBS0wsV0FBOUMsRUFBMkQsS0FBS0csWUFBaEU7QUFDSCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW5ub24ge1xuXG4vLyAgICAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4vLyAgICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZVdpZHRoO1xuLy8gICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0XG4vLyAgICAgICAgIHRoaXMudGFua0NlbnRlcldpZHRoID0gNTA7XG4vLyAgICAgICAgIHRoaXMudGFua0NlbnRlckhlaWdodCA9IDUwO1xuLy8gICAgICAgICB0aGlzLm1heFNwZWVkID0gNTtcbi8vICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4vLyAgICAgICAgIHRoaXMuYW5nbGUgPSBNYXRoLlBJIC8gNDtcbi8vICAgICAgICAgdGhpcy5hbmdsZVNwZWVkID0gTWF0aC5QSSAvIDYwO1xuLy8gICAgICAgICB0aGlzLmNhbm5vbkxlbmd0aCA9IHRoaXMud2lkdGggKiBNYXRoLnNxcnQoMik7XG4gICAgICAgIFxuLy8gICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuLy8gICAgICAgICAgICAgeDogdGhpcy53aWR0aCAvIDIsXG4vLyAgICAgICAgICAgICB5OiBnYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQvMixcbi8vICAgICAgICAgfTtcbi8vICAgICB9XG5cbi8vICAgICBkcmF3KGN0eCkge1xuLy8gICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4vLyAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuLy8gICAgICAgICBjdHgubGluZVRvKFxuLy8gICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSxcbi8vICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5zaW4odGhpcy5hbmdsZSkpO1xuLy8gICAgICAgICBjdHguc3Ryb2tlKCk7XG4vLyAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbi8vICAgICB9XG5cbi8vICAgICBtb3ZlVXAoKSB7XG4vLyAgICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlU3BlZWQ7XG4vLyAgICAgfVxuXG4vLyAgICAgbW92ZURvd24oKSB7XG4vLyAgICAgICAgIHRoaXMuYW5nbGUgPSAtdGhpcy5hbmdsZVNwZWVkO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICBtb3ZlTGVmdCgpIHtcbi8vICAgICAgICAgdGhpcy5zcGVlZCA9IC10aGlzLm1heFNwZWVkO1xuLy8gICAgIH1cblxuLy8gICAgIG1vdmVSaWdodCgpIHtcbi8vICAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWF4U3BlZWQ7XG4vLyAgICAgfVxuXG4vLyAgICAgc3RvcCgpIHtcbi8vICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4vLyAgICAgfVxuXG4vLyAgICAgc3RvcEFuZ2xlKCkge1xuLy8gICAgICAgICB0aGlzLmFuZ2xlID0gMDtcbi8vICAgICB9XG5cbi8vICAgICB1cGRhdGUoZHQpIHtcbi8vICAgICAgICAgaWYgKCFkdCkgcmV0dXJuO1xuXG4vLyAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xuLy8gICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5hbmdsZTtcblxuLy8gICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggPCB0aGlzLndpZHRoLzIpIHRoaXMucG9zaXRpb24ueCA9IHRoaXMud2lkdGgvMjtcbi8vICAgICAgICAgaWYodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuZ2FtZVdpZHRoKSB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGg7XG5cbi8vICAgICAgICAgaWYodGhpcy5wb3NpdGlvbi55IDwgdGhpcy5oZWlnaHQvMikgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5oZWlnaHQvIDI7XG4vLyAgICAgICAgIGlmKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ID4gdGhpcy5nYW1lSGVpZ2h0KSB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodDtcbi8vICAgICB9XG5cbi8vIH0iLCJpbXBvcnQgVGFuayBmcm9tIFwiLi90YW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbm5vbkhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbm5vbikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgY2Fubm9uLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGNhbm5vbi5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgY2Fubm9uLm1vdmVVcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBjYW5ub24ubW92ZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBpZiAoY2Fubm9uLnNwZWVkIDwgMClcbiAgICAgICAgICAgICAgICAgICAgY2Fubm9uLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbm5vbi5zcGVlZCA+IDApXG4gICAgICAgICAgICAgICAgICAgIGNhbm5vbi5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgICBpZiAoY2Fubm9uLmFuZ2xlIDw9IE1hdGguUEkpXG4gICAgICAgICAgICAgICAgICAgIGNhbm5vbi5zdG9wQW5nbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgIGlmIChjYW5ub24uYW5nbGUgPj0gMClcbiAgICAgICAgICAgICAgICAgICAgY2Fubm9uLnN0b3BBbmdsZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cbn0iLCJpbXBvcnQgVGFuayBmcm9tICcuL3RhbmsnO1xuaW1wb3J0IFRhbmtIYW5kbGVyIGZyb20gJy4vdGFua2hhbmRsZXInO1xuaW1wb3J0IENhbm5vbiBmcm9tICcuL2Nhbm5vbic7XG5pbXBvcnQgQ2Fubm9uSGFuZGxlciBmcm9tICcuL2Nhbm5vbmhhbmRsZXInO1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCc7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUJvYXJkXCIpO1xuXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4vLyBjdHguY2xlYXJSZWN0KDAsIDAsIDgwMCwgNjAwKTtcblxuLy8gY3R4LmZpbGxTdHlsZSA9IFwiI2YwMFwiO1xuLy8gY3R4LmZpbGxSZWN0KDIwLCAyMCwgMTAwLCAxMDApO1xuXG4vLyBjdHguZmlsbFN0eWxlID0gXCIjMDBmXCI7XG4vLyBjdHguZmlsbFJlY3QoMjQwLCAyMDAsIDUwLCA1MCk7XG5cbmNvbnN0IEdBTUVfV0lEVEggPSA4MDA7XG5jb25zdCBHQU1FX0hFSUdIVCA9IDYwMDtcblxuY29uc3QgdGFuayA9IG5ldyBUYW5rKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbm5ldyBUYW5rSGFuZGxlcih0YW5rKTtcblxuLy8gY29uc3QgY2Fubm9uID0gbmV3IENhbm5vbihHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4vLyBuZXcgQ2Fubm9uSGFuZGxlcihjYW5ub24pO1xuY29uc3QgdGFyZ2V0ID0gbmV3IFRhcmdldChHQU1FX1dJRFRILCBHQU1FX0hFSUdIVClcblxudGFuay5kcmF3KGN0eCk7XG50YXJnZXQuZHJhdyhjdHgpO1xuLy8gY2Fubm9uLmRyYXcoY3R4KTtcblxubGV0IGxhc3RUaW1lID0gMDtcblxuZnVuY3Rpb24gZ2FtZUxvb3AodGltZXN0YW1wKSB7XG4gIGxldCBkdCA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lXG4gIGxhc3RUaW1lID0gdGltZXN0YW1wO1xuXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgODAwLCA2MDApO1xuICB0YW5rLnVwZGF0ZShkdCk7XG4gIHRhbmsuZHJhdyhjdHgpO1xuICB0YXJnZXQuZHJhdyhjdHgpXG4gIC8vIGNhbm5vbi51cGRhdGUoZHQpO1xuICAvLyBjYW5ub24uZHJhdyhjdHgpO1xuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5cbmdhbWVMb29wKCk7XG5cbi8vIGNvbnN0IGRyYXcgPSAoKSA9PiB7XG4vLyAgIGRyYXdUYW5rKCk7XG4vLyAgIGRyYXdUYXJnZXQoKTtcbi8vICAgZHJhd01pc3NpbGUoKTtcbi8vIH1cbi8vIGNvbnN0IGRyYXdUYW5rID0gKCkgPT4gICB7fVxuLy8gY29uc3QgZHJhd1RhcmdldCA9ICgpID0+IHt9XG4vLyBjb25zdCBkcmF3TWlzc2lsZSA9ICgpID0+IHt9XG5cbi8vIGRyYXcoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rIHtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWVXaWR0aCwgZ2FtZUhlaWdodCkge1xuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aDtcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwOyAvL3Rhbmsgd2lkdGhcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDsgLy90YW5rIGhlaWdodFxuICAgICAgICB0aGlzLm1heFNwZWVkID0gNTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQsXG4gICAgICAgIH07IC8vIHRhbmsgcG9zaXRpb25cbiAgICAgICAgLy9jYW5ub25cbiAgICAgICAgdGhpcy50YW5rQ2VudGVyWCA9IHRoaXMucG9zaXRpb24ueCArIDAuNSAqIHRoaXMud2lkdGg7XG4gICAgICAgIHRoaXMudGFua0NlbnRlclkgPSB0aGlzLmdhbWVIZWlnaHQgLSAwLjUgKiB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZSA9IE1hdGguUEkgLyA0O1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlU3BlZWQgPSBNYXRoLlBJIC8gNjA7XG4gICAgICAgIHRoaXMuY2Fubm9uU3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmNhbm5vbkxlbmd0aCA9IHRoaXMud2lkdGggKiBNYXRoLnNxcnQoMik7XG5cbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyMwZmYnO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIpO1xuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCAvIDIgKyB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguY29zKHRoaXMuY2Fubm9uQW5nbGUpLFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMiAtIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5zaW4odGhpcy5jYW5ub25BbmdsZSkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBtb3ZlTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IC10aGlzLm1heFNwZWVkO1xuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWF4U3BlZWQ7XG4gICAgfVxuXG4gICAgbW92ZVVwKCkge1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlICs9IHRoaXMuY2Fubm9uQW5nbGVTcGVlZDtcbiAgICB9XG5cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZSArPSAtdGhpcy5jYW5ub25BbmdsZVNwZWVkO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIH1cblxuICAgIHN0b3BjYW5ub25BbmdsZSgpIHtcbiAgICAgICAgdGhpcy5jYW5ub25TcGVlZCA9IDA7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAoIWR0KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLmNhbm5vbkFuZ2xlU3BlZWQ7XG5cbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi54IDwgMCkgdGhpcy5wb3NpdGlvbi54ID0gMDtcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi54ICArIHRoaXMud2lkdGggPiB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGgvMikgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lV2lkdGggLSB0aGlzLndpZHRoICogMS41O1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yID09PSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yKSB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodFxuICAgIH1cblxufSIsImltcG9ydCBUYW5rIGZyb20gXCIuL3RhbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFua0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHRhbmspIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIHRhbmsubW92ZUxlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODogXG4gICAgICAgICAgICAgICAgICAgIHRhbmsubW92ZVVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIHRhbmsubW92ZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFuay5zcGVlZCA8IDApXG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFuay5zcGVlZCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuYW5nbGUgPD0gTWF0aC5QSSlcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wQW5nbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgIGlmICh0YW5rLmFuZ2xlID49IDApXG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3RvcEFuZ2xlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCB7XG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLnRhcmdldFdpZHRoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwICsgMzApO1xuICAgICAgICB0aGlzLnRhcmdldEhlaWdodCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCArIDEwKTtcbiAgICAgICAgdGhpcy50YXJnZXRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDQwMCAtIHRoaXMudGFyZ2V0V2lkdGgpICsgNDAwKTtcbiAgICAgICAgdGhpcy50YXJnZXRZID0gaGVpZ2h0IC0gdGhpcy50YXJnZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnRhcmdldFgsIHRoaXMudGFyZ2V0WSwgdGhpcy50YXJnZXRXaWR0aCwgdGhpcy50YXJnZXRIZWlnaHQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9