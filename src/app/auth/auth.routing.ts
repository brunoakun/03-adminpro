// Módulos
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Rutas para componentes NO logeado 
const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
