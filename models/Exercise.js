const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,
    name: String,
    workoutType: String,
    weight: Number,
    sets: Number,
    distance: Number,
    reps: Number,
    duration: Number

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;



