(function () {
    'use strict';
    var app=angular.module('commentApp', ['ngRoute','angular-md5', 'service', 'MainCtrl'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/mainView.html',
                    controller: 'mainController',
                    controllerAs: 'main'
                })


        }]);
}());
