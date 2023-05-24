import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() class: string;
  @Input() placeholder: string = 'Digite...';
  
  @Output() onChangeEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  emitOnChange(inputValue: any){
    this.onChangeEvent.emit(inputValue.target.value)
  }

}
