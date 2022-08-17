import { useDispatch } from "react-redux"
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {

    const dispatch = useDispatch()

    // console.log("AAAAAAAAAAAAAAAAAA", goal)
    
    const handleDelete = () => {
      dispatch(deleteGoal(goal._id))
    }

  return (
    <div className="goal">
        <div>
            { new Date(goal.createdAt).toLocaleString('en-us') }
        </div>

        <h2>{ goal.text }</h2>
        {/* <h4>{ goal._id }</h4> */}
        <button 
            onClick={ handleDelete } 
            className="close">
            X
        </button>
    </div>
  )
}

export default GoalItem