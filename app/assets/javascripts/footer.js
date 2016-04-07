$(document).ready(function(){
    var footer = $("footer");
    var clicked = true;
    footer.find("ul").hide();
    footer.find("p").hide();
    footer.find("h4").fadeTo("slow", 0.5);
    
    footer.find("h4").click(function(){
	$(this).siblings().not("hr").fadeToggle();
/*	if (clicked) {
	    footer.animate({ bottom: '+=150px'}, "slow", "swing");
	    footer.find(".col-lg-10").css({'background-color':'rgb(200,200,200)', 'border-style':'solid'});
	    clicked = false;
	} else {
	    footer.animate({ bottom: '0px'}, "slow", "swing");
	    footer.find(".col-lg-10").css({'background-color':'initial', 'border-style':'initial'});
	    clicked = true;
	}*/
    });

/*
    var docHeight = $(window).height();
    var footerHeight = footer.height();
    var footerTop = footer.position().top + footerHeight;
    

    if (footerTop < docHeight) {
	footer.css('margin-top', 10 + (docHeight - footerTop) + 'px');
    }
*/
});
