var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Ticket = new Schema({
  date: Date,
  seat: Number,
  costumer:Object
});

module.exports = mongoose.model('Ticket', Ticket);