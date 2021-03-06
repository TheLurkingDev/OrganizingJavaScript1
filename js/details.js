$(document).ready(function(){

	function loadPerson(evt) {
		// This regular expression takes everything in the rel attribute string
		// except for the last character and replaces it with "".
		// Ultimately it returns the very last character, which represents the ID.
		var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/,"$1");
		
		// Use the ID to load the appropriate html document via ajax request
		// and dispaly it within the $content element.
		$.ajax("details/" + ID + ".html", { dataType:"text" }).then(function(contents) {
			$content.html(contents);
		});
	}
	
	var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
	var $content = $("[rel=js-details]");

	$items.on("click", "[rel*='js-item-']", loadPerson);

	// on click of a carousel item, do an Ajax request for
	// the "details/2.html" (or whatever) file for the person
	// clicked, and load those contents into the `$content` div.

	// hint: you will probably want to use "event propagation"
	// (aka "event delegation"), by attaching a single event
	// handler the `$content` element rather than individual
	// event handlers to each item in the carousel.

});
