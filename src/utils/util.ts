export class Util {
  formatString(value: string, variables: any) {
    if (!value) {
      return '';
    }

    return value.replace(/(\{\w+\})|(:\w+)/g, (match: any) => {
      return variables[match.replace(/\{|\}|:/g, '')] || '';
    });
  }
}

export const util = new Util();
