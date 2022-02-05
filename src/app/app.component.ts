import { Component } from '@angular/core';
import { AccountService } from './core/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Movie Shop SPA';
  myname = "Sicheng";

  constructor (private accountService: AccountService) {

  }

  ngOnInit(): void {
    this.accountService.populateUserInfo();
  }
}
