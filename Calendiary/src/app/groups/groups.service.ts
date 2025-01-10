import { Injectable, signal } from "@angular/core";
import { Group } from "./group/group.model";

@Injectable({ providedIn: 'root' })
export class GroupsService {

    private groups = signal([
        {
            groupId: 1,
            group: 'Work',
            description: 'Work-related to-dos: meetings, projects, deadlines, and important emails',
        },
        {
            groupId: 2,
            group: 'Shopping',
            description: 'Daily shopping and household tasks',
        },
        {
            groupId: 3,
            group: 'Events',
            description: 'Social activities and important events.',
        },
        {
            groupId: 4,
            group: 'Health',
            description: 'Workouts, doctors appointments, meditation sessions',
        },
        {
            groupId: 5,
            group: 'Personal',
            description: 'Hobbies and personal goals',
        }
    ]);
    
    allGroups = this.groups.asReadonly();

    addGroup(GroupData: {group: string, description: string}){
        const newGroup: Group = {
            groupId: Math.random(),
            ...GroupData,
        } 
        this.groups.update((oldGroups) => [...oldGroups, newGroup])
    }

    deleteGroup(GroupData: {groupId: number}) {

        this.groups.update((oldGroups) => 
            oldGroups.filter(group => group.groupId !== GroupData.groupId)
        ); 
        
    }
}