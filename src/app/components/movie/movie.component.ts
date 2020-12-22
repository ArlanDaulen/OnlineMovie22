import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Movie } from '../../Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private dataService: DataService) { }

  category: Movie[] = []

  ngOnInit(): void {
    this.dataService.getMovie().subscribe(
      (data: Movie[]) =>
        this.category = data["Adventure"]
    );
  }

}
