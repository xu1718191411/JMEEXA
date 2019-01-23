import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsComponent } from './news/news.component';
import { VipComponent } from './vip/vip.component';
import { TextComponent } from './text/text.component';
import { GuidanceComponent } from './guidance/guidance.component';
import { AccessComponent } from './access/access.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NavigationComponent,
    NewsComponent,
    VipComponent,
    TextComponent,
    GuidanceComponent,
    AccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
