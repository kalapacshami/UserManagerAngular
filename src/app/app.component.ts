import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, HttpClientModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'uman';
  username:string=''
  router:Router

  constructor(router:Router){
    this.router= router
  }

  public searchforUser(){
    this.router.navigateByUrl('/search/' +this.username)
    this.username = ''
    
  }
}
