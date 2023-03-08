import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    SchoolDashboardComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class SchoolModule { }
