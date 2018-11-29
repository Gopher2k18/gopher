import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredPageComponent } from './starred-page.component';

describe('StarredPageComponent', () => {
  let component: StarredPageComponent;
  let fixture: ComponentFixture<StarredPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
