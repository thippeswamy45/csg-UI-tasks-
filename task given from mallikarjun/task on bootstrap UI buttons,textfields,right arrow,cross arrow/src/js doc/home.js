var status="success";


$("#submit").click(function(){
	
	if(status=="success")
	{
		$(".success").show();
		$(".failure").hide();
		status="failure";
	}
	else
	{
		$(".failure").show();	
		$(".success").hide();
		status="success";
	}
});