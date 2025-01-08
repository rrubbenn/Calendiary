import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { EditModalComponent } from '../../groups/group-edit-modal/edit-modal.component';
import { DeleteModalComponent } from '../../groups/group-delete-modal/delete-modal.component';
import { RouterLink, RouterModule } from '@angular/router';
import { GroupsComponent } from "../../groups/groups.component";


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ RouterLink, GroupsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  

}
