import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any;
  items: MenuItem[];

  activeItem: MenuItem;

  title = 'my-bio';
  constructor(private primengConfig: PrimeNGConfig) {
    this.items = [
      {
        label: 'Handlooms',
        routerLink: ['travel-log'],
      },
    ];

    this.activeItem = this.items[0];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
