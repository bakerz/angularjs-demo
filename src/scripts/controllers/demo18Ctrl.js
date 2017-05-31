'use strict';

angular.module('myApp').controller('demo18Ctrl',
  function ($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    slides.push({ image: '/assets/images/p1.jpg', text: '亲爱的你，情人节快乐', id: currIndex++});
    slides.push({ image: '/assets/images/p2.jpg', text: '亲爱的你，情人节快乐', id: currIndex++});
    slides.push({ image: '/assets/images/p3.jpg', text: '亲爱的你，情人节快乐', id: currIndex++});
  })