import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostService} from "./post.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from "./post.component";
import {PostsComponent} from "./posts.component";
import {LaddaModule} from 'angular2-ladda';

const appRoutes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'posts/:id', component: PostComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LaddaModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
