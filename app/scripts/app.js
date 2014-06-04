'use strict';

var app= angular
		  .module('helloworldApp', [
		    'ngCookies',
		    'ngResource',
		    'ngSanitize',
		    'ngRoute'
		  ]);
		  
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/helloworld.html',
        controller: 'HelloWorldCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
