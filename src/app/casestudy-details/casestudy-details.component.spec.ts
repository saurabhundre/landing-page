import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyDetailsComponent } from './casestudy-details.component';

describe('CasestudyDetailsComponent', () => {
  let component: CasestudyDetailsComponent;
  let fixture: ComponentFixture<CasestudyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasestudyDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasestudyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
