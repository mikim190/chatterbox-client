var Rooms = {
  storage: ['lobby'],
  // addRoom: function (room) {
  //   this.storage.push(room);
  //   return `<option value=${room}>${room}</option>`;
  addRoom: function () {
    // var roomName = $("#room").val(); //get value from textbox
    // console.log('room', roomName);
    var $newRoom = $(`<option value ="room">${$("#room").val()}</option>`); //create new room
    this.storage.push($newRoom); //store all options 
    // console.log('storage', Rooms.storage)
    // return this.storage;
    // RoomsView.$newRoom = $newRoom;
    $newRoom.appendTo("select");
  }
  // }
}