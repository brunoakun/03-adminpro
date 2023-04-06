import { UploadFileService } from './../../services/upload-file.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomVal from '../../providers/CustomValidators';

import { UsuarioService } from 'src/app/services/usuario.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
@Component({
  selector: 'app-usr-perfil',
  templateUrl: './usr-perfil.component.html',
  styleUrls: ['./usr-perfil.component.css']
})
export class UsrPerfilComponent implements OnInit {

  public imagenFile: File | undefined;
  public perfilForm: FormGroup = new FormGroup({});
  public enviado: boolean = false;
  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    public usuarioSrv: UsuarioService,
    private uploadFileSrv: UploadFileService,
    private notificacionesService: NotificacionesService
  ) { }

  ngOnInit(): void {
    this.perfilForm = this.fb.group({
      username: [this.usuarioSrv.userdata.username, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      rol: [this.usuarioSrv.userdata.rol, Validators.required],
      nombre: [this.usuarioSrv.userdata.nombre, [Validators.required, Validators.minLength(4), Validators.maxLength(150)]],
      email: [this.usuarioSrv.userdata.email, [Validators.required, CustomVal.ValidateEmail]],
      telefono: [this.usuarioSrv.userdata.telefono],
      password: [''],
      password2: ['']
    },
      {
        validators: [CustomVal.match('password', 'password2')]
      });
  }

  get f() {
    return this.perfilForm.controls;
  }


  enviar() {
    // if (this.perfilForm.get('password')!.value || this.perfilForm.get('password2')!.value) {
    //   console.log('Hay algo en psw:', this.perfilForm.get('password')!.value);
    //   this.perfilForm.setValidators([CustomVal.match('password', 'password2')]);
    // }
    this.enviado = true;
    console.log(this.perfilForm.value);

    if (this.perfilForm.invalid) {
      console.log("ERRORES:", this.perfilForm.errors);
      return;
    }
    // Todo ok, enviar al BackEnd
    this.loading = true;
    this.usuarioSrv.actualizaUsr(this.perfilForm.value)
      .subscribe(resp => {
        this.loading = false;
        if (resp.error) {
          console.log(resp)
          this.notificacionesService.aviso('error', resp.mensaje);
          // this.setApiErrors(resp.mensaje)
          for (let controlName in resp.mensaje) {
            this.perfilForm.get(controlName)!.setErrors({ 'apiError': resp.mensaje[controlName] });
          }
        } else {
          this.notificacionesService.aviso('success', `Datos modificados correctamente`);
          this.usuarioSrv.userdata.nombre = this.perfilForm.value.nombre;
        }
      })
  }

  private setApiErrors(errors: { [key: string]: string }): void {
    const controls = this.perfilForm.controls;
    Object.keys(errors).forEach(key => {
      const control = controls[key];
      if (control) {
        control.setErrors({ serverError: errors[key] });
      }
    });
  }

  subirFoto(event: Event) {
    let userdata = this.usuarioSrv.userdata;

    const inputElement = event.target as HTMLInputElement;
    const file: File | undefined = inputElement.files?.[0] || undefined;

    if (file) this.uploadFileSrv.uploadFoto(file, userdata.id!.toString())
      .then(resp => {
        if (!resp.error) {
          userdata.foto = resp.data.guardado_como;
        } else {
          this.notificacionesService.aviso('error', resp.mensaje);
        }
      });
  }

  getUserFoto() {
    return (this.usuarioSrv.getUserFoto());
  }

} 