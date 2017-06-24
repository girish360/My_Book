(function($) {

    $(document).ready(function(){
	setTimeout(function(){ 
	$(".smallBox_center").css("height", $(".newmemory-memoryfield").height()+ 200);
    $(".footer").css("margin-top", $(".newmemory-memoryfield").height()+ 200);
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
	$(".newmemory-date").text("Date:"+" "+ time);
    });
    })(jQuery);

$('#myform').submit(function(){
var memorytitle = $('#memorytitle').val();
var memorydata = $('#memorydata').val();
var createddate = time;
$.ajax({
  type: "POST",
  async: false,
  url: "php/newmemory.php",
  data: "memory_title="+memorytitle+"&memory_data="+memorydata+"&created_date="+createddate,
}).done(function( msg ) {
	if (msg=="Success")
	{
      window.alert( "Memory saved:"+" " + memorytitle);
    }
  
});

});