import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Books } from './store/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }

  get() {
    console.log('get API called to fetch the available books list');
    return this.http.get<Books[]>('http://localhost:3000/books');
  }

  // filterBookById(id: number) {
  //   return this.http.get<Books>('http://localhost:3000/books/' + {id});
  // }
}
