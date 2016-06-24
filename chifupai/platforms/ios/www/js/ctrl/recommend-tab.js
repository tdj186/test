angular.module('starter')

.controller('RecommendTab', ['$scope', '_http', '$ionicSlideBoxDelegate', '$ionicLoading', function($scope, _http, $ionicSlideBoxDelegate, $ionicLoading) {
      var self = this;
      //$scope.purposesList;
      // $scope.oppsList

      self.init = function() {
         _http.cGet('http://api.jifupai.com/purposesList', function(data){$scope.purposesList = data.purposesList;})
         _http.cGet('http://api.jifupai.com/oppsList', function(data){
            $scope.oppsList = data.oppsList;

              setTimeout(function(){
                  $ionicSlideBoxDelegate.update()
                  //console.log($ionicSlideBoxDelegate)
               },2000);        
         
         })
      }
      // To Fix ion-slide bug
      self.slideChanged = function(index) {
         //console.log("index/count = " + index + '/' + $ionicSlideBoxDelegate.slidesCount());
         if (index == $ionicSlideBoxDelegate.slidesCount() -1) {
              setTimeout(function(){
                  $ionicSlideBoxDelegate.slide(0)
               },4000);        
         }
      }
/*
         $scope.$on("@loading", function(){
            console.log('@loading')
            $ionicLoading.show({
                  template: '<p>Loading...</p><ion-spinner></ion-spinner>'
                });
         }); 
         $scope.$on("@loaded", function(){
            console.log('@loaded')
            $ionicLoading.hide();
         }); 
*/
}]);
