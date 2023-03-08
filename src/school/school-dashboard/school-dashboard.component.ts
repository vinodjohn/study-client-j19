import {Component, OnInit} from '@angular/core';
import {School} from "../../app/shared/models/School";
import {SchoolService} from "../../app/shared/services/school.service";

@Component({
  selector: 'app-school-dashboard',
  templateUrl: './school-dashboard.component.html',
  styleUrls: ['./school-dashboard.component.css']
})
export class SchoolDashboardComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'address', 'phone'];
  dataSource: School[] = [];

  constructor(private schoolService: SchoolService) {
  }

  ngOnInit(): void {
    this.schoolService.getAllSchools().subscribe(value => this.dataSource = value);
  }
}
