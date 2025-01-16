import { Component, inject, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Group } from '../group.model';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [ MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, FormsModule],
  templateUrl: './group-edit-modal.component.html',
  styleUrl: './group-edit-modal.component.scss',
  providers: [ {provide: DateAdapter, useClass: NativeDateAdapter}, {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS}, ],
})
export class GroupEditModalComponent {

  description: string;
  group: string;

  constructor(
    public dialogRef: MatDialogRef<GroupEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { groupdata: Group; }
  ) {
    this.group = data.groupdata.group;
    this.description = data.groupdata.description;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(form: NgForm): void {
    this.dialogRef.close(form.form.value);
  }
}
