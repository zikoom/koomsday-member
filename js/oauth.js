const fs = require('fs');
const path = require('path');
const {google} = require('googleapis');

// const oauthJsonPath = path.resolve(process.cwd(), 'secret', 'client_secret.json');
const oauthJsonPath = path.resolve(process.cwd(), 'secret', '__client_secret.json');
console.log('oauthJsonPath: ',oauthJsonPath);
console.log('process.cwd(): ', process.cwd())

// const {installed} = JSON.parse(fs.readFileSync(oauthJsonPath))
// const {client_id, client_secret, redirect_uris} = installed;
const {web} = JSON.parse(fs.readFileSync(oauthJsonPath))
const {client_id, client_secret, redirect_uris} = web;


const oauth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris
);

const scopes = [
  'https://www.googleapis.com/auth/userinfo.profile'
];

const getAuthURL = () => {
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    include_granted_scopes: true
  })
}

module.exports.oauth2Client = oauth2Client;
module.exports.getAuthURL = getAuthURL;