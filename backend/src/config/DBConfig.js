const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    docname: {type: String, required: true, unique: true},
    docnumber: {type: String, required: true, unique: true},
    issuedate: {type: Date, required: true},
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true }
});

const Document = mongoose.model('Document', docSchema);

module.exports = Document;