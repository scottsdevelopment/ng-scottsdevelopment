import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svg-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: { class: 'icon' }
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
