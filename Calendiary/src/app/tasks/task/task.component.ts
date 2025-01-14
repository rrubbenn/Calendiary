import { Component, input } from '@angular/core';
import { TaskEditModalComponent } from './task-edit-modal/task-edit-modal.component';
import { TaskDeleteModalComponent } from './task-delete-modal/task-delete-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Task } from './task.model';
import { NgStyle } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ NgStyle, MatIconModule, MatMenuModule ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  task = input.required<Task>();

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
