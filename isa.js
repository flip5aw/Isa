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

}