'use strict';

angular.module('myApp').controller('demo19Ctrl',
  function ($scope) {

  })
  .run(function($rootScope) {
    $rootScope.baseUrl = "ws://172.16.74.169:8080";
    $rootScope.selfLink = "/api/v1/namespaces/default/pods/nginx-59b9747b97-qrkrg";
    $rootScope.containerName = "";
    $rootScope.accessToken = "";
    $rootScope.preventSocket = true;
  })
  .config(function(kubernetesContainerSocketProvider) {
    kubernetesContainerSocketProvider.WebSocketFactory = "MyWebSockets";
  })
  .factory("MyWebSockets", function($rootScope) {
    return function MyWebSocket(url, protocols) {
      url = $rootScope.baseUrl + url;
      if ($rootScope.accessToken)
        url += "&access_token=" + $rootScope.accessToken;
      return new WebSocket(url, protocols);
    };
  });