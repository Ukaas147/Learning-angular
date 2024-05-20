import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTwoExampleComponent } from './page-two-example.component';

describe('PageTwoExampleComponent', () => {
  let component: PageTwoExampleComponent;
  let fixture: ComponentFixture<PageTwoExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTwoExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageTwoExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
