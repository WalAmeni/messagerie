import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public http: HttpClient) {
    this.fetchMessages()
  }

  messages: any[] = []
  fetchMessages() {
    console.log("get messages")
    this.http.get("http://localhost:8080/api/messages").subscribe(
      (data : any) => {
        this.messages = data;
      }
    )
  }
}
