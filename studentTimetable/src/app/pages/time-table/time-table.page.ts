import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.page.html',
  styleUrls: ['./time-table.page.scss'],
})
export class TimeTablePage implements OnInit {

  subjects = [
    {
      name: 'Математика',
      type: 'Лаба',
      teacher: 'Величко А.В.', 
      time: 'с 8:30 до 10:05'
    }, 
    {
      name: 'ТОИ',
      type: 'лек',
      teacher: 'Величко А.В.',
      time: 'с 8:30 до 10:05'
    },
    {
      name: 'МИСПИСИТ',
      type: 'практика',
      teacher: 'Величко А.В.',
      time: 'с 8:30 до 10:05'
    },
    {
      name: 'ГИС',
      type: 'лек',
      teacher: 'Величко А.В.',
      time: 'с 8:30 до 10:05'
    }, 
  ]
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }

  exit() {
    this.router.navigateByUrl('/login');
  }

  goToVisit() {
    this.router.navigateByUrl('/visit');
  }
}
