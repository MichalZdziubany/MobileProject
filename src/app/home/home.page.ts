import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons
  , IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonIcon
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent
    ,IonButton,IonButtons, RouterLink, CommonModule
    , IonCard,IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent,IonIcon],
})
export class HomePage implements OnInit{
  randomRecipe:any = [];

  constructor(private apiService:ApiService) {}

  ngOnInit(): void {
    this.apiService.GetRandomRecipe().subscribe(
      (data)=>{
        this.randomRecipe = data.meals;
      }
    );
  }
}
