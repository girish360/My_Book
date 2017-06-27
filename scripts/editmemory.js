(function($) {

    $(document).ready(function(){
	setTimeout(function(){ 
	$(".smallBox_center").css("height", $(".editmemory-memoryfield").height()+ 200);
    $(".footer").css("margin-top", $(".editmemory-memoryfield").height()+ 200);
	$("#memorytitle").val(sessionStorage.editMemoryTitle);		
	$("#memorydata").text(sessionStorage.editMemoryData);
	}, 100);		
		
	
    });
    })(jQuery);


$('.cancelmemorybutton').click(function() {
   window.location = "#/!";
});


function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}
Date.prototype.toMysqlFormat = function() {
    return this.getFullYear() + "-" + twoDigits(1 + this.getMonth()) + "-" + twoDigits(this.getDate()) + " " + twoDigits(this.getHours()) + ":" + twoDigits(this.getMinutes()) + ":" + twoDigits(this.getSeconds());
};
var time = new Date().toMysqlFormat();
console.log(time);
(function($) {
    $(document).ready(function(){
	console.log("inside"+" " +time);
	$(".editmemory-date").text("Modified-Date:"+" "+ time);
    });
    })(jQuery);


$('#myform').submit(function(){
var memorytitle = $('#memorytitle').val();
var memorydata = $('#memorydata').val();
var modifieddate = time;
var memoryid = sessionStorage.editMemoryId;


$.ajax({
  type: "POST",
  async: false,
  url: "php/editmemory.php",
  data: "memory_title="+memorytitle+"&memory_data="+memorydata+"&modified_date="+modifieddate+"&memory_id="+memoryid,
}).done(function( msg ) {
	console.log(msg);
	if (msg == "Success")
	{
      window.alert( "Edited Memory saved:"+" " + memorytitle);
	  window.location = "#/!";
    }
}).fail(function (jqXHR, textStatus) {
    console.log("failed");
});

});
