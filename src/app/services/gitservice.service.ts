import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  user!: User;
  repo!:Repository;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', '', 0, 0, 0, '');
    this.repo = new Repository('','','','',);
  }
  find(typedWord: any) {
    interface userApi {
      login: string,
      html_url: string,
      name: string,
      biography: string,
      public_repos: number,
      followers: number,
      following: number,
      avatar_url: string,
      
    }
    let headerExtras = new HttpHeaders({ 'Authorization': 'token ' + environment.pass })
    let url = environment.baseUrl + typedWord;
    let addToRequest = { headers: headerExtras }
    let promise = new Promise((resolve, reject) => {
      this.http.get<userApi>(url, addToRequest).toPromise().then((response) => {
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
    repoHandler(user:any){
    interface repoApi{
      html_url:string,
      description:string,
      language:string,
      hooks_url:string,
    }
    let headers = new HttpHeaders({'Authorization':'token' + environment.pass})
    let parameters={headers:headers}
    let url = environment.baseUrl  + user + '/repos';
    let promise = new Promise((resolve, reject) => {
      this.http.get<repoApi>(url,parameters).toPromise().then(response => {
        this.repo = response;
        resolve(resolve)
  
      }, error => {
        reject();
        console.log(error)
      });
  
    });
    return promise
  }
}
