/**
 * http://usejsdoc.org/
 */

/*var splash = function()
{*/
	setTimeout(function(){    
			load();
	}, 7000);
//}
		
var load=function()
{
	var video = document.getElementById('intro');
	video.load();
	
	video.addEventListener('loadeddata', function() {
		   // Video is loaded and can be played
			$("#intro").fadeOut(1000);
			
			
			setTimeout(function(){    
				load2();
			}, 1000);
	}, false);

}

var load2=function()
{
	$("#header").hide().fadeIn(2000);
	$("#ask").hide().fadeIn(2000);
	
	document.getElementById("header").style.display = "block";
	document.getElementById("ask").style.display = "block";
	
	//load all images in 'Gallery folder's
}

var loadGallery=function()
{
	//TO DO
}