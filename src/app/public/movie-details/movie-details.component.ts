import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/models/Movie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie!: Movie;

  constructor(private activeRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {

    // get the movie id from the url and call the movie service to get details
    // we use ActivedRoute that will give us all the information about current Route
    // call the movie service to get movie details
    this.activeRoute.paramMap.subscribe(
      p => {
        const id = Number(p.get('id'));
        // console.log('MovieId is: ' + id);
        // console.log('inside movie details component');

        this.movieService.getMovieDetails(id).subscribe(
          m => {
            this.movie = m;
            console.log(this.movie);
          }
        )
      }
    )
    

  }

  

}
