Ionic App Base
===============================

目前已Web 開發方式進行，如何打包，還需要了解。
可以看看 www/README.md  作為參考。

## 程式架構

* 引用了oc.LazyLoad: 每個模組有自己的 config.js (routing rules)
* 架構大概如下:
```
www
├── css
├── glflib                       -- GLF 建立的 AngularJS 共用函示庫
│   ├── glf-toolbox.js           -- Service主檔
│   └── services
│       ├── cache.js             -- 處理分頁等的 service
│       ├── http.js              -- 處理連線的 service
│       └── interceptor.js       -- 處理連線異常, login, spin
├── img  
├── index.html                   -- App 首頁 (ng-app="starter")
├── js
│   ├── app.js                   -- create `starter` module, 及一些基本設定
│   └── ctrl                     -- 所有的 controllers: 子目錄與檔案比照 templates (view)
│       ├── config.js            -- 主頁（tab頁）的 routing規則
│       ├── recommend            -- 子目錄： 
│       │   ├── config.js        -- 該子目路（功能模組）的 routing 規則
│       │   └── oppo-detail.js   -- Controller
│       └── recommend-tab.js
├── lib                          -- bowser 管控的所有外部 js
└── templates
    ├── about                    -- 子目錄
    ├── fund                     -- 子目錄
    ├── index.html               -- tab頁的設定
    ├── insights                 -- 子目錄
    ├── recommend                -- 子目錄
    │   ├── allocation.html      -- view
    │   ├── index.html           -- 該子目路（功能模組）的設定
    │   ├── oppo-detail.html     -- view
    │   ├── question.html
    │   └── recommend-list.html
    └── recommend-tab.html       -- tab頁  view
```

## 如何寫新增一個功能模塊
1. 建立目錄於：
   * www/templates/XXX
   * www/js/ctrl/XXX
2. 設定或產生config 與 index.html
   * www/js/ctrl/config.js
   * www/js/ctrl/XXX/config.js
   ``` bash
      cp tools/tpls/config.js www/js/ctrl/XXX/
   ```
   * www/js/templates/XXX/index.html
   ``` bash
      cp tools/tpls/index.html www/templates/XXX/index.html
   ```
3. 產生頁面
   * tools/tpls中copy 檔案到相應路徑
   ``` bash 
      cp tools/tpls/t.html www/templates/XXX/YYYY.html
      cp tools/tpls/t.js www/js/ctrl/XXX/YYYY.html
   ```
   * 修改 檔案內容
   (以上，未來可能可以自動化)
   ```
