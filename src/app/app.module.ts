import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthComponent } from './components/auth/auth.component';
import { CallbackComponent } from './components/callback/callback.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './components/auth/auth.service';
import { SprintsComponent } from './components/sprints/sprints.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import { FormsModule  } from '@angular/forms';
import 'rxjs/RX';
import { HttpClientModule } from '@angular/common/http';  // IgxIconModule,
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ZengtempComponent } from './components/zengtemp/zengtemp.component';
import { FilterPipe } from './filter.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD

import { PushNotificationsModule  } from 'ng-push';
=======
>>>>>>> 0130c3e2f2bea12bce1d6f43108edb8d10dca7da

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AuthComponent,
    CallbackComponent,
    HeaderComponent,
    SprintsComponent,
    ZengtempComponent,
    FilterPipe,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkTableModule,
<<<<<<< HEAD
    PushNotificationsModule,

=======
>>>>>>> 0130c3e2f2bea12bce1d6f43108edb8d10dca7da
    NgbModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    })

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
