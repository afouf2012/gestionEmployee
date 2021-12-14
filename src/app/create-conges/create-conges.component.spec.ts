import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCongesComponent } from './create-conges.component';

describe('CreateCongesComponent', () => {
  let component: CreateCongesComponent;
  let fixture: ComponentFixture<CreateCongesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCongesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
