import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deanery',
  templateUrl: './deanery.page.html',
  styleUrls: ['./deanery.page.scss'],
})
export class DeaneryPage implements OnInit {

  specialtyes = [
    {
      name: 'ИТ',
    },
    {
      name: 'ЭТУ',
    },
    {
      name: 'ИТМ'
    },
    {
      name: 'М'
    },
  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  exit() {
    this.router.navigateByUrl('/login');
  }

  goToCourse() {
    this.router.navigateByUrl('/cources');
  }
}
