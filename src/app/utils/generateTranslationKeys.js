export function generateTranslationKeys(contentKeys, stateName) {
  return contentKeys.reduce((payload, key) => {
    payload[key] = `${stateName}.${key}`;
    return payload;
  }, {});
}
