import { Key } from 'src/constants/key';
import { SignInRequest, SignInResponse } from 'src/models/reqres/signIn';
import { SignUpRequest, SignUpResponse } from 'src/models/reqres/signUp';
import { SignOutRequest, SignOutResponse } from 'src/models/reqres/signOut';
import { cookie } from 'src/utils/cookie';
import { apiClient } from './apiClient';
import { Endpoint } from 'src/configs/endpoint';

class AuthService {
  async signIn(request: SignInRequest): Promise<any> {
    const result = await apiClient.post(Endpoint.SIGN_IN, request);
    const response: SignInResponse = result.data;

    cookie.setItem(Key.ACCESS_TOKEN, response.access_token);
    return result;
  }

  async signUp(request: SignUpRequest): Promise<any> {
    const result = await apiClient.post(Endpoint.SIGN_UP, request);
    const response: SignUpResponse = result.data;

    cookie.setItem(Key.ACCESS_TOKEN, response.access_token);
    return result;
  }

  async signOut(request: SignOutRequest): Promise<SignOutResponse> {
    cookie.removeItem(Key.ACCESS_TOKEN);
    return {
      status: 200,
    };
  }

  isSignedIn(): boolean {
    const accessToken = cookie.getItem(Key.ACCESS_TOKEN);
    return !!accessToken;
  }
}

export const authService = new AuthService();
