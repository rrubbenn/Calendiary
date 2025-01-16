import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditModalComponent } from '../tasks/task/task-edit-modal/task-edit-modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {

    constructor(private dialog: MatDialog) {}

    openEditTaskModal(taskId: number) {
        return this.dialog.open(TaskEditModalComponent, {
            width: '70%',
            height: '70%',
            data: { taskId },
        });
    }
}