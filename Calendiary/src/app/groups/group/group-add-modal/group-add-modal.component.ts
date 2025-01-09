import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-group-add-modal',
  standalone: true,
  imports: [ MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './group-add-modal.component.html',
  styleUrl: './group-add-modal.component.scss'
})
export class GroupAddModalComponent {

  constructor(
    public dialogRef: MatDialogRef<GroupAddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }
    
}
