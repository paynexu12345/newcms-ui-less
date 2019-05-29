import { Component, OnInit, Input } from '@angular/core';
import { Layout1Config } from '../layout.class';
import { PageModeService } from 'projects/ng-poppins/src/public-api';

@Component({
  selector: 'layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.css']
})
export class Layout1Component implements OnInit {

  constructor(
    public pageModeService: PageModeService
  ) { }
  
  @Input() config = new Layout1Config();
  ngOnInit() {
  }

}
