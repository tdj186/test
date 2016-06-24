(function (angular, window) {
   /*
    * This Service useful for paging/search/sort
    * or Cache Somedata
    */
    "use strict";
    angular.module('glfToolbox')
      .filter('encodeURI', function() {
          return window.encodeURIComponent;
      })
})(angular, window);
