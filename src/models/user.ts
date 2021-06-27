import { UserRole } from './userRole';

export interface User {
  _id: string;
  isVerified: boolean;
  username: string;
  email: string;
  phone: string;
  balance: number;
  role: UserRole[];
}
