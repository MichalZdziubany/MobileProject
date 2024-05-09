import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { ApiService } from '../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    RouterLink,
  ],
})
export class RecipesPage implements OnInit {
  categories: any = [];
  category: any = [];
  str: String = '';
  isClicked: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    //calls the categories api and returns it to array
    this.apiService.getCategories().subscribe((data) => {
      this.categories = data.categories;
    });
  }

  //allows the user to call specific categories
  getSpecific(category: any) {
    this.str = category.strCategory;
    this.apiService.getSpecificCategories(this.str).subscribe((data2) => {
      this.category = data2.meals;
    });
  }

  toggleContent() {
    this.isClicked = !this.isClicked;
  }
}
