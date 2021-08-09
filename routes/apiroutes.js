const router = require("express").Router();
const { mongo } = require("mongoose");
const db = require("../models");

router.post("/api/workouts", ( body , res) => {
    console.log("body****:        ", body)
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log("body:      ", body);
    db.Workout.updateOne(
        {
            _id: params.id
        },
        {
            $inc: { 
                totalDuration: body.duration 
            },
            $push: {
                exercises: body 
            }
        }
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
    });
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .sort({ day: 1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        // .sort({ day: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        });
});

module.exports = router;