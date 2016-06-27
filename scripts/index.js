/**
 * Author:Dylan Seto
 * Start Date: May 12th, 2016
 * End Date: 
 */

//Varaiables
var animated = false;
var answer = "";


/**
 *  Update on key down for Ask box.
 */
document.getElementById("askBox").onkeyup=function(e)
{
	var len = document.getElementById("askBox").value.length;
	if(animated && e.keyCode != 13)
	{
		document.getElementById("answer").innerHTML = "";
		document.getElementById("answer").style.display = "none";
		animated = false;
	}
	var left = (25 - len);
	document.getElementById("counter").innerHTML = left;
	document.getElementsByClassName("ask_form").submit;
};

/**
 *  Update on key down for Ask box.
 */
document.getElementById("askBox").onkeydown=function(e)
{
	var len = document.getElementById("askBox").value.length;
	if(animated && e.keyCode != 13)
	{
		document.getElementById("answer").innerHTML = "";
		document.getElementById("answer").style.display = "none";
		animated = false;
	}
	
	var left = (25 - len);
	document.getElementById("counter").innerHTML = left;
};

function stopDefAction(evt) {
    evt.preventDefault(); //In order to prevent refreshing of the page on submittion of question.
}

document.getElementById('form').addEventListener(
	    'submit', stopDefAction, false
	);
/**
 * This method handles showing the response to the user's question.
 */
