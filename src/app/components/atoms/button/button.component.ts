import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() class: string
  @Input() content: string

  @Output() onClickEvent = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  emitOnClickEvent(){
    this.onClickEvent.emit(true)
  }

}
