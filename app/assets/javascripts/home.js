$(document).ready(function(){
    $("#web").hide();
    $("#art").hide();
    $("#writing").hide();

    /*
      On clicking headings, fade inactive headings and display corresponding content.
      Also want to hide the header.
     */
    $(".nav_head").click(function(){
	// Fade us in
	$(this).fadeTo("slow", 1.0);
	// Fade other headings
	$(this).siblings(".nav_head").fadeTo("slow",0.15);

	// Fade header
	$("#splash_photo").parent().fadeOut("slow");

	// Fade out other content and use callback to fade in corresponding content
	var $id = '#' + $(this).attr("id").split("_", 1);
	$(this).siblings(".row-fluid").children().fadeOut("slow");
	
	// Only want to fade in if we aren't already faded in
	if (!$(this).siblings(".row-fluid").children($id).is(":visible")) {
	    $(this).siblings(".row-fluid").children($id).fadeIn("slow");
	} else {
	    $(this).siblings(".nav_head").fadeTo("slow",1.0);
	}
    });

    /*
      Some fun on hovering
    */
    
    
});
