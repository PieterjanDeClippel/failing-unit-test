import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffcanvasHostComponent } from './offcanvas-host/offcanvas-host.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';



@NgModule({
  declarations: [
    OffcanvasHostComponent,
    OffcanvasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OffcanvasHostComponent,
    OffcanvasComponent
  ]
})
export class ComponentsModule { }
