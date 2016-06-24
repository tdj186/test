angular.module('starter')
	.controller('myAppCtrl', function($scope, $rootScope) {
		//服务器地址
		$rootScope.hostUrl = "http://api.jifupai.com";
		//每页多少条
		$scope.count = 30;
		//圆环图表颜色
		$scope.colors = ["#F7464A", "#69D2E7", "#E0E4CC", "#F38630", "#584A5E", "#D97041", "#7D4F6D", "#C7604C", "#21323D", "#9D9B7F", "#E2EAE9", "#D4CCC5", "#949FB1", "#4D5360", "#FF2d55"];

		$scope.fundComparehcArr = [];
		//五大区域十大重仓图表圆环图
		$scope.showDoughnut=function(data, chartid, title) {
			var dataSet = new Array();
			var dataShow = false;
			for (var i = 0; i < data.length; i++) {

				var arr = {};
				//			if (key == "areaValue" || key == "fundStockValue") {
				//				
				//				var arr = {
				//					"value" : parseFloat(data[i][key]),
				//					"color" : "#"+data[i]["color"]
				//				};
				//
				//				
				//				
				//			}
				//			if(key == "areaName" || key == "fundStockName"){
				//				arr.name=data[i][key];
				//				arr.color="#"+data[i]["color"];
				//			}

				if (title == "五大区域") {
					var arr = {
						"value": parseFloat(data[i].areaValue),
						"name": data[i].areaName,
						itemStyle: {
							normal: {
								color: "#" + data[i]["color"]
							}
						}

					};
				} else {
					var arr = {
						"value": parseFloat(data[i].fundStockValue),
						"name": data[i].fundStockName,
						itemStyle: {
							normal: {
								color: "#" + data[i]["color"]
							}
						}
					};
				}

				dataSet.push(arr);

			}
			console.log(dataSet);
			for (var i = 0; i < data.length; i++) {
				for (var key in data[i]) {
					if (key == "areaValue" || key == "fundStockValue") {
						if (parseFloat(data[i][key]) != 0) {
							dataShow = true;
							break;
						}
					}
				}
			}

			if (dataShow) {
				var myChart1 = echarts.init(document.getElementById(chartid));

				option = {
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}:{d}%"
					},
					series: [{
						name: title,
						type: 'pie',
						radius: ['50%', '90%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center',
								label: {

									show: true

								},

								labelLine: {

									show: false

								}
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '30',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: dataSet
					}]
				};
				myChart1.setOption(option);
				// 删除加载提示符
				//			$$('.infinite-scroll-preloader').remove();
				//			$$(".no-data-display").hide();
			} else {
				//			$$(".no-data-display").show();
			}
		}
		//环形chart图颜色
		$scope.setColor=function (data) {
			for (var i = 0; i < data.length; i++) {
				data[i]["color"] = $scope.colors[i].replace("#", "");
			}
			return data;
		}
//end---------------------------
	})