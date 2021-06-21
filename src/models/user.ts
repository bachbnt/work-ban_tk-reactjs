import { UserRole } from './userRole';
import { UserStatus } from './userStatus';
import { UserSetting } from './userSetting';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatar?: string;
  dateOfBirth?: Date;
  role: UserRole;
  status?: UserStatus;
  setting?: UserSetting;
}
