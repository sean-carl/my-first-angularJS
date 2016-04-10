/* navbar */
$( '#nav-colapse').click(function() {
  $('nav').toggleClass("nope");
});

/* navbar */


var app = angular.module('myApp', []);
app.controller('ToolsCtrl', function($scope, $http) {
    $http.get("toolsList.json")
        .then(function(res) {
        	$scope.tools = res;
        });
});
