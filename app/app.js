var spiritBomb = angular.module('spiritBomb',['spiritBombControllers', 'spiritBombServices', 'angularPayments'])

//Stripe config
.config(function(){
  window.Stripe.setPublishableKey('pk_test_U3lEgdrH4TuABqUB9XfTOaIU');
})