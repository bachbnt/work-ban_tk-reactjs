export const TOGGLE_SIGN_IN = 'TOGGLE_SIGN_IN';

export interface ToggleSignInDialogAction {
  type: typeof TOGGLE_SIGN_IN;
}

export type SignInDialogAction = ToggleSignInDialogAction;
