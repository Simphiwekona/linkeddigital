import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminGuard, AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'userDashboard', component: UserDashboardComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}