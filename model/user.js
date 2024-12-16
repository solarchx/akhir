const mongoose = require('mongoose');

//! Membuat Skema pengguna 
const UserSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { collection: 'user' });
const User = mongoose.model('User', UserSchema);

// new User({
//     nama: 'Nurul',
//     username: 'admin',
//     password: 'admin123',
// }).save();

module.exports = User;