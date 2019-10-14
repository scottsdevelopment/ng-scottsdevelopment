import { Component, OnInit, ComponentFactoryResolver, ViewChild, Type, Compiler, ComponentFactory, NgModule, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HtmlLoaderComponent } from 'src/app/html-loader/html-loader.component';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from 'src/app/code-block/code-block.component';
import { JitModule } from 'src/app/jit/jit.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor() {

  }

  ngOnInit() {
  }

}
