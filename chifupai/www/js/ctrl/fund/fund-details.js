angular.module('starter')

.controller('FundDetails', ['$scope', '_http', '$stateParams', function($scope, _http, $stateParams) {
	// $stateParams : 用於獲得網址列的參數
	var self = this;

	
	self.init = function() {
		self.ISIN = $stateParams.ISIN;
		_http.cGet('/fundDetail?ISIN=' + self.ISIN, function(data) {
			$scope.data = data;
			$scope.fundIncsYsList = data.fundIncsYearsList;
		})
		_http.cGet('/fundProfit?ISIN=' + self.ISIN + '&range=1m', function(data) {
			$scope.fundsList = data.fundsList;
		})
	}

	

}])
//五大区域
.controller('fiveAreaCtrl', function($stateParams,_http,$scope) {
		var self = this;	
	self.init = function() {
		self.ISIN = $stateParams.ISIN;
		_http.cGet('/fundDetail?ISIN=' + self.ISIN, function(data) {
			$scope.areaLists = data.areaList;
			
			
			var areaLists = $scope.setColor($scope.areaLists);
			$scope.showDoughnut(areaLists, "area-chart", "五大区域");
			
			$scope.areaItems=areaLists;
			console.log($scope.areaItems); 
		})
	}
	//end---------------------
})
//十大重仓
.controller('shidazcCtrl', function($stateParams,_http,$scope) {
		var self = this;	
	self.init = function() {
		self.ISIN = $stateParams.ISIN;
		_http.cGet('/fundDetail?ISIN=' + self.ISIN, function(data) {
			$scope.fundStockLists = data.fundStockList;
			
			
			var fundStockLists = $scope.setColor($scope.fundStockLists);
			$scope.showDoughnut(fundStockLists, "stock-chart", "十大重仓");
			
			$scope.stockItems=fundStockLists;
			console.log($scope.stockItems); 
		})
	}
	//end---------------------
})
//历史净值
.controller('lsjzCtrl', function($stateParams,_http,$scope) {
		var self = this;	
	self.init = function() {
		self.ISIN = $stateParams.ISIN;
		_http.cGet('/fundNet?ISIN=' + self.ISIN+'&size=1', function(data) {
			$scope.fundNetsItems = data.fundNetsList;
		})
	}
	//end---------------------
});
