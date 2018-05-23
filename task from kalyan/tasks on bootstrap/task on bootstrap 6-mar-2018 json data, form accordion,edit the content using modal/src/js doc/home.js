$(document).ready(function(){
	var alert_string="! this field is required";
	var elementRef={};
	var extra_row=0;
	var json={"Result":{"UserDetails":[{"name":"Robert","DOB":"02/05/2018","languages":["HTML-5","angular js","javascript"],"ratings":["3","4","2"],"Email":"robert@gmail.com"},{"name":"Komal","DOB":"02/11/2018","languages":["css-3","javascript"],"ratings":["5","1"],"Email":"komal@gmail.com"},{"name":"Ranjan","DOB":"01/08/2018","languages":["angular js","HTML-5"],"ratings":["1","2"],"Email":"ranjan@gmail.com"}]}};
	var row_count=json.Result.UserDetails.length;
	$("form").hide();
	var i=0;
	for(i;i<row_count;i++)
	{								
		var name=json.Result.UserDetails[i].name;
		var dob=json.Result.UserDetails[i].DOB;
		var email=json.Result.UserDetails[i].Email;
		var ratings=json.Result.UserDetails[i].ratings;
		var languages=json.Result.UserDetails[i].languages;
		var string_accordion="<h1 class='name'>"+name+"</h1><div id='div_accordion"+i+"'><input type='button' class='edit btn btn-primary' value='edit'>"+		
		"<p><label class='control-label label_user'>dob:</label><span class='dob form-control-static'>"+dob+"</span></p><p><label class='control-label label_user'>email:</label><span class='email form-control-static'>"+email+"</span></p><p class='rating' ><label class='control-label label_user'>ratings:</label></p>"+
		"<p class='language'><label class='control-label label_user'>Languages:</label></p></div>";
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
		
		$("#alert").hide();
	
		var language=[];
		var rating=[];
		elementRef=this;
		$("form").show();
	
		$("#edit_modal").modal('show');
		$("#table_fieldset").empty();
		$( "#datepicker").datepicker({maxDate:0});
		
		var date=$(elementRef).parent().find(".dob").text();
		var email=$(elementRef).parent().find(".email").text();
		$( "#datepicker" ).datepicker("setDate",date);
		$( "#text_email" ).val(email);
		var id_div=$(elementRef).parent().attr("id");
		
		$("#"+id_div+" .languages_span").each(function(index){
			language[index]=$(this).text();
			
		});
		
		$("#"+id_div+" .ratings_span").each(function(index){
			rating[index]=$(this).text();
			
		});
		
		for(k in language)
		{
			var string_table="<fieldset class='fieldset1'><div id='controlgroup"+k+"'><div class='form-group language_dropdown'><label class='control-label'>language</label><select class='languages'>"+
			"<option value='select one'>select one</option><option value='HTML-5'>HTML-5</option><option value='angular js'>angular js</option>"+
			"<option value='css-3'>css-3</option><option value='javascript'>javascript</option></select></div><p class='alert_text' style='margin:0px' ></p>"+			
			"<div class='rating_slider'><p><label class='labels label_user' >Rating:</label><span class='rating_text'></span></p>"+
			"<p class='slider'></div></p></div></fieldset>";
			$("#table_fieldset").append(string_table);
			
			//$(".edit_modal_body").append(string_table);
			
			$("#controlgroup"+k).find(".languages").val(language[k]);
			$("#controlgroup"+k).find(".rating_text").text(rating[k]);
			$("#controlgroup"+k).find(".slider").slider({
				min:0,
				max:5,
				value:rating[k],
				stop: function(event,user_input ){									
					var slidevalue=user_input.value;				
					$(this).parent().find(".rating_text").text(slidevalue);
				}
			});
			if(k == 0) {
				$("#controlgroup"+k).append("<input type='button' class='addRow btn-default right' value='add row'>");
			} else {
				$("#controlgroup"+k).append("<button type='button' class='deleteRow close'><span>&times;</span></button>");
			}
			
		}
		
	});
	$("#submit").click(function(){
		
		var required_flag=true;
		$(".alert_text").text("");
		if($("#datepicker").val()==="")
		{
			$("#alert_dob").text(alert_string);
			required_flag=false;
		}
		if($("#text_email").val()==="")
		{
			$("#alert_email").text(alert_string);
			required_flag=false;
		}
		else
		{
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (!filter.test($("#text_email").val())) 
			{
				$("#alert_email").text(alert_string);
				required_flag=false;
			}
		}
		$(".languages").each(function(){
		if($(this).val()==="select one")
		{
			$(this).parent().find(".alert_text").text("select language");				
			required_flag=false;
		}
		});
		if(required_flag===true)
		{
			var all_languages=[];
			var count_languages=0;
			$(elementRef).parent().find(".dob").text($("#datepicker").val());
			$(elementRef).parent().find(".email").text($("#text_email").val());													
			
			$(".fieldset1").each(function(){		
				all_languages[count_languages]=$(this).find(".languages").val();
				count_languages++;
			});
			var unique_languages=jQuery.unique(all_languages)
			if(count_languages===unique_languages.length)
			{
				$(elementRef).parent().find(".language").empty();
			    $(elementRef).parent().find(".rating").empty();
				$(elementRef).parent().find(".language").append("<label class='control-label label_user'>languages:</label>");
				$(elementRef).parent().find(".rating").append("<label class='control-label label_user'>Ratings:</label>");
				$("form").hide();
				$("#edit_modal").modal('hide');
				$(".fieldset1").each(function(){		
				
					var lang=$(this).find(".languages").val();
					var rat=$(this).find(".slider").slider("value");
					//alert($(".fieldset1").last().find(".languages").val());
					if(lang == $(".fieldset1").last().find(".languages").val())
					{
						$(elementRef).parent().find(".language").append("<span class='languages_span'>"+lang+"</span>");
						$(elementRef).parent().find(".rating").append("<span class='ratings_span'>"+rat+"</span>");					
					}
					else
					{
						$(elementRef).parent().find(".language").append("<span class='languages_span'>"+lang+"</span>,");
						$(elementRef).parent().find(".rating").append("<span class='ratings_span'>"+rat+"</span>,");
					
					}
				});
			}
			else
			{
				$("#alert").show();
				$("#alert").text("there are more than one same language !!")
			}
			
		}
	});
	$("body").on("click",".addRow",function(){
		
		var string_table="<fieldset class='fieldset1'><div class='controlgroup"+extra_row+"'><div class='form-group language_dropdown'><label class='control-label'>language</label><select class='languages'>"+
			"<option value='select one'>select one</option><option value='HTML-5'>HTML-5</option><option value='angular js'>angular js</option>"+
			"<option value='css-3'>css-3</option><option value='javascript'>javascript</option></select></div><p class='alert_text' style='margin:0px' ></p>"+			
			"<div class='rating_slider'><p><label class='labels control-label label_user' >Rating:</label><span class='rating_text'>0</span></p>"+
			"<p class='slider'></p></div><button class='deleteRow close'><span>&times</span></button></div></fieldset>";
			$("#table_fieldset").append(string_table);
			$(".controlgroup"+extra_row).find(".slider").slider({
				min:0,
				max:5,
				
				stop: function(event,user_input ){									
					var slidevalue=user_input.value;				
					$(this).parent().find(".rating_text").text(slidevalue);
				}
			});
		extra_row++;
		
	});
	$("body").on("click",".deleteRow",function(){
		$(this).parent().parent().remove();
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

	