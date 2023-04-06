# AlmaGest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

ng build --base-href="./"
## Adaptar Plantilla de admin

1.- Crear estructura de la aplicación
módulos
componentes compartidos (header,sideBar, footer,...)
Componentes
Páginas

ng generate component nombre-componente --style none


## Crear módulo y su routing
ng g module graficas --routing

2.- El componente pagesComponent.html tiene la plantilla para los componentes logueados
3.- Crear rutas para Componentes logueados y no logueados
4.- Implementar page404

## Usar un BackUp desde GitHub:
git clone https://github.com/xxxxx
npm install

## gráficos:
npm install --save ng2-charts
npm install --save chart.js

## Crear configuración Usr, guardar y recuperar de localstorage
crear el componente UsrConfigComponent
crear el servicio ConfigService

## Crear un menú de opciones desde un servicio
Crear el servicio SidebarService
Desde el componente SidebarComponent, montar dinamicamente las opciones del menú con lo devuelto por el servicio


## Routerlink's

## Crear el Bread Crums desde un los datos del Router
En el router.ts, añadir el objeto {data} con el título, recuperarlo desde una subscripción en el bread-cums.ts

## 14 LogIn / Sweet Alert / toastr / LocalStorage del token / Logout
 
npm install sweetalert2
npm install ngx-toastr@15.2.2
npm install @angular/animations --save

## Crear guard para proteger las rutas si no está logIneado
ng g guard guards/auth

# Subida de imagen desde el Front-end hasta el Back-end

## ngx-datatables 
npm install @swimlane/ngx-datatable --save

## control de tiempos amigable
npm install date-fns --save
muestra cosas como "hace unos segundos" o "hace una hora". desde un timestap

