import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  baseUrl:string=`http://localhost:3400/comments`
  // POST  http://localhost:3400/comments/new/f77fc740-d15d-4745-830e-4df91efc568

  constructor(private http:HttpClient) { }

  addComment(id:string,commentContent:string){
   return  this.http.post(this.baseUrl +`/new/${id}`,{commentContent})

  }
}
