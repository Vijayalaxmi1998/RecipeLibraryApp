import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: '', component: SearchRecipeComponent }]),
  ],
  declarations: [AppComponent, SearchRecipeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}