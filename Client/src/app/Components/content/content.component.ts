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

  currUserAnimes: UserAnime[];
  
  constructor(private animesService: AnimesService,
              private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUserAnimes('YossiK').subscribe(
      (userAnimes: UserAnime[]) => {
        this.currUserAnimes = userAnimes;
      }, 
      (error: Error) => {
        console.log(error);
      }
    );
  }
}
