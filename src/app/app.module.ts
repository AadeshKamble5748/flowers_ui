import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './Component/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UsdInrPipe } from './Pipes/usd-inr.pipe';
import { DemocomponentComponent } from './Component/democomponent/democomponent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorldofflowerComponent } from './Component/worldofflower/worldofflower.component';
import { UserListComponent } from './Component/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
    UsdInrPipe,
    DemocomponentComponent,
    WorldofflowerComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
