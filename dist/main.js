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
var ctx = canvas.getContext("2d");
var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var tank = new _scripts_tank__WEBPACK_IMPORTED_MODULE_1__["default"](GAME_WIDTH, GAME_HEIGHT);
new _scripts_tankhandler__WEBPACK_IMPORTED_MODULE_2__["default"](tank);
var target = new _scripts_target__WEBPACK_IMPORTED_MODULE_3__["default"](GAME_WIDTH, GAME_HEIGHT);
tank.drawTank(ctx);
tank.drawGuage(ctx);
tank.drawMissile(ctx);
target.draw(ctx);
var lastTime = 0;

function gameLoop(timestamp) {
  var dt = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 800, 600);
  tank.update(dt);
  tank.drawTank(ctx);
  tank.drawGuage(ctx);
  tank.drawMissile(ctx);
  target.draw(ctx);
  requestAnimationFrame(gameLoop);
}

gameLoop();

function twinkle() {
  if (flag === 0) {
    document.querySelector('h1').style.color = '#d6806e';
    flag++;
  } else if (flag === 1) {
    document.querySelector('h1').style.color = '#fbb666';
    flag++;
  } else if (flag === 2) {
    document.querySelector('h1').style.color = '#f9f871';
    flag++;
  } else {
    document.querySelector('h1').style.color = '#f2ecff';
    flag = 0;
  }
}

