
	var $liCur = $(".hr ul li.cur"),
	  curP = $liCur.position().left,
	  curW = $liCur.outerWidth()+0,
	  $slider = $(".curBg"),
	  $nav1Box = $(".hr");
	 $targetEle = $(".hr ul li a"),
	$slider.animate({
	  "left":curP+40,
	  "width":curW
	});
	$targetEle.mouseenter(function () {
	  var $_parent = $(this).parent(),
		_width = $_parent.outerWidth(),
		posL = $_parent.position().left;
	  $slider.stop(true, true).animate({
		"left":posL+40,
		"width":_width
	  }, "fast");
	});
	$nav1Box.mouseleave(function (cur, wid) {
	  cur = curP+40;
	  wid = curW;
	  $slider.stop(true, true).animate({
		"left":cur,
		"width":wid
	  }, "fast");
	});

