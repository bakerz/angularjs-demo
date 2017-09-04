'use strict';

angular.module('myApp').controller('demo01Ctrl',
  function ($scope,$interval) {
    $scope.colors = [{name:'black', shade:'dark'},
      {name:'white', shade:'light'},
      {name:'red', shade:'dark'},
      {name:'blue', shade:'dark'},
      {name:'yellow', shade:'light'}];

    $scope.object = {
      dark: "black",
      light: "red",
      lai: "red"
    };

    $scope.options = [{
      name: 'option1'
    },{
      name: 'option2'
    },{
      name: 'option3'
    },{
      name: 'option4'
    }];

    $scope.time = 3;
    $interval(function () {
      if ($scope.time > 1) {
        $scope.time--;
      } else {
        $scope.time = 3;
        if ($scope.options.length==5) {
          //$scope.options.pop();
          $scope.options = [{
            name: 'option1'
          },{
            name: 'option2'
          },{
            name: 'option3'
          },{
            name: 'option4'
          }];
        } else {
          //$scope.options.push({name: 'option5'});
          $scope.options = [{
            name: 'option1'
          },{
            name: 'option2'
          },{
            name: 'option3'
          },{
            name: 'option4'
          },{
            name: 'option5'
          }];
        }
      }
    },3000);

    $scope.selectedColor3 = $scope.colors[$scope.colors.length-1].name;
  }
);