var getAnswer=function()
{
	var text = document.getElementById("askBox").value;
	var textFinal = text.replace(/\b[-.,()&$?!<>\[\]{}"']+\B|\B[-.,()&$?!<>\[\]{}"']+\b/g, "");
	answer = parse(textFinal);
	
	//Display answer
	
	answer = answer.split("");
	document.getElementById("answer").style.display = "block";
	document.getElementById("answer").innerHTML = "";
	answerAnimation();
	animated = true;
};

/**
 * Animates the user's answer so that it appears to be typing.
 */
var loopTimer;
var answerAnimation=function()
{	
	if(answer.length > 0) {
		document.getElementById("answer").innerHTML += answer.shift();
	} else {
		clearTimeout(loopTimer); 
                return false;
	}
	loopTimer = setTimeout('answerAnimation()',80);
}

/**
 * This takes in the question and spits out the corresponding answer.
 */
var parse=function(text)
{
	//In the future, I want to expand this to be
	//a more complex AI as my skills develop.
	//for now, it's just a set of question I thought up.
	//Some are just plain fun
	//Other are job related.

	var question = text.toLowerCase();
	console.log(question);
	var answer = "";
	switch(question)
	{
	case "dylan": 
		answer = "Seto"; break;
	case "dylan seto":
	case "contact":
	case "email":
	case "how can i contact you":
	case "email me":
	case "sent":
	case "where can i find you":
		answer = "Dylan.Seto@outlook.com"; break;
	case "hi":
	case "hello":
	case "bonjour":
		answer = "hi."; break;
	case "are you":
	case "are you dumb":
	case "are you stupid":
		answer = "Am I?"; break;
	case "can i kill you":
	case "how can i kill you":
	case "how do i kill you":
		answer = "In the death kind of way? Not cool, dude."; break;
	case "who are you":
	case "who r u":
	case "who r you":
	case "who are u":
	case "what's your name":
	case "wat's ur name":
	case "whats ur name":
	case "wats ur name":
	case "what's ur name":
	case "who is dylan seto":
	case "Who the hell are you":
		answer = "I am Dylan Seto. And you are?"; break;
	case "who am i":
		answer = "You tell me."; break;
	case "what do you do":
	case "wat do u do":
	case "what do u do":
	case "what are you":
		answer = "I'm a computer science major. I program and design software and websites."; break;
	case "we are becoming gods":
		answer = "yes."; break;
	case "internet":
	case "technology":
	case "thoughts":
	case "future":
	case "what are you thinking":
	case "what are you thinking rn":
	case "the internet":
	case "the future":
		answer = "We are becoming Gods. It's an exciting time to be alive."; break;
	case "phone number":
	case "phone number":
	case "mobile":
	case "phonenumber":
	case "number":
	case "i want to call you":
	case "i want to call u":
		answer = "Ask for my phone number at Dylan.Seto@outlook.com"; break;
	case "i am lost":
		answer = "Aren't we all?"; break;
	case "thoughts on kanye west":
	case "thoughts on kanye":
	case "kanye west":
	case "kanye":
	case "what are your thoughts on kanye west":
	case "childish gambino":
	case "donald glover":
	case "what are your thoughts on childish gambino":
	case "what are your thoughts on donald glover":
	case "what do you think of kanye west":
	case "what do you think of donald glover":
	case "what do you think of childish gambino":
		answer = "My Inspiration."; break;
	case "hip-hop":
	case "what are your thoughts on hip-hop":
	case "what are your thoughts on hip-hop music":
	case "rap music":
	case "music":
	case "hip-hop music":
	case "what are your thoughts on music":
	case "what are your thoughts on rap music":
	case "what are your thoughts on rap":
		answer = "the voice of our generation."; break;
	case "what langauges do you speak":
	case "what languages do you know":
		answer = "English: Fluent. French: Functional";
	case "programming":
	case "lanaguages":
	case "coding experience":
	case "programming languages":
	case "skills":
	case "what are your skills":
	case "what can you do":
		answer = "I mainly know Java, HTML, and Javascript. See resume for details."; break;
	case "resume":
	case "coding experience":
	case "show me your cv":
	case "show me your resume":
	case "where's your cv":
	case "where's your resume":
		answer = "See Resume in the info tab above."; break;
	case "who made this website?":
	case "who made this":
	case "who made this site":
		answer = "I did. - Dylan Seto"; break;
	case "farts":
		answer = "Can be funny...if you're 10."; break;
	case "tell me about yourself":
	case "what do you do":
	case "about":
	case "about page.":
		answer = "See my about page or CV for details."; break;
	case "facebook":
		answer = "Social Media."; break;
	case "Free Information":
	case "free":
	case "information":
		answer = "#FreeInformation"; break;
	case "graphic design":
	case "design":
	case "graphics":
		answer = "I am profficient in Adobe Photoshop."; break;
	case "favorite":
		answer = "You are my favorite person right now."; break;
	case "favorite food":
	case "what's your favorite food":
	case "favourite":
	case "favourite food":
	case "what's your favourite food":
		answer = "I like Asian Cuisine."; break;
	case "prince":
		answer = "R.I.P."; break;
	case "mj":
	case "micheal jackson":
		answer = "King Of Pop."; break;
	case "help":
	case "what do I do":
		answer = "Just type a question."; break;
	case "what do I ask":
		aswers = "anything."; break;
	case "how long":
		answer = "all day."; break;
	case "how long have you been coding":
	case "how long have you been programming":
		answer = "Since I was 13."; break;
	case "how long did this website take":
		answer = "A long time"; break;
	case "how did you build this website":
	case "how did you make this":
		answer = "Made with Javascript, HTML, bootstrap and staying up past 4AM."; break;
	case "do you know java":
	case "do you know c#":
	case "do you know javascript":
	case "do you know c++":
	case "do you know bootstrap":
	case "do you know eclipse":
	case "should i hire you":
	case "design":
	case "java":
	case "eclipse":
	case "visual studio":
	case "photoshop":
	case "adobe photoshop":
	case "c++":
	case "c#":
	case "javascript":
	case "node.js":
	case "bootstrap":
	case "are you good at c++":
	case "are you good at c#":
	case "are you good at java":
	case "are you good at javascript":
	case "are you good at photoshop":
	case "are you good at adobe photoshop":
		answer = "Yes. See my CV for details."; break;
	case "money":
	case "moola":
	case "cash":
	case "$$$":
	case "$":
		answer = "Rules everything around me."; break;
	case "do you know php":
		answer = "A bit."; break;
	case "twitter":
	case "tweet me":
	case "tweet":
		answer = "That's Personal! But... it's @DylanSetoArtist Pretentious name, I know."; break;
	case "linkedin":
	case "linked in":
	case "job offer":
	case "job":
	case "job oppurtunity":
	case "oppurtunity":
	case "i have a job for you":
	case "i want to hire you":
	case "i want to interview you":
	case "interview":
	case "career":
	case "can you work for me":
		answer = "Email me about it. I can be reached at Dylan.Seto@outlook.com"; break;
	case "ask":
		answer = "Ask me anything."; break;
	case "how":
		answer = "because"; break;
	case "start":
		answer = "right now."; break;
	case "confidence":
		answer = "...is the key to success."; break;
	case "values":
	case "what are your values":
	case "motto":
	case "what is your motto":
		answer = "Make the best product of all time, always."; break;
	case "why is the page so simple":
		answer = "I designed it to be easy to navigate."; break;
	case "simplicity":
	case "simple":
	case "basic":
	case "easy":
		answer = "beautiful."; break;
	case "why should i hire you":
	case "why hire you":
	case "i don't think i want to hire you":
	case "you're fired":
	case "tell me why i should hire you":
	case "tell why i shouldn't hire you":
		answer = "I will work harder than all you're employees. I will make the best product. No questions asked."; break;
	case "why are you so arrogant":
	case "arrogant":
	case "why are you so full of yourself":
	case "why are you so narcisistic":
	case "whya re you so arrogant":
		answer = "I believe in myself. I don't know everything but I will learn."; break;
	case "weaknesses":
	case "weakness":
	case "what your weaknesses":
	case "3 weaknesses":
	case "three weaknesses":
		answer = "I can be stubborn. I'm a control freak. I go off in my own world."; break;
	case "team":
	case "teamwork":
	case "can you work in teams":
	case "are you a team player":
	case "team player":
		answer = "I love working in teams. Collaboration is very important."; break;
	case "what is this":
	case "what is this site":
		answer = "This is a my porfolio/personal website."; break;
	case "what is this site for":
	case "what is the purpose of this site":
	case "why did you make this site":
	case "purpose of this site":
	case "reason for this site":
		answer = "To demonstrate my skills in a creative way."; break;
	case "why am i here":
		answer = "I don't know."; break;
	case "meaning of life":
		answer = "42"; break;
	case "where is your cv":
	case "cv":
	case "resume":
	case "where is your resume":
	case "where can i find your cv":
	case "where can I find your resume":
		answer = "Click the little info button in the top left corner under my name."; break;
	case "inspiration":
	case "design inspiration":
	case "where did you get your inspiration from":
	case "what is this inspired by":
	case "inspired by":
	case "inspired":
	case "stolen":
	case "web design":
	case "art direction":
			answer = "This site's design is modelled after NextExit.Website. Shout out of Benji Taylor."; break;
	case "lemonade":
		answer = "Used to be a really good drink. I think it's a Beyonce record now."; break;
	case "jesus christ":
	case "god":
	case "jesus":
	case "the lord":
		answer = "...is dead and we killed him."; break;
	case "wtf":
		answer = "Where's the fudge? I'm hungry."; break;
	default: 
		answer = "Not sure how to respond to this question; try emailing it to me at Dylan.Seto@outlook.com"; 
	}
	return answer;
};
