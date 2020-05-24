import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cause',
  templateUrl: './cause.page.html',
  styleUrls: ['./cause.page.scss'],
})
export class CausePage implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

}
