import { MainPageComponentPatient } from './components/patient/main-page/main-page.component';
import { MainPageComponentDoctor } from './components/doctor/main-page/main-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientLayoutComponent } from './components/patient/patient-layout/patient-layout.component';
import { HealthIndicatorsComponent } from './components/patient/health-indicators/health-indicators.component';
import { HealthBookComponent } from './components/patient/health-book/health-book.component';
import { NotificationsComponent } from './components/patient/notifications/notifications.component';
import { PatientDataComponent } from './components/patient/patient-data/patient-data.component';
import { DoctorLayoutComponent } from './components/doctor/doctor-layout/doctor-layout.component';
import { PatientsComponent } from './components/doctor/patients/patients.component';
import { DoctorDataComponent } from './components/doctor/doctor-data/doctor-data.component';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientLayoutComponent,
    MainPageComponentDoctor,
    MainPageComponentPatient,
    HealthIndicatorsComponent,
    HealthBookComponent,
    NotificationsComponent,
    PatientDataComponent,
    DoctorLayoutComponent,
    PatientsComponent,
    DoctorDataComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
