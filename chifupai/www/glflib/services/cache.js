(function (angular, window) {
   /*
    * This Service useful for paging/search/sort
    * or Cache Somedata
    */
    "use strict";
    angular.module('glfToolbox')
      .factory('_cache', [function () {
        var name = 'glfToolbox._cache';
        console.log(name + " init");
        var self = this;
        self.cache= {}
       return {
            get: function (id) {
                // TO DO: clean other cacheing 
                // 但紀錄的狀態時有層級時，刪除時可能會影響上一層的資料
                // 所以暫時不做
                //alert("get:" + $location.path());
                //var a = self.cache[$location.path()];
                //delete self.cache[$location.path()];
                //return self.cache[$location.path()];

                return self.cache[id];
            },
            set: function (id, obj) {
                self.cache[id] = obj;
            },
            delete: function(id) {
               delete self.cache[id]
            },
            clean: function () {
                self.cache = {}
            }

       };
    }]);
})(angular, window);
