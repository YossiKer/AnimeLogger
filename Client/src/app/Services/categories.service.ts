import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Objects/Category';
import { Anime } from '../Objects/Anime';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return <Observable<Category[]>>this.http.get(this.baseUrl + '/');
  }

  getCategory(categoryName: string): Observable<Category>{
    return <Observable<Category>>this.http.get(this.baseUrl + '/' + categoryName);
  }

  getCategoryAnimes(categoryName: string): Observable<Anime[]> {
    return <Observable<Anime[]>>this.http.get(this.baseUrl + '/' + categoryName + '/Animes');
  }

  addCategory(newCategory: Category): Observable<Category> {
    return <Observable<Category>>this.http.post(this.baseUrl + '/', newCategory);
  }

  udpateCategory(newCategory: Category): Observable<Category> {
    return <Observable<Category>>this.http.put(this.baseUrl + '/', newCategory);
  }

  deleteCategory(categoryName: string) {
    return <Observable<Category>>this.http.delete(this.baseUrl + '/' + categoryName);
  }
  
}
