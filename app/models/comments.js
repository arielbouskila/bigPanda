var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    comment: { type: String, default: '' }
});


module.exports = mongoose.model('Comments', schema);
