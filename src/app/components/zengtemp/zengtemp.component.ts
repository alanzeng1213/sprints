import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../post.service';
import { Router , NavigationExtras  } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {PushNotificationsModule, PushNotificationsService } from 'ng-push';
@Component({
  selector: 'app-zengtemp',
  templateUrl: './zengtemp.component.html',
  styleUrls: ['./zengtemp.component.css']
})
export class ZengtempComponent implements OnInit {


  constructor(private pushNotifications: PushNotificationsService , public postService: PostService ,
     private router: Router , private routeActive: ActivatedRoute  ) { }

     currentStateName = 'Finished!!!';
  pro_value = 0;
  public timePromise: any;


  desc: any = '' ;
  length: any = '';


  d: any =  new Date().getMonth() + 1 ;


  date: any  = new Date().getFullYear() + '-' + this.d + '-' + new Date().getDate();
  hours =  new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
  endHours = '';

  timer(len2) {

    if (len2 === 'Instant(5s)' ) {
      this.timePromise = setInterval(    // 5s run to 100
        (success) => {
          this.pro_value = this.pro_value + 1 ;
          if (this.pro_value >= 100) {
            this.endHours = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
           window.clearInterval(this.timePromise);
           this.notify();
          this.postService.addSprint('Instant(5s)', 'Completed' , this.date , this.hours , this.endHours, this.desc);

            this.router.navigate(['/sprints'] );
          } else {
          }
        }, 50);
    }

    if (len2 === 'Very short(5min)' ) {
      this.timePromise = setInterval(
        (success) => {
          this.pro_value = this.pro_value + 1 ;
          if (this.pro_value >= 100) {
            this.endHours = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
           window.clearInterval(this.timePromise);
           this.notify();
           this.postService.addSprint('Very short(5min)' , 'Completed' , this.date , this.hours , this.endHours, this.desc);
            this.router.navigate(['/sprint'] );
          } else {
          }
        }, 3000);
    }

    if (len2 === 'Short (10min)' ) {
      this.timePromise = setInterval(
        (success) => {
          this.pro_value = this.pro_value + 1 ;
          if (this.pro_value >= 100) {
            this.endHours = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
           window.clearInterval(this.timePromise);
           this.notify();
           this.postService.addSprint('Short (10min)' , 'Completed' , this.date , this.hours , this.endHours, this.desc);
            this.router.navigate(['/sprint'] );
          } else {
          }
        }, 6000);
    }

    if (len2 === 'Pomodoro (25min)' ) {
      this.timePromise = setInterval(
        (success) => {
          this.pro_value = this.pro_value +  1 ;
          if (this.pro_value >= 100) {
            this.endHours = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
           window.clearInterval(this.timePromise);
           this.notify();
           this.postService.addSprint('Pomodoro (25min)' , 'Completed' , this.date , this.hours , this.endHours, this.desc);
            this.router.navigate(['/sprint'] );
          } else {
          }
        }, 15000);
    }

    if (len2 === 'Long (45min)' ) {
      this.timePromise = setInterval(
        (success) => {
          this.pro_value = this.pro_value + 1 ;
          if (this.pro_value >= 100) {
            this.endHours = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
           window.clearInterval(this.timePromise);
           this.notify();
           this.postService.addSprint('Long (45min)' , 'Completed' , this.date , this.hours , this.endHours, this.desc);
            this.router.navigate(['/sprint'] );
          } else {
          }
        }, 27000);
    }

    if (len2 === 'Very long (60min)' ) {
      this.timePromise = setInterval(
        (success) => {
          this.pro_value = this.pro_value + 1 ;
          if (this.pro_value >= 100) {
           window.clearInterval(this.timePromise);
           this.notify();
           this.postService.addSprint('Very long (60min)' , 'Completed' , this.date , this.hours , this.endHours, this.desc);
            this.router.navigate(['/sprint'] );
          } else {
          }
        }, 36000);
    }
  }


  ngOnInit() {


    this.routeActive.queryParams.subscribe (params => {
      this.length = params['length'];
      console.log(params );
      this.desc = params['description'];

    });

   this.pushNotifications.requestPermission();
   this.timer(this.length);

  }

  timerStop() {
    if (confirm('Stop the sprint?')) {
      this.endHours = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
      window.clearInterval(this.timePromise);

      // tslint:disable-next-line:max-line-length
      this.postService.addSprint(this.length, 'Cancelled(at ' + this.pro_value + '%)' , this.date , this.hours , this.endHours, this.desc);
      this.router.navigate(['/sprints'] );
    }
  }
  // timerStop() {

  //    this.endHours = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();


  //    this.postService.addSprint(this.length, 'Cancelled(at ' + this.pro_value + '%)' , this.date , this.hours ,
  // this.endHours, this.desc);
  //     this.router.navigate(['/sprints'] );


  // }
  // Stop() {
  //   window.clearInterval(this.timePromise);
  //   // this.postService.addSprint(this.length, 'Cancelled(at ' + this.pro_value + '%)' ,
  //  this.date , this.hours , this.endHours, this.desc);
  //   // this.router.navigate(['/sprints'] );
  // }

  // cancle() {
  //   this.timer(this.length);

  // }




  notify() {
    const options = {
        body: `Your ${this.length} has ended.`,
        icon: '../../../assets/logo.png'
    };

    this.pushNotifications.create('Timeout!', options)
        .subscribe(res => {
            if (res.event.type === 'click') {
                res.notification.close();

            }

        });
  }


}
