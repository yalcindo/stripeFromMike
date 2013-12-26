var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Ticket = new Schema({
  date: Date,
  seat: Number,
  customer:Object
});

module.exports = mongoose.model('Ticket', Ticket);