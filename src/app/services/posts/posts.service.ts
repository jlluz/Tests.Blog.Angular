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
    return this._http.get<Array<IPost>>('http://localhost:3000/posts');
  }

  public updatePostLikeCount(post: IPost) : void {
    this._http.patch<IPost>(`http://localhost:3000/posts/)${post.id}`, { likeCount : post.likeCount});
  }
}
