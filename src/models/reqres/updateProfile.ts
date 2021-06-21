import { User } from 'src/models/user';
import { BaseRequest, BaseResponse } from './base';

export interface UpdateProfileRequest extends BaseRequest {
  firstName?: string;
  lastName?: string;
  phone?: string;
  dateOfBirth?: Date;
}

export interface UpdateProfileResponse extends BaseResponse {
  data: User;
}
