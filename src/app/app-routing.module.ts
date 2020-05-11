import { MainPageComponent } from './components/main-page/main-page.component';
import { DoctorDataComponent } from './components/doctor/doctor-data/doctor-data.component';
import { PatientsComponent } from './components/doctor/patients/patients.component';
import { MainPageComponentDoctor } from './components/doctor/main-page/main-page.component';
import { DoctorLayoutComponent } from './components/doctor/doctor-layout/doctor-layout.component';
import { PatientDataComponent } from './components/patient/patient-data/patient-data.component';
import { HealthIndicatorsComponent } from './components/patient/health-indicators/health-indicators.component';
import { HealthBookComponent } from './components/patient/health-book/health-book.component';
import { PatientLayoutComponent } from './components/patient/patient-layout/patient-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponentPatient } from './components/patient/main-page/main-page.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},

  {
    path: 'patient', component: PatientLayoutComponent, children: [
      {path: '', redirectTo: 'home-page', pathMatch: 'full'},
      {path: 'home-page', component: MainPageComponentPatient},
      {path: 'health-book', component: HealthBookComponent},
      {path: 'health-indicators', component: HealthIndicatorsComponent},
      {path: 'info', component: PatientDataComponent}
    ]
  },

  {
    path: 'doctor', component: DoctorLayoutComponent, children: [
      {path: '', redirectTo: 'home-page', pathMatch: 'full'},
      {path: 'home-page', component: MainPageComponentDoctor},
      {path: 'patients', component: PatientsComponent},
      {path: 'info', component: DoctorDataComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
