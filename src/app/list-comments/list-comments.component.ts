import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../_models/comment';
import { User } from '../_models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { generate } from 'rxjs';

@Component({
  selector: 'app-list-comments',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './list-comments.component.html',
  styleUrl: './list-comments.component.scss'
})
export class ListCommentsComponent implements OnInit {

  orderbyDescending:boolean
  http:HttpClient
  comments : Array<Comment>
  

  constructor(http:HttpClient){
    this.http = http
    this.comments = []
    this.orderbyDescending= false
    

  }
  ngOnInit(): void {
    this.http.get<any>('https://dummyjson.com/comments').subscribe(
      resp => {
        resp.comments.map((x:any) =>{

          let c = new Comment()

          c.id = x.id
          c.body = x.body
          c.postId = x.postId
          c.user = new User()
          c.user.id = x.user.id
          c.user.username = x.user.username
          c.user.image =this.generateRandomAvatar()

          this.comments.push(c)
        })
        
      }
    )

  }

  private generateRandomAvatar() : string{

   let index= Math.floor(Math.random()*53)
   return `https://xsgames.co/randomusers/assets/avatars/pixel/${index}.jpg`
  }

  public likeComment(comment:Comment){
    this.comments.find(x=> x.id === comment.id)!.likeCounter++

  }
  public dislikeComment(comment:Comment){
    this.comments.find(x=> x.id === comment.id)!.likeCounter--
  }

  public orderByLikeNumber(){
    if(this.orderbyDescending)
    {
      this.comments.sort((a:Comment, b:Comment) => a.likeCounter-b.likeCounter)
    }
    else{
      this.comments.sort((a:Comment, b:Comment) => b.likeCounter-a.likeCounter)

    }
    this.orderbyDescending = !this.orderbyDescending
  }
}
