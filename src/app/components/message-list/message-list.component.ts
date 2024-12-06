import { Component } from '@angular/core';
import {MessageService} from '../../services/message.service';
import {MessageComponent} from '../message/message.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-message-list',
  imports: [MessageComponent, CommonModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  constructor(public messageService: MessageService) {
    console.log("fetch messages");
    this.messageService.fetchMessages()
  }


}
