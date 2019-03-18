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

    $scope.con = function () {
      console.log($scope.sel)
    };

    $scope.policyList = [{
      'rule': 'ACCESS_IP_RANGE',
      'ruleValue': '172.0.0.1'
    },{
      'rule': 'ACCESS_PORT',
      'ruleValue': 8080
    },{
      'rule': 'APPLICATION',
      'ruleValue': 5
    }];

    $scope.appList = [{
      'id': 1,
      'name': 'test1'
    },{
      'id': 3,
      'name': 'test3'
    },{
      'id': 5,
      'name': 'test5'
    },{
      'id': 7,
      'name': 'test7'
    },{
      'id': 9,
      'name': 'test9'
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

    // ===== 全选 =====
    $scope.arr = [{
      name: 'zhangsan',
      age: 12,
      isSelected: false
    }, {
      name: 'lisi',
      age: 22,
      isSelected: false
    }, {
      name: 'wangwu',
      age: 18,
      isSelected: false
    }];

    /**
     * 全选
     */
    var arrSelected = [];
    $scope.selectAll = function () {
      arrSelected.length = 0;
      angular.forEach($scope.arr, function (item) {
        item.isSelected = $scope.isSelectedAll;

        if ($scope.isSelectedAll) {
          arrSelected.push(item)
        }
      });

      console.log(arrSelected)
    };

    // 单选
    $scope.selectItem = function () {
      arrSelected.length = 0;
      angular.forEach($scope.arr, function (item) {
        if (item.isSelected) {
          arrSelected.push(item)
        }
      });

      console.log(arrSelected)
    }
  }
);