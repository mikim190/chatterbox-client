var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var messageObj = {
      username: App.username,
      text: FormView.$form.find('input[type="text"]').val(),
      roomname: $('select option:selected').text()
    };

    Parse.create(messageObj, (data) => {
      console.log(data);
      MessagesView.prependMessage(messageObj);
    });

    MessagesView.initialize();
    console.log('click!');
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};