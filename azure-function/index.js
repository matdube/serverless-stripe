var stripe = require('stripe');

module.exports = function(context, req) {
    stripe(process.env.stripeKey).charges.create({
        amount: 250,
        currency: 'cad',
        source: req.body.stripeToken,
        description: 'Cafe'
    }, function (error, response) {
        context.log('Stripe Response: ' + response);
        var message = error ? error.message : 'Merci beaucoup!';
        context.res = {
            status: error ? 400 : 200,
            body: '<h1>' + message + '</h1>'
        };
        context.done();
    });
}