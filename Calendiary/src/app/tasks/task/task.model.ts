export interface Task {
    id: number,
    group: number,
    name: string,
    description: string,
    startHour: string, 
    endHour: string,
    startDate: string,
    endDate: string,
    priority: string,
    status: string
}