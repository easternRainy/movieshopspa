import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/shared/models/Genre';
import { User } from 'src/app/shared/models/User';
import { AccountService } from '../../services/account.service';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  genres!: Genre[];
  isLoginSuccess: boolean = false;
  user!: User;
  
  constructor(private genreService: GenreService, private accountService: AccountService) { 
    this.accountService.isLoggedIn.subscribe( resp => this.isLoginSuccess = resp );
    this.accountService.currentUser.subscribe( resp => this.user == resp );
    
    
    // this.genres = [{id:1, name: "Action"}, {id:2, name: "Romantic"}];
  }

  ngOnInit(): void {
    console.log("loading genres");
    this.genreService.getAllGenres().subscribe( 
      resp => {
        this.genres = resp;
        console.log("inside Header Component OnInit");
      }
    );
    console.log(this.genres);
  }

}
