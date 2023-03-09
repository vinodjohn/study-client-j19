import {MessageType} from "./MessageType";

export class Message {
  type: MessageType;
  content: string;

  constructor(type: MessageType, content: string) {
    this.type = type;
    this.content = content;
  }
}
