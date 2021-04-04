import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {

  currentTrainingActive=false;

  exerciseSubscription : Subscription;

  constructor(private trainingService : TrainingService) { }

  ngOnInit(): void {
    this.exerciseSubscription = this.trainingService.exerciseChanges.subscribe( ex => {
      if (ex){
        this.currentTrainingActive = true;
      }else{
        this.currentTrainingActive = false;
      }
    })
  }
  startTraining(){
    this.trainingService.startExercise;
  }

  ngOnDestroy(){
    this.exerciseSubscription.unsubscribe();
  }
}
