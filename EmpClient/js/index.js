
'use strict';
var empApp = angular.module('empApp', ['ngRoute']);

empApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
              
        $routeProvider.when('/',{
             templateUrl : 'login/login.html'
        }).
         when('/signup',{
            
             templateUrl : 'login/signup.html',
           //   controller  : 'xyz'
        }).when('/employee',{
            
            templateUrl : 'employee/employee.html',
                controller  : 'empController'
        })

         $locationProvider.html5Mode(true);
        
}]);


       
              
