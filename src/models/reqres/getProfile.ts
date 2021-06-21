import { User } from 'src/models/user';
import { BaseRequest, BaseResponse } from './base';

export interface GetProfileRequest extends BaseRequest {}

export interface GetProfileResponse extends BaseResponse {
  data: User;
}
