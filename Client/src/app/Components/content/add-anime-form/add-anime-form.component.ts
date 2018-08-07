import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Anime } from '../../../Objects/Anime';
import { AnimesService } from '../../../Services/animes.service';

@Component({
  selector: 'app-add-anime-form',
  templateUrl: './add-anime-form.component.html',
  styleUrls: ['./add-anime-form.component.scss']
})
export class AddAnimeFormComponent implements OnInit {

  seenLatestEpisode: boolean;

  animeAdditionForm = this.fb.group({
    anime_name: ['Enter the anime name'],
    current_episode: ['Enter the current episode'],
    seen_latest_episode: false
  });

  animes: Anime[];

  constructor(private fb: FormBuilder, private animesService: AnimesService) { }

  ngOnInit() {
    this.seenLatestEpisode = false;

    this.animesService.getAnimes().subscribe(
      (animes: Anime[]) => {
        this.animes = animes;
        console.log(this.animes);
      }, 
      (error) => {
        console.log(error);
      }
    );
  }

  sendAddedAnime() {
    console.log(this.animeAdditionForm.value);
  }

  checkboxChanged(animeName: string) {
    this.seenLatestEpisode = !this.seenLatestEpisode;

    let control: FormControl = (<FormControl>this.animeAdditionForm.get('current_episode'));
    
    if (this.seenLatestEpisode) {
      if (animeName.length != 0) {
        control.setValue(this.animes.find(anime => anime.anime_name === animeName).latest_episode);
        control.disable();
      }
    } else {
      control.enable();
    }
  }
}
