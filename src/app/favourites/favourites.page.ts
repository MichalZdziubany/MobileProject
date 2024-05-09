import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, 
  IonToolbar, IonButton, IonButtons, IonBackButton,IonInput, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonList} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';

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

  async getFavourites(){
    /* for ( var i = 0, len = this.storage.length; i < len; i++ ) {
      this.result = this.storage.get(i.toString());
      this.favouriteRecipes += this.result;
      console.log('Data loaded', this.result);
    } */
    await this.storage.create();
    await this.storage.forEach((value: any, key: string) => {
      //console.log('Key:', key, 'Value:', value);
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
}
