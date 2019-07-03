(function($){
	$.fn.closeLoading = function(name){
		var $this = $(this);
		var _this = this;

		return this.each(function(){
			var intervalHandle = $this.find('.self-loading').attr('data-intervalHandle');
			window.clearInterval(intervalHandle);
			debugger
			if(!name){
				$this.find('.self-loading').remove();
			}else{
				$this.find('.self-loading[data-name="'+name+'"]').remove();
			}
		})
	}

	$.fn.loading = function(options){
		var $this = $(this);
		var _this = this;

		var ParentWidth = $this.width();
		var ParentHeight = $this.height();

		return this.each(function(){
			var defaultProp = {
				'title':'加载中...',
				'borderColor':'#eee',
				'backgroundColor':'black',
				'name': 'loading'
			};
			var opt = $.extend(defaultProp,options || {});

			if($this.css('position') != 'absolute' || $this.css('position') != 'relative'){
				$this.css('position','relative');
			};

			defaultProp._makeText = function(){

				if($this.find('.self-loading')){
					$this.find('.self-loading').remove();
				};

				var intervalHandle = setInterval(function(){
					if(opt.title == '加载中...'){
						opt.title = '加载中';
					}else{
						opt.title += '.';
					}
					html.html(opt.title).appendTo($this);
				},1000);

				var html = $("<div class='self-loading' data-name='"+opt.name+"' data-intervalHandle='"+intervalHandle+"'></div>").css({
					'position':'absolute',
					'text-align': 'center',
					'border-width':'1px',
					'border-style':'solid',
					'border-color':defaultProp.borderColor,
					'top':((ParentHeight/2)*0.8)+'px',
					'left':(ParentWidth/2 - 60)+'px',
					'width':'120px',
					'padding':'4px 6px',
					'background-color': defaultProp.backgroundColor,
					'opacity':'0.8',
					'color':'white'
				});

			}		

			defaultProp._makeText();
		})
	}
})(jQuery)







