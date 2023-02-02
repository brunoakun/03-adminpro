import { PagesComponent } from './pages.component';
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { Grafica1Component } from "./grafica1/grafica1.component"
import { PanelComponent } from "./panel/panel.component"
import { ProgressComponent } from "./progress/progress.component"

// Rutas hijas para componentes logeado 

const routes: Routes = [
    {
        // PagesComponent.html tiene la plantilla e incluye un <router-outlet> para el menú hijo
        path: 'panel', component: PagesComponent,
        children: [
            { path: '', component: PanelComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafico1', component: Grafica1Component },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
