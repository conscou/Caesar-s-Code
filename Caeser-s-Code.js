function clear() {
    document.getElementById('input').value = '';
}

function code(){
	 var inputMessage = document.getElementById('input');
	 var oldMessage = inputMessage.value.toLowerCase(); 
	 var newMessage ="";
	 var newChar
	 
	 for(var i=0; i<=oldMessage.length-1; i++){
	 	if(oldMessage.charCodeAt(i) < 97 || oldMessage.charCodeAt(i) > 122){
	 		newChar = '';
	 		newMessage = newMessage + newChar; 
	 	} else if(oldMessage.charAt(i)==' '){
	 		newMessage = newMessage + ' ';
	 	} else { 	
	 		var currentChar = oldMessage.charCodeAt(i)-97;
	 		var newCharValue = ((currentChar + 3)%26) + 97;
	 		newChar = String.fromCharCode(newCharValue);
	 		newMessage = newMessage + newChar;
	 	}
	 }
	newMessage = newMessage.toLowerCase(); 
	document.getElementById("answer").innerHTML=newMessage;
	clear(); 
}
