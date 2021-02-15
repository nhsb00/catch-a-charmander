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
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.scss */ "./src/styles/reset.scss");
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");



var canvas = document.getElementById("gameBoard");
var ctx = canvas.getContext("2d");
var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_2__["default"](GAME_WIDTH, GAME_HEIGHT, ctx);
var button = document.getElementById('restart');
button.addEventListener('click', function (e) {
  game.restart();
});
var instruction = document.getElementById("instruction");
var modal = document.getElementById("modal");
instruction.addEventListener('click', function (e) {
  modal.style.display = "block";
});
modal.addEventListener('click', function (e) {
  modal.style.display = "none";
});
var lastTime = 0;

function gameLoop(timestamp) {
  var dt = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 800, 600);
  game.update(dt);
  game.draw(ctx);
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

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: GAMESTATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAMESTATE", function() { return GAMESTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tank */ "./src/scripts/tank.js");
/* harmony import */ var _tankhandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tankhandler */ "./src/scripts/tankhandler.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./target */ "./src/scripts/target.js");
/* harmony import */ var _stages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stages */ "./src/scripts/stages.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var GAMESTATE = {
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWSTAGE: 4
};

var Game = /*#__PURE__*/function () {
  function Game(gameWidth, gameHeight, ctx) {
    _classCallCheck(this, Game);

    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.gamestate = GAMESTATE.MENU;
    this.ctx = ctx;
    this.tank = new _tank__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    this.target = new _target__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.gameObjects = [];
    this.walls = [];
    this.attempts = 0;
    this.attemptsCount = document.getElementById('attempts');
    this.maxAttempts = 10;
    this.stages = [_stages__WEBPACK_IMPORTED_MODULE_3__["stage0"], _stages__WEBPACK_IMPORTED_MODULE_3__["stage1"], _stages__WEBPACK_IMPORTED_MODULE_3__["stage2"], _stages__WEBPACK_IMPORTED_MODULE_3__["stage3"], _stages__WEBPACK_IMPORTED_MODULE_3__["stage4"], _stages__WEBPACK_IMPORTED_MODULE_3__["stage5"], _stages__WEBPACK_IMPORTED_MODULE_3__["stage6"], _stages__WEBPACK_IMPORTED_MODULE_3__["stage7"], _stages__WEBPACK_IMPORTED_MODULE_3__["stage8"], _stages__WEBPACK_IMPORTED_MODULE_3__["stage9"], _stages__WEBPACK_IMPORTED_MODULE_3__["stage10"]];
    this.currentStage = 0;
    this.currentStageCount = document.getElementById("stage");
    new _tankhandler__WEBPACK_IMPORTED_MODULE_1__["default"](this.tank, this);
    this.image5 = document.getElementById("start");
    this.image6 = document.getElementById("gameover");
    this.image7 = document.getElementById("newstage");
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      if (this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWSTAGE) return;
      this.target = new _target__WEBPACK_IMPORTED_MODULE_2__["default"](this);

      if (this.currentStage >= 11) {
        this.currentStage = 0;
      }

      this.walls = Object(_stages__WEBPACK_IMPORTED_MODULE_3__["buildStage"])(this, this.stages[this.currentStage]);
      this.gameObjects = [this.tank, this.target];
      this.attempts = 0;
      this.tank.reset();
      this.gamestate = GAMESTATE.RUNNING;
    }
  }, {
    key: "restart",
    value: function restart() {
      this.gamestate = GAMESTATE.NEWSTAGE;
      this.tank = new _tank__WEBPACK_IMPORTED_MODULE_0__["default"](this);
      this.target = new _target__WEBPACK_IMPORTED_MODULE_2__["default"](this);
      this.walls = Object(_stages__WEBPACK_IMPORTED_MODULE_3__["buildStage"])(this, this.stages[0]);
      this.gameObjects = [this.tank, this.target];
      new _tankhandler__WEBPACK_IMPORTED_MODULE_1__["default"](this.tank, this);
      this.attempts = 0;
      this.currentStage = 0;
    }
  }, {
    key: "update",
    value: function update(dt) {
      if (this.attempts === this.maxAttempts) this.gamestate = GAMESTATE.GAMEOVER;
      if (this.gamestate === GAMESTATE.MENU || this.gamestate === GAMESTATE.GAMEOVER) return;

      if (this.tank.hit === true) {
        this.tank.hit = false;
        this.currentStage++;
        this.currentStageCount.innerText = "Stage: ".concat(this.currentStage);
        this.gamestate = GAMESTATE.NEWSTAGE;
        this.start();
      }

      [].concat(_toConsumableArray(this.gameObjects), _toConsumableArray(this.walls)).forEach(function (object) {
        return object.update(dt);
      });
      this.walls = this.walls.filter(function (wall) {
        return !wall.markedForDeletion;
      });
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.tank.draw(ctx);
      this.tank.drawGuage(ctx);
      this.tank.drawMissile(ctx);
      [].concat(_toConsumableArray(this.gameObjects), _toConsumableArray(this.walls)).forEach(function (object) {
        return object.draw(ctx);
      });

      if (this.gamestate === GAMESTATE.MENU) {
        ctx.drawImage(this.image5, 0, 0, this.gameWidth, this.gameHeight);
        ctx.fill();
        ctx.font = "30px serif";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Press Enter to start", this.gameWidth / 2, this.gameHeight / 2);
      }

      if (this.gamestate === GAMESTATE.GAMEOVER) {
        ctx.drawImage(this.image6, 0, 0, this.gameWidth, this.gameHeight);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();
        ctx.font = "30px serif";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
      }

      if (this.gamestate === GAMESTATE.NEWSTAGE) {
        ctx.drawImage(this.image7, 0, 0, this.gameWidth, this.gameHeight);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();
        ctx.font = "30px serif";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Press Enter to Re-start", this.gameWidth / 2, this.gameHeight / 2);
      }
    } // togglePause() {
    //     if(this.gamestate == GAMESTATE.PAUSED) {
    //         this.gamestate = GAMESTATE.RUNNING;
    //     } else {
    //         this.gamestate = GAMESTATE.PAUSED;
    //     }
    // }

  }]);

  return Game;
}();



