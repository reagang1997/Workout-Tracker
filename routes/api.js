const db = require("../models");


module.exports = (app) => {
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err)
            });
    });
    app.get(`/api/workouts/range`, (req, res) => {
        console.log('hit')
        db.Workout.find({})
        .then(dbWorkouts => {
            let inRange = [];
            for(let i = 0; i < dbWorkouts.length; i++){
                if(i === 6){
                    break;
                }
                inRange.push(dbWorkouts[i]);
            }
            res.json(inRange);

        })
    });

    app.post('/api/workouts', ({ body }, res) => {
        db.Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            })
    })

    app.put('/api/workouts/:id', (req, res) => {

        db.Exercise.create(req.body)
            .then((dbExercise) => {
                db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: dbExercise }, $inc: {totalDuration: dbExercise.duration} }, { new: true })
                    .then(dbWorkout => {
                        //dbWorkout.setTotalDuration();
                        //dbWorkout.setTotalWeight();
                        console.log(dbWorkout)
                        res.json(dbWorkout);
                    })
            })
            .catch(err => {
                res.json(err);
            })
    })

    
}
