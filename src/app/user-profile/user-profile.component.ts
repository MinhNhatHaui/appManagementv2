import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user-test.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public users: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getList().subscribe(
      (response: any) => {
        this.userService = response;
      }
    )

  }

}
