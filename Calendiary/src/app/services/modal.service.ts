import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditModalComponent } from '../tasks/task/task-edit-modal/task-edit-modal.component';
import { TaskAddModalComponent } from '../tasks/task/task-add-modal/task-add-modal.component';
import { TaskDeleteModalComponent } from '../tasks/task/task-delete-modal/task-delete-modal.component';

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

    openAddTaskModal(groupId: number) {
        return this.dialog.open(TaskAddModalComponent, {
            width: '70%',
            height: '70%',
            data: { groupId },
        });
    }

    openDeleteTaskModal(taskId: number) {
        return this.dialog.open(TaskDeleteModalComponent, {
            width: '40%',
            data: { taskId },
        });
    }
}