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
    });
	
});

//Memories page controller 
app.controller('memoriesController', function($scope, $http) {
	$scope.msg = "I love London";
	$scope.count = 0;
	$scope.memoryId = 0;
    $http.get("./php/memories.php").then(function (response) {
		
		$scope.memories = response.data.records;
		//console.log($scope.memories);
		});
		
	//Setting clicked memory id
    $scope.setId = function(memoryId) {
               
			   $scope.memoryId=memoryId;
			 
            }
			
	//Editing clicked memory id
	$scope.editMemory = function(memoryTitle) {
              
            }
	//Deleting clicked memory id	
	$scope.deleteMemory = function(memoryTitle) {
		    
                if (confirm("Do you really want to delete memory:  "+ memoryTitle)) 
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
