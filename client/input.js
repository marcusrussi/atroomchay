stringToPigLatin = function( str ) {
	// Split the sentence into an array of words (each element is one word)
	var words = str.split(" ");

	// Replace each word in the array with the pig latin version of that word
	var newWords = _.map( words, function(w) { return wordToPigLatin(w); } );

	// Join our array of pig latin words into a sentence that has a space
	// between each word.
	return newWords.join(" ");
};

// This is the function your team must write
wordToPigLatin = function( str ) {
	var vowIndex;
	for(var i = 0; i < str.length; i++) {
		if(str[i] === "a" || str[i] === "e" ||
		str[i] === "i" || str[i] === "o" ||
		str[i] === "u") {
			vowIndex = i;
			break;
		}
		else vowIndex = 0;   
	}
	return str.substring(vowIndex) + str.substring(0, vowIndex) + "ay";
};

// You can ignore this code, but what it does is it grabs the name of
// the person and their message, transforms the message into Pig Latin,
// and adds it to our database of messages.
Template.input.events({
	'submit form': function( event, template ) {
		event.preventDefault();

		var name = $('#name').val();
		var message = $('#message').val();

		var chat = {
			name: name,
			message: stringToPigLatin(message),
		};

		Chats.insert(chat);
	}
});