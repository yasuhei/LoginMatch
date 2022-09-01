import { Component,AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



interface SwiperConfig {
	direction: string;
	loop: boolean;
	slidesPerView: number;
}

declare class Swiper {
	constructor(element: string, config: SwiperConfig);
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit , OnInit {
	swiper!: Swiper;
	formulario!: FormGroup;
	hearts = false


	figures =  [
		{
			img:'/assets/slide/img1.png',
			name: 'Pedro Henrique Neves',
			type: 'Projeto Banheiro Wood',
			hearts: false


		},
		{
			img:'/assets/slide/img2.png',
			name: 'Luiza Melo Silveira',
			type: 'Projeto Área de Lazer',
			hearts: false


		},
		{
			img:'/assets/slide/img3.png',
			name: 'Gustavo Pereira Inácio',
			type: 'Projeto Sala de Estar',
			hearts: false


		},
		{
			img:'/assets/slide/img4.png',
			name: 'Eliana Fontaneli',
			type: 'Projeto Welcome',
			hearts: false


		},

	]



  constructor(
	private formBuilder: FormBuilder
  ) { }



	ngAfterViewInit(): void {
		this.swiper = new Swiper('.swiper', {
			direction: 'horizontal',
			loop: false,
			slidesPerView: 1.3
		});

	}

ngOnInit() {

	this.formulario = this.formBuilder.group(
		{
			Name: [null, Validators.required],
			Telefone: [null, Validators.required],
			Email: [null, Validators.email]
			
		}
	  )

}



}
