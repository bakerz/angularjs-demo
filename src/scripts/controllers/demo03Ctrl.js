'use strict';

angular.module('myApp')
  .controller('demo03Ctrl', function ($scope) {
    $scope.title = '点击展开';
    //这里的title是expander-title='title'中的'title'值部分的赋值；而上面指令定义中的scope{title:是template:模板中的{{title}}，也就是说在指令中，title:'=expanderTitle'这句话的意思是将属性expander-title的值'title'(由控制器赋值)绑定独立作用域也就是指令内的作用域——模板中的{{title}}之上，让{{title}}和'title'同值。记住：独立作用域三大绑定策略的作用就是绑定同一个标签内的属性名传值.不同的是：@符传递是属性值字串；=号传递的是属性值的值(控制器赋予)；&符传递是的属性调用的方法()
    $scope.text = '这里是展开后的内容';

    var deployParamsObj = {
      "name": "test",
      "description": "111",
      "tenantId": "7660e12a-15c7-481b-a2a7-7033eb35a192",
      "accessUrl": "",
      "blueprintIcon": "assets/images/icon/app/com_docker.png",
      "blueprintId": "1",
      "blueprintVersionId": "1",
      "namespace": "namespace-68df72d6",
      "createUser": "liqiang",
      "lastModifyUser": "liqiang",
      "serviceList": [
        {
          "open": true,
          "accessControl": "UNLIMITED",
          "accessWeight": "",
          "cpuQuota": 1000,
          "deploymentName": "",
          "icon": "assets/images/icon/app/com_docker.png",
          "image": "centos",
          "imageDomain": "default",
          "imageVersion": "7",
          "memoryQuota": 1024,
          "name": "centos-91228",
          "oid": null,
          "podTotal": 1,
          "serviceConfigGroupList": [
            {
              "configFileList": [
                {
                  "oid": 0,
                  "status": "new",
                  "name": "test",
                  "content": "1",
                  "description": "",
                  "$$hashKey": "object:940"
                }
              ],
              "configGroupId": 0,
              "oid": "",
              "configFileId": 0,
              "path": "/test",
              "$$hashKey": "object:918",
              "repeat": false
            }
          ],
          "serviceEnvironmentList": [
            {
              "oid": null,
              "createUser": null,
              "createTime": null,
              "lastModifyUser": null,
              "lastModifyTime": null,
              "deleted": 0,
              "key": "PATH",
              "value": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            }
          ],
          "servicePortList": [],
          "serviceVolumeList": [
            {
              "oid": "",
              "name": "hyyvol",
              "path": "/test",
              "pvcName": "volume-20180510073424-a3dd550c-2",
              "volumeId": 1,
              "selected": {
                "oid": 1,
                "createUser": "eadcb4f7-197e-4bc2-8e87-24e3dff9c6a3",
                "createTime": 1525937665000,
                "lastModifyUser": "eadcb4f7-197e-4bc2-8e87-24e3dff9c6a3",
                "lastModifyTime": 1525937716000,
                "deleted": 0,
                "namespaceName": "namespace-68df72d6",
                "tenantId": "7660e12a-15c7-481b-a2a7-7033eb35a192",
                "storagepoolId": 1,
                "storagepoolName": "nfs资源池",
                "name": "hyyvol",
                "pvcName": "volume-20180510073424-a3dd550c-2",
                "description": null,
                "fileType": "ext4",
                "size": 1024,
                "mountOnce": false,
                "status": "using"
              },
              "$$hashKey": "object:952",
              "repeatVolume": false,
              "repeatPath": false
            }
          ],
          "startCommand": null,
          "useHostTimeZone": true,
          "$$hashKey": "object:888",
          "repeat": false
        }
      ],
      "configGroup": {
        "oid": 1,
        "displayName": "sssd",
        "description": "",
        "blueprintOid": null,
        "blueprintVersionOid": null
      },
      "namespaceObj": {
        "oid": 1,
        "createUser": "d845700d-5819-4eab-a4af-697fd142a6ee",
        "createTime": 1525860145000,
        "lastModifyUser": "d845700d-5819-4eab-a4af-697fd142a6ee",
        "lastModifyTime": 1525935070000,
        "deleted": 0,
        "name": "namespace-68df72d6",
        "displayName": "唯一分区",
        "status": "ACTIVE",
        "environmentName": null,
        "environmentId": 1,
        "description": "资源不够，请部署后删掉不使用的应用",
        "threshold": 85,
        "cpuQuota": 7,
        "totalCpuQuota": null,
        "cpuUseage": 0,
        "memoryQuota": 7,
        "totalMemoryQuota": null,
        "memoryUseage": 0,
        "tenantTotal": null,
        "appTotal": null,
        "podTotal": null,
        "namespaceTenantDTOs": [],
        "cpu": 18,
        "memory": 34,
        "appCount": 6,
        "podCount": 7
      },
      "selectConfigGroup": {
        "status": "related",
        "config": {
          "oid": 1,
          "createUser": "ac356329-9395-4f5b-970e-7ab3173a2bdc",
          "createTime": 1525921840000,
          "lastModifyUser": "ac356329-9395-4f5b-970e-7ab3173a2bdc",
          "lastModifyTime": 1525921840000,
          "deleted": 0,
          "name": "78120bb1-380d-44a0-b9fb-5b41a8a8af8b",
          "displayName": "sssd",
          "description": "",
          "blueprintOid": null,
          "blueprintVersionOid": null,
          "tenantId": "7660e12a-15c7-481b-a2a7-7033eb35a192",
          "namespace": "namespace-68df72d6",
          "appName": null,
          "filesCount": null,
          "configFileList": [
            {
              "oid": 2,
              "createUser": "ac356329-9395-4f5b-970e-7ab3173a2bdc",
              "createTime": 1525922470000,
              "lastModifyUser": null,
              "lastModifyTime": 1525922470000,
              "deleted": 0,
              "name": "sdfsdf",
              "k8sName": "cf-e5b411ef",
              "description": "",
              "content": "sdfsdf",
              "configGroupOid": 1,
              "serviceName": null,
              "tenantId": "7660e12a-15c7-481b-a2a7-7033eb35a192",
              "namespace": "namespace-68df72d6"
            },
            {
              "oid": 1,
              "createUser": "ac356329-9395-4f5b-970e-7ab3173a2bdc",
              "createTime": 1525921845000,
              "lastModifyUser": null,
              "lastModifyTime": 1525921845000,
              "deleted": 0,
              "name": "sdfsdf",
              "k8sName": "cf-2bd119c6",
              "description": "",
              "content": "sdfsdf",
              "configGroupOid": 1,
              "serviceName": null,
              "tenantId": "7660e12a-15c7-481b-a2a7-7033eb35a192",
              "namespace": "namespace-68df72d6"
            }
          ]
        }
      }
    };

    $scope.configList = [{
      "oid": 1,
      "createUser": "ac356329-9395-4f5b-970e-7ab3173a2bdc",
      "createTime": 1525921840000,
      "lastModifyUser": "ac356329-9395-4f5b-970e-7ab3173a2bdc",
      "lastModifyTime": 1525921840000,
      "deleted": 0,
      "name": "78120bb1-380d-44a0-b9fb-5b41a8a8af8b",
      "displayName": "sssd",
      "description": "",
      "blueprintOid": null,
      "blueprintVersionOid": null,
      "tenantId": "7660e12a-15c7-481b-a2a7-7033eb35a192",
      "namespace": "namespace-68df72d6",
      "appName": null,
      "filesCount": null,
      "configFileList": [
        {
          "oid": 2,
          "createUser": "ac356329-9395-4f5b-970e-7ab3173a2bdc",
          "createTime": 1525922470000,
          "lastModifyUser": null,
          "lastModifyTime": 1525922470000,
          "deleted": 0,
          "name": "sdfsdf",
          "k8sName": "cf-e5b411ef",
          "description": "",
          "content": "sdfsdf",
          "configGroupOid": 1,
          "serviceName": null,
          "tenantId": "7660e12a-15c7-481b-a2a7-7033eb35a192",
          "namespace": "namespace-68df72d6"
        },
        {
          "oid": 1,
          "createUser": "ac356329-9395-4f5b-970e-7ab3173a2bdc",
          "createTime": 1525921845000,
          "lastModifyUser": null,
          "lastModifyTime": 1525921845000,
          "deleted": 0,
          "name": "sdfsdf",
          "k8sName": "cf-2bd119c6",
          "description": "",
          "content": "sdfsdf",
          "configGroupOid": 1,
          "serviceName": null,
          "tenantId": "7660e12a-15c7-481b-a2a7-7033eb35a192",
          "namespace": "namespace-68df72d6"
        }
      ]
    }];

    $scope.selectConfigGroup = {
      'state': 'relate',
      'config': null
    };

    if (deployParamsObj) {
      angular.forEach($scope.configList, function (config, index) {
        if (JSON.stringify(config) == JSON.stringify(deployParamsObj.selectConfigGroup.config)) {
          $scope.selectConfigGroup.config = config;
        } else {
          console.log(false);
        }
      });

      //$scope.selectConfigGroup = angular.copy(deployParamsObj.selectConfigGroup);
    }

    var selected = {
      "name": "ss",
      "age": 123
    };

    $scope.testList = [{
      'name': 'ss',
      'age': 123
    }];

    /*$scope.selected = {
      'name': null,
      'age': null
    };*/

    if (selected) {
      $scope.selected = $scope.testList[0];
      //$scope.selected = selected;
    }

    $scope.test1List = [1,2,3,4];

    $scope.ss = 1;
  })
  .directive('textFold', function() {
    return {
      restrict: 'EA',
      template: '<p style="font-size: 14px; border-left:5px solid #dddddd; padding: 15px; padding-bottom: 10px; margin-bottom: 15px; margin-top: 15px;">' + '<span id="textfold" style="display:block; overflow:hidden;">{{designer.des}}</span>' + '<br />' + '<span style="color: #1bb7ac; position: relative; bottom: 10px;" ng-click="more(this)">{{isMore}}</span>' + '</p>',
      link: function(scope, element, attrs) {
        var height;
        var maxheight;
        function textfold() {
          height = angular.element('#textfold').height();
          maxheight = angular.element('#textfold').height();
        }
        scope.$watch('designer.des', function(data) {
          if (data) {
            textfold();
          }
        });
        var isExtend = true;
        scope.isMore = "折叠";
        scope.more = function() {
          var minheight = 23;
          if (isExtend) {
            if (height >= minheight) {
              document.getElementById('textfold').style.height = height + "px";
              setTimeout(function() {
                scope.more();
              }, 1);
              height -= 10;
            } else {
              scope.isMore = "查看更多...";
              //scope.$apply();
              isExtend = !isExtend;
              height += 10;
            }
          } else {
            if (height <= maxheight) {
              document.getElementById('textfold').style.height = height + "px";
              setTimeout(function() {
                scope.more();
              }, 1);
              height += 10;
            } else {
              scope.isMore = "折叠";
              //scope.$apply();
              isExtend = !isExtend;
              height -= 10;
            }
          }
        }
      }
    }
  })
  .directive('expander',function(){
    return {
      restrict:'AE',
      replace:true,
      transclude:true,
      scope:{
        title:'=expanderTitle'//这里绑定的是expander-title属性，而且经测试非要转成这样的小驼峰写法才可
        //=传递的是指令标签内属性expander-title值'title'的值'点击展开'($scope.title = '点击展开';)
      },
      template:'<div>'
      +'<div class="title" ng-click="toggle()">{{title}}</div>'
      +'<div class="body" ng-show="showme" ng-transclude></div>'
      +'</div>',
      link:function(scope,element,attrs){
        scope.showme = false;
        scope.toggle = function(){//每次点击调用此方法都让scope.showme值反转1次
          scope.showme = !scope.showme;
        }
      }
    }
  });