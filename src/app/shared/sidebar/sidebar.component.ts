import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opcionesMenu: any[] = [];
  constructor(public srvMenu: SidebarService) { }

  ngOnInit(): void {
    this.opcionesMenu = this.srvMenu.menu;
    // console.log(this.opcionesMenu)
  }

}
