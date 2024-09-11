import { BaseApi } from '@lib/apis/base.api';
import { UserService } from '@lib/apis/user.api';

export const LogicUser = (baseApi: BaseApi) => {

  const { getUser } = UserService(baseApi);

  const handleGetUser = async () => {
    try {
      const data = await getUser();
      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  
  return {
    handleGetUser,
  };
};
