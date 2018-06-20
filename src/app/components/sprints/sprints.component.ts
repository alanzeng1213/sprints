import { Component, OnInit, OnDestroy  } from '@angular/core';

import { Subscription } from 'rxjs';
import { PostService } from '../../../post.service';
import { NgForm } from '@angular/forms';

import { Router , NavigationExtras  } from '@angular/router';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit  , OnDestroy {

  constructor(public postService: PostService , private router: Router) { }
  pro_value = 22;
  posts = [] ;
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
  value = 0;
  selectOne: any = '';

  s_str: any  = 0;
  changeClient() {
    alert(11);
   // this.selectOne = event.target.value;
  }


  onAddPost(form2: NgForm) {
    if (form2.invalid) {
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

  ngOnInit() {
    console.log(this.posts);
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener().subscribe((data: any) => {
      this.posts = data;
  });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();

  }


  //  process bar .......


  start () {
  //   alert(num + '--' + tagname);

  this.timePromise = setInterval(    // 5s run to 100
    (success) => {
      this.pro_value = this.pro_value + 1 ;
      if (this.pro_value >= 100) {
       // this.endHours = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
       window.clearInterval(this.timePromise);

      //  this.postService.addSprint(len, 'Completed' , this.date , this.hours , this.endHours, this.desc);
      //   this.router.navigate(['/sprint'] );
      } else {
      }
    }, 50);


  }

}

