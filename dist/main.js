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
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");


var canvas = document.getElementById("gameBoard");
var ctx = canvas.getContext("2d");
var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["default"](GAME_WIDTH, GAME_HEIGHT);
game.start(); // const tank = new Tank(GAME_WIDTH, GAME_HEIGHT);
// new TankHandler(tank);
// const target = new Target(GAME_WIDTH, GAME_HEIGHT)
// tank.drawTank(ctx);
// tank.drawGuage(ctx);
// tank.drawMissile(ctx);
// target.draw(ctx);

var lastTime = 0;

function gameLoop(timestamp) {
  var dt = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 800, 600); // tank.update(dt);
  // tank.drawTank(ctx);
  // tank.drawGuage(ctx);
  // tank.drawMissile(ctx);
  // target.draw(ctx)

  game.update(dt);
  game.draw(ctx); // if (!tank.hit) {
  //   tank.drawTank(ctx);
  //   tank.drawGuage(ctx);
  //   tank.drawMissile(ctx);
  // }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
var count = 0;

function twinkle() {
  if (count === 0) {
    document.querySelector('h1').style.color = '#939597';
    count++;
  } else if (count === 1) {
    document.querySelector('h1').style.color = '#e85450';
    count++;
  } else if (count === 2) {
    document.querySelector('h1').style.color = '#a2c49b';
    count++;
  } else if (count === 3) {
    document.querySelector('h1').style.color = '#f5df4d';
    count++;
  } else {
    document.querySelector('h1').style.color = '#7bc4c4';
    count = 0;
  }
}

