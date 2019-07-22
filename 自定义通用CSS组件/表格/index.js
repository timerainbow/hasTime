$(function(){
	var initHannyaTable(config){
		var radius = config.radius || 0;
		var tdHeight = config.td_height || 36;
		var thBackgroundColor = config.thBackgroundColor || 'white';
		var borderColor = config.borderColor || '#eee';

		$('.hannya-table').css({
			'border' : '1px solid '+borderColor,
			'border-radius' : radius + 'px'
		});
		$('.hannya-table th').css({
			'border' : '1px solid '+borderColor,
			'border-top' : 'none',
			'background-color': thBackgroundColor
		});
		$('.hannya-table td').css({
			'border':'1px solid '+borderColor,
			'border-bottom','none'
		});
		$('.hannya-table th:first-child').css({
			'border-top-left-radius': radius + 'px',
		    'background-color': thBackgroundColor,
		    'border-left': 'none'
		})
		$('.hannya-table th:last-child')({
			'border-top-right-radius': radius + 'px',
		    'background-color': thBackgroundColor,
		    'border-right': 'none'
		})
	}
}());