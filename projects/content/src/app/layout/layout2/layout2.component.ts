import { Component, OnInit, Input } from '@angular/core';
import { Layout2Config } from '../layout.class';

@Component({
  selector: 'layout2',
  templateUrl: './layout2.component.html',
  styleUrls: ['./layout2.component.css']
})
export class Layout2Component implements OnInit {

  constructor() { }
  @Input() config = new Layout2Config();
  ngOnInit() {
  }

}
