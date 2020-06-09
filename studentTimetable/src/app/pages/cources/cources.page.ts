import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.page.html',
  styleUrls: ['./cources.page.scss'],
})
export class CourcesPage implements OnInit {
  public cources = [
    {
      course: 1,
    },
    {
      course: 2,
    },
    {
      course: 3,
    },
    {
      course: 4
    }
  ];
  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }
  back() {
    this.location.back();
  }

  goToGroup() {
    this.router.navigateByUrl('/groups');
  }

}
