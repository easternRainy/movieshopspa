import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { Register } from 'src/app/shared/models/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegister: Register = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  };

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  registerSubmit() {
    console.log("login submitted");
    this.accountService.register(this.userRegister).subscribe (
      data => {
        if (data == true) {
          console.log("register success");
          this.router.navigateByUrl('/');
        }

        this.router.navigateByUrl('/');
        // return false;
      }
    );
  }

}
