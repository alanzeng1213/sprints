import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';






@Injectable({providedIn : 'root'})

export class PostService {

  constructor(private http: HttpClient ) {

  }

  private posts: any = [];
  private postUpdated = new Subject();
  getPosts(postsPerPage: number , currentPage: number) {
    const quertParams = `?pageSize=${postsPerPage}&page=${currentPage}`;
    this.http.get<{message: string , posts: string , count: number}>('http://localhost:3000/api/posts' + quertParams)
    .pipe()
    .subscribe((postData) => {

      this.posts = postData.posts;
      this.postUpdated.next(postData.count);
      this.postUpdated.next(this.posts);
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


  deleteAllPost() {

    this.http.delete('http://localhost:3000/api/posts/').subscribe(() => {
      console.log('Deleted!!!!');
     this.getPosts(5, 1);

    });
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
}
