import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';


(window as any).global = window;

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'L7AAv1StNAVwTx5OKqtlbrJVyHutQ7t8',
    domain: 'alanzeng.auth0.com',
    responseType: 'token id_token',
    audience: 'https://alanzeng.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile email phone'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
    console.log('authResult!!!!1: ');
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);


        this.router.navigate(['/sprints']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);

      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('email', authResult.idTokenPayload.name);

    // console.log('access_token'+  authResult.accessToken);

  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.remove('email');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

}
