import { UsersDataService } from './../../services/users-data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usr-lista',
  templateUrl: './usr-lista.component.html',
  styleUrls: ['./usr-lista.component.css']
})
export class UsrListaComponent implements OnInit {

  usuarios: any[] = [];
  constructor(
    public usersDataService: UsersDataService,
    public http: HttpClient
  ) { }

  ngOnInit(): void {
    this.usersDataService.getUsuarios()
      .subscribe(respuesta => {
        console.log(respuesta.data)
        this.usuarios = respuesta.data;
      })
  }

}
