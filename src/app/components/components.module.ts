import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsOffcanvasHostComponent } from './offcanvas-host/offcanvas-host.component';
import { BsOffcanvasComponent } from './offcanvas/offcanvas.component';



@NgModule({
  declarations: [
    BsOffcanvasHostComponent,
    BsOffcanvasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BsOffcanvasHostComponent,
    BsOffcanvasComponent
  ]
})
export class ComponentsModule { }
