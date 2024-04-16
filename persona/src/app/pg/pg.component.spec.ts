import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PgComponent } from './pg.component';

describe('PgComponent', () => {
  let component: PgComponent;
  let fixture: ComponentFixture<PgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PgComponent]
    });
    fixture = TestBed.createComponent(PgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
