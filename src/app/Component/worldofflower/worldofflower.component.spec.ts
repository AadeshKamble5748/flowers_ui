import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldofflowerComponent } from './worldofflower.component';

describe('WorldofflowerComponent', () => {
  let component: WorldofflowerComponent;
  let fixture: ComponentFixture<WorldofflowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldofflowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldofflowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
