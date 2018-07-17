// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const env = '-qa';
const postFix = 'cn';

const baseUrl = `https://e1svc${env}.ef.${postFix}/api/v2/PrivacyPolicy/`;
const getUrl = `${baseUrl}PrivacyPolicyDocuments/`;
const postUrl = `${baseUrl}StudentPrivacyPolicyAgreement/`;

export const environment = {
  production: false,
  getUrl,
  postUrl
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
