angular.module('starter')
.config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
  $stateProvider

  .state('fund', {
    url: '/fund',
    abstract: true,
    templateUrl: 'templates/fund/index.html'
  })
  .state('fund.fund-details', {
    url: '/fund-details?ISIN',
    views: {
      'fund': {
        templateUrl: 'templates/fund/fund-details.html',
        controller: 'FundDetails',
        controllerAs: 'Ctrl'
      }
    },
    resolve: {
         loadMyFiles:function($ocLazyLoad){
             return $ocLazyLoad.load({
                 name:'starter',
                 files: [
                     'js/ctrl/fund/fund-details.js',
                  ]
             })
         }
    }
  })
});
