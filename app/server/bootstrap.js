Meteor.startup(function () {
  // Add fixtures
  if (Tasks.find().count() === 0) {
    Tasks.insert({
      description: 'A very interesting coding task',
      time: 0,
      running: false
    });
    Tasks.insert({
      description: 'Another interesting design task',
      time: 125,
      running: true
    });
    Tasks.insert({
      description: 'Yet another interesting administration task',
      time: 50,
      running: false
    });
  }
});
