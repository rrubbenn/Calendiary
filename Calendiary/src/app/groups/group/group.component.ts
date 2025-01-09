import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from "../../shared/menu/menu.component";
import { TasksComponent } from "../../tasks/tasks.component";

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [MenuComponent, TasksComponent, MatIconModule],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent {

  onAddTask($event: MouseEvent) {
    throw new Error('Method not implemented.');
  }

}
