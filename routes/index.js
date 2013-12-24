var path = require("path");
var Customer = require('../models/customer.js');
var Customer = require('../models/ticket.js');
var _ = require("underscore")

exports.index = function(req, res){
  res.render('index', { title: "Node-Stripe", user : req.user});
};

exports.ping = function(req, res){
  res.send("pong!", 200);
};

exports.charge = function(req, res){
  res.render('charge', { title: "Process a charge!"});
};

exports.login = function(req, res){
  res.render('login', { title: "Login to the Admin Page", user : req.user});
};

exports.logout = function(req, res){
  req.logout();
  res.redirect('/');
};
exports.buyticket=function(req,res){
 var seat=req.query.seat;
 var date=req.query.date;
//  var ticket=new Ticket({
//     seat:seat,
//     date:date,
//     costumer:new Costumer()
//   });
// ticket.save();

 res.send({seat:seat,date:date});
};

exports.admin = function(req, res){
  return Customer.find({}, function(err, data) {
    if (err) {
      return console.log('err');
    } else {
      return res.render('admin', {
        title: "Admin Page", 
        'allTokens':data, 
        'total':data.length, 
        user : req.user
      });
    }
  });
};
exports.ticket = function(req, res){
  var data=req.body;
  res.render('ticket', { data:data});
};
