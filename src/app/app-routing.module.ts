import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { UserComponent } from './Component/user/user.component';
import { DemocomponentComponent } from './Component/democomponent/democomponent.component';
import { WorldofflowerComponent } from './Component/worldofflower/worldofflower.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'user', component: UserComponent },
  { path: 'worldofflower', component: WorldofflowerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


