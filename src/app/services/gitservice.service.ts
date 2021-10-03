import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  user!: User;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', 0, 0, 0,)
  }
  find(typedWord: any) {
    interface userApi {
      login: string,
      html_url: string,
      name: string,
      public_repos: number,
      followers: number,
      following: number,
    }
    let headerExtras = new HttpHeaders({ 'Authorization': 'token ' + environment.pass })
    let searchFor = environment.baseUrl + typedWord;
    let addToRequest= { headers: headerExtras }
    let promise = new Promise((resolve, reject) => {
      this.http.get<userApi>(searchFor, addToRequest).toPromise().then((response) => {
        this.user = response;

        resolve(resolve);
        console.log(this.user)
      },
        (error) => {
          reject();
          console.log(error)
        }
      );
    });
    return promise;
  }
}
