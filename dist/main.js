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
      this.gamestate = GAMESTATE.MENU;
      this.tank = new _tank__WEBPACK_IMPORTED_MODULE_0__["default"](this);
      this.target = new _target__WEBPACK_IMPORTED_MODULE_2__["default"](this);
      this.walls = Object(_stages__WEBPACK_IMPORTED_MODULE_3__["buildStage"])(this, this.stages[0]);
      this.gameObjects = [this.tank, this.target];
      this.attempts = 0;
      this.start();
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
      }); // if(this.gamestate === GAMESTATE.PAUSED) {
      //     ctx.rect(0,0,this.gameWidth, this.gameHeight);
      //     ctx.fillStyle = "rgba(0,0,0,0.5)";
      //     ctx.fill();
      //     ctx.font = "30px Arial";
      //     ctx.fillStyle = "white";
      //     ctx.textAlign ="center";
      //     ctx.fillText("Pasued", this.gameWidth /2 , this.gameHeight/2)
      // }

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
        clearInterval(setInterval(this.drawMissile(this.game.ctx), 10));
        this.missileX = -this.missileX;
        this.missileY = -this.missileY;
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
        tank.charging = true;
        tank.hit = false;
        tank.gauge += tank.gaugeSpeed;
        tank.missileDx = tank.gauge * 1.5 * Math.cos(tank.cannonAngle);
        tank.missileDy = tank.gauge * 1.5 * Math.sin(tank.cannonAngle);
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
      ctx.drawImage(this.image4, this.targetX, this.targetY, this.targetWidth, this.targetHeight); // ctx.fillStyle = "#7bc4c4";
      // ctx.fillRect(this.targetX, this.targetY, this.targetWidth, this.targetHeight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFua2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3dhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiZ2FtZSIsIkdhbWUiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlc3RhcnQiLCJpbnN0cnVjdGlvbiIsIm1vZGFsIiwic3R5bGUiLCJkaXNwbGF5IiwibGFzdFRpbWUiLCJnYW1lTG9vcCIsInRpbWVzdGFtcCIsImR0IiwiY2xlYXJSZWN0IiwidXBkYXRlIiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvdW50IiwidHdpbmtsZSIsInF1ZXJ5U2VsZWN0b3IiLCJjb2xvciIsInNldEludGVydmFsIiwiR0FNRVNUQVRFIiwiUlVOTklORyIsIk1FTlUiLCJHQU1FT1ZFUiIsIk5FV1NUQUdFIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsImdhbWVzdGF0ZSIsInRhbmsiLCJUYW5rIiwidGFyZ2V0IiwiVGFyZ2V0IiwiZ2FtZU9iamVjdHMiLCJ3YWxscyIsImF0dGVtcHRzIiwiYXR0ZW1wdHNDb3VudCIsIm1heEF0dGVtcHRzIiwic3RhZ2VzIiwic3RhZ2UwIiwic3RhZ2UxIiwic3RhZ2UyIiwic3RhZ2UzIiwic3RhZ2U0Iiwic3RhZ2U1Iiwic3RhZ2U2Iiwic3RhZ2U3Iiwic3RhZ2U4Iiwic3RhZ2U5Iiwic3RhZ2UxMCIsImN1cnJlbnRTdGFnZSIsImN1cnJlbnRTdGFnZUNvdW50IiwiVGFua0hhbmRsZXIiLCJpbWFnZTUiLCJpbWFnZTYiLCJidWlsZFN0YWdlIiwicmVzZXQiLCJzdGFydCIsImhpdCIsImlubmVyVGV4dCIsImZvckVhY2giLCJvYmplY3QiLCJmaWx0ZXIiLCJ3YWxsIiwibWFya2VkRm9yRGVsZXRpb24iLCJkcmF3R3VhZ2UiLCJkcmF3TWlzc2lsZSIsImRyYXdJbWFnZSIsImZpbGxTdHlsZSIsImZpbGwiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzdGFnZSIsInJvdyIsInJvd0luZGV4Iiwid2FsbEluZGV4IiwicG9zaXRpb24iLCJ4IiwieSIsInB1c2giLCJXYWxsIiwid2lkdGgiLCJoZWlnaHQiLCJtYXhTcGVlZCIsInNwZWVkIiwiY2Fubm9uQW5nbGUiLCJNYXRoIiwiUEkiLCJjYW5ub25BbmdsZVNwZWVkIiwiY2Fubm9uU3BlZWQiLCJjYW5ub25MZW5ndGgiLCJzcXJ0IiwiZ2F1Z2UiLCJnYXVnZVNwZWVkIiwiZ2F1Z2VCYXJSYWlkdXMiLCJtaXNzaWxlWCIsImNvcyIsIm1pc3NpbGVZIiwic2luIiwibWlzc2lsZVJhZGl1cyIsIm1pc3NpbGVEeCIsIm1pc3NpbGVEeSIsImdyYXZpdHkiLCJjaGFyZ2luZyIsImZpcmUiLCJncm91bmQiLCJpbWFnZTEiLCJpbWFnZTIiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImNsb3NlUGF0aCIsImFyYyIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXRYIiwidGFyZ2V0V2lkdGgiLCJ0YXJnZXRZIiwiY2xlYXJJbnRlcnZhbCIsImV2ZW50Iiwia2V5Q29kZSIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwibW92ZVVwIiwibW92ZURvd24iLCJzdG9wIiwic3RvcGNhbm5vbkFuZ2xlIiwiZmxvb3IiLCJyYW5kb20iLCJ0YXJnZXRIZWlnaHQiLCJpbWFnZTQiLCJpbWFnZTMiLCJib3R0b21PZk1pc3NpbGUiLCJ0b3BPZk1pc3NpbGUiLCJ0b3BPZldhbGwiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBZjtBQUVBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFFQSxJQUFNQyxVQUFVLEdBQUcsR0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsR0FBcEI7QUFFQSxJQUFJQyxJQUFJLEdBQUcsSUFBSUMscURBQUosQ0FBU0gsVUFBVCxFQUFxQkMsV0FBckIsRUFBa0NILEdBQWxDLENBQVg7QUFFQSxJ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UUFBTCxDQUFjRSxDQUE5QjtBQUNBLFVBQUkyRCxJQUFJLEdBQUcsS0FBSzdELFFBQUwsQ0FBY0MsQ0FBekI7QUFDQSxVQUFJNkQsS0FBSyxHQUFHLEtBQUs5RCxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS0ksS0FBbkM7QUFDQSxVQUFJMEQsTUFBTSxHQUFHLEtBQUsvRCxRQUFMLENBQWNFLENBQWQsR0FBa0IsS0FBS0ksTUFBcEM7O0FBQ0EsVUFBSW9ELGVBQWUsSUFBSUUsU0FBbkIsSUFBZ0NELFlBQVksSUFBSUksTUFBaEQsSUFBMEQsS0FBSzlJLElBQUwsQ0FBVStCLElBQVYsQ0FBZW1FLFFBQWYsSUFBMkIwQyxJQUFyRixJQUE2RixLQUFLNUksSUFBTCxDQUFVK0IsSUFBVixDQUFlbUUsUUFBZixHQUEwQixLQUFLbEcsSUFBTCxDQUFVK0IsSUFBVixDQUFldUUsYUFBekMsSUFBMER1QyxLQUEzSixFQUFrSztBQUM5SixhQUFLN0ksSUFBTCxDQUFVK0IsSUFBVixDQUFlbUUsUUFBZixHQUEwQixDQUFFLEtBQUtsRyxJQUFMLENBQVUrQixJQUFWLENBQWVtRSxRQUEzQztBQUNBLGFBQUtsRyxJQUFMLENBQVUrQixJQUFWLENBQWVtRSxRQUFmLEdBQTBCLENBQUUsS0FBS2xHLElBQUwsQ0FBVStCLElBQVYsQ0FBZXFFLFFBQTNDO0FBQ0EsYUFBS2xDLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0M7QUFDUjs7O3lCQUVJdEUsRyxFQUFLO0FBQ05BLFNBQUcsQ0FBQ3lFLFNBQUosQ0FBYyxLQUFLbUUsTUFBbkIsRUFBMEIsS0FBTXpELFFBQU4sQ0FBZUMsQ0FBekMsRUFBNEMsS0FBS0QsUUFBTCxDQUFjRSxDQUExRCxFQUE2RCxLQUFLRyxLQUFsRSxFQUF5RSxLQUFLQyxNQUE5RTtBQUVIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCTCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCJcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVCb2FyZFwiKTtcblxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3QgR0FNRV9XSURUSCA9IDgwMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNjAwO1xuXG5sZXQgZ2FtZSA9IG5ldyBHYW1lKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hULCBjdHgpO1xuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydCcpO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGdhbWUucmVzdGFydCgpO1xufSlcblxuY29uc3QgaW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uXCIpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuaW5zdHJ1Y3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pXG5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KVxuXG5cblxuXG5cbmxldCBsYXN0VGltZSA9IDA7XG5cbmZ1bmN0aW9uIGdhbWVMb29wKHRpbWVzdGFtcCkge1xuICBsZXQgZHQgPSB0aW1lc3RhbXAgLSBsYXN0VGltZVxuICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICBjdHguY2xlYXJSZWN0KDAsIDAsIDgwMCwgNjAwKTtcblxuICBnYW1lLnVwZGF0ZShkdCk7XG4gIGdhbWUuZHJhdyhjdHgpO1xuICBcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbn1cblxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcblxubGV0IGNvdW50ID0gMDtcblxuZnVuY3Rpb24gdHdpbmtsZSgpe1xuICBpZiAoY291bnQgPT09IDApIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyM5Mzk1OTcnO1xuICAgIGNvdW50ICsrO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS5zdHlsZS5jb2xvciA9ICcjZTg1NDUwJztcbiAgICBjb3VudCArKztcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnI2EyYzQ5Yic7XG4gICAgY291bnQgKys7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDMpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnN0eWxlLmNvbG9yID0gJyNmNWRmNGQnO1xuICAgIGNvdW50ICsrO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuc3R5bGUuY29sb3IgPSAnIzdiYzRjNCc7XG4gICAgY291bnQgPSAwO1xuICB9XG59XG5cbnNldEludGVydmFsKHR3aW5rbGUsIDEwMDApOyIsImltcG9ydCBUYW5rIGZyb20gJy4vdGFuayc7XG5pbXBvcnQgVGFua0hhbmRsZXIgZnJvbSAnLi90YW5raGFuZGxlcic7XG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0JztcbmltcG9ydCB7IGJ1aWxkU3RhZ2UsIHN0YWdlMCwgc3RhZ2UxLCBzdGFnZTIsIHN0YWdlMywgc3RhZ2U0LCBzdGFnZTUsIHN0YWdlNiwgc3RhZ2U3LCBzdGFnZTgsIHN0YWdlOSwgc3RhZ2UxMCB9IGZyb20gJy4vc3RhZ2VzJztcblxuZXhwb3J0IGNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICAvLyBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBNRU5VOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIE5FV1NUQUdFOiA0LFxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0LCBjdHgpIHtcblxuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lSGVpZ2h0OyAgICBcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGhcbiAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuTUVOVTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMudGFuayA9IG5ldyBUYW5rKHRoaXMpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IG5ldyBUYXJnZXQodGhpcyk7ICBcbiAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLndhbGxzID0gW11cbiAgICAgICAgdGhpcy5hdHRlbXB0cyA9IDA7XG4gICAgICAgIHRoaXMuYXR0ZW1wdHNDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRlbXB0cycpXG4gICAgICAgIHRoaXMubWF4QXR0ZW1wdHMgPSAxMDtcblxuICAgICAgICB0aGlzLnN0YWdlcyA9IFtzdGFnZTAsIHN0YWdlMSwgc3RhZ2UyLCBzdGFnZTMsIHN0YWdlNCwgc3RhZ2U1LCBzdGFnZTYsIHN0YWdlNywgc3RhZ2U4LCBzdGFnZTksIHN0YWdlMTBdXG4gICAgICAgIHRoaXMuY3VycmVudFN0YWdlID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhZ2VDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhZ2VcIilcbiAgICAgICAgbmV3IFRhbmtIYW5kbGVyKHRoaXMudGFuaywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbWFnZTUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIilcbiAgICAgICAgdGhpcy5pbWFnZTYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVvdmVyXCIpIFxuICAgIH1cbiAgICBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYodGhpcy5nYW1lc3RhdGUgIT09IEdBTUVTVEFURS5NRU5VICYmXG4gICAgICAgICAgICB0aGlzLmdhbWVzdGF0ZSAhPT0gR0FNRVNUQVRFLk5FV1NUQUdFKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG5ldyBUYXJnZXQodGhpcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RhZ2UgPj0gMTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGFnZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLndhbGxzID0gYnVpbGRTdGFnZSh0aGlzLCB0aGlzLnN0YWdlc1t0aGlzLmN1cnJlbnRTdGFnZV0pO1xuICAgICAgICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFt0aGlzLnRhbmssIHRoaXMudGFyZ2V0XVxuICAgICAgICAgICAgdGhpcy5hdHRlbXB0cyA9IDA7XG4gICAgICAgICAgICB0aGlzLnRhbmsucmVzZXQoKTtcbiAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuUlVOTklOR1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLk1FTlVcbiAgICAgICAgdGhpcy50YW5rID0gbmV3IFRhbmsodGhpcyk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRhcmdldCh0aGlzKTtcbiAgICAgICAgdGhpcy53YWxscyA9IGJ1aWxkU3RhZ2UodGhpcywgdGhpcy5zdGFnZXNbMF0pO1xuICAgICAgICB0aGlzLmdhbWVPYmplY3RzID0gW3RoaXMudGFuaywgdGhpcy50YXJnZXRdXG4gICAgICAgIHRoaXMuYXR0ZW1wdHMgPSAwO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmF0dGVtcHRzID09PSB0aGlzLm1heEF0dGVtcHRzKSB0aGlzLmdhbWVzdGF0ZSA9IEdBTUVTVEFURS5HQU1FT1ZFUjtcblxuICAgICAgICBpZih0aGlzLmdhbWVzdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUgfHxcbiAgICAgICAgICAgIHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy50YW5rLmhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy50YW5rLmhpdCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhZ2UrKztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YWdlQ291bnQuaW5uZXJUZXh0ID0gYFN0YWdlOiAke3RoaXMuY3VycmVudFN0YWdlfWBcbiAgICAgICAgICAgIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLk5FV1NUQUdFO1xuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBbLi4udGhpcy5nYW1lT2JqZWN0cywgLi4udGhpcy53YWxsc10uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnVwZGF0ZShkdCkpOyBcblxuICAgICAgIHRoaXMud2FsbHMgPSB0aGlzLndhbGxzLmZpbHRlcih3YWxsID0+ICF3YWxsLm1hcmtlZEZvckRlbGV0aW9uKVxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIHRoaXMudGFuay5kcmF3KGN0eCk7XG4gICAgICAgIHRoaXMudGFuay5kcmF3R3VhZ2UoY3R4KTtcbiAgICAgICAgdGhpcy50YW5rLmRyYXdNaXNzaWxlKGN0eCk7XG4gICAgICAgIFsuLi50aGlzLmdhbWVPYmplY3RzLCAuLi50aGlzLndhbGxzXS5mb3JFYWNoKG9iamVjdCA9PiBvYmplY3QuZHJhdyhjdHgpKTsgXG5cbiAgICAgICAgLy8gaWYodGhpcy5nYW1lc3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgLy8gICAgIGN0eC5yZWN0KDAsMCx0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KTtcbiAgICAgICAgLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAvLyAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAvLyAgICAgY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIC8vICAgICBjdHgudGV4dEFsaWduID1cImNlbnRlclwiO1xuICAgICAgICAvLyAgICAgY3R4LmZpbGxUZXh0KFwiUGFzdWVkXCIsIHRoaXMuZ2FtZVdpZHRoIC8yICwgdGhpcy5nYW1lSGVpZ2h0LzIpXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlNSwgMCwwLHRoaXMuZ2FtZVdpZHRoLCB0aGlzLmdhbWVIZWlnaHQpXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuMSlcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIGN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LnRleHRBbGlnbiA9XCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcIlByZXNzIEVudGVyIHRvIHN0YXJ0XCIsIHRoaXMuZ2FtZVdpZHRoIC8yICwgdGhpcy5nYW1lSGVpZ2h0LzIpXG4gICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgIGlmKHRoaXMuZ2FtZXN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTYsIDAsMCx0aGlzLmdhbWVXaWR0aCwgdGhpcy5nYW1lSGVpZ2h0KVxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID1cImNlbnRlclwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuZ2FtZVdpZHRoIC8yICwgdGhpcy5nYW1lSGVpZ2h0LzIpXG4gICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyB0b2dnbGVQYXVzZSgpIHtcbiAgICAvLyAgICAgaWYodGhpcy5nYW1lc3RhdGUgPT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgIC8vICAgICAgICAgdGhpcy5nYW1lc3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZ2FtZXN0YXRlID0gR0FNRVNUQVRFLlBBVVNFRDtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn0iLCJpbXBvcnQgV2FsbCBmcm9tICcuL3dhbGwnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTdGFnZShnYW1lLCBzdGFnZSkge1xuICAgIGxldCB3YWxscyA9IFtdO1xuXG4gICAgc3RhZ2UuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgod2FsbCwgd2FsbEluZGV4KT0+e1xuICAgICAgICAgICAgaWYod2FsbCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDUwIC0gNTAgKiByb3dJbmRleCwgXG4gICAgICAgICAgICAgICAgICAgIHk6IDU1MCAtIDUwICogd2FsbEluZGV4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdhbGxzLnB1c2gobmV3IFdhbGwoZ2FtZSwgcG9zaXRpb24pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHdhbGxzXG59XG5cbmV4cG9ydCBjb25zdCBzdGFnZTAgPSBbXG5bMV1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTEgPVtcblswLDAsMCwwLDAsMCwwLDEsMF0sXG5bMSwxLDEsMSwxLDEsMSwxLDBdLFxuWzAsMCwwLDAsMCwwLDAsMSwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlMiA9W1xuWzEsMSwxLDEsMSwxLDEsMSwwXSxcblswLDAsMCwwLDEsMCwwLDAsMF0sXG5bMSwxLDEsMSwxLDEsMSwxLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2UzID1bXG5bMSwxLDEsMSwxLDEsMSwwLDBdLFxuWzAsMCwwLDEsMCwwLDAsMSwwXSxcblsxLDEsMSwxLDEsMSwxLDAsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTQgPVtcblsxLDEsMSwxLDEsMSwxLDAsMF0sXG5bMCwwLDAsMCwwLDAsMSwwLDBdLFxuWzEsMSwxLDEsMSwxLDEsMSwwXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlNSA9W1xuWzEsMSwxLDEsMCwxLDEsMCwwXSxcblswLDAsMCwwLDEsMCwwLDAsMF0sXG5bMSwxLDEsMSwxLDEsMSwxLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2U2ID1bXG5bMCwxLDEsMCwxLDAsMCwwLDFdLFxuWzEsMCwwLDEsMCwxLDEsMSwwXSxcblswLDEsMSwwLDEsMCwwLDAsMV1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTcgPVtcblsxLDAsMSwwLDEsMCwxLDAsMV0sXG5bMCwxLDAsMSwwLDEsMCwxLDBdLFxuWzEsMCwxLDAsMSwwLDEsMCwxXVxuXVxuZXhwb3J0IGNvbnN0IHN0YWdlOCA9W1xuWzEsMCwxLDAsMSwxLDAsMCwwXSxcblsxLDEsMSwwLDEsMSwxLDEsMF0sXG5bMSwwLDEsMSwwLDEsMCwwLDBdXG5dXG5leHBvcnQgY29uc3Qgc3RhZ2U5ID1bXG5bMSwxLDEsMSwxLDEsMCwwLDBdLFxuWzEsMSwxLDEsMSwxLDEsMSwwXSxcblsxLDEsMSwxLDEsMSwwLDAsMF1cbl1cbmV4cG9ydCBjb25zdCBzdGFnZTEwID1bXG5bMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcblsxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuWzEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cbl0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rIHtcblxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lLmdhbWVXaWR0aDtcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZS5nYW1lSGVpZ2h0O1xuICAgICAgICAvL3RhbmtcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDUwO1xuICAgICAgICB0aGlzLm1heFNwZWVkID0gMTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQsXG4gICAgICAgIH07IC8vIHRhbmsgcG9zaXRpb25cbiAgICAgICAgLy9jYW5ub25cbiAgICAgICAgdGhpcy5jYW5ub25BbmdsZSA9IE1hdGguUEkgLyA0O1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlU3BlZWQgPSBNYXRoLlBJIC8gNjA7XG4gICAgICAgIHRoaXMuY2Fubm9uU3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmNhbm5vbkxlbmd0aCA9IHRoaXMud2lkdGggKiBNYXRoLnNxcnQoMik7XG4gICAgICAgIC8vZ2F1Z2VcbiAgICAgICAgdGhpcy5nYXVnZSA9IE1hdGguUEk7XG4gICAgICAgIHRoaXMuZ2F1Z2VTcGVlZCA9IE1hdGguUEkgLyAzMDtcbiAgICAgICAgdGhpcy5nYXVnZUJhclJhaWR1cyA9IDMwO1xuICAgICAgICAvL21pc3NpbGVcbiAgICAgICAgdGhpcy5taXNzaWxlWCA9IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgvMiArIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5jb3ModGhpcy5jYW5ub25BbmdsZSksXG4gICAgICAgIHRoaXMubWlzc2lsZVkgPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yIC0gdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKVxuICAgICAgICB0aGlzLm1pc3NpbGVSYWRpdXMgPSAxMDtcbiAgICAgICAgdGhpcy5taXNzaWxlRHggPSB0aGlzLmdhdWdlICogTWF0aC5jb3ModGhpcy5jYW5ub25BbmdsZSk7XG4gICAgICAgIHRoaXMubWlzc2lsZUR5ID0gdGhpcy5nYXVnZSAqIE1hdGguc2luKHRoaXMuY2Fubm9uQW5nbGUpO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSAwLjA5ODE7XG4gICAgICAgIHRoaXMuY2hhcmdpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGl0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ3JvdW5kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5pbWFnZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhbmtcIilcbiAgICAgICAgdGhpcy5pbWFnZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pc3NpbGVcIilcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgLy90YW5rXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTEsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICAvLyBjdHguZmlsbFN0eWxlID0gJyNhMmM0OWInO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAvL2Nhbm5vblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aC8yLCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yKTtcbiAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgvMiArIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5jb3ModGhpcy5jYW5ub25BbmdsZSksXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodC8yIC0gdGhpcy5jYW5ub25MZW5ndGggKiBNYXRoLnNpbih0aGlzLmNhbm5vbkFuZ2xlKSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2IoMjU1LCAxMjcsIDgwKSdcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7ICAgIFxuICAgIH0gXG4gICAgZHJhd0d1YWdlKGN0eCkge1xuICAgICAgICAvL2dhdWdlXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgdGhpcy5nYXVnZUJhclJhaWR1cyxcbiAgICAgICAgICAgIE1hdGguUEksXG4gICAgICAgICAgICB0aGlzLmdhdWdlLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpOyAgXG4gICAgfVxuXG4gICAgZHJhd01pc3NpbGUoY3R4KSB7XG4gICAgICAgIC8vbWlzc2lsZVxuICAgICAgICBpZiAoIXRoaXMuZmlyZSkge1xuICAgICAgICAgICAgdGhpcy5taXNzaWxlWCA9IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgvMiArIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5jb3ModGhpcy5jYW5ub25BbmdsZSksXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVZID0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQvMiAtIHRoaXMuY2Fubm9uTGVuZ3RoICogTWF0aC5zaW4odGhpcy5jYW5ub25BbmdsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZUR5IC09IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVggKz0gdGhpcy5taXNzaWxlRHg7XG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVZIC09IHRoaXMubWlzc2lsZUR5O1xuICAgICAgICB9XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTIsIFxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWC0xNyxcbiAgICAgICAgICAgIHRoaXMubWlzc2lsZVktMTcsXG4gICAgICAgICAgICAzMCwzMFxuICAgICAgICApIFxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vIGN0eC5hcmMoXG4gICAgICAgIC8vICAgICB0aGlzLm1pc3NpbGVYLFxuICAgICAgICAvLyAgICAgdGhpcy5taXNzaWxlWSxcbiAgICAgICAgLy8gICAgIHRoaXMubWlzc2lsZVJhZGl1cyxcbiAgICAgICAgLy8gICAgIDAsXG4gICAgICAgIC8vICAgICBNYXRoLlBJICogMlxuICAgICAgICAvLyApXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNlODU0NTBcIjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAtdGhpcy5tYXhTcGVlZDtcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkO1xuICAgIH1cbiAgICBcbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB9XG5cbiAgICBtb3ZlVXAoKSB7XG4gICAgICAgIHRoaXMuY2Fubm9uQW5nbGUgKz0gdGhpcy5jYW5ub25BbmdsZVNwZWVkO1xuICAgIH1cblxuICAgIG1vdmVEb3duKCkge1xuICAgICAgICB0aGlzLmNhbm5vbkFuZ2xlICs9IC10aGlzLmNhbm5vbkFuZ2xlU3BlZWQ7XG4gICAgfVxuXG4gICAgc3RvcGNhbm5vbkFuZ2xlKCkge1xuICAgICAgICB0aGlzLmNhbm5vblNwZWVkID0gMDtcbiAgICB9XG5cbiAgICBzdG9wU3BhY2ViYXIoKSB7XG4gICAgICAgIHRoaXMuZ2F1Z2UgPSAwXG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICghZHQpIHJldHVybjtcbiAgICAgICAgICBcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuY2Fubm9uQW5nbGVTcGVlZDtcblxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggPCAwKSB0aGlzLnBvc2l0aW9uLnggPSAwO1xuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggICsgdGhpcy53aWR0aCA+IHRoaXMuZ2FtZVdpZHRoLzIgLSB0aGlzLndpZHRoICogMikgdGhpcy5wb3NpdGlvbi54ID0gKHRoaXMuZ2FtZVdpZHRoLzIpIC0gdGhpcy53aWR0aCAqIDM7XG4gICAgICAgIGlmKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIgPT09IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0LzIpIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0XG5cbiAgICAgICAgLy9ndWFnZVxuICAgICAgICBpZih0aGlzLmdhdWdlID4gTWF0aC5QSSAqIDIpIHt0aGlzLmdhdWdlID0gTWF0aC5QSSAqIDJ9IFxuXG4gICAgICAgIC8vbWlzc2lsZSB3YWxsIG9uIGxlZnQvcmlnaHQvdG9wL2JvdHRvbVxuICAgICAgICBpZih0aGlzLm1pc3NpbGVYIC0gdGhpcy5taXNzaWxlUmFkaXVzIDwgLSAyICogdGhpcy53aWR0aCB8fFxuICAgICAgICAgICAgIHRoaXMubWlzc2lsZVggKyB0aGlzLm1pc3NpbGVSYWRpdXMgPiB0aGlzLmdhbWVXaWR0aCB8fCBcbiAgICAgICAgICAgICB0aGlzLm1pc3NpbGVZIDwgMCB8fCB0aGlzLm1pc3NpbGVZICsgdGhpcy5taXNzaWxlUmFkaXVzID4gdGhpcy5nYW1lSGVpZ2h0ICsgMip0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hdHRlbXB0c0NvdW50LmlubmVyVGV4dCA9IGBBdHRlbXB0czogJHt0aGlzLmdhbWUuYXR0ZW1wdHN9YFxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lLmF0dGVtcHRzKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL21pc3NpbGUgaGl0dGluZyB0YXJnZXRcbiAgICAgICAgIGlmICh0aGlzLm1pc3NpbGVYID49IHRoaXMuZ2FtZS50YXJnZXQudGFyZ2V0WCAmJlxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWCA8PSB0aGlzLmdhbWUudGFyZ2V0LnRhcmdldFggKyB0aGlzLmdhbWUudGFyZ2V0LnRhcmdldFdpZHRoICYmXG4gICAgICAgICAgICB0aGlzLm1pc3NpbGVZID49IHRoaXMuZ2FtZS50YXJnZXQudGFyZ2V0WSAmJlxuICAgICAgICAgICAgdGhpcy5taXNzaWxlWSA8PSB0aGlzLmdhbWVIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzZXRJbnRlcnZhbCh0aGlzLmRyYXdNaXNzaWxlKHRoaXMuZ2FtZS5jdHgpLCAxMCkpO1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2lsZVggPSAtdGhpcy5taXNzaWxlWDtcbiAgICAgICAgICAgICAgICB0aGlzLm1pc3NpbGVZID0gLXRoaXMubWlzc2lsZVk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpdCB0YXJnZXQnKVxuICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBjaGVjaygpIHtcbiAgICAvLyAgICAgaWYodGhpcy5taXNzaWxlWCA8IDAgfHwgdGhpcy5taXNzaWxlWCA+IHRoaXMuZ2FtZVdpZHRoIHx8IHRoaXMubWlzc2lsZVkgPCAwIHx8IHRoaXMubWlzc2lsZVkgPiB0aGlzLmdhbWVIZWlnaHQpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZmlyZSA9IGZhbHNlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0aGlzLm1pc3NpbGVYID49IHRoaXMuZ2FtZS50YXJnZXRYICYmXG4gICAgLy8gICAgICAgICB0aGlzLm1pc3NpbGVYIDw9IHRoaXMuZ2FtZS50YXJnZXRYICsgdGhpcy5nYW1lLnRhcmdldFdpZHRoICYmXG4gICAgLy8gICAgICAgICB0aGlzLm1pc3NpbGVZID49IHRoaXMuZ2FtZS50YXJnZXRZKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5oaXQgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3RhcnQpO1xuICAgIC8vICAgICAgICAgICAgIGlmKGNvbmZpcm0oXCJZb3UgZ290IHRoaXMsIHdhbnQgdG8gcGxheSBhZ2Fpbj9cIikpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IodGFuaywgZ2FtZSkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICB0YW5rLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OiBcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5tb3ZlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgICB0YW5rLmNoYXJnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGFuay5oaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGFuay5nYXVnZSArPSB0YW5rLmdhdWdlU3BlZWRcbiAgICAgICAgICAgICAgICAgICAgdGFuay5taXNzaWxlRHggPSB0YW5rLmdhdWdlICogMS41ICogTWF0aC5jb3ModGFuay5jYW5ub25BbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRhbmsubWlzc2lsZUR5ID0gdGFuay5nYXVnZSAqIDEuNSAqIE1hdGguc2luKHRhbmsuY2Fubm9uQW5nbGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuc3BlZWQgPCAwKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuc3BlZWQgPiAwKVxuICAgICAgICAgICAgICAgICAgICB0YW5rLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuY2Fubm9uQW5nbGUgPj0wIClcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wY2Fubm9uQW5nbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhbmsuY2Fubm9uQW5nbGUgPD0gTWF0aC5QSSlcbiAgICAgICAgICAgICAgICAgICAgdGFuay5zdG9wY2Fubm9uQW5nbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgdGFuay5jaGFyZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0YW5rLmZpcmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YW5rLmdhdWdlID0gTWF0aC5QSTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0V2lkdGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCArIDEwMCk7XG4gICAgICAgIHRoaXMudGFyZ2V0SGVpZ2h0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAgKyAxMDApO1xuICAgICAgICB0aGlzLnRhcmdldFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMzAwIC0gdGhpcy50YXJnZXRXaWR0aCkgKyA1MDApO1xuICAgICAgICB0aGlzLnRhcmdldFkgPSBnYW1lLmdhbWVIZWlnaHQgLSB0aGlzLnRhcmdldEhlaWdodDtcbiAgICAgICAgdGhpcy5pbWFnZTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldFwiKVxuICAgIH1cbiAgICB1cGRhdGUoKXt9XG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlNCwgdGhpcy50YXJnZXRYLCB0aGlzLnRhcmdldFksIHRoaXMudGFyZ2V0V2lkdGgsIHRoaXMudGFyZ2V0SGVpZ2h0KTtcbiAgICAgICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiIzdiYzRjNFwiO1xuICAgICAgICAvLyBjdHguZmlsbFJlY3QodGhpcy50YXJnZXRYLCB0aGlzLnRhcmdldFksIHRoaXMudGFyZ2V0V2lkdGgsIHRoaXMudGFyZ2V0SGVpZ2h0KTtcbiAgICB9XG59ICAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FsbCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgcG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICAgICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmltYWdlMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2FsbFwiKVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgbGV0IGJvdHRvbU9mTWlzc2lsZSA9IHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVZICsgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVJhZGl1cztcbiAgICAgICAgbGV0IHRvcE9mTWlzc2lsZSA9IHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVZO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRvcE9mV2FsbCA9IHRoaXMucG9zaXRpb24ueTtcbiAgICAgICAgbGV0IGxlZnQgPSB0aGlzLnBvc2l0aW9uLng7XG4gICAgICAgIGxldCByaWdodCA9IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGg7XG4gICAgICAgIGxldCBib3R0b20gPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodDtcbiAgICAgICAgaWYgKGJvdHRvbU9mTWlzc2lsZSA+PSB0b3BPZldhbGwgJiYgdG9wT2ZNaXNzaWxlIDw9IGJvdHRvbSAmJiB0aGlzLmdhbWUudGFuay5taXNzaWxlWCA+PSBsZWZ0ICYmIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVYICsgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVJhZGl1cyA8PSByaWdodCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVggPSAtIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVYO1xuICAgICAgICAgICAgdGhpcy5nYW1lLnRhbmsubWlzc2lsZVggPSAtIHRoaXMuZ2FtZS50YW5rLm1pc3NpbGVZO1xuICAgICAgICAgICAgdGhpcy5tYXJrZWRGb3JEZWxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9IFxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZTMsdGhpcy4gcG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgXG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=