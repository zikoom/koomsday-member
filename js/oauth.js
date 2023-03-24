const fs = require('fs');
const path = require('path');
const {google} = require('googleapis');
const oauthJsonPath = path.resolve(__dirname, '../', './secret', '__client_secret.json');

const {web} = JSON.parse(fs.readFileSync(oauthJsonPath))
const {client_id, client_secret, redirect_uris} = web;

console.log('redirect_uris: ', redirect_uris);



const oauth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris
);

const scopes = [
  'https://www.googleapis.com/auth/userinfo.profile'
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