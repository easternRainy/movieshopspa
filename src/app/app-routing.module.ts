import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CastDetailsComponent } from './public/cast-details/cast-details.component';
import { MovieDetailsComponent } from './public/movie-details/movie-details.component';
import { MoviesOfGenreComponent } from './shared/components/movies-of-genre/movies-of-genre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'movies/genre/:id', component: MoviesOfGenreComponent},
  { path: 'cast/:id', component: CastDetailsComponent },
  // laziliy load the feature module
  {
    path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
