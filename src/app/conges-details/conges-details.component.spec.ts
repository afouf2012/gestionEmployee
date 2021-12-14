import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongesDetailsComponent } from './conges-details.component';

describe('CongesDetailsComponent', () => {
  let component: CongesDetailsComponent;
  let fixture: ComponentFixture<CongesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
