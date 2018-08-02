import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserAnime } from '../../../Objects/UserAnime';

@Component({
  selector: 'app-anime-details-card',
  templateUrl: './anime-details-card.component.html',
  styleUrls: ['./anime-details-card.component.scss']
})
export class AnimeDetailsCardComponent implements OnInit {

  @Output() animeClicked = new EventEmitter();

  @Input() size: string;
  @Input() userAnime: UserAnime;

  constructor() { }

  ngOnInit() {
  }

  handleClick(): void {
    this.animeClicked.emit(this.userAnime);
  }
}
