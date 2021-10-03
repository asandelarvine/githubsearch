import { Component, OnInit } from '@angular/core';


import { GitserviceService } from '../services/gitservice.service';
import { User } from '../user';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {
  user!: User;

  constructor(private service: GitserviceService) {

  }
  search(typedWord: any) {
    this.service.find(typedWord).then((success) => {
      this.user = this.service.user
    })
  }

  ngOnInit(): void {
    this.search('asandelarvine')
  }

}
