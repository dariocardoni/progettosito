import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {}
  
  }

  $(function(){
  $("#form").css("display","none")
  });
  $(function(){
  $("#primo").click(function(){
  $("#form").toggle()
  });
  });

  $(function(){
  $("#form2").css("display","none")
  });
  $(function(){
  $("#secondo").click(function(){
  $("#form2").toggle()
  });
  });

  $(function(){
  $("#secondo").click(function(){
  $("#form").css("display","none")
   });
  });

$(function(){
  $("#primo").click(function(){
  $("#form2").css("display","none")
   });
  });



