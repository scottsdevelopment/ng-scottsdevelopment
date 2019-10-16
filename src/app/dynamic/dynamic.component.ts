import { Component, OnInit, Compiler, ComponentFactory, NgModule, ViewContainerRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JitModule } from 'src/app/jit/jit.module';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'ng-dynamic',
  template: ''
})
export class DynamicComponent implements OnInit {
  @Input() src: string;
  contents: string;
  factories: ComponentFactory<any>[] = [];

  constructor(private http: HttpClient, private viewContainerRef: ViewContainerRef, private compiler: Compiler) {

  }
  
  ngOnInit() {
    if (!this.src) {
      return;
    }
    this.http.get(this.src, { responseType: "text" }).subscribe(
      (contents: string) => {
        this.contents = contents;
        try {
          let componentRef = this.viewContainerRef.createComponent(this.addDynamicModule());
          componentRef.changeDetectorRef.detectChanges();
        } catch(error) {
          console.log(error);
        }
      },
      (error) => { console.log(error); }
    )
  }

  addDynamicModule(): ComponentFactory<any> {
    @Component({
      template: this.contents
    })
    class TemplateComponent { 
      constructor() {
      }
    }
    @NgModule({
      declarations: [TemplateComponent],
      imports: [JitModule, BrowserModule],
    })
    class TemplateModule {}

    const _ngModuleFactory = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
    const _cmpFactory = _ngModuleFactory.componentFactories.find((_componentFactory) =>
      _componentFactory.componentType === TemplateComponent
    );
    return _cmpFactory;
  }

}
