import { Component, Inject } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, NgForm } from '@angular/forms';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-edit-modal',
  standalone: true,
  imports: [ FormsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule  ],
  templateUrl: './task-edit-modal.component.html',
  styleUrl: './task-edit-modal.component.scss',
  providers: [ {provide: DateAdapter, useClass: NativeDateAdapter}, {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS}, ],
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

  testDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<TaskEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { taskdata: Task; }
  ) {
    this.id = data.taskdata.id;
    this.group = data.taskdata.group;
    this.name = data.taskdata.name;
    this.description = data.taskdata.description;
    this.startHour = data.taskdata.startHour;
    this.endHour = data.taskdata.endHour;
    this.taskstartDate = new Date(data.taskdata.startDate);
    this.taskendDate = new Date(data.taskdata.endDate);
    this.priority = data.taskdata.priority;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(form: NgForm): void {
    form.form.value.startDate = form.form.value.startDate.toLocaleDateString('en-US');
    form.form.value.endDate = form.form.value.endDate.toLocaleDateString('en-US');
    this.dialogRef.close(form.form.value);
  }
}
