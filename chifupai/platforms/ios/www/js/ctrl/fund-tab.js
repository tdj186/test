angular.module('starter')

.controller('FundTab', ['$scope', '_http', '$stateParams', function($scope, _http, $stateParams ) {
      // $stateParams : 用於獲得網址列的參數
      var self = this;

      self.init = function() {
         _http.cGet('http://api.jifupai.com/fundList?size=30&offset=0&sort=m', function(data){$scope.fundsList = data.fundsList;})
      }

}]);
