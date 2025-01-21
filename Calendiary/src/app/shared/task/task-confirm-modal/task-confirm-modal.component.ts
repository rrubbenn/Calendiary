import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from '../../../services/tasks.service';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-task-confirm-modal',
  standalone: true,
  imports: [ MatIconModule, MatFormFieldModule ],
  templateUrl: './task-confirm-modal.component.html',
  styleUrl: './task-confirm-modal.component.scss'
})
export class TaskConfirmModalComponent {

  constructor(
      public dialogRef: MatDialogRef<TaskConfirmModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { taskId: number },
      private tasksService: TasksService
    ) {}
  
    onCancel(): void {
      this.dialogRef.close();
    }
  
    onSave(): void {
      this.tasksService.setCompletedStatus(this.data.taskId);
      this.dialogRef.close();
    }
    
}
