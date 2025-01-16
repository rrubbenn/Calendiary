import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { GroupAddModalComponent } from './group/group-add-modal/group-add-modal.component';
import { GroupEditModalComponent } from './group/group-edit-modal/group-edit-modal.component';
import { GroupDeleteModalComponent } from './group/group-delete-modal/group-delete-modal.component';
import { GroupsService } from '../services/groups.service';


@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, RouterModule,],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {

  private groupsService = inject(GroupsService);
  groups = this.groupsService.allGroups;

  constructor(private dialog: MatDialog) {}

  onAddGroup() {
    const dialogRef = this.dialog.open(GroupAddModalComponent, {
      width: '50%',
      height: '40%',
    });
  }

  onEditGroup(GroupData: { groupId: number }) {

    const groupdata = this.groupsService.getEditData(GroupData.groupId);

    const dialogRef = this.dialog.open(GroupEditModalComponent, {
      width: '50%',
      height: '40%',
      data: { groupdata }
    });
  
    // Could be a nice upgrade for giving some feedback to the user when the function is completed or if it returns an error

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        result.groupId = GroupData.groupId;
        this.groupsService.editGroup(result)
        
      }
    });
  }

  onDeleteGroup(groupId: number) {
    const dialogRef = this.dialog.open(GroupDeleteModalComponent, {
      width: '40%',
      data: { groupId: groupId } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Task deleted:', result);
        
      }
    });
  }

}
