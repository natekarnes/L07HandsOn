import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { C5Page } from '../c5/c5';
import { C7Page } from '../c7/c7';

@Component({
  selector: 'page-c6',
  templateUrl: 'c6.html'
})

export class C6Page {nav;

  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
  }

  openC7() {
    this.nav.push(C7Page)}

  openC5() {
    this.nav.push(C5Page)}
  }