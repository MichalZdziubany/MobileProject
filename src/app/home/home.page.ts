import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    RouterLink,
    CommonModule,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
  ],
})
export class HomePage implements OnInit {
  randomRecipe: any = [];
  isClicked: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.GetRandomRecipe().subscribe((data) => {
      this.randomRecipe = data.meals;
    });
  }

  toggleContent() {
    this.isClicked = !this.isClicked;
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
