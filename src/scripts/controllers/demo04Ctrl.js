'use strict';

angular.module('myApp')
.controller('demo04Ctrl', ['$scope', function ($scope) {
    $scope.obj = [{
        'name': 'jack',
        'age': 12
    },{
        'name': 'mike',
        'age': 10
    }];

    $scope.add = function () {
        var object = {'name':'xxx',age:12};
        $scope.obj.push(object);
    };

    $scope.sub = function () {
        $scope.obj.pop();
    };
}]);