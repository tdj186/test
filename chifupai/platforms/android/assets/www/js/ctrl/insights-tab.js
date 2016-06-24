angular.module('starter')
.controller('InsightsTab', ['$scope', '_http', function($scope, _http ) {
      var self = this;
      $scope.areaId= 0

      self.init = function() {
         _http.cGet('http://api.jifupai.com/infoAreasList', function(data){$scope.areasList = data.areasList;})
         _http.cGet('http://api.jifupai.com/infoTop', function(data){$scope.infoTop = data.infoTop;})
         _http.cGet('http://api.jifupai.com/infosList?area=0&size=30&offset=0', function(data){$scope.infosList = data.infosList;})
      }
      $scope.getInfosList = function(id) {
         $scope.areaId = id
         _http.cGet('http://api.jifupai.com/infosList?area='+id+'&size=30&offset=0', function(data){$scope.infosList = data.infosList;})
      }
      $scope.isActive = function(id) {
         return (id == $scope.areaId) ? "insidiv-active" : ""
      }
      // TODO: Scroll bar 功能尚未實現
}]);
