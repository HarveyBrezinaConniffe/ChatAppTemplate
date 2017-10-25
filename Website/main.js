function OnButtonClick() {
	// Get the message the user has currently typed.
	message = document.getElementById("m").value;
	// Clear the message.
	document.getElementById("m").value = "";

}


function addMessage(message) {
	var ul = document.getElementById("messages");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(message));
	ul.appendChild(li);	
}
