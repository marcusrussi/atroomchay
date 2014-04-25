Template.chatroom.helpers({
	messages: function() {
		var fakeMessages = [
			{name: 'Bob', message: 'Why did the sly fox jump over the lazy dog?'},
			{name: 'Jen', message: 'I don\'t know, make me a sandwich.'},
			{name: 'Bob', message: 'No.'},
			{name: 'Jen', message: 'Sudo make me a sandwich.'},
			{name: 'Bob', message: 'OK.'},
			{name: 'Jen', message: 'I feel like we\'re being watched.'},
			{name: 'Bob', message: 'Yeah, me too.  Let\'s get off of here.'}
		];

		// return Chats.find();
		return fakeMessages;	
	}
});