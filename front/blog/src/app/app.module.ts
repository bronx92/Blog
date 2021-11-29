import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    ContatoComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
