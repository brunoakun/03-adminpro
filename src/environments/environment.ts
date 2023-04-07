// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  titulo: 'DEV',
  apiURL: 'http://localhost:8080/api',
  apiErrorAuth:'El sistema ha devuelto un error. <br><i>Asegurate de estar autorizado para hacer esta operación</i>',
  fotoDir: 'http://localhost:8080/data/fotos',
  defaultTema: 'default-dark.css'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
