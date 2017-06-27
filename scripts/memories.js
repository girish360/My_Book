
(function($) {

    $(document).ready(function(){
		

		
	if (window.location.href.indexOf('reload')==-1) {
         window.location.replace(window.location.href+'?reload');
		 location.reload();
    }
    $(".memorydata").hide();
    $(document).on("click", ".memoryabstract", function() {
		 var elem =  $(this).children('.memorydata') ;
		 console.log("before:"+ (elem.css('display')));
		 
	     $(this).children('.memorydata').slideToggle();
		 setTimeout(function(){
		 console.log("after:"+ (elem.css('display')));
		 if(elem.css('display') == 'block')
		 {
		 console.log("shown now");
		 //console.log("height before: " + ((".smallBox_center").css("height")));
		 $(".smallBox_center").css("height", $(".memories-allmemories").height()+ 200);
		 //console.log("height after: " + $(".smallBox_center").attr("height"));
		 $(".footer").css("margin-top", $(".memories-allmemories").height()+ 200);
		 }
		 else
		 {
		  console.log("hidden now");
		  //console.log("height before: " + $(".smallBox_center").attr("height"));
		  $(".smallBox_center").css("height", $(".memories-allmemories").height()+ 200);
		  //console.log("height after: " + $(".smallBox_center").attr("height"));
		  $(".footer").css("margin-top", $(".memories-allmemories").height()+ 200);
		 }},300);
		 
    });
	$(document).on("click", ".memoryabstract .memorydata", function(e) {
         e.stopPropagation();
		 //window.alert("stopped propagating to child");
	});

	$(document).on("click", ".memoryabstract .memoryoptions", function(e) {
         e.stopPropagation();
		// window.alert("stopped propagating to child");
	});

	setTimeout(function(){ 
	$(".smallBox_center").css("height", $(".memories-allmemories").height()+ 200);
    $(".footer").css("margin-top", $(".memories-allmemories").height()+ 200);
	console.log($(".memories-allmemories").height());
	console.log($(".smallBox_center").height());
	}, 200);
	
	
    });
    })(jQuery);
	

$('.creatememorybutton').click(function() {
   window.location = "#!newmemory";
  
});


