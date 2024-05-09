import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
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
}
