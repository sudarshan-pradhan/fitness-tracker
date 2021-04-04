import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() exercise = new EventEmitter();

  exercies: Exercise[]=[];

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exercies = this.trainingService.getAvailableExercises();
  }

  onStartTraining(form: NgForm){
    this.trainingService.startExercise(form.value.selectedExercise)
  }
}
