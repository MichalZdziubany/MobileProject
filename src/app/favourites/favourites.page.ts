import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, 
  IonToolbar, IonButton, IonButtons, IonBackButton,IonInput, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonList} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, 
    IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonBackButton, RouterLink,IonInput, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonList]
})
export class FavouritesPage implements OnInit {
  favouriteRecipes:any = [];
  result:any = [];
  isClicked: boolean = false;
  i:number = 0;
  y:number = 0;

  constructor(private storage:Storage) { }

  ngOnInit() {
    this.getFavourites();
    
  }
  
  //reads the local storage and checks how many items are added
  //then it iterates through all items and saves it to the favourites array
  async getFavourites(){
    await this.storage.create();
    await this.storage.forEach((value: any, key: string) => {
      this.i++;
    });

    for(this.y = 0; this.y < this.i; this.y++){
    this.result = await this.storage.get(this.y.toString());
    this.favouriteRecipes.push(JSON.parse(this.result));
  }
  this.i = 0;
      //console.log('Data loaded', JSON.parse(this.result));
  }
  toggleContent() {
    this.isClicked = !this.isClicked;
  }

  refresh(){
    this.favouriteRecipes = [];
    this.getFavourites();
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
