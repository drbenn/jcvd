import { Component, Input, OnInit } from '@angular/core';
import { MovieComponentData } from '../models/jcvd.models';


@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {
  @Input() movieData: MovieComponentData;

  constructor() { }

  ngOnInit(): void {
  }

}
