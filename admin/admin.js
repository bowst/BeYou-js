
(function($){

	function loadScript(url, callback)
	{
	    // Adding the script tag to the head as suggested before
	    var head = document.getElementsByTagName('head')[0];
	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = url;

	    // Then bind the event to the callback function.
	    // There are several events for cross browser compatibility.
	    script.onreadystatechange = callback;
	    script.onload = callback;

	    // Fire the loading
	    head.appendChild(script);
	}
	$(document).ready(function(){
		$(".lesson").on('click', function(event){
			var $this = $(this);
			var lessonAddress = $this.data("lesson").toString().split(".");
			var lessonBase = "Chapter " + lessonAddress[0] + "/Lesson " + lessonAddress[1];
			var scriptName = "Chapter " + lessonAddress[0] + ", Lesson " + lessonAddress[1];
			console.log("-----------");
			console.log("Running Lesson: " + scriptName);
			loadScript(lessonBase + "/index.js?_v=" + Math.random() * 1000000, function(){
				console.log("Ran your code, checking your work...");
				loadScript(lessonBase + "/test.js", function(){
					console.log("Completed tests");
				});
			});
		});
	});
})(jQuery)