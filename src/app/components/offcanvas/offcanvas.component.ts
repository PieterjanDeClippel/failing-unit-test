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

  @Output() backdropClick = new EventEmitter<MouseEvent>();
  show$ = new BehaviorSubject<boolean>(false);
  size$ = new BehaviorSubject<number | null>(null);
  hasBackdrop$ = new BehaviorSubject<boolean>(false);
  position$ = new BehaviorSubject<OffcanvasPosition>('bottom');

}
