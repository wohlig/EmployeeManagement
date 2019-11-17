// JavaScript Document
var firstapp = angular.module("firstapp", [
  "ui.router",
  "phonecatControllers",
  "templateservicemod",
  "navigationservice"
]);

firstapp.config(function(
  $stateProvider,
  $urlRouterProvider,
  $httpProvider,
  $locationProvider
) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "views/template.html",
      controller: "HomeCtrl"
    })
    .state("add", {
      url: "/add",
      templateUrl: "views/template.html",
      controller: "AddCtrl"
    });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});
