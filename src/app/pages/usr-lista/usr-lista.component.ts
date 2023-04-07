import { ModalImagenService } from './../../services/modal-imagen.service';
import { NotificacionesService } from './../../services/notificaciones.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

import { ColumnMode } from '@swimlane/ngx-datatable'
import { environment } from 'src/environments/environment';

import Swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usr-lista',
  templateUrl: './usr-lista.component.html',
  styleUrls: ['./usr-lista.component.css']
})
export class UsrListaComponent implements OnInit {

  public fotoDir: string = environment.fotoDir;
  public roles = [{ valor: 'sa', texto: 'SuperAdmin' }, { valor: 'usuario', texto: 'Usurio' }, { valor: 'admin', texto: 'Admin' }];
  loading: boolean = false;

  messages = {
    emptyMessage: `<span class="text-danger">Sin datos...</span>`,
    totalMessage: 'Total',
    selectedMessage: 'seleccionado'
  }

  usuarios: any[] = [];
  rows: any[] = [];
  temp: any[] = [];

  columns = [];
  ColumnMode = ColumnMode;

  @ViewChild(UsrListaComponent) table: UsrListaComponent | any;

  constructor(
    public usuarioSrv: UsuarioService,
    private notificacionesSrv: NotificacionesService,
    private modalImagenSrv: ModalImagenService
  ) {
    this.loading = true;
    this.usuarioSrv.getLista()
      .subscribe(respuesta => {
        this.loading = false;
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
    this.notificacionesSrv.aviso('info', `editar id ${row.id}`)
  }

  deleteUsr(row: any) {
    Swal.fire({
      title: '¿Borrar usuario?',
      icon: 'question',
      html: `Eliminar <b>${row.username}</b><br><i>${row.rol}</i>`,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioSrv.deleteUsr(row.id)
          .subscribe(resp => {
            console.log('deleteUsr', resp);
            if (resp.error) {
              this.notificacionesSrv.aviso('error', resp.mensaje);
            } else {
              this.notificacionesSrv.aviso('info', `Registro eliminado`);
              this.rows = this.rows.filter((objeto) => objeto.id !== row.id);
            }
          })
      }
    })


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

  abrirModal(row: Usuario) {
    console.log('abrirModal', row)
    this.modalImagenSrv.usrModal = row;
    this.modalImagenSrv.abrirModal();
  }

}
