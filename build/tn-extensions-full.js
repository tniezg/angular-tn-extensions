"use strict";angular.module("tn.extensions",["tn.extensions.templates","tn.extensions.actionPopup","tn.extensions.directClick","tn.extensions.localStorage","tn.extensions.persistentConfig"]),angular.module("tn.extensions.actionPopup",[]).directive("tnActionPopup",["$parse",function(){return{replace:!0,transclude:!0,templateUrl:"template/actionPopup/actionPopupTemplate.html",scope:{visible:"=tnActionPopup"},controller:function(a,b){function c(b){a.$apply(function(){$(b.target).is(d)&&a.cancel()})}{var d=angular.element(b);angular.element(".action-popup-window-content")}a.cancel=function(){a.visible=!1},d.on("click",c),a.$watch("visible",function(a){a?d.addClass("popup-visible"):d.removeClass("popup-visible")}),a.$on("$destroy",function(){d.off("click",c)})}}}]),angular.module("tn.extensions.directClick",[]).directive("tnDirectClick",["$parse",function(a){return{controller:function(b,c,d){c.on("click",function(c){b.$apply(function(){c.currentTarget===c.target&&a(d.tnDirectClick)(b)})})}}}]),angular.module("tn.extensions.directClick",[]).directive("tnDirectClick",["$timeout","$parse",function(a,b){return{link:function(c,d,e){var f=b(e.focusMe);c.$watch(f,function(b){console.log("value=",b),b===!0&&a(function(){d[0].focus()})}),d.bind("blur",function(){console.log("blur"),c.$apply(f.assign(c,!1))})}}}]),angular.module("tn.extensions.actionPopup",[]).directive("tnImageOnLoad",["$parse",function(a){return{restrict:"A",link:function(b,c,d){b.$watch(function(){return d.imageOnLoadSrc},function(e){var f;"undefined"!=typeof e&&(f=new Image,f.onload=function(){b.$apply(function(){f.height,f.width;a(d.imageOnLoad)(b),c.attr("src",e)})},f.src=e)})}}}]),angular.module("tn.extensions.persistentConfig",[]).factory("tnPersistentConfig",["$rootScope","tnLocalStorage",function(a,b){var c="globalSettings",d=b.get(c),e=d?JSON.parse(d):{};return a.$watch(function(){return e},function(){b.put(c,JSON.stringify(e))},!0),e}]),angular.module("tn.extensions.localStorage",[]).factory("tnLocalStorage",[function(){function a(a,b){d[a]=b}function b(a){return d[a]}function c(a){var b=void 0;return b=d[a],d.removeItem(a),b}var d=window.localStorage;return{put:a,get:b,remove:c}}]),angular.module("tn.extensions.templates",["template/actionPopup/actionPopupTemplate.html"]),angular.module("template/actionPopup/actionPopupTemplate.html",[]).run(["$templateCache",function(a){a.put("template/actionPopup/actionPopupTemplate.html",'<div class="tn-action-popup-window">\n    <div class="tn-action-popup-window-content" ng-transclude></div>\n</div>')}]);
//# sourceMappingURL=tn-extensions-full.js.map