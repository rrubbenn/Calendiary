import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from "../../shared/menu/menu.component";
import { TasksComponent } from "../../tasks/tasks.component";
import { GroupsService } from '../../services/groups.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from './group.model';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [MenuComponent, TasksComponent, MatIconModule],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent implements OnInit {
  
  private groupsService = inject(GroupsService);
  private modalsService = inject(ModalService)

  groupId!: number;
  groupData = computed(() =>
    this.groupsService.allGroups().find(group => group.groupId === this.groupId)
  );

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.groupId = parseInt(params['groupId']);
    });
  }

  onAddTask() {
    this.modalsService.openAddTaskModal(this.groupId);
  }

}
