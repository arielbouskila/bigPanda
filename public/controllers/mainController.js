(function () {
    'use strict';
    angular.module('MainCtrl', ['service']).controller('mainController', ['$scope','md5', 'commentService', function ($scope,md5, commentService) {


        var vm = this;
        vm.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

        vm.save = save;
        function save(){
            var obj={};
            obj.email = vm.email;
            obj.comment = vm.comment;
            commentService.saveComment(obj).then(function(response){
                //console.log(response);
            init();
           },function(err){
               //console.log("error");
           });
        }
        function init() {
           
           vm.email="";
           vm.comment="";
            commentService.getAllComments().then(function (result) {
                var items = result.data;
                items.forEach(function(element) {
                   var hash =  md5.createHash(element.email || '');
                    element.url = "http://www.gravatar.com/avatar/"+hash+"?s=50";
                }, this);
               
              vm.comments = items;
            
               
            });
        }

        init();
        
    }]);

})();