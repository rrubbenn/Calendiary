import { Component, inject, Inject, viewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { GroupsService } from '../../groups.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-group-add-modal',
  standalone: true,
  imports: [ MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './group-add-modal.component.html',
  styleUrl: './group-add-modal.component.scss'
})
export class GroupAddModalComponent {

  private groupsService = inject(GroupsService);
  //form = viewChild.required<NgForm>('form');

  constructor(
    public dialogRef: MatDialogRef<GroupAddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(form: NgForm): void {
    this.groupsService.addGroup(form.form.value);
    this.dialogRef.close(this.data);
  }

}
