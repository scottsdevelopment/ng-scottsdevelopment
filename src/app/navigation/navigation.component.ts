import { Component, OnInit } from '@angular/core';
import { Router, Route } from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  public open: boolean = false;
  public routes: Route[] = [];
  constructor(private router: Router) { 
  }

  ngOnInit() {
    // Read our router config and push the routes we want to our route list when the data properties for navigation and title are set.
    for( let route of this.router.config ) {
      if( route.data && route.data.navigation && route.data.title ) {
        this.routes.push(route);
      }
    }
  }

  toggle() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }
}
