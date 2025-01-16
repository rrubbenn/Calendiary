import { Component, computed, inject, OnInit, signal } from '@angular/core';
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

  groupId = signal<number | null>(null);

  private tasksService = inject(TasksService);
  tasks = this.tasksService.allTasks();

  filteredTasks = computed(() => 
    this.tasks().filter(task => task.group === this.groupId())
  )

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const newGroupId = params.get('groupId');
      const numericGroupId = newGroupId ? Number(newGroupId) : null;

      if (numericGroupId !== this.groupId()) {
        this.groupId.set(numericGroupId);
      }
    });
  }

}