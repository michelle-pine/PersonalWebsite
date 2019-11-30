import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabComponent } from './colab.component';

describe('ColabComponent', () => {
  let component: ColabComponent;
  let fixture: ComponentFixture<ColabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
