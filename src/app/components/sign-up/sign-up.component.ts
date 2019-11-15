import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CustomValidators } from 'src/app/models/customValidators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formUser: FormGroup;
  user: User = new User();

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router : Router) {

    this.formUser = this.formBuilder.group({
      'email': [this.user.email,[],CustomValidators.checkEmail(userService)],
      'password' : [this.user.password],
      'verifyPassword' : '',
    },{validator : [CustomValidators.checkPasswords,CustomValidators.checkName]})
  
  }

ngOnInit() {
}

signUp(){
  this.user = this.formUser.value;
  this.userService.signUp(this.user).subscribe(() => {
    this.router.navigate(['/login']);
  })
}

}
