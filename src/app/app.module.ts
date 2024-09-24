import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksSHowComponent } from './books-show/books-show.component';
import { BookPagComponent } from './book-pag/book-pag.component';
import { FormsModule } from '@angular/forms';
import { FilteredPipe } from './filtered.pipe';
import { FilterResComponent } from './filter-res/filter-res.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksSHowComponent,
    BookPagComponent,
    FilteredPipe,
    FilterResComponent,
    LogInComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
