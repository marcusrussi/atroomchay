function stringToPigLatin( str ) {
	return str;
}

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