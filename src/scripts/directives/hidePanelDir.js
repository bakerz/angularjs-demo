'use strict';

angular.module('myApp')
  .controller('demo17Ctrl', function ($scope) {
    $scope.conShow = false;
    $scope.sum = 0;
  })
  .directive('hidePlane', function () {
    return {
      restrict: 'A',
      scope: false,
      link: function (scope, elem, attr) {
        console.log('==========', elem, attr);

        elem.on('click', function () {
          scope.sum++;
        });


        document.addEventListener('click', function (e) {
          console.log('target:', e, e.target, e.target.id);
          if (e.path[1].id != 'hide-panel' && e.path[2].id != 'hide-panel') {
            console.log('关闭');
            scope.conShow = false;
            console.log(scope.conShow);
          } else {
            console.log('======', e.target.id);
          }
        })
      }
    }
  });