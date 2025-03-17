import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPost } from '../../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly _http: HttpClient;

  constructor() {
    this._http = inject(HttpClient);
  }

  public getPosts(): Observable<Array<IPost>> {
    console.log(this._http.get<Array<IPost>>('http://localhost:3000/posts'));
    const newLocal = this._http.get<Array<IPost>>('http://localhost:3000/posts');
    console.log(newLocal);
    return newLocal;
  }
}
