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
}