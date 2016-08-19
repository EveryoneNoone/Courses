var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var commentSchema = new Schema({
	rating: {
		type: Number,
		min: 1,
		max: 5,
		required:true
	},
	comment: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	}
});

var dishSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	image: {
		data: Buffer,
		contentType: String
	},
	category: {
		type: String
	},
	label: {
		type: String,
		default: ""
	},
	price: {
		type: Currency
	},
	description: {
		type: String,
		required: true
	},
	comments:[commentSchema]
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;