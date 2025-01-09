import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { GroupAddModalComponent } from './group/group-add-modal/group-add-modal.component';
import { GroupEditModalComponent } from './group/group-edit-modal/group-edit-modal.component';
import { GroupDeleteModalComponent } from './group/group-delete-modal/group-delete-modal.component';
import { GroupsService } from './groups.service';


@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, RouterModule,],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {

  private groupsService = inject(GroupsService);
  groups = this.groupsService.allGroups();

  constructor(private dialog: MatDialog) {
  }

  addGroup() {

    const dialogRef = this.dialog.open(GroupAddModalComponent, {
      width: '50%',
      height: '40%',
      data: { name: 'Current Task Name' } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Task updated:', result);
        
      }
    });
  }

  editGroup(groupId: number) {
    console.log(groupId)
    const dialogRef = this.dialog.open(GroupEditModalComponent, {
      width: '50%',
      height: '40%',
      data: { id: groupId, name: 'Current Task Name' } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Task updated:', result);
        
      }
    });
  }

  deleteGroup(groupId: number) {
    console.log(groupId)
    const dialogRef = this.dialog.open(GroupDeleteModalComponent, {
      width: '40%',
      data: { id: groupId, name: 'Current Task Name' } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Task deleted:', result);
        
      }
    });
  }

}
