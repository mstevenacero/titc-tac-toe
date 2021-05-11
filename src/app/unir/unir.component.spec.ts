import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirComponent } from './unir.component';

describe('UnirComponent', () => {
  let component: UnirComponent;
  let fixture: ComponentFixture<UnirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
