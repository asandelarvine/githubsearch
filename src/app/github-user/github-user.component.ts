import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GitserviceService } from '../services/gitservice.service';
import { User } from '../user';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {
  user!: User;

  constructor(private gitService: GitserviceService) {

  }
  findThisUser(nameOfUser: any) {
    this.gitService.findUser(nameOfUser).then((success) => {
      this.user = this.gitService.user
    })
  }

  ngOnInit(): void {
    this.findThisUser('ronah289')
  }

}
