//set the default voice
responsiveVoice.setDefaultVoice("UK English Female");

//start listening WILL NEED TO SET UP SERVER TO GET MICROPHONE PERMISSIONS
annyang.start();

function runGo() {
	
	//make sure it's running
	var input = "";
	console.log("running..");

	//get the input text
	input = document.getElementById("userInput").value;
	console.log(input);

	var pass = document.getElementById("portal");
	var inputText = document.createTextNode(input);
	pass.appendChild(inputText);

	responsiveVoice.speak(input);

	var scrollLock = document.getElementById("portal");
    scrollLock.scrollTop = scrollLock.scrollHeight;

}

function runSpeak() {

}