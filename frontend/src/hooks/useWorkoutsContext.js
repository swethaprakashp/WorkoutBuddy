import { workoutsContext } from "../Context/workoutContext";
import { useContext } from "react";

export const useWorkoutsContext = ()=>{
    const context = useContext(workoutsContext)
    if(!context){
        throw Error('useWorkoutsContext must be used inside an workoutsContextProvider')
    }
    return context
}