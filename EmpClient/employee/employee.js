              
 empApp.controller("empController",['$scope','$routeParams','$rootScope', function($scope,$routeParams,$rootScope) {
     
console.info("Entered Into d "+$routeParams);
     
   
   var empData = angular.fromJson($rootScope.empData2);
     $scope.empData =  empData;
     $scope.empFNanme = $scope.empData.firstName;
     $scope.empLName = $scope.empData.lastName;
     console.info(" The First name "+$scope.empData.firstName);
    
     console.info("Exit Into "+$scope.empData);
 
 }]);    