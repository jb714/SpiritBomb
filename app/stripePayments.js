//For reference -- https://stripe.com/docs/charges

var stripe         = require("stripe")("SECRET_KEY_REMOVED");

 

//var token = request.body.stripeToken;

// var charge = stripe.charges.create({
//   amount: 1000,
//   currency: "usd",
//   source: token,
//   description: "Example charge"
// }, function(err, charge) {
//   if(err & err.type === 'StripeCardError') {
//     //The card has been declined
//   }
// })