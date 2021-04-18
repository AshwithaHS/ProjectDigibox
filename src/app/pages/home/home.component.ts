import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GithubService } from './../../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user = null;
  userName: string;
  error = null;
  
  
  
  inputCity='';
  inputZip='';
  gridCheck='';
  State='';
  name='';
  MovieTitle='';
  MovieOverview='';
  MovieReleaseDate='';
  MovieGenres='';
  constructor(
    private ref: ChangeDetectorRef,
    private githubService: GithubService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  handleFind() {
    this.githubService.getUserDetails(this.userName).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.ref.detectChanges();
      },
      (err) => {
        this.user = null;
        this.error = 'User not found';
        this.ref.detectChanges();
      }
    );
  }

  saveData(val:NgForm){
    this.toastr.success('Signin Success');
  }
}
