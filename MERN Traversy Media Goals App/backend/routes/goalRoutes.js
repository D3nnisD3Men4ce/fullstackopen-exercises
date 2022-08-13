// Each resource in api will have its own file

const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')


// Shorthand, chaining
router.route('/').get(getGoals).post(setGoal)
// router.get('/', getGoals)
// router.post('/', setGoal)


// Shorthand, chaining
router.route('/:id').put(updateGoal).delete(deleteGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)


module.exports = router

