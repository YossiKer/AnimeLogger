import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserAnime } from '../../Objects/UserAnime';

@Component({
  selector: 'app-modal',
  templateUrl: './anime-details-modal.component.html',
  styleUrls: ['./anime-details-modal.component.scss']
})
export class AnimeDetailsModalComponent implements OnInit {

  @Output() modalClosed = new EventEmitter();

  @Input() animeDetails: UserAnime;

  constructor() { }

  ngOnInit() {

  }

  extractCategories(): string {
    let categories: string[] = this.animeDetails['categories'];
    let strCategories: string = '';

    for (let category of categories) {
      strCategories += category + ', ';
    }

    strCategories = strCategories.substring(0, strCategories.lastIndexOf(','));
    return strCategories;
  }

  handleClose() {
    this.modalClosed.emit();
  }
}
