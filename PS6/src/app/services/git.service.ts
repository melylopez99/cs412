import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {gitConfig} from '../config/gitConfig';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }

  getRepos(): Observable<any> {
    return this.http.get(gitConfig.baseUrl, {observe: 'body', responseType: 'json'});
  }
}
