import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewProfileComponent } from '../view-profile/view-profile.component';

@Component({
  selector: 'app-talkies',
  templateUrl: './talkies.component.html',
  styleUrls: ['./talkies.component.css']
})
export class TalkiesComponent {

  constructor(private matDialog:MatDialog){}

  openDialog(){
    this.matDialog.open(ViewProfileComponent,{
      width:'500px'
    })
  }

}