setInterval(twinkle, 1000);

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tank */ "./src/scripts/tank.js");
/* harmony import */ var _tankhandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tankhandler */ "./src/scripts/tankhandler.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./target */ "./src/scripts/target.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels */ "./src/scripts/levels.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Game = /*#__PURE__*/function () {
  function Game(gameWidth, gameHeight) {
    _classCallCheck(this, Game);

    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      this.tank = new _tank__WEBPACK_IMPORTED_MODULE_0__["default"](this);
      this.target = new _target__WEBPACK_IMPORTED_MODULE_2__["default"](this);
      var walls = Object(_levels__WEBPACK_IMPORTED_MODULE_3__["buildLevel"])(this, _levels__WEBPACK_IMPORTED_MODULE_3__["level1"]);
      this.gameObjects = [this.tank, this.target].concat(_toConsumableArray(walls));
      new _tankhandler__WEBPACK_IMPORTED_MODULE_1__["default"](this.tank);
    }
  }, {
    key: "update",
    value: function update(dt) {
      this.gameObjects.forEach(function (object) {
        return object.update(dt);
      });
      this.gameObjects = this.gameObjects.filter(function (object) {
        return !object.markedForDeletion;
      });
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.tank.draw(ctx);
      this.tank.drawGuage(ctx);
      this.tank.drawMissile(ctx);
      this.gameObjects.forEach(function (object) {
        return object.draw(ctx);
      });
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/scripts/levels.js":
/*!*******************************!*\
  !*** ./src/scripts/levels.js ***!
  \*******************************/
/*! exports provided: buildLevel, level1, level2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLevel", function() { return buildLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "level1", function() { return level1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "level2", function() { return level2; });
/* harmony import */ var _wall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall */ "./src/scripts/wall.js");

function buildLevel(game, level) {
  var walls = [];
  level.forEach(function (row, rowIndex) {
    row.forEach(function (wall, wallIndex) {
      if (wall === 1) {
        var position = {
          x: 375 - 50 * rowIndex,
          y: 550 - 50 * wallIndex
        };
        walls.push(new _wall__WEBPACK_IMPORTED_MODULE_0__["default"](game, position));
      }
    });
  });
  return walls;
}
var level1 = [[1, 1, 0, 0, 0, 0, 0, 0, 0]];
var level2 = [[1, 0, 0, 0, 0, 0, 0, 0, 0]];

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
  function Tank(game) {
    _classCallCheck(this, Tank);

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight; //tank

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

    this.missileX = this.position.x + this.width / 2 + this.cannonLength * Math.cos(this.cannonAngle), this.missileY = this.position.y + this.height / 2 - this.cannonLength * Math.sin(this.cannonAngle);
    this.missileRadius = 10;
    this.missileDx = this.gauge * Math.cos(this.cannonAngle);
    this.missileDy = this.gauge * Math.sin(this.cannonAngle);
    this.gravity = 0.0981;
    this.charging = false;
    this.fire = false;
    this.hit = false;
    this.game = game;
  }

  _createClass(Tank, [{
    key: "draw",
    value: function draw(ctx) {
      //tank
      ctx.fillStyle = '#a2c49b';
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
      ctx.fillStyle = "#e85450";
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
      if (this.position.x + this.width > this.gameWidth / 2 - this.width * 1.5) this.position.x = this.gameWidth / 2 - this.width * 2.5;
      if (this.position.y + this.height / 2 === this.position.y + this.height / 2) this.position.y = this.gameHeight - this.height; //guage

      if (this.gauge > Math.PI * 2) {
        this.gauge = Math.PI * 2;
      } //missile wall on left/right/top/bottom


      if (this.missileX - this.missileRadius < 0 || this.missileX + this.missileRadius > this.gameWidth || this.missileY < 0 || this.missileY + this.missileRadius > this.gameHeight) {
        this.fire = false;
        console.log(this.missileX);
      } //missile hitting obejct


      if (this.missileX >= this.game.target.targetX && this.missileX <= this.game.target.targetX + this.game.target.targetWidth && this.missileY >= this.game.target.targetY) {
        this.hit = true;
        this.missileX = -this.missileX;
        this.missileX = -this.missileY;
        console.log('hit object');
        clearInterval();
      }
    } // check() {
    //     if(this.missileX < 0 || this.missileX > this.gameWidth || this.missileY < 0 || this.missileY > this.gameHeight) {
    //         this.fire = false;
    //     }
    //     if (this.missileX >= this.game.targetX &&
    //         this.missileX <= this.game.targetX + this.game.targetWidth &&
    //         this.missileY >= this.game.targetY) {
    //             this.hit = true;
    //             clearInterval(start);
    //             if(confirm("You got this, want to play again?")) {
    //                 location.reload();
    //             }
    //         }
    // }

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
  function Target(game) {
    _classCallCheck(this, Target);

    this.targetWidth = Math.floor(Math.random() * 100 + 30);
    this.targetHeight = Math.floor(Math.random() * 100 + 10);
    this.targetX = Math.floor(Math.random() * (375 - this.targetWidth) + 425);
    this.targetY = game.gameHeight - this.targetHeight;
  }

  _createClass(Target, [{
    key: "update",
    value: function update() {}
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = "#7bc4c4";
      ctx.fillRect(this.targetX, this.targetY, this.targetWidth, this.targetHeight);
    }
  }]);

  return Target;
}();



/***/ }),

