import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Guest } from 'src/app/models/guest';

@Component({
  selector: 'app-guest-card',
  templateUrl: './guest-card.component.html',
  styleUrls: ['./guest-card.component.css']
})
export class GuestCardComponent implements OnInit {

  @Input() guest: Guest = new Guest({})
  
  @Output() onRemoveClicked = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  removeGuest(){
    this.onRemoveClicked.emit(true)
  }

}
