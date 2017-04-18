'use strict';

angular.module('app-router', [])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .when('', '/home')
      .otherwise('home');

    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          'header': {
            templateUrl: 'views/templates/uiHeader.html'
          },
          'nav': {
            templateUrl: 'views/templates/uiNav.html'
          },
          'content': {
            templateUrl: 'views/templates/uiContentDefault.html'
          }
        }
      })
      .state('home.demo01', {
        url:'/demo01',
        views: {
          'content@': {
            templateUrl: 'views/demo01.html'
          }
        }
      })
      .state('home.demo02', {
        url:'/demo02',
        views: {
          'content@': {
            templateUrl: 'views/demo02.html',
            controller: 'demo02Ctrl'
          }
        }
      })
      .state('home.demo03', {
        url:'/demo03',
        views: {
          'content@': {
            templateUrl: 'views/demo03.html',
            controller: 'demo03Ctrl'
          }
        }
      })
      .state('home.demo04', {
        url:'/demo04',
        views: {
          'content@': {
            templateUrl: 'views/demo04.html',
            controller: 'demo04Ctrl'
          }
        }
      })
      .state('home.demo05', {
        url:'/demo05',
        views: {
          'content@': {
            templateUrl: 'views/demo05.html',
            controller: 'demo05Ctrl'
          }
        }
      })
      .state('home.demo06', {
        url:'/demo06',
        views: {
          'content@': {
            templateUrl: 'views/demo06.html'
          }
        }
      })
      .state('home.demo07', {
        url:'/demo07',
        views: {
          'content@': {
            templateUrl: 'views/demo07.html',
            controller: 'demo07Ctrl'
          }
        }
      })
      .state('home.demo08', {
        url:'/demo08',
        views: {
          'content@': {
            templateUrl: 'views/demo08.html',
            controller: 'demo08Ctrl'
          }
        }
      })
      .state('home.demo09', {
        url:'/demo09',
        views: {
          'content@': {
            templateUrl: 'views/demo09.html',
            controller: 'demo09Ctrl'
          }
        }
      })
      .state('home.demo10', {
        url:'/demo10',
        views: {
          'content@': {
            templateUrl: 'views/demo10.html',
            controller: 'demo10Ctrl'
          }
        }
      })
      .state('home.demo11', {
        url:'/demo11',
        views: {
          'content@': {
            templateUrl: 'views/demo11.html',
            controller: 'demo11Ctrl'
          }
        }
      })
      .state('home.demo12', {
        url:'/demo12',
        views: {
          'content@': {
            templateUrl: 'views/demo12.html',
            controller: 'demo12Ctrl'
          }
        }
      })
      .state('home.demo13', {
        url:'/demo13',
        views: {
          'content@': {
            templateUrl: 'views/demo13.html',
            controller: 'demo13Ctrl'
          }
        }
      })
      .state('home.demo14', {
        url:'/demo14',
        views: {
          'content@': {
            templateUrl: 'views/demo14.html',
            controller: 'demo14Ctrl'
          }
        }
      })
      .state('home.demo15', {
        url:'/demo15',
        views: {
          'content@': {
            templateUrl: 'views/demo15.html'
          }
        }
      })
      .state('home.demo17', {
        url:'/demo17',
        views: {
          'content@': {
            templateUrl: 'views/demo17.html',
            controller: 'demo17Ctrl'
          }
        }
      });
  });