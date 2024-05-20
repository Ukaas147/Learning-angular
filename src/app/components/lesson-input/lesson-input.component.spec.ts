import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonInputComponent } from './lesson-input.component';

describe('LessonInputComponent', () => {
  let component: LessonInputComponent;
  let fixture: ComponentFixture<LessonInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
