const googleServiceAccount = require('./google-service-account.json')
const jwt = require('jsonwebtoken')

function main() {
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