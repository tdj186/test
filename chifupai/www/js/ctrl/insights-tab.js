angular.module('starter')
	.controller('InsightsTab', ['$scope', '_http', function($scope, _http) {
		var self = this;
		$scope.areaId = 0

		self.init = function() {
				_http.cGet('/infoAreasList', function(data) {
					$scope.areasList = data.areasList;
				})
				_http.cGet('/infoTop', function(data) {
					$scope.infoTop = data.infoTop;
				})
				getFirstInsights('0');

			}
			//触发点击地域
		$scope.getInfosList = function(id) {
			$scope.areaId = id;
			getFirstInsights(id);
		}
		$scope.isActive = function(id) {
				return (id == $scope.areaId) ? "insidiv-active" : ""
			}
			// TODO: Scroll bar 功能尚未實現
			//加载第一页情报列表
		function getFirstInsights(areaID) {
			_http.cGet('/infosList?area=' + areaID + '&size=30&offset=0', function(data) {
				$scope.infosList = data.infosList;
				if (data.total > 29) {
					getMoreInsights(areaID);
				} else {
					$scope.state = false;
				}
			})
		}
		//上拉加载情报列表
		function getMoreInsights(areaID) {
			$scope.state = true;
			var offsetNew = 30;
			$scope.loadMore = function() {
				
				_http.cGet('/infosList?area=' + areaID + '&size=30&offset=' + offsetNew, function(data) {
					console.log("上拉加载第" + offsetNew);
					if (data.total <= offsetNew) {
						$scope.state = false;
					} else {
						$scope.infosList = $scope.infosList.concat(data.infosList);
						$scope.$broadcast('scroll.infiniteScrollComplete');
						offsetNew += 30;
					}
				})
			}
		}

	}]);