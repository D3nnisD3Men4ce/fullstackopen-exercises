// Each resource in api will have its own file

const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

// Shorthand, chaining
router.route('/').get(protect, getGoals).post(protect, setGoal)
// router.get('/', getGoals)
// router.post('/', setGoal)


// Shorthand, chaining
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)


module.exports = router

