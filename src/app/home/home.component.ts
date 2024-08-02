import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public usuario: string = '';
  public password: string = '';
  public isVisible: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irLogin() {
    this.isVisible = false;
    if (this.usuario === '' || this.password == '') {
      this.isVisible = true
      this.showAlert();
    } else if (this.usuario === 'adrian') {
      this.isVisible = false;
      this.router.navigate(['inicio']);
    } else {
      this.isVisible = true
      this.showAlert();
    }
  }

  showAlert(): void {
    if (this.isVisible) {
      return;
    }
    this.isVisible = true;
    setTimeout(() => this.isVisible = false, 2500)
  }


}
