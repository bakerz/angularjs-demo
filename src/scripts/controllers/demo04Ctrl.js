'use strict';

angular.module('myApp')
  .controller('demo04Ctrl', function ($scope) {
    $scope.obj = [{
      time: "don't change"
    },{
      time: Date.now()
    }];

    $scope.add = function () {
      var object = {time:Date.now()};
      $scope.obj.push(object);
    };

    $scope.sub = function () {
      $scope.obj.pop();
    };

    $scope.edit = function () {
      $scope.obj[0] = {
        time: Date.now()
      }
    };

    $scope.replace = function () {
      $scope.obj = [{
        time: Date.now()
      },{
        time: "don't change"
      }, {
        time: Date.now()
      }, {
        time: Date.now()
      }]
    }
  });