import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../models/Post";
import {PostService} from "../services";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: Post[];
  @Input()
  userId: number;
  constructor(private postService: PostService) { }


  ngOnInit(): void {
    this.postService.getPosts(this.userId).subscribe(value => {
      this.posts = value;
    });
  }

}
