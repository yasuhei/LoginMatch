import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
_form!: FormGroup
  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {

    this._form = this.formBuilder.group({
      email: ['', Validators.email],
      password:['',],

    })
  }



}
