const express = require('express')
const { 
    createWorkout,
    getAllWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../Controllers/workoutController')

const router = express.Router()

//get all workouts
router.get('/', getAllWorkout)
//get single workout
router.get('/:id',getWorkout)
//post a new workout
router.post('/', createWorkout)
//delete a workout
router.delete('/:id',deleteWorkout)
//update a workout
router.patch('/:id',updateWorkout)
module.exports = router