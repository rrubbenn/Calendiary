import { Component, inject, OnInit, signal } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from './tasks.service';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {

  groupId: string | null = null;
  tasks = signal<Task[]>([]);

  private tasksService = inject(TasksService);

  private route = inject(ActivatedRoute);  // ActivatedRoute to detect changes on the route

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.groupId = params.get('groupId');
      this.updateTasks();
    });
  }

  private updateTasks(): void {
    if (this.groupId) {
      const tasks = this.tasksService.allTasks();

      const filteredTasks = tasks.filter(task => task.group === +this.groupId!);
      this.tasks.set(filteredTasks); 
    }
  }

}
