(function($) {

	$.fn.showUrl = function () {
		this.each(function(){
			var _getURL = $(this).attr('href');

			$(this).append('<img src="img/question.svg" class="format-icon" />');
			$(this).hover(function(){
				$(this).append('<span class="format-url">' + _getURL + '</span>');
			}, function(){
				$('.format-url').addClass('erase-url');
			});
		});
	};

}(jQuery));