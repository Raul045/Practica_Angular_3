import { Component, OnInit } from '@angular/core';
import {JsonService} from './json.service'

@Component({
  selector: 'app-ruta-js',
  templateUrl: './ruta-js.component.html',
  styleUrls: ['./ruta-js.component.css']
})
export class RutaJsComponent implements OnInit {
  title = 'http-client'
  constructor(public json: JsonService) { 
    this.json.getJson('http://api.github.com/users/ibuioli').subscribe((res: any) =>{
      console.log(res)
    })
  }

  ngOnInit(): void {
  }

}
