;(function($,global,undefined){
	var MoveSort = {
		createMoveSort: function(){
			var movesort = {}
			movesort.li_position = [];//记录每个li的位置
			
			//给li设置下标并记录获取位置
			movesort.initListBox= function(){
				$('.dragable-box').find('.itemPic').each(function(index,item){
					var _this = $(this).parent();
					index = index+1;
					$(_this).attr('index',index);
					
					var position = {}
					position.left = $(_this).position().left;
					position.top = $(_this).position().top;
					position.index = index;
					movesort.li_position.push(position);
					
					//将每一个子项设置为绝对定位，并设置位置为原坐标
					$(this).attr("index", index).css({
						position : "absolute",
						left : $(_this).position().left,
						top : $(_this).position().top
					}).appendTo(".item_container");
					
					movesort.drag(this);
				})
			}
			
			movesort.move = function(callback) {  // 移动
				$(this).stop(true).animate({
					left : this.box.offset().left,
					top : this.box.offset().top
				}, 500, function() {
					if(callback) {
						callback.call(this) ;
					}
				}) ;
			}
			
			movesort.drag = function(_this){
				var oldPosition = {};
				var oldPointer = {};
				
				var isDrag = false;
				var currentItem = null ;
				$(_this).mousedown(function(e){
					e.preventDefault();
					oldPosition.left = $(_this).position().left;
					oldPosition.top = $(_this).position().top;
					
					oldPointer.x = e.clientX;
					oldPointer.y = e.clientY;
					isDrag = true;
					
					currentItem = _this;
				})
				
				$(document).mousemove(function(e){
					var currentPointer = {
						x: e.clientX,
						y:e.clientY
					};
					
					if(!isDrag) return false;
					$(currentItem).css({
						"opacity" : "0.8",
						"z-index" : 999
					}) ;
					
					var left = currentPointer.x - oldPointer.x + oldPosition.left;
					var top = currentPointer.y - oldPointer.y + oldPosition.top;
					
					$(currentItem).css({
						left : left,
						top : top
					}) ;
					
					currentItem.pointer = currentPointer ;
					// 开始交换位置				
					//currentItem.collisionCheck() ;					
				})
				
				$(document).mouseup(function() {
					if(!isDrag) return false ;
					isDrag = false ;
					currentItem.move(function() {
						$(this).css({
							"opacity" : "1",
							"z-index" : 0
						}) ;
					}) ;
				}) ;
				
			}			
			
			return movesort;
		}
	}
	var msort = MoveSort.createMoveSort();
	msort.initListBox();
})(jQuery,window,undefined)