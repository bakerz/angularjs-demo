'use strict';

angular.module('myApp', ['ui.router'])
.config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
    .when('', '/home')
    .otherwise('home');

    $stateProvider
    .state('home', {
        url: '/home',
        views: {
            'header': {
                templateUrl: 'app/views/header.html'
            },
            'nav': {
                templateUrl: 'app/views/nav.html'
            },
            'content': {
                templateUrl: 'app/views/contentDefault.html'
            }
        }
    })
    .state('home.demo01', {
        url:'/demo01',
        views: {
            'content@': {
                templateUrl: 'app/views/demo01.html'
            }
        }
    })
    .state('home.demo02', {
        url:'/demo02',
        views: {
            'content@': {
                templateUrl: 'app/views/demo02.html',
                controller: 'demo02Ctrl'
            }
        }
    })
    .state('home.demo03', {
        url:'/demo03',
        views: {
            'content@': {
                templateUrl: 'app/views/demo03.html'
            }
        }
    });
}]);