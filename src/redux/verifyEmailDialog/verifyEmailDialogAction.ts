export const TOGGLE_VERIFY_EMAIL = 'TOGGLE_VERIFY_EMAIL';

export interface ToggleVerifyEmailDialogAction {
  type: typeof TOGGLE_VERIFY_EMAIL;
}

export type VerifyEmailDialogAction = ToggleVerifyEmailDialogAction;
