import { ComponentFixture, TestBed } from '@angular/core/testing';
import LighthouseComponent from './lighthouse.component';

describe('LighthouseComponent', () => {
  let component: LighthouseComponent;
  let fixture: ComponentFixture<LighthouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LighthouseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LighthouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
