Template.Home.events({
});

Template.Home.helpers({
  tasks: function () {
    return Tasks.find();
  },

  timeInHours: function () {
    var time = this.time;

    var timeInt = Math.floor(this.time / 100);
    var timeDec = this.time % 100;

    return (timeInt + '.' + timeDec);
  }
});
