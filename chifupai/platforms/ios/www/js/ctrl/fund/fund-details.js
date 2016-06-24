angular.module('starter')

.controller('FundDetails', ['$scope', '_http', '$stateParams', function($scope, _http, $stateParams ) {
      // $stateParams : 用於獲得網址列的參數
      var self = this;

      self.init = function() {
         self.ISIN = $stateParams.ISIN
         _http.cGet('http://api.jifupai.com/fundDetail?ISIN=' + self.ISIN, function(data){$scope.data = data;})
         _http.cGet('http://api.jifupai.com/fundProfit?ISIN='+ self.ISIN +'&range=1m', function(data){$scope.fundsList = data.fundsList;})
      }

}]);
