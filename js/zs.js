/*------------------------------------------------------------------------
zs.js 证书页面JS特效
------------------------------------------------------------------------*/

$(function(){
	// 如果只有一张证书，则让证书垂直水平都居中显示，如果有多张证书，则只让其水平居中显示
	var wrap = $('.wrap');
	var posX = ($(window).width() - wrap.width()) / 2;
	
	if(wrap.size() == 1){
		var posY = ($(window).height() - wrap.height()) / 2; 
		wrap.css({left: posX + 'px', top: posY + 'px'});
	}else{
		wrap.css({left: posX + 'px'});
	}

	$(window).bind('resize', function(){
		var posX = ($(window).width() - wrap.width()) / 2;

		if(wrap.size() == 1){
			var posY = ($(window).height() - wrap.height()) / 2; 
			wrap.css({left: posX + 'px', top: posY + 'px'});
		}else{
			wrap.css({left: posX + 'px'});
		}
	});
});
