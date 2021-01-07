import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListakComponent } from './listak.component';

describe('ListakComponent', () => {
  let component: ListakComponent;
  let fixture: ComponentFixture<ListakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
