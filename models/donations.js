var mongoose = require('mongoose');

var DonationSchema = new mongoose.Schema({
    paymenttype: String,
    amount: Number,
    upvotes: {type: Number, default: 0}
});

module.exports = mongoose.model('Donation', DonationSchema);