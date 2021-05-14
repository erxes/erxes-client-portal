import { Config } from "../types";
import { urlParser } from "../utils";

export const imgSrc = (src: string) => {
  if (src.indexOf("http") === 0) return src;

  return `http://localhost:3300/read-file?key=${src}`;
};

/**
 * Generate random string
 */
export const generateRandomString = (len: number = 10) => {
  const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  let randomString = "";

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

export const getValue = (name) => {
  const element = getSelector(name);

  if (element) {
    return element.value;
  }

  return "";
};

export const getConfigColor = (config: Config, key: string) => {
  if (!config.styles) {
    return null;
  }

  return config.styles[key];
};

// get env config from process.env or window.env
export const getEnv = (): any => {
  const envs = {};

  for (const envMap of (window as any).envMaps) {
    envs[envMap.name] = localStorage.getItem(`erxes_env_${envMap.name}`);
  }

  return envs;
};

/**
 * Request to get file's URL for view and download
 * @param {String} - value
 * @return {String} - URL
 */
export const readFile = (value: string): string => {
  if (!value || urlParser.isValidURL(value) || value.includes("/")) {
    return value;
  }

  const { REACT_APP_API_URL } = getEnv();

  return `${REACT_APP_API_URL}/read-file?key=${value}`;
};
