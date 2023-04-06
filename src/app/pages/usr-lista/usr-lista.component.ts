import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

import { ColumnMode } from '@swimlane/ngx-datatable'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-usr-lista',
  templateUrl: './usr-lista.component.html',
  styleUrls: ['./usr-lista.component.css']
})
export class UsrListaComponent implements OnInit {

  public fotoDir: string = environment.fotoDir;
  public roles = [{ valor: 'sa', texto: 'SuperAdmin' }, { valor: 'usuario', texto: 'Usurio' }, { valor: 'admin', texto: 'Admin' }];


  messages = {
    emptyMessage: `<span class="text-danger">Sin datos...</span>`,
    totalMessage: 'Total',
    selectedMessage: 'seleccionado'
  }

  usuarios: any[] = [];
  rows: any[] = [];
  temp: any[] = [];

  loadingIndicator = true;
  reorderable = true;

  columns = [];
  ColumnMode = ColumnMode;

  @ViewChild(UsrListaComponent) table: UsrListaComponent | any;

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.getLista()
      .subscribe(respuesta => {
        this.usuarios = respuesta.data;
        console.log('usuarios', this.usuarios)

        this.rows = this.usuarios;
        this.temp = [...this.usuarios];
      })
  }

  ngOnInit(): void {
  }


  filtro(val: string, campo: string) {

    // filter our data
    const temp = this.temp.filter(function (d) {
      if (d[campo]) return d[campo].toLowerCase().indexOf(val) !== -1 || !val;
      return !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table = this.usuarios;
  }

  limpiarCampo(campo: string) {
    // console.log(campo)
    // const evento = new Event('keyup');
    // this.filtro(evento, campo);
  }

  editRow(row: any) {
    console.log('Editar fila:', row);
    // Aquí puedes agregar la lógica para editar la fila
  }

  buscar(event: any, campo: string) {
    console.log(campo)
    const txt = event?.target?.value?.toLowerCase() ?? '';
    this.filtro(txt, campo);
  }

  buscaRol(evento: any) {
    const txt: string = evento.value;
    console.log(txt)
    this.filtro(txt, 'rol');
  }


}
