import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { IonContent, IonHeader, IonTitle, 
  IonToolbar, IonButton, IonButtons, IonBackButton,IonInput, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonList} from '@ionic/angular/standalone';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, 
    IonToolbar, CommonModule, FormsModule, IonButton, IonButtons,IonBackButton,IonInput, IonItem, RouterLink, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonList]
})
export class SearchPage implements OnInit {
  inputValue: string = "";
  recipes: any = [];
  isClicked: boolean = false;
  favRecipe:any = [];
  userObj:any = [];
  i:number = 0;
  constructor(private apiService: ApiService, private storage:Storage) { }

  ngOnInit() {
  }

  searchRecipes(){
    this.apiService.searchRecipe(this.inputValue).subscribe((data) => {
      this.recipes = data.meals;
    });
  }

  toggleContent() {
    this.isClicked = !this.isClicked;
  }

  async addFavourite(recipe:any) {
    await this.storage.create();
    this.userObj = JSON.stringify(recipe);
    this.favRecipe = await this.storage.set(this.i.toString(), this.userObj);
    this.i++;
  }
async shareRecipe(recipe:any){
  await Share.share({
    title: recipe.strMeal,
    text: recipe.strInstructions + '\nIngredients\n' + recipe.strIngredient1 + ' ' + recipe.strMeasure1 + '\n' + 
    recipe.strIngredient2 + ' ' + recipe.strMeasure2 +'\n' + 
    recipe.strIngredient3 + ' ' + recipe.strMeasure3 +'\n' + 
    recipe.strIngredient4 + ' ' + recipe.strMeasure4 +'\n' + 
    recipe.strIngredient5 + ' ' + recipe.strMeasure5 +'\n' + 
    recipe.strIngredient6 + ' ' + recipe.strMeasure6 +'\n' + 
    recipe.strIngredient7 + ' ' + recipe.strMeasure7 +'\n' + 
    recipe.strIngredient8 + ' ' + recipe.strMeasure8 +'\n' + 
    recipe.strIngredient9 + ' ' + recipe.strMeasure9 +'\n' + 
    recipe.strIngredient10 + ' ' + recipe.strMeasure10 +'\n' + 
    recipe.strIngredient11 + ' ' + recipe.strMeasure11 +'\n' + 
    recipe.strIngredient12 + ' ' + recipe.strMeasure12 +'\n' + 
    recipe.strIngredient13 + ' ' + recipe.strMeasure13 +'\n' + 
    recipe.strIngredient14 + ' ' + recipe.strMeasure14 +'\n' + 
    recipe.strIngredient15 + ' ' + recipe.strMeasure15 +'\n' + 
    recipe.strIngredient16 + ' ' + recipe.strMeasure16 +'\n' + 
    recipe.strIngredient17 + ' ' + recipe.strMeasure17 +'\n' + 
    recipe.strIngredient18 + ' ' + recipe.strMeasure18 +'\n' + 
    recipe.strIngredient19 + ' ' + recipe.strMeasure19 +'\n' + 
    recipe.strIngredient20 + ' ' + recipe.strMeasure20,
    url: recipe.strYoutube,
    dialogTitle: 'Share with buddies',
  });
}
  
  
}

