$(document).ready(function() {

	//to submit form input
 	$('#btn').click(function() {

 		// var textNew = $("#todo").text();

 		$("#list").append("<li>" + $("#todo").val() + "</li>");

 	});

});