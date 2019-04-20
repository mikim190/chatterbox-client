var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  currentRoom: 'lobby',

  initialize: function () {
    RoomsView.$button.on('click', RoomsView.renderRoom);
    RoomsView.$select.on('change', RoomsView.selectedRoom);
    Parse.readAll(RoomsView.render);
  },

  render: function (data) {
    for (let i = 0; i < data.results.length; i++) {
      if (data.results[i].roomname !== undefined) {
        Rooms.update(data.results[i].roomname);
      }
    }
  },

  renderRoom: function () {
    Rooms.update(($('#room').val()));
  },

  selectedRoom: function () {
    RoomsView.currentRoom = $('select option:selected').text();
    MessagesView.$chats.empty();
    for (var key in MessagesView.allMessage) {
      if (key === RoomsView.currentRoom) {
        for (let i = 0; i < MessagesView.allMessage[key].length; i++) {
          MessagesView.$chats.prepend(MessagesView.allMessage[key][i]);
        }
      }
    }
  }
};