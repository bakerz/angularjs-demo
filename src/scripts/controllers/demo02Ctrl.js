'use strict';

angular.module('myApp')
  .controller('demo02Ctrl', function($scope) {
    $scope.tables = [{
      datas: [{
        name: 'test',
        address: 'http://www.xxx.com'
      }]
    }];

    $scope.addTable = function () {
      $scope.tables.push({
        datas: [{
          name: '',
          address: ''
        }]
      })
    };

    $scope.add = function (data) {
      data.push({
        name: '',
        address: ''
      })
    };

    $scope.delete = function (index) {
      $scope.datas.splice(index, 1);
    }
  });