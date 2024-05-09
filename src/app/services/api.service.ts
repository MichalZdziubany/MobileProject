import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  //this api calls a random recipe each time
  GetRandomRecipe():Observable<any>{
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/random.php')
  }
  //displays the different categories of recipes the api has
  getCategories():Observable<any>{
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  }
  //displays each recipe in a specific category
  getSpecificCategories(categories:String):Observable<any>{
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + categories)
  }

  searchRecipe(str:any):Observable<any>{
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + str)
  }
}


