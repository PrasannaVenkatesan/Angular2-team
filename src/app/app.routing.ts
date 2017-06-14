import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TeamsComponent} from './teams.component';
import {DashboardComponent} from './dashboard.component';
import{TeamDetailComponent} from './team-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
     },
     {
        path: 'dashboard',
        component: DashboardComponent
    },

    {
        path: 'teams',
        component: TeamsComponent
    },
    {
        path:'detail/:id',
        component: TeamDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);