/***/ }),

/***/ "./src/scripts/stages.js":
/*!*******************************!*\
  !*** ./src/scripts/stages.js ***!
  \*******************************/
/*! exports provided: buildStage, stage0, stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8, stage9, stage10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildStage", function() { return buildStage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stage0", function() { return stage0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stage1", function() { return stage1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stage2", function() { return stage2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stage3", function() { return stage3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stage4", function() { return stage4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stage5", function() { return stage5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stage6", function() { return stage6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stage7", function() { return stage7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stage8", function() { return stage8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stage9", function() { return stage9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stage10", function() { return stage10; });
/* harmony import */ var _wall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall */ "./src/scripts/wall.js");

function buildStage(game, stage) {
  var walls = [];
  stage.forEach(function (row, rowIndex) {
    row.forEach(function (wall, wallIndex) {
      if (wall === 1) {
        var position = {
          x: 450 - 50 * rowIndex,
          y: 550 - 50 * wallIndex
        };
        walls.push(new _wall__WEBPACK_IMPORTED_MODULE_0__["default"](game, position));
      }
    });
  });
  return walls;
}
var stage0 = [[1]];
var stage1 = [[0, 0, 0, 0, 0, 0, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0]];
var stage2 = [[1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 0]];
var stage3 = [[1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1, 0, 0]];
var stage4 = [[1, 1, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 0]];
var stage5 = [[1, 1, 1, 1, 0, 1, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 0]];
var stage6 = [[0, 1, 1, 0, 1, 0, 0, 0, 1], [1, 0, 0, 1, 0, 1, 1, 1, 0], [0, 1, 1, 0, 1, 0, 0, 0, 1]];
var stage7 = [[1, 0, 1, 0, 1, 0, 1, 0, 1], [0, 1, 0, 1, 0, 1, 0, 1, 0], [1, 0, 1, 0, 1, 0, 1, 0, 1]];
var stage8 = [[1, 0, 1, 0, 1, 1, 0, 0, 0], [1, 1, 1, 0, 1, 1, 1, 1, 0], [1, 0, 1, 1, 0, 1, 0, 0, 0]];
var stage9 = [[1, 1, 1, 1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 0, 0, 0]];
var stage10 = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

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
    this.ground = true;
    this.game = game;
    this.image1 = document.getElementById("tank");
    this.image2 = document.getElementById("missile");
    this.jumpcount = 0;
    this.jumpmax = 1;
    this.reset();
  }

  _createClass(Tank, [{
    key: "draw",
    value: function draw(ctx) {
      //tank
      ctx.drawImage(this.image1, this.position.x, this.gameHeight - this.height, this.width, this.height); // ctx.fillStyle = '#a2c49b';
      // ctx.fillRect(this.position.x, this.gameHeight - this.height, this.width, this.height);
      //cannon

      ctx.beginPath();
      ctx.moveTo(this.position.x + this.width / 2, this.position.y + this.height / 2);
      ctx.lineTo(this.position.x + this.width / 2 + this.cannonLength * Math.cos(this.cannonAngle), this.position.y + this.height / 2 - this.cannonLength * Math.sin(this.cannonAngle));
      ctx.strokeStyle = 'rgb(255, 127, 80)';
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

      ctx.drawImage(this.image2, this.missileX - 17, this.missileY - 17, 30, 30);
      ctx.beginPath(); // ctx.arc(
      //     this.missileX,
      //     this.missileY,
      //     this.missileRadius,
      //     0,
      //     Math.PI * 2
      // )

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
    key: "stopSpacebar",
    value: function stopSpacebar() {
      this.gauge = 0;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.position = {
        x: 0,
        y: this.gameHeight - this.height
      };
    }
  }, {
    key: "update",
    value: function update(dt) {
      if (!dt) return;
      this.position.x += this.speed; // this.position.y += this.cannonAngleSpeed;

      if (this.position.x < 0) this.position.x = 0;
      if (this.position.x + this.width > this.gameWidth / 2 - this.width * 2) this.position.x = this.gameWidth / 2 - this.width * 3;
      if (this.position.y + this.height / 2 === this.position.y + this.height / 2) this.position.y = this.gameHeight - this.height; //guage

      if (this.gauge > Math.PI * 2) {
        this.gauge = Math.PI * 2;
      } //missile wall on left/right/top/bottom


      if (this.missileX - this.missileRadius < -2 * this.width || this.missileX + this.missileRadius > this.gameWidth || this.missileY < 0 || this.missileY + this.missileRadius > this.gameHeight + 2 * this.height) {
        this.fire = false;
        this.game.attempts++;
        this.game.attemptsCount.innerText = "Attempts: ".concat(this.game.attempts); // console.log(this.game.attempts)
      } //missile hitting target


      if (this.missileX >= this.game.target.targetX && this.missileX <= this.game.target.targetX + this.game.target.targetWidth && this.missileY >= this.game.target.targetY && this.missileY <= this.gameHeight) {
        this.hit = true;
        this.missileX = -this.missileX;
        this.missileY = -this.missileY; // setTimeout(()=>{ alert("hit target") }, 0)
        // clearInterval(setInterval(this.drawMissile(this.game.ctx), 10));
        // this.missileDx = -this.missileDx;
        // this.missileDy = -this.missileDy;
        // console.log('hit target')
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

var TankHandler = function TankHandler(tank, game) {
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
        if (!tank.fire) {
          tank.charging = true;
          tank.gauge += tank.gaugeSpeed;
          tank.missileDx = tank.gauge * 1.5 * Math.cos(tank.cannonAngle);
          tank.missileDy = tank.gauge * 1.5 * Math.sin(tank.cannonAngle);
        } else {
          return;
        }

        break;

      case 13:
        game.start();
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

    this.targetWidth = Math.floor(Math.random() * 50 + 100);
    this.targetHeight = Math.floor(Math.random() * 50 + 100);
    this.targetX = Math.floor(Math.random() * (300 - this.targetWidth) + 500);
    this.targetY = game.gameHeight - this.targetHeight;
    this.image4 = document.getElementById("target");
  }

  _createClass(Target, [{
    key: "update",
    value: function update() {}
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.image4, this.targetX, this.targetY, this.targetWidth, this.targetHeight);
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
    this.image3 = document.getElementById("wall");
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
        this.game.tank.missileX = -this.game.tank.missileX;
        this.game.tank.missileX = -this.game.tank.missileY;
        this.markedForDeletion = true;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.image3, this.position.x, this.position.y, this.width, this.height);
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

/***/ }),

/***/ "./src/styles/reset.scss":
/*!*******************************!*\
  !*** ./src/styles/reset.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFua2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9yZXNldC5zY3NzP2VkOTgiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJnYW1lIiwiR2FtZSIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVzdGFydCIsImluc3RydWN0aW9uIiwibW9kYWwiLCJzdHlsZSIsImRpc3BsYXkiLCJsYXN0VGltZSIsImdhbWVMb29wIiwidGltZXN0YW1wIiwiZHQiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY291bnQiLCJ0d2lua2xlIiwicXVlcnlTZWxlY3RvciIsImNvbG9yIiwic2V0SW50ZXJ2YWwiLCJwbGF5IiwiYXVkaW8iLCJHQU1FU1RBVEUiLCJSVU5OSU5HIiwiTUVOVSIsIkdBTUVPVkVSIiwiTkVXU1RBR0UiLCJnYW1lV2lkdGgiLCJnYW1lSGVpZ2h0IiwiZ2FtZXN0YXRlIiwidGFuayIsIlRhbmsiLCJ0YXJnZXQiLCJUYXJnZXQiLCJnYW1lT2JqZWN0cyIsIndhbGxzIiwiYXR0ZW1wdHMiLCJhdHRlbXB0c0NvdW50IiwibWF4QXR0ZW1wdHMiLCJzdGFnZXMiLCJzdGFnZTAiLCJzdGFnZTEiLCJzdGFnZTIiLCJzdGFnZTMiLCJzdGFnZTQiLCJzdGFnZTUiLCJzdGFnZTYiLCJzdGFnZTciLCJzdGFnZTgiLCJzdGFnZTkiLCJzdGFnZTEwIiwiY3VycmVudFN0YWdlIiwiY3VycmVudFN0YWdlQ291bnQiLCJUYW5rSGFuZGxlciIsImltYWdlNSIsImltYWdlNiIsImltYWdlNyIsImJ1aWxkU3RhZ2UiLCJyZXNldCIsImhpdCIsImlubmVyVGV4dCIsInN0YXJ0IiwiZm9yRWFjaCIsIm9iamVjdCIsImZpbHRlciIsIndhbGwiLCJtYXJrZWRGb3JEZWxldGlvbiIsImRyYXdHdWFnZSIsImRyYXdNaXNzaWxlIiwiZHJhd0ltYWdlIiwiZmlsbCIsImZvbnQiLCJmaWxsU3R5bGUiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsInN0YWdlIiwicm93Iiwicm93SW5kZXgiLCJ3YWxsSW5kZXgiLCJwb3NpdGlvbiIsIngiLCJ5IiwicHVzaCIsIldhbGwiLCJ3aWR0aCIsImhlaWdodCIsIm1heFNwZWVkIiwic3BlZWQiLCJjYW5ub25BbmdsZSIsIk1hdGgiLCJQSSIsImNhbm5vbkFuZ2xlU3BlZWQiLCJjYW5ub25TcGVlZCIsImNhbm5vbkxlbmd0aCIsInNxcnQiLCJnYXVnZSIsImdhdWdlU3BlZWQiLCJnYXVnZUJhclJhaWR1cyIsIm1pc3NpbGVYIiwiY29zIiwibWlzc2lsZVkiLCJzaW4iLCJtaXNzaWxlUmFkaXVzIiwibWlzc2lsZUR4IiwibWlzc2lsZUR5IiwiZ3Jhdml0eSIsImNoYXJnaW5nIiwiZmlyZSIsImdyb3VuZCIsImltYWdlMSIsImltYWdlMiIsImp1bXBjb3VudCIsImp1bXBtYXgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImNsb3NlUGF0aCIsImFyYyIsInRhcmdldFgiLCJ0YXJnZXRXaWR0aCIsInRhcmdldFkiLCJldmVudCIsImtleUNvZGUiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsIm1vdmVVcCIsIm1vdmVEb3duIiwic3RvcCIsInN0b3BjYW5ub25BbmdsZSIsImZsb29yIiwicmFuZG9tIiwidGFyZ2V0SGVpZ2h0IiwiaW1hZ2U0IiwiaW1hZ2UzIiwiYm90dG9tT2ZNaXNzaWxlIiwidG9wT2ZNaXNzaWxlIiwidG9wT2ZXYWxsIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWY7QUFFQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUEsSUFBTUMsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBRUEs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QUEwQixLQUFLckcsSUFBTCxDQUFVaUMsSUFBVixDQUFld0UsYUFBekMsSUFBMERzQyxLQUEzSixFQUFrSztBQUM5SixhQUFLL0ksSUFBTCxDQUFVaUMsSUFBVixDQUFlb0UsUUFBZixHQUEwQixDQUFFLEtBQUtyRyxJQUFMLENBQVVpQyxJQUFWLENBQWVvRSxRQUEzQztBQUNBLGFBQUtyRyxJQUFMLENBQVVpQyxJQUFWLENBQWVvRSxRQUFmLEdBQTBCLENBQUUsS0FBS3JHLElBQUwsQ0FBVWlDLElBQVYsQ0FBZXNFLFFBQTNDO0FBQ0EsYUFBS2xDLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0M7QUFDUjs7O3lCQUVJekUsRyxFQUFLO0FBQ05BLFNBQUcsQ0FBQzRFLFNBQUosQ0FBYyxLQUFLa0UsTUFBbkIsRUFBMEIsS0FBTXhELFFBQU4sQ0FBZUMsQ0FBekMsRUFBNEMsS0FBS0QsUUFBTCxDQUFjRSxDQUExRCxFQUE2RCxLQUFLRyxLQUFsRSxFQUF5RSxLQUFLQyxNQUE5RTtBQUVIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCTCx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9yZXNldC5zY3NzXCJcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIlxuXG5pbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUJvYXJkXCIpO1xuXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCBHQU1FX1dJRFRIID0gODAwO1xuY29uc3QgR0FNRV9IRUlHSFQgPSA2MDA7XG5cbmxldCBnYW1lID0gbmV3IEdhbWUoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQsIGN0eCk7XG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0Jyk7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgZ2FtZS5yZXN0YXJ0KCk7XG59KVxuXG5jb25zdCBpbnN0cnVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zdHJ1Y3Rpb25cIik7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG5pbnN0cnVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSlcbm1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pXG5cbmxldCBsYXN0VGltZSA9IDA7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKHRpbWVzdGFtcCkge1xuICBsZXQgZHQgPSB0aW1lc3RhbXAgLSBsYXN0VGltZVxuICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICBjdHguY2xlYXJSZWN0KDAsIDAsIDgwMCwgNjAwKTtcblxuICBnYW1lLnVwZGF0ZShkdCk7XG4gIGdhbWUuZHJhdyhjdHgpO1xuICBcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn1cblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcblxubGV0IGNvdW50ID0gMDtcblxuZnVuY3Rpb24gdHdpbmtsZSgpe1xuICBpZiAoY291bnQgPT09IDApIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyM5Mzk1OTcnO1xuICAgIGNvdW50ICsrO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjZTg1NDUwJztcbiAgICBjb3VudCArKztcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnI2EyYzQ5Yic7XG4gICAgY291bnQgKys7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDMpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyNmNWRmNGQnO1xuICAgIGNvdW50ICsrO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnIzdiYzRjNCc7XG4gICAgY291bnQgPSAwO1xuICB9XG59XG5cbnNldEludGVydmFsKHR3aW5rbGUsIDEwMDApO1xuXG5mdW5jdGlvbiBwbGF5KCkge1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVkaW9cIik7XG4gIGF1ZGlvLnBsYXkoKVxufSIsImltcG9ydCBUYW5rIGZyb20gJy4vdGFuayc7XG5pbXBvcnQgVGFua0hhbmRsZXIgZnJvbSAnLi90YW5raGFuZGxlcic7XG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0JztcbmltcG9ydCB7IGJ1aWxkU3RhZ2UsIHN0YWdlMCwgc3RhZ2UxLCBzdGFnZTIsIHN0YWdlMywgc3RhZ2U0LCBzdGFnZTUsIHN0YWdlNiwgc3RhZ2U3LCBzdGFnZTgsIHN0YWdlOSwgc3RhZ2UxMCB9IGZyb20gJy4vc3RhZ2VzJztcblxuZXhwb3J0IGNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBSVU5OSU5HOiAxLFxuICAgIE1FTlU6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgTkVXU1RBR0U6IDQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGdhbWVXaWR0aCwgZ2FtZUhlaWdodCwgY3R4KSB7XG5cbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDsgICAgXG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZVdpZHRoXG4gICAgICAgIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLk1FTlU7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnRhbmsgPSBuZXcgVGFuayh0aGlzKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBuZXcgVGFyZ2V0KHRoaXMpOyAgXG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy53YWxscyA9IFtdXG4gICAgICAgIHRoaXMuYXR0ZW1wdHMgPSAwO1xuICAgICAgICB0aGlzLmF0dGVtcHRzQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0ZW1wdHMnKVxuICAgICAgICB0aGlzLm1heEF0dGVtcHRzID0gMTA7XG5cbiAgICAgICAgdGhpcy5zdGFnZXMgPSBbc3RhZ2UwLCBzdGFnZTEsIHN0YWdlMiwgc3RhZ2UzLCBzdGFnZTQsIHN0YWdlNSwgc3RhZ2U2LCBzdGFnZTcsIHN0YWdlOCwgc3RhZ2U5LCBzdGFnZTEwXVxuICAgICAgICB0aGlzLmN1cnJlbnRTdGFnZSA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudFN0YWdlQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YWdlXCIpXG4gICAgICAgIG5ldyBUYW5rSGFuZGxlcih0aGlzLnRhbmssIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuaW1hZ2U1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKVxuICAgICAgICB0aGlzLmltYWdlNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZW92ZXJcIikgXG4gICAgICAgIHRoaXMuaW1hZ2U3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdzdGFnZVwiKVxuICAgICAgXG4gICAgfVxuICAgIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZih0aGlzLmdhbWVzdGF0ZSAhPT0gR0FNRVNUQVRFLk1FTlUgJiZcbiAgICAgICAgICAgIHRoaXMuZ2FtZXN0YXRlICE9PSBHQU1FU1RBVEUuTkVXU1RBR0UpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRhcmdldCh0aGlzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGFnZSA+PSAxMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YWdlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMud2FsbHMgPSBidWlsZFN0YWdlKHRoaXMsIHRoaXMuc3RhZ2VzW3RoaXMuY3VycmVudFN0YWdlXSk7XG4gICAgICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gW3RoaXMudGFuaywgdGhpcy50YXJnZXRdXG4gICAgICAgICAgICB0aGlzLmF0dGVtcHRzID0gMDtcbiAgICAgICAgICAgIHRoaXMudGFuay5yZXNldCgpO1xuICAgICAgICB0aGlzLmdhbWVzdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HXG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuTkVXU1RBR0U7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnRhbmsgPSBuZXcgVGFuayh0aGlzKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBuZXcgVGFyZ2V0KHRoaXMpO1xuICAgICAgICB0aGlzLndhbGxzID0gYnVpbGRTdGFnZSh0aGlzLCB0aGlzLnN0YWdlc1swXSk7XG4gICAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBbdGhpcy50YW5rLCB0aGlzLnRhcmdldF1cbiAgICAgICAgbmV3IFRhbmtIYW5kbGVyKHRoaXMudGFuaywgdGhpcyk7XG4gICAgICAgIHRoaXMuYXR0ZW1wdHMgPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhZ2UgPSAwO1xuICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5hdHRlbXB0cyA9PT0gdGhpcy5tYXhBdHRlbXB0cykgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuR0FNRU9WRVI7XG5cbiAgICAgICAgaWYodGhpcy5nYW1lc3RhdGUgPT09IEdBTUVTVEFURS5NRU5VIHx8XG4gICAgICAgICAgICB0aGlzLmdhbWVzdGF0ZSA9PT0gR0FNRVNUQVRFLkdBTUVPVkVSKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMudGFuay5oaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMudGFuay5oaXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YWdlKys7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFnZUNvdW50LmlubmVyVGV4dCA9IGBTdGFnZTogJHt0aGlzLmN1cnJlbnRTdGFnZX1gXG4gICAgICAgICAgICB0aGlzLmdhbWVzdGF0ZSA9IEdBTUVTVEFURS5ORVdTVEFHRTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgWy4uLnRoaXMuZ2FtZU9iamVjdHMsIC4uLnRoaXMud2FsbHNdLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC51cGRhdGUoZHQpKTsgXG5cbiAgICAgICB0aGlzLndhbGxzID0gdGhpcy53YWxscy5maWx0ZXIod2FsbCA9PiAhd2FsbC5tYXJrZWRGb3JEZWxldGlvbilcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICB0aGlzLnRhbmsuZHJhdyhjdHgpO1xuICAgICAgICB0aGlzLnRhbmsuZHJhd0d1YWdlKGN0eCk7XG4gICAgICAgIHRoaXMudGFuay5kcmF3TWlzc2lsZShjdHgpO1xuICAgICAgICBbLi4udGhpcy5nYW1lT2JqZWN0cywgLi4udGhpcy53YWxsc10uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LmRyYXcoY3R4KSk7IFxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5nYW1lc3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2U1LCAwLDAsdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodClcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IHNlcmlmXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9XCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIlByZXNzIEVudGVyIHRvIHN0YXJ0XCIsIHRoaXMuZ2FtZVdpZHRoIC8yICwgdGhpcy5nYW1lSGVpZ2h0LzIpXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTYsIDAsMCx0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KVxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjMwcHggc2VyaWZcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID1cImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuZ2FtZVdpZHRoIC8yICwgdGhpcy5nYW1lSGVpZ2h0LzIpXG4gICAgICAgICB9XG5cbiAgICAgICAgICBpZih0aGlzLmdhbWVzdGF0ZSA9PT0gR0FNRVNUQVRFLk5FV1NUQUdFKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2U3LCAwLDAsdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodClcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IHNlcmlmXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9XCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIlByZXNzIEVudGVyIHRvIFJlLXN0YXJ0XCIsIHRoaXMuZ2FtZVdpZHRoIC8yICwgdGhpcy5nYW1lSGVpZ2h0LzIpXG4gICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyB0b2dnbGVQYXVzZSgpIHtcbiAgICAvLyAgICAgaWYodGhpcy5nYW1lc3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgIC8vICAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLlBBVVNFRDtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn0iLCJpbXBvcnQgV2FsbCBmcm9tICcuL3dhbGwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTdGFnZShnYW1lLCBzdGFnZSkge1xuICAgIGxldCB3YWxscyA9IFtdO1xuXG4gICAgc3RhZ2UuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgod2FsbCwgd2FsbEluZGV4KT0+e1xuICAgICAgICAgICAgaWYod2FsbCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDUwIC0gNTAgKiByb3dJbmRleCwgXG4gICAgICAgICAgICAgICAgICAgIHk6IDU1MCAtIDUwICogd2FsbEluZGV4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdhbGxzLnB1c2gobmV3IFdhbGwoZ2FtZSwgcG9zaXRpb24pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHdhbGxzXG59XG5cbmV4cG9ydCBjb25zdCBzdGFnZTAgPSBbXG5bMV1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTEgPVtcblswLDAsMCwwLDAsMCwwLDEsMF0sXG5bMSwxLDEsMSwxLDEsMSwxLDBdLFxuWzAsMCwwLDAsMCwwLDAsMSwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlMiA9W1xuWzEsMSwxLDEsMSwxLDEsMSwwXSxcblswLDAsMCwwLDEsMCwwLDAsMF0sXG5bMSwxLDEsMSwxLDEsMSwxLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2UzID1bXG5bMSwxLDEsMSwxLDEsMSwwLDBdLFxuWzAsMCwwLDEsMCwwLDAsMSwwXSxcblsxLDEsMSwxLDEsMSwxLDAsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTQgPVtcblsxLDEsMSwxLDEsMSwxLDAsMF0sXG5bMCwwLDAsMCwwLDAsMSwwLDBdLFxuWzEsMSwxLDEsMSwxLDEsMSwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlNSA9W1xuWzEsMSwxLDEsMCwxLDEsMCwwXSxcblswLDAsMCwwLDEsMCwwLDAsMF0sXG5bMSwxLDEsMSwxLDEsMSwxLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2U2ID1bXG5bMCwxLDEsMCwxLDAsMCwwLDFdLFxuWzEsMCwwLDEsMCwxLDEsMSwwXSxcblswLDEsMSwwLDEsMCwwLDAsMV1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTcgPVtcblsxLDAsMSwwLDEsMCwxLDAsMV0sXG5bMCwxLDAsMSwwLDEsMCwxLDBdLFxuWzEsMCwxLDAsMSwwLDEsMCwxXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlOCA9W1xuWzEsMCwxLDAsMSwxLDAsMCwwXSxcblsxLDEsMSwwLDEsMSwxLDEsMF0sXG5bMSwwLDEsMSwwLDEsMCwwLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2U5ID1bXG5bMSwxLDEsMSwxLDEsMCwwLDBdLFxuWzEsMSwxLDEsMSwxLDEsMSwwXSxcblsxLDEsMSwxLDEsMSwwLDAsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTEwID1bXG5bMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcblsxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuWzEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cbl0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rIHtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lLmdhbWVXaWR0aDtcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZS5nYW1lSGVpZ2h0O1xuICAgICAgICAvL3RhbmtcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDUwO1xuICAgICAgICB0aGlzLm1heFNwZWVkID0gMTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQsXG4gICAgICAgIH07IC8vIHRhbmsgcG9zaXRpb25cbiAgICAgICAgLy9jYW5ub25cbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZSA9IE1hdGguUEkgLyA0O1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlU3BlZWQgPSBNYXRoLlBJIC8gNjA7XG4gICAgICAgIHRoaXMuY2Fubm9uU3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmNhbm5vbkxlbmd0aCA9IHRoaXMud2lkdGggKiBNYXRoLnNxcnQoMik7XG4gICAgICAgIC8vZ2F1Z2VcbiAgICAgICAgdGhpcy5nYXVnZSA9IE1hdGguUEk7XG4gICAgICAgIHRoaXMuZ2F1Z2VTcGVlZCA9IE1hdGguUEkgLyAzMDtcbiAgICAgICAgdGhpcy5nYXVnZUJhclJhaWR1cyA9IDMwO1xuICAgICAgICAvL21pc3NpbGVcbiAgICAgICAgdGhpcy5taXNzaWxlWCA9IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgvMiArIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5jb3ModGhpcy5jYW5ub25BbmdsZSksXG4gICAgICAgIHRoaXMubWlzc2lsZVkgPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yIC0gdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKVxuICAgICAgICB0aGlzLm1pc3NpbGVSYWRpdXMgPSAxMDtcbiAgICAgICAgdGhpcy5taXNzaWxlRHggPSB0aGlzLmdhdWdlICogTWF0aC5jb3ModGhpcy5jYW5ub25BbmdsZSk7XG4gICAgICAgIHRoaXMubWlzc2lsZUR5ID0gdGhpcy5nYXVnZSAqIE1hdGguc2luKHRoaXMuY2Fubm9uQW5nbGUpO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSAwLjA5ODE7XG4gICAgICAgIHRoaXMuY2hhcmdpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ3JvdW5kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5pbWFnZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhbmtcIilcbiAgICAgICAgdGhpcy5pbWFnZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pc3NpbGVcIilcbiAgICAgICAgdGhpcy5qdW1wY291bnQgPSAwO1xuICAgICAgICB0aGlzLmp1bXBtYXggPSAxO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuIFxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIC8vdGFua1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UxLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9ICcjYTJjNDliJztcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgLy9jYW5ub25cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgvMiwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMik7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLzIgKyB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguY29zKHRoaXMuY2Fubm9uQW5nbGUpLFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMiAtIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5zaW4odGhpcy5jYW5ub25BbmdsZSkpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiKDI1NSwgMTI3LCA4MCknXG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpOyAgICBcbiAgICB9IFxuICAgIGRyYXdHdWFnZShjdHgpIHtcbiAgICAgICAgLy9nYXVnZVxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHRoaXMuZ2F1Z2VCYXJSYWlkdXMsXG4gICAgICAgICAgICBNYXRoLlBJLFxuICAgICAgICAgICAgdGhpcy5nYXVnZSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTsgIFxuICAgIH1cblxuICAgIGRyYXdNaXNzaWxlKGN0eCkge1xuICAgICAgICAvL21pc3NpbGVcbiAgICAgICAgaWYgKCF0aGlzLmZpcmUpIHtcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVggPSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLzIgKyB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguY29zKHRoaXMuY2Fubm9uQW5nbGUpLFxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgLSB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguc2luKHRoaXMuY2Fubm9uQW5nbGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVEeSAtPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYICs9IHRoaXMubWlzc2lsZUR4O1xuICAgICAgICAgICAgdGhpcy5taXNzaWxlWSAtPSB0aGlzLm1pc3NpbGVEeTtcbiAgICAgICAgfVxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UyLCBcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVgtMTcsXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVZLTE3LFxuICAgICAgICAgICAgMzAsMzBcbiAgICAgICAgKSBcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAvLyBjdHguYXJjKFxuICAgICAgICAvLyAgICAgdGhpcy5taXNzaWxlWCxcbiAgICAgICAgLy8gICAgIHRoaXMubWlzc2lsZVksXG4gICAgICAgIC8vICAgICB0aGlzLm1pc3NpbGVSYWRpdXMsXG4gICAgICAgIC8vICAgICAwLFxuICAgICAgICAvLyAgICAgTWF0aC5QSSAqIDJcbiAgICAgICAgLy8gKVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjZTg1NDUwXCI7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKVxuICAgIH1cblxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMubWF4U3BlZWQ7XG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5tYXhTcGVlZDtcbiAgICB9XG4gICAgXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgfVxuXG4gICAgbW92ZVVwKCkge1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlICs9IHRoaXMuY2Fubm9uQW5nbGVTcGVlZDtcbiAgICB9XG5cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZSArPSAtdGhpcy5jYW5ub25BbmdsZVNwZWVkO1xuICAgIH1cblxuICAgIHN0b3BjYW5ub25BbmdsZSgpIHtcbiAgICAgICAgdGhpcy5jYW5ub25TcGVlZCA9IDA7XG4gICAgfVxuXG4gICAgc3RvcFNwYWNlYmFyKCkge1xuICAgICAgICB0aGlzLmdhdWdlID0gMFxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAoIWR0KSByZXR1cm47XG4gICAgICAgICAgXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLmNhbm5vbkFuZ2xlU3BlZWQ7XG5cbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi54IDwgMCkgdGhpcy5wb3NpdGlvbi54ID0gMDtcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi54ICArIHRoaXMud2lkdGggPiB0aGlzLmdhbWVXaWR0aC8yIC0gdGhpcy53aWR0aCAqIDIpIHRoaXMucG9zaXRpb24ueCA9ICh0aGlzLmdhbWVXaWR0aC8yKSAtIHRoaXMud2lkdGggKiAzO1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yID09PSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yKSB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodFxuXG4gICAgICAgIC8vZ3VhZ2VcbiAgICAgICAgaWYodGhpcy5nYXVnZSA+IE1hdGguUEkgKiAyKSB7dGhpcy5nYXVnZSA9IE1hdGguUEkgKiAyfSBcblxuICAgICAgICAvL21pc3NpbGUgd2FsbCBvbiBsZWZ0L3JpZ2h0L3RvcC9ib3R0b21cbiAgICAgICAgaWYodGhpcy5taXNzaWxlWCAtIHRoaXMubWlzc2lsZVJhZGl1cyA8IC0gMiAqIHRoaXMud2lkdGggfHxcbiAgICAgICAgICAgICB0aGlzLm1pc3NpbGVYICsgdGhpcy5taXNzaWxlUmFkaXVzID4gdGhpcy5nYW1lV2lkdGggfHwgXG4gICAgICAgICAgICAgdGhpcy5taXNzaWxlWSA8IDAgfHwgdGhpcy5taXNzaWxlWSArIHRoaXMubWlzc2lsZVJhZGl1cyA+IHRoaXMuZ2FtZUhlaWdodCArIDIqdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmF0dGVtcHRzKys7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYXR0ZW1wdHNDb3VudC5pbm5lclRleHQgPSBgQXR0ZW1wdHM6ICR7dGhpcy5nYW1lLmF0dGVtcHRzfWBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ2FtZS5hdHRlbXB0cylcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9taXNzaWxlIGhpdHRpbmcgdGFyZ2V0XG4gICAgICAgICBpZiAodGhpcy5taXNzaWxlWCA+PSB0aGlzLmdhbWUudGFyZ2V0LnRhcmdldFggJiZcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVggPD0gdGhpcy5nYW1lLnRhcmdldC50YXJnZXRYICsgdGhpcy5nYW1lLnRhcmdldC50YXJnZXRXaWR0aCAmJlxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWSA+PSB0aGlzLmdhbWUudGFyZ2V0LnRhcmdldFkgJiZcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgPD0gdGhpcy5nYW1lSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2lsZVggPSAtdGhpcy5taXNzaWxlWDtcbiAgICAgICAgICAgICAgICB0aGlzLm1pc3NpbGVZID0gLXRoaXMubWlzc2lsZVk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpPT57IGFsZXJ0KFwiaGl0IHRhcmdldFwiKSB9LCAwKVxuICAgICAgICAgICAgICAgIC8vIGNsZWFySW50ZXJ2YWwoc2V0SW50ZXJ2YWwodGhpcy5kcmF3TWlzc2lsZSh0aGlzLmdhbWUuY3R4KSwgMTApKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1pc3NpbGVEeCA9IC10aGlzLm1pc3NpbGVEeDtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1pc3NpbGVEeSA9IC10aGlzLm1pc3NpbGVEeTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaGl0IHRhcmdldCcpXG4gICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIGNoZWNrKCkge1xuICAgIC8vICAgICBpZih0aGlzLm1pc3NpbGVYIDwgMCB8fCB0aGlzLm1pc3NpbGVYID4gdGhpcy5nYW1lV2lkdGggfHwgdGhpcy5taXNzaWxlWSA8IDAgfHwgdGhpcy5taXNzaWxlWSA+IHRoaXMuZ2FtZUhlaWdodCkge1xuICAgIC8vICAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHRoaXMubWlzc2lsZVggPj0gdGhpcy5nYW1lLnRhcmdldFggJiZcbiAgICAvLyAgICAgICAgIHRoaXMubWlzc2lsZVggPD0gdGhpcy5nYW1lLnRhcmdldFggKyB0aGlzLmdhbWUudGFyZ2V0V2lkdGggJiZcbiAgICAvLyAgICAgICAgIHRoaXMubWlzc2lsZVkgPj0gdGhpcy5nYW1lLnRhcmdldFkpIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmhpdCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzdGFydCk7XG4gICAgLy8gICAgICAgICAgICAgaWYoY29uZmlybShcIllvdSBnb3QgdGhpcywgd2FudCB0byBwbGF5IGFnYWluP1wiKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhbmtIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0YW5rLCBnYW1lKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIHRhbmsubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6IFxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVVcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVEb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFuay5maXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5rLmNoYXJnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmsuZ2F1Z2UgKz0gdGFuay5nYXVnZVNwZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5rLm1pc3NpbGVEeCA9IHRhbmsuZ2F1Z2UgKiAxLjUgKiBNYXRoLmNvcyh0YW5rLmNhbm5vbkFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmsubWlzc2lsZUR5ID0gdGFuay5nYXVnZSAqIDEuNSAqIE1hdGguc2luKHRhbmsuY2Fubm9uQW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFuay5zcGVlZCA8IDApXG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFuay5zcGVlZCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFuay5jYW5ub25BbmdsZSA+PTAgKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3BjYW5ub25BbmdsZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFuay5jYW5ub25BbmdsZSA8PSBNYXRoLlBJKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3BjYW5ub25BbmdsZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgICB0YW5rLmNoYXJnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuZmlyZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuZ2F1Z2UgPSBNYXRoLlBJO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy50YXJnZXRXaWR0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwICsgMTAwKTtcbiAgICAgICAgdGhpcy50YXJnZXRIZWlnaHQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCArIDEwMCk7XG4gICAgICAgIHRoaXMudGFyZ2V0WCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgzMDAgLSB0aGlzLnRhcmdldFdpZHRoKSArIDUwMCk7XG4gICAgICAgIHRoaXMudGFyZ2V0WSA9IGdhbWUuZ2FtZUhlaWdodCAtIHRoaXMudGFyZ2V0SGVpZ2h0O1xuICAgICAgICB0aGlzLmltYWdlNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpXG4gICAgfVxuICAgIHVwZGF0ZSgpe31cbiAgICBcbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2U0LCB0aGlzLnRhcmdldFgsIHRoaXMudGFyZ2V0WSwgdGhpcy50YXJnZXRXaWR0aCwgdGhpcy50YXJnZXRIZWlnaHQpO1xuICAgIH1cbn0gICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBwb3NpdGlvbikge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDUwO1xuICAgICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW1hZ2UzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWxsXCIpXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBsZXQgYm90dG9tT2ZNaXNzaWxlID0gdGhpcy5nYW1lLnRhbmsubWlzc2lsZVkgKyB0aGlzLmdhbWUudGFuay5taXNzaWxlUmFkaXVzO1xuICAgICAgICBsZXQgdG9wT2ZNaXNzaWxlID0gdGhpcy5nYW1lLnRhbmsubWlzc2lsZVk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdG9wT2ZXYWxsID0gdGhpcy5wb3NpdGlvbi55O1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucG9zaXRpb24ueDtcbiAgICAgICAgbGV0IHJpZ2h0ID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aDtcbiAgICAgICAgbGV0IGJvdHRvbSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0O1xuICAgICAgICBpZiAoYm90dG9tT2ZNaXNzaWxlID49IHRvcE9mV2FsbCAmJiB0b3BPZk1pc3NpbGUgPD0gYm90dG9tICYmIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVYID49IGxlZnQgJiYgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVggKyB0aGlzLmdhbWUudGFuay5taXNzaWxlUmFkaXVzIDw9IHJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGFuay5taXNzaWxlWCA9IC0gdGhpcy5nYW1lLnRhbmsubWlzc2lsZVg7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGFuay5taXNzaWxlWCA9IC0gdGhpcy5nYW1lLnRhbmsubWlzc2lsZVk7XG4gICAgICAgICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlMyx0aGlzLiBwb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICBcbiAgICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==