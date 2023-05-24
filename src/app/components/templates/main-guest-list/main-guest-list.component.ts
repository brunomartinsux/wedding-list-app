import { Component, Input, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guest';

@Component({
  selector: 'app-main-guest-list',
  templateUrl: './main-guest-list.component.html',
  styleUrls: ['./main-guest-list.component.css']
})
export class MainGuestListComponent implements OnInit {

  @Input() guestList: Guest[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
