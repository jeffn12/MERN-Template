const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
	passwordHash: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	tokenSeed: { type: String, required: true, unique: true },
	created: { type: Date, default: () => new Date() },
});

const User = (module.exports = mongoose.model('user', userSchema));
