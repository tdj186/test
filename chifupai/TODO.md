TODO LIST
====================

這裡是關於主要系統整題的問題，並不包含個別模塊的問題


## TODO

1. 討論API Error處理與 API規格。

1. Loading Spin 展現的方式需要考慮一下: 
   * 可否不要寫在 control 中  ----> 放到 run() 中
   * 可否不要阻擋頁面操作(modal) ---> 直接寫到與面，參考 recommend-tab.html
1. Study $resource

## DONE
1. ion slide box 與ng-repeat一起用，有bug。(暫時處理了: 需要在controller中加一些code, see recommendTabCtrl)
1. 在非首頁（Tab頁）的地方，使用reload鍵，會發生無法顯示(或會自動反回首頁，視是否有設定 default route 有關)


1. 調整glfTool，是其可以透過設定處理，可以控制要攔截的network connect
   * 可能要改http與interceptor
      目前作法：呼叫 $http.xxx() 時，加入 glfSpin。 intercepotor 根據有glfSpin的，才做spin的count

1. 在非首頁（Tab頁）的地方，使用reload鍵，會發生無法顯示(PS: 未設定 default route 有關)
   * 希望可以在原網址，正常顯示。
   * 可能要透過 oc.lazyLoad設定即可
   解決方法：
      1. 把所有config彙整到一個 (js/ctrl/config.js) : 開發時比較不方便，尤其是多人開發。
      2. index.html 中 include所以的 config.js: 可能效率差一些？

1. Use iOS style on android. ( disable platform specific styles )
   ```
   myApp.config(function($ionicConfigProvider) {
       $ionicConfigProvider.views.transition('ios');
       $ionicConfigProvider.tabs.style('standard').position('bottom');
       $ionicConfigProvider.navBar.alignTitle('center').positionPrimaryButtons('left');
   });
   ```
