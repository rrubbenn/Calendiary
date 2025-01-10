import { Component, computed, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { GroupsService } from '../../groups.service';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [ MatIconModule, MatFormFieldModule ],
  templateUrl: './group-delete-modal.component.html',
  styleUrl: './group-delete-modal.component.scss'
})
export class GroupDeleteModalComponent {

  private groupsService = inject(GroupsService);

  groupId: { groupId: number };

  constructor(
    public dialogRef: MatDialogRef<GroupDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { groupId: number }
  ) {
    this.groupId = data;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.groupId != null) {
      this.groupsService.deleteGroup(this.groupId);
      this.dialogRef.close();
    }
  }
  
}
