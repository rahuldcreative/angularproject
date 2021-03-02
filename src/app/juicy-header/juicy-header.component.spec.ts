import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuicyHeaderComponent } from './juicy-header.component';

describe('JuicyHeaderComponent', () => {
  let component: JuicyHeaderComponent;
  let fixture: ComponentFixture<JuicyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuicyHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuicyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
