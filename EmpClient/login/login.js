              
 empApp.controller("loginController", function($scope,$http,$location,$window,$routeParams,$rootScope) {
     
    
    $scope.submitForm = function() {
        
        
        $http.get("http://localhost:8180/SpringMVC/employee/byId/101").then(function(response){
             $rootScope.empData2 =  response.data ;
             $location.path('/employee');
           
           
         
        });
    
}

 });    