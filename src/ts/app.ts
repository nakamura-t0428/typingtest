/// <reference path="../../typings/tsd.d.ts"/>

////////////////////////////////////////////////// TypeScript

let app = angular.module('main.app', ['ngResource', 'ngStorage', 'ngAnimate', 'ui.bootstrap', 'ui.router', 'angular-loading-bar', 'ui.grid']);

let canvas = document.getElementById("canvas");
let stage = new createjs.Stage(canvas);
let shape = new createjs.Shape();
shape.graphics.beginFill("red").drawCircle(40,40,40);
stage.addChild(shape);
stage.update();
