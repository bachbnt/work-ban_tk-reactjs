import Cookies from 'universal-cookie';

class Cookie {
  private cookies = new Cookies();

  setItem(key: string, value: any) {
    this.cookies.set(key, value, { path: '/' });
  }

  getItem(key: string): any {
    return this.cookies.get(key);
  }

  hasItem(key: string): boolean {
    return !!this.cookies.get(key);
  }

  removeItem(key: string) {
    this.cookies.remove(key);
  }
}

export const cookie = new Cookie();
