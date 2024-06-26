import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateTimeComponent } from './create-time/create-time.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseService } from './service/database.service';
import { CollectiblesComponent } from './collectibles/collectibles.component';
import { TestingComponent } from './testing/testing.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { ScheduleConfirmationComponent } from './schedule-confirmation/schedule-confirmation.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'LifeSync | Home' },
  {path: 'generate',component: CreateTimeComponent,title: 'LifeSync | Generate Schedule',},
  {path: 'chat',component: ChatComponent,title: 'LifeSync | Chats',},
  {path: 'profile', component: CollectiblesComponent, title: 'LifeSync | Profile ',},
  { path: 'add', component: AddItemsComponent, title: 'LifeSync | Add Event' },
  { path: 'login', component: LoginComponent, title: 'LifeSync | Login' },
  { path: 'register', component: RegisterComponent, title: 'LifeSync | Register' },
  { path: 'confirmation', component: ScheduleConfirmationComponent, title: 'LifeSync | Confrim Schedule'},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateTimeComponent,
    TestingComponent,
    CollectiblesComponent,
    AddItemsComponent,
    ScheduleConfirmationComponent,
    RegisterComponent,
    LoginComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: false }),
    HttpClientModule,
    CommonModule,
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
