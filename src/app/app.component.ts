import { Component } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:Http){}
  myData = {};
  sub()
  {
    this.http.post('http://localhost:6677/regis',this.myData)
    .subscribe(res=>{
      console.log(res);
    })
  }
}
