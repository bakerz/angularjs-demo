'use strict';

angular.module('app-router', [])
  .run(function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  )
  .config(function ($stateProvider,$urlRouterProvider,$locationProvider) {

    // $locationProvider.hashPrefix('!');
    $locationProvider.hashPrefix('');

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
            templateUrl: 'views/templates/uiNav.html',
            controller: 'navCtrl'
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
      .state('home.demo16', {
        url:'/demo16',
        views: {
          'content@': {
            templateUrl: 'views/demo16.html'
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
      })
      .state('home.demo18', {
        url: '/demo18',
        views: {
          'content@': {
            templateUrl: 'views/demo18.html',
            controller: 'demo18Ctrl'
          }
        }
      })
      .state('home.demo19', {
        url: '/demo19',
        abstract: true,
        views: {
          'content@': {
            templateUrl: 'views/demo19.html'
          }
        }
      })
      .state('home.demo19.public', {
        url: '/public',
        abstract: true,
        templateUrl: 'views/templates/demo19PublicPrivate.html',
        controller: function ($scope) {
          $scope.state = 'public';
        }
      })
      .state('home.demo19.public.application', {
        url: '/application',
        views: {
          'title': {
            template: '<div>公有应用列表</div>'
          },
          'content': {
            template: '<div>应用列表内容</div>'
          }
        }
      })
      .state('home.demo19.public.image', {
        url: '/image',
        views: {
          'title': {
            template: '<div>公有镜像列表</div>'
          },
          'content': {
            template: '<div>镜像列表内容</div>'
          }
        }
      })
      .state('home.demo19.private', {
        url: '/private',
        abstract: true,
        templateUrl: 'views/templates/demo19PublicPrivate.html',
        controller: function ($scope) {
          $scope.state = 'private';
        }
      })
      .state('home.demo19.private.application', {
        url: '/application',
        controller: function ($scope) {
          $scope.state = 'public';
        },
        views: {
          'title': {
            template: '<div>私有应用列表</div>'
          },
          'content': {
            template: '<div>应用列表内容</div>'
          }
        }
      })
      .state('home.demo19.private.image', {
        url: '/image',
        controller: function ($scope) {
          $scope.state = 'public';
        },
        views: {
          'title': {
            template: '<div>私有镜像列表</div>'
          },
          'content': {
            template: '<div>镜像列表内容</div>'
          }
        }
      })
      .state('home.demo19.collection', {
        url: '/collection',
        abstract: true,
        template: '<div id="demo19-collection">' +
        '<ul>' +
        '<li><a ui-sref="home.demo19.collection.application">应用</a></li>' +
        '<li><a ui-sref="home.demo19.collection.image">镜像</a></li>' +
        '</ul>' +
        '<div ui-view=""></div>' +
        '</div>'
      })
      .state('home.demo19.collection.application', {
        url: '/application',
        template: '收藏-应用列表'
      })
      .state('home.demo19.collection.image', {
        url: '/image',
        template: '收藏-镜像列表'
      })
    ;
  });