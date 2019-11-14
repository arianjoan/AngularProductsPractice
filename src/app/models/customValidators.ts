import { AbstractControl, ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';

export class CustomValidators {

    /* static verifyPasswordsEquals(password : AbstractControl) : ValidatorFn | null{
        return (control : AbstractControl) : ValidationErrors{
            if (password.value == control.value){
                return null;
            }else{
                return {'passwordError' : {value : 'Las contraseñas no coinciden'}};
            }
        }
    } */

    static checkPasswords(group: FormGroup) { 
        console.log(group);
        let pass = group.controls.password.value;
        let confirmPass = group.controls.verifyPassword.value;
      
        return pass === confirmPass ? null : { notSame: true }
      }

      static checkName(group : FormGroup){
          
          let name = group.controls.email.value;
          if (name && name.length < 3){
            console.log('hola');
              return {shortName : true}
          }else{
              null;
          }
      }

}
