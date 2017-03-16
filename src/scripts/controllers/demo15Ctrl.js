'use strict';

angular.module('myApp')
.directive('targetItem', function() {
  return {
    restrict: 'A',
    replace: true,
    template: '<div class="destination-area"'+
    '> + </div>',
    link: function(scope, elem, attrs) {
      var dragenter = function(event) {
        console.log('dir-enter');
        event.target.style.border = '2px dashed #000';
      };

      var dragleave = function(event) {
        console.log('dir-leave');
        event.target.style.border = '1px dashed #ccc';
      };

      var dragover = function(event) {
        console.log('dir-over');
        event.preventDefault();
      };

      var drop = function(drop) {
        event.target.style.border = 'none';
        event.target.style.lineHeight = '0px';
        event.target.style.height = 'auto';
        event.target.style.width = 'auto';
        event.target.style.textAlign = 'left';
        event.target.innerHTML = '<div class="des-area-item" ondragenter="dragenter(event)" ondragover="dragover(event)" ondragleave="dragleave(event)" ondrop="drop(event)"> + </div>'+
          '<div class="input-item">'+scope.elemNameSuffix+'</div>'+
          '<div class="des-area-indent" ondragenter="dragenter(event)" ondragover="dragover(event)" ondragleave="dragleave(event)" ondrop="drop(event)"> + </div>'+
          '<div class="input-item">'+scope.elemNamePrefix+'</div>'+
          '<div class="des-area-item" ondragenter="dragenter(event)" ondragover="dragover(event)" ondragleave="dragleave(event)" ondrop="drop(event)"> + </div>';
        event.target.ondragenter = null;
        event.target.ondragover = null;
        event.target.ondragleave = null;
        event.target.ondrop = null;
      };
      elem.bind('dragenter', dragenter)
        .bind('dragleave', dragleave)
        .bind('dragover', dragover)
        .bind('drop', drop)
    }
  }
})
.directive('dragItem', function() {
  return {
    restrict: 'A',
    replace: true,
    template: '<div class="drag-item" draggable="true">'+
    '<div> + </div>'+
    '<input type="text" placeholder="<?>" class="input-item" ng-model="elemNamePrefix">'+
    '<div> + </div>'+
    '<input type="text" placeholder="</?>" class="input-item" ng-model="elemNameSuffix" disabled="disabled">'+
    '<div> + </div>'+
    '</div>',
    link: function(scope, elem, attrs) {
      var dragstart = function(event) {
        console.log('dir-start');
      };

      var dragend = function(event) {
        console.log('dir-end');
      };

      elem.bind('dragstart', dragstart)
        .bind('dragend', dragend);
      scope.$watch('elemNamePrefix', function(newVal, oldVal, scope) {
        if (newVal != oldVal) {
          console.log(333);
          scope.elemNameSuffix = newVal.replace('<','</');
        }
      })
    }
  }
});