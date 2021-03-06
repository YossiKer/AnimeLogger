import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ContentComponent } from './Components/content/content.component';
import { AnimeDetailsCardComponent } from './Components/content/anime-details-card/anime-details-card.component';
import { ContentHeaderComponent } from './Components/content/content-header/content-header.component';
import { AnimeDetailsModalComponent } from './Components/anime-details-modal/anime-details-modal.component';
import { AddAnimeFormComponent } from './Components/content/add-anime-form/add-anime-form.component';

import { AnimesService } from './Services/animes.service';
import { UsersService } from './Services/users.service';
import { CategoriesService } from './Services/categories.service';

import { SortPipe } from './Pipes/sort.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
import { SplitToRowsPipe } from './Pipes/split-to-rows.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    AnimeDetailsCardComponent,
    ContentHeaderComponent,
    AnimeDetailsModalComponent,
    SortPipe,
    FilterPipe,
    SplitToRowsPipe,
    AddAnimeFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AnimesService,
    UsersService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
