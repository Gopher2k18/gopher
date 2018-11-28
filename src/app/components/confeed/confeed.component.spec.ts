import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfeedComponent } from './confeed.component';

describe('ConfeedComponent', () => {
  let component: ConfeedComponent;
  let fixture: ComponentFixture<ConfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
