import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  public groups = [
    {
      name: 'ИТ-41а',
      course: 4,
    },
    {
      name: 'ИТ-41б',
      course: 4,
    },
    {
      name: 'ИТ-42',
      course: 4,
    },
    {
      name: 'ИТ-31а',
      course: 3
    },
    {
      name: 'ИТ-31б',
      course: 3
    },
    {
      name: 'ИТ-32',
      course: 3
    },
    {
      name: 'ИТ-11а',
      course: 3
    },
    {
      name: 'ИТ-11б',
      course: 1,
    },
    {
      name: 'ИТ-12а',
      course: 1,
    },
    {
      name: 'ИТ-11б',
      course: 1,
    }
  ];
  constructor(
    private location: Location,
    private router: Router
    ) { }

  ngOnInit() {
  }

  goToGroup(name) {
    this.router.navigateByUrl(`/group?groupName=${name}`);
  }
  back() {
    this.location.back();
  }
}
