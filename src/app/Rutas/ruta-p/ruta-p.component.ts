import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ruta-p',
  templateUrl: './ruta-p.component.html',
  styleUrls: ['./ruta-p.component.css']
})
export class RutaPComponent implements OnInit {

  id!:string | null;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
