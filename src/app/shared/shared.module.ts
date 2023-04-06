// Módulos
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { FriendlyTimestampPipe } from '../pipes/friendly-timestamp.pipe';

// Componentes
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './bead-crums/bead-crums.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    FriendlyTimestampPipe, // pipe 

    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
  ],
  exports: [    
    FriendlyTimestampPipe, // pipe 

    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,    
    RouterModule,     //  se utiliza el <router-outlet>

  ]
})
export class SharedModule { }
