import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { SentEmailComponent } from './sent-email/sent-email.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordVisible = false
  _form!: FormGroup



  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private loginService: LoginService,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {

    this._form = this.formBuilder.group({
      email: ['', Validators.email],
      password:['',],

    })
  }

  submitLogin() {
    let body = 
      {
        email: this._form.controls['email'].value,
        senha: this._form.controls['password'].value
      }
    

    this.loginService.acessLogin(body).subscribe(
      (response: any) => {

        console.log(response)
        this.snackBar.open('Redirecionando para página', 'OK', {
          duration: 2000
        })
    }, 
    error => {
      this.snackBar.open('Dados não encontrados', 'Fechar', {
        duration: 2000
      })
    })
  

  }
  openDialogRegister() : void {
    const dialog = this.dialog.open(RegistrationComponent, {
      width: '514px',
      height: '615px'
    })
  }

  openDialog() : void {
    const dialog = this.dialog.open(ForgetPasswordComponent, {
      width: '400px',
    })
  }
  openDialogSent() : void {
    const dialog = this.dialog.open(SentEmailComponent, {
      width: '400px',
    })
  }


}
