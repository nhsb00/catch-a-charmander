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
var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["default"](GAME_WIDTH, GAME_HEIGHT, ctx);
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
  // PAUSED: 0,
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
    this.image5 = document.getElementById("background");
    this.image6 = document.getElementById("gameover");
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
      // this.gamestate = GAMESTATE.NEWSTAGE;
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
        ctx.fillStyle = "rgba(0,0,0,0.1)";
        ctx.fill();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Press Enter to start", this.gameWidth / 2, this.gameHeight / 2);
      }

      if (this.gamestate === GAMESTATE.GAMEOVER) {
        ctx.drawImage(this.image6, 0, 0, this.gameWidth, this.gameHeight);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
      }

      if (this.gamestate === GAMESTATE.NEWSTAGE) {
        ctx.drawImage(this.image6, 0, 0, this.gameWidth, this.gameHeight);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();
        ctx.font = "30px Arial";
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFua2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJnYW1lIiwiR2FtZSIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicmVzdGFydCIsImluc3RydWN0aW9uIiwibW9kYWwiLCJzdHlsZSIsImRpc3BsYXkiLCJsYXN0VGltZSIsImdhbWVMb29wIiwidGltZXN0YW1wIiwiZHQiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY291bnQiLCJ0d2lua2xlIiwicXVlcnlTZWxlY3RvciIsImNvbG9yIiwic2V0SW50ZXJ2YWwiLCJwbGF5IiwiYXVkaW8iLCJHQU1FU1RBVEUiLCJSVU5OSU5HIiwiTUVOVSIsIkdBTUVPVkVSIiwiTkVXU1RBR0UiLCJnYW1lV2lkdGgiLCJnYW1lSGVpZ2h0IiwiZ2FtZXN0YXRlIiwidGFuayIsIlRhbmsiLCJ0YXJnZXQiLCJUYXJnZXQiLCJnYW1lT2JqZWN0cyIsIndhbGxzIiwiYXR0ZW1wdHMiLCJhdHRlbXB0c0NvdW50IiwibWF4QXR0ZW1wdHMiLCJzdGFnZXMiLCJzdGFnZTAiLCJzdGFnZTEiLCJzdGFnZTIiLCJzdGFnZTMiLCJzdGFnZTQiLCJzdGFnZTUiLCJzdGFnZTYiLCJzdGFnZTciLCJzdGFnZTgiLCJzdGFnZTkiLCJzdGFnZTEwIiwiY3VycmVudFN0YWdlIiwiY3VycmVudFN0YWdlQ291bnQiLCJUYW5rSGFuZGxlciIsImltYWdlNSIsImltYWdlNiIsImJ1aWxkU3RhZ2UiLCJyZXNldCIsImhpdCIsImlubmVyVGV4dCIsInN0YXJ0IiwiZm9yRWFjaCIsIm9iamVjdCIsImZpbHRlciIsIndhbGwiLCJtYXJrZWRGb3JEZWxldGlvbiIsImRyYXdHdWFnZSIsImRyYXdNaXNzaWxlIiwiZHJhd0ltYWdlIiwiZmlsbFN0eWxlIiwiZmlsbCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsInN0YWdlIiwicm93Iiwicm93SW5kZXgiLCJ3YWxsSW5kZXgiLCJwb3NpdGlvbiIsIngiLCJ5IiwicHVzaCIsIldhbGwiLCJ3aWR0aCIsImhlaWdodCIsIm1heFNwZWVkIiwic3BlZWQiLCJjYW5ub25BbmdsZSIsIk1hdGgiLCJQSSIsImNhbm5vbkFuZ2xlU3BlZWQiLCJjYW5ub25TcGVlZCIsImNhbm5vbkxlbmd0aCIsInNxcnQiLCJnYXVnZSIsImdhdWdlU3BlZWQiLCJnYXVnZUJhclJhaWR1cyIsIm1pc3NpbGVYIiwiY29zIiwibWlzc2lsZVkiLCJzaW4iLCJtaXNzaWxlUmFkaXVzIiwibWlzc2lsZUR4IiwibWlzc2lsZUR5IiwiZ3Jhdml0eSIsImNoYXJnaW5nIiwiZmlyZSIsImdyb3VuZCIsImltYWdlMSIsImltYWdlMiIsImp1bXBjb3VudCIsImp1bXBtYXgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImNsb3NlUGF0aCIsImFyYyIsInRhcmdldFgiLCJ0YXJnZXRXaWR0aCIsInRhcmdldFkiLCJldmVudCIsImtleUNvZGUiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsIm1vdmVVcCIsIm1vdmVEb3duIiwic3RvcCIsInN0b3BjYW5ub25BbmdsZSIsImZsb29yIiwicmFuZG9tIiwidGFyZ2V0SGVpZ2h0IiwiaW1hZ2U0IiwiaW1hZ2UzIiwiYm90dG9tT2ZNaXNzaWxlIiwidG9wT2ZNaXNzaWxlIiwidG9wT2ZXYWxsIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWY7QUFFQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBRUEsSUFBTUMsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBSUMsSUFBSSxHQUFHLElBQUlDLHFEQUFKLENBQVNILFVBQVQsRUFBcUJDLFdBQXJCLEVBQWtDSCxHQUFsQyxDQUFYO0FBRUEsSUFBTU0sTUFBTSxHQUFHUixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZjtBQUNBTyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQUFDLENBQUMsRUFBSTtBQUNwQ0osTUFBSSxDQUFDSyxPQUFMO0FBQ0QsQ0FGRDtBQUlBLElBQU1DLFdBQVcsR0FBR1osUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBQ0EsSUFBTVksS0FBSyxHQUFHYixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBVyxXQUFXLENBQUNILGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFVBQUFDLENBQUMsRUFBSTtBQUN6Q0csT0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVosR0FBc0IsT0FBdEI7QUFDRCxDQUZEO0FBR0FGLEtBQUssQ0FBQ0osZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBQUMsQ0FBQyxFQUFJO0FBQ25DRyxPQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixHQUFzQixNQUF0QjtBQUNELENBRkQ7QUFJQSxJQUFJQyxRQUFRLEdBQUcsQ0FBZjs7QUFFQSxTQUFTQyxRQUFULENBQWtCQyxTQUFsQixFQUE2QjtBQUMzQixNQUFJQyxFQUFFLEdBQUdELFNBQVMsR0FBR0YsUUFBckI7QUFDQUEsVUFBUSxHQUFHRSxTQUFYO0FBRUFoQixLQUFHLENBQUNrQixTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixHQUFwQixFQUF5QixHQUF6QjtBQUVBZCxNQUFJLENBQUNlLE1BQUwsQ0FBWUYsRUFBWjtBQUNBYixNQUFJLENBQUNnQixJQUFMLENBQVVwQixHQUFWO0FBRUFxQix1QkFBcUIsQ0FBQ04sUUFBRCxDQUFyQjtBQUNEOztBQUVETSxxQkFBcUIsQ0FBQ04sUUFBRCxDQUFyQjtBQUVBLElBQUlPLEtBQUssR0FBRyxDQUFaOztBQUVBLFNBQVNDLE9BQVQsR0FBa0I7QUFDaEIsTUFBSUQsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZnhCLFlBQVEsQ0FBQzBCLGFBQVQsQ0FBdUIsSUFBdkIsRUFBNkJaLEtBQTdCLENBQW1DYSxLQUFuQyxHQUEyQyxTQUEzQztBQUNBSCxTQUFLO0FBQ04sR0FIRCxNQUdPLElBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ3RCeEIsWUFBUSxDQUFDMEIsYUFBVCxDQUF1QixJQUF2QixFQUE2QlosS0FBN0IsQ0FBbUNhLEtBQW5DLEdBQTJDLFNBQTNDO0FBQ0FILFNBQUs7QUFDTixHQUhNLE1BR0EsSUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDdEJ4QixZQUFRLENBQUMwQixhQUFULENBQXVCLElBQXZCLEVBQTZCWixLQUE3QixDQUFtQ2EsS0FBbkMsR0FBMkMsU0FBM0M7QUFDQUgsU0FBSztBQUNOLEdBSE0sTUFHQSxJQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUN0QnhCLFlBQVEsQ0FBQzBCLGFBQVQsQ0FBdUIsSUFBdkIsRUFBNkJaLEtBQTdCLENBQW1DYSxLQUFuQyxHQUEyQyxTQUEzQztBQUNBSCxTQUFLO0FBQ04sR0FITSxNQUdBO0FBQ0x4QixZQUFRLENBQUMwQixhQUFULENBQXVCLElBQXZCLEVBQTZCWixLQUE3QixDQUFtQ2EsS0FBbkMsR0FBMkMsU0FBM0M7QUFDQUgsU0FBSyxHQUFHLENBQVI7QUFDRDtBQUNGOztBQUVESSxXQUFXLENBQUNILE9BQUQsRUFBVSxJQUFWLENBQVg7O0FBRUEsU0FBU0ksSUFBVCxHQUFnQjtBQUNkLE1BQU1DLEtBQUssR0FBRzlCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBQ0E2QixPQUFLLENBQUNELElBQU47QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVEO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUUsU0FBUyxHQUFHO0FBQ3JCO0FBQ0FDLFNBQU8sRUFBRSxDQUZZO0FBR3JCQyxNQUFJLEVBQUUsQ0FIZTtBQUlyQkMsVUFBUSxFQUFFLENBSlc7QUFLckJDLFVBQVEsRUFBRTtBQUxXLENBQWxCOztJQVFjNUIsSTtBQUNqQixnQkFBWTZCLFNBQVosRUFBdUJDLFVBQXZCLEVBQW1DbkMsR0FBbkMsRUFBd0M7QUFBQTs7QUFFcEMsU0FBS21DLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLRSxTQUFMLEdBQWlCUCxTQUFTLENBQUNFLElBQTNCO0FBQ0EsU0FBSy9CLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtxQyxJQUFMLEdBQVksSUFBSUMsNkNBQUosQ0FBUyxJQUFULENBQVo7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsK0NBQUosQ0FBVyxJQUFYLENBQWQ7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQjlDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFyQjtBQUNBLFNBQUs4QyxXQUFMLEdBQW1CLEVBQW5CO0FBRUEsU0FBS0MsTUFBTCxHQUFjLENBQUNDLDhDQUFELEVBQVNDLDhDQUFULEVBQWlCQyw4Q0FBakIsRUFBeUJDLDhDQUF6QixFQUFpQ0MsOENBQWpDLEVBQXlDQyw4Q0FBekMsRUFBaURDLDhDQUFqRCxFQUF5REMsOENBQXpELEVBQWlFQyw4Q0FBakUsRUFBeUVDLDhDQUF6RSxFQUFpRkMsK0NBQWpGLENBQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUI3RCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBekI7QUFDQSxRQUFJNkQsb0RBQUosQ0FBZ0IsS0FBS3ZCLElBQXJCLEVBQTJCLElBQTNCO0FBRUEsU0FBS3dCLE1BQUwsR0FBYy9ELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFkO0FBQ0EsU0FBSytELE1BQUwsR0FBY2hFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFkO0FBQ0g7Ozs7NEJBRU87QUFDSixVQUFHLEtBQUtxQyxTQUFMLEtBQW1CUCxTQUFTLENBQUNFLElBQTdCLElBQ0MsS0FBS0ssU0FBTCxLQUFtQlAsU0FBUyxDQUFDSSxRQURqQyxFQUMyQztBQUN2QyxXQUFLTSxNQUFMLEdBQWMsSUFBSUMsK0NBQUosQ0FBVyxJQUFYLENBQWQ7O0FBQ0EsVUFBSSxLQUFLa0IsWUFBTCxJQUFxQixFQUF6QixFQUE2QjtBQUN6QixhQUFLQSxZQUFMLEdBQW9CLENBQXBCO0FBQ0g7O0FBQ0QsV0FBS2hCLEtBQUwsR0FBYXFCLDBEQUFVLENBQUMsSUFBRCxFQUFPLEtBQUtqQixNQUFMLENBQVksS0FBS1ksWUFBakIsQ0FBUCxDQUF2QjtBQUNBLFdBQUtqQixXQUFMLEdBQW1CLENBQUMsS0FBS0osSUFBTixFQUFZLEtBQUtFLE1BQWpCLENBQW5CO0FBQ0EsV0FBS0ksUUFBTCxHQUFnQixDQUFoQjtBQUNBLFdBQUtOLElBQUwsQ0FBVTJCLEtBQVY7QUFDSixXQUFLNUIsU0FBTCxHQUFpQlAsU0FBUyxDQUFDQyxPQUEzQjtBQUNIOzs7OEJBRVM7QUFDTjtBQUVBLFdBQUtPLElBQUwsR0FBWSxJQUFJQyw2Q0FBSixDQUFTLElBQVQsQ0FBWjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxJQUFJQywrQ0FBSixDQUFXLElBQVgsQ0FBZDtBQUNBLFdBQUtFLEtBQUwsR0FBYXFCLDBEQUFVLENBQUMsSUFBRCxFQUFPLEtBQUtqQixNQUFMLENBQVksQ0FBWixDQUFQLENBQXZCO0FBQ0EsV0FBS0wsV0FBTCxHQUFtQixDQUFDLEtBQUtKLElBQU4sRUFBWSxLQUFLRSxNQUFqQixDQUFuQjtBQUNBLFVBQUlxQixvREFBSixDQUFnQixLQUFLdkIsSUFBckIsRUFBMkIsSUFBM0I7QUFDQSxXQUFLTSxRQUFMLEdBQWdCLENBQWhCO0FBRUEsV0FBS2UsWUFBTCxHQUFvQixDQUFwQjtBQUVIOzs7MkJBRU16QyxFLEVBQUk7QUFDUCxVQUFJLEtBQUswQixRQUFMLEtBQWtCLEtBQUtFLFdBQTNCLEVBQXdDLEtBQUtULFNBQUwsR0FBaUJQLFNBQVMsQ0FBQ0csUUFBM0I7QUFFeEMsVUFBRyxLQUFLSSxTQUFMLEtBQW1CUCxTQUFTLENBQUNFLElBQTdCLElBQ0MsS0FBS0ssU0FBTCxLQUFtQlAsU0FBUyxDQUFDRyxRQURqQyxFQUMyQzs7QUFFM0MsVUFBSSxLQUFLSyxJQUFMLENBQVU0QixHQUFWLEtBQWtCLElBQXRCLEVBQTRCO0FBQ3hCLGFBQUs1QixJQUFMLENBQVU0QixHQUFWLEdBQWdCLEtBQWhCO0FBQ0EsYUFBS1AsWUFBTDtBQUNBLGFBQUtDLGlCQUFMLENBQXVCTyxTQUF2QixvQkFBNkMsS0FBS1IsWUFBbEQ7QUFDQSxhQUFLdEIsU0FBTCxHQUFpQlAsU0FBUyxDQUFDSSxRQUEzQjtBQUNBLGFBQUtrQyxLQUFMO0FBQ0g7O0FBR0QsbUNBQUksS0FBSzFCLFdBQVQsc0JBQXlCLEtBQUtDLEtBQTlCLEdBQXFDMEIsT0FBckMsQ0FBNkMsVUFBQUMsTUFBTTtBQUFBLGVBQUlBLE1BQU0sQ0FBQ2xELE1BQVAsQ0FBY0YsRUFBZCxDQUFKO0FBQUEsT0FBbkQ7QUFFRCxXQUFLeUIsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBVzRCLE1BQVgsQ0FBa0IsVUFBQUMsSUFBSTtBQUFBLGVBQUksQ0FBQ0EsSUFBSSxDQUFDQyxpQkFBVjtBQUFBLE9BQXRCLENBQWI7QUFDRjs7O3lCQUVJeEUsRyxFQUFLO0FBQ04sV0FBS3FDLElBQUwsQ0FBVWpCLElBQVYsQ0FBZXBCLEdBQWY7QUFDQSxXQUFLcUMsSUFBTCxDQUFVb0MsU0FBVixDQUFvQnpFLEdBQXBCO0FBQ0EsV0FBS3FDLElBQUwsQ0FBVXFDLFdBQVYsQ0FBc0IxRSxHQUF0QjtBQUNBLG1DQUFJLEtBQUt5QyxXQUFULHNCQUF5QixLQUFLQyxLQUE5QixHQUFxQzBCLE9BQXJDLENBQTZDLFVBQUFDLE1BQU07QUFBQSxlQUFJQSxNQUFNLENBQUNqRCxJQUFQLENBQVlwQixHQUFaLENBQUo7QUFBQSxPQUFuRDs7QUFFQSxVQUFHLEtBQUtvQyxTQUFMLEtBQW1CUCxTQUFTLENBQUNFLElBQWhDLEVBQXNDO0FBQ2xDL0IsV0FBRyxDQUFDMkUsU0FBSixDQUFjLEtBQUtkLE1BQW5CLEVBQTJCLENBQTNCLEVBQTZCLENBQTdCLEVBQStCLEtBQUszQixTQUFwQyxFQUErQyxLQUFLQyxVQUFwRDtBQUNBbkMsV0FBRyxDQUFDNEUsU0FBSixHQUFnQixpQkFBaEI7QUFDQTVFLFdBQUcsQ0FBQzZFLElBQUo7QUFFQTdFLFdBQUcsQ0FBQzhFLElBQUosR0FBVyxZQUFYO0FBQ0E5RSxXQUFHLENBQUM0RSxTQUFKLEdBQWdCLE9BQWhCO0FBQ0E1RSxXQUFHLENBQUMrRSxTQUFKLEdBQWUsUUFBZjtBQUNBL0UsV0FBRyxDQUFDZ0YsUUFBSixDQUFhLHNCQUFiLEVBQXFDLEtBQUs5QyxTQUFMLEdBQWdCLENBQXJELEVBQXlELEtBQUtDLFVBQUwsR0FBZ0IsQ0FBekU7QUFDRjs7QUFFRCxVQUFHLEtBQUtDLFNBQUwsS0FBbUJQLFNBQVMsQ0FBQ0csUUFBaEMsRUFBMEM7QUFDdkNoQyxXQUFHLENBQUMyRSxTQUFKLENBQWMsS0FBS2IsTUFBbkIsRUFBMkIsQ0FBM0IsRUFBNkIsQ0FBN0IsRUFBK0IsS0FBSzVCLFNBQXBDLEVBQStDLEtBQUtDLFVBQXBEO0FBQ0FuQyxXQUFHLENBQUM0RSxTQUFKLEdBQWdCLGVBQWhCO0FBQ0E1RSxXQUFHLENBQUM2RSxJQUFKO0FBRUE3RSxXQUFHLENBQUM4RSxJQUFKLEdBQVcsWUFBWDtBQUNBOUUsV0FBRyxDQUFDNEUsU0FBSixHQUFnQixPQUFoQjtBQUNBNUUsV0FBRyxDQUFDK0UsU0FBSixHQUFlLFFBQWY7QUFDQS9FLFdBQUcsQ0FBQ2dGLFFBQUosQ0FBYSxXQUFiLEVBQTBCLEtBQUs5QyxTQUFMLEdBQWdCLENBQTFDLEVBQThDLEtBQUtDLFVBQUwsR0FBZ0IsQ0FBOUQ7QUFDRjs7QUFFQSxVQUFHLEtBQUtDLFNBQUwsS0FBbUJQLFNBQVMsQ0FBQ0ksUUFBaEMsRUFBMEM7QUFDeENqQyxXQUFHLENBQUMyRSxTQUFKLENBQWMsS0FBS2IsTUFBbkIsRUFBMkIsQ0FBM0IsRUFBNkIsQ0FBN0IsRUFBK0IsS0FBSzVCLFNBQXBDLEVBQStDLEtBQUtDLFVBQXBEO0FBQ0FuQyxXQUFHLENBQUM0RSxTQUFKLEdBQWdCLGVBQWhCO0FBQ0E1RSxXQUFHLENBQUM2RSxJQUFKO0FBRUE3RSxXQUFHLENBQUM4RSxJQUFKLEdBQVcsWUFBWDtBQUNBOUUsV0FBRyxDQUFDNEUsU0FBSixHQUFnQixPQUFoQjtBQUNBNUUsV0FBRyxDQUFDK0UsU0FBSixHQUFlLFFBQWY7QUFDQS9FLFdBQUcsQ0FBQ2dGLFFBQUosQ0FBYSxXQUFiLEVBQTBCLEtBQUs5QyxTQUFMLEdBQWdCLENBQTFDLEVBQThDLEtBQUtDLFVBQUwsR0FBZ0IsQ0FBOUQ7QUFDRjtBQUNMLEssQ0FHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTNEIsVUFBVCxDQUFvQjNELElBQXBCLEVBQTBCNkUsS0FBMUIsRUFBaUM7QUFDcEMsTUFBSXZDLEtBQUssR0FBRyxFQUFaO0FBRUF1QyxPQUFLLENBQUNiLE9BQU4sQ0FBYyxVQUFDYyxHQUFELEVBQU1DLFFBQU4sRUFBbUI7QUFDN0JELE9BQUcsQ0FBQ2QsT0FBSixDQUFZLFVBQUNHLElBQUQsRUFBT2EsU0FBUCxFQUFtQjtBQUMzQixVQUFHYixJQUFJLEtBQUssQ0FBWixFQUFlO0FBQ1gsWUFBSWMsUUFBUSxHQUFHO0FBQ1hDLFdBQUMsRUFBRSxNQUFNLEtBQUtILFFBREg7QUFFWEksV0FBQyxFQUFFLE1BQU0sS0FBS0g7QUFGSCxTQUFmO0FBSUExQyxhQUFLLENBQUM4QyxJQUFOLENBQVcsSUFBSUMsNkNBQUosQ0FBU3JGLElBQVQsRUFBZWlGLFFBQWYsQ0FBWDtBQUNIO0FBQ0osS0FSRDtBQVNILEdBVkQ7QUFXQSxTQUFPM0MsS0FBUDtBQUNIO0FBRU0sSUFBTUssTUFBTSxHQUFHLENBQ3RCLENBQUMsQ0FBRCxDQURzQixDQUFmO0FBR0EsSUFBTUMsTUFBTSxHQUFFLENBQ3JCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FEcUIsRUFFckIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQUZxQixFQUdyQixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBSHFCLENBQWQ7QUFLQSxJQUFNQyxNQUFNLEdBQUUsQ0FDckIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQURxQixFQUVyQixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBRnFCLEVBR3JCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FIcUIsQ0FBZDtBQUtBLElBQU1DLE1BQU0sR0FBRSxDQUNyQixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBRHFCLEVBRXJCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FGcUIsRUFHckIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQUhxQixDQUFkO0FBS0EsSUFBTUMsTUFBTSxHQUFFLENBQ3JCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FEcUIsRUFFckIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQUZxQixFQUdyQixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBSHFCLENBQWQ7QUFLQSxJQUFNQyxNQUFNLEdBQUUsQ0FDckIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQURxQixFQUVyQixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBRnFCLEVBR3JCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FIcUIsQ0FBZDtBQUtBLElBQU1DLE1BQU0sR0FBRSxDQUNyQixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBRHFCLEVBRXJCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FGcUIsRUFHckIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQUhxQixDQUFkO0FBS0EsSUFBTUMsTUFBTSxHQUFFLENBQ3JCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FEcUIsRUFFckIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQUZxQixFQUdyQixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBSHFCLENBQWQ7QUFLQSxJQUFNQyxNQUFNLEdBQUUsQ0FDckIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQURxQixFQUVyQixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBRnFCLEVBR3JCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FIcUIsQ0FBZDtBQUtBLElBQU1DLE1BQU0sR0FBRSxDQUNyQixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBRHFCLEVBRXJCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FGcUIsRUFHckIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQUhxQixDQUFkO0FBS0EsSUFBTUMsT0FBTyxHQUFFLENBQ3RCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsQ0FEc0IsRUFFdEIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixDQUZzQixFQUd0QixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLEVBQXFCLENBQXJCLENBSHNCLENBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuRWNuQixJO0FBRWpCLGdCQUFZbEMsSUFBWixFQUFrQjtBQUFBOztBQUNkLFNBQUs4QixTQUFMLEdBQWlCOUIsSUFBSSxDQUFDOEIsU0FBdEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCL0IsSUFBSSxDQUFDK0IsVUFBdkIsQ0FGYyxDQUdkOztBQUNBLFNBQUt1RCxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS1IsUUFBTCxHQUFnQjtBQUNaQyxPQUFDLEVBQUUsQ0FEUztBQUVaQyxPQUFDLEVBQUUsS0FBS3BELFVBQUwsR0FBa0IsS0FBS3dEO0FBRmQsS0FBaEIsQ0FSYyxDQVdYO0FBQ0g7O0FBQ0EsU0FBS0csV0FBTCxHQUFtQkMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBN0I7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkYsSUFBSSxDQUFDQyxFQUFMLEdBQVUsRUFBbEM7QUFDQSxTQUFLRSxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixLQUFLVCxLQUFMLEdBQWFLLElBQUksQ0FBQ0ssSUFBTCxDQUFVLENBQVYsQ0FBakMsQ0FoQmMsQ0FpQmQ7O0FBQ0EsU0FBS0MsS0FBTCxHQUFhTixJQUFJLENBQUNDLEVBQWxCO0FBQ0EsU0FBS00sVUFBTCxHQUFrQlAsSUFBSSxDQUFDQyxFQUFMLEdBQVUsRUFBNUI7QUFDQSxTQUFLTyxjQUFMLEdBQXNCLEVBQXRCLENBcEJjLENBcUJkOztBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS25CLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLSSxLQUFMLEdBQVcsQ0FBN0IsR0FBaUMsS0FBS1MsWUFBTCxHQUFvQkosSUFBSSxDQUFDVSxHQUFMLENBQVMsS0FBS1gsV0FBZCxDQUFyRSxFQUNBLEtBQUtZLFFBQUwsR0FBZ0IsS0FBS3JCLFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQixLQUFLSSxNQUFMLEdBQVksQ0FBOUIsR0FBa0MsS0FBS1EsWUFBTCxHQUFvQkosSUFBSSxDQUFDWSxHQUFMLENBQVMsS0FBS2IsV0FBZCxDQUR0RTtBQUVBLFNBQUtjLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtSLEtBQUwsR0FBYU4sSUFBSSxDQUFDVSxHQUFMLENBQVMsS0FBS1gsV0FBZCxDQUE5QjtBQUNBLFNBQUtnQixTQUFMLEdBQWlCLEtBQUtULEtBQUwsR0FBYU4sSUFBSSxDQUFDWSxHQUFMLENBQVMsS0FBS2IsV0FBZCxDQUE5QjtBQUNBLFNBQUtpQixPQUFMLEdBQWUsTUFBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNBLFNBQUtoRCxHQUFMLEdBQVcsS0FBWDtBQUNBLFNBQUtpRCxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUs5RyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLK0csTUFBTCxHQUFjckgsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWQ7QUFDQSxTQUFLcUgsTUFBTCxHQUFjdEgsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWQ7QUFDQSxTQUFLc0gsU0FBTCxHQUFpQixDQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS3RELEtBQUw7QUFDSDs7Ozt5QkFFSWhFLEcsRUFBSztBQUNOO0FBQ0FBLFNBQUcsQ0FBQzJFLFNBQUosQ0FBYyxLQUFLd0MsTUFBbkIsRUFBMkIsS0FBSzlCLFFBQUwsQ0FBY0MsQ0FBekMsRUFBNEMsS0FBS25ELFVBQUwsR0FBa0IsS0FBS3dELE1BQW5FLEVBQTJFLEtBQUtELEtBQWhGLEVBQXVGLEtBQUtDLE1BQTVGLEVBRk0sQ0FHTjtBQUNBO0FBQ0E7O0FBQ0EzRixTQUFHLENBQUN1SCxTQUFKO0FBQ0F2SCxTQUFHLENBQUN3SCxNQUFKLENBQVcsS0FBS25DLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLSSxLQUFMLEdBQVcsQ0FBeEMsRUFBMkMsS0FBS0wsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLEtBQUtJLE1BQUwsR0FBWSxDQUF6RTtBQUNBM0YsU0FBRyxDQUFDeUgsTUFBSixDQUNJLEtBQUtwQyxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS0ksS0FBTCxHQUFXLENBQTdCLEdBQWlDLEtBQUtTLFlBQUwsR0FBb0JKLElBQUksQ0FBQ1UsR0FBTCxDQUFTLEtBQUtYLFdBQWQsQ0FEekQsRUFFSSxLQUFLVCxRQUFMLENBQWNFLENBQWQsR0FBa0IsS0FBS0ksTUFBTCxHQUFZLENBQTlCLEdBQWtDLEtBQUtRLFlBQUwsR0FBb0JKLElBQUksQ0FBQ1ksR0FBTCxDQUFTLEtBQUtiLFdBQWQsQ0FGMUQ7QUFHQTlGLFNBQUcsQ0FBQzBILFdBQUosR0FBa0IsbUJBQWxCO0FBQ0ExSCxTQUFHLENBQUMySCxNQUFKO0FBQ0EzSCxTQUFHLENBQUM0SCxTQUFKO0FBQ0g7Ozs4QkFDUzVILEcsRUFBSztBQUNYO0FBQ0FBLFNBQUcsQ0FBQ3VILFNBQUo7QUFDQXZILFNBQUcsQ0FBQzZILEdBQUosQ0FDSSxLQUFLeEMsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtJLEtBQUwsR0FBYSxDQURuQyxFQUVJLEtBQUtMLFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQixLQUFLSSxNQUFMLEdBQWMsQ0FGcEMsRUFHSSxLQUFLWSxjQUhULEVBSUlSLElBQUksQ0FBQ0MsRUFKVCxFQUtJLEtBQUtLLEtBTFQsRUFNSSxLQU5KO0FBUUFyRyxTQUFHLENBQUMySCxNQUFKO0FBQ0g7OztnQ0FFVzNILEcsRUFBSztBQUNiO0FBQ0EsVUFBSSxDQUFDLEtBQUtpSCxJQUFWLEVBQWdCO0FBQ1osYUFBS1QsUUFBTCxHQUFnQixLQUFLbkIsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtJLEtBQUwsR0FBVyxDQUE3QixHQUFpQyxLQUFLUyxZQUFMLEdBQW9CSixJQUFJLENBQUNVLEdBQUwsQ0FBUyxLQUFLWCxXQUFkLENBQXJFLEVBQ0EsS0FBS1ksUUFBTCxHQUFnQixLQUFLckIsUUFBTCxDQUFjRSxDQUFkLEdBQWtCLEtBQUtJLE1BQUwsR0FBWSxDQUE5QixHQUFrQyxLQUFLUSxZQUFMLEdBQW9CSixJQUFJLENBQUNZLEdBQUwsQ0FBUyxLQUFLYixXQUFkLENBRHRFO0FBRUgsT0FIRCxNQUdPO0FBQ0gsYUFBS2dCLFNBQUwsSUFBa0IsS0FBS0MsT0FBdkI7QUFDQSxhQUFLUCxRQUFMLElBQWlCLEtBQUtLLFNBQXRCO0FBQ0EsYUFBS0gsUUFBTCxJQUFpQixLQUFLSSxTQUF0QjtBQUNIOztBQUNEOUcsU0FBRyxDQUFDMkUsU0FBSixDQUFjLEtBQUt5QyxNQUFuQixFQUNJLEtBQUtaLFFBQUwsR0FBYyxFQURsQixFQUVJLEtBQUtFLFFBQUwsR0FBYyxFQUZsQixFQUdJLEVBSEosRUFHTyxFQUhQO0FBS0ExRyxTQUFHLENBQUN1SCxTQUFKLEdBZmEsQ0FnQmI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0F2SCxTQUFHLENBQUM0RSxTQUFKLEdBQWdCLFNBQWhCO0FBQ0E1RSxTQUFHLENBQUM2RSxJQUFKO0FBQ0E3RSxTQUFHLENBQUM0SCxTQUFKO0FBQ0g7OzsrQkFFVTtBQUNQLFdBQUsvQixLQUFMLEdBQWEsQ0FBQyxLQUFLRCxRQUFuQjtBQUNIOzs7Z0NBRVc7QUFDUixXQUFLQyxLQUFMLEdBQWEsS0FBS0QsUUFBbEI7QUFDSDs7OzJCQUVNO0FBQ0gsV0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDSDs7OzZCQUVRO0FBQ0wsV0FBS0MsV0FBTCxJQUFvQixLQUFLRyxnQkFBekI7QUFDSDs7OytCQUVVO0FBQ1AsV0FBS0gsV0FBTCxJQUFvQixDQUFDLEtBQUtHLGdCQUExQjtBQUNIOzs7c0NBRWlCO0FBQ2QsV0FBS0MsV0FBTCxHQUFtQixDQUFuQjtBQUNIOzs7bUNBRWM7QUFDWCxXQUFLRyxLQUFMLEdBQWEsQ0FBYjtBQUNIOzs7NEJBRU87QUFDSixXQUFLaEIsUUFBTCxHQUFnQjtBQUNaQyxTQUFDLEVBQUUsQ0FEUztBQUVaQyxTQUFDLEVBQUUsS0FBS3BELFVBQUwsR0FBa0IsS0FBS3dEO0FBRmQsT0FBaEI7QUFJSDs7OzJCQUVNMUUsRSxFQUFJO0FBQ1AsVUFBSSxDQUFDQSxFQUFMLEVBQVM7QUFHVCxXQUFLb0UsUUFBTCxDQUFjQyxDQUFkLElBQW1CLEtBQUtPLEtBQXhCLENBSk8sQ0FLUDs7QUFFQSxVQUFHLEtBQUtSLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixDQUFyQixFQUF3QixLQUFLRCxRQUFMLENBQWNDLENBQWQsR0FBa0IsQ0FBbEI7QUFDeEIsVUFBRyxLQUFLRCxRQUFMLENBQWNDLENBQWQsR0FBbUIsS0FBS0ksS0FBeEIsR0FBZ0MsS0FBS3hELFNBQUwsR0FBZSxDQUFmLEdBQW1CLEtBQUt3RCxLQUFMLEdBQWEsQ0FBbkUsRUFBc0UsS0FBS0wsUUFBTCxDQUFjQyxDQUFkLEdBQW1CLEtBQUtwRCxTQUFMLEdBQWUsQ0FBaEIsR0FBcUIsS0FBS3dELEtBQUwsR0FBYSxDQUFwRDtBQUN0RSxVQUFHLEtBQUtMLFFBQUwsQ0FBY0UsQ0FBZCxHQUFrQixLQUFLSSxNQUFMLEdBQVksQ0FBOUIsS0FBb0MsS0FBS04sUUFBTCxDQUFjRSxDQUFkLEdBQWtCLEtBQUtJLE1BQUwsR0FBWSxDQUFyRSxFQUF3RSxLQUFLTixRQUFMLENBQWNFLENBQWQsR0FBa0IsS0FBS3BELFVBQUwsR0FBa0IsS0FBS3dELE1BQXpDLENBVGpFLENBV1A7O0FBQ0EsVUFBRyxLQUFLVSxLQUFMLEdBQWFOLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQTFCLEVBQTZCO0FBQUMsYUFBS0ssS0FBTCxHQUFhTixJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUF2QjtBQUF5QixPQVpoRCxDQWNQOzs7QUFDQSxVQUFHLEtBQUtRLFFBQUwsR0FBZ0IsS0FBS0ksYUFBckIsR0FBcUMsQ0FBRSxDQUFGLEdBQU0sS0FBS2xCLEtBQWhELElBQ0UsS0FBS2MsUUFBTCxHQUFnQixLQUFLSSxhQUFyQixHQUFxQyxLQUFLMUUsU0FENUMsSUFFRSxLQUFLd0UsUUFBTCxHQUFnQixDQUZsQixJQUV1QixLQUFLQSxRQUFMLEdBQWdCLEtBQUtFLGFBQXJCLEdBQXFDLEtBQUt6RSxVQUFMLEdBQWtCLElBQUUsS0FBS3dELE1BRnhGLEVBRWdHO0FBQzVGLGFBQUtzQixJQUFMLEdBQVksS0FBWjtBQUNBLGFBQUs3RyxJQUFMLENBQVV1QyxRQUFWO0FBQ0EsYUFBS3ZDLElBQUwsQ0FBVXdDLGFBQVYsQ0FBd0JzQixTQUF4Qix1QkFBaUQsS0FBSzlELElBQUwsQ0FBVXVDLFFBQTNELEVBSDRGLENBSTVGO0FBQ0gsT0F0Qk0sQ0F3QlA7OztBQUNDLFVBQUksS0FBSzZELFFBQUwsSUFBaUIsS0FBS3BHLElBQUwsQ0FBVW1DLE1BQVYsQ0FBaUJ1RixPQUFsQyxJQUNELEtBQUt0QixRQUFMLElBQWlCLEtBQUtwRyxJQUFMLENBQVVtQyxNQUFWLENBQWlCdUYsT0FBakIsR0FBMkIsS0FBSzFILElBQUwsQ0FBVW1DLE1BQVYsQ0FBaUJ3RixXQUQ1RCxJQUVELEtBQUtyQixRQUFMLElBQWlCLEtBQUt0RyxJQUFMLENBQVVtQyxNQUFWLENBQWlCeUYsT0FGakMsSUFHRCxLQUFLdEIsUUFBTCxJQUFpQixLQUFLdkUsVUFIekIsRUFHcUM7QUFDOUIsYUFBSzhCLEdBQUwsR0FBVyxJQUFYO0FBQ0EsYUFBS3VDLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLQSxRQUF0QjtBQUNBLGFBQUtFLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLQSxRQUF0QixDQUg4QixDQUs5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ047QUFDTCxLLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM1TGlCOUMsVyxHQUNqQixxQkFBWXZCLElBQVosRUFBa0JqQyxJQUFsQixFQUF3QjtBQUFBOztBQUNwQk4sVUFBUSxDQUFDUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDMEgsS0FBRCxFQUFXO0FBQzVDLFlBQU9BLEtBQUssQ0FBQ0MsT0FBYjtBQUNJLFdBQUssRUFBTDtBQUNJN0YsWUFBSSxDQUFDOEYsUUFBTDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJOUYsWUFBSSxDQUFDK0YsU0FBTDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJL0YsWUFBSSxDQUFDZ0csTUFBTDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJaEcsWUFBSSxDQUFDaUcsUUFBTDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJLFlBQUksQ0FBQ2pHLElBQUksQ0FBQzRFLElBQVYsRUFBZ0I7QUFDWjVFLGNBQUksQ0FBQzJFLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQTNFLGNBQUksQ0FBQ2dFLEtBQUwsSUFBY2hFLElBQUksQ0FBQ2lFLFVBQW5CO0FBQ0FqRSxjQUFJLENBQUN3RSxTQUFMLEdBQWlCeEUsSUFBSSxDQUFDZ0UsS0FBTCxHQUFhLEdBQWIsR0FBbUJOLElBQUksQ0FBQ1UsR0FBTCxDQUFTcEUsSUFBSSxDQUFDeUQsV0FBZCxDQUFwQztBQUNBekQsY0FBSSxDQUFDeUUsU0FBTCxHQUFpQnpFLElBQUksQ0FBQ2dFLEtBQUwsR0FBYSxHQUFiLEdBQW1CTixJQUFJLENBQUNZLEdBQUwsQ0FBU3RFLElBQUksQ0FBQ3lELFdBQWQsQ0FBcEM7QUFDSCxTQUxELE1BS087QUFDSDtBQUNIOztBQUNEOztBQUNKLFdBQUssRUFBTDtBQUNJMUYsWUFBSSxDQUFDK0QsS0FBTDtBQUNBO0FBekJSO0FBMkJILEdBNUJEO0FBOEJBckUsVUFBUSxDQUFDUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDMEgsS0FBRCxFQUFXO0FBQzFDLFlBQU9BLEtBQUssQ0FBQ0MsT0FBYjtBQUNJLFdBQUssRUFBTDtBQUNJLFlBQUk3RixJQUFJLENBQUN3RCxLQUFMLEdBQWEsQ0FBakIsRUFDQXhELElBQUksQ0FBQ2tHLElBQUw7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSSxZQUFJbEcsSUFBSSxDQUFDd0QsS0FBTCxHQUFhLENBQWpCLEVBQ0F4RCxJQUFJLENBQUNrRyxJQUFMO0FBQ0E7O0FBQ0osV0FBSyxFQUFMO0FBQ0ksWUFBSWxHLElBQUksQ0FBQ3lELFdBQUwsSUFBbUIsQ0FBdkIsRUFDQXpELElBQUksQ0FBQ21HLGVBQUw7QUFDQTs7QUFDSixXQUFLLEVBQUw7QUFDSSxZQUFJbkcsSUFBSSxDQUFDeUQsV0FBTCxJQUFvQkMsSUFBSSxDQUFDQyxFQUE3QixFQUNBM0QsSUFBSSxDQUFDbUcsZUFBTDtBQUNBOztBQUNKLFdBQUssRUFBTDtBQUNJbkcsWUFBSSxDQUFDMkUsUUFBTCxHQUFnQixLQUFoQjtBQUNBM0UsWUFBSSxDQUFDNEUsSUFBTCxHQUFZLElBQVo7QUFDQTVFLFlBQUksQ0FBQ2dFLEtBQUwsR0FBYU4sSUFBSSxDQUFDQyxFQUFsQjtBQUNBO0FBckJSO0FBdUJILEdBeEJEO0FBeUJILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN6RGdCeEQsTTtBQUNqQixrQkFBWXBDLElBQVosRUFBa0I7QUFBQTs7QUFDZCxTQUFLMkgsV0FBTCxHQUFtQmhDLElBQUksQ0FBQzBDLEtBQUwsQ0FBVzFDLElBQUksQ0FBQzJDLE1BQUwsS0FBZ0IsRUFBaEIsR0FBcUIsR0FBaEMsQ0FBbkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CNUMsSUFBSSxDQUFDMEMsS0FBTCxDQUFXMUMsSUFBSSxDQUFDMkMsTUFBTCxLQUFnQixFQUFoQixHQUFxQixHQUFoQyxDQUFwQjtBQUNBLFNBQUtaLE9BQUwsR0FBZS9CLElBQUksQ0FBQzBDLEtBQUwsQ0FBVzFDLElBQUksQ0FBQzJDLE1BQUwsTUFBaUIsTUFBTSxLQUFLWCxXQUE1QixJQUEyQyxHQUF0RCxDQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlNUgsSUFBSSxDQUFDK0IsVUFBTCxHQUFrQixLQUFLd0csWUFBdEM7QUFDQSxTQUFLQyxNQUFMLEdBQWM5SSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZDtBQUNIOzs7OzZCQUNPLENBQUU7Ozt5QkFFTEMsRyxFQUFLO0FBQ05BLFNBQUcsQ0FBQzJFLFNBQUosQ0FBYyxLQUFLaUUsTUFBbkIsRUFBMkIsS0FBS2QsT0FBaEMsRUFBeUMsS0FBS0UsT0FBOUMsRUFBdUQsS0FBS0QsV0FBNUQsRUFBeUUsS0FBS1ksWUFBOUU7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNaZ0JsRCxJO0FBQ2pCLGdCQUFZckYsSUFBWixFQUFrQmlGLFFBQWxCLEVBQTRCO0FBQUE7O0FBQ3hCLFNBQUtqRixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLaUYsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLSyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS25CLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0EsU0FBS3FFLE1BQUwsR0FBYy9JLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFkO0FBQ0g7Ozs7NkJBRVE7QUFDTCxVQUFJK0ksZUFBZSxHQUFHLEtBQUsxSSxJQUFMLENBQVVpQyxJQUFWLENBQWVxRSxRQUFmLEdBQTBCLEtBQUt0RyxJQUFMLENBQVVpQyxJQUFWLENBQWV1RSxhQUEvRDtBQUNBLFVBQUltQyxZQUFZLEdBQUcsS0FBSzNJLElBQUwsQ0FBVWlDLElBQVYsQ0FBZXFFLFFBQWxDO0FBRUEsVUFBSXNDLFNBQVMsR0FBRyxLQUFLM0QsUUFBTCxDQUFjRSxDQUE5QjtBQUNBLFVBQUkwRCxJQUFJLEdBQUcsS0FBSzVELFFBQUwsQ0FBY0MsQ0FBekI7QUFDQSxVQUFJNEQsS0FBSyxHQUFHLEtBQUs3RCxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS0ksS0FBbkM7QUFDQSxVQUFJeUQsTUFBTSxHQUFHLEtBQUs5RCxRQUFMLENBQWNFLENBQWQsR0FBa0IsS0FBS0ksTUFBcEM7O0FBQ0EsVUFBSW1ELGVBQWUsSUFBSUUsU0FBbkIsSUFBZ0NELFlBQVksSUFBSUksTUFBaEQsSUFBMEQsS0FBSy9JLElBQUwsQ0FBVWlDLElBQVYsQ0FBZW1FLFFBQWYsSUFBMkJ5QyxJQUFyRixJQUE2RixLQUFLN0ksSUFBTCxDQUFVaUMsSUFBVixDQUFlbUUsUUFBZixHQUEwQixLQUFLcEcsSUFBTCxDQUFVaUMsSUFBVixDQUFldUUsYUFBekMsSUFBMERzQyxLQUEzSixFQUFrSztBQUM5SixhQUFLOUksSUFBTCxDQUFVaUMsSUFBVixDQUFlbUUsUUFBZixHQUEwQixDQUFFLEtBQUtwRyxJQUFMLENBQVVpQyxJQUFWLENBQWVtRSxRQUEzQztBQUNBLGFBQUtwRyxJQUFMLENBQVVpQyxJQUFWLENBQWVtRSxRQUFmLEdBQTBCLENBQUUsS0FBS3BHLElBQUwsQ0FBVWlDLElBQVYsQ0FBZXFFLFFBQTNDO0FBQ0EsYUFBS2xDLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0M7QUFDUjs7O3lCQUVJeEUsRyxFQUFLO0FBQ05BLFNBQUcsQ0FBQzJFLFNBQUosQ0FBYyxLQUFLa0UsTUFBbkIsRUFBMEIsS0FBTXhELFFBQU4sQ0FBZUMsQ0FBekMsRUFBNEMsS0FBS0QsUUFBTCxDQUFjRSxDQUExRCxFQUE2RCxLQUFLRyxLQUFsRSxFQUF5RSxLQUFLQyxNQUE5RTtBQUVIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCTCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCJcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVCb2FyZFwiKTtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3QgR0FNRV9XSURUSCA9IDgwMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNjAwO1xuXG5sZXQgZ2FtZSA9IG5ldyBHYW1lKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBjdHgpO1xuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydCcpO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGdhbWUucmVzdGFydCgpO1xufSlcblxuY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uXCIpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuaW5zdHJ1Y3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG5sZXQgbGFzdFRpbWUgPSAwO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCh0aW1lc3RhbXApIHtcbiAgbGV0IGR0ID0gdGltZXN0YW1wIC0gbGFzdFRpbWVcbiAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCA4MDAsIDYwMCk7XG5cbiAgZ2FtZS51cGRhdGUoZHQpO1xuICBnYW1lLmRyYXcoY3R4KTtcbiAgXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG5cbmxldCBjb3VudCA9IDA7XG5cbmZ1bmN0aW9uIHR3aW5rbGUoKXtcbiAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjOTM5NTk3JztcbiAgICBjb3VudCArKztcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnI2U4NTQ1MCc7XG4gICAgY291bnQgKys7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyNhMmM0OWInO1xuICAgIGNvdW50ICsrO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjZjVkZjRkJztcbiAgICBjb3VudCArKztcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyM3YmM0YzQnO1xuICAgIGNvdW50ID0gMDtcbiAgfVxufVxuXG5zZXRJbnRlcnZhbCh0d2lua2xlLCAxMDAwKTtcblxuZnVuY3Rpb24gcGxheSgpIHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuICBhdWRpby5wbGF5KClcbn0iLCJpbXBvcnQgVGFuayBmcm9tICcuL3RhbmsnO1xuaW1wb3J0IFRhbmtIYW5kbGVyIGZyb20gJy4vdGFua2hhbmRsZXInO1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCc7XG5pbXBvcnQgeyBidWlsZFN0YWdlLCBzdGFnZTAsIHN0YWdlMSwgc3RhZ2UyLCBzdGFnZTMsIHN0YWdlNCwgc3RhZ2U1LCBzdGFnZTYsIHN0YWdlNywgc3RhZ2U4LCBzdGFnZTksIHN0YWdlMTAgfSBmcm9tICcuL3N0YWdlcyc7XG5cbmV4cG9ydCBjb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgLy8gUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgTUVOVTogMixcbiAgICBHQU1FT1ZFUjogMyxcbiAgICBORVdTVEFHRTogNCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0LCBjdHgpIHtcblxuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0OyAgICBcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGhcbiAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuTUVOVTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMudGFuayA9IG5ldyBUYW5rKHRoaXMpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IG5ldyBUYXJnZXQodGhpcyk7ICBcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLndhbGxzID0gW11cbiAgICAgICAgdGhpcy5hdHRlbXB0cyA9IDA7XG4gICAgICAgIHRoaXMuYXR0ZW1wdHNDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRlbXB0cycpXG4gICAgICAgIHRoaXMubWF4QXR0ZW1wdHMgPSAxMDtcblxuICAgICAgICB0aGlzLnN0YWdlcyA9IFtzdGFnZTAsIHN0YWdlMSwgc3RhZ2UyLCBzdGFnZTMsIHN0YWdlNCwgc3RhZ2U1LCBzdGFnZTYsIHN0YWdlNywgc3RhZ2U4LCBzdGFnZTksIHN0YWdlMTBdXG4gICAgICAgIHRoaXMuY3VycmVudFN0YWdlID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhZ2VDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhZ2VcIilcbiAgICAgICAgbmV3IFRhbmtIYW5kbGVyKHRoaXMudGFuaywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbWFnZTUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIilcbiAgICAgICAgdGhpcy5pbWFnZTYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVvdmVyXCIpIFxuICAgIH1cbiAgICBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYodGhpcy5nYW1lc3RhdGUgIT09IEdBTUVTVEFURS5NRU5VICYmXG4gICAgICAgICAgICB0aGlzLmdhbWVzdGF0ZSAhPT0gR0FNRVNUQVRFLk5FV1NUQUdFKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG5ldyBUYXJnZXQodGhpcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RhZ2UgPj0gMTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFnZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLndhbGxzID0gYnVpbGRTdGFnZSh0aGlzLCB0aGlzLnN0YWdlc1t0aGlzLmN1cnJlbnRTdGFnZV0pO1xuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFt0aGlzLnRhbmssIHRoaXMudGFyZ2V0XVxuICAgICAgICAgICAgdGhpcy5hdHRlbXB0cyA9IDA7XG4gICAgICAgICAgICB0aGlzLnRhbmsucmVzZXQoKTtcbiAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuUlVOTklOR1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLk5FV1NUQUdFO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50YW5rID0gbmV3IFRhbmsodGhpcyk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRhcmdldCh0aGlzKTtcbiAgICAgICAgdGhpcy53YWxscyA9IGJ1aWxkU3RhZ2UodGhpcywgdGhpcy5zdGFnZXNbMF0pO1xuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gW3RoaXMudGFuaywgdGhpcy50YXJnZXRdXG4gICAgICAgIG5ldyBUYW5rSGFuZGxlcih0aGlzLnRhbmssIHRoaXMpO1xuICAgICAgICB0aGlzLmF0dGVtcHRzID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VycmVudFN0YWdlID0gMDtcbiAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuYXR0ZW1wdHMgPT09IHRoaXMubWF4QXR0ZW1wdHMpIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLkdBTUVPVkVSO1xuXG4gICAgICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSB8fFxuICAgICAgICAgICAgdGhpcy5nYW1lc3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUikgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLnRhbmsuaGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnRhbmsuaGl0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFnZSsrO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhZ2VDb3VudC5pbm5lclRleHQgPSBgU3RhZ2U6ICR7dGhpcy5jdXJyZW50U3RhZ2V9YFxuICAgICAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuTkVXU1RBR0U7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIFsuLi50aGlzLmdhbWVPYmplY3RzLCAuLi50aGlzLndhbGxzXS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QudXBkYXRlKGR0KSk7IFxuXG4gICAgICAgdGhpcy53YWxscyA9IHRoaXMud2FsbHMuZmlsdGVyKHdhbGwgPT4gIXdhbGwubWFya2VkRm9yRGVsZXRpb24pXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgdGhpcy50YW5rLmRyYXcoY3R4KTtcbiAgICAgICAgdGhpcy50YW5rLmRyYXdHdWFnZShjdHgpO1xuICAgICAgICB0aGlzLnRhbmsuZHJhd01pc3NpbGUoY3R4KTtcbiAgICAgICAgWy4uLnRoaXMuZ2FtZU9iamVjdHMsIC4uLnRoaXMud2FsbHNdLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5kcmF3KGN0eCkpOyBcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlNSwgMCwwLHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQpXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9XCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIlByZXNzIEVudGVyIHRvIHN0YXJ0XCIsIHRoaXMuZ2FtZVdpZHRoIC8yICwgdGhpcy5nYW1lSGVpZ2h0LzIpXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTYsIDAsMCx0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KVxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID1cImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuZ2FtZVdpZHRoIC8yICwgdGhpcy5nYW1lSGVpZ2h0LzIpXG4gICAgICAgICB9XG5cbiAgICAgICAgICBpZih0aGlzLmdhbWVzdGF0ZSA9PT0gR0FNRVNUQVRFLk5FV1NUQUdFKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2U2LCAwLDAsdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodClcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9XCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIk5FVyBTVEFHRVwiLCB0aGlzLmdhbWVXaWR0aCAvMiAsIHRoaXMuZ2FtZUhlaWdodC8yKVxuICAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gdG9nZ2xlUGF1c2UoKSB7XG4gICAgLy8gICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLmdhbWVzdGF0ZSA9IEdBTUVTVEFURS5QQVVTRUQ7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59IiwiaW1wb3J0IFdhbGwgZnJvbSAnLi93YWxsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU3RhZ2UoZ2FtZSwgc3RhZ2UpIHtcbiAgICBsZXQgd2FsbHMgPSBbXTtcblxuICAgIHN0YWdlLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgcm93LmZvckVhY2goKHdhbGwsIHdhbGxJbmRleCk9PntcbiAgICAgICAgICAgIGlmKHdhbGwgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQ1MCAtIDUwICogcm93SW5kZXgsIFxuICAgICAgICAgICAgICAgICAgICB5OiA1NTAgLSA1MCAqIHdhbGxJbmRleFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3YWxscy5wdXNoKG5ldyBXYWxsKGdhbWUsIHBvc2l0aW9uKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiB3YWxsc1xufVxuXG5leHBvcnQgY29uc3Qgc3RhZ2UwID0gW1xuWzFdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2UxID1bXG5bMCwwLDAsMCwwLDAsMCwxLDBdLFxuWzEsMSwxLDEsMSwxLDEsMSwwXSxcblswLDAsMCwwLDAsMCwwLDEsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTIgPVtcblsxLDEsMSwxLDEsMSwxLDEsMF0sXG5bMCwwLDAsMCwxLDAsMCwwLDBdLFxuWzEsMSwxLDEsMSwxLDEsMSwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlMyA9W1xuWzEsMSwxLDEsMSwxLDEsMCwwXSxcblswLDAsMCwxLDAsMCwwLDEsMF0sXG5bMSwxLDEsMSwxLDEsMSwwLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2U0ID1bXG5bMSwxLDEsMSwxLDEsMSwwLDBdLFxuWzAsMCwwLDAsMCwwLDEsMCwwXSxcblsxLDEsMSwxLDEsMSwxLDEsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTUgPVtcblsxLDEsMSwxLDAsMSwxLDAsMF0sXG5bMCwwLDAsMCwxLDAsMCwwLDBdLFxuWzEsMSwxLDEsMSwxLDEsMSwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlNiA9W1xuWzAsMSwxLDAsMSwwLDAsMCwxXSxcblsxLDAsMCwxLDAsMSwxLDEsMF0sXG5bMCwxLDEsMCwxLDAsMCwwLDFdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2U3ID1bXG5bMSwwLDEsMCwxLDAsMSwwLDFdLFxuWzAsMSwwLDEsMCwxLDAsMSwwXSxcblsxLDAsMSwwLDEsMCwxLDAsMV1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTggPVtcblsxLDAsMSwwLDEsMSwwLDAsMF0sXG5bMSwxLDEsMCwxLDEsMSwxLDBdLFxuWzEsMCwxLDEsMCwxLDAsMCwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlOSA9W1xuWzEsMSwxLDEsMSwxLDAsMCwwXSxcblsxLDEsMSwxLDEsMSwxLDEsMF0sXG5bMSwxLDEsMSwxLDEsMCwwLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2UxMCA9W1xuWzEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG5bMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcblsxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXG5dIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFuayB7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZS5nYW1lV2lkdGg7XG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWUuZ2FtZUhlaWdodDtcbiAgICAgICAgLy90YW5rXG4gICAgICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDE7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0LFxuICAgICAgICB9OyAvLyB0YW5rIHBvc2l0aW9uXG4gICAgICAgIC8vY2Fubm9uXG4gICAgICAgIHRoaXMuY2Fubm9uQW5nbGUgPSBNYXRoLlBJIC8gNDtcbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZVNwZWVkID0gTWF0aC5QSSAvIDYwO1xuICAgICAgICB0aGlzLmNhbm5vblNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5jYW5ub25MZW5ndGggPSB0aGlzLndpZHRoICogTWF0aC5zcXJ0KDIpO1xuICAgICAgICAvL2dhdWdlXG4gICAgICAgIHRoaXMuZ2F1Z2UgPSBNYXRoLlBJO1xuICAgICAgICB0aGlzLmdhdWdlU3BlZWQgPSBNYXRoLlBJIC8gMzA7XG4gICAgICAgIHRoaXMuZ2F1Z2VCYXJSYWlkdXMgPSAzMDtcbiAgICAgICAgLy9taXNzaWxlXG4gICAgICAgIHRoaXMubWlzc2lsZVggPSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLzIgKyB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguY29zKHRoaXMuY2Fubm9uQW5nbGUpLFxuICAgICAgICB0aGlzLm1pc3NpbGVZID0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMiAtIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5zaW4odGhpcy5jYW5ub25BbmdsZSlcbiAgICAgICAgdGhpcy5taXNzaWxlUmFkaXVzID0gMTA7XG4gICAgICAgIHRoaXMubWlzc2lsZUR4ID0gdGhpcy5nYXVnZSAqIE1hdGguY29zKHRoaXMuY2Fubm9uQW5nbGUpO1xuICAgICAgICB0aGlzLm1pc3NpbGVEeSA9IHRoaXMuZ2F1Z2UgKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKTtcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gMC4wOTgxO1xuICAgICAgICB0aGlzLmNoYXJnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdyb3VuZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuaW1hZ2UxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YW5rXCIpXG4gICAgICAgIHRoaXMuaW1hZ2UyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXNzaWxlXCIpXG4gICAgICAgIHRoaXMuanVtcGNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5qdW1wbWF4ID0gMTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiBcbiAgICBkcmF3KGN0eCkge1xuICAgICAgICAvL3RhbmtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlMSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSAnI2EyYzQ5Yic7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIC8vY2Fubm9uXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLzIsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIpO1xuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aC8yICsgdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLmNvcyh0aGlzLmNhbm5vbkFuZ2xlKSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgLSB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguc2luKHRoaXMuY2Fubm9uQW5nbGUpKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYigyNTUsIDEyNywgODApJ1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTsgICAgXG4gICAgfSBcbiAgICBkcmF3R3VhZ2UoY3R4KSB7XG4gICAgICAgIC8vZ2F1Z2VcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAvIDIsXG4gICAgICAgICAgICB0aGlzLmdhdWdlQmFyUmFpZHVzLFxuICAgICAgICAgICAgTWF0aC5QSSxcbiAgICAgICAgICAgIHRoaXMuZ2F1Z2UsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7ICBcbiAgICB9XG5cbiAgICBkcmF3TWlzc2lsZShjdHgpIHtcbiAgICAgICAgLy9taXNzaWxlXG4gICAgICAgIGlmICghdGhpcy5maXJlKSB7XG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aC8yICsgdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLmNvcyh0aGlzLmNhbm5vbkFuZ2xlKSxcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yIC0gdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taXNzaWxlRHkgLT0gdGhpcy5ncmF2aXR5O1xuICAgICAgICAgICAgdGhpcy5taXNzaWxlWCArPSB0aGlzLm1pc3NpbGVEeDtcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgLT0gdGhpcy5taXNzaWxlRHk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlMiwgXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYLTE3LFxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWS0xNyxcbiAgICAgICAgICAgIDMwLDMwXG4gICAgICAgICkgXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gY3R4LmFyYyhcbiAgICAgICAgLy8gICAgIHRoaXMubWlzc2lsZVgsXG4gICAgICAgIC8vICAgICB0aGlzLm1pc3NpbGVZLFxuICAgICAgICAvLyAgICAgdGhpcy5taXNzaWxlUmFkaXVzLFxuICAgICAgICAvLyAgICAgMCxcbiAgICAgICAgLy8gICAgIE1hdGguUEkgKiAyXG4gICAgICAgIC8vIClcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2U4NTQ1MFwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICB9XG5cbiAgICBtb3ZlTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IC10aGlzLm1heFNwZWVkO1xuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWF4U3BlZWQ7XG4gICAgfVxuICAgIFxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIH1cblxuICAgIG1vdmVVcCgpIHtcbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZSArPSB0aGlzLmNhbm5vbkFuZ2xlU3BlZWQ7XG4gICAgfVxuXG4gICAgbW92ZURvd24oKSB7XG4gICAgICAgIHRoaXMuY2Fubm9uQW5nbGUgKz0gLXRoaXMuY2Fubm9uQW5nbGVTcGVlZDtcbiAgICB9XG5cbiAgICBzdG9wY2Fubm9uQW5nbGUoKSB7XG4gICAgICAgIHRoaXMuY2Fubm9uU3BlZWQgPSAwO1xuICAgIH1cblxuICAgIHN0b3BTcGFjZWJhcigpIHtcbiAgICAgICAgdGhpcy5nYXVnZSA9IDBcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKCFkdCkgcmV0dXJuO1xuICAgICAgICAgIFxuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5jYW5ub25BbmdsZVNwZWVkO1xuXG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueCA8IDApIHRoaXMucG9zaXRpb24ueCA9IDA7XG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueCAgKyB0aGlzLndpZHRoID4gdGhpcy5nYW1lV2lkdGgvMiAtIHRoaXMud2lkdGggKiAyKSB0aGlzLnBvc2l0aW9uLnggPSAodGhpcy5nYW1lV2lkdGgvMikgLSB0aGlzLndpZHRoICogMztcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMiA9PT0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMikgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHRcblxuICAgICAgICAvL2d1YWdlXG4gICAgICAgIGlmKHRoaXMuZ2F1Z2UgPiBNYXRoLlBJICogMikge3RoaXMuZ2F1Z2UgPSBNYXRoLlBJICogMn0gXG5cbiAgICAgICAgLy9taXNzaWxlIHdhbGwgb24gbGVmdC9yaWdodC90b3AvYm90dG9tXG4gICAgICAgIGlmKHRoaXMubWlzc2lsZVggLSB0aGlzLm1pc3NpbGVSYWRpdXMgPCAtIDIgKiB0aGlzLndpZHRoIHx8XG4gICAgICAgICAgICAgdGhpcy5taXNzaWxlWCArIHRoaXMubWlzc2lsZVJhZGl1cyA+IHRoaXMuZ2FtZVdpZHRoIHx8IFxuICAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgPCAwIHx8IHRoaXMubWlzc2lsZVkgKyB0aGlzLm1pc3NpbGVSYWRpdXMgPiB0aGlzLmdhbWVIZWlnaHQgKyAyKnRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hdHRlbXB0cysrO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmF0dGVtcHRzQ291bnQuaW5uZXJUZXh0ID0gYEF0dGVtcHRzOiAke3RoaXMuZ2FtZS5hdHRlbXB0c31gXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdhbWUuYXR0ZW1wdHMpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vbWlzc2lsZSBoaXR0aW5nIHRhcmdldFxuICAgICAgICAgaWYgKHRoaXMubWlzc2lsZVggPj0gdGhpcy5nYW1lLnRhcmdldC50YXJnZXRYICYmXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYIDw9IHRoaXMuZ2FtZS50YXJnZXQudGFyZ2V0WCArIHRoaXMuZ2FtZS50YXJnZXQudGFyZ2V0V2lkdGggJiZcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgPj0gdGhpcy5nYW1lLnRhcmdldC50YXJnZXRZICYmXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVZIDw9IHRoaXMuZ2FtZUhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1pc3NpbGVYID0gLXRoaXMubWlzc2lsZVg7XG4gICAgICAgICAgICAgICAgdGhpcy5taXNzaWxlWSA9IC10aGlzLm1pc3NpbGVZO1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKT0+eyBhbGVydChcImhpdCB0YXJnZXRcIikgfSwgMClcbiAgICAgICAgICAgICAgICAvLyBjbGVhckludGVydmFsKHNldEludGVydmFsKHRoaXMuZHJhd01pc3NpbGUodGhpcy5nYW1lLmN0eCksIDEwKSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5taXNzaWxlRHggPSAtdGhpcy5taXNzaWxlRHg7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5taXNzaWxlRHkgPSAtdGhpcy5taXNzaWxlRHk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2hpdCB0YXJnZXQnKVxuICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBjaGVjaygpIHtcbiAgICAvLyAgICAgaWYodGhpcy5taXNzaWxlWCA8IDAgfHwgdGhpcy5taXNzaWxlWCA+IHRoaXMuZ2FtZVdpZHRoIHx8IHRoaXMubWlzc2lsZVkgPCAwIHx8IHRoaXMubWlzc2lsZVkgPiB0aGlzLmdhbWVIZWlnaHQpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0aGlzLm1pc3NpbGVYID49IHRoaXMuZ2FtZS50YXJnZXRYICYmXG4gICAgLy8gICAgICAgICB0aGlzLm1pc3NpbGVYIDw9IHRoaXMuZ2FtZS50YXJnZXRYICsgdGhpcy5nYW1lLnRhcmdldFdpZHRoICYmXG4gICAgLy8gICAgICAgICB0aGlzLm1pc3NpbGVZID49IHRoaXMuZ2FtZS50YXJnZXRZKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3RhcnQpO1xuICAgIC8vICAgICAgICAgICAgIGlmKGNvbmZpcm0oXCJZb3UgZ290IHRoaXMsIHdhbnQgdG8gcGxheSBhZ2Fpbj9cIikpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IodGFuaywgZ2FtZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OiBcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhbmsuZmlyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFuay5jaGFyZ2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5rLmdhdWdlICs9IHRhbmsuZ2F1Z2VTcGVlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFuay5taXNzaWxlRHggPSB0YW5rLmdhdWdlICogMS41ICogTWF0aC5jb3ModGFuay5jYW5ub25BbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5rLm1pc3NpbGVEeSA9IHRhbmsuZ2F1Z2UgKiAxLjUgKiBNYXRoLnNpbih0YW5rLmNhbm5vbkFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuc3BlZWQgPCAwKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuc3BlZWQgPiAwKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuY2Fubm9uQW5nbGUgPj0wIClcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wY2Fubm9uQW5nbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuY2Fubm9uQW5nbGUgPD0gTWF0aC5QSSlcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wY2Fubm9uQW5nbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5jaGFyZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0YW5rLmZpcmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YW5rLmdhdWdlID0gTWF0aC5QSTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0V2lkdGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCArIDEwMCk7XG4gICAgICAgIHRoaXMudGFyZ2V0SGVpZ2h0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAgKyAxMDApO1xuICAgICAgICB0aGlzLnRhcmdldFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMzAwIC0gdGhpcy50YXJnZXRXaWR0aCkgKyA1MDApO1xuICAgICAgICB0aGlzLnRhcmdldFkgPSBnYW1lLmdhbWVIZWlnaHQgLSB0aGlzLnRhcmdldEhlaWdodDtcbiAgICAgICAgdGhpcy5pbWFnZTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKVxuICAgIH1cbiAgICB1cGRhdGUoKXt9XG4gICAgXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlNCwgdGhpcy50YXJnZXRYLCB0aGlzLnRhcmdldFksIHRoaXMudGFyZ2V0V2lkdGgsIHRoaXMudGFyZ2V0SGVpZ2h0KTtcbiAgICB9XG59ICAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgcG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICAgICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltYWdlMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2FsbFwiKVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgbGV0IGJvdHRvbU9mTWlzc2lsZSA9IHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVZICsgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVJhZGl1cztcbiAgICAgICAgbGV0IHRvcE9mTWlzc2lsZSA9IHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVZO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRvcE9mV2FsbCA9IHRoaXMucG9zaXRpb24ueTtcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBvc2l0aW9uLng7XG4gICAgICAgIGxldCByaWdodCA9IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGg7XG4gICAgICAgIGxldCBib3R0b20gPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodDtcbiAgICAgICAgaWYgKGJvdHRvbU9mTWlzc2lsZSA+PSB0b3BPZldhbGwgJiYgdG9wT2ZNaXNzaWxlIDw9IGJvdHRvbSAmJiB0aGlzLmdhbWUudGFuay5taXNzaWxlWCA+PSBsZWZ0ICYmIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVYICsgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVJhZGl1cyA8PSByaWdodCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVggPSAtIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVYO1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVggPSAtIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVZO1xuICAgICAgICAgICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9IFxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTMsdGhpcy4gcG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgXG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=