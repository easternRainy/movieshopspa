import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/shared/models/Login';
import { User } from 'src/app/shared/models/User';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Register } from 'src/app/shared/models/Register';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  // 

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  private currentUserSubject = new BehaviorSubject<User>({} as User);

  public currentUser = this.currentUserSubject.asObservable();

  private jwtHelper = new JwtHelperService();

  login(userLogin: Login): Observable<boolean> {
    // take email/password fromlogin componentand post it to API
    // localhost:.../api/account/login
    // JWT => if success, store the JWT in local storage
    
    // map is similar to LINQ select
    return this.http.post(`${environment.apiBaseUrl}account/login`, userLogin)
    .pipe(
      map( (response: any) => {
          // if the status code is 200, 201
          // save the response to local storage (JWT)
          console.log("inside Account Service: Login");
          console.log(response);
          if (response) {
            localStorage.setItem('token', response.token);
            this.populateUserInfo();
            
            return true;
          }
          return false;
        } 
      )
    );
  }

  register(userRegister: Register): Observable<boolean> {
    // take the object from register component and post it to API
    return this.http.post(`${environment.apiBaseUrl}account/register`, userRegister)
    .pipe(
      map(
        (response: any) => {
          console.log("inside Account Service: Register");
          console.log(response);
          if (response) {
            return true;
          }
          return false;
        }
      )
    )
  }

  logout() {
    // remove the JWT token from local storage
  }

  populateUserInfo() {
    // get the token from local storage, if the token is present 
    // and token is not expired then
    // push true value to the subject

    var token = localStorage.getItem('token');

    if ( token &&  !this.jwtHelper.isTokenExpired(token) ) {
      // decode the token and get hte data into user object
      // there is a library in Angular that can decode the token
      // set the authentication subject to true

      const decodedToken = this.jwtHelper.decodeToken(token);
      
      // console.log("inside the decode method");
      // console.log(decodedToken);

      this.isLoggedInSubject.next(true);

      // set the user subject with decoded value
      // console.log("inside account service, here is the decoded token " + JSON.stringify(decodedToken) );
      var tokenStr = JSON.stringify(decodedToken);
      var tokenJson = JSON.parse(tokenStr);

      var user = {
        email: tokenJson.email,
        exp: tokenJson.exp,
        family_name: tokenJson.family_name,
        given_name: tokenJson.given_name,
        birthdate: tokenJson.birthdate,
        nameid: tokenJson.nameid,
        role: []
      }
      console.log(user);
      this.currentUserSubject.next(user);

    }
  }
}
