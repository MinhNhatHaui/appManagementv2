import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user-test.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getList().subscribe(
      (response: any) => {
        this.users = response;
        console.log(response);
      }
    )

  }
}
