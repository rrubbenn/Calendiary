import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditModalComponent } from '../shared/task/task-edit-modal/task-edit-modal.component';
import { TaskAddModalComponent } from '../shared/task/task-add-modal/task-add-modal.component';
import { TaskDeleteModalComponent } from '../shared/task/task-delete-modal/task-delete-modal.component';
import { TaskConfirmModalComponent } from '../shared/task/task-confirm-modal/task-confirm-modal.component';

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

    openConfirmCompleteTaskModal(taskId: number) {
        return this.dialog.open(TaskConfirmModalComponent, {
            width: '40%',
            data: { taskId },
        });
    }
}