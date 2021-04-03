import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Output() sideNav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sideNavClose(){
    this.sideNav.emit();
  }

}
