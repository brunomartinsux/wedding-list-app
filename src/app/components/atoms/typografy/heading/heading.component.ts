import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  @Input() class: string = ''
  @Input() content: string = ''


  constructor() { }

  ngOnInit(): void {
  }

}
