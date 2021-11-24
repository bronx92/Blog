import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './pages/contato/contato.component';
import { FeedComponent } from './pages/feed/feed.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'feed', component: FeedComponent
  },
  {
    path: 'contato', component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
