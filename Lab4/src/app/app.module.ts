import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ShoptableComponent } from './shoptable/shoptable.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ShoptableComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    BrowserModule,
    FormsModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
