var mongoose = require('mongoose');

var subscriberSchema = mongoose.Schema({
    email: { type: String },
    name: { type: String },
    preview: { type: Boolean }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
