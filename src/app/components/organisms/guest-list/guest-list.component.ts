import { Component, Input, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guest';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  
  @Input() guestList: Guest[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addGuest(newGuest: Guest){
    this.guestList.push(newGuest)
  }

  removeGuest(indexOfGuest: number){
    this.guestList.splice(indexOfGuest, 1)
  }

}
