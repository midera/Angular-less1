import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { PostsComponent, UsersComponent} from "./components";
import {RouterModule, Routes} from "@angular/router";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UsersResolverService} from "./services/users-resolver.service";
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import {PostsResolverService} from "./services";

let routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {usersList: UsersResolverService},
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  {
    path: 'posts', component: PostsComponent, resolve: { postsList: PostsResolverService},
    children:[
      {path: ':id', component: PostDetailsComponent}
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    SinglePostComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
