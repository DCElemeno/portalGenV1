//setup app
var myApp = angular.module('portal',[]);

//main controller
myApp.controller('main', function($scope) {    
	var _this = this;

    //config items are going to be listed in an object here
    $scope.config = {
    	navOptions: [
			{name:'Option 1', dest: ''},
			{name:'Option 2', dest: ''},
			{name:'Option 3', dest: ''},
			{name:'Option 4', dest: ''},
			{name:'Option 5', dest: ''}
		]
    };
});
