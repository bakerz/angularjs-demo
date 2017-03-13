'use strict';

angular.module('app-router', [])
.config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
    .when('', '/home')
    .otherwise('home');

    $stateProvider
    .state('home', {
        url: '/home',
        views: {
            'header': {
                templateUrl: 'views/uiHeader.html'
            },
            'nav': {
                templateUrl: 'views/uiNav.html'
            },
            'content': {
                templateUrl: 'views/uiContentDefault.html'
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
                templateUrl: 'views/demo03.html'
            }
        }
    });
}]);