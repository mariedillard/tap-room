import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PatronRoomComponent } from './patron-room/patron-room.component';
import { EmployeeRoomComponent } from './employee-room/employee-room.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlcoholManagementComponent } from './alcohol-management/alcohol-management.component';

const appRoutes: Routes = [
  { path: 'patron-room', component: PatronRoomComponent },
  { path: 'employee-room', component: EmployeeRoomComponent },
  { path: '',   redirectTo: '/employee-room', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PatronRoomComponent,
    EmployeeRoomComponent,
    PageNotFoundComponent,
    AlcoholManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
