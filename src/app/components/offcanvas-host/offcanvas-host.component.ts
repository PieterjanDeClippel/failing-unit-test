import { AfterViewInit, Component, ComponentRef, EventEmitter, Injector, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core';
import { BehaviorSubject, combineLatest, filter, Subject, takeUntil } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';
import { OffcanvasPosition } from '../../types/position';
import { ComponentPortal } from '@angular/cdk/portal';
import { BsOffcanvasComponent } from '../offcanvas/offcanvas.component';

@Component({
  selector: 'bs-offcanvas',
  templateUrl: './offcanvas-host.component.html',
  styleUrls: ['./offcanvas-host.component.scss']
})
export class BsOffcanvasHostComponent implements AfterViewInit, OnDestroy {

  constructor(private overlayService: Overlay, private rootInjector: Injector) {
    this.show$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((show) => {
        if (this.component) {
          this.showChange.emit(show);
          this.component.instance.show$.next(show);
        }
      });
  }

  content!: TemplateRef<any>;
  component!: ComponentRef<BsOffcanvasComponent>;
  viewInited$ = new BehaviorSubject<boolean>(false);
  show$ = new BehaviorSubject<boolean>(false);
  destroyed$ = new Subject();

  ngAfterViewInit() {
    const injector = Injector.create({
      providers: [
        { provide: 'OFFCANVAS_CONTENT', useValue: this.content },
      ],
      parent: this.rootInjector,
    });
    const portal = new ComponentPortal(BsOffcanvasComponent, null, injector);
    const overlayRef = this.overlayService.create({
      scrollStrategy: this.overlayService.scrollStrategies.block(),
      positionStrategy: this.overlayService.position().global()
        .top('0').left('0').bottom('0').right('0'),
      hasBackdrop: false
    });

    // The unit test should use a mock class for BsOffcanvasComponent => BsOffcanvasMockComponent
    this.component = overlayRef.attach<BsOffcanvasComponent>(portal);

    this.viewInited$.next(true);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

  //#region Show
  @Output() public showChange = new EventEmitter<boolean>();
  @Input() public set show(value: boolean) {
    this.show$.next(value);
  }
  public get show() {
    return this.show$.value;
  }
  //#endregion

}
