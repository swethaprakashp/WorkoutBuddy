const WorkoutDetails = ({workout})=>{
return(
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg) :</strong> {workout.load} kg</p>
        <p><strong>Reps :</strong> {workout.reps} times</p>
        <p>{workout.createdAt}</p>
    </div>
)
}
export default WorkoutDetails;