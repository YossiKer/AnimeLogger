import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-anime-form',
  templateUrl: './add-anime-form.component.html',
  styleUrls: ['./add-anime-form.component.scss']
})
export class AddAnimeFormComponent implements OnInit {

  animeAdditionForm = this.fb.group({
    anime_name: ['Enter the anime name'],
    current_episode: ['Enter the current episode']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  sendAddedAnime() {
    console.log(this.animeAdditionForm.value);
  }

}
