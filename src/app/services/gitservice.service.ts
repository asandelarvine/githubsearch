import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';


import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  user!: User;

  constructor(private http:HttpClient) { 
    this.user = new User('','','','',0,0,0,)
  }
  findUser(nameOfUser:any){
    interface GithubApi{
      login:string,
      html_url:string,
      repos_url:string,
      name:string,
      public_repos:number,
      followers:number,
      following:number,
    }
    let headers = new HttpHeaders({'Authorization':'token ' + environment.pass})
    let searchFor =environment.baseUrl + nameOfUser ;
    let inHead={headers:headers}
    let promise = new Promise((resolve, reject) => {
      this.http.get<GithubApi>(searchFor,inHead).toPromise().then((response) => { this.user = response;
            
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
