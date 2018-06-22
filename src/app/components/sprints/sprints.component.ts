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
<<<<<<< HEAD

  page = 1;
=======
  page = 4;
>>>>>>> 0130c3e2f2bea12bce1d6f43108edb8d10dca7da
  term: any = '' ;
  log_email = '';
  constructor(public postService: PostService , private router: Router) { }
  pro_value = 22;
  posts = [] ;
   show ;

   private postsSub: Subscription;

   sprints = [

    {value: '5', viewValue: 'Instant(5s)'},
    {value: '300', viewValue: 'Very short(5min)'},
    {value: '600', viewValue: 'Short (10min)'},
    {value: '1500', viewValue: 'Pomodoro (25min)'},
    {value: '2700', viewValue: 'Long (45min)'},
    {value: '3600', viewValue: 'Very long (60min)'},
  ];

<<<<<<< HEAD
  collectionSize ;
=======

>>>>>>> 0130c3e2f2bea12bce1d6f43108edb8d10dca7da
  public selectedValue: any;
  public timePromise: any;
  value = 0;
  selectOne: any = '';

  s_str: any  = 0;
  changeClient() {
    alert(11);
   // this.selectOne = event.target.value;
  }


  onAddPost(form2: NgForm) {

<<<<<<< HEAD
    // if (form2.invalid) {
    //   alert('please innput description');
    //   return;
    // }



    if (form2.value.length === '') {
      alert('please choose length');
=======
    if (form2.invalid) {
      alert('please innput description');
>>>>>>> 0130c3e2f2bea12bce1d6f43108edb8d10dca7da
      return;
    }

    if (form2.value.description === '') {
      alert('please input description');
      return;
    }

    console.log('11111111');
    console.log(form2.value);
    let NavigationExtras : NavigationExtras = {
      queryParams : {'description' :  form2.value.description , 'length' : form2.value.length },
      fragment : 'anchor'
  };
    this.router.navigate(['/alan'] , NavigationExtras);

  }

  deleteAll() {
    this.postService.deleteAllPost();
  }

  ngOnInit() {
<<<<<<< HEAD



=======
>>>>>>> 0130c3e2f2bea12bce1d6f43108edb8d10dca7da
    this.log_email = localStorage.getItem('email');
    console.log(this.posts);
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener().subscribe((data: any) => {
      this.posts = data;
      this.show = this.posts.length > 5 ? true : false;
  });



  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();

  }

<<<<<<< HEAD
  pagechange () {
    alert(this.collectionSize);

  }
=======

>>>>>>> 0130c3e2f2bea12bce1d6f43108edb8d10dca7da

}

