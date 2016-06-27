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
	$("#intro").fadeOut(1000);
	
	
	setTimeout(function(){    
		load2();
	}, 1000);
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