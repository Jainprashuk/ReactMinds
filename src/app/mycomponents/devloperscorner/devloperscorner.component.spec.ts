import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevloperscornerComponent } from './devloperscorner.component';

describe('DevloperscornerComponent', () => {
  let component: DevloperscornerComponent;
  let fixture: ComponentFixture<DevloperscornerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevloperscornerComponent]
    });
    fixture = TestBed.createComponent(DevloperscornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
