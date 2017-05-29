'use strict';

angular.module('myApp')
  .controller('demo17Ctrl', function ($scope, $document) {
    $scope.conShow = false;

    $scope.showListClick=function($event, isBtn){
      $event.stopPropagation();
      //$scope.conShow=true;

      $scope.conShow = $scope.conShow && isBtn ? false : true;
    };

    $document.bind('click', function () {
      $scope.conShow = false;
      $scope.$apply();
    })
  });