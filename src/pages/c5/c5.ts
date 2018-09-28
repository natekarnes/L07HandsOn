import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { C4Page } from '../c4/c4';
import { C6Page } from '../c6/c6';

@Component({
  selector: 'page-c5',
  templateUrl: 'c5.html'
})

export class C5Page {nav;

  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
  }

  openC6() {
    this.nav.push(C6Page)}
  
  openC4() {
    this.nav.push(C4Page)}
  }