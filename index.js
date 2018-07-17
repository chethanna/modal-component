$(document).ready( () => {
	
	//to hide modal during page load. have used hidden class to overcome hidden elements being displayed for a second during page load
	$("#hide-container").removeClass("hidden");
	$("#modalContainer").hide();
	
	//to display modal when button is clicked
	$("#btn").click( () => {
		$("#modalContainer").fadeIn("fast");
	})	;
	
	//to close the modal when clicked outside of modal window
	$("#modalContainer").click( (e) =>{
		//if click happened within modal window then no action is taken, otherwise modal will be made hidden
		if( $(e.target).closest("#modalWindow").length)
			return;
		$("#modalContainer").hide();
	});
	
	//to close modal window when cross mark image  or close button is clicked
	$(".close-modal").click( () => {
		$("#modalContainer").hide();
	});
	
});