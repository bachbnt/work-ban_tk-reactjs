import { UserRole } from './userRole';

export interface User {
  _id: string;
  username: string;
  email: string;
  phone: string;
  role: UserRole;
}
