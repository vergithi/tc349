jQuery(document).ready(function($) {

	var height1 = 160;
	var height = 32;

    $(".menu").click(function() {
    if($('.navbar').height() != height1){
        $(".navbar").css('height', height1);
        $(".navigate li").css('height', height)
    }
    else{
        $(".navbar").css('height', '0px');
        $(".navigate li").css('height', '0px')
    }
});

})