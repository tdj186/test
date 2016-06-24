angular.module('starter')

.controller('FundTab', function($scope, _http, $stateParams, $ionicPopover, $ionicSideMenuDelegate, $ionicModal) {
	// $stateParams : 用於獲得網址列的參數
	var self = this;

	self.init = function() {
		//默认初始化基金列表
		$scope.formParam = {
			size: 30,
			offset: 0,
			sort: 'm'
		};

		_http.cPost('/fundList', $scope.formParam, function(data) {
			$scope.fundsList = data.fundsList;
			if (data.total > 29) {
				getMoreFundLists();
			} else {
				$scope.state = false;
			}
		})

	}

	//侧拉筛选数据获取
	//地区
	_http.cGet('/areaList', function(data) {
			$scope.careas = data.areas;
			$scope.careas.unshift({
				"areaID": "0",
				"areaValue": "全部"
			});

		})
		//投资类型
	_http.cGet('/investmentList', function(data) {
			$scope.cinvestments = data.investments;
			$scope.cinvestments.unshift({
				"investmentID": "0",
				"investmentValue": "全部"
			});
		})
		//基金公司
	_http.cGet('/fundCompList', function(data) {
			$scope.cfundComps = data.fundComps;
			$scope.cfundComps.unshift({
				"compID": "0",
				"compValue": "全部"
			});
		})
		//基金货币
	_http.cGet('/currencyList', function(data) {
			$scope.ccurrencies = data.currencies;
			$scope.ccurrencies.unshift({
				"currencyID": "0",
				"currencyValue": "全部"
			});
		})
		//晨星评级

	//左侧筛选弹出模型
	$ionicModal.fromTemplateUrl('modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	//打开左侧筛选
	$scope.opensx = function() {
		$scope.modal.show();
		//筛选默认选中值
		$scope.formParam = {
			"area": 0,
			"investment": 0,
			"currency": 0,
			"company": 0,
			"rank": 0,
			size: 30,
			offset: 0,
			sort: 'm'
		}

	}

	//	侧拉筛选数据提交、筛选基金列表
	$scope.subSxtj = function() {
			$scope.modal.hide();
			_http.cPost('/fundList', $scope.formParam, function(data) {
				$scope.fundsList = data.fundsList;
				if (data.total > 29) {
					getMoreFundLists();
				} else {
					$scope.state = false;
				}

			})
		}
		//radio显示控制
	$scope.con = {
		Value1: false,
		Value2: false,
		Value3: false,
		Value4: false,
		Value5: false
	}
	$scope.backvalue = false;
	$scope.conTitle = "筛选条件";
	//显示radio列表
	$scope.showCondition = function(lableValue) {
			$('.sxlist').hide();
			$('#closeMenu').hide();
			$scope.backvalue = true;

			switch (lableValue) {
				case 1:
					$scope.conTitle = "区域类型";
					$scope.con.Value1 = true;
					break;
				case 2:
					$scope.conTitle = "投资类型";
					$scope.con.Value2 = true;

					break;
				case 3:
					$scope.conTitle = "基金公司";
					$scope.con.Value3 = true;
					break;
				case 4:
					$scope.conTitle = "基金货币";
					$scope.con.Value4 = true;
					break;
				case 5:
					$scope.conTitle = "晨星评级";
					$scope.con.Value5 = true;
					break;
			}

		}
		//关闭返回按钮
	$scope.backCon = function() {
		$scope.conTitle = "筛选条件";
		$('.sxlist').show();
		$('#closeMenu').show();
		$scope.backvalue = false;
		$scope.con = {
			Value1: false,
			Value2: false,
			Value3: false,
			Value4: false,
			Value5: false
		}
	}

	//搜索modal
	$ionicModal.fromTemplateUrl('sousouModal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.sousuoModal = modal;
	});
	//打开搜索modal
	$scope.openSearch=function() {
		$scope.sousuoModal.show();
		$scope.formParam = {
			size: 30,
			offset: 0,
			sort: 'm',
			keyword: ''
		}
	}

	//点击确定开始搜索，搜索基金列表
	$scope.search = function(liInfo) {
			$scope.sousuoModal.hide();
			if (liInfo) {
				$scope.formParam.keyword = liInfo;
			}
			
			_http.cPost('/fundList', $scope.formParam, function(data) {
				$scope.fundsList = data.fundsList;
				if (data.total > 29) {
					getMoreFundLists();
				} else {
					$scope.state = false;
				}
			})
		}
		//点击返回列表返回
	$scope.backflist = function() {
		$scope.sousuoModal.hide();
	}

	//sort浮动日期排序
	$scope.popover = $ionicPopover.fromTemplateUrl('data-popover.html', {
		scope: $scope
	});

	$ionicPopover.fromTemplateUrl('data-popover.html', {
		scope: $scope
	}).then(function(popover) {
		$scope.dataPopover = popover;
	});

	//时间数组
	$scope.dateArray = [{
		"dataCode": "ytd",
		"dataText": "昨日"
	}, {
		"dataCode": "m",
		"dataText": "近一个月"
	}, {
		"dataCode": "thisy",
		"dataText": "今年以来"
	}, {
		"dataCode": "y",
		"dataText": "近一年"
	}, {
		"dataCode": "3y",
		"dataText": "近三年"
	}, {
		"dataCode": "5y",
		"dataText": "近五年"
	}]
	//按时间顺序sort化
	$scope.dataChage = function() {
		$scope.dataPopover.hide();
		$scope.formParam.offset = 0;
		_http.cPost('/fundList', $scope.formParam, function(data) {
			$scope.fundsList = data.fundsList;
			if (data.total > 29) {
				getMoreFundLists();
			} else {
				$scope.state = false;
			}
		})
	}

	//上拉基金列表
	function getMoreFundLists() {
		$scope.formParam.offset = 30;
		$scope.state = true;		
		$scope.loadMore = function() {
			_http.cPost('/fundList', $scope.formParam, function(data) {
				console.log("请求拉取更多");
				if (data.total <= $scope.formParam.offset) {
					$scope.state = false;
				} else {
					$scope.fundsList = $scope.fundsList.concat(data.fundsList);
					$scope.$broadcast('scroll.infiniteScrollComplete');
					$scope.formParam.offset += 30;
				}
			})
		}
	}

});