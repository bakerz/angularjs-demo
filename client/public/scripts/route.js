var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
    .when('', '/main')
    .otherwise('main');

    $stateProvider
    .state('main', {
        url: '/main',
        views: {
            'header@': {
                templateUrl: 'client/views/header.html'
            },
            'nav@': {
                templateUrl: 'client/views/nav.html'
            }
        }
    })
    .state('main.demo01', {
        url:'/demo01',
        views: {
            'content@': {
                templateUrl: 'client/views/demo01.html'
            }
        }
    })
    .state('main.demo02', {
        url:'/demo02',
        views: {
            'content@': {
                templateUrl: 'client/views/demo02.html'
            }
        }
    })
    .state('main.demo03', {
        url:'/demo03',
        views: {
            'content@': {
                templateUrl: 'client/views/demo03.html'
            }
        }
    });
}]);