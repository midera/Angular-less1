import { Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../models";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  singlePost: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.singlePost = this.router.getCurrentNavigation()?.extras.state as Post;

      console.log(params)
    })

  }

}
