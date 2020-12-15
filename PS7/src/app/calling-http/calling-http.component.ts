import { Component, OnInit } from '@angular/core';
import {GitService} from '../services/git.service';
import {Github} from '../data/github';


@Component({
  selector: 'app-calling-http',
  templateUrl: './calling-http.component.html',
  styleUrls: ['./calling-http.component.css']
})
export class CallingHTTPComponent implements OnInit {
  currentGithub: any;
  users: Github[] = [];
  user: Github;
  selectedUser: Github;

  constructor(private gitService: GitService) { }

  ngOnInit(): void {
  }

  getRepos(): void {
    this.gitService.getRepos().subscribe(
      response => {
          this.users = response;
        });

  }
  setSelectedUser(user: Github): void {
    this.selectedUser = user;
  }

}
