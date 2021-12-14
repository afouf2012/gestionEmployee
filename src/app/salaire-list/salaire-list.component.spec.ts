import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaireListComponent } from './salaire-list.component';

describe('SalaireListComponent', () => {
  let component: SalaireListComponent;
  let fixture: ComponentFixture<SalaireListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaireListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
