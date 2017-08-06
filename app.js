//setup app
var myApp = angular.module('portal',[]);

//main controller
myApp.controller('main', function($scope) {    

    //test
    $scope.foo = "bar";

    //config items are going to be listed in an object here
    $scope.config = {};

});
