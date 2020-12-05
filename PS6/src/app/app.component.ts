import { Component, OnInit } from '@angular/core';
import {users} from './data/githubUsersMOCK';
import {Github} from './data/github';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PS6';
  users: Github[] = users;
  user: Github;
  selectedUser: Github;

  ngOnInit(): void {
  }

  setSelectedUser(user: Github): void {
    this.selectedUser = user;
  }
}
