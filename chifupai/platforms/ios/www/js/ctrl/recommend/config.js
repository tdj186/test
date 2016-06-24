// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter')
.config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
  $stateProvider

    .state('recommend', {
    url: '/recommend',
    abstract: true,
    templateUrl: 'templates/recommend/index.html'
  })
  .state('recommend.oppo-detail', {
    url: '/oppo-detail/:oppID',
    views: {
      'recommend': {
        templateUrl: 'templates/recommend/oppo-detail.html',
        controller: 'OppoDetail',
        controllerAs: 'Ctrl'
      }
    },
    resolve: {
         loadMyFiles:function($ocLazyLoad){
             return $ocLazyLoad.load({
                 name:'starter',
                 files: [
                     'js/ctrl/recommend/oppo-detail.js',
                  ]
             })
         }
    }
  })
  .state('recommend.recommend-list', {
    url: '/recommend-list/:purposeID',
    views: {
      'recommend': {
        templateUrl: 'templates/recommend/recommend-list.html',
        controller: 'RecommendList',
        controllerAs: 'Ctrl'
      }
    },
    resolve: {
         loadMyFiles:function($ocLazyLoad){
             return $ocLazyLoad.load({
                 name:'starter',
                 files: [
                     'js/ctrl/recommend/recommend-list.js',
                  ]
             })
         }
    }
  })
  .state('recommend.question', {
    url: '/question',
    views: {
      'recommend': {
        templateUrl: 'templates/recommend/question.html',
        controller: 'Question',
        controllerAs: 'Ctrl'
      }
    },
    resolve: {
         loadMyFiles:function($ocLazyLoad){
             return $ocLazyLoad.load({
                 name:'starter',
                 files: [
                     'js/ctrl/recommend/question.js',
                  ]
             })
         }
    }
  })
});
