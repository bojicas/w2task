Template.Home.events({
});

Template.Home.helpers({
  tasks: function () {
    return Tasks.find();
  }
});
