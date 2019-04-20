var Rooms = {
  storage: [],

  addRoom: function (val) {
    var $newRoom = $(`<option value ="room">${val}</option>`); //create new room
    RoomsView.$select.append($newRoom);
  },

  update: function (roomname) {
    if (!Rooms.storage.includes(roomname)) {
      Rooms.storage.push(roomname);
      Rooms.addRoom(roomname);
    }
  }
};