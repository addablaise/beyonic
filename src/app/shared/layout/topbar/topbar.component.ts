import { Component, OnInit } from '@angular/core';
import user from 'src/app/core/data/user';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public user: User = user;
  constructor() { }

  ngOnInit(): void {
  }

  initials(name: any) {
    return name.match(/(\b\S)?/g).join("").toUpperCase();
  }
}
