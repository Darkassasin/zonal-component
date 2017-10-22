import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { User } from './user/User';
import { userList } from './user/userlist';
import { Zone } from './zone/zone';
import { zoneList } from './zone/zonelist';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users: User[];
  zones:Zone[];
  selectedzone:Zone;
  constructor(
  ){}
  ngOnInit() {
    this.getZones();
    this.getUsers();
    console.log(this.zones);
    
  }
  getUsers():void{
    this.users=userList;
  }
  getZones():void{
    this.zones=zoneList;
  }

  onSelect(){
    console.log(this.selectedzone);

  }
}
