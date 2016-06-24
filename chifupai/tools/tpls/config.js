angular.module('starter')

/*
 *
 *********************************************************
 *
 *                This is a Template
 *
 *                  by James Liu
 *********************************************************
 *
 */


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
});
