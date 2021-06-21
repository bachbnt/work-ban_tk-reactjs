import { BaseRequest, BaseResponse } from './base';

export interface ForgotPasswordRequest extends BaseRequest {
  email: string;
}

export interface ForgotPasswordResponse extends BaseResponse {}
