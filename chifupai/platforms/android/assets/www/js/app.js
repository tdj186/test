// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic' 
, 'ngCookies'
, 'oc.lazyLoad'
, 'glfToolbox'
, 'ngSanitize'
])
.run(function($ionicPlatform, $rootScope, $ionicLoading, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

         $rootScope.$on("@loading", function(){
            console.log('@loading')
            $ionicLoading.show({
                  template: '<p>Loading...</p><ion-spinner></ion-spinner>'
                });
         }); 
         $rootScope.$on("@loaded", function(){
            console.log('@loaded')
            $ionicLoading.hide();
         }); 
  });
})
.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ocLazyLoadProvider, $ionicConfigProvider, _httpProvider) {

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/recommend');
  $httpProvider.interceptors.push('_inter');
  _httpProvider.setTTL(28800) //設定Cache


   // Using iOS style on Android
   $ionicConfigProvider.views.transition('ios');
   $ionicConfigProvider.tabs.style('standard').position('bottom');
   $ionicConfigProvider.navBar.alignTitle('center').positionPrimaryButtons('left');

});
