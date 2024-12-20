import { Component } from '@angular/core';
import { MenuComponent } from "../shared/menu/menu.component";
import { MatIconModule } from '@angular/material/icon';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { NgStyle } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, MatIconModule, MatMenuModule, NgChartsModule, NgStyle],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

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

  editTask(taskId: number) {
    console.log(taskId)
  }

  deleteTask(taskId: number) {
    console.log(taskId)
  }

}
