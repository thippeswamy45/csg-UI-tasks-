$("#messages").click(function(){
	$("#message_nav_modal").modal('show');
});

$(".image_dave").tooltip();

$("#message_nav_header1").click(function(){	
	$("#message_nav_modal").modal('hide');	
	$("#message_inner_modal").modal('show');
	
});
$("#message_inner_modal .close_modal").click('close',function(){
		$("#message_nav_modal").modal('show');
});


	