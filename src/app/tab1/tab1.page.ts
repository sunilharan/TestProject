import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('rating') ratingEle : any;
  rating: number = 4;

  constructor() {
  }

  ionViewDidEnter() {
    this.ratingEle.rating = this.rating;
  }


  onRatingChange(ev) {
    console.log(ev);
    this.rating = ev;
  }
}
