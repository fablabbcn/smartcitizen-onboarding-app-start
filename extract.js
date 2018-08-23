/* To be able to use es6 modules */
require('babel-register')({
    presets: [ 'env' ],
    ignore: /node_modules\/(?!angular-translate-extract)/,
});


const { extract } = require('angular-translate-extract');
const fs = require('fs');

/* Generate translationKeys.xml for the Extractor from the JSON Wizard */
const wizardStates = JSON.parse(fs.readFileSync('src/app/wizard/wizard.json'));
const keys = [];

wizardStates.forEach(({contentKeys, subStates, stateName}) => {
  if (contentKeys) {
    contentKeys.forEach((key) => {
      keys.push(`<key translate>${stateName}.${key}</key>`);
    });
  } else if (subStates && subStates.length > 0) {
    const parent = stateName;
    subStates.forEach(({contentKeys, stateName}) => {
      contentKeys.map((key) => {
        keys.push(`<key translate>${parent ? parent + '.' : ''}${stateName}.${key}</key>`);
      });
    });
  }
})

fs.writeFileSync('src/assets/i18n/translationKeys.xml', keys.join('\n'));

/* Extract and create the JSONs */

new extract({
  src: [
    'src/assets/i18n/translationKeys.xml',
    'src/app/**/*.js',
    'src/app/**/*.html',
  ],
  lang: ['en', 'es', 'cat'],
  dest: 'src/assets/i18n',
  safeMode: true, // Sometime clean translation
  namespace: true
}, { basePath: '.' })
