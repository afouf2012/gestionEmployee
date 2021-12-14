import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalaireComponent } from './create-salaire.component';

describe('CreateSalaireComponent', () => {
  let component: CreateSalaireComponent;
  let fixture: ComponentFixture<CreateSalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSalaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
