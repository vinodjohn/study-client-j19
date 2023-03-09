import {Component, OnInit} from '@angular/core';
import {School} from "../../app/shared/models/School";
import {SchoolService} from "../../app/shared/services/school.service";
import {Message} from "../../app/shared/models/Message";
import {MessageType} from "../../app/shared/models/MessageType";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MessageSnackbarComponent} from "../../app/message-snackbar/message-snackbar.component";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-school-dashboard',
  templateUrl: './school-dashboard.component.html',
  styleUrls: ['./school-dashboard.component.css']
})
export class SchoolDashboardComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'address', 'phone', 'active'];
  dataSource: School[] = [];
  message: Message;
  durationInSeconds = 5;

  constructor(private schoolService: SchoolService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.schoolService.getAllSchools().subscribe(value => {
      this.dataSource = value;

      if(value.length == 0) {
        this.message = new Message(MessageType.info, "No schools found!");
        this.openSnackBar();
      }
    },
      error => {
          this.message = new Message(MessageType.error, "Technical Error!");
          this.openSnackBar();
      });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(MessageSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      data: this.message
    });
  }

  deleteSchool(id: number) : void {
    this.schoolService.deleteSchoolById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }

  restoreSchool(id: number) : void {
    this.schoolService.restoreSchoolById(id).subscribe(value => {this.ngOnInit()},
      error1 => {
        this.message = new Message(MessageType.error, "Technical Error!");
        this.openSnackBar();
      });
  }
}
