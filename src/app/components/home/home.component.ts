import { Component } from '@angular/core';
import {MessageListComponent} from '../message-list/message-list.component';

@Component({
  selector: 'app-home',
  imports: [MessageListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
