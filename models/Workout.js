const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    required
  },

  workoutType: {
    type: String
  },
  weight: {
      type: Number
  },
  sets: {
      type: Number
  },
  duration: {
      type: Number
  }

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
