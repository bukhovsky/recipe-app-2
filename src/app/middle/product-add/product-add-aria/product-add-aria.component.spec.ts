import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddAriaComponent } from './product-add-aria.component';

describe('ProductAddAriaComponent', () => {
  let component: ProductAddAriaComponent;
  let fixture: ComponentFixture<ProductAddAriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddAriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddAriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