setInterval(twinkle, 1000);

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
    this.missileDx = this.gauge * Math.cos(this.cannonAngle);
    this.missileDy = this.gauge * Math.sin(this.cannonAngle);
    this.gravity = 0.0981;
    this.charging = false;
    this.fire = false;
    this.hit = false;
  }

  _createClass(Tank, [{
    key: "drawTank",
    value: function drawTank(ctx) {
      //tank
      ctx.fillStyle = '#0ff';
      ctx.fillRect(this.position.x, this.gameHeight - this.height, this.width, this.height); //cannon

      ctx.beginPath();
      ctx.moveTo(this.position.x + this.width / 2, this.position.y + this.height / 2);
      ctx.lineTo(this.position.x + this.width / 2 + this.cannonLength * Math.cos(this.cannonAngle), this.position.y + this.height / 2 - this.cannonLength * Math.sin(this.cannonAngle));
      ctx.stroke();
      ctx.closePath();
    }
  }, {
    key: "drawGuage",
    value: function drawGuage(ctx) {
      //gauge
      ctx.beginPath();
      ctx.arc(this.position.x + this.width / 2, this.position.y - this.height / 2, this.gaugeBarRaidus, Math.PI, this.gauge, false);
      ctx.stroke();
    }
  }, {
    key: "drawMissile",
    value: function drawMissile(ctx) {
      //missile
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
      if (this.position.y + this.height / 2 === this.position.y + this.height / 2) this.position.y = this.gameHeight - this.height; //guage

      if (this.gauge > Math.PI * 2) {
        this.gauge = Math.PI * 2;
      } //missile


      if (this.missileX < 0 || this.missileX > this.gameWidth || this.missileY < 0 || this.missileY > this.gameHeight) {
        this.fire = false;
      }
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
        tank.missileDx = tank.gauge * 1.2 * Math.cos(tank.cannonAngle);
        tank.missileDy = tank.gauge * 1.2 * Math.sin(tank.cannonAngle);
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
        tank.gauge = Math.PI;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFua2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsInRhbmsiLCJUYW5rIiwiVGFua0hhbmRsZXIiLCJ0YXJnZXQiLCJUYXJnZXQiLCJkcmF3VGFuayIsImRyYXdHdWFnZSIsImRyYXdNaXNzaWxlIiwiZHJhdyIsImxhc3RUaW1lIiwiZ2FtZUxvb3AiLCJ0aW1lc3RhbXAiLCJkdCIsImNsZWFyUmVjdCIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInR3aW5rbGUiLCJmbGFnIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiY29sb3IiLCJzZXRJbnRlcnZhbCIsImdhbWVXaWR0aCIsImdhbWVIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsIm1heFNwZWVkIiwic3BlZWQiLCJwb3NpdGlvbiIsIngiLCJ5IiwiY2Fubm9uQW5nbGUiLCJNYXRoIiwiUEkiLCJjYW5ub25BbmdsZVNwZWVkIiwiY2Fubm9uU3BlZWQiLCJjYW5ub25MZW5ndGgiLCJzcXJ0IiwiZ2F1Z2UiLCJnYXVnZVNwZWVkIiwiZ2F1Z2VCYXJSYWlkdXMiLCJtaXNzaWxlUmFkaXVzIiwibWlzc2lsZUR4IiwiY29zIiwibWlzc2lsZUR5Iiwic2luIiwiZ3Jhdml0eSIsImNoYXJnaW5nIiwiZmlyZSIsImhpdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiYXJjIiwibWlzc2lsZVgiLCJtaXNzaWxlWSIsImZpbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXlDb2RlIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJtb3ZlVXAiLCJtb3ZlRG93biIsInN0b3AiLCJzdG9wY2Fubm9uQW5nbGUiLCJ0YXJnZXRXaWR0aCIsImZsb29yIiwicmFuZG9tIiwidGFyZ2V0SGVpZ2h0IiwidGFyZ2V0WCIsInRhcmdldFkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFmO0FBRUEsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUVBLElB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YU4sSUFBSSxDQUFDQyxFQUFsQjtBQUNBO0FBckJSO0FBdUJILEdBeEJEO0FBeUJILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRGdCN0IsTTtBQUNqQixrQkFBWW9CLEtBQVosRUFBbUJDLE1BQW5CLEVBQTJCO0FBQUE7O0FBQ3ZCLFNBQUs2QyxXQUFMLEdBQW1CdEMsSUFBSSxDQUFDdUMsS0FBTCxDQUFXdkMsSUFBSSxDQUFDd0MsTUFBTCxLQUFnQixHQUFoQixHQUFzQixFQUFqQyxDQUFuQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0J6QyxJQUFJLENBQUN1QyxLQUFMLENBQVd2QyxJQUFJLENBQUN3QyxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCLEVBQWpDLENBQXBCO0FBQ0EsU0FBS0UsT0FBTCxHQUFlMUMsSUFBSSxDQUFDdUMsS0FBTCxDQUFXdkMsSUFBSSxDQUFDd0MsTUFBTCxNQUFpQixNQUFNLEtBQUtGLFdBQTVCLElBQTJDLEdBQXRELENBQWY7QUFDQSxTQUFLSyxPQUFMLEdBQWVsRCxNQUFNLEdBQUcsS0FBS2dELFlBQTdCO0FBQ0g7Ozs7eUJBRUk3RSxHLEVBQUs7QUFDTkEsU0FBRyxDQUFDc0QsU0FBSixHQUFnQixLQUFoQjtBQUNBdEQsU0FBRyxDQUFDdUQsUUFBSixDQUFhLEtBQUt1QixPQUFsQixFQUEyQixLQUFLQyxPQUFoQyxFQUF5QyxLQUFLTCxXQUE5QyxFQUEyRCxLQUFLRyxZQUFoRTtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hMLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIlxuaW1wb3J0IFRhbmsgZnJvbSAnLi9zY3JpcHRzL3RhbmsnO1xuaW1wb3J0IFRhbmtIYW5kbGVyIGZyb20gJy4vc2NyaXB0cy90YW5raGFuZGxlcic7XG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vc2NyaXB0cy90YXJnZXQnO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVCb2FyZFwiKTtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3QgR0FNRV9XSURUSCA9IDgwMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNjAwO1xuXG5jb25zdCB0YW5rID0gbmV3IFRhbmsoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xubmV3IFRhbmtIYW5kbGVyKHRhbmspO1xuXG5jb25zdCB0YXJnZXQgPSBuZXcgVGFyZ2V0KEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKVxuXG50YW5rLmRyYXdUYW5rKGN0eCk7XG50YW5rLmRyYXdHdWFnZShjdHgpO1xudGFuay5kcmF3TWlzc2lsZShjdHgpO1xudGFyZ2V0LmRyYXcoY3R4KTtcblxuXG5sZXQgbGFzdFRpbWUgPSAwO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCh0aW1lc3RhbXApIHtcbiAgbGV0IGR0ID0gdGltZXN0YW1wIC0gbGFzdFRpbWVcbiAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCA4MDAsIDYwMCk7XG4gIFxuICB0YW5rLnVwZGF0ZShkdCk7XG4gIHRhbmsuZHJhd1RhbmsoY3R4KTtcbiAgdGFuay5kcmF3R3VhZ2UoY3R4KTtcbiAgdGFuay5kcmF3TWlzc2lsZShjdHgpO1xuICB0YXJnZXQuZHJhdyhjdHgpXG4gIFxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuXG5nYW1lTG9vcCgpO1xuXG5mdW5jdGlvbiB0d2lua2xlKCl7XG4gIGlmIChmbGFnID09PSAwKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjZDY4MDZlJztcbiAgICBmbGFnICsrO1xuICB9IGVsc2UgaWYoZmxhZyA9PT0gMSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnI2ZiYjY2Nic7XG4gICAgZmxhZyArKztcbiAgfWVsc2UgaWYoZmxhZyA9PT0gMil7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjZjlmODcxJztcbiAgICBmbGFnICsrO1xuICB9ZWxzZXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyNmMmVjZmYnO1xuICAgIGZsYWcgPSAwO1xuICB9XG59XG5cbnNldEludGVydmFsKHR3aW5rbGUsIDEwMDApOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhbmsge1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZVdpZHRoO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0O1xuICAgICAgICAvL3RhbmtcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDUwO1xuICAgICAgICB0aGlzLm1heFNwZWVkID0gMTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQsXG4gICAgICAgIH07IC8vIHRhbmsgcG9zaXRpb25cbiAgICAgICAgLy9jYW5ub25cbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZSA9IE1hdGguUEkgLyA0O1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlU3BlZWQgPSBNYXRoLlBJIC8gNjA7XG4gICAgICAgIHRoaXMuY2Fubm9uU3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmNhbm5vbkxlbmd0aCA9IHRoaXMud2lkdGggKiBNYXRoLnNxcnQoMik7XG4gICAgICAgIC8vZ2F1Z2VcbiAgICAgICAgdGhpcy5nYXVnZSA9IE1hdGguUEk7XG4gICAgICAgIHRoaXMuZ2F1Z2VTcGVlZCA9IE1hdGguUEkgLyAzMDtcbiAgICAgICAgdGhpcy5nYXVnZUJhclJhaWR1cyA9IDMwO1xuICAgICAgICAvL21pc3NpbGVcbiAgICAgICAgdGhpcy5taXNzaWxlUmFkaXVzID0gMTA7XG4gICAgICAgIHRoaXMubWlzc2lsZUR4ID0gdGhpcy5nYXVnZSAqIE1hdGguY29zKHRoaXMuY2Fubm9uQW5nbGUpO1xuICAgICAgICB0aGlzLm1pc3NpbGVEeSA9IHRoaXMuZ2F1Z2UgKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKTtcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gMC4wOTgxO1xuICAgICAgICB0aGlzLmNoYXJnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRyYXdUYW5rKGN0eCkge1xuICAgICAgICAvL3RhbmtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMGZmJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgLy9jYW5ub25cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgvMiwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMik7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLzIgKyB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguY29zKHRoaXMuY2Fubm9uQW5nbGUpLFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMiAtIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5zaW4odGhpcy5jYW5ub25BbmdsZSkpO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTsgICAgXG4gICAgfSBcbiAgICBkcmF3R3VhZ2UoY3R4KSB7XG4gICAgICAgIC8vZ2F1Z2VcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAvIDIsXG4gICAgICAgICAgICB0aGlzLmdhdWdlQmFyUmFpZHVzLFxuICAgICAgICAgICAgTWF0aC5QSSxcbiAgICAgICAgICAgIHRoaXMuZ2F1Z2UsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXdNaXNzaWxlKGN0eCkge1xuICAgICAgICAvL21pc3NpbGVcbiAgICAgICAgaWYgKCF0aGlzLmZpcmUpIHtcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVggPSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLzIgKyB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguY29zKHRoaXMuY2Fubm9uQW5nbGUpLFxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgLSB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguc2luKHRoaXMuY2Fubm9uQW5nbGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVEeSAtPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYICs9IHRoaXMubWlzc2lsZUR4O1xuICAgICAgICAgICAgdGhpcy5taXNzaWxlWSAtPSB0aGlzLm1pc3NpbGVEeTtcbiAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYLFxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWSxcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVJhZGl1cyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBNYXRoLlBJICogMlxuICAgICAgICApXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAtdGhpcy5tYXhTcGVlZDtcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkO1xuICAgIH1cbiAgICBcbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB9XG5cbiAgICBtb3ZlVXAoKSB7XG4gICAgICAgIHRoaXMuY2Fubm9uQW5nbGUgKz0gdGhpcy5jYW5ub25BbmdsZVNwZWVkO1xuICAgIH1cblxuICAgIG1vdmVEb3duKCkge1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlICs9IC10aGlzLmNhbm5vbkFuZ2xlU3BlZWQ7XG4gICAgfVxuXG4gICAgc3RvcGNhbm5vbkFuZ2xlKCkge1xuICAgICAgICB0aGlzLmNhbm5vblNwZWVkID0gMDtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKCFkdCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5jYW5ub25BbmdsZVNwZWVkO1xuXG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueCA8IDApIHRoaXMucG9zaXRpb24ueCA9IDA7XG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueCAgKyB0aGlzLndpZHRoID4gdGhpcy5nYW1lV2lkdGgvMiAtIHRoaXMud2lkdGgvMikgdGhpcy5wb3NpdGlvbi54ID0gKHRoaXMuZ2FtZVdpZHRoLzIpIC0gdGhpcy53aWR0aCAqIDEuNTtcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMiA9PT0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMikgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHRcblxuICAgICAgICAvL2d1YWdlXG4gICAgICAgIGlmKHRoaXMuZ2F1Z2UgPiBNYXRoLlBJICogMikge3RoaXMuZ2F1Z2UgPSBNYXRoLlBJICogMn0gXG5cbiAgICAgICAgLy9taXNzaWxlXG4gICAgICAgIGlmKHRoaXMubWlzc2lsZVggPCAwIHx8IHRoaXMubWlzc2lsZVggPiB0aGlzLmdhbWVXaWR0aCB8fCB0aGlzLm1pc3NpbGVZIDwgMCB8fCB0aGlzLm1pc3NpbGVZID4gdGhpcy5nYW1lSGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhbmtIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0YW5rKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIHRhbmsubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6IFxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVVcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVEb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuY2hhcmdpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YW5rLmdhdWdlICs9IHRhbmsuZ2F1Z2VTcGVlZFxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1pc3NpbGVEeCA9IHRhbmsuZ2F1Z2UgKiAxLjIgKiBNYXRoLmNvcyh0YW5rLmNhbm5vbkFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgdGFuay5taXNzaWxlRHkgPSB0YW5rLmdhdWdlICogMS4yICogTWF0aC5zaW4odGFuay5jYW5ub25BbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuc3BlZWQgPCAwKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuc3BlZWQgPiAwKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuY2Fubm9uQW5nbGUgPj0wIClcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wY2Fubm9uQW5nbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuY2Fubm9uQW5nbGUgPD0gTWF0aC5QSSlcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wY2Fubm9uQW5nbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5jaGFyZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0YW5rLmZpcmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YW5rLmdhdWdlID0gTWF0aC5QSTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0V2lkdGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgKyAzMCk7XG4gICAgICAgIHRoaXMudGFyZ2V0SGVpZ2h0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwICsgMTApO1xuICAgICAgICB0aGlzLnRhcmdldFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNDAwIC0gdGhpcy50YXJnZXRXaWR0aCkgKyA0MDApO1xuICAgICAgICB0aGlzLnRhcmdldFkgPSBoZWlnaHQgLSB0aGlzLnRhcmdldEhlaWdodDtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMudGFyZ2V0WCwgdGhpcy50YXJnZXRZLCB0aGlzLnRhcmdldFdpZHRoLCB0aGlzLnRhcmdldEhlaWdodCk7XG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=