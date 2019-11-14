import { AbstractControl, ValidatorFn, ValidationErrors, FormGroup, AsyncValidatorFn } from '@angular/forms';
import { UserService } from '../services/user.service';

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

      static checkEmail(userService : UserService) : AsyncValidatorFn{
         return (control : AbstractControl) : Promise<ValidationErrors> | null => {
             console.log('holaa');
             return new Promise((resolve,reject) => {
                 if (! control.value){
                     resolve(null);
                 }
                 userService.userExists(control.value).then((response) => {
                     resolve(null);
                 }).catch((error) => {
                     if (error.status === 409){
                         resolve ({'userExists' : true});
                     }else if (error.status === 204){
                         resolve (null);
                     }
                 })
             });
         }
      }

}
