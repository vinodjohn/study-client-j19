import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';
import {MatTableModule} from "@angular/material/table";
import { CreateSchoolComponent } from './create-school/create-school.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    SchoolDashboardComponent,
    CreateSchoolComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SchoolModule { }
