import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../_models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent {

  http: HttpClient
  users: Array<User>

  constructor(http: HttpClient){
    this.http= http
    this.users = []
    this.getAllUsers()
  }

  public formatPhoneNumber(number:string) : string{
    return number.replaceAll(' ', '-')
  }

  private getAllUsers(){
    this.http.get<any>('https://dummyjson.com/users').subscribe(resp =>{
      
      resp.users.map((x:any)=> {
        let u = new User()
        u.id = x.id
        u.firstName = x.firstName 
        u.lastName = x.lastName
        u.age = x.age
        u.gender = x.gender
        u.email = x.email
        u.phone = x.phone
        u.password = x.password
        u.username = x.username
        u.birthDate = x.birthDate
        u.image = x.image

        this.users.push(u)
      })
    })
  }

}
