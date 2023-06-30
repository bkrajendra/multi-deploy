import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathOneComponent } from './path-one.component';

describe('PathOneComponent', () => {
  let component: PathOneComponent;
  let fixture: ComponentFixture<PathOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
