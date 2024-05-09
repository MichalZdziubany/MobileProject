import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, 
  IonToolbar, IonButton, IonButtons, IonBackButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, 
    IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonBackButton]
})
export class FavouritesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
