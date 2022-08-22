import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import user from 'src/app/core/data/user';
import menus from 'src/app/core/data/web-menu';
import { Menu } from 'src/app/core/models/menu';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public routerLink?: string;
  public menu: Menu[] = menus;
  public user: User = user;

  constructor(private router: Router) {
    this.routerLink = router.url;
  }

  ngOnInit(): void {
  }

  navigate(route: any) {
    this.routerLink = route;
    this.router.navigate([route]);
  }

  initials(name: any) {
    return name.match(/(\b\S)?/g).join("").toUpperCase();
  }

}
