import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guest';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  guestList: Guest[] = [
    new Guest({name: 'Bruno Martins', status: 'owner', img:'https://picsum.photos/300'})
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
