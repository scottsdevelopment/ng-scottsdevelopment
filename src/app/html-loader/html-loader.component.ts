import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-html-loader',
  templateUrl: './html-loader.component.html',
  styleUrls: ['./html-loader.component.scss']
})
export class HtmlLoaderComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
