import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.page.html',
  styleUrls: ['./teacher-profile.page.scss'],
})
export class TeacherProfilePage implements OnInit {

  public name: string = 'Голышев Дмитрий Николаевич';

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
    private router: Router
  ) { }

  ngOnInit() {
  }

  exit() {
    this.router.navigateByUrl('/login');
  }
  goToGroup(name) {
    this.router.navigateByUrl(`/group?groupName=${name}`);
  }
}
