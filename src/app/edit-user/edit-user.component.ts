import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../_models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit {

  userId: any
  user:User
  route: ActivatedRoute
  http: HttpClient

  constructor(route:ActivatedRoute, http:HttpClient){
    this.userId = ''
    this.user=new User()
    this.route = route
    this.http = http
  }
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.http.get<User>('https://dummyjson.com/users/'+param['id']).subscribe(resp =>{
      this.user.id=resp.id
      this.user.firstName=resp.firstName
      this.user.lastName=resp.lastName
      this.user.age=resp.age
      this.user.gender=resp.gender
      this.user.email=resp.email
      this.user.phone=resp.phone
      this.user.username=resp.username
      this.user.birthDate=resp.birthDate
      this.user.password=resp.password
      this.user.image=resp.image

      },
      error => {
        console.error('Error happened!',error)
      }
      )
    })
  }


}
