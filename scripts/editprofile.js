$(document).ready(function (e) {
$("#saveProfileImageForm").on('submit',(function(e) {
window.alert("Profile image submitting code");
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
window.alert("Profile image edited successfully");
}
});

}));
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
