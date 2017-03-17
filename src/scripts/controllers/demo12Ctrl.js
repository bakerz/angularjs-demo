'use strict';

angular.module('myApp')
  .controller('demo12Ctrl', function ($scope) {
    $scope.person = [{
      'name': 'zhangsan',
      'email': 'zhangsan@qq.com'
    },{
      'name': 'lisi',
      'email': 'lisi@qq.com'
    },{
      'name': 'wanger',
      'email': 'wanger@qq.com'
    }]
  });