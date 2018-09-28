import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { C2Page } from '../c2/c2';
import { C4Page } from '../c4/c4';

@Component({
  selector: 'page-c3',
  templateUrl: 'c3.html'
})

export class C3Page {nav;

  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
  }

  openC4() {
    this.nav.push(C4Page)}

  openC2() {
    this.nav.push(C2Page)}
  }