(function($) {

	$.fn.showUrl = function (color) {
		this.each(function(){
			//Set vars
			var _addURL;
			var _addIMG;
			var _getURL = $(this).attr('href');

			//if the user has set a color, show it
			//else show the default (color: black)
			color ? _addURL = '<span class="format-' + color + '-url">' + _getURL + '</span>' : _addURL = '<span class="format-url">' + _getURL + '</span>';
			color ? _addIMG = '<img src="img/question-' + color + '.svg" class="format-icon" />' : _addIMG = '<img src="img/question.svg" class="format-icon" />';

			//Add icon in the page
			$(this).append(_addIMG);

			//When the mouse enter de span show the URL 
			$(this).hover(function(){
				$(this).append(_addURL);
			
			//When it leaves, hide it
			}, function(){
				if(color){
					$('.format-' + color + '-url').addClass('erase-url');
				}else{
					$('.format-url').addClass('erase-url');
				}
			
			});
		});
	};

}(jQuery));