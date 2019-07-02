(function($){
	$.fn.loading = function(){
		var $this = $(this);
		var _this = this;

		return _this.each(function(){
			var html = "<div class='self-loading'>请稍后</div>";
		})
	}
})(JQuery)