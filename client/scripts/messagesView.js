var MessagesView = {

  $chats: $('#chats'),
  allMessage: {},
  messagesStorage: [],

  initialize: function () {
    RoomsView.currentRoom = 'lobby';
    // Parse.readAll(MessagesView.render);
    MessagesView.render(MessagesView.messagesStorage);
  },

  render: function (data) {
    for (let i = 0; i < data.length; i++) {
      if (RoomsView.currentRoom === 'lobby') {
        MessagesView.renderMessage(data[i]);
      } else {
        if (RoomsView.currentRoom === data[i].roomname) {
          MessagesView.renderMessage(data[i]);
        }
      }
    }
  },

  renderMessage: function (messageObj) {
    // will put each message into $chats
    if (messageObj.username === undefined) {
      messageObj.username = 'anonymous';
    }
    if (MessagesView.allMessage[messageObj.roomname] === undefined) {
      MessagesView.allMessage[messageObj.roomname] = [MessageView.render(messageObj)];
    } else {
      MessagesView.allMessage[messageObj.roomname].push(MessageView.render(messageObj));
    }
    MessagesView.$chats.append(MessageView.render(messageObj));
  },

  prependMessage: function (messageObj) {
    if (MessagesView.allMessage[messageObj.roomname] === undefined) {
      MessagesView.allMessage[messageObj.roomname] = [MessageView.render(messageObj)];
    } else {
      MessagesView.allMessage[messageObj.roomname].push(MessageView.render(messageObj));
    }
    MessagesView.$chats.prepend(MessageView.render(messageObj));
  }
};
