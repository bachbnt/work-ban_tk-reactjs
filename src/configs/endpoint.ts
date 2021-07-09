export class Endpoint {
  static readonly BASE_URL = 'http://localhost:8080';
  static readonly SIGN_IN = '/auth/login';
  static readonly SIGN_UP = '/auth/register';
  static readonly SIGN_OUT = '';
  static readonly RESEND_EMAIL = '/users/verify/resend-email';
  static readonly VERIFY_EMAIL = '/users/verify';
  static readonly HTML = '/html';
  static readonly CATEGORY = '/category';
  static readonly COUNTRY = '/country';
  static readonly BANK = '/admin/bank-info';
  static readonly HISTORY = '/payment/histories';
  static readonly BUY = '/product/buy';
  static readonly PRODUCT = '/product';
  static readonly USERS = '/users';
  static readonly ADD_MONEY = '/users/{id}/add-money';
  static readonly CUT_MONEY = '/users/{id}/cut-money';
}
