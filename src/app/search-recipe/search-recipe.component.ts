import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {

  constructor(private http: HttpClient) {}
  apiKey = 'ffd4896e2e9046b09619de8760895f6a';
  recipyData=[];
  search(searchText:any) {
    const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchText}&number=5&apiKey=${this.apiKey}`;
    this.http.get(URL).subscribe((data:any) => {
      console.log(data['results']);
      this.recipyData  = data['results']
    });
  }
  ngOnInit() {}

}
