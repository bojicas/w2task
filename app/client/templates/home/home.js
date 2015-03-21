Template.Home.events({
});

Template.Home.helpers({
  tasks: function () {
    return Tasks.find();
  },

  timeInHours: function () {
    var time = this.time;

    var timeInt = Math.floor(this.time / 100);
    var timeDec = this.time % 100 || '00';

    return (timeInt + '.' + timeDec);
  },

  statusButton: function () {
    if (this.running) {
      return '<span class="glyphicon glyphicon-pause text-danger" aria-hidden="true"></span> <span class="text-danger">Stop</span>'
    } else {
      return '<span class="glyphicon glyphicon-play" aria-hidden="true"></span> Start'
    }
  }
});
