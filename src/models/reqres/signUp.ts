import { Token } from 'src/models/token';
import { BaseRequest, BaseResponse } from './base';

export interface SignUpRequest extends BaseRequest {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface SignUpResponse extends BaseResponse {
  data: Token;
}
