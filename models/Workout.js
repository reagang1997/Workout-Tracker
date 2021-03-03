const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  totalDuration: {
    type: Number,
    default: 0
  },

  totalWeight: Number,

  exercises: [
    {
      type: Array,
      ref: "Exercise"
    }
  ]

});

WorkoutSchema.methods.setTotalDuration = function () {
  const exercises = this.exercises;
  console.log(exercises);

  for(let i = 0; i < exercises.length; i++){
    console.log(exercises[i][0].duration);
    this.totalDuration += exercises[i][0].duration;
    if(i === 7){
      break;
    }
  }

  return this.totalDuration
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
