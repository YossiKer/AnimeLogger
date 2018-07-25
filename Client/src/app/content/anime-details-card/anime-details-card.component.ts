import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anime-details-card',
  templateUrl: './anime-details-card.component.html',
  styleUrls: ['./anime-details-card.component.scss']
})
export class AnimeDetailsCardComponent implements OnInit {

  @Input() size;

  constructor() { }

  ngOnInit() {
  }

}
