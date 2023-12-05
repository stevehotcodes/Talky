import { Component } from '@angular/core';
import { PostCreateComponent } from './components/post-create/post-create.component';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-talky';


  constructor(private matDialog:MatDialog){}

  openDialog(){
    this.matDialog.open(PostCreateComponent,{
      width:'350px',
      
    });
    
  }
}
