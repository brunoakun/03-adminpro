import { AuthRoutingModule } from './auth/auth.routing';
// Módulos
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

// Componentes
import { Page404Component } from './page404/page404.component';

const routes: Routes = [

  // path:'/panel' PagesRoutingModule
  // path:'/login' AuthRoutingModule

  { path: '', redirectTo: '/panel', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
