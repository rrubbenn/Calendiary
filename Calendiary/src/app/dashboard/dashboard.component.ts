import { Component, inject } from '@angular/core';
import { MenuComponent } from "../shared/menu/menu.component";
import { MatIconModule } from '@angular/material/icon';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { NgStyle } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { TasksService } from '../tasks/tasks.service';
import { GroupsService } from '../services/groups.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, MatIconModule, MatMenuModule, NgChartsModule, NgStyle],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  public charts = [
    {
      completedTasks: 66,
      allTasks: 133,
      percentage: this.calculatePercentage(66, 133),
      backgroundColor: ['#36bd7c', '#B0B0B0'],
      hoverBackgroundColor: ['#28a745', '#9e9e9e'],
      hoverBorderWidth: 0,
      borderWidth: 0,
      title: 'Completed',
      class: 'completed'
    },
    {
      completedTasks: 23,
      allTasks: 133,
      percentage: this.calculatePercentage(23, 133),
      backgroundColor: ['#004aad', '#B0B0B0'],
      hoverBackgroundColor: ['#007bff', '#9e9e9e'],
      hoverBorderWidth: 0,
      borderWidth: 0,
      title: 'In Progress',
      class: 'in-progress'
    },
    {
      completedTasks: 40,
      allTasks: 133,
      percentage: this.calculatePercentage(40, 133),
      backgroundColor: ['#f39c12', '#B0B0B0'],
      hoverBackgroundColor: ['#f1c40f', '#9e9e9e'],
      hoverBorderWidth: 0,
      borderWidth: 0,
      title: 'Not Started',
      class: 'not-started'
    },
    {
      completedTasks: 13,
      allTasks: 133,
      percentage: this.calculatePercentage(13, 133),
      backgroundColor: ['#1e90ff', '#B0B0B0'],
      hoverBackgroundColor: ['#4682b4', '#9e9e9e'],
      hoverBorderWidth: 0,
      borderWidth: 0,
      title: 'Overall',
      class: 'overall'
    }
  ];

  public chartType: ChartConfiguration<'doughnut'>['type'] = 'doughnut';

  public pieChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: "85%",
    events: [],
  };

  visibleDescription = false;

  calculatePercentage (AllTasks: number, Tasks: number) {
    return Math.floor((AllTasks / Tasks) * 100) + "%";
  }

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

  constructor() {}

  private modalService = inject(ModalService);
  
  private tasksService = inject(TasksService);
  tasks = this.tasksService.notCompletedTasks();

  private groupService = inject(GroupsService);
  groups = this.groupService.allGroups();

  changeIdforName (groupId: number) {
    const group = this.groups.find(group => group.groupId === groupId);
    return group?.group;
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
