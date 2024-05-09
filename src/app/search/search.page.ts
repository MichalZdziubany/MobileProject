import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, 
  IonToolbar, IonButton, IonButtons, IonBackButton,IonInput, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonList} from '@ionic/angular/standalone';

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
  constructor(private apiService: ApiService) { }

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
}
