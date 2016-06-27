/**
 * Author: Dylan Seto
 */

document.getElementById("nav-button-about").onclick=function(e)
{
	console.log("about");
	$("#header").fadeOut(1000);
	$("#ask").fadeOut(1500, function()
	{
		$("#About-Page").hide().fadeIn(1000);
		$("#nav_header").hide().fadeIn(1000);
	});
}

document.getElementById("nav-button-CV").onclick=function(e)
{
	console.log("about");
	$("#header").fadeOut(1000);
	$("#ask").fadeOut(1500, function()
	{
		$("#CV-Page").hide().fadeIn(1000);
		$("#nav_header").hide().fadeIn(1000);
	});
}

document.getElementById("nav-button-Projects").onclick=function(e)
{
	console.log("about");
	$("#header").fadeOut(1000);
	$("#ask").fadeOut(1500, function()
			{ 
		$("#Projects-Page").hide().fadeIn(1000);
		$("#nav_header").hide().fadeIn(1000);
	});
}

document.getElementById("nav-button-Contact").onclick=function(e)
{
	console.log("about");
	$("#header").fadeOut(1500);
	$("#ask").fadeOut(1500, function()
	{
		$("#Contacts-Page").hide().fadeIn(1000);
		$("#nav_header").hide().fadeIn(1000);
	});
	
}

document.getElementById("nav-back-button").onclick=function(e)
{
	$("#About-Page").fadeOut(2000);
	$("#CV-Page").fadeOut(2000);
	$("#Contacts-Page").fadeOut(2000);
	$("#Projects-Page").fadeOut(2000);
	
	
	$("#nav_header").fadeOut(2000, function()
	{
		load2();
	});
}
