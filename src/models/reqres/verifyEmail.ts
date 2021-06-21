import { BaseRequest, BaseResponse } from './base';

export interface VerifyEmailRequest extends BaseRequest {
  code: string;
}

export interface VerifyEmailResponse extends BaseResponse {}
