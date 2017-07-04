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
	$scope.msg = "I love London";
	$scope.count = 0;
	$scope.memoryId = 0;
	$scope.memoryTitle="";
    $scope.memoryData="";
    $http.get("./php/memories.php").then(function (response) {
		
		$scope.memories = response.data.records;
		//console.log($scope.memories);
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
					 window.alert(error);
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
app.controller('editProfileController', function($scope, $http) {
	$scope.msg = "I love London";
	//window.alert("Profile");
	//console.log("profile");
    $http.get("./php/editprofilefetch.php").then(function (response) {
		
		$scope.profile= response.data.records;
		console.log($scope.profile);
		});
		
	 $scope.saveProfile = function() {

	           document.getElementById('saveProfileImage').click();
			   //document.getElementById('saveProfileImage').click();
			   //Here only the first submitted is working fine
			   //document.getElementById('saveEditProfileChanges').click();
			 
               }
	
		
});



(function($) {
$(document).ready(function(){
$.ajax({
  type: "POST",
  url: "php/home.php",
  data: "",
}).done(function( msg ) {
  	$("#username").text("Hello"+" "+ msg);
});


});
})(jQuery);

function editProfile()
{
//window.alert("Clicked Edit");
window.location = "#!editprofile";
}
	

function saveImage()
{
	window.alert("Save Image Clicked");
      $.ajax({
               url:'php/uploadprofileimage.php',
               type:'post',
               data:$('#saveProfileImage').serialize(),
               success:function(response){
              //whatever you wanna do after the form is successfully submitted
	                     console.log(response.data);
                                  }
              });
}
function saveOtherProfile()
{
	//window.alert("Save Other Proile Clicked");
}
