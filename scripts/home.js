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
    $http.get("http://localhost/My_Book/web_pages/php/memories.php").then(function (response) {
		
		$scope.memories = response.data.records;
		console.log($scope.memories);
		});
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
