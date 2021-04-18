import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }


  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;
    //TODO: do your checking here
    this.auth
      .signIn(email, password)
       .then((res) => {
      this.router.navigateByUrl('/');
        this.toastr.success('Signin Success');
        // window.open('/');
       })
      .catch((err) => {
        console.log(err.message);
        this.toastr.error('Singin failed');
      });
  }
}
