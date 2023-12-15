import { Component } from '@angular/core';
import { ViewProfileComponent } from '../view-profile/view-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent {
  constructor(private matDialog:MatDialog){}

  openDialog(){
    this.matDialog.open(EditProfileComponent,{
      width:'500px',
      height:"30rem"
    })
  }

}
