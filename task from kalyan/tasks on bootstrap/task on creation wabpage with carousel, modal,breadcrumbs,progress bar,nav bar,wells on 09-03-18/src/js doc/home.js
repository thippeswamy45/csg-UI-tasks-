$(".read_more").click(function(){
	var heading=$(this).parent().parent().find(".col_heading").text();
	$("#message_heading").text(heading)
	$("#message_inner_modal").modal('show');
});







	