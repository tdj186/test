// Ionic Starter App
angular.module('starter')
	.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ocLazyLoadProvider) {
		$stateProvider

		// setup an abstract state for the tabs directive
			.state('tab', {
			url: '/tab',
			abstract: true,
			templateUrl: 'templates/index.html'
		})

		// Each tab has its own nav history stack:

		.state('tab.recommend', {
				url: '/recommend',
				views: {
					'tab-recommend': {
						templateUrl: 'templates/recommend-tab.html',
						controller: 'RecommendTab',
						controllerAs: 'Ctrl'
					}
				},
				resolve: {
					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'starter',
							files: [
								'js/ctrl/recommend-tab.js',
								'js/ctrl/recommend/config.js'
							]
						})
					}
				}
			})
			.state('tab.fund', {
				url: '/fund',
				views: {
					'tab-fund': {
						templateUrl: 'templates/fund-tab.html',
						controller: 'FundTab',
						controllerAs: 'Ctrl'
					}
				},
				resolve: {
					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'starter',
							files: [
								'js/ctrl/fund-tab.js',
								'js/ctrl/fund/config.js'
							]
						})
					}
				}
			})

		

		.state('tab.insights', {
				url: '/insights',
				views: {
					'tab-insights': {
						templateUrl: 'templates/insights-tab.html',
						controller: 'InsightsTab',
						controllerAs: 'Ctrl'
					}
				},
				resolve: {
					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'starter',
							files: [
								'js/ctrl/insights-tab.js',
								'js/ctrl/insights/config.js'
							]
						})
					}
				}
			})
		
			.state('tab.about', {
				url: '/about',
				views: {
					'tab-about': {
						templateUrl: 'templates/about-tab.html',
					}
				}
			})

		;

	});