'use strict';

angular.module('myApp')
  .controller('demo13Ctrl', function ($scope) {
    $scope.arr = [];
    $scope.addData = function() {
      $scope.arr.push(Date.now());
      $scope.refresh = Date.now();
    }
  })
  .directive('dirTest', function() {
    return {
      restrict: 'EA',
      template: '<div class="test" ng-repeat="data in arr">{{data | date: "yyyy-MM-dd HH:mm:ss"}}</div>',
      link: function(scope, element, attrs) {
        scope.$watch(attrs.refreshData, function(newValue) {
          /*if (newValue) {
            console.log(attrs.dirData);
            scope.data = attrs.dirData;
          }*/
        })
      }
    }
  });