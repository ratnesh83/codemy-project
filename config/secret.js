module.exports = {
    database: 'mongodb://codemy:lomesh12504@ds219532.mlab.com:19532/codemy',
    port: 8080,
    secretKey: 'ratnesh12504',

    facebook:{
        clientID:'2245942315478141',
        clientSecret:'c3360776cfa32a172cb2aa5f55101c50',
        callbackURL:'https://localhost:8080/auth/facebook/callback',
        profileFields:['emails','displayName']
    }
}