import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import menus from 'src/app/core/data/mobile-menu';
import { MenuItem } from 'src/app/core/models/menu-item';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent implements OnInit {
  public routerLink?: string;
  public menu: MenuItem[] = menus;

  constructor(private router: Router) {
    this.routerLink = router.url;
  }



  ngOnInit(): void {
  }


  navigate(route: any) {
    this.routerLink = route;
    this.router.navigate([route]);
  }

}
