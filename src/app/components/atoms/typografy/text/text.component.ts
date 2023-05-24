import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() content: string = ''
  @Input() class: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
