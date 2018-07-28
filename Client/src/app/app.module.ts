import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { AnimeDetailsCardComponent } from './content/anime-details-card/anime-details-card.component';
import { ContentHeaderComponent } from './content/content-header/content-header.component';

import { AnimesService } from './Services/animes.service';
import { UsersService } from './Services/users.service';
import { CategoriesService } from './Services/categories.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    AnimeDetailsCardComponent,
    ContentHeaderComponent
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
