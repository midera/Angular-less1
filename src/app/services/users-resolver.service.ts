import { Injectable } from '@angular/core';
import {User} from "../models";
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {Resolve} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<User[]>{

  constructor(private userService: UserService) { }

  resolve(): Observable<User[]>  {
    return this.userService.getUsers()
  }
}
