'use strict';

angular.module('myApp')
.controller('demo13Ctrl', function ($scope) {
  $scope.arr = [];
  $scope.addData = function() {
    $scope.arr.push('xxxxx');
    $scope.refresh = Date.now();
  }
})
.directive('dirTest', function() {
  return {
    restrict: 'EA',
    template: '<div class="test">{{data}}</div>',
    link: function(scope, element, attrs) {
      scope.$watch(attrs.refreshData, function(newValue) {
        if (newValue) {
          console.log(attrs.dirData);
          scope.data = attrs.dirData;
        }
      })
    }
  }
});