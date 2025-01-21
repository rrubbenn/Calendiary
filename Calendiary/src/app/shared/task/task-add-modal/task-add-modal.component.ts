import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task-add-modal',
  standalone: true,
  imports: [ MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, FormsModule],
  templateUrl: './task-add-modal.component.html',
  styleUrl: './task-add-modal.component.scss',
  providers: [ {provide: DateAdapter, useClass: NativeDateAdapter}, {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS}, ],
})
export class TaskAddModalComponent {

  groupId!: number;

  constructor(
    public dialogRef: MatDialogRef<TaskAddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { groupId: number },
    private tasksService: TasksService
  ) {
    
    this.groupId = data.groupId;
    console.log(this.groupId);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(form: NgForm): void {
    console.log(form.form.value);
    const addingTask = {
      ...form.form.value,
      group: this.groupId,
      id: Math.floor(Math.random() * 100),
      status: 'Not Started'
    };

    addingTask.startDate = addingTask.startDate.toLocaleDateString('en-GB');
    addingTask.endDate = addingTask.endDate.toLocaleDateString('en-GB');

    this.tasksService.addTask(addingTask);

    this.dialogRef.close(addingTask);
  }
}
