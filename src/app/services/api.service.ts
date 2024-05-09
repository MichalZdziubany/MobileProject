import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  GetRandomRecipe():Observable<any>{
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/random.php')
  }

  getCategories():Observable<any>{
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  }
  
  getSpecificCategories(categorie:any):Observable<any>{
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=')
  }
}


