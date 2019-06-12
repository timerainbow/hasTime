var niblock = false;
var thisMove = null;
var enterWrapper = null;

function init(){
	letTdEqualTh();
	bindEvents();
}

function letTdEqualTh(){
	var v_ths = $('.movableTable-table').find('.movableTable-th');
	var v_trs = $('.movableTable-table').find('.movableTable-tr');

	for(var j=0;j<v_trs.length;j++){
		for(var i=0;i<v_ths.length;i++){
			v_trs.eq(j).find('.movableTable-td').eq(i).width(v_ths.eq(i).width());
		}
	}
}

function moveLines(_this){
	$('.movableTable-tr').on('mousedown',function(e){
		niblock = true;
		thisMove = $(_this);
	})
}

function bindEvents(){
	$(".movableTable-wrapper").on("mouseenter",function(){
		enterWrapper = $(this);
	})

	$(document).on('mousemove',function(el){
		el = el || window.event;
		el.preventDefault();
		if(niblock){
			thisMove.css({
				'position':'fixed',
				'z-index':'9999', 
				'left': (el.clientX + 10) + 'px',
				'top': (el.clientY + 10) + 'px'
			});
		}
	})

	$(document).on('mouseup',function(e){				
		var html = '<div class="movableTable-tr" onmousemove="moveLines(this)">'+thisMove.html()+'</div>';
		enterWrapper.find('.movableTable-body').prepend(html);
		thisMove.remove();
		letTdEqualTh();
		thisMove = null;
		niblock = false;
	})
}

init();

