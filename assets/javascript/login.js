$('.inputs.one').focus(function(){
  $('#email').css({"font-size": "0.7rem", "transform": "translateY(-180%)", "color": "#d54132"});
  $("#iconemaillogin").css("color", "#d54132");
});

$('.inputs.two').focus(function(){
  $('#password').css({"font-size": "0.7rem", "transform": "translateY(-180%)", "color": "#d54132"});
  $("#iconpasswordlogin").css("color", "#d54132");
});

$('.inputs.three').focus(function(){
  $('#fullname').css({"font-size": "0.7rem", "transform": "translateY(-180%)", "color": "#d54132"});
  $("#iconfullname").css("color", "#d54132");
});

$('.inputs.four').focus(function(){
  $('#emailsignup').css({"font-size": "0.7rem", "transform": "translateY(-180%)", "color": "#d54132"});
  $("#iconemailsignup").css("color", "#d54132");
});

$('.inputs.five').focus(function(){
  $('#passwordsignup').css({"font-size": "0.7rem", "transform": "translateY(-180%)", "color": "#d54132"});
  $("#iconpasswordsignup").css("color", "#d54132");
});

$('.inputs.six').focus(function(){
  $('#university').css({"font-size": "0.7rem", "transform": "translateY(-180%)", "color": "#d54132"});
  $("#iconinstitute").css("color", "#d54132");
});


$('.inputs.one').focusout(function(){
	$("#iconemaillogin").css("color", "#AAA");
	if ($(".inputs.one").val() === "") {
		$('#email').css({"font-size": "17px", "transform": "translateY(-45%)", "color": "#AAA"}); 
	}
});


$('.inputs.two').focusout(function(){
	$("#iconpasswordlogin").css("color", "#AAA");
	if ($(".inputs.two").val() === "") {
		$('#password').css({"font-size": "17px", "transform": "translateY(-45%)", "color": "#AAA"}); 
	}
});


$('.inputs.three').focusout(function(){
	$("#iconfullname").css("color", "#AAA");
	if ($(".inputs.three").val() === "") {
		$('#fullname').css({"font-size": "17px", "transform": "translateY(-45%)", "color": "#AAA"}); 
	}
});

$('.inputs.four').focusout(function(){
	$("#iconemailsignup").css("color", "#AAA");
	if ($(".inputs.four").val() === "") {
		$('#emailsignup').css({"font-size": "17px", "transform": "translateY(-45%)", "color": "#AAA"}); 
	}
});

$('.inputs.five').focusout(function(){
	$("#iconpasswordsignup").css("color", "#AAA");
	if ($(".inputs.five").val() === "") {
		$('#passwordsignup').css({"font-size": "17px", "transform": "translateY(-45%)", "color": "#AAA"}); 
	}
});


$('.inputs.six').focusout(function(){
	$("#iconinstitute").css("color", "#AAA");
	if ($(".inputs.six").val() === "") {
		$('#university').css({"font-size": "17px", "transform": "translateY(-45%)", "color": "#AAA"}); 
	}
});



$("#signup").click(function() {
	$("#loginform").fadeOut(500, function() {
		$("#loginform").toggleClass("display");
		$("#signupform").fadeIn(500, function() {
			$("#signupform").toggleClass("display");
		});	
	});
});


$("#login").click(function() {
	$("#signupform").fadeOut(500, function() {
    	$("#signupform").toggleClass("display");
    	$("#loginform").fadeIn(500, function() {
			$("#loginform").toggleClass("display");
		});	
	});	
});