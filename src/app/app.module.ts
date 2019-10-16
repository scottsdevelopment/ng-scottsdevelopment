import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CompilerFactory, Compiler, COMPILER_OPTIONS } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JitModule } from './jit/jit.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './svg/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

export function createCompiler(fn: CompilerFactory): Compiler {
	return fn.createCompiler();
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    DynamicComponent
  ],
  imports: [
    JitModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
