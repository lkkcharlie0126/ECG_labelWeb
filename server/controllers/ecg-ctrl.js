const Beats = require('../models/ecg-model')


// Test createDB


// Initialize
setTimeout(function(){
    const fs = require("fs");
    var folders = fs.readdirSync('/usr/src/app/img_folder/');
    console.log(folders);
    var count = 0;
    for (folder_i = 0; folder_i < folders.length; folder_i++){
        var files = fs.readdirSync('/usr/src/app/img_folder/'+folders[folder_i]);
        for (file_i = 0; file_i < files.length; file_i++) {
            console.log(count);
        
            var fileName = files[file_i];
            subEnd = fileName.search("_");
            winStart = subEnd + 1;
            winEnd = fileName.lastIndexOf("_");
            beatStart = winEnd + 1;
            beatEnd = fileName.search(".p");
            
            
            // let query = {_id: fileName};
            // let options = { upsert: true };
            // Beats.save(query, beat, options).catch(error => console.error(error));
            const beat = new Beats({
                _id: fileName,
                file_index: count,
                file_name: fileName,
                subject_num: Number(fileName.substring(1, subEnd)),
                win_num: Number(fileName.substring(winStart, winEnd)),
                beat_num: Number(fileName.substring(beatStart, beatEnd)),
                labeler: "Wen",
                label: 0,
                labelArray:[],
                originalLabel: folders[folder_i],
                doctorLabel: folders[folder_i],
                regions:[],
            });
            beat.save().catch(error => console.error(error));
            count += 1;
        }
    }
    console.log("newDB");
    }, 500);
    // End Test createDB


updateBeat = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Beats.findOne({ _id: req.params.id }, (err, beat) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        beat.file_index = body.file_index
        beat.file_name = body.file_name
        beat.subject_num = body.subject_num
        beat.win_num = body.win_num
        beat.beat_num = body.beat_num
        beat.labeler = body.labeler
        beat.label = body.label
        beat.labelArray = body.labelArray
        beat.originalLabel = body.originalLabel
        beat.doctorLabel = body.doctorLabel
        beat.regions = body.regions
        beat
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: beat._id,
                    message: 'Beat updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Beat not updated!',
                })
            })
    })
}

getAllnumber = async (req, res) => {
    await Beats.count({}, (err, count) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: count })
    }).catch(err => console.log(err))
}

getBeatById = async (req, res) => {
    await Beats.findOne({ _id: req.params.id }, (err, beat) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: beat })
    }).catch(err => console.log(err))
}

getBeatByIndex = async (req, res) => {
    await Beats.findOne({ file_index: req.params.index }, (err, beat) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: beat })
    }).catch(err => console.log(err))
}

getBeats = async (req, res) => {
    await Beats.find({}, (err, beats) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!beats.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: beats })
    }).catch(err => console.log(err))
}

getBeatsInOrder= async (req, res) => {
    await Beats.find().sort({ beat_num: -1 }, (err, beats) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!beats.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: beats })
    }).catch(err => console.log(err))
}

module.exports = {
    // createMovie,
    updateBeat,
    // deleteBeat,
    getBeats,
    getBeatById,
    getBeatsInOrder,
    getBeatByIndex,
    getAllnumber,
}
