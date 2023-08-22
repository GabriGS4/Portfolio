import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasDetailsComponent } from './ofertas-details.component';

describe('OfertasDetailsComponent', () => {
  let component: OfertasDetailsComponent;
  let fixture: ComponentFixture<OfertasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
