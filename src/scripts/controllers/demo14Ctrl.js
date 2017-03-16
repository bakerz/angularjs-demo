'use strict';

angular.module('myApp')
.controller('demo14Ctrl', function ($scope) {
  $scope.text = "version: '1'\n"+
    "kind: appstack\n"+
    "metadata:\n"+
    "  name: 3-layer-appstack # 应用名称 (必填, 可修改, 长度1-40)\n"+
    "  description: xxxxxx # 应用描述 (可选,可修改, 长度0-255)\n"+
    "  type: 系统  # 应用类型 (必填, 可修改，下拉框)\n"+
    "  url: http://11.1.1.1/gateway # (必填)\n"+
    "  label:\n"+
    "    projectId: asdfd-asdf-asdf # (必填)\n"+
    "    farmId: 123-adsf-123 # (必填)\n"+
    "    tenantId: 123-adsf-123 # (必填)\n"+
    "    serviceInstanceId: 123 # (必填)";

  $scope.cmOptionDrag = {
    lineNumbers: true,
    autofocus: true,
    onLoad: function(cm) {
      cm.setSize('auto', '100px');
      cm.getDoc().setValue($scope.text);
    }
  };

  $scope.cmOptionClick = {
    lineNumbers: true,
    indentWithTabs: true,
    autofocus: true,
    onLoad: function(cm) {
      cm.setSize('auto','100px');

      cm.getDoc().setValue($scope.text);

      cm.on('change', function() {
        //console.log(doc, doc.getValue());
        //doc.replaceSelection("插入的内容");
        //console.log(doc.getValue());
      });

      cm.on('mousedown', function(){
        //console.log('down');
      });

      cm.on('blur', function() {

        setTimeout(function(){
          if ($scope.insertText) {
            doc.replaceSelection($scope.insertText);
            $scope.insertText = '';
            cm.focus();
          }
        },300);

      });
    }
  };

  $scope.datas = [{
    'name': '代码1',
    'data': 'var a = 1;'
  },{
    'name': '代码2',
    'data': 'function sum(){};'
  },{
    'name': '代码3',
    'data': 'console.log(123);'
  }];

  $scope.insert = function(str) {
    $scope.insertText = str;
  };

  $scope.test = function(str) {
    var tc = document.getElementById("mytextarea");
    var tclen = tc.value.length;
    tc.focus();
    if(typeof document.selection != "undefined") {
      document.selection.createRange().text = str;
    } else {
      tc.value = tc.value.substr(0,tc.selectionStart)+str+tc.value.substring(tc.selectionStart,tclen);
    }
  };

  $scope.aceLoaded = function(_ace) {
    //_ace.setReadOnly(true);
    //_ace.getSession().setMode("ace/mode/yaml");
    _ace.$blockScrolling = Infinity;
    _ace.on('blur', function(e){
      setTimeout(function(){
        if ($scope.insertText) {
          _ace.insert($scope.insertText);
          _ace.focus();
        }
      },300);
    })
  };

  $scope.aceChanged = function(e) {

  }
})
.directive('dragItem', function() {
  return {
    restrict: 'A',
    replace: true,
    template: '<div class="item" ng-repeat="d in datas">{{d.name}}</div>',
    link: function(scope, elem, attrs) {
      console.log(elem, elem[0]);
      attrs.style = {
        cursor: 'move',
        position: 'relative',
        border: '1px solid #ccc',
      };
      startDrag(elem, elem);
    }
  }
});