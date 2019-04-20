var MessageView = {

  render: function (message) {
    return (`<div class="chat">
        <div class="username">${message.username}</div>
        <div class="text">${message.text}</div>
      </div>`);
  }
}