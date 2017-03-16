'use strict';

angular.module('myApp')
.controller('demo10Ctrl', function ($scope, $window) {
    $scope.value1 = true;
    $scope.value2 = true;

    $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function() {
        setTimeout(function() {
            $window.alert('You\'ve selected the alert tab!');
        });
    };

    $scope.model = {
        name: 'Tabs'
    };

    // tab2
    $scope.tab2Opts = {
        lineNumbers: true,
        lineWrapping: true,
        autofocus: true
    };

    $scope.source = 'client_max_body_size 1000m;\n' +
        'proxy_set_header X-Real-IP $remote_addr;\n' +
        'proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\n' +
        'proxy_set_header Host $host:$server_port;\n' +
        'proxy_set_header X-Forwarded-Proto "https";\n' +
        'proxy_set_header X-Forwarded-Host $host;\n' +
        'proxy_set_header X-Forwarded-Server $host;\n' +
        'proxy_set_header X-Real-IP $remote_addr;\n' +
        'index  index.html index.htm index.jsp;\n' +
        '#add_header Access-Control-Allow-Origin *;';

    $scope.parse = function() {
        console.log($scope.source);
    };

    // codemirror
    $scope.cmOption = {
        lineNumbers: true,
        indentWithTabs: true,
        autofocus: true
    };

    // Initial code content...
    $scope.cmModel = ';; Scheme code in here.\n' +
        '(define (double x)\n\t(* x x))\n\n\n' +
        '<!-- XML code in here. -->\n' +
        '<root>\n\t<foo>\n\t</foo>\n\t<bar/>\n</root>\n\n\n' +
        '// Javascript code in here.\n' +
        'function foo(msg) {\n\tvar r = Math.random();\n\treturn "" + r + " : " + msg;\n}';
});