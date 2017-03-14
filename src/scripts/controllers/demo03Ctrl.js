'use strict';

angular.module('myApp')
.controller('demo03Ctrl', ['$scope', function ($scope) {
    $scope.title = '点击展开';
    //这里的title是expander-title='title'中的'title'值部分的赋值；而上面指令定义中的scope{title:是template:模板中的{{title}}，也就是说在指令中，title:'=expanderTitle'这句话的意思是将属性expander-title的值'title'(由控制器赋值)绑定独立作用域也就是指令内的作用域——模板中的{{title}}之上，让{{title}}和'title'同值。记住：独立作用域三大绑定策略的作用就是绑定同一个标签内的属性名传值.不同的是：@符传递是属性值字串；=号传递的是属性值的值(控制器赋予)；&符传递是的属性调用的方法()
    $scope.text = '这里是展开后的内容';
}])
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