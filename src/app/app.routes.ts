import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminGuard, AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]},
    { path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}