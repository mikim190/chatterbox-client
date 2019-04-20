var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function (message, successCB, errorCB = null) {
    // todo: save a message to the server
    // event.preventDefault();
    $.ajax({
      url: Parse.server,
      type: 'POST',
      // data: JSON.stringify(message),
      data: createMessage(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  readAll: function (successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }
};

var createMessage = function (msg) {
  var data = {
    username: App.username,
    text: msg,
    roomname: 'lobby'
  };
  return JSON.stringify(data);
};