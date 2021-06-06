import { Injectable } from '@angular/core';
import {Post} from "../models";
import {Resolve} from "@angular/router";
import {PostService} from "./post.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsResolverService implements Resolve<Post[]>{

  constructor(private postService: PostService) { }

  resolve(): Observable<Post[]> {
    return this.postService.getPosts()
  }
}