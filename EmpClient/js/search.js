var app = angular.module("myApp",[]);
console.info('Module Intialized');
app.controller("myCtrl",function($scope,$http){
    $scope.filename="hello world";
    $scope.key="EnterKey";
    $scope.value="Value";
     
   
    var config = {headers:  {
        'Authorization': 'TDJ8ibDk7430YVI5ClrN29MoAEXyi4/Bk0VnpLJaLTQ=',
        'Accept': 'application/json',
       'X-API-Version': '4.5.0',
        'apptype': 'ipad',
         'locale': 'en_XX'
    }
};
    console.info('Config Creted');
   $scope.fileNames =["Tripati","Balaji","Papina"];
 $http.get("https://mobileapppreprodstg.emirates.com/EmiratesAppProxy/restful/OpenServices/retrieveAllContent.json",
              config).then(function(response){
      //  console.error('getresponse');
      $scope.myData = response.data;
     var files = new Array();
     for (var i =  0 ; i<$scope.myData.length;i++) {
         console.info('printing '+$scope.myData[i].contentName);
         if($scope.myData[i].contentName.includes("RESOURCE_BUNDLE")) {
             files.push($scope.myData[i].contentName);
         } else {
             console.log('not a math');
         }
         
         
     }
     $scope.fileList = files;
  }); 
   
    $scope.disableDiv = function(id) {
      if ($scope.choice == id) {
          $scope.choice ="";
      } else {
          $scope.choice = id;
      }
        
      //  alert( $scope.choice);
    }
});