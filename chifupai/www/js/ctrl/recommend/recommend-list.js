angular.module('starter')

// 如果 檔名是 abc_xyz.js , Controller name  CONTROLLER_NAME  =  AbcXyz
.controller('RecommendList', ['$scope', '_http', '$stateParams', function($scope, _http, $stateParams ) {
      // $stateParams : 用於獲得網址列的參數
      var self = this;

      self.init = function() {
         _http.cGet('http://api.jifupai.com/purpose?purposeID='+ $stateParams.purposeID, function(data){$scope.data = data;})
      }

}]);
