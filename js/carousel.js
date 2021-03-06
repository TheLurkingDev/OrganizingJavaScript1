$(document).ready(function(){

	function scrollLeft(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		if (position > 0) {
			position = Math.max(0,position - 250);
		}

		$items.css({ left: (-position) + "px" });
	}

	function scrollRight(evt){
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		if (position < maxPosition) {
			position = Math.min(maxPosition,position + 250);
		}

		$items.css({ left: (-position) + "px" });
	}

	var $content = $("[rel=js-carousel] > [rel=js-content]");
	var $items = $content.children("[rel=js-items]");
	var $left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
	var $right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");


	var contentWidth = $content.width();
	var itemsWidth = $items.width();
	var position = 0;
	var maxPosition = (itemsWidth - contentWidth);

	// Again, both "scrollLeft" and "scrollRight" are callback functions.
	// Note that parentheses are not used after the function names.
	// If the parentheses were included, the functions would execute immediately instead of
	// acting as callback functions.
	$left.on("click", scrollLeft);
	$right.on("click", scrollRight);

});
