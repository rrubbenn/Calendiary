import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GroupComponent } from "./group/group.component";

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
        path: 'group',
        component: GroupComponent,
        title: 'Group'
    }
]