(function($){

	var height = 0;
	var width = 0;
    var settings = {}
    
	$.fn.slidingImageHover = function(options){
        
		settings = $.extend({duration:200},options);
        
        $(this).each(function( index, value ) {
                        //~ console.log( value );
                        
                        height = $(value).height();
                        width = $(value).width();
                        console.log( 'heigth '+height+', width'+width );
                        $(".tile_content", $(value)).css("position","relative");
                        $(".image_slider", $(value)).css({"position": "relative", "width": width+"px", "top": height ,});       
                        $(".image_slider img", $(value)).css({"width": width+"px"});        

                        slideEvent(value);
                        
                    })
	}

	function slideEvent(displayItem)
	{
		$(displayItem).mouseenter(function(){

			$(".image_slider", displayItem).animate({
				 top: '-'+height/14+'px'
			}, { duration: settings.duration, queue: false });
		});

		$(displayItem).mouseleave(function(){
			$(".image_slider", displayItem).animate({
				top: height
			}, { duration: settings.duration, queue: false });
		});
	}
}(jQuery))
