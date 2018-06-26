import { Component, OnInit, OnDestroy , Pipe } from '@angular/core';

import { Subscription } from 'rxjs';
import { PostService } from '../../../post.service';
import { NgForm } from '@angular/forms';

import { Router , NavigationExtras  } from '@angular/router';



@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css'],


})

export class SprintsComponent implements OnInit  , OnDestroy   {


  // tslint:disable-next-line:no-inferrable-types
  page: number = 1;
  term: any = '' ;
  // tslint:disable-next-line:no-inferrable-types
  log_email: string = '';
  constructor(public postService: PostService , private router: Router) { }
  // tslint:disable-next-line:no-inferrable-types
  pro_value: number = 22;
  posts: any = [] ;
   show ;
  totalcount: any = 0;
   private postsSub: Subscription;

   sprints = [

    {value: '5', viewValue: 'Instant(5s)'},
    {value: '300', viewValue: 'Very short(5min)'},
    {value: '600', viewValue: 'Short (10min)'},
    {value: '1500', viewValue: 'Pomodoro (25min)'},
    {value: '2700', viewValue: 'Long (45min)'},
    {value: '3600', viewValue: 'Very long (60min)'},
  ];


  public selectedValue: any;
  public timePromise: any;
  // tslint:disable-next-line:no-inferrable-types
  value: number = 0;
  selectOne: any = '';

  s_str: any  = 0;

// tslint:disable-next-line:no-inferrable-types
num: number = 0;

  onAddPost(form2: NgForm) {

    // if (form2.invalid) {
    //   alert('please innput description');
    //   return;
    // }



    if (form2.value.length === '') {
      alert('please choose length');
      return;
    }

    if (form2.value.description === '') {
      alert('please input description');
      return;
    }

    const navigationExtras: NavigationExtras = {
      queryParams : {'description' :  form2.value.description , 'length' : form2.value.length },
      fragment : 'anchor'
  };
    this.router.navigate(['/alan'] , navigationExtras);

  }

  deleteAll() {
    this.postService.deleteAllPost();
  }

  ngOnInit() {



    this.log_email = localStorage.getItem('email');

    this.postService.getPosts(5, 1);
    this.postsSub = this.postService.getPostUpdateListener().subscribe((data: any) => {

      if (this.num === 0 ) {
        this.totalcount = data;
      }
      if (this.num === 1 ) {
        this.posts = data;
      }
    this.posts = data;
     // this.show = this.posts.length > 4 ? true : false;
    this.num++;



  });



  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();

  }

  pagechange () {

   console.log(this.page);
   this.postService.getPosts(5, this.page);
  }

}

