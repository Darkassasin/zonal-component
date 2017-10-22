import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { userList } from './userlist';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  getUsers(): User[]{
  return userList;
  }
}
