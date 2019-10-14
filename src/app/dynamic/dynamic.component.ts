import { Component, OnInit, ComponentFactoryResolver, Type, Compiler, ComponentFactory, NgModule, ViewContainerRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JitModule } from 'src/app/jit/jit.module';

@Component({
  selector: 'ng-dynamic',
  template: ''
})
export class DynamicComponent implements OnInit {
  @Input() src: string;
  contents: string;
  factories: ComponentFactory<any>[] = [];

  constructor(private http: HttpClient, private viewContainerRef: ViewContainerRef, private compiler: Compiler, private componentFactoryResolver: ComponentFactoryResolver) {

  }
  
  ngOnInit() {
    console.log(this.src);
    if (!this.src) {
      return;
    }
    this.http.get(this.src, { responseType: "text"}).subscribe((contents: string) => {
      this.contents = contents;
      let component = this.createDynamicComponent();
      let componentFactory = this.getFactory(component);
      let componentRef = this.viewContainerRef.createComponent(componentFactory);
      componentRef.changeDetectorRef.detectChanges();
    })
  }

  getFactory(component: any): ComponentFactory<any> {
    let factory = this.factories.find(factory => factory.componentType === component);
    if (!factory) {
      factory = this._createAdHocComponentFactory(component);
    }
    return factory;
  }

  _createAdHocComponentFactory(component: Type<any>): ComponentFactory<any> {
    @NgModule({
      declarations: [component],
      entryComponents: [component],
      imports: [JitModule, CommonModule],
    })
    class AdHocModule {}
    let factory = this.compiler.compileModuleAndAllComponentsSync(AdHocModule).componentFactories
      .find(factory => factory.componentType === component);
    this.factories.push(factory);
    return factory;
  }
  
  private createDynamicComponent(): Type<any> {
    @Component({
      template: this.contents
    })
    class InsertedComponent { }
   
    return InsertedComponent;
  }

}
