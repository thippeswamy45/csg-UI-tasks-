$(document).ready(function(){
	
	var json={"Result":{"UserDetails":[{"name":"Robert","DOB":"02/05/2018","languages":["HTML-5","angular js","javascript"],"ratings":["3","4","2"],"Email":"robert@gmail.com"},{"name":"Komal","DOB":"02/11/2018","languages":["css-3","javascript"],"ratings":["5","1"],"Email":"komal@gmail.com"},{"name":"Ranjan","DOB":"01/08/2018","languages":["angular js","HTML-5"],"ratings":["1","2"],"Email":"ranjan@gmail.com"}]}};
	var row_count=json.Result.UserDetails.length;
	
	var i=0;
	for(i;i<row_count;i++)
	{								
		var name=json.Result.UserDetails[i].name;
		var dob=json.Result.UserDetails[i].DOB;
		var email=json.Result.UserDetails[i].Email;
		var ratings=json.Result.UserDetails[i].ratings;
		var languages=json.Result.UserDetails[i].languages;
		var string_accordion="<h1 class='name'>"+name+"</h1><div id='div_accordion"+i+"'><input type='button' class='edit' value='edit'>"+		
		"<p>dob:<span class='dob'>"+dob+"</span></p><p>email:<span class='email'>"+email+"</span></p><p class='rating'>ratings:</p>"+
		"<p class='language'>languages:</p></div>";
		$("#accordion").append(string_accordion);
		var j=0;
		for(j in languages)
		{
			$("#div_accordion"+i).find(".language").append("<span class='languages_span'>"+languages[j]+"</span>,");
			$("#div_accordion"+i).find(".rating").append("<span class='ratings_span'>"+ratings[j]+"</span>,");
			
		}
	}
	$( "#accordion" ).accordion();
	
	$('body').on('click','.edit',function(){
		
		$("#edit_modal").modal('show');
		
		
		
	});
	$("#submit").click(function(){
		
		
	});
	$("body").on("click",".addRow",function(){
		
		
		
	});
	$("body").on("click",".deleteRow",function(){
		
	});
});





















































/*

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
*/

	