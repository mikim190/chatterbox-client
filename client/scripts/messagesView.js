var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // App.fetch() gets all 100 messages
    // Put all 100 message into render
  },

  render: function () {
    // render will divide the data into individual messages
    // pass each individual message into renderMessage
  },

  renderMessage: function (message) {
    // will put each message into $chats
    MessagesView.$chats.append(MessageView.render(message));
  }
};
