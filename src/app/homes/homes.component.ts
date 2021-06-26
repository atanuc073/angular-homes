import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.less']
})
export class HomesComponent implements OnInit {
  homes$=this.dataService.getHomes();
  homeTypedropdownOpen:boolean=false;
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
  }
  homeTypeFilterApplied($event){
    // console.log($event)
    this.homeTypedropdownOpen=false;
    this.router.navigate(['home'],{queryParams:{'home-type':$event}})
  }

}
