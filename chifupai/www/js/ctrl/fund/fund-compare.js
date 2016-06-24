angular.module('starter')

// 如果 檔名是 abc_xyz.js , Controller name  CONTROLLER_NAME  =  AbcXyz
.controller('fundCompareCtrl', ['$scope', '_http', '$stateParams','$state', function($scope, _http, $stateParams,$state) {
	// $stateParams : 用於獲得網址列的參數
	var self = this;

	//点击对比缓存进去该基金对象
	var fundcHcobj = {
		ISIN: $stateParams.ISIN,
		fundNameC: $stateParams.fundNameC
	}

	if (!sessionStorage.fundComhcStr) {
		//设置基金对比缓存数组
		$scope.fundComparehcArr.push(fundcHcobj);
	} else {
		//将新缓存转化为数组
		$scope.fundComparehcArr = JSON.parse(sessionStorage.fundComhcStr);
		$scope.fundComparehcArr.push(fundcHcobj);
	}

	//缓存基金对比的字符串
	sessionStorage.fundComhcStr = JSON.stringify($scope.fundComparehcArr);
	//对比列表
	$scope.comList = JSON.parse(sessionStorage.fundComhcStr);

	//删除对比基金
	$scope.onItemDelete = function(item) {
		$scope.comList.splice($scope.comList.indexOf(item), 1);
		//产生删除后的新缓存
		sessionStorage.fundComhcStr = JSON.stringify($scope.comList);
		//产生删除后的新列表赋值数组
		$scope.fundComparehcArr=$scope.comList;
		
	};
	
	//点击开始对比进入对比详情
	$scope.compare=function(){
		$state.go('compareDetail');
//		console.log($scope.aaa[0]);
		
	}



}])

.controller('compareDetailCtrl',function($scope,_http){
	var param={ISIN:"F0GBR04D1U,F0GBR04MIH"}
		_http.cPost('/compare',param,function(data) {
			$scope.comtwoLi = data.fundCompare;
			console.log($scope.comtwoLi);
			
			$scope.fundIncs1 = $scope.comtwoLi[0].fundIncs[0];
			$scope.fundIncsYearsList1 = $scope.comtwoLi[0].fundIncsYearsList;
			$scope.assetList1 = $scope.comtwoLi[0].assetList[0];
			$scope.rankList1 = $scope.comtwoLi[0].rankList[0];
			
			$scope.fundIncs2 = $scope.comtwoLi[1].fundIncs[0];
			$scope.fundIncsYearsList2 = $scope.comtwoLi[1].fundIncsYearsList;
			$scope.assetList2 = $scope.comtwoLi[1].assetList[0];
			$scope.rankList2 = $scope.comtwoLi[1].rankList[0];
			
		})
	
})