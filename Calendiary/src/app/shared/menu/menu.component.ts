import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { EditModalComponent } from './group-edit-modal/edit-modal.component';
import { DeleteModalComponent } from './group-delete-modal/delete-modal.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ MatIconModule, MatMenuModule, RouterModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  
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

  editGroup(groupId: number) {
    console.log(groupId)
    const dialogRef = this.dialog.open(EditModalComponent, {
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
    const dialogRef = this.dialog.open(DeleteModalComponent, {
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
