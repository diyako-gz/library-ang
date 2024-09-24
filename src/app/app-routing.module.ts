import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPagComponent } from './book-pag/book-pag.component';
import { BooksSHowComponent } from './books-show/books-show.component';
import { FilterResComponent } from './filter-res/filter-res.component';
import { LogInComponent } from './log-in/log-in.component';


const routes: Routes = [
  {path:'book-pag/:id' , component: BookPagComponent } ,
  {path:'books' , component : BooksSHowComponent , canActivate: [LogInComponent]} ,
  {path: 'search' , component : FilterResComponent} ,
  {path: 'log-in' , component : LogInComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
