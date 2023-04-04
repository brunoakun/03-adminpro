import { UsrListaComponent } from './usr-lista/usr-lista.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PromesasComponent } from './promesas/promesas.component';
import { PagesComponent } from './pages.component';
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { Grafica1Component } from "./grafica1/grafica1.component"
import { PanelComponent } from "./panel/panel.component"
import { ProgressComponent } from "./progress/progress.component"
import { UsrConfigComponent } from './usr-config/usr-config.component';
import { AuthGuard } from '../guards/auth.guard';
import { UsrPerfilComponent } from './usr-perfil/usr-perfil.component';

// Rutas hijas para componentes logeado 

const routes: Routes = [
    {
        // PagesComponent.html tiene la plantilla e incluye un <router-outlet> para el menú hijo
        // Solo pueden acceder a estas los usuarios loguineados [AuthGuard]
        path: 'panel',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: PanelComponent, data: { titulo: 'Inicio' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Decoradores Input/Output' } },
            { path: 'grafico1', component: Grafica1Component, data: { titulo: 'Gráficos' } },
            { path: 'config', component: UsrConfigComponent, data: { titulo: 'Configuración parámetros de la app' } },
            { path: 'usr_perfil', component: UsrPerfilComponent, data: { titulo: 'Tus datos de perfil de usuario' } },
            { path: 'usr_lista', component: UsrListaComponent, data: { titulo: 'Listado de usuarios' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Observables' } },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],      // Menú forChild
    exports: [RouterModule]
})
export class PagesRoutingModule { }
