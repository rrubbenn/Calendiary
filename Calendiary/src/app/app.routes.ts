import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GroupComponent } from "./groups/group/group.component";
import { CalendarComponent } from "./calendar/calendar.component";

export const routes: Routes = [
    {
        path: '', // <your-domain>/
        component: HomeComponent,
        title: 'No task selected'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard'
    },
    {
        path: 'calendar',
        component: CalendarComponent,
        title: 'Calendar'
    },
    {
        path: 'group/:groupId',
        component: GroupComponent,
        title: 'Group'
    }
]