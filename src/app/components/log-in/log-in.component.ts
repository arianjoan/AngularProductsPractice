import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }
  user: User = new User();
  userGroup: FormGroup;

  ngOnInit() {
    this.userGroup = this.formBuilder.group({
      email: [this.user.email, Validators.required],
      password: [this.user.password, Validators.required]
    }
    )
  }

  logIn() {
    this.user = this.userGroup.value;
    this.userService.logIn(this.user).subscribe((token) => {  
      localStorage.setItem('token',token.jwt);
    })
  }



}
