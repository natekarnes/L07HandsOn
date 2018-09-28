import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { C1Page } from '../c1/c1';
import { C3Page } from '../c3/c3';

@Component({
  selector: 'page-c2',
  templateUrl: 'c2.html'
})

export class C2Page {nav;

  constructor(public navCtrl: NavController) {
    this.nav = navCtrl;
  }

  openC3() {
    this.nav.push(C3Page)}

  openC1() {
  this.nav.push(C1Page)}
  }