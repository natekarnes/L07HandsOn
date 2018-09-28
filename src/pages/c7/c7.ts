import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { C6Page } from '../c6/c6';

@Component({
  selector: 'page-c7',
  templateUrl: 'c7.html'
})

export class C7Page {nav;

  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
  }

  openC6() {
    this.nav.push(C6Page)}
  }