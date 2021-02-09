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
/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tank */ "./src/tank.js");
/* harmony import */ var _tankhandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tankhandler */ "./src/tankhandler.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./target */ "./src/target.js");



var canvas = document.getElementById("gameBoard");
var ctx = canvas.getContext("2d"); // ctx.clearRect(0, 0, 800, 600);
// ctx.fillStyle = "#f00";
// ctx.fillRect(20, 20, 100, 100);
// ctx.fillStyle = "#00f";
// ctx.fillRect(240, 200, 50, 50);

var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var tank = new _tank__WEBPACK_IMPORTED_MODULE_0__["default"](GAME_WIDTH, GAME_HEIGHT);
new _tankhandler__WEBPACK_IMPORTED_MODULE_1__["default"](tank);
var target = new _target__WEBPACK_IMPORTED_MODULE_2__["default"](GAME_WIDTH, GAME_HEIGHT);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90YW5rLmpzIiwid2VicGFjazovLy8uL3NyYy90YW5raGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFyZ2V0LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwidGFuayIsIlRhbmsiLCJUYW5rSGFuZGxlciIsInRhcmdldCIsIlRhcmdldCIsImRyYXciLCJsYXN0VGltZSIsImdhbWVMb29wIiwidGltZXN0YW1wIiwiZHQiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJnYW1lV2lkdGgiLCJnYW1lSGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXhTcGVlZCIsInNwZWVkIiwicG9zaXRpb24iLCJ4IiwieSIsInRhbmtDZW50ZXJYIiwidGFua0NlbnRlclkiLCJjYW5ub25BbmdsZSIsIk1hdGgiLCJQSSIsImNhbm5vbkFuZ2xlU3BlZWQiLCJjYW5ub25TcGVlZCIsImNhbm5vbkxlbmd0aCIsInNxcnQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNvcyIsInNpbiIsInN0cm9rZSIsImNsb3NlUGF0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleUNvZGUiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsIm1vdmVVcCIsIm1vdmVEb3duIiwic3RvcCIsImFuZ2xlIiwic3RvcEFuZ2xlIiwidGFyZ2V0V2lkdGgiLCJmbG9vciIsInJhbmRvbSIsInRhcmdldEhlaWdodCIsInRhcmdldFgiLCJ0YXJnZXRZIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QixJQUFJLENBQUMwQixLQUFMLENBQVcxQixJQUFJLENBQUMyQixNQUFMLEtBQWdCLEdBQWhCLEdBQXNCLEVBQWpDLENBQXBCO0FBQ0EsU0FBS0UsT0FBTCxHQUFlN0IsSUFBSSxDQUFDMEIsS0FBTCxDQUFXMUIsSUFBSSxDQUFDMkIsTUFBTCxNQUFpQixNQUFNLEtBQUtGLFdBQTVCLElBQTJDLEdBQXRELENBQWY7QUFDQSxTQUFLSyxPQUFMLEdBQWV2QyxNQUFNLEdBQUcsS0FBS3FDLFlBQTdCO0FBQ0g7Ozs7eUJBRUl6RCxHLEVBQUs7QUFDTkEsU0FBRyxDQUFDbUMsU0FBSixHQUFnQixLQUFoQjtBQUNBbkMsU0FBRyxDQUFDb0MsUUFBSixDQUFhLEtBQUtzQixPQUFsQixFQUEyQixLQUFLQyxPQUFoQyxFQUF5QyxLQUFLTCxXQUE5QyxFQUEyRCxLQUFLRyxZQUFoRTtBQUNIIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBUYW5rIGZyb20gJy4vdGFuayc7XG5pbXBvcnQgVGFua0hhbmRsZXIgZnJvbSAnLi90YW5raGFuZGxlcic7XG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0JztcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lQm9hcmRcIik7XG5cbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbi8vIGN0eC5jbGVhclJlY3QoMCwgMCwgODAwLCA2MDApO1xuXG4vLyBjdHguZmlsbFN0eWxlID0gXCIjZjAwXCI7XG4vLyBjdHguZmlsbFJlY3QoMjAsIDIwLCAxMDAsIDEwMCk7XG5cbi8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMGZcIjtcbi8vIGN0eC5maWxsUmVjdCgyNDAsIDIwMCwgNTAsIDUwKTtcblxuY29uc3QgR0FNRV9XSURUSCA9IDgwMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNjAwO1xuXG5jb25zdCB0YW5rID0gbmV3IFRhbmsoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xubmV3IFRhbmtIYW5kbGVyKHRhbmspO1xuXG5jb25zdCB0YXJnZXQgPSBuZXcgVGFyZ2V0KEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKVxuXG50YW5rLmRyYXcoY3R4KTtcbnRhcmdldC5kcmF3KGN0eCk7XG5cblxubGV0IGxhc3RUaW1lID0gMDtcblxuZnVuY3Rpb24gZ2FtZUxvb3AodGltZXN0YW1wKSB7XG4gIGxldCBkdCA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lXG4gIGxhc3RUaW1lID0gdGltZXN0YW1wO1xuXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgODAwLCA2MDApO1xuICB0YW5rLnVwZGF0ZShkdCk7XG4gIHRhbmsuZHJhdyhjdHgpO1xuICB0YXJnZXQuZHJhdyhjdHgpXG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn1cblxuZ2FtZUxvb3AoKTtcblxuLy8gY29uc3QgZHJhdyA9ICgpID0+IHtcbi8vICAgZHJhd1RhbmsoKTtcbi8vICAgZHJhd1RhcmdldCgpO1xuLy8gICBkcmF3TWlzc2lsZSgpO1xuLy8gfVxuLy8gY29uc3QgZHJhd1RhbmsgPSAoKSA9PiAgIHt9XG4vLyBjb25zdCBkcmF3VGFyZ2V0ID0gKCkgPT4ge31cbi8vIGNvbnN0IGRyYXdNaXNzaWxlID0gKCkgPT4ge31cblxuLy8gZHJhdygpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhbmsge1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZVdpZHRoO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gNTA7IC8vdGFuayB3aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IDUwOyAvL3RhbmsgaGVpZ2h0XG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSA1O1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCxcbiAgICAgICAgfTsgLy8gdGFuayBwb3NpdGlvblxuICAgICAgICAvL2Nhbm5vblxuICAgICAgICB0aGlzLnRhbmtDZW50ZXJYID0gdGhpcy5wb3NpdGlvbi54ICsgMC41ICogdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy50YW5rQ2VudGVyWSA9IHRoaXMuZ2FtZUhlaWdodCAtIDAuNSAqIHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlID0gTWF0aC5QSSAvIDQ7XG4gICAgICAgIHRoaXMuY2Fubm9uQW5nbGVTcGVlZCA9IE1hdGguUEkgLyA2MDtcbiAgICAgICAgdGhpcy5jYW5ub25TcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuY2Fubm9uTGVuZ3RoID0gdGhpcy53aWR0aCAqIE1hdGguc3FydCgyKTtcblxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzBmZic7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMik7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIC8gMiArIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5jb3ModGhpcy5jYW5ub25BbmdsZSksXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yIC0gdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMubWF4U3BlZWQ7XG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5tYXhTcGVlZDtcbiAgICB9XG5cbiAgICBtb3ZlVXAoKSB7XG4gICAgICAgIHRoaXMuY2Fubm9uQW5nbGUgKz0gdGhpcy5jYW5ub25BbmdsZVNwZWVkO1xuICAgIH1cblxuICAgIG1vdmVEb3duKCkge1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlICs9IC10aGlzLmNhbm5vbkFuZ2xlU3BlZWQ7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgfVxuXG4gICAgc3RvcGNhbm5vbkFuZ2xlKCkge1xuICAgICAgICB0aGlzLmNhbm5vblNwZWVkID0gMDtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICghZHQpIHJldHVybjtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuY2Fubm9uQW5nbGVTcGVlZDtcblxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggPCAwKSB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggICsgdGhpcy53aWR0aCA+IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aC8yKSB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGggKiAxLjU7XG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgPT09IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIpIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0XG4gICAgfVxuXG59IiwiaW1wb3J0IFRhbmsgZnJvbSBcIi4vdGFua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IodGFuaykge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OiBcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YW5rLnNwZWVkIDwgMClcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YW5rLnNwZWVkID4gMClcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgICBpZiAodGFuay5hbmdsZSA8PSBNYXRoLlBJKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3BBbmdsZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuYW5nbGUgPj0gMClcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wQW5nbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0V2lkdGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgKyAzMCk7XG4gICAgICAgIHRoaXMudGFyZ2V0SGVpZ2h0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwICsgMTApO1xuICAgICAgICB0aGlzLnRhcmdldFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNDAwIC0gdGhpcy50YXJnZXRXaWR0aCkgKyA0MDApO1xuICAgICAgICB0aGlzLnRhcmdldFkgPSBoZWlnaHQgLSB0aGlzLnRhcmdldEhlaWdodDtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMudGFyZ2V0WCwgdGhpcy50YXJnZXRZLCB0aGlzLnRhcmdldFdpZHRoLCB0aGlzLnRhcmdldEhlaWdodCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=