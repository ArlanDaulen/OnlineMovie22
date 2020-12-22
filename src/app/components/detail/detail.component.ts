import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public itemId;
  public itemName;
  public itemUrl;
  public itemRating;
  public itemSlogan;
  public itemDate;
  public itemCountry;
  public itemGenre;
  public itemTranslation;
  public itemTime;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.itemName = this.dataService.movie.name;
    this.itemUrl = this.dataService.movie.url;
    this.itemRating = this.dataService.movie.rating;
    this.itemSlogan = this.dataService.movie.slogan;
    this.itemDate = this.dataService.movie.date;
    this.itemCountry = this.dataService.movie.country;
    this.itemGenre = this.dataService.movie.genre;
    this.itemTranslation = this.dataService.movie.translation;
    this.itemTime = this.dataService.movie.time;
  }

}
