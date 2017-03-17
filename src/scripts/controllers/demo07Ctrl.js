'use strict';

angular.module('myApp')
  .controller('demo07Ctrl', function ($scope) {
    $scope.submitForm = function(isValid) {
      if (!isValid) {
        alert('验证失败');
      }
    };
    $scope.user = {};

    $scope.user.radio = '#ip_hash';
  });