export default function config(uiGmapGoogleMapApiProvider, $translateProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDgSvUrtmsNLkoaK1mYlyU3eVbByMlE4w4',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });

    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/i18n/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
}

config.$inject = ['uiGmapGoogleMapApiProvider', '$translateProvider'];
