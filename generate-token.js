require('dotenv/config')

const developCredential = require('./develop-credential.json')
const stagingCredentials = require('./staging-credential.json')
const productionCredentials = require('./production-credential.json')

const jwt = require('jsonwebtoken')

const credentials = {
  develop: developCredential,
  staging: stagingCredentials,
  production: productionCredentials,
}

function main() {
  var googleServiceAccount = credentials[process.env.NODE_ENV]

  var token = jwt.sign(
    { 
      iss: googleServiceAccount.client_email,
      scope: "https://www.googleapis.com/auth/androidmanagement https://www.googleapis.com/auth/androidenterprise https://www.googleapis.com/auth/androidworkzerotouchemm https://www.googleapis.com/auth/androidworkprovisioning",
      aud: "https://oauth2.googleapis.com/token",
      exp: Date.now() / 1000 + 60,
      iat: Date.now() / 1000
    }, 
    googleServiceAccount.private_key, 
    { algorithm: 'RS256' }
  );

  console.log({ token })
}

main()