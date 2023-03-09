import {Component, Inject, inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";
import {Message} from "../shared/models/Message";
import {MessageType} from "../shared/models/MessageType";

@Component({
  selector: 'app-message-snackbar',
  templateUrl: './message-snackbar.component.html',
  styleUrls: ['./message-snackbar.component.css']
})
export class MessageSnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
  messageType = "";

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: Message) {
    this.messageType = MessageType[data.type];
  }
}
