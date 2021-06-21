import { BaseRequest, BaseResponse } from './base';

export interface VerifyEmail extends BaseRequest {
  code: string;
}

export interface VerifyEmail extends BaseResponse {}
