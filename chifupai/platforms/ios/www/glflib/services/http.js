(function (angular, window) {
    "use strict";
/*
    var regModules = ["glf.toolbox"],
        regInvokes = {},
        regConfigs = [],
        modulesToLoad = [],
        recordDeclarations = [],
        broadcast = angular.noop,
        runBlocks = {},
        justLoaded = [];
*/
    //glf_toolbox
    angular.module('glfToolbox')
      .provider('_http', [function() {
        var cacheTTL = 86400
        return({
            /* Get/Set cache TTL */
            getTTL: function() {return cacheTTL;},
            setTTL: function(cacheTime) {cacheTTL = cacheTime;},
            $get: ['$q', '$http', function($q, $http) {
                 var self = this
                     , name = 'glfToolbox._http'

                 console.log(name + " init");
                 self.cache = {}; //new Object(); 
                 var __ajax = function (httpFunc, url, succFun, sendBody) {
                         // httpFunc(url, sendBody).
                         var arg = [url];
                         (sendBody !== undefined) && arg.push(sendBody);
                         arg.push({ glfSpin: 1})
                         httpFunc.apply(this, arg).
                         success(function (data, status, headers, config) {
                             succFun(data);
                         }).
                         error(function (data, status, headers, config) {
                             console.log(status);
                         });
                     }
                 return {

                     // Wrapper functions
                     /* If APIs are NOT RESTful, modify the $http.xxx */
                     /* These function does NOT support Spin */
                     _get:    function (){ return $http.get.apply( this, arguments )},
                     _post:   function() { return $http.post.apply( this, arguments )},
                     _put:    function (){ return $http.put.apply( this, arguments )},
                     _delete: function (){ return $http.delete.apply( this, arguments )},
                     _jsonp: function (){ return $http.jsonp.apply( this, arguments )},
                     _head: function (){ return $http.head.apply( this, arguments )},

                     clean: function () {self.cache = {} },

                     get :   function (url, succFun) { __ajax($http.get, url, succFun)},
                     delete: function (url, succFun) { __ajax($http.delete, url, succFun)},
                     post:   function (url, sendBody, succFun) { __ajax($http.post, url, succFun, sendBody)},
                     put :   function (url, sendBody, succFun) { __ajax($http.put, url, succFun, sendBody)},

                     //  Triditional style 
                     cGet: function (url, succFun, cacheTime) {
                         var ttl = (cacheTime === undefined) ? cacheTTL : cacheTime;

                         if (self.cache[url] !== undefined && ttl >= Math.floor(Date.now() / 1000) - self.cache[url][0]  ) {
                             succFun(self.cache[url]);
                             return;
                         
                         }
                         //$http.get(url).
                         $http.get(url, { glfSpin: 1}). // 告訴interceptor, 要處理spin問題
                         success(function (data, status, headers, config) {
                             //console.log(JSON.stringify(data));
                             if (data.error === undefined) {
                                    self.cache[url] = [Math.floor(Date.now() / 1000), data];
                             }
                             succFun(data);
                         }).
                         error(function (data, status, headers, config) {
                             // called asynchronously if an error occurs
                             // or server returns response with an error status.
                             console.log(status);
                         });
                     },

                  };
            }]
        });
    }]);
})(angular, window);
