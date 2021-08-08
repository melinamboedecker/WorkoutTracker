const router = require("express").Router();
// const Workout = require("../models/Workout.js");
const path = require("path");

// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + "/index.html"));
// });


router.get("/stats", (req, res) => {
    try {
        res.sendFile(path.join(__dirname,  "../public/stats.html"));
    } catch {
        res.status(500).json(err);
    }
});

router.get("/exercise", (req, res) => {
    try {res.sendFile(path.join(__dirname, "../public/exercise.html"));
    } catch {
        res.status(500).json(err);
    }
});



module.exports = router;