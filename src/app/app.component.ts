import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progettosito';
}
$(function(){
$('#welcome')
  .animate({width:'50%'}, {queue:false, duration: 3000})
  .animate({fontSize:'100px'}, 3000)
  .animate({borderLeftWidth:'1000px'}, 2000);

});

$(function(){
$("#immagini").on('mouseover',function(){
setTimeout(function(){
			$('#chitarra').fadeIn()},500);
		setTimeout(function(){
		$('#sax').fadeIn()},1000);
		setTimeout(function(){
		$('#piano').fadeIn()},1500);

	});
});



