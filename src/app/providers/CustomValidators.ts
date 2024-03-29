import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export default class Validation {

  /**
   * Strings iguales 
   */
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }
      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true }; // Error matching  
      } else {
        return null;
      }
    };
  }


  /**
   * Multiplo de 5?
   */
  static multiplo5(control: AbstractControl): ValidationErrors | null {
    let nro = parseInt(control.value);
    if (nro % 5 == 0)
      return null;
    else
      return { multiplo5: true } // Error multiplo5  
  }

  /**
   * eMail valido
   */
  static ValidateEmail(control: AbstractControl) {
    if (control.value === '') {
      return null;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)) {
      return (null) // Ok
    }
    return { eMailFormat: true };  // Error eMailFormat  
  }


  /**
   * URL válida?
   */
  static urlValidator(control: AbstractControl) {
    if (control.value === '') {
      return null;
    }
    if (!control.value.startsWith('http') || !control.value.startsWith('http')) {
      return { urlValid: true };  // Error urlValid  
    }
    return null;  // valid
  }

  /**
   * Mayor de edad?
   */
  static ageValidator(control: AbstractControl) {
    if (control.value === '') {
      return null;
    }
    if (control.value < 18) {
      return { menorDeEdad: true };   //Error menorDeEdad
    }
    return null;
  }


  /**
   * Valida DNI / CIF
   */
  static validateDNI(control: AbstractControl) {
    var numero, letx, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;
    var dni = control.value.toUpperCase().trim();
    if (dni.length != 9) {
      return { formatoDni: true };    // Error formato 
    }

    if (expresion_regular_dni.test(dni) === true) {
      // Es dni
      numero = dni.substr(0, dni.length - 1);
      numero = numero.replace('X', 0);
      numero = numero.replace('Y', 1);
      numero = numero.replace('Z', 2);
      letx = dni.substr(dni.length - 1, 1);
      numero = numero % 23;
      letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
      letra = letra.substring(numero, numero + 1);
      if (letra != letx) {
        //alert('Dni erroneo, la letra del NIF no se corresponde');
        return { letraDni: true };    // Error letraDni
      } else {
        //alert('Dni correcto');
        return null;
      }
    } else {
      // Es cif
      var letraCif = dni.substr(0, 1);
      if (letraCif.match(/[A-J]/)) {
        return null;    // Ok cif
      }

      //alert('Dni erroneo, formato no válido');
      return { formatoDni: true };    // Error formatoDni
    }
  }




  /*
   * IBAN is valid 
   */
  static validateIBAN(control: AbstractControl) {
    let IBAN = control.value.toUpperCase();
    IBAN = IBAN.trim();
    IBAN = IBAN.replace(/\s/g, "");
    var letra1, letra2, num1, num2;
    var isbanaux;
    var numeroSustitucion;
    if (IBAN.length != 24) {
      // Longitud incorrecta
      return { longitud: true };    // Error longitud
    }

    letra1 = IBAN.substring(0, 1);
    letra2 = IBAN.substring(1, 2);
    num1 = getnumIBAN(letra1);
    num2 = getnumIBAN(letra2);
    isbanaux = String(num1) + String(num2) + IBAN.substring(2);
    isbanaux = isbanaux.substring(6) + isbanaux.substring(0, 6);
    var resto = parseFloat(modulo97(isbanaux));
    if (resto == 1) {
      return null;
    } else {
      // Iban no válido
      return { formato: true };   // Error formato  
    }

    function modulo97(iban: string) {
      var parts = Math.ceil(iban.length / 7);
      var remainer = "";
      for (var i = 1; i <= parts; i++) {
        remainer = String(parseFloat(remainer + iban.substr((i - 1) * 7, 7)) % 97);
      }
      return remainer;
    }

    function getnumIBAN(letra: any) {
      let ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return ls_letras.search(letra) + 10;
    }

  }



}