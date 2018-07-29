import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ContentComponent } from './Components/content/content.component';
import { AnimeDetailsCardComponent } from './Components/content/anime-details-card/anime-details-card.component';
import { ContentHeaderComponent } from './Components/content/content-header/content-header.component';

import { AnimesService } from './Services/animes.service';
import { UsersService } from './Services/users.service';
import { CategoriesService } from './Services/categories.service';

import { SortPipe } from './Pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    AnimeDetailsCardComponent,
    ContentHeaderComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AnimesService,
    UsersService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
