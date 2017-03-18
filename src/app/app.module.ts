import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LearnPage } from '../pages/learn/learn';
import { PracticePage } from '../pages/practice/practice';
import { TranslatePage } from '../pages/translate/translate';
import { TabsPage } from '../pages/tabs/tabs';
import { LearnSubpagePage } from "../pages/learnsubpage/learnsubpage";
import { FillInTheBlankPage } from "../pages/fillintheblank/fillintheblank";
import { MatchingPage } from "../pages/matching/matching";

@NgModule({
  declarations: [
    MyApp,
    LearnPage,
    PracticePage,
    TranslatePage,
    TabsPage,
    HomePage,
    LearnSubpagePage,
    FillInTheBlankPage,
    MatchingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LearnPage,
    PracticePage,
    TranslatePage,
    TabsPage,
    LearnSubpagePage,
    FillInTheBlankPage,
    MatchingPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
