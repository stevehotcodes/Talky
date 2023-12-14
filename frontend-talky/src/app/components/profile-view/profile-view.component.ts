import { Component } from '@angular/core';
import { ViewProfileComponent } from '../view-profile/view-profile.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent {
  constructor(private matDialog:MatDialog){}

  openDialog(){
    this.matDialog.open(ViewProfileComponent,{
      width:'500px'
    })
  }

}
