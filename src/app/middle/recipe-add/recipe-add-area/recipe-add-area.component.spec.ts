import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddAreaComponent } from './recipe-add-area.component';

describe('RecipeAddAreaComponent', () => {
  let component: RecipeAddAreaComponent;
  let fixture: ComponentFixture<RecipeAddAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeAddAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeAddAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
