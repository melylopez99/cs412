import { Component, OnInit } from '@angular/core';
import {GitService} from '../services/git.service';

@Component({
  selector: 'app-calling-http',
  templateUrl: './calling-http.component.html',
  styleUrls: ['./calling-http.component.css']
})
export class CallingHTTPComponent implements OnInit {
  currentGithub: any;

  constructor(private gitService: GitService) { }

  ngOnInit(): void {
  }

  getRepos() {
    this.gitService.getRepos();

  }

}
