import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { ModalImagenService } from './../../services/modal-imagen.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styleUrls: ['./modal-imagen.component.css']
})
export class ModalImagenComponent implements OnInit {


  loading: boolean = false;

  constructor(
    public modalImagenSrv: ModalImagenService,
    private uploadFileSrv: UploadFileService,
    private usuarioSrv: UsuarioService,
    private notificacionesService: NotificacionesService
  ) { }

  ngOnInit(): void {


  }

  cerrarModal() {
    this.modalImagenSrv.cerrarModal();
  }

  cerrarModalClickOutside(event: MouseEvent) {
    if (this.loading) return;
    // Cerrar modal al hacer click fuera del modal si no está subiendo un archivo
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.cerrarModal();
    }
  }


  subirFoto(event: Event) {
    const usrModal = this.modalImagenSrv.usrModal;

    console.log('subirFoto', usrModal);

    const inputElement = event.target as HTMLInputElement;
    const file: File | undefined = inputElement.files?.[0] || undefined;

    this.loading = true;
    if (file) this.uploadFileSrv.uploadFoto(file, usrModal.id!.toString())
      .then(resp => {
        if (!resp.error) {
          usrModal.foto = resp.data.guardado_como;

          // si es del usuario logueado, actualizo su foto
          if (usrModal.id == this.usuarioSrv.userdata.id) this.usuarioSrv.userdata.foto = usrModal.foto;

          this.notificacionesService.aviso('success', 'Foto cambiada');
          this.cerrarModal();
          this.loading = false;
        } else {
          this.notificacionesService.aviso('error', resp.mensaje);
          this.loading = false;
        }
      });
  }

  getFoto() {
    const usrModal = this.modalImagenSrv.usrModal
    var foto = usrModal.foto;
    if (foto) {
      foto = `${environment.fotoDir}/${foto}`;
    } else {
      foto = `${environment.fotoDir}/_noUsr.png`;
    }
    return (foto);
  }

  borrarFoto() {
    const usrModal = this.modalImagenSrv.usrModal
    this.usuarioSrv.deleteUsrFoto(usrModal)
      .subscribe(resp => {
        console.log(resp);
        if (!resp.error) {
          usrModal.foto = '_noUsr.png';

          // si es del usuario logueado, actualizo su foto
          if (usrModal.id == this.usuarioSrv.userdata.id) this.usuarioSrv.userdata.foto = usrModal.foto;

          this.notificacionesService.aviso('info', 'Foto eliminada');
          this.cerrarModal();
          this.loading = false;
        } else {
          this.notificacionesService.aviso('error', resp.mensaje);
          this.loading = false;
        }
      })
  }

}
