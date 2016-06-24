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
					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'starter',
							files: [
								'js/ctrl/fund/fund-details.js',
							]
						})
					}
				}
			})
			.state('fiveArea', {
				url: '/fiveArea?ISIN',
//				views: {
//					'fund': {
						templateUrl: 'templates/fund/five-area.html',
						controller:'fiveAreaCtrl',
						controllerAs: 'Ctrl',
//					}
//				},
				resolve: {
					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'starter',
							files: [
								'js/ctrl/fund/fund-details.js',
							]
						})
					}
				}
			})
			.state('shidazc', {
				url: '/shidazc?ISIN',
//				views: {
//					'fund': {
						templateUrl: 'templates/fund/shidazc.html',
						controller:'shidazcCtrl',
						controllerAs: 'Ctrl',
//					}
//				},
				resolve: {
					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'starter',
							files: [
								'js/ctrl/fund/fund-details.js',
							]
						})
					}
				}
			})
			.state('lsjz', {
				url: '/lsjz?ISIN',
//				views: {
//					'fund': {
						templateUrl: 'templates/fund/lsjz.html',
						controller:'lsjzCtrl',
						controllerAs: 'Ctrl',
//					}
//				},
				resolve: {
					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'starter',
							files: [
								'js/ctrl/fund/fund-details.js',
							]
						})
					}
				}
			})
			
			.state('fundCompare', {
				url: '/fundCompare?ISIN :fundNameC',
//				views: {
//					'fund': {
						templateUrl: 'templates/fund/fund-compare.html',
						controller:'fundCompareCtrl',
						controllerAs: 'Ctrl',
//					}
//				},
				resolve: {
					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'starter',
							files: [
								'js/ctrl/fund/fund-compare.js',
							]
						})
					}
				}
			})
			
			.state('compareDetail', {
				url: '/compareDetail',
//				views: {
//					'fund': {
						templateUrl: 'templates/fund/compare-detail.html',
						controller:'compareDetailCtrl',
						controllerAs: 'Ctrl',
//					}
//				},
				resolve: {
					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name: 'starter',
							files: [
								'js/ctrl/fund/fund-compare.js',
							]
						})
					}
				}
			})
			
			
	});