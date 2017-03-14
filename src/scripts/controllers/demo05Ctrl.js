'use strict';

angular.module('myApp')
.controller('demo05Ctrl', ['$scope', function ($scope) {
    $scope.datas = [
        [1,1,1],
        [4,5,6],
        ['qqq','qqq','qqq'],
        [{'name':'xx','age':11},{'name':'xx','age':11},{'name':'xx','age':11}]
    ];

    $scope.obj = {'name':'xxx','age':12,'status':true};

    $scope.isShow = true;
    $scope.datas2 = [
        [1,2,3],
        [4,5,6]
    ];
}]);