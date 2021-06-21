import axios from 'axios';
import { Key } from 'src/constants/key';
import { SignInRequest, SignInResponse } from 'src/models/reqres/signIn';
import { SignUpRequest, SignUpResponse } from 'src/models/reqres/signUp';
import { SignOutRequest, SignOutResponse } from 'src/models/reqres/signOut';
import { cookie } from 'src/utils/cookie';

class AuthService {
  async signIn(request: SignInRequest): Promise<SignInResponse> {
    cookie.setItem(Key.ACCESS_TOKEN, 'dsd');
    return {
      status: 200,
      data: { token: '' },
    };
  }
  async signUp(request: SignUpRequest): Promise<SignUpResponse> {
    return {
      status: 200,
    };
  }
  async signOut(request: SignOutRequest): Promise<SignOutResponse> {
    cookie.removeItem(Key.ACCESS_TOKEN);
    return {
      status: 200,
    };
  }

  isSignedIn(): boolean {
    const token = cookie.getItem(Key.ACCESS_TOKEN);
    return !!token;
  }
}

export const authService = new AuthService();
