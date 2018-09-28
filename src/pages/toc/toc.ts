import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { C1Page } from '../c1/c1';
import { C2Page } from '../c2/c2';
import { C3Page } from '../c3/c3';
import { C4Page } from '../c4/c4';
import { C5Page } from '../c5/c5';
import { C6Page } from '../c6/c6';
import { C7Page } from '../c7/c7';

export class Chapter {
    id: number;
    name: string;
  }
  
  const CHAPTERS: Chapter[] = [
    { id: 1, name: 'Poem 1' },
    { id: 2, name: 'Poem 2' },
    { id: 3, name: 'Poem 3' },
    { id: 4, name: 'Poem 4' },
    { id: 5, name: 'Poem 5' },
    { id: 6, name: 'Poem 6' },
    { id: 7, name: 'Poem 7' }
  ]

@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html'
})

export class TOCPage {
    chapters;
    nav;

    constructor(public navCtrl: NavController) {
        this.chapters = CHAPTERS;
        this.nav = navCtrl;
    }

    onSelect(chapter: Chapter): void {
        let selectedChapter = chapter.id;
        if(selectedChapter === 1) {
            this.nav.push(C1Page)
        } else if(selectedChapter === 2) {
            this.nav.push(C2Page)
        } else if(selectedChapter === 3) {
            this.nav.push(C3Page)
        } else if(selectedChapter === 4) {
            this.nav.push(C4Page)
        } else if(selectedChapter === 5) {
            this.nav.push(C5Page)
        } else if(selectedChapter === 6) {
            this.nav.push(C6Page)
        } else if(selectedChapter === 7) {
            this.nav.push(C7Page)
        }

    }

}