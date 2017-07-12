$(document).ready(function (e) {
	
//Fetching profile image
//Setting profile image after refreshing the epage
setTimeout(function(){
$.ajax({
  type: "POST",
  url: "php/editprofilefetchprofileimage.php",
  data: "",
}).done(function( msg ) {
    //window.alert(msg);
	document.getElementById("profile_image").src="php/"+msg;
	document.getElementById("clock").style.backgroundImage = 'url(php/' + msg + ')';
});
}, 300);

$("#saveProfileImageForm").on('submit',(function(e) {
//window.alert("Profile image submitting code");
e.preventDefault();

$.ajax({
url: "php/editprofileuploadprofileimage.php", // Url to which the request is send
type: "POST",             // Type of request to be send, called as method
data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
console.log(data);
//window.alert("Profile image edited successfully");

//Fetching profile image
//Setting profile image after uploading the image
$.ajax({
  type: "POST",
  url: "php/editprofilefetchprofileimage.php",
  data: "",
}).done(function( msg ) {
	//window.alert("Setting the profile image");
	document.getElementById("profile_image").src="php/"+msg;
	document.getElementById("clock").style.backgroundImage = 'url(php/' + msg + ')';
	window.alert("Profile edited Successfully ");
	location.reload(true);
});

}

});

}));


setTimeout(function(){
$(".smallBox_center").css("height", $(".editProfile_smallbox_left").height()+ 200);
$(".footer").css("margin-top", $(".editProfile_smallbox_left").height()+ 200);
}, 100);




});



//document.getElementById('clock').style.backgroundImage = "url(" + C:\Users\vikas\Desktop\Images\images.jpg + ")";
document.getElementById('getval').addEventListener('change', readURL, true);
function readURL()
{
    var file = document.getElementById("getval").files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('clock').style.backgroundImage = "url(" + reader.result + ")";		
    }
    if(file){
        reader.readAsDataURL(file);
    }else{
    }
}

function editPassword()
{
	//window.alert("Edit Password");
	$(".editPassword").show();
}

function cancelPassword()
{
	//window.alert("Cancel Password");
	$(".editPassword").hide(); 
	var password="unchanged";
}
