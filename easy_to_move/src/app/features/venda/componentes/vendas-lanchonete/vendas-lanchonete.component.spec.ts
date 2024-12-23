import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasLanchoneteComponent } from './vendas-lanchonete.component';

describe('VendasLanchoneteComponent', () => {
  let component: VendasLanchoneteComponent;
  let fixture: ComponentFixture<VendasLanchoneteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendasLanchoneteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendasLanchoneteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
