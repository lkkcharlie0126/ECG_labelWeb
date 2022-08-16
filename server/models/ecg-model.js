const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BeatSchema = new Schema(
    {
        _id: { type: String, required: true },
        file_index: {type: Number, required: true },
        file_name: { type: String, required: true },
        subject_num: {type: Number, required: true},
        win_num: {type: Number, required: true},
        beat_num: {type: Number, required: true},
        labeler: { type: String, required: true },
        label: { type: Number, required: true },
        labelArray: {type: Array, required: true},
        originalLabel: {type: String, required: true}, 
        doctorLabel: {type: String, required: true},
        regions: {type: Array, required: true},
    },
    { timestamps: true },
);

module.exports = mongoose.model('beats', BeatSchema)