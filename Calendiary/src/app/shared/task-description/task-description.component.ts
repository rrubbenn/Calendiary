import { Component, input, Input, Signal } from '@angular/core';
import { Task } from '../../tasks/task/task.model';

@Component({
  selector: 'app-task-description',
  standalone: true,
  imports: [],
  templateUrl: './task-description.component.html',
  styleUrl: './task-description.component.scss'
})
export class TaskDescriptionComponent {

  task = input.required<Task>();

}
