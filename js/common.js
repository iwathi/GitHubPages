$(function(){
	var flag     = false;
	var $menu    = $('#gnav');
	var $menuBtn = $('.menu-btn');
	$menuBtn.on('click', function() {
		if (!flag) {
			$menuBtn.addClass("active");
			$(window).on('touchmove.noScroll', function(e) {
				e.preventDefault();
			});
			$menu.fadeIn(400, "easeInOutExpo", function() {
				flag = true;
			});
		} else {
			$menuBtn.removeClass("active");
			$(window).off('.noScroll');
			$menu.fadeOut(400, "easeInOutExpo", function() {
				flag = false;
			});
		}
	});

	 $(window).on('resize', function(){
		onResize();
	});
	onResize();

   function onResize() {
		var stageW = $(window).width();
		var stageH = $(window).height();

		if(stageW <= 768){
			$('#gnav').css({
				'height':(stageH-100)
			});
		}
	}
})(jQuery);
