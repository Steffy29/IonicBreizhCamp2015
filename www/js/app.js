// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic','firebase'])

.config(function($stateProvider, $urlRouterProvider, $compileProvider){
    $stateProvider
    .state('eventmenu', {
      url: '/event',
      abstract: 'true',
      templateUrl: 'views/menu.html'
    })
    .state('eventmenu.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'views/home.html'
          }
        }
    })
    .state('eventmenu.camera', {
        url: '/camera',
        views: {
          'menuContent': {
            templateUrl: 'views/camera.html',
            controller: 'CameraCtrl'
          }
        }
    })
    .state('eventmenu.geolocation', {
        url: '/geolocation',
        views: {
          'menuContent': {
            templateUrl: 'views/geolocation.html',
            controller: 'GeolocationCtrl'
          }
        }
    })
    .state('eventmenu.grocery', {
      url: '/grocery',
      views: {
        'menuContent': {
          templateUrl: 'views/groceryList.html',
          controller: 'ListCtrl'
        }
      }
    });
    $urlRouterProvider.otherwise('/event/home');

    // AngularJS Whitelisting
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
