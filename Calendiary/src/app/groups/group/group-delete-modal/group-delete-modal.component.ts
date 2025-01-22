import { Component, computed, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { GroupsService } from '../../../services/groups.service';
import { TasksService } from '../../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [ MatIconModule, MatFormFieldModule ],
  templateUrl: './group-delete-modal.component.html',
  styleUrl: './group-delete-modal.component.scss'
})
export class GroupDeleteModalComponent {

  private groupsService = inject(GroupsService);
  private tasksService = inject(TasksService);
  private router = inject(Router);

  groupId: { groupId: number };

  constructor(
    public dialogRef: MatDialogRef<GroupDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { groupId: number },
  ) {
    this.groupId = data;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.groupId != null) {
      this.groupsService.deleteGroup(this.groupId);
      this.tasksService.deleteTasksByGroupId(this.groupId.groupId);
      this.router.navigate(['/dashboard']);
      
      this.dialogRef.close();
    }
  }
  
}
