import { BaseApi } from './base.api';
import { UserModel } from '@lib/models/user/user.model';

export const UserService = (api:BaseApi) => {
  
  const getUser = () => {
    return api.get<UserModel[]>("/user")
  };

  return {
    getUser
  }
}
