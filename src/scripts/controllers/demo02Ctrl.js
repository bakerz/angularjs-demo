'use strict';

angular.module('myApp')
  .controller('demo02Ctrl', function($scope) {
    $scope.datas = [{
      name: 'test',
      address: 'http://www.xxx.com'
    }];

    $scope.add = function () {
      $scope.datas.push({
        name: '',
        address: ''
      })
    };

    $scope.delete = function (index) {
      $scope.datas.splice(index, 1);
    }
  });