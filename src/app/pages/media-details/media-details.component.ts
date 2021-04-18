import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css']
})
export class MediaDetailsComponent implements OnInit {
  moviesdetails:any;
  a:any;
  imgsrc:any;
  constructor(private mdata:AuthService) { }

  ngOnInit(): void {
    debugger;
    this.moviesdetails= this.mdata.moviesData();
    // this.moviesdetails=this.moviesdetails[0];
    // this.imgsrc=this.moviesdetails.poster;
    console.log(this.moviesdetails);
    // this.clickeddiv(0);
  }

  // clickeddiv(val:any){
  //   this.moviesdetails=this.moviesdetails[val];
  //   this.imgsrc=this.moviesdetails.poster;
  //   console.log(this.moviesdetails);
  // }

}
