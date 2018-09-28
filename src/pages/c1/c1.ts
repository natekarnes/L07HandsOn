import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { C2Page } from '../c2/c2';

@Component({
  selector: 'page-c1',
  templateUrl: 'c1.html'
})

export class C1Page {nav;

  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
  }

  openC2() {
    this.nav.push(C2Page)}
  }