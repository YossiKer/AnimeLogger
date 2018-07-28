import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../Objects/User';
import { UserAnime } from '../Objects/UserAnime'
import { Anime } from '../Objects/Anime';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return <Observable<User[]>>this.http.get(this.baseUrl + '/');
  }

  getUser(username: string): Observable<User>{
    return <Observable<User>>this.http.get(this.baseUrl + '/' + username);
  }

  getUserAnimes(username: string): Observable<Anime[]> {
    return <Observable<UserAnime[]>>this.http.get(this.baseUrl + '/' + username + '/Animes');
  }

  addUser(newUser: User): Observable<User> {
    return <Observable<User>>this.http.post(this.baseUrl + '/', newUser);
  }

  addUserAnime(newUserAnime: User): Observable<UserAnime> {
    return <Observable<UserAnime>>this.http.post(this.baseUrl + '/Anime', newUserAnime);
  }

  deleteUser(username: string): Observable<User> {
    return <Observable<User>>this.http.delete(this.baseUrl + '/' + username);
  }
}
