'use strict';

angular.module('myApp').controller('demo01Ctrl',
  function ($scope) {
    $scope.colors = [{name:'black', shade:'dark'},
      {name:'white', shade:'light'},
      {name:'red', shade:'dark'},
      {name:'blue', shade:'dark'},
      {name:'yellow', shade:'light'}];

    $scope.selectedColor3 = $scope.colors[$scope.colors.length-1].name;
  }
);