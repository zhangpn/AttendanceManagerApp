/**
 * Created by dana on 2/17/15.
 */
var app = angular.module("AttendanceManagerApp", [
    'ngRoute'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html'
            })
            .when('/about', {
                templateUrl: 'views/about.html'
            })
            .otherwise({
                redirectTo: 'home'
            })
    }
]);