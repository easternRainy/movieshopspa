import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { MovieCard } from '../../models/MovieCard';

@Component({
  selector: 'app-movies-of-genre',
  templateUrl: './movies-of-genre.component.html',
  styleUrls: ['./movies-of-genre.component.css']
})
export class MoviesOfGenreComponent implements OnInit {

  movieCards!: MovieCard[];
  // @Input() genreId: int;
  constructor(private activeRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    
    this.activeRoute.paramMap.subscribe(
      p => {
        const id = Number(p.get("id"));
        this.movieService.getMoviesOfGenre(id).subscribe(
          m => {
            var pagedJsonStr = JSON.stringify(m);
            var pagedJson = JSON.parse(pagedJsonStr);
            console.log(pagedJson.data);
            this.movieCards = pagedJson.data;

          }
        )
      }
    )
  }

}
