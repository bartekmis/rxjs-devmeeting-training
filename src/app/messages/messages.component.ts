import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  messages: Observable<any[]>;

  constructor(private messagesService: MessagesService) {
    this.messages = this.messagesService.messages;
  }

}
