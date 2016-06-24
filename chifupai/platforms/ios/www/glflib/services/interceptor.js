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
    var glf = angular.module('glfToolbox')
    glf
      .factory('_inter', ['$q', '$window', '$cookieStore', '$timeout', '$rootScope', function ($q, $window, $cookieStore, $timeout, $rootScope) {
        var name = 'glfToolbox._inter';
        console.log(name + " init");
        var self = this;
       var auth_key = "";
       var numLoadings = 0;
       var timeout = null;
       var loaded = function () {
           if (timeout) {
               $timeout.cancel(timeout);
               timeout = null;
               $rootScope.$broadcast('@loaded', '');
           }
       };
       return {
           'response': function (response) {
               //if ('../api' != response.config.url.substring(0, 6)) return response;
               //if( response.config.url.substring(0,10) != "http://api" ) return response;
               if( response.config.glfSpin === undefined)  return response;

               --numLoadings
               console.log(name + ": numLoadings " + numLoadings)
               console.log(response)
               // Not Login  
               if (response.data.errCode != 0) {
                   var errCode = response.data.errCode
                   if (errCode == -1) { 
                     loaded();
                     $rootScope.$broadcast('@nologin', '');
                   }
               }
               if ((numLoadings) <= 0) {
                   numLoadings = 0;
                   loaded();
               }
               // Login 機制
/*
               var auth = response.headers("WWW-Authenticate");
               if (auth != null) {
                   var authkey = auth.replace('Bearer ', '');

                   //auth_key = authkey //開新頁不行 reload 不行
                   //$window.sessionStorage.token = authkey; //開新頁不行 reload 可以
                   //$cookieStore.put('authkey', authkey) //都行
                   $cookieStore.put('authkey', authkey) //都行

                   console.log('auth_key: --' + authkey + '--')
               }
*/
               return response;
           },
           'responseError': function (rejection) {
               console.log (rejection.config.url.substring)
               if( rejection.config.glfSpin === undefined)  return $q.reject(rejection);
               if ((--numLoadings) <= 0) {
                  numLoadings = 0;
                  loaded();
                  console.log(rejection)
                  alert("系統繁忙，請稍後再試。或連繫管理員！ [" + rejection.status + "]")
               }
               return $q.reject(rejection);
               /*
               if(rejection.status === 401) {
                   location.reload();
               }
               return $q.reject(rejection);
               */
           },
           'request': function (config) { // test http Authorization
               //if ('../api' != config.url.substring(0,6)) return config;
               if( config.glfSpin === undefined)  return config;
               console.log(config)
               //console.log(JSON.stringify(config.headers["Accept"]))
/* 暫時
               config.headers = config.headers || {};

               //config.headers.Authorization = 'Bearer ' + auth_key;
               //config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
               //config.headers.Authorization = 'Bearer ' + $cookieStore.get('authkey');
               config.headers.Authorization = 'Bearer ' + $cookieStore.get('authkey');
*/
               numLoadings++;
               // Show loader

               
               //var Spin = $injector.get('SpinService');
               //console.log("-----------------")
               //console.log(config.url)
               //console.log(Spin.timeout)
               if (timeout == null) {
                   timeout = $timeout(function () {
                        $rootScope.$broadcast("@loading");
                        //return Spin.alert('Loading .......')
                   }, 1000)
               } 
               
               return config;
           },
           'requestError': function (rejection) {
               //--numLoadings;
               numLoadings = 0;
               loaded();
               alert("系統暫停服務，請稍後再試。或連繫管理員！")
               return $q.reject(rejection);
           }
       };
    }]);
})(angular, window);
