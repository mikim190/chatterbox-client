var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    MessagesView.render();
  },

  render: function () {
    // render will divide the data into individual messages
    // pass each individual message into renderMessage
    // debugger;
    Parse.readAll(function (data) {
      for (let i = 0; i < data.results.length; i++) {
        MessagesView.renderMessage(data.results[i]);
      }
    });
  },

  renderMessage: function (message) {
    // will put each message into $chats
    MessagesView.$chats.append(MessageView.render(message));
  }
};
