import { Component, Inject } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, NgForm } from '@angular/forms';
import { Task } from '../../../tasks/task/task.model';
import { TasksService } from '../../../tasks/tasks.service';

@Component({
  selector: 'app-task-edit-modal',
  standalone: true,
  imports: [ FormsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule ],
  templateUrl: './task-edit-modal.component.html',
  styleUrls: ['./task-edit-modal.component.scss'],
  providers: [ { provide: DateAdapter, useClass: NativeDateAdapter }, { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS } ],
})
export class TaskEditModalComponent {

  id: number;
  group: number;
  name: string;
  description: string;
  startHour: string;
  endHour: string;
  taskstartDate: Date;
  taskendDate: Date;
  priority: string;

  constructor(
    public dialogRef: MatDialogRef<TaskEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { taskId: number },
    private tasksService: TasksService
  ) {
    this.id = data.taskId;
    const taskData = this.tasksService.getTaskData(this.id);

    this.id = taskData.id;
    this.group = taskData.group;
    this.name = taskData.name;
    this.description = taskData.description;
    this.startHour = taskData.startHour;
    this.endHour = taskData.endHour;
    this.taskstartDate = new Date(taskData.startDate);
    this.taskendDate = new Date(taskData.endDate);
    this.priority = taskData.priority;
  }

  onCancel(): void {
    this.dialogRef.close(); 
  }

  onSave(form: NgForm): void {
    const updatedTask = {
      ...form.form.value,
      id: this.id 
    };

    updatedTask.startDate = updatedTask.startDate.toLocaleDateString('en-GB');
    updatedTask.endDate = updatedTask.endDate.toLocaleDateString('en-GB');

    this.tasksService.editTask(updatedTask);

    this.dialogRef.close(updatedTask);
  }
}

