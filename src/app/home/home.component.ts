import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { MovieCard } from '../shared/models/moviecard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService : MovieService) { }

  movieCards!: MovieCard[];
  
  ngOnInit(): void {
    // used to call API
    this.movieService.getTopGrossingMovies().subscribe(
      // we need to initialize our data object
      // Observable<MovieCard>
      // Task<MovieCard>
      m => {
        this.movieCards = m;
        console.log('inside the home component OnInit method');
        console.log(this.movieCards);
      }
    )
  }

}
