import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/shared/models/Cast';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {

  @Input() cast!: Cast;
  constructor() { }

  ngOnInit(): void {
  }

}
