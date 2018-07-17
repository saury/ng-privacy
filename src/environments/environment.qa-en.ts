const env = '-qa';
const postFix = 'com';

const baseUrl = `https://e1svc${env}.ef.${postFix}/api/v2/PrivacyPolicy/`;
const getUrl = `${baseUrl}PrivacyPolicyDocuments/`;
const postUrl = `${baseUrl}StudentPrivacyPolicyAgreement/`;

export const environment = {
  production: true,
  getUrl,
  postUrl,
};
