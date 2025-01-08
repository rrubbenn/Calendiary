import { Component } from '@angular/core';
import { MenuComponent } from '../shared/menu/menu.component';
import { NgStyle } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditModalComponent } from './task-edit-modal/task-edit-modal.component';
import { TaskDeleteModalComponent } from './task-delete-modal/task-delete-modal.component';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [ MenuComponent, MatIconModule, MatMenuModule, NgStyle ],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent {

  tasks = [
    {
      id: 1,
      group: 'Development',
      name: 'Analysis Task',
      description: 'Analyze the project requirements.',
      date: '2024-12-01',
      priority: 'High'
    },
    {
      id: 2,
      group: 'Design',
      name: 'Design User Interface',
      description: 'Create UI prototypes for the project.',
      date: '2024-12-03',
      priority: 'Moderate'
    },
    {
      id: 3,
      group: 'Testing',
      name: 'Integration Testing',
      description: 'Perform integration tests with the system.',
      date: '2024-12-10',
      priority: 'Low'
    },
    {
      id: 4,
      group: 'Development',
      name: 'Backend Coding',
      description: 'Develop the API for the application.',
      date: '2024-12-15',
      priority: 'High'
    },
    {
      id: 5,
      group: 'Documentation',
      name: 'Document Code',
      description: 'Write documentation for the backend code.',
      date: '2024-12-20',
      priority: 'Moderate'
    }
  ];

  constructor(private dialog: MatDialog) {}

  getColor(priority: string) {
    switch(priority) {
      case 'High':
        return 'var(--high-priority)'
      case 'Moderate':
        return 'var(--moderate-priority)'
      case 'Low':
        return 'var(--low-priority)'
      default:
        return ''
    }
  }

  visibleTaskId: number | null = null;

  showDescription(taskId: number) {
    if (this.visibleTaskId === taskId) {
      this.visibleTaskId = null;
    } else {
      this.visibleTaskId = taskId;
    }
  }

  addTask() {

    const dialogRef = this.dialog.open(TaskEditModalComponent, {
      width: '70%',
      height: '70%',
      data: { name: 'Current Task Name' } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Task deleted:', result);
        
      }
    });
  }

  editTask(taskId: number) {
      console.log(taskId)
      const dialogRef = this.dialog.open(TaskEditModalComponent, {
        width: '70%',
        height: '70%',
        data: { id: taskId, name: 'Current Task Name' } 
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Task updated:', result);
          
        }
      });
    }
  
    deleteTask(taskId: number) {
      console.log(taskId)
      const dialogRef = this.dialog.open(TaskDeleteModalComponent, {
        width: '40%',
        data: { id: taskId, name: 'Current Task Name' } 
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Task deleted:', result);
          
        }
      });
    }
}
