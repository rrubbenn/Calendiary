import { Component } from '@angular/core';
import { MenuComponent } from "../shared/menu/menu.component";
import { HeaderComponent } from "../shared/header/header.component";
import { MatIconModule } from '@angular/material/icon';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, HeaderComponent, MatIconModule, NgChartsModule],
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

  visibleTable = false;

  calculatePercentage (AllTasks: number, Tasks: number) {
    return Math.floor((AllTasks / Tasks) * 100) + "%";
  }

  showTable() {
    this.visibleTable = !this.visibleTable;
    
  }

}
