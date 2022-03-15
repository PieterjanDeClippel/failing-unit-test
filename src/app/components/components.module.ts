import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsOffcanvasHostComponent } from './offcanvas-host/offcanvas-host.component';
import { BsOffcanvasComponent } from './offcanvas/offcanvas.component';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';



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
  ],
  providers: [{
    provide: 'PORTAL_FACTORY',
    useValue: (injector: Injector) => {
      return new ComponentPortal(BsOffcanvasComponent, null, injector);
    }
  }]
})
export class ComponentsModule { }
