import { Subject } from "rxjs";
import { Exercise } from "./exercise.model";

export class TrainingService {
    exerciseChanges = new Subject<Exercise>();
    private availableExervises : Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];

    private runningExercise: Exercise;

    private exercises : Exercise [] = [];

    getAvailableExercises(){
        return this.availableExervises.slice();
    }

    startExercise(id: String){
        this.runningExercise = this.availableExervises.find(ex => {
            return ex.id===id
        });

        this.exerciseChanges.next({...this.runningExercise})
    }

    getRunningExercise(){
        return {...this.runningExercise}
    }

    completeExercise(){
        this.exercises.push({...this.runningExercise, date: new Date(), state:'completed'});
        this.runningExercise = null;
        this.exerciseChanges.next(null);
    }

    cancelExercise(progress : number){
        this.exercises.push({...this.runningExercise,duration:this.runningExercise.duration * (progress/100),calories:this.runningExercise.calories * (progress/100), date: new Date(), state:'cancelled'});
        this.runningExercise = null;
        this.exerciseChanges.next(null);
    }

    getCompletedOrCancelledExercises(){
        return this.exercises;
    }
}