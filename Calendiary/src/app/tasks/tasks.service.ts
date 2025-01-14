import { Injectable, signal } from "@angular/core";
@Injectable({ providedIn: 'root' })

export class TasksService {

    private tasks = signal([
        {
            id: 1,
            group: 1,
            name: 'Analysis Task',
            description: 'Analyze the project requirements.',
            startDate: new Date('2024-12-01').toLocaleDateString('en-US'),
            endDate: new Date('2024-12-04').toLocaleDateString('en-US'),
            priority: 'High'
        },
        {
            id: 2,
            group: 3,
            name: 'Design User Interface',
            description: 'Create UI prototypes for the project.',
            startDate: new Date('2024-12-01').toLocaleDateString('en-US'),
            endDate: new Date('2024-12-03').toLocaleDateString('en-US'),
            priority: 'Moderate'
        },
        {
            id: 3,
            group: 4,
            name: 'Integration Testing',
            description: 'Perform integration tests with the system.',
            startDate: new Date('2024-12-01').toLocaleDateString('en-US'),
            endDate: new Date('2024-12-10').toLocaleDateString('en-US'),
            priority: 'Low'
        },
        {
            id: 4,
            group: 1,
            name: 'Backend Coding',
            description: 'Develop the API for the application.',
            startDate: new Date('2024-12-01').toLocaleDateString('en-US'),
            endDate: new Date('2024-12-15').toLocaleDateString('en-US'),
            priority: 'High'
        },
        {
            id: 5,
            group: 5,
            name: 'Document Code',
            description: 'Write documentation for the backend code.',
            startDate: new Date('2024-12-01').toLocaleDateString('en-US'),
            endDate: new Date('2024-10-04').toLocaleDateString('en-US'),
            priority: 'Moderate'
        }
    ]);
    allTasks = this.tasks.asReadonly();
}