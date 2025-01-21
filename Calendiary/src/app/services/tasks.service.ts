import { computed, Injectable, signal } from '@angular/core';
import { Task } from '../tasks/task/task.model';
@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks = signal<Task[]>([
        {
        id: 1,
        group: 1,
        name: 'Analysis Task',
        description: 'Analyze the project requirements.',
        startHour: '13:00',
        endHour: '13:00',
        startDate: new Date('2024-12-01').toLocaleDateString('en-GB'),
        endDate: new Date('2024-12-04').toLocaleDateString('en-GB'),
        priority: 'High',
        status: 'Completed'
        },
        {
        id: 2,
        group: 3,
        name: 'Design User Interface',
        description: 'Create UI prototypes for the project.',
        startHour: '13:00',
        endHour: '13:00',
        startDate: new Date('2024-12-01').toLocaleDateString('en-GB'),
        endDate: new Date('2024-12-03').toLocaleDateString('en-GB'),
        priority: 'Moderate',
        status: 'Completed'
        },
        {
        id: 3,
        group: 4,
        name: 'Integration Testing',
        description: 'Perform integration tests with the system.',
        startHour: '13:00',
        endHour: '13:00',
        startDate: new Date('2024-12-01').toLocaleDateString('en-GB'),
        endDate: new Date('2024-12-10').toLocaleDateString('en-GB'),
        priority: 'Low',
        status: 'Completed'
        },
        {
        id: 4,
        group: 1,
        name: 'Backend Coding',
        description: 'Develop the API for the application.',
        startHour: '13:00',
        endHour: '13:00',
        startDate: new Date('2024-12-01').toLocaleDateString('en-GB'),
        endDate: new Date('2024-12-15').toLocaleDateString('en-GB'),
        priority: 'High',
        status: 'In Progress'
        },
        {
        id: 5,
        group: 5,
        name: 'Document Code',
        description: 'Write documentation for the backend code.',
        startHour: '13:00',
        endHour: '13:00',
        startDate: new Date('2024-12-01').toLocaleDateString('en-GB'),
        endDate: new Date('2024-10-04').toLocaleDateString('en-GB'),
        priority: 'Moderate',
        status: 'Not Started'
        },
    ]);
    allTasks = this.tasks;
    completedTasks = computed(() => this.tasks().filter(task => task.status === 'Completed'))
    inProgressTasks = computed(() => this.tasks().filter(task => task.status === 'In Progress'))
    notStartedTasks = computed(() => this.tasks().filter(task => task.status === 'Not Started'))
    notCompletedTasks = computed(() => this.tasks().filter(task => task.status !== 'Completed'))

    getTaskData(taskId: number) {
        return this.tasks().find((task) => task.id === taskId) 
            ?? {
                id: 0,
                group: 0,
                name: '',
                description: '',
                startHour: '',
                endHour: '',
                startDate: new Date().toLocaleDateString('en-GB'),
                endDate: new Date().toLocaleDateString('en-GB'),
                priority: '',
            }
    }

    editTask(TaskData: Task) {
        this.tasks.update((oldTasks) =>
            oldTasks.map((task) =>
                task.id === TaskData.id ? { ...task, ...TaskData } : task
            )
        );
    }

    addTask(TaskData: Task) {
        this.tasks.update((oldTasks) => [...oldTasks, TaskData])
    }

    deleteTask(taskId: number) {
        this.tasks.update((oldTasks) => 
            oldTasks.filter(task => task.id !== taskId)
        ); 
    }

    setNotStartedStatus(taskId: number) {
        this.tasks.update((oldTasks) =>
            oldTasks.map((task) =>
                task.id === taskId ? { ...task, status: 'Not Started' } : task
            )
        );
    }

    setInProgressStatus(taskId: number) {
        this.tasks.update((oldTasks) =>
            oldTasks.map((task) =>
                task.id === taskId ? { ...task, status: 'In Progress' } : task
            )
        );
    }

    setCompletedStatus(taskId: number) {
        this.tasks.update((oldTasks) =>
            oldTasks.map((task) =>
                task.id === taskId ? { ...task, status: 'Completed' } : task
            )
        );
    }
}
