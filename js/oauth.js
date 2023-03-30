const fs = require('fs');
const path = require('path');
const {google} = require('googleapis');
const oauthJsonPath = path.resolve(__dirname, '../', './secret', 'client_secret.json');

const {web} = JSON.parse(fs.readFileSync(oauthJsonPath))
const {client_id, client_secret, redirect_uris} = web;


/**
 * redirect_uris: 테스트를 위한 localhost 용도의 redirect_url과 실제 배포된 사이트를 위한 redirect_url을 배열로 가지고있다
 */

const get_PATH_TYPE = () => {
  if(global._PATH_TYPE === 'DEV'){
    return  redirect_uris.find(el => el.includes('localhost:9898'));
  }
  else if(global._PATH_TYPE === 'LIVE'){
    return  redirect_uris.find(el => el.includes('koomsday'))
  } else {
    return null;
  }
}

const redirect_url = get_PATH_TYPE();
console.log('redirect_url: ', redirect_url);


const oauth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_url
);

const scopes = [
  'https://www.googleapis.com/auth/userinfo.profile',
  // 'openid'
];


/**
 *
 * async function
 */
const getAuthURL = () => {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    include_granted_scopes: true
  })
}

module.exports.oauth2Client = oauth2Client;
module.exports.getAuthURL = getAuthURL;
