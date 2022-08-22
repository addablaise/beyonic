import { Component, OnInit } from '@angular/core';
import user from 'src/app/core/data/user';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User = user;
  constructor() { }

  ngOnInit(): void {
  }

}
