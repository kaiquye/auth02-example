import { IHttpRequest, IHttpResponse } from '../../../../../utils/adapters/httpAdapter';
import { createUserServices } from '../../../../../provider/container/dependecies';

class UserController {
  async create(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const create = createUserServices;
    const response = await create.execute('');

    return {
      status: 201,
      json: response,
    };
  }
}

export default new UserController();