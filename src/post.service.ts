import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';






@Injectable({providedIn : 'root'})

export class PostService {

  constructor(private http: HttpClient ) {

  }

  private posts: any = [];
  private postUpdated = new Subject();
  getPosts() {

    this.http.get<{message: string , posts: string}>('http://localhost:3000/api/posts')
    .pipe()
    .subscribe((postData) => {
      this.posts = postData.posts;
      this.postUpdated.next([...this.posts]);
    });

  }

  addPost(_title: string , _content: string) {
    const post = {id: null , title: _title, content: _content };

    this.http.post<{message: string}>('http://localhost:3000/api/posts', post)
    .subscribe(responseData => {
      console.log(responseData.message);
      this.posts.push(post);
      this.postUpdated.next([...this.posts]);   // send data to out
    });

  }


  addSprint(length: string , status: string , data: string , start: string , finish: string , description: string) {
    console.log('length:' + length + '-- status:' + status);
    const post = {id: null , length: length , status: status , data: data , start: start , finish: finish , description: description};
    console.log(post);
    this.http.post('http://localhost:3000/api/posts', post)
    .subscribe(responseData => {
      console.log(responseData);
      this.posts.push(post);
      this.postUpdated.next([...this.posts]);   // send data to out
    });

  }




  deletePost(postId: string) {
    console.log('@@@:' + postId);
    this.http.delete('http://localhost:3000/api/posts/' + postId).subscribe(() => {
      console.log('Deleted!!!!');
      this.getPosts();

    });
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
}
