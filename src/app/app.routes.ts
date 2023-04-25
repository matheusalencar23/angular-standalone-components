import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'books',
    loadComponent: () =>
      import('./components/books/books.component').then(
        (c) => c.BooksComponent
      ),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./components/movies/movies.routes').then((r) => r.MOVIES_ROUTES),
  },
];
