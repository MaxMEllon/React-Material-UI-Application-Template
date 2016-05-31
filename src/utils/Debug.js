import debug from 'debug';

debug.enable('AppTemplate:*');

export default function Debug(label) {
  return debug(`AppTemplate:${label}`);
}

window.onerror = (message, url, line) => {
  const error = { message, url, line };
  console.error('Error %o', error);
};
