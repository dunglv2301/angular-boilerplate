import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'User',
        loadComponent: async () => (await import('./user.component')).UserComponent,
    },
];