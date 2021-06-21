jQuery(document).ready(function() {
	
	"use strict";
	// Your custom js code goes here.80b738ad-62e4-40f7-959e-b969356b77640000D6F132A01D3DE3A83710EDFAD408FEC5CB6
	// $('#contact-form-dscc').submit(function(){
		// Email.send({
		// 	SecureToken : "18b67b67-fa6a-475f-9d0f-f07575c93e6d",
		// 	// SecureToken:"b752bad8-90e6-48ff-8f20-b5b01c917dd9",
		// 	// Host : "smtp.gmail.com",
		// 	// EnableSsl = true,
		// 	// Port = 587,
		// 	// UseDefaultCredentials = false,
    	// 	// Credentials = new NetworkCredential(fromAddress.Address, fromPassword),
		// 	// Username : "tarunkumar323@gmail.com",
		// 	// Password : "EBloc_er786",
		// 	To : 'tarunkumar323@gmail.com',
		// 	From : "tarunkumar323@gmail.com",
		// 	Subject : "This is the subject",
		// 	Body : "And this is the body"
		// }).then(
		//   message => alert(message)
		// )
		// ;
		// alert("Message sent. Your query will be resolved shortly");
	// })
	$('#contact-form-dscc').submit(function(e){
		e.preventDefault();
		
		$.ajax({
			url:'https://api.apispreadsheets.com/data/11864/',
			type:'post',
			data:$("#contact-form-dscc").serializeArray(),
			success: function(){
				alert("Form Submitted Successfully!")
			},
			error: function(){
				// window.reload();
				alert("Error: Form Not Submitted")
			}
		});

	});

	$('.enrollnow').click(function(e){
		
	})




});