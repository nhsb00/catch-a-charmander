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

    this.srcX = 0;
    this.srcY = 0;
    this.sheetWidth = 256;
    this.sheetHeight = 256;
    this.row = 4;
    this.col = 4;
    this.sheetX = this.sheetWidth / this.row;
    this.sheetY = this.sheetHeight / this.row;
    this.currentFrame = 0;
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
    this.reset(); // this.updateFrame();
  } // updateFrame() {
  //     this.currentFrame = ++this.currentFrame % this.row;
  //     this.srcX = this.currentFrame * this.sheetX
  //     this.srcY = 0;
  // }


  _createClass(Tank, [{
    key: "draw",
    value: function draw(ctx) {
      //tank
      // ctx.drawImage(this.image1, this.position.x, this.gameHeight - this.height, this.width, this.height)
      // this.updateFrame();
      ctx.drawImage(this.image1, this.srcX * this.sheetWidth / 4, this.srcY * this.sheetHeight / 4, this.sheetWidth / 4, this.sheetHeight / 4, this.position.x - 5, this.position.y - 15, this.sheetWidth / 4, this.sheetHeight / 4); // ctx.fillStyle = '#a2c49b';
      // ctx.fillRect(this.position.x, this.gameHeight - this.height, this.width, this.height);
      //cannon

      ctx.beginPath();
      ctx.moveTo(this.position.x + this.width / 2, this.position.y + this.height / 2);
      ctx.lineTo(this.position.x + this.width / 2 + this.cannonLength * Math.cos(this.cannonAngle), this.position.y + this.height / 2 - this.cannonLength * Math.sin(this.cannonAngle));
      ctx.strokeStyle = 'rgb(255, 127, 80)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    }
  }, {
    key: "drawGuage",
    value: function drawGuage(ctx) {
      //gauge
      ctx.beginPath();
      ctx.strokeStyle = '#e85450';
      ctx.arc(this.position.x + this.width / 2, this.position.y - this.height / 2, this.gaugeBarRaidus, Math.PI, this.gauge, false);
      ctx.lineWidth = 10;
      ctx.stroke();
      ctx.closePath();
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

      ctx.beginPath(); // ctx.fillStyle = "#e85450";

      ctx.drawImage(this.image2, this.missileX - 17, this.missileY - 17, 30, 30); // ctx.arc(
      //     this.missileX,
      //     this.missileY,
      //     this.missileRadius,
      //     0,
      //     Math.PI * 2
      // )
      // ctx.fill();

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

var TankHandler = function TankHandler(tank, game, ctx) {
  _classCallCheck(this, TankHandler);

  document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case 37:
        tank.moveLeft();
        tank.srcX = 1;
        tank.srcY = 1;
        break;

      case 39:
        tank.moveRight();
        tank.srcX = 1;
        tank.srcY = 2;
        break;

      case 38:
        tank.moveUp();
        tank.srcX = 0;
        tank.srcY = 0;
        break;

      case 40:
        tank.moveDown();
        tank.srcX = 0;
        tank.srcY = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFua2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcmVzZXQuc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImdhbWUiLCJHYW1lIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZXN0YXJ0IiwiaW5zdHJ1Y3Rpb24iLCJtb2RhbCIsInN0eWxlIiwiZGlzcGxheSIsImxhc3RUaW1lIiwiZ2FtZUxvb3AiLCJ0aW1lc3RhbXAiLCJkdCIsImNsZWFyUmVjdCIsInVwZGF0ZSIsImRyYXciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb3VudCIsInR3aW5rbGUiLCJxdWVyeVNlbGVjdG9yIiwiY29sb3IiLCJzZXRJbnRlcnZhbCIsInBsYXkiLCJhdWRpbyIsIkdBTUVTVEFURSIsIlJVTk5JTkciLCJNRU5VIiwiR0FNRU9WRVIiLCJORVdTVEFHRSIsImdhbWVXaWR0aCIsImdhbWVIZWlnaHQiLCJnYW1lc3RhdGUiLCJ0YW5rIiwiVGFuayIsInRhcmdldCIsIlRhcmdldCIsImdhbWVPYmplY3RzIiwid2FsbHMiLCJhdHRlbXB0cyIsImF0dGVtcHRzQ291bnQiLCJtYXhBdHRlbXB0cyIsInN0YWdlcyIsInN0YWdlMCIsInN0YWdlMSIsInN0YWdlMiIsInN0YWdlMyIsInN0YWdlNCIsInN0YWdlNSIsInN0YWdlNiIsInN0YWdlNyIsInN0YWdlOCIsInN0YWdlOSIsInN0YWdlMTAiLCJjdXJyZW50U3RhZ2UiLCJjdXJyZW50U3RhZ2VDb3VudCIsIlRhbmtIYW5kbGVyIiwiaW1hZ2U1IiwiaW1hZ2U2IiwiaW1hZ2U3IiwiYnVpbGRTdGFnZSIsInJlc2V0IiwiaGl0IiwiaW5uZXJUZXh0Iiwic3RhcnQiLCJmb3JFYWNoIiwib2JqZWN0IiwiZmlsdGVyIiwid2FsbCIsIm1hcmtlZEZvckRlbGV0aW9uIiwiZHJhd0d1YWdlIiwiZHJhd01pc3NpbGUiLCJkcmF3SW1hZ2UiLCJmaWxsIiwiZm9udCIsImZpbGxTdHlsZSIsInRleHRBbGlnbiIsImZpbGxUZXh0Iiwic3RhZ2UiLCJyb3ciLCJyb3dJbmRleCIsIndhbGxJbmRleCIsInBvc2l0aW9uIiwieCIsInkiLCJwdXNoIiwiV2FsbCIsInNyY1giLCJzcmNZIiwic2hlZXRXaWR0aCIsInNoZWV0SGVpZ2h0IiwiY29sIiwic2hlZXRYIiwic2hlZXRZIiwiY3VycmVudEZyYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJtYXhTcGVlZCIsInNwZWVkIiwiY2Fubm9uQW5nbGUiLCJNYXRoIiwiUEkiLCJjYW5ub25BbmdsZVNwZWVkIiwiY2Fubm9uU3BlZWQiLCJjYW5ub25MZW5ndGgiLCJzcXJ0IiwiZ2F1Z2UiLCJnYXVnZVNwZWVkIiwiZ2F1Z2VCYXJSYWlkdXMiLCJtaXNzaWxlWCIsImNvcyIsIm1pc3NpbGVZIiwic2luIiwibWlzc2lsZVJhZGl1cyIsIm1pc3NpbGVEeCIsIm1pc3NpbGVEeSIsImdyYXZpdHkiLCJjaGFyZ2luZyIsImZpcmUiLCJncm91bmQiLCJpbWFnZTEiLCJpbWFnZTIiLCJqdW1wY291bnQiLCJqdW1wbWF4IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJhcmMiLCJ0YXJnZXRYIiwidGFyZ2V0V2lkdGgiLCJ0YXJnZXRZIiwiZXZlbnQiLCJrZXlDb2RlIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJtb3ZlVXAiLCJtb3ZlRG93biIsInN0b3AiLCJzdG9wY2Fubm9uQW5nbGUiLCJmbG9vciIsInJhbmRvbSIsInRhcmdldEhlaWdodCIsImltYWdlNCIsImltYWdlMyIsImJvdHRvbU9mTWlzc2lsZSIsInRvcE9mTWlzc2lsZSIsInRvcE9mV2FsbCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFmO0FBRUEsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJ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LENBQVVpQyxJQUFWLENBQWU0RSxRQUFmLElBQTJCMEMsSUFBckYsSUFBNkYsS0FBS3ZKLElBQUwsQ0FBVWlDLElBQVYsQ0FBZTRFLFFBQWYsR0FBMEIsS0FBSzdHLElBQUwsQ0FBVWlDLElBQVYsQ0FBZWdGLGFBQXpDLElBQTBEdUMsS0FBM0osRUFBa0s7QUFDOUosYUFBS3hKLElBQUwsQ0FBVWlDLElBQVYsQ0FBZTRFLFFBQWYsR0FBMEIsQ0FBRSxLQUFLN0csSUFBTCxDQUFVaUMsSUFBVixDQUFlNEUsUUFBM0M7QUFDQSxhQUFLN0csSUFBTCxDQUFVaUMsSUFBVixDQUFlNEUsUUFBZixHQUEwQixDQUFFLEtBQUs3RyxJQUFMLENBQVVpQyxJQUFWLENBQWU4RSxRQUEzQztBQUNBLGFBQUsxQyxpQkFBTCxHQUF5QixJQUF6QjtBQUNDO0FBQ1I7Ozt5QkFFSXpFLEcsRUFBSztBQUNOQSxTQUFHLENBQUM0RSxTQUFKLENBQWMsS0FBSzJFLE1BQW5CLEVBQTBCLEtBQU1qRSxRQUFOLENBQWVDLENBQXpDLEVBQTRDLEtBQUtELFFBQUwsQ0FBY0UsQ0FBMUQsRUFBNkQsS0FBS1csS0FBbEUsRUFBeUUsS0FBS0MsTUFBOUU7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkwsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuc2Nzc1wiXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCJcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVCb2FyZFwiKTtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3QgR0FNRV9XSURUSCA9IDgwMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNjAwO1xuXG5sZXQgZ2FtZSA9IG5ldyBHYW1lKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBjdHgpO1xuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydCcpO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGdhbWUucmVzdGFydCgpO1xufSlcblxuY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uXCIpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuaW5zdHJ1Y3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG5sZXQgbGFzdFRpbWUgPSAwO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCh0aW1lc3RhbXApIHtcbiAgbGV0IGR0ID0gdGltZXN0YW1wIC0gbGFzdFRpbWVcbiAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCA4MDAsIDYwMCk7XG4gIGdhbWUudXBkYXRlKGR0KTtcbiAgZ2FtZS5kcmF3KGN0eCk7XG4gIFxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG5sZXQgY291bnQgPSAwO1xuXG5mdW5jdGlvbiB0d2lua2xlKCl7XG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnIzkzOTU5Nyc7XG4gICAgY291bnQgKys7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyNlODU0NTAnO1xuICAgIGNvdW50ICsrO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAyKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjYTJjNDliJztcbiAgICBjb3VudCArKztcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnI2Y1ZGY0ZCc7XG4gICAgY291bnQgKys7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjN2JjNGM0JztcbiAgICBjb3VudCA9IDA7XG4gIH1cbn1cblxuc2V0SW50ZXJ2YWwodHdpbmtsZSwgMTAwMCk7XG5cbmZ1bmN0aW9uIHBsYXkoKSB7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1wiKTtcbiAgYXVkaW8ucGxheSgpXG59IiwiaW1wb3J0IFRhbmsgZnJvbSAnLi90YW5rJztcbmltcG9ydCBUYW5rSGFuZGxlciBmcm9tICcuL3RhbmtoYW5kbGVyJztcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi90YXJnZXQnO1xuaW1wb3J0IHsgYnVpbGRTdGFnZSwgc3RhZ2UwLCBzdGFnZTEsIHN0YWdlMiwgc3RhZ2UzLCBzdGFnZTQsIHN0YWdlNSwgc3RhZ2U2LCBzdGFnZTcsIHN0YWdlOCwgc3RhZ2U5LCBzdGFnZTEwIH0gZnJvbSAnLi9zdGFnZXMnO1xuXG5leHBvcnQgY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFJVTk5JTkc6IDEsXG4gICAgTUVOVTogMixcbiAgICBHQU1FT1ZFUjogMyxcbiAgICBORVdTVEFHRTogNCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0LCBjdHgpIHtcblxuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0OyAgICBcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGhcbiAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuTUVOVTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMudGFuayA9IG5ldyBUYW5rKHRoaXMpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IG5ldyBUYXJnZXQodGhpcyk7ICBcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLndhbGxzID0gW11cbiAgICAgICAgdGhpcy5hdHRlbXB0cyA9IDA7XG4gICAgICAgIHRoaXMuYXR0ZW1wdHNDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRlbXB0cycpXG4gICAgICAgIHRoaXMubWF4QXR0ZW1wdHMgPSAxMDtcblxuICAgICAgICB0aGlzLnN0YWdlcyA9IFtzdGFnZTAsIHN0YWdlMSwgc3RhZ2UyLCBzdGFnZTMsIHN0YWdlNCwgc3RhZ2U1LCBzdGFnZTYsIHN0YWdlNywgc3RhZ2U4LCBzdGFnZTksIHN0YWdlMTBdXG4gICAgICAgIHRoaXMuY3VycmVudFN0YWdlID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhZ2VDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhZ2VcIilcbiAgICAgICAgbmV3IFRhbmtIYW5kbGVyKHRoaXMudGFuaywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbWFnZTUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpXG4gICAgICAgIHRoaXMuaW1hZ2U2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lb3ZlclwiKSBcbiAgICAgICAgdGhpcy5pbWFnZTcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld3N0YWdlXCIpXG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmKHRoaXMuZ2FtZXN0YXRlICE9PSBHQU1FU1RBVEUuTUVOVSAmJlxuICAgICAgICAgICAgdGhpcy5nYW1lc3RhdGUgIT09IEdBTUVTVEFURS5ORVdTVEFHRSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBuZXcgVGFyZ2V0KHRoaXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0YWdlID49IDExKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhZ2UgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy53YWxscyA9IGJ1aWxkU3RhZ2UodGhpcywgdGhpcy5zdGFnZXNbdGhpcy5jdXJyZW50U3RhZ2VdKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBbdGhpcy50YW5rLCB0aGlzLnRhcmdldF1cbiAgICAgICAgICAgIHRoaXMuYXR0ZW1wdHMgPSAwO1xuICAgICAgICAgICAgdGhpcy50YW5rLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkdcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWVzdGF0ZSA9IEdBTUVTVEFURS5ORVdTVEFHRTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudGFuayA9IG5ldyBUYW5rKHRoaXMpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IG5ldyBUYXJnZXQodGhpcyk7XG4gICAgICAgIHRoaXMud2FsbHMgPSBidWlsZFN0YWdlKHRoaXMsIHRoaXMuc3RhZ2VzWzBdKTtcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFt0aGlzLnRhbmssIHRoaXMudGFyZ2V0XVxuICAgICAgICBuZXcgVGFua0hhbmRsZXIodGhpcy50YW5rLCB0aGlzKTtcbiAgICAgICAgdGhpcy5hdHRlbXB0cyA9IDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN1cnJlbnRTdGFnZSA9IDA7XG4gICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmF0dGVtcHRzID09PSB0aGlzLm1heEF0dGVtcHRzKSB0aGlzLmdhbWVzdGF0ZSA9IEdBTUVTVEFURS5HQU1FT1ZFUjtcblxuICAgICAgICBpZih0aGlzLmdhbWVzdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUgfHxcbiAgICAgICAgICAgIHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy50YW5rLmhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy50YW5rLmhpdCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhZ2UrKztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YWdlQ291bnQuaW5uZXJUZXh0ID0gYFN0YWdlOiAke3RoaXMuY3VycmVudFN0YWdlfWBcbiAgICAgICAgICAgIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLk5FV1NUQUdFO1xuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBbLi4udGhpcy5nYW1lT2JqZWN0cywgLi4udGhpcy53YWxsc10uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnVwZGF0ZShkdCkpOyBcblxuICAgICAgIHRoaXMud2FsbHMgPSB0aGlzLndhbGxzLmZpbHRlcih3YWxsID0+ICF3YWxsLm1hcmtlZEZvckRlbGV0aW9uKVxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIHRoaXMudGFuay5kcmF3KGN0eCk7XG4gICAgICAgIHRoaXMudGFuay5kcmF3R3VhZ2UoY3R4KTtcbiAgICAgICAgdGhpcy50YW5rLmRyYXdNaXNzaWxlKGN0eCk7XG4gICAgICAgIFsuLi50aGlzLmdhbWVPYmplY3RzLCAuLi50aGlzLndhbGxzXS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QuZHJhdyhjdHgpKTsgXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmdhbWVzdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTUsIDAsMCx0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KVxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjMwcHggc2VyaWZcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID1cImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiUHJlc3MgRW50ZXIgdG8gc3RhcnRcIiwgdGhpcy5nYW1lV2lkdGggLzIgLCB0aGlzLmdhbWVIZWlnaHQvMilcbiAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAgaWYodGhpcy5nYW1lc3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUikge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlNiwgMCwwLHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQpXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICBjdHguZm9udCA9IFwiMzBweCBzZXJpZlwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIGN0eC50ZXh0QWxpZ24gPVwiY2VudGVyXCI7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgdGhpcy5nYW1lV2lkdGggLzIgLCB0aGlzLmdhbWVIZWlnaHQvMilcbiAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuTkVXU1RBR0UpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTcsIDAsMCx0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KVxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjMwcHggc2VyaWZcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID1cImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiUHJlc3MgRW50ZXIgdG8gUmUtc3RhcnRcIiwgdGhpcy5nYW1lV2lkdGggLzIgLCB0aGlzLmdhbWVIZWlnaHQvMilcbiAgICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIHRvZ2dsZVBhdXNlKCkge1xuICAgIC8vICAgICBpZih0aGlzLmdhbWVzdGF0ZSA9PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmdhbWVzdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuUEFVU0VEO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxufSIsImltcG9ydCBXYWxsIGZyb20gJy4vd2FsbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFN0YWdlKGdhbWUsIHN0YWdlKSB7XG4gICAgbGV0IHdhbGxzID0gW107XG5cbiAgICBzdGFnZS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKCh3YWxsLCB3YWxsSW5kZXgpPT57XG4gICAgICAgICAgICBpZih3YWxsID09PSAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiA0NTAgLSA1MCAqIHJvd0luZGV4LCBcbiAgICAgICAgICAgICAgICAgICAgeTogNTUwIC0gNTAgKiB3YWxsSW5kZXhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2FsbHMucHVzaChuZXcgV2FsbChnYW1lLCBwb3NpdGlvbikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gd2FsbHNcbn1cblxuZXhwb3J0IGNvbnN0IHN0YWdlMCA9IFtcblsxXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlMSA9W1xuWzAsMCwwLDAsMCwwLDAsMSwwXSxcblsxLDEsMSwxLDEsMSwxLDEsMF0sXG5bMCwwLDAsMCwwLDAsMCwxLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2UyID1bXG5bMSwxLDEsMSwxLDEsMSwxLDBdLFxuWzAsMCwwLDAsMSwwLDAsMCwwXSxcblsxLDEsMSwxLDEsMSwxLDEsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTMgPVtcblsxLDEsMSwxLDEsMSwxLDAsMF0sXG5bMCwwLDAsMSwwLDAsMCwxLDBdLFxuWzEsMSwxLDEsMSwxLDEsMCwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlNCA9W1xuWzEsMSwxLDEsMSwxLDEsMCwwXSxcblswLDAsMCwwLDAsMCwxLDAsMF0sXG5bMSwxLDEsMSwxLDEsMSwxLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2U1ID1bXG5bMSwxLDEsMSwwLDEsMSwwLDBdLFxuWzAsMCwwLDAsMSwwLDAsMCwwXSxcblsxLDEsMSwxLDEsMSwxLDEsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTYgPVtcblswLDEsMSwwLDEsMCwwLDAsMV0sXG5bMSwwLDAsMSwwLDEsMSwxLDBdLFxuWzAsMSwxLDAsMSwwLDAsMCwxXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlNyA9W1xuWzEsMCwxLDAsMSwwLDEsMCwxXSxcblswLDEsMCwxLDAsMSwwLDEsMF0sXG5bMSwwLDEsMCwxLDAsMSwwLDFdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2U4ID1bXG5bMSwwLDEsMCwxLDEsMCwwLDBdLFxuWzEsMSwxLDAsMSwxLDEsMSwwXSxcblsxLDAsMSwxLDAsMSwwLDAsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTkgPVtcblsxLDEsMSwxLDEsMSwwLDAsMF0sXG5bMSwxLDEsMSwxLDEsMSwxLDBdLFxuWzEsMSwxLDEsMSwxLDAsMCwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlMTAgPVtcblsxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuWzEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG5bMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxuXSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhbmsge1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWUuZ2FtZVdpZHRoO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lLmdhbWVIZWlnaHQ7XG4gICAgICAgIC8vdGFua1xuICAgICAgICB0aGlzLnNyY1ggPSAwO1xuICAgICAgICB0aGlzLnNyY1kgPSAwO1xuICAgICAgICB0aGlzLnNoZWV0V2lkdGggPSAyNTY7XG4gICAgICAgIHRoaXMuc2hlZXRIZWlnaHQgPSAyNTY7XG4gICAgICAgIHRoaXMucm93ID0gNDtcbiAgICAgICAgdGhpcy5jb2wgPSA0O1xuICAgICAgICB0aGlzLnNoZWV0WCA9IHRoaXMuc2hlZXRXaWR0aC8gdGhpcy5yb3c7XG4gICAgICAgIHRoaXMuc2hlZXRZID0gdGhpcy5zaGVldEhlaWdodC8gdGhpcy5yb3c7XG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcblxuICAgICAgICB0aGlzLndpZHRoID0gNTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNTA7XG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSAxO1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCxcbiAgICAgICAgfTsgLy8gdGFuayBwb3NpdGlvblxuICAgICAgICAvL2Nhbm5vblxuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlID0gTWF0aC5QSSAvIDQ7XG4gICAgICAgIHRoaXMuY2Fubm9uQW5nbGVTcGVlZCA9IE1hdGguUEkgLyA2MDtcbiAgICAgICAgdGhpcy5jYW5ub25TcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuY2Fubm9uTGVuZ3RoID0gdGhpcy53aWR0aCAqIE1hdGguc3FydCgyKTtcbiAgICAgICAgLy9nYXVnZVxuICAgICAgICB0aGlzLmdhdWdlID0gTWF0aC5QSTtcbiAgICAgICAgdGhpcy5nYXVnZVNwZWVkID0gTWF0aC5QSSAvIDMwO1xuICAgICAgICB0aGlzLmdhdWdlQmFyUmFpZHVzID0gMzA7XG4gICAgICAgIC8vbWlzc2lsZVxuICAgICAgICB0aGlzLm1pc3NpbGVYID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aC8yICsgdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLmNvcyh0aGlzLmNhbm5vbkFuZ2xlKSxcbiAgICAgICAgdGhpcy5taXNzaWxlWSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgLSB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguc2luKHRoaXMuY2Fubm9uQW5nbGUpXG4gICAgICAgIHRoaXMubWlzc2lsZVJhZGl1cyA9IDEwO1xuICAgICAgICB0aGlzLm1pc3NpbGVEeCA9IHRoaXMuZ2F1Z2UgKiBNYXRoLmNvcyh0aGlzLmNhbm5vbkFuZ2xlKTtcbiAgICAgICAgdGhpcy5taXNzaWxlRHkgPSB0aGlzLmdhdWdlICogTWF0aC5zaW4odGhpcy5jYW5ub25BbmdsZSk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDAuMDk4MTtcbiAgICAgICAgdGhpcy5jaGFyZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ncm91bmQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmltYWdlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFua1wiKVxuICAgICAgICB0aGlzLmltYWdlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWlzc2lsZVwiKVxuICAgICAgICB0aGlzLmp1bXBjb3VudCA9IDA7XG4gICAgICAgIHRoaXMuanVtcG1heCA9IDE7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgLy8gdGhpcy51cGRhdGVGcmFtZSgpO1xuICAgIH1cbiAgICBcbiAgICAvLyB1cGRhdGVGcmFtZSgpIHtcbiAgICAvLyAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSArK3RoaXMuY3VycmVudEZyYW1lICUgdGhpcy5yb3c7XG4gICAgLy8gICAgIHRoaXMuc3JjWCA9IHRoaXMuY3VycmVudEZyYW1lICogdGhpcy5zaGVldFhcbiAgICAvLyAgICAgdGhpcy5zcmNZID0gMDtcbiAgICAvLyB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICAvL3RhbmtcbiAgICAgICAgLy8gY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlMSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIC8vIHRoaXMudXBkYXRlRnJhbWUoKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlMSwgdGhpcy5zcmNYKnRoaXMuc2hlZXRXaWR0aC80LCB0aGlzLnNyY1kqdGhpcy5zaGVldEhlaWdodC80LCB0aGlzLnNoZWV0V2lkdGgvNCwgdGhpcy5zaGVldEhlaWdodC80LCB0aGlzLnBvc2l0aW9uLngtNSwgdGhpcy5wb3NpdGlvbi55LTE1LCB0aGlzLnNoZWV0V2lkdGgvNCwgdGhpcy5zaGVldEhlaWdodC80KVxuXG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSAnI2EyYzQ5Yic7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIC8vY2Fubm9uXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLzIsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIpO1xuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aC8yICsgdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLmNvcyh0aGlzLmNhbm5vbkFuZ2xlKSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgLSB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguc2luKHRoaXMuY2Fubm9uQW5nbGUpKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYigyNTUsIDEyNywgODApJ1xuICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7ICAgIFxuICAgIH0gXG4gICAgZHJhd0d1YWdlKGN0eCkge1xuICAgICAgICAvL2dhdWdlXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNlODU0NTAnXG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtIHRoaXMuaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIHRoaXMuZ2F1Z2VCYXJSYWlkdXMsXG4gICAgICAgICAgICBNYXRoLlBJLFxuICAgICAgICAgICAgdGhpcy5nYXVnZSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxMDtcbiAgICAgICAgY3R4LnN0cm9rZSgpOyAgXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTsgXG4gICAgfVxuXG4gICAgZHJhd01pc3NpbGUoY3R4KSB7XG4gICAgICAgIC8vbWlzc2lsZVxuICAgICAgICBpZiAoIXRoaXMuZmlyZSkge1xuICAgICAgICAgICAgdGhpcy5taXNzaWxlWCA9IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgvMiArIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5jb3ModGhpcy5jYW5ub25BbmdsZSksXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVZID0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMiAtIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5zaW4odGhpcy5jYW5ub25BbmdsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZUR5IC09IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVggKz0gdGhpcy5taXNzaWxlRHg7XG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVZIC09IHRoaXMubWlzc2lsZUR5O1xuICAgICAgICB9XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiI2U4NTQ1MFwiO1xuICAgICAgICBcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlMiwgXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYLTE3LFxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWS0xNyxcbiAgICAgICAgICAgIDMwLDMwXG4gICAgICAgICkgXG4gICAgICAgIC8vIGN0eC5hcmMoXG4gICAgICAgIC8vICAgICB0aGlzLm1pc3NpbGVYLFxuICAgICAgICAvLyAgICAgdGhpcy5taXNzaWxlWSxcbiAgICAgICAgLy8gICAgIHRoaXMubWlzc2lsZVJhZGl1cyxcbiAgICAgICAgLy8gICAgIDAsXG4gICAgICAgIC8vICAgICBNYXRoLlBJICogMlxuICAgICAgICAvLyApXG4gICAgICAgIC8vIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKVxuICAgIH1cblxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMubWF4U3BlZWQ7XG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5tYXhTcGVlZDtcbiAgICB9XG4gICAgXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgfVxuXG4gICAgbW92ZVVwKCkge1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlICs9IHRoaXMuY2Fubm9uQW5nbGVTcGVlZDtcbiAgICB9XG5cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZSArPSAtdGhpcy5jYW5ub25BbmdsZVNwZWVkO1xuICAgIH1cblxuICAgIHN0b3BjYW5ub25BbmdsZSgpIHtcbiAgICAgICAgdGhpcy5jYW5ub25TcGVlZCA9IDA7XG4gICAgfVxuXG4gICAgc3RvcFNwYWNlYmFyKCkge1xuICAgICAgICB0aGlzLmdhdWdlID0gMFxuICAgIH1cbiAgICBcbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICghZHQpIHJldHVybjtcbiAgICAgICAgICBcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuY2Fubm9uQW5nbGVTcGVlZDtcblxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggPCAwKSB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggICsgdGhpcy53aWR0aCA+IHRoaXMuZ2FtZVdpZHRoLzIgLSB0aGlzLndpZHRoICogMikgdGhpcy5wb3NpdGlvbi54ID0gKHRoaXMuZ2FtZVdpZHRoLzIpIC0gdGhpcy53aWR0aCAqIDM7XG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgPT09IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIpIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0XG5cbiAgICAgICAgLy9ndWFnZVxuICAgICAgICBpZih0aGlzLmdhdWdlID4gTWF0aC5QSSAqIDIpIHt0aGlzLmdhdWdlID0gTWF0aC5QSSAqIDJ9IFxuXG4gICAgICAgIC8vbWlzc2lsZSB3YWxsIG9uIGxlZnQvcmlnaHQvdG9wL2JvdHRvbVxuICAgICAgICBpZih0aGlzLm1pc3NpbGVYIC0gdGhpcy5taXNzaWxlUmFkaXVzIDwgLSAyICogdGhpcy53aWR0aCB8fFxuICAgICAgICAgICAgIHRoaXMubWlzc2lsZVggKyB0aGlzLm1pc3NpbGVSYWRpdXMgPiB0aGlzLmdhbWVXaWR0aCB8fCBcbiAgICAgICAgICAgICB0aGlzLm1pc3NpbGVZIDwgMCB8fCB0aGlzLm1pc3NpbGVZICsgdGhpcy5taXNzaWxlUmFkaXVzID4gdGhpcy5nYW1lSGVpZ2h0ICsgMip0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hdHRlbXB0c0NvdW50LmlubmVyVGV4dCA9IGBBdHRlbXB0czogJHt0aGlzLmdhbWUuYXR0ZW1wdHN9YFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nYW1lLmF0dGVtcHRzKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL21pc3NpbGUgaGl0dGluZyB0YXJnZXRcbiAgICAgICAgIGlmICh0aGlzLm1pc3NpbGVYID49IHRoaXMuZ2FtZS50YXJnZXQudGFyZ2V0WCAmJlxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWCA8PSB0aGlzLmdhbWUudGFyZ2V0LnRhcmdldFggKyB0aGlzLmdhbWUudGFyZ2V0LnRhcmdldFdpZHRoICYmXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVZID49IHRoaXMuZ2FtZS50YXJnZXQudGFyZ2V0WSAmJlxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWSA8PSB0aGlzLmdhbWVIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5taXNzaWxlWCA9IC10aGlzLm1pc3NpbGVYO1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgPSAtdGhpcy5taXNzaWxlWTtcblxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCk9PnsgYWxlcnQoXCJoaXQgdGFyZ2V0XCIpIH0sIDApXG4gICAgICAgICAgICAgICAgLy8gY2xlYXJJbnRlcnZhbChzZXRJbnRlcnZhbCh0aGlzLmRyYXdNaXNzaWxlKHRoaXMuZ2FtZS5jdHgpLCAxMCkpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubWlzc2lsZUR4ID0gLXRoaXMubWlzc2lsZUR4O1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubWlzc2lsZUR5ID0gLXRoaXMubWlzc2lsZUR5O1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoaXQgdGFyZ2V0JylcbiAgICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gY2hlY2soKSB7XG4gICAgLy8gICAgIGlmKHRoaXMubWlzc2lsZVggPCAwIHx8IHRoaXMubWlzc2lsZVggPiB0aGlzLmdhbWVXaWR0aCB8fCB0aGlzLm1pc3NpbGVZIDwgMCB8fCB0aGlzLm1pc3NpbGVZID4gdGhpcy5nYW1lSGVpZ2h0KSB7XG4gICAgLy8gICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodGhpcy5taXNzaWxlWCA+PSB0aGlzLmdhbWUudGFyZ2V0WCAmJlxuICAgIC8vICAgICAgICAgdGhpcy5taXNzaWxlWCA8PSB0aGlzLmdhbWUudGFyZ2V0WCArIHRoaXMuZ2FtZS50YXJnZXRXaWR0aCAmJlxuICAgIC8vICAgICAgICAgdGhpcy5taXNzaWxlWSA+PSB0aGlzLmdhbWUudGFyZ2V0WSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuaGl0ID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICBjbGVhckludGVydmFsKHN0YXJ0KTtcbiAgICAvLyAgICAgICAgICAgICBpZihjb25maXJtKFwiWW91IGdvdCB0aGlzLCB3YW50IHRvIHBsYXkgYWdhaW4/XCIpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IodGFuaywgZ2FtZSwgY3R4KSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3JjWCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3JjWSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICAgIHRhbmsubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3JjWCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3JjWSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6IFxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVVcCgpO1xuICAgICAgICAgICAgICAgICAgICB0YW5rLnNyY1ggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0YW5rLnNyY1kgPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVEb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3JjWCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3JjWSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFuay5maXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5rLmNoYXJnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmsuZ2F1Z2UgKz0gdGFuay5nYXVnZVNwZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5rLm1pc3NpbGVEeCA9IHRhbmsuZ2F1Z2UgKiAxLjUgKiBNYXRoLmNvcyh0YW5rLmNhbm5vbkFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbmsubWlzc2lsZUR5ID0gdGFuay5nYXVnZSAqIDEuNSAqIE1hdGguc2luKHRhbmsuY2Fubm9uQW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFuay5zcGVlZCA8IDApXG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFuay5zcGVlZCA+IDApXG4gICAgICAgICAgICAgICAgICAgIHRhbmsuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFuay5jYW5ub25BbmdsZSA+PTAgKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3BjYW5ub25BbmdsZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGFuay5jYW5ub25BbmdsZSA8PSBNYXRoLlBJKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3BjYW5ub25BbmdsZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgICB0YW5rLmNoYXJnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuZmlyZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRhbmsuZ2F1Z2UgPSBNYXRoLlBJO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy50YXJnZXRXaWR0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwICsgMTAwKTtcbiAgICAgICAgdGhpcy50YXJnZXRIZWlnaHQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCArIDEwMCk7XG4gICAgICAgIHRoaXMudGFyZ2V0WCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgzMDAgLSB0aGlzLnRhcmdldFdpZHRoKSArIDUwMCk7XG4gICAgICAgIHRoaXMudGFyZ2V0WSA9IGdhbWUuZ2FtZUhlaWdodCAtIHRoaXMudGFyZ2V0SGVpZ2h0O1xuICAgICAgICB0aGlzLmltYWdlNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0XCIpXG4gICAgfVxuICAgIHVwZGF0ZSgpe31cbiAgICBcbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2U0LCB0aGlzLnRhcmdldFgsIHRoaXMudGFyZ2V0WSwgdGhpcy50YXJnZXRXaWR0aCwgdGhpcy50YXJnZXRIZWlnaHQpO1xuICAgIH1cbn0gICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxsIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBwb3NpdGlvbikge1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDUwO1xuICAgICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW1hZ2UzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWxsXCIpXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBsZXQgYm90dG9tT2ZNaXNzaWxlID0gdGhpcy5nYW1lLnRhbmsubWlzc2lsZVkgKyB0aGlzLmdhbWUudGFuay5taXNzaWxlUmFkaXVzO1xuICAgICAgICBsZXQgdG9wT2ZNaXNzaWxlID0gdGhpcy5nYW1lLnRhbmsubWlzc2lsZVk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdG9wT2ZXYWxsID0gdGhpcy5wb3NpdGlvbi55O1xuICAgICAgICBsZXQgbGVmdCA9IHRoaXMucG9zaXRpb24ueDtcbiAgICAgICAgbGV0IHJpZ2h0ID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aDtcbiAgICAgICAgbGV0IGJvdHRvbSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0O1xuICAgICAgICBpZiAoYm90dG9tT2ZNaXNzaWxlID49IHRvcE9mV2FsbCAmJiB0b3BPZk1pc3NpbGUgPD0gYm90dG9tICYmIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVYID49IGxlZnQgJiYgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVggKyB0aGlzLmdhbWUudGFuay5taXNzaWxlUmFkaXVzIDw9IHJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGFuay5taXNzaWxlWCA9IC0gdGhpcy5nYW1lLnRhbmsubWlzc2lsZVg7XG4gICAgICAgICAgICB0aGlzLmdhbWUudGFuay5taXNzaWxlWCA9IC0gdGhpcy5nYW1lLnRhbmsubWlzc2lsZVk7XG4gICAgICAgICAgICB0aGlzLm1hcmtlZEZvckRlbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlMyx0aGlzLiBwb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICBcbiAgICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==