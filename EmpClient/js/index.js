$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});


var indexApp = angular.module("indexApp", []); 
indexApp.controller("indexController", function($scope,$http) {
    console.error("Moduleinitialized ");
    $scope.submitForm = function(formName) {
        alert(formName);
        if (formName ==="signIn") {
             alert("Form Name is "+formName);
        } else if (formName ==="signUp") {
             alert("Form name is not "+formName);
        }
        
        $http.get("http://localhost:8180/SpringMVC/employee/byId/101").then(function(response){
             $scope.myData = response.data;
            
            alert($scope.myData);
        });
    
}
                           });