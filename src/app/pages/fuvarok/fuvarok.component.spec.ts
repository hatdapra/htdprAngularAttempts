import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuvarokComponent } from './fuvarok.component';

describe('FuvarokComponent', () => {
  let component: FuvarokComponent;
  let fixture: ComponentFixture<FuvarokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuvarokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuvarokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
