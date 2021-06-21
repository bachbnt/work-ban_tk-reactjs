import { BaseRequest, BaseResponse } from './base';

export interface ChangePasswordRequest extends BaseRequest {
  currentPassword: string;
  password: string;
}

export interface ChangePasswordResponse extends BaseResponse {}
