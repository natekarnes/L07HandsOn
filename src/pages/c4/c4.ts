import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { C3Page } from '../c3/c3';
import { C5Page } from '../c5/c5';

@Component({
  selector: 'page-c4',
  templateUrl: 'c4.html'
})

export class C4Page {nav;

  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
  }

  openC5() {
    this.nav.push(C5Page)}

  openC3() {
    this.nav.push(C3Page)}
  
  }