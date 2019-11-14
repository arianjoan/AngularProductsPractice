import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CustomValidators } from 'src/app/models/customValidators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formUser: FormGroup;
  user: User = new User();

  constructor(private userService: UserService, private formBuilder: FormBuilder) {

    this.formUser = this.formBuilder.group({
      'email': [this.user.email],
      'password' : [this.user.password],
      'verifyPassword' : '',
    },{validator : [CustomValidators.checkPasswords,CustomValidators.checkName]})

  }

ngOnInit() {
}

}
