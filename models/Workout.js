const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
      },
    exercises: [
        {
            type: {
                type: String, 
                required: "Please enter exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter an exercise name"
            },
            duration: {
                type: Number,
                min: [1, 'Please enter a duration of at least one minute']
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number
            }
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    },
    
});

//Use custom method to add up workout duration?
// WorkoutSchema.methods.setTotalWorkoutDuration = function() {
//     this.totalWorkoutDuration = `${this.exercises.forEach()}`
// }

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;