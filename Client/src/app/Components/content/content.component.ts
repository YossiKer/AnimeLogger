import { Component, OnInit } from '@angular/core';

import { AnimesService } from '../../Services/animes.service';
import { UsersService } from '../../Services/users.service';

import { Anime } from '../../Objects/Anime';
import { AnimeCategory } from '../../Objects/AnimeCategory';
import { Category } from '../../Objects/Category';
import { User } from '../../Objects/User';
import { UserAnime } from '../../Objects/UserAnime';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  maxCardsInRow: number = 3;
  cardsRows: UserAnime[][] = [];

  currSortType: string;
  currFilter: object;
  currSearchInput: object;

  currUserAnimes: UserAnime[];
  
  loadedAnimes: number;
  finishedLoadingAnimes: boolean;

  clickedAnime: UserAnime;

  currModal: any;
  modalState: number;

  addingAnime: boolean;

  constructor(private animesService: AnimesService,
              private usersService: UsersService) { }

  ngAfterViewChecked() {
    this.currModal = document.getElementsByClassName('app-modal')[0];
  }

  ngOnInit() {
    this.addingAnime = false;
    this.modalState == 0;
    this.finishedLoadingAnimes = false;
    this.usersService.getUserAnimes('YossiK').subscribe(
      (userAnimes: UserAnime[]) => {
        this.currUserAnimes = userAnimes;
        this.loadedAnimes = 0;
        for (let anime of this.currUserAnimes) {
          anime['categories'] = [];
          this.animesService.getAnimeCategories(anime.anime_name).subscribe(
            (categories: Category[]) => {
              for (let category of categories) {
                anime['categories'].push(category.category_name);
              }

              this.loadedAnimes++;
              this.finishedLoadingAnimes = this.currUserAnimes.length === this.loadedAnimes;
            },
            (error: Error) => {
              console.log(error);
            }
          );
        }
      }, 
      (error: Error) => {
        console.log(error);
      }
    );

    window.onclick = (event) => {
      let found = false;

      for (let elementIndex = 0; elementIndex < event['path'].length && !found; elementIndex++) {
        if (event['path'][elementIndex] === this.currModal) {
          found = true;
        }
      }

      if (!found) {
        this.modalState = this.modalState === 0 ? 0 : this.modalState - 1;
      }
    };
  }

  handleFilterChange(newFilter: object): void {
    this.currFilter = newFilter;
  }

  handleSortChange(newSortType: string): void {
    this.currSortType = newSortType;
  }

  handleSearchInputChange(newSearchInput: object): void {
    this.currSearchInput = newSearchInput;
  }

  handleAnimeClick(anime: UserAnime): void {
      this.clickedAnime = anime;
      this.modalState = 2;
  }

  closeModal(): void {
    this.modalState = 0;
  }

  handleAnimeAddition(): void {
    this.addingAnime = !this.addingAnime;
  }
}
