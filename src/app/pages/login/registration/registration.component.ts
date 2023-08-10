import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';


export interface CodigoBancoApi {
	fullName: string;
	code?: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
	stepper: number = 0;
  passwordVisible = false
	optionsFourth: CodigoBancoApi[] = [];
	filteredFourthOptions!: Observable<CodigoBancoApi[]>;
  _form_data!: FormGroup
  _form_register!: FormGroup
  _form_address!: FormGroup
  _form_job!: FormGroup
  _form_bank!: FormGroup
  _form_email!: FormGroup
typeAcc = ['Corrente', 'Poupança']
formPay =  ['Boleto', ]


  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private snackbar: MatSnackBar
    ) { }
genero = ['Masculino', 'Feminino' ]
pixTypes = ['Chave aleatória', 'CPF/CNPJ', 'E-mail', 'Telefone'];




  ngOnInit(): void {

    this._form_data = this.formBuilder.group({
      cpfCnpj: [''],
      nomeColaborador: [''],
      dataNascimento: [''],
      situacaoCadastral: [''],
      telefone: [''],
      genero: [false]
    })
    this._form_register =this.formBuilder.group({
      profissao: [''],
      outra: ['']
    })  
      this._form_address = this.formBuilder.group({
        cep: [''],
        endereco: ['', Validators.required],
        bairro: [''],
        cidade: [''],
        estado: [''],
      })  
 
      this._form_bank = this.formBuilder.group({
        tipoConta: [''],
        formaPagamento: [''],
        banco: [''],
        AgenciaBancaria: [''],
        ContaBancaria: [''],
        PIX: [''],
        ChavePix: [''],
    
      })  
     
      this._form_email = this.formBuilder.group({
        email: [''],
        senha: [''],
        bitAccept: [false],
    
      })  
    



    this.filteredFourthOptions =
    this._form_bank.controls['banco'].valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.nome)),
      map(nome =>
        nome ? this._filterFourth(nome) : this.optionsFourth.slice()
      )
    );

  }


  
  displayFnFourth(nome: CodigoBancoApi): string {
    return String(nome);
  }
	_filterFourth(nome: string): CodigoBancoApi[] {
		const filterValue = nome.toLowerCase();
		return this.optionsFourth.filter(
			option => option.fullName.toLowerCase().indexOf(filterValue) === 0
		);
	}
  returnCep(): void {
    let {cep, endereco, bairro, cidade, estado} = this._form_address.controls
  this.loginService.returnCep(cep.value).subscribe(
  (response: any) => {

    endereco.setValue(response.logradouro)
    bairro.setValue(response.bairro)
    cidade.setValue(response.localidade)
    estado.setValue(response.uf)

  }
  )
  }


  returnBanc() {
    this.loginService.returnBanco().subscribe(
      (response: any) => {
        this.optionsFourth = [...response]
        console.log(response)
      }
    )
  }

  submit() {
    let { controls: f0} = this._form_data;
    let {controls:f1} = this._form_register;
    let {controls:f2} = this._form_address;
    let {controls:f3} = this._form_bank;
    let {controls:f4} = this._form_email;
    
    let body = {
      cpfCnpj: f0['cpfCnpj'].value || null,
      nomeColaborador: f0['nomeColaborador'].value,
      situacaoCadastral: f0['situacaoCadastral'].value,
      dataNascimento: f0['dataNascimento'].value,
      telefone: f0['telefone'].value,
      genero: f0['genero'].value ? 1 : 0,
      
      profissao: f1['profissao'].value,
      outra: f1['outra'].value,

      cep: f2['cep'].value,
      endereco: f2['endereco'].value,
      bairro: f2['bairro'].value,
      cidade: f2['cidade'].value,
      estado: f2['estado'].value,

      tipoConta: f3['tipoConta'].value,
      formaPagamento: f3['formaPagamento'].value ? 1 : 0,
      banco: f3['banco'].value,
      AgenciaBancaria: f3['AgenciaBancaria'].value,
      ContaBancaria: f3['ContaBancaria'].value,
      PIX: f3['PIX'].value,
      ChavePix: f3['ChavePix'].value,


      email: f4['email'].value,
      senha: f4['senha'].value,
      bitAccept: f4['bitAccept'].value,

    }

    this.loginService.registration(body).subscribe(
      (response: any) => {
        this.snackbar.open('Usúario cadastrado com sucesso', 'OK',{
          duration:2000,
        })
      }, error => {
        this.snackbar.open('Erro ao cadastrar usúario, preencha os campos corretamente!', 'Fechar', {
          duration:2000,
        })
      }
    )

    console.log(body)


  }

  


  return () {
    this.stepper = this.stepper -1
  }

}
