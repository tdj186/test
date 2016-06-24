angular.module('starter')
.config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
  $stateProvider

  .state('insights', {
    url: '/insights',
    abstract: true,
    templateUrl: 'templates/insights/index.html'
  })
  .state('insights.insights-detail', {
    //url: '/insights-detail/:extURI',
    url: '/insights-detail?extURI',
    views: {
      'insights': {
        templateUrl: 'templates/insights/insights-detail.html',
        controller: 'InsightsDetail',
        controllerAs: 'Ctrl'
      }
    },
    resolve: {
         loadMyFiles:function($ocLazyLoad){
             return $ocLazyLoad.load({
                 name:'starter',
                 files: [
                     'js/ctrl/insights/insights-detail.js',
                  ]
             })
         }
    }
  })
});
