import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {

  public groupName: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.groupName = params['groupName'];
    });
  }

  ordersData = [{
    id: 1,
    firstName: 'Роман',
    lastName: 'Москвин',
    isFirstVisit: false,
    isVisit: true,
  }, {
    id: 2,
    firstName: 'Василина',
    lastName: 'Сибцова',
    isFirstVisit: false,
    isVisit: false,
  }, {
    id: 3,
    firstName: 'Женя',
    lastName: 'Петроченко',
    isFirstVisit: false,
    isVisit: true,
  }, {
    id: 4,
    firstName: 'Василина',
    lastName: 'Сибцова',
    isFirstVisit: false,
    isVisit: false,
  }, {
    id: 5,
    firstName: 'Женя',
    lastName: 'Петроченко',
    isFirstVisit: false,
    isVisit: false,
  }, {
    id: 6,
    firstName: 'Василина',
    lastName: 'Сибцова',
    isFirstVisit: false,
    isVisit: true,
  }, {
    id: 7,
    firstName: 'Женя',
    lastName: 'Петроченко',
    isFirstVisit: false,
    isVisit: true,
  }, {
    id: 8,
    firstName: 'Василина',
    lastName: 'Сибцова',
     isFirstVisit: true,
    isVisit: true,
  }, {
    id: 9,
    firstName: 'Женя',
    lastName: 'Петроченко',
    isFirstVisit: false,
    isVisit: true,
  }, {
    id: 9,
    firstName: 'Женя',
    lastName: 'Петроченко',
    isFirstVisit: false,
    isVisit: true,
  }
  ]

  back() {
    this.location.back();
  }
}
