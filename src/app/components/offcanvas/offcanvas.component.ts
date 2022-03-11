import { Component, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OffcanvasPosition } from '../../types/position';

@Component({
  selector: 'bs-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class BsOffcanvasComponent {

  constructor() { }

  show$ = new BehaviorSubject<boolean>(false);

}
