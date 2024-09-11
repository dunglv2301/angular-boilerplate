import { Injectable } from '@angular/core';
import { BaseApi } from '@lib/apis/base.api';
import { LogicUser } from '@lib/logic/user/user.logic';
import { UserModel } from '@lib/models/user/user.model';
import { BehaviorSubject } from 'rxjs';
/**
 * API Class
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUser = new BehaviorSubject<UserModel[]>([]);

  logicUser;

  constructor(private baseApi : BaseApi) {
    this.logicUser = LogicUser(this.baseApi)
  }
  
  async getUser() {
    const data = await this.logicUser.handleGetUser();
    if(!data) return;
    this.listUser.next(data) 
  }
}
