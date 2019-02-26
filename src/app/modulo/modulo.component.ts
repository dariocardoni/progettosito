import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
recupera_eventi(){
var params={};
params['token']='FF7Z2BAR4RABU4DJAW7Z';
params['location.address']='Rome';

	$.ajax({
           url:"https://www.eventbriteapi.com/v3/events/search/",
           data: params,
           success:function(data){
            for (var i=0; i<9; i++) {
              $("#eventi").append("<tr>"+ "<td>" + data.events[i].name.text + "</td>" + "<td>" + data.events[i].end.local + "</td>" + "</tr>")};
           }
           
           
           });
           $("#eventi").show();
           $("#prima").fadeIn();
           
          
          


          }
          recuperonews(){
          $.ajax({
              type: "GET",
              url:"https://newsapi.org/v2/everything?q=arresti&apiKey=d5d2bc4d03124039a07f2ba6ad7a298e",
              data: "html",
              success: function(data){
                for (var i=0; i<4; i++) {
                  $("#news").append("<tr>"+ "<td>" + data.articles[i].author + "</td>" + "<td>" + data.articles[i].title + "</td>" + "<td>" + data.articles[i].description + "</td>" + "</tr>");
              
                }

              
          
          
          
            },
            error: function(xhr){
              console.log(xhr)
            }
          });
          $("#news").show();
          $("#seconda").fadeIn();
         

        }
      }
      
       
     
