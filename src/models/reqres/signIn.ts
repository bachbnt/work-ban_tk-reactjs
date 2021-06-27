import { User } from '../user';
import { BaseRequest, BaseResponse } from './base';

export interface SignInRequest extends BaseRequest {
  username: string;
  password: string;
}

export interface SignInResponse extends BaseResponse {
  access_token: string;
  user: User;
}
