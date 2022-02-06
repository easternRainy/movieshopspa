import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesOfGenreComponent } from './movies-of-genre.component';

describe('MoviesOfGenreComponent', () => {
  let component: MoviesOfGenreComponent;
  let fixture: ComponentFixture<MoviesOfGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesOfGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesOfGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
