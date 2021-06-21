import { Token } from 'src/models/token';
import { BaseRequest, BaseResponse } from './base';

export interface SignInRequest extends BaseRequest {
  email: string;
  password: string;
}

export interface SignInResponse extends BaseResponse {
  data: Token;
}
