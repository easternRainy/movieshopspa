import { Component, Input, OnInit } from '@angular/core';
import { MovieCard } from 'src/app/shared/models/MovieCard';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movieCard!: MovieCard;
  constructor() { }

  ngOnInit(): void {
  }

}
