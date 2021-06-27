import { User } from '../user';
import { BaseRequest, BaseResponse } from './base';

export interface SignUpRequest extends BaseRequest {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export interface SignUpResponse extends BaseResponse {
  access_token: string;
  user: User;
}
