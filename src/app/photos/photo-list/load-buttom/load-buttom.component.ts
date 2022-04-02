import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-load-buttom',
  templateUrl: './load-buttom.component.html',
  styleUrls: ['./load-buttom.component.css']
})
export class LoadButtomComponent implements OnInit {

  @Input() hasMore: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
