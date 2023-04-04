import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usr-perfil',
  templateUrl: './usr-perfil.component.html'
})
export class UsrPerfilComponent implements OnInit {

  public perfilForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      nombre: ['111', Validators.required],
      email: ['', Validators.required]
    })
  }


  enviar() {
    console.log(this.perfilForm.value);
  }

  enviarPsw(){
    
  }

} 