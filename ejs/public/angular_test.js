var app = angular.module('myApp', []);

/*app.controller('DemoController', function ($scope) {

	$scope.arr=['tom','jerry','alis']
    
    $scope.add = function (name) {
        $scope.counter.push(name);
    }; $scope.subtract = function (name) {
        $scope.counter.remove(name)
    };

    $scope.length=$scope.arr.length;
});*/
app.controller('DemoController', function ($scope) {
    $scope.counter = 0;
    $scope.add = function (amount) {
        $scope.counter += amount;
    }; $scope.subtract = function (amount) {
        $scope.counter -= amount;
    };
});