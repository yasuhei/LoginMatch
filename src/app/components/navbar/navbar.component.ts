import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	hidden = true;

    constructor(
    ) { }


  ngOnInit(): void {
  }




  nav() {
    const nav = document.querySelector('nav');
    let prevScrollpos = window.pageYOffset;
  
    window.addEventListener('scroll', () => {
      let currentScrollPos = window.pageYOffset;
  
      if(prevScrollpos < currentScrollPos) {
        nav?.classList.add('hide')
      } else {
        nav?.classList.remove('hide')
      }
  
      prevScrollpos = currentScrollPos
    })
    console.log(nav)
  }

}
