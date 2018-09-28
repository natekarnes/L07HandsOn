import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TOCPage } from '../pages/toc/toc';
import { C1Page } from '../pages/c1/c1';
import { C2Page } from '../pages/c2/c2';
import { C3Page } from '../pages/c3/c3';
import { C4Page } from '../pages/c4/c4';
import { C5Page } from '../pages/c5/c5';
import { C6Page } from '../pages/c6/c6';
import { C7Page } from '../pages/c7/c7';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TOCPage,
    C1Page,
    C2Page,
    C3Page,
    C4Page,
    C5Page,
    C6Page,
    C7Page
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TOCPage,
    C1Page,
    C2Page,
    C3Page,
    C4Page,
    C5Page,
    C6Page,
    C7Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
