
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "memories.html",
		controller : "memoriesController"
    })
	.when("/memories", {
        templateUrl : "memories.html",
		controller : "memoriesController"
    })
    .when("/inspirationalstories", {
        templateUrl : "inspirationalstories.html"
    })
    .when("/images", {
        templateUrl : "images.html"
    })
    .when("/other", {
        templateUrl : "other.html"
    })
	.when("/links", {
        templateUrl : "other.html"
    })
	.when("/quotes", {
        templateUrl : "other.html"
    })
	.when("/newmemory", {
        templateUrl : "newmemory.html"
    })
	.when("/editmemory", {
        templateUrl : "editmemory.html"
    })
	.when("/editprofile", {
        templateUrl : "editprofile.html",
		controller : "editProfileController"
    });
	
});




//Memories page controller 
app.controller('memoriesController', function($scope, $http) {
	//$scope.msg = "I love London";
	$scope.count = 0;
	$scope.memoryId = 0;
	$scope.memoryTitle="";
    $scope.memoryData="";
    $http.get("./php/memories.php").then(function (response) {
		
		$scope.memories = response.data.records;
		console.log($scope.memories);
		});
		
	//Setting "clicked memory id, title and data" 
    $scope.setId = function(memoryId,memoryTitle,memoryData) {
               
			   $scope.memoryId=memoryId;
			   $scope.memoryTitle=memoryTitle;
			   $scope.memoryData=memoryData;
			 
            }
			
	//Redirecting to editmemory
	$scope.editMemory = function(memoryTitle) {
		       window.location = "#!editmemory";
			   setTimeout(function(){ 
               sessionStorage.editMemoryId = $scope.memoryId ;
               sessionStorage.editMemoryTitle = $scope.memoryTitle ;	
               sessionStorage.editMemoryData = $scope.memoryData ;			   
               console.log(sessionStorage.editMemoryId);
                 },100);			   
            }
	//Confirm Edit memory code is implemented in "editmemory.js" using editMemoryId session variable
	
	//Deleting "clicked memory"	
	$scope.deleteMemory = function(memoryTitle) {
		    
                if (confirm("Do you really want to delete this memory:  "+ memoryTitle)) 
				{
                  //Delete
				  //window.alert("Waiting for server : " + memoryTitle);
				 setTimeout(function(){ 
				 var request = $http({
					  method: 'POST',
					  url: './php/deleteMemory.php',
					  data:{memory_id : $scope.memoryId },
					  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
				  })
				 request.then(function(response){
					 //window.alert("sent id");
					 //console.log(response.data);
					 if (response.data == "success")
					 {
					   console.log("Successfully deleted memory:  "+ memoryTitle);
					   location.reload();
					 }
					 
				 },function(error){
					 //window.alert(error);
				 });
				  },500);
				  
                } 
				else 
				{
                  // Don't delete!
				}
				//console.log($scope.memoryId);
            }
			
		
	
});


//For EditProfilePage
app.controller('editProfileController', function($scope, $http) 
{
	
	$scope.old_password = "";
	$scope.new_password = "";
	//To get data from database and set in respective field
    $http.get("./php/editprofilefetch.php").then(function (response) 
	   {
		
		$scope.profile= response.data.records;
		console.log($scope.profile);
		
		$scope.firstname=$scope.profile[0].firstname;
		$scope.lastname=$scope.profile[0].lastname;
		$scope.email=$scope.profile[0].email;
		
		
		});
		
	 //To save edited data
	 $scope.formSubmit= function() 
	   {
		   
		   
		       //Write Angular http.post method to send all form data "except profile image"
			   
	              // To submitt profile image we click submitt button of the form containing profile image.
			         //Implemmentation written in editprofile.js in jquery ajax	
              // angular.element("#saveProfileImageForm").triggerHandler("submit");
			  
			   document.getElementById("saveProfileImageSubmitButton").click();
			   
			   //window.alert("Profile Other information submitting code");
         
                    var request = $http({
					  method: 'POST',
					  url: './php/editprofilesave.php',
					  data:{firstname : $scope.firstname, lastname : $scope.lastname,old_password : $scope.old_password,new_password : $scope.new_password },
					  headers: { 'Content-Type': 'application/json' }
				        })
				     request.then(function(response){
					     if (response.data == "success")
                         {
				            console.log(response.data);
							window.alert("Profile edited Successfully ");					

					     }
						 else if (response.data =="incorrect password")
						 {
						   console.log(response.data);
						   window.alert("Incorrect Old password Entered  ");
						   
						 }
					 
				      },function(error){
					 window.alert("Error "+error);
					 
				      } );
						  
                
			    
        }
	
		
});



(function($) {
$(document).ready(function(){

//Fetching username	
$.ajax({
  type: "POST",
  url: "php/home.php",
  data: "",
}).done(function( msg ) {
  	$("#username").text("Hello"+" "+ msg);
});

//Fetching profile image
//Setting profile image after page load every time.
setTimeout(function(){
$.ajax({
  type: "POST",
  url: "php/editprofilefetchprofileimage.php",
  data: "",
}).done(function( msg ) {
	//window.alert("Setting the profile image");
	document.getElementById("profile_image").src="php/"+msg;
	//document.getElementById("clock").style.backgroundImage = 'url(php/' + msg + ')';
});

}, 100);

});
})(jQuery);

function editProfile()
{
//window.alert("Clicked Edit");
window.location = "#!editprofile";
}
	
