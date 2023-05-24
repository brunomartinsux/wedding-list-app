import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Guest } from 'src/app/models/guest';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  guestName: string = ''
  showGuestInput:boolean = false
  @Output() newGuestEvent = new EventEmitter<Guest>()

  constructor() { }

  ngOnInit(): void {
  }

  emitNewGuest(){
    this.newGuestEvent.emit(new Guest({name: this.guestName, status: 'guest', img: 'https://picsum.photos/300'}))
  }

}
