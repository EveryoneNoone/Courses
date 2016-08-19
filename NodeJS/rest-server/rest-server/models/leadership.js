var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leadershipSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	image: {
		data: Buffer,
		contentType: String
	},
	designation: {
		type: String,
		required: true
	},
	abbr: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

var Leaderships = mongoose.model('Leadership', leadershipSchema);

module.exports = Leaderships;