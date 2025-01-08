import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [ MatIconModule, MatFormFieldModule ],
  templateUrl: './group-delete-modal.component.html',
  styleUrl: './group-delete-modal.component.scss'
})
export class GroupDeleteModalComponent {

  constructor(
    public dialogRef: MatDialogRef<GroupDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }
  
}
