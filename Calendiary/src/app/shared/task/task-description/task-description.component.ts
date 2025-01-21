import { Component, inject, input, Input, Signal } from '@angular/core';
import { Task } from '../../../tasks/task/task.model';
import { TasksService } from '../../../tasks/tasks.service';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-task-description',
  standalone: true,
  imports: [],
  templateUrl: './task-description.component.html',
  styleUrl: './task-description.component.scss'
})
export class TaskDescriptionComponent {

  task = input.required<Task>();

  private tasksService = inject(TasksService);
  private modalService = inject(ModalService);
  
  ngOnInit () {
    console.log(this.task().status);
  }

  onCompleteTask(taskId: number) {
    this.modalService.openConfirmCompleteTaskModal(taskId).afterClosed().subscribe((result) => {
      if (result) {
        
      }
    });
  }

  onCancelTask(taskId: number) {
    this.tasksService.setNotStartedStatus(taskId);
  }

  onStartTask(taskId: number) {
    this.tasksService.setInProgressStatus(taskId);
  }

}
