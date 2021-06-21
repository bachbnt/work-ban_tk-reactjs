import { toast as toastify, ToastContent } from 'react-toastify';

class Toast {
  success(content: ToastContent) {
    return toastify.success(content);
  }
  warn(content: ToastContent) {
    return toastify.warn(content);
  }
  error(content: ToastContent) {
    return toastify.error(content);
  }
  info(content: ToastContent) {
    return toastify.info(content);
  }
}

export const toast = new Toast();
