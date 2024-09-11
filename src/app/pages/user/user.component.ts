import { Component } from '@angular/core';
import { UserModel } from '@lib/models/user/user.model';
import { UserService } from '@lib/services/user/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  providers: [],
})
export class UserComponent {
  listUser: UserModel[] = [];
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUser();
    this.userService.listUser.subscribe((value) => {
      this.listUser = value;
    });
  }
}
