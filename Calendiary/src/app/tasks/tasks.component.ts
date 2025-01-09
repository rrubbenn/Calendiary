import { Component } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  tasks = [
      {
        id: 1,
        group: 1,
        name: 'Analysis Task',
        description: 'Analyze the project requirements.',
        date: new Date('2024-12-01'),
        priority: 'High'
      },
      {
        id: 2,
        group: 3,
        name: 'Design User Interface',
        description: 'Create UI prototypes for the project.',
        date: new Date('2024-12-03'),
        priority: 'Moderate'
      },
      {
        id: 3,
        group: 4,
        name: 'Integration Testing',
        description: 'Perform integration tests with the system.',
        date: new Date('2024-12-10'),
        priority: 'Low'
      },
      {
        id: 4,
        group: 1,
        name: 'Backend Coding',
        description: 'Develop the API for the application.',
        date: new Date('2024-12-15'),
        priority: 'High'
      },
      {
        id: 5,
        group: 5,
        name: 'Document Code',
        description: 'Write documentation for the backend code.',
        date: new Date('2024-10-04'),
        priority: 'Moderate'
      }
    ];
}
