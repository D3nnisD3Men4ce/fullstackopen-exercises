const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel') // Added to only do CRUD to own account

//  @desc   Get goals
//  @route  GET /api/goals
//  @access Private
const getGoals = asyncHandler (async (req, res) => {
    const goals = await Goal.find({ user: req.user.id }) // req.user can be accessed because of the middleware
    res.status(200).json(goals)
})


//  @desc   Set goal
//  @route  POST /api/goals
//  @access Private
const setGoal = asyncHandler (async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    
    console.log(req.body);
    res.status(200).json({message: goal})

})



//  @desc   Update goal
//  @route  PUT /api/goals/:id
//  @access Private
const updateGoal = asyncHandler (async (req, res) => {


    if (!req.goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error("User not found")
    }

    // User A shouldn't be able to CRUD User B's goals
    // Make sure logged in user matches goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
    res.status(200).json(updateGoal)
})


//  @desc   Delete goal
//  @route  DELETE /api/goals/:id
//  @access Private
const deleteGoal = asyncHandler (async (req, res) => {

    if (!req.goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error("User not found")
    }

    // User A shouldn't be able to CRUD User B's goals
    // Make sure logged in user matches goal user
    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    

    // const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
    await goal.remove()
    
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal
}

