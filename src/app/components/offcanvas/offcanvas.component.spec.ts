import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsOffcanvasComponent } from './offcanvas.component';

describe('OffcanvasComponent', () => {
  let component: BsOffcanvasComponent;
  let fixture: ComponentFixture<BsOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsOffcanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
