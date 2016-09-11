(function () {
    'use strict';
    var commentService = angular.module('service', []);
    commentService.factory('commentService', ['$http', function ($http) {
        return {
            getAllComments: function () {
               return  $http.get('/api/comments');
            },
            saveComment:function(obj){
                return $http.post('/api/comments',obj);
            }
        };
    }]);

})();

