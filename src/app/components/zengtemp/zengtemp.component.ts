import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../post.service';
import { Router , NavigationExtras  } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-zengtemp',
  templateUrl: './zengtemp.component.html',
  styleUrls: ['./zengtemp.component.css']
})
export class ZengtempComponent implements OnInit {

  constructor(public postService: PostService , private router: Router , private routeActive: ActivatedRoute ) { }


  pro_value = 0;
  public timePromise: any;
  _value = '';

  desc = '' ;
  length = '';


  timer(len) {

    if (len === 'Instant(5s)' ) {
      this.timePromise = setInterval(    // 5s run to 100
        (success) => {
          this.pro_value = this.pro_value + 1 ;
          if (this.pro_value >= 100) {
           //  this.endHours = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
           window.clearInterval(this.timePromise);

         //  this.postService.addSprint(len, 'Completed' , this.date , this.hours , this.endHours, this.desc);
            this.router.navigate(['/sprints'] );
          } else {
          }
        }, 50);
    }
  }


  ngOnInit() {


    this.routeActive.queryParams.subscribe(function(data) {

      this.desc = data.description;
    //  console.log(this.desc + '!!!');
   });

  //  this.desc = this.routeActive.queryParams._value.description;
  //  this.length = this.routeActive.queryParams._value.length;
   this.timer('Instant(5s)');

  }


}
