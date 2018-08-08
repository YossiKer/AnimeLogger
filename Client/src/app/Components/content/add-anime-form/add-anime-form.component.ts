import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Anime } from '../../../Objects/Anime';
import { AnimesService } from '../../../Services/animes.service';
import { UsersService } from '../../../Services/users.service';
import { UserAnime } from '../../../Objects/UserAnime';

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

  constructor(private fb: FormBuilder, 
              private animesService: AnimesService,
              private usersService: UsersService) { }

  ngOnInit() {
    this.seenLatestEpisode = false;
    this.loadSelectAnimes();
  }

  loadSelectAnimes(): void {
    this.animesService.getAnimes().subscribe(
      (animes: Anime[]) => {
        this.usersService.getUserAnimes('YossiK').subscribe(
          (userAnimes: Anime[]) => {
            this.animes = [];

            for (let anime of animes) {
              if (!userAnimes.find(userAnime => userAnime.anime_name === anime.anime_name)) {
                this.animes.push(anime);
              }
            }

            console.log(this.animes)
          },
          (error) => {
            console.log(error)
          }
        );
      }, 
      (error) => {
        console.log(error);
      }
    );
  }

  sendAddedAnime() {
    let latestEpisode: FormControl = (this.animeAdditionForm.get('current_episode') as FormControl);
    latestEpisode.enable();

    const formValue = this.animeAdditionForm.value;

    let newAnime: UserAnime = (this.animes.find(anime => anime.anime_name === formValue.anime_name) as UserAnime);

    newAnime.username = 'YossiK';
    newAnime.current_episode = formValue.current_episode;
    
    this.usersService.addUserAnime(newAnime).subscribe(
      (status) => {
        if (status) {
          this.loadSelectAnimes();
        } else {
          console.log('could not add the anime');
        }
      },
      (error) => {
        console.log(error);
      }
    );

    this.initForm();
  }

  animeSelectChanged(animeName: string): void {
    let seenLatestEpisode: FormControl = (this.animeAdditionForm.get('seen_latest_episode') as FormControl);
    let latestEpisode: FormControl = (this.animeAdditionForm.get('current_episode') as FormControl);

    seenLatestEpisode.setValue(false);
    
    latestEpisode.setValue('');
    latestEpisode.enable();
  }

  checkboxChanged(animeName: string): void {
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

  initForm() {
    (this.animeAdditionForm.get('anime_name') as FormControl).setValue('');
    (this.animeAdditionForm.get('current_episode') as FormControl).setValue('');
    (this.animeAdditionForm.get('seen_latest_episode') as FormControl).setValue(false);
  }
}
