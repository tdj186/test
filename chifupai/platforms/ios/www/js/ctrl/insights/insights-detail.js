angular.module('starter')

.controller('InsightsDetail', ['$scope', '_http', '$stateParams', '$sce', function($scope, _http, $stateParams, $sce ) {
      // $stateParams : 用於獲得網址列的參數
      var self = this;

      self.init = function() {
         //console.log($stateParams.extURI)
         $scope.uri = $sce.trustAsResourceUrl($stateParams.extURI)
         /*
         _http.cGet($stateParams.u, function(data){
            console.log(data)
            $scope.data = data;
         })
         */
      }
      

}]);
