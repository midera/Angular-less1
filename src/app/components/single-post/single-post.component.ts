import {Component, Input} from '@angular/core';
import {Post} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  @Input()
  post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  showDetails(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state: this.post});
  }

}
