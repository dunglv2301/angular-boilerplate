import { BaseApi } from '@lib/apis/base.api';
import { UserApi } from '@lib/apis/user.api';

export const UserLogic = (baseApi: BaseApi) => {

  const { getUser } = UserApi(baseApi);

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
