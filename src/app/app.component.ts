import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'progettosito';
constructor(private router:Router){}
ngOnInit (router:Router){
  this.router.navigate(['home'])
}
}