import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../_models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.scss'
})
export class SearchUserComponent implements OnInit {

    http: HttpClient
    users : Array<any>
    route : ActivatedRoute
    user: any

    constructor(http:HttpClient, route: ActivatedRoute){
      this.http=http
      this.route = route
      this.user = undefined
      this.users = []
    }


  ngOnInit(): void {
    this.route.params.subscribe(param => {
      let searchedUserName = param['username']

      this.http.get<any>('https://dummyjson.com/users')
      .subscribe(
        resp => {
          this.users= resp.users

          this.user = this.users.find(x => 
            x.firstName.toUpperCase() === searchedUserName.toUpperCase() ||
            x.lastName.toUpperCase() === searchedUserName.toUpperCase() || 
            x.username.toUpperCase() === searchedUserName.toUpperCase()
            

            )
        }, err => console.log(err)
      )




    })
  }

  public userLoaded() : boolean{
if(this.user === undefined){
  return false

}
else{
  return true
}
  }

  public getProperties(){
    let s : Array<any> = [

    ]
    Object.entries(this.user).forEach(([key,value])=>{
      s.push(`${key}: ${value}`)
    })
    return s
  }

}
