import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logo = "../assets/logo.png"
  href: string | undefined;

  constructor(
    public router: Router,
  ) {
  }

  closeNav() {
    const navbarToggle = document.querySelector(
      '[data-collapse-toggle="navbar-dropdown"]'
    ) as HTMLElement;
    navbarToggle.click();
  }

}
