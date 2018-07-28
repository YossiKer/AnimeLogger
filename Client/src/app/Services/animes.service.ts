import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Anime } from '../Objects/Anime';
import { Category } from '../Objects/Category';
import { User } from '../Objects/User';
import { AnimeCategory } from '../Objects/AnimeCategory';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  baseUrl: string = 'http://localhost:3000/animes';

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Anime[]>{
    return <Observable<Anime[]>>this.http.get(this.baseUrl + '/');
  }

  getAnime(animeName: string): Observable<Anime> {
    return <Observable<Anime>>this.http.get(this.baseUrl + '/' + animeName)
  }

  getAnimeCategories(animeName: string): Observable<Category[]> {
    return <Observable<Category[]>>this.http.get(this.baseUrl + '/' + animeName + '/Categories');
  }

  getAnimeUsers(animeName: string): Observable<User[]> {
    return <Observable<User[]>>this.http.get(this.baseUrl + '/' + animeName + '/Users');
  }

  addAnime(newAnime: Anime): Observable<Anime> {
    return <Observable<Anime>>this.http.post(this.baseUrl, newAnime);
  }

  addAnimeCategory(newAnimeCategory: AnimeCategory): Observable<AnimeCategory>{
    return <Observable<AnimeCategory>>this.http.post(this.baseUrl + '/Category', newAnimeCategory);
  }

  updateAnime(newAnime: Anime): Observable<Anime> {
    return <Observable<Anime>>this.http.put(this.baseUrl, newAnime);
  }

  deleteAnime(animeName: string): Observable<Anime> {
    return <Observable<Anime>>this.http.delete(this.baseUrl + '/' + animeName);
  }

  deleteAnimeCategory(animeName: string, categoryName: string): Observable<AnimeCategory> {
    return <Observable<AnimeCategory>>this.http.delete(this.baseUrl + '/' + animeName + '/' + categoryName);
  }
}
