import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Output() onMenuClick: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  _onMenuClick() {
    this.onMenuClick.emit();
  }
}
