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
        ctx.fillText("NEW STAGE", this.gameWidth / 2, this.gameHeight / 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFua2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcmVzZXQuc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImdhbWUiLCJHYW1lIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZXN0YXJ0IiwiaW5zdHJ1Y3Rpb24iLCJtb2RhbCIsInN0eWxlIiwiZGlzcGxheSIsImxhc3RUaW1lIiwiZ2FtZUxvb3AiLCJ0aW1lc3RhbXAiLCJkdCIsImNsZWFyUmVjdCIsInVwZGF0ZSIsImRyYXciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb3VudCIsInR3aW5rbGUiLCJxdWVyeVNlbGVjdG9yIiwiY29sb3IiLCJzZXRJbnRlcnZhbCIsInBsYXkiLCJhdWRpbyIsIkdBTUVTVEFURSIsIlJVTk5JTkciLCJNRU5VIiwiR0FNRU9WRVIiLCJORVdTVEFHRSIsImdhbWVXaWR0aCIsImdhbWVIZWlnaHQiLCJnYW1lc3RhdGUiLCJ0YW5rIiwiVGFuayIsInRhcmdldCIsIlRhcmdldCIsImdhbWVPYmplY3RzIiwid2FsbHMiLCJhdHRlbXB0cyIsImF0dGVtcHRzQ291bnQiLCJtYXhBdHRlbXB0cyIsInN0YWdlcyIsInN0YWdlMCIsInN0YWdlMSIsInN0YWdlMiIsInN0YWdlMyIsInN0YWdlNCIsInN0YWdlNSIsInN0YWdlNiIsInN0YWdlNyIsInN0YWdlOCIsInN0YWdlOSIsInN0YWdlMTAiLCJjdXJyZW50U3RhZ2UiLCJjdXJyZW50U3RhZ2VDb3VudCIsIlRhbmtIYW5kbGVyIiwiaW1hZ2U1IiwiaW1hZ2U2IiwiaW1hZ2U3IiwiYnVpbGRTdGFnZSIsInJlc2V0IiwiaGl0IiwiaW5uZXJUZXh0Iiwic3RhcnQiLCJmb3JFYWNoIiwib2JqZWN0IiwiZmlsdGVyIiwid2FsbCIsIm1hcmtlZEZvckRlbGV0aW9uIiwiZHJhd0d1YWdlIiwiZHJhd01pc3NpbGUiLCJkcmF3SW1hZ2UiLCJmaWxsIiwiZm9udCIsImZpbGxTdHlsZSIsInRleHRBbGlnbiIsImZpbGxUZXh0Iiwic3RhZ2UiLCJyb3ciLCJyb3dJbmRleCIsIndhbGxJbmRleCIsInBvc2l0aW9uIiwieCIsInkiLCJwdXNoIiwiV2FsbCIsIndpZHRoIiwiaGVpZ2h0IiwibWF4U3BlZWQiLCJzcGVlZCIsImNhbm5vbkFuZ2xlIiwiTWF0aCIsIlBJIiwiY2Fubm9uQW5nbGVTcGVlZCIsImNhbm5vblNwZWVkIiwiY2Fubm9uTGVuZ3RoIiwic3FydCIsImdhdWdlIiwiZ2F1Z2VTcGVlZCIsImdhdWdlQmFyUmFpZHVzIiwibWlzc2lsZVgiLCJjb3MiLCJtaXNzaWxlWSIsInNpbiIsIm1pc3NpbGVSYWRpdXMiLCJtaXNzaWxlRHgiLCJtaXNzaWxlRHkiLCJncmF2aXR5IiwiY2hhcmdpbmciLCJmaXJlIiwiZ3JvdW5kIiwiaW1hZ2UxIiwiaW1hZ2UyIiwianVtcGNvdW50IiwianVtcG1heCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiYXJjIiwidGFyZ2V0WCIsInRhcmdldFdpZHRoIiwidGFyZ2V0WSIsImV2ZW50Iiwia2V5Q29kZSIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwibW92ZVVwIiwibW92ZURvd24iLCJzdG9wIiwic3RvcGNhbm5vbkFuZ2xlIiwiZmxvb3IiLCJyYW5kb20iLCJ0YXJnZXRIZWlnaHQiLCJpbWFnZTQiLCJpbWFnZTMiLCJib3R0b21PZk1pc3NpbGUiLCJ0b3BPZk1pc3NpbGUiLCJ0b3BPZldhbGwiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBZjtBQUVBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFFQSxJQUFNQyxVQUFVLEdBQUcsR0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsR0FBcEI7QUFFQSxJQUFJQyxJQUFJ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LElBQUwsQ0FBVWlDLElBQVYsQ0FBZXdFLGFBQXpDLElBQTBEc0MsS0FBM0osRUFBa0s7QUFDOUosYUFBSy9JLElBQUwsQ0FBVWlDLElBQVYsQ0FBZW9FLFFBQWYsR0FBMEIsQ0FBRSxLQUFLckcsSUFBTCxDQUFVaUMsSUFBVixDQUFlb0UsUUFBM0M7QUFDQSxhQUFLckcsSUFBTCxDQUFVaUMsSUFBVixDQUFlb0UsUUFBZixHQUEwQixDQUFFLEtBQUtyRyxJQUFMLENBQVVpQyxJQUFWLENBQWVzRSxRQUEzQztBQUNBLGFBQUtsQyxpQkFBTCxHQUF5QixJQUF6QjtBQUNDO0FBQ1I7Ozt5QkFFSXpFLEcsRUFBSztBQUNOQSxTQUFHLENBQUM0RSxTQUFKLENBQWMsS0FBS2tFLE1BQW5CLEVBQTBCLEtBQU14RCxRQUFOLENBQWVDLENBQXpDLEVBQTRDLEtBQUtELFFBQUwsQ0FBY0UsQ0FBMUQsRUFBNkQsS0FBS0csS0FBbEUsRUFBeUUsS0FBS0MsTUFBOUU7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkwsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuc2Nzc1wiXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCJcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVCb2FyZFwiKTtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3QgR0FNRV9XSURUSCA9IDgwMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNjAwO1xuXG5sZXQgZ2FtZSA9IG5ldyBHYW1lKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBjdHgpO1xuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydCcpO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGdhbWUucmVzdGFydCgpO1xufSlcblxuY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uXCIpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuaW5zdHJ1Y3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG5sZXQgbGFzdFRpbWUgPSAwO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCh0aW1lc3RhbXApIHtcbiAgbGV0IGR0ID0gdGltZXN0YW1wIC0gbGFzdFRpbWVcbiAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCA4MDAsIDYwMCk7XG5cbiAgZ2FtZS51cGRhdGUoZHQpO1xuICBnYW1lLmRyYXcoY3R4KTtcbiAgXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG5cbmxldCBjb3VudCA9IDA7XG5cbmZ1bmN0aW9uIHR3aW5rbGUoKXtcbiAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjOTM5NTk3JztcbiAgICBjb3VudCArKztcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnI2U4NTQ1MCc7XG4gICAgY291bnQgKys7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyNhMmM0OWInO1xuICAgIGNvdW50ICsrO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjZjVkZjRkJztcbiAgICBjb3VudCArKztcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyM3YmM0YzQnO1xuICAgIGNvdW50ID0gMDtcbiAgfVxufVxuXG5zZXRJbnRlcnZhbCh0d2lua2xlLCAxMDAwKTtcblxuZnVuY3Rpb24gcGxheSgpIHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuICBhdWRpby5wbGF5KClcbn0iLCJpbXBvcnQgVGFuayBmcm9tICcuL3RhbmsnO1xuaW1wb3J0IFRhbmtIYW5kbGVyIGZyb20gJy4vdGFua2hhbmRsZXInO1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCc7XG5pbXBvcnQgeyBidWlsZFN0YWdlLCBzdGFnZTAsIHN0YWdlMSwgc3RhZ2UyLCBzdGFnZTMsIHN0YWdlNCwgc3RhZ2U1LCBzdGFnZTYsIHN0YWdlNywgc3RhZ2U4LCBzdGFnZTksIHN0YWdlMTAgfSBmcm9tICcuL3N0YWdlcyc7XG5cbmV4cG9ydCBjb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUlVOTklORzogMSxcbiAgICBNRU5VOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIE5FV1NUQUdFOiA0LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQsIGN0eCkge1xuXG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWVIZWlnaHQ7ICAgIFxuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aFxuICAgICAgICB0aGlzLmdhbWVzdGF0ZSA9IEdBTUVTVEFURS5NRU5VO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy50YW5rID0gbmV3IFRhbmsodGhpcyk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRhcmdldCh0aGlzKTsgIFxuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gW107XG4gICAgICAgIHRoaXMud2FsbHMgPSBbXVxuICAgICAgICB0aGlzLmF0dGVtcHRzID0gMDtcbiAgICAgICAgdGhpcy5hdHRlbXB0c0NvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGVtcHRzJylcbiAgICAgICAgdGhpcy5tYXhBdHRlbXB0cyA9IDEwO1xuXG4gICAgICAgIHRoaXMuc3RhZ2VzID0gW3N0YWdlMCwgc3RhZ2UxLCBzdGFnZTIsIHN0YWdlMywgc3RhZ2U0LCBzdGFnZTUsIHN0YWdlNiwgc3RhZ2U3LCBzdGFnZTgsIHN0YWdlOSwgc3RhZ2UxMF1cbiAgICAgICAgdGhpcy5jdXJyZW50U3RhZ2UgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGFnZUNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFnZVwiKVxuICAgICAgICBuZXcgVGFua0hhbmRsZXIodGhpcy50YW5rLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmltYWdlNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIilcbiAgICAgICAgdGhpcy5pbWFnZTYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVvdmVyXCIpIFxuICAgICAgICB0aGlzLmltYWdlNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3c3RhZ2VcIilcbiAgICAgIFxuICAgIH1cbiAgICBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYodGhpcy5nYW1lc3RhdGUgIT09IEdBTUVTVEFURS5NRU5VICYmXG4gICAgICAgICAgICB0aGlzLmdhbWVzdGF0ZSAhPT0gR0FNRVNUQVRFLk5FV1NUQUdFKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG5ldyBUYXJnZXQodGhpcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RhZ2UgPj0gMTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFnZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLndhbGxzID0gYnVpbGRTdGFnZSh0aGlzLCB0aGlzLnN0YWdlc1t0aGlzLmN1cnJlbnRTdGFnZV0pO1xuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFt0aGlzLnRhbmssIHRoaXMudGFyZ2V0XVxuICAgICAgICAgICAgdGhpcy5hdHRlbXB0cyA9IDA7XG4gICAgICAgICAgICB0aGlzLnRhbmsucmVzZXQoKTtcbiAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuUlVOTklOR1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLk5FV1NUQUdFO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50YW5rID0gbmV3IFRhbmsodGhpcyk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRhcmdldCh0aGlzKTtcbiAgICAgICAgdGhpcy53YWxscyA9IGJ1aWxkU3RhZ2UodGhpcywgdGhpcy5zdGFnZXNbMF0pO1xuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gW3RoaXMudGFuaywgdGhpcy50YXJnZXRdXG4gICAgICAgIG5ldyBUYW5rSGFuZGxlcih0aGlzLnRhbmssIHRoaXMpO1xuICAgICAgICB0aGlzLmF0dGVtcHRzID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VycmVudFN0YWdlID0gMDtcbiAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuYXR0ZW1wdHMgPT09IHRoaXMubWF4QXR0ZW1wdHMpIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLkdBTUVPVkVSO1xuXG4gICAgICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSB8fFxuICAgICAgICAgICAgdGhpcy5nYW1lc3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUikgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLnRhbmsuaGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnRhbmsuaGl0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFnZSsrO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhZ2VDb3VudC5pbm5lclRleHQgPSBgU3RhZ2U6ICR7dGhpcy5jdXJyZW50U3RhZ2V9YFxuICAgICAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuTkVXU1RBR0U7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIFsuLi50aGlzLmdhbWVPYmplY3RzLCAuLi50aGlzLndhbGxzXS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QudXBkYXRlKGR0KSk7IFxuXG4gICAgICAgdGhpcy53YWxscyA9IHRoaXMud2FsbHMuZmlsdGVyKHdhbGwgPT4gIXdhbGwubWFya2VkRm9yRGVsZXRpb24pXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgdGhpcy50YW5rLmRyYXcoY3R4KTtcbiAgICAgICAgdGhpcy50YW5rLmRyYXdHdWFnZShjdHgpO1xuICAgICAgICB0aGlzLnRhbmsuZHJhd01pc3NpbGUoY3R4KTtcbiAgICAgICAgWy4uLnRoaXMuZ2FtZU9iamVjdHMsIC4uLnRoaXMud2FsbHNdLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5kcmF3KGN0eCkpOyBcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlNSwgMCwwLHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQpXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMzBweCBzZXJpZlwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPVwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJQcmVzcyBFbnRlciB0byBzdGFydFwiLCB0aGlzLmdhbWVXaWR0aCAvMiAsIHRoaXMuZ2FtZUhlaWdodC8yKVxuICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICBpZih0aGlzLmdhbWVzdGF0ZSA9PT0gR0FNRVNUQVRFLkdBTUVPVkVSKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2U2LCAwLDAsdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodClcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IHNlcmlmXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9XCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCB0aGlzLmdhbWVXaWR0aCAvMiAsIHRoaXMuZ2FtZUhlaWdodC8yKVxuICAgICAgICAgfVxuXG4gICAgICAgICAgaWYodGhpcy5nYW1lc3RhdGUgPT09IEdBTUVTVEFURS5ORVdTVEFHRSkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlNywgMCwwLHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQpXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMzBweCBzZXJpZlwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPVwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJORVcgU1RBR0VcIiwgdGhpcy5nYW1lV2lkdGggLzIgLCB0aGlzLmdhbWVIZWlnaHQvMilcbiAgICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHRvZ2dsZVBhdXNlKCkge1xuICAgIC8vICAgICBpZih0aGlzLmdhbWVzdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmdhbWVzdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuUEFVU0VEO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxufSIsImltcG9ydCBXYWxsIGZyb20gJy4vd2FsbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFN0YWdlKGdhbWUsIHN0YWdlKSB7XG4gICAgbGV0IHdhbGxzID0gW107XG5cbiAgICBzdGFnZS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKCh3YWxsLCB3YWxsSW5kZXgpPT57XG4gICAgICAgICAgICBpZih3YWxsID09PSAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiA0NTAgLSA1MCAqIHJvd0luZGV4LCBcbiAgICAgICAgICAgICAgICAgICAgeTogNTUwIC0gNTAgKiB3YWxsSW5kZXhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2FsbHMucHVzaChuZXcgV2FsbChnYW1lLCBwb3NpdGlvbikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gd2FsbHNcbn1cblxuZXhwb3J0IGNvbnN0IHN0YWdlMCA9IFtcblsxXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlMSA9W1xuWzAsMCwwLDAsMCwwLDAsMSwwXSxcblsxLDEsMSwxLDEsMSwxLDEsMF0sXG5bMCwwLDAsMCwwLDAsMCwxLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2UyID1bXG5bMSwxLDEsMSwxLDEsMSwxLDBdLFxuWzAsMCwwLDAsMSwwLDAsMCwwXSxcblsxLDEsMSwxLDEsMSwxLDEsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTMgPVtcblsxLDEsMSwxLDEsMSwxLDAsMF0sXG5bMCwwLDAsMSwwLDAsMCwxLDBdLFxuWzEsMSwxLDEsMSwxLDEsMCwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlNCA9W1xuWzEsMSwxLDEsMSwxLDEsMCwwXSxcblswLDAsMCwwLDAsMCwxLDAsMF0sXG5bMSwxLDEsMSwxLDEsMSwxLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2U1ID1bXG5bMSwxLDEsMSwwLDEsMSwwLDBdLFxuWzAsMCwwLDAsMSwwLDAsMCwwXSxcblsxLDEsMSwxLDEsMSwxLDEsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTYgPVtcblswLDEsMSwwLDEsMCwwLDAsMV0sXG5bMSwwLDAsMSwwLDEsMSwxLDBdLFxuWzAsMSwxLDAsMSwwLDAsMCwxXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlNyA9W1xuWzEsMCwxLDAsMSwwLDEsMCwxXSxcblswLDEsMCwxLDAsMSwwLDEsMF0sXG5bMSwwLDEsMCwxLDAsMSwwLDFdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2U4ID1bXG5bMSwwLDEsMCwxLDEsMCwwLDBdLFxuWzEsMSwxLDAsMSwxLDEsMSwwXSxcblsxLDAsMSwxLDAsMSwwLDAsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTkgPVtcblsxLDEsMSwxLDEsMSwwLDAsMF0sXG5bMSwxLDEsMSwxLDEsMSwxLDBdLFxuWzEsMSwxLDEsMSwxLDAsMCwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlMTAgPVtcblsxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuWzEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG5bMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxuXSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhbmsge1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWUuZ2FtZVdpZHRoO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lLmdhbWVIZWlnaHQ7XG4gICAgICAgIC8vdGFua1xuICAgICAgICB0aGlzLndpZHRoID0gNTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNTA7XG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSAxO1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCxcbiAgICAgICAgfTsgLy8gdGFuayBwb3NpdGlvblxuICAgICAgICAvL2Nhbm5vblxuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlID0gTWF0aC5QSSAvIDQ7XG4gICAgICAgIHRoaXMuY2Fubm9uQW5nbGVTcGVlZCA9IE1hdGguUEkgLyA2MDtcbiAgICAgICAgdGhpcy5jYW5ub25TcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuY2Fubm9uTGVuZ3RoID0gdGhpcy53aWR0aCAqIE1hdGguc3FydCgyKTtcbiAgICAgICAgLy9nYXVnZVxuICAgICAgICB0aGlzLmdhdWdlID0gTWF0aC5QSTtcbiAgICAgICAgdGhpcy5nYXVnZVNwZWVkID0gTWF0aC5QSSAvIDMwO1xuICAgICAgICB0aGlzLmdhdWdlQmFyUmFpZHVzID0gMzA7XG4gICAgICAgIC8vbWlzc2lsZVxuICAgICAgICB0aGlzLm1pc3NpbGVYID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aC8yICsgdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLmNvcyh0aGlzLmNhbm5vbkFuZ2xlKSxcbiAgICAgICAgdGhpcy5taXNzaWxlWSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgLSB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguc2luKHRoaXMuY2Fubm9uQW5nbGUpXG4gICAgICAgIHRoaXMubWlzc2lsZVJhZGl1cyA9IDEwO1xuICAgICAgICB0aGlzLm1pc3NpbGVEeCA9IHRoaXMuZ2F1Z2UgKiBNYXRoLmNvcyh0aGlzLmNhbm5vbkFuZ2xlKTtcbiAgICAgICAgdGhpcy5taXNzaWxlRHkgPSB0aGlzLmdhdWdlICogTWF0aC5zaW4odGhpcy5jYW5ub25BbmdsZSk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDAuMDk4MTtcbiAgICAgICAgdGhpcy5jaGFyZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ncm91bmQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmltYWdlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFua1wiKVxuICAgICAgICB0aGlzLmltYWdlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlzc2lsZVwiKVxuICAgICAgICB0aGlzLmp1bXBjb3VudCA9IDA7XG4gICAgICAgIHRoaXMuanVtcG1heCA9IDE7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgLy90YW5rXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTEsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gJyNhMmM0OWInO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAvL2Nhbm5vblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aC8yLCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yKTtcbiAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgvMiArIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5jb3ModGhpcy5jYW5ub25BbmdsZSksXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yIC0gdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2IoMjU1LCAxMjcsIDgwKSdcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7ICAgIFxuICAgIH0gXG4gICAgZHJhd0d1YWdlKGN0eCkge1xuICAgICAgICAvL2dhdWdlXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgdGhpcy5nYXVnZUJhclJhaWR1cyxcbiAgICAgICAgICAgIE1hdGguUEksXG4gICAgICAgICAgICB0aGlzLmdhdWdlLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpOyAgXG4gICAgfVxuXG4gICAgZHJhd01pc3NpbGUoY3R4KSB7XG4gICAgICAgIC8vbWlzc2lsZVxuICAgICAgICBpZiAoIXRoaXMuZmlyZSkge1xuICAgICAgICAgICAgdGhpcy5taXNzaWxlWCA9IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgvMiArIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5jb3ModGhpcy5jYW5ub25BbmdsZSksXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVZID0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMiAtIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5zaW4odGhpcy5jYW5ub25BbmdsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZUR5IC09IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVggKz0gdGhpcy5taXNzaWxlRHg7XG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVZIC09IHRoaXMubWlzc2lsZUR5O1xuICAgICAgICB9XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTIsIFxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWC0xNyxcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVktMTcsXG4gICAgICAgICAgICAzMCwzMFxuICAgICAgICApIFxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vIGN0eC5hcmMoXG4gICAgICAgIC8vICAgICB0aGlzLm1pc3NpbGVYLFxuICAgICAgICAvLyAgICAgdGhpcy5taXNzaWxlWSxcbiAgICAgICAgLy8gICAgIHRoaXMubWlzc2lsZVJhZGl1cyxcbiAgICAgICAgLy8gICAgIDAsXG4gICAgICAgIC8vICAgICBNYXRoLlBJICogMlxuICAgICAgICAvLyApXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNlODU0NTBcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAtdGhpcy5tYXhTcGVlZDtcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkO1xuICAgIH1cbiAgICBcbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB9XG5cbiAgICBtb3ZlVXAoKSB7XG4gICAgICAgIHRoaXMuY2Fubm9uQW5nbGUgKz0gdGhpcy5jYW5ub25BbmdsZVNwZWVkO1xuICAgIH1cblxuICAgIG1vdmVEb3duKCkge1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlICs9IC10aGlzLmNhbm5vbkFuZ2xlU3BlZWQ7XG4gICAgfVxuXG4gICAgc3RvcGNhbm5vbkFuZ2xlKCkge1xuICAgICAgICB0aGlzLmNhbm5vblNwZWVkID0gMDtcbiAgICB9XG5cbiAgICBzdG9wU3BhY2ViYXIoKSB7XG4gICAgICAgIHRoaXMuZ2F1Z2UgPSAwXG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICghZHQpIHJldHVybjtcbiAgICAgICAgICBcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuY2Fubm9uQW5nbGVTcGVlZDtcblxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggPCAwKSB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggICsgdGhpcy53aWR0aCA+IHRoaXMuZ2FtZVdpZHRoLzIgLSB0aGlzLndpZHRoICogMikgdGhpcy5wb3NpdGlvbi54ID0gKHRoaXMuZ2FtZVdpZHRoLzIpIC0gdGhpcy53aWR0aCAqIDM7XG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgPT09IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIpIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0XG5cbiAgICAgICAgLy9ndWFnZVxuICAgICAgICBpZih0aGlzLmdhdWdlID4gTWF0aC5QSSAqIDIpIHt0aGlzLmdhdWdlID0gTWF0aC5QSSAqIDJ9IFxuXG4gICAgICAgIC8vbWlzc2lsZSB3YWxsIG9uIGxlZnQvcmlnaHQvdG9wL2JvdHRvbVxuICAgICAgICBpZih0aGlzLm1pc3NpbGVYIC0gdGhpcy5taXNzaWxlUmFkaXVzIDwgLSAyICogdGhpcy53aWR0aCB8fFxuICAgICAgICAgICAgIHRoaXMubWlzc2lsZVggKyB0aGlzLm1pc3NpbGVSYWRpdXMgPiB0aGlzLmdhbWVXaWR0aCB8fCBcbiAgICAgICAgICAgICB0aGlzLm1pc3NpbGVZIDwgMCB8fCB0aGlzLm1pc3NpbGVZICsgdGhpcy5taXNzaWxlUmFkaXVzID4gdGhpcy5nYW1lSGVpZ2h0ICsgMip0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hdHRlbXB0c0NvdW50LmlubmVyVGV4dCA9IGBBdHRlbXB0czogJHt0aGlzLmdhbWUuYXR0ZW1wdHN9YFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nYW1lLmF0dGVtcHRzKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL21pc3NpbGUgaGl0dGluZyB0YXJnZXRcbiAgICAgICAgIGlmICh0aGlzLm1pc3NpbGVYID49IHRoaXMuZ2FtZS50YXJnZXQudGFyZ2V0WCAmJlxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWCA8PSB0aGlzLmdhbWUudGFyZ2V0LnRhcmdldFggKyB0aGlzLmdhbWUudGFyZ2V0LnRhcmdldFdpZHRoICYmXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVZID49IHRoaXMuZ2FtZS50YXJnZXQudGFyZ2V0WSAmJlxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWSA8PSB0aGlzLmdhbWVIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5taXNzaWxlWCA9IC10aGlzLm1pc3NpbGVYO1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgPSAtdGhpcy5taXNzaWxlWTtcblxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCk9PnsgYWxlcnQoXCJoaXQgdGFyZ2V0XCIpIH0sIDApXG4gICAgICAgICAgICAgICAgLy8gY2xlYXJJbnRlcnZhbChzZXRJbnRlcnZhbCh0aGlzLmRyYXdNaXNzaWxlKHRoaXMuZ2FtZS5jdHgpLCAxMCkpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubWlzc2lsZUR4ID0gLXRoaXMubWlzc2lsZUR4O1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubWlzc2lsZUR5ID0gLXRoaXMubWlzc2lsZUR5O1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoaXQgdGFyZ2V0JylcbiAgICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gY2hlY2soKSB7XG4gICAgLy8gICAgIGlmKHRoaXMubWlzc2lsZVggPCAwIHx8IHRoaXMubWlzc2lsZVggPiB0aGlzLmdhbWVXaWR0aCB8fCB0aGlzLm1pc3NpbGVZIDwgMCB8fCB0aGlzLm1pc3NpbGVZID4gdGhpcy5nYW1lSGVpZ2h0KSB7XG4gICAgLy8gICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodGhpcy5taXNzaWxlWCA+PSB0aGlzLmdhbWUudGFyZ2V0WCAmJlxuICAgIC8vICAgICAgICAgdGhpcy5taXNzaWxlWCA8PSB0aGlzLmdhbWUudGFyZ2V0WCArIHRoaXMuZ2FtZS50YXJnZXRXaWR0aCAmJlxuICAgIC8vICAgICAgICAgdGhpcy5taXNzaWxlWSA+PSB0aGlzLmdhbWUudGFyZ2V0WSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuaGl0ID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICBjbGVhckludGVydmFsKHN0YXJ0KTtcbiAgICAvLyAgICAgICAgICAgICBpZihjb25maXJtKFwiWW91IGdvdCB0aGlzLCB3YW50IHRvIHBsYXkgYWdhaW4/XCIpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFua0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHRhbmssIGdhbWUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIHRhbmsubW92ZUxlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODogXG4gICAgICAgICAgICAgICAgICAgIHRhbmsubW92ZVVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIHRhbmsubW92ZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YW5rLmZpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmsuY2hhcmdpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFuay5nYXVnZSArPSB0YW5rLmdhdWdlU3BlZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmsubWlzc2lsZUR4ID0gdGFuay5nYXVnZSAqIDEuNSAqIE1hdGguY29zKHRhbmsuY2Fubm9uQW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFuay5taXNzaWxlRHkgPSB0YW5rLmdhdWdlICogMS41ICogTWF0aC5zaW4odGFuay5jYW5ub25BbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YW5rLnNwZWVkIDwgMClcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YW5rLnNwZWVkID4gMClcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YW5rLmNhbm5vbkFuZ2xlID49MCApXG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3RvcGNhbm5vbkFuZ2xlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YW5rLmNhbm5vbkFuZ2xlIDw9IE1hdGguUEkpXG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3RvcGNhbm5vbkFuZ2xlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuY2hhcmdpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGFuay5maXJlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFuay5nYXVnZSA9IE1hdGguUEk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLnRhcmdldFdpZHRoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAgKyAxMDApO1xuICAgICAgICB0aGlzLnRhcmdldEhlaWdodCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwICsgMTAwKTtcbiAgICAgICAgdGhpcy50YXJnZXRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDMwMCAtIHRoaXMudGFyZ2V0V2lkdGgpICsgNTAwKTtcbiAgICAgICAgdGhpcy50YXJnZXRZID0gZ2FtZS5nYW1lSGVpZ2h0IC0gdGhpcy50YXJnZXRIZWlnaHQ7XG4gICAgICAgIHRoaXMuaW1hZ2U0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRcIilcbiAgICB9XG4gICAgdXBkYXRlKCl7fVxuICAgIFxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTQsIHRoaXMudGFyZ2V0WCwgdGhpcy50YXJnZXRZLCB0aGlzLnRhcmdldFdpZHRoLCB0aGlzLnRhcmdldEhlaWdodCk7XG4gICAgfVxufSAgICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGwge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWVcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLndpZHRoID0gNTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNTA7XG4gICAgICAgIHRoaXMubWFya2VkRm9yRGVsZXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbWFnZTMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhbGxcIilcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGxldCBib3R0b21PZk1pc3NpbGUgPSB0aGlzLmdhbWUudGFuay5taXNzaWxlWSArIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVSYWRpdXM7XG4gICAgICAgIGxldCB0b3BPZk1pc3NpbGUgPSB0aGlzLmdhbWUudGFuay5taXNzaWxlWTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0b3BPZldhbGwgPSB0aGlzLnBvc2l0aW9uLnk7XG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5wb3NpdGlvbi54O1xuICAgICAgICBsZXQgcmlnaHQgPSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoO1xuICAgICAgICBsZXQgYm90dG9tID0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQ7XG4gICAgICAgIGlmIChib3R0b21PZk1pc3NpbGUgPj0gdG9wT2ZXYWxsICYmIHRvcE9mTWlzc2lsZSA8PSBib3R0b20gJiYgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVggPj0gbGVmdCAmJiB0aGlzLmdhbWUudGFuay5taXNzaWxlWCArIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVSYWRpdXMgPD0gcmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVYID0gLSB0aGlzLmdhbWUudGFuay5taXNzaWxlWDtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVYID0gLSB0aGlzLmdhbWUudGFuay5taXNzaWxlWTtcbiAgICAgICAgICAgIHRoaXMubWFya2VkRm9yRGVsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgfSBcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UzLHRoaXMuIHBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIFxuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9