import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPagComponent } from './book-pag/book-pag.component';
import { BooksSHowComponent } from './books-show/books-show.component';


const routes: Routes = [
  {path:'book-pag/:id' , component: BookPagComponent } ,
  {path:'books' , component : BooksSHowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
