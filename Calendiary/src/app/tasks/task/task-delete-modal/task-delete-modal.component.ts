import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-task-delete-modal',
  standalone: true,
  imports: [ MatIconModule, MatFormFieldModule ],
  templateUrl: './task-delete-modal.component.html',
  styleUrl: './task-delete-modal.component.scss'
})
export class TaskDeleteModalComponent {

  constructor(
    public dialogRef: MatDialogRef<TaskDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { taskId: number },
    private tasksService: TasksService
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.tasksService.deleteTask(this.data.taskId);
    this.dialogRef.close();
  }
  
}
