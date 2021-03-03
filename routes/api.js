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
                db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: dbExercise } }, { new: true })
                    .then(dbWorkout => {
                        dbWorkout.setTotalDuration();
                        console.log(dbWorkout)
                        res.json(dbWorkout);
                    })
            })

            .catch(err => {
                res.json(err);
            })
    })
}
