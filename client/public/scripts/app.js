var myApp = angular.module("myApp", ["ui.router"]);

myApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
    .when("", "/pageTab")
    .otherwise('pageTab');

    $stateProvider
    .state("pageTab", {
        url: "/pageTab",
        templateUrl: "client/views/pageTab.html"
    })
    .state("pageTab.page1", {
        url:"/page1",
        templateUrl: "client/views/page1.html"
    })
    .state("pageTab.page2", {
        url:"/page2",
        templateUrl: "client/views/page2.html"
    })
    .state("pageTab.page3", {
        url:"/page3",
        templateUrl: "client/views/page3.html"
    });
}]);