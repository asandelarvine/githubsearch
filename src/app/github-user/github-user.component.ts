import { Component, OnInit } from '@angular/core';


import { GitserviceService } from '../services/gitservice.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {
  user?: User;
  repo!:Repository | any;

  constructor(private service: GitserviceService) {
    this.repo = new Repository('','','','',);

  }
  search(typedWord: any) {
    this.service.find(typedWord).then((success) => {
      this.user = this.service.user
    })
    this.service.repoHandler(typedWord).then((success) => {
      this.repo = this.service.repo;
    },
      (error) => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
    this.search('asandelarvine')
  }

}
