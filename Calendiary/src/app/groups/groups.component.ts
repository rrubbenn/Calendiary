import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupEditModalComponent } from './group-edit-modal/group-edit-modal.component';
import { GroupDeleteModalComponent } from './group-delete-modal/group-delete-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { GroupAddModalComponent } from './group-add-modal/group-add-modal.component';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, RouterModule,],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {

  groups = [
    {
      id: 1,
      group: 'Work',
      description: 'Work-related to-dos: meetings, projects, deadlines, and important emails',
    },
    {
      id: 2,
      group: 'Shopping',
      description: 'Daily shopping and household tasks',
    },
    {
      id: 3,
      group: 'Events',
      description: 'Social activities and important events.',
    },
    {
      id: 4,
      group: 'Health',
      description: 'Workouts, doctors appointments, meditation sessions',
    },
    {
      id: 5,
      group: 'Personal',
      description: 'Hobbies and personal goals',
    }
  ];

  constructor(private dialog: MatDialog) {}

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
