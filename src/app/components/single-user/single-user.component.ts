import {Component, Input} from '@angular/core';
import {User} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {

  @Input()
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  showDetails(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user});
  }

}