/***/ "./src/scripts/wall.js":
/*!*****************************!*\
  !*** ./src/scripts/wall.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wall; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Wall = /*#__PURE__*/function () {
  function Wall(game, position) {
    _classCallCheck(this, Wall);

    this.game = game;
    this.position = position;
    this.width = 50;
    this.height = 50;
    this.markedForDeletion = false;
  }

  _createClass(Wall, [{
    key: "update",
    value: function update() {
      var bottomOfMissile = this.game.tank.missileY + this.game.tank.missileRadius;
      var topOfMissile = this.game.tank.missileY;
      var topOfWall = this.position.y;
      var left = this.position.x;
      var right = this.position.x + this.width;
      var bottom = this.position.y + this.height;

      if (bottomOfMissile >= topOfWall && topOfMissile <= bottom && this.game.tank.missileX >= left && this.game.tank.missileX + this.game.tank.missileRadius <= right) {
        console.log("hit wall");
        this.game.tank.missileX = -this.game.tank.missileX;
        this.game.tank.missileX = -this.game.tank.missileY;
        this.markedForDeletion = true;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = '#939597';
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Wall;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFua2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiZ2FtZSIsIkdhbWUiLCJzdGFydCIsImxhc3RUaW1lIiwiZ2FtZUxvb3AiLCJ0aW1lc3RhbXAiLCJkdCIsImNsZWFyUmVjdCIsInVwZGF0ZSIsImRyYXciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb3VudCIsInR3aW5rbGUiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJjb2xvciIsInNldEludGVydmFsIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsInRhbmsiLCJUYW5rIiwidGFyZ2V0IiwiVGFyZ2V0Iiwid2FsbHMiLCJidWlsZExldmVsIiwibGV2ZWwxIiwiZ2FtZU9iamVjdHMiLCJUYW5rSGFuZGxlciIsImZvckVhY2giLCJvYmplY3QiLCJmaWx0ZXIiLCJtYXJrZWRGb3JEZWxldGlvbiIsImRyYXdHdWFnZSIsImRyYXdNaXNzaWxlIiwibGV2ZWwiLCJyb3ciLCJyb3dJbmRleCIsIndhbGwiLCJ3YWxsSW5kZXgiLCJwb3NpdGlvbiIsIngiLCJ5IiwicHVzaCIsIldhbGwiLCJsZXZlbDIiLCJ3aWR0aCIsImhlaWdodCIsIm1heFNwZWVkIiwic3BlZWQiLCJjYW5ub25BbmdsZSIsIk1hdGgiLCJQSSIsImNhbm5vbkFuZ2xlU3BlZWQiLCJjYW5ub25TcGVlZCIsImNhbm5vbkxlbmd0aCIsInNxcnQiLCJnYXVnZSIsImdhdWdlU3BlZWQiLCJnYXVnZUJhclJhaWR1cyIsIm1pc3NpbGVYIiwiY29zIiwibWlzc2lsZVkiLCJzaW4iLCJtaXNzaWxlUmFkaXVzIiwibWlzc2lsZUR4IiwibWlzc2lsZUR5IiwiZ3Jhdml0eSIsImNoYXJnaW5nIiwiZmlyZSIsImhpdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiYXJjIiwiZmlsbCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXRYIiwidGFyZ2V0V2lkdGgiLCJ0YXJnZXRZIiwiY2xlYXJJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleUNvZGUiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsIm1vdmVVcCIsIm1vdmVEb3duIiwic3RvcCIsInN0b3BjYW5ub25BbmdsZSIsImZsb29yIiwicmFuZG9tIiwidGFyZ2V0SGVpZ2h0IiwiYm90dG9tT2ZNaXNzaWxlIiwidG9wT2ZNaXNzaWxlIiwidG9wT2ZXYWxsIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUFld0MsUUFBZixHQUEwQixDQUFFLEtBQUszRCxJQUFMLENBQVVtQixJQUFWLENBQWUwQyxRQUEzQztBQUNBLGFBQUs5QixpQkFBTCxHQUF5QixJQUF6QjtBQUNDO0FBQ1I7Ozt5QkFFSW5DLEcsRUFBSztBQUNOQSxTQUFHLENBQUMwRSxTQUFKLEdBQWdCLFNBQWhCO0FBQ0ExRSxTQUFHLENBQUMyRSxRQUFKLENBQWEsS0FBS2hDLFFBQUwsQ0FBY0MsQ0FBM0IsRUFBOEIsS0FBS0QsUUFBTCxDQUFjRSxDQUE1QyxFQUErQyxLQUFLSSxLQUFwRCxFQUEyRCxLQUFLQyxNQUFoRTtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCTCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCJcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVCb2FyZFwiKTtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3QgR0FNRV9XSURUSCA9IDgwMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNjAwO1xuXG5sZXQgZ2FtZSA9IG5ldyBHYW1lKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbmdhbWUuc3RhcnQoKTtcbi8vIGNvbnN0IHRhbmsgPSBuZXcgVGFuayhHQU1FX1dJRFRILCBHQU1FX0hFSUdIVCk7XG4vLyBuZXcgVGFua0hhbmRsZXIodGFuayk7XG5cbi8vIGNvbnN0IHRhcmdldCA9IG5ldyBUYXJnZXQoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpXG5cbi8vIHRhbmsuZHJhd1RhbmsoY3R4KTtcbi8vIHRhbmsuZHJhd0d1YWdlKGN0eCk7XG4vLyB0YW5rLmRyYXdNaXNzaWxlKGN0eCk7XG4vLyB0YXJnZXQuZHJhdyhjdHgpO1xuXG5cbmxldCBsYXN0VGltZSA9IDA7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKHRpbWVzdGFtcCkge1xuICBsZXQgZHQgPSB0aW1lc3RhbXAgLSBsYXN0VGltZVxuICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICBjdHguY2xlYXJSZWN0KDAsIDAsIDgwMCwgNjAwKTtcbiAgXG4gIC8vIHRhbmsudXBkYXRlKGR0KTtcbiAgLy8gdGFuay5kcmF3VGFuayhjdHgpO1xuICAvLyB0YW5rLmRyYXdHdWFnZShjdHgpO1xuICAvLyB0YW5rLmRyYXdNaXNzaWxlKGN0eCk7XG4gIC8vIHRhcmdldC5kcmF3KGN0eClcbiAgZ2FtZS51cGRhdGUoZHQpO1xuICBnYW1lLmRyYXcoY3R4KTtcbiAgLy8gaWYgKCF0YW5rLmhpdCkge1xuICAvLyAgIHRhbmsuZHJhd1RhbmsoY3R4KTtcbiAgLy8gICB0YW5rLmRyYXdHdWFnZShjdHgpO1xuICAvLyAgIHRhbmsuZHJhd01pc3NpbGUoY3R4KTtcbiAgLy8gfVxuICBcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn1cblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcblxubGV0IGNvdW50ID0gMDtcblxuZnVuY3Rpb24gdHdpbmtsZSgpe1xuICBpZiAoY291bnQgPT09IDApIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyM5Mzk1OTcnO1xuICAgIGNvdW50ICsrO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjZTg1NDUwJztcbiAgICBjb3VudCArKztcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnI2EyYzQ5Yic7XG4gICAgY291bnQgKys7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDMpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyNmNWRmNGQnO1xuICAgIGNvdW50ICsrO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnIzdiYzRjNCc7XG4gICAgY291bnQgPSAwO1xuICB9XG59XG5cbnNldEludGVydmFsKHR3aW5rbGUsIDEwMDApOyIsImltcG9ydCBUYW5rIGZyb20gJy4vdGFuayc7XG5pbXBvcnQgVGFua0hhbmRsZXIgZnJvbSAnLi90YW5raGFuZGxlcic7XG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0JztcbmltcG9ydCB7IGJ1aWxkTGV2ZWwsIGxldmVsMSB9IGZyb20gJy4vbGV2ZWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWVIZWlnaHQ7ICAgIFxuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aFxuICAgIH1cbiAgICBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy50YW5rID0gbmV3IFRhbmsodGhpcyk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRhcmdldCh0aGlzKTsgIFxuICAgICAgICBcbiAgICAgICAgbGV0IHdhbGxzID0gYnVpbGRMZXZlbCh0aGlzLCBsZXZlbDEpO1xuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gW3RoaXMudGFuaywgdGhpcy50YXJnZXQsIC4uLndhbGxzXVxuXG4gICAgICAgIG5ldyBUYW5rSGFuZGxlcih0aGlzLnRhbmspO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgIHRoaXMuZ2FtZU9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnVwZGF0ZShkdCkpOyBcblxuICAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSB0aGlzLmdhbWVPYmplY3RzLmZpbHRlcihvYmplY3QgPT4gIW9iamVjdC5tYXJrZWRGb3JEZWxldGlvbilcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICB0aGlzLnRhbmsuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLnRhbmsuZHJhd0d1YWdlKGN0eCk7XG4gICAgICAgIHRoaXMudGFuay5kcmF3TWlzc2lsZShjdHgpO1xuICAgICAgICB0aGlzLmdhbWVPYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5kcmF3KGN0eCkpOyBcbiAgICB9XG59IiwiaW1wb3J0IFdhbGwgZnJvbSAnLi93YWxsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTGV2ZWwoZ2FtZSwgbGV2ZWwpIHtcbiAgICBsZXQgd2FsbHMgPSBbXTtcblxuICAgIGxldmVsLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgcm93LmZvckVhY2goKHdhbGwsIHdhbGxJbmRleCk9PntcbiAgICAgICAgICAgIGlmKHdhbGwgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDM3NSAtIDUwICogcm93SW5kZXgsIFxuICAgICAgICAgICAgICAgICAgICB5OiA1NTAgLSA1MCAqIHdhbGxJbmRleFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3YWxscy5wdXNoKG5ldyBXYWxsKGdhbWUsIHBvc2l0aW9uKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiB3YWxsc1xufVxuXG5leHBvcnQgY29uc3QgbGV2ZWwxID1bXG5bMSwxLDAsMCwwLDAsMCwwLDBdXG5dXG5cbmV4cG9ydCBjb25zdCBsZXZlbDIgPVtcblsxLDAsMCwwLDAsMCwwLDAsMF1cbl0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rIHtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lLmdhbWVXaWR0aDtcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZS5nYW1lSGVpZ2h0O1xuICAgICAgICAvL3RhbmtcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDUwO1xuICAgICAgICB0aGlzLm1heFNwZWVkID0gMTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQsXG4gICAgICAgIH07IC8vIHRhbmsgcG9zaXRpb25cbiAgICAgICAgLy9jYW5ub25cbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZSA9IE1hdGguUEkgLyA0O1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlU3BlZWQgPSBNYXRoLlBJIC8gNjA7XG4gICAgICAgIHRoaXMuY2Fubm9uU3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmNhbm5vbkxlbmd0aCA9IHRoaXMud2lkdGggKiBNYXRoLnNxcnQoMik7XG4gICAgICAgIC8vZ2F1Z2VcbiAgICAgICAgdGhpcy5nYXVnZSA9IE1hdGguUEk7XG4gICAgICAgIHRoaXMuZ2F1Z2VTcGVlZCA9IE1hdGguUEkgLyAzMDtcbiAgICAgICAgdGhpcy5nYXVnZUJhclJhaWR1cyA9IDMwO1xuICAgICAgICAvL21pc3NpbGVcbiAgICAgICAgdGhpcy5taXNzaWxlWCA9IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgvMiArIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5jb3ModGhpcy5jYW5ub25BbmdsZSksXG4gICAgICAgIHRoaXMubWlzc2lsZVkgPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yIC0gdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKVxuICAgICAgICB0aGlzLm1pc3NpbGVSYWRpdXMgPSAxMDtcbiAgICAgICAgdGhpcy5taXNzaWxlRHggPSB0aGlzLmdhdWdlICogTWF0aC5jb3ModGhpcy5jYW5ub25BbmdsZSk7XG4gICAgICAgIHRoaXMubWlzc2lsZUR5ID0gdGhpcy5nYXVnZSAqIE1hdGguc2luKHRoaXMuY2Fubm9uQW5nbGUpO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSAwLjA5ODE7XG4gICAgICAgIHRoaXMuY2hhcmdpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgLy90YW5rXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2EyYzQ5Yic7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIC8vY2Fubm9uXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLzIsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIpO1xuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aC8yICsgdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLmNvcyh0aGlzLmNhbm5vbkFuZ2xlKSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgLSB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguc2luKHRoaXMuY2Fubm9uQW5nbGUpKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7ICAgIFxuICAgIH0gXG4gICAgZHJhd0d1YWdlKGN0eCkge1xuICAgICAgICAvL2dhdWdlXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgdGhpcy5nYXVnZUJhclJhaWR1cyxcbiAgICAgICAgICAgIE1hdGguUEksXG4gICAgICAgICAgICB0aGlzLmdhdWdlLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3TWlzc2lsZShjdHgpIHtcbiAgICAgICAgLy9taXNzaWxlXG4gICAgICAgIGlmICghdGhpcy5maXJlKSB7XG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aC8yICsgdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLmNvcyh0aGlzLmNhbm5vbkFuZ2xlKSxcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yIC0gdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taXNzaWxlRHkgLT0gdGhpcy5ncmF2aXR5O1xuICAgICAgICAgICAgdGhpcy5taXNzaWxlWCArPSB0aGlzLm1pc3NpbGVEeDtcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgLT0gdGhpcy5taXNzaWxlRHk7XG4gICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWCxcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVksXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVSYWRpdXMsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgTWF0aC5QSSAqIDJcbiAgICAgICAgKVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjZTg1NDUwXCI7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKVxuICAgIH1cblxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMubWF4U3BlZWQ7XG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5tYXhTcGVlZDtcbiAgICB9XG4gICAgXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgfVxuXG4gICAgbW92ZVVwKCkge1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlICs9IHRoaXMuY2Fubm9uQW5nbGVTcGVlZDtcbiAgICB9XG5cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZSArPSAtdGhpcy5jYW5ub25BbmdsZVNwZWVkO1xuICAgIH1cblxuICAgIHN0b3BjYW5ub25BbmdsZSgpIHtcbiAgICAgICAgdGhpcy5jYW5ub25TcGVlZCA9IDA7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICghZHQpIHJldHVybjtcbiAgICAgICAgXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLmNhbm5vbkFuZ2xlU3BlZWQ7XG5cbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi54IDwgMCkgdGhpcy5wb3NpdGlvbi54ID0gMDtcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi54ICArIHRoaXMud2lkdGggPiB0aGlzLmdhbWVXaWR0aC8yIC0gdGhpcy53aWR0aCAqIDEuNSkgdGhpcy5wb3NpdGlvbi54ID0gKHRoaXMuZ2FtZVdpZHRoLzIpIC0gdGhpcy53aWR0aCAqIDIuNTtcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMiA9PT0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMikgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHRcblxuICAgICAgICAvL2d1YWdlXG4gICAgICAgIGlmKHRoaXMuZ2F1Z2UgPiBNYXRoLlBJICogMikge3RoaXMuZ2F1Z2UgPSBNYXRoLlBJICogMn0gXG5cbiAgICAgICAgLy9taXNzaWxlIHdhbGwgb24gbGVmdC9yaWdodC90b3AvYm90dG9tXG4gICAgICAgIGlmKHRoaXMubWlzc2lsZVggLSB0aGlzLm1pc3NpbGVSYWRpdXMgPCAwIHx8IHRoaXMubWlzc2lsZVggKyB0aGlzLm1pc3NpbGVSYWRpdXMgPiB0aGlzLmdhbWVXaWR0aCB8fCB0aGlzLm1pc3NpbGVZIDwgMCB8fCB0aGlzLm1pc3NpbGVZICsgdGhpcy5taXNzaWxlUmFkaXVzID4gdGhpcy5nYW1lSGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWlzc2lsZVgpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vbWlzc2lsZSBoaXR0aW5nIG9iZWpjdFxuICAgICAgICAgaWYgKHRoaXMubWlzc2lsZVggPj0gdGhpcy5nYW1lLnRhcmdldC50YXJnZXRYICYmXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYIDw9IHRoaXMuZ2FtZS50YXJnZXQudGFyZ2V0WCArIHRoaXMuZ2FtZS50YXJnZXQudGFyZ2V0V2lkdGggJiZcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgPj0gdGhpcy5nYW1lLnRhcmdldC50YXJnZXRZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2lsZVggPSAtIHRoaXMubWlzc2lsZVg7XG4gICAgICAgICAgICAgICAgdGhpcy5taXNzaWxlWCA9IC0gdGhpcy5taXNzaWxlWTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGl0IG9iamVjdCcpXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCgpO1xuICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBjaGVjaygpIHtcbiAgICAvLyAgICAgaWYodGhpcy5taXNzaWxlWCA8IDAgfHwgdGhpcy5taXNzaWxlWCA+IHRoaXMuZ2FtZVdpZHRoIHx8IHRoaXMubWlzc2lsZVkgPCAwIHx8IHRoaXMubWlzc2lsZVkgPiB0aGlzLmdhbWVIZWlnaHQpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0aGlzLm1pc3NpbGVYID49IHRoaXMuZ2FtZS50YXJnZXRYICYmXG4gICAgLy8gICAgICAgICB0aGlzLm1pc3NpbGVYIDw9IHRoaXMuZ2FtZS50YXJnZXRYICsgdGhpcy5nYW1lLnRhcmdldFdpZHRoICYmXG4gICAgLy8gICAgICAgICB0aGlzLm1pc3NpbGVZID49IHRoaXMuZ2FtZS50YXJnZXRZKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3RhcnQpO1xuICAgIC8vICAgICAgICAgICAgIGlmKGNvbmZpcm0oXCJZb3UgZ290IHRoaXMsIHdhbnQgdG8gcGxheSBhZ2Fpbj9cIikpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IodGFuaykge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OiBcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgICB0YW5rLmNoYXJnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFuay5nYXVnZSArPSB0YW5rLmdhdWdlU3BlZWRcbiAgICAgICAgICAgICAgICAgICAgdGFuay5taXNzaWxlRHggPSB0YW5rLmdhdWdlICogMS41ICogTWF0aC5jb3ModGFuay5jYW5ub25BbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRhbmsubWlzc2lsZUR5ID0gdGFuay5nYXVnZSAqIDEuNSAqIE1hdGguc2luKHRhbmsuY2Fubm9uQW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YW5rLnNwZWVkIDwgMClcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YW5rLnNwZWVkID4gMClcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YW5rLmNhbm5vbkFuZ2xlID49MCApXG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3RvcGNhbm5vbkFuZ2xlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YW5rLmNhbm5vbkFuZ2xlIDw9IE1hdGguUEkpXG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3RvcGNhbm5vbkFuZ2xlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuY2hhcmdpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGFuay5maXJlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFuay5nYXVnZSA9IE1hdGguUEk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLnRhcmdldFdpZHRoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwICsgMzApO1xuICAgICAgICB0aGlzLnRhcmdldEhlaWdodCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCArIDEwKTtcbiAgICAgICAgdGhpcy50YXJnZXRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDM3NSAtIHRoaXMudGFyZ2V0V2lkdGgpICsgNDI1KTtcbiAgICAgICAgdGhpcy50YXJnZXRZID0gZ2FtZS5nYW1lSGVpZ2h0IC0gdGhpcy50YXJnZXRIZWlnaHQ7XG4gICAgfVxuICAgIHVwZGF0ZSgpe31cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjN2JjNGM0XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnRhcmdldFgsIHRoaXMudGFyZ2V0WSwgdGhpcy50YXJnZXRXaWR0aCwgdGhpcy50YXJnZXRIZWlnaHQpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBwb3NpdGlvbikge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDUwO1xuICAgICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBsZXQgYm90dG9tT2ZNaXNzaWxlID0gdGhpcy5nYW1lLnRhbmsubWlzc2lsZVkgKyB0aGlzLmdhbWUudGFuay5taXNzaWxlUmFkaXVzO1xuICAgICAgICBsZXQgdG9wT2ZNaXNzaWxlID0gdGhpcy5nYW1lLnRhbmsubWlzc2lsZVk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdG9wT2ZXYWxsID0gdGhpcy5wb3NpdGlvbi55O1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucG9zaXRpb24ueDtcbiAgICAgICAgbGV0IHJpZ2h0ID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aDtcbiAgICAgICAgbGV0IGJvdHRvbSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0O1xuICAgICAgICBpZiAoYm90dG9tT2ZNaXNzaWxlID49IHRvcE9mV2FsbCAmJiB0b3BPZk1pc3NpbGUgPD0gYm90dG9tICYmIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVYID49IGxlZnQgJiYgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVggKyB0aGlzLmdhbWUudGFuay5taXNzaWxlUmFkaXVzIDw9IHJpZ2h0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpdCB3YWxsXCIpXG4gICAgICAgICAgICB0aGlzLmdhbWUudGFuay5taXNzaWxlWCA9IC0gdGhpcy5nYW1lLnRhbmsubWlzc2lsZVg7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGFuay5taXNzaWxlWCA9IC0gdGhpcy5nYW1lLnRhbmsubWlzc2lsZVk7XG4gICAgICAgICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjOTM5NTk3JztcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=