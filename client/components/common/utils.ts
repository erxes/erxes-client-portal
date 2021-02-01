export const imgSrc = (src: string) => {
  if (src.indexOf('http') === 0) return src;

  return `http://localhost:3300/read-file?key=${src}`;
};
