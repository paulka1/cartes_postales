import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'menu';

  french: boolean = true;
  japonaise: boolean = false;

  ngOnInit(): void {

  }
  switch(){
    this.french = !this.french;
    this.japonaise = !this.japonaise;
  }
  getColor(button){
   return button ? 'backgroundColor: yellow' : 'red';
  }
}
