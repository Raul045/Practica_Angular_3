import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  form!: FormGroup;

  constructor() { 
    this.buildForm();
    }
  ngOnInit(): void {
  }
  private buildForm() {
    this.form = new FormGroup({
      Nombre: new FormControl('', [Validators.required]),
      Fecha: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      Comentarios: new FormControl('', [Validators.maxLength(200)]),
      Categoria: new FormControl('', [Validators.required]),
    });

    this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

}
