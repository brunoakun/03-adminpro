import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { HeaderComponent } from './header/header.component';
import { BeadCrumsComponent } from './bead-crums/bead-crums.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BeadCrumsComponent,
    SidebarComponent,
  ],
  exports: [
    HeaderComponent,
    BeadCrumsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
