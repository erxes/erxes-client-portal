export const imgSrc = (src: string) => {
  if (src.indexOf('http') === 0) return src;

  return `http://localhost:3300/read-file?key=${src}`;
};

/**
 * Generate random string
 */
export const generateRandomString = (len: number = 10) => {
  const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  let randomString = '';

  for (let i = 0; i < len; i++) {
    const position = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(position, position + 1);
  }

  return randomString;
};

export const isValidUsername = (username: string) => {
  const reg = /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/gim;

  return reg.test(username);
};

const getSelector = (name: string) => {
  return document.querySelector(`[name='${name}']`) as any;
};

export const getValue = name => {
  const element = getSelector(name);

  if (element) {
    return element.value;
  }

  return '';
};
