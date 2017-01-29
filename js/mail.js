$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "ajax/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Thank you!");
            $(".popup_success").slideDown(500);     
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});