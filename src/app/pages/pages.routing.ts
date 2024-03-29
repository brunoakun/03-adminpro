// Módulos
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

// Componentes
import { UsrListaComponent } from './usr-lista/usr-lista.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PromesasComponent } from './promesas/promesas.component';
import { PagesComponent } from './pages.component';
import { Grafica1Component } from "./grafica1/grafica1.component"
import { PanelComponent } from "./panel/panel.component"
import { ProgressComponent } from "./progress/progress.component"
import { UsrConfigComponent } from './usr-config/usr-config.component';
import { UsrPerfilComponent } from './usr-perfil/usr-perfil.component';
import { ArticulosListaComponent } from './articulos/articulos-lista/articulos-lista.component';

// Guards
import { AuthGuard } from '../guards/auth.guard';

/**
 * Rutas hijas para componentes logeado 
 */ 

const routes: Routes = [
    {
        // PagesComponent.html tiene la plantilla e incluye un <router-outlet> para el menú hijo
        // Solo pueden acceder a estas los usuarios loguineados [AuthGuard]
        path: 'panel',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: PanelComponent, data: { titulo: 'Inicio' } },

            // Usuario
            { path: 'usr_perfil', component: UsrPerfilComponent, data: { titulo: 'Tus datos de perfil de usuario' } },
            { path: 'config', component: UsrConfigComponent, data: { titulo: 'Configuración de parámetros de la app' } },

            // Dashboard
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Decoradores Input/Output' } },
            { path: 'grafico1', component: Grafica1Component, data: { titulo: 'Gráficos' } },
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Observables' } },

            // Maestros 
            { path: 'articulos_lista', component: ArticulosListaComponent, data: { titulo: 'Listado de artículos' } },

            // Utilidades
            { path: 'usr_lista', component: UsrListaComponent, data: { titulo: 'Listado de usuarios' } },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],      // Menú forChild
    exports: [RouterModule]
})
export class PagesRoutingModule { }
