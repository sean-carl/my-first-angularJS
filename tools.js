var app = angular.module('myApp', []);
app.controller('ToolsCtrl', function($scope) 
{
  $scope.tools = 
    [ 
      { "name":"Google Analytics" 
        ,"intro": "不只能讓您估算銷售量和轉換率，還能提供最新的分析資料，方便您瞭解訪客如何使用您的網站、他們如何前來，以及如何吸引他們持續回訪"
      },
      { "name":"mixpanel" 
        ,"intro":"世界最先進的行動或網頁分析平台"
      },
      { "name":"UXCam"
        ,"intro":"捕獲和視覺化用戶行為數據，來改善您的應用程式或網站"
      },
      { "name":"CHARTIO"
        ,"intro":"任何人都可以簡易使用的強大商業智能平台，可輕易視覺化和美化數據資料"
      }
    ];
});


