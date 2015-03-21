/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('tasks', function (/* args */) {
  return Tasks.find();
});