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
  selectedzone:Zone = new Zone();
  constructor(
  ){}
  ngOnInit() {
    
    this.getZones();
    this.selectedzone =  this.zones[0];
    this.getUsers();
    //console.log(this.selectedzone);
    
  }
  getUsers():void{
    this.users=userList;
  }
  getZones():void{
    this.zones=zoneList;
  }
  

  compareZone(obj1:Zone,obj2:Zone){
    if(obj2 == null)return false;
    return obj1.zone === obj2.zone;
  }
}
