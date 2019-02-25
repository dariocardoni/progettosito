import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {$('#welcome').animate({width:'50%'}, {queue:false, duration: 3000});
   $('#welcome').animate({fontSize:'300em'}, 3000);
   $('#welcome').animate({borderLeftWidth:'20%'}, 2000);


$("#immagini").on('mouseover',function(){
setTimeout(function(){
      $('#chitarra').fadeIn()},500);
    setTimeout(function(){
    $('#sax').fadeIn()},1000);
    setTimeout(function(){
    $('#piano').fadeIn()},1500);

  });



  }






}
  


