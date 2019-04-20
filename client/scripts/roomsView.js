var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $newRoom: $('#newRoom'),
  //  
  initialize: function () {

    // Rooms.addRoom(roomName);
    // RoomsView.$button.on('click', RoomsView.$select);
    // Rooms.addRoom(all of Rooms.storage);
  },

  render: function () {

  },

  renderRoom: function () {
    RoomsView.$select.append(Rooms.addRoom($('#newRoom').val()));
  }

};

