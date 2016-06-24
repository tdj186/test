angular.module('starter')

.controller('OppoDetail', ['$scope', '_http', '$stateParams', function($scope, _http, $stateParams ) {
      // $stateParams : 用於獲得網址列的參數
      var self = this;

      self.init = function() {
         _http.cGet('http://api.jifupai.com/opp?oppID='+ $stateParams.oppID, function(data){$scope.data = data;})
      }

}]);
