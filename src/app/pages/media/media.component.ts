import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  movies:any;
  isvisible=false;
  title1='hello';

  constructor(private router: Router,
    private movidata:AuthService) { }

   
  ngOnInit(): void {
    this.movies= this.movidata.moviesData(); 
  // console.log(this.movies);
  }
  redirect(){
    this.router.navigateByUrl('/mediadetails');
  }
toggleDiv(val){
  debugger;
  // this.title1=val;
  this.redirect();
  this.isvisible=!this.isvisible;
}

}
