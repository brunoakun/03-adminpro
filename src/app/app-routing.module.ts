import { PagesComponent } from './pages/pages.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { PanelComponent } from './pages/panel/panel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressComponent } from './pages/progress/progress.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  // Rutas hijas para componentes logeado 
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'panel', component: PanelComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafico1', component: Grafica1Component },
      { path: '', redirectTo: '/panel', pathMatch: 'full' },
    ]
  },
  // Rutas para componentes NO logueado
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },

  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
