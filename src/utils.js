import { getEnv } from './apolloClient';

// check if valid url
export const isValidURL = (url: string) => {
  try {
    return Boolean(new URL(url));
  } catch (e) {
    return false;
  }
};

/**
 * Request to get file's URL for view and download
 * @param {String} - value
 * @return {String} - URL
 */
export const readFile = (value: string): string => {
  const { REACT_APP_API_URL } = getEnv();

  if (!value || isValidURL(value) || value.includes('/')) {
    return value;
  }

  return `${REACT_APP_API_URL}/read-file?key=${value}`;
};