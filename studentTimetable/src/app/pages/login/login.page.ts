import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify(this.f.username.value, this.f.password.value));
    //почта для препода
    if(this.f.username.value === 'teacher@ssuwt.ru') {
      console.log('teacher');
      this.router.navigateByUrl('/teacher-profile');
      //почта для деканата
    } else if(this.f.username.value === 'emf') {
      this.router.navigateByUrl('/deanery');
    } else {
      this.router.navigateByUrl('/time-table');
    }

    

  }

}
