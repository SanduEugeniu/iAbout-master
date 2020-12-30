import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import {Router} from '@angular/router';
import {Post} from '../_model/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private router: Router;
  user: any;
  constructor(private http: HttpClient) {}

  addPost(newPost: Post): any {
    return this.http.post<any>(`${environment.apiUrl}/post/post/add-post`, {
      email: newPost.mail ,
      content: newPost.content,
      name: newPost.firstName,
      title: newPost.title,
      category: newPost.category,
      surname: newPost.lastName })
      .pipe(map(post => {
        return post;
      }));
  }
}
