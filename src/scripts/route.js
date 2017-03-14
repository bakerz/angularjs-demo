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
    });
}]);