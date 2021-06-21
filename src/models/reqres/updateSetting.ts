import { UserSetting, UserTheme, UserLocale } from 'src/models/userSetting';
import { BaseRequest, BaseResponse } from './base';

export interface UpdateSettingRequest extends BaseRequest {
  userTheme?: UserTheme;
  userLocale?: UserLocale;
}

export interface UpdateSettingResponse extends BaseResponse {
  data: UserSetting;
}
