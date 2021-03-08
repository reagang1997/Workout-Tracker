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

  exercises:{
    type: Array,
    ref: "Exercise"
  }


});

WorkoutSchema.methods.setTotalDuration = function () {
  const exercises = this.exercises;
  console.log(exercises);
  let tmp = 0;
  for (let i = 0; i < exercises.length; i++) {
    console.log(exercises[i].duration);
    tmp += exercises[i].duration;
    if (i === 7) {
      break;
    }
  }
  console.log(tmp);
  return this.totalDuration = tmp;
};

WorkoutSchema.methods.setTotalWeight = function () {
  const exercises = this.exercises;

  for (let i = 0; i < exercises.length; i++) {
    if (exercises[i].type === 'cardio') {
      continue;
    }
    this.totalWeight += exercises[i].weight;
  }

  return this.totalWeight;

}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
