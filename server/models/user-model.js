const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        _id: { type: String, required: true },
        name: {type: String, required: true },
        lastEditIndex: {type: Number, required: true},
    },
    { timestamps: true },
);

module.exports = mongoose.model('users', UserSchema)