import { Component, input } from '@angular/core';
import { Task } from './task.model';
import { NgStyle } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ NgStyle, MatIconModule, MatMenuModule ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  task = input.required<Task>();

  constructor(private modalService: ModalService) {}

  getPriorityColor(priority: string) {
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

  getStatusColor(status: string) {
    switch(status) {
      case 'Completed':
        return 'var(--completed)'
      case 'In Progress':
        return 'var(--in-progress)'
      case 'Not Started':
        return 'var(--not-started)'
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

  addTask(groupId: number) {
    this.modalService.openAddTaskModal(groupId).afterClosed().subscribe((result) => {
      if (result) {
        
      }
    });
  }

  editTask(taskId: number) {
    this.modalService.openEditTaskModal(taskId).afterClosed().subscribe((result) => {
      if (result) {
        
      }
    });
  }
  
  deleteTask(taskId: number) {
    this.modalService.openDeleteTaskModal(taskId).afterClosed().subscribe((result) => {
      if (result) {
        
      }
    });
  }
}
