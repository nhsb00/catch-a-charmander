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
        this.game.attemptsCount.innerText = "Attempts: ".concat(this.game.attempts);
        console.log(this.game.attempts);
      } //missile hitting target


      if (this.missileX >= this.game.target.targetX && this.missileX <= this.game.target.targetX + this.game.target.targetWidth && this.missileY >= this.game.target.targetY && this.missileY <= this.gameHeight) {
        this.hit = true;
        this.missileX = -this.missileX;
        this.missileY = -this.missileY; // setTimeout(()=>{ alert("hit target") }, 0)
        // clearInterval(setInterval(this.drawMissile(this.game.ctx), 10));
        // this.missileDx = -this.missileDx;
        // this.missileDy = -this.missileDy;

        console.log('hit target');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFua2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiZ2FtZSIsIkdhbWUiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlc3RhcnQiLCJpbnN0cnVjdGlvbiIsIm1vZGFsIiwic3R5bGUiLCJkaXNwbGF5IiwibGFzdFRpbWUiLCJnYW1lTG9vcCIsInRpbWVzdGFtcCIsImR0IiwiY2xlYXJSZWN0IiwidXBkYXRlIiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvdW50IiwidHdpbmtsZSIsInF1ZXJ5U2VsZWN0b3IiLCJjb2xvciIsInNldEludGVydmFsIiwicGxheSIsImF1ZGlvIiwiR0FNRVNUQVRFIiwiUlVOTklORyIsIk1FTlUiLCJHQU1FT1ZFUiIsIk5FV1NUQUdFIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsImdhbWVzdGF0ZSIsInRhbmsiLCJUYW5rIiwidGFyZ2V0IiwiVGFyZ2V0IiwiZ2FtZU9iamVjdHMiLCJ3YWxscyIsImF0dGVtcHRzIiwiYXR0ZW1wdHNDb3VudCIsIm1heEF0dGVtcHRzIiwic3RhZ2VzIiwic3RhZ2UwIiwic3RhZ2UxIiwic3RhZ2UyIiwic3RhZ2UzIiwic3RhZ2U0Iiwic3RhZ2U1Iiwic3RhZ2U2Iiwic3RhZ2U3Iiwic3RhZ2U4Iiwic3RhZ2U5Iiwic3RhZ2UxMCIsImN1cnJlbnRTdGFnZSIsImN1cnJlbnRTdGFnZUNvdW50IiwiVGFua0hhbmRsZXIiLCJpbWFnZTUiLCJpbWFnZTYiLCJidWlsZFN0YWdlIiwicmVzZXQiLCJoaXQiLCJpbm5lclRleHQiLCJzdGFydCIsImZvckVhY2giLCJvYmplY3QiLCJmaWx0ZXIiLCJ3YWxsIiwibWFya2VkRm9yRGVsZXRpb24iLCJkcmF3R3VhZ2UiLCJkcmF3TWlzc2lsZSIsImRyYXdJbWFnZSIsImZpbGxTdHlsZSIsImZpbGwiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzdGFnZSIsInJvdyIsInJvd0luZGV4Iiwid2FsbEluZGV4IiwicG9zaXRpb24iLCJ4IiwieSIsInB1c2giLCJXYWxsIiwid2lkdGgiLCJoZWlnaHQiLCJtYXhTcGVlZCIsInNwZWVkIiwiY2Fubm9uQW5nbGUiLCJNYXRoIiwiUEkiLCJjYW5ub25BbmdsZVNwZWVkIiwiY2Fubm9uU3BlZWQiLCJjYW5ub25MZW5ndGgiLCJzcXJ0IiwiZ2F1Z2UiLCJnYXVnZVNwZWVkIiwiZ2F1Z2VCYXJSYWlkdXMiLCJtaXNzaWxlWCIsImNvcyIsIm1pc3NpbGVZIiwic2luIiwibWlzc2lsZVJhZGl1cyIsIm1pc3NpbGVEeCIsIm1pc3NpbGVEeSIsImdyYXZpdHkiLCJjaGFyZ2luZyIsImZpcmUiLCJncm91bmQiLCJpbWFnZTEiLCJpbWFnZTIiLCJqdW1wY291bnQiLCJqdW1wbWF4IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJhcmMiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0WCIsInRhcmdldFdpZHRoIiwidGFyZ2V0WSIsImV2ZW50Iiwia2V5Q29kZSIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwibW92ZVVwIiwibW92ZURvd24iLCJzdG9wIiwic3RvcGNhbm5vbkFuZ2xlIiwiZmxvb3IiLCJyYW5kb20iLCJ0YXJnZXRIZWlnaHQiLCJpbWFnZTQiLCJpbWFnZTMiLCJib3R0b21PZk1pc3NpbGUiLCJ0b3BPZk1pc3NpbGUiLCJ0b3BPZldhbGwiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBZjtBQUVBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFFQSxJQUFNQyxVQUFVLEdBQUcsR0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsR0FBcEI7QUFFQSxJQUFJQyxJQUFJLEdBQUcsSUFBSUMscURBQUosQ0FBU0gsVUFBVCxFQUFxQkMsV0FBckIsRUFB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YUFBekMsSUFBMER3QyxLQUEzSixFQUFrSztBQUM5SixhQUFLaEosSUFBTCxDQUFVaUMsSUFBVixDQUFlbUUsUUFBZixHQUEwQixDQUFFLEtBQUtwRyxJQUFMLENBQVVpQyxJQUFWLENBQWVtRSxRQUEzQztBQUNBLGFBQUtwRyxJQUFMLENBQVVpQyxJQUFWLENBQWVtRSxRQUFmLEdBQTBCLENBQUUsS0FBS3BHLElBQUwsQ0FBVWlDLElBQVYsQ0FBZXFFLFFBQTNDO0FBQ0EsYUFBS2xDLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0M7QUFDUjs7O3lCQUVJeEUsRyxFQUFLO0FBQ05BLFNBQUcsQ0FBQzJFLFNBQUosQ0FBYyxLQUFLb0UsTUFBbkIsRUFBMEIsS0FBTTFELFFBQU4sQ0FBZUMsQ0FBekMsRUFBNEMsS0FBS0QsUUFBTCxDQUFjRSxDQUExRCxFQUE2RCxLQUFLRyxLQUFsRSxFQUF5RSxLQUFLQyxNQUE5RTtBQUVIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCTCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCJcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVCb2FyZFwiKTtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3QgR0FNRV9XSURUSCA9IDgwMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNjAwO1xuXG5sZXQgZ2FtZSA9IG5ldyBHYW1lKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBjdHgpO1xuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydCcpO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGdhbWUucmVzdGFydCgpO1xufSlcblxuY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uXCIpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuaW5zdHJ1Y3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG5sZXQgbGFzdFRpbWUgPSAwO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCh0aW1lc3RhbXApIHtcbiAgbGV0IGR0ID0gdGltZXN0YW1wIC0gbGFzdFRpbWVcbiAgbGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCA4MDAsIDYwMCk7XG5cbiAgZ2FtZS51cGRhdGUoZHQpO1xuICBnYW1lLmRyYXcoY3R4KTtcbiAgXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG59XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG5cbmxldCBjb3VudCA9IDA7XG5cbmZ1bmN0aW9uIHR3aW5rbGUoKXtcbiAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjOTM5NTk3JztcbiAgICBjb3VudCArKztcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnI2U4NTQ1MCc7XG4gICAgY291bnQgKys7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyNhMmM0OWInO1xuICAgIGNvdW50ICsrO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjZjVkZjRkJztcbiAgICBjb3VudCArKztcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyM3YmM0YzQnO1xuICAgIGNvdW50ID0gMDtcbiAgfVxufVxuXG5zZXRJbnRlcnZhbCh0d2lua2xlLCAxMDAwKTtcblxuZnVuY3Rpb24gcGxheSgpIHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuICBhdWRpby5wbGF5KClcbn0iLCJpbXBvcnQgVGFuayBmcm9tICcuL3RhbmsnO1xuaW1wb3J0IFRhbmtIYW5kbGVyIGZyb20gJy4vdGFua2hhbmRsZXInO1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCc7XG5pbXBvcnQgeyBidWlsZFN0YWdlLCBzdGFnZTAsIHN0YWdlMSwgc3RhZ2UyLCBzdGFnZTMsIHN0YWdlNCwgc3RhZ2U1LCBzdGFnZTYsIHN0YWdlNywgc3RhZ2U4LCBzdGFnZTksIHN0YWdlMTAgfSBmcm9tICcuL3N0YWdlcyc7XG5cbmV4cG9ydCBjb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgLy8gUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgTUVOVTogMixcbiAgICBHQU1FT1ZFUjogMyxcbiAgICBORVdTVEFHRTogNCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0LCBjdHgpIHtcblxuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0OyAgICBcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGhcbiAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuTUVOVTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMudGFuayA9IG5ldyBUYW5rKHRoaXMpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IG5ldyBUYXJnZXQodGhpcyk7ICBcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLndhbGxzID0gW11cbiAgICAgICAgdGhpcy5hdHRlbXB0cyA9IDA7XG4gICAgICAgIHRoaXMuYXR0ZW1wdHNDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRlbXB0cycpXG4gICAgICAgIHRoaXMubWF4QXR0ZW1wdHMgPSAxMDtcblxuICAgICAgICB0aGlzLnN0YWdlcyA9IFtzdGFnZTAsIHN0YWdlMSwgc3RhZ2UyLCBzdGFnZTMsIHN0YWdlNCwgc3RhZ2U1LCBzdGFnZTYsIHN0YWdlNywgc3RhZ2U4LCBzdGFnZTksIHN0YWdlMTBdXG4gICAgICAgIHRoaXMuY3VycmVudFN0YWdlID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhZ2VDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhZ2VcIilcbiAgICAgICAgbmV3IFRhbmtIYW5kbGVyKHRoaXMudGFuaywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbWFnZTUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIilcbiAgICAgICAgdGhpcy5pbWFnZTYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVvdmVyXCIpIFxuICAgIH1cbiAgICBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYodGhpcy5nYW1lc3RhdGUgIT09IEdBTUVTVEFURS5NRU5VICYmXG4gICAgICAgICAgICB0aGlzLmdhbWVzdGF0ZSAhPT0gR0FNRVNUQVRFLk5FV1NUQUdFKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG5ldyBUYXJnZXQodGhpcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RhZ2UgPj0gMTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFnZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLndhbGxzID0gYnVpbGRTdGFnZSh0aGlzLCB0aGlzLnN0YWdlc1t0aGlzLmN1cnJlbnRTdGFnZV0pO1xuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFt0aGlzLnRhbmssIHRoaXMudGFyZ2V0XVxuICAgICAgICAgICAgdGhpcy5hdHRlbXB0cyA9IDA7XG4gICAgICAgICAgICB0aGlzLnRhbmsucmVzZXQoKTtcbiAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuUlVOTklOR1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLk5FV1NUQUdFO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50YW5rID0gbmV3IFRhbmsodGhpcyk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRhcmdldCh0aGlzKTtcbiAgICAgICAgdGhpcy53YWxscyA9IGJ1aWxkU3RhZ2UodGhpcywgdGhpcy5zdGFnZXNbMF0pO1xuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gW3RoaXMudGFuaywgdGhpcy50YXJnZXRdXG4gICAgICAgIG5ldyBUYW5rSGFuZGxlcih0aGlzLnRhbmssIHRoaXMpO1xuICAgICAgICB0aGlzLmF0dGVtcHRzID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY3VycmVudFN0YWdlID0gMDtcbiAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuYXR0ZW1wdHMgPT09IHRoaXMubWF4QXR0ZW1wdHMpIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLkdBTUVPVkVSO1xuXG4gICAgICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSB8fFxuICAgICAgICAgICAgdGhpcy5nYW1lc3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUikgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0aGlzLnRhbmsuaGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnRhbmsuaGl0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFnZSsrO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhZ2VDb3VudC5pbm5lclRleHQgPSBgU3RhZ2U6ICR7dGhpcy5jdXJyZW50U3RhZ2V9YFxuICAgICAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuTkVXU1RBR0U7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIFsuLi50aGlzLmdhbWVPYmplY3RzLCAuLi50aGlzLndhbGxzXS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QudXBkYXRlKGR0KSk7IFxuXG4gICAgICAgdGhpcy53YWxscyA9IHRoaXMud2FsbHMuZmlsdGVyKHdhbGwgPT4gIXdhbGwubWFya2VkRm9yRGVsZXRpb24pXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgdGhpcy50YW5rLmRyYXcoY3R4KTtcbiAgICAgICAgdGhpcy50YW5rLmRyYXdHdWFnZShjdHgpO1xuICAgICAgICB0aGlzLnRhbmsuZHJhd01pc3NpbGUoY3R4KTtcbiAgICAgICAgWy4uLnRoaXMuZ2FtZU9iamVjdHMsIC4uLnRoaXMud2FsbHNdLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5kcmF3KGN0eCkpOyBcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlNSwgMCwwLHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQpXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9XCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIlByZXNzIEVudGVyIHRvIHN0YXJ0XCIsIHRoaXMuZ2FtZVdpZHRoIC8yICwgdGhpcy5nYW1lSGVpZ2h0LzIpXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTYsIDAsMCx0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KVxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID1cImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuZ2FtZVdpZHRoIC8yICwgdGhpcy5nYW1lSGVpZ2h0LzIpXG4gICAgICAgICB9XG5cbiAgICAgICAgICBpZih0aGlzLmdhbWVzdGF0ZSA9PT0gR0FNRVNUQVRFLk5FV1NUQUdFKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2U2LCAwLDAsdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodClcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9XCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIk5FVyBTVEFHRVwiLCB0aGlzLmdhbWVXaWR0aCAvMiAsIHRoaXMuZ2FtZUhlaWdodC8yKVxuICAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gdG9nZ2xlUGF1c2UoKSB7XG4gICAgLy8gICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLmdhbWVzdGF0ZSA9IEdBTUVTVEFURS5QQVVTRUQ7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59IiwiaW1wb3J0IFdhbGwgZnJvbSAnLi93YWxsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU3RhZ2UoZ2FtZSwgc3RhZ2UpIHtcbiAgICBsZXQgd2FsbHMgPSBbXTtcblxuICAgIHN0YWdlLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgcm93LmZvckVhY2goKHdhbGwsIHdhbGxJbmRleCk9PntcbiAgICAgICAgICAgIGlmKHdhbGwgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDQ1MCAtIDUwICogcm93SW5kZXgsIFxuICAgICAgICAgICAgICAgICAgICB5OiA1NTAgLSA1MCAqIHdhbGxJbmRleFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3YWxscy5wdXNoKG5ldyBXYWxsKGdhbWUsIHBvc2l0aW9uKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiB3YWxsc1xufVxuXG5leHBvcnQgY29uc3Qgc3RhZ2UwID0gW1xuWzFdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2UxID1bXG5bMCwwLDAsMCwwLDAsMCwxLDBdLFxuWzEsMSwxLDEsMSwxLDEsMSwwXSxcblswLDAsMCwwLDAsMCwwLDEsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTIgPVtcblsxLDEsMSwxLDEsMSwxLDEsMF0sXG5bMCwwLDAsMCwxLDAsMCwwLDBdLFxuWzEsMSwxLDEsMSwxLDEsMSwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlMyA9W1xuWzEsMSwxLDEsMSwxLDEsMCwwXSxcblswLDAsMCwxLDAsMCwwLDEsMF0sXG5bMSwxLDEsMSwxLDEsMSwwLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2U0ID1bXG5bMSwxLDEsMSwxLDEsMSwwLDBdLFxuWzAsMCwwLDAsMCwwLDEsMCwwXSxcblsxLDEsMSwxLDEsMSwxLDEsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTUgPVtcblsxLDEsMSwxLDAsMSwxLDAsMF0sXG5bMCwwLDAsMCwxLDAsMCwwLDBdLFxuWzEsMSwxLDEsMSwxLDEsMSwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlNiA9W1xuWzAsMSwxLDAsMSwwLDAsMCwxXSxcblsxLDAsMCwxLDAsMSwxLDEsMF0sXG5bMCwxLDEsMCwxLDAsMCwwLDFdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2U3ID1bXG5bMSwwLDEsMCwxLDAsMSwwLDFdLFxuWzAsMSwwLDEsMCwxLDAsMSwwXSxcblsxLDAsMSwwLDEsMCwxLDAsMV1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTggPVtcblsxLDAsMSwwLDEsMSwwLDAsMF0sXG5bMSwxLDEsMCwxLDEsMSwxLDBdLFxuWzEsMCwxLDEsMCwxLDAsMCwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlOSA9W1xuWzEsMSwxLDEsMSwxLDAsMCwwXSxcblsxLDEsMSwxLDEsMSwxLDEsMF0sXG5bMSwxLDEsMSwxLDEsMCwwLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2UxMCA9W1xuWzEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG5bMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcblsxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXG5dIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFuayB7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZS5nYW1lV2lkdGg7XG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWUuZ2FtZUhlaWdodDtcbiAgICAgICAgLy90YW5rXG4gICAgICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDE7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0LFxuICAgICAgICB9OyAvLyB0YW5rIHBvc2l0aW9uXG4gICAgICAgIC8vY2Fubm9uXG4gICAgICAgIHRoaXMuY2Fubm9uQW5nbGUgPSBNYXRoLlBJIC8gNDtcbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZVNwZWVkID0gTWF0aC5QSSAvIDYwO1xuICAgICAgICB0aGlzLmNhbm5vblNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5jYW5ub25MZW5ndGggPSB0aGlzLndpZHRoICogTWF0aC5zcXJ0KDIpO1xuICAgICAgICAvL2dhdWdlXG4gICAgICAgIHRoaXMuZ2F1Z2UgPSBNYXRoLlBJO1xuICAgICAgICB0aGlzLmdhdWdlU3BlZWQgPSBNYXRoLlBJIC8gMzA7XG4gICAgICAgIHRoaXMuZ2F1Z2VCYXJSYWlkdXMgPSAzMDtcbiAgICAgICAgLy9taXNzaWxlXG4gICAgICAgIHRoaXMubWlzc2lsZVggPSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLzIgKyB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguY29zKHRoaXMuY2Fubm9uQW5nbGUpLFxuICAgICAgICB0aGlzLm1pc3NpbGVZID0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMiAtIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5zaW4odGhpcy5jYW5ub25BbmdsZSlcbiAgICAgICAgdGhpcy5taXNzaWxlUmFkaXVzID0gMTA7XG4gICAgICAgIHRoaXMubWlzc2lsZUR4ID0gdGhpcy5nYXVnZSAqIE1hdGguY29zKHRoaXMuY2Fubm9uQW5nbGUpO1xuICAgICAgICB0aGlzLm1pc3NpbGVEeSA9IHRoaXMuZ2F1Z2UgKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKTtcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gMC4wOTgxO1xuICAgICAgICB0aGlzLmNoYXJnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdyb3VuZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuaW1hZ2UxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YW5rXCIpXG4gICAgICAgIHRoaXMuaW1hZ2UyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXNzaWxlXCIpXG4gICAgICAgIHRoaXMuanVtcGNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5qdW1wbWF4ID0gMTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiBcbiAgICBkcmF3KGN0eCkge1xuICAgICAgICAvL3RhbmtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlMSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSAnI2EyYzQ5Yic7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIC8vY2Fubm9uXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLzIsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIpO1xuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aC8yICsgdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLmNvcyh0aGlzLmNhbm5vbkFuZ2xlKSxcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgLSB0aGlzLmNhbm5vbkxlbmd0aCAqIE1hdGguc2luKHRoaXMuY2Fubm9uQW5nbGUpKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYigyNTUsIDEyNywgODApJ1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTsgICAgXG4gICAgfSBcbiAgICBkcmF3R3VhZ2UoY3R4KSB7XG4gICAgICAgIC8vZ2F1Z2VcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAvIDIsXG4gICAgICAgICAgICB0aGlzLmdhdWdlQmFyUmFpZHVzLFxuICAgICAgICAgICAgTWF0aC5QSSxcbiAgICAgICAgICAgIHRoaXMuZ2F1Z2UsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7ICBcbiAgICB9XG5cbiAgICBkcmF3TWlzc2lsZShjdHgpIHtcbiAgICAgICAgLy9taXNzaWxlXG4gICAgICAgIGlmICghdGhpcy5maXJlKSB7XG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aC8yICsgdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLmNvcyh0aGlzLmNhbm5vbkFuZ2xlKSxcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yIC0gdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taXNzaWxlRHkgLT0gdGhpcy5ncmF2aXR5O1xuICAgICAgICAgICAgdGhpcy5taXNzaWxlWCArPSB0aGlzLm1pc3NpbGVEeDtcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgLT0gdGhpcy5taXNzaWxlRHk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlMiwgXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYLTE3LFxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWS0xNyxcbiAgICAgICAgICAgIDMwLDMwXG4gICAgICAgICkgXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gY3R4LmFyYyhcbiAgICAgICAgLy8gICAgIHRoaXMubWlzc2lsZVgsXG4gICAgICAgIC8vICAgICB0aGlzLm1pc3NpbGVZLFxuICAgICAgICAvLyAgICAgdGhpcy5taXNzaWxlUmFkaXVzLFxuICAgICAgICAvLyAgICAgMCxcbiAgICAgICAgLy8gICAgIE1hdGguUEkgKiAyXG4gICAgICAgIC8vIClcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2U4NTQ1MFwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICB9XG5cbiAgICBtb3ZlTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IC10aGlzLm1heFNwZWVkO1xuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWF4U3BlZWQ7XG4gICAgfVxuICAgIFxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIH1cblxuICAgIG1vdmVVcCgpIHtcbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZSArPSB0aGlzLmNhbm5vbkFuZ2xlU3BlZWQ7XG4gICAgfVxuXG4gICAgbW92ZURvd24oKSB7XG4gICAgICAgIHRoaXMuY2Fubm9uQW5nbGUgKz0gLXRoaXMuY2Fubm9uQW5nbGVTcGVlZDtcbiAgICB9XG5cbiAgICBzdG9wY2Fubm9uQW5nbGUoKSB7XG4gICAgICAgIHRoaXMuY2Fubm9uU3BlZWQgPSAwO1xuICAgIH1cblxuICAgIHN0b3BTcGFjZWJhcigpIHtcbiAgICAgICAgdGhpcy5nYXVnZSA9IDBcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKCFkdCkgcmV0dXJuO1xuICAgICAgICAgIFxuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5jYW5ub25BbmdsZVNwZWVkO1xuXG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueCA8IDApIHRoaXMucG9zaXRpb24ueCA9IDA7XG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueCAgKyB0aGlzLndpZHRoID4gdGhpcy5nYW1lV2lkdGgvMiAtIHRoaXMud2lkdGggKiAyKSB0aGlzLnBvc2l0aW9uLnggPSAodGhpcy5nYW1lV2lkdGgvMikgLSB0aGlzLndpZHRoICogMztcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMiA9PT0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMikgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHRcblxuICAgICAgICAvL2d1YWdlXG4gICAgICAgIGlmKHRoaXMuZ2F1Z2UgPiBNYXRoLlBJICogMikge3RoaXMuZ2F1Z2UgPSBNYXRoLlBJICogMn0gXG5cbiAgICAgICAgLy9taXNzaWxlIHdhbGwgb24gbGVmdC9yaWdodC90b3AvYm90dG9tXG4gICAgICAgIGlmKHRoaXMubWlzc2lsZVggLSB0aGlzLm1pc3NpbGVSYWRpdXMgPCAtIDIgKiB0aGlzLndpZHRoIHx8XG4gICAgICAgICAgICAgdGhpcy5taXNzaWxlWCArIHRoaXMubWlzc2lsZVJhZGl1cyA+IHRoaXMuZ2FtZVdpZHRoIHx8IFxuICAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgPCAwIHx8IHRoaXMubWlzc2lsZVkgKyB0aGlzLm1pc3NpbGVSYWRpdXMgPiB0aGlzLmdhbWVIZWlnaHQgKyAyKnRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hdHRlbXB0cysrO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmF0dGVtcHRzQ291bnQuaW5uZXJUZXh0ID0gYEF0dGVtcHRzOiAke3RoaXMuZ2FtZS5hdHRlbXB0c31gXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWUuYXR0ZW1wdHMpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vbWlzc2lsZSBoaXR0aW5nIHRhcmdldFxuICAgICAgICAgaWYgKHRoaXMubWlzc2lsZVggPj0gdGhpcy5nYW1lLnRhcmdldC50YXJnZXRYICYmXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVYIDw9IHRoaXMuZ2FtZS50YXJnZXQudGFyZ2V0WCArIHRoaXMuZ2FtZS50YXJnZXQudGFyZ2V0V2lkdGggJiZcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVkgPj0gdGhpcy5nYW1lLnRhcmdldC50YXJnZXRZICYmXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVZIDw9IHRoaXMuZ2FtZUhlaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1pc3NpbGVYID0gLXRoaXMubWlzc2lsZVg7XG4gICAgICAgICAgICAgICAgdGhpcy5taXNzaWxlWSA9IC10aGlzLm1pc3NpbGVZO1xuXG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKT0+eyBhbGVydChcImhpdCB0YXJnZXRcIikgfSwgMClcbiAgICAgICAgICAgICAgICAvLyBjbGVhckludGVydmFsKHNldEludGVydmFsKHRoaXMuZHJhd01pc3NpbGUodGhpcy5nYW1lLmN0eCksIDEwKSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5taXNzaWxlRHggPSAtdGhpcy5taXNzaWxlRHg7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5taXNzaWxlRHkgPSAtdGhpcy5taXNzaWxlRHk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpdCB0YXJnZXQnKVxuICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBjaGVjaygpIHtcbiAgICAvLyAgICAgaWYodGhpcy5taXNzaWxlWCA8IDAgfHwgdGhpcy5taXNzaWxlWCA+IHRoaXMuZ2FtZVdpZHRoIHx8IHRoaXMubWlzc2lsZVkgPCAwIHx8IHRoaXMubWlzc2lsZVkgPiB0aGlzLmdhbWVIZWlnaHQpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0aGlzLm1pc3NpbGVYID49IHRoaXMuZ2FtZS50YXJnZXRYICYmXG4gICAgLy8gICAgICAgICB0aGlzLm1pc3NpbGVYIDw9IHRoaXMuZ2FtZS50YXJnZXRYICsgdGhpcy5nYW1lLnRhcmdldFdpZHRoICYmXG4gICAgLy8gICAgICAgICB0aGlzLm1pc3NpbGVZID49IHRoaXMuZ2FtZS50YXJnZXRZKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3RhcnQpO1xuICAgIC8vICAgICAgICAgICAgIGlmKGNvbmZpcm0oXCJZb3UgZ290IHRoaXMsIHdhbnQgdG8gcGxheSBhZ2Fpbj9cIikpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IodGFuaywgZ2FtZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OiBcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhbmsuZmlyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFuay5jaGFyZ2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5rLmdhdWdlICs9IHRhbmsuZ2F1Z2VTcGVlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFuay5taXNzaWxlRHggPSB0YW5rLmdhdWdlICogMS41ICogTWF0aC5jb3ModGFuay5jYW5ub25BbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YW5rLm1pc3NpbGVEeSA9IHRhbmsuZ2F1Z2UgKiAxLjUgKiBNYXRoLnNpbih0YW5rLmNhbm5vbkFuZ2xlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuc3BlZWQgPCAwKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuc3BlZWQgPiAwKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuY2Fubm9uQW5nbGUgPj0wIClcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wY2Fubm9uQW5nbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuY2Fubm9uQW5nbGUgPD0gTWF0aC5QSSlcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wY2Fubm9uQW5nbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5jaGFyZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0YW5rLmZpcmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YW5rLmdhdWdlID0gTWF0aC5QSTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0V2lkdGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCArIDEwMCk7XG4gICAgICAgIHRoaXMudGFyZ2V0SGVpZ2h0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAgKyAxMDApO1xuICAgICAgICB0aGlzLnRhcmdldFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMzAwIC0gdGhpcy50YXJnZXRXaWR0aCkgKyA1MDApO1xuICAgICAgICB0aGlzLnRhcmdldFkgPSBnYW1lLmdhbWVIZWlnaHQgLSB0aGlzLnRhcmdldEhlaWdodDtcbiAgICAgICAgdGhpcy5pbWFnZTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKVxuICAgIH1cbiAgICB1cGRhdGUoKXt9XG4gICAgXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlNCwgdGhpcy50YXJnZXRYLCB0aGlzLnRhcmdldFksIHRoaXMudGFyZ2V0V2lkdGgsIHRoaXMudGFyZ2V0SGVpZ2h0KTtcbiAgICB9XG59ICAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgcG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICAgICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltYWdlMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2FsbFwiKVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgbGV0IGJvdHRvbU9mTWlzc2lsZSA9IHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVZICsgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVJhZGl1cztcbiAgICAgICAgbGV0IHRvcE9mTWlzc2lsZSA9IHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVZO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRvcE9mV2FsbCA9IHRoaXMucG9zaXRpb24ueTtcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBvc2l0aW9uLng7XG4gICAgICAgIGxldCByaWdodCA9IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGg7XG4gICAgICAgIGxldCBib3R0b20gPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodDtcbiAgICAgICAgaWYgKGJvdHRvbU9mTWlzc2lsZSA+PSB0b3BPZldhbGwgJiYgdG9wT2ZNaXNzaWxlIDw9IGJvdHRvbSAmJiB0aGlzLmdhbWUudGFuay5taXNzaWxlWCA+PSBsZWZ0ICYmIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVYICsgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVJhZGl1cyA8PSByaWdodCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVggPSAtIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVYO1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVggPSAtIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVZO1xuICAgICAgICAgICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9IFxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTMsdGhpcy4gcG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgXG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=