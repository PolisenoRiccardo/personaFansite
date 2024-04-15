import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGboxComponent } from './pgbox.component';

describe('PGboxComponent', () => {
  let component: PGboxComponent;
  let fixture: ComponentFixture<PGboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PGboxComponent]
    });
    fixture = TestBed.createComponent(PGboